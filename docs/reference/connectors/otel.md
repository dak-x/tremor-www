---
sidebar_label: otel (Open Telemetry)
sidebar_position: 1

---

# The `otel` Connector

This connector adds support for the [CNCF OpenTelemetry](https://opentelemetry.io/) specification
allowing tremor to expose OpenTelemetry capable endpoints and to act as an OpenTelemetry client.

## Configuration

The connector can be configured as a client to a remote OpenTelemetry service, as a
server exposing a gRPC based OpenTelemetry service endpoint - or as a combination of
both depending on use case.

### How do I configure the connector as an OpenTelemetry client?

Configurating as a client to a local or remote OpenTelemetry service:

```tremor title="example.troy"
define connector my_otel from otel_client
with
  config = {
    "url": "127.0.0.1:4317",  # Connect to localhost via gRPC to port 4317

    # Enable trace event support ( default: true )
    # "trace": false,

    # Enable metrics event support ( default: true )
    # "metrics": false,

    # Enable logs event support ( default: true )
    # "logs": false,

    # Enables compression on payloads. ( supported: gzip ; default: none )
    # "compression" : gzip,
  },
  reconnect = {
    "retry": {
      "interval_ms": 100, # Retry on disconnect every 100ms
      "growth_rate": 2,   # Double interval for each attempt
      "max_retries": 3,   # Try no more than 3 times to reconnect
    }
  }
end;
```

### How do I configure the connector as an OpenTelemetry service?

Configurating as a server exposing an OpenTelemetry service to local or remote clients:

```tremor title="example.troy"
define connector my_otelfrom otel_server
with
  config = {
    "url": "127.0.0.1:4317",	# Expose an OpenTelemetry gRPC endpoint on localhost port 4317
  }
end;
```

## Full example - An OpenTelemetry Echo service

We define an echo style service within our integration tests as a validation that the client
and server connectors are fully functional that we run as part of our continuous integration
tests.

The entire echo application is as follows:

```tremor title="config.troy"
# Encapsulation of the server side logic - our otel o11y `echo` service
define flow server
flow
  use integration;
  use tremor::pipelines;
  use tremor::connectors;

  # Expose an otel service on localhost port 4317
  define connector otel_server from otel_server
  with
    config = {
      "url": "127.0.0.1:4317",
    }
  end;

  #  Our application logic
  define pipeline instrument
  into out, exit
  pipeline
    # Forward received OpenTelemetry events
    select event from in into out;
    
    # Quiescence - if the first span in the first item in a trace message
    # has a `http.target` attribute - trigger an exit and stop this test
    select { "exit": 0, "delay": 10 } from in 
    where present event.trace[0].instrumentation_library_spans[0].spans[0].attributes.`http.target`
    into exit;
  end;

  # Instances of connectors to run for this flow
  create connector data_out from integration::write_file;
  create connector exit from integration::exit;
  create connector otels from otel_server;
  create connector stdio from connectors::console;

  # Query pipelines to execute for this flow
  create pipeline echo from instrument;
  create pipeline passthrough from pipelines::passthrough;

  # Echo otel server: <otel:req> -> server -> server_side -> <file>
  connect /connector/otels to /pipeline/echo;
  connect /connector/otels to /pipeline/passthrough;

  # Wire up pipeline outputs to downstream connectors
  connect /pipeline/passthrough to /connector/stdio;
  connect /pipeline/echo to /connector/data_out;
  connect /pipeline/echo/exit to /connector/exit;
end;

# Encapsulation of the client side logic - in a real world application
# the client is more likely going to be via otel instrumentation from
# an opentelemetry instrumented application, or an upstream tremor
# service - perhaps distributing opentelemetry events via other protocols
# or transforming legacy o11y events to otel events
#
define flow client
flow
  use integration;
  use tremor::pipelines;

  define connector otel_client from otel_client
  with
    config = {
      "url": "127.0.0.1:4317",
    },
    reconnect = {
      "retry": {
        "interval_ms": 100,
        "growth_rate": 2,
        "max_retries": 3,
      }
    }
  end;

  # Instances of connectors to run for this flow
  create connector data_in from integration::read_file;
  create connector otelc from otel_client;
  create pipeline replay from pipelines::passthrough;
   
  # Wire up connectors asd pipelines
  connect /connector/data_in to /pipeline/replay;
  connect /pipeline/replay to /connector/otelc;
end;

# Deploy the server flow
deploy flow server;

# Deploy the client flow
deploy flow client;
```

### Running as an integration test

This is how we run this test sceanario within our integration test suite.

```bash
$ export TREMOR_PATH=/path/to/tremor-runtime/tremor-script/lib:/path/to/tremor-runtime/tremor-cli/tests/lib
$ tremor test integration .
```

### Running as long running service

The logic can be used as starting point for your own client or service via `tremor server run`.

```bash
$ export TREMOR_PATH=/path/to/tremor-runtime/tremor-script/lib:/path/to/tremor-runtime/tremor-cli/tests/lib
$ tremor server run config.troy
```

### Running as a long running service, with pretty printed JSON output

During development, pretty printing the JSON output on standard output might be useful.

We typically use the wonderful [`jq`](https://stedolan.github.io/jq/) for this purpose

```bash
$ export TREMOR_PATH=/path/to/tremor-runtime/tremor-script/lib:/path/to/tremor-runtime/tremor-cli/tests/lib
$ tremor server run config.troy | jq
```

### Standard Library

The OpenTelemetry connector ships with a [module](../stdlib/cncf/otel) of convenience functions and
definitions that make working with, consuming and producing OpenTelemetry event streams easier.

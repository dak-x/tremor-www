---
sidebar_label: gbq_writer (Google Big Query)
sidebar_position: 1
---

# The `gbq_writer` Connector

The `gbq_writer` makes it possible to write events to [Google BigQuery](https://cloud.google.com/bigquery) by using its [gRPC] based [storage API v1].


## Configuration

```tremor
use std::time::nanos;

define connector gbq from gbq_writer
with
    config = {
        "table_id": "projects/tremor/datasets/test/tables/streaming_test",
        "connect_timeout": nanos::from_seconds(10),
        "request_timeout: nanos::from_seconds(10)
    }
end;
```

The timeouts are in nanoseconds.

| option             | description                                                                                                      |
|--------------------|------------------------------------------------------------------------------------------------------------------|
| table_id           | The identifier of the table in the format: `projects/{project-name}/datasets/{dataset-name}/tables/{table-name}` |
| connect_timeout    | The timeout in **nanoseconds** for connecting to the Google API                                                  |
| request_timeout    | The timeout in **nanoseconds** for each request to the Google API. A timeout hit will fail the event.            |
| request_size_limit | Size limit (in bytes) for a single AppendRowsRequest. Defaults to the quota documented by Google (10MB)          |

## Metadata
The `$gbq_writer.table_id` field can be set, to send an event to a table other than the one globally configured. A new writestream will be opened per distinct `table_id`.

Example of setting the `table_id` metadata in a script:

```tremor
let $gbq_writer = {
  "table_id": "projects/my_project/datasets/my_dataset/tables/my_table"
};

## Payload structure

The event payload sent to the `gbq_writer` connector needs to be a [`record`](../../language/expressions.md#records) with field names being the table column names
and the values need to correspond to the table schema values.

Tremor values are mapped to Google Bigquery schema types according to the following value mapping. You need to provide the tremor value type on the right to feed a column of the left side.

| Google Bigquery type (gRPC type) | Tremor Value | Format                                                      | Examples                                                |
|----------------------------------|--------------|-------------------------------------------------------------|---------------------------------------------------------|
| Numeric                          | string       | `"X.Y"` (no thousands separator, `.` as decimal point)      | `"0.123"`, `"123.0"`, `"1.234"`                         |
| Bignumeric                       | string       | `"X.Y"` (no thousands separator, `.` as decimal point)      | `"0.123"`, `"123.0"`, `"1.234"`                         |
| Int64                            | integer      |                                                             | `1234`                                                  |
| Double                           | float        |                                                             | `1.234`                                                 |
| Bool                             | bool         |                                                             | `true`, `false`                                         |
| Bytes                            | binary       |                                                             |                                                         |
| String                           | string       |                                                             | `""`, `"badger"                                         |
| Date                             | string       | `"YYYY-[M]M-[D]D"`                                          | `"2015-1-14"`, `2022-09-13`                             |
| Time                             | string       | `"[H]H:[M]M:[S]S[.DDDDDD&#124;.F]"`                         | `"0:1:2"`, `"00:01:02"`, `"00:00:00.000123"`            |
| Datetime                         | string       | `"YYYY-[M]M-[D]D[( &#124;T)[H]H:[M]M:[S]S[.F]]"`            | `"2015-06-13T00:01:02"`, `"2015-06-13T00:01:02.000001"` |
| Geography                        | string       | [OGC Simple Features](https://www.ogc.org/standards/sfa)    |                                                         |
| Interval                         | string       | `"[sign]Y-M [sign]D [sign]H:M:S[.F]"`                       | `+10-0 +D00:01:02`                                      |
| Timestamp                        | string       | `"YYYY-[M]M-[D]D[( &#124;T)[H]H:[M]M:[S]S[.F]][time zone]"` | `"2015-06-13T00:01:02.000001Z"`                         |
| Struct                           | record       |                                                             | `{"a": 123, "b": "c"}`                                  |



### Example

For a table defined like:

```bigquery
CREATE TABLE test (
    id INT64,
    payload STRUCT<a INT64, b INT64>,
    name STRING
)
```

An example event payload would be:

```json
{
  "id": 1234,
  "payload": {"a": 1, "b": 2},
  "name": "Tremor"
}
```

[gRPC]: https://grpc.io/
[storage API]: https://cloud.google.com/bigquery/docs/reference/storage/rpc/google.cloud.bigquery.storage.v1
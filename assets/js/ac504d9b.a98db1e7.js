"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9676],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8339:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"Scripting",description:"Tremor applications- Tremor's application logic is scriptable.",hide_table_of_contents:!1},p=void 0,c={type:"mdx",permalink:"/tremor-new-website/getting-started/scripting",source:"@site/src/pages/getting-started/scripting.md"},l=[{value:"Concept",id:"concept",children:[]},{value:"Tremor Script",id:"tremor-script",children:[]},{value:"Tremor Query",id:"tremor-query",children:[]}],u={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"concept"},"Concept"),(0,o.kt)("p",null,"Tremor supports data processing through a directed acyclic graph-based pipeline or workflow. Pipelines can be configured via a YAML syntax or via a structured query language."),(0,o.kt)("p",null,"Pipelines are a graph of operations through which events are routed depth-first.\nOperations in Tremor pipelines are pluggable and extensible."),(0,o.kt)("p",null,"For applications or algorithms that process one event at a time, such as data cleansing, enrichment, normalisation, validation and transformation, an ETL-focused scripting language can be used to program the application logic."),(0,o.kt)("p",null,"Qualities of service such as batching, bucketing and flushing semantics can be configured into pipelines and data shared between operators through metadata exposed to the scripting language."),(0,o.kt)("p",null,"The Tremor query language replaces the YAML pipeline format with a more intuitive and easier-to-program SQL-like language. The query language adds support for processing windows of events over time to support near-real-time grouping and aggregation."),(0,o.kt)("p",null,"For applications or algorithms that process events over time, such as those calculating summary statistics, aggregating or projecting alternate views or other complex data processing and routing logic, then Tremor query language is a better fit."),(0,o.kt)("p",null,"The query language embeds the scripting language, allowing data-flow or query-oriented logic to co-exist with ETL-oriented logic."),(0,o.kt)("p",null,"Both the query and scripting language are evolving as Tremor is applied to broader production use cases."),(0,o.kt)("h3",{id:"tremor-script"},"Tremor Script"),(0,o.kt)("p",null,"The scripting language supports JSON-like values. A valid JSON value is a valid tremor-script value."),(0,o.kt)("p",null,"Tremor Script adds an expression language that supports unary, binary, comparison and predicate operations with higher-level expressions supporting ",(0,o.kt)("inlineCode",{parentName:"p"},"match")," expressions, ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," comprehensions and ",(0,o.kt)("inlineCode",{parentName:"p"},"patch")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"merge")," expressions."),(0,o.kt)("p",null,"Features relatively unique to tremor-script are structural pattern matching and the recognition of and ability to extract data from microformats typically embedded in event data."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/tremor-script/#match"},"Structural pattern matching")," allows patterns over arbitrarily nested values to be concisely declared with an intuitive syntax."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/tremor-script/#extractors"},"Micro-format Extractors")," allows embedded data conforming to orthogonal formats such as regular expressions in Strings, date/time variants to be conditionally transformed to Tremor internal form and for embedded data to be extracted upon matching."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'define script extract                                # define the script that parses our Apache logs\nscript\n  match {"raw": event} of                            # we use the dissect extractor to parse the Apache log\n    case r = %{ raw ~= dissect|%{ip} %{} %{} [%{timestamp}] "%{method} %{path} %{proto}" %{code:int} %{cost:int}\\\\n| }\n            => r.raw                                 # this first case is hit if the log includes an execution time (cost) for the request\n    case r = %{ raw ~= dissect|%{ip} %{} %{} [%{timestamp}] "%{method} %{path} %{proto}" %{code:int} %{}\\\\n| }\n            => r.raw                                 # the second case is hit if the log does not includes an execution time (cost) for the request\n    default => emit => "bad"\n  end\nend;\n')),(0,o.kt)("p",null,"The full documentation ",(0,o.kt)("a",{parentName:"p",href:"/docs/tremor-script"},"of the language")," and its ",(0,o.kt)("a",{parentName:"p",href:"/docs/tremor-script/functions"},"standard library")," can be found in the ",(0,o.kt)("a",{parentName:"p",href:"/docs"},"Docs"),"."),(0,o.kt)("h3",{id:"tremor-query"},"Tremor Query"),(0,o.kt)("p",null,"Tremor Query builds around ",(0,o.kt)("a",{parentName:"p",href:"#h-script"},"Tremor Script"),", and extends Tremor's capability to not only define scripts but also turn pipeline configuration into development rather then YAML wrestling. In addition to describing pipelines, Tremor Query adds the ability to group and aggregate events."),(0,o.kt)("nav",{class:"tabs","data-component":"tabs"},(0,o.kt)("ul",null,(0,o.kt)("li",{class:"active"},(0,o.kt)("a",{href:"#before"},"Before (YAML)")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"#after"},"After (Tremor Script)")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"#logstash"},"Logstash")))),(0,o.kt)("div",{id:"before"},(0,o.kt)("p",null,"The YAML-based decription is unwieldy and easy to get wrong."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - id: main\n    interface:\n      inputs:\n        - in\n      outputs:\n        - out\n    nodes:\n      - id: runtime\n        op: runtime::tremor\n        config:\n          script: |\n            match {"message": event} of\n              case r = %{ message ~= grok|%{IPORHOST:clientip}\xb7%{USER:ident}\xb7%{USER:auth}\xb7[%{HTTPDATE:timestamp}]\xb7"%{WORD:verb}\xb7%{DATA:request}\xb7HTTP/%{NUMBER:httpversion}"\xb7%{NUMBER:response:int}\xb7(?:-\\|%{NUMBER:bytes:int})\xb7%{QS:referrer}\xb7%{QS:agent}| } => r.message\n              default => drop\n            end\n    links:\n      in: [runtime]\n      runtime: [out]\n'))),(0,o.kt)("div",{id:"after"},(0,o.kt)("p",null,"In trickle script, the configuration becomes a query description based on a ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," statement to transform the data, and a ",(0,o.kt)("inlineCode",{parentName:"p"},"having")," clause to filter events we do not wish to keep."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-trickle"},'select\n  match {"message": event} of\n    case r = %{ message ~= grok|%{IPORHOST:clientip}\xb7%{USER:ident}\xb7%{USER:auth}\xb7[%{HTTPDATE:timestamp}]\xb7"%{WORD:verb}\xb7%{DATA:request}\xb7HTTP/%{NUMBER:httpversion}"\xb7%{NUMBER:response:int}\xb7(?:-\\|%{NUMBER:bytes:int})\xb7%{QS:referrer}\xb7%{QS:agent}| } => r.message\n    default => null\nfrom in into out\nhaving event != null\n'))),(0,o.kt)("div",{id:"logstash"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-logstash"},'filter {\n  grok {\n    match => {\n      "message" => \'%{IPORHOST:clientip} %{USER:ident} %{USER:auth} \\[%{HTTPDATE:timestamp}\\] "%{WORD:verb} %{DATA:request} HTTP/%{NUMBER:httpversion}" %{NUMBER:response:int} (?:-|%{NUMBER:bytes:int}) %{QS:referrer} %{QS:agent}\'\n    }\n  }\n}\n'))),(0,o.kt)("p",null,"The full documentation ",(0,o.kt)("a",{parentName:"p",href:"/docs/tremor-query"},"of the language"),", the ",(0,o.kt)("a",{parentName:"p",href:"/docs/Artefacts/operators"},"special operators"),", and ",(0,o.kt)("a",{parentName:"p",href:"/docs/tremor-query/functions"},"aggregation functions")," can be found in the ",(0,o.kt)("a",{parentName:"p",href:"/docs"},"docs")," ."))}d.isMDXComponent=!0}}]);
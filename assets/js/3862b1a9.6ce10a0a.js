"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[8127],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8392:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={},s=void 0,c={type:"mdx",permalink:"/tremor-new-website/rfcs/0001-remove-actix-from-tremor-runtime",source:"@site/src/pages/rfcs/0001-remove-actix-from-tremor-runtime.md"},u=[{value:"Summary",id:"summary",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Guide-level Explanation",id:"guide-level-explanation",children:[]},{value:"Reference-level Explanation",id:"reference-level-explanation",children:[]},{value:"Drawbacks",id:"drawbacks",children:[]},{value:"Rationale and Alternatives",id:"rationale-and-alternatives",children:[]},{value:"Prior Art",id:"prior-art",children:[]},{value:"Unresolved questions",id:"unresolved-questions",children:[]},{value:"Future possibilities",id:"future-possibilities",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Feature Name: rfc_0001_remove_actix"),(0,a.kt)("li",{parentName:"ul"},"Start Date: 2020-01-20"),(0,a.kt)("li",{parentName:"ul"},"Issue: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tremor-rs/tremor-rfcs/issues/1"},"tremor-rs/tremor-rfcs#0001")),(0,a.kt)("li",{parentName:"ul"},"RFC PR: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tremor-rs/tremor-rfcs/pull/2"},"tremor-rs/tremor-rfcs#0002"))),(0,a.kt)("h1",{id:"remove-actix"},"Remove Actix"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Actix should be replaced with a suitable alternative."),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"The Actix project in its current form has been discontinued."),(0,a.kt)("p",null,"Actix is used within the tremor-runtime for control plane facilities off the critical path, such as hosting the Tremor API and is used in some onramps/offramps."),(0,a.kt)("p",null,"A suitable replacement should be integrated replacing Actix."),(0,a.kt)("h2",{id:"guide-level-explanation"},"Guide-level Explanation"),(0,a.kt)("p",null,"The Tremor REST API uses the actix-web project."),(0,a.kt)("p",null,"The Tremor server uses actix, actix-files actix-cors and actix-web."),(0,a.kt)("p",null,"These projects are discontinued and need suitable replacements."),(0,a.kt)("h2",{id:"reference-level-explanation"},"Reference-level Explanation"),(0,a.kt)("p",null,"REST API use case:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Adopt (tide)","[https://github.com/http-rs/tide]"," for REST and HTTP API purposes.")),(0,a.kt)("p",null,"WebSocket API use case:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Adopt (async-tungstenite)","[https://crates.io/crates/async-tungstenite]",".")),(0,a.kt)("p",null,"Control plane use case:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prefer interceptor interface insulating control plane from transport/data format choices."),(0,a.kt)("li",{parentName:"ul"},"Replace all uses of core actix actors with a suitable alternative."),(0,a.kt)("li",{parentName:"ul"},"Consider channels with event/run loops as an alternative pseudo-actor model."),(0,a.kt)("li",{parentName:"ul"},"Consider (bastion)","[https://docs.rs/bastion]",".")),(0,a.kt)("h2",{id:"drawbacks"},"Drawbacks"),(0,a.kt)("p",null,"Tremor-runtime is a working system and is currently stable."),(0,a.kt)("p",null,"Replacing the control plane, API and websocket facilities will incur some overhead and risk especially regarding differences in actor model implementations and how they interoperate with asynchronous or channel based rust code which Tremor exploits heavily."),(0,a.kt)("h2",{id:"rationale-and-alternatives"},"Rationale and Alternatives"),(0,a.kt)("p",null,"The existing test suites in EQC should be sufficient for API purposes to defend\nagainst regression but no alternative is stable, and there is no guarantee that\ncurrent external frameworks will be supported in the longer term."),(0,a.kt)("p",null,"Actix may yet find alternative maintainers and/or it could be forked and maintained by ourselves, worst case to preserve current investment in the Actix project within Tremor."),(0,a.kt)("p",null,"Actix has an opinionated architecture and implementation which deviates from the goals and needs of Tremor sufficiently that its integration was not without compromise. Revisiting areas of Tremor code currently adopting actix may result in simplification and modernising to current Rust style and idioms based on fully standards-based async rust, which was not available when these facilities were implemented."),(0,a.kt)("h2",{id:"prior-art"},"Prior Art"),(0,a.kt)("p",null,"As above."),(0,a.kt)("h2",{id:"unresolved-questions"},"Unresolved questions"),(0,a.kt)("p",null,"Consider maintenance dynamics of libraries being considered for adoption with a preferential biases for smaller libraries that would be easier to maintain if their maintainership changes looking forward."),(0,a.kt)("h2",{id:"future-possibilities"},"Future possibilities"),(0,a.kt)("p",null,"Generalise on async for all facilities currently integrating Actix and reconsider Tremor runtime, concurrency and other primitives with async rust as an optimising bias."))}d.isMDXComponent=!0}}]);
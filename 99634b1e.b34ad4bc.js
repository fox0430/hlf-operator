(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{85:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return u})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return s}));var n=t(3),o=t(7),a=(t(0),t(99)),c=["components"],u={id:"external-couchdb",title:"Using external CouchDB"},i={unversionedId:"operator-guide/external-couchdb",id:"operator-guide/external-couchdb",isDocsHomePage:!1,title:"Using external CouchDB",description:"If you want to use an external CouchDB, you can use the externalCouchDB parameter in the fabricpeer CRD.",source:"@site/docs/operator-guide/external-couchdb.md",slug:"/operator-guide/external-couchdb",permalink:"/hlf-operator/docs/operator-guide/external-couchdb",editUrl:"https://github.com/hyperledger-labs/hlf-operator/edit/master/website/docs/operator-guide/external-couchdb.md",version:"current",sidebar:"someSidebar1",previous:{title:"Istio set up",permalink:"/hlf-operator/docs/operator-guide/istio"}},p=[],l={toc:p};function s(e){var r=e.components,t=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you want to use an external CouchDB, you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"externalCouchDB")," parameter in the ",Object(a.b)("inlineCode",{parentName:"p"},"fabricpeer")," CRD."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: hlf.kungfusoftware.es/v1alpha1\nkind: FabricPeer\nmetadata:\n  creationTimestamp: null\n  name: org1-peer0\n  namespace: default\nspec:\n# ...more props\n  couchdb:\n    password: couchdb\n    user: couchdb\n    externalCouchDB:\n      enabled: true # "true" to use external couchdb, "false" to have it as a sidecar\n      host: <EXTERNAL_COUCHDB_HOST>\n      port: <EXTERNAL_COUCHDB_PORT>\n# ...more props\n')),Object(a.b)("p",null,"You can change this property at anytime on your peers, but it's recommended to use the sidecar CouchDB, since it makes it easier to create and destroy peers."))}s.isMDXComponent=!0},99:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=l(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(t),b=n,f=s["".concat(c,".").concat(b)]||s[b]||d[b]||a;return t?o.a.createElement(f,u(u({ref:r},p),{},{components:t})):o.a.createElement(f,u({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=b;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
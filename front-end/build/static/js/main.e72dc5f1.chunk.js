(this["webpackJsonpmy-front-end"]=this["webpackJsonpmy-front-end"]||[]).push([[0],{13:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},15:function(e,t,n){e.exports=n(39)},20:function(e,t,n){},21:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(12),r=n.n(c),i=(n(20),n(2)),s=n(13),l=n.n(s),u=(n(21),n(14)),m=n.n(u);var d=function(){var e=Object(a.useState)("fetching users"),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(0),s=Object(i.a)(r,2),u=s[0],d=s[1];return Object(a.useEffect)((function(){m.a.get("/users").then((function(e){c(e.data)}))})),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo"}),o.a.createElement("button",{onClick:function(){return d((function(e){return e+1}))}},"click me"),o.a.createElement("p",{id:"paragraph"},n[u].name)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.e72dc5f1.chunk.js.map
(this.webpackJsonpmatte=this.webpackJsonpmatte||[]).push([[0],{142:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(10),l=n.n(i),r=(n(75),n(76),n(65)),c=n.n(r),s=(n(130),n(22)),m=n.n(s),u=(n(132),n(9)),f=n.n(u),h=(n(136),n(31)),d=n.n(h),g=(n(140),n(47)),p=n.n(g),E=n(69),v=(n(142),n(68)),w=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e},y=["plus","minus","times"],b=n.n(v).a.parse(window.location.search),k=b.name,z=b.max,S=y[0],W=w(2,z),x=w(0,"plus"===S||"times"===S?z-W:W+1);var A=function(){var e=Object(a.useState)(""),t=Object(E.a)(e,2),n=t[0],i=t[1],l=function(e){"back"==e?n.length>0&&i(n.substring(0,n.length-1)):i(n.concat(e))},r=function(e){return e.map((function(e){return o.a.createElement(f.a.Item,{style:{fontSize:17},key:e},o.a.createElement(d.a,{style:{height:"2.5em",lineHeight:"2.5em"},onClick:function(){return l(e)}},e))}))};return o.a.createElement("div",{className:"flex-container"},o.a.createElement("div",{className:"sub-title"},"Dags att r\xe4kna ",k,"!"),o.a.createElement(m.a,{size:"lg"}),o.a.createElement(f.a,null,o.a.createElement(f.a.Item,{style:{fontSize:20,fontWeight:"bold",textAlign:"center"}},W," ","plus"===S?" + ":"minus"===S?" - ":o.a.createElement("span",null," \xd7 ")," ",x),o.a.createElement(f.a.Item,null,o.a.createElement(c.a,{value:n,style:{color:"black"},type:"text",disabled:!0,placeholder:"Svar"})),o.a.createElement(f.a.Item,{style:{textAlign:"center"}},o.a.createElement("img",{style:{height:"5em"},src:"apadapa.png"}))),o.a.createElement(m.a,{size:"lg"}),o.a.createElement(f.a,null,r([1,2,3])),o.a.createElement(m.a,{size:"md"}),o.a.createElement(f.a,null,r([4,5,6])),o.a.createElement(m.a,{size:"md"}),o.a.createElement(f.a,null,r([7,8,9])),o.a.createElement(m.a,{size:"md"}),o.a.createElement(f.a,null,o.a.createElement(f.a.Item,null,o.a.createElement(d.a,{style:{height:"2.5em",lineHeight:"2.5em"},onClick:function(){return l("back")}},o.a.createElement("span",{style:{fontSize:"2em"}},"\u2190"))),r([0]),o.a.createElement(f.a.Item,{style:{fontSize:17}},o.a.createElement(d.a,{style:{height:"2.5em",lineHeight:"2.5em"},onClick:function(){if(n==("plus"===S?W+x:"minus"===S?W-x:W*x)){p.a.info("R\xe4tt!",1,null,!1);var e="times"===(S=y[Math.floor(Math.random()*y.length)])?"6":z;W=w(2,e),x=w(1,"plus"===S?e-W:"minus"===S?W+1:e),i("")}else p.a.info("F\xf6rs\xf6k igen!",1,null,!1)}},o.a.createElement("span",{style:{fontSize:"1em"}},"\u2714")))))},I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/matte",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/matte","/service-worker.js");I?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()},70:function(e,t,n){e.exports=n(157)},75:function(e,t,n){}},[[70,1,2]]]);
//# sourceMappingURL=main.2a76e3af.chunk.js.map
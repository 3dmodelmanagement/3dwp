(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)s=o[u],i[s]&&d.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},s={app:0},i={app:0},r=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-76d5e2a2":"256fccf4"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-76d5e2a2":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-76d5e2a2":"d01c0a14"}[t]+".css",i=c.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.request=a,delete s[t],f.parentNode.removeChild(f),n(r)},f.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(f)}).then(function(){s[t]=0}));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+s+")");r.type=a,r.request=s,n[1](r)}i[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/3dwebsite/docs/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0509":function(t,e,n){},"10a4":function(t,e,n){"use strict";var a=n("23c1"),s=n.n(a);s.a},1931:function(t,e,n){"use strict";var a=n("b4db"),s=n.n(a);s.a},"23c1":function(t,e,n){},"27ee5":function(t,e,n){"use strict";var a=n("3d36"),s=n.n(a);s.a},"2fd3":function(t,e,n){"use strict";var a=n("ed2f"),s=n.n(a);s.a},"3d36":function(t,e,n){},"612a":function(t,e,n){},"75a2":function(t,e,n){},"82ec":function(t,e,n){"use strict";var a=n("612a"),s=n.n(a);s.a},b4db:function(t,e,n){},b5db:function(t,e,n){"use strict";var a=n("0509"),s=n.n(a);s.a},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navigation"),n("router-view")],1)},i=[],r=n("d225"),o=n("308d"),c=n("6bb5"),l=n("4e2b"),u=n("9ab4"),d=n("60a3"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar is-transparent"},[n("div",{staticClass:"navbar-brand"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/",href:""}},[t._v("3D Model Management")]),t._m(0)],1),n("div",{staticClass:"navbar-menu",attrs:{id:"navbar-3dmm"}},[n("div",{staticClass:"navbar-start"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"services"}},[t._v("Services")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"solutions"}},[t._v("Solutions")])],1),n("div",{staticClass:"navbar-end"})])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-burger burger",attrs:{"data-target":"navbarExampleTransparentExample"}},[n("span"),n("span"),n("span")])}],h=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["b"]);h=u["a"]([d["a"]],h);var b=h,p=b,m=n("2877"),g=Object(m["a"])(p,f,v,!1,null,null,null);g.options.__file="Navigation.vue";var _=g.exports,C=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["b"]);C=u["a"]([Object(d["a"])({components:{Navigation:_}})],C);var y=C,j=y,O=Object(m["a"])(j,s,i,!1,null,null,null);O.options.__file="App.vue";var w=O.exports,x=n("8c4f"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AboutTitle"),n("Difference"),n("LongCase1"),n("LongCase2")],1)},S=[],k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section hero is-medium"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container has-text-left"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-half"},[n("h1",{staticClass:"title"},[t._v("\n            Turnkey Solutions Built on Your Building\n            Data\n          ")]),n("h2",{staticClass:"subtitle"},[t._v("\n            Building Information Management on your\n            terms, custom built for your needs.\n          ")])]),n("div",{staticClass:"column is-half"})])])])])}],T=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["b"]);T=u["a"]([d["a"]],T);var M=T,D=M,A=Object(m["a"])(D,k,$,!1,null,null,null);A.options.__file="AboutTitle.vue";var B=A.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container has-text-right"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"is-offset-1 column"}),n("div",{staticClass:"column"},[n("h1",{staticClass:"title"},[t._v("The 3D Model Management Difference")]),n("h2",{staticClass:"subtitle"},[t._v("\n          Leading companies rely on our super-charged\n          workflows to assess, design, build, and manage their spaces\n          from\n          traditional design-bid-build to owner-operator.\n        ")])]),n("div",{staticClass:"is-1 column"})])])])}],W=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["b"]);W=u["a"]([d["a"]],W);var N=W,I=N,F=Object(m["a"])(I,L,P,!1,null,null,null);F.options.__file="Difference.vue";var q=F.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container has-text-left"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"is-offset-1 column"},[n("h1",{staticClass:"title"},[t._v("Simplifying Your Digital Building Assets")]),n("h2",{staticClass:"subtitle"},[t._v("\n                    3DMM provides services, content, and\n                    software for design teams, building owners, and space\n                    operators. Our focus on open formats and interoperability\n                    means our contributions are as close to your existing\n                    operations toolkit as possible. This means less downtime\n                    and\n                    learning curve for your teams.\n        ")])]),n("div",{staticClass:"column"},[n("iframe",{staticClass:"comparison",attrs:{src:"https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=ec2353d8-1870-11e9-9dba-0edaf8f81e27",frameborder:"0"}})]),n("div",{staticClass:"is-1 column"})])])])}],Y=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["b"]);Y=u["a"]([d["a"]],Y);var J=Y,U=J,V=(n("10a4"),Object(m["a"])(U,z,R,!1,null,"78061b84",null));V.options.__file="LongCase1.vue";var H=V.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section hero is-medium"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container has-text-centered"},[n("h1",{staticClass:"title"},[t._v("\n        Discover What 3D Model Management Can Do For\n        Your Organization\n      ")]),n("h2",{staticClass:"subtitle"},[t._v("\n        Companies that outperform in the building industry are able\n        to\n        analyze space in increasingly complex ways. Their ability to\n        generate insights about their fleet and closely track their\n        assets allow them to outmaneuver the competition. Building\n        Information Management is a cornerstone of any modern\n        building\n        business. While architects and engineers have long taken\n        advantage of the coordination benefits of BIM, however\n        cloud-enabled BIM can benefit everyone involved in a\n        building's life cycle, regardless of scale.\n      ")]),n("a",{staticClass:"button is-large is-primary"},[t._v("See what we can do")]),n("a",{staticClass:"button is-large is-light"},[t._v("send us a message")])])])])}],Q=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["b"]);Q=u["a"]([d["a"]],Q);var X=Q,Z=X,tt=(n("fac3"),Object(m["a"])(Z,G,K,!1,null,"28792ada",null));tt.options.__file="LongCase2.vue";var et=tt.exports,nt=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["b"]);nt=u["a"]([Object(d["a"])({components:{AboutTitle:B,Difference:q,LongCase1:H,LongCase2:et}})],nt);var at=nt,st=at,it=Object(m["a"])(st,E,S,!1,null,null,null);it.options.__file="About.vue";var rt=it.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ServicesTitle"),n("Service1"),n("Service2"),n("Service3"),n("Service4")],1)},ct=[],lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ut=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section hero is-medium"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container has-text-left"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-half"},[n("h1",{staticClass:"title"},[t._v("3D Model Management augments, enriches, and automates mission-critical processes and data.")]),n("h2",{staticClass:"subtitle"},[t._v("BIM, digital visualization, AR/VR, and building technology solutions for real estate, architecture, engineering, construction, and physical/digital products. We are not just software developers or technology consultants, but end-users ourselves and understand the pain points of the day-to-day user.")])]),n("div",{staticClass:"column is-half"})])])])])}],dt=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["b"]);dt=u["a"]([d["a"]],dt);var ft=dt,vt=ft,ht=Object(m["a"])(vt,lt,ut,!1,null,null,null);ht.options.__file="ServicesTitle.vue";var bt=ht.exports,pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},mt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container has-text-right"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"is-offset-1 column"}),n("div",{staticClass:"column"},[n("h1",{staticClass:"title"},[t._v("Digital Twins")]),n("h2",{staticClass:"subtitle"},[t._v("Using state of the art laser scanning and photogrammetry technology, we can create digital twins of physical space and objects with millimeter accuracy. Our team will create the 2D and 3D digital solutions to suit your needs.")])]),n("div",{staticClass:"is-1 column"})])])])}],gt=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["b"]);gt=u["a"]([d["a"]],gt);var _t=gt,Ct=_t,yt=(n("27ee5"),Object(m["a"])(Ct,pt,mt,!1,null,"20f10dcc",null));yt.options.__file="Service1.vue";var jt=yt.exports,Ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},wt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container has-text-left"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"is-offset-1 column"},[n("h1",{staticClass:"title"},[t._v("Digital Content Management")]),n("h2",{staticClass:"subtitle"},[t._v("We source and produce the best data enriched model content. It’s one thing to build a library of robust content and another to effectively manage and distribute it. Whether you need intelligent furniture models for super fast layouts or a texture management system for hundreds of digital artists, we have you covered. Our designers and engineers are well versed in producing and managing mission-critical digital content systems at scale.")])]),n("div",{staticClass:"column"}),n("div",{staticClass:"is-1 column"})])])])}],xt=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["b"]);xt=u["a"]([d["a"]],xt);var Et=xt,St=Et,kt=(n("2fd3"),Object(m["a"])(St,Ot,wt,!1,null,"625f113c",null));kt.options.__file="Service2.vue";var $t=kt.exports,Tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Mt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container has-text-right"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"is-offset-1 column"}),n("div",{staticClass:"column"},[n("h1",{staticClass:"title"},[t._v("Process Automation")]),n("h2",{staticClass:"subtitle"},[t._v("Running an efficient studio means hiring top-notch talent without burdening their time with rote manual procedures. From onboarding to excel aggregation, we apply small-scale, high-touch custom solutions to keep teams from getting bogged down in button-pressing and paper pushing. Unleash the full potential of your teams’ talent and supercharge your billables.")])]),n("div",{staticClass:"is-1 column"})])])])}],Dt=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["b"]);Dt=u["a"]([d["a"]],Dt);var At=Dt,Bt=At,Lt=(n("1931"),Object(m["a"])(Bt,Tt,Mt,!1,null,"108998f8",null));Lt.options.__file="Service3.vue";var Pt=Lt.exports,Wt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Nt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container has-text-left"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"is-offset-1 column"},[n("h1",{staticClass:"title"},[t._v("Enhancement and Production")]),n("h2",{staticClass:"subtitle"},[t._v("We are industry veterans that understand the minutiae of delivering complex contract and permit documents for the architecture, engineering, and construction industries. We can help turbocharge your teams’ institutional knowledge and turn it into scalable efficiencies with digital processes, tools, and automations. Let us help you develop robust solutions so you can stop reinventing the wheel on each project and focus your teams on accelerating productivity.")])]),n("div",{staticClass:"column"}),n("div",{staticClass:"is-1 column"})])])])}],It=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["b"]);It=u["a"]([d["a"]],It);var Ft=It,qt=Ft,zt=(n("82ec"),Object(m["a"])(qt,Wt,Nt,!1,null,"6979432a",null));zt.options.__file="Service4.vue";var Rt=zt.exports,Yt=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["b"]);Yt=u["a"]([Object(d["a"])({components:{ServicesTitle:bt,Service1:jt,Service2:$t,Service3:Pt,Service4:Rt}})],Yt);var Jt=Yt,Ut=Jt,Vt=Object(m["a"])(Ut,ot,ct,!1,null,null,null);Vt.options.__file="Services.vue";var Ht=Vt.exports,Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("SolutionsTitle"),n("SolutionCase1")],1)},Kt=[],Qt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Xt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section hero is-medium"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container has-text-centered"},[n("h1",{staticClass:"title"},[t._v("Digital Model Services for Any Industry")]),n("h2",{staticClass:"subtitle"},[t._v("We are professionals with a proven track record in real estate, architecture, interior design, engineering, BIM, construction, and operations. We can speak your language and help you translate your priorities across multi-disciplinary teams. We can help create data-driven solutions that connect the dots between a proforma, project budget, millwork details, HVAC coordination, and the construction timeline in a meaningful way.")])])])])}],Zt=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["b"]);Zt=u["a"]([d["a"]],Zt);var te=Zt,ee=te,ne=(n("b5db"),Object(m["a"])(ee,Qt,Xt,!1,null,"5adcfb08",null));ne.options.__file="SolutionsTitle.vue";var ae=ne.exports,se=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ie=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section hero is-medium"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container has-text-centered"},[n("h1",{staticClass:"title"},[t._v("Digital Space for Collaborative Design")]),n("h2",{staticClass:"subtitle"},[t._v("The design industry is inherently collaborative, but it’s a struggle to get new teams all on the same page. We help build processes, tools, and automations to help teams get their digital work environment firing on all cylinders. Leave navigating different file formats, software versions, and compatibility issues to us while you focus on what you do best.")])])])])}],re=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["b"]);re=u["a"]([d["a"]],re);var oe=re,ce=oe,le=Object(m["a"])(ce,se,ie,!1,null,"27649f83",null);le.options.__file="SolutionCase1.vue";var ue=le.exports,de=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["b"]);de=u["a"]([Object(d["a"])({components:{SolutionsTitle:ae,SolutionCase1:ue}})],de);var fe=de,ve=fe,he=Object(m["a"])(ve,Gt,Kt,!1,null,null,null);he.options.__file="Solutions.vue";var be=he.exports;a["default"].use(x["a"]);var pe=new x["a"]({routes:[{path:"/",name:"about",component:rt},{path:"/services",name:"services",component:Ht},{path:"/solutions",name:"solutions",component:be}]}),me=n("9483");Object(me["a"])("".concat("/3dwebsite/docs/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n.e("chunk-76d5e2a2").then(n.t.bind(null,"9299",7)),a["default"].config.productionTip=!1,new a["default"]({router:pe,render:function(t){return t(w)}}).$mount("#app")},ed2f:function(t,e,n){},fac3:function(t,e,n){"use strict";var a=n("75a2"),s=n.n(a);s.a}});
//# sourceMappingURL=app.beaef191.js.map
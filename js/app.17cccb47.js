(function(e){function t(t){for(var o,i,c=t[0],u=t[1],l=t[2],s=0,f=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},i={app:0},a={app:0},r=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-3c1edb98":"6f543356","chunk-01763f46":"412210af","chunk-1ca75c3c":"107424bc","chunk-72026e9f":"fae2e803","chunk-947ef58e":"693b22b4","chunk-687f79c0":"ffa289ca","chunk-7ccb8381":"81a88da7","chunk-d405e8ee":"5d6c74bd","chunk-ddb5b8f6":"923ee0b9"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-01763f46":1,"chunk-1ca75c3c":1,"chunk-72026e9f":1,"chunk-947ef58e":1,"chunk-687f79c0":1,"chunk-7ccb8381":1,"chunk-d405e8ee":1,"chunk-ddb5b8f6":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-3c1edb98":"31d6cfe0","chunk-01763f46":"8b536659","chunk-1ca75c3c":"b7f2f111","chunk-72026e9f":"26b50bde","chunk-947ef58e":"a6445397","chunk-687f79c0":"79a774ca","chunk-7ccb8381":"c27f299c","chunk-d405e8ee":"59b17ede","chunk-ddb5b8f6":"421fd03d"}[e]+".css",a=u.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===o||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],d.parentNode.removeChild(d),n(r)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){i[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=r);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",f.name="ChunkLoadError",f.type=o,f.request=i,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},4667:function(e,t,n){"use strict";var o=n("bc3a"),i=n.n(o),a=n("5c96"),r=i.a.create({baseURL:"http://localhost:3000",timeout:6e4});r.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",r.interceptors.request.use((function(e){localStorage.getItem("token");return e}),(function(e){return Promise.reject(e)})),r.interceptors.response.use((function(e){var t=e.data.status;if("fail"!=t)return e;a["Message"].error(e.data.msg)}),(function(e){return Promise.reject(e)})),t["a"]=r},"5c48":function(e,t,n){},"7c55":function(e,t,n){"use strict";n("5c48")},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-color-animation",attrs:{id:"app"},on:{contextmenu:function(t){return e.rightClick(t)}}},[n("router-view")],1)},a=[],r=(n("4917"),n("28a5"),n("ac6a"),n("4667")),c={name:"App",data:function(){return{}},methods:{rightClick:function(e){"CANVAS"!==e.target.tagName&&e.preventDefault()},getUserIP:function(e){var t=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,n=new t({iceServers:[]}),o=function(){},i={},a=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;function r(t){i[t]||e(t),i[t]=!0}n.createDataChannel(""),n.createOffer().then((function(e){e.sdp.split("\n").forEach((function(e){e.indexOf("candidate")<0||e.match(a).forEach(r)})),n.setLocalDescription(e,o,o)})).catch((function(e){})),n.onicecandidate=function(e){e&&e.candidate&&e.candidate.candidate&&e.candidate.candidate.match(a)&&e.candidate.candidate.match(a).forEach(r)}},loader:function(e){var t=this;r["a"].get("/load?ip=".concat(e,"&token=").concat(localStorage.getItem("token"))).then((function(e){"success"==e.data.status?(t.$store.state.login_signal=!0,t.$store.state.username=e.data.user[0].username,t.$store.state.head=e.data.user[0].head,t.$store.state.login_time=new Date,t.$store.commit("refreshOnlinetime")):"timeout"==e.data.status&&(t.$store.state.login_signal=!1,t.$store.state.username="",t.$store.state.head="")}))}},mounted:function(){var e=this;window.onbeforeunload=function(){var t=e.$store.state.canvas.toDataURL("image/png");localStorage.setItem("canvas",t),localStorage.getItem("token")&&r["a"].get("/leave",{params:{onlinetime:e.$store.state.onlinetime,user:e.$store.state.username}})},window.onload=function(){var t=localStorage.getItem("canvas"),n=e.$store.state.canvas;if(t){var o=new Image;o.src=t,o.width=n.width,o.height=n.height,console.log(n),o.onload=function(){e.$store.state.canvas.getContext("2d").drawImage(o,0,0,n.width,n.height)}}};try{this.getUserIP((function(t){e.loader(t)}))}catch(t){console.log(t.message)}}},u=c,l=(n("7c55"),n("2877")),s=Object(l["a"])(u,i,a,!1,null,null,null),f=s.exports,d=n("8c4f");o["default"].use(d["a"]);var h=[{path:"/",name:"default",redirect:"/index"},{path:"/index",name:"index",meta:{title:"VCANVAS",id:0},component:function(){return Promise.all([n.e("chunk-3c1edb98"),n.e("chunk-1ca75c3c")]).then(n.bind(null,"86d6"))}},{path:"/notice",name:"notice",meta:{title:"VCANVAS",id:0},component:function(){return Promise.all([n.e("chunk-3c1edb98"),n.e("chunk-72026e9f")]).then(n.bind(null,"b286"))}},{path:"/wh",name:"notiwhce",meta:{title:"VCANVAS",id:0},component:function(){return n.e("chunk-7ccb8381").then(n.bind(null,"e50b"))}},{path:"/login",component:function(){return Promise.all([n.e("chunk-3c1edb98"),n.e("chunk-947ef58e")]).then(n.bind(null,"ab03"))},children:[{path:"",name:"login",meta:{title:"VCANVAS-登录",id:1},component:function(){return n.e("chunk-d405e8ee").then(n.bind(null,"b29c"))}},{path:"register",name:"register",meta:{title:"VCANVAS-注册",id:2},component:function(){return Promise.all([n.e("chunk-3c1edb98"),n.e("chunk-01763f46")]).then(n.bind(null,"eb8f"))}},{path:"forget",name:"forget",meta:{title:"VCANVAS-找回密码",id:3},component:function(){return n.e("chunk-ddb5b8f6").then(n.bind(null,"39a4"))}}]},{path:"/404",component:function(){return n.e("chunk-687f79c0").then(n.bind(null,"2def"))}},{path:"*",redirect:"/404"}],m=new d["a"]({mode:"hash",routes:h}),g=m,p=(n("6b54"),n("2f62"));o["default"].use(p["a"]);var b=new p["a"].Store({state:{PORT:3e3,URL:"localhost",_CANVAS_STATES:[],CANVAS_BACK_COUNT:9999,isMenuFileSignal:!1,isToolbarSignal:!1,isMenuUserSignal:!1,openAttrSignal:"",login_signal:!1,username:"",head:"",isUserLogin:!0,login_time:"",onlinetime:"--",attrsubmit_onhover:!1,attrsubmit_active:!1,attrsubmit_option:"",outline_color:"",outline_width:"",fill_color:"",fill_signal:!1,edge_number:"",font_size:"",canvas:"",submitBtns:[""],drawline_shiftKeyCount:0,drawline_ctrlKeyCount:0,isForgetpwd:!1,isUserRegister:!1,login_decoration:Object,login_main:"",register_main:"",loginZindex:102,registerZindex:101},mutations:{isFile:function(e){e.isMenuFileSignal=!e.isMenuFileSignal,e.isToolbarSignal=!1},toolbarCloseBtnClick:function(e){e.isToolbarSignal=!1,e.openAttrSignal="",e.attrsubmit_active=!1,e.attrsubmit_option=""},isToolbar:function(e){e.isToolbarSignal=!e.isToolbarSignal,e.openAttrSignal="",e.isMenuFileSignal=!1,e.attrsubmit_active=!1},selectAttr:function(e,t){e.openAttrSignal!==t&&(e.openAttrSignal=t,e.attrsubmit_active=!1,e.attrsubmit_option="",e.outline_color="#000000",e.outline_width="1",e.fill_color="#000000",e.fill_signal=!1)},toolbarCloseAttr:function(e){e.openAttrSignal="",e.attrsubmit_active=!1,e.attrsubmit_option="",e.outline_color="#000000",e.outline_width="1",e.fill_color="#000000",e.fill_signal=!1},refreshOnlinetime:function(e){e.login_signal&&e.login_time?setInterval((function(){var t,n,o=new Date,i=o.getHours(),a=o.getMinutes();e.login_time&&(t=new Date(e.login_time).getHours(),n=new Date(e.login_time).getMinutes(),e.onlinetime=i===t?(a-n).toString():(60*(i-t)+(60-n+a)).toString())}),1e3):e.onlinetime="--"},attrsubmitOver:function(e){e.attrsubmit_active||(e.attrsubmit_onhover=!0)},attrsubmitLeave:function(e){e.attrsubmit_onhover=!1},attrsubmitClick:function(e){e.attrsubmit_onhover=!1,e.attrsubmit_active=!0},selectTool:function(e,t){e.attrsubmit_option=t||null},setOutlineColor:function(e,t){e.outline_color=t||"#000000"},setOutlineWidth:function(e,t){e.outline_width=t||1},setFillColor:function(e,t){e.fill_color=t||"#000000"},setEdgeNumber:function(e,t){e.edge_number=t||5},setFontSize:function(e,t){e.font_size=t||16},isFill:function(e,t){e.fill_signal=t||!1},getCanvas:function(e,t){e.canvas=t||null},getSubmitBtn:function(e,t){e.submitBtns.push(t)},setShiftKeyCount:function(e,t){e.drawline_shiftKeyCount=t},setCtrlKeyCount:function(e,t){e.drawline_ctrlKeyCount=t},toForgetpwd:function(e,t){e.isForgetpwd=t}}}),v=n("bc3a"),_=n.n(v),w=n("130e"),k=n("5c96"),S=n.n(k);n("0fae");o["default"].use(S.a),o["default"].use(w["a"],_.a),o["default"].prototype.eventBus=new o["default"],o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(f)},store:b,router:g}).$mount("#app")}});
//# sourceMappingURL=app.17cccb47.js.map
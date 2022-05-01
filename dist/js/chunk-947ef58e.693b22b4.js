(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-947ef58e","chunk-01763f46","chunk-ddb5b8f6","chunk-d405e8ee"],{"39a4":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"forgetpwd-main"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.is_username,expression:"is_username"}],attrs:{id:"forget-username"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.confirm_username,expression:"confirm_username"}],staticClass:"confirm_username_ipt",attrs:{type:"text",placeholder:"请确认您的用户名"},domProps:{value:e.confirm_username},on:{keypress:function(t){return e.iptOnInput(t)},input:function(t){t.target.composing||(e.confirm_username=t.target.value)}}}),r("button",{staticClass:"confirm_username_btn",on:{click:function(t){return e.toForgetpwdStep2()}}},[e._v("\n      确认\n    ")]),r("p",{directives:[{name:"show",rawName:"v-show",value:e.username_err,expression:"username_err"}]},[e._v("\n      用户名\n      "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.usernameEmpty,expression:"usernameEmpty"}]},[e._v("不能为空")]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.usernameError,expression:"usernameError"}]},[e._v("不存在")]),e._v("\n      !\n    ")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.is_code,expression:"is_code"}],attrs:{id:"forget-mailcode"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.mail_code,expression:"mail_code"}],staticClass:"mail_code_ipt",attrs:{type:"text",placeholder:"验证码已发送到您的邮箱"},domProps:{value:e.mail_code},on:{keypress:function(t){return e.iptOnInput(t)},input:function(t){t.target.composing||(e.mail_code=t.target.value)}}}),r("button",{staticClass:"mail_code_btn",on:{click:function(t){return e.checkCode()}}},[e._v("提交验证码")]),r("p",{staticClass:"reseterr"},[e._v(e._s(e.reset_error))])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.is_reset,expression:"is_reset"}],attrs:{id:"forget-resetpwd"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.resetpwd,expression:"resetpwd"}],ref:"resetIpt1",staticClass:"resetpwd_ipt",attrs:{type:"password",pattern:"^[a-zA-Z][a-zA-Z0-9_]{5,17}$",placeholder:"请输入新密码，字母开头，6~18位字母、数字和下划线"},domProps:{value:e.resetpwd},on:{keypress:function(t){return e.iptOnInput(t)},input:[function(t){t.target.composing||(e.resetpwd=t.target.value)},function(t){return e.pwdCheck(t)}]}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.resetpwd2,expression:"resetpwd2"}],ref:"resetIpt2",staticClass:"resetpwd_ipt2",attrs:{type:"password",placeholder:"两次密码保持一致"},domProps:{value:e.resetpwd2},on:{keypress:function(t){return e.iptOnInput(t)},input:[function(t){t.target.composing||(e.resetpwd2=t.target.value)},function(t){return e.pwd2Check(t)}]}}),r("button",{staticClass:"resetpwd_btn",on:{click:function(t){return e.toResetPwd()}}},[e._v("完成")]),r("p",{directives:[{name:"show",rawName:"v-show",value:e.isResetError,expression:"isResetError"}],staticClass:"reseterr"},[e._v(e._s(e.reset_error))]),r("p",{directives:[{name:"show",rawName:"v-show",value:e.isResetSuccess,expression:"isResetSuccess"}],staticClass:"resetsuccess"},[e._v(e._s(e.reset_success))])]),r("p",{attrs:{id:"cancelreset"},on:{click:function(t){return e.returnLoginmain()}}},[e._v("返回登录")])])},i=[],n={data:function(){return{confirm_username:"",mail_code:"",code_true:"",is_username:!0,is_code:!1,is_reset:!1,is_code_true:!1,resetpwd:"",resetpwd2:"",reset_error:"",reset_success:"",username_err:!1,usernameEmpty:!1,usernameError:!1,isResetError:!1,isResetSuccess:!1}},methods:{toForgetpwdStep2:function(){var e=this;this.confirm_username?this.axios.get("http://".concat(this.$store.state.URL,":").concat(this.$store.state.PORT,"/email"),{params:{username:this.confirm_username}}).then((function(t){-1==t.data.status?(e.username_err=!0,e.usernameEmpty=!1,e.usernameError=!0):(e.username_err=!1,e.is_username=!1,e.is_reset=!1,e.is_code=!0,e.code_true=t.data)})):(this.username_err=!0,this.usernameEmpty=!0,this.usernameError=!1)},iptOnInput:function(e){32===e.keyCode&&e.preventDefault()},checkCode:function(){this.mail_code==this.code_true?(this.reset_error="",this.is_username=!1,this.is_code=!1,this.is_reset=!0):this.$message.error("验证码错误!请检查！")},pwdCheck:function(e){this.resetpwd?e.target.checkValidity()?this.isResetError=!1:(this.isResetError=!0,this.reset_error="密码格式错误，请检查密码格式！"):this.$message.error("密码不能为空！")},pwd2Check:function(e){e.target.value?e.target.value==this.resetpwd?this.isResetError=!1:(this.isResetError=!0,this.reset_error="确认密码与密码不一致！请重试！"):this.reset_error="确认密码不能为空！"},toResetPwd:function(){var e=this;this.resetpwd?this.resetpwd2||this.$message.error("确认密码不能为空！"):this.$message.error("密码不能为空！"),this.resetpwd===this.resetpwd2?(this.reset_error="",console.log(this.confirm_username),this.axios.get("http://".concat(this.$store.state.URL,":").concat(this.$store.state.PORT,"/resetpwd"),{params:{username:this.confirm_username,password:this.resetpwd}}).then((function(t){console.log(t),1==t.data&&(e.isResetSuccess=!0,e.$messgae({type:"success",message:"密码重置成功！即将返回登录界面！"}),setTimeout((function(){e.$router.push("/login"),e.$store.commit("toForgetpwd",!1),e.is_username=!0,e.is_code=!1,e.is_reset=!1}),2e3))}))):this.reset_error="确认密码需与密码保持一致！"},returnLoginmain:function(){this.$store.commit("toForgetpwd",!1),this.$router.push("/login"),this.is_username=!0,this.is_code=!1,this.is_reset=!1},returnMain:function(){this.$router.push("/"),this.$store.commit("toForgetpwd",!1),this.is_username=!0,this.is_code=!1,this.is_reset=!1}},mounted:function(){}},o=n,a=(r("6693"),r("2877")),c=Object(a["a"])(o,s,i,!1,null,null,null);t["default"]=c.exports},"4e16":function(e,t,r){"use strict";r("55b2")},"55b2":function(e,t,r){},6693:function(e,t,r){"use strict";r("883b")},"78d7":function(e,t,r){"use strict";r("b3b5")},"883b":function(e,t,r){},9093:function(e,t,r){var s=r("ce10"),i=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return s(e,i)}},9286:function(e,t,r){},aa77:function(e,t,r){var s=r("5ca1"),i=r("be13"),n=r("79e5"),o=r("fdef"),a="["+o+"]",c="​",u=RegExp("^"+a+a+"*"),p=RegExp(a+a+"*$"),l=function(e,t,r){var i={},a=n((function(){return!!o[e]()||c[e]()!=c})),u=i[e]=a?t(d):o[e];r&&(i[r]=u),s(s.P+s.F*a,"String",i)},d=l.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(p,"")),e};e.exports=l},ab03:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"lr-container"}},[r("div",{ref:"vc_login_decoration",staticClass:"login-decoration bg-color-animation"}),r("router-view")],1)},i=[],n=r("b29c"),o=r("eb8f"),a=r("39a4"),c={data:function(){return{isDecorationAnimation:!1,vc_login_main_title:"登录",isUserLogin:this.$store.state.isUserLogin,toggleBtnText:"点击注册",isForgetpwd:!1,isUserRegister:this.$store.state.isUserRegister}},methods:{goBackToMain:function(){location.href=""}},mounted:function(){},components:{vcUserLogin:n["default"],vcUserRegister:o["default"],changepwd:a["default"]}},u=c,p=(r("78d7"),r("2877")),l=Object(p["a"])(u,s,i,!1,null,null,null);t["default"]=l.exports},b29c:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"login-container"}},[r("div",{staticClass:"login-l"},[r("button",{staticClass:"login-signup",on:{click:function(t){return e.toRegister()}}},[e._v("注册")]),r("button",{staticClass:"return-main",on:{click:function(t){return e.returnMain()}}},[e._v("返回")])]),e._m(0),r("ul",{attrs:{id:"login-main-login"}},[e._l(e.login_input,(function(t,s){return r("li",{key:s},[r("label",{staticClass:"login_ipt_name"},[e._v(e._s(t.prefix)),r("span",{attrs:{id:"spanForJustify"}})]),"checkbox"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"item.content"}],ref:"ipt",refInFor:!0,attrs:{autocomplete:e.autocomplete,iptId:s,pattern:t.pattern,required:"required",placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.content)?e._i(t.content,null)>-1:t.content},on:{keypress:function(t){return e.iptOnInput(t)},input:function(t){return e.iptOn(t)},change:function(r){var s=t.content,i=r.target,n=!!i.checked;if(Array.isArray(s)){var o=null,a=e._i(s,o);i.checked?a<0&&e.$set(t,"content",s.concat([o])):a>-1&&e.$set(t,"content",s.slice(0,a).concat(s.slice(a+1)))}else e.$set(t,"content",n)}}}):"radio"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"item.content"}],ref:"ipt",refInFor:!0,attrs:{autocomplete:e.autocomplete,iptId:s,pattern:t.pattern,required:"required",placeholder:t.placeholder,type:"radio"},domProps:{checked:e._q(t.content,null)},on:{keypress:function(t){return e.iptOnInput(t)},input:function(t){return e.iptOn(t)},change:function(r){return e.$set(t,"content",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"item.content"}],ref:"ipt",refInFor:!0,attrs:{autocomplete:e.autocomplete,iptId:s,pattern:t.pattern,required:"required",placeholder:t.placeholder,type:t.type},domProps:{value:t.content},on:{keypress:function(t){return e.iptOnInput(t)},input:[function(r){r.target.composing||e.$set(t,"content",r.target.value)},function(t){return e.iptOn(t)}]}}),r("transition",{attrs:{name:"fade"}},[r("p",{directives:[{name:"show",rawName:"v-show",value:t.isEmpty||t.isError,expression:"item.isEmpty || item.isError"}],staticClass:"empty_msg"},[e._v("\n          "+e._s(t.prefix)+"\n          "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.isEmpty,expression:"item.isEmpty"}]},[e._v("不能为空")]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.isError,expression:"item.isError"}]},[e._v("格式错误")]),e._v("!\n        ")])])],1)})),r("li",[r("div",{attrs:{id:"login-rememberme"}},[r("input",{attrs:{type:"checkbox",id:"login-rememberme-option"},domProps:{checked:e.isRemeber},on:{input:function(t){return e.isRememberme(t)}}}),r("label",{attrs:{for:"login-rememberme-option"}},[e._v("记住我")])]),r("p",{staticClass:"forget_pwd",on:{click:function(t){return e.setForget()}}})]),r("li",[r("button",{ref:"loginbtn",staticClass:"loginbtn loginSubmitBtn",on:{click:e.submitLogin}},[e._v("\n        登录\n      ")]),r("span",[e._v(e._s(e.login_tips))])])],2)])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-main-top"},[r("i"),r("span",{staticStyle:{padding:"0 20px"},attrs:{id:"login-main-title"}},[e._v(" 欢迎登录 ")]),r("i")])}],n=(r("ac6a"),{data:function(){return{login_input:[{content:"",prefix:"用户名",type:"text",isError:!1,isEmpty:!1,pattern:"^[a-zA-Z][a-zA-Z0-9_]{4,15}$",placeholder:"请输入用户名"},{content:"",prefix:"密码",type:"password",isError:!1,isEmpty:!1,pattern:"^[a-zA-Z][a-zA-Z0-9_]{5,17}$",placeholder:"请输入密码"}],login_tips:"",isRemeber:!1,autocomplete:"new-password"}},methods:{toRegister:function(){this.$router.push("/login/register")},returnMain:function(){this.$router.push("/")},iptOn:function(e){var t=e.target.getAttribute("iptId");this.login_input[t].isError=!1,this.login_input[t].isEmpty=!1},iptOnInput:function(e){32===e.keyCode&&e.preventDefault()},isRememberme:function(e){this.isRemeber=e.target.checked},submitLogin:function(){var e=this,t=this,r=this.login_input.every((function(e){return 0==e.isError&&0==e.isEmpty}));r&&this.axios.get("http://".concat(this.$store.state.URL,":").concat(this.$store.state.PORT,"/login"),{params:{username:this.login_input[0].content,password:this.login_input[1].content,logintime:new Date}}).then((function(r){"fail"===r.data.status?e.$message.error(r.data.msg):"success"===r.data.status&&(t.isRemeber?localStorage.setItem("rememberMe",!0):localStorage.removeItem("rememberMe"),e.$message({type:"success",message:"登录成功"}),t.login_tips="",e.$router.push("/"),e.$store.state.login_signal=!0,e.$store.state.login_time=new Date,e.$store.state.username=r.data.resData[0].username,e.$store.state.head=r.data.resData[0].head,localStorage.setItem("token",r.data.token),e.$store.commit("refreshOnlinetime"))})).catch((function(e){console.log(e)}))},setForget:function(){this.$store.commit("toForgetpwd",!0),this.$router.push("/login/forget"),this.login_input[0].content&&window.eventBus.$emit("confirm_username",this.login_input[0].content)},setIptTrue:function(e){e.classList.add("ipt-item-true"),e.classList.remove("ipt-item-false")},setIptFalse:function(e){e.classList.add("ipt-item-false"),e.classList.remove("ipt-item-true")},checkIpt:function(e,t,r){t.value?(e.login_input[r].isEmpty=!1,this.setIptFalse(t),t.checkValidity()?(e.login_input[r].isError=!1,this.setIptTrue(t)):(e.login_input[r].isError=!0,this.setIptFalse(t))):(e.login_input[r].isError=!1,e.login_input[r].isEmpty=!0,this.setIptFalse(t))}},beforeMount:function(){localStorage.getItem("rememberMe")&&(this.autocomplete="on",this.isRemeber=!0)},mounted:function(){var e=this,t=this;this.$refs.ipt.forEach((function(r,s){r.oninput=function(){e.checkIpt(t,r,s)}})),document.onkeydown=function(t){13==t.keyCode&&e.submitLogin()},console.log(this.$route.params),1==this.$route.params.reload&&location.reload()}}),o=n,a=(r("4e16"),r("2877")),c=Object(a["a"])(o,s,i,!1,null,null,null);t["default"]=c.exports},b3b5:function(e,t,r){},c5f6:function(e,t,r){"use strict";var s=r("7726"),i=r("69a8"),n=r("2d95"),o=r("5dbc"),a=r("6a99"),c=r("79e5"),u=r("9093").f,p=r("11e9").f,l=r("86cc").f,d=r("aa77").trim,m="Number",h=s[m],f=h,v=h.prototype,g=n(r("2aeb")(v))==m,_="trim"in String.prototype,w=function(e){var t=a(e,!1);if("string"==typeof t&&t.length>2){t=_?t.trim():d(t,3);var r,s,i,n=t.charCodeAt(0);if(43===n||45===n){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:s=2,i=49;break;case 79:case 111:s=8,i=55;break;default:return+t}for(var o,c=t.slice(2),u=0,p=c.length;u<p;u++)if(o=c.charCodeAt(u),o<48||o>i)return NaN;return parseInt(c,s)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof h&&(g?c((function(){v.valueOf.call(r)})):n(r)!=m)?o(new f(w(t)),r,h):w(t)};for(var E,y=r("9e1e")?u(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;y.length>C;C++)i(f,E=y[C])&&!i(h,E)&&l(h,E,p(f,E));h.prototype=v,v.constructor=h,r("2aba")(s,m,h)}},d051:function(e,t,r){"use strict";r("9286")},eb8f:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register-main-container"},[r("div",{staticClass:"register-r"},[r("button",{staticClass:"login-signin",on:{click:function(t){return e.toLogin()}}},[e._v("登录")]),r("button",{staticClass:"return-main",on:{click:function(t){return e.returnMain()}}},[e._v("返回")])]),r("ul",{attrs:{id:"login-main-register"}},[e._m(0),e._l(e.register_input,(function(t,s){return r("li",{key:s},[r("label",{staticClass:"register_ipt_name"},[e._v(e._s(t.prefix)),r("span",{staticClass:"spanForJustify"})]),"checkbox"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"item.content"}],ref:"ipt",refInFor:!0,attrs:{pattern:t.pattern,required:"required",placeholder:t.placeholder,name:t.name,type:"checkbox"},domProps:{checked:Array.isArray(t.content)?e._i(t.content,null)>-1:t.content},on:{keypress:function(t){return e.iptOnInput(t)},change:function(r){var s=t.content,i=r.target,n=!!i.checked;if(Array.isArray(s)){var o=null,a=e._i(s,o);i.checked?a<0&&e.$set(t,"content",s.concat([o])):a>-1&&e.$set(t,"content",s.slice(0,a).concat(s.slice(a+1)))}else e.$set(t,"content",n)}}}):"radio"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"item.content"}],ref:"ipt",refInFor:!0,attrs:{pattern:t.pattern,required:"required",placeholder:t.placeholder,name:t.name,type:"radio"},domProps:{checked:e._q(t.content,null)},on:{keypress:function(t){return e.iptOnInput(t)},change:function(r){return e.$set(t,"content",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"item.content"}],ref:"ipt",refInFor:!0,attrs:{pattern:t.pattern,required:"required",placeholder:t.placeholder,name:t.name,type:t.type},domProps:{value:t.content},on:{keypress:function(t){return e.iptOnInput(t)},input:function(r){r.target.composing||e.$set(t,"content",r.target.value)}}}),r("div",{staticClass:"ipt-end-icon-container"},[r("i",{directives:[{name:"show",rawName:"v-show",value:t.isTrue,expression:"item.isTrue"}],staticClass:"ipt-end-icon ipt-end-icon-correct"}),r("i",{directives:[{name:"show",rawName:"v-show",value:t.isError||t.isEmpty,expression:"item.isError || item.isEmpty"}],staticClass:"ipt-end-icon ipt-end-icon-error",on:{click:function(e){t.content=""}}})]),r("div",{staticClass:"msg-container"},[r("transition",{attrs:{name:"fade"}},[r("p",{directives:[{name:"show",rawName:"v-show",value:t.isEmpty||t.isError,expression:"item.isEmpty || item.isError"}],staticClass:"empty_msg"},[r("span",[e._v(e._s(t.prefix))]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.isEmpty,expression:"item.isEmpty"}]},[e._v("不能为空")]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.isError,expression:"item.isError"}]},[e._v("格式错误")]),e._v("!\n          ")])])],1)])})),r("transition",{attrs:{name:"fade"}},[r("li",{directives:[{name:"show",rawName:"v-show",value:e.codeShow,expression:"codeShow"}]},[r("label",{staticClass:"register_ipt_name"},[e._v("验证码"),r("span",{staticClass:"spanForJustify"})]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.iptCodeVal,expression:"iptCodeVal"}],ref:"ipt_code",attrs:{type:"text",required:"required",placeholder:"请输入验证码",name:"code",id:"ipt-code"},domProps:{value:e.iptCodeVal},on:{keypress:function(t){return e.iptOnInput(t)},input:function(t){t.target.composing||(e.iptCodeVal=t.target.value)}}}),r("button",{attrs:{disabled:e.isSend&&!e.isReSend},on:{click:function(t){return e.getMailCode()}}},[r("span",{directives:[{name:"show",rawName:"v-show",value:!e.isSend&&!e.isReSend,expression:"!isSend && !isReSend"}]},[e._v("发送验证码")]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.isSend,expression:"isSend"}]},[e._v(e._s(e.timeCountDown)+"s")]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.isReSend,expression:"isReSend"}]},[e._v("重新发送")])]),r("div",{staticClass:"ipt-end-icon-container"},[r("i",{directives:[{name:"show",rawName:"v-show",value:e.isCodeTrue,expression:"isCodeTrue"}],staticClass:"ipt-end-icon ipt-end-icon-correct"}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.codeErr.isCodeEmpty||e.codeErr.isCodeError,expression:"codeErr.isCodeEmpty || codeErr.isCodeError"}],staticClass:"ipt-end-icon ipt-end-icon-error",on:{click:function(t){e.iptCodeVal=""}}})]),r("div",{staticClass:"msg-container"},[r("transition",{attrs:{name:"fade"}},[r("p",{directives:[{name:"show",rawName:"v-show",value:e.codeErr.isCodeEmpty||e.codeErr.isCodeError,expression:"codeErr.isCodeEmpty || codeErr.isCodeError"}],staticClass:"empty_msg"},[r("span",[e._v("验证码")]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.codeErr.isCodeEmpty,expression:"codeErr.isCodeEmpty"}]},[e._v("不能为空")]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.codeErr.isCodeError,expression:"codeErr.isCodeError"}]},[e._v("格式错误")]),e._v("!\n            ")])])],1)])]),r("li",[e._m(1),r("input",{ref:"upload_img",staticStyle:{width:"88%",border:"none","box-shadow":"none","font-size":"12px"},attrs:{type:"file",id:"upload-head",required:"required",accept:".jpg,.png,.jpeg"}})]),r("li",[r("button",{ref:"registerbtn",staticClass:"registerbtn loginSubmitBtn",on:{click:e.submitRegister}},[e._v("\n        注册\n      ")]),r("transition",{attrs:{name:"fade"}},[r("span",{class:[e.isRegisterSuccess?"register_tips_success":"register_tips_err"],domProps:{textContent:e._s(e.register_tips)}})])],1)],2)])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("div",{staticClass:"register-main-top"},[r("i"),r("span",[e._v(" 欢迎注册 ")]),r("i")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{},[e._v("头像"),r("span",{staticClass:"spanForJustify"})])}],n=(r("c5f6"),r("ac6a"),r("96cf"),r("1da1")),o=(r("28a5"),r("4667")),a=r("d257"),c={data:function(){return{filereader:new FileReader,codeShow:!1,timeCountDown:59,isSend:!1,isReSend:!1,iptCodeVal:"",trueCode:"",isCodeTrue:!1,codeErr:{isCodeEmpty:!1,isCodeError:!1},register_input:[{content:"",prefix:"用户名",type:"text",name:"username",isTrue:!1,isError:!1,isEmpty:!1,pattern:"^[a-zA-Z][a-zA-Z0-9_]{4,15}$",placeholder:"字母开头，5-16位字母数字下划线"},{content:"",prefix:"密码",type:"password",name:"pwd",isTrue:!1,isError:!1,isEmpty:!1,pattern:"^[a-zA-Z][a-zA-Z0-9_]{5,17}$",placeholder:"字母开头，6~18位字母、数字和下划线"},{content:"",prefix:"确认密码",type:"password",name:"repwd",isTrue:!1,isError:!1,isEmpty:!1,pattern:null,placeholder:"两次密码保持一致"},{content:"",prefix:"邮箱",type:"mail",ref:"mail",name:"mail",isTrue:!1,isError:!1,isEmpty:!1,pattern:"^([a-zA-Z0-9]+[_|_|-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,6}$",placeholder:"请输入你的邮箱"}],pwdIndex:null,errormsg:"格式错误",register_tips:"",tomain_countdown:0,isRegisterSuccess:!1,isHeadUpload:!1}},methods:{getBase64:function(){var e=this,t=this.$refs.upload_img;t.addEventListener("change",(function(){var r=["jpg","jpeg","png"],s=t.value.split(".")[t.value.split(".").length-1];if(-1==r.indexOf(s))return e.$message.error("仅支持jpg、jpeg、png格式的图片！"),void(t.value="");e.filereader.readAsDataURL(t.files[0]),e.isHeadUpload=!0}))},toLogin:function(){this.$router.push("/login")},returnMain:function(){this.$router.push("/")},iptOnInput:function(e){32===e.keyCode&&e.preventDefault()},getMailCode:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,s,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return 1==this.isReSend&&(this.isReSend=!1,this.timeCountDown=59),t=this.register_input[3].content,e.next=4,o["a"].get("http://".concat(this.$store.state.URL,":").concat(this.$store.state.PORT,"/register/mail/getcode"),{params:{mail:t}});case 4:r=e.sent,"success"==r.data.status&&(this.trueCode=r.data.code,this.isSend=!0,s=setInterval((function(){i.timeCountDown--,50==i.timeCountDown&&(clearInterval(s),i.isSend=!1,i.isReSend=!0)}),1e3));case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),submitRegister:function(){var e=this,t=this,r=this.register_input.every((function(e){return 1==e.isTrue}));r?this.trueCode!=this.iptCodeVal?this.$message.error("验证码错误！"):this.isHeadUpload?this.axios.post("http://".concat(this.$store.state.URL,":").concat(this.$store.state.PORT,"/register"),{username:this.register_input[0].content,password:this.register_input[1].content,mail:this.register_input[3].content,registertime:Object(a["a"])(new Date),head:this.filereader.result},{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(r){-3==r.data.status?(t.isRegisterSuccess=!1,t.register_tips="用户名已存在！请更换后重试！"):(t.tomain_countdown=3,t.isRegisterSuccess=!0,t.register_tips="注册成功，将在".concat(t.tomain_countdown,"秒后跳转到登录页"),setInterval((function(){t.tomain_countdown=t.tomain_countdown-1,t.register_tips="注册成功，将在".concat(t.tomain_countdown,"秒后跳转到登录页"),-1===t.tomain_countdown&&e.$router.push("/login")}),1e3))})).catch((function(e){console.log(e)})):this.$message.error("未选择头像！"):this.$message.error("请确保确保各项输入值合法！")},getPwdIndex:function(e){e.register_input.forEach((function(t,r){"密码"===t.prefix&&(e.pwdIndex=r)}))},setIptTrue:function(e){e.classList.add("ipt-item-true"),e.classList.remove("ipt-item-false")},setIptFalse:function(e){e.classList.add("ipt-item-false"),e.classList.remove("ipt-item-true")},checkRegisterIpt:function(e,t,r,s){t.value?(e.register_input[r].isEmpty=!1,r===s?e.register_input[r].content===e.register_input[r-1].content?(e.register_input[r].isError=!1,e.register_input[r].isTrue=!0,e.setIptTrue(t)):(e.register_input[r].isError=!0,e.register_input[r].isTrue=!1,e.errormsg="不一致",e.setIptFalse(t)):t.checkValidity()?(e.register_input[r].isError=!1,e.register_input[r].isTrue=!0,e.setIptTrue(t)):(e.register_input[r].isError=!0,e.register_input[r].isTrue=!1,e.errormsg="格式错误",e.setIptFalse(t))):(e.register_input[r].isError=!1,e.register_input[r].isEmpty=!0,e.register_input[r].isTrue=!1,e.setIptFalse(t))}},mounted:function(){var e=this,t=this;this.getPwdIndex(t),this.$refs.ipt.forEach((function(r,s){r.onblur=function(){e.checkRegisterIpt(t,r,s,t.pwdIndex+1),3==s&&r.checkValidity()&&(e.codeShow=!0)}})),this.$refs.ipt.forEach((function(r,s){r.oninput=function(){e.checkRegisterIpt(t,r,s,t.pwdIndex+1),3==s&&r.checkValidity()&&(e.codeShow=!0)}}));var r=this;this.$refs.ipt_code.onblur=function(){this.value||(r.codeErr.isCodeEmpty=!0,r.codeErr.isCodeError=!1)},this.$refs.ipt_code.onchange=function(){6===this.value.length||Number(this.value)||(r.codeErr.isCodeEmpty=!1,r.codeErr.isCodeError=!0)},document.onkeydown=function(t){13==t.keyCode&&e.submitRegister()},this.getBase64()}},u=c,p=(r("d051"),r("2877")),l=Object(p["a"])(u,s,i,!1,null,null,null);t["default"]=l.exports},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-947ef58e.693b22b4.js.map
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26],{1026:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});const s={name:"Login",data:function(){return{email:"",password:""}},methods:{login:function(){var e=this;axios.get("/sanctum/csrf-cookie").then((function(t){axios.post("/login",{email:e.email,password:e.password}).then((function(t){localStorage.setItem("x_xsrf_token",t.config.headers["X-XSRF-TOKEN"]),e.$router.push({name:"home"})})).catch((function(e){console.log(e.response)}))}))}}};const o=(0,a(1900).Z)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("h1",{staticClass:"page__title"},[e._v("Вход")]),e._v(" "),a("div",{staticClass:"form"},[a("div",{staticClass:"form__item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"name"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form__item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"app-btn-group"},[a("button",{staticClass:"app-btn app-btn__save",attrs:{type:"submit",value:"login"},on:{click:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[e._v("Войти")])])])])}),[],!1,null,"b659f97a",null).exports}}]);
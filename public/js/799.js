"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[799],{4028:(e,t,r)=>{r.d(t,{Xw:()=>C});var a=r(6121);function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(((r,n)=>(t.includes(n)||(r[n]=(0,a.SU)(e[n])),r)),{})}function i(e){return"function"==typeof e}function l(e){return(0,a.PG)(e)||(0,a.$y)(e)}function s(e,t,r){let a=e;const n=t.split(".");for(let e=0;e<n.length;e++){if(!a[n[e]])return r;a=a[n[e]]}return a}function o(e,t,r){return(0,a.Fl)((()=>e.some((e=>s(t,e,{[r]:!1})[r]))))}function u(e,t,r){return(0,a.Fl)((()=>e.reduce(((e,a)=>{const n=s(t,a,{[r]:!1})[r]||[];return e.concat(n)}),[])))}function c(e,t,r,n){return e.call(n,(0,a.SU)(t),(0,a.SU)(r),n)}function d(e){return void 0!==e.$valid?!e.$valid:!e}function v(e,t,r,l,s,o,u,v,$,p,f){const m=(0,a.iH)(!1),h=e.$params||{},g=(0,a.iH)(null);let y,_;e.$async?({$invalid:y,$unwatch:_}=function(e,t,r,n,i,l,s){let{$lazy:o,$rewardEarly:u}=i,v=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],$=arguments.length>8?arguments[8]:void 0,p=arguments.length>9?arguments[9]:void 0,f=arguments.length>10?arguments[10]:void 0;const m=(0,a.iH)(!!n.value),h=(0,a.iH)(0);r.value=!1;const g=(0,a.YP)([t,n].concat(v,f),(()=>{if(o&&!n.value||u&&!p.value&&!r.value)return;let a;try{a=c(e,t,$,s)}catch(e){a=Promise.reject(e)}h.value++,r.value=!!h.value,m.value=!1,Promise.resolve(a).then((e=>{h.value--,r.value=!!h.value,l.value=e,m.value=d(e)})).catch((e=>{h.value--,r.value=!!h.value,l.value=e,m.value=!0}))}),{immediate:!0,deep:"object"==typeof t});return{$invalid:m,$unwatch:g}}(e.$validator,t,m,r,l,g,s,e.$watchTargets,$,p,f)):({$invalid:y,$unwatch:_}=function(e,t,r,n,i,l,s,o){let{$lazy:u,$rewardEarly:v}=n;return{$unwatch:()=>({}),$invalid:(0,a.Fl)((()=>{if(u&&!r.value||v&&!o.value)return!1;let a=!0;try{const r=c(e,t,s,l);i.value=r,a=d(r)}catch(e){i.value=e}return a}))}}(e.$validator,t,r,l,g,s,$,p));const b=e.$message;return{$message:i(b)?(0,a.Fl)((()=>b(n({$pending:m,$invalid:y,$params:n(h),$model:t,$response:g,$validator:o,$propertyPath:v,$property:u})))):b||"",$params:h,$pending:m,$invalid:y,$response:g,$unwatch:_}}function $(){}function p(e,t,r){if(r)return t?t(e()):e();try{var a=Promise.resolve(e());return t?a.then(t):a}catch(e){return Promise.reject(e)}}function f(e){const t=(r=function(){return A(),e=function(){return p(a.Y3,(function(){return new Promise((e=>{if(!z.value)return e(!N.value);const t=(0,a.YP)(z,(()=>{e(!N.value),t()}))}))}))},(t=function(){if(S.$rewardEarly)return V(),p(a.Y3,$,e);var e}())&&t.then?t.then(e):e(t);var e,t},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(r.apply(this,e))}catch(e){return Promise.reject(e)}});var r;let{validations:n,state:l,key:s,parentKey:c,childResults:d,resultsCache:m,globalConfig:h={},instance:g,externalResults:y}=e;const _=c?`${c}.${s}`:s,{rules:b,nestedValidators:x,config:C,validationGroups:w}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,a.SU)(e),r=Object.keys(t),n={},l={},s={};let o=null;return r.forEach((e=>{const r=t[e];switch(!0){case i(r.$validator):n[e]=r;break;case i(r):n[e]={$validator:r};break;case"$validationGroups"===e:o=r;break;case e.startsWith("$"):s[e]=r;break;default:l[e]=r}})),{rules:n,nestedValidators:l,config:s,validationGroups:o}}(n),S=Object.assign({},h,C),F=s?(0,a.Fl)((()=>{const e=(0,a.SU)(l);return e?(0,a.SU)(e[s]):void 0})):l,j=Object.assign({},(0,a.SU)(y)||{}),E=(0,a.Fl)((()=>{const e=(0,a.SU)(y);return s?e?(0,a.SU)(e[s]):void 0:e})),U=function(e,t,r,n,i,l,s,o,u){const c=Object.keys(e),d=n.get(i,e),$=(0,a.iH)(!1),p=(0,a.iH)(!1),f=(0,a.iH)(0);if(d){if(!d.$partial)return d;d.$unwatch(),$.value=d.$dirty.value}const m={$dirty:$,$path:i,$touch:()=>{$.value||($.value=!0)},$reset:()=>{$.value&&($.value=!1)},$commit:()=>{}};return c.length?(c.forEach((a=>{m[a]=v(e[a],t,m.$dirty,l,s,a,r,i,u,p,f)})),m.$externalResults=(0,a.Fl)((()=>o.value?[].concat(o.value).map(((e,t)=>({$propertyPath:i,$property:r,$validator:"$externalResults",$uid:`${i}-externalResult-${t}`,$message:e,$params:{},$response:null,$pending:!1}))):[])),m.$invalid=(0,a.Fl)((()=>{const e=c.some((e=>(0,a.SU)(m[e].$invalid)));return p.value=e,!!m.$externalResults.value.length||e})),m.$pending=(0,a.Fl)((()=>c.some((e=>(0,a.SU)(m[e].$pending))))),m.$error=(0,a.Fl)((()=>!!m.$dirty.value&&(m.$pending.value||m.$invalid.value))),m.$silentErrors=(0,a.Fl)((()=>c.filter((e=>(0,a.SU)(m[e].$invalid))).map((e=>{const t=m[e];return(0,a.qj)({$propertyPath:i,$property:r,$validator:e,$uid:`${i}-${e}`,$message:t.$message,$params:t.$params,$response:t.$response,$pending:t.$pending})})).concat(m.$externalResults.value))),m.$errors=(0,a.Fl)((()=>m.$dirty.value?m.$silentErrors.value:[])),m.$unwatch=()=>c.forEach((e=>{m[e].$unwatch()})),m.$commit=()=>{p.value=!0,f.value=Date.now()},n.set(i,e,m),m):(d&&n.set(i,e,m),m)}(b,F,s,m,_,S,g,E,l),P=function(e,t,r,a,n,i,l){const s=Object.keys(e);return s.length?s.reduce(((s,o)=>(s[o]=f({validations:e[o],state:t,key:o,parentKey:r,resultsCache:a,globalConfig:n,instance:i,externalResults:l}),s)),{}):{}}(x,F,_,m,S,g,E),k={};w&&Object.entries(w).forEach((e=>{let[t,r]=e;k[t]={$invalid:o(r,P,"$invalid"),$error:o(r,P,"$error"),$pending:o(r,P,"$pending"),$errors:u(r,P,"$errors"),$silentErrors:u(r,P,"$silentErrors")}}));const{$dirty:O,$errors:R,$invalid:N,$anyDirty:L,$error:T,$pending:z,$touch:A,$reset:q,$silentErrors:I,$commit:V}=function(e,t,r){const n=(0,a.Fl)((()=>[t,r].filter((e=>e)).reduce(((e,t)=>e.concat(Object.values((0,a.SU)(t)))),[]))),i=(0,a.Fl)({get:()=>e.$dirty.value||!!n.value.length&&n.value.every((e=>e.$dirty)),set(t){e.$dirty.value=t}}),l=(0,a.Fl)((()=>{const t=(0,a.SU)(e.$silentErrors)||[],r=n.value.filter((e=>((0,a.SU)(e).$silentErrors||[]).length)).reduce(((e,t)=>e.concat(...t.$silentErrors)),[]);return t.concat(r)})),s=(0,a.Fl)((()=>{const t=(0,a.SU)(e.$errors)||[],r=n.value.filter((e=>((0,a.SU)(e).$errors||[]).length)).reduce(((e,t)=>e.concat(...t.$errors)),[]);return t.concat(r)})),o=(0,a.Fl)((()=>n.value.some((e=>e.$invalid))||(0,a.SU)(e.$invalid)||!1)),u=(0,a.Fl)((()=>n.value.some((e=>(0,a.SU)(e.$pending)))||(0,a.SU)(e.$pending)||!1)),c=(0,a.Fl)((()=>n.value.some((e=>e.$dirty))||n.value.some((e=>e.$anyDirty))||i.value)),d=(0,a.Fl)((()=>!!i.value&&(u.value||o.value))),v=()=>{e.$touch(),n.value.forEach((e=>{e.$touch()}))};return n.value.length&&n.value.every((e=>e.$dirty))&&v(),{$dirty:i,$errors:s,$invalid:o,$anyDirty:c,$error:d,$pending:u,$touch:v,$reset:()=>{e.$reset(),n.value.forEach((e=>{e.$reset()}))},$silentErrors:l,$commit:()=>{e.$commit(),n.value.forEach((e=>{e.$commit()}))}}}(U,P,d),H=s?(0,a.Fl)({get:()=>(0,a.SU)(F),set:e=>{O.value=!0;const t=(0,a.SU)(l),r=(0,a.SU)(y);r&&(r[s]=j[s]),(0,a.dq)(t[s])?t[s].value=e:t[s]=e}}):null;return s&&S.$autoDirty&&(0,a.YP)(F,(()=>{O.value||A();const e=(0,a.SU)(y);e&&(e[s]=j[s])}),{flush:"sync"}),(0,a.qj)(Object.assign({},U,{$model:H,$dirty:O,$error:T,$errors:R,$invalid:N,$anyDirty:L,$pending:z,$touch:A,$reset:q,$path:_||"__root",$silentErrors:I,$validate:t,$commit:V},d&&{$getResultsForChild:function(e){return(d.value||{})[e]},$clearExternalResults:function(){(0,a.dq)(y)?y.value=j:0===Object.keys(j).length?Object.keys(y).forEach((e=>{delete y[e]})):Object.assign(y,j)},$validationGroups:k},P))}class m{constructor(){this.storage=new Map}set(e,t,r){this.storage.set(e,{rules:t,result:r})}checkRulesValidity(e,t,r){const n=Object.keys(r),i=Object.keys(t);if(i.length!==n.length)return!1;return!!i.every((e=>n.includes(e)))&&i.every((e=>!t[e].$params||Object.keys(t[e].$params).every((n=>(0,a.SU)(r[e].$params[n])===(0,a.SU)(t[e].$params[n])))))}get(e,t){const r=this.storage.get(e);if(!r)return;const{rules:a,result:n}=r,i=this.checkRulesValidity(e,t,a),l=n.$unwatch?n.$unwatch:()=>({});return i?n:{$dirty:n.$dirty,$partial:!0,$unwatch:l}}}const h={COLLECT_ALL:!0,COLLECT_NONE:!1},g=Symbol("vuelidate#injectChildResults"),y=Symbol("vuelidate#removeChildResults");function _(e){let{$scope:t,instance:r}=e;const n={},i=(0,a.iH)([]),l=(0,a.Fl)((()=>i.value.reduce(((e,t)=>(e[t]=(0,a.SU)(n[t]),e)),{})));r.__vuelidateInjectInstances=[].concat(r.__vuelidateInjectInstances||[],(function(e,r){let{$registerAs:a,$scope:l,$stopPropagation:s}=r;s||t===h.COLLECT_NONE||l===h.COLLECT_NONE||t!==h.COLLECT_ALL&&t!==l||(n[a]=e,i.value.push(a))})),r.__vuelidateRemoveInstances=[].concat(r.__vuelidateRemoveInstances||[],(function(e){i.value=i.value.filter((t=>t!==e)),delete n[e]}));const s=(0,a.f3)(g,[]);(0,a.JJ)(g,r.__vuelidateInjectInstances);const o=(0,a.f3)(y,[]);return(0,a.JJ)(y,r.__vuelidateRemoveInstances),{childResults:l,sendValidationResultsToParent:s,removeValidationResultsFromParent:o}}function b(e){return new Proxy(e,{get:(e,t)=>"object"==typeof e[t]?b(e[t]):(0,a.Fl)((()=>e[t]))})}let x=0;function C(e,t){var r;let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};1===arguments.length&&(n=e,e=void 0,t=void 0);let{$registerAs:s,$scope:o=h.COLLECT_ALL,$stopPropagation:u,$externalResults:c,currentVueInstance:d}=n;const v=d||(null===(r=(0,a.FN)())||void 0===r?void 0:r.proxy),$=v?v.$options:{};s||(x+=1,s=`_vuelidate_${x}`);const p=(0,a.iH)({}),g=new m,{childResults:y,sendValidationResultsToParent:C,removeValidationResultsFromParent:w}=v?_({$scope:o,instance:v}):{childResults:(0,a.iH)({})};if(!e&&$.validations){const e=$.validations;t=(0,a.iH)({}),(0,a.wF)((()=>{t.value=v,(0,a.YP)((()=>i(e)?e.call(t.value,new b(t.value)):e),(e=>{p.value=f({validations:e,state:t,childResults:y,resultsCache:g,globalConfig:n,instance:v,externalResults:c||v.vuelidateExternalResults})}),{immediate:!0})})),n=$.validationsConfig||n}else{const r=(0,a.dq)(e)||l(e)?e:(0,a.qj)(e||{});(0,a.YP)(r,(e=>{p.value=f({validations:e,state:t,childResults:y,resultsCache:g,globalConfig:n,instance:null!=v?v:{},externalResults:c})}),{immediate:!0})}return v&&(C.forEach((e=>e(p,{$registerAs:s,$scope:o,$stopPropagation:u}))),(0,a.Jd)((()=>w.forEach((e=>e(s)))))),(0,a.Fl)((()=>Object.assign({},(0,a.SU)(p.value),y.value)))}},2587:(e,t,r)=>{r.d(t,{BS:()=>p,C1:()=>f});var a=r(6121);function n(e){return"function"==typeof e}function i(e){return null!==e&&"object"==typeof e&&!Array.isArray(e)}function l(e){return n(e.$validator)?Object.assign({},e):{$validator:e}}function s(e){return"object"==typeof e?e.$valid:e}function o(e){return e.$validator||e}function u(e,t){if(!i(e))throw new Error('[@vuelidate/validators]: First parameter to "withParams" should be an object, provided '+typeof e);if(!i(t)&&!n(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const r=l(t);return r.$params=Object.assign({},r.$params||{},e),r}function c(e,t){if(!n(e)&&"string"!=typeof(0,a.SU)(e))throw new Error('[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided '+typeof e);if(!i(t)&&!n(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const r=l(t);return r.$message=e,r}const d=e=>{if(e=(0,a.SU)(e),Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"==typeof e){for(let t in e)return!0;return!1}return!!String(e).length},v=e=>(e=(0,a.SU)(e),Array.isArray(e)?e.length:"object"==typeof e?Object.keys(e).length:String(e).length);function $(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>(e=(0,a.SU)(e),!d(e)||t.every((t=>t.test(e))))}a.SU,$(/^[a-zA-Z]*$/),$(/^[a-zA-Z0-9]*$/),$(/^\d*(\.\d+)?$/);$(/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i);function p(e){return{$validator:(t=e,e=>!d(e)||v(e)<=(0,a.SU)(t)),$message:e=>{let{$params:t}=e;return`The maximum length allowed is ${t.max}`},$params:{max:e,type:"maxLength"}};var t}var f={$validator:function(e){return"string"==typeof e&&(e=e.trim()),d(e)},$message:"Value is required",$params:{type:"required"}};$(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i);$(/(^[0-9]*$)|(^-[0-9]+$)/),$(/^[-]?\d*(\.\d+)?$/)},7799:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var a=r(2587),n=r(4028);const i={name:"CarEdit",props:["carId"],setup:function(){return{v$:(0,n.Xw)()}},data:function(){return{errored:!1,loading:!0,carType:"",carFuel:"",carModel:"",carNumber:""}},validations:function(){return{carType:{required:a.C1,maxLength:(0,a.BS)(255)},carFuel:{required:a.C1,maxLength:(0,a.BS)(255)},carModel:{required:a.C1,maxLength:(0,a.BS)(255)},carNumber:{required:a.C1,maxLength:(0,a.BS)(255)}}},methods:{goBack:function(){this.$router.go(-1)},updateCar:function(){var e=this;this.v$.$touch(),this.v$.$error?console.log(this.v$):axios.post("/api/V1/cars/"+this.carId,{_method:"PUT",type:this.carType,fuel:this.carFuel,model:this.carModel,number:this.carNumber}).then((function(t){e.$router.push({name:"car",params:{carId:e.carId}})})).catch((function(t){console.log(t),e.errored=!0})).finally((function(){e.loading=!1}))},getOneCar:function(){var e=this;axios.get("/api/V1/cars/"+this.carId).then((function(t){e.carType=t.data.data.type,e.carFuel=t.data.data.fuel,e.carModel=t.data.data.model,e.carNumber=t.data.data.number})).catch((function(t){console.log(t),e.errored=!0})).finally((function(){e.loading=!1}))}},mounted:function(){this.getOneCar()}};const l=(0,r(1900).Z)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("h1",{staticClass:"page__title"},[e._v("Редактирование автомобиля")]),e._v(" "),e.loading?r("app-loader"):e._e(),e._v(" "),e.errored?r("error-notification"):e._e(),e._v(" "),r("div",{staticClass:"edit-form"},[r("div",{staticClass:"edit-form__item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.carType,expression:"carType"}],class:{"input-invalid":e.v$.carType.$errors.length},attrs:{type:"text",placeholder:"тип: Легковой, Грузовой, Погрузчик ..."},domProps:{value:e.carType},on:{input:function(t){t.target.composing||(e.carType=t.target.value)}}}),e._v(" "),e._l(e.v$.carType.$errors,(function(t){return r("div",{key:t.$uid,staticClass:"validation-message"},[e._v("\n                "+e._s(t.$message)+"\n            ")])}))],2),e._v(" "),r("div",{staticClass:"edit-form__item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.carFuel,expression:"carFuel"}],class:{"input-invalid":e.v$.carFuel.$errors.length},attrs:{type:"text",placeholder:"Тип топлива"},domProps:{value:e.carFuel},on:{input:function(t){t.target.composing||(e.carFuel=t.target.value)}}}),e._v(" "),e._l(e.v$.carFuel.$errors,(function(t){return r("div",{key:t.$uid,staticClass:"validation-message"},[e._v("\n                "+e._s(t.$message)+"\n            ")])}))],2),e._v(" "),r("div",{staticClass:"edit-form__item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.carModel,expression:"carModel"}],class:{"input-invalid":e.v$.carModel.$errors.length},attrs:{type:"text",placeholder:"Модель автомобиля"},domProps:{value:e.carModel},on:{input:function(t){t.target.composing||(e.carModel=t.target.value)}}}),e._v(" "),e._l(e.v$.carModel.$errors,(function(t){return r("div",{key:t.$uid,staticClass:"validation-message"},[e._v("\n                "+e._s(t.$message)+"\n            ")])}))],2),e._v(" "),r("div",{staticClass:"edit-form__item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.carNumber,expression:"carNumber"}],class:{"input-invalid":e.v$.carNumber.$errors.length},attrs:{type:"text",placeholder:"Гос. номер"},domProps:{value:e.carNumber},on:{input:function(t){t.target.composing||(e.carNumber=t.target.value)}}}),e._v(" "),e._l(e.v$.carNumber.$errors,(function(t){return r("div",{key:t.$uid,staticClass:"validation-message"},[e._v("\n                "+e._s(t.$message)+"\n            ")])}))],2)]),e._v(" "),r("div",{staticClass:"app-btn-group"},[r("button",{staticClass:"app-btn app-btn__back mr-16",on:{click:function(t){return t.preventDefault(),e.goBack.apply(null,arguments)}}},[e._v("\n            Назад\n        ")]),e._v(" "),r("button",{staticClass:"app-btn app-btn__save",on:{click:function(t){return t.preventDefault(),e.updateCar.apply(null,arguments)}}},[e._v("\n            Сохранить\n        ")])])],1)}),[],!1,null,null,null).exports},6121:(e,t,r)=>{r.d(t,{$y:()=>a.$y,FN:()=>a.FN,Fl:()=>a.Fl,JJ:()=>a.JJ,Jd:()=>a.Jd,PG:()=>a.PG,SU:()=>a.SU,Y3:()=>a.Y3,YP:()=>a.YP,dq:()=>a.dq,f3:()=>a.f3,iH:()=>a.iH,qj:()=>a.qj,wF:()=>a.wF});var a=r(538);a.ZP,a.ZP.util.warn}}]);
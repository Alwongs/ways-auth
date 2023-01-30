"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[643],{8965:(t,e,r)=>{r.d(e,{Z:()=>a});var i=r(3645),n=r.n(i)()((function(t){return t[1]}));n.push([t.id,".driver-list__item[data-v-43a95295]{align-items:center;display:flex;flex-wrap:wrap;justify-content:space-between;margin-bottom:12px;padding:6px}.driver-list__item[data-v-43a95295]:hover{background-color:#d0eaf6}.driver-list__devider[data-v-43a95295]{border-bottom:1px dotted #000;cursor:pointer;flex-grow:1;height:32px;margin:0 16px}",""]);const a=n},4643:(t,e,r)=>{r.r(e),r.d(e,{default:()=>d});const i={name:"DriverList",data:function(){return{drivers:[],errored:!1,loading:!0}},mounted:function(){this.getAllDrivers()},methods:{getAllDrivers:function(){var t=this;axios.get("/api/V1/drivers").then((function(e){t.drivers=e.data.data})).catch((function(e){console.log(e),t.errored=!0})).finally((function(){t.loading=!1}))},addDriver:function(){this.$router.push({name:"add-driver"})},editDriver:function(t){this.$router.push({name:"edit-driver",params:{driverId:t}})},deleteDriver:function(t){var e=this;confirm("Вы действительно хотите удалить водителя?")&&axios.post("/api/V1/drivers/"+t,{_method:"DELETE"}).then((function(t){e.drivers=[],e.getAllDrivers()})).catch((function(t){console.log(t),e.errored=!0})).finally((function(){e.loading=!1}))}}};var n=r(3379),a=r.n(n),s=r(8965),l={insert:"head",singleton:!1};a()(s.Z,l);s.Z.locals;const d=(0,r(1900).Z)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page"},[r("h1",{staticClass:"page__title"},[t._v("Водители")]),t._v(" "),r("button",{staticClass:"small-btn small-btn__add mb-16",on:{click:t.addDriver}},[t._v("+")]),t._v(" "),t.loading?r("app-loader"):t._e(),t._v(" "),t.errored?r("error-notification"):t._e(),t._v(" "),r("ul",{staticClass:"driver-list"},t._l(t.drivers,(function(e,i){return r("li",{key:e.id,staticClass:"driver-list__item"},[r("router-link",{attrs:{to:{name:"driver",params:{driverId:e.id}}}},[r("h3",[t._v(t._s(i+1)+". "+t._s(e.last_name)+" "+t._s(e.first_name)+" "+t._s(e.middle_name))])]),t._v(" "),r("div",{staticClass:"driver-list__devider"}),t._v(" "),r("div",{staticClass:"small-btn-group"},[r("button",{staticClass:"small-btn small-btn__edit",on:{click:function(r){return t.editDriver(e.id)}}},[t._v("\n                    Edit\n                ")]),t._v(" "),r("button",{staticClass:"small-btn small-btn__del",on:{click:function(r){return t.deleteDriver(e.id)}}},[t._v("\n                    Del\n                ")])])],1)})),0)],1)}),[],!1,null,"43a95295",null).exports}}]);
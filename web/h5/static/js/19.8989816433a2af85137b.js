webpackJsonp([19],{Jpvt:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Dd8w"),i=a.n(s),o=a("NYxO"),r=a("SQAI"),n=a("oHlh"),c=a("gyMJ"),u={components:{eCourse:n.a,coupon:r.a},data:function(){return{course:{availableCoupons:[],courseSet:{cover:{}}},activeItemIndex:-1,showList:!1,itemData:null,couponNumber:0,targetType:this.$route.query.targetType,targetId:this.$route.params.id,targetUnit:this.$route.params.unit,targetNum:this.$route.params.num,vipOrderType:this.$route.params.type}},computed:i()({},Object(o.mapState)(["wechatSwitch","isLoading"]),{total:function(){var t=this.course.totalPrice;if(!this.itemData)return t?Number(this.course.totalPrice).toFixed(2):"";var e="minus"===this.itemData.type,a=this.itemData.rate;return e?Math.max(t-a,0).toFixed(2):t?Number(t*a*.1).toFixed(2):""},couponMoney:function(){if(this.itemData){var t="discount"===this.itemData.type,e=this.itemData.rate;return t&&(e=Number(this.course.totalPrice-this.course.totalPrice*this.itemData.rate*.1).toFixed(2)),this.couponNumber=e,e}},couponShow:function(){return this.couponNumber?"-￥"+this.couponNumber:this.course.availableCoupons.length+"张可用"},getValidity:function(){return this.$route.query.expiryScope||"永久有效"}}),filters:{filterPrice:function(t){return parseFloat(t).toFixed(2)}},created:function(){var t=this;"升级"===this.vipOrderType&&(this.targetUnit=void 0,this.targetNum=void 0);var e={targetType:this.targetType,targetId:this.targetId,num:this.targetNum,unit:this.targetUnit};c.a.confirmOrder({data:e}).then(function(e){t.course=e}).catch(function(e){t.$router.go(-1)})},methods:{handleSubmit:function(){var t=this;0!=this.total?this.$router.push({name:"pay",query:{id:this.targetId,targetType:this.targetType},params:{couponCode:this.itemData?this.itemData.code:"",unit:this.targetUnit,num:this.targetNum}}):c.a.createOrder({data:{targetType:this.targetType,targetId:this.targetId,isOrderCreate:1,couponCode:this.itemData?this.itemData.code:"",unit:this.targetUnit,num:this.targetNum}}).then(function(){t.wechatSwitch?t.$router.replace({path:"/pay_success",query:{targetType:t.targetType,targetId:t.targetId}}):"vip"===t.targetType?t.$router.replace({path:"/"+t.targetType},function(){t.$router.go(-1)}):t.$router.replace({path:"/"+t.targetType+"/"+t.targetId},function(){t.$router.go(-1)})})},disuse:function(){this.showList=!1,this.activeItemIndex=-1,this.itemData=null,this.couponNumber=0},chooseItem:function(t){this.activeItemIndex=t.index,this.itemData=t.itemData,this.showList=!1}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order"},[a("div",{staticClass:"goods-info"},[t.isLoading?a("e-loading"):t._e(),t._v(" "),Object.keys(t.course).length>0?a("e-course",{attrs:{type:"confirmOrder",typeList:t.targetType,duration:t.course.duration,order:t.course,course:t.course}}):t._e(),t._v(" "),a("div",{staticClass:"order-coupon"},[a("div",{staticClass:"coupon-column",on:{click:function(e){t.showList=!0}}},[a("span",[t._v("优惠券")]),t._v(" "),a("span",{staticClass:"red"},[t._v(t._s(t.couponShow))])]),t._v(" "),a("van-popup",{staticClass:"e-popup full-height-popup coupon-popup",attrs:{position:"bottom",overlay:!1},model:{value:t.showList,callback:function(e){t.showList=e},expression:"showList"}},[a("van-nav-bar",{staticClass:"nav-bar",attrs:{title:"优惠券","left-arrow":!0},on:{"click-left":t.disuse}}),t._v(" "),a("div",{class:["btn-coupon-exit",{active:t.activeItemIndex<0}],on:{click:t.disuse}},[t._v("不使用优惠\n          "),a("i",{staticClass:"h5-icon h5-icon-circle"}),t._v(" "),a("i",{staticClass:"h5-icon h5-icon-check"})]),t._v(" "),a("div",{staticClass:"e-popup__content coupon-popup__content"},t._l(t.course.availableCoupons,function(e,s){return a("coupon",{key:s,attrs:{coupon:e,index:s,active:t.activeItemIndex,showButton:!1,showSelecet:!0},on:{chooseItem:t.chooseItem}})})),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.course.availableCoupons.length,expression:"!course.availableCoupons.length"}],staticClass:"coupon-empty"},[a("img",{staticClass:"empty-img",attrs:{src:"static/images/coupon_empty.png"}}),t._v(" "),a("div",{staticClass:"empty-text"},[t._v("暂无优惠券")])])],1)],1),t._v(" "),"vip"!==t.targetType?a("div",{staticClass:"order-goods-item"},[a("span",[t._v("学习有效期")]),t._v(" "),a("span",{staticClass:"gray-dark",domProps:{innerHTML:t._s(t.getValidity)}})]):t._e()],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.itemData,expression:"itemData"}],staticClass:"order-accounts"},[a("div",{staticClass:"mb20 title-18"},[t._v("结算")]),t._v(" "),a("div",{staticClass:"flex-between-item"},[a("span",{staticClass:"mbl"},[t._v("商品价格：")]),t._v(" "),a("span",{staticClass:"red"},[t._v("￥ "+t._s(t._f("filterPrice")(t.course.totalPrice)))])]),t._v(" "),a("div",{staticClass:"flex-between-item"},[a("span",{staticClass:"mbl"},[t._v("优惠券：")]),t._v(" "),a("span",{staticClass:"red"},[t._v("-￥ "+t._s(t.couponMoney))])]),t._v(" "),a("div",{staticClass:"flex-between-item"},[a("span",{staticClass:"mbl"},[t._v("应付：")]),t._v(" "),a("span",{staticClass:"red"},[t._v("￥ "+t._s(t.total))])])]),t._v(" "),a("van-button",{staticClass:"order-submit-bar submit-btn",attrs:{size:"small"},on:{click:t.handleSubmit}},[t._v("应付￥ "+t._s(t.total))])],1)},staticRenderFns:[]},l=a("VU/8")(u,p,!1,null,null,null);e.default=l.exports}});
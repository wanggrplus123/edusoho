!function(e){var o={};function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(n,t){if(1&t&&(n=a(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)a.d(e,o,function(t){return n[t]}.bind(null,o));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/static-dist/",a(a.s=564)}({564:function(t,n){var e=$("#class-teacher-column .show-more");e.data("toggle",!0),e.click(function(){var t=$(this);t.data("toggle")?($(this).siblings("ul").animate({"max-height":"2160px"},300),$(this).find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up"),t.data("toggle",!1)):($(this).siblings("ul").animate({"max-height":"324px"},300),$(this).find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down"),t.data("toggle",!0))});var o=$("#class-teacher-column");o.on("click",".follow-btn",function(){var t=$(this);$.post(t.data("url"),function(){}).always(function(){t.hide(),o.find(".unfollow-btn").show()})}).on("click",".unfollow-btn",function(){var t=$(this);$.post(t.data("url"),function(){}).always(function(){t.hide(),o.find(".follow-btn").show()})})}});
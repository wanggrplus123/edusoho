webpackJsonp(["app/js/course-manage/student-expiryday/index"],{c45f895b430d095e2859:function(e,a,t){"use strict";function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}();new(function(){function e(){n(this,e),this.validator=null,this.init()}return r(e,[{key:"init",value:function(){this.initDatePicker("#deadline"),this.initRadioChange(),this.initSelectChange(),this.initValidator()}},{key:"initDatePicker",value:function(e){var a=this,t=$(e);t.datetimepicker({format:"yyyy-mm-dd",language:document.documentElement.lang,minView:2,autoclose:!0,endDate:new Date(Date.now()+31536e7)}).on("hide",function(){a.validator.form()}),t.datetimepicker("setStartDate",new Date)}},{key:"initValidator",value:function(){var e=this,a=$("#deadline-set-form"),t=a.parents(".modal");this.validator=a.validate({rules:{day:{required:!0,positive_integer:!0,max:7300,es_remote:{type:"get",data:{waveType:function(){return $("[name=waveType]").val()},day:function(){return $("[name=day]").val()}}}}},messages:{day:{required:Translator.trans("validate.modify_days"),max:Translator.trans("validate.modify_day_number"),es_remote:Translator.trans("course_manage.student_expiryday_extend_error_hint_day")}}}),$(".js-save-deadline-set-form").click(function(){e.validator&&e.validator.form()&&$.post(a.attr("action"),a.serialize(),function(){var e=$("#submit").data("user");cd.message({type:"success",message:Translator.trans("course_manage.student_expiryday_extend_success_hint",{name:e})}),t.modal("hide"),window.location.reload()})})}},{key:"initUpdateType",value:function(){var e=$('[name="updateType"]:checked').val(),a=$('[name="deadline"]'),t=$('[name="day"]');switch(this.elementRemoveRules(a),this.elementRemoveRules(t),e){case"day":a.prop("disabled",!0).val(""),this.elementAddRules(t,this.getDayRules());break;case"date":a.prop("disabled",!1),t.val(0),$('[name="waveType"]').val("plus"),this.elementAddRules(a,this.getDateRules())}}},{key:"initRadioChange",value:function(){var e=this;$('input[name="updateType"]').on("change",function(a){e.initUpdateType()})}},{key:"initSelectChange",value:function(){var e=this,a=$('[name="waveType"]');a.on("change",function(a){e.validator.form()||$(a.target).css("border-color","#ed3e3e")}).on("blur",function(a){e.validator.form()||$(a.target).closest(".form-group").addClass("has-error")}),$('[name="day"]').on("blur",function(t){var n=e.validator.form(),r=n?"#e1e1e1":"";a.css("border-color",r)})}},{key:"elementAddRules",value:function(e,a){e.rules("add",a)}},{key:"elementRemoveRules",value:function(e){e.rules("remove"),e.removeClass("form-control-error");var a=e.closest(".form-group");a.removeClass("has-error"),a.find(".jq-validate-error").remove()}},{key:"getDayRules",value:function(){return{required:!0,positive_integer:!0,es_remote:{type:"get",data:{waveType:function(){return $("[name=waveType]").val()},day:function(){return $("[name=day]").val()}}},messages:{es_remote:Translator.trans("course_manage.student_expiryday_extend_error_hint_day")}}}},{key:"getDateRules",value:function(){return{required:!0,date:!0,es_remote:{type:"get",data:{deadline:function(){return $("[name=deadline]").val()}}},messages:{es_remote:Translator.trans("course_manage.student_expiryday_extend_error_hint_date"),required:Translator.trans("validate.modify_date")}}}}]),e}())}},["c45f895b430d095e2859"]);
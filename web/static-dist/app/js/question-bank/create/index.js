webpackJsonp(["app/js/question-bank/create/index"],{"61079d278d346af21b83":function(e,t,a){"use strict";$("#bank-form").validate({currentDom:"#create-btn",ajax:!0,rules:{name:{required:!0,maxlength:30,trim:!0},categoryId:{required:!0}},messages:{categoryId:{required:Translator.trans("admin.question_bank.choose_category")}},submitSuccess:function(e){window.location.href=e.goto}}),$('[name="categoryId"]').select2({treeview:!0,dropdownAutoWidth:!0,treeviewInitState:"collapsed",placeholderOption:"first",formatNoMatches:function(){return Translator.trans("admin.question_bank.no_category")}})}},["61079d278d346af21b83"]);
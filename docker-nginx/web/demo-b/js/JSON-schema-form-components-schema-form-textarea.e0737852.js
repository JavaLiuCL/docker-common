(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["JSON-schema-form-components-schema-form-textarea"],{"4cf0":function(e,t,a){"use strict";a.r(t);var n=a("7a23");function o(e,t,a,o,r,u){var c=Object(n["resolveComponent"])("a-textarea");return Object(n["openBlock"])(),Object(n["createBlock"])(c,Object(n["mergeProps"])({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=function(t){return e.modelValue=t})},Object(n["toHandlers"])(e.formItem.eventObject),e.formItem.props),null,16,["value"])}var r=a("ade3"),u=(a("5704"),a("b558")),c=(a("b0c0"),Object(n["defineComponent"])({name:"schema-form-textarea",emits:["update:value"],components:Object(r["a"])({},u["a"].TextArea.name,u["a"].TextArea),props:{formItem:{type:Object,default:function(){return{}}},value:void 0},setup:function(e,t){t.attrs;var a=t.emit,o=Object(n["computed"])({get:function(){return e.value},set:function(e){return a("update:value",e)}});return{modelValue:o}}}));c.render=o;t["default"]=c}}]);
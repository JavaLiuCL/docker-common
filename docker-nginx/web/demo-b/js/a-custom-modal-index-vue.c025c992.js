(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["a-custom-modal-index-vue"],{"22d9":function(e,t,o){"use strict";o.r(t);var c=o("7a23"),a={ref:"modalRootRef",class:"ant-modal-root custom-modal"},r={class:"ant-modal-mask"},l={key:0,ref:"modalWrapRef",class:"ant-modal-wrap"},n={ref:"dragRef",class:"ant-modal"},d={class:"ant-modal-content"},i={ref:"titleRef",class:"ant-modal-header"},s={class:"ant-modal-title"},b={class:"ant-modal-operate"},u={ref:"minRef",type:"button",class:"min",title:"最小化"},f={ref:"maxRef",type:"button",class:"max",title:"最大化"},O={ref:"revertRef",type:"button",class:"revert",title:"还原"},j={ref:"resizeLRef",class:"resizeL"},m={ref:"resizeTRef",class:"resizeT"},p={ref:"resizeRRef",class:"resizeR"},N={ref:"resizeBRef",class:"resizeB"},V={ref:"resizeLTRef",class:"resizeLT"},v={ref:"resizeTRRef",class:"resizeTR"},k={ref:"resizeBRRef",class:"resizeBR"},y={ref:"resizeLBRef",class:"resizeLB"},R={ref:"modalBody",class:"ant-modal-body"},B=Object(c["createTextVNode"])(" ① 窗口可以拖动；"),T=Object(c["createVNode"])("br",null,null,-1),z=Object(c["createTextVNode"])(" ② 窗口可以通过八个方向改变大小；"),C=Object(c["createVNode"])("br",null,null,-1),w=Object(c["createTextVNode"])(" ③ 窗口可以最小化、最大化、还原、关闭；"),x=Object(c["createVNode"])("br",null,null,-1),g=Object(c["createTextVNode"])(" ④ 限制窗口最小宽度/高度。 "),h={key:0,ref:"modalFooter",class:"ant-modal-footer"},L=Object(c["createTextVNode"])("取 消"),S=Object(c["createTextVNode"])("确 认");function M(e,t,o,M,P,_){var D=Object(c["resolveComponent"])("a-button");return e.destroyOnClose&&!e.visible?(Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],{key:0},[],64)):(Object(c["openBlock"])(),Object(c["createBlock"])(c["Teleport"],{key:1,to:"body"},[Object(c["createVNode"])("div",a,[Object(c["createVNode"])(c["Transition"],Object(c["mergeProps"])({key:"mask"},e.maskTransitionProps),{default:Object(c["withCtx"])((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])("div",r,null,512),[[c["vShow"],e.visible]])]})),_:1},16),Object(c["createVNode"])(c["Transition"],Object(c["mergeProps"])({key:"dialog"},e.dialogTransitionProps),{default:Object(c["withCtx"])((function(){return[e.visible?(Object(c["openBlock"])(),Object(c["createBlock"])("div",l,[Object(c["createVNode"])("div",n,[Object(c["createVNode"])("div",d,[Object(c["createVNode"])("div",i,[Object(c["createVNode"])("span",s,Object(c["toDisplayString"])(e.title),1),Object(c["createVNode"])("div",b,[Object(c["createVNode"])("button",u,null,512),Object(c["createVNode"])("button",f,null,512),Object(c["createVNode"])("button",O,null,512),Object(c["createVNode"])("button",{onClick:t[1]||(t[1]=function(){return e.closeModal&&e.closeModal.apply(e,arguments)}),type:"button",class:"close",title:"关闭"})])],512),Object(c["createVNode"])("div",j,null,512),Object(c["createVNode"])("div",m,null,512),Object(c["createVNode"])("div",p,null,512),Object(c["createVNode"])("div",N,null,512),Object(c["createVNode"])("div",V,null,512),Object(c["createVNode"])("div",v,null,512),Object(c["createVNode"])("div",k,null,512),Object(c["createVNode"])("div",y,null,512),Object(c["createVNode"])("div",R,[Object(c["renderSlot"])(e.$slots,"default",{},(function(){return[B,T,z,C,w,x,g]}))],512),null!=e.footer?(Object(c["openBlock"])(),Object(c["createBlock"])("div",h,[Object(c["renderSlot"])(e.$slots,"footer",{},(function(){return[Object(c["createVNode"])("div",null,[Object(c["createVNode"])(D,{onClick:e.closeModal},{default:Object(c["withCtx"])((function(){return[L]})),_:1},8,["onClick"]),Object(c["createVNode"])(D,{onClick:e.closeModal,type:"primary",loading:e.confirmLoading},{default:Object(c["withCtx"])((function(){return[S]})),_:1},8,["onClick","loading"])])]}))],512)):Object(c["createCommentVNode"])("",!0)])],512)],512)):Object(c["createCommentVNode"])("",!0)]})),_:3},16)],512)]))}var P=o("8e1b"),_=o("b548"),D=Object(c["defineComponent"])({name:"a-custom-modal",emits:["update:visible"],components:{Transition:P["Transition"]},props:{title:{type:String,default:"标题"},visible:{type:Boolean,default:!1},destroyOnClose:{type:Boolean,default:!1},footer:{default:"I am footer"},confirmLoading:{type:Boolean,default:!1},centered:{type:Boolean,default:!1}},setup:function(e,t){return Object(_["default"])(e,t)}});o("3653");D.render=M;t["default"]=D},3653:function(e,t,o){"use strict";o("6a4c")},"6a4c":function(e,t,o){}}]);
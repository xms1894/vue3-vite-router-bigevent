import{b as e,G as s,d as a,u as t,c as i,o as n,H as l,a as d,w as o,g as r,e as f,I as c,a2 as u,n as p,r as y,_ as g,h as b}from"./index-C6yrd5mH.js";const k=e({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:Boolean,href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:s}}),v={click:e=>e instanceof MouseEvent},h=a({name:"ElLink"});const m=b(g(a({...h,props:k,emits:v,setup(e,{emit:s}){const a=e,g=t("link"),b=i((()=>[g.b(),g.m(a.type),g.is("disabled",a.disabled),g.is("underline",a.underline&&!a.disabled)]));function k(e){a.disabled||s("click",e)}return(e,s)=>(n(),l("a",{class:p(f(b)),href:e.disabled||!e.href?void 0:e.href,target:e.disabled||!e.href?void 0:e.target,onClick:k},[e.icon?(n(),d(f(c),{key:0},{default:o((()=>[(n(),d(r(e.icon)))])),_:1})):u("v-if",!0),e.$slots.default?(n(),l("span",{key:1,class:p(f(g).e("inner"))},[y(e.$slots,"default")],2)):u("v-if",!0),e.$slots.icon?y(e.$slots,"icon",{key:2}):u("v-if",!0)],10,["href","target"]))}}),[["__file","link.vue"]]));export{m as E};

import{b as e,d as a,u as s,c as l,p as t,o as r,a as u,w as o,r as n,n as p,e as d,f as c,g as i,_ as f,h as m,i as g,m as y,j as v,k as b,l as _,q as w,s as x,t as h,v as j,x as V,y as k,z as E,E as N,A as C,B as S,C as O,D as q}from"./index-C6yrd5mH.js";import{E as U}from"./el-checkbox-BHON1HjU.js";import{E as $,a as z}from"./el-form-item-DqV8URwO.js";import{E as L}from"./el-link-CG59wOvY.js";import{_ as R,E as A}from"./_plugin-vue_export-helper-CVcqmBuK.js";import{E as B}from"./el-input-Dd4YCAAp.js";import"./el-message-DOujGntW.js";import"./isEqual-GfjNzJ0u.js";const D=Symbol("rowContextKey"),I=e({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:["start","center","end","space-around","space-between","space-evenly"],default:"start"},align:{type:String,values:["top","middle","bottom"]}}),K=a({name:"ElRow"});const P=m(f(a({...K,props:I,setup(e){const a=e,f=s("row"),m=l((()=>a.gutter));t(D,{gutter:m});const g=l((()=>{const e={};return a.gutter?(e.marginRight=e.marginLeft="-".concat(a.gutter/2,"px"),e):e})),y=l((()=>[f.b(),f.is("justify-".concat(a.justify),"start"!==a.justify),f.is("align-".concat(a.align),!!a.align)]));return(e,a)=>(r(),u(i(e.tag),{class:p(d(y)),style:c(d(g))},{default:o((()=>[n(e.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","row.vue"]])),T=e({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:g([Number,Object]),default:()=>y({})},sm:{type:g([Number,Object]),default:()=>y({})},md:{type:g([Number,Object]),default:()=>y({})},lg:{type:g([Number,Object]),default:()=>y({})},xl:{type:g([Number,Object]),default:()=>y({})}}),F=a({name:"ElCol"});const G=m(f(a({...F,props:T,setup(e){const a=e,{gutter:t}=v(D,{gutter:l((()=>0))}),f=s("col"),m=l((()=>{const e={};return t.value&&(e.paddingLeft=e.paddingRight="".concat(t.value/2,"px")),e})),g=l((()=>{const e=[];["span","offset","pull","push"].forEach((s=>{const l=a[s];b(l)&&("span"===s?e.push(f.b("".concat(a[s]))):l>0&&e.push(f.b("".concat(s,"-").concat(a[s]))))}));return["xs","sm","md","lg","xl"].forEach((s=>{b(a[s])?e.push(f.b("".concat(s,"-").concat(a[s]))):_(a[s])&&Object.entries(a[s]).forEach((([a,l])=>{e.push("span"!==a?f.b("".concat(s,"-").concat(a,"-").concat(l)):f.b("".concat(s,"-").concat(l)))}))})),t.value&&e.push(f.is("guttered")),[f.b(),e]}));return(e,a)=>(r(),u(i(e.tag),{class:p(d(g)),style:c(d(m))},{default:o((()=>[n(e.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","col.vue"]])),H={class:"flex"},J=R({__name:"LoginPage",setup(e){const a=w(!1),s=w(),l=w({username:"",password:"",repassword:""}),t={username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,max:10,message:"用户名必须是 5-10位 的字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"密码必须是 6-15位 的非空字符",trigger:"blur"}],repassword:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"密码必须是 6-15位 的非空字符",trigger:"blur"},{validator:(e,a,s)=>{l.value.password!==a?s(new Error("两次输入密码不一致")):s()},trigger:"blur"}]},n=async()=>{await s.value.validate(),await E(l.value),N.success("注册成功"),a.value=!1},p=x(),c=C(),i=async()=>{await s.value.validate();const e=await S(l.value);p.setToken(e.data.token),N.success("登录成功"),c.push("/")};return h(a,(()=>{a.value&&(l.value={username:"",password:"",repassword:""})})),(e,p)=>{const c=G,f=$,m=B,g=A,y=L,v=z,b=U,_=P;return r(),u(_,{class:"login-page"},{default:o((()=>[j(c,{span:12,class:"bg"}),j(c,{span:6,offset:3,class:"form"},{default:o((()=>[a.value?(r(),u(v,{key:0,model:l.value,rules:t,ref_key:"form",ref:s,size:"large",autocomplete:"off"},{default:o((()=>[j(f,null,{default:o((()=>p[7]||(p[7]=[V("h1",null,"注册",-1)]))),_:1}),j(f,{prop:"username"},{default:o((()=>[j(m,{modelValue:l.value.username,"onUpdate:modelValue":p[0]||(p[0]=e=>l.value.username=e),"prefix-icon":d(O),placeholder:"请输入用户名"},null,8,["modelValue","prefix-icon"])])),_:1}),j(f,{prop:"password"},{default:o((()=>[j(m,{modelValue:l.value.password,"onUpdate:modelValue":p[1]||(p[1]=e=>l.value.password=e),"prefix-icon":d(q),type:"password",placeholder:"请输入密码"},null,8,["modelValue","prefix-icon"])])),_:1}),j(f,{prop:"repassword"},{default:o((()=>[j(m,{modelValue:l.value.repassword,"onUpdate:modelValue":p[2]||(p[2]=e=>l.value.repassword=e),"prefix-icon":d(q),type:"password",placeholder:"请再次输入密码"},null,8,["modelValue","prefix-icon"])])),_:1}),j(f,null,{default:o((()=>[j(g,{onClick:n,class:"button",type:"primary","auto-insert-space":""},{default:o((()=>p[8]||(p[8]=[k(" 注册 ")]))),_:1})])),_:1}),j(f,{class:"flex"},{default:o((()=>[j(y,{type:"info",underline:!1,onClick:p[3]||(p[3]=e=>a.value=!1)},{default:o((()=>p[9]||(p[9]=[k(" ← 返回 ")]))),_:1})])),_:1})])),_:1},8,["model"])):(r(),u(v,{key:1,model:l.value,rules:t,ref_key:"form",ref:s,size:"large",autocomplete:"off"},{default:o((()=>[j(f,null,{default:o((()=>p[10]||(p[10]=[V("h1",null,"登录",-1)]))),_:1}),j(f,{prop:"username"},{default:o((()=>[j(m,{modelValue:l.value.username,"onUpdate:modelValue":p[4]||(p[4]=e=>l.value.username=e),"prefix-icon":d(O),placeholder:"请输入用户名"},null,8,["modelValue","prefix-icon"])])),_:1}),j(f,{prop:"password"},{default:o((()=>[j(m,{modelValue:l.value.password,"onUpdate:modelValue":p[5]||(p[5]=e=>l.value.password=e),name:"password","prefix-icon":d(q),type:"password",placeholder:"请输入密码"},null,8,["modelValue","prefix-icon"])])),_:1}),j(f,{class:"flex"},{default:o((()=>[V("div",H,[j(b,null,{default:o((()=>p[11]||(p[11]=[k("记住我")]))),_:1}),j(y,{type:"primary",underline:!1},{default:o((()=>p[12]||(p[12]=[k("忘记密码？")]))),_:1})])])),_:1}),j(f,null,{default:o((()=>[j(g,{onClick:i,class:"button",type:"primary","auto-insert-space":""},{default:o((()=>p[13]||(p[13]=[k("登录")]))),_:1})])),_:1}),j(f,{class:"flex"},{default:o((()=>[j(y,{type:"info",underline:!1,onClick:p[6]||(p[6]=e=>a.value=!0)},{default:o((()=>p[14]||(p[14]=[k(" 注册 → ")]))),_:1})])),_:1})])),_:1},8,["model"]))])),_:1})])),_:1})}}},[["__scopeId","data-v-5d556921"]]);export{J as default};

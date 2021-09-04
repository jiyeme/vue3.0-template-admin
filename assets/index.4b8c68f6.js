var e=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(l,o,t)=>o in l?e(l,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[o]=t;import{d as r,G as i,m as d,g as c,e as u,f as m,H as f,E as p,s as b,v as g,x as _,p as y,c as C,aM as h,w as k}from"./vendor.aebea105.js";import{r as V}from"./axios.178364ea.js";import"./index.8520c1c3.js";const v=r({props:{collegeInfo:{type:Object,required:!0}},emits:["success"],data(){return{form:i(this.$props,"collegeInfo")}},methods:{submitForm(){var e;console.log("提交修改"),(e=this.form,V.patch("/settings/college/edit",e)).then((e=>{console.log(e),e.data.result&&this.$emit("success")}))}}}),w=m("i",{class:"fa fa-plus"},null,-1),S=p(" 确认修改 ");v.render=function(e,l,o,t,a,s){const n=d("el-input"),r=d("el-form-item"),i=d("el-button"),p=d("el-row"),b=d("el-form");return c(),u("div",null,[m(b,{ref:"form",model:e.form},{default:f((()=>[m(r,{label:"学院名称"},{default:f((()=>[m(n,{modelValue:e.form.name,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.name=l)},null,8,["modelValue"])])),_:1}),m(r,{label:"学院标记"},{default:f((()=>[m(n,{modelValue:e.form.mark,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.mark=l)},null,8,["modelValue"])])),_:1}),m(p,{class:"btn-container"},{default:f((()=>[m(i,{size:"mini",type:"primary",onClick:l[3]||(l[3]=l=>e.submitForm())},{default:f((()=>[w,S])),_:1})])),_:1})])),_:1},8,["model"])])};const j=r({props:{},emits:["success"],data:()=>({form:{name:"",mark:""}}),methods:{submitForm(){var e;console.log("提交添加"),(e=this.form,V.post("/settings/college/add",e)).then((e=>{console.log(e),e.data.result&&this.$emit("success")}))}}}),O=m("i",{class:"fa fa-plus"},null,-1),E=p(" 确认添加 ");j.render=function(e,l,o,t,a,s){const n=d("el-input"),r=d("el-form-item"),i=d("el-button"),p=d("el-row"),b=d("el-form");return c(),u("div",null,[m(b,{ref:"form",model:e.form},{default:f((()=>[m(r,{label:"学院名称"},{default:f((()=>[m(n,{modelValue:e.form.name,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.name=l)},null,8,["modelValue"])])),_:1}),m(r,{label:"学院标记"},{default:f((()=>[m(n,{modelValue:e.form.mark,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.mark=l)},null,8,["modelValue"])])),_:1}),m(p,{class:"btn-container"},{default:f((()=>[m(i,{size:"mini",type:"primary",onClick:l[3]||(l[3]=l=>e.submitForm())},{default:f((()=>[O,E])),_:1})])),_:1})])),_:1},8,["model"])])};const z=r({components:{CollegeEdit:v,CollegeNew:j},setup(){const e=b({list:[],add_display:!1,edit_display:!1,postCollege:{}}),r=()=>{V.get("/settings/college/list").then((l=>{e.list=l.data.list}))};return g((()=>{console.log("effect"),r()})),i=((e,l)=>{for(var o in l||(l={}))a.call(l,o)&&n(e,o,l[o]);if(t)for(var o of t(l))s.call(l,o)&&n(e,o,l[o]);return e})({},_(e)),l(i,o({onCreate:()=>{e.add_display=!0},onCreateSuccess:()=>{console.log("onCreateSuccess"),e.add_display=!1,r()},onEditSuccess:()=>{console.log("onEditSuccess"),e.edit_display=!1,e.postCollege={},r()},onEdit:l=>{e.edit_display=!0,e.postCollege=l},onDelete:e=>{var l;(l=e.id,V.delete(`/settings/college/delete/${l}`)).then((e=>{e.data.result&&(r(),h({type:"success",message:"删除成功"}))}))},onRefresh:()=>{r()}}));var i}}),U=k();y("data-v-55ffb065");const P=m("h2",null,"学院管理",-1),x=p("新增"),F=p("刷新");C();const I=U(((e,l,o,t,a,s)=>{const n=d("el-button"),r=d("el-col"),i=d("el-table-column"),f=d("el-tooltip"),p=d("el-table"),b=d("CollegeEdit"),g=d("el-dialog"),_=d("CollegeNew"),y=d("el-card");return c(),u("div",null,[m(y,{class:"card"},{default:U((()=>[P,m(r,null,{default:U((()=>[m(n,{type:"primary",icon:"el-icon-plus",size:"small",onClick:e.onCreate},{default:U((()=>[x])),_:1},8,["onClick"]),m(n,{type:"success",icon:"el-icon-refresh",size:"small",onClick:e.onRefresh},{default:U((()=>[F])),_:1},8,["onClick"])])),_:1}),m(p,{data:e.list,width:"100%"},{default:U((()=>[m(i,{prop:"name",label:"学院名称",width:"180"}),m(i,{prop:"mark",label:"学院标记"}),m(i,{label:"操作"},{default:U((l=>[m(f,{class:"item",effect:"dark",content:"修改",placement:"bottom"},{default:U((()=>[m(n,{circle:"",plain:"",type:"primary",icon:"el-icon-edit",size:"mini",onClick:o=>e.onEdit(l.row)},null,8,["onClick"])])),_:2},1024),m(f,{class:"item",effect:"dark",content:"删除",placement:"bottom"},{default:U((()=>[m(n,{circle:"",plain:"",type:"danger",icon:"el-icon-minus",size:"mini",onClick:o=>e.onDelete(l.row)},null,8,["onClick"])])),_:2},1024)])),_:1})])),_:1},8,["data"]),m(g,{modelValue:e.edit_display,"onUpdate:modelValue":l[1]||(l[1]=l=>e.edit_display=l),title:"编辑学院信息"},{default:U((()=>[m(b,{"college-info":e.postCollege,onSuccess:e.onEditSuccess},null,8,["college-info","onSuccess"])])),_:1},8,["modelValue"]),m(g,{modelValue:e.add_display,"onUpdate:modelValue":l[2]||(l[2]=l=>e.add_display=l),title:"添加学院信息"},{default:U((()=>[m(_,{onSuccess:e.onCreateSuccess},null,8,["onSuccess"])])),_:1},8,["modelValue"])])),_:1})])}));z.render=I,z.__scopeId="data-v-55ffb065";export{z as default};

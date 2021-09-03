var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,s=(e,l)=>{for(var a in l||(l={}))o.call(l,a)&&r(e,a,l[a]);if(t)for(var a of t(l))n.call(l,a)&&r(e,a,l[a]);return e},i=(e,t)=>l(e,a(t));import{u}from"./index.cd9dfcc0.js";import{r as d}from"./axios.355e15a0.js";import{d as c,G as m,i as p,s as f,b as g,v as b,x as h,p as v,c as _,m as y,aP as k,B as w,g as C,e as z,f as N,t as V,w as E,E as R,r as S,H as x,A as O,I as j}from"./vendor.46a65300.js";var I=c({name:"RolesEdit",props:{currentRole:{type:Object,default:()=>({name:"",state:1})}},emits:["success"],setup(e,{emit:l}){const a=m(e,"currentRole"),t=u(),o=p((()=>t.getters["settingsModule/getLangState"])),n=f({url:"/role/allow",purl:"/role/permissions",loading:!1,form:{key:"",label:""},menu:{loading:!1,url:"/menu/list",data:[],form:[],original:[]}}),r=p((()=>a.value.role)),c=async()=>{var e;(e=r.value.id,d.get("/auth/roles/menus",{params:{role_id:e}})).then((e=>{if(null==e?void 0:e.data){const{authedRoutes:l}=e.data;n.menu.form=l,n.menu.original=JSON.parse(JSON.stringify(l))}}))},v=()=>{d.get("/auth/menus").then((e=>{e.data.forEach((e=>{n.menu.data.push({key:null==e?void 0:e.id,label:null==e?void 0:e.name})}))}))};return g((()=>{console.log("onMounted"),v()})),b((()=>{c()})),i(s({},h(n)),{lang:o,role:r,fetchMenuData:v,saveData:()=>{console.log("original is ",n.menu.original),console.log("new is ",n.menu.form);const e=[];var a;n.menu.original.forEach((l=>{n.menu.form.includes(l)||e.push({roleId:r.value.id,menuId:l,type:2})})),n.menu.form.forEach((l=>{n.menu.original.includes(l)||e.push({roleId:r.value.id,menuId:l,type:1})})),(a=e,d.patch("/auth/roles/menus",a)).then((e=>{console.log(e),l("success")}))}})}});const D=E();v("data-v-2112513b");const M={class:"wrapper"},P={class:"card-header"},U=N("br",null,null,-1),B=N("i",{class:"fa fa-check"},null,-1),T=R(" 确认修改 ");_();const $=D(((e,l,a,t,o,n)=>{const r=y("el-form-item"),s=y("el-form"),i=y("el-transfer"),u=y("el-card"),d=y("el-button"),c=y("el-row"),m=k("loading");return w((C(),z("div",M,[N(u,{class:"transfer"},{header:D((()=>[N("span",null,[N("div",P,[N(s,{"label-position":"left",inline:"",class:"info-table"},{default:D((()=>[N(r,{label:"名称"},{default:D((()=>[N("span",null,V(e.role.name),1)])),_:1})])),_:1})])])])),default:D((()=>[w(N(i,{modelValue:e.menu.form,"onUpdate:modelValue":l[1]||(l[1]=l=>e.menu.form=l),data:e.menu.data,titles:["菜单","已授权"]},null,8,["modelValue","data"]),[[m,e.menu.loading]])])),_:1}),U,N(c,{class:"btns"},{default:D((()=>[N(d,{size:"mini",type:"primary",disabled:0==e.role.state,onClick:e.saveData},{default:D((()=>[B,T])),_:1},8,["disabled","onClick"])])),_:1})],512)),[[m,e.loading]])}));I.render=$,I.__scopeId="data-v-2112513b";var F=c({name:"RoleNew",emits:["success"],setup(e,{emit:l}){const a=S(),t=f({form:{roleName:"",remark:""},loading:!1});return s({submitForm:()=>{a.value.validate((e=>e?(l("success",s({},t.form)),t.form={roleName:"",remark:""},!0):(console.log("error submit!!"),!1)))},rules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}]},formRef:a,url:"/role/add"},h(t))}});const J={class:"new"},q=N("i",{class:"fa fa-plus"},null,-1),A=R(" 新增 ");F.render=function(e,l,a,t,o,n){const r=y("el-input"),s=y("el-form-item"),i=y("el-button"),u=y("el-row"),d=y("el-form"),c=k("loading");return w((C(),z("div",J,[N(d,{ref:"formRef",model:e.form,rules:e.rules,"label-position":"right","label-width":"100px"},{default:x((()=>[N(s,{label:"角色名称",prop:"roleName"},{default:x((()=>[N(r,{modelValue:e.form.roleName,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.roleName=l),placeholder:"请输入角色名称"},null,8,["modelValue"])])),_:1}),N(s,{label:"备注"},{default:x((()=>[N(r,{modelValue:e.form.remark,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.remark=l),placeholder:"请输入备注"},null,8,["modelValue"])])),_:1}),N(u,{class:"btn-container"},{default:x((()=>[N(i,{size:"mini",type:"primary",onClick:l[3]||(l[3]=l=>e.submitForm())},{default:x((()=>[q,A])),_:1})])),_:1})])),_:1},8,["model","rules"])],512)),[[c,e.loading]])};const G=e=>(console.log("删除的ID:",e),O.ElMessageBox.confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{return(l=e,d.delete(`/auth/roles/${l}`)).then((e=>{console.log(e),O.ElMessage({type:"success",message:"删除成功"})}));var l})).catch((()=>{O.ElMessage({type:"info",message:"已取消删除"})})));var H=c({name:"RoleManage",components:{RoleEdit:I,RoleNew:F},setup(){const e=f({url:{c:"/role/add",r:"/role/list",u:"/role/update",d:"/role/delete"},param:{limit:10,page:1},data:[{id:1,name:"超级管理员",remark:"拥有删除和创建等操作的权限",state:1}],loading:!1,is_search:!1,add_visible:!1,edit_visible:!1,detail_visible:!1,posted:{role:{roleName:"",state:1}}}),l=p((()=>e.data.length)),a=()=>{console.log("获取角色列表"),d.get("/auth/roles").then((l=>{console.log(l),e.data=l.data}))};a();return i(s({},h(e)),{total:l,onCurrentChange:()=>{a()},onSizeChange:l=>{e.param.limit=l,a()},onCreate:()=>{e.add_visible=!0},onCreateNewRole:l=>{e.add_visible=!1;const t={name:l.roleName,remark:l.remark,state:1};var o;(o=t,d.post("/auth/roles",o)).then((e=>{console.log(e),a()}))},onEditSuccess:()=>{e.edit_visible=!1,a()},onRefresh:()=>{e.is_search=!1,a()},onEdit:(l,a)=>{console.log("row",a),e.posted.role=a,e.edit_visible=!0},onDelete:(e,l)=>{console.log(e,l),G(l.id).then((()=>{a()}))}})}});const L=R("新增"),K=R("刷新"),Q=N("br",null,null,-1),W=N("i",{class:"ic ic-lock"},null,-1),X=R(" 锁定 "),Y=R("正常"),Z=R("未知"),ee={class:"pagination"};H.render=function(e,l,a,t,o,n){const r=y("el-alert"),s=y("el-button"),i=y("el-col"),u=y("el-row"),d=y("el-table-column"),c=y("el-tag"),m=y("el-tooltip"),p=y("el-table"),f=y("el-pagination"),g=y("el-card"),b=y("role-edit"),h=y("el-dialog"),v=y("role-new"),_=k("loading");return C(),z("div",null,[N(r,{title:"Tips:点击【新增】按钮进行新增角色；点击【编辑】按钮，进行不同角色的菜单授权操作！",type:"warning"}),N(r,{title:"Tips:权限控制体验：【管理员账号为：admin@outlook.com】、【超级管理员账号为：super@outlook.com】",type:"info"}),N(g,{class:"card-ctrl"},{default:x((()=>[N(u,null,{default:x((()=>[N(i,{span:8,style:{"text-align":"left"}},{default:x((()=>[N(s,{type:"primary",icon:"el-icon-plus",size:"small",onClick:e.onCreate},{default:x((()=>[L])),_:1},8,["onClick"]),N(s,{type:"success",icon:"el-icon-refresh",size:"small",onClick:e.onRefresh},{default:x((()=>[K])),_:1},8,["onClick"])])),_:1})])),_:1}),Q,w(N(p,{data:e.data,stripe:"",class:"table"},{default:x((()=>[N(d,{prop:"name",label:"角色名称",align:"center"}),N(d,{prop:"state",label:"角色状态",align:"center"},{default:x((e=>[2===e.row.state?(C(),z(c,{key:0,size:"mini",type:"info"},{default:x((()=>[W,X])),_:1})):1===e.row.state?(C(),z(c,{key:1,size:"mini",type:"success"},{default:x((()=>[Y])),_:1})):(C(),z(c,{key:2,size:"mini",type:"danger"},{default:x((()=>[Z])),_:1}))])),_:1}),N(d,{prop:"remark",label:"备注",align:"center"}),N(d,{label:"操作",align:"center"},{default:x((l=>[N(m,{class:"item",effect:"dark",content:"菜单授权",placement:"bottom"},{default:x((()=>[N(s,{circle:"",plain:"",type:"primary",icon:"el-icon-edit",size:"small",onClick:a=>e.onEdit(l.$index,l.row)},null,8,["onClick"])])),_:2},1024),N(m,{class:"item",effect:"dark",content:"删除",placement:"bottom"},{default:x((()=>[0!=l.row.state?(C(),z(s,{key:0,circle:"",plain:"",type:"danger",icon:"el-icon-minus",size:"small",onClick:a=>e.onDelete(l.$index,l.row)},null,8,["onClick"])):j("",!0)])),_:2},1024)])),_:1})])),_:1},8,["data"]),[[_,e.loading]]),N("div",ee,[N(f,{"current-page":e.param.page,"page-size":e.param.limit,layout:"sizes,prev,pager,next,total","page-sizes":[5,10,20],total:e.total,background:"",onCurrentChange:e.onCurrentChange,onSizeChange:e.onSizeChange},null,8,["current-page","page-size","total","onCurrentChange","onSizeChange"])])])),_:1}),N(h,{modelValue:e.edit_visible,"onUpdate:modelValue":l[1]||(l[1]=l=>e.edit_visible=l),center:"",title:e.posted.role.roleName,width:"70%"},{default:x((()=>[N(b,{"current-role":e.posted,onSuccess:e.onEditSuccess},null,8,["current-role","onSuccess"])])),_:1},8,["modelValue","title"]),N(h,{modelValue:e.add_visible,"onUpdate:modelValue":l[2]||(l[2]=l=>e.add_visible=l),title:"新增角色"},{default:x((()=>[N(v,{onSuccess:e.onCreateNewRole},null,8,["onSuccess"])])),_:1},8,["modelValue"])])};export{H as default};

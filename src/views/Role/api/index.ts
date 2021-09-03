
import request2 from '@/utils/axios';

export const getRoleList = ()=>request2.get("/auth/roles")
export const deleteRoleItem = (roleId: any)=>request2.delete(`/auth/roles/${  roleId}`)
export const postNewRole = (role: any)=>request2.post("/auth/roles", role)

export const getMenuList = ()=>request2.get("/auth/menus")
export const getRoleMenuList = (roleId: any)=>request2.get("/auth/roles/menus", {
  params: {
    role_id: roleId
  }
})
export const patchRoleMenus = (data: any[])=>request2.patch("/auth/roles/menus", data)


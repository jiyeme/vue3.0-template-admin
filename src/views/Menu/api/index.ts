
import request from '@/utils/axios';

const getMenuList = ()=>request.get("/auth/menus")

export {getMenuList}

export default getMenuList

export const patchMenuItem = (data: any)=>request.patch(`/auth/menus/${  data.id}`, data)
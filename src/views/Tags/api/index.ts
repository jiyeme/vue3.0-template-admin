import request from '@/utils/axios'

export const getCollegeList = ()=>request.get("/settings/college/list")
export const postCollegeItem = (data: any)=>request.post("/settings/college/add", data)
export const patchCollegeItem = (data: any)=>request.patch("/settings/college/edit", data)
export const deleteCollegeItem = (id: any)=>request.delete(`/settings/college/delete/${  id}`)
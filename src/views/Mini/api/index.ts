import request from '@/utils/axios'

// 获取小程序首页配置
export const getMiniIndexConfig = ()=>request.get("/mini/index/get")
// 更新小程序首页配置
export const updateMiniIndexConfig = (data: any)=>request.post("/mini/index/update", data)
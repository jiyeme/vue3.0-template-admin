import axios from "axios";
import { ElMessage } from 'element-plus/lib/components';
import { store } from '@/store'
import router from '../router';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//  process.env.VUE_APP_BASE_URL ||
const baseConfig = {
  baseURL: "/api",
  timeout: 10 * 1000, // Timeout
  withCredentials: false // Check cross-site Access-Control
};

const request = axios.create(baseConfig);

request.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const {token} = store.state;
    if (token) {
      config.headers.Authorization = `Bearer ${  token}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    console.log("request error", error)
    return Promise.reject(error);
  }
);

// Add a response interceptor
request.interceptors.response.use(
  (response) => {
    // Do something with response data
    console.log("response", response);

    if(response.status !== 200)return Promise.reject(response);

    const resp = response.data;
    if(resp.code && resp.code !== 200){
      console.log("状态码异常", resp)
      if(resp.msg){
        ElMessage({
          message: resp.msg,
          center: true,
          type: "error"
        });
      }
      return Promise.reject(resp);
    }

    return response.data;
  },
  (error) => {
    // Do something with response error
    console.log("请求出现异常 - ", error);
    console.log("错误对象类型 - ", Object.prototype.toString.call(error))
    console.log("error.name", error.name)
    console.log("error.message", error.message);
    console.log("error.code", error.code);
    console.log("error.status", error.status);
    
    // 网络异常
    if(error.message === "Network Error"){
      ElMessage({
        message: '网络错误！',
        center: true,
        type: "error"
      });
      return Promise.reject(error);
    }if(error.message.includes("timeout")){
      ElMessage({
        message: '响应超时',
        center: true,
        type: "error"
      });
      return Promise.reject(error);
    }

    // 网络正常，但请求失败
    const resp = error.response;
    const data = resp.data || null;
    console.log(resp)
    if (resp && resp.status) {
      switch (resp.status) {
        // 401: 未登录，或者登录过期
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          ElMessage({
            message: '未登录',
            center: true
          });
          // 清除token
          localStorage.removeItem("token");
          // store.commit("loginSuccess", null);
          store.commit("set_isLogin", false);
          router.push({
            path: "/user/login",
            query: {
              redirect: router.currentRoute.value.fullPath
            }
          });
          break;

        // 403 没有接口相关权限
        // 对用户进行提示
        // 跳转登录页面
        case 403:
          ElMessage({
            message: '你没有权限执行该操作',
            center: true
          });
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          // setTimeout(() => {
          //   router.replace({
          //     path: "/index",
          //     query: {
          //       redirect: router.currentRoute.fullPath
          //     }
          //   });
          // }, 1000);
          break;

        // 404请求不存在
        case 404:
          ElMessage({
            message: '接口不存在！',
            center: true
          });
          break;
        // 其他错误，直接抛出错误提示
        default:
          if(data.error){
            ElMessage({
              message: data.error,
              center: true,
              type: "error"
            });
          }else{
            ElMessage({
              message: '请求发生异常1！',
              center: true,
              type: "error"
            });
          }
      }
    }else{
      ElMessage({
        message: '请求发生异常2！',
        center: true,
        type: "error"
      });
    }
    console.log(" ==== axios尝试处理异常结束 ==== ")
    return Promise.reject(error);
  }
);

export default request;
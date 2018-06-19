import axios from 'axios'
import qs from 'qs'


const http = axios.create({
  timeout: 5000,
  baseURL: 'http://localhost:8080/',
  withCredentials: false, // true时，为跨域
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    'Content-Type': 'application/json;charset=UTF-8'
  }
});
// http请求拦截器
http.interceptors.request.use(config => {
  if (config.method === 'POST' || config.method === 'PUT') {
    console.log("参数转换")
    // POST传参序列化
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// http响应拦截器
http.interceptors.response.use(res => {
  // if (res.data.resCode !== "200") {
  //   console.log("失败")
  //   return Promise.reject(res);
  // }
  // console.log("成功")
  return res.data;
}, (error) => {
  // 404等问题可以在这里处理
  return Promise.reject(error);
});
export default http;
//
// let http = axios.create({
//   timeout: 5000,
//   baseURL: 'http://localhost:8080/',
//   withCredentials: false, // true时，为跨域
//   headers: {
//     // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
//     'Content-Type': 'application/json;charset=UTF-8'
//   }
// });
//
// function apiAxios(method, url, params, response) {
//   http({
//     method: method,
//     url: url,
//     data: method === 'POST' || method === 'PUT' ? params : null,
//     params: method === 'GET' || method === 'DELETE' ? params : null
//   }).then(function (res) {
//     response(res);
//   }).catch(function (err) {
//     response(err);
//   })
// }
//
// export default {
//   get: function (url, params, response) {
//     return apiAxios('GET', url, params, response)
//   },
//   post: function (url, params, response) {
//     return apiAxios('POST', url, params, response)
//   },
//   put: function (url, params, response) {
//     return apiAxios('PUT', url, params, response)
//   },
//   delete: function (url, params, response) {
//     return apiAxios('DELETE', url, params, response)
//   }
// }
//

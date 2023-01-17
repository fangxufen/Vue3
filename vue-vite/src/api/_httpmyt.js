import axios from 'axios'
import { BASE_URL_MYT} from './_base'
// 创建axios实例
export const instance=axios.create({
    baseURL:BASE_URL_MYT,
    timeout:5000
});
// 请求拦截器
instance.interceptors.request.use(
    config=>{
        config.headers["X-Center-Client-Name"] = "rzzt";
        // console.log(store.state.token,7777)
        const token=sessionStorage.getItem('Token')
        if (token) {
            config.headers["Authorization"] = token;
        }
        
        return config;
    },
    error=>{
        return Promise.reject(error)
    }
);
//响应式拦截
instance.interceptors.response.use(
    response=>{
        try{
            const {data,success}=response.data
            if(success){
                return data;
            }else{
                return Promise.reject(response.data)
            }
        }catch(error){
            return Promise.reject(error)
        }
    },
    error=>{
        return Promise.reject(error.response);
    }
);

export const mytget=url=>{
    return async params=>{
        return instance.get(url,{
            params
        })
    }
};
export const mytpost=url=>{
    return async params=>{
        return instance.post(url,params)
    }
}

// export function post(url,data){
//     return new Promise((resolve,reject) => {
//         instance.post(url,data)
//           .then(response => {
//             resolve(response.data);
//           },err => {
//             reject(err)
//           })
//     })
//   }
// export function post2(url,data){
//     return new Promise((resolve,reject) => {
//       instance.post(url,data)
//           .then(response => {
//             resolve(response.data);
//           },err => {
//             reject(err)
//           })
//     })
// }

// export const user = {
//     loginCheck(data) {
//       return instance({
//         url: "/auth/login_check",
//         method: "post",
//         data,
//       });
//     },
//     login(data) {
//       return instance({
//         url: "/auth/login",
//         method: "post",
//         data,
//       });
//     },
//     getInfo(params) {
//       return instance({
//         url: "/user/info",
//         method: "get",
//         params,
//       });
//     },
// };
export default instance

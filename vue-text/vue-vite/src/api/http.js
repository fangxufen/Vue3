import axios from 'axios'

<<<<<<< HEAD
if(process.env.NODE_ENV==="development"){
    // console.log(env.VITE_BASIC_API)
    console.log(process.env.NODE_ENV)
}
=======
>>>>>>> 3796b6426d02787b59700d1037e9d6419bdfc298
// 创建axios实例
export const instance=axios.create({
    baseURL:'/api',
    timeout:5000
});
// 请求拦截器
// instance.interceptors.request.use(
//     config=>{
      
        
//         return config;
//     },
//     error=>{
//         return Promise.reject(error)
//     }
// );
// //响应式拦截
// instance.interceptors.response.use(
//     response=>{
//         try{
//             const {data,success}=response.data
//             if(success){
//                 return data;
//             }else{
//                 return Promise.reject(response.data)
//             }
//         }catch(error){
//             return Promise.reject(error)
//         }
//     },
//     error=>{
//         return Promise.reject(error.response);
//     }
// );

export const get=url=>{
    return async params=>{
        return instance.get(url,{
            params
        })
    }
};
export const post=url=>{
    return async params=>{
        return instance.post(url,params)
    }
}

export default instance

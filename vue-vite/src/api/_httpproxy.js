import axios from 'axios'
import { BASE_URL_PROXY} from './_base'
// 创建axios实例
export const instance=axios.create({
    // 跨域
    baseURL:'/api',
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

export const proxyget=url=>{
    return async params=>{
        return instance.get(url,{
            params
        })
    }
};
export const proxypost=url=>{
    return async params=>{
        return instance.post(url,params)
    }
}

export default instance

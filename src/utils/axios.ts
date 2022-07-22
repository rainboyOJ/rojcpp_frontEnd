// 抄自 https://juejin.cn/post/7090796270683422757
import {h,render,createApp} from 'vue'
import Loading from '@/components/Loading.vue'
import axios from 'axios'

const loadele = createApp(Loading)
const parent = document.createElement('div')
const loadInst = loadele.mount(parent)
const loadingElement = document.getElementById('loading')
//console.log(loadInst)
//console.log(loadInst.$el)


axios.defaults.withCredentials = true

//创建一个实例
const api = axios.create({
    baseURL: import.meta.env['VITE_API_DOMAIN']  || '', // 所有请求的公共地址部分
    timeout: 　5000, // 请求超时时间 这里的意思是当请求时间超过5秒还未取得结果时 提示用户请求超时
    headers : {
        "Content-Type": "application/json"
    }
})

//3.request拦截器 :
// 请求相关处理 请求拦截 在请求拦截中可以补充请求相关的配置
// interceptors axios的拦截器对象
api.interceptors.request.use(config => {
    loadingElement.appendChild(parent)
     // config 请求的所有信息
    // console.log(config);
    return config // 将配置完成的config对象返回出去 如果不返回 请求讲不会进行
}, err => {
    // 请求发生错误时的相关处理 抛出错误
   //Promise.reject(err)
    loadingElement.removeChild(parent)
    console.log(err)
})

//4.response拦截器 :
api.interceptors.response.use(res => {
    // 我们一般在这里处理，请求成功后的错误状态码 例如状态码是500，404，403
    // res 是所有相应的信息
    //console.log(res)
    loadingElement.removeChild(parent)
    if(res.data.code && res.data.code == -1) {
        alert(res.data.msg)
        return;
    }
   return Promise.resolve(res.data)
}, err => {
    // 服务器响应发生错误时的处理
    loadingElement.removeChild(parent)
    const { config, code, message } = err
    if (code === 'ECONNABORTED' || message === 'Network Error') {
        // 请求超时
        alert(`请求超时`)
    }
    Promise.reject(err)
})



//export const getProblemList = (page:number = 1) => api.get(`/problemList/?id=${page}`)
export {
    api
}


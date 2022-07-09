import axios from 'axios'

//创建一个实例
const api = axios.create({
    baseURL: '', // 所有请求的公共地址部分
    timeout: 　3000 // 请求超时时间 这里的意思是当请求时间超过5秒还未取得结果时 提示用户请求超时
})

const a_url  =  import.meta.env['VITE_API_DOMAIN']  || "unkown"
export {
    a_url
}


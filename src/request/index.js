import axios from 'axios'

let service = axios.create({
    //配置对象
    //基础路径。发送请求时，路径当中会出现api
    baseURL: "http://localhost:3000/",
    //代表请求超时的时间5s
    timeout: 5000,
})

//对外暴露
export default service
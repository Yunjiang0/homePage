import axios from "axios";
// import { ElMessage } from "element-plus";
// import qs from "qs"

const service = axios.create({
    baseURL: "https://api.vvhan.com/api",
    // 定义统一的请求头
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
    },
    // 配置超时
    timeout: 10000,
})

export default service
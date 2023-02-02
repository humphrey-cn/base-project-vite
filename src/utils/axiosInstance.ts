/*
 * @Author: Humphrey humphrey_cn@163.com
 * @Date: 2023-02-02 10:37:21
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-02 10:45:33
 * @Description: 实例化axios，配置请求、响应拦截
 */
import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  // AxiosResponse,
} from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 3000,
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {
    return config
  },
  // 请求失败
  (error: any) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: any) => {
    // 统一处理接口响应错误，比如 token 过期无效、服务端异常等
    return response
  },
  (error: any) => {
    return Promise.reject(error)
  },
)

export default axiosInstance

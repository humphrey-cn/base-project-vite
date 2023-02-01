/*
 * @Author: Humphrey humphre_ch@163.com
 * @Date: 2023-01-30 10:06:25
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-01-31 15:50:40
 * @Description: 实例化axios，配置请求响应拦截
 */
import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  // AxiosResponse,
} from 'axios'

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 3000,
})

// axios实例拦截请求
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {
    return config
  },
  // 请求失败
  (error: any) => {
    return error
  },
)

// axios实例拦截响应
// axiosInstance.interceptors.response.use(
// 	(response: AxiosResponse) => {
// 		const res = response.data
// 		if (res.code !== 1 || res.code !== 200) {
// 			return response.data
// 		} else {
// 			return response.data
// 		}
// 	},
// 	(error: any) => {
// 		if (error.response) {
// 			switch (error.response.status) {
// 				case 500:
// 					break
// 				default:
// 					if (error.response.data.error == "invalid_grant") {
// 					}
// 					return Promise.reject(error)
// 			}
// 		}
// 	}
// )

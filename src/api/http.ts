/*
 * @Author: Humphrey humphrey_cn@163.com
 * @Date: 2023-02-02 10:47:07
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-02 10:55:05
 * @Description: 公共基础接口封装
 */
import axiosInstance from '@/utils/axiosInstance'

const http = {
  async get(url: string, params: object, ...others: any) {
    const config: object | any = {
      method: 'get',
      url,
      ...others,
    }
    if (params) config.params = params
    return await axiosInstance(config)
  },
  async post(url: string, params: object, ...others: any) {
    const config: object | any = {
      method: 'post',
      url,
      ...others,
    }
    if (params) config.data = params
    return await axiosInstance(config)
  },
}

export default http

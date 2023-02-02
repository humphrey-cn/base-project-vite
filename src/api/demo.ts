/*
 * @Author: Humphrey humphrey_cn@163.com
 * @Date: 2023-02-02 10:45:58
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-02 10:51:13
 * @Description: 请求模块 ---- 示例文件
 */

import http from './http'

// 地址路径以 /api 开头，配置了代理，在上线时，需要配置 NG
export const login = async (data: object) => {
  return await http.post('/api/admin/admin/login', data)
}

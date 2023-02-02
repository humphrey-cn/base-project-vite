/*
 * @Author: Humphrey humphre_ch@163.com
 * @Date: 2023-01-29 13:29:39
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-02 09:30:02
 * @Description: 配置文件
 * Copyright (c) 2023 by Humphrey humphre_ch@163.com, All Rights Reserved.
 */
export default (app: any) => {
  const config: object = {
    api: {
      baseURL: 'http://localhost:5173',
      timeout: 5000,
    },
  }
  app.config.globalProperties.$config = config
}

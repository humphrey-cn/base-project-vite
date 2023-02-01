/*
 * @Author: Humphrey humphre_ch@163.com
 * @Date: 2023-01-29 11:18:35
 * @LastEditors: Humphrey humphre_ch@163.com
 * @LastEditTime: 2023-01-30 16:36:05
 * @Description:
 *
 * Copyright (c) 2023 by Humphrey humphre_ch@163.com, All Rights Reserved.
 */
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/demo', // 示例
    name: 'demo',
    component: async () =>
      await import(/* webpackChunkName: "demo" */ '../views/demo/index.vue')
  },
  {
    path: '/',
    name: 'home',
    component: async () =>
      await import(/* webpackChunkName: "home" */ '../views/home/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

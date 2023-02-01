<!--
 * @Author: Humphrey humphre_ch@163.com
 * @Date: 2023-01-29 16:18:37
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-01-31 15:12:58
 * @Description: 示例文件
 * Copyright (c) 2023 by Humphrey humphre_ch@163.com, All Rights Reserved.
-->
<template>
  <header-global />
  <button class="btn">
    Home
  </button>
</template>

<script setup lang="ts">
import { login } from '@api/user'
login({
  username: 'admin',
  password: '123456'
}).then(res => {
  console.log(res)
})
</script>

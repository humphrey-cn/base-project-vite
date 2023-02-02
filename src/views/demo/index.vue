<!--
 * @Author: Humphrey humphre_ch@163.com
 * @Date: 2023-01-29 16:18:37
 * @LastEditors: Humphrey humphrey_cn@163.com
 * @LastEditTime: 2023-02-02 10:33:19
 * @Description: 示例文件
-->
<template>
  <header-global />
  <HelloWorld msg="aaaaa" />
  <button class="btn">
    Home
  </button>
  <div>{{ $store.state.count }} xxx</div>
  <div>{{ $store.state.foo }} xxx</div>
  <div>{{ store.state.count }} 5555</div>
  <div>{{ store.state.foo }} 5555</div>

  <div class="box">张山</div>
</template>

<script setup lang="tsx">
import { login } from '@api/user'
import HelloWorld from '@/components/HelloWorld.vue'
import { useStore } from '@/store'

const store = useStore()
console.log(store.state.foo, '7777')

login({
  username: 'admin',
  password: '123456'
}).then(res => {
  console.log(res)
})
</script>

<style lang="less" scoped>
.box {
  color: @text-color;
}
</style>


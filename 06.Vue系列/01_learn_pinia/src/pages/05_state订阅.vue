<template>
  <button @click="onChangeState">修改State</button>
</template>

<script setup>
import { defineStore } from 'pinia'

const useStore = defineStore('main', {
  state: () => {
    return {
      counter: 1,
      name: 'lee',
      isAdmin: true
    }
  }
})

const store = useStore()
// 监听 store 的改变
store.$subscribe((mutation, state) => {
  console.log('mutation =>', mutation)
  // import {MutationType } from 'pinia'
  console.log('mutation.type =>', mutation.type)
  console.log('mutation.storeId =>', mutation.storeId)
  console.log('mutation.payload =>', mutation.payload)
  // 修改后的 state
  console.log('state =>', state)
})

// 如果想在组件卸载后保留订阅
// 需要设置 {detached: true} 为第二个参数。

const onChangeState = () => {
  store.$patch({
    counter: 1,
    name: 'Qian'
  })
}
</script>

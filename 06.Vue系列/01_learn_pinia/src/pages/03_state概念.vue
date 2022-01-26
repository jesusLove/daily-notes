<template>
  
</template>

<script setup>
import {defineStore} from 'pinia'

// 定义 store
// 大多数情况下，state 是 store 的 核心。
const useStore = defineStore('main', {
  // ! 1. state 被定义为函数，并且返回初始 state.
  state: () => {
    return {
      counter: 0,
      name: 'Lee',
      isAdmin: true
    }
  }
})

// ! 1. 访问 State 
const store = useStore()
console.log('访问 store.counter => ',store.counter)
store.counter++
console.log('修改后 store.counter =>', store.counter)

// ! 2. 重置 state 
store.$reset()
console.log('重置后 store.counter => ',store.counter)

// ! 3. 在 options Api 中也可以使用
// ! 读取 mapState
// ! 修改 mapWritableState

</script>
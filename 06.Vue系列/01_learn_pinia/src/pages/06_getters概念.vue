<template>
  
</template>

<script setup>
import {defineStore} from 'pinia'

const useStore = defineStore('main', {
  state: () => {
    return {
      counter: 0,
      isAdmin: true
    }
  },
  getters: {
    isLogin(state) {
      return state.counter > 0
    },
    doubleCounter() {
      return this.counter * 2
    }
  }
})
const store = useStore()

console.log('访问 getter 值 =>', store.isLogin)
console.log('访问 getter 的 doubleCounter =>', store.doubleCounter);
store.counter++
console.log('访问 getter 值 =>', store.isLogin)
console.log('访问 getter 的 doubleCounter =>', store.doubleCounter);
</script>
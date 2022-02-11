import { defineStore } from 'pinia'

// 定义一个 CounterStore
export const useCounterStore = defineStore('counter', {
  state: () => {
    return {count: 0}
  },
  actions: {
    increment() {
      this.count++
    }
  }
})

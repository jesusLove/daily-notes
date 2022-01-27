<template>
  <span>
    {{ store.counter }}
    <button
      @click="
        () => {
          store.incurement()
        }
      "
    >
      Add
    </button>
  </span>
</template>

<script setup>
import { defineStore } from 'pinia'

const useStore = defineStore('main', {
  state: () => {
    return {
      counter: 0
    }
  },
  actions: {
    incurement() {
      this.counter++
    }
  }
})
const store = useStore()

// 订阅 store actions
const unsubscribe = store.$onAction(({ name, store, args, after, onError }) => {
  console.log(`Start ${name}`)
  after((res) => {
    console.log('after => ', res)
  })
})
</script>

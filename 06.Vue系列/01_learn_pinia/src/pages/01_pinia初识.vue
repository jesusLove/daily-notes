<template>
  <p>{{ counter.count }}</p>
  <button @click="increment">Increment</button>
  <button @click="add">Add</button>
</template>

<script setup>

import { useCounterStore } from '../store/counter'

const counter = useCounterStore()

const increment = () => {
  // 调用 store.actions 中方法
  counter.increment()
}
const add = () => {
  // 不通过 action 直接修改 counter
  counter.$patch({ count: counter.count + 1 })
}
</script>

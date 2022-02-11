<template>
  <p>{{ count }}</p>
  <button @click="increment">Add</button>
</template>

<script setup>
import { useCounterStore } from '../store/counter'
import { storeToRefs } from 'pinia'

const counter = useCounterStore()
// 解构后，破坏了响应式。
// const { count } = counter

// 使用 storeToRefs 包裹
// 1. 此时 count 是 reactive refs
// 2. 为插件属性创建 refs
// 3. 跳过 actions 和 非响应式 属性
const { count } = storeToRefs(counter)

const increment = () => {
  // 调用 store.actions 中方法
  counter.increment()
  console.log('counter.count =>', counter.count)
}
</script>

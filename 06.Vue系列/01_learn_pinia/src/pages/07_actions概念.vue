<template>
  <div>
    <p>{{ store.counter }}</p>
    <button
      @click="
        () => {
          store.randomCounter()
        }
      "
    >
      Add counter
    </button>
    <p>{{ settingStore.theme }}</p>
    <button
      @click="
        () => {
          settingStore.fetchStoreCounter()
        }
      "
    >
      Setting
    </button>
  </div>
</template>
<script setup>
// actions 相当于组件中的方法。
// 通过 action 属性定义
import { defineStore } from 'pinia'

const getRandom = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random(100 * Math.random()))
    }, 0)
  })
}

const useStore = defineStore('main', {
  state: () => {
    return {
      counter: 0
    }
  },
  actions: {
    // ! 和 getter 一样可以通过 this 访问 store 实例
    incurement() {
      this.counter++
    },
    // ! action 支持异步
    async randomCounter() {
      try {
        this.counter = await getRandom()
      } catch (err) {
        return err
      }
    }
  }
})
const useSettingsStore = defineStore('settings', {
  state: () => {
    return {
      theme: 'Light'
    }
  },
  actions: {
    // 访问其他的 store 值
    fetchStoreCounter() {
      const store = useStore()
      this.theme = 'Light ' + store.counter
    }
  }
})

const store = useStore()
const settingStore = useSettingsStore()
store.randomCounter()
</script>

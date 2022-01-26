<template></template>

<script setup>
import { defineStore } from 'pinia'

const useStore = defineStore('main', {
  state: () => {
    return {
      counter: 0,
      name: 'Lee',
      isAdmin: true,
      items: [1]
    }
  }
})
const store = useStore()
// ! 修改 state : 使用 $patch 一次修改多个属性值。
store.$patch({
  counter: store.counter + 1,
  name: 'Abalam'
})
console.log('访问 store.items', store.items)
// ! 在集合修改时，$patch 可以接受一个函数
store.$patch((state) => {
  state.items.push(2)
  state.isAdmin = false
})
console.log('访问 store.item =>', store.items);
console.log('访问 store.isAdmin =>', store.isAdmin)

// ! 替换 State 
store.$state = {counter: 1, name: 'Qian', isAdmin: true, items: [1,2,3,4]}
console.log('访问 store.item =>', store.name);

</script>

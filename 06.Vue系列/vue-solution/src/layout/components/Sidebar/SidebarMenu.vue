<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :collapse="!$store.getters.sidebarOpened"
    :background-color="$store.getters.cssVars.menuBg"
    :text-color="$store.getters.cssVars.menuText"
    :active-text-color="$store.getters.cssVars.menuActiveText"
    :unique-opened="true"
    :default-active="activeMenu"
    router
  >
    <sidebar-item v-for="item in routes" :key="item.path" :route="item" />
  </el-menu>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem'

const router = useRouter()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
// 计算高亮 menu
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
console.log('---routes', routes.value)
</script>
<style lang="scss" scoped></style>

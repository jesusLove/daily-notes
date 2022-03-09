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
    <!-- 子集 menu 菜单 -->
    <!-- <el-sub-menu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-sub-menu> -->
    <!-- 具体菜单项 -->
    <!-- <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <template #title>导航四</template>
    </el-menu-item> -->
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

<template>
  <div class="navbar">
    <hamburger class="hamburger-container" />
    <div class="right-menu">
      <lang-select class="right-menu-item hover-effect" />
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="$store.getters.userInfo.avatar"
          />
          <i class="el-icon-s-tools" />
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/" class="user-dropdown-item">
              <el-dropdown-item>首页</el-dropdown-item>
            </router-link>
            <el-dropdown-item>哈哈哈</el-dropdown-item>
          </el-dropdown-menu>
          <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import {} from 'vue'
import LangSelect from '@/components/LangSelect/index.vue'
import { useStore } from 'vuex'
import Hamburger from '@/components/Hamburger/index.vue'

const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.5s;
    &:hover {
      background: rgba($color: #000000, $alpha: 0.1);
    }
  }
  .right-menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 16px;
    :deep {
      .right-menu-item {
        display: inline-block;
        padding: 0 18px 0 0;
        font-size: 24px;
        color: #5a5e66;
        vertical-align: text-bottom;
        &.hover-effect {
          cursor: pointer;
        }
      }
      .avatar-container {
        cursor: pointer;
        .avatar-wrapper {
          margin-top: 5px;
          position: relative;
          .el-avatar {
            --el-avatar-background-color: none;
            margin-right: 12px;
          }
        }
      }
    }
  }
}
</style>

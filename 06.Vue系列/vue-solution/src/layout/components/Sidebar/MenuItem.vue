<template>
  <i
    v-if="icon.includes('el-icon')"
    class="sub-el-icon el-icon"
    :class="icon"
  />
  <svg-icon v-else :icon="icon" />
  <span>{{ title }}</span>
</template>
<script setup>
import {} from 'vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>
<style lang="scss" scoped></style>

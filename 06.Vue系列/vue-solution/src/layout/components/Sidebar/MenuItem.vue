<template>
  <el-icon v-if="elIcon" size="18">
    <component :is="elIcon" />
  </el-icon>
  <svg-icon v-else :icon="icon" />
  <span>{{ title }}</span>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
const elIcon = computed(() => {
  const { icon } = props
  if (icon.includes('el-icon')) {
    return icon.substring(8)
  }
  return ''
})
</script>
<style lang="scss" scoped></style>

<template>
  <svg-icon icon="https://res.lgdsunday.club/user.svg" />
  <svg-icon icon="user" />
  <el-button>{{ $t('msg.login.loginBtn') }}</el-button>
  <lang-select />
</template>

<script setup>
import LangSelect from '@/components/LangSelect'
</script>

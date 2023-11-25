<template>
  <div>
    <h2>欢迎使用该模版</h2>
    <div>{{ count }}</div>
    <a-button class="mt-10" type="primary" @click="appStore.increment()"
      >+1</a-button
    >
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const { count } = storeToRefs(appStore)
</script>

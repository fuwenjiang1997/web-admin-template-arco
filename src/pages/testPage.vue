<template>
  <div class="text-center">
    <h1 class="mt-80">Test Page</h1>
    <HelloWord class="mt-10"></HelloWord>
    <RouterLink to="/">
      <a-button class="mt-10">to Home</a-button>
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import HelloWord from '@/components/helloWord.vue'
</script>

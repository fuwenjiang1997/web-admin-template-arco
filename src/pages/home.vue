<template>
  <div class="text-center">
    <h1 class="mt-80">Home</h1>
    <HelloWord class="mt-10"></HelloWord>
    <RouterLink to="/test-page">
      <a-button class="mt-10">to page</a-button>
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import HelloWord from '@/components/helloWord.vue'
</script>

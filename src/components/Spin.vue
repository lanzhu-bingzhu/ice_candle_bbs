<template>
  <div class="relative">
    <div v-if="loading" class="w-full h-full absolute top-0 left-0 bg-slate-900/35 flex justify-center items-center">
      <div class="w-12 h-12 border-2 border-l-ice-600 border-t-transparent border-r-transparent border-b-transparent rounded-full animate-spin-slow"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  loading: boolean
}>()
</script>

<style scoped>
.animate-spin-slow {
  animation: spin-slow 0.9s linear infinite;
}
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
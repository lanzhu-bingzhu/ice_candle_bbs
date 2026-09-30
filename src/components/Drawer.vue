<template>
  <Teleport :to="props.to">
    <Transition name="fade">
      <div v-if="modelValue" class="fixed top-0 left-0 h-dvh w-full bg-slate-900/45" @click="close"></div>
    </Transition>
    <Transition name="motion">
      <div v-if="modelValue" class="fixed top-0 right-0 h-dvh min-w-64 pt-16 bg-white">
        <slot></slot>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';

const props = defineProps<{
  to: string
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue', 'open', 'close'])

onMounted(() => {
  if (props.modelValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

function close() {
  emit('update:modelValue', false)
}

watch(() => props.modelValue, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
/* 遮罩：淡入淡出 */
.fade-enter-active,.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,.fade-leave-to {
  opacity: 0;
}

/* 内容面板：左右滑入滑出 */
.motion-enter-active,.motion-leave-active {
  transition: transform 0.15s ease;
}
.motion-enter-from,.motion-leave-to {
  transform: translateX(100%);
}
</style>
<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-8 w-full max-w-md border border-slate-200">
      <h1 class="text-2xl text-ice-800 font-bold mb-8">{{ title }}</h1>
      <form @submit.prevent="handleLogin" class="space-y-4 text-sm">
        <div>
          <label class="block text-left font-medium text-slate-600 mb-1">用户名：</label>
          <input v-model="form.username" type="text" class="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-ice-400 outline-none" placeholder="请输入用户名" required />
        </div>
        <div>
          <label class="block text-left font-medium text-slate-600 mb-1">密码：</label>
          <input v-model="form.password" type="password" class="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-ice-400 outline-none" placeholder="请输入密码" required />
        </div>
        <button type="submit" class="w-full py-3 bg-ice-800 text-white rounded hover:bg-ice-900 transition disabled:opacity-50 cursor-pointer" :disabled="loading">
          {{ btnStr }}
        </button>
        <p v-if="'欢迎回来' === title" class="text-xs text-right text-slate-500">
          还没有账号？点击 <a class="cursor-pointer hover:opacity-85 transition-opacity" @click="changeView">注册</a>
        </p>
        <p v-else class="text-xs text-right text-slate-500">
          已有账号？前去 <a class="cursor-pointer hover:opacity-85 transition-opacity" @click="changeView">登录</a>
        </p>
        <p v-if="error" class="text-red-500 text-center">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";

const isLogin = ref<boolean>(false)
const error = ref<string>('')
const loading = ref<boolean>(false)

const title = computed(() => {
  return isLogin.value ? '欢迎回来' : '现在，加入我们'
})

const btnStr = computed(() => {
  if (isLogin.value) {
    return loading.value ? '登录中' : '登录'
  } else {
    return loading.value ? '注册中' : '注册'
  }
})

const form = ref<{
  username: string
  password: string
}>({
  username: '',
  password: ''
})

async function handleLogin() {

}

function changeView() {
  isLogin.value = !isLogin.value
  form.value.username = ''
  form.value.password = ''
}

onMounted(() => {
  isLogin.value = true
})
</script>

<style scoped>

</style>
<template>
  <header class="sticky top-0 z-30 bg-linear-to-l from-cyan-800 to-ice-800 shadow-md px-4 py-4">
    <div class="container mx-auto flex justify-between">
      <div class="flex-1">
        <router-link to="/" class="text-2xl font-display font-bold bg-ice-50 bg-clip-text text-transparent hover:opacity-85 transition-opacity">
          IceCandle
        </router-link>
      </div>
      <div class="flex space-x-6">
        <div ref="boardMenuRef" class="relative">
          <div class="text-ice-50 h-full" @click="isBoardMenu = !isBoardMenu">
            <button class="h-full text-sm cursor-pointer hover:opacity-85 transition-opacity">
              板块 <span v-if="!isBoardMenu" class="icon-[material-symbols--expand-more]"></span><span v-else class="icon-[material-symbols--keyboard-arrow-up]"></span>
            </button>
          </div>
          <Transition name="dropdown">
            <nav v-if="isBoardMenu" class="w-48 absolute right-0 top-9 text-slate-700 text-xs bg-white rounded-sm shadow-md">
              <ul class="p-2">
                <li class="py-2 px-4 cursor-pointer hover:bg-ice-100 active:bg-ice-100 transition-colors">板块 1</li>
                <li class="py-2 px-4 cursor-pointer hover:bg-ice-100 active:bg-ice-100 transition-colors">板块 2</li>
              </ul>
            </nav>
          </Transition>
        </div>
        <div v-if="isLogin" ref="userMenuRef" class="text-ice-50 leading-6 relative">
          <div class="w-8 h-8" @click="isUserMenu = !isUserMenu">
            <img src="/test_user_header_img.jpg" alt="alt" class="w-full h-full rounded-full object-cover aspect-square cursor-pointer" />
          </div>
          <Transition name="dropdown">
            <div v-if="isUserMenu" class="w-32 absolute right-0 top-9 text-slate-700 text-xs bg-white rounded-sm shadow-md">
              <ul class="p-2">
                <router-link to="/profile">
                  <li class="py-2 px-4 cursor-pointer hover:bg-ice-100 active:bg-ice-100 transition-colors">
                    <span class="icon-[pajamas--profile]"></span> 个人资料
                  </li>
                </router-link>
                <li class="py-2 px-4 cursor-pointer text-red-500 hover:bg-ice-100 active:bg-ice-100 transition-colors">
                  <span class="icon-[material-symbols--logout]"></span> 登出
                </li>
              </ul>
            </div>
          </Transition>
        </div>
        <div v-else class="text-ice-50 leading-6">
          <router-link to="/login">
            <button class="h-full text-sm hover:opacity-85 transition-opacity">注册 / 登录</button>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const isLogin = true

const isUserMenu = ref<boolean>(false)
const userMenuRef = ref<HTMLElement | null>(null)

onClickOutside(userMenuRef, () => (isUserMenu.value = false))

const isBoardMenu = ref<boolean>(false)
const boardMenuRef = ref<HTMLElement | null>(null)

onClickOutside(boardMenuRef, () => (isBoardMenu.value = false))
</script>

<style scoped>
/* 下拉菜单抽屉动画：淡入淡出 + 轻微下移，保持快速响应 */
.dropdown-enter-active { transition: opacity 0.1s ease, transform 0.1s ease; }
.dropdown-leave-active { transition: opacity 0.05s ease, transform 0.05s ease; }
.dropdown-enter-from { opacity: 0; transform: translateY(-2px); }
.dropdown-leave-to   { opacity: 0; transform: translateY(-2px); }
</style>
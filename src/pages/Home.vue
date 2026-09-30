<template>
  <div class="bg-linear-to-b from-[#e8f4fd] to-[#f9fcff] text-slate-800">
    <Header/>

    <main class="z-10 min-h-screen">
      <div class="container mx-auto my-4">
        <div class="sm:flex lg:px-32 md:px-16 md:px-8 py-4">
          <div class="hidden sm:block sm:flex-1">
            <div class="p-4 space-y-8">
              <div class="space-y-4">
                <h3 class="text-lg font-bold">个人中心</h3>
                <div v-if="isLogin" class="flex justify-center">
                  <div class="space-y-4">
                    <img src="/test_user_header_img.jpg" alt="alt" class="w-64 h-64 border-8 border-ice-200/65 rounded-full object-cover aspect-square" />
                    <div class="text-slate-600">
                      <span>Ice Candle</span>
                    </div>
                    <div class="text-center">
                      <button class="w-full text-sm text-candle-500 border-candle-500 border-1 py-2 rounded cursor-pointer hover:bg-candle-500 hover:text-slate-50 transition-colors">发布文章</button>
                    </div>
                  </div>
                </div>
                <div v-else class="text-center">
                  <p class="text-sm">
                    <router-link to="/login" class="text-ice-600 hover:opacity-85 transition-opacity">登录</router-link> 或 <router-link to="/login" class="text-ice-600 hover:opacity-85 transition-opacity">注册</router-link> 即可开始创作
                  </p>
                </div>
              </div>
              <div class="space-y-4">
                <h3 class="text-lg font-bold">板块导航</h3>
                <ul class="px-2 space-y-1">
                  <template v-for="item in boards">
                    <router-link to="/">
                      <li class="px-4 py-2 hover:bg-ice-100 transition-all">{{ item.name }}</li>
                    </router-link>
                  </template>
                </ul>
              </div>
            </div>
          </div>
          <div class="sm:flex-3">
            <div class="p-4">
              <Spin :loading="articleLoading">
                <ul v-if="articles.length" class="md:px-8">
                  <template v-for="item in articles">
                    <router-link :to="`/p/${item.article_id}`">
                      <li class="p-8 hover:bg-ice-100 transition-all">
                        <div class="flex">
                          <img src="/test_user_header_img.jpg" alt="alt" class="w-16 h-16 mr-4 rounded-full object-cover aspect-square" />
                          <div class="flex-1">
                            <div class="font-bold">{{ item.title }}</div>
                            <div class="text-sm text-black/70 mt-1">这里是简介</div>
                            <div class="text-sm text-black/30 text-right mt-4 space-x-4">
                              <span>
                                <span class="hidden sm:inline">发布者：</span>ice candle
                              </span>
                              <span>
                                <span class="hidden sm:inline">发布时间：</span>2026/01/01
                              </span>
                              <span>浏览量：0</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </router-link>
                  </template>
                </ul>
                <Empty v-else/>
              </Spin>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Empty from "@/components/Empty.vue";
import Spin from "@/components/Spin.vue";

const articleLoading = ref<boolean>(false)

const isLogin = true

const boards = [
  { board_id: 1, name: 'test board1' },
  { board_id: 2, name: 'test board2' },
  { board_id: 3, name: 'test board3' },
  { board_id: 4, name: 'test board4' },
  { board_id: 5, name: 'test board5' },
  { board_id: 6, name: 'test board6' },
  { board_id: 7, name: 'test board7' },
]

const articles = [
  { article_id: 1, title: '测试标题', content: '测试内容' },
  { article_id: 2, title: '测试标题', content: '测试内容' },
  { article_id: 3, title: '测试标题', content: '测试内容' },
  { article_id: 4, title: '测试标题', content: '测试内容' }
]

onMounted(() => {

})
</script>

<style scoped>

</style>
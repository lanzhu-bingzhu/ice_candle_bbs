<template>
  <div class="bg-linear-to-b from-[#e8f4fd] to-[#f9fcff] text-slate-800">
    <Header/>

    <main class="z-10 min-h-screen">
      <div class="container mx-auto my-4">
        <div class="sm:w-10/12 sm:mx-auto space-y-2.5">
          <div class="bg-white rounded shadow">
            <img src="/test_user_header_img.jpg" alt="user cover" class="w-full h-auto object-cover aspect-[5/1]" />
            <div class="px-12 py-8">
              <div class="flex sm:w-[640px]">
                <img src="/test_user_header_img.jpg" alt="avatar" class="w-32 h-32 rounded-full object-cover aspect-square" />
                <div class="ml-8 space-y-2">
                  <p class="text-2xl text-ice-800 font-bold">lanzhubingzhu</p>
                  <p class="text-sm text-slate-500">这里是该用户的个人简介展示区域。</p>
                  <button class="hidden sm:block px-4 py-1 border-1 border-ice-600 hover:bg-ice-600/10 rounded text-ice-600 text-sm cursor-pointer transition-colors" @click="handleUpdateProfile">编辑资料</button>
                  <button class="block sm:hidden px-4 py-1 border-1 border-ice-600 hover:bg-ice-600/10 rounded text-ice-600 text-sm cursor-pointer transition-colors" @click="handleMUpdateProfile">编辑资料</button>
                </div>
              </div>
            </div>
          </div>
          <div class="p-8 bg-white rounded shadow">
            <ul class="flex text-slate-800">
              <li class="px-8 py-2 text-candle-500 cursor-pointer transition-colors" :class="1 === selectTab ? 'bg-candle-500 text-ice-50' : ''" @click="changeTab(1)">动态</li>
              <li class="px-8 py-2 text-candle-500 cursor-pointer transition-colors" :class="2 === selectTab ? 'bg-candle-500 text-ice-50' : ''" @click="changeTab(2)">设置</li>
            </ul>
            <div class="mt-2">
              <template v-if="1 === selectTab">
                <Spin :loading="articleLoading">
                  <ul v-if="articles.length" class="w-full">
                    <template v-for="item in articles">
                      <router-link :to="`/p/${item.article_id}`">
                        <li class="relative p-8 hover:bg-ice-100 active:bg-ice-100 transition-colors">
                          <div class="flex">
                            <img src="/test_user_header_img.jpg" alt="alt" class="w-16 h-16 mr-4 rounded-full object-cover aspect-square" />
                            <div class="flex-1">
                              <div class="flex justify-between">
                                <div class="font-bold">{{ item.title }}</div>
                                <div class="cursor-pointer relative px-2" @click.prevent="() => isShowDrawer = true">
                                  <div class="icon-[boxicons--menu]"></div>
                                </div>
                              </div>
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
              </template>
              <template v-else-if="2 === selectTab">
                <div class="w-full p-6">
                  <h3 class="px-4 py-2 border-b-1 border-slate-400 text-sm font-bold">账号与安全</h3>
                  <div class="px-4 py-2">
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Drawer to="body" v-model="isShowDrawer">
      <div class="p-2">
        <h3 class="px-4 py-2 border-b-1 border-slate-400 text-sm font-bold">操作</h3>
        <div class="text-slate-700 text-sm">
          <ul class="p-2">
            <li @click.prevent="handleDelete(1)" class="py-2 px-4 cursor-pointer hover:bg-ice-100 active:bg-ice-100 transition-colors">删除</li>
            <li @click.prevent="handleUpdate(1)" class="py-2 px-4 cursor-pointer hover:bg-ice-100 active:bg-ice-100 transition-colors">编辑</li>
          </ul>
        </div>
      </div>
    </Drawer>

    <Drawer to="body" v-model="isShowUpdateProfileDrawer">
      <div class="w-full sm:w-128 p-2">
        <h3 class="px-4 py-2 border-b-1 border-slate-400 text-sm font-bold">编辑资料</h3>
        <ProfileUpdateForm/>
      </div>
    </Drawer>

    <Footer/>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Empty from "@/components/Empty.vue";
import Spin from "@/components/Spin.vue";
import Drawer from "@/components/Drawer.vue";
import ProfileUpdateForm from "@/pages/user/center/components/ProfileUpdateForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const selectTab = ref<number>(1)

const articleLoading = ref<boolean>(false)

const articles = ref([
  { article_id: 1, title: '测试标题', content: '测试内容', show_option: false },
  { article_id: 2, title: '测试标题', content: '测试内容', show_option: false },
  { article_id: 3, title: '测试标题', content: '测试内容', show_option: false },
  { article_id: 4, title: '测试标题', content: '测试内容', show_option: false }
])

const isShowDrawer = ref<boolean>(false)

const isShowUpdateProfileDrawer = ref<boolean>(false)

function changeTab (tabId: number) {
  selectTab.value = tabId
}

function handleDelete(articleId: number) {
  alert('删除:' + articleId)
}

function handleUpdate(articleId: number) {
  alert('编辑:' + articleId)
}

function handleUpdateProfile() {
  console.log('PC')
  isShowUpdateProfileDrawer.value = true
}

function handleMUpdateProfile() {
  console.log('Mobile')
  router.push('/profile/update')
}
</script>

<style scoped>

</style>

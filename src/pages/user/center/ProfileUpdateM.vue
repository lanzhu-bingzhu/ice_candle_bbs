<template>
  <div class="bg-linear-to-b from-[#e8f4fd] to-[#f9fcff] text-slate-800">
    <Header/>
    <main class="z-10 min-h-screen">
      <div class="container mx-auto my-4">
        <form class="px-4 py-2">
          <div class="flex items-center text-xs py-4">
            <label class="flex-2 text-right">用户名：</label>
            <input class="flex-10 px-2.5 py-1 border-1 border-slate-300 rounded focus-visible:outline-ice-400/65" type="text"/>
          </div>
          <div class="flex items-center text-xs py-4">
            <label class="flex-2 text-right">昵称：</label>
            <input class="flex-10 px-2.5 py-1 border-1 border-slate-300 rounded focus-visible:outline-ice-400/65" type="text"/>
          </div>
          <div class="flex items-center text-xs py-4">
            <label class="flex-2 text-right">邮箱：</label>
            <input class="flex-10 px-2.5 py-1 border-1 border-slate-300 rounded focus-visible:outline-ice-400/65" type="text"/>
          </div>
        </form>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>

</style>
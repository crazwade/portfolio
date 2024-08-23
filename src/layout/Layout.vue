<script setup lang='ts'>
import { ref } from 'vue';
import Header from './Header.vue';

const isOpen = ref(false);

const scrollTo = () => {
  const scrollDOM = document.getElementById('layout');

  if (!scrollDOM) return;

  scrollDOM.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <div id="layout" class="w-full h-full overflow-auto">
    <!-- 內容 -->
    <div class="mt-[70px] w-full h-full" :class="{ 'blur-sm' : isOpen }">
      <slot />
    </div>
    <!-- goto top -->
    <div class="scrollTo fixed bottom-5 right-5 cursor-pointer p-2 opacity-80 hover:opacity-100" :class="{ 'blur-sm' : isOpen }">
      <i
        class="pi pi-angle-double-up"
        style="font-size: 30px"
        @click="scrollTo"
      />
    </div>
    <!-- header -->
    <Header @menuVisable="isOpen = !isOpen" :isOpen="isOpen" />
  </div>
</template>

<style lang="scss" scoped>
.scrollTo {
  background-color: var(--border-color);
}
</style>

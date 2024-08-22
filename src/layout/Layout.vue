<script setup lang='ts'>
import { ref } from 'vue';
import Header from './Header.vue';

const isOpen = ref(false);
</script>

<template>
  <div>
    <div class="mt-[70px]" :class="{ 'blur-sm' : isOpen }">
      <slot />
    </div>
    <Header @menuVisable="isOpen = !isOpen" :isOpen="isOpen" />
  </div>
</template>

<style lang="scss" scoped>

</style>

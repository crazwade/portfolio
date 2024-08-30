<script setup lang="ts">
import { useDataStore } from '../stores/data';

const dataStore = useDataStore();
</script>

<template>
  <div class="flex flex-col gap-16">
    <template v-for="(item, index) in dataStore.getMenu" :key="index">
      <component :is="item.components" />
    </template>
    <div class="h-[100px] w-full flex justify-center items-end pb-5">
      Copyright 2024 Jacky Wu
    </div>
  </div>
</template>

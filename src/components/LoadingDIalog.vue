<script setup lang="ts">
import { useDataStore } from '../stores/data';

const dataStore = useDataStore();
</script>

<template>
  <div
    class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
  >
    <div
      class="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-80"
    ></div>
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[400px] flex flex-col justify-center items-center text-white bg-gray-800 py-5 px-2 rounded-xl"
    >
      <ve-progress
        :progress="dataStore.getProcess"
        font-size="36px"
        class="text-borderColor"
      />
      <div class="py-5 font-bold">為了更好體驗，正在預先載入圖片...</div>
      <div
        class="py-2 px-4 rounded-md cursor-pointer bg-borderColor text-backgroundColor hover:opacity-70"
        @click="dataStore.stopLoading()"
      >
        skip
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

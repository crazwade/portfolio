<script setup lang='ts'>
import { ref } from 'vue';
import Contain from '../../components/Contain.vue';
import pdf1 from '../../assets/resume/pdf1.png';
import pdf1e from '../../assets/resume/pdf1-e.png';
import pdf2 from '../../assets/resume/pdf2.png';
import pdf2e from '../../assets/resume/pdf2-e.png';

const currentIndex = ref(0);

const resume = [
  pdf1, pdf2
];

const changeimg = (action: 'next' | 'previous') => {

  currentIndex.value = action === 'next' ? currentIndex.value + 1 : currentIndex.value - 1;

  if (currentIndex.value < 0) {
    currentIndex.value = resume.length - 1;
  }

  if (currentIndex.value >= resume.length) {
    currentIndex.value = 0;
  }
};
</script>

<template>
  <div id="Resume">
    <Contain
      title="履歷"
    >
      <div class="flex flex-col gap-3 w-full px-6">
        <div class="relative w-full h-full flex justify-center">
          <button
            class="absolute top-1/2 -left-5 -translate-y-1/2 w-[50px] h-[50px] opacity-80 hover:opacity-95 bg-borderColor rounded-full flex justify-center items-center"
            @click="changeimg('previous')"
          >
            <i class="pi pi-chevron-left" />
          </button>
          <button
            class="absolute top-1/2 -right-5 -translate-y-1/2 w-[50px] h-[50px] opacity-80 hover:opacity-95 bg-borderColor rounded-full flex justify-center items-center"
            @click="changeimg('next')"
          >
            <i class="pi pi-chevron-right" />
          </button>
          <img :src="resume[currentIndex]" alt="" srcset="" class="w-full h-auto object-contain max-w-[600px] border-[8px] border-borderColor">
        </div>
        <div class="flex flex-wrap gap-2 justify-center items-center">
          <div
            class="flex flex-row justify-between items-center p-2 text-backgroundColor bg-fontColor gap-2 cursor-pointer hover:opacity-80 select-none"
          >
            <i class="pi pi-download"></i>
            下載 PDF
          </div>
          <div
            class="flex flex-row justify-between items-center p-2 text-fontColor bg-backgroundColor border-[1px] border-fontColor gap-2 cursor-pointer hover:opacity-80 select-none"
          >
            <i class="pi pi-eye"></i>
            線上查看
          </div>
        </div>
      </div>
    </Contain>
  </div>
</template>

<style lang="scss" scoped>
</style>

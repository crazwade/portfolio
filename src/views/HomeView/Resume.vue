<script setup lang='ts'>
import Contain from '../../components/Contain.vue';
import resume from '../../assets/resume/resume.png';

</script>

<template>
  <div id="Resume">
    <Contain
      title="履歷"
    >
      <div class="flex flex-col gap-3 w-full px-6">
        <div class="w-full h-full flex justify-center">
          <img :src="resume" alt="" srcset="" class="w-full h-auto object-contain max-w-[600px] border-[8px] border-borderColor">
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

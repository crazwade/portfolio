<script setup lang='ts'>
import { useI18n } from 'vue-i18n';
import Tag from './Tag.vue';

const { t } = useI18n();

defineProps<{
  data: {
    name: string;
    skills: string[];
    info: string;
    images: string[];
    link: {
      demo: string;
      repo: string;
    }
  }
}>();

const hrefTo = (url: string) => {
  window.open(url, '_blank');
};
</script>

<template>
  <div class="flex flex-col gap-3 w-full md:w-1/2">
    <!-- sideproject title -->
    <div class="text-3xl">
      {{ t(`SideProject.name.${data.name}`) }}
    </div>
    <!-- sideproject tags -->
    <div class="flex flex-wrap gap-2">
      <template v-for="(label, index) in data.skills" :key="index">
        <Tag :label="label" />
      </template>
    </div>
    <!-- sideproject info -->
    <div class="text-md font-bold">
      {{ t(`SideProject.info.${data.info}`) }}
    </div>
    <!-- sideproject link -->
    <div class="flex flex-wrap gap-2">
      <div
        v-if="data.link.demo"
        class="flex flex-row justify-between items-center p-2 text-backgroundColor bg-fontColor gap-2 cursor-pointer hover:opacity-80 select-none"
        @click="hrefTo(data.link.demo)"
      >
        <i class="pi pi-caret-right"></i>
        Live Demo
      </div>
      <div
        v-if="data.link.repo"
        class="flex flex-row justify-between items-center p-2 text-fontColor bg-backgroundColor border-[1px] border-fontColor gap-2 cursor-pointer hover:opacity-80 select-none"
        @click="hrefTo(data.link.repo)"
      >
        <i class="pi pi-github"></i>
        Repo
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

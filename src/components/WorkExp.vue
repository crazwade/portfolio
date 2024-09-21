<script setup lang='ts'>
import Tag from '../components/Tag.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps<{
  data: {
    title: string,
    location: string,
    company: string,
    time: string,
    skills: string,
    workDetails: string[],
    proj: string[],
  }[],
}>();

</script>

<template>
  <template v-for="(item, index) in data" :key="index">
    <div class="w-full h-[4px] bg-borderColor flex-shrink-0" />
    <div class="h-full w-full flex justify-center items-center">
      <div
        v-if="index === 0 || index % 2 === 0"
        class="w-[4px] h-full bg-borderColor sm:block hidden"
      />
      <div
        class="w-5/6 px-3 py-6 flex"
        :class="index % 2 === 1 ? 'justify-end' : 'justify-start'"
      >
        <div class="w-fit">
          <div class="flex flex-col">
            <div class="flex flex-wrap items-center justify-start">
              <div class="text-xl sm:text-3xl font-bold pr-3">
                {{ t('WorkExperience.' + item.title) }}
              </div>
              <div class="pr-3 sm:text-lg text-xs py-1">
                {{ t('WorkExperience.' + item.location) }}
              </div>
              <Tag :label="item.time" :size="'small'" />
            </div>
            <div class="flex flex-col lg:flex-row justify-center items-start md:items-center text-borderColor py-2">
              <div class="sm:text-xl text-base">
                "{{ t('WorkExperience.' +item.company) }}"
              </div>
              <div class="sm:text-sm lg:pl-4 text-xs">
                {{ item.skills }}
              </div>
            </div>
          </div>
          <div>
            <div v-for="(workdetail, index) in item.workDetails" :key="index" class="sm:text-base text-sm">
              {{ t('WorkExperience.' + workdetail) }}
            </div>
          </div>
          <div class="pt-4 max-w-[800px] sm:text-base text-sm">
            <div v-for="(proj, index) in item.proj" :key="index">
              {{ t('WorkExperience.' + proj) }}
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="index % 2 === 1"
        class="w-[4px] h-full bg-borderColor sm:block hidden"
      />
    </div>
  </template>
  <div class="w-full h-[4px] bg-borderColor flex-shrink-0 sm:block hidden" />
</template>

<style lang="scss" scoped>

</style>

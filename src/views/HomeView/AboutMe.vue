<script setup lang='ts'>
import { ref, watch } from 'vue';
import CircleItem from '../../components/CircleItem.vue';
import { useI18n } from 'vue-i18n';
import { useDataStore } from '../../stores/data';

const dataStore = useDataStore();

const { t, locale } = useI18n();
const lang = ref<'zh-TW' | 'en-US'>('zh-TW');

watch(() => locale.value, (val) => {
  lang.value = val === 'zh-TW' ? 'zh-TW' : 'en-US';
});

</script>

<template>
  <div id="Aboutme" class="flex justify-center items-center flex-col py-5 px-10 lg:px-20 xl:px-44">
    <div class="h-full flex flex-col md:flex-row md:items-center">
      <div class="h-full flex flex-col gap-5">
        <p class="text-8xl md:whitespace-nowrap">{{ t('aboutme.name')}}</p>
        <p class="text-4xl">{{ t('aboutme.title') }}</p>
        <p class="text-base">{{ t('aboutme.school') }}</p>
      </div>
      <span class="text-2xl mt-5 md:mt-0 md:pl-10 text-borderColor">
        {{ t('aboutme.info') }}
      </span>
    </div>
    <div class="w-fit flex justify-start mt-5 gap-3">
      <template v-for="(item, index) in dataStore.getSocials" :key="index">
        <CircleItem
          :size="'normal'"
          :type="item.type"
          :icon="item.type !== 'text' ? item.icon : undefined"
          :text="item.type === 'text' ? item.text : undefined"
          :needPointer="true"
          @click="dataStore.handlehref(item, lang)"
        />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

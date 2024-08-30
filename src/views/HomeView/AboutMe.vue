<script setup lang='ts'>
import CircleItem from '../../components/CircleItem.vue';
import { useI18n } from 'vue-i18n';
import { useDataStore } from '../../stores/data';

const dataStore = useDataStore();

const { t } = useI18n();
</script>

<template>
  <div id="Aboutme" class="flex justify-center items-center flex-col py-5 px-10 lg:px-40 xl:px-80">
    <div class="h-full flex flex-col md:flex-row md:items-center">
      <div class="h-full flex flex-col gap-5">
        <p class="text-8xl md:whitespace-nowrap">{{ t('aboutme.name')}}</p>
        <p class="text-4xl">{{ t('aboutme.title') }}</p>
      </div>
      <span class="text-xl mt-5 md:mt-0 md:pl-10">
        {{ t('aboutme.info') }}
      </span>
    </div>
    <div class="w-full flex justify-start mt-5 gap-3">
      <template v-for="(item, index) in dataStore.getSocials" :key="index">
        <CircleItem
          :size="'normal'"
          :type="item.type"
          :icon="item.type !== 'text' ? item.icon : undefined"
          :text="item.type === 'text' ? item.text : undefined"
          :needPointer="true"
          @click="dataStore.handlehref(item)"
        />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

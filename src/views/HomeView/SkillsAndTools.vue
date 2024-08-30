<script setup lang='ts'>
import Contain from '../../components/Contain.vue';
import CircleItem from '../../components/CircleItem.vue';
import { useI18n } from 'vue-i18n';
import { useDataStore } from '../../stores/data';

const dataStore = useDataStore();
const { t } = useI18n();


</script>

<template>
  <div id="SkillsAndTools">
    <Contain
      :title="t('menu.SkillsAndTools')"
    >
      <div class="grid grid-cols-3 xl:grid-cols-9 lg:grid-cols-7 md:grid-cols-5 gap-5">
        <div
          v-for="(item, index) in dataStore.getTools"
          :key="index"
          class="flex flex-col items-center"
        >
          <CircleItem
            :size="'large'"
            :type="'custome'"
          >
            <img :src="item.svg" class="w-[45px] h-[45px] svgItem" />
          </CircleItem>
          <div class="mt-2 text-sm">
            {{ item.label }}
          </div>
        </div>
      </div>
    </Contain>
  </div>
</template>

<style lang="scss" scoped>
.svgItem {
  filter: var(--svg-filter);
}
</style>

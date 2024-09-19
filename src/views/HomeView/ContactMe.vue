<script setup lang='ts'>
import { ref, watch } from 'vue';
import Contain from '../../components/Contain.vue';
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
  <div id="ContactMe">
    <Contain
      :title="t('menu.ContactMe')"
    >
      <div class="flex flex-col justify-center items-center">
        <div class="flex flex-row gap-3">
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
    </Contain>
  </div>
</template>

<style lang="scss" scoped>
</style>

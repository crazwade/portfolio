<script setup lang='ts'>
import { watch, ref } from 'vue';
import Contain from '../../components/Contain.vue';
import { useI18n } from 'vue-i18n';

const { t, tm, locale } = useI18n();

const info = ref<string[]>(tm('Autobiography.info'));

watch(() => locale.value, () => {
  info.value = tm('Autobiography.info') as string[];
});
</script>

<template>
  <div id="Autobiography" class="px-10">
    <Contain
      :title="t('menu.Autobiography')"
    >
      <div class="flex flex-col justify-center items-center text-lg">
        <template v-for="(item, index) in info" :key="index">
          {{ item }} <br><br>
        </template>
      </div>
    </Contain>
  </div>
</template>

<style lang="scss" scoped>

</style>

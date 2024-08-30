<script setup lang='ts'>
import Contain from '../../components/Contain.vue';
import ImageSwiper from '../../components/ImageSwiper.vue';
import ProjectInfo from '../../components/ProjectInfo.vue';
import { useI18n } from 'vue-i18n';
import { useDataStore } from '../../stores/data';

const dataStore = useDataStore();

const { t } = useI18n();

</script>

<template>
  <div id="SideProject" class="px-10">
    <Contain
      :title="t('menu.SideProject')"
    >
      <div class="flex flex-col gap-12">
        <div
          v-for="(project, index) in dataStore.getSideprojects"
          :key="index"
          class="w-full flex flex-col md:flex-row md:items-center gap-3"
        >
          <!-- 圖片展示區 -->
          <ImageSwiper :images="project.images" />
          <!-- 作品資訊區 -->
          <ProjectInfo :data="project"/>
        </div>
      </div>
    </Contain>
  </div>
</template>

<style lang="scss" scoped>

</style>

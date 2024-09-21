<script setup lang='ts'>
import { useDataStore } from '../../stores/data';
import WorkExp from '../../components/WorkExp.vue';

const dataStore = useDataStore();

</script>

<template>
  <div id="WorkExperience" class="h-fit flex flex-shrink-0 justify-center items-center flex-col py-5 px-2 sm:px-10 lg:px-20 xl:px-30">
    <WorkExp :data="dataStore.getWorks"/>
  </div>
</template>

<style lang="scss" scoped>

</style>

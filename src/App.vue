<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import Layout from './layout/Layout.vue';
import { version } from '../package.json';
import { useDataStore } from './stores/data';

const dataStore = useDataStore();

onMounted(() => {
  console.log(`ver ${version}`);
  dataStore.preloadImg();
});
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

<style scoped>
</style>

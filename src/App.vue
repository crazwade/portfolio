<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import Layout from './layout/Layout.vue';
import { version } from '../package.json';

onMounted(() => {
  console.log(`ver ${version}`);
});
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

<style scoped>
</style>

<script setup lang="ts">
import AboutMe from './HomeView/AboutMe.vue';
import SkillsAndTools from './HomeView/SkillsAndTools.vue';
import SideProject from './HomeView/SideProject.vue';
</script>

<template>
  <div class="flex flex-col gap-16">
    <AboutMe />
    <SkillsAndTools />
    <SideProject />
    <div id="test4" class="h-[500px] w-full ">
      履歷
    </div>
    <div id="test5" class="h-[500px] w-full ">
      聯繫我
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutMe from './HomeView/AboutMe.vue';
import Autobiography from './HomeView/Autobiography.vue';
import SkillsAndTools from './HomeView/SkillsAndTools.vue';
import SideProject from './HomeView/SideProject.vue';
import Resume from './HomeView/Resume.vue';
import ContactMe from './HomeView/ContactMe.vue';
</script>

<template>
  <div class="flex flex-col gap-16">
    <AboutMe />
    <Autobiography />
    <SkillsAndTools />
    <SideProject />
    <Resume />
    <ContactMe />
    <div class="h-[100px] w-full flex justify-center items-end pb-5">
      Copyright 2024 Jacky Wu
    </div>
  </div>
</template>

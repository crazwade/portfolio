<script setup lang='ts'>
import Contain from '../../components/Contain.vue';
import CircleItem from '../../components/CircleItem.vue';
import { svgs } from '../../assets/skillandtools';

const tools = [
  {
    label: 'JavaScript',
    svg: svgs.js,
  },
  {
    label: 'TypeScript',

    svg: svgs.ts,
  },
  {
    label: 'Vue2',

    svg: svgs.vue,
  },
  {
    label: 'Vue3',

    svg: svgs.vue,
  },
  {
    label: 'Vite',

    svg: svgs.vite,
  },
  {
    label: 'Tailwind Css',

    svg: svgs.tailwindcss,
  },
  {
    label: 'Scss',

    svg: svgs.scss,
  },
  {
    label: 'Git',

    svg: svgs.git,
  },
  {
    label: 'ESLint',

    svg: svgs.eslint,
  },
  {
    label: 'Jira',

    svg: svgs.jira,
  },
  {
    label: 'Element-Plus',

    svg: svgs.elementplus,
  },
];
</script>

<template>
  <div id="SkillsAndTools">
    <Contain
      title="工具與技能樹"
    >
      <div class="grid grid-cols-3 xl:grid-cols-9 lg:grid-cols-7 md:grid-cols-5 gap-5">
        <div
          v-for="(item, index) in tools"
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

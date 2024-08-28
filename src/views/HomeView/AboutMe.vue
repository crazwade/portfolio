<script setup lang='ts'>
import CircleItem from '../../components/CircleItem.vue';

type ItemType = {
  type: 'icon';
  icon: string;
  url: string;
} | {
  type: 'mail';
  icon: string;
  mail: string;
} | {
  type: 'text';
  text: string;
  url: string;
};

const aboutme = {
  name: 'Jacky Wu',
  title: '前端工程師',
  info: '“Run, don‘t walk! Either you’re running for food, or running from being food.” - NVIDIA CEO Jensen Huang',
};

const socials: ItemType[] = [
  {
    type: 'icon',
    icon: 'pi pi-github',
    url: 'https://github.com/crazwade',
  },
  {
    type: 'icon',
    icon: 'pi pi-linkedin',
    url: 'https://www.linkedin.com/in/jackywu/',
  },
  {
    type: 'text',
    text: 'CV',
    url: 'https://www.google.com',
  },
  {
    type: 'mail',
    icon: 'pi pi-envelope',
    mail: 'jackywu526@gmail.com',
  }
];
</script>

<template>
  <div id="aboutme" class="flex justify-center items-center flex-col py-5 px-10 lg:px-40 xl:px-80">
    <div class="h-full flex flex-col md:flex-row md:items-center">
      <div class="h-full flex flex-col gap-5">
        <p class="text-8xl md:whitespace-nowrap">{{ aboutme.name}}</p>
        <p class="text-4xl">{{ aboutme.title }}</p>
      </div>
      <span class="text-xl mt-5 md:mt-0 md:pl-10">
        {{ aboutme.info }}
      </span>
    </div>
    <div class="w-full flex justify-start mt-5 gap-3">
      <template v-for="(item, index) in socials" :key="index">
        <CircleItem
          :size="'normal'"
          :type="item.type"
          :icon="item.type !== 'text' ? item.icon : undefined"
          :text="item.type === 'text' ? item.text : undefined"
          :needPointer="true"
        />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

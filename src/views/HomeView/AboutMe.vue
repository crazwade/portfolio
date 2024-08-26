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
        <p class="text-8xl md:whitespace-nowrap">Jacky Wu</p>
        <p class="text-4xl">前端工程師</p>
      </div>
      <span class="text-xl mt-5 md:mt-0 md:pl-10">
        The joy of coding is about creating these virtual spaces and enchanting them to behave as I would like. - Dan Abramov
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

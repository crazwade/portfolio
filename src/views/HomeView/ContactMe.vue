<script setup lang='ts'>
import Contain from '../../components/Contain.vue';
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
  <div id="ContactMe">
    <Contain
      title="聯繫我"
    >
      <div class="flex flex-col justify-center items-center">
        <div class="flex flex-row gap-3">
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
    </Contain>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script setup lang='ts'>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps<{
  images: string[]
}>();

const imageIndex = ref(0);
const aniImage = ref(true);

const changeimg = (action: 'next' | 'previous') => {
  if (!aniImage.value) return;

  aniImage.value = false;
  imageIndex.value = action === 'next' ? imageIndex.value + 1 : imageIndex.value - 1;

  if (imageIndex.value < 0) {
    imageIndex.value = props.images.length - 1;
  }

  if (imageIndex.value >= props.images.length) {
    imageIndex.value = 0;
  }

  setTimeout(() => {
    aniImage.value = true;
  }, 300);
};
</script>

<template>
  <div
    class="relative h-64 w-full md:w-1/2 overflow-hidden flex justify-center items-center border-dotted border-[4px] border-borderColor p-1"
    v-if="images.length > 0"
  >
    <Transition name="fade">
      <img v-if="aniImage" :src="images[imageIndex]" alt="" srcset="" class="w-auto h-full object-cover" rel="preload">
    </Transition>
    <button
      class="absolute top-1/2 left-0 -translate-y-1/2 w-[100px] h-full flex justify-start items-center"
      @click="changeimg('previous')"
    >
      <i class="pi pi-chevron-left text-borderColor text-5xl" />
    </button>
    <button
      class="absolute top-1/2 right-0 -translate-y-1/2 w-[100px] h-full flex justify-end items-center"
      @click="changeimg('next')"
    >
      <i class="pi pi-chevron-right text-borderColor text-5xl" />
    </button>
    <div class="absolute bottom-0 right-0 bg-backgroundColor text-fontColor px-2 py-1">
      {{ imageIndex + 1 }} / {{ images.length }}
    </div>
  </div>
  <div
    class="relative h-64 w-full md:w-1/2 overflow-hidden flex justify-center items-center border-dotted border-[4px] border-borderColor p-1"
    v-else
  >
    {{ t('專案因保密性不方便公開展示') }}
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
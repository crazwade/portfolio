<script setup lang='ts'>
withDefaults(defineProps<{
  size: 'large' | 'normal';
  type: 'icon' | 'text' | 'mail' | 'custome';
  icon?: string;
  text?: string;
  needPointer?: boolean;
}>(), {
  size: 'normal',
  type: 'custome',
  needPointer: false,
});
</script>

<template>
  <div
    class="flex justify-center items-center bg-borderColor text-backgroundColor"
    :class="{
      'w-[80px] h-[80px] rounded-[40px]': size === 'large',
      'w-[50px] h-[50px] rounded-[25px]': size === 'normal',
      'cursor-pointer hover:opacity-70': needPointer,
    }"
  >
    <i
      v-if="type === 'icon' || type === 'mail'"
      class="pi"
      :class="[
        `${icon}`,
        size === 'large' ? 'text-[50px]' : 'text-[30px]',
      ]"
    />
    <div
      v-if="type === 'text'"
      :class="[
        size === 'large' ? 'text-4xl' : 'text-2xl',
      ]"
    >
      {{ text }}
    </div>
    <slot v-if="type === 'custome'" />
  </div>
</template>

<style lang="scss" scoped>

</style>

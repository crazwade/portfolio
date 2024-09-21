<script setup lang='ts'>
withDefaults(defineProps<{
  label: string;
  size?: 'large' | 'normal' | 'small';
}>(), {
  size: 'normal',
});
</script>

<template>
  <div
    class="border-borderColor border-[1px] w-fit rounded-full text-borderColor"
    :class="{
      'py-3 px-5 text-[2rem]': size === 'large',
      'py-1 px-3 text-[1rem]': size === 'normal',
      'py-0.5 px-1.5 text-[0.8rem]': size === 'small',
    }"
  >
    {{ label }}
  </div>
</template>

<style lang="scss" scoped>

</style>

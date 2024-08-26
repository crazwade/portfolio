<script setup lang='ts'>
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="text-4xl border-borderColor border-b-[3px] pb-2">
      {{ title }}
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>

</style>

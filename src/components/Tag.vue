<script setup lang='ts'>
defineProps<{
  label: string;
}>();
</script>

<template>
  <div class="border-borderColor border-[1px] w-fit rounded-full py-1 px-3 text-borderColor">
    {{ label }}
  </div>
</template>

<style lang="scss" scoped>

</style>

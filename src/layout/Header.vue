<script setup lang='ts'>
import { useModeStore } from '../stores/mode';

const modeStroe = useModeStore();

const menu: { label: string, id: string }[] = [
  {
    label: '首頁',
    id: 'test1',
  },
  {
    label: '技能樹',
    id: 'test2',
  },
  {
    label: '專案作品',
    id: 'test3',
  },
  {
    label: '履歷',
    id: 'test4',
  },
  {
    label: '聯繫我',
    id: 'test5',
  },
];

defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'menuVisable'): void
}>();

const scrollTo = (id?: string) => {
  if (!id) {
    emit('menuVisable');

    return;
  }

  const scrollDOM = document.getElementById('layout');

  if (!scrollDOM) return;

  const element = document.getElementById(id);

  if (element) {
    const top = element.getBoundingClientRect().top - 78;
    scrollDOM.scrollBy({
      top,
      behavior: 'smooth',
    });
  }

  emit('menuVisable');
};

</script>

<template>
    <!-- mask -->
    <div
      v-if="isOpen"
      class="fixed top-0 left-0 w-full h-full"
      @click="emit('menuVisable')"
    />
    <!-- menu -->
    <Transition name="slide">
      <div
        v-if="isOpen"
        class="menu fixed top-0 left-0 mt-[78px] border-b-[8px] w-full box-border flex flex-col"
      >
        <div class="flex flex-col justify-center items-center gap-3 my-2">
          <template v-for="(item, index) in menu" :key="index">
            <a
              @click="scrollTo(item.id)"
              class="text-xl font-extrabold mt-[5px] w-full text-center hover:opacity-50 cursor-pointer"
            >
              {{ item.label }}
            </a>
          </template>
        </div>
        <div class="flex justify-between items-center mb-3 mt-8 mx-5">
          <!-- 語言設定 -->
          <div>
            i18n not ready yet...
          </div>
          <!-- 主題設定 -->
          <div class="flex flex-wrap justify-end">
            <template v-for="(item, key) in modeStroe.mode" :key="key">
              <button
                @click="modeStroe.changeMode(key)"
                v-if="key === modeStroe.currentMode"
                class="selectMod px-2"
              >
                {{ key }}
              </button>
              <button @click="modeStroe.changeMode(key)" v-else>{{ key }}</button>
              <div v-if="key !== 'custome'" class="mx-1">
                /
              </div>
            </template>
          </div>
        </div>
      </div>
    </Transition>
    <!-- header -->
    <div
      class="header fixed top-0 left-0 w-full h-[78px] border-t-[8px] box-border bg-gray-900 flex justify-between items-center"
    >
      <div class="logo w-[50px] h-[50px] ml-[10px] font-extrabold text-2xl flex justify-center items-center">
        JW
      </div>
      <div class="flex justify-center items-center w-[50px] h-[50px]">
        <i
          class="pi pi-th-large cursor-pointer"
          style="font-size: 30px"
          v-if="!isOpen"
          @click="emit('menuVisable')"
        />
        <i
          class="pi pi-times cursor-pointer"
          style="font-size: 30px"
          v-if="isOpen"
          @click="emit('menuVisable')"
        />
      </div>
    </div>
</template>

<style lang="scss" scoped>
.selectMod {
  background-color: var(--border-color);
}

.logo {
  background-color: var(--border-color);
}

.menu, .header {
  border-left: 8px;
  border-right: 8px;
  border-style: solid;
  border-color: var(--border-color);
  background-color: var(--background-color);
}

.slide-enter-active {
  transition: all 0.5s ease-out;
}

.slide-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-600px);
}
</style>

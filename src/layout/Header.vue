<script setup lang='ts'>
import { useModeStore } from '../stores/mode';
import { useDataStore } from '../stores/data';
import { langName } from '../lang';
import { useI18n } from 'vue-i18n';
import type { Lang } from '../lang';

const { locale, t } = useI18n();

const modeStroe = useModeStore();
const dataStore = useDataStore();

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

/**
 * Change locale of i18n
 * @param {"zh-TW" | "en-US"} lang - the locale to change
 */
const changeLang = (lang: Lang) => {
  locale.value = lang;
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
        class="fixed top-0 left-0 mt-[78px] border-b-[8px] border-x-[8px] bg-backgroundColor border-borderColor w-full box-border flex flex-col"
      >
        <div class="flex flex-col justify-center items-center gap-3 my-2">
          <template v-for="(item, index) in dataStore.getMenu" :key="index">
            <a
              @click="scrollTo(item.id)"
              class="text-xl font-extrabold mt-[5px] w-full text-center hover:opacity-50 cursor-pointer"
            >
              {{ t(`${item.label}`) }}
            </a>
          </template>
        </div>
        <div class="flex justify-between items-center mb-3 mt-8 mx-5">
          <!-- 語言設定 -->
          <div class="flex flex-wrap justify-start">
            <template v-for="(lang, key) in langName" :key="key">
              <button
                @click="changeLang(lang)"
                v-if="lang === locale"
                class="bg-borderColor px-2"
              >
                {{ lang }}
              </button>
              <button @click="changeLang(lang)" v-else>{{ lang }}</button>
              <div v-if="key !== langName.length - 1" class="mx-1">
                /
              </div>
            </template>
          </div>
          <!-- 主題設定 -->
          <div class="flex flex-wrap justify-end">
            <template v-for="(item, key) in modeStroe.mode" :key="key">
              <button
                @click="modeStroe.changeMode(key)"
                v-if="key === modeStroe.currentMode"
                class="bg-borderColor px-2"
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
      class="fixed top-0 left-0 w-full h-[78px] border-t-[8px] border-x-[8px] bg-backgroundColor border-borderColor box-border flex justify-between items-center"
    >
      <div class="bg-borderColor text-backgroundColor w-[50px] h-[50px] ml-[10px] font-extrabold text-2xl flex justify-center items-center">
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

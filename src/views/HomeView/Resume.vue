<script setup lang='ts'>
import { ref, watch } from 'vue';
import Contain from '../../components/Contain.vue';
import pdf1 from '../../assets/resume/pdf1.png';
import pdf1e from '../../assets/resume/pdf1-e.png';
import pdf2 from '../../assets/resume/pdf2.png';
import pdf2e from '../../assets/resume/pdf2-e.png';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const resume = ref([
  pdf1, pdf2
]);

watch(() => locale.value, () => {
  if (locale.value === 'en-US') {
    resume.value = [
      pdf1e, pdf2e
    ];
  }

  if (locale.value  === 'zh-TW') {
    resume.value = [
      pdf1, pdf2
    ];
  }
});

const downloadPDFs = () => {
  resume.value.forEach((pdfUrl, index) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `jackywu-resume-page${index + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};

const hrefTo = (url: string) => {
  window.open(url, '_blank');
};
</script>

<template>
  <div id="Resume">
    <Contain
      :title="t('menu.Resume')"
    >
      <div class="flex flex-col gap-3 w-full px-6">
        <div class="relative w-full h-full hidden justify-center md:flex">
          <img :src="resume[1]" alt="" srcset="" class="w-full h-auto md:w-auto md:h-[700px] object-contain border-[8px] border-borderColor">
          <img :src="resume[0]" alt="" srcset="" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-auto md:h-[700px] object-contain border-[8px] border-borderColor resumeTran">
        </div>
        <div class="relative w-full h-full flex justify-center md:hidden">
          <img :src="resume[0]" alt="" srcset="" class="w-full h-auto md:w-auto md:h-[700px] object-contain border-[8px] border-borderColor">
        </div>
        <div class="flex flex-wrap gap-2 justify-center items-center">
          <div
            class="flex flex-row justify-between items-center p-2 text-backgroundColor bg-fontColor gap-2 cursor-pointer hover:opacity-80 select-none"
            @click="downloadPDFs"
          >
            <i class="pi pi-download"></i>
            {{ t('下載PDF') }}
          </div>
          <div
            class="flex flex-row justify-between items-center p-2 text-fontColor bg-backgroundColor border-[1px] border-fontColor gap-2 cursor-pointer hover:opacity-80 select-none"
            @click="hrefTo('https://crazwade.github.io/profile/')"
          >
            <i class="pi pi-eye"></i>
            {{ t('查看') }}
          </div>
        </div>
      </div>
    </Contain>
  </div>
</template>

<style lang="scss" scoped>
.resumeTran {
  transform-origin: center;
  transform: scale(0.95) translateX(-235px) translateY(-390px) rotateZ(10deg);
}
</style>

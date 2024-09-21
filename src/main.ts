import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { createI18n } from 'vue-i18n';
import { langFile } from './lang';
import type { Lang } from './lang/index';

const isChinese = navigator.language.includes('zh');

type MessageSchma = typeof langFile.en & typeof langFile.zh;

const i18n = createI18n<[MessageSchma], Lang>({
  locale: isChinese ? 'zh-TW' : 'en-US',
  fallbackLocale: 'en-US',
  legacy: false,
  messages: {
    'zh-TW': langFile.zh,
    'en-US': langFile.en,
  }
});

import 'primeicons/primeicons.css';
import './assets/font/font.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount('#app');

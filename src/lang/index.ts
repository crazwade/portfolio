import en from './en.json';
import zh from './zh.json';

export type Lang = 'zh-TW' | 'en-US';

export const langFile = {
  zh,
  en,
};

export const langName: Lang[] = [
  'zh-TW',
  'en-US',
];

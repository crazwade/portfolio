import { defineStore } from 'pinia';
import { markRaw } from "vue";
import type { Component } from 'vue';
import { svgs } from '../assets/skillandtools';

import AboutMe from '../views/HomeView/AboutMe.vue';
import Autobiography from '../views/HomeView/Autobiography.vue';
import SkillsAndTools from '../views/HomeView/SkillsAndTools.vue';
import SideProject from '../views/HomeView/SideProject.vue';
import Resume from '../views/HomeView/Resume.vue';
import ContactMe from '../views/HomeView/ContactMe.vue';

import poker1 from '../assets/sideprojects/poker/poker1.png';
import poker2 from '../assets/sideprojects/poker/poker2.png';
import pokerVideo from '../assets/sideprojects/poker/video.gif';
import BMS1 from '../assets/sideprojects/BMS/BMS1.png';
import BMS2 from '../assets/sideprojects/BMS/BMS2.png';
import BMSVideo from '../assets/sideprojects/BMS/video.gif';
import log1 from '../assets/sideprojects/logviewer/log1.png';
import log2 from '../assets/sideprojects/logviewer/log2.png';
import LogVideo from '../assets/sideprojects/logviewer/video.gif';
import planetVideo from '../assets/sideprojects/planet/video.gif';
import pg1 from '../assets/sideprojects/pg/pg1.png';
import pg2 from '../assets/sideprojects/pg/pg2.png';
import pg3 from '../assets/sideprojects/pg/pg3.png';
import PGVideo from '../assets/sideprojects/pg/PGVideo.gif';

type SocialType = {
  type: 'icon';
  icon: string;
  url: string;
} | {
  type: 'mail';
  icon: string;
  mail: string;
} | {
  type: 'text';
  text: string;
  url: string;
};

export const useDataStore = defineStore('data', {
  state: () => <{
    menu: {
      label: string,
      id: string,
      components: Component,
    }[];
    tools: {
      label: string,
      svg: string,
    }[];
    sideProjects: {
      name: string,
      skills: string[],
      info: string,
      link: {
        demo: string,
        repo: string,
      },
      images: string[],
    }[];
    socials: SocialType[]
  }>({
    menu: [
      {
        label: 'menu.Aboutme',
        id: 'Aboutme',
        components: markRaw(AboutMe)
      },
      {
        label: 'menu.SkillsAndTools',
        id: 'SkillsAndTools',
        components: markRaw(SkillsAndTools)
      },
      {
        label: 'menu.SideProject',
        id: 'SideProject',
        components: markRaw(SideProject)
      },
      {
        label: 'menu.Resume',
        id: 'Resume',
        components: markRaw(Resume)
      },
      {
        label: 'menu.Autobiography',
        id: 'Autobiography',
        components: markRaw(Autobiography)
      },
      {
        label: 'menu.ContactMe',
        id: 'ContactMe',
        components: markRaw(ContactMe)
      },
    ],
    tools: [
      {
        label: 'JavaScript',
        svg: svgs.js,
      },
      {
        label: 'TypeScript',

        svg: svgs.ts,
      },
      {
        label: 'Vue2',

        svg: svgs.vue,
      },
      {
        label: 'Vue3',

        svg: svgs.vue,
      },
      {
        label: 'Vite',

        svg: svgs.vite,
      },
      {
        label: 'Pinia',

        svg: svgs.Pinia,
      },
      {
        label: 'Vitest',

        svg: svgs.vitest,
      },
      {
        label: 'Tailwind Css',

        svg: svgs.tailwindcss,
      },
      {
        label: 'I18n',

        svg: svgs.i18n,
      },
      {
        label: 'Scss',

        svg: svgs.scss,
      },
      {
        label: 'Git',

        svg: svgs.git,
      },
      {
        label: 'ESLint',

        svg: svgs.eslint,
      },
      {
        label: 'Jira',

        svg: svgs.jira,
      },
      {
        label: 'Element-Plus',

        svg: svgs.elementplus,
      },
    ],
    sideProjects: [
      {
        name: '撲克牌組合分析器',
        skills: ['Vue 3', 'Nuxt.js', 'Pinia', 'Tailwind CSS', 'Vitest', 'Nuxt UI'],
        info: '撲克牌組合分析器info',
        images: [
          pokerVideo,
          poker1,
          poker2,
        ],
        link: {
          demo: 'https://crazwade.github.io/PokerComboAnalyzer/',
          repo: 'https://github.com/crazwade/PokerComboAnalyzer',
        }
      },
      {
        name: '後台管理系統',
        skills: ['Vue 3', 'Vite', 'Element Plus', 'Tailwind CSS', 'Pinia', 'Axios', 'RESTful API', 'Chart.js'],
        info: '後台管理系統info',
        images: [
          BMSVideo,
          BMS1,
          BMS2,
        ],
        link: {
          demo: 'https://crazwade.github.io/BMS/dist',
          repo: 'https://github.com/crazwade/BMS',
        }
      },
      {
        name: 'Log日誌查看系統',
        skills: ['Vue 3', 'Vite', 'Element Plus', 'Tailwind CSS'],
        info: 'Log日誌查看系統info',
        images: [
          LogVideo,
          log1,
          log2,
        ],
        link: {
          demo: 'https://crazwade.github.io/LogViewer/',
          repo: 'https://github.com/crazwade/LogViewer',
        }
      },
      {
        name: '星球作品集',
        skills: ['Vue 3', 'TypeScript', 'Tailwind CSS'],
        info: '星球作品集info',
        images: [
          planetVideo
        ],
        link: {
          demo: 'https://crazwade.github.io/PortfolioDisplay/',
          repo: 'https://github.com/crazwade/PortfolioDisplay',
        }
      },
      {
        name: 'MiniGamePlayground',
        skills: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Pinia', 'CSS 3D'],
        info: 'MiniGamePlaygroundinfo',
        images: [
          PGVideo,
          pg1,
          pg2,
          pg3
        ],
        link: {
          demo: 'https://crazwade.github.io/MiniGamePlayground/',
          repo: 'https://github.com/crazwade/MiniGamePlayground',
        }
      },
      {
        name: '國立高雄大學線上申請系統',
        skills: ['PHP', 'JavaScript(ES5)', 'MySQL'],
        info: '國立高雄大學線上申請系統info',
        images: [],
        link: {
          demo: '',
          repo: '',
        }
      },
    ],
    socials: [
      {
        type: 'icon',
        icon: 'pi pi-github',
        url: 'https://github.com/crazwade',
      },
      {
        type: 'icon',
        icon: 'pi pi-linkedin',
        url: 'https://www.linkedin.com/in/jackywu1216/',
      },
      {
        type: 'text',
        text: 'CV',
        url: 'https://crazwade.github.io/profile/',
      },
      {
        type: 'mail',
        icon: 'pi pi-envelope',
        mail: 'jackywu526@gmail.com',
      }
    ],
  }),
  getters: {
    getMenu: (state) => state.menu,
    getTools: (state) => state.tools,
    getSideprojects: (state) => state.sideProjects,
    getSocials: (state) => state.socials,
  },
  actions: {
    handlehref: (payload: {
      url?: string;
      mail?: string;
    }) => {
      const { url, mail } = payload;

      if (url) {
        window.open(url, '_blank');
      }
      if (mail) {
        window.open(`mailto:${mail}`);
      }
    },
  },
});

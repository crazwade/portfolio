import { defineStore } from 'pinia';

type ModeDefault = 'set1' | 'set2' | 'set3' | 'custome';

type ModeOptions = {
  bgColor: [number, number, number],
  borderColor: [number, number, number],
  fontColor: [number, number, number],
};

const Mode: Record<ModeDefault, ModeOptions> = {
  set1: {
    bgColor: [52, 52, 52],
    borderColor: [240, 173, 46],
    fontColor: [232, 224, 213],
  },
  set2: {
    bgColor: [210, 210, 210],
    borderColor: [238, 45, 36],
    fontColor: [0, 0, 0],
  },
  set3: {
    bgColor: [51, 51, 51],
    borderColor: [0, 86, 157],
    fontColor: [123, 218, 243],
  },
  custome: {
    bgColor: [0, 0, 0],
    borderColor: [0, 0, 0],
    fontColor: [0, 0, 0],
  }
};

const SvgFilter: Record<ModeDefault, string> = {
  set1: 'invert(0%) sepia(7%) saturate(3135%) hue-rotate(317deg) brightness(110%) contrast(59%)',
  set2: 'invert(85%) sepia(0%) saturate(0%) hue-rotate(20deg) brightness(99%) contrast(95%)',
  set3: 'invert(16%) sepia(3%) saturate(18%) hue-rotate(342deg) brightness(98%) contrast(86%)',
  custome: 'invert(14%) sepia(2%) saturate(0%) hue-rotate(42deg) brightness(98%) contrast(81%)',
};

export const useModeStore = defineStore('mode', {
  state: () => <{
    currentMode: ModeDefault;
    mode: Record<ModeDefault, ModeOptions>;
  }>({
    currentMode: 'set1',
    mode: Mode,
  }),
  actions: {
    changeMode(
      mode: ModeDefault,
      options?: ModeOptions
    ) {
      if(mode === 'custome') {
        this.setMode(mode, options!);

        return;
      }

      this.setMode(mode, Mode[mode]);
    },
    setMode(mode: ModeDefault, option: ModeOptions) {
      if (mode === 'custome') {
        alert('待開發 / Under development ...');
        // this.mode[mode].bgColor = option.bgColor;
        // this.mode[mode].borderColor = option.borderColor;
        // this.mode[mode].fontColor = option.fontColor;
        return;
      }
      this.currentMode = mode;
      document.documentElement.style.setProperty('--background-color', `rgb(${option.bgColor})`);
      document.documentElement.style.setProperty('--border-color', `rgb(${option.borderColor})`);
      document.documentElement.style.setProperty('--font-color', `rgb(${option.fontColor})`);
      document.documentElement.style.setProperty('--svg-filter', SvgFilter[mode]);
    }
  },
});


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
    bgColor: [251, 253, 255],
    borderColor: [0, 74, 135],
    fontColor: [0, 200, 254],
  },
  custome: {
    bgColor: [0, 0, 0],
    borderColor: [0, 0, 0],
    fontColor: [0, 0, 0],
  }
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
      this.currentMode = mode;
      document.documentElement.style.setProperty('--background-color', `rgb(${option.bgColor})`);
      document.documentElement.style.setProperty('--border-color', `rgb(${option.borderColor})`);
      document.documentElement.style.setProperty('--font-color', `rgb(${option.fontColor})`);

      if (mode === 'custome') {
        this.mode[mode].bgColor = option.bgColor;
        this.mode[mode].borderColor = option.borderColor;
        this.mode[mode].fontColor = option.fontColor;
      }
    }
  },
});


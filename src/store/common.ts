import { MutationTree } from 'vuex';

export const state = () => ({
  hasSidebar: false, // 是否展开侧边栏
  darkMode: true, // 是否黑色主题
  codeView: false, // 是否显示源码
  currentTheme: 'indigo', // 当前主题色
  code: '', // 源码
  codeLines: 0, // 源码行数
  blockType: 'home', // 默认示例模块类型
  blockName: 'Introduction', // 默认示例模块名称
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  SET_SIDEBAR: (state, hasSidebar: boolean) => {
    state.hasSidebar = hasSidebar;
  },
  SET_THEME: (state, theme: string) => {
    state.currentTheme = theme;
  },
  SET_MODE: (state, mode: boolean) => {
    state.darkMode = mode;
  },
  SET_CODEVIEW: (state, codeView: boolean) => {
    state.codeView = codeView;
  },
  SET_CODE: (state, code: string) => {
    state.code = code;
  },
  SET_CODELINES: (state, codeLines: number) => {
    state.codeLines = codeLines;
  },
  SET_BLOCKTYPE: (state, blockType: string) => {
    state.blockType = blockType;
  },
  SET_BLOCKNAME: (state, blockName: string) => {
    state.blockName = blockName;
  },
};

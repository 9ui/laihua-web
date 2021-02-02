import { MutationTree } from 'vuex';

export const state = () => ({
  hasSidebar: true, // 是否展开侧边栏
  darkMode: false, // 是否黑色主题
  currentTheme: 'indigo',
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
};

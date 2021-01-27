import { MutationTree } from 'vuex';

export const state = () => ({
  hasSidebar: true,
  theme: '',
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  SET_SIDEBAR: (state, hasSidebar: boolean) => {
    state.hasSidebar = hasSidebar;
  },
  SET_THEME: (state, theme: string) => {
    state.theme = theme;
  },
};

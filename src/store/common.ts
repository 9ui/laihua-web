import { MutationTree } from 'vuex';

export const state = () => ({
  hasSidebar: true,
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  SET_SIDEBAR: (state, hasSidebar: boolean) => {
    console.log('hasSidebar111', hasSidebar);
    state.hasSidebar = hasSidebar;
  },
};

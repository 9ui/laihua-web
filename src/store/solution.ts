import { ActionTree, MutationTree } from 'vuex';

export const state = () => ({
  categorys: {}, // 解决方案分类
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  SET_CATEGORY: (state, categorys: Object) => (state.categorys = categorys),
};

export const actions: ActionTree<RootState, RootState> = {
  async fetchCategory() {
    const { data } = await this.$axios.$get('/webapi/home/category?type=50');
    console.log(data);
    // if (data.code === 200) {
    //   commit('SET_CATEGORY', data.data);
    // }
  },
};

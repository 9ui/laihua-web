import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

type category = {};

@Module({
  name: 'modules/solution',
  namespaced: true,
  stateFactory: true,
})
export default class CountModule extends VuexModule {
  private category: Object = {};

  public get getCategory() {
    return this.category;
  }

  @Action({ commit: 'setCategory' })
  public fetchCategory(): category {
    return { username: '张三', password: 'zhangsan' };
  }

  @Mutation
  public setCategory(category: Object): void {
    this.category = category;
  }
}

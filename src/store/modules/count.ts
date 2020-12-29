import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module({
  name: 'modules/count',
  namespaced: true,
  stateFactory: true,
})
export default class CountModule extends VuexModule {
  private count: number = 1;

  public get getCount() {
    return this.count;
  }

  @Mutation
  public setCount(val: number): void {
    this.count = val;
  }
}

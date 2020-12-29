import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module({
  name: 'modules/products',
  namespaced: true,
  stateFactory: true,
})
export default class ProductsModule extends VuexModule {
  private pName: string = '';
  private price: number = 0;
  private oldPrice: number = 0;

  public get getName() {
    return this.pName;
  }

  public get getPrice() {
    return this.price;
  }

  public get getOldPrice() {
    return this.oldPrice;
  }

  @Mutation
  public setPName(name: string): void {
    this.pName = name;
  }

  @Mutation
  public setPrice(price: number): void {
    this.price = price;
  }

  @Mutation
  public setOldPrice(oldPrice: number): void {
    this.oldPrice = oldPrice;
  }
}

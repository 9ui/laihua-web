/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';

import CountModule from './modules/count';
import ProductsModule from './modules/products';
import StudentModule from './modules/student';
import SolutionModule from './modules/solution';

let CountStore: CountModule;
let ProductsStore: ProductsModule;
let StudentStore: StudentModule;
let SolutionStore: SolutionModule;

const initializer = (store: Store<any>) => {
  CountStore = getModule(CountModule, store);
  ProductsStore = getModule(ProductsModule, store);
  StudentStore = getModule(StudentModule, store);
  SolutionStore = getModule(SolutionModule, store);
};

export const plugins = [initializer];

export { initializer, CountStore, ProductsStore, StudentStore, SolutionStore };

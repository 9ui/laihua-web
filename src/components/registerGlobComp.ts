import type { VueConstructor } from 'vue';

// icon
import Icon from './Icon/index';

// component-list
const compList = [Icon];

/**
 * @description：注册全局组件
 */
const commonComponents = {
  install(Vue: VueConstructor) {
    compList.forEach((comp: any) => Vue.component(comp.name, comp));
  },
};

export default commonComponents;

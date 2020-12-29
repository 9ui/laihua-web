// * 该文件包含将在Nuxt加载后运行的代码
import * as Lifecycle from 'nuxt-lifecycle';
declare let window: any;

// *您可以在下面编写要在加载nuxt之前运行的逻辑。

// * 在下面，您可以编写要在加载nuxt之后运行的逻辑
if (Lifecycle.isClient()) {
  window.onNuxtReady(() => {
    // *仅在卸载Vuex时有效。
    // if (!window.vuex.version) {
    //   // * 卸下Vuex时，该代码应存在，但HMR上不会发生任何错误。
    //   window.$nuxt.$store = {
    //     hotUpdate: () => {
    //       // * 当页面由HMR重新呈现时
    //       // * 在下面编写要执行的逻辑。
    //     },
    //   };
    // }
  });
}

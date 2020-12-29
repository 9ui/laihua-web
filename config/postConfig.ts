import type { NuxtConfig } from '@nuxt/types';
// import webpack from 'webpack';
// import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';
// import postbuild from '../postbuild';
import * as Config from './';

// * 隐藏Nuxt的实验警告错误
process.removeAllListeners('warning');

/**
 * 配置所有构建设置之后
 * 活地修改构建设置。
 */
export const PostConfig = (nuxtConfig: Config.Interface.IConfig) => {
  const config = nuxtConfig as NuxtConfig;

  // * 在开发模式下不使用运行时缓存。
  // * 这是在使用HMR时防止缓存的一种措施。
  if (!Config.Interface.isProductionMode) {
    if (config && config.pwa && config.pwa.runtimeCaching) delete config.pwa.runtimeCaching;
  }

  // * 删除Vuex依赖项信息
  // config.build.plugins.push(new webpack.IgnorePlugin(new RegExp('/vuex/')));

  // * 您将收到已解决的Hardsource错误消息版本。
  // config.build.plugins.push(
  //   new HardSourceWebpackPlugin({
  //     info: {
  //       mode: 'none',
  //       level: 'none',
  //     },
  //   })
  // );

  // * 删除未使用的Vuex之后，它仅保留DI的其余依赖关系
  // (nuxtConfig as NuxtConfig).head.script.push({
  //   innerHTML: 'window.vuex={Store:function(){return{replaceState:function(){}}}}',
  //   type: 'text/javascript',
  //   charset: 'utf-8',
  // });

  // * 在vue-devtools中使用vue-state-store的代码注入
  // if (!Config.Interface.isProductionMode) {
  //   (nuxtConfig as NuxtConfig).head.script.push({
  //     src: 'https://unpkg.com/vue-state-store-devtools@1.0.5/export/devtools.js',
  //   });
  // }

  // * 转译项目中使用的模块
  //   (nuxtConfig as NuxtConfig).build.transpile = postbuild();

  // * 如果项目正在开发中，请禁用terser。
  if (!Config.Interface.isProductionMode)
    (nuxtConfig as NuxtConfig).build.optimization.minimize = false;
};

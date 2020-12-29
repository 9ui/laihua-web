import * as Merge from 'deepmerge';
import * as Config from './config';

/**
 * 所有Nuxt设置都放在这里
 */
const NuxtConfig = Merge.all([
  Config.NuxtConfig, // * Nuxt
  Config.HeadConfig, // * <head>
  Config.CssConfig, // * 样式
  Config.BuildConfig, // * 构建
  Config.DevtoolsConfig, // * vue-devtools
  Config.PWAConfig, // * PWA
  Config.HelmetConfig, // * nuxt-helmet
  Config.ExternalModuleConfig, // * 其他模块配置
]);

// 构建缓存配置
Config.PostConfig(NuxtConfig);

export default NuxtConfig;

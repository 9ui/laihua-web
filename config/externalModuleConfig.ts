import * as Config from './';

/**
 * 项目中使用的其他模块
 * 此处包含可选设置。
 */
export const ExternalModuleConfig = {
  // * axios
  axios: {},

  // tailwindcss: {
  //   configPath: '~/config/tailwind.config.js',
  //   cssPath: '~/assets/scss/tailwind.scss',
  //   exposeConfig: false,
  // },

  // * gtm ( Google Analytics )
  // * gtm官方文档 : https://github.com/nuxt-community/gtm-module#readme
  // gtm: {
  //   id: process.env.GOOGLE_TAG_MANAGER_ID,
  //   enbaled: !!Config.Interface.isProductionMode,
  // },

  // * svgSprite 设置库选项。
  svgSprite: {
    // * default url.
    input: '~/assets/icons',
  },

  // *设置通用存储选项.
  // * 我之所以使用它，是因为在某些情况下，无法在ssr模式下进行窗口访问
  storage: {
    vuex: false, // boolean or {namespace}
    localStorage: true, // boolean or {prefix }
    cookie: false, // boolean or {prefix, options }
    initialState: {}, // Object {}
    ignoreExceptions: false, // boolean
  },
} as Config.Interface.IConfig;

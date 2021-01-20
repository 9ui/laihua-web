import * as Config from '.';
export const NuxtConfig = {
  // 使旧的浏览器支持版本正常工作
  // modern: 'server',
  // 指定要部署的路径。
  srcDir: './src',
  router: {
    // middleware: ['auth', 'store'],
  },
  // 注册全局组件
  // 默认情况下，该路径查看〜/components
  components: true,
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/composition-api', '@/plugins/nuxt', '@/plugins/extend'],
  modules: [
    '@nuxtjs/axios',
    // 'nuxt-lifecycle',
    // '@nuxtjs/universal-storage',
    // '@nuxtjs/gtm',
    // '@nuxtjs/svg-sprite',
    'nuxt-helmet',
  ],
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // 引入离线缓存
    '@nuxtjs/pwa',
    // 优化antd默认引入moment全量加载问题
    '@nuxtjs/moment',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    // 引入composition-api
    // '@nuxtjs/composition-api',
  ],
  moment: {
    locales: ['zh-cn'],
  },
  loader: [
    {
      test: /\.less$/,
      loaders: 'style-loader!css-loader!less-loader',
    },
  ],
  /**
   * @description: 设置请求前缀以及跨域设置
   */
  axios: {
    proxy: true,
    prefix: '/webpai', // 表示给请求url加个前缀 /api
  },
  /**
   * @description: 请求代理
   */
  proxy: {
    '/webpai': {
      target: 'https://beta.laihua.com', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/webpai': '/',
      },
    },
  },
} as Config.Interface.IConfig;

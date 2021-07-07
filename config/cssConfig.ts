import * as Config from './';

export const CssConfig = {
  // * 移动整个页面时应用效果
  // * https://nuxtjs.org/api/configuration-transition
  pageTransition: 'fade',
  layoutTransition: 'fade',

  // * 包含Nuxt默认加载组件的加载栏设置
  // * https://vue-nuxt.gitbook.io/nuxt/configuration/loading
  loading: {
    color: '#3B8070', // 加载栏颜色
    failedColor: 'red', // 转换期间发生错误时显示的加载栏颜色
    height: '2px', // 屏幕上显示的过程栏的高度
    throttle: 200, // 等待设置时间（毫秒）后，过程栏将显示在屏幕上
    duration: 5000, // 进程栏的最大持续时间（毫秒）
    rtl: false, // 加载条方向
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/styles/index.css'],
  styleResources: {
    css: ['@/assets/styles/index.css'],
  },
  tailwindcss: {
    // 定义Tailwind CSS文件的路径，如果该文件存在，则将导入该文件，而不是模块的默认文件
    cssPath: '~/assets/styles/tailwind.css',
    configPath: 'tailwind.config.js',
    jit: true,
    // 如果需要在运行时解析tailwind配置，则可以在nuxt.config中启用暴露配置选项
    exposeConfig: true,
    // 要禁用开发中的查看器，请将其设置为false：
    viewer: false,
    config: {},
  },
  purgeCSS: {
    whitelist: ['dark-mode'],
  },
} as Config.Interface.IConfig;

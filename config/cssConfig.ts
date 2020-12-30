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
  css: ['@/design/index.less'],
  styleResources: {
    less: ['@/design/index.less'],
  },
} as Config.Interface.IConfig;

import * as Config from './';

export const HeadConfig = {
  title: '来画视频UI库',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'dns-prefetch', href: '//at.alicdn.com' },
    { rel: 'dns-prefetch', href: '//web.90c.vip' },
  ],
  // 全局引入外部或本地static目录下的资源,路径不用加static
  script: [],
} as Config.Interface.IConfig;

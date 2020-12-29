import * as Config from './';

export const HeadConfig = {
  title: '来画视频',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'dns-prefetch', href: '//at.alicdn.com' },
  ],
  // 全局引入外部或本地static目录下的资源,路径不用加static
  script: [
    { src: '//at.alicdn.com/t/font_1909239_8a9yim4bw3q.js', async: true, rel: 'preload' }, // 平台 icon
    { src: '//at.alicdn.com/t/font_2037105_xc5mzbqnc3.js', async: true, rel: 'preload' }, // 视频办公宝 icon
  ],
} as Config.Interface.IConfig;

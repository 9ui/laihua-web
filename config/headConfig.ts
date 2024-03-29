import * as Config from './';

export const HeadConfig = {
  title: '来画视频UI库1111',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'dns-prefetch', href: '//at.alicdn.com' },
    { rel: 'dns-prefetch', href: '//web.9ui.vip' },
  ],
  script: [
    { src: 'https://at.alicdn.com/t/font_2660617_cczysaqm84t.js', async: true, rel: 'preload' }, //平台 icon
  ],
} as Config.Interface.IConfig;

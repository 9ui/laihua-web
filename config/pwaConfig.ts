import * as Config from './';

export const PWAConfig = {
  manifest: {
    name: '来画视频',
    short_name: 'zzw',
    theme_color: '#0088f5',
    background_color: '#eee',
    description:
      '来画是有创意的AI动画短视频制作平台，仅需几张图片，几段文字和声音简单组合，即可在短时间内生成一个有趣的动画短视频。丰富视频模板素材免费用！对于企业用户，还有动画高端定制服务。',
    display: 'standalone',
    lang: 'zh',
  },
  workbox: {
    // 当页面在浏览器中处于活动状态时
    // 可以在此处定义要缓存的资源的条件。
    runtimeCaching: [
      // urlPattern  地址格式或扩展名如下所示。
      // urlPattern: 'https://my-cdn.com/.*', 须后跟.*以缓存所有子路径。
      // * urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

      // handler:  类型列表。
      // Cache First: 在网络请求和缓存期间始终总是首先访问缓存
      // Cache Only: 仅检查高速缓存文件并吐出错误的方法
      // Network First: 始终先处理网络请求，而不是缓存（也检查缓存，迟到时显示缓存）
      // Network Only: 无论是否存在缓存文件，都仅对该文件发出网络请求
      // StaleWhileRevalite : 如何首先尝试缓存，否则请尝试处理网络请求。  最好应用不需要是最新数据的数据，因为它经常更新，例如个人资料图像

      // 全局缓存策略
      {
        urlPattern: '.*',
        handler: 'StaleWhileRevalidate',
        strategyOptions: {
          cacheName: `global${Config.Interface.buildVersion}`,
          cacheExpiration: {
            // maxEntries: 500, // * 500
            maxAgeSeconds: 12 * (60 * 60), // * 有效期为12小时
          },
        },
      },
    ],
  },
} as Config.Interface.IConfig;

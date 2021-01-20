import { resolve } from 'path';

import * as Config from './';

export const BuildConfig = {
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: 'https://cdn.90c.vip/',
    // 仅在将--analyze参数作为命令输入时激活。）
    analyze: !!(process.argv.length > 5 && process.argv[4] === '--analyze'),
    // 缩小生成的输出。
    // （仅当将--plain参数作为命令输入时才禁用它。）
    terser: !(process.argv.length > 5 && process.argv[4] === '--plain'),

    // 可视化捆绑包，以便对其进行优化
    extractCSS: true, // 单独提取 css
    maxChunkSize: 36000, // 单个包最大尺寸
    // 如果要使用Babel转换特定的依赖项，可以将它们添加到build.transpile中。转换中的每个项目都可以是程序包名称，匹配依赖项文件名的字符串或正则表达式对象。
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        // * 内联CSS Minifire
        // * 有一个优化器，因此无需将其打开
        // * https://github.com/nuxt/nuxt.js/blob/5fa768373da1adfd8c76145b2ec95b7824af93b4/packages/webpack/src/config/client.js#L62-L74
        minifyCSS: false,

        // * 内联JS Minifire
        // * 已经有一个Terser，因此您无需打开它
        // * https://github.com/nuxt/nuxt.js/blob/da4615a160f356d7368e66956758345d674948d0/packages/webpack/src/config/base.js#L183-L213
        minifyJS: false,
        processConditionalComments: true,
        removeEmptyElements: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
    // Customize Babel configuration for JavaScript and Vue files. .babelrc is ignored by default.
    babel: {
      presets() {
        return [
          'vca-jsx',
          [
            '@nuxt/babel-preset-app',
            {
              corejs: { version: 3 },
            },
          ],
        ];
      },
      plugins: [],
    },
    // 配置loader
    loaders: {
      ts: {
        silent: true,
      },
      tsx: {
        silent: true,
      },
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
    // @ts-ignore: Unreachable code error
    extend(config, { isClient, isDev }) {
      // 为 客户端打包 进行扩展配置
      if (isClient) {
        config.devtool = 'eval-source-map';
      }
      // 此处容易出问题 需要使用相对路径
      config.resolve.alias['@ant-design/icons/lib/dist$'] = resolve(
        __dirname,
        '../src/assets/icons/antd-icon.ts'
      );
      if (!isDev && isClient) {
        /**
         *  performance就是关闭每次打包之后的文件过大警告
         * 关闭文件过大提示，利于打包加快速度
         */
        config.performance = {
          hints: false,
          //入口起点的最大体积 整数类型(int)（以字节(bytes)为单位 200k）
          maxEntrypointSize: 204800,
          //生成文件的最大体积 整数类型(int)（以字节(bytes)为单位 200k）
          maxAssetSize: 204800,
        };
        /**
         * 公共代码抽离和代码分割，避免单个js文件过大
         */
        config.optimization = {
          splitChunks: {
            minSize: 10000,
            maxSize: 250000,
            cacheGroups: {
              vendor: {
                chunks: 'all',
                test: /node_modules/,
                name: 'vendor',
                minChunks: 1,
                maxInitialRequests: 5,
                priority: 100,
              },
              common: {
                chunks: 'all',
                test: /[\\/]src[\\/]ts[\\/]/,
                name: 'common',
                minChunks: 3,
                maxInitialRequests: 5,
                priority: 60,
              },
              styles: {
                name: 'styles',
                test: /\.(sa|sc|c|le)ss$/,
                chunks: 'all',
                enforce: true,
              },
              runtimeChunk: {
                name: 'manifest',
              },
            },
          },
        };
      }
      // config.externals = {
      //   vuex: 'vuex',
      // };
    },
    // 不开启gzip
    // performance: {
    //   gzip: false,
    // },
    optimization: {
      minimize: process.argv.length > 5 && process.argv[4] === '--plain',
    },
  },
} as Config.Interface.IConfig;

import * as Config from '.';

export const DevtoolsConfig = {
  eslint: {
    fix: true,
  },

  stylelint: {
    fix: true,
  },
  typescript: {
    typeCheck: {
      eslint: {
        files: './src/**/*.{ts,js,tsx,vue}',
      },
    },
  },
} as Config.Interface.IConfig;

export interface IUniversal {
  API_URL: string;
  WEB_URL: string;
  STATIC_URL: string;
  NODE_ENV: 'development' | 'production';
}

const universal: IUniversal = {
  API_URL: 'https://beta.laihua.com/webapi',
  WEB_URL: 'http://localhost:3000',
  STATIC_URL: 'https://localhost:3000/static',
  NODE_ENV: process.env.NODE_ENV,
};

/**
 * 开发环境
 */
export const dev: IUniversal = {
  ...universal,
};

/**
 * 生产环境
 */
export const prod: typeof universal = {
  ...universal,
};

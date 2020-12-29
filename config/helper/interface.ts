import type { NuxtConfig } from '@nuxt/types';

/**
 * Nuxt Config
 */
export type IConfig = NuxtConfig;

/**
 * 检查您是否处于生产模式
 */
export const isProductionMode = process.env.NODE_ENV === 'production';

/**
 * 在服务每次重启时构建
 * 随机版本名称以更新版本
 */
export const buildVersion = `_${Math.floor(+new Date() / 1000)}`;

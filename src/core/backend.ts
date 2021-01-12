import * as Lifecycle from 'nuxt-lifecycle';
import { RestAPI } from './rest-api';
import { setupProgress } from './rest-api-plugin';

/**
 * * 这是一个包装功能，可以将请求直接发送到后端。
 * * (preprocess -> process -> postprocess 按顺序运行.)
 */
export const BackEnd = new RestAPI({
  address: process.env.API_URL,

  // * 它可以在请求发生之前起作用
  preprocess: (params) => {
    // * 告诉浏览器在开发过程中正在发送什么请求
    if (Lifecycle.isClient() && process.env.NODE_ENV === 'development') {
      window.console.log(
        `%c📦 API请求发送地址:${params.link} 类型:${params.processInfo}`,
        'color: #E19A56;',
        params
      );
    }
    return true;
  },

  // * 发出请求后，它可以工作。
  postprocess: (params, response) => {
    // * 浏览器告诉您在开发过程中收到了什么响应。
    if (Lifecycle.isClient() && process.env.NODE_ENV === 'development') {
      window.console.log(
        `%c📫 API响应目标地址:${params.link} 类型:${params.processInfo}`,
        'color: #31B4D9;',
        response
      );
    }
    return true;
  },

  // * 发生错误时可以使用。
  faultTolerance: (error) => {
    // * 浏览器会告诉您在开发过程中会收到哪些错误
    if (Lifecycle.isClient() && process.env.NODE_ENV === 'development') {
      let link = '';
      if (error.config && error.config.url) link = error.config.url;
      window.console.error(`🔥 API响应错误接收地址:${link}\n\n` + `信息：${error.message}\n`, {
        request: error.request,
        response: error.response,
        stack: error.stack,
        isAxiosError: error.isAxiosError,
        config: error.config,
      });
    }
  },

  // * 将在所有请求上使用axiosOption。
  axiosOption: {
    headers: {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
    },
    withCredentials: true,
  },
});

// * 链接进度栏。
setupProgress(BackEnd);

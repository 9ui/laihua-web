declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * 将API发送到的主要后端服务器地址。
     */
    API_URL: string;
    /**
     * 这是默认显示的Web应用访问地址。
     */
    WEB_URL: string;
    /**
     * 这是一个单独的静态文件服务器地址，可以接收静态文件。
     */
    STATIC_URL: string;
    /**
     * Node环境是用于开发还是用于发行都包含在字符串中
     */
    NODE_ENV: 'development' | 'production';
  }
}

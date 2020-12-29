import * as Config from './';

/**
 * nuxt-helment设置位于此处。
 */
export const HelmetConfig = {
  /**
   * @see https://helmetjs.github.io/
   */
  helmet: {
    /**
     * Referrer-Policy
     * 用户转到另一个页面时
     * 指定要在当前页面上包含多少信息
     *
     * 基本说明
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy#Browser_compatibility
     *
     * 当GA无法获得no-referrer时
     * @see https://www.artience.com/archives/4777
     *
     * no-referrer - 它不包含任何信息.
     * origin -它仅通知您您来自当前域.
     * same-origin - 它告诉您仅在同一个域时哪个地址来自.
     * strict-origin - 仅在协议安全级别相同的情况下才包括域地址.
     * unsafe-url - 它会告诉您所有地址，无论您转到哪个页面.
     */
    referrerPolicy: {
      policy: 'strict-origin', // * 默认 no-referrer
    },
    /**
     * X-DNS-Prefetch-Control
     * 允许页面预加载要通过域访问的IP
     *
     * @example
     * <link rel="dns-prefetch" href="地址">
     */
    dnsPrefetchControl: {
      allow: false, // 默认值: false
    },

    /**
     * CT（证书透明性）代表证书透明性,
     * 几乎实时监控认证机构颁发的证书
     * 它是Google创建的一个开放框架，值得赞赏
     *
     * 使用Expect CT标头，所有证书
     * 您可以检查它是否被正确使用
     *
     * maxAge
     * 浏览器缓存并应用收到的策略
     * 指定秒数（仅强制或仅报告）。
     *
     * enforce
     * 选强制使浏览器能够
     * 证书无效时是否拒绝连接
     * 控制是否以仅报告模式处理。
     *
     * reportUri
     * 如果您无法收到正确的CT信息
     * 浏览器应将报告发送到的URL值。
     */
    expectCt: {
      maxAge: 0, // 默认值: 0
      enforce: false, // 默认值: false
    },

    /**
     * X-Frame-Options 通过设置标题
     * clickjacking防范
     *
     * deny
     * 不论页面试图在哪个页面上都无法装裱
     *
     * sameorigin
     * 页面只能显示为与页面本身具有相同来源的框架.
     */
    frameguard: {
      action: 'sameorigin', // 默认值: sameorigin
    },

    /**
     * SSL/TLS通过以下方式应用HTTP连接
     * Strict-Transport-Security 设置标题。
     */
    hsts: {
      maxAge: 15552000, // 默认值: 15552000 (180)
      includeSubDomains: true, // 默认值: true
      preload: false, // 默认值: false
    },

    /**
     * X-Permitted-Cross-Domain-Policies
     *
     * 跨域策略文件是Web客户端
     * 例如Adobe Flash Player或Adobe Acrobat）
     * 授予跨域处理数据权限的XML文档.
     *
     * 客户端请求托管在特定源域上的内容
     * 当内容定向到非您自己的域时
     * 远程域授予对源域的访问权限
     * 托管跨域策略文件，以允许客户端继续进行交易.
     *
     * 元数据策略通常在主策略文件中声明，但不能写入根目录
     * 用户发送X-Permited-Cross-Domain-Policies HTTP响应标头
     * 您也可以使用它来声明元数据策略.
     *
     * none
     * 您不能在目标服务器上的任何位置使用策略文件，包括此主策略文件.
     *
     * master-only
     * 仅允许此主策略文件
     *
     * by-content-type
     * [仅HTTP / HTTPS]随内容类型提供的策略文件
     * text/x-cross-domain-policy 只允许
     *
     * by-ftp-filename
     * [仅FTP]策略文件，文件名为crossdomain.xml
     * 仅允许以/crossdomain.xml结尾的URL.
     *
     * all
     * 接受该目标域中的所有策略文件.
     */
    permittedCrossDomainPolicies: {
      permittedPolicies: 'none', // * 基本的 none
    },
  },
} as Config.Interface.IConfig;

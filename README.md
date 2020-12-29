# laihua-web7.0

## 新建项目

```js
 yarn create nuxt-app '项目名'
```

选择相关配置如下

```text
Project name:项目名
Programming language: TypeScript // 此处选择typescript作为开发语言
Package manager: Yarn //  包管理工具，此处选择是yarn
UI framework： Ant Design Vue // 选择ui框架  此处以Ant Design Vue为例
Nuxt.js modules: Axios  Progressive Web App (PWA) // 选择请求需要的Axios模块以及离线存储需要的pwa模块
Linting tools：  // 可以根据项目需要选择，此项目全选
 ESLint  // 代码语法检测校验
 Prettier  // 代码格式规范校验 一般可以和ESLINT一起使用
 Lint staged files // 校验文件的钩子函数工具
 StyleLint // 规范CSS格式 具体用户可以参考[官方网站](https://stylelint.io/user-guide/get-started)
 Commitlint // 代码提交规范 可以配合cz-conventional-changelog插件生成提交日志
Testing framework: // 测试框架 根据项目需要选择 此项目没有添加测试用例
  None
Rendering mode // 渲染模式 可以选择多页面需求的 服务端渲染 也可以选择单页面开发模式，根据项目需求来定。此项目是一个是服务端渲染的项目
Deployment target  // 部署源可以选择服务端（Nodejs） 也可以静态资源部署 此项目基于Nodejs服务端渲染的开发
 Server
Development tools // 部署工具 此项目搭建在github上 实现自动热更新依赖  所以选择
 Semantic Pull Requests
 Dependabot (For auto-updating dependencies, GitHub only)
Continuous integration: // 持续集成
Github
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 已完成功能

1.组件懒加载

## 优化解决方案

- 组件按需加载
- 拆分 css

### 组件按需加载

例如，在项目中引用的 antd-ui 为例:

1. 实现组件按需加载引入 babel-plugin-component babel-plugin-import

```js
yarn add babel-plugin-component babel-plugin-import -D
```

2. 编辑配置

```js
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    // element官方教程
    [
      'component',
      {
        libraryName: 'ant-design-vue',
        style: 'css',
      },
    ],
  ],
};
```

### 样式拆分

在 nuxt.config.ts 文件中，添加如下配置

```js
  build: {
    extractCSS: true, // 单独提取 css
    maxChunkSize: 36000, // 单个包最大尺寸
  },
```

### push 代码触发自动部署任务

触发条件：push 名称以 v 开头的 tag。

```js
# 创建tag
git tag v0.1.0
# 查看tag
git tag
# 推送tag
git push tag origin v0.1.0
```

### 参考资料

**完善 store**

1. [nuxt-typed-vuex](https://github.com/danielroe/typed-vuex)
2. [vuex-module-decorators](https://github.com/championswimmer/vuex-module-decorators)
3. [vuex-composition-helpers 重点推荐](https://github.com/greenpress/vuex-composition-helpers)
4. [ts-nuxtjs-vuex](https://github.com/takefumi-yoshii/ts-nuxtjs-vuex)

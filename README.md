## Simple-Upload

用到的东西：

* react

  UI 框架

* create-react-app

  react 脚手架

* react-app-rewired

  允许自定义 webpack 配置

* redux

  * redux

    状态管理工具

  * react-redux

    简化 redux 在 react 中的操作

  * redux-immutable

    替换原来的 combineReducers, 将 state 统一成 immutable 对象

  * redux-saga

    redux 中间件 将异步请求分离出来

* react-transition-group

  简化 css 动画的操作

* styled-components

  css-in-js 解决方案

* immutable

  Immutable persistent data collections for Javascript which increase efficiency and simplicity.

### 后台

https://github.com/skywalker512/simple-koa

### 界面
自己没有艺术细胞，界面照抄
https://pqina.nl/filepond

动画没有照抄，因为做不了这么好


  - [x] 能上传图片

  - [x] 能显示上传进度条
  - [x] 能上传大文件（如视频等）
  - [x] 实现分片上传
  - [ ] 断点续传
const { paths } = require('react-app-rewired');
const path = require('path');

// 为了不 eject 项目所以使用 react-app-rewired 来重置 webpack 配置
// 暂时没有必要用 babel来启动 所以就 require 来引入

module.exports = function override(config, env) {
  const alias = {
    '@/common': path.resolve(__dirname, `${paths.appSrc}/common/`),
    '@/statics': path.resolve(__dirname, `${paths.appSrc}/statics/`),
    '@/utils': path.resolve(__dirname, `${paths.appSrc}/utils/`),
    '@/store': path.resolve(__dirname, `${paths.appSrc}/store/`),
  }

  config.resolve.alias = {...config.resolve.alias, ...alias}
  return config
}
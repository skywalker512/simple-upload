const { paths } = require('react-app-rewired');
const path = require('path');

// 为了不 eject 项目所以使用 react-app-rewired 来重置 webpack 配置

module.exports = function override(config, env) {
  const alias = {
    '@/common': path.resolve(__dirname, `${paths.appSrc}/common/`),
    '@/statics': path.resolve(__dirname, `${paths.appSrc}/statics/`),
  }

  config.resolve.alias = {...config.resolve.alias, ...alias}
  return config
}
module.exports = {
  extends: [
    'react-app',
    'plugin:prettier/recommended' // 使用 Prettier 插件
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error' // 将 Prettier 规则设置为错误级别
  }
};
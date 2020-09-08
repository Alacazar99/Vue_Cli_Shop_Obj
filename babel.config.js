module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ],
  proxy: {
    // 配置跨域
    '/api': {
     target: 'https://autumnfish.cn',
     ws: true,
     changOrigin: true,
     pathRewrite: {
      '^/api': ''
     }
    }
   }
}

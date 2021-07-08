module.exports = {
  base: '/docs/',
  dest: 'dist',
  title: '洪布斯',
  description: '桃李不言，下自成蹊！',
  themeConfig: {
    repo: 'Hongbusi/docs', // 项目仓库的 url
    logo: '/images/logo.png',
    navbar: require('./config/navbar'),
    sidebar: require('./config/sidebar')
  }
}

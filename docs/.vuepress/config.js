const { path } = require('@vuepress/utils');

module.exports = {
  // base: '/docs/',
  dest: 'dist',
  title: '洪布斯',
  description: '桃李不言，下自成蹊！',
  head: [
    ['link', { rel: 'manifest', href: 'manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  bundler: '@vuepress/webpack',
  markdown: {
    code: {
      lineNumbers: false
    }
  },
  theme: path.resolve(__dirname, '../../packages/vuepress-theme-hbs'),
  themeConfig: {
    repo: 'Hongbusi/docs',
    docsDir: 'docs',
    docsBranch: 'master',
    logo: '/images/logo.png',
    // sidebarDepth: 1,
    navbar: require('./config/navbar'),
    sidebar: require('./config/sidebar')
  },
  plugins: require('./config/plugins')
}

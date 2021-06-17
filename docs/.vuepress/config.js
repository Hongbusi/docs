module.exports = {
  base: '/docs/',
  dest: 'dist',
  title: '洪布斯',
  description: '桃李不言，下自成蹊！',
  head: [
    ['link', {rel: 'icon', href: 'logo.png'}]
  ],
  theme: 'hbs',
  themeConfig: require('./config/themeConfig'),
  plugins: require('./config/plugins')
}

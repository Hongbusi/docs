module.exports = {
  // base: '/docs/',
  dest: 'dist',
  title: '洪布斯',
  description: '桃李不言，下自成蹊！',
  head: [
    ['link', { rel: 'manifest', href: 'manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  // 在使用 vuepress 包的时候，你可以忽略这个字段，因为 Webpack 是默认打包工具
  bundler: '@vuepress/webpack',
  // Webpack 打包工具的配置项
  bundlerConfig: {
    // 查看下方
    postcss: {
      postcssOptions: {
        plugins: [
          require('tailwindcss')('./tailwind.config.js'),
          require('autoprefixer')
        ]
      }
    }
  },
  markdown: {
    code: {
      lineNumbers: false
    }
  },
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

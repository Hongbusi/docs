interface Bookmark {
  title: string
  url: string
}

const bookmarks: Record<string, Bookmark[]> = {
  'Recommended reading': [
    { title: '跟 Anthony Fu 聊聊全职开源和他的故事', url: 'https://bytetalk.fm/posts/episode-6' },
    { title: 'Why I don\'t use Prettier', url: 'https://antfu.me/posts/why-not-prettier' },
    { title: '程序员如何优雅的挣零花钱？', url: 'https://howto-make-more-money-easychen.vercel.app' },
  ],
  'Learn english': [
    { title: '可能是让你受益匪浅的英语进阶指南', url: 'https://github.com/byoungd/English-level-up-tips' },
    { title: '专为程序员编写的英语学习指南', url: 'https://github.com/yujiangshui/A-Programmers-Guide-to-English' },
  ],
  'Tool collection': [
    { title: 'TinyPNG', url: 'https://tinypng.com' },
    { title: 'Snippet generator', url: 'https://snippet-generator.app' },
  ],
}

export default bookmarks

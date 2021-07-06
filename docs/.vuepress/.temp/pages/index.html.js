export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1617551905000,
    "contributors": [
      {
        "name": "Hongbusi",
        "email": "q951686662@qq.com",
        "commits": 11
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

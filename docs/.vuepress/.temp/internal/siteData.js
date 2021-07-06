export const siteData = {
  "base": "/docs/",
  "lang": "en-US",
  "title": "洪布斯",
  "description": "桃李不言，下自成蹊！",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "logo.png"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

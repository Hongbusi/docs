/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "19d32f404a5316246b2641edbbb41afc"
  },
  {
    "url": "assets/css/0.styles.47c6f84e.css",
    "revision": "f668463f04da90cfca684f20dfebc76e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1d516a2f.js",
    "revision": "c923db1008a08358bc5b994b3a4ac663"
  },
  {
    "url": "assets/js/11.b4849583.js",
    "revision": "c0a4aee8c497f4901ed5dfa9f0ab0eb8"
  },
  {
    "url": "assets/js/12.e71dbd98.js",
    "revision": "d1a2ce142b7d1795767b5052f47de22f"
  },
  {
    "url": "assets/js/13.e5563ae1.js",
    "revision": "1f04a43e217f34b487ea8639cd0109fc"
  },
  {
    "url": "assets/js/14.b3f219b5.js",
    "revision": "de08c7ae4866c72f602b10f9855a827d"
  },
  {
    "url": "assets/js/15.5297c7b3.js",
    "revision": "d665ede610a46dba9c291bd720569e43"
  },
  {
    "url": "assets/js/16.4d55fb4c.js",
    "revision": "37410c68e49864dd8989dd8869c22e0d"
  },
  {
    "url": "assets/js/17.bd869ad9.js",
    "revision": "8ee8eaeb628e1bc7bcf15be5734447e5"
  },
  {
    "url": "assets/js/18.8c60f35c.js",
    "revision": "da5a01d9871e67f06640cb37182a7626"
  },
  {
    "url": "assets/js/19.119d5149.js",
    "revision": "b7fb2eada8a86e237a6c201eb5eb8f70"
  },
  {
    "url": "assets/js/2.6e6eecc7.js",
    "revision": "21b1fcbff5106269bf82480d10b6d074"
  },
  {
    "url": "assets/js/20.bc05b480.js",
    "revision": "3c1c67b7988fbb1bd28e9bc5dfeda9df"
  },
  {
    "url": "assets/js/21.5077124d.js",
    "revision": "b5749a9680003919f35e5225f64b8279"
  },
  {
    "url": "assets/js/22.51944b47.js",
    "revision": "1059fa8dd821c9bed31c15ec7a5ddb90"
  },
  {
    "url": "assets/js/3.93e665cc.js",
    "revision": "c8d57c1541b063f6df1a16a389d4ec80"
  },
  {
    "url": "assets/js/4.638962f4.js",
    "revision": "18cdfa302d29d23bbd7d9519c9cd4fb8"
  },
  {
    "url": "assets/js/5.f8c17eda.js",
    "revision": "f3fef73e6ad7afcf1666ccedc59cf5cc"
  },
  {
    "url": "assets/js/6.5c5c8f33.js",
    "revision": "ddfab0ccd2242b9eb6e0770c4438d779"
  },
  {
    "url": "assets/js/7.8c49d32a.js",
    "revision": "4b562156147090bf3de4e021a28f8e62"
  },
  {
    "url": "assets/js/8.65133e96.js",
    "revision": "31c46dbecac198669f7829c0fc6ba117"
  },
  {
    "url": "assets/js/9.043ec5db.js",
    "revision": "1bd5769967f1e1796c621761349826cd"
  },
  {
    "url": "assets/js/app.930fb996.js",
    "revision": "dd3d7684f82fb47d3ed017dff875b51b"
  },
  {
    "url": "guide/theme/home.html",
    "revision": "fd8c08c56b06b306cf39716af123a07c"
  },
  {
    "url": "guide/theme/index.html",
    "revision": "249b4592a8a87d0fe63772425c3439ee"
  },
  {
    "url": "guide/theme/install.html",
    "revision": "e82e573bba039511e35dc53c61fbd544"
  },
  {
    "url": "guide/theme/no-found.html",
    "revision": "ab07788c1c709a0ad6fa971810f11fc5"
  },
  {
    "url": "guide/theme/plugins.html",
    "revision": "4d44b8dda7c4abb21f9817cb055520a9"
  },
  {
    "url": "guide/theme/record.html",
    "revision": "4ffaf3d8ba62f260daebf73fc6c4ca04"
  },
  {
    "url": "guide/theme/valine.html",
    "revision": "41326edd2d02435ac2fe8350fd9c32b5"
  },
  {
    "url": "index.html",
    "revision": "289ad0f6f66039f3304ede8ae0b7816a"
  },
  {
    "url": "logo.png",
    "revision": "170ed4ceb82812c8a72c068f02f4347b"
  },
  {
    "url": "notes/lodash/index.html",
    "revision": "70b64cbc1db0efadf7b7119b6e43c117"
  },
  {
    "url": "notes/lodash/plan.html",
    "revision": "7c94d6afd2e5a9f3965cf0fff2c7129f"
  },
  {
    "url": "notes/lodash/type-judgment.html",
    "revision": "11d6f294aed2605d8f8eb1cd58381d09"
  },
  {
    "url": "notes/vuepress/index.html",
    "revision": "bf4e23e401cd3f1ed45fc6e5ed8d399e"
  },
  {
    "url": "notes/vuepress/markdown.html",
    "revision": "2abf0f2de79e5e5f202a553bdfac076a"
  },
  {
    "url": "other/message-board.html",
    "revision": "fba41370d05ac1fbf3f55b57b4a96e73"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

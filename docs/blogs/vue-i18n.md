# vue-i18n

[Vue I18n](https://kazupon.github.io/vue-i18n/zh/) 是 Vue.js 的国际化插件。它可以轻松地将一些本地化功能集成到你的 Vue.js 应用程序中。

## src/lang/index.js

``` js
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Cookies from 'js-cookie';
import enLocale from './en';
import zhLocale from './zh';

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
  },
  'zh-cn': {
    ...zhLocale,
  }
};

export function getLanguage() {
  const chooseLanguage = Cookies.get('language');
  if (chooseLanguage) return chooseLanguage;

  // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase();
  const locales = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }
  return 'en';
}

const i18n = new VueI18n({
  locale: getLanguage(),
  messages
});

export default i18n;
```

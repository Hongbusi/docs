# 手写 getQueryString

## 利用超链接元素的特性

参考文档：[https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLAnchorElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLAnchorElement)

``` js
let dom;

function getQueryString(url, name = '') {
  if (!url) {
    return undefined;
  }

  if (!dom) {
    dom = document.createElement('a');
  }

  dom.href = url;

  const search = dom.search.substring(1);
  const splitArr = search.split('&');
  const result = {};

  for (let i = 0; i < splitArr.length; i++) {
    let [key, value] = splitArr[i].split('=');

    value = decodeURIComponent(value);

    if (key in result) {
      result[key] = Array.isArray(result[key]) ? result[key].concat(value) : [...result[key], value];
    } else {
      result[key] = value;
    }
  }

  return name ? result[name] : result;
}
```

## `new URL()`

参考文档：[https://developer.mozilla.org/zh-CN/docs/Web/API/URL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL)

``` js
function getQueryString(url, name = '') {
  if (!url) {
    return undefined;
  }

  const newUrl = new URL(url);
  const search = newUrl.search.substring(1);

  const splitArr = search.split('&');
  const result = {};

  for (let i = 0; i < splitArr.length; i++) {
    let [key, value] = splitArr[i].split('=');

    value = decodeURIComponent(value);

    if (key in result) {
      result[key] = Array.isArray(result[key]) ? result[key].concat(value) : [...result[key], value];
    } else {
      result[key] = value;
    }
  }

  return name ? result[name] : result;
}
```

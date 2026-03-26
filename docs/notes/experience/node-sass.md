---
title: node-sass
---

## Version

[Node version support policy](https://github.com/sass/node-sass#node-version-support-policy)

## Cannot download

报错：

``` bash
Downloading binary from https://github.com/sass/node-sass/releases/download/v4.14.1/darwin-x64-83_binding.node
Cannot download "https://github.com/sass/node-sass/releases/download/v4.14.1/darwin-x64-83_binding.node":

Client network socket disconnected before secure TLS connection was established

Hint: If github.com is not accessible in your location
      try setting a proxy via HTTP_PROXY, e.g.

      export HTTP_PROXY=http://example.com:1234

or configure npm proxy via

      npm config set proxy http://example.com:8080
```

解决方法：

``` bash
$ npm config set proxy http://127.0.0.1:9090
```

重新下载，完成后删除代理：

``` bash
$ npm config delete proxy
```

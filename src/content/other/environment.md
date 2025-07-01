---
title: 环境配置
---

## npm、yarn、pnpm 查看源和换源

``` bash
# npm
npm config get registry
npm config set registry https://registry.npmmirror.com

# yarn
yarn config get registry
yarn config set registry https://registry.npmmirror.com

# pnpm
pnpm config get registry
pnpm config set registry https://registry.npmmirror.com
```

镜像源地址部分如下：

``` bash
npm --- https://registry.npmjs.org
cnpm --- https://r.cnpmjs.org
taobao --- https://registry.npmmirror.com
nj --- https://registry.nodejitsu.com
rednpm --- https://registry.mirror.cqupt.edu.cn
npmMirror --- https://skimdb.npmjs.com/registry
deunpm --- http://registry.enpmjs.org
```

## View key

Mac: `cat ~/.ssh/id_rsa.pub`

## Edit hosts

Mac: `sudo vim /etc/hosts`

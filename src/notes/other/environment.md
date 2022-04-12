# 环境配置

## npm、yarn 查看源和换源

``` bash
npm config get registry

npm config set registry https://registry.npm.taobao.org

yarn config get registry

yarn config set registry https://registry.npm.taobao.org
```

镜像源地址部分如下：

```
npm --- https://registry.npmjs.org

cnpm --- https://r.cnpmjs.org

taobao --- https://registry.npm.taobao.org

nj --- https://registry.nodejitsu.com

rednpm --- https://registry.mirror.cqupt.edu.cn

npmMirror --- https://skimdb.npmjs.com/registry

deunpm --- http://registry.enpmjs.org
```

## View key

Mac: `cat ~/.ssh/id_rsa.pub`

## Edit hosts

Mac: `sudo vim /etc/hosts`

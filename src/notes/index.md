---
aside: false
sidebar: false
---

# Notes

好记性不如烂笔头。

## commit-msg 钩子被忽略

_2021/12/20_

``` bash
提示：因为没有将钩子 '.husky/commit-msg' 设置为可执行，钩子被忽略。
提示：您可以通过配置 `git config advice.ignoredHook false` 来关闭这条警告。
```

原因是 `commit-msg` 自定义的钩子在执行中权限不足，无法被执行。

增加文件的执行权限 `chmod +x commit-msg`。

## .gitignore 不生效

_2021/10/26_

在项目开发过程中，一般都会添加 `.gitignore` 文件，规则很简单，但有时会发现，规则不生效。

原因是 `.gitignore` 只能忽略那些原来没有被 `track` 的文件，如果某些文件已经被纳入了版本管理中，则修改 `.gitignore` 是无效的。

把本地缓存删除（改变成未 track 状态），然后再提交。

``` bash
git rm -r --cached .

git add .

git commit -m 'update .gitignore'
```

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

## 修改 git commit message

_2021/04/21_

``` bash
git commit --amend
```

## Charles proxy

_2021/03/17_

[Download Charles](https://www.charlesproxy.com)

Step 1: `Help`

Step 2: `SSL Proxying`

Step 3: `Install Charles Root Certificate on a Mobile Device or Remote Browser`

## View key

_2021/02/24_

Mac: `cat ~/.ssh/id_rsa.pub`

## Edit hosts

_2021/1/20_

Mac: `sudo vim /est/hosts`

# 常见问题

## .gitignore 不生效

#### 问题描述

在项目开发过程中，一般都会添加 .gitignore 文件，规则很简单，但有时会发现，规则不生效。原因是 .gitignore 只能忽略那些原来没有被 track 的文件，如果某些文件已经被纳入了版本管理中，则修改 .gitignore 是无效的。

#### 解决方案

先把本地缓存删除（改变成未 track 状态），然后再提交。

``` bash
git rm -r --cached .

git add .

git commit -m 'update .gitignore'
```

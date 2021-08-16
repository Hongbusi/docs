# 常见问题

## 配置别名

参考：[廖雪峰的官网网站](https://www.liaoxuefeng.com/wiki/896043488029600/898732837407424)

有没有经常敲错命令？ 比如 `git status`？`status` 这个单词真心不好记。

如果敲 `git st` 就表示 `git status` 那就简单多了，当然这种偷懒的办法我们是极力赞成的。

我们只需要敲一行命令，告诉 Git，以后 `st` 就表示 `status`：

``` bash
git config --global alias.st status
```

好了，现在敲 `git st` 看看效果。

当然还有别的命令可以简写，很多人都用 `co` 表示 `checkout`，`ci` 表示 `commit`，`br` 表示`branch`：

``` bash
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.br branch
```

...

## .gitignore 不生效

在项目开发过程中，一般都会添加 .gitignore 文件，规则很简单，但有时会发现，规则不生效。原因是 .gitignore 只能忽略那些原来没有被 track 的文件，如果某些文件已经被纳入了版本管理中，则修改 .gitignore 是无效的。

**如何解决**

先把本地缓存删除（改变成未 track 状态），然后再提交。

``` bash
git rm -r --cached .

git add .

git commit -m 'update .gitignore'
```

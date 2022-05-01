# 常用命令

## 搜索含有关键词的文件

``` bash
git grep <关键词>
```

## 查看指定文件每一行的提交人和提交时间

``` bash
git blame <文件名>
```

## 查看指定文件的每一次提交和改动

``` bash
git log -p <文件名>
```

## 重命名分支

``` bash
git branch -m new-branch-name
```

## commit-msg 钩子被忽略

``` bash
提示：因为没有将钩子 '.husky/commit-msg' 设置为可执行，钩子被忽略。
提示：您可以通过配置 `git config advice.ignoredHook false` 来关闭这条警告。
```

原因是 `commit-msg` 自定义的钩子在执行中权限不足，无法被执行。

增加文件的执行权限 `chmod +x commit-msg`。

## .gitignore 不生效

在项目开发过程中，一般都会添加 `.gitignore` 文件，规则很简单，但有时会发现，规则不生效。

原因是 `.gitignore` 只能忽略那些原来没有被 `track` 的文件，如果某些文件已经被纳入了版本管理中，则修改 `.gitignore` 是无效的。

把本地缓存删除（改变成未 track 状态），然后再提交。

``` bash
git rm -r --cached .

git add .

git commit -m 'update .gitignore'
```

## 修改 git commit message

``` bash
git commit --amend
```

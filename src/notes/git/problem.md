# 常见问题

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

## 给不同目录配置不同 config

全局配置：

``` bash
$ git config --global user.name Hongbusi
$ git config --global user.email coderhbs@gmail.com
```

在 `Projects` 下新建 `.gitconfig` 文件，添加以下内容（此文件就作为当前目录下仓库的 git 配置）：

``` bash
[user]
    name = Hongbusi
    email = hi@hongbusi.com
```

在全局的 `.gitconfig` 文件添加以下内容：

``` bash
$ vim ~/.gitconfig

[includeIf "gitdir:~/Projects/"]
    path = ~/Projects/.gitconfig
```

或通过命令：

``` bash
$ git config --global includeIf."gitdir:~/Projects/".path ~/Projects/.gitconfig
```

检查是否生效：

``` bash
$ git config --show-origin --get user.email
```

## 查看本地 ssh 秘钥

``` bash
cat ~/.ssh/id_rsa.pub
```

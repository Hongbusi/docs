# 常用命令

## config 配置

config 配置有 system、global、和 local 3 个级别，底层配置会覆盖顶层配置。

### 查看 config 配置

``` bash
git config --system/global/local --list
```

### 删除 config 配置

``` bash
git config --global --unset user.name
```

### 编辑 config 配置

``` bash
git config --global --edit

# or

git config --global user.name "Hongbusi"
git config --global user.email  "text@email.com"
```

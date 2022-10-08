# 安装

## 在 Linux 或 macOS 上安装 rustup

如果你使用 Linux 或 macOS，打开终端并输入如下命令：

``` bash
$ curl --proto '=https' --tlsv1.3 -sSf https://sh.rustup.rs | sh
```

此命令下载一个脚本并开始安装 `rustup` 工具，这会安装最新稳定版 Rust。过程中可能会提示你输入密码。如果安装成功，将会出现如下内容：

``` bash
Rust is installed now. Great!
```

## 检查安装是否正确

要检查是否正确安装了 Rust，打开命令行并输入：

``` bash
$ rustc --version
```

你应该可以看到按照以下格式显示的最新稳定版本的版本号、对应的 Commit Hash 和 Commit 日期：

``` bash
rustc x.y.z (abcabcabc yyyy-mm-dd)
```

如果看到了这样的信息，就说明 Rust 已经安装成功了！

## 更新与卸载

通过 `rustup` 安装了 Rust 之后，很容易更新到最新版本，只需要在命令行中运行如下更新脚本即可：

``` bash
$ rustup update
```

若要卸载 Rust 和 `rustup`，请在命令行中运行如下卸载脚本:

``` bash
$ rustup self uninstall
```

## 本地文档

安装程序也自带一份文档的本地拷贝，可以离线阅读。运行 `rustup doc` 在浏览器中查看本地文档。

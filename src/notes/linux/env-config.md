# 环境配置

## git

``` bash
$ yum install git
```

## zsh

``` bash
# 安装 zsh
$ yum install zsh

# 默认的 shell 是 bash
$ echo $SHELL
/bin/bash

# 找到 zsh 的默认安装位置
$ which zsh
/usr/bin/zsh

# 打印 shell 列表
$ chsh -l
/bin/sh
/bin/bash
/usr/bin/sh
/usr/bin/bash
/usr/bin/zsh
/bin/zsh

# 更改服务器默认登录的 shell，但此刻不会生效
# -s: --shell，切换为指定的 shell
$ chsh -s /usr/bin/zsh

# 如过想要尽快体验 zsh，可直接输入zsh命令
$ zsh
```

## ohmyzsh

``` bash
$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## plugin

### zsh-autosuggestions

``` bash
$ git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-myzsh/custom}/plugins/zsh-autosuggestions

# .zshrc
plugins=(
  zsh-autosuggestions
)

# .zshrc 修改颜色
ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE="fg=#ff00ff,bg=cyan,bold,underline"
```

### zsh-syntax-highlighting

``` bash
$ git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.ohmy-zsh/custom}/plugins/zsh-syntax-highlighting

# .zshrc
plugins=(
  zsh-syntax-highlighting
)
```

#### autojump

``` bash
$ brew install autojump

# .zshrc
plugins=(
  autojump
)
```

## nvm

``` bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# 安装最新稳定版
$ nvm install --lts
```

## docker

在 CentOS 8 上安装 Docker 可以通过官方的 Docker 社区版（Docker CE）来完成。以下是安装步骤：

1. 安装 Docker 依赖

``` bash
$ yum install -y yum-utils device-mapper-persistent-data lvm2
```

2. 添加 Docker 存储库

``` bash
# 安装 docker 官方的镜像源
$ yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

# 如果在国内，安装阿里云的镜像
$ yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

3. 安装 Docker CE

``` bash
$ yum install -y docker-ce
```

4. 启动 Docker 服务

``` bash
$ systemctl start docker
```

5. 设置 Docker 开机自启

``` bash
$ systemctl enable docker
```

6. 验证 Docker 安装

运行以下命令，检查是否成功安装 Docker，并获取 Docker 版本信息：

``` bash
$ docker --version
```

你还可以运行一个简单的测试容器：

```bash
sudo docker run hello-world
```

如果一切正常，你将看到一条提示消息，表明 Docker 已经正确安装并运行。

---
sidebarDepth: 1
---

# Node.js & npm & yarn

由于 Node.js 平台是在后端运行 JavaScript 代码，所以，必须首先在本机安装 Node 环境。

## 安装 Node.js

补充中...

## npm

npm 是 Node.js 的包管理工具（package manager）。

### 为啥我们需要一个包管理工具呢？

因为我们在 Node.js 上开发时，会用到很多别人写的 JavaScript 代码。如果我们要使用别人写的某个包，每次都根据名称搜索一下官方网站，下载代码，解压，再使用，非常繁琐。于是一个集中管理的工具应运而生：大家都把自己开发的模块打包后放到 npm 官网上，如果要使用，直接通过 npm 安装就可以直接用，不用管代码存在哪，应该从哪下载。

更重要的是，如果我们要使用模块 A，而模块 A又依赖于模块 B，模块 B 又依赖于模块 X 和模块 Y，npm 可以根据依赖关系，把所有依赖的包都下载下来并管理起来。否则，靠我们自己手动管理，肯定既麻烦又容易出错。

### npm 安装

npm 已经在 Node.js 安装的时候顺带装好了。

### npm 源管理

``` bash
# 查看 npm 当前镜像源
npm config get registry

# 设置 npm 镜像源为淘宝镜像
npm config set registry https://registry.npm.taobao.org
```

> 也可以使用 [nrm](https://github.com/Pana/nrm) 管理源。

#### 镜像源地址部分如下：

``` bash
# npm
https://registry.npmjs.org

# cnpm
https://r.cnpmjs.org

# taobao
https://registry.npm.taobao.org
```

### npm 常用命令

``` bash
# 查看 npm 全局安装过的包
npm list -g --depth=0
```

## yarn

快速、可靠和安全的依赖管理：

- 快速：Yarn 缓存它下载的每个包，因此它永远不需要再次下载相同的包。它还几乎同时执行所有操作，以最大限度地提高资源利用率。这意味着安装速度更快。

- 可靠：使用详细但简洁的锁文件格式和确定性算法进行安装操作，Yarn 能够保证在一个系统上运行的任何安装在另一个系统上运行时完全相同。

- 安全： Yarn 在其代码执行之前使用校验和来验证每个已安装包的完整性。

### yarn 安装

``` bash
npm install --global yarn
```

### yarn 源管理

``` bash
# 查看 yarn 当前镜像源
yarn config get registry

# 设置 yarn 镜像源为淘宝镜像
yarn config set registry https://registry.npm.taobao.org
```

### yarn 常用命令

``` bash
# 查看 yarn 全局安装过的包
yarn global list --depth=0
```

---
title: 快速入门
sidebar:
  order: 2
---

本文将介绍 NestJS 的基本使用，帮助你快速入门。

## 准备工作

在开始前，请确保你已经在电脑上安装了：Node.js（version >= 12，13 除外）。

## 创建一个新项目

首先，我们需要全局安装 `@nestjs/cli`：

``` bash
pnpm add @nestjs/cli -g
```

然后通过 `@nestjs/cli` 初始化一个新项目：

``` bash
nest new project-name
```

等待命令执行完成，就得到了一个名为 `project-name` 的目录，其中包含以下文件和文件夹：

``` bash
├── src
│   ├── app.controller.spec.ts # 基本控制器的单元测试
│   ├── app.controller.ts      # 应用程序的基本控制器
│   ├── app.module.ts          # 应用程序的根模块
│   ├── app.service.ts         # 应用程序的基本服务
│   └── main.ts                # 入口文件
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── nest-cli.json              # CLI 配置文件
├── package.json
├── pnpm-lock.yaml
├── tsconfig.build.json
├── tsconfig.json
└── README.md
```

进入项目目录 `cd project-name`，执行 `pnpm start:dev` 运行项目，就可以通过浏览器或者其他工具，访问应用程序的默认端口（一般为 `http://localhost:3000`）来查看运行结果了。

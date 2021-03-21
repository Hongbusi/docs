---
title: vue-template 目录结构
date: 2021-03-10
tags: 
- vue
categories:
- vue-template
---

# 目录结构

```markdown
├─plop-templates                # 基础模板
├─public                        # 静态资源
|   ├─favicon.ico							  # favicon 图标
|   └index.html								  # html 模板
├─src                           # 源代码
|  ├─api                        # 所有请求
|  ├─assets                     # 静态资源
|  ├─components                 # 全局公用组件
|  ├─icons                      # iconfont
|  ├─lang                       # 国际化
|  ├─router                     # 路由
|  ├─store                      # 全局 store 管理
|  ├─styles                     # 全局样式
|  ├─utils                      # 全局公用方法
|  ├─views                      # 所有页面
|  ├─App.vue                    # 入口页面
|  ├─main.js                    # 入口文件、加载组件、初始化等
├─.editorconfig                 # 编辑器代码格式配置
├─.env.development              # 开发环境变量配置
├─.env.production               # 生产环境变量配置
├─.eslintignore                 # eslint 忽略配置
├─.eslintrc.js									# eslint 配置项
├─babel.config.js               # babel-loader 配置
├─package.json                  # package.json
├─plopfile.js                   # plop 配置文件
├─vue.config.js                 # vue-cli 配置
```

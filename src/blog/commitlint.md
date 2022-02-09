---
sidebar: false
---

# git commit 规范

使用 commitlint 实现。

## 什么是 commitlint?

commitlint 是检查你提交消息是否符合常规提交格式。

一般来说，格式主要是这样的：

``` bash
type(scope ?): subject # scope 是可选的
```

常见类型可以是：

``` md
build // 编译相关的修改。例如发布版本、对项目构建或者依赖的改动
chore // 其他修改。比如改变构建流程、或者增加依赖库、工具等
ci // 持续集成修改
docs // 文档修改
feat // 新特性、新功能
fix // 修改 bug
perf // 优化相关。比如提升性能、体验
refactor // 代码重构
revert // 回滚到上一个版本
style // 代码格式修改, 注意不是 css 修改
test // 测试用例修改
```

## 为什么使用 commitlint?

- 自动生成 CHANGELOG。
- 自动确定语义版本碰撞（基于提交的类型）。
- 向团队成员、公众和其他利益相关者传达变更的性质。
- 触发构建和发布过程。
- 通过允许人们探索更有条理的提交历史，让人们更容易为您的项目做出贡献。

## Usage

``` bash
# 安装 commitlint cli 和常规配置
yarn add @commitlint/config-conventional @commitlint/cli --dev

# 配置 commitlint 以使用常规配置
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

使用 Husky 的 commit-msg 钩子，在创建之前对提交进行 lint 提交：

``` bash
yarn add husky --dev

# 编辑 package.json > 准备脚本并运行一次
npm set-script prepare "husky install"
yarn run prepare

# 添加 hook
yarn husky add .husky/commit-msg 'yarn commitlint --edit $1'
```

接下来就可以通过 husky 的 commit-msg hook 触发 commitlint。

## 参考链接

- [githooks](https://git-scm.com/docs/githooks)
- [husky](https://github.com/typicode/husky)
- [@commitlint/{cli,config-conventional}](https://github.com/conventional-changelog/commitlint)

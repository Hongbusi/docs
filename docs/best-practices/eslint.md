# ESLint

## 引入 eslint 以及相关插件

``` bash
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
```

- `eslint` 是 ESLint 的核心代码

- `@typescript-eslint/parser` 是 ESlint 的解析器, 用于解析 typescript, 从而检查和规范 typescript 代码

- `@typescript-eslint/eslint-plugin` 是 Eslint 插件, 包含了各类定义好的检测 TS 代码的规范

## 引入 prettier

``` bash
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

- `prettier` 是 prettier 的核心代码

- `eslint-config-prettier` 是解决 ESLint 中的样式规范和 prettier 中样式规范的冲突, 以 prettier 的样式规范为准, 使用 ESLint 中的样式规范自动失效

- `eslint-plugin-prettier` 是将 prettier 做为 ESLint 规范来使用


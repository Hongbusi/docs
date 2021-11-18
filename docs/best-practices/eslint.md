# ESLint

## 引入 eslint 以及相关插件

``` bash
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
```

- `eslint` ESLint 的核心代码
- `@typescript-eslint/parser` ESlint 的解析器, 用于解析 typescript, 从而检查和规范 typescript 代码
- `@typescript-eslint/eslint-plugin` Eslint 插件, 包含了各类定义好的检测 TS 代码的规范

## 引入 prettier

``` bash
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

- `prettier` prettier 的核心代码
- `eslint-config-prettier` 关闭所有不必要的或可能与 Prettier 冲突的 ESLint 规则
- `eslint-plugin-prettier` 将 Prettier 作为 ESLint 规则运行


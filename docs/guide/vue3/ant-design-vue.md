# Ant Design Vue

[Ant Design Vue](https://2x.antdv.com/components/overview-cn) 是 Ant Design 的 Vue 实现，开发和服务于企业级后台产品。

## 安装

``` bash
npm install ant-design-vue@next

# or

yarn add ant-design-vue@next
```

## Vite 按需

``` bash
yarn add vite-plugin-components -D
```

``` ts
// vite.config.ts

import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';

export default {
  plugins: [
    ViteComponents({
      customComponentResolvers: [
        AntDesignVueResolver()
      ]
    })
  ]
};
```

[Ant Design Pro Layout](https://github.com/vueComponent/pro-layout)

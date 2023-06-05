# 路由

在这里介绍的是使用 `umi max` 实现路由权限控制的路由配置。

## 如何添加一个路由

例：在 `config/routes/modules` 下新增一个文件 `system.ts`：

``` ts
import type { Route } from '../typings'

const systemRoute: Route = {
  name: '系统管理',
  path: '/system',
  icon: 'SettingOutlined', // 直接使用 ant-design 的 icon 就行，会自动被处理成 icon 组件
  routes: [
    {
      path: '/system',
      redirect: '/system/user',
    },
    {
      name: '用户管理',
      path: '/system/user',
      component: './System/User',
    },
  ],
}

export default systemRoute
```

在 `config/routes/index.ts` 中导入：

``` ts
import type { Route } from './typings'
import systemRoute from './modules/system'

const routes: Route[] = [
  systemRoute,
]

export default routes
```

添加路由成功。

## 如何给路由添加权限

在需要添加权限的路由对象中，添加 `access` 字段：

``` ts
const systemRoute = {
  name: '系统管理',
  path: '/system',
  routes: [
    {
      name: '用户管理',
      path: '/system/user',
      component: './System/User',
      access: 'systemUser', // 权限定义返回值的某个 key
    },
  ],
}
```

当 `access.ts` 中返回的有 `systemUser` 时，`/system/user` 即可正常访问，反之会跳转到 403 页面。

## 如何给页面按钮添加权限

在需要添加按钮权限的页面的路由对象中，添加 `permissions` 字段：

``` ts
const systemRoute = {
  name: '系统管理',
  path: '/system',
  routes: [
    {
      name: '用户管理',
      path: '/system/user',
      component: './System/User',
      permissions: [
        { name: '新增用户', code: 'systemUserCreate' },
        { name: '编辑用户', code: 'systemUserUpdate' },
        { name: '删除用户', code: 'systemUserDelete' },
      ],
    },
  ],
}
```

在页面中使用：

``` tsx
import React from 'react'
import { Access, useAccess } from 'umi'

function UserPage() {
  const access = useAccess() // access 的成员：systemUserCreate，systemUserUpdate

  if (access.systemUserCreate) {
    // 如果可以有新建权限，则...
  }

  return (
    <div>
      <Access
        accessible={access.systemUserCreate}
        fallback={<div>Can not create.</div>}
      >
        Create
      </Access>
      <Access
        accessible={access.systemUserUpdate}
        fallback={<div>Can not update.</div>}
      >
        Update
      </Access>
    </div>
  )
}
```

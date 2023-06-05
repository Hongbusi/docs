# 文件、文件名规范

## components

`src/components` 下文件夹、文件都采用大驼峰命名法（`index` 除外）。

``` bash
├── components
│   └── HeaderRight
│       ├── Logo.tsx
│       ├── Nav.tsx
│       └── index.tsx
```

## pages

`src/pages` 下文件夹、文件都采用大驼峰命名法（`index` 除外），`pages` 下 `components` 按照 components 规范。

``` bash
├── pages
│   ├── Home
│   │   └── index.tsx
│   └── System
│       ├── Role
│       │   ├── components
│       │   │   └── CreateForm.tsx
│       │   └── index.tsx
│       └── User
│           ├── components
│           │   └── CreateForm.tsx
│           └── index.tsx
```

## constants、enums、models、services、utils

其他文件夹、文件都采用中划线命名法。

``` bash
├── constants
│   └── index.ts
├── enums
│   └── storage.ts
├── models
│   └── global.ts
├── services
│   ├── demo
│   │   ├── user-controller.ts
│   │   └── index.ts
│   ├── role.ts
│   └── user.ts
└── utils
    ├── auth
    │   ├── index.ts
    │   └── user.ts
    ├── crypto
    │   └── index.ts
    └── storage
        ├── index.ts
        ├── local.ts
        └── session.ts
```

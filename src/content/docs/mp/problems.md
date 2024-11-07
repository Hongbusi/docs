---
title: 微信小程序开发踩坑
---

## input 抖动

## 点击分享，代码直接停止运行

## `initialRenderingCache: 'static'`

- `textarea` 组件的 `placeholder` 折行

## 组件的 `pageLifetimes -> show` 事件和页面的 `onShow` 事件

- 页面的 `onShow` 事件在第一次进入这个页面时会被调用。
- 组件 `pageLifetimes` 里的生命周期 `show` 事件，在第一次进入这个组件所在页面不会被调用。

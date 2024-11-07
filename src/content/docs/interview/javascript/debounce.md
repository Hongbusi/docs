---
title: 防抖
---

## 执行过程

- 当事件触发时，相应的函数并不会立即触发，而是会等待一定的时间；
- 当事件密集触发时，函数的触发会被频繁的推迟；
- 只有等待了一段时间也没有事件触发，才会真正的执行响应函数。

## 应用场景

- 输入框中频繁的输入内容，搜索或者提交信息；
- 频繁的点击按钮，触发某个事件；
- 监听浏览器滚动事件，完成某些特定操作；
- 用户缩放浏览器的 `resize` 事件。

## 生活中的例子

比如说有一天我上完课，我说大家有什么问题来问我，我会等待五分钟的时间。如果在五分钟的时间内，没有同学问我问题，那么我就下课了。

- 在此期间，A 同学过来问问题，并且帮他解答，解答完后，我会再次等待五分钟的时间看有没有其他同学问问题；
- 如果我等待超过了 5 分钟，就点击了下课（才真正执行这个时间）。

## 手写实现

``` js
function debounce(fn, delay, immediate = false, resultCallback) {
  // 1. 定义一个定时器, 保存上一次的定时器
  let timer = null
  let isInvoke = false

  // 2. 真正执行的函数
  const _debounce = function (...args) {
    return new Promise((resolve, reject) => {
      // 取消上一次的定时器
      if (timer)
        clearTimeout(timer)

      // 判断是否需要立即执行
      if (immediate && !isInvoke) {
        const result = fn.apply(this, args)
        if (resultCallback)
          resultCallback(result)
        resolve(result)
        isInvoke = true
      }
      else {
        // 延迟执行
        timer = setTimeout(() => {
          // 外部传入的真正要执行的函数
          const result = fn.apply(this, args)
          if (resultCallback)
            resultCallback(result)
          resolve(result)
          isInvoke = false
          timer = null
        }, delay)
      }
    })
  }

  // 封装取消功能
  _debounce.cancel = function () {
    if (timer)
      clearTimeout(timer)
    timer = null
    isInvoke = false
  }

  return _debounce
}
```

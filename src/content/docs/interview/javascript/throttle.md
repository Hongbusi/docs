---
title: 节流
---

## 执行过程

- 当事件触发时，会执行这个事件的响应函数；
- 如果这个事件会被频繁触发，那么节流函数会按照一定的频率来执行函数；
- 不管在这个中间有多少次触发这个事件，执行函数的频繁总是固定的。

## 应用场景

- 监听页面的滚动事件；
- 鼠标移动事件；
- 用户频繁点击按钮操作。

## 生活中的例子

比如说有一天我上完课，我说大家有什么问题来问我，但是在一个 5 分钟之内，不管有多少同学来问问题，我只会解答一个问题。

如果在解答完一个问题后，5 分钟之后还没有同学问问题，那么就下课。

## 手写实现

``` js
function throttle(fn, interval, options = { leading: true, trailing: false }) {
  // 1. 记录上一次的开始时间
  const { leading, trailing, resultCallback } = options
  let lastTime = 0
  let timer = null

  // 2.事件触发时, 真正执行的函数
  const _throttle = function (...args) {
    return new Promise((resolve, reject) => {
      // 2.1. 获取当前事件触发时的时间
      const nowTime = new Date().getTime()
      if (!lastTime && !leading)
        lastTime = nowTime

      // 2.2. 使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长事件需要去触发函数
      const remainTime = interval - (nowTime - lastTime)
      if (remainTime <= 0) {
        if (timer) {
          clearTimeout(timer)
          timer = null
        }

        // 2.3. 真正触发函数
        const result = fn.apply(this, args)
        if (resultCallback)
          resultCallback(result)
        resolve(result)
        // 2.4. 保留上次触发的时间
        lastTime = nowTime
        return
      }

      if (trailing && !timer) {
        timer = setTimeout(() => {
          timer = null
          lastTime = !leading ? 0 : new Date().getTime()
          const result = fn.apply(this, args)
          if (resultCallback)
            resultCallback(result)
          resolve(result)
        }, remainTime)
      }
    })
  }

  _throttle.cancel = function () {
    if (timer)
      clearTimeout(timer)
    timer = null
    lastTime = 0
  }

  return _throttle
}
```

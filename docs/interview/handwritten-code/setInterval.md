# 手写 setInterval

``` js
const obj = {
  timer: null,

  setInterval: function(callback, interval) {
    const now = Date.now;
    let startTime = now();
    let endTime = startTime;
    const loop = () => {
      this.timer = requestAnimationFrame(loop);
      endTime = now();
      if (endTime - startTime >= interval) {
        startTime = endTime = now();
        callback && callback();
      }
      return this.timer;
    }
    loop();
  },

  clearInterval: function() {
    cancelAnimationFrame(this.timer);
  }
}
```

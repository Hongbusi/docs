# 水平垂直居中

[[toc]]

## 一、背景

在开发中经常遇到这个问题，即让某个元素的内容在水平和垂直方向上都居中，内容不仅限于文字，可能是图片或其他元素。

居中是一个非常基础但又是非常重要的应用场景，实现居中的方法存在很多，可以将这些方法分成两个大类：

- 居中元素（子元素）的宽高已知；
- 居中元素宽高未知。

## 二、实现方式

实现元素水平垂直居中的方式：

- 利用定位 + `margin: auto`；
- 利用定位 + `margin: 负值`；
- 利用定位 + `transform`；
- `flex` 布局；
- `table` 布局；
- `grid` 布局。

### 利用定位 + `margin: auto`

``` html
<style>
  .father {
    position: relative;
    width: 500px;
    height: 300px;
    border: 1px solid #0a3b98;
  }

  .son {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100px;
    height: 40px;
    background: #f0a238;
  }
</style>
<div class="father">
  <div class="son"></div>
</div>
```

父级设置为相对定位，子级绝对定位，并且四个定位属性的值都设置了 0，那么这时候如果子级没有设置宽高，则会被拉开到和父级一样宽高。

这里子元素设置了宽高，所以宽高会按照我们的设置来显示，但是实际上子级的虚拟占位已经撑满了整个父级，这时候再给它一个 `margin：auto` 它就可以上下左右都居中了。

### 利用定位 + `margin: 负值`

绝大多数情况下，设置父元素为相对定位， 子元素移动自身 50% 实现水平垂直居中。

``` html
<style>
  .father {
    position: relative;
    width: 200px;
    height: 200px;
    background: skyblue;
  }

  .son {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
    width: 100px;
    height: 100px;
    background: red;
  }
</style>
<div class="father">
  <div class="son"></div>
</div>
```

这种方案不要求父元素的高度，也就是即使父元素的高度变化了，仍然可以保持在父元素的垂直居中位置，水平方向上是一样的操作。

但是该方案需要知道子元素自身的宽高，但是我们可以通过下面 `transform` 属性进行移动。

### 利用定位 + `transform`

``` html
<style>
  .father {
    position: relative;
    width: 200px;
    height: 200px;
    background: skyblue;
  }

  .son {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background: red;
  }
</style>
<div class="father">
  <div class="son"></div>
</div>
```

`translate(-50%, -50%)` 将会将元素位移自己宽度和高度的 `-50%`。

这种方法其实和最上面的 `margin` 负值用法一样，可以说是 `margin` 负值的替代方案，且不需要知道自身元素的宽高。

### `flex` 布局

``` html
<style>
  .father {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background: skyblue;
  }

  .son {
    width: 100px;
    height: 100px;
    background: red;
  }
</style>
<div class="father">
  <div class="son"></div>
</div>
```

### `table` 布局

设置父元素为 `display: table-cell`，子元素设置 `display: inline-block`。利用 `vertical` 和 `text-align` 可以让所有的行内块级元素水平垂直居中。

``` html
<style>
  .father {
    display: table-cell;
    width: 200px;
    height: 200px;
    background: skyblue;
    vertical-align: middle;
    text-align: center;
  }

  .son {
    display: inline-block;
    width: 100px;
    height: 100px;
    background: red;
  }
</style>
<div class="father">
  <div class="son"></div>
</div>
```

### `grid` 网格布局

``` html
<style>
  .father {
    display: grid;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    background: skyblue;
  }

  .son {
    width: 10px;
    height: 10px;
    border: 1px solid red;
  }
</style>
<div class="father">
  <div class="son"></div>
</div>
```

## 参考文献

- https://vue3js.cn/interview/css/center.html

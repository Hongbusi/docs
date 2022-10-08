# 常见编程概念

## 变量与可变性

变量默认是不可改变的（immutable）。

``` rust
fn main() {
    let x = 5;
    println!("The value of x is: {x}");
    x = 6; // 不能对不可变变量 x 二次赋值
    println!("The value of x is: {x}");
}
```

尽管变量默认是不可变的，你仍然可以在变量名前添加 mut 来使其可变。

``` rust
fn main() {
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}
```
### 常量

类似于不可变变量，常量（constants）是绑定到一个名称的不允许改变的值。

常量与变量的区别：

- 不允许对常量使用 `mut`。常量不光默认不能变，它总是不能变。
- 声明常量使用 `const` 关键字而不是 `let`，并且必须注明值的类型。
- 常量可以在任何作用域中声明，包括全局作用域。
- 常量只能被设置为常量表达式，而不可以是其他任何只能在运行时计算出的值。

下面是一个声明常量的例子：

``` rust
const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;
```

### 隐藏

定义一个与之前变量同名的新变量，这种情况称之为第一个变量被第二个隐藏（Shadowing）了。

``` rust
let x = 5;
let x = x + 1;
```

隐藏与将变量标记为 mut 的区别：

- 当对变量重新赋值时，如果没有使用 `let` 关键字，就会导致编译时错误。
- 当再次使用 `let` 时，实际上创建了一个新变量，我们可以改变值的类型，并且复用这个名字。

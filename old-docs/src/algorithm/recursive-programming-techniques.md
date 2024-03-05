# 递归程序设计技巧

## 数学归纳法

- Step1：验证 P(1) 成立；
- Step2：验证如果 P(k) 成立，那么 P(k+1) 也成立；
- Step3: 联合 Step1 与 Step2，证明由 P(1) -> P(n) 成立。

## 递归函数设计的三个重要部分

- 给**递归函数**一个明确的语义；
- 实现边界条件时的程序逻辑；
- 假设递归函数调用返回结果是正确的，实现本层函数逻辑。
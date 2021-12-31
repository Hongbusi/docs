# 507. 完美数

[前往 LeetCood 查看](https://leetcode-cn.com/problems/perfect-number)

对于一个 **正整数**，如果它和除了它自身以外的所有 **正因子** 之和相等，我们称它为 「完美数」。

给定一个 **整数 `n`**， 如果是完美数，返回 `true`，否则返回 `false`。


``` js
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
	if (num === 1) {
		return false;
	}

	let sum = 1;
	for (let d = 2; d * d <= num; ++d) {
		if (num % d === 0) {
			sum += d;
			if (d * d < num) {
				sum += Math.floor(num / d);
			}
		}
	}
	return sum === num;
};
```

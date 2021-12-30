# 846. 一手顺子

[前往 LeetCood 查看](https://leetcode-cn.com/problems/hand-of-straights)

Alice 手中有一把牌，她想要重新排列这些牌，分成若干组，使每一组的牌数都是 groupSize ，并且由 groupSize 张连续的牌组成。

给你一个整数数组 hand 其中 hand[i] 是写在第 i 张牌，和一个整数 groupSize 。如果她可能重新排列这些牌，返回 true ；否则，返回 false 。


``` js
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */

var isNStraightHand = function(hand, groupSize) {
  const n = hand.length;
  if (n % groupSize !== 0) {
    return false;
  }
  hand.sort((a, b) => a - b);
  const cnt = new Map();
  for (const x of hand) {
    cnt.set(x, (cnt.get(x) || 0) + 1);
  }
  for (const x of hand) {
    if (!cnt.has(x)) {
      continue;
    }
    for (let j = 0; j < groupSize; j++) {
      const num = x + j;
      if (!cnt.has(num)) {
        return false;
      }
      cnt.set(num, cnt.get(num) - 1);
      if (cnt.get(num) == 0) {
        cnt.delete(num);
      }
    }
  }
  return true;
};
```

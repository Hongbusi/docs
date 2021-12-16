# 438. 找到字符串中所有字母异位词

[前往 LeetCood 查看](https://leetcode-cn.com/problems/find-all-anagrams-in-a-string)

给定两个字符串 `s` 和 `p`，找到 `s` 中所有 `p` 的 **异位词** 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

**异位词** 指由相同字母重排列形成的字符串（包括相同的字符串）。

``` js
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function(s, p) {
  const sLen = s.length, pLen = p.length;

  if (sLen < pLen) {
    return [];
  }

  const ans = [];
  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);
  for (let i = 0; i < pLen; ++i) {
    ++sCount[s[i].charCodeAt() - 'a'.charCodeAt()];
    ++pCount[p[i].charCodeAt() - 'a'.charCodeAt()];
  }

  if (sCount.toString() === pCount.toString()) {
    ans.push(0);
  }

  for (let i = 0; i < sLen - pLen; ++i) {
    --sCount[s[i].charCodeAt() - 'a'.charCodeAt()];
    ++sCount[s[i + pLen].charCodeAt() - 'a'.charCodeAt()];

    if (sCount.toString() === pCount.toString()) {
      ans.push(i + 1);
    }
  }

  return ans;
};
```

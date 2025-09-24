/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

Constraints:
=> 1 <= haystack.length, needle.length <= 104
=> haystack and needle consist of only lowercase English characters.
*/

function strStr(haystack, needle) {
  if (needle.length === 0) return 0;
  if (haystack.length < needle.length) return -1;

  const lps = buildLPS(needle);
  let i = 0;
  let j = 0;

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    }

    if (j === needle.length) {
      return i - j;
    } else if (i < haystack.length && haystack[i] !== needle[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return -1;
}

function buildLPS(pattern) {
  const lps = new Array(pattern.length).fill(0);

  let length = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}

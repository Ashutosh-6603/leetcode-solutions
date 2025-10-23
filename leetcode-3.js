/*
Given a string s, find the length of the longest substring without duplicate characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:
=> 0 <= s.length <= 5 * 104
=> s consists of English letters, digits, symbols and spaces.
*/

function lengthOfLongestSubstring(s) {
  let longestStr = 0;
  let set = new Set();

  let left = 0;
  let right = 0;

  while (right < s.length) {
    let letter = s[right];

    if (!set.has(letter)) {
      set.add(letter);
      longestStr = Math.max(longestStr, set.size);
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }

  return longestStr;
}

const str = "abcabcbb";
console.log(lengthOfLongestSubstring(str), "result");

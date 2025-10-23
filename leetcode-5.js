/*
Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

Constraints:

=> 1 <= s.length <= 1000
=> s consist of only digits and English letters.
*/

function longestPalindrome(s) {
  if (isPalindrome(s)) return s;
  let set = new Set();
  let maxLength = 0;
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j <= s.length; j++) {
      let subString = s.slice(i, j);
      if (isPalindrome(subString)) {
        if (!set.has(subString)) {
          set.add(subString);
          if (maxLength < subString.length) {
            maxLength = subString.length;
            ans = subString;
          }
        }
      }
    }
  }
  return ans;
}

function isPalindrome(str) {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;

  // This is also the same result approach but slower as compared to the one above
  // return str === str.split("").reverse().join("");
}

const s = "babad";
console.log(longestPalindrome(s));

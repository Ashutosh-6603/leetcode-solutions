/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:

=> 1 <= ransomNote.length, magazine.length <= 105
=> ransomNote and magazine consist of lowercase English letters.
*/

function canConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const map = new Map();

  for (let i = 0; i < magazine.length; i++) {
    map.set(magazine[i], (map.get(magazine[i]) || 0) + 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const ch = ransomNote[i];
    const count = map.get(ch) || 0;

    if (count === 0) return false;
    map.set(ch, count - 1);
  }

  return true;
}

let ransomNote = "a",
  magazine = "b";

console.log(canConstruct(ransomNote, magazine));

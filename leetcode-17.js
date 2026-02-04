/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = "2"
Output: ["a","b","c"]

Constraints:
-> 1 <= digits.length <= 4
-> digits[i] is a digit in the range ['2', '9'].
*/

function letterCombinations(digits) {
  if (!digits || digits.length === 0) return [];

  const digitToLetters = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  const result = [];
  const path = new Array(digits.length);

  const backtrack = (index) => {
    if (index === digits.length) {
      result.push(path.join(""));
      return;
    }

    const letters = digitToLetters[Number(digits[index])];
    for (let i = 0; i < letters.length; i++) {
      path[index] = letters[i];

      backtrack(index + 1);
    }
  };

  backtrack(0);
  return result;
}

let digits = "23";
console.log(letterCombinations(digits));

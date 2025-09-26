/*
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

Constraints:

=> 1 <= a.length, b.length <= 104
=> a and b consist only of '0' or '1' characters.
=> Each string does not contain leading zeros except for the zero itself.
*/

function addBinary(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const sum = (i >= 0 ? +a[i] : 0) + (j >= 0 ? +b[j] : 0) + carry;
    console.log(sum);
    result = (sum % 2) + result;
    console.log(result);
    carry = sum > 1 ? 1 : 0;

    i--;
    j--;
  }

  return result;
}

const a = "1010";
const b = "1011";

console.log(addBinary(a, b));

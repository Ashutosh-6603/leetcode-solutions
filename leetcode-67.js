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
  const aBinary = `0b${a}`;
  const bBinary = `0b${b}`;

  const sum = BigInt(aBinary) + BigInt(bBinary);

  console.log(BigInt(aBinary), BigInt(bBinary), sum.toString(2));

  return sum.toString(2);
}

const a = "1010";
const b = "1011";

console.log(addBinary(a, b));

/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:
Input: rowIndex = 0
Output: [1]

Example 3:
Input: rowIndex = 1
Output: [1,1]

Constraints:
=> 0 <= rowIndex <= 33
*/

function getRow(rowIndex) {
  let resultArr = [];

  if (rowIndex >= 0) resultArr.push([1]);
  if (rowIndex >= 1) resultArr.push([1, 1]);

  for (let i = 2; i < rowIndex + 1; i++) {
    let first = 1;
    let last = 1;

    let prevArr = resultArr[i - 1];

    if (prevArr.length === 2) {
      resultArr.push([first, first + last, last]);
    } else {
      let left = 0;
      let right = 1;
      let add = [];

      while (right < prevArr.length) {
        add.push(prevArr[left] + prevArr[right]);
        left++;
        right++;
      }

      resultArr.push([first, ...add, last]);
    }
  }

  return resultArr[rowIndex];
}

const n = 1;
console.log(getRow(n));

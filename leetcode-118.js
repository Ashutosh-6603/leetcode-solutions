/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]

Constraints:
=> 1 <= numRows <= 30
*/

function generate(numRows) {
  let resultArr = [];

  if (numRows >= 1) resultArr.push([1]);
  if (numRows >= 2) resultArr.push([1, 1]);

  for (let i = 2; i < numRows; i++) {
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

  return resultArr;
}

console.log(generate(7));

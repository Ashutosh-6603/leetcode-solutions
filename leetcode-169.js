/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:
=> n == nums.length
=> 1 <= n <= 5 * 104
=> -109 <= nums[i] <= 109
*/

function majorityElement(nums) {
  let n = arr.length;
  let elem = arr[0],
    count = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] === elem) {
      count++;
    } else {
      count--;
      if (count === 0) {
        elem = arr[i];
        count = 1;
      }
    }
  }
  return elem;
}

const nums = [2, 2, 1, 1, 1, 2, 2, 7, 7, 7, 7, 7, 7, 7, 7];
console.log(majorityElement(nums));

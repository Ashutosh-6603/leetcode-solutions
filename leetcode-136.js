/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1

Constraints:
=> 1 <= nums.length <= 3 * 104
=> -3 * 104 <= nums[i] <= 3 * 104
=> Each element in the array appears twice except for one element which appears only once.
*/

function singleNumber(nums) {
  // const hash = {};

  // for (const num of nums) {
  //   hash[num] = (hash[num] || 0) + 1;
  // }

  // for (const key in hash) {
  //   if (hash[key] === 1) {
  //     return Number(key);
  //   }
  // }

  // Leetcode best solution

  let uniqNum = 0;
  for (let idx = 0; idx < nums.length; idx++) {
    uniqNum = uniqNum ^ nums[idx];
  }
  return uniqNum;
}

const nums = [2, 2, 3, 4, 7, 3, 1, 1, 4];

console.log(singleNumber(nums));

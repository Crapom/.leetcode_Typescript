/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
// nums.length is >1

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    for (let jdx = index+1; jdx < nums.length; jdx++) {
      const sum = nums[jdx]+nums[index];
      if(sum==target)
      return [index,jdx];
    }
  }
};
// @lc code=end


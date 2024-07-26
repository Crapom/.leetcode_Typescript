/*
 * @lc app=leetcode id=16 lang=typescript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  //sorting
  nums.sort((a, b) => a - b);
  let answerSum = nums[0] + nums[1] + nums[2];

  for (let x = 0; x < nums.length - 2; ++x) {
    const one = nums[x];

    let left = x + 1;
    let right = nums.length - 1;

    while (left < right) {
      const two = nums[left];
      const three = nums[right];

      const sum = one + two + three;
      const subSum = sum - target;
      if (Math.abs(subSum) < Math.abs(target - answerSum)) {
        answerSum = sum;
        if (target === answerSum) {
          break;
        }
        ++left;
      } else if (subSum < 0) {
        ++left;
      } else {
        --right;
      }
    }
  }

  return answerSum;
}
// @lc code=end

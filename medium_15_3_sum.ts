/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  let result: number[][] = [];
  const map = {};

  //sorting
  nums.sort((a, b) => a - b);

  for (let x = 0; x < nums.length - 2; ++x) {
    const one = nums[x];
    if (one > 0) break;

    if (x > 0 && one === nums[x - 1]) continue;

    let left = x + 1;
    let right = nums.length - 1;

    while (left < right) {
      const two = nums[left];
      const three = nums[right];

      const sum = one + two + three;
      if (sum === 0) {
        const arr = JSON.stringify([one, two, three]);
        if (!(arr in map)) map[arr] = 1;
        ++left;
      } else if (sum < 0) {
        ++left;
      } else {
        --right;
      }
    }
  }

  return Object.keys(map).map((item) => JSON.parse(item));
}
// @lc code=end

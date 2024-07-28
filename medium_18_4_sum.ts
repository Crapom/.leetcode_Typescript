/*
 * @lc app=leetcode id=18 lang=typescript
 *
 * [18] 4Sum
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
  let result: number[][] = [];
  const map = {};

  //sorting
  nums.sort((a, b) => a - b);

  for (let x = 0; x < nums.length - 3; ++x) {
    const one = nums[x];

    for (let y = x + 1; y < nums.length - 2; ++y) {
      const two = nums[y];
      let left = y + 1;
      let right = nums.length - 1;

      while (left < right) {
        const three = nums[left];
        const four = nums[right];

        const sum = one + two + three + four;
        if (sum === target) {
          const arr = JSON.stringify([one, two, three, four]);
          if (!(arr in map)) map[arr] = 1;
          ++left;
        } else if (sum < target) {
          ++left;
        } else {
          --right;
        }
      }
    }
  }

  return Object.keys(map).map((item) => JSON.parse(item));
}
// @lc code=end

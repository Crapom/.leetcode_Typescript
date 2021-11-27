/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

//[3]
// [-2,-1]

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const ascending = (a: number, b: number) => {
    return a - b;
  };

  const merged = nums1.concat(nums2).sort(ascending);

  console.log(merged);

  //m+n >=1 (always)
  if (merged.length % 2 === 0) {
    const leftMedianIdx = Math.floor(merged.length * 0.5 + 0.01) - 1;
    const rightMedianIdx = leftMedianIdx + 1;
    return 0.5 * (merged[leftMedianIdx] + merged[rightMedianIdx]);
  } else {
    const medianIdx = Math.floor(merged.length * 0.5);
    return merged[medianIdx];
  }
}
// @lc code=end

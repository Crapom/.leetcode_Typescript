/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
  const isPalindrome = (target: string) => {
    const halfLength = Math.floor(target.length * 0.5 + 0.001);

    for (let index = 0; index < halfLength; index++) {
      if (target.charAt(index) !== target.charAt(target.length - index - 1)) {
        return false;
      }
    }

    return true;
  };

  if (s.length <= 1) return s;

  let longestPalindromeStr: string = s.charAt(0);

  for (let index = 0; index < s.length; index++) {
    for (let subIdx = index + 1; subIdx < s.length; subIdx++) {
      const targetStr: string = s.substring(index, subIdx + 1);

      if (
        isPalindrome(targetStr) &&
        targetStr.length > longestPalindromeStr.length
      ) {
        longestPalindromeStr = targetStr;
      }
    }
  }

  return longestPalindromeStr;
}
// @lc code=end

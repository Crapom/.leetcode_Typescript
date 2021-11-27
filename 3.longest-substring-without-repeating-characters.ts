/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const escapeRegex = (string) => {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  };

  if (s.length <= 1) {
    return s.length;
  }
  let longestSubstring = s.charAt(0);

  for (let index = 0; index < s.length; index++) {
    //end if there are no longer substring
    if (s.length - index <= longestSubstring.length) {
      break;
    }

    for (let subIdx = index + 1; subIdx < s.length; subIdx++) {
      const rawChar = s.charAt(subIdx);
      const targetChar = escapeRegex(rawChar);
      const prevSubstring = s.substring(index, subIdx);

      //if repeated

      if (prevSubstring.match(targetChar) !== null) {
        break;
      }

      const curSubstring = prevSubstring + rawChar;

      //check the length
      if (curSubstring.length > longestSubstring.length) {
        longestSubstring = curSubstring;
      }
    }
  }
  return longestSubstring.length;
}
// @lc code=end

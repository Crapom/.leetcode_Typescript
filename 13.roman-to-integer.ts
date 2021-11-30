/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  let sum: number = 0;

  const getIntFromRomanChar = (targetChar: string, nextChar: string) => {
    switch (targetChar) {
      case "I":
        if (nextChar === "V" || nextChar === "X") return -1;
        return 1;
      case "V":
        return 5;
      case "X":
        if (nextChar === "L" || nextChar === "C") return -10;
        return 10;
      case "L":
        return 50;
      case "C":
        if (nextChar === "D" || nextChar === "M") return -100;
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
      default:
        return 0;
    }
  };

  for (let index = 0; index < s.length; index++) {
    const target: string = s.charAt(index);
    const nextChar: string = index + 1 < s.length ? s.charAt(index + 1) : "";

    sum += getIntFromRomanChar(target, nextChar);
  }
  return sum;
}
// @lc code=end

/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start
function intToRoman(num: number): string {
  const thousands = Math.floor(num / 1000);
  const hundreds = Math.floor((num % 1000) / 100);
  const tens = Math.floor((num % 100) / 10);
  const ones = num % 10;

  const getRoman = (x: number, digit: number): string => {
    if (x < 0 || x > 9) {
      throw new Error("Input must be 0<=x<=9");
    }

    if (digit < 1 || digit > 4) {
      throw new Error("Digit must be 1<=x<=4");
    }
    let result: string = "";
    if (x === 0) return result;
    const romanLetters: string[] = ["I", "V", "X", "L", "C", "D", "M"];
    if (x >= 1 && x <= 3) {
      const targetLetter = romanLetters[digit * 2 - 2];
      for (let i = 0; i < x; ++i) {
        result += targetLetter;
      }
    } else if (x == 4) {
      const subLetter = romanLetters[digit * 2 - 2];
      const targetLetter = romanLetters[digit * 2 - 1];
      result = subLetter + targetLetter;
    } else if (x >= 5 && x <= 8) {
      const firstLetter = romanLetters[digit * 2 - 1];
      const loopLetter = romanLetters[digit * 2 - 2];
      result = firstLetter;
      for (let i = 0; i < x - 5; ++i) {
        result += loopLetter;
      }
    } else {
      //9
      const subLetter = romanLetters[digit * 2 - 2];
      const targetLetter = romanLetters[digit * 2];
      result = subLetter + targetLetter;
    }
    return result;
  };

  return (
    getRoman(thousands, 4) +
    getRoman(hundreds, 3) +
    getRoman(tens, 2) +
    getRoman(ones, 1)
  );
}
// @lc code=end

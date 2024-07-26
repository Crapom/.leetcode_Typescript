/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  let result: string[] = [];

  const letters: string[][] = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];

  if (digits.length === 1) {
    const idx = Number(digits) - 2;
    return letters[idx];
  } else if (digits.length === 0) {
    return [];
  }
  let digitNum: number[] = [];

  //string to number
  for (let i = 0; i < digits.length; ++i) {
    const num = Number(digits.charAt(i));
    digitNum.push(num);
  }
  const getChar = (
    level: number,
    total: string,
    digitNum: number[],
    letters: string[][]
  ) => {
    const curLetters: string[] = letters[digitNum[level] - 2];

    if (level >= digitNum.length - 1) {
      for (let i = 0; i < curLetters.length; ++i) {
        const letter = curLetters[i];
        result.push(total + letter);
      }
    } else {
      for (let i = 0; i < curLetters.length; ++i) {
        const letter = curLetters[i];
        getChar(level + 1, total + letter, digitNum, letters);
      }
    }
  };

  getChar(0, "", digitNum, letters);

  return result;
}
// @lc code=end

/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {

  //Palindrome num should be positive
  if(x <0)
  {
    return false;
  }
  const digit:number=Math.floor(Math.log10(x))+1;
  let xArray:number[]=new Array();
//tmp var
  let curX=x;
//make x as an array
  for (let index = 0; index < digit; index++) {
  xArray.push(curX%10);
  curX=Math.floor(curX/10);
}

//judge if x is Palindrome num
  for (let index = 0; index < xArray.length; index++) {
    if(xArray[index] !== xArray[digit-index-1])
    {
      return false;
    }
  }
  return true;
};
// @lc code=end


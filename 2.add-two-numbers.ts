/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let sumNode: ListNode | null = null;

  let left: ListNode | null = l1;
  let right: ListNode | null = l2;
  let sumPtr: ListNode | null = null;

  const calcSumNode = (
    left: ListNode | null,
    right: ListNode | null,
    carryUp: boolean
  ) => {
    if (left === null && right === null && !carryUp) {
      return;
    }

    const leftNum: number = left === null ? 0 : left.val;
    const rightNum: number = right === null ? 0 : right.val;
    const carried: number = carryUp ? 1 : 0;
    const sum: number = leftNum + rightNum + carried;
    const digit = sum % 10;
    const nextCarryUp = sum >= 10;

    //first time
    if (sumNode == null) {
      sumNode = new ListNode(digit, null);
      sumPtr = sumNode;
    } else {
      const newNode = new ListNode(digit, null);
      sumPtr.next = newNode;
      //update pointer
      sumPtr = newNode;
    }

    const nextLeft: ListNode | null = left !== null ? left.next : null;
    const nextRight: ListNode | null = right !== null ? right.next : null;

    calcSumNode(nextLeft, nextRight, nextCarryUp);
  };

  calcSumNode(l1, l2, false);

  return sumNode;
}
// @lc code=end

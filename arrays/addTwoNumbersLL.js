//Leet - 2

// let list1 = [2,4,3],
//   list2 = [5,6,4];

//  342
//75467

// list1.reverse();
// list2.reverse();

// let sum = String(BigInt(list1.join('')) + BigInt(list2.join('')))
//   .split('')
//   .reverse();

// console.log('sum', typeof list1);

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(element) {
    let node = new ListNode(element);
    let current;
    if (this.head == null) this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
}

const list1 = new LinkedList();
const list2 = new LinkedList();

const addTwoNumbers = (l1, l2) => {
  let carry = 0;
  let curr;
  let p = (curr = new ListNode(0));
  // console.log('l1', p, curr);
  let number = '';
  let sum = 0;
  while (l1 || l2) {
    if (l1 && l2) {
      console.log('li.val', l1.val, l2.val, carry);
      sum = l1.val + l2.val + carry;
      l1 = l1.next;
      l2 = l2.next;
    } else if (l1) {
      sum = l1.val + carry;
      l1 = l1.next;
    } else if (l2) {
      sum = l2.val + carry;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    sum = Math.floor(sum) % 10;
    curr.next = new ListNode(sum);
    curr = curr.next;
    number += sum;
  }

  if (carry === 1) curr.next = new ListNode(carry);
  return p.next;
};

list1.add(2);
list1.add(4);
list1.add(3);

list2.add(5);
list2.add(6);
list2.add(4);
list2.add(3);

console.log(addTwoNumbers(list1.head, list2.head));

const addTwoNumbers1 = (l1, l2) => {
  let carry = 0;
  let additionNode = new ListNode();
  let ansNode = additionNode;

  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    sum %= 10;
    ansNode.next = new ListNode(sum);

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    ansNode = ansNode.next;
  }

  return additionNode.next;
};
console.log(addTwoNumbers1(list1.head, list2.head));

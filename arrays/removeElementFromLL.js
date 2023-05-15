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

list1.add(1);
list1.add(2);

const removeIndex = (head, n) => {
  let headIt = head;
  let length = 0;

  while (headIt) {
    length++;
    headIt = headIt.next;
  }
  console.log('length', length);

  if (length === 1) {
    head = null;
  } else {
    let index = length - n;
    let i = 0;
    let curr = head,
      prev;

    console.log('curr', curr);

    if (index === 0) {
      head = curr.next;
    } else {
      while (i < index) {
        i++;
        prev = curr;
        curr = curr.next;
      }
      console.log('prev', prev);
      prev.next = curr.next;
    }
  }

  return head;
};

// if (!head.next) return null;
// let left = head,
//   right = head,
//   k = n;
// while (k > 0) {
//   right = right.next;
//   k--;
// }
// if (!right) return head.next;
// while (right.next) {
//   left = left.next;
//   right = right.next;
// }
// const temp = left.next;
// left.next = temp?.next;
// temp.next = null;
// return head;

console.log(removeIndex(list1.head, 2));

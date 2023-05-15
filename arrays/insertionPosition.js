//Leet - 35
//Binary search

let nums = [-3, -2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 12],
  target = 10;

// let indexOfTarget = nums.indexOf(target);

// if (indexOfTarget === -1) {
//   if (nums[0] > target) {
//     indexOfTarget = 0;
//   } else if (nums[nums.length - 1] < target) {
//     indexOfTarget = nums.length;
//   } else {
//     nums.push(target);
//     nums.sort((a, b) => {
//       if (a > b) return 1;
//       return -1;
//     });

//     indexOfTarget = nums.indexOf(target);
//   }
// }

// console.log('indexOfTarget', indexOfTarget);

let i = 0;
let j = nums.length - 1;

while (i <= j) {
  let mid = Math.floor((i + j) / 2);

  if (nums[mid] == target) console.log('mid', mid);

  if (nums[mid] < target) {
    i = mid + 1;
  } else {
    j = mid - 1;
  }
}

console.log('i', i);

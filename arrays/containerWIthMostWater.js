// Leet code - 11

const heights = [7, 2, 1, 4, 9];

let maxValue = 0;
let p1 = 0;
let p2 = heights.length - 1;

// for (let i = 0; i < heights.length; i++) {
//   for (let j = i + 1; j < heights.length; j++) {
//     let height = Math.min(heights[i], heights[j]);
//     let width = j - i;
//     let currentValue = width * height;
//     maxValue = Math.max(currentValue, maxValue);
//   }
// }

while (p1 < p2) {
  let height = Math.min(heights[p1], heights[p2]);
  let width = p2 - p1;
  let currentValue = width * height;
  maxValue = Math.max(currentValue, maxValue);
  if (heights[p1] < heights[p2]) {
    p1++;
  } else {
    p2--;
  }
}

console.log('maxValue', maxValue);

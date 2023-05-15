//Leet 42

// const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const height = [5, 4, 1, 2];

// let left = height[0],
//   right = height[height.length - 1];

// let p1 = 0,
//   p2 = 1,
//   p3 = 2,
//   max = 0;

// let volumeOfRainWater = 0;

// while (p1 < p2) {
//   if (height[p1] !== 0 && p1 !== 0 && p3 !== height.length - 1) {
//     let trapValue = Math.abs(height[p1] - height[p3]) - height[p2];
//     console.log('trapValue', trapValue);
//     if (left < height[p1]) {
//       left = height[p1];
//     }
//     if (right < height[p3]) {
//       right = height[p3];
//     }
//     if (trapValue > 0) {
//       volumeOfRainWater += trapValue;
//     }

//     console.log('sd');

//     volumeOfRainWater += Math.min(height[p1], height[p3]) - height[p2];

//     max = Math.max(height[p1], max);
//     p1++;
//     p2++;
//     p3++;
//   } else {
//     p1++;
//     p2++;
//     p3++;
//   }
// }

let left = 0,
  right = height.length - 1,
  maxLeft = 0,
  maxRight = 0;

let volumeOfRainWater = 0;

while (left < right) {
  if (height[left] <= height[right]) {
    if (height[left] >= maxLeft) {
      maxLeft = height[left];
    } else {
      volumeOfRainWater += maxLeft - height[left];
    }
    left++;
  } else {
    if (height[right] >= maxRight) {
      maxRight = height[right];
    } else {
      volumeOfRainWater += maxRight - height[right];
    }
    right--;
  }
}

console.log('volumeOfRainWater', volumeOfRainWater);

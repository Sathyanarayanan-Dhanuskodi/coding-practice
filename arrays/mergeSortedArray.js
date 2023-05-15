//Leet - 88

let nums1 = [1, 2, 3, 0, 0, 0],
  nums2 = [2, 5, 6],
  m = 3,
  n = 3;

// let nums3 = nums1.slice(0, m);

// nums1 = [...nums3, ...nums2].sort((a, b) => {
//   if (a > b) return 1;
//   return -1;
// });

// console.log('nums1', nums1);

let nums3 = [...nums1.slice(0, m), ...nums2]; //O(n)

for (let i = 0; i < nums3.length; i++) {
  //O(n)
  nums1[i] = nums3[i];
}

nums1.sort((a, b) => {
  //O(n)
  if (a > b) return 1;
  return -1;
});

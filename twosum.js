//Google
//Leet code - 1
//Hackerrank
//Daily byte

const arr = [2, 4, 2, 6, 5];
const k = 10;

const map = new Map();

// O(n)

const twoSum = () => {
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr.length - 1; j++) {
  //     if (i !== j) {
  //       if (arr[i] + arr[j] === k) {
  //         return true;
  //       }
  //     }
  //   }
  // }

  for (let i = 0; i < arr.length; i++) {
    let diff = k - arr[i];
    if (map.has(diff)) {
      return true;
    }
    console.log('map', map);
    map.set(arr[i], i);
  }

  return false;
};

console.log('twoSum', twoSum());

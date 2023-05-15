//Leet - 27

let nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2,
  p1 = 0;

// nums = nums.filter((e) => e !== val);

while (p1 < nums.length) {
  if (nums[p1] === val) {
    nums.splice(p1, 1);
    p1--;
  } else {
    p1++;
  }
}

console.log('nums', nums);

//Hackerrank

function findMedian(arr) {
  const sortedArray = [...arr].sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (b > a) {
      return -1;
    }
    return 0;
  });

  const medianIndex = Math.floor(sortedArray.length / 2);

  console.log('medianIndex', Math.floor(sortedArray.length / 2));

  console.log(sortedArray.indexOf(5008));

  return sortedArray[medianIndex];
}

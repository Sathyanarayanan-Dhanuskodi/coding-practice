// Hacker rank

const ar = [1, 2, 3, 4, 5, 6];
const k = 5;

let pairCount = 0;

while (ar.length) {
  const cur = ar.shift();
  console.log('cur', ar);
  const matches = ar.filter((ele) => {
    return (cur + ele) % k === 0;
  });

  console.log('mata]', matches);

  pairCount += matches.length;
}

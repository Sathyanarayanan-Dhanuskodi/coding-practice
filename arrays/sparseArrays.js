//Daily byte

const strings = ['aba', 'baba', 'aba', 'xzxb'];
const queries = ['aba', 'xzxb', 'ab'];

let counts = [];

for (let query of queries) {
  const count = strings.filter((e) => query === e);
  counts.push(count.length);
}

console.log('counts', counts);

const arr = [0, 1, 2, 4, 6, 5, 3];
const medianIndex = arr.length / 2;
console.log('', medianIndex);

//Amazon
//Daily byte

const jewels = 'AYOPD';
const stones = 'ayopd';

let count = 0;

for (let jewel of jewels) {
  for (let stone of stones) {
    if (stone === jewel) {
      count += 1;
    }
  }
}

console.log('count', count);

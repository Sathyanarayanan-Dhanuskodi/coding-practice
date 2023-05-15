//Amazon
//Daily byte

const sen1 = 'copper coffee pot';
const sen2 = 'hot coffee pot';

let words = new Map();

let uniqueWords = [];

const sen2Arr = sen2.split(' ');
const sen1Arr = sen1.split(' ');

for (let s of sen1Arr) {
  if (!sen2Arr.includes(s)) {
    uniqueWords.push(s);
  }
}

for (let s of sen2Arr) {
  if (!sen1Arr.includes(s)) {
    uniqueWords.push(s);
  }
}

console.log('uniqueWords', uniqueWords);

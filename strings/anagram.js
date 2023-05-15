//Facebook
//Daily byte

let asciiTotalOfS = 0;
let asciiTotalOfT = 0;

exports.handleAnagram = (s, t) => {
  s.split('').map((e) => (asciiTotalOfS += e.toLowerCase().charCodeAt(0)));
  t.split('').map((e) => (asciiTotalOfT += e.toLowerCase().charCodeAt(0)));

  if (asciiTotalOfS === asciiTotalOfT) return true;
  if (asciiTotalOfS !== asciiTotalOfT) return false;
};

// console.log(handleAnagram('tac', 'cat'));

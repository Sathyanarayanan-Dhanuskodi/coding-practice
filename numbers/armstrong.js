//self

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let total = 0;
let armstrongNumber = [];

rl.question('Enter the maximum number...', (n) => {
  for (let i = 1; i <= Number(n); i++) {
    let digits = i.toString().split('').map(Number);
    total = digits
      .map((e) => Math.pow(e, i.toString().length))
      .reduce((a, b) => a + b, 0);
    if (total === i) {
      armstrongNumber.push(i);
    }
  }
  console.log('armstrongNumber', armstrongNumber);
  rl.close();
});

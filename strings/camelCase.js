//Hackerrank

const input1 = 'S;M;plasticCup()';
const input2 = 'C;V;mobile phone';
const input3 = 'C;C;coffee machine';
const input4 = 'S;C;LargeSoftwareBook';
const input5 = 'C;M;white sheet of paper';
const input6 = 'S;V;pictureFrame';

const inputf =
  'C;V;can of coke\r\nS;M;sweatTea()\r\nS;V;epsonPrinter\r\nC;M;santa claus\r\nC;C;mirror';

const splitInput = inputf.split('\r\n');

for (let input of splitInput) {
  const action = input.charAt(0);
  const word = input.substring(4, input.length);
  const method = input.charAt(2);

  console.log('action', action, word, method);

  if (action === 'S') {
    if (method === 'M') {
      let indexOfCaps;
      word
        .substring(0, word.length - 2)
        .split('')
        .map((e, index) => {
          if (e.toUpperCase() === e) {
            indexOfCaps = index;
          }
        });

      console.log(
        word.substring(0, indexOfCaps) +
          ' ' +
          word.substring(indexOfCaps, indexOfCaps + 1).toLowerCase() +
          word.substring(indexOfCaps + 1, word.length - 2)
      );
    }

    if (method === 'C' || method === 'V') {
      let splittedWord = '';
      word.split('').map((e) => {
        if (e.toUpperCase() === e) {
          splittedWord += ' ' + e.toLowerCase();
        } else {
          splittedWord += e;
        }
      });

      console.log(splittedWord.trimStart());
    }
  }

  if (action === 'C') {
    if (method === 'V' || method === 'M') {
      let wordOut = '';
      word.split('').map((e, index) => {
        if (word.charAt(index - 1) === ' ') {
          wordOut += e.toUpperCase();
        } else {
          wordOut += e;
        }
      });

      if (method === 'V') {
        console.log(`${wordOut.replace(/ /g, '')}`);
      }
      if (method === 'M') {
        console.log(`${wordOut.replace(/ /g, '')}()`);
      }
    }

    if (method === 'C') {
      let wordOut = '';
      word.split('').map((e, index) => {
        if (index === 0) {
          wordOut += e.toUpperCase();
        }
        if (index !== 0 && word.charAt(index - 1) === ' ') {
          wordOut += e.toUpperCase();
        } else if (index !== 0) {
          wordOut += e;
        }
      });

      console.log(wordOut.replace(/ /g, ''));
    }
  }
}

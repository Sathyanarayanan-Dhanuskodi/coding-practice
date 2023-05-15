let numGiven = 1234567890;

let numberInString = numGiven.toString();

let numbersDivisibleByThree = [];

const findSingleDigit = () => {
  for (let i = 0; i < numberInString.length; i++) {
    if (
      Number(numberInString.charAt(i)) !== 0 &&
      Number(numberInString.charAt(i)) % 3 == 0
    ) {
      console.log('inside');
      numbersDivisibleByThree.push(Number(numberInString.charAt(i)));
    }
  }
  console.log('numbersDivisibleByThree', numbersDivisibleByThree);
  return numbersDivisibleByThree.length > 0;
};

const findDoubleDigit = () => {
  for (let i = 0; i < numberInString.length; i++) {
    for (let j = 0; j < numberInString.length - 1; j++) {
      console.log('two digit');
      const twoDigitNumber = Number(
        numberInString.charAt(i) + numberInString.charAt(j)
      );
      if (twoDigitNumber % 3 == 0) {
        numbersDivisibleByThree.push(twoDigitNumber);
      }
    }
  }
  return numbersDivisibleByThree.length > 0;
};

const isSingleDigitAvailable = findSingleDigit();

if (!isSingleDigitAvailable) {
  findDoubleDigit();
}

numbersDivisibleByThree.length > 0
  ? console.log(
      'min',
      Math.min.apply(null, numbersDivisibleByThree.filter(Boolean))
    )
  : console.log('min', -1);

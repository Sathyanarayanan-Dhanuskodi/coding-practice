// Leet - 66

let digits = [9];

const addOne = () => {
  const lastDigitToBeModified = digits[digits.length - 1] + 1;
  const addPreviousNumber = (index) => {
    //O(n)
    digits[index] = 0; //O(1)
    const modifiedNumber = digits[index - 1] + 1; //O(1)
    if (modifiedNumber === 10 && digits[index - 1] !== undefined) {
      addPreviousNumber(index - 1);
    } else if (Number.isNaN(modifiedNumber)) {
      digits.unshift(1); //O(n)
      return digits;
    } else if (digits[index - 1] !== undefined) {
      digits[index - 1] = digits[index - 1] + 1; //O(1)
      return digits;
    }
  };

  if (lastDigitToBeModified === 10) {
    addPreviousNumber(digits.length - 1);
  } else {
    digits[digits.length - 1] = lastDigitToBeModified;
  }

  return digits;
};

if (digits.length === 1) {
  //O(n^3) //But since it is for one digit number time complexity will be O(1)
  const addedNumber = digits[0] + 1;
  console.log(
    addedNumber
      .toString() //O(n)
      .split('') //O(n)
      .map((e) => Number(e)) //O(n)
  );
} else {
  console.log('lastDigit', addOne()); //O(n)
}

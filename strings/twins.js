//Gopi

// A twin of a word is a word written with the same letters(case insensitive) but not necessarly in the same order.

// For example Slient is a twin of Listen.

// The isTwin(a,b) function should return true if b is the twin of a and false otherwise. a and b are two non-null strings.

// Write the body of the isTwin(a,b) function

const isTwin = (first, second) => {
  if (first.length !== second.length) return false;

  const sortedFirst = first
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('')
    .toLowerCase();
  const sortedSecond = second
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('')
    .toLowerCase();

  return sortedFirst === sortedSecond;
};

console.log(isTwin('Hello', 'world')); // false
console.log(isTwin('acb', 'bca')); // true
console.log(isTwin('Lookout', 'Outlook')); // true
console.log(isTwin('Watchooo', 'oohwatch')); // false

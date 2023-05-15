/* Daily byte */
/* You are typing on a broken keyboard trying to spell your friend’s name. Since the keyboard is broken, sometimes when you press a key the key is typed one or more times. Given a string typed and a string namereturn whether or not you’ve successfully typed your friend’s name even though certain keys might be repeated.
Note: Both strings will only contain lowercase alphabetical characters.

Ex: Given the following typed and name…

typed = "kkevin", name = "kevin", return true.
Ex: Given the following typed and name…

typed = "timmm", name = "timmy", return false. */

function brokenKeyboard(typed, name) {
  let nameCheck = name;
  for (let char of typed) {
    if (name.includes(char)) {
      nameCheck = nameCheck.replace(char, '');
    }
  }

  return !nameCheck.length > 0;
}

console.log(brokenKeyboard('kkevin', 'kevin'));
console.log(brokenKeyboard('timmm', 'timmy'));
console.log(brokenKeyboard('katiee', 'katie'));
console.log(brokenKeyboard('aaroo', 'aaron'));
console.log(brokenKeyboard('bbbrian', 'brian'));
console.log(brokenKeyboard('aaaana', 'ana'));
console.log(brokenKeyboard('lynnnnnnn', 'lynn'));
console.log(brokenKeyboard('petee', 'peter'));
console.log(brokenKeyboard('nicholas', 'nick'));
console.log(brokenKeyboard('samanthaaaaaa', 'samantha'));

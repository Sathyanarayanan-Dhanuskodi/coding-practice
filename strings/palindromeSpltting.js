// Daily byte

let str = 'abcba';

let tmp = 0;

function isPalindrome(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[s.length - 1 - i]) {
      tmp += 1;
    }
  }

  return tmp === s.length - 1;
}

console.log('isPalindrome', isPalindrome(str));

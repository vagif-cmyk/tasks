function isPalindrome(num) {
  return String(num).split('').reverse().join('') === String(num);
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
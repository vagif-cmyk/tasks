function isValidIP(str) {
  str = str.split('.');
  const reg = /\s+/g;

  if (str.length === 4) {
    for (let i = 0; i < str.length; i++) {

      const word = str[i];

      if (reg.test(word)) return false;
      for (let j = 0; j < word.length; j++) {
        if (typeof +word[j] !== 'number'
          || isNaN(+word[j])
          || +word[j] < 0
          || (j === 0 && word.length > 1 && +word[j] === 0)) {
          return false;
        }
      }
      if (+word < 0 || +word > 255) return false;
    }
  } else return false;
  return true;
}

// console.log(isValidIP('1.2.3'));
// console.log(isValidIP('1.2.3.4.5'));
// console.log(isValidIP('123.456.78.90'));
// console.log(isValidIP('eew'));
// console.log(isValidIP(''));
// console.log(isValidIP('1e0.1e1.1e2.2e2'));
// console.log(isValidIP('1.2.3.4\n'));
// console.log(isValidIP('\n1.2.3.4'));
// console.log(isValidIP('123.456.789.0'));
// console.log(isValidIP('12.34.56'));
// console.log(isValidIP('01.02.03.04'));
// console.log(isValidIP('256.1.2.3'));
// console.log(isValidIP('1.2.3.4.5'));
// console.log(isValidIP('123,45,67,89'));
// console.log(isValidIP('abc.def.ghi.jkl'));


// console.log(isValidIP('12.255.56.1'));
// console.log(isValidIP('0.0.0.0')); 

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum
//  4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.


// my solution(
function sumTwoSmallestNumbers(numbers) {
  let minOne = Math.max(...numbers);
  let minTwo = minOne;
  let minOneIndex;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minOne) {
      minOne = numbers[i];
      minOneIndex = i;
    }
  }
  numbers.splice(minOneIndex, 1);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minTwo) {
      minTwo = numbers[i];
    }
  }
  return minOne + minTwo;
}

// best solution
// function sumTwoSmallestNumbers(numbers) {  
//   let [ a, b ] = numbers.sort((a, b) => a - b);
//   return a + b;
// }

console.log(sumTwoSmallestNumbers([5, 5, 8, 12, 19, 1, 22]));
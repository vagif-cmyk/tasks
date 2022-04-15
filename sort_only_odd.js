// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


// my solution
function sortArray(array) {
  const newArray = [];
  let oddIndex = 0;

  const odd = array.filter((item) => item % 2 !== 0)
    .sort((a, b) => a - b);

  array.forEach(element => {
    if (element % 2 !== 0) {
      newArray.push(odd[oddIndex]);
      oddIndex++;
    } else {
      newArray.push(element);
    }
  });
  return newArray;
}

// best solution on codewars
// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//   return array.map((x) => x % 2 ? odd.shift() : x);
// }

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
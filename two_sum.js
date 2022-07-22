/*
Учитывая массив целых чисел nums и целое число target, верните индексы двух чисел так,
 чтобы они составляли в сумме target .
Вы можете предположить, что каждый вход будет иметь ровно одно решение , и вы не можете использовать 
один и тот же элемент дважды.
Вы можете вернуть ответ в любом порядке.
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    const value = target - number;

    if (map[value] !== undefined) {
      return [map[value], i];
    } else {
      map[number] = i;
    }
  };
}

console.log(twoSum([2, 11, 7, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
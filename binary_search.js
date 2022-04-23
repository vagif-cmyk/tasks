// реализуется алгоритм бинарного поиска
// Важно! Массив в котором ведется поиск должен быть отсортирован.

const array = [-23, 0, 5, 8, 9, 11, 23, 56, 99];
const array2 = [-23, 0, 5, 8, 9, 11, 23, 56, 99];
const array3 = [0, 4, 8, 9, 11, 23, 56, 99];
const array4 = [-2, 5, 8, 9, 11, 13, 26, 69];
const array5 = ['adz', 'bae', 'dwet', 'rere', 'wake'];

// функция возвращает индекс искомого элемента или -1 если элемента в массиве нет.
const binarySearch = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.round((right - left) / 2) + left;
        if (target === numbers[mid]) {
            return mid;
        }
        else if (target < numbers[mid]) {
            right = mid - 1;
        }
        else if (target > numbers[mid]) {
            left = mid + 1;
        }
    }
    return -1;
}
console.log(binarySearch(array, 11));
console.log(binarySearch(array2, 12));
console.log(binarySearch(array3, 0));
console.log(binarySearch(array4, 9));
console.log(binarySearch(array5, 'wake')); // работает и со строками.
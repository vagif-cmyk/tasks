let str1 = 'abcde';
let str2 = 'hello world!';
let str3 = 'I am Betman';
let str = "Любо, братцы, любо!";
let result = str.replace(/ю/g, '');
let str4 = "Я ЛюБлЮ JavaScript";
let reg = /люблю/i;

console.log(reg);
console.log(reg.test(str4));
console.log(str.replace(/любо/ig, '$& yes!'));
console.log(str.replace(/любо/ig, '$`yes!'));
console.log(str.replace(/любо/ig, '$\'yes!'));


// у нас есть номер телефона вида "+7(903)-123-45-67",
// и нам нужно превратить его в строку только из чисел: 79031234567.

// первый способ
let phone = '+7(903)-123-45-67';  // входная строка
phone = phone.match(/\d/g).join('');  // метод match возвращает массив(в данном случае массив 
// только с цифрами т.к. \d , а метод join соединяет этот массив в одну строку)
console.log(phone);

// второй способ
phone = '+7(903)-123-45-67';

phone = phone.replace(/\D/g, ''); // берем все НЕ цифры благодаря флагу \D и удаляем их
console.log(phone);

// проверка на валидность введеных данных в формате 11:11 
let goodInput = "12:34";
let badInput = "12:345";

let regexp = /^\d\d:\d\d$/;    // полное совпадение
console.log(regexp.test(goodInput));     // true
console.log(regexp.test(badInput));      // false













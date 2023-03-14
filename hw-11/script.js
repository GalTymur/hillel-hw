"use strict";

// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
// 

const arr = [1, 'hello', 3, true, 5, null, 7];
const avg = calculateAverage(arr); // 3.2

function calculateAverage(arr) {
  const numbers = arr.filter(el => typeof el === 'number');
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
}
console.log(avg);

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

let x = Number(prompt("Введіть перше число:"));
let y = Number(prompt("Введіть друге число:"));
let znak = prompt("Введіть знак операції (+, -, *, /, %, ^):");
let result = doMath(x, znak, y);

function doMath(x, znak, y) {
  let result;

  switch (znak) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
    case "%":
      result = x % y;
      break;
    case "^":
      result = Math.pow(x, y);
      break;
    default:
      result = "Невідомий знак операції";
  }

  return result;
}
console.log(result);


// Написати функцію яка приймає массив чисел та повертає максимальне число в цьому масиві.

const arr1 = [2, 4, 34, 23, 8, 9];

const arr2 = Math.max(...arr1);
console.log(arr2);


// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи 
// для видалення задає користувач.
const str = " hello world";
const charsToRemove = ['h', 'l'];
const result1 = removeChars(str, charsToRemove);

function removeChars(str, charsToRemove) {
  let result1 = '';
  for (let i = 0; i < str.length; i++) {
    if (!charsToRemove.includes(str[i])) {
      result1 += str[i];
    }
  }
  return result1;
}
console.log(result1);


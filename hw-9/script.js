const length = parseInt(prompt("Введіть довжину масива:"));
let arr = [];

for (let i = 0; i < length; i++) {
  arr.push(parseInt(prompt(`Введіть елемент масива №${i + 1}:`)));
}

console.log("Масив до сортування: [" + arr.join(", ") + "]");
arr.sort((a, b) => a - b);
console.log("Масив після сортування: [" + arr.join(", ") + "]");
arr.splice(1, 3);
console.log("Масив після видалення елементів: [" + arr.join(", ") + "]");


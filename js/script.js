"use strict";

// 1. Перетворення типів

let number = 8;
let string = number.toString();
console.log(string);

let bookChapter = "8";
let amount = parseInt(bookChapter);
console.log(amount);

let quantity = 2;
let isActive = Boolean(quantity);
console.log(isActive);

// 2. Конвертер валют

const rate = 37.42;
let total = +prompt("Введіть суму в гривнях: ");
console.log(Math.floor(total * rate));

// 3. Обчислення вартості бензину

let petrolAmount = +prompt("Потрібно літрів бензину: ");
let price = +prompt("Ціна бензину за літр: ");
let overallPrice = (petrolAmount * price).toFixed(2);
console.log(overallPrice);

// 4. Додаткова задача*

let x = 8;
let y = 16;
let binaryResult = x + y;
console.log(binaryResult.toString(2));
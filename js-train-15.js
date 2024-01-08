// Завдання 1
/**
 * Функція `generateRandomPassword` генерує випадковий пароль заданої довжини.
 *
 * length - довжина пароля.
 *
 * Повертає випадковий пароль.
 */
function generateRandomPassword(length) {
  let pass = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    pass = pass + characters[Math.floor((Math.random() + 1) * length)];
  }
  return pass;
}

console.log("Завдання: 1 ==============================");
console.log(generateRandomPassword(8));
// Виведе випадковий пароль довжиною 8 символів.

// Завдання 2
/**
 * Функція `calculateCircleArea` обчислює площу кола на основі його радіуса.
 *
 *  radius - Радіус кола.
 * Поверне: Площу кола.
 */
function calculateCircleArea(radius) {
  if (typeof radius !== "number") {
    console.log("Помилка: обчислення не можливе.");
    return null;
  }
  const plosh = Math.PI * Math.pow(radius, 2);
  return plosh;
}

console.log("Завдання 2 ==============================");
console.log(calculateCircleArea(5));
// Виведе площу кола з радіусом 5, наприклад 78.53981633974483.

// Завдання 3
/**
 * Функція `findMinMax` знаходить мінімальне та максимальне число в масиві.
 *
 *  numbers - Масив чисел.
 * Поверне: Об'єкт, що містить мінімальне та максимальне число.
 */
function findMinMax(numbers) {
  if (!Array.isArray(numbers)) {
    console.log("Помилка: обробкa вхідних даних не можливa.");
    return null;
  }
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return { min, max };
}

console.log("Завдання 3 ==============================");
console.log(findMinMax([5, 2, 9, 1, 5, 6, 7, 8]));
// Виведе об'єкт, що містить мінімальне (1) та максимальне (9) числа.

// Завдання 4
/**
 * Функція `calculateHypotenuse` обчислює довжину гіпотенузи прямокутного трикутника за довжинами його катетів.
 *
 *  a - Довжина першого катета.
 *  b - Довжина другого катета.
 * Поверне: Довжину гіпотенузи.
 */
function calculateHypotenuse(a, b) {
  if (typeof a !== "number" && typeof b !== "number") {
    console.log("Помилка: обробкa вхідних даних не можливa.");
    return null;
  }
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

console.log("Завдання 4 ==============================");
console.log(calculateHypotenuse(3, 4));
// Виведе довжину гіпотенузи для прямокутного трикутника з катетами довжиною 3 та 4, що дорівнює 5.

// Завдання 5
/**
 * Функція `roundObjectValues` заокруглює значення всіх числових властивостей об'єкта.
 *
 *  obj - Об'єкт для обробки.
 *  Поверне: Об'єкт з заокругленими значеннями числових властивостей.
 */
function roundObjectValues(obj) {
  if (typeof obj !== "object" || typeof obj === null) {
    console.log("Помилка: аргумент має бути об'єктом");
    return "Помилка: обробкa вхідних даних не можливa.";
  }
  const objEntries = Object.entries(obj);
  const roundedObjectValues = objEntries.map(([key, value]) => {
    if (typeof value === "number") {
      return [key, Math.round(value)];
    }
    return [key, value];
  });
  return Object.fromEntries(roundedObjectValues);
}

console.log("Завдання 5 ==============================");
const myObject = {
  a: 3.5,
  b: 2.2,
  c: "not a number",
  d: 4.9,
};
console.log(roundObjectValues(myObject));
// Виведе:
// { a: 4, b: 2, c: "not a number", d: 5 }

// Завдання 6
/**
 * Функція `calculateVolumeCylinder` обчислює об'єм циліндра за заданими радіусом і висотою.
 *
 *  radius - радіус основи цилндра.
 *  height - висота циліндра.
 * Поверне: Об'єм циліндра.
 */
function calculateVolumeCylinder(radius, height) {
  if (typeof radius !== "number" || typeof height !== "number") {
    console.log("Помилка: обидва аргументи мають бути числами.");
    return null;
  }
  let volume = Math.PI * Math.pow(radius, 2) * height;
  return Math.ceil(volume);
}

console.log("Завдання 6 ==============================");
console.log(calculateVolumeCylinder(3, 5));
// Виведе 142

// Завдання 7
/**
 * Функція `sumPositiveNumbers` обчислює суму додатніх чисел у масиві.
 *
 * numbers - масив чисел.
 * Поверне: Сума додатніх чисел.
 */
function sumPositiveNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    console.log("Помилка: обробкa вхідних даних не можливa.");
    return null;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let sign = Math.sign(numbers[i]);
    if (sign > 0) {
      sum = sum + numbers[i];
    }
  }
  return sum;
}

console.log("Завдання 7 ==============================");
console.log(sumPositiveNumbers([-5, 3, 2, -1, 7, -6]));
// Виведе 12

// Завдання 8
/**
 * Функція `getFractionalPart` виводить дробову частину числа.
 * num - число.
 * Поверне: дробова частина числа.
 */
function getFractionalPart(num) {
  if (typeof num !== "number") {
    console.log("Помилка: аргумент має бути числом");
    return null;
  }
  const int = Math.trunc(num);
  return Math.fround(num - int);
}

console.log("Завдання 8 ==============================");
console.log(getFractionalPart(12.34567));
// Виведе дробову частину числа, наприклад 0.34567001461982727

// Завдання 9
/**
 * Функція `compareAndRound` порівнює два числа та повертає найбільше число округлене до найближчого цілого.
 *
 *  num1 - Перше число.
 *  num2 - Друге число.
 *  Поверне: Найбільше число округлене до найближчого цілого.
 */
function compareAndRound(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("Помилка: обидва аргументи мають бути числами.");
    return null;
  }
  const big = Math.max(num1, num2);
  return Math.round(big);
}

console.log("Завдання 9 ==============================");
console.log(compareAndRound(13.4, 15.7));
// Виведе 16.

// Завдання 10
/**
 * Функція `estimateInvestment` оцінює прибуток від інвестицій з фіксованою річною процентною ставкою за задану кількість років.
 *
 *  principal - Початкова сума інвестицій.
 *  interestRate - Річна процентна ставка в десяткових дробах (наприклад, 5% = 0.05).
 *  years - Кількість років.
 *  Поверне: Оцінку суми прибутку від інвестицій.
 */
function estimateInvestment(principal, interestRate, years) {
  if (
    typeof principal !== "number" ||
    typeof interestRate !== "number" ||
    typeof years !== "number"
  ) {
    console.log("Помилка: обидва аргументи мають бути числами.");
    return null;
  }
  const invest = principal * Math.pow(1 + interestRate, years);
  return Math.round(invest);
}

console.log("Завдання 10 ==============================");
console.log(estimateInvestment(1000, 0.05, 5));
// Виведе  1276.

// Завдання 11
/**
 * Функція `isTotalPriceExceedsMaxPrice` приймає масив з об'єктами {price, title} та maxPrice.
 * Кожен об'єкт містить властивість price як дробове число.
 * Функція обраховує суму всіх price (totalPrice), конвертує totalPrice та maxPrice за допомогою Math.fround
 * і перевіряє чи не перевищує totalPrice maxPrice.
 *
 * products - масив з об'єктами {price, title}.
 * maxPrice - максимальна сума.
 * Повертає чи перевищує totalPrice maxPrice.
 */
function isTotalPriceExceedsMaxPrice(products, maxPrice) {
  if (!Array.isArray(products)) {
    console.log("Помилка: обробкa вхідних даних не можливa.");
    return null;
  }
  if (typeof maxPrice !== "number") {
    console.log("Помилка: обчислення не можливе.");
    return null;
  }
  const totalPrice = products.reduce((acc, cur) => {
    acc += cur;
    return acc;
  });
  const totalPriceX = Math.fround(totalPrice);
  return totalPriceX > maxPrice;
}

console.log("Завдання 11 ==============================");
let products = [
  { title: "Product 1", price: 0.4 },
  { title: "Product 2", price: 0.23 },
  { title: "Product 3", price: 0.109 },
  { title: "Product 4", price: 0.7564 },
  { title: "Product 5", price: 0.33456 },
  { title: "Product 6", price: 0.897654 },
];
let maxPrice = 3.567894;
console.log(isTotalPriceExceedsMaxPrice(products, maxPrice));
// Виведе: false

// Завдання 1: Дано масив, використовуючи цикл "for in" виведіть на консоль всі індекси цього масиву
function printIndexes(array) {
  for (const key in array) {
    console.log(key);
  }
  // Проходимося по всіх індексах масиву
  // Виводимо кожен індекс на консоль
}

console.log("Завдання 1 ====================================");
printIndexes([1, 2, 3, 4, 5]);
// Виведе
// 0
// 1
// 2
// 3
// 4

// Завдання 2: Дано масив, використовуючи цикл "for in" знайдіть суму всіх елементів масиву
function sumArray(array) {
  let sum = 0;
  for (const key in array) {
    sum += array[key];
  }
  return sum;
  // Ініціалізуємо змінну для зберігання суми
  // Проходимося по всіх індексах масиву
  // Додаємо кожен елемент до загальної суми
  // Повертаємо суму
}

console.log("Завдання 2 ====================================");
console.log("sumArray([1, 2, 3, 4, 5])", sumArray([1, 2, 3, 4, 5])); // Виведе 15

// Завдання 3: Дано масив, використовуючи цикл "for of" знайдіть добуток всіх елементів масиву
function multiplyArray(array) {
  let mult = 1;
  for (const item of array) {
    mult *= item;
  }
  return mult;
  // Ініціалізуємо змінну для зберігання добутку
  // Проходимося по всіх значеннях масиву
  // Множимо кожен елемент на загальний добуток
  // Повертаємо добуток
}

console.log("Завдання 3 ====================================");
console.log("multiplyArray([1, 2, 3, 4, 5])", multiplyArray([1, 2, 3, 4, 5])); // Виведе 120

// Завдання 4: Дано масив рядків. Видаліть третій елемент масиву та перетворіть в рядок за допомогою методу toString(). Результат виведіть на консоль.
function modifyArray(array) {
  delete array[2];
  console.log(array.toString());
  // Видаляємо третій елемент масиву
  // Виводимо масив перетворений в рядок
}

console.log("Завдання 4 ====================================");
modifyArray([1, "two", 3, "four", 5]); // Виведе 1,two,,four,5

// Завдання 5: Дано масив рядків. За допомогою циклу for переберіть масив, виведіть кожен елемент на консоль у верхньому регістрі.
function printUppercase(array) {
  let element;
  for (let index = 0; index < array.length; index++) {
    console.log(array[index].toUpperCase());
  }
  // Проходимося по всіх елементах масиву
  // Перетворюємо кожен елемент в верхній регістр та виводимо на консоль
}

console.log("Завдання 5 ====================================");
printUppercase(["one", "two", "three"]); // Виведе ONE TWO THREE

// Завдання 6: Функція приймає деструктуризований масив чисел де буду перший елемент та масив всіх інших.
// За допомогою циклу for переберіть масив, знайдіть мінімальне та максимальне значення. Результат виведіть на консоль.
function findMinMax([firstElement, ...restElements]) {
  let min = firstElement;
  let max = firstElement;
  for (let i = 0; i < restElements.length; i++) {
    if (min > restElements[i]) {
      min = restElements[i];
    }
    if (max < restElements[i]) {
      max = restElements[i];
    }
  }
  console.log(`Min: ${min} Max: ${max}`);
}

console.log("Завдання 6 ====================================");
findMinMax([5, 2, 8, 1, 9, 3]); // Виведе Min: 1 Max: 9

// Завдання 7: Функція приймає масив рядків.
// Перетворіть масив в рядок за допомогою методу toString() та повторітxь його 2 рази. Результат виведіть на консоль.
function printStrings(array) {
  let res = array.toString().trim().repeat(2);
  console.log(res);
}

console.log("Завдання 7 ====================================");
printStrings([1, "two", 3, "four", 5]); // 1,two,3,four,51,two,3,four,5

// Завдання 8: Функція приймає масив рядків.
// За допомогою методу toString() перетворіть масив в рядок, та виясніть чи є в цьому рядку підрядок subString .

function concatenateStrings(array, subString) {
  let res = array.toString().includes(subString);
  console.log(res);
}

console.log("Завдання 8 ====================================");
concatenateStrings([1, "two", 3, "four", 5], "two"); // Виведе true

// Завдання 9: Функція приймає масив чисел.
// За допомогою циклу for-in переберіть масив, додайте до кожного елемента 10.
// Зберігайте результат в новому масиві. Результат виведіть на консоль.
function addTenToEach(array) {
  let addTenArray = new Array(array.length);
  for (const key in array) {
    addTenArray[key] = array[key] + 10;
  }
  // Ініціалізуємо масив через конструктор з такою же кількістю елементів як в вхідному масиві для зберігання результату
  // Перебираємо масив за допомогою циклу for-in
  // Додаємо до поточного елемента 10 та додаємо результат в новий масив
  // Виводимо результат
  console.log(addTenArray);
}

console.log("Завдання 9 ====================================");
addTenToEach([5, 10, 15, 20]); // Виведе [15, 20, 25, 30]

// Завдання 10: Створити функцію, яка приймає масив чисел як аргумент.
function swapMinMax(array) {
  let min = array[0];
  let max = array[0];
  let minIndex = 0;
  let maxIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
      minIndex = i;
    } else if (max < array[i]) {
      max = array[i];
      maxIndex = i;
    }
    [array[minIndex]] = [array[maxIndex]];
  }
  return array;
}

console.log("Завдання 10 ====================================");
// Виводимо в консоль результат виклику функції swapMinMax з масивом [1, 2, 3, 4, 5] як аргументом. Очікуємо бачити [5, 2, 3, 4, 1], оскільки максимальне та мінімальне значення обміняні місцями.
console.log(swapMinMax([1, 2, 3, 4, 5]));

// Завдання 11: Функція приймає масив чисел. Поверніть новий масив, який містить тільки парні числа з оригінального масиву.
function getEvenNumbers(arr) {
  let evenArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArray[i] = arr[i];
    }
  }
  return evenArray;
}
console.log("Завдання 11 ====================================");
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Виведе [2, 4, 6]

// Завдання 12: Функція приймає масив чисел. Поверніть новий масив, в якому всі числа помножені на їх індекс.
function multiplyByIndex(arr) {
  let multArray = [];
  for (let i = 0; i < arr.length; i++) {
    multArray[i] = arr[i] * i;
  }
  return multArray;
}
console.log("Завдання 12 ====================================");
console.log(multiplyByIndex([1, 2, 3, 4, 5])); // Виведе [0, 2, 6, 12, 20]

// Завдання 13: Функція приймає масив чисел. Повертає новий масив, в якому всі числа більші за 10 замінені на рядок "Greater than 10", а решта чисел замінені на рядок "Less than or equal to 10".
function replaceNumbers(arr) {
  let replArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      replArray[i] = "Greater than 10";
    } else {
      replArray[i] = "Less than or equal to 10";
    }
  }
  return replArray;
}

console.log("Завдання 13 ====================================");
console.log(replaceNumbers([5, 10, 15, 20])); // Виведе ["Less than or equal to 10", "Less than or equal to 10", "Greater than 10", "Greater than 10"]

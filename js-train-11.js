// Завдання: 1
/**
 * Функція `customSet` створює множину з масиву чисел та рядків, але видаляє всі елементи, які є числами.
 * arr - Масив, з якого створюється множина.
 * Повертаємо - Нову множину, яка містить лише рядкові елементи.
 */
function customSet(arr) {
  let set = new Set(arr);
  for (const item of set) {
    if (typeof item === "number") {
      set.delete(item);
    }
  }
  return set;
}
// Приклад використання функції customSet
console.log("Завдання: 1 ==============================");
console.log(customSet([1, "a", 2, "b", 3, "c"]));
// Виведе: Set(3) { 'a', 'b', 'c' }

// Завдання: 2
/**
 * Функція `clearSet` очищає множину.
 * set - Множина, яку потрібно очистити.
 */
function clearSet(set) {
  if (set.size > 0) {
    set.clear();
    return "Множину очищено.";
  }
  return "Множина вже порожня.";
}

// Приклад використання функції clearSet
console.log("Завдання: 2 ==============================");

console.log(clearSet(new Set([1, 2, 3])));
// Виведе:
// Множину очищено.

// Завдання: 3
/**
 * Функція `addElements` додає елементи до множини з масиву, якщо вони ще не присутні у множині.
 * mySet - Множина, до якої будуть додані елементи.
 * arr - Масив з елементами, які потрібно додати до множини.
 * Повертаємо - Оновлену множину з новими елементами.
 */
function addElements(mySet, arr) {
  for (const iterator of arr) {
    mySet.add(iterator);
  }
  return mySet;
}

// Приклад використання функції addElements
console.log("Завдання: 3 ==============================");
console.log(addElements(new Set(["a", "b", "c"]), ["d", "e", "f"]));
// Виведе: Set(6) { 'a', 'b', 'c', 'd', 'e', 'f' }

// Завдання: 4
/**
 * Функція `filterAndAdd` видаляє з множини всі числові елементи та додає до множини унікальні значення з масиву,
 * якщо вони ще не присутні в множині. В результаті отримуємо множину, що містить лише рядкові значення.
 *
 * mySet - Множина, з якої будуть видалені числові елементи.
 * arr - Масив, з якого будуть додані унікальні елементи в множину.
 *
 * Повертаємо - Оновлену множину.
 */
function filterAndAdd(mySet, arr) {
  for (const item of mySet) {
    if (typeof item === "number") {
      mySet.delete(item);
    }
  }
  for (const item of arr) {
    mySet.add(item);
  }
  return mySet;
}

// Приклад використання функції filterAndAdd
console.log("Завдання: 4 ==============================");
console.log(filterAndAdd(new Set([1, 2, 3, "a", "b", "c"]), ["d", "e", "f"]));
// Виведе: Set(6) { 'a', 'b', 'c', 'd', 'e', 'f' }

// Завдання: 5

/**
 * Функція `checkValueAndType` перевіряє, чи містить множина певне значення та виводить його тип.
 *
 * mySet - Множина, в якій буде проводитися пошук.
 * value - Значення, яке потрібно знайти.
 *
 * Повертаємо - рядок із повідомленням про наявність значення та його тип.
 */
function checkValueAndType(mySet, value) {
  if (mySet.has(value)) {
    return `Множина має значення ${value} типу ${typeof value}.`;
  }
  return `Множина не має значення ${value}.`;
}
// Приклад використання функції checkValueAndType
console.log("Завдання: 5 ==============================");
console.log(checkValueAndType(new Set([1, 2, 3, "a", "b", "c"]), "b"));
// Виведе: Множина має значення "b" типу "string"

// Завдання: 6

/**
 * Функція `setToArray` конвертує множину в масив, видаляє з масиву всі числові елементи
 * та відсортовує рядкові елементи в алфавітному порядку.
 *
 * mySet - Множина, яку треба конвертувати в масив та обробити.
 *
 * Повертаємо - Відсортований масив із рядковими елементами.
 */
function setToArray(mySet) {
  let arr1 = [];
  let arr = [...mySet];
  arr.filter((el) => {
    if (typeof el === "string") {
      arr1.push(el);
    }
  });
  arr1.sort();
  return arr1;
  // Конвертуємо множину в масив за допомогою деструктурізації.
  // Використовуємо метод filter для створення нового масиву, що містить лише рядкові елементи.
  // Використовуємо метод sort для сортування рядкових елементів в алфавітному порядку.
  // Повертаємо оброблений масив.
}

// Приклад використання функції setToArray
console.log("Завдання: 6 ==============================");
console.log(setToArray(new Set([1, 2, 3, "b", "a", "c"])));
// Виведе: ['a', 'b', 'c']

// Завдання: 7

/**
 * Функція `removeDuplicatesInPlace` видаляє дублікати з масиву без створення нового масиву.
 * arr - Масив, з якого потрібно видалити дублікати.
 */
function removeDuplicatesInPlace(arr) {
  let set = new Set();
  for (let index = 0; index < arr.length; index++) {
    if (!set.has(arr[index])) {
      set.add(arr[index]);
    }
  }
  return set;
}

// Приклад використання функції removeDuplicatesInPlace
console.log("Завданя: 7 ==============================");

console.log(removeDuplicatesInPlace([1, 2, 2, 3, 3, 4, 5, 5]));
// Виведе: Set(5) { 1, 2, 3, 4, 5 }

// Завдання: 8

/**
 * Функція `areDisjoint` перевіряє, чи є дві множини неспільними (не мають спільних елементів).
 * set1 - Перша множина.
 * set2 - Друга множина.
 * Повертаємо - true, якщо множини не мають спільних елементів, інакше false.
 */
function areDisjoint(set1, set2) {
  for (const item of set1) {
    if (!set2.has(item)) {
      return true;
    }
  }
  return false; // Перебираємо першу множину за допомогою оператору for of
  // Якщо знайдено спільний елемент з другою множиною,використовуємо метод has, повертаємо false
  //Якщо немає  спільних елементів повертаємо true
}

// Приклад використання функції areDisjoint
console.log("Завдання: 8 ==============================");
console.log(areDisjoint(new Set([1, 2, 3]), new Set([3, 4, 5])));
// Виведе: false

// Завдання: 9

/**
 * Функція `getDifference` повертає множину, яка містить елементи, що належать першій множині, але не належать другій множині.
 * set1 - Перша множина.
 * set2 - Друга множина.
 * Повертаємо - Множина з елементами, що належать set1, але не належать set2.
 */
function getDifference(set1, set2) {
  let differenceSet = new Set();
  for (const item of set1) {
    if (!set2.has(item)) {
      differenceSet.add(item);
    }
  }
  return differenceSet;
}

// Приклад використання функції getDifference
console.log("Завдання: 9 ==============================");
console.log(getDifference(new Set([1, 2, 3, 4]), new Set([2, 3])));
// Виведе: Set(2) { 1, 4 }

// Завдання: 10

/**
 * Функція `getIntersection` повертає множину, яка містить спільні елементи двох масивів.
 * arr1 - Перший масив.
 * arr2 - Другий масив.
 * Повертаємо - Множина зі спільними елементами.
 */
function getIntersection(arr1, arr2) {
  const set = new Set(arr1.concat(arr2));
  let intersectionSet = new Set();
  for (const item of set) {
    if (!intersectionSet.has(item)) {
      intersectionSet.add(item);
    }
  }
  return intersectionSet;
}

// Приклад використання функції getIntersection
console.log("Завдання: 10 ==============================");
console.log(getIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
// Виведе: Set(2) { 3, 4 }

// Завдання: 11

/**
 * Функція `iterateSet` виконує ітерацію по множині та виводить ключі, значення та записи кожного елемента.
 * set - Множина, яку потрібно пройтись.
 */
function iterateSet(set) {
  let iter = set.keys();
  for (const item of iter) {
    console.log(item);
  }
  iter = set.values();
  for (const item of iter) {
    console.log(item);
  }
  iter = set.entries();
  for (const item of iter) {
    console.log(item);
  }
}

// Приклад використання функції iterateSet
console.log("Завдання: 11 ==============================");
iterateSet(new Set(["a", "b", "c"]));
// Виведе:
// a
// b
// c
// a
// b
// c
// [ 'a', 'a' ]
// [ 'b', 'b' ]
// [ 'c', 'c' ]

// Завдання: 12

/**
 * Функція `sumNumbers` рахує суму всіх числових елементів у множині.
 * set - Множина, у якій потрібно порахувати суму чисел.
 * Повертаємо - Суму числових елементів у множині.
 */
function sumNumbers(set) {
  let sum = 0;
  set.forEach((el) => {
    if (typeof el === "number") {
      return (sum += el);
    }
  });
  return sum;
}

// Приклад використання функції sumNumbers
console.log("Завдання: 12 ==============================");
console.log(
  "Сума чисел у множині:",
  sumNumbers(new Set([1, 2, "a", 3, "b", 4, 5]))
);
// Виведе: Сума чисел у множині: 15

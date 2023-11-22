//Завдання 1: Функція для створення символу
function createSymbol() {
  return Symbol();
}

console.log("Завдання 1 ====================================");
console.log(createSymbol()); // Виведе Symbol()

//Завдання 2: Функція для створення символу з описом та виведення опису
function createSymbolWithDescription(property) {
  const ch = Symbol(property);
  return ch.description;
}

console.log("Завдання 2 ====================================");
console.log(createSymbolWithDescription("My symbol")); // Виведе My symbol

// Завдання 3: Створення властивостей об'єкту з використанням Symbol
// В даному завданні ми створимо властивість об'єкту, ключ якої буде символом.

// Створимо функцію, яка створює об'єкт з властивістю, ключ якої є символом
function createSymbolProperty(property) {
  const sym = Symbol();
  let obj = {};
  obj.sym = property;
  return obj;
}

console.log("Завдання 3 ====================================");
console.log(
  createSymbolProperty("Це властивість об'єкту з використанням символу")
); //Виведе { [Symbol()]: "Це властивість об'єкту з використанням символу" }

// Завдання 4. Перевіримо чи є символи унікальними
// Функція для створення двох символів з однаковим описом та порівнянням
function createAndCompareTwoSymbols(value) {
  const sym1 = Symbol(value);
  const sym2 = Symbol(value);
  return sym1 === sym2;
}

console.log("Завдання 4 ====================================");

console.log(createAndCompareTwoSymbols("My Symbol")); // Виведе false

// Завдання 5: Створення символу з використанням Symbol.for()

// Функція createSymbolForKey створює новий символ за допомогою Symbol.for() та повертає його
function createSymbolForKey(key) {
  const sym = Symbol.for(key);
  return sym;
}

// Функція compareSymbolsForKey порівнює два символи за допомогою оператора '==='
function compareSymbolsForKey(symbol1, symbol2) {
  return symbol1 === symbol2;
}

console.log("Завдання 5 ====================================");
let symbol5 = createSymbolForKey("myKey"); // Створюємо новий символ
let symbol6 = createSymbolForKey("myKey"); // Створюємо новий символ
console.log(compareSymbolsForKey(symbol5, symbol6)); //Виведе: true

// Завдання 6: Використання Symbol.keyFor(sym)

// Функція getSymbolKey приймає символ як аргумент та повертає ключ, який був використаний для його створення
function getSymbolKey(symbol) {
  return Symbol.keyFor(symbol);
}

console.log("Завдання 6 ====================================");
let symbolForKey = Symbol.for("myKey"); // Створюємо новий символ або отримуємо існуючий з глобального реєстру символів
console.log(getSymbolKey(symbolForKey)); // Виводимо ключ символу. Виведе: myKey

// Завдання 7: Використання Symbol.toString

function useSymbolToStringTag() {
  let myObject = {};
  myObject.Symbol = "CustomObject";
  return myObject.Symbol;
}

console.log("Завдання 7 ====================================");
console.log(useSymbolToStringTag()); //Виведе CustomObject

// Завдання 8: Використання Symbol.description

// Функція useSymbolDescription використовує властивість Symbol.description для отримання опису символу.

function useSymbolDescription() {
  let mySymbol = Symbol("mySymbol");
  let symbolDescription = mySymbol.description;
  return symbolDescription;
}

console.log("Завдання 8 ====================================");
console.log(useSymbolDescription()); //Виведе mySymbol

// Завдання 9: Використання Symbol.iterator

// Об'єкт "myObject" представляє значення   from: 1, to: 7, які можна перебрати
let rangeObject = {
  from: 1,
  to: 7,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    return this.current < this.to
      ? {
          done: false,
          value: this.current++,
        }
      : { done: true };
  },
};

// Функція "useSymbolIterator" використовує ітератор для отримання значень об'єкта
function useSymbolIterator(obj) {
  let result = [];
  for (let item of obj) {
    result[item - 1] = item;
  }
  return result;
}

console.log("Завдання 9 ====================================");
console.log(useSymbolIterator(rangeObject)); //Виведе [ 1, 2, 3, 4, 5, 6 ]

// Завдання 10: Використання Symbol.iterator
let value;
// Оголошення об'єкта "myObject" з властивістю "category"
let myObject = {
  //Cтворюємо масив category
  category: [
    { id: 1, name: "apple" }, // Об'єкт категорії з ідентифікатором 1 та назвою "apple"
    { id: 2, name: "banana" }, // Об'єкт категорії з ідентифікатором 2 та назвою "banana"
    { id: 3, name: "orange" }, // Об'єкт категорії з ідентифікатором 3 та назвою "orange"
    { id: 4, name: "grape" }, // Об'єкт категорії з ідентифікатором 4 та назвою "grape"
    { id: 5, name: "mango" }, // Об'єкт категорії з ідентифікатором 5 та назвою "mango"
  ],
  currentIndex: 0,
  [Symbol.iterator]() {
    return this;
  },
  /* next() {
    if (this.currentIndex < this.category.length) {
      value = this.category[this.currentIndex].name;
      this.currentIndex++;
      return { value: value, done: false };
    } else {
      return { done: true };
    }
  }, */
  next() {
    return this.currentIndex < this.category.length
      ? {
          done: false,
          value: this.category[this.currentIndex++].name,
        }
      : { done: true };
  },
};
function useSymbolIterator1(obj) {
  let res = [];
  const iterator = obj[Symbol.iterator]();
  do {
    result = iterator.next();
    res[obj.currentIndex - 1] = result.value;
  } while (!result.done);
  console.log(res);
}
console.log("Завдання 10 ====================================");
useSymbolIterator1(myObject); //Виведе [ 'apple', 'banana', 'orange', 'grape', 'mango' ]

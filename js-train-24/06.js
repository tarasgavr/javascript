// Функція task1 не приймає жодних аргументів
function task1() {
  /**
   * Функція `getData` симулює отримання даних з асинхронного джерела,такого як запит до бази даних або API.
   *
   *  data - вхідні дані.
   *  timeout - час в мілісекундах, який витрачається на отримання даних,за замовчуванням 2000мс.
   */
  function getData(data, timeout = 2000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Object.keys(data).length
          ? resolve(data)
          : reject(Error("Об'єкт пустий"));
      }, timeout);
    });
  }
  const promise1 = new getData({ name: "John", age: 30, city: "New York" });

  promise1
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("Завдання 1 завершено");
    });
}

// Викликаємо функцію task1
task1();
console.log("Завдання: 1 ==============================");

// Створюємо функцію task2
function task2() {
  function promise1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Проміс 1 виконано");
      }, 2000);
    });
  }
  function promise2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Проміс 2 виконано");
      }, 5000);
    });
  }
  const test = Promise.race([promise1, promise2]);
  test
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("Завдання 2 завершено");
    });
}

// Викликаємо функцію task2
task2();
console.log("Завдання: 2 ==============================");
/*
  console.log("Завдання: 3 ==============================");

// Створюємо функцію task3, в якій буде виконуватися завдання
function task3() {
  function promise1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Проміс 1 виконано");
      }, 1000);
    });
  }
  function promise2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Проміс 2 відхилено");
      }, 2000);
    });
  }
  const test = Promise.allSettled([promise1, promise2]);
  test
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("Завдання 3 завершено");
    });
  promise2()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Викликаємо функцію task3
task3();

console.log("Завдання: 4 ==============================");

// Функція task4, яка буде використовувати проміси
function task4() {
  function promise1() {
    return new Promise(function executor(resolve, reject) {
      setTimeout(() => {
        resolve("Проміс 1 виконано");
      }, 1000);
    });
  }
  function promise2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Проміс 2 виконано");
      }, 2000);
    });
  }
  const test = Promise.allSettled([promise1, promise2]);
  test
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("Завдання 4 завершено");
    });
  // Визначаємо другий проміс з іменем promise2
  // Функція promise2, повертає новий проміс
  // Використовуємо функцію setTimeout, щоб симулювати асинхронну операцію з затримкою 1сек
  // Після 1 секунди викликаємо функцію resolve, яка змінює стан проміса на "виконано" і передає значення 'Проміс 2 виконано'
  // Promise.all приймає масив промісів і повертає новий проміс, який вирішується, коли всі вхідні проміси вирішені
  // Функція then викликається, коли проміс вирішений
  // Результати всіх вхідних промісів передаються у функцію then у вигляді масиву, виводимо в консоль масив
  // ['Проміс 1 виконано', 'Проміс 2 виконано']
  // Функція catch викликається, коли будь-який з промісів відхилено
  // Повідомлення про помилку від першого відхиленого проміса передається у функцію catch, виводимо в консоль помилку
  // Функція finally викликається незалежно від того, чи вирішено проміс, чи відхилено
  // Виводимо в консоль "Всі операції завершено"
}

// Викликаємо функцію task4
task4();

console.log("Завдання: 5 ==============================");

// Створюємо функцію task5, яка буде використовувати проміси.
function task5() {
  // Створюємо змінну counter яка буде лічильником та присвоюємо значення 0
  // Створюємо проміс з іменем intervalPromise.
  // Використовуємо функцію setInterval, щоб імітувати асинхронну операцію яка повторюється кожну секунду
  // збільшуючи лічильник на 1
  // Виводимо в консоль `Значення лічильника: ${counter}`
  // Коли лічильник досягає 5, використовуємо clearInterval та викликаємо resolve, який повертає значення лічильника.
  // Використовуємо .then метод для отримання значення, яке було передане у функцію resolve() в нашому промісі, та виводимо його в консоль.
  // Використовуємо .catch метод для обробки випадків, коли проміс переходить в стан "rejected". Та виводимо в консоль помилку.
  // Обробляємо помилку, якщо вона виникне
  // Ми використовуємо .finally метод для виконання дій незалежно від того, в якому стані завершився наш проміс, та виводимо повідомлення "Завершення лічильника"
  // Виконуємо код після завершення проміса
}
// Викликаємо функцію task5
task5();

console.log("Завдання: 6 ==============================");

// Створюємо функцію task6, яка використовує setImmediate та проміси.
function task6() {
  // Створюємо новий проміс.
  // Використовуємо функцію setImmediate, щоб виконати функцію асинхронно.
  // Генеруємо випадкове число від 0 до 1
  // Якщо випадкове число менше 0.5, резолвимо проміс з рядком Більше ніж 0.5.
  // Інакше відхиляемо проміс з рядком Менше ніж 0.5 .
  // Використовуємо then для обробки зарезолвленого проміса, та виводимо `Проміс зарезолвився з значенням: ${value}`.
  // Якщо проміс відхилено, обробляємо помилку за допомогою catch, та виводимо `Проміс відхилився з помилкою: ${error}`.
  // Використовуємо finally для виконання дій після завершення проміса, незалежно від його статусу, та виводимо "Проміс завершено".
}

// Викликаємо функцію task6
task6();

console.log("Завдання: 7 ==============================");

// Створюємо функцію task7, яка використовує setInterval та проміси.
function task7() {
  // Створюємо новий проміс.
  // Використовуємо функцію setInterval, щоб виконати функцію кожну секунду.
  // Отримаємо поточну дату та час
  // Отримуємо секунди з поточної дати
  // Виводимо в консоль повідомлення `Поточні секунди: ${seconds}`
  // Якщо поточні секунди кратні 10, очищуємо інтервал та резолвимо проміс з рядком "Поточні секунди кратні 10!".
  // Якщо поточні секунди кратні 3, очищуємо інтервал та відхиляємо проміс з рядком "Поточні секунди кратні 3!".
  // Використовуємо then для обробки зарезолвленого проміса, та виводимо в консоль `Проміс зарезолвився з значенням: ${value}` .
  // Якщо проміс відхилено, обробляємо помилку за допомогою catch, та виводимо в консоль `Проміс відхилився з помилкою: ${error}`.
  // Використовуємо finally для виконання дій після завершення проміса, незалежно від його статусу, та виводимо в консоль "Проміс завершено".
}

// Викликаємо функцію task7
task7();

console.log("Завдання: 8 ==============================");

function task8() {
  // Створюємо функцію fetchFakeData, яка симулює запит до сервера та повертає "дані" через Promise.resolve().
  // Створюємо fakeData константу з данними { name: "John",age: 30}
  // Використовуємо Promise.resolve(fakeData) для того, щоб створити вже зарезолвлений проміс.
  // Викликаємо функцію fetchFakeData
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
}

// Викликаємо функцію task8
task8();

console.log("Завдання: 9 ==============================");

function task9() {
  // Створюємо функцію fetchWithError, яка симулює помилку при запиті до сервера.
  // Створюємо константу errorMessage в яку записуємо рядок "Помилка при з'єднанні з сервером"
  // Використовуємо Promise.reject(errorMessage) для створення вже відхиленого промісу.
  // Викликаємо функцію fetchWithError
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
}

// Викликаємо функцію task10
task9();

console.log("Завдання: 10 ==============================");

function task10() {
  // Створюємо проміс promise1, які вирішуються через 500мс, та повертають як успішне виконання рядок "Promise 1".
  // Створюємо проміс promise2, які вирішуються через 200мс, та повертають як успішне виконання рядок "Promise 2".
  // Створюємо проміс promise3, які вирішуються через 300мс, та повертають як успішне виконання рядок "Promise 3".
  // Promise.any() приймає масив промісів які ми створили вище і вирішується, як тільки перший із цих промісів вирішується.
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
}

// Викликаємо функцію task10
task10(); */

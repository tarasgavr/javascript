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

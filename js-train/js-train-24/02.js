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

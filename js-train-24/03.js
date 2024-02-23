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
}

// Викликаємо функцію task3
task3();

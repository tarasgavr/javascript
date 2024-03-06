console.log("Завдання: 4 ==============================");

// Функція task4, яка буде використовувати проміси
function task4() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Проміс 1 виконано");
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Проміс 2 виконано");
  });
  const test = Promise.all([promise1, promise2]);
  test
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("Всі операції завершено");
    });
}

// Викликаємо функцію task4
task4();

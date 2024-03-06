console.log("Завдання: 6 ==============================");

// Створюємо функцію task6, яка використовує setImmediate та проміси.
function task6() {
  new Promise((resolve, reject) => {
    let randNum;
    setImmediate(() => {
      randNum = Math.random();
    });
    if (randNum < 0.5) {
      resolve("Більше ніж 0.5.");
    } else {
      reject("Менше ніж 0.5.");
    }
  })
    .then((value) => {
      console.log(`Проміс зарезолвився з значенням: ${value}`);
    })
    .catch((error) => {
      console.log(`Проміс відхилився з помилкою: ${error}`);
    })
    .finally(() => {
      console.log("Проміс завершено");
    });
}

// Викликаємо функцію task6
task6();

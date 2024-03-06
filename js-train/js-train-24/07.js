console.log("Завдання: 7 ==============================");

// Створюємо функцію task7, яка використовує setInterval та проміси.
function task7() {
  new Promise((resolve, reject) => {
    const timer = setInterval(() => {
      const tmp = new Date();
      const seconds = tmp.getSeconds();
      console.log(`Поточні секунди: ${seconds}`);
      if (seconds % 10 === 0) {
        clearInterval(timer);
        resolve("Поточні секунди кратні 10!");
      } else if (seconds % 3 === 0) {
        clearInterval(timer);
        reject("Поточні секунди кратні 3!");
      }
    }, 1000);
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

// Викликаємо функцію task7
task7();

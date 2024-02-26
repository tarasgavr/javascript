console.log("Завдання: 10 ==============================");

function task10() {
  const promise1 = new Promise((resolve, reject) => {
    setInterval(resolve, 500, "Promise 1");
  });
  const promise2 = new Promise((resolve, reject) => {
    setInterval(resolve, 200, "Promise 2");
  });
  const promise3 = new Promise((resolve, reject) => {
    setInterval(resolve, 300, "Promise 3");
  });
  Promise.any([promise1, promise2, promise3])
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Викликаємо функцію task10
task10();

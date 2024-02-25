console.log("Завдання: 5 ==============================");

// Створюємо функцію task5, яка буде використовувати проміси.
function task5() {
  let counter = 0;
  const intervalPromise = new Promise((resolve, reject) => {
    const timer = setInterval(() => {
      counter++;
      console.log(`Значення лічильника: ${counter}`);
      if (counter === 5) {
        clearInterval(timer);
        resolve(counter);
      }
    }, 1000);
  });
  intervalPromise
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("Завершення лічильника");
    });
}
// Викликаємо функцію task5
task5();

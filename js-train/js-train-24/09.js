console.log("Завдання: 9 ==============================");

function task9() {
  function fetchWithError() {
    errorMessage = "Помилка при з'єднанні з сервером";
    return Promise.reject(errorMessage);
  }
  fetchWithError()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Викликаємо функцію task10
task9();

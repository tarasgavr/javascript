console.log("Завдання: 8 ==============================");

function task8() {
  function fetchFakeData() {
    const fakeData = { name: "John", age: 30 };
    return Promise.resolve(fakeData);
  }
  fetchFakeData()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Викликаємо функцію task8
task8();

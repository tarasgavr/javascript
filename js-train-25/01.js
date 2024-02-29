//Завдання 1

// Оригінальна функція, яка повертає Promise.
function fetchFakeData() {
  const fakeData = {
    name: "John",
    age: 30,
  };
  return Promise.resolve(fakeData);
}
async function getData() {
  try {
    await fetchFakeData().then((result) => {
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
}
// Створюємо асинхронну функцію getData, яка використовує await для обробки Promise.
// Використовуємо try для обробки помилок
// Використовуємо await для очікування виконання Promise.
// Дані виводимо в консоль після отримання їх з Promise.
// Використовуємо catch для обробки будь-яких помилок, що виникли під час виконання Promise, та виводимо їх в консоль.

// Розкоментуйте після виконання завданння
console.log("Завдання: 1 ==============================");
// Викликаємо нашу асинхронну функцію.
getData();

//Завдання 5.
async function* asyncGenerator() {
  let i = 0;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  yield "Counter value";
}
const gen = asyncGenerator();
async function printFiveItems() {
  for (let item of gen) {
    console.log(item);
    if (item === 4) {
      break;
    }
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 5 ==============================");
printFiveItems();

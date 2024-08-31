//Завдання 5.
async function* asyncGenerator() {
  let i = 0;
  while (true) {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    yield i;
    i++;
  }
}
const gen = asyncGenerator();
async function printFiveItems() {
  for await (let item of gen) {
    console.log(`Counter value: ${item}`);
    if (item === 4) {
      break;
    }
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 5 ==============================");
printFiveItems();

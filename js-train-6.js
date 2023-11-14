//Завдання 1.Cтворіть об'єкт person за допомогою конструктора з полями name: "John",age: 25
let person = Object({ name: "John", age: 25 });

console.log("Завдання 1 ====================================");
console.log("person", person); // Виведе {name: "John", age: 25}

//Завдання 2. Cтворіть об'єкт personLarge який буде мати такі ж поля як person ,
// та вкладений об'єкт address з полями  street: "123 Main St", city: "New York", country: "USA",
let personLarge = {
  ...person,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};

console.log("Завдання 2 ====================================");
console.log("personLarge", personLarge); // Виведе
// personLarge {
//   name: 'John',
//   age: 25,
//   address: { street: '123 Main St', city: 'New York', country: 'USA' }
// }

//Завдання 3: Створіть функцію, що повертає новий об'єкт з тими ж властивостями, що й переданий у якості аргумента об'єкт.

var animal = {
  type: "Dog",
  breed: "Labrador Retriever",
};

// Функція для створення нового об'єкта з тими ж властивостями
function copyObject(obj) {
  obj = { ...obj };
  return obj;
}
console.log("Завдання 3 ====================================");
console.log("copyObject(animal)", copyObject(animal)); // Виведе { type: 'Dog', breed: 'Labrador Retriever' }

////Завдання 4. Перевірте наявність властивості в об'єкті за допомогою оператора in.
let fruit = {
  name: "Banana",
  color: "Yellow",
};
// Функція для перевірки наявності властивості в об'єкті
function hasProperty(obj, property) {
  if (property in obj) {
    return `Property ${property} exists.`;
  } else {
    return `Property ${property} does not exist.`;
  }
}

console.log("Завдання 4 ====================================");
console.log(hasProperty(fruit, "name")); // Виведе "Property name exists."
console.log(hasProperty(fruit, "taste")); // Виведе "Property taste does not exist."

// Завдання 5: Створіть функцію, що отримує об'єкт і виводить на консоль всі його ключі та значення.
let country = {
  name: "United States",
  capital: "Washington, D.C.",
};
// Функція для виведення всіх ключів і значень об'єкта
function printKeysAndValues(obj) {
  let str;
  for (const key in obj) {
    console.log(`Key: ${key}, Value: ${obj[key]}`);
  }
}

console.log("Завдання 5 ====================================");
printKeysAndValues(country);
// Виведе
// Key: name, Value: United States
// Key: capital, Value: Washington, D.C.

// Завдання 6: Видаліть властивість з об'єкта за допомогою оператора delete.
let movie = {
  title: "Inception",
  director: "Christopher Nolan",
};
// Функція для видалення властивості з об'єкта
function deleteProperty(obj, property) {
  delete obj[property];
  return obj;
}

console.log("Завдання 6 ====================================");
console.log(deleteProperty(movie, "director")); // Виведе { title: 'Inception' }

//Завдання 7: Використайте ключове слово this в об'єкті.
// Створюємо об'єкт
let user = {
  name: "John",
  age: 25,
  introduce: function () {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  },
};

console.log("Завдання 7 ====================================");
console.log(user.introduce());
// Виведе My name is John and I am 25 years old.

// Завдання 8: Створіть функцію, яка додає нове поле до об'єкту.
let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
};

// Функція для додавання нового поля до об'єкту
function addField(obj, newField, value) {
  obj[newField] = value;
  return obj;
}

console.log("Завдання 8 ====================================");
console.log(addField(book, "year", 1960)); // Виведе { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }

// Завдання 9: Деструктуруйте об'єкт в нові змінні.
let laptop = {
  brand: "Dell",
  model: "XPS 13",
};
// Функція для деструктуризації об'єкту
function destructureObject(obj) {
  let { brand, model } = laptop;
  return `Brand: ${brand}, Model: ${model}`;
}

console.log("Завдання 9 ====================================");
console.log(destructureObject(laptop)); // Виведе Brand: Dell, Model: XPS 13

// Завдання 10: Змініть значення полів об'єкту, що знаходяться в масиві об'єктів.

// Створюємо масив об'єктів userList, першим елементом якого буде об'єкт name:"Jack",role:"reader", а другим об'єкт name: "Jane", role: 'admin'

let userList = [
  { name: "Jack", role: "reader" },
  { name: "Jane", role: "admin" },
];
// Функція для зміни ролі всіх осіб у масиві
function changeRole(array, newRole) {
  for (const items of array) {
    items.role = newRole;
    console.log(items);
  }
}

console.log("Завдання 10 ====================================");
changeRole(userList, "editor");
// Виведе
// { name: 'Jack', role: 'editor' }
// { name: 'Jane', role: 'editor' }

// Завдання 11: Використовуйте вкладені об'єкти для зберігання більш складної інформації.
// Створюємо об'єкт з вкладеним об'єктом
let product = {
  productName: "Smartphone",
  price: 699,
  manufacturer: {
    companyName: "Tech Corp",
    country: "USA",
  },
};
// Функція для виводу деталей людини
function printProductDetails(obj) {
  let {
    productName,
    price,
    manufacturer: { companyName, country },
  } = obj;
  console.log(productName + " " + price + " " + companyName + " " + country);
}

console.log("Завдання 11 ====================================");
printProductDetails(product); // Виведе Smartphone 699 Tech Corp USA

// Завдання 12: Показати, що об'єкти будуть дорівнювати один одному лише тоді, коли одному об'єкту присвоїти значення іншого.
// Створіть об'єкт два об'єкти planet1 та planet2 з полями   name: "Земля",radius: 6371,

let planet1 = { name: "Земля", radius: 6371 };
let planet2 = { name: "Земля", radius: 6371 };

// Функція для перевірки рівності об'єктів
function compareObjects(obj1, obj2) {
  // Виводимо результат порівняння об'єктів
  // Присвоємо obj2 значення об'єкту obj1
  // Виводимо результат порівняння об'єктів
}

console.log("Завдання 12 ====================================");
compareObjects(planet1, planet2); // Виведе
//false
//true

// Завдання 13: Використовуйте деструктуризацію зі значенням за замовчуванням у аргументах функції для об'єкта.
let car = {
  brand: "BMW",
  year: 2022,
};
// Створюємо функцію, яка приймає об'єкт як аргумент і використовує деструктуризацію зі значенням за замовчуванням
// brand за замовчуванням призначемо Unknown, year за замовчуванням призначемо 0, country за замовчуванням призначемо Unknown

function showCarInfo({
  brand = "Unknown",
  year = 0,
  country = "Unknown",
} = {}) {
  // Повертаємо об'єкт зі значеннями властивостей
}

console.log("Завдання 13 ====================================");
console.log(showCarInfo(car)); // Виведе { brand: 'BMW', year: 2022, country: 'Unknown' }

// Завдання 14: Додайте нову властивість до вбудованого об'єкту Array через літерал.
// Створюємо функцію, яка буде додавати нову властивість до масиву
function addProperty(array) {
  // Додаємо нову властивість customProperty до прототипу Array зі значенням myProperty
  // Повертаємо переданий масив з новою властивістю
}

console.log("Завдання 14 ====================================");
// Створимо масив newArr з новою властивістю за допомогої нашої функції в яку передамо [1, 2, 3, 4, 5]

// Розкоментуйте рядок нижче після виконня завдання для перевірки
// console.log(newArr.customProperty); // Виведе myProperty

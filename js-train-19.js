// 1. Створення базового об'єкту "Book":
let Book = {
  title: "Загальна Книга",
  author: "Анонім",
  pages: 0,
  read() {
    console.log(`Ви читаєте ${this.title} від ${this.author}`);
  },
};

console.log("Завдання: 1 ==============================");
console.log(Book);
console.log(Object.getPrototypeOf(Book));
Book.read();

// 2. Наслідування від базового об'єкту Book
let Novel = Object.create(Book);
Novel.genre = "Новела";
console.log("Завдання: 2 ==============================");
console.log(Novel);
console.log(Object.getPrototypeOf(Novel));

// 3. Створення нового об'єкту та зміна його прототипу
let Biography = {
  title: "Загальна Біографія",
  author: "Біограф",
  pages: 200,
};
Object.setPrototypeOf(Biography, Novel);
console.log("Завдання: 3 ==============================");
console.log(Biography);
if (Novel.isPrototypeOf(Biography)) {
  console.log(Object.getPrototypeOf(Biography));
}
// 4. Інкапсуляція властивості та додання властивості
/*
 * Об'єкт: ScienceBook
 * Властивості та функції наслідуються від об'єкта Book
 * Також тут використовується інкапсуляція для створення властивості 'info', яка не може бути змінена напряму, а лише змінюється за допомогю гетера
 */

let ScienceBook = Object.create(Book);
Object.defineProperty(ScienceBook, "info", {
  configurable: false,
  set(value) {
    this._info = value;
  },
  get() {
    return `Про книгу ${this.title}: ${this._info}`;
  },
});
// try {
//   delete ScienceBook.info;
// } catch (error) {
//   error.message = `Cannot assign to read only property 'info' of object '${Object}'`;
//   return error.message;
// }
// Зробимо щоб 'info' не можно було видалити або змінити, перевіримо і спробуємо присвоїти ій будь яке значення (це потрібно робити ззовні defineProperty),
// Отримаємо помилку Cannot assign to read only property 'info' of object '#<Object}'

// Далі створюємо сетер який присвоє властивості info значення яке отримує при виклику, помилку більше не отримуємо але при спробі вивести значення info отримуємо undefined

// Створимо гетер який буде нам повертати рядок: Про книгу <title>: <info>
// тепер все виводить коректно

// Заповнюємо об'єкт
// | Властивість | Значення             |
// |-------------|----------------------|
// | title       | "Фізика 101"         |
// | author      | "Альберт Ейнштейн"   |
// | info        | написана в 1915 році |

ScienceBook.title = "Фізика 101";
ScienceBook.author = "Альберт Ейнштейн";
ScienceBook.info = "написана в 1915 році";
console.log("Завдання: 4 ==============================");
console.log(ScienceBook.info);
console.log(Object.getOwnPropertyDescriptor(ScienceBook, "info"));
// Виводимо в консоль властивість info

// Виводимо в консоль налаштування властивости info

// 5. Поліморфізм: створення нового об'єкта та перевизначення його методу
/*
 * Об'єкт: Textbook
 * Властивості та функції наслідуються від об'єкта ScienceBook
 * Метод read() перевизначено для демонстрації поліморфізму,
 * має виводити "Ви читаєте підручник "<title>" від <author>. <info>"
 */

let Textbook = Object.create(ScienceBook);
(Textbook.read = function () {
  return `Ви читаєте підручник ${this.title} від ${this.author} ${this.info}`;
}),
  // Встановлюємо значення для Textbook
  // | Властивість | Значення                   |
  // |-------------|----------------------------|
  // | title       | "Фізика у Вищій Школі"     |
  // | author      | "Дж. Д. Джонс"             |
  (Textbook.title = "Фізика у Вищій Школі");
Textbook.author = "Дж. Д. Джонс";
console.log("Завдання: 5 ==============================");
console.log(Textbook.read());

// 6. Абстракція: створення об'єкта з загальними властивостями
let Media = {
  format: "Загальний Формат",
  length: 0,
  play() {
    console.log(
      `Зараз відтворюється медіа у форматі ${this.format} з тривалістю ${this.length} секунд`
    );
  },
};
let Song = Object.create(Media);

// Встановлюємо додаткові властивості
// | Властивість | Значення               |
// |-------------|------------------------|
// | artist      | "Загальний Виконавець" |
// | title       | "Загальна Пісня"       |
Song.artist = "Загальний Виконавець";
Song.title = "Загальна Пісня";
console.log("Завдання: 6 ==============================");
// Викликаємо функцію play об'єкту Song
console.log(Song.play());

// Одиночка (Singleton) — це патерн програмування, який забезпечує,
// що клас має тільки один екземпляр і надає глобальну точку доступу до цього екземпляра.

// Клас OrderTracker відповідає за відстеження замовлень
class OrderTracker {
  static #instance = null;
  static #orders = [];
  static create() {
    if (!this.#instance) {
      this.#instance = new OrderTracker();
    }
    return this.#instance;
  }
  static add(item) {
    this.#orders.push(item);
  }
  static get() {
    return this.#orders;
  }
}
console.log("Завдання 1 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо єдиний екземпляр класу OrderTracker
const tracker = OrderTracker.create();

// Додаємо замовлення до списку
OrderTracker.add("Телефон");
OrderTracker.add("Ноутбук");

// Отримуємо список замовлень
const orders = OrderTracker.get();

// Виводимо список замовлень в консоль
console.log(orders);

// Фабрика (Factory) — це патерн програмування, який надає загальний клас для створення об'єктів, який враховує
// передані аргументи та вирішує який клас повинен мати об’єкт при створенні
// Клас Book описує книгу в магазині
class Book {
  constructor({ title, author, coverColor }) {
    this.title = title;
    this.author = author;
    this.coverColor = coverColor;
  }
  describe() {
    return `Книга: ${this.title}, автор: ${this.author}, колір обкладинки: ${this.coverColor}`;
  }
}

/**
 * Клас AudioBook описує аудіокнигу в магазині
 */
class AudioBook {
  constructor({ title, author, audioLength }) {
    this.title = title;
    this.author = author;
    this.audioLength = audioLength;
  }
  describe() {
    return `Аудіокнига: ${this.title}, автор: ${this.author}, тривалість: ${this.audioLength}`;
  }
}

/**
 * Клас ProductFactory використовується для створення об'єктів-продуктів.
 */

class ProductFactory {
  static TYPE = {
    BOOK: "book",
    AUDIOBOOK: "audiobook",
  };

  static createProduct(type, options) {
    switch (type) {
      case this.TYPE.BOOK:
        return new Book(options);
      case this.TYPE.AUDIOBOOK:
        return new AudioBook(options);
      default:
        throw new Error(`Такого типу продукту не існує: ${type}`);
    }
  }
}
console.log("Завдання 2 ====================================");
// Після виконання розкоментуйте код нижче

// Використовуємо ProductFactory для створення нової книги
const factoryBook = ProductFactory.createProduct(ProductFactory.TYPE.BOOK, {
  title: "Назва книги",
  author: "Автор книги",
  coverColor: "Синій",
});

// Виводимо в консоль опис нової книги
console.log(factoryBook.describe());

// Використовуємо ProductFactory для створення нової аудіокниги
const factoryAudiobook = ProductFactory.createProduct(
  ProductFactory.TYPE.AUDIOBOOK,
  {
    title: "Назва аудіокниги",
    author: "Автор аудіокниги",
    audioLength: "5 годин",
  }
);

// Виводимо в консоль опис нової аудіокниги
console.log(factoryAudiobook.describe());

// Спробуємо створити продукт непідтримуваного типу
try {
  const factoryUnknown = ProductFactory.createProduct("comics", {});
} catch (error) {
  // Виводимо помилку в консоль
  console.error(error.message);
}

// Спостерігач (Observer) — це патерн програмування, який визначає залежність "один-багато" між об'єктами, так що зміна стану одного об'єкта
// призводить до автоматичного оновлення всіх залежних об'єктів
/**
 * Клас Customer представляє клієнта, що має можливість отримувати повідомлення по електронній пошті.
 * Клієнт ідентифікується своєю електронною адресою, яку використовується для відправки повідомлень.
 */
class Customer {
  constructor(email) {
    this.email = email;
  }
  sendMail(message) {
    console.log(
      ` Bідправлення повідомлення ${message} по електронній пошті ${this.email}.`
    );
  }
}

/**
 * Клас Product представляє продукт, який можна створювати.
 */
class Product {
  constructor(name) {
    this.name = name;
  }
}

/**
 * Клас Store представляє магазин, який може мати підписників і створювати нові продукти.
 * Магазин має назву і список підписників, які отримують повідомлення про нові продукти.
 */
class Store {
  customers = [];
  constructor(name) {
    this.name = name;
  }
  subscribe(customer) {
    this.customer = customer;
    this.customers.push(customer);
  }
  unsubscribe(customer) {
    this.customers.filter((item, id) => {
      if (item === customer) {
        this.customers.splice(id, 1);
      }
    });
  }
  createProduct(name) {
    const product = new Product(name);
    this.sendNoify(product);
  }
  sendNoify(product) {
    this.customers.forEach((element) => {
      element.sendMail(
        `Новий продукт "${product.name}" в магазині ${this.name}!`
      );
    });
  }
}

console.log("Завдання 3 ====================================");
// Після виконання розкоментуйте код нижче

const store = new Store("IT Supermarket");

const customer1 = new Customer("john@example.com");
const customer2 = new Customer("jane@example.com");
const customer3 = new Customer("alice@example.com");

store.subscribe(customer1);
store.subscribe(customer2);
store.subscribe(customer3);

store.createProduct("Новий ноутбук");

store.unsubscribe(customer1);

store.createProduct("Бездротові навушники");

// Декоратор (Decorator) — це патерн програмування, який додає нову функціональність до існуючих об'єктів, не змінюючи їхньої структури.
// Іншими словами, він дозволяє розширити функціональність об'єкта, не змінюючи сам об'єкт.

// Клас Drink представляє основний напій, який можна приготувати.
// Цей клас містить базову вартість напою (price=10) та його ім'я (name="Чай").
class Drink {
  price = 10;
  name = "Чай";
  prepare() {
    console.log(`Приготування ${this.name}`);
  }
}

// Клас HoneyDecorator є декоратором, який додає мед до напою.
class HoneyDecorator {
  constructor(drink, amount) {
    this.drink = drink;
    this.amount = amount;
  }
  get name() {
    return `${this.drink.name} з ${this.amount} г меду`;
  }
  get price() {
    return this.drink.price + this.amount * 0.5;
  }
  prepare() {
    console.log(`Приготування ${this.name}`);
  }
}
console.log("Завдання 4 ====================================");
// Після виконання розкоментуйте код нижче

// Створення об'єкту базового напою (чаю)
let tea = new Drink();
console.log(tea.name); // Виводить ім'я напою
console.log(tea.price); // Виводить вартість напою
tea.prepare(); // Готує напій

let honeyTea = new HoneyDecorator(tea, 2); // Додаємо 2 грами меду
console.log(honeyTea.name); // Виводить нову назву напою
console.log(honeyTea.price); // Виводить нову вартість напою
honeyTea.prepare(); // Готує напій з медом

// Мементо (Memento) — це патерн програмування, який забезпечує збереження стану об'єкта для подальшого відновлення

// Клас Writer відповідає за роботу з текстом.
class Writer {
  #content = "";
  set content(newContent) {
    this.#content = newContent;
    this.#store();
  }
  get content() {
    return this.#content;
  }
  #store() {
    Version.create(this.#content);
  }
  restore() {
    this.#content = Version.restore().content;
  }
}

// Клас Version відповідає за створення та зберігання версій тексту.
class Version {
  static #versions = [];
  constructor(content) {
    this.content = content;
  }
  static create(content) {
    const text = new Version(content);
    this.#versions.push(text);
  }
  static restore() {
    this.#versions.pop();
    return this.#versions[this.#versions.length - 1];
  }
}
console.log("Завдання 5 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо новий екземпляр класу Writer
const writer = new Writer();

// Присвоюємо текст за допомогою сетера
writer.content = "Це початковий текст.";
writer.content = "Редагований текст.";
writer.content = "Оновлений текст.";

// Друкуємо поточний текст
console.log(writer.content);

// Відновлюємо попередній текст
writer.restore();
console.log(writer.content);

// Ще раз відновлюємо попередній текст
writer.restore();
console.log(writer.content);

// Ланцюжок відповідальності (Chain of Responsibility) — це паттерн програмування, який дозволяє передавати запити послідовно через ланцюжок обробників, кожен з яких може обробити або передати запит далі.

//AuthProcessor клас для обробки аутентифікації.
class AuthProcessor {
  setNextProcessor(processor) {
    this.nextProcessor = processor;
    return processor;
  }
  validate(username, passkey) {
    if (this.nextProcessor) {
      return this.nextProcessor.validate(username, passkey);
    } else {
      return false;
    }
  }
}

// TwoStepProcessor Клас обробника, який перевіряє двофакторний код. Наслідує базовий клас AuthProcessor.
class TwoStepProcessor extends AuthProcessor {
  validate(username, passkey) {
    if (
      username === "john" &&
      passkey === "password" &&
      this.isValidTwoStepCode()
    ) {
      console.log("Вхід дозволено з двофакторною аутентифікацією");
      return true;
    } else {
      return super.validate(username, passkey);
    }
  }
  isValidTwoStepCode() {
    return true;
  }
}

// RoleProcessor Клас обробника, який перевіряє ролі користувача. Наслідує базовий клас AuthProcessor.
class RoleProcessor extends AuthProcessor {
  validate(username, passkey) {
    if (username === "guest") {
      console.log("Вхід дозволено з роллю гостя");
      return true;
    } else {
      return super.validate(username, passkey);
    }
  }
}

// CredentialsProcessor Клас обробника, який перевіряє облікові дані користувача. Наслідує базовий клас AuthProcessor.
class CredentialsProcessor extends AuthProcessor {
  validate(username, passkey) {
    if (username === "admin" && passkey === "admin123") {
      console.log("Вхід дозволено за обліковими даними");
      return true;
    } else {
      return super.validate(username, passkey);
    }
  }
}

// Клас Builder для створення об'єкта ланцюга обробників.
class ProcessorBuilder {
  constructor() {
    this.firstProcessor = null;
    this.lastProcessor = null;
  }
  add(processor) {
    if (!this.firstProcessor) {
      this.firstProcessor = processor;
      this.lastProcessor = processor;
    } else {
      this.lastProcessor.setNextProcessor(processor);
      this.lastProcessor = processor;
    }
    return this;
  }
  create() {
    return this.firstProcessor;
  }
}
console.log("Завдання 6 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо Builder для ланцюга обробників.
const processorBuilder = new ProcessorBuilder();

// Додаємо обробники в ланцюг за допомогою builder'а.
const processor = processorBuilder
  .add(new CredentialsProcessor())
  .add(new TwoStepProcessor())
  .add(new RoleProcessor())
  .create();

// Перевіряємо користувачів за допомогою нашого ланцюга обробників.
processor.validate("admin", "admin123"); // Вхід дозволено за обліковими даними
processor.validate("john", "password"); // Вхід дозволено з двоступінчастою аутентифікацією
processor.validate("guest", "guest123"); // Вхід дозволено з роллю гостя
processor.validate("user", "password"); // Вхід заборонено

// Міст (Bridge) — це паттерн програмування, який дозволяє розмістити абстракцію і реалізацію в окремі класи, дозволяючи їм мати незалежний функціонал

// Клас Participant представляє користувача, який може відправляти повідомлення.
class Participant {
  constructor(alias, communicator) {
    this.alias = alias;
    this.communicator = communicator;
  }
  dispatchMessage(text) {
    const preparedMessage = this.prepareMessage(text);
  }
  prepareMessage(text) {
    console.log(`[${this.alias}]: ${text}`);
  }
}

// Клас SMSCommunicator відповідає за відправку повідомлень через SMS.
class SMSCommunicator {
  transmitSMS(message) {
    console.log(`Відправлено SMS: ${message}`);
  }
}

// Клас EmailCommunicator відповідає за відправку повідомлень через Email.
class EmailCommunicator {
  transmitEmail(message) {
    console.log(`Відправлено Email: ${message}`);
  }
}

console.log("Завдання 7 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо двох користувачів - Max та Linda - які відправляють повідомлення за допомогою різних засобів комунікації.
const max = new Participant("Max", SMSCommunicator);
const linda = new Participant("Linda", EmailCommunicator);

// Max відправляє повідомлення через SMS.
max.dispatchMessage("Hello!"); // Виведе: Відправлено SMS: [Max]: Hello!

// Linda відправляє повідомлення через Email.
linda.dispatchMessage("Hello!"); // Виведе: Відправлено Email: [Linda]: Hello!

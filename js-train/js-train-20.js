/*
 * Функція конструктор: Vehicle
 * Властивості:
 * --------------------------------------
 * | Аргументи  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 */

// Створюємо функцію конструктор Vehicle.
function Vehicle(brand, model, year, mileage) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
}
Vehicle.prototype.toString = function () {
  return `${this.brand} ${this.model} ${this.year}`;
};
Vehicle.prototype.valueOf = function () {
  return `${this.mileage}`;
};

/*
 * Функція конструктор: Car
 * Властивості:
 * ----------------
 * | Властивість  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 * | fuelType     |
 * | speed        |
 */

//Створюємо Car - це ще один конструктор, який наслідує властивості і методи з Vehicle за допомогою функції apply.
function Car(brand, model, year, mileage, fuelType, speed) {
  Vehicle.apply(this, [brand, model, year, mileage]);
  this.fuelType = fuelType;
  this.speed = speed;
}
Car.prototype.toString = function () {
  return `${this.brand} ${this.model} ${this.year} - ${this.fuelType}`;
};
const car = new Car("Audi", "A6", 2018, 30000, "Petrol", 0);
car.accelerate = function (speed) {
  this.speed += speed;
  console.log(
    `Автомобіль ${this.brand} ${this.model} прискорився до швидкості ${this.speed} км/год`
  );
};
car.brake = function (speed) {
  this.speed -= speed;
  console.log(
    `Автомобіль ${this.brand} ${this.model} сповільнився до швидкості ${this.speed} км/год`
  );
};
console.log(car.toString());
console.log(car.valueOf());
car.accelerate(50);
car.brake(20);
// Створюємо новий екземпляр об'єкта Car
/*
 * Екземпляр об'єкту: Car
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Значення           |
 * |--------------|---------------------|
 * | brand        |  "Audi"             |
 * | model        |  "A6"               |
 * | year         |  2018               |
 * | mileage      |  30000              |
 * | fuelType     |  "Petrol"           |
 * | speed        |  0                  |
 */

// Викличемо функції toString та valueOf об'єкта car

// Використовуємо методи для прискорення та передаємо 50

// Використовуємо методи для гальмування та передаємо 20

/*
 * Функція конструктор Truck
 * Властивості:
 * --------------------
 * | Властивість      |
 * |------------------|
 * | brand            |
 * | model            |
 * | year             |
 * | mileage          |
 * | color            |
 * | engineType       |
 * | towingCapacity   |
 * | fuelType         |
 * | transmissionType |
 * | doors            |
 * | weight           |
 */

// Конструктор Truck наслідуємо Vehicle викликавши його в конструкторі з call
function Truck(
  brand,
  model,
  year,
  mileage,
  color,
  engineType,
  towingCapacity,
  fuelType,
  transmissionType,
  doors,
  weight
) {
  Vehicle.call(this, brand, model, year, mileage, fuelType);
  this.color = color;
  this.engineType = engineType;
  this.towingCapacity = towingCapacity;
  this.transmissionType = transmissionType;
  this.doors = doors;
  this.weight = weight;
}
const myTruck = new Truck(
  "Toyota",
  "Tundra",
  2019,
  20000,
  "Red",
  "V8",
  10000,
  "Gasoline",
  "Automatic",
  4,
  5000
);
myTruck.specific = function (num) {
  if (num > this.towingCapacity) {
    console.log(`Навантаження занадто важке для буксирування`);
  } else {
    console.log("Тягнення навантаження...");
  }
};
myTruck.specific(15000);
myTruck.specific(5000);
Car.prototype.drive = function (kilometers) {
  console.log(
    `Подорожуємо ${kilometers} кілометрів у ${this.brand} ${this.model}.`
  );
};
Car.bind(car);
car.drive(100);
/*
 * Функція конструктор: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість   |
 * |---------------|
 * | brand         |
 * | model         |
 * | year          |
 * | mileage       |
 * | batteryCapacity|
 */

function ElectricCar(brand, model, year, mileage, batteryCapacity) {
  if (!new.target) {
    throw "Конструктор має бути викликаний з 'new'";
  }
  Car.call(this, brand, model, year, mileage);
  this.batteryCapacity = batteryCapacity;
}
ElectricCar.prototype.toString = function () {
  return `${this.brand} ${this.model} ${this.year} - ${this.batteryCapacity}`;
};
// Створюємо новий екземпляр ElectricCar
/*
 * Екземпляр об'єкту: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість     | Значення          |
 * |-----------------|-------------------|
 * | brand           | Tesla             |
 * | model           | Model S           |
 * | year            | 2020              |
 * | mileage         | 10000             |
 * | batteryCapacity | 100               |
 */
const tesla = new ElectricCar("Tesla", "Model S", 2020, 10000, 100);

// Викликаємо метод toString об'єкту tesla та виводимо в консоль
console.log(tesla.toString());

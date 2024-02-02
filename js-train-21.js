/*
 * Клас: Musician
 * Статичні поля:
 * ------------------------
 * | Поле   |  Значення   |
 * |--------|-------------|
 * | count  |  0          |
 *
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Тип                |
 * |--------------|---------------------|
 * | #name        |  String             |
 * | #instrument  |  String             |
 *
 * Гетери:
 * ---------------------
 * | Гетер    |  Повертає |
 * |----------|-----------|
 * | name     |  string   |
 * | instrument | string  |
 *
 * Методи:
 * --------------------------
 * | Метод   |  Дія         |
 * |---------|--------------|
 * | play()  | Виводить рядок в консоль |
 */

class Musician {
  count = 0;
  #name = null;
  #instrument = null;
  constructor(name, instrument) {
    this.#name = name;
    this.#instrument = instrument;
    this.count += 1;
  }
  get name() {
    return String(this.#name);
  }
  get instrument() {
    return String(this.#instrument);
  }
  set name(newName) {
    this.name = newName;
  }
  set instrument(newInstrument) {
    this.#instrument = newInstrument;
  }
  play() {
    console.log(`${this.#name} грає на ${this.#instrument}`);
  }
}
/*
 * Клас: Guitarist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */

class Guitarist extends Musician {
  #band = null;
  constructor(name, instrument, band) {
    super(name, instrument);
    this.#band = band;
  }
  get band() {
    return String(this.#band);
  }
  set band(newBand) {
    this.#band = newBand;
  }
  joinBand(band) {
    this.#band = band;
  }
  play() {
    console.log(
      `${super.name} грає на ${super.instrument} в групі ${this.#band}`
    );
  }
}

/*
 * Клас: Bassist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 *
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */

class Bassist extends Musician {
  #band = null;
  constructor(name, instrument, band) {
    super(name, instrument);
    this.#band = band;
  }
  get band() {
    return String(this.#band);
  }
  set band(newBand) {
    this.#band = newBand;
  }
  joinBand(band) {
    this.#band = band;
  }
  play() {
    console.log(
      `${super.name} грає на ${super.instrument} в групі ${this.#band}`
    );
  }
}
Object.defineProperty(Musician.prototype, "band", function (newBand) {
  this.band = newBand;
});

/*
 * Клас: Band
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | members     |  array     |
 */

class Band {
  #name;
  #members;
  constructor(name, members = []) {
    this.#name = name;
    this.#members = members || [...Musician];
  }
  get name() {
    return String(this.#name);
  }
  get members() {
    return String(this.#members);
  }
  set name(newName) {
    this.#name = newName;
  }
  addMember(newMember) {
    if (Musician.isPrototypeOf(newMember)) {
      Musician.prototype.band = () => {
        this.#members.push(newMember);
      };
    } else {
      console.log("Новий учасник повинен бути екземпляром класу Musician");
    }
  }
  playMusic() {
    this.#members.forEach((element) => {
      element.play();
    });
  }
}

/*
 * Клас: Performance
 * ---------------------------
 * | Властивість |  Тип0       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 */
class Performance {
  #band;
  #location;
  #date;
  constructor(band, location, date) {
    this.#band = band;
    this.#location = location;
    this.#date = date;
  }
  get band() {
    return String(this.#band);
  }
  get location() {
    return String(this.#location);
  }
  get date() {
    return String(this.#date);
  }
  info() {
    console.log(
      `Гурт ${this.#band.name} виступить в ${
        this.#location
      } ${this.#date.toLocaleDateString()}`
    );
  }
}

/*
 * Клас: Concert
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 * | ticketPrice |  number    |
 */
class Concert extends Performance {
  #ticketPrice;
  constructor(band, location, date, ticketPrice) {
    super(band, location, date);
    this.#ticketPrice = ticketPrice;
  }
  get ticketPrice() {
    return String(this.#ticketPrice);
  }
  set ticketPrice(value) {
    this.#ticketPrice = value;
  }
  info() {
    console.log(
      `Гурт ${super.band.name} виступить в ${
        super.location
      } ${super.date.toString()}, ціна квитка ${this.#ticketPrice}`
    );
  }
}

/*
 * Клас: Vocalist
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 */
class Vocalist {
  #name;
  #band;
  constructor(name, band) {
    this.#name = name;
    this.#band = band;
  }
  get name() {
    return String(this.#name);
  }
  get band() {
    return String(this.#band);
  }
  set name(newName) {
    this.#name = newName;
  }
  set band(newBand) {
    this.#band = newBand;
  }
  info() {
    console.log(`Вокаліст ${this.name} є членом гурту ${this.band}`);
  }
}

/*
 * Клас: SongWriter
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | #songs       |  array     |
 */
class SongWriter {
  #songs = [];
  constructor(songs) {
    this.#songs = songs;
  }
  get songs() {
    return String(this.#songs);
  }
  addSong(song) {
    this.#songs.push(song);
  }
  info() {
    console.log(`Написав ${this.songs.length} пісень`);
  }
}

/*
 * Клас: LeadSinger
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 * | songs       |  array     |
 */

class LeadSinger extends Vocalist {
  constructor(name, band) {
    super(name, band);
  }
}
const musician = new Musician("John", "Guitarist");
/*
 * Створення musician екземпляра класу Musician
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "John"           |
 * | instrument  | "Guitarist"      |
 */
const guitarist = new Guitarist("Jimmy Page", "гітара", "Led Zeppelin");

/*
 * Створення guitarist екземпляра класу Guitarist
 * ---------------------------------------------------
 * | Властивість |  Значення         |
 * |-------------|-------------------|
 * | name        | "Jimmy Page"      |
 * | instrument  | "гітара"          |
 * | band        | "Led Zeppelin"    |
 */

const bassist = new Bassist("Paul McCartney", "бас-гітара", "The Beatles");
/*
 * Створення bassist екземпляра класу Bassist
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "Paul McCartney" |
 * | instrument  | "бас-гітара"     |
 * | band        | "The Beatles"    |
 */
const band = new Band("The Beatles", [bassist]);

// Створення band екземпляру класу Band
/*
 * Створення band екземпляра класу Band
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "The Beatles"    |
 * | members     | [bassist]       |
 */

band.addMember(guitarist);

const vocalist = new Vocalist("Freddie Mercury", "Queen");
/*
 * Створення vocalist екземпляра класу Vocalist
 * -------------------------------------
 * | Властивість |  Значення          |
 * |-------------|------------------|
 * | name        | "Freddie Mercury" |
 * | band        | "Queen"           |
 */

const songwriter = new SongWriter(["Yesterday", "Hey Jude", "Let It Be"]);
/*
 * Створення songwriter екземпляра класу SongWriter
 * -------------------------------------
 * | Властивість |  Значення          |
 * |-------------|------------------|
 * | songs       | ["Yesterday","Hey Jude","Let It Be",]|
 */

const performance = new Performance(band, "Liverpool", new Date("2023-08-01"));
// Створення performance екземпляра класу Performance
/*
 * ------------------------------------------------------
 * | Властивість |       Значення                       |
 * |-------------|--------------------------------------|
 * | band        | band                                 |
 * | location    | "Liverpool"                          |
 * | date        | new Date('2023-08-01')               |
 */

// використання Object.assign() для успадкування властивостей songwriter для LeadSinger.prototype

const concert = new Concert(band, "BBC studios", new Date("1994-07-06"), 100);
/*
 * Створення concert екземпляра класу Concert
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | band        | band             |
 * | location    | "BBC studios"    |
 * | date        | new Date("1994-07-06") |
 * | ticketPrice | 100              |
 */

const leadsinger = new LeadSinger("Mick Jagger", "The Rolling Stones", [
  "Yesterday",
  "Hey Jude",
  "Let It Be",
]);
/*
 * Створення leadsinger екземпляра класу LeadSinger
 * -------------------------------------
 * | Властивість |  Значення         |
 * |-------------|------------------|
 * | name        | "Mick Jagger"    |
 * | band        | "The Rolling Stones" |
 * | songs       | ["Yesterday","Hey Jude","Let It Be",]|
 */

// Методи для тестування розкоментувати після виконня всіх завдань
musician.play();
guitarist.play();
bassist.play();
band.playMusic();
performance.info();
concert.info();
vocalist.info();
songwriter.info();
leadsinger.info();

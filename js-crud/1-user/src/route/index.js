// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
class User {
  static #userList = []
  constructor(login, email, password) {
    this.login = login
    this.email = email
    this.password = password
  }
  static addUser = (user) => {
    this.#userList.push(user)
  }
  static getUserList = () => {
    return this.#userList
  }
  static deleteUser = (user) => {
    this.#userList.push(user)
  }
  static updateUser = (user) => {
    this.#userList.push(user)
  }
}
// ================================================================
// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  const list = User.getUserList()
  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('index', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'index',
    data: {
      users: {
        list,
        isEmpty: list.length === 0,
      },
    },
  })
  // ↑↑ сюди вводимо JSON дані
})

// ================================================================
// router.get Створює нам один ентпоїнт
// ↙️ тут вводимо шлях (PATH) до сторінки
router.post('/user-create', function (req, res) {
  // res.render генерує нам HTML сторінку
  const { login, email, password } = req.body
  const user = new User(login, email, password)
  User.addUser(user)
  console.log(req.body)
  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('user-create', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'user-create',
  })
  // ↑↑ сюди вводимо JSON дані
})

// Підключаємо роутер до бек-енду
module.exports = router

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
    const index = this.#userList.findIndex(
      (value) => value === user,
    )
    this.#userList.splice(index, 1)
  }
  static updateUser = (user) => {
    const index = this.#userList.findIndex(
      (value) => value === user,
    )
    this.#userList.splice(index, 1)
  }
}
// ================================================================

router.get('/', function (req, res) {
  const list = User.getUserList()
  res.render('index', {
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
router.post('/user-create', function (req, res) {
  const { login, email, password } = req.body
  const user = new User(login, email, password)
  User.addUser(user)
  res.render('user-create', {
    style: 'user-create',
  })
})
// ================================================================
router.post('/user-delete', function (req, res) {
  const { login, email, password } = req.body
  const user = new User(login, email, password)
  User.deleteUser(user)
  res.render('user-delete', {
    style: 'user-delete',
  })
})
// ================================================================
router.post('/user-update', function (req, res) {
  const { login, email, password } = req.body
  const user = new User(login, email, password)
  User.updateUser(user)
  res.render('user-update', {
    style: 'user-update',
  })
})

// Підключаємо роутер до бек-енду
module.exports = router

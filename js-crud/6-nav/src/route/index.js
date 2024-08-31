// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const  nav = require('./nav')
const  scroll = require('./scroll')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/nav',  nav)
router.use('/scroll',  scroll)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router

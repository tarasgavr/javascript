// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const  headerandslider = require('./headerandslider')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/headerandslider',  headerandslider)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router

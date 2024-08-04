// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const  todolist = require('./todolist')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/todolist',  todolist)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router

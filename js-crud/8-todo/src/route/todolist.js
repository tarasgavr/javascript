// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
router.get('/', function (req, res) { 
  res.render('todolist', {
    // вказуємо назву контейнера
    name: 'todolist',
    // вказуємо назву компонентів
    component: [],

    // вказуємо назву сторінки
    title: 'To-do list',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout
    todolist: {
      title: 'To-do list',
      input: {
        placeholder: '',
        button: '',
      },
      listItem: {
        
      },
    },
  // ↑↑ сюди вводимо JSON дані
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
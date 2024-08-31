// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
router.get('/header', function (req, res) { 
  res.render('header', {
    // вказуємо назву контейнера
    name: 'header',
    // вказуємо назву компонентів
    component: [],

    // вказуємо назву сторінки
    title: 'Header',
    // ... сюди можна далі продовжувати додавати  потрібні технічні дані, які будуть використовуватися в layout
    menu__items: ["home","about","contacts"]
  // ↑↑ сюди вводимо JSON дані
  })
})
router.get('/slider', function (req, res) { 
  res.render('slider', {
    // вказуємо назву контейнера
    name: 'slider',
    // вказуємо назву компонентів
    component: [],

    // вказуємо назву сторінки
    title: 'Slider',
    // ... сюди можна далі продовжувати додавати  потрібні технічні дані, які будуть використовуватися в layout
  // ↑↑ сюди вводимо JSON дані
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
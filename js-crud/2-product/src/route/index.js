// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
class Product {
  static #productList = []
  constructor(name, price, description) {
    let num = Math.trunc(Math.random() * 100000)
    this.name = name
    this.price = price
    this.description = description
    if (num.length !== 5) {
      num = Math.trunc(Math.random() * 100000)
      this.id = num
    } else {
      this.id = num
    }
    this.createDate = new Date().toISOString()
  }
  static addProduct = (product) =>
    this.#productList.push(product)

  static getProductList = () => this.#productList

  static getProductById = (id) =>
    this.#productList.find((element) => element.id === id)

  static deleteProduct = (id) => {
    const index = this.#productList.findIndex(
      (value) => value.id === id,
    )
    this.#productList.splice(index, 1)
  }
  static updateProduct = (id, data) => {
    const product = this.getProductById(id)
    const { price } = data

    if (product) {
      if (price) {
        product.price = price
      }

      return true
    } else {
      return false
    }
  }
}
// ================================================================
router.get('/', function (req, res) {
  res.render('index', {
    style: 'index',
  })
})
// ================================================================
router.get('/product-list', function (req, res) {
  const list = Product.getProductList()
  res.render('product-list', {
    style: 'product-list',
    data: {
      products: {
        list,
        isEmpty: list.length === 0,
      },
    },
  })
})
// ================================================================
router.get('/product-create', function (req, res) {
  res.render('product-create', {
    style: 'product-create',
  })
})
// ================================================================
router.post('/product-create', function (req, res) {
  const { name, price, description } = req.body
  const product = new Product(name, price, description)
  Product.addProduct(product)
  res.render('product-alert', {
    style: 'product-alert',
    info: 'Товар був успішно створений',
  })
})
// ================================================================
router.get('/product-delete', function (req, res) {
  const { id } = req.query
  Product.deleteProduct(id)
  res.render('product-delete', {
    style: 'product-delete',
  })
})
// ================================================================
router.post('/product-update', function (req, res) {
  const { id, price } = req.body
  Product.updateProduct(Number(id), { price })
  res.render('product-update', {
    style: 'product-update',
  })
})

// Підключаємо роутер до бек-енду
module.exports = router

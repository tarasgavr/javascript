// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
class Product {
  static #productList = []
  constructor(name, price, description) {
    let num = Math.trunc(Math.random() * 10000)
    this.name = name
    this.price = price
    this.description = description
    if (num.length !== 5) {
      num = Math.trunc(Math.random() * 10000)
      this.id = num
    } else {
      this.id = num
    }
    this.createDate = new Date().toISOString()
  }
  static addProduct = (product) => {
    this.#productList.push(product)
  }
  static getProductList = () => {
    return this.#productList
  }
  static deleteProduct = (product) => {
    const index = this.#productList.findIndex(
      (value) => value === product,
    )
    this.#productList.splice(index, 1)
  }
  static updateProduct = (product) => {
    const index = this.#productList.findIndex(
      (value) => value === product,
    )
    this.#productList.splice(index, 1)
  }
}
// ================================================================

router.get('/', function (req, res) {
  const list = Product.getProductList()
  res.render('index', {
    style: 'index',
    data: {
      products: {
        list,
        isEmpty: list.length === 0,
      },
    },
  })
})
// ================================================================
router.post('/product-create', function (req, res) {
  const { name, price, description } = req.body
  const product = new Product(name, price, description)
  Product.addProduct(product)
  res.render('product-create', {
    style: 'product-create',
  })
})
// ================================================================
router.post('/product-delete', function (req, res) {
  const { name, price, description } = req.body
  const product = new Product(name, price, description)
  Product.deleteProduct(product)
  res.render('product-delete', {
    style: 'product-delete',
  })
})
// ================================================================
router.post('/product-update', function (req, res) {
  const { name, price, description } = req.body
  const product = new Product(name, price, description)
  Product.updateProduct(product)
  res.render('product-update', {
    style: 'product-update',
  })
})

// Підключаємо роутер до бек-енду
module.exports = router

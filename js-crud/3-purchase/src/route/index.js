// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
class Product {
  static #productList = []
  constructor(name, price, description, amount) {
    let num = Math.trunc(Math.random() * 10000000000)
    this.productName = name
    this.productPrice = price
    this.productDescription = description
    if (num.length !== 9) {
      num = Math.trunc(Math.random() * 10000000000)
      this.productId = num
    } else {
      this.productId = num
    }
    this.productAmount = amount
  }
  static addProduct = (product) =>
    this.#productList.push(product)

  static getProductList = () => this.#productList
}
class Purchase {
  static #purchaseList = []
  constructor(name, price, description, amount) {
    let num = Math.trunc(Math.random() * 10000000000)
    this.purchaseName = name
    this.purchasePrice = price
    this.purchaseDescription = description
    if (num.length !== 9) {
      num = Math.trunc(Math.random() * 10000000000)
      this.purchaseId = num
    } else {
      this.purchaseId = num
    }
    this.purchaseAmount = amount
  }
  static addPurchase = (purchase) =>
    this.#purchaseList.push(purchase)

  static getPurchaseList = () => this.#purchaseList

  static updatePurchase = (id, data) => {
    const purchase = this.getPurchaseById(id)
    const { price } = data

    if (purchase) {
      if (price) {
        purchase.price = price
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
    data: {
      caption: 'Товари',
      title:
        "Комп'ютери та ноутбуки/Комп'ютери, неттопи, моноблоки",
      products: [
        {
          img: '../img/image616.png',
          name: "Комп'ютер Artline Gaming(X43v31) AMD Ryzen 5 3600",
          description:
            'AMD Ryzen 5 3600 (3.6 - 4.2 ГГц) / RAM 16 ГБ / HDD 1 ТБ + SSD 480 ГБ / nVidia GeForce RTX 3050, 8 ГБ / без ОД / LAN / без ОС',
          status: 'Готовий до відправки',
          badge__text: 'Топ продажів',
          button__text: 'Купити зараз:',
          price: 27000,
        },
        {
          img: '../img/image617.png',
          name: "Комп'ютер COBRA Advanced (I11F.8.H1S2.15T.13356) Intel",
          description:
            'Intel Core i3-10100F (3.6 - 4.3 ГГц) / RAM 8 ГБ / HDD 1 ТБ + SSD 240 ГБ / GeForce GTX 1050 Ti, 4 ГБ / без ОД / LAN / Linux',
          status: 'Готовий до відправки',
          badge__text: 'Топ продажів',
          button__text: 'Купити зараз:',
          price: 17000,
        },
        {
          img: '../img/image618.png',
          name: "Комп'ютер ARTLINE Gaming by ASUS TUF v119 (TUFv119)",
          description:
            'Intel Core i9-13900KF (3.0 - 5.8 ГГц) / RAM 64 ГБ / SSD 2 ТБ (2 x 1 ТБ) / nVidia GeForce RTX 4070 Ti, 12 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС',
          status: 'Готовий до відправки',
          badge__text: 'Топ продажів',
          button__text: 'Купити зараз:',
          price: 113109,
        },
        {
          img: '../img/image616.png',
          name: "Комп'ютер Artline Gaming(X43v31) AMD Ryzen 5 3600",
          description:
            'AMD Ryzen 5 3600 (3.6 - 4.2 ГГц) / RAM 16 ГБ / HDD 1 ТБ + SSD 480 ГБ / nVidia GeForce RTX 3050, 8 ГБ / без ОД / LAN / без ОС',
          status: 'Готовий до відправки',
          badge__text: 'Топ продажів',
          button__text: 'Купити зараз:',
          price: 27000,
        },
        {
          img: '../img/image617.png',
          name: "Комп'ютер COBRA Advanced (I11F.8.H1S2.15T.13356) Intel",
          description:
            'Intel Core i3-10100F (3.6 - 4.3 ГГц) / RAM 8 ГБ / HDD 1 ТБ + SSD 240 ГБ / GeForce GTX 1050 Ti, 4 ГБ / без ОД / LAN / Linux',
          status: 'Готовий до відправки',
          badge__text: 'Топ продажів',
          button__text: 'Купити зараз:',
          price: 17000,
        },
        {
          img: '../img/image618.png',
          name: "Комп'ютер ARTLINE Gaming by ASUS TUF v119 (TUFv119)",
          description:
            'Intel Core i9-13900KF (3.0 - 5.8 ГГц) / RAM 64 ГБ / SSD 2 ТБ (2 x 1 ТБ) / nVidia GeForce RTX 4070 Ti, 12 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС',
          status: 'Готовий до відправки',
          badge__text: 'Топ продажів',
          button__text: 'Купити зараз:',
          price: 113109,
        },
      ],
    },
  })
})
// ================================================================
router.post('/product-fixed', function (req, res) {
  const { productName, productDescription, productAmount, productPrice } = req.body;
  // const product = Product(productName, productDescription, Numher(productAmount), Numher(productPrice));
  console.log(productName, productDescription, productAmount, productPrice);
  res.render('product-fixed', {
    style: 'product-fixed',
    data: {
      product__fixed: {
        img: '../img/image620.png',
        name: "Комп'ютер Artline Gaming(X43v31) AMD Ryzen 5 3600",
        description:
          'AMD Ryzen 5 3600 (3.6 - 4.2 ГГц) / RAM 16 ГБ / HDD 1 ТБ + SSD 480 ГБ / nVidia GeForce RTX 3050, 8 ГБ / без ОД / LAN / без ОС',
        status: 'Готовий до відправки',
        badge__text: 'Топ продажів',
        button__text: 'Купити зараз:',
        price: 27000,
      },
      caption: 'Інші товари',
      title: "Комп'ютери та ноутбуки",
      other__products: [
        {
          img: '../img/image616.png',
          name: "Комп'ютер Artline Gaming(X43v31) AMD Ryzen 5 3600",
          description:
            'AMD Ryzen 5 3600 (3.6 - 4.2 ГГц) / RAM 16 ГБ / HDD 1 ТБ + SSD 480 ГБ / nVidia GeForce RTX 3050, 8 ГБ / без ОД / LAN / без ОС',
          status: 'Готовий до відправки',
          badge__text: 'Топ продажів',
          button__text: 'Купити зараз:',
          price: 27000,
        },
        {
          img: '../img/image617.png',
          name: "Комп'ютер COBRA Advanced (I11F.8.H1S2.15T.13356) Intel",
          description:
            'Intel Core i3-10100F (3.6 - 4.3 ГГц) / RAM 8 ГБ / HDD 1 ТБ + SSD 240 ГБ / GeForce GTX 1050 Ti, 4 ГБ / без ОД / LAN / Linux',
          status: 'Готовий до відправки',
          badge__text: 'Топ продажів',
          button__text: 'Купити зараз:',
          price: 17000,
        },
        {
          img: '../img/image618.png',
          name: "Комп'ютер ARTLINE Gaming by ASUS TUF v119 (TUFv119)",
          description:
            'Intel Core i9-13900KF (3.0 - 5.8 ГГц) / RAM 64 ГБ / SSD 2 ТБ (2 x 1 ТБ) / nVidia GeForce RTX 4070 Ti, 12 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС',
          status: 'Готовий до відправки',
          badge__text: 'Топ продажів',
          button__text: 'Купити зараз:',
          price: 113109,
        },
      ],
    },
  })
})
// ================================================================
router.post('/purchase-create', function (req, res) {
  const { productName, productDescription, productAmount, productPrice } = req.body;
  // const product = Product(productName, productDescription, Numher(productAmount), Numher(productPrice));
  console.log(productName, productDescription, productAmount, productPrice);
  res.render('purchase-create', {
    style: 'purchase-create',
    productName,
    productPrice,
  })
})
// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router

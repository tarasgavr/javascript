// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
class Product {
  static #productList = []
  constructor(name, description, price, amount=1) {
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
class User {
  static #userList = []
  static #count = 0
  constructor(surname, name, phone, email) {
    this.userSurname = surname
    this.userName =  name
    this.userPhone =  phone
    this.userId = ++User.#count
    this.userEmail = email
  }
  static addUser = (user) =>
    this.#userList.push(user)
  
  static getUserById = (id) =>
    this.#userList.find((element) => element.userId === id)
  
  static getUserList = () => this.#userList
}
class Purchase {
  static #purchaseList = []
  static #count = 0
  constructor(name, price, userId, comment, promoCode = '', deliveryPrice) {
    const user = User.getUserById(userId);
    this.purchaseId = ++Purchase.#count
    this.purchaseName = name
    this.purchasePrice = price
    this.purchaseUserSurname = user.userSurname
    this.purchaseUserName = user.userName
    this.purchaseUserPhone = user.userPhone
    this.purchaseUserEmail = user.userEmail
    this.purchaseComment = comment
    this.purchasePromoCode = promoCode
    this.purchaseDeliveryPrice = deliveryPrice
  }
  static addPurchase = (purchase) =>
    this.#purchaseList.push(purchase)

  static getPurchaseList = () => this.#purchaseList

  static getPurchaseById = (id) =>
    this.#purchaseList.find((element) => element.purchaseId === id)

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
  const { productName, productDescription, productPrice } = req.body;
  const product = new Product(productName, productDescription, productPrice);
  Product.addProduct(product);
  res.render('product-fixed', {
    style: 'product-fixed',
    name : product.productName,
    description : product.productDescription,
    price : product.productPrice,
    img: '../img/image620.png',
    button__text: 'Купити зараз:',
    data: {
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
  const product = new Product(productName, productDescription, productPrice, productAmount);
  Product.addProduct(product);
  let productTotalPrice = productAmount * productPrice;
  // switch (purchase.purchasePromoCode) {
  //   case 'DISCOUNT10':
  //     productTotalPrice *= 0.1;
  //     break;
  //   case 'DISCOUNT25':
  //     productTotalPrice *= 0.25;
  //     break;
  //   case 'DISCOUNT50':
  //     productTotalPrice *= 0.5;
  //     break;
  
  //   default: productTotalPrice *= 1;
  // }
  res.render('purchase-create', {
    style: 'purchase-create',
    name : product.productName,
    price: product.productPrice,
    totalPrice :productTotalPrice,
    bonuses: productTotalPrice / 100,
  })
})
// ================================================================
router.post('/purchase-alert', function (req, res) {
  const { totalPrice } = req.query;
  const { productName,productPrice, deliveryPrice,userSurname,userName,userPhone,userEmail,purchaseComment, writeOffBonuses, purchasePromoCode } = req.body;
  const user = new User(userSurname,userName,userPhone,userEmail);
  User.addUser(user);
  const purchase = new Purchase(productName, productPrice, user.userId, purchaseComment, purchasePromoCode, deliveryPrice);
  Purchase.addPurchase(purchase);
  let productTotalPrice = totalPrice;
  switch (purchase.purchasePromoCode) {
    case 'DISCOUNT10':
      productTotalPrice *= 0.1;
    case 'DISCOUNT25':
      productTotalPrice *= 0.25;
    case 'DISCOUNT50':
      productTotalPrice *= 0.5;
      break;
  
    default: productTotalPrice *= 1;
  }
  console.log(req.query);
  res.render('purchase-alert', {
    style: 'purchase-alert',
    id : purchase.purchaseId,
    info: `Замовлення №${purchase.purchaseId} було успішно створено`
  })
})
// ================================================================
router.post('/purchase-list', function (req, res) {
  const { id } = req.body;
  const list = Purchase.getPurchaseList();
  const purchase = Purchase.getPurchaseById(id);

  res.render('purchase-list', {
    style: 'purchase-list',
    data: list,
  })
})
// ================================================================
// Підключаємо роутер до бек-енду
module.exports = router

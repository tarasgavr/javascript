/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/container/jssite/index.js":
/*!***************************************!*\
  !*** ./src/container/jssite/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../script/layout */ \"./src/script/layout.js\");\n\nconst mobileScreen = [{\n  header: {\n    time: '9:41',\n    signal: '/svg/signal.svg',\n    wifi: '/svg/wifi.svg',\n    power: '/svg/power.svg'\n  },\n  main: {\n    arrow: '/svg/arrow.svg',\n    logo: '/svg/logo.svg',\n    title: 'Мій блог'\n  },\n  blog: [{\n    important: 'Важлива',\n    new: 'Нова',\n    date: '25.01',\n    text: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс'\n  }, {\n    new: 'Нова',\n    date: '15.01',\n    text: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.'\n  }, {\n    important: 'Важлива',\n    date: '25.01',\n    text: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс'\n  }]\n}, {\n  header: {\n    time: '9:41',\n    signal: '/svg/signal.svg',\n    wifi: '/svg/wifi.svg',\n    power: '/svg/power.svg'\n  },\n  main: {\n    arrow: '/svg/arrow.svg',\n    logo: '/svg/logo.svg',\n    title: \"Ком'юніті\"\n  },\n  comunity: [{\n    tabs: [{\n      title: 'База знань',\n      active: false\n    }, {\n      title: 'Інформація',\n      active: true\n    }],\n    badge: '/svg/image.svg',\n    text: 'Що таке база знань?',\n    description: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',\n    button: \"Перейти до ком'юніті у Телеграм\"\n  }]\n}];\nlet div = (0,_script_layout__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'desk');\nmobileScreen.forEach(mob => {\n  let page = (0,_script_layout__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'page');\n  let header = (0,_script_layout__WEBPACK_IMPORTED_MODULE_0__.createHeader)(mob.header.time, mob.header.signal, mob.header.wifi, mob.header.power);\n  let main = (0,_script_layout__WEBPACK_IMPORTED_MODULE_0__.createMain)(mob.main.arrow, mob.main.logo, mob.main.title);\n  let blg;\n  let tabs;\n  page.appendChild(header);\n  page.appendChild(main);\n  if (Object.hasOwn(mob, 'blog')) {\n    mob.blog.forEach(post => {\n      blg = (0,_script_layout__WEBPACK_IMPORTED_MODULE_0__.createBlog)(post.important, post.new, post.date, post.text);\n      main.appendChild(blg);\n    });\n  }\n  if (Object.hasOwn(mob, 'comunity')) {\n    mob.comunity.forEach(com => {\n      tabs = (0,_script_layout__WEBPACK_IMPORTED_MODULE_0__.createCommunity)(com.tabs, com.badge, com.text, com.description, com.button);\n      main.appendChild(tabs);\n    });\n  }\n  const footer = (0,_script_layout__WEBPACK_IMPORTED_MODULE_0__.createElement)('footer');\n  const footerDiv = (0,_script_layout__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');\n  footer.appendChild(footerDiv);\n  page.appendChild(footer);\n  div.appendChild(page);\n});\ndocument.body.append(div);\n\n//# sourceURL=webpack://sass/./src/container/jssite/index.js?");

/***/ }),

/***/ "./src/script/layout.js":
/*!******************************!*\
  !*** ./src/script/layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBlog: () => (/* binding */ createBlog),\n/* harmony export */   createCommunity: () => (/* binding */ createCommunity),\n/* harmony export */   createElement: () => (/* binding */ createElement),\n/* harmony export */   createHeader: () => (/* binding */ createHeader),\n/* harmony export */   createMain: () => (/* binding */ createMain)\n/* harmony export */ });\nconst createElement = (tag, className, content) => {\n  const elem = document.createElement(tag);\n  if (className) {\n    elem.className = className;\n  }\n  if (content) {\n    elem.innerText = content;\n  }\n  return elem;\n};\nconst createHeader = (htime, hsignal, hwifi, hpower) => {\n  const headerTag = createElement('header');\n  const time = createElement('div', 'time', htime);\n  headerTag.appendChild(time);\n  const container = createElement('div');\n  headerTag.appendChild(container);\n  const signal = document.createElement('img');\n  signal.setAttribute('src', hsignal);\n  container.appendChild(signal);\n  const wifi = document.createElement('img');\n  wifi.setAttribute('src', hwifi);\n  container.appendChild(wifi);\n  const power = document.createElement('img');\n  power.setAttribute('src', hpower);\n  container.appendChild(power);\n  return headerTag;\n};\nconst createMain = (marrow, mlogo, mtitle) => {\n  const mainTag = createElement('main');\n  const panel = createElement('div', 'panel');\n  mainTag.appendChild(panel);\n  const arrow = createElement('img');\n  arrow.setAttribute('src', marrow);\n  arrow.setAttribute('width', 24);\n  panel.appendChild(arrow);\n  const logo = createElement('img');\n  logo.setAttribute('src', mlogo);\n  logo.setAttribute('width', 24);\n  panel.appendChild(logo);\n  const title = createElement('div', 'title', mtitle);\n  mainTag.appendChild(title);\n  return mainTag;\n};\nconst createBlog = (pimportant, pnew, pdate, ptext) => {\n  const blog = createElement('div', 'blog');\n  const blogTitle = createElement('div', 'blogTitle');\n  blog.appendChild(blogTitle);\n  const div = createElement('div');\n  if (pimportant) {\n    const badge1 = createElement('div', 'badge', pimportant);\n    div.appendChild(badge1);\n    blogTitle.appendChild(div);\n  }\n  if (pnew) {\n    const badge2 = createElement('div', 'badge', pnew);\n    div.appendChild(badge2);\n  }\n  blogTitle.appendChild(div);\n  const date = createElement('div', 'blogDate', pdate);\n  blogTitle.appendChild(date);\n  const text = createElement('div', 'blogText', ptext);\n  blog.appendChild(text);\n  return blog;\n};\nconst createCommunity = (tabsArr = [], icon, text, description, button) => {\n  const tabs = createElement('div', 'tabs');\n  const tabHeader = createElement('div', 'tabHeader');\n  tabs.appendChild(tabHeader);\n  let tabTitle;\n  tabsArr.forEach(tabEl => {\n    tabTitle = createElement('div', 'tabTitle', tabEl.title);\n    if (tabEl.active) {\n      tabTitle.classList.add('active');\n    }\n    tabHeader.appendChild(tabTitle);\n  });\n  if (icon) {\n    const badge = createElement('img');\n    badge.setAttribute('src', icon);\n    tabs.appendChild(badge);\n  }\n  if (text) {\n    const textTag = createElement('div', 'tabText', text);\n    tabs.appendChild(textTag);\n  }\n  if (description) {\n    const dxTag = createElement('p', 'tabDescription', description);\n    tabs.appendChild(dxTag);\n  }\n  if (button) {\n    const buttonTag = createElement('button', 'tabButton', button);\n    tabs.appendChild(buttonTag);\n  }\n  return tabs;\n};\n\n//# sourceURL=webpack://sass/./src/script/layout.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/container/jssite/index.js");
/******/ 	
/******/ })()
;
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

/***/ "./src/class/Todo.js":
/*!***************************!*\
  !*** ./src/class/Todo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n  static #block = null;\n  static #button = null;\n  static #count = 0;\n  static #input = null;\n  static #list = [];\n  static #template = null;\n  static init = () => {\n    this.#template = document.getElementById(\"task\").content.firstElementChild;\n    this.#block = document.getElementById(\"task__list\");\n    this.#button = document.getElementById(\"button\");\n    this.#input = document.getElementById(\"input\");\n    this.#button.onclick = this.#handleData;\n    this.#loadData();\n    this.#render();\n  };\n  static #saveData = () => {\n    localStorage.setItem(\"todolist\", JSON.stringify({\n      list: this.#list,\n      count: this.#count\n    }));\n  };\n  static #loadData = () => {\n    const data = localStorage.getItem(\"todolist\");\n    const {\n      list,\n      count\n    } = JSON.parse(data);\n    this.#list = list;\n    this.#count = count;\n  };\n  static #createTaskData = text => {\n    this.#list.push({\n      id: ++this.#count,\n      text,\n      done: false\n    });\n  };\n  static #handleData = () => {\n    let value = this.#input.value;\n    if (value.length > 1) {\n      this.#createTaskData(value);\n      this.#input.value = \"\";\n      this.#render();\n      this.#saveData();\n    }\n  };\n  static #render = () => {\n    this.#block.innerHTML = \"\";\n    if (this.#list.length === 0) {\n      this.#block.innerText = \"Немає задач\";\n    } else {\n      this.#list.forEach(text => {\n        const task = this.#createTaskEl(text);\n        this.#block.append(task);\n      });\n    }\n  };\n  static #createTaskEl = data => {\n    let task = this.#template.cloneNode(true);\n    const [wrapper, buttons] = task.children;\n    const [id, text] = wrapper.children;\n    const [btnDo, btnCancel] = buttons.children;\n    id.innerText = `${data.id}.`;\n    text.innerText = data.text;\n    btnDo.onclick = this.#handleDone(data, btnDo, wrapper);\n    btnCancel.onclick = this.#handleCancel(data);\n    return task;\n  };\n  static #handleDone = (data, btn, el) => () => {\n    const status = this.#toggleDone(data.id);\n    if (status === true || status === false) {\n      el.classList.toggle(\"item__done\");\n      btn.classList.toggle(\"icon-done\");\n      this.#saveData();\n    }\n  };\n  static #toggleDone = id => {\n    let item;\n    this.#list.forEach(elem => {\n      if (elem.id === id) item = elem;\n    });\n    if (item) {\n      item.done = !item.done;\n      return item.done;\n    } else {\n      return null;\n    }\n  };\n  static #handleCancel = data => () => {\n    if (confirm(\"Дійсно видалити?\")) {\n      const rss = this.#deleteById(data.id);\n      if (rss) {\n        this.#count--;\n        this.#render();\n        this.#saveData();\n      }\n    }\n  };\n  static #deleteById = id => {\n    this.#list = this.#list.filter(item => item.id !== id);\n    return true;\n  };\n}\n\n//# sourceURL=webpack://sass/./src/class/Todo.js?");

/***/ }),

/***/ "./src/container/todolist/index.js":
/*!*****************************************!*\
  !*** ./src/container/todolist/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_Todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../class/Todo.js */ \"./src/class/Todo.js\");\n\n_class_Todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\n\n//# sourceURL=webpack://sass/./src/container/todolist/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/container/todolist/index.js");
/******/ 	
/******/ })()
;
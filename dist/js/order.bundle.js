/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://orinoco/./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ ((module) => {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack://orinoco/./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./src/js/components/Table.js":
/*!************************************!*\
  !*** ./src/js/components/Table.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ _default\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ \"./src/js/utils.js\");\n\n\n\n\nvar _default = /*#__PURE__*/function () {\n  function _default(data) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);\n\n    this.template = null;\n    this.data = data;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{\n    key: \"onCartClear\",\n    value: function onCartClear(cb) {\n      var cartClearBtn = this.template.querySelector('#clear-cart');\n      cartClearBtn.addEventListener('click', cb);\n    }\n  }, {\n    key: \"injectTo\",\n    value: function injectTo(mountPoint) {\n      // Create markup then inject it into selected element (mountPoint) in the DOM\n      this.toHTML();\n      mountPoint.appendChild(this.template);\n    }\n  }, {\n    key: \"toHTML\",\n    value: function toHTML() {\n      var table = document.createElement('table');\n      table.classList.add('w-full');\n      table.innerHTML = \"\\n      <thead>\\n        <tr class=\\\"border-b text-lg\\\">\\n          <th class=\\\"text-left pb-2\\\">D\\xE9signation</th>\\n          <th>Prix</th>\\n          <th>Quantit\\xE9</th>\\n          <th>Sous-total</th>\\n        </tr>\\n      </thead>\\n      <tbody>\\n      \".concat(this.data.items.map(function (item) {\n        return \"\\n          <tr class=\\\"border-b\\\">\\n            <td class=\\\"py-2\\\">\\n              <a href=\\\"item.html?id=\".concat(item.id, \"\\\">\\n                <span class=\\\"inline-block w-full uppercase font-semibold\\\">Peluche \\\"\").concat(item.name, \"\\\"</span>\\n                <span class=\\\"inline-block text-sm\\\">Ref: \").concat(item.id, \"</span>\\n              </a>\\n            </td>\\n            <td class=\\\"text-center py-2\\\">\\n              \").concat((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice)(item.price), \"\\n            </td>\\n            <td class=\\\"text-center py-2\\\">\\n              <input id=\\\"count-change\\\" type=\\\"number\\\" min=\\\"1\\\" data-id=\\\"\").concat(item.id, \"\\\" value=\\\"\").concat(item.quantity, \"\\\"\\n                class=\\\"inline-block w-16 py-2 px-1 rounded-md border text-center\\\"\\n              />\\n            </td>\\n            <td class=\\\"text-center py-2\\\">\").concat((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice)(item.price * item.quantity), \"</td>\\n          </tr>\\n        \");\n      }).join(''), \"\\n      </tbody>\\n      <tfoot>\\n        <tr class=\\\"font-bold\\\">\\n          <td>\\n            <button id=\\\"clear-cart\\\" class=\\\"border border-red-400 text-red-500 py-2 px-4 rounded-md hover:bg-red-400 hover:text-white\\\">\\n              Vider mon panier\\n                </button>\\n          </td>\\n          <td></td>\\n          <td class=\\\"py-4 text-center uppercase\\\">Total T.T.C:</td>\\n          <td class=\\\"py-4 text-center\\\">\\n            <div class=\\\"text-2xl\\\">\\n              \").concat((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice)(this.data.total), \"\\n            </div>\\n          </td>\\n        </tr>\\n      </tfoot>\\n    \");\n      this.template = table;\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack://orinoco/./src/js/components/Table.js?");

/***/ }),

/***/ "./src/js/modules/CartManager.js":
/*!***************************************!*\
  !*** ./src/js/modules/CartManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ _default\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _default = /*#__PURE__*/function () {\n  function _default() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);\n\n    this.items = [];\n    this.total = 0;\n    this.init();\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{\n    key: \"init\",\n    value: function init() {\n      // Check if a cart has been saved then load it\n      if (localStorage.getItem('cart')) {\n        var cart = JSON.parse(localStorage.getItem('cart'));\n        this.items = cart.items;\n        this.total = cart.total;\n      }\n    }\n  }, {\n    key: \"addItem\",\n    value: function addItem(newItem) {\n      var duplicate = false; // Check if item reference is in cart to update quantity\n\n      this.items.map(function (item) {\n        if (item.id === newItem.id) {\n          item.quantity += newItem.quantity;\n          duplicate = true;\n        }\n      });\n\n      if (!duplicate) {\n        this.items.push(newItem);\n      } // Recalculate cart total\n\n\n      this.setTotal(); // Save the cart in localStorage\n\n      this.save();\n    }\n  }, {\n    key: \"setTotal\",\n    value: function setTotal() {\n      this.total = this.items.reduce(function (total, current) {\n        return total + current.quantity * current.price;\n      }, 0);\n    }\n  }, {\n    key: \"save\",\n    value: function save() {\n      var cartInformations = {\n        items: this.items,\n        total: this.total\n      };\n      localStorage.setItem('cart', JSON.stringify(cartInformations));\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      // Empty the cart\n      this.items = []; // Reset total\n\n      this.total = 0; // Remove saved\n\n      localStorage.clear();\n    }\n  }, {\n    key: \"getCount\",\n    value: function getCount() {\n      return this.items.length;\n    }\n  }, {\n    key: \"getData\",\n    value: function getData() {\n      var cartData = {\n        items: this.items,\n        total: this.total\n      };\n      return cartData;\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack://orinoco/./src/js/modules/CartManager.js?");

/***/ }),

/***/ "./src/js/order.js":
/*!*************************!*\
  !*** ./src/js/order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_CartManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/CartManager */ \"./src/js/modules/CartManager.js\");\n/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Table */ \"./src/js/components/Table.js\");\n/* harmony import */ var _templates_defaultMarkup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/defaultMarkup */ \"./src/js/templates/defaultMarkup.js\");\n\n\n\nvar cart = new _modules_CartManager__WEBPACK_IMPORTED_MODULE_0__.default();\nvar cartMountPoint = document.getElementById('order');\n\nif (cart.getCount() > 0) {\n  var summary = new _components_Table__WEBPACK_IMPORTED_MODULE_1__.default(cart.getData());\n  summary.injectTo(cartMountPoint);\n  summary.onCartClear(function () {\n    cart.clear();\n    window.location.reload();\n  });\n} else {\n  cartMountPoint.innerHTML = _templates_defaultMarkup__WEBPACK_IMPORTED_MODULE_2__.default.emptyCart;\n}\n\n//# sourceURL=webpack://orinoco/./src/js/order.js?");

/***/ }),

/***/ "./src/js/templates/defaultMarkup.js":
/*!*******************************************!*\
  !*** ./src/js/templates/defaultMarkup.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  emptyCart: \"\\n    <div class=\\\"text-center\\\">\\n    <p>Votre panier est vide.</p>\\n    <div class=\\\"mt-12 text-center\\\">\\n      <a href=\\\"index.html\\\"\\n        class=\\\"inline-block px-4 py-2 border text-blue-500 border-blue-500 rounded-md font-medium hover:bg-blue-500 hover:text-white\\\">\\n        D\\xE9couvrir nos articles\\n      </a>\\n    </div>\\n  \",\n  notFoundItem: \"\\n    <div class=\\\"text-center\\\">\\n      <h2 class=\\\"text-xl\\\">L'article demand\\xE9 n'existe pas.</h2>\\n      <p class=\\\"mt-6\\\">\\n        <a class=\\\"underline text-blue-600 hover:text-blue-800\\\" href=\\\"index.html\\\">Retourner \\xE0 la page d'accueil.</a>\\n      </p>\\n    </div>\\n  \"\n});\n\n//# sourceURL=webpack://orinoco/./src/js/templates/defaultMarkup.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatPrice\": () => /* binding */ formatPrice,\n/* harmony export */   \"extractIdFromUrl\": () => /* binding */ extractIdFromUrl,\n/* harmony export */   \"animateCartBtn\": () => /* binding */ animateCartBtn\n/* harmony export */ });\n// Make price readable for users\nfunction formatPrice(price) {\n  price = price / 100;\n  return price.toFixed(2) + ' €';\n} // Get id from url parameters\n\nfunction extractIdFromUrl() {\n  var id = window.location.search.split(\"=\")[1];\n\n  if (!id) {\n    return null;\n  }\n\n  return id;\n} // Animate cart button when an item has been added\n\nfunction animateCartBtn() {\n  var cartBtn = document.querySelector('#cart-btn');\n  cartBtn.classList.add('animate');\n  cartBtn.addEventListener('animationend', function (event) {\n    event.target.classList.remove('animate');\n  });\n}\n\n//# sourceURL=webpack://orinoco/./src/js/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/order.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
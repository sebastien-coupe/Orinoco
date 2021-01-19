/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./src/js/components/Table.js":
/*!************************************!*\
  !*** ./src/js/components/Table.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _default
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./src/js/utils.js");




var _default = /*#__PURE__*/function () {
  function _default(data) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    this.template = null;
    this.data = data;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "onCartClear",
    value: function onCartClear(cb) {
      var cartClearBtn = this.template.querySelector('#clear-cart');
      cartClearBtn.addEventListener('click', cb);
    }
  }, {
    key: "injectTo",
    value: function injectTo(mountPoint) {
      // Create markup then inject it into selected element (mountPoint) in the DOM
      this.toHTML();
      mountPoint.appendChild(this.template);
    }
  }, {
    key: "toHTML",
    value: function toHTML() {
      var table = document.createElement('table');
      table.classList.add('w-full');
      table.innerHTML = "\n      <thead>\n        <tr class=\"border-b text-lg\">\n          <th class=\"text-left pb-2\">D\xE9signation</th>\n          <th>Prix</th>\n          <th>Quantit\xE9</th>\n          <th>Sous-total</th>\n        </tr>\n      </thead>\n      <tbody>\n      ".concat(this.data.items.map(function (item) {
        return "\n          <tr class=\"border-b\">\n            <td class=\"py-2\">\n              <a href=\"item.html?id=".concat(item.id, "\">\n                <span class=\"inline-block w-full uppercase font-semibold\">Peluche \"").concat(item.name, "\"</span>\n                <span class=\"inline-block text-sm\">Ref: ").concat(item.id, "</span>\n              </a>\n            </td>\n            <td class=\"text-center py-2\">\n              ").concat((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice)(item.price), "\n            </td>\n            <td class=\"text-center py-2\">\n              <input id=\"count-change\" type=\"number\" min=\"1\" data-id=\"").concat(item.id, "\" value=\"").concat(item.quantity, "\"\n                class=\"inline-block w-16 py-2 px-1 rounded-md border text-center\"\n              />\n            </td>\n            <td class=\"text-center py-2\">").concat((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice)(item.price * item.quantity), "</td>\n          </tr>\n        ");
      }).join(''), "\n      </tbody>\n      <tfoot>\n        <tr class=\"font-bold\">\n          <td>\n            <button id=\"clear-cart\" class=\"border border-red-400 text-red-500 py-2 px-4 rounded-md hover:bg-red-400 hover:text-white\">\n              Vider mon panier\n                </button>\n          </td>\n          <td></td>\n          <td class=\"py-4 text-center uppercase\">Total T.T.C:</td>\n          <td class=\"py-4 text-center\">\n            <div class=\"text-2xl\">\n              ").concat((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice)(this.data.total), "\n            </div>\n          </td>\n        </tr>\n      </tfoot>\n    ");
      this.template = table;
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/js/modules/CartManager.js":
/*!***************************************!*\
  !*** ./src/js/modules/CartManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _default
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var _default = /*#__PURE__*/function () {
  function _default() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    this.items = [];
    this.total = 0;
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "init",
    value: function init() {
      // Check if a cart has been saved then load it
      if (localStorage.getItem('cart')) {
        var cart = JSON.parse(localStorage.getItem('cart'));
        this.items = cart.items;
        this.total = cart.total;
      }
    }
  }, {
    key: "addItem",
    value: function addItem(newItem) {
      var duplicate = false; // Check if item reference is in cart to update quantity

      this.items.map(function (item) {
        if (item.id === newItem.id) {
          item.quantity += newItem.quantity;
          duplicate = true;
        }
      });

      if (!duplicate) {
        this.items.push(newItem);
      } // Recalculate cart total


      this.setTotal(); // Save the cart in localStorage

      this.save();
    }
  }, {
    key: "setTotal",
    value: function setTotal() {
      this.total = this.items.reduce(function (total, current) {
        return total + current.quantity * current.price;
      }, 0);
    }
  }, {
    key: "save",
    value: function save() {
      var cartInformations = {
        items: this.items,
        total: this.total
      };
      localStorage.setItem('cart', JSON.stringify(cartInformations));
    }
  }, {
    key: "clear",
    value: function clear() {
      // Empty the cart
      this.items = []; // Reset total

      this.total = 0; // Remove saved

      localStorage.clear();
    }
  }, {
    key: "getCount",
    value: function getCount() {
      return this.items.length;
    }
  }, {
    key: "getData",
    value: function getData() {
      var cartData = {
        items: this.items,
        total: this.total
      };
      return cartData;
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/js/order.js":
/*!*************************!*\
  !*** ./src/js/order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_CartManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/CartManager */ "./src/js/modules/CartManager.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Table */ "./src/js/components/Table.js");
/* harmony import */ var _templates_defaultMarkup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/defaultMarkup */ "./src/js/templates/defaultMarkup.js");



var cart = new _modules_CartManager__WEBPACK_IMPORTED_MODULE_0__.default();
var cartMountPoint = document.getElementById('order');

if (cart.getCount() > 0) {
  var summary = new _components_Table__WEBPACK_IMPORTED_MODULE_1__.default(cart.getData());
  summary.injectTo(cartMountPoint);
  summary.onCartClear(function () {
    cart.clear();
    cartMountPoint.innerHTML = _templates_defaultMarkup__WEBPACK_IMPORTED_MODULE_2__.default.emptyCart;
  });
} else {
  cartMountPoint.innerHTML = _templates_defaultMarkup__WEBPACK_IMPORTED_MODULE_2__.default.emptyCart;
}

/***/ }),

/***/ "./src/js/templates/defaultMarkup.js":
/*!*******************************************!*\
  !*** ./src/js/templates/defaultMarkup.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  emptyCart: "\n    <div class=\"text-center\">\n    <p>Votre panier est vide.</p>\n    <div class=\"mt-12 text-center\">\n      <a href=\"index.html\"\n        class=\"inline-block px-4 py-2 border text-blue-500 border-blue-500 rounded-md font-medium hover:bg-blue-500 hover:text-white\">\n        D\xE9couvrir nos articles\n      </a>\n    </div>\n  ",
  notFoundItem: "\n    <div class=\"text-center\">\n      <h2 class=\"text-xl\">L'article demand\xE9 n'existe pas.</h2>\n      <p class=\"mt-6\">\n        <a class=\"underline text-blue-600 hover:text-blue-800\" href=\"index.html\">Retourner \xE0 la page d'accueil.</a>\n      </p>\n    </div>\n  "
});

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatPrice": () => /* binding */ formatPrice,
/* harmony export */   "extractIdFromUrl": () => /* binding */ extractIdFromUrl,
/* harmony export */   "animateCartBtn": () => /* binding */ animateCartBtn
/* harmony export */ });
// Make price readable for users
function formatPrice(price) {
  price = price / 100;
  return price.toFixed(2) + ' €';
} // Get id from url parameters

function extractIdFromUrl() {
  var id = window.location.search.split("=")[1];

  if (!id) {
    return null;
  }

  return id;
} // Animate cart button when an item has been added

function animateCartBtn() {
  var cartBtn = document.querySelector('#cart-btn');
  cartBtn.classList.add('animate');
  cartBtn.addEventListener('animationend', function (event) {
    event.target.classList.remove('animate');
  });
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcmlub2NvLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vb3Jpbm9jby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL29yaW5vY28vLi9zcmMvanMvY29tcG9uZW50cy9UYWJsZS5qcyIsIndlYnBhY2s6Ly9vcmlub2NvLy4vc3JjL2pzL21vZHVsZXMvQ2FydE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vb3Jpbm9jby8uL3NyYy9qcy9vcmRlci5qcyIsIndlYnBhY2s6Ly9vcmlub2NvLy4vc3JjL2pzL3RlbXBsYXRlcy9kZWZhdWx0TWFya3VwLmpzIiwid2VicGFjazovL29yaW5vY28vLi9zcmMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vb3Jpbm9jby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcmlub2NvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29yaW5vY28vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29yaW5vY28vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vcmlub2NvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb3Jpbm9jby93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiZGF0YSIsInRlbXBsYXRlIiwiY2IiLCJjYXJ0Q2xlYXJCdG4iLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdW50UG9pbnQiLCJ0b0hUTUwiLCJhcHBlbmRDaGlsZCIsInRhYmxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaWQiLCJuYW1lIiwiZm9ybWF0UHJpY2UiLCJwcmljZSIsInF1YW50aXR5Iiwiam9pbiIsInRvdGFsIiwiaW5pdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjYXJ0IiwiSlNPTiIsInBhcnNlIiwibmV3SXRlbSIsImR1cGxpY2F0ZSIsInB1c2giLCJzZXRUb3RhbCIsInNhdmUiLCJyZWR1Y2UiLCJjdXJyZW50IiwiY2FydEluZm9ybWF0aW9ucyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjbGVhciIsImxlbmd0aCIsImNhcnREYXRhIiwiQ2FydE1hbmFnZXIiLCJjYXJ0TW91bnRQb2ludCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q291bnQiLCJzdW1tYXJ5IiwiVGFibGUiLCJnZXREYXRhIiwiaW5qZWN0VG8iLCJvbkNhcnRDbGVhciIsImRlZmF1bHRNYXJrdXAiLCJlbXB0eUNhcnQiLCJub3RGb3VuZEl0ZW0iLCJ0b0ZpeGVkIiwiZXh0cmFjdElkRnJvbVVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3BsaXQiLCJhbmltYXRlQ2FydEJ0biIsImNhcnRCdG4iLCJldmVudCIsInRhcmdldCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBOzs7QUFJRSxvQkFBWUEsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7Z0NBRVdFLEUsRUFBSTtBQUNkLFVBQU1DLFlBQVksR0FBRyxLQUFLRixRQUFMLENBQWNHLGFBQWQsQ0FBNEIsYUFBNUIs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YWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMudGVtcGxhdGUgPSBudWxsO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICBvbkNhcnRDbGVhcihjYikge1xuICAgIGNvbnN0IGNhcnRDbGVhckJ0biA9IHRoaXMudGVtcGxhdGUucXVlcnlTZWxlY3RvcignI2NsZWFyLWNhcnQnKTtcblxuICAgIGNhcnRDbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNiKTtcbiAgfVxuXG4gIGluamVjdFRvKG1vdW50UG9pbnQpIHtcbiAgICAvLyBDcmVhdGUgbWFya3VwIHRoZW4gaW5qZWN0IGl0IGludG8gc2VsZWN0ZWQgZWxlbWVudCAobW91bnRQb2ludCkgaW4gdGhlIERPTVxuICAgIHRoaXMudG9IVE1MKCk7XG4gICAgbW91bnRQb2ludC5hcHBlbmRDaGlsZCh0aGlzLnRlbXBsYXRlKTtcbiAgfVxuXG4gIHRvSFRNTCgpIHtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgdGFibGUuY2xhc3NMaXN0LmFkZCgndy1mdWxsJyk7XG5cbiAgICB0YWJsZS5pbm5lckhUTUwgPSBgXG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0ciBjbGFzcz1cImJvcmRlci1iIHRleHQtbGdcIj5cbiAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWxlZnQgcGItMlwiPkTDqXNpZ25hdGlvbjwvdGg+XG4gICAgICAgICAgPHRoPlByaXg8L3RoPlxuICAgICAgICAgIDx0aD5RdWFudGl0w6k8L3RoPlxuICAgICAgICAgIDx0aD5Tb3VzLXRvdGFsPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAke3RoaXMuZGF0YS5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gYFxuICAgICAgICAgIDx0ciBjbGFzcz1cImJvcmRlci1iXCI+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJweS0yXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJpdGVtLmh0bWw/aWQ9JHtpdGVtLmlkfVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5saW5lLWJsb2NrIHctZnVsbCB1cHBlcmNhc2UgZm9udC1zZW1pYm9sZFwiPlBlbHVjaGUgXCIke2l0ZW0ubmFtZX1cIjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlubGluZS1ibG9jayB0ZXh0LXNtXCI+UmVmOiAke2l0ZW0uaWR9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXIgcHktMlwiPlxuICAgICAgICAgICAgICAke2Zvcm1hdFByaWNlKGl0ZW0ucHJpY2UpfVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyIHB5LTJcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY291bnQtY2hhbmdlXCIgdHlwZT1cIm51bWJlclwiIG1pbj1cIjFcIiBkYXRhLWlkPVwiJHtpdGVtLmlkfVwiIHZhbHVlPVwiJHtpdGVtLnF1YW50aXR5fVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbmxpbmUtYmxvY2sgdy0xNiBweS0yIHB4LTEgcm91bmRlZC1tZCBib3JkZXIgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyIHB5LTJcIj4ke2Zvcm1hdFByaWNlKGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5KX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIGB9KS5qb2luKCcnKVxuICAgICAgfVxuICAgICAgPC90Ym9keT5cbiAgICAgIDx0Zm9vdD5cbiAgICAgICAgPHRyIGNsYXNzPVwiZm9udC1ib2xkXCI+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsZWFyLWNhcnRcIiBjbGFzcz1cImJvcmRlciBib3JkZXItcmVkLTQwMCB0ZXh0LXJlZC01MDAgcHktMiBweC00IHJvdW5kZWQtbWQgaG92ZXI6YmctcmVkLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIFZpZGVyIG1vbiBwYW5pZXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgdGV4dC1jZW50ZXIgdXBwZXJjYXNlXCI+VG90YWwgVC5ULkM6PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC0yeGxcIj5cbiAgICAgICAgICAgICAgJHtmb3JtYXRQcmljZSh0aGlzLmRhdGEudG90YWwpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGZvb3Q+XG4gICAgYDtcblxuICAgIHRoaXMudGVtcGxhdGUgPSB0YWJsZTtcbiAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLnRvdGFsID0gMDtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gQ2hlY2sgaWYgYSBjYXJ0IGhhcyBiZWVuIHNhdmVkIHRoZW4gbG9hZCBpdFxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKSB7XG4gICAgICBjb25zdCBjYXJ0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKTtcbiAgICAgIHRoaXMuaXRlbXMgPSBjYXJ0Lml0ZW1zO1xuICAgICAgdGhpcy50b3RhbCA9IGNhcnQudG90YWw7XG4gICAgfVxuICB9XG5cbiAgYWRkSXRlbShuZXdJdGVtKSB7XG4gICAgbGV0IGR1cGxpY2F0ZSA9IGZhbHNlO1xuXG4gICAgLy8gQ2hlY2sgaWYgaXRlbSByZWZlcmVuY2UgaXMgaW4gY2FydCB0byB1cGRhdGUgcXVhbnRpdHlcbiAgICB0aGlzLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLmlkID09PSBuZXdJdGVtLmlkKSB7XG4gICAgICAgIGl0ZW0ucXVhbnRpdHkgKz0gbmV3SXRlbS5xdWFudGl0eTtcbiAgICAgICAgZHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghZHVwbGljYXRlKSB7XG4gICAgICB0aGlzLml0ZW1zLnB1c2gobmV3SXRlbSk7XG4gICAgfVxuXG4gICAgLy8gUmVjYWxjdWxhdGUgY2FydCB0b3RhbFxuICAgIHRoaXMuc2V0VG90YWwoKTtcblxuICAgIC8vIFNhdmUgdGhlIGNhcnQgaW4gbG9jYWxTdG9yYWdlXG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICBzZXRUb3RhbCgpIHtcbiAgICB0aGlzLnRvdGFsID0gdGhpcy5pdGVtcy5yZWR1Y2UoKHRvdGFsLCBjdXJyZW50KSA9PiB7XG4gICAgICByZXR1cm4gdG90YWwgKyAoY3VycmVudC5xdWFudGl0eSAqIGN1cnJlbnQucHJpY2UpO1xuICAgIH0sIDApXG4gIH1cblxuICBzYXZlKCkge1xuICAgIGNvbnN0IGNhcnRJbmZvcm1hdGlvbnMgPSB7XG4gICAgICBpdGVtczogdGhpcy5pdGVtcyxcbiAgICAgIHRvdGFsOiB0aGlzLnRvdGFsXG4gICAgfVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0SW5mb3JtYXRpb25zKSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICAvLyBFbXB0eSB0aGUgY2FydFxuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAvLyBSZXNldCB0b3RhbFxuICAgIHRoaXMudG90YWwgPSAwO1xuXG4gICAgLy8gUmVtb3ZlIHNhdmVkXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgY29uc3QgY2FydERhdGEgPSB7XG4gICAgICBpdGVtczogdGhpcy5pdGVtcyxcbiAgICAgIHRvdGFsOiB0aGlzLnRvdGFsXG4gICAgfTtcblxuICAgIHJldHVybiBjYXJ0RGF0YTtcbiAgfVxuXG59IiwiaW1wb3J0IENhcnRNYW5hZ2VyIGZyb20gJy4vbW9kdWxlcy9DYXJ0TWFuYWdlcic7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL1RhYmxlJztcbmltcG9ydCBkZWZhdWx0TWFya3VwIGZyb20gJy4vdGVtcGxhdGVzL2RlZmF1bHRNYXJrdXAnO1xuXG5jb25zdCBjYXJ0ID0gbmV3IENhcnRNYW5hZ2VyKCk7XG5cbmNvbnN0IGNhcnRNb3VudFBvaW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZGVyJyk7XG5cbmlmIChjYXJ0LmdldENvdW50KCkgPiAwKSB7XG4gIGNvbnN0IHN1bW1hcnkgPSBuZXcgVGFibGUoY2FydC5nZXREYXRhKCkpO1xuXG4gIHN1bW1hcnkuaW5qZWN0VG8oY2FydE1vdW50UG9pbnQpO1xuXG4gIHN1bW1hcnkub25DYXJ0Q2xlYXIoKCkgPT4ge1xuICAgIGNhcnQuY2xlYXIoKTtcbiAgICBjYXJ0TW91bnRQb2ludC5pbm5lckhUTUwgPSBkZWZhdWx0TWFya3VwLmVtcHR5Q2FydDtcbiAgfSlcblxufSBlbHNlIHtcbiAgY2FydE1vdW50UG9pbnQuaW5uZXJIVE1MID0gZGVmYXVsdE1hcmt1cC5lbXB0eUNhcnQ7XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICBlbXB0eUNhcnQ6IGBcbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICA8cD5Wb3RyZSBwYW5pZXIgZXN0IHZpZGUuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJtdC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgPGEgaHJlZj1cImluZGV4Lmh0bWxcIlxuICAgICAgICBjbGFzcz1cImlubGluZS1ibG9jayBweC00IHB5LTIgYm9yZGVyIHRleHQtYmx1ZS01MDAgYm9yZGVyLWJsdWUtNTAwIHJvdW5kZWQtbWQgZm9udC1tZWRpdW0gaG92ZXI6YmctYmx1ZS01MDAgaG92ZXI6dGV4dC13aGl0ZVwiPlxuICAgICAgICBEw6ljb3V2cmlyIG5vcyBhcnRpY2xlc1xuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICBgLFxuXG4gIG5vdEZvdW5kSXRlbTogYFxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgPGgyIGNsYXNzPVwidGV4dC14bFwiPkwnYXJ0aWNsZSBkZW1hbmTDqSBuJ2V4aXN0ZSBwYXMuPC9oMj5cbiAgICAgIDxwIGNsYXNzPVwibXQtNlwiPlxuICAgICAgICA8YSBjbGFzcz1cInVuZGVybGluZSB0ZXh0LWJsdWUtNjAwIGhvdmVyOnRleHQtYmx1ZS04MDBcIiBocmVmPVwiaW5kZXguaHRtbFwiPlJldG91cm5lciDDoCBsYSBwYWdlIGQnYWNjdWVpbC48L2E+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIGBcbn0iLCIvLyBNYWtlIHByaWNlIHJlYWRhYmxlIGZvciB1c2Vyc1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFByaWNlKHByaWNlKSB7XG4gIHByaWNlID0gcHJpY2UgLyAxMDA7XG5cbiAgcmV0dXJuIHByaWNlLnRvRml4ZWQoMikgKyAnIOKCrCc7XG59XG5cblxuLy8gR2V0IGlkIGZyb20gdXJsIHBhcmFtZXRlcnNcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0SWRGcm9tVXJsKCkge1xuICBjb25zdCBpZCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3BsaXQoXCI9XCIpWzFdO1xuXG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBpZDtcbn1cblxuLy8gQW5pbWF0ZSBjYXJ0IGJ1dHRvbiB3aGVuIGFuIGl0ZW0gaGFzIGJlZW4gYWRkZWRcbmV4cG9ydCBmdW5jdGlvbiBhbmltYXRlQ2FydEJ0bigpIHtcbiAgY29uc3QgY2FydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJ0LWJ0bicpO1xuXG4gIGNhcnRCdG4uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpO1xuXG4gIGNhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKVxuICB9KVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9vcmRlci5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=
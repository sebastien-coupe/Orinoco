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
    window.location.reload();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcmlub2NvLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vb3Jpbm9jby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL29yaW5vY28vLi9zcmMvanMvY29tcG9uZW50cy9UYWJsZS5qcyIsIndlYnBhY2s6Ly9vcmlub2NvLy4vc3JjL2pzL21vZHVsZXMvQ2FydE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vb3Jpbm9jby8uL3NyYy9qcy9vcmRlci5qcyIsIndlYnBhY2s6Ly9vcmlub2NvLy4vc3JjL2pzL3RlbXBsYXRlcy9kZWZhdWx0TWFya3VwLmpzIiwid2VicGFjazovL29yaW5vY28vLi9zcmMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vb3Jpbm9jby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcmlub2NvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29yaW5vY28vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29yaW5vY28vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vcmlub2NvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb3Jpbm9jby93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiZGF0YSIsInRlbXBsYXRlIiwiY2IiLCJjYXJ0Q2xlYXJCdG4iLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdW50UG9pbnQiLCJ0b0hUTUwiLCJhcHBlbmRDaGlsZCIsInRhYmxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaWQiLCJuYW1lIiwiZm9ybWF0UHJpY2UiLCJwcmljZSIsInF1YW50aXR5Iiwiam9pbiIsInRvdGFsIiwiaW5pdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjYXJ0IiwiSlNPTiIsInBhcnNlIiwibmV3SXRlbSIsImR1cGxpY2F0ZSIsInB1c2giLCJzZXRUb3RhbCIsInNhdmUiLCJyZWR1Y2UiLCJjdXJyZW50IiwiY2FydEluZm9ybWF0aW9ucyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjbGVhciIsImxlbmd0aCIsImNhcnREYXRhIiwiQ2FydE1hbmFnZXIiLCJjYXJ0TW91bnRQb2ludCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q291bnQiLCJzdW1tYXJ5IiwiVGFibGUiLCJnZXREYXRhIiwiaW5qZWN0VG8iLCJvbkNhcnRDbGVhciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZGVmYXVsdE1hcmt1cCIsImVtcHR5Q2FydCIsIm5vdEZvdW5kSXRlbSIsInRvRml4ZWQiLCJleHRyYWN0SWRGcm9tVXJsIiwic2VhcmNoIiwic3BsaXQiLCJhbmltYXRlQ2FydEJ0biIsImNhcnRCdG4iLCJldmVudCIsInRhcmdldCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBOzs7QUFJRSxvQkFBWUEsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7Z0NBRVdFLEUsRUFBSTtBQUNkLFVBQU1DLFlBQVksR0FBRyxLQUFLRixRQUFMLENBQWNHLGFBQWQsQ0FB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bGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuLi91dGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IG51bGw7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIG9uQ2FydENsZWFyKGNiKSB7XG4gICAgY29uc3QgY2FydENsZWFyQnRuID0gdGhpcy50ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCcjY2xlYXItY2FydCcpO1xuXG4gICAgY2FydENsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2IpO1xuICB9XG5cbiAgaW5qZWN0VG8obW91bnRQb2ludCkge1xuICAgIC8vIENyZWF0ZSBtYXJrdXAgdGhlbiBpbmplY3QgaXQgaW50byBzZWxlY3RlZCBlbGVtZW50IChtb3VudFBvaW50KSBpbiB0aGUgRE9NXG4gICAgdGhpcy50b0hUTUwoKTtcbiAgICBtb3VudFBvaW50LmFwcGVuZENoaWxkKHRoaXMudGVtcGxhdGUpO1xuICB9XG5cbiAgdG9IVE1MKCkge1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKCd3LWZ1bGwnKTtcblxuICAgIHRhYmxlLmlubmVySFRNTCA9IGBcbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyIGNsYXNzPVwiYm9yZGVyLWIgdGV4dC1sZ1wiPlxuICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtbGVmdCBwYi0yXCI+RMOpc2lnbmF0aW9uPC90aD5cbiAgICAgICAgICA8dGg+UHJpeDwvdGg+XG4gICAgICAgICAgPHRoPlF1YW50aXTDqTwvdGg+XG4gICAgICAgICAgPHRoPlNvdXMtdG90YWw8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICR7dGhpcy5kYXRhLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgIHJldHVybiBgXG4gICAgICAgICAgPHRyIGNsYXNzPVwiYm9yZGVyLWJcIj5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTJcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIml0ZW0uaHRtbD9pZD0ke2l0ZW0uaWR9XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmxpbmUtYmxvY2sgdy1mdWxsIHVwcGVyY2FzZSBmb250LXNlbWlib2xkXCI+UGVsdWNoZSBcIiR7aXRlbS5uYW1lfVwiPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5saW5lLWJsb2NrIHRleHQtc21cIj5SZWY6ICR7aXRlbS5pZH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlciBweS0yXCI+XG4gICAgICAgICAgICAgICR7Zm9ybWF0UHJpY2UoaXRlbS5wcmljZSl9XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXIgcHktMlwiPlxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJjb3VudC1jaGFuZ2VcIiB0eXBlPVwibnVtYmVyXCIgbWluPVwiMVwiIGRhdGEtaWQ9XCIke2l0ZW0uaWR9XCIgdmFsdWU9XCIke2l0ZW0ucXVhbnRpdHl9XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlubGluZS1ibG9jayB3LTE2IHB5LTIgcHgtMSByb3VuZGVkLW1kIGJvcmRlciB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXIgcHktMlwiPiR7Zm9ybWF0UHJpY2UoaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHkpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgYH0pLmpvaW4oJycpXG4gICAgICB9XG4gICAgICA8L3Rib2R5PlxuICAgICAgPHRmb290PlxuICAgICAgICA8dHIgY2xhc3M9XCJmb250LWJvbGRcIj5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xlYXItY2FydFwiIGNsYXNzPVwiYm9yZGVyIGJvcmRlci1yZWQtNDAwIHRleHQtcmVkLTUwMCBweS0yIHB4LTQgcm91bmRlZC1tZCBob3ZlcjpiZy1yZWQtNDAwIGhvdmVyOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgVmlkZXIgbW9uIHBhbmllclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicHktNCB0ZXh0LWNlbnRlciB1cHBlcmNhc2VcIj5Ub3RhbCBULlQuQzo8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LTJ4bFwiPlxuICAgICAgICAgICAgICAke2Zvcm1hdFByaWNlKHRoaXMuZGF0YS50b3RhbCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90Zm9vdD5cbiAgICBgO1xuXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRhYmxlO1xuICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMudG90YWwgPSAwO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBDaGVjayBpZiBhIGNhcnQgaGFzIGJlZW4gc2F2ZWQgdGhlbiBsb2FkIGl0XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpIHtcbiAgICAgIGNvbnN0IGNhcnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpO1xuICAgICAgdGhpcy5pdGVtcyA9IGNhcnQuaXRlbXM7XG4gICAgICB0aGlzLnRvdGFsID0gY2FydC50b3RhbDtcbiAgICB9XG4gIH1cblxuICBhZGRJdGVtKG5ld0l0ZW0pIHtcbiAgICBsZXQgZHVwbGljYXRlID0gZmFsc2U7XG5cbiAgICAvLyBDaGVjayBpZiBpdGVtIHJlZmVyZW5jZSBpcyBpbiBjYXJ0IHRvIHVwZGF0ZSBxdWFudGl0eVxuICAgIHRoaXMuaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uaWQgPT09IG5ld0l0ZW0uaWQpIHtcbiAgICAgICAgaXRlbS5xdWFudGl0eSArPSBuZXdJdGVtLnF1YW50aXR5O1xuICAgICAgICBkdXBsaWNhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFkdXBsaWNhdGUpIHtcbiAgICAgIHRoaXMuaXRlbXMucHVzaChuZXdJdGVtKTtcbiAgICB9XG5cbiAgICAvLyBSZWNhbGN1bGF0ZSBjYXJ0IHRvdGFsXG4gICAgdGhpcy5zZXRUb3RhbCgpO1xuXG4gICAgLy8gU2F2ZSB0aGUgY2FydCBpbiBsb2NhbFN0b3JhZ2VcbiAgICB0aGlzLnNhdmUoKTtcbiAgfVxuXG4gIHNldFRvdGFsKCkge1xuICAgIHRoaXMudG90YWwgPSB0aGlzLml0ZW1zLnJlZHVjZSgodG90YWwsIGN1cnJlbnQpID0+IHtcbiAgICAgIHJldHVybiB0b3RhbCArIChjdXJyZW50LnF1YW50aXR5ICogY3VycmVudC5wcmljZSk7XG4gICAgfSwgMClcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgY29uc3QgY2FydEluZm9ybWF0aW9ucyA9IHtcbiAgICAgIGl0ZW1zOiB0aGlzLml0ZW1zLFxuICAgICAgdG90YWw6IHRoaXMudG90YWxcbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnRJbmZvcm1hdGlvbnMpKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIC8vIEVtcHR5IHRoZSBjYXJ0XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIC8vIFJlc2V0IHRvdGFsXG4gICAgdGhpcy50b3RhbCA9IDA7XG5cbiAgICAvLyBSZW1vdmUgc2F2ZWRcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoO1xuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICBjb25zdCBjYXJ0RGF0YSA9IHtcbiAgICAgIGl0ZW1zOiB0aGlzLml0ZW1zLFxuICAgICAgdG90YWw6IHRoaXMudG90YWxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNhcnREYXRhO1xuICB9XG5cbn0iLCJpbXBvcnQgQ2FydE1hbmFnZXIgZnJvbSAnLi9tb2R1bGVzL0NhcnRNYW5hZ2VyJztcbmltcG9ydCBUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvVGFibGUnO1xuaW1wb3J0IGRlZmF1bHRNYXJrdXAgZnJvbSAnLi90ZW1wbGF0ZXMvZGVmYXVsdE1hcmt1cCc7XG5cbmNvbnN0IGNhcnQgPSBuZXcgQ2FydE1hbmFnZXIoKTtcblxuY29uc3QgY2FydE1vdW50UG9pbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JkZXInKTtcblxuaWYgKGNhcnQuZ2V0Q291bnQoKSA+IDApIHtcbiAgY29uc3Qgc3VtbWFyeSA9IG5ldyBUYWJsZShjYXJ0LmdldERhdGEoKSk7XG5cbiAgc3VtbWFyeS5pbmplY3RUbyhjYXJ0TW91bnRQb2ludCk7XG5cbiAgc3VtbWFyeS5vbkNhcnRDbGVhcigoKSA9PiB7XG4gICAgY2FydC5jbGVhcigpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSlcblxufSBlbHNlIHtcbiAgY2FydE1vdW50UG9pbnQuaW5uZXJIVE1MID0gZGVmYXVsdE1hcmt1cC5lbXB0eUNhcnQ7XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICBlbXB0eUNhcnQ6IGBcbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICA8cD5Wb3RyZSBwYW5pZXIgZXN0IHZpZGUuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJtdC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgPGEgaHJlZj1cImluZGV4Lmh0bWxcIlxuICAgICAgICBjbGFzcz1cImlubGluZS1ibG9jayBweC00IHB5LTIgYm9yZGVyIHRleHQtYmx1ZS01MDAgYm9yZGVyLWJsdWUtNTAwIHJvdW5kZWQtbWQgZm9udC1tZWRpdW0gaG92ZXI6YmctYmx1ZS01MDAgaG92ZXI6dGV4dC13aGl0ZVwiPlxuICAgICAgICBEw6ljb3V2cmlyIG5vcyBhcnRpY2xlc1xuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICBgLFxuXG4gIG5vdEZvdW5kSXRlbTogYFxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgPGgyIGNsYXNzPVwidGV4dC14bFwiPkwnYXJ0aWNsZSBkZW1hbmTDqSBuJ2V4aXN0ZSBwYXMuPC9oMj5cbiAgICAgIDxwIGNsYXNzPVwibXQtNlwiPlxuICAgICAgICA8YSBjbGFzcz1cInVuZGVybGluZSB0ZXh0LWJsdWUtNjAwIGhvdmVyOnRleHQtYmx1ZS04MDBcIiBocmVmPVwiaW5kZXguaHRtbFwiPlJldG91cm5lciDDoCBsYSBwYWdlIGQnYWNjdWVpbC48L2E+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIGBcbn0iLCIvLyBNYWtlIHByaWNlIHJlYWRhYmxlIGZvciB1c2Vyc1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFByaWNlKHByaWNlKSB7XG4gIHByaWNlID0gcHJpY2UgLyAxMDA7XG5cbiAgcmV0dXJuIHByaWNlLnRvRml4ZWQoMikgKyAnIOKCrCc7XG59XG5cblxuLy8gR2V0IGlkIGZyb20gdXJsIHBhcmFtZXRlcnNcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0SWRGcm9tVXJsKCkge1xuICBjb25zdCBpZCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3BsaXQoXCI9XCIpWzFdO1xuXG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBpZDtcbn1cblxuLy8gQW5pbWF0ZSBjYXJ0IGJ1dHRvbiB3aGVuIGFuIGl0ZW0gaGFzIGJlZW4gYWRkZWRcbmV4cG9ydCBmdW5jdGlvbiBhbmltYXRlQ2FydEJ0bigpIHtcbiAgY29uc3QgY2FydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJ0LWJ0bicpO1xuXG4gIGNhcnRCdG4uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpO1xuXG4gIGNhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKVxuICB9KVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9vcmRlci5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=
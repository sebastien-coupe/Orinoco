/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

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

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/js/components/ContactForm.js":
/*!******************************************!*\
  !*** ./src/js/components/ContactForm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ContactForm
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var ContactForm = /*#__PURE__*/function () {
  function ContactForm() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ContactForm);

    this.template = null;
    this.data = {};
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ContactForm, [{
    key: "injectTo",
    value: function injectTo(mountPoint) {
      // Create markup then inject it into selected element (mountPoint) in the DOM
      this.toHTML();
      mountPoint.appendChild(this.template);
    }
  }, {
    key: "validate",
    value: function validate() {
      var lastName = document.querySelector('#lastname').value || null;
      var firstName = document.querySelector('#firstname').value || null;
      var address = document.querySelector('#address').value || null;
      var city = document.querySelector('#city').value || null;
      var email = document.querySelector('#email').value || null;

      if (lastName, firstName, address, city, email) {
        this.data = {
          lastName: lastName,
          firstName: firstName,
          address: address,
          city: city,
          email: email
        };
        return true;
      }

      return false;
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(cb) {
      var _this = this;

      var form = this.template.querySelector('#contact');
      form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (_this.validate()) {
          cb(_this.data);
        } else {
          console.error('Une erreur est survenue!');
        }
      });
    }
  }, {
    key: "toHTML",
    value: function toHTML() {
      var form = document.createElement('div');
      form.classList.add('mt-16', 'max-w-screen-sm', 'mx-auto');
      form.innerHTML = "\n      <h2 class=\"text-center text-2xl\">Informations de livraison</h2>\n      <form id=\"contact\" class=\"mt-8\">\n        <div class=\"px-4 py-2 bg-yellow-200 text-sm text-yellow-900 rounded-md\">\n          <span class=\"mr-2\">&#128712;</span>Les champs pr\xE9c\xE9d\xE9s d'un\n          <strong>*</strong> sont obligatoires.\n        </div>\n        <div class=\"flex flex-col gap-4 mt-8 sm:flex-row sm:gap-8\">\n          <div class=\"flex-1\">\n            <label for=\"lastname\" class=\"inline-block w-full text-sm\">*Nom:</label>\n            <input\n              type=\"text\"\n              name=\"lastname\"\n              id=\"lastname\"\n              required\n              class=\"w-full mt-1 px-4 py-2 border rounded-md\"\n            />\n          </div>\n          <div class=\"flex-1\">\n            <label for=\"firstname\" class=\"inline-block w-full text-sm\"\n              >*Pr\xE9nom:</label\n            >\n            <input\n              type=\"text\"\n              name=\"firstname\"\n              id=\"firstname\"\n              required\n              class=\"w-full mt-1 px-4 py-2 border rounded-md\"\n            />\n          </div>\n        </div>\n        <div class=\"mt-4\">\n          <label for=\"address\" class=\"inline-block w-full text-sm\">*Adresse:</label>\n          <input\n            type=\"text\"\n            name=\"address\"\n            id=\"address\"\n            required\n            class=\"w-full mt-1 px-4 py-2 border rounded-md\"\n          />\n        </div>\n        <div class=\"mt-4\">\n          <label for=\"address-complement\" class=\"inline-block w-full text-sm\"\n            >Compl\xE8ment d'adresse:</label\n          >\n          <input\n            type=\"text\"\n            name=\"address-complement\"\n            id=\"address-complement\"\n            class=\"w-full mt-1 px-4 py-2 border rounded-md\"\n          />\n        </div>\n        <div class=\"flex flex-col gap-4 sm:flex-row sm:gap-8 mt-4\">\n          <div class=\"flex-1\">\n            <label for=\"zip\" class=\"inline-block w-full text-sm\"\n              >Code postal:</label\n            >\n            <input\n              type=\"text\"\n              name=\"zip\"\n              id=\"zip\"\n              class=\"w-full mt-1 px-4 py-2 border rounded-md\"\n            />\n          </div>\n          <div class=\"flex-1\">\n            <label for=\"city\" class=\"inline-block w-full text-sm\">*Ville:</label>\n            <input\n              type=\"text\"\n              name=\"city\"\n              id=\"city\"\n              required\n              class=\"w-full mt-1 px-4 py-2 border rounded-md\"\n            />\n          </div>\n        </div>\n        <div class=\"mt-4\">\n          <label for=\"email\" class=\"inline-block w-full text-sm\"\n            >Adresse mail:</label\n          >\n          <input\n            type=\"email\"\n            name=\"email\"\n            id=\"email\"\n            required\n            class=\"w-full mt-1 px-4 py-2 border rounded-md\"\n          />\n        </div>\n        <div class=\"mt-4\">\n          <label for=\"email-confirm\" class=\"inline-block w-full text-sm\"\n            >Confirmer l'adresse mail:</label\n          >\n          <input\n            type=\"email\"\n            name=\"email-confirm\"\n            id=\"email-confirm\"\n            required\n            class=\"w-full mt-1 px-4 py-2 border rounded-md\"\n          />\n        </div>\n        <div class=\"mt-8 text-right\">\n          <button\n            type=\"submit\"\n            class=\"inline-block bg-blue-200 px-4 py-2 text-blue-900 rounded-md text-lg font-semibold hover:bg-blue-300\"\n          >\n          Commander\n          </button>\n        </div>\n      </form>\n    ";
      this.template = form;
    }
  }]);

  return ContactForm;
}();



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
/* harmony import */ var _modules_CartManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/CartManager */ "./src/js/modules/CartManager.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./src/js/utils.js");



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




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
    key: "onCartConfirmation",
    value: function onCartConfirmation(cb) {
      var confirmCartBtn = this.template.querySelector('#confirm-cart');
      confirmCartBtn.addEventListener('click', cb);
    }
  }, {
    key: "injectTo",
    value: function injectTo(mountPoint) {
      // Create markup then inject it into selected element (mountPoint) in the DOM
      this.toHTML();
      mountPoint.appendChild(this.template);
    }
  }, {
    key: "updatePrice",
    value: function updatePrice() {
      var _this = this;

      var quantity = this.template.getElementsByClassName('quantity');
      console.log(quantity);

      var _iterator = _createForOfIteratorHelper(quantity),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var qty = _step.value;
          qty.addEventListener('change', function (event) {
            var itemId = event.target.dataset.id;
            var unitPrice = parseInt(document.getElementById("price-".concat(itemId)).dataset.price);
            var total = document.getElementById("total-".concat(itemId));
            var store = new _modules_CartManager__WEBPACK_IMPORTED_MODULE_2__.default();
            total.textContent = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.formatPrice)(unitPrice * event.target.value);
            total.dataset.total = parseInt(unitPrice * event.target.value);

            _this.setTotal();

            store.updateItem(itemId, parseInt(event.target.value));
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      var removeBtn = this.template.getElementsByClassName('remove');
      console.log(removeBtn);

      var _iterator2 = _createForOfIteratorHelper(removeBtn),
          _step2;

      try {
        var _loop = function _loop() {
          var remove = _step2.value;
          remove.addEventListener('click', function (event) {
            var store = new _modules_CartManager__WEBPACK_IMPORTED_MODULE_2__.default();
            store.removeItem(remove.dataset.id);
            window.location.reload();
          });
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "setTotal",
    value: function setTotal() {
      var totalPerItem = document.getElementsByClassName('total-per-item');
      var cartTotal = document.getElementById('cart-total');
      var total = 0;

      var _iterator3 = _createForOfIteratorHelper(totalPerItem),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var item = _step3.value;
          total += parseInt(item.dataset.total);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      cartTotal.textContent = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.formatPrice)(total);
    }
  }, {
    key: "toHTML",
    value: function toHTML() {
      var container = document.createElement("div");
      var table = document.createElement('table');
      table.classList.add('w-full');
      table.innerHTML = "\n      <thead>\n        <tr class=\"border-b text-lg\">\n          <th class=\"text-left pb-2\">D\xE9signation</th>\n          <th>Prix</th>\n          <th>Quantit\xE9</th>\n          <th>Sous-total</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n      ".concat(this.data.items.map(function (item) {
        return "\n          <tr class=\"border-b\">\n            <td class=\"py-2\">\n              <a href=\"item.html?id=".concat(item.id, "\">\n                <span class=\"inline-block w-full uppercase font-semibold\">Peluche \"").concat(item.name, "\"</span>\n                <span class=\"inline-block text-sm\">Ref: ").concat(item.id, "</span>\n              </a>\n            </td>\n            <td id=\"price-").concat(item.id, "\" data-price=\"").concat(item.price, "\" class=\"text-center py-2\">\n              ").concat((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.formatPrice)(item.price), "\n            </td>\n            <td class=\"text-center py-2\">\n              <input type=\"number\" min=\"1\" data-id=\"").concat(item.id, "\" value=\"").concat(item.quantity, "\"\n              class=\"quantity inline-block w-16 py-2 px-1 rounded-md border text-center\"\n              />\n            </td>\n            <td id=\"total-").concat(item.id, "\" data-total=\"").concat(item.price * item.quantity, "\" class=\"total-per-item text-center py-2\">").concat((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.formatPrice)(item.price * item.quantity), "</td>\n            <td class=\"px-4\">\n              <button title=\"Supprimer l'article du panier\" data-id=\"").concat(item.id, "\" class=\"remove text-lg text-red-400\">&#10006;</button>\n            </td>\n          </tr>\n        ");
      }).join(''), "\n      </tbody>\n      <tfoot>\n        <tr class=\"font-bold\">\n          <td>\n            <button id=\"clear-cart\" class=\"border border-red-400 text-red-500 py-2 px-4 rounded-md hover:bg-red-400 hover:text-white\">\n              Vider mon panier\n                </button>\n          </td>\n          <td></td>\n          <td class=\"py-4 text-center uppercase\">Total T.T.C:</td>\n          <td class=\"py-4 text-center\">\n            <div id=\"cart-total\" class=\"text-2xl\">\n              ").concat((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.formatPrice)(this.data.total), "\n            </div>\n          </td>\n        </tr>\n      </tfoot>\n    ");
      var cta = document.createElement('div');
      cta.classList.add('mt-16', 'text-right');
      cta.innerHTML = "\n      <button id=\"confirm-cart\" class=\"inline-block px-4 py-2 border text-blue-500 border-blue-500 rounded-md font-medium hover:bg-blue-500 hover:text-white\">\n        Valider le panier\n      </button>\n    ";
      container.appendChild(table);
      container.appendChild(cta);
      this.template = container;
      this.updatePrice();
      this.remove();
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
      } // Save the cart in localStorage


      this.save();
    }
  }, {
    key: "removeItem",
    value: function removeItem(id) {
      this.items = this.items.filter(function (item) {
        return item.id !== id;
      });
      this.save();
    }
  }, {
    key: "updateItem",
    value: function updateItem(id, quantity) {
      this.items.map(function (item) {
        if (item.id === id) {
          item.quantity = quantity;
        }
      });
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
      this.setTotal();
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
  }, {
    key: "getItems",
    value: function getItems() {
      return this.items.map(function (item) {
        return item.id;
      });
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/js/modules/DataManager.js":
/*!***************************************!*\
  !*** ./src/js/modules/DataManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _default
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var _default = /*#__PURE__*/function () {
  function _default(api) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, _default);

    this.api = api;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(_default, [{
    key: "fetchData",
    value: function () {
      var _fetchData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var id,
            response,
            data,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
                _context.prev = 1;

                if (!id) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return fetch(this.api + id);

              case 5:
                response = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.next = 10;
                return fetch(this.api);

              case 10:
                response = _context.sent;

              case 11:
                _context.next = 13;
                return response.json();

              case 13:
                data = _context.sent;
                return _context.abrupt("return", data);

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](1);
                console.error('La connection avec le serveur n\'a pu être établie.\n' + _context.t0);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 17]]);
      }));

      function fetchData() {
        return _fetchData.apply(this, arguments);
      }

      return fetchData;
    }()
  }, {
    key: "fetch",
    value: function () {
      var _fetch = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.fetchData(id);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      return fetch;
    }()
  }, {
    key: "fetchAll",
    value: function () {
      var _fetchAll = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.fetchData();

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function fetchAll() {
        return _fetchAll.apply(this, arguments);
      }

      return fetchAll;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(order) {
        var request, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return fetch(this.api, {
                  method: "POST",
                  body: JSON.stringify(order),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8"
                  }
                });

              case 2:
                request = _context4.sent;
                response = request.json();
                return _context4.abrupt("return", response);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function send(_x2) {
        return _send.apply(this, arguments);
      }

      return send;
    }()
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
/* harmony import */ var _modules_DataManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DataManager */ "./src/js/modules/DataManager.js");
/* harmony import */ var _modules_CartManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/CartManager */ "./src/js/modules/CartManager.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Table */ "./src/js/components/Table.js");
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ContactForm */ "./src/js/components/ContactForm.js");
/* harmony import */ var _templates_defaultMarkup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/defaultMarkup */ "./src/js/templates/defaultMarkup.js");





var cart = new _modules_CartManager__WEBPACK_IMPORTED_MODULE_1__.default();
var cartMountPoint = document.getElementById('order');

if (cart.getCount() > 0) {
  var summary = new _components_Table__WEBPACK_IMPORTED_MODULE_2__.default(cart.getData());
  summary.injectTo(cartMountPoint);
  summary.onCartConfirmation(function (event) {
    var form = new _components_ContactForm__WEBPACK_IMPORTED_MODULE_3__.default();
    form.injectTo(cartMountPoint);
    event.target.remove();
    form.onSubmit(function (data) {
      var order = {
        contact: data,
        products: cart.getItems()
      };
      var api = new _modules_DataManager__WEBPACK_IMPORTED_MODULE_0__.default('http://localhost:3000/api/teddies/order/');
      api.send(order).then(function (data) {
        cartMountPoint.innerHTML = _templates_defaultMarkup__WEBPACK_IMPORTED_MODULE_4__.default.orderSuccess(data.orderId);
        cart.clear();
      });
    });
  });
  summary.onCartClear(function () {
    cart.clear();
    cartMountPoint.innerHTML = _templates_defaultMarkup__WEBPACK_IMPORTED_MODULE_4__.default.emptyCart;
  });
} else {
  cartMountPoint.innerHTML = _templates_defaultMarkup__WEBPACK_IMPORTED_MODULE_4__.default.emptyCart;
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
  notFoundItem: "\n    <div class=\"text-center\">\n      <h2 class=\"text-xl\">L'article demand\xE9 n'existe pas.</h2>\n      <p class=\"mt-6\">\n        <a class=\"underline text-blue-600 hover:text-blue-800\" href=\"index.html\">Retourner \xE0 la page d'accueil.</a>\n      </p>\n    </div>\n  ",
  orderSuccess: function orderSuccess(id) {
    return "\n      <div class=\"max-w-lg mx-auto p-8 text-green-800 bg-green-100 rounded-md border border-green-200\">\n        <h2 class=\"text-xl text-center\">Votre commande a \xE9t\xE9 valid\xE9e</h2>\n        <p class=\"mt-6\">Orinoco vous remercie pour votre achat.</p>\n        <p class=\"mt-4\">\n          La commande ref: <strong>".concat(id, "</strong> est en cours de\n          traitement et sera exp\xE9di\xE9 dans les meilleurs d\xE9lais.\n        </p>\n        <p class=\"mt-6 text-right\">A bient\xF4t sur Orinoco.</p>\n      </div>\n    ");
  }
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

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcmlub2NvLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9vcmlub2NvLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vb3Jpbm9jby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL29yaW5vY28vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb3Jpbm9jby8uL3NyYy9qcy9jb21wb25lbnRzL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovL29yaW5vY28vLi9zcmMvanMvY29tcG9uZW50cy9UYWJsZS5qcyIsIndlYnBhY2s6Ly9vcmlub2NvLy4vc3JjL2pzL21vZHVsZXMvQ2FydE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vb3Jpbm9jby8uL3NyYy9qcy9tb2R1bGVzL0RhdGFNYW5hZ2VyLmpzIiwid2VicGFjazovL29yaW5vY28vLi9zcmMvanMvb3JkZXIuanMiLCJ3ZWJwYWNrOi8vb3Jpbm9jby8uL3NyYy9qcy90ZW1wbGF0ZXMvZGVmYXVsdE1hcmt1cC5qcyIsIndlYnBhY2s6Ly9vcmlub2NvLy4vc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovL29yaW5vY28vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL29yaW5vY28vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb3Jpbm9jby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vcmlub2NvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vcmlub2NvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb3Jpbm9jby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29yaW5vY28vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkNvbnRhY3RGb3JtIiwidGVtcGxhdGUiLCJkYXRhIiwibW91bnRQb2ludCIsInRvSFRNTCIsImFwcGVuZENoaWxkIiwibGFzdE5hbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImZpcnN0TmFtZSIsImFkZHJlc3MiLCJjaXR5IiwiZW1haWwiLCJjYiIsImZvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkYXRlIiwiY29uc29sZSIsImVycm9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImNhcnRDbGVhckJ0biIsImNvbmZpcm1DYXJ0QnRuIiwicXVhbnRpdHkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibG9nIiwicXR5IiwiaXRlbUlkIiwidGFyZ2V0IiwiZGF0YXNldCIsImlkIiwidW5pdFByaWNlIiwicGFyc2VJbnQiLCJnZXRFbGVtZW50QnlJZCIsInByaWNlIiwidG90YWwiLCJzdG9yZSIsIkNhcnRNYW5hZ2VyIiwidGV4dENvbnRlbnQiLCJmb3JtYXRQcmljZSIsInNldFRvdGFsIiwidXBkYXRlSXRlbSIsInJlbW92ZUJ0biIsInJlbW92ZSIsInJlbW92ZUl0ZW0iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInRvdGFsUGVySXRlbSIsImNhcnRUb3RhbCIsIml0ZW0iLCJjb250YWluZXIiLCJ0YWJsZSIsIml0ZW1zIiwibWFwIiwibmFtZSIsImpvaW4iLCJjdGEiLCJ1cGRhdGVQcmljZSIsImluaXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FydCIsIkpTT04iLCJwYXJzZSIsIm5ld0l0ZW0iLCJkdXBsaWNhdGUiLCJwdXNoIiwic2F2ZSIsImZpbHRlciIsInJlZHVjZSIsImN1cnJlbnQiLCJjYXJ0SW5mb3JtYXRpb25zIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNsZWFyIiwibGVuZ3RoIiwiY2FydERhdGEiLCJhcGkiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImZldGNoRGF0YSIsIm9yZGVyIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJyZXF1ZXN0IiwiY2FydE1vdW50UG9pbnQiLCJnZXRDb3VudCIsInN1bW1hcnkiLCJUYWJsZSIsImdldERhdGEiLCJpbmplY3RUbyIsIm9uQ2FydENvbmZpcm1hdGlvbiIsIm9uU3VibWl0IiwiY29udGFjdCIsInByb2R1Y3RzIiwiZ2V0SXRlbXMiLCJEYXRhTWFuYWdlciIsInNlbmQiLCJ0aGVuIiwiZGVmYXVsdE1hcmt1cCIsIm9yZGVySWQiLCJvbkNhcnRDbGVhciIsImVtcHR5Q2FydCIsIm5vdEZvdW5kSXRlbSIsIm9yZGVyU3VjY2VzcyIsInRvRml4ZWQiLCJleHRyYWN0SWRGcm9tVXJsIiwic2VhcmNoIiwic3BsaXQiLCJhbmltYXRlQ2FydEJ0biIsImNhcnRCdG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLG1DOzs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Qjs7Ozs7Ozs7OztBQ2hCQSxnSEFB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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsQ0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMzdUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im9yZGVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3RGb3JtIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IG51bGw7XG4gICAgdGhpcy5kYXRhID0ge307XG4gIH1cblxuICBpbmplY3RUbyhtb3VudFBvaW50KSB7XG4gICAgLy8gQ3JlYXRlIG1hcmt1cCB0aGVuIGluamVjdCBpdCBpbnRvIHNlbGVjdGVkIGVsZW1lbnQgKG1vdW50UG9pbnQpIGluIHRoZSBET01cbiAgICB0aGlzLnRvSFRNTCgpO1xuICAgIG1vdW50UG9pbnQuYXBwZW5kQ2hpbGQodGhpcy50ZW1wbGF0ZSk7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICBjb25zdCBsYXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXN0bmFtZScpLnZhbHVlIHx8IG51bGxcbiAgICBjb25zdCBmaXJzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlyc3RuYW1lJykudmFsdWUgfHwgbnVsbFxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkcmVzcycpLnZhbHVlIHx8IG51bGxcbiAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKS52YWx1ZSB8fCBudWxsXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKS52YWx1ZSB8fCBudWxsXG5cbiAgICBpZiAobGFzdE5hbWUsIGZpcnN0TmFtZSwgYWRkcmVzcywgY2l0eSwgZW1haWwpIHtcbiAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgbGFzdE5hbWUsXG4gICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgY2l0eSxcbiAgICAgICAgZW1haWxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25TdWJtaXQoY2IpIHtcbiAgICBjb25zdCBmb3JtID0gdGhpcy50ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCcjY29udGFjdCcpO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy52YWxpZGF0ZSgpKSB7XG4gICAgICAgIGNiKHRoaXMuZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSEnKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdG9IVE1MKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ210LTE2JywgJ21heC13LXNjcmVlbi1zbScsICdteC1hdXRvJyk7XG5cbiAgICBmb3JtLmlubmVySFRNTCA9IGBcbiAgICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtMnhsXCI+SW5mb3JtYXRpb25zIGRlIGxpdnJhaXNvbjwvaDI+XG4gICAgICA8Zm9ybSBpZD1cImNvbnRhY3RcIiBjbGFzcz1cIm10LThcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInB4LTQgcHktMiBiZy15ZWxsb3ctMjAwIHRleHQtc20gdGV4dC15ZWxsb3ctOTAwIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1yLTJcIj4mIzEyODcxMjs8L3NwYW4+TGVzIGNoYW1wcyBwcsOpY8OpZMOpcyBkJ3VuXG4gICAgICAgICAgPHN0cm9uZz4qPC9zdHJvbmc+IHNvbnQgb2JsaWdhdG9pcmVzLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgZ2FwLTQgbXQtOCBzbTpmbGV4LXJvdyBzbTpnYXAtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0bmFtZVwiIGNsYXNzPVwiaW5saW5lLWJsb2NrIHctZnVsbCB0ZXh0LXNtXCI+Kk5vbTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImxhc3RuYW1lXCJcbiAgICAgICAgICAgICAgaWQ9XCJsYXN0bmFtZVwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIG10LTEgcHgtNCBweS0yIGJvcmRlciByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtMVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0bmFtZVwiIGNsYXNzPVwiaW5saW5lLWJsb2NrIHctZnVsbCB0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgPipQcsOpbm9tOjwvbGFiZWxcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJmaXJzdG5hbWVcIlxuICAgICAgICAgICAgICBpZD1cImZpcnN0bmFtZVwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIG10LTEgcHgtNCBweS0yIGJvcmRlciByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXQtNFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZGRyZXNzXCIgY2xhc3M9XCJpbmxpbmUtYmxvY2sgdy1mdWxsIHRleHQtc21cIj4qQWRyZXNzZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxuICAgICAgICAgICAgaWQ9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBjbGFzcz1cInctZnVsbCBtdC0xIHB4LTQgcHktMiBib3JkZXIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC00XCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImFkZHJlc3MtY29tcGxlbWVudFwiIGNsYXNzPVwiaW5saW5lLWJsb2NrIHctZnVsbCB0ZXh0LXNtXCJcbiAgICAgICAgICAgID5Db21wbMOobWVudCBkJ2FkcmVzc2U6PC9sYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzLWNvbXBsZW1lbnRcIlxuICAgICAgICAgICAgaWQ9XCJhZGRyZXNzLWNvbXBsZW1lbnRcIlxuICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgbXQtMSBweC00IHB5LTIgYm9yZGVyIHJvdW5kZWQtbWRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBzbTpmbGV4LXJvdyBzbTpnYXAtOCBtdC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtMVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInppcFwiIGNsYXNzPVwiaW5saW5lLWJsb2NrIHctZnVsbCB0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgPkNvZGUgcG9zdGFsOjwvbGFiZWxcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ6aXBcIlxuICAgICAgICAgICAgICBpZD1cInppcFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIG10LTEgcHgtNCBweS0yIGJvcmRlciByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtMVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIiBjbGFzcz1cImlubGluZS1ibG9jayB3LWZ1bGwgdGV4dC1zbVwiPipWaWxsZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImNpdHlcIlxuICAgICAgICAgICAgICBpZD1cImNpdHlcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbCBtdC0xIHB4LTQgcHktMiBib3JkZXIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LTRcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIiBjbGFzcz1cImlubGluZS1ibG9jayB3LWZ1bGwgdGV4dC1zbVwiXG4gICAgICAgICAgICA+QWRyZXNzZSBtYWlsOjwvbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIG10LTEgcHgtNCBweS0yIGJvcmRlciByb3VuZGVkLW1kXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LTRcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWwtY29uZmlybVwiIGNsYXNzPVwiaW5saW5lLWJsb2NrIHctZnVsbCB0ZXh0LXNtXCJcbiAgICAgICAgICAgID5Db25maXJtZXIgbCdhZHJlc3NlIG1haWw6PC9sYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWwtY29uZmlybVwiXG4gICAgICAgICAgICBpZD1cImVtYWlsLWNvbmZpcm1cIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIG10LTEgcHgtNCBweS0yIGJvcmRlciByb3VuZGVkLW1kXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LTggdGV4dC1yaWdodFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgY2xhc3M9XCJpbmxpbmUtYmxvY2sgYmctYmx1ZS0yMDAgcHgtNCBweS0yIHRleHQtYmx1ZS05MDAgcm91bmRlZC1tZCB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctYmx1ZS0zMDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICBDb21tYW5kZXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgYDtcblxuICAgIHRoaXMudGVtcGxhdGUgPSBmb3JtO1xuICB9XG5cbn0iLCJpbXBvcnQgQ2FydE1hbmFnZXIgZnJvbSAnLi4vbW9kdWxlcy9DYXJ0TWFuYWdlcic7XG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4uL3V0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLnRlbXBsYXRlID0gbnVsbDtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG5cbiAgb25DYXJ0Q2xlYXIoY2IpIHtcbiAgICBjb25zdCBjYXJ0Q2xlYXJCdG4gPSB0aGlzLnRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJyNjbGVhci1jYXJ0Jyk7XG5cbiAgICBjYXJ0Q2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYik7XG4gIH1cblxuICBvbkNhcnRDb25maXJtYXRpb24oY2IpIHtcbiAgICBjb25zdCBjb25maXJtQ2FydEJ0biA9IHRoaXMudGVtcGxhdGUucXVlcnlTZWxlY3RvcignI2NvbmZpcm0tY2FydCcpO1xuXG4gICAgY29uZmlybUNhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYik7XG4gIH1cblxuICBpbmplY3RUbyhtb3VudFBvaW50KSB7XG4gICAgLy8gQ3JlYXRlIG1hcmt1cCB0aGVuIGluamVjdCBpdCBpbnRvIHNlbGVjdGVkIGVsZW1lbnQgKG1vdW50UG9pbnQpIGluIHRoZSBET01cbiAgICB0aGlzLnRvSFRNTCgpO1xuICAgIG1vdW50UG9pbnQuYXBwZW5kQ2hpbGQodGhpcy50ZW1wbGF0ZSk7XG4gIH1cblxuICB1cGRhdGVQcmljZSgpIHtcbiAgICBjb25zdCBxdWFudGl0eSA9IHRoaXMudGVtcGxhdGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncXVhbnRpdHknKTtcbiAgICBjb25zb2xlLmxvZyhxdWFudGl0eSlcblxuICAgIGZvciAobGV0IHF0eSBvZiBxdWFudGl0eSkge1xuICAgICAgcXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSWQgPSBldmVudC50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgY29uc3QgdW5pdFByaWNlID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByaWNlLSR7aXRlbUlkfWApLmRhdGFzZXQucHJpY2UpO1xuICAgICAgICBjb25zdCB0b3RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0b3RhbC0ke2l0ZW1JZH1gKVxuICAgICAgICBjb25zdCBzdG9yZSA9IG5ldyBDYXJ0TWFuYWdlcigpO1xuXG4gICAgICAgIHRvdGFsLnRleHRDb250ZW50ID0gZm9ybWF0UHJpY2UodW5pdFByaWNlICogZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgdG90YWwuZGF0YXNldC50b3RhbCA9IHBhcnNlSW50KHVuaXRQcmljZSAqIGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgdGhpcy5zZXRUb3RhbCgpO1xuXG4gICAgICAgIHN0b3JlLnVwZGF0ZUl0ZW0oaXRlbUlkLCBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IHRoaXMudGVtcGxhdGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVtb3ZlJyk7XG5cbiAgICBjb25zb2xlLmxvZyhyZW1vdmVCdG4pXG5cbiAgICBmb3IgKGxldCByZW1vdmUgb2YgcmVtb3ZlQnRuKSB7XG4gICAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBuZXcgQ2FydE1hbmFnZXIoKTtcbiAgICAgICAgc3RvcmUucmVtb3ZlSXRlbShyZW1vdmUuZGF0YXNldC5pZCk7XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgfVxuXG4gIHNldFRvdGFsKCkge1xuICAgIGNvbnN0IHRvdGFsUGVySXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvdGFsLXBlci1pdGVtJyk7XG4gICAgY29uc3QgY2FydFRvdGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtdG90YWwnKTtcbiAgICBsZXQgdG90YWwgPSAwO1xuXG4gICAgZm9yIChsZXQgaXRlbSBvZiB0b3RhbFBlckl0ZW0pIHtcbiAgICAgIHRvdGFsICs9IHBhcnNlSW50KGl0ZW0uZGF0YXNldC50b3RhbClcbiAgICB9XG5cbiAgICBjYXJ0VG90YWwudGV4dENvbnRlbnQgPSBmb3JtYXRQcmljZSh0b3RhbClcbiAgfVxuXG4gIHRvSFRNTCgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKCd3LWZ1bGwnKTtcblxuICAgIHRhYmxlLmlubmVySFRNTCA9IGBcbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyIGNsYXNzPVwiYm9yZGVyLWIgdGV4dC1sZ1wiPlxuICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtbGVmdCBwYi0yXCI+RMOpc2lnbmF0aW9uPC90aD5cbiAgICAgICAgICA8dGg+UHJpeDwvdGg+XG4gICAgICAgICAgPHRoPlF1YW50aXTDqTwvdGg+XG4gICAgICAgICAgPHRoPlNvdXMtdG90YWw8L3RoPlxuICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICR7dGhpcy5kYXRhLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgIHJldHVybiBgXG4gICAgICAgICAgPHRyIGNsYXNzPVwiYm9yZGVyLWJcIj5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTJcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIml0ZW0uaHRtbD9pZD0ke2l0ZW0uaWR9XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmxpbmUtYmxvY2sgdy1mdWxsIHVwcGVyY2FzZSBmb250LXNlbWlib2xkXCI+UGVsdWNoZSBcIiR7aXRlbS5uYW1lfVwiPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5saW5lLWJsb2NrIHRleHQtc21cIj5SZWY6ICR7aXRlbS5pZH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgaWQ9XCJwcmljZS0ke2l0ZW0uaWR9XCIgZGF0YS1wcmljZT1cIiR7aXRlbS5wcmljZX1cIiBjbGFzcz1cInRleHQtY2VudGVyIHB5LTJcIj5cbiAgICAgICAgICAgICAgJHtmb3JtYXRQcmljZShpdGVtLnByaWNlKX1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlciBweS0yXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMVwiIGRhdGEtaWQ9XCIke2l0ZW0uaWR9XCIgdmFsdWU9XCIke2l0ZW0ucXVhbnRpdHl9XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJxdWFudGl0eSBpbmxpbmUtYmxvY2sgdy0xNiBweS0yIHB4LTEgcm91bmRlZC1tZCBib3JkZXIgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBpZD1cInRvdGFsLSR7aXRlbS5pZH1cIiBkYXRhLXRvdGFsPVwiJHtpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eX1cIiBjbGFzcz1cInRvdGFsLXBlci1pdGVtIHRleHQtY2VudGVyIHB5LTJcIj4ke2Zvcm1hdFByaWNlKGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5KX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwicHgtNFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPVwiU3VwcHJpbWVyIGwnYXJ0aWNsZSBkdSBwYW5pZXJcIiBkYXRhLWlkPVwiJHtpdGVtLmlkfVwiIGNsYXNzPVwicmVtb3ZlIHRleHQtbGcgdGV4dC1yZWQtNDAwXCI+JiMxMDAwNjs8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgYH0pLmpvaW4oJycpXG4gICAgICB9XG4gICAgICA8L3Rib2R5PlxuICAgICAgPHRmb290PlxuICAgICAgICA8dHIgY2xhc3M9XCJmb250LWJvbGRcIj5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xlYXItY2FydFwiIGNsYXNzPVwiYm9yZGVyIGJvcmRlci1yZWQtNDAwIHRleHQtcmVkLTUwMCBweS0yIHB4LTQgcm91bmRlZC1tZCBob3ZlcjpiZy1yZWQtNDAwIGhvdmVyOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgVmlkZXIgbW9uIHBhbmllclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicHktNCB0ZXh0LWNlbnRlciB1cHBlcmNhc2VcIj5Ub3RhbCBULlQuQzo8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJ0LXRvdGFsXCIgY2xhc3M9XCJ0ZXh0LTJ4bFwiPlxuICAgICAgICAgICAgICAke2Zvcm1hdFByaWNlKHRoaXMuZGF0YS50b3RhbCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90Zm9vdD5cbiAgICBgO1xuXG4gICAgY29uc3QgY3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3RhLmNsYXNzTGlzdC5hZGQoJ210LTE2JywgJ3RleHQtcmlnaHQnKTtcblxuICAgIGN0YS5pbm5lckhUTUwgPSBgXG4gICAgICA8YnV0dG9uIGlkPVwiY29uZmlybS1jYXJ0XCIgY2xhc3M9XCJpbmxpbmUtYmxvY2sgcHgtNCBweS0yIGJvcmRlciB0ZXh0LWJsdWUtNTAwIGJvcmRlci1ibHVlLTUwMCByb3VuZGVkLW1kIGZvbnQtbWVkaXVtIGhvdmVyOmJnLWJsdWUtNTAwIGhvdmVyOnRleHQtd2hpdGVcIj5cbiAgICAgICAgVmFsaWRlciBsZSBwYW5pZXJcbiAgICAgIDwvYnV0dG9uPlxuICAgIGBcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJsZSlcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3RhKVxuXG4gICAgdGhpcy50ZW1wbGF0ZSA9IGNvbnRhaW5lcjtcblxuICAgIHRoaXMudXBkYXRlUHJpY2UoKTtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMudG90YWwgPSAwO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBDaGVjayBpZiBhIGNhcnQgaGFzIGJlZW4gc2F2ZWQgdGhlbiBsb2FkIGl0XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpIHtcbiAgICAgIGNvbnN0IGNhcnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpO1xuICAgICAgdGhpcy5pdGVtcyA9IGNhcnQuaXRlbXM7XG4gICAgICB0aGlzLnRvdGFsID0gY2FydC50b3RhbDtcbiAgICB9XG4gIH1cblxuICBhZGRJdGVtKG5ld0l0ZW0pIHtcbiAgICBsZXQgZHVwbGljYXRlID0gZmFsc2U7XG5cbiAgICAvLyBDaGVjayBpZiBpdGVtIHJlZmVyZW5jZSBpcyBpbiBjYXJ0IHRvIHVwZGF0ZSBxdWFudGl0eVxuICAgIHRoaXMuaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uaWQgPT09IG5ld0l0ZW0uaWQpIHtcbiAgICAgICAgaXRlbS5xdWFudGl0eSArPSBuZXdJdGVtLnF1YW50aXR5O1xuICAgICAgICBkdXBsaWNhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFkdXBsaWNhdGUpIHtcbiAgICAgIHRoaXMuaXRlbXMucHVzaChuZXdJdGVtKTtcbiAgICB9XG5cbiAgICAvLyBTYXZlIHRoZSBjYXJ0IGluIGxvY2FsU3RvcmFnZVxuICAgIHRoaXMuc2F2ZSgpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShpZCkge1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIHJldHVybiBpdGVtLmlkICE9PSBpZDtcbiAgICB9KTtcblxuICAgIHRoaXMuc2F2ZSgpO1xuICB9XG5cbiAgdXBkYXRlSXRlbShpZCwgcXVhbnRpdHkpIHtcbiAgICB0aGlzLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAgICAgICBpdGVtLnF1YW50aXR5ID0gcXVhbnRpdHk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnNhdmUoKTtcbiAgfVxuXG4gIHNldFRvdGFsKCkge1xuICAgIHRoaXMudG90YWwgPSB0aGlzLml0ZW1zLnJlZHVjZSgodG90YWwsIGN1cnJlbnQpID0+IHtcbiAgICAgIHJldHVybiB0b3RhbCArIChjdXJyZW50LnF1YW50aXR5ICogY3VycmVudC5wcmljZSk7XG4gICAgfSwgMClcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgdGhpcy5zZXRUb3RhbCgpO1xuXG4gICAgY29uc3QgY2FydEluZm9ybWF0aW9ucyA9IHtcbiAgICAgIGl0ZW1zOiB0aGlzLml0ZW1zLFxuICAgICAgdG90YWw6IHRoaXMudG90YWxcbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnRJbmZvcm1hdGlvbnMpKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIC8vIEVtcHR5IHRoZSBjYXJ0XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIC8vIFJlc2V0IHRvdGFsXG4gICAgdGhpcy50b3RhbCA9IDA7XG5cbiAgICAvLyBSZW1vdmUgc2F2ZWRcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoO1xuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICBjb25zdCBjYXJ0RGF0YSA9IHtcbiAgICAgIGl0ZW1zOiB0aGlzLml0ZW1zLFxuICAgICAgdG90YWw6IHRoaXMudG90YWxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNhcnREYXRhO1xuICB9XG5cbiAgZ2V0SXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5pZClcbiAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKGFwaSkge1xuICAgIHRoaXMuYXBpID0gYXBpO1xuICB9XG5cbiAgYXN5bmMgZmV0Y2hEYXRhKGlkID0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcmVzcG9uc2U7XG5cbiAgICAgIC8vIFNlbmQgcmVxdWVzdCB0byBBUEkgdGhlbiB3YWl0IGZvciB0aGUgcmVzcG9uc2VcbiAgICAgIGlmIChpZCkge1xuICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMuYXBpICsgaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLmFwaSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENvbnZlcnQgcmVzcG9uc2UgdG8ganNvblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgcmV0dXJuIGRhdGE7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignTGEgY29ubmVjdGlvbiBhdmVjIGxlIHNlcnZldXIgblxcJ2EgcHUgw6p0cmUgw6l0YWJsaWUuXFxuJyArIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmZXRjaChpZCkge1xuICAgIC8vIENhbGwgZmV0Y2hEYXRhIHdpdGggcGFyYW1ldGVyID0+IHJldHVybiAxIGl0ZW1cbiAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaERhdGEoaWQpO1xuICB9XG5cbiAgYXN5bmMgZmV0Y2hBbGwoKSB7XG4gICAgLy8gQ2FsbCBmZXRjaERhdGEgd2l0aG91dCBwYXJhbWV0ZXIgPT4gcmV0dXJuIGFsbCBpdGVtc1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoRGF0YSgpO1xuICB9XG5cbiAgYXN5bmMgc2VuZChvcmRlcikge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCh0aGlzLmFwaSwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9yZGVyKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5qc29uKCk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuXG59IiwiaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gJy4vbW9kdWxlcy9EYXRhTWFuYWdlcic7XG5pbXBvcnQgQ2FydE1hbmFnZXIgZnJvbSAnLi9tb2R1bGVzL0NhcnRNYW5hZ2VyJztcbmltcG9ydCBUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvVGFibGUnO1xuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4vY29tcG9uZW50cy9Db250YWN0Rm9ybSc7XG5pbXBvcnQgZGVmYXVsdE1hcmt1cCBmcm9tICcuL3RlbXBsYXRlcy9kZWZhdWx0TWFya3VwJztcblxuY29uc3QgY2FydCA9IG5ldyBDYXJ0TWFuYWdlcigpO1xuXG5jb25zdCBjYXJ0TW91bnRQb2ludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmRlcicpO1xuXG5pZiAoY2FydC5nZXRDb3VudCgpID4gMCkge1xuICBjb25zdCBzdW1tYXJ5ID0gbmV3IFRhYmxlKGNhcnQuZ2V0RGF0YSgpKTtcblxuICBzdW1tYXJ5LmluamVjdFRvKGNhcnRNb3VudFBvaW50KTtcblxuICBzdW1tYXJ5Lm9uQ2FydENvbmZpcm1hdGlvbigoZXZlbnQpID0+IHtcbiAgICBjb25zdCBmb3JtID0gbmV3IENvbnRhY3RGb3JtKCk7XG4gICAgZm9ybS5pbmplY3RUbyhjYXJ0TW91bnRQb2ludCk7XG4gICAgZXZlbnQudGFyZ2V0LnJlbW92ZSgpO1xuXG4gICAgZm9ybS5vblN1Ym1pdCgoZGF0YSkgPT4ge1xuICAgICAgY29uc3Qgb3JkZXIgPSB7XG4gICAgICAgIGNvbnRhY3Q6IGRhdGEsXG4gICAgICAgIHByb2R1Y3RzOiBjYXJ0LmdldEl0ZW1zKClcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGFwaSA9IG5ldyBEYXRhTWFuYWdlcignaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90ZWRkaWVzL29yZGVyLycpO1xuXG4gICAgICBhcGkuc2VuZChvcmRlcilcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgY2FydE1vdW50UG9pbnQuaW5uZXJIVE1MID0gZGVmYXVsdE1hcmt1cC5vcmRlclN1Y2Nlc3MoZGF0YS5vcmRlcklkKVxuICAgICAgICAgIGNhcnQuY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICB9KVxuXG4gIHN1bW1hcnkub25DYXJ0Q2xlYXIoKCkgPT4ge1xuICAgIGNhcnQuY2xlYXIoKTtcbiAgICBjYXJ0TW91bnRQb2ludC5pbm5lckhUTUwgPSBkZWZhdWx0TWFya3VwLmVtcHR5Q2FydDtcbiAgfSlcblxufSBlbHNlIHtcbiAgY2FydE1vdW50UG9pbnQuaW5uZXJIVE1MID0gZGVmYXVsdE1hcmt1cC5lbXB0eUNhcnQ7XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICBlbXB0eUNhcnQ6IGBcbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICA8cD5Wb3RyZSBwYW5pZXIgZXN0IHZpZGUuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJtdC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgPGEgaHJlZj1cImluZGV4Lmh0bWxcIlxuICAgICAgICBjbGFzcz1cImlubGluZS1ibG9jayBweC00IHB5LTIgYm9yZGVyIHRleHQtYmx1ZS01MDAgYm9yZGVyLWJsdWUtNTAwIHJvdW5kZWQtbWQgZm9udC1tZWRpdW0gaG92ZXI6YmctYmx1ZS01MDAgaG92ZXI6dGV4dC13aGl0ZVwiPlxuICAgICAgICBEw6ljb3V2cmlyIG5vcyBhcnRpY2xlc1xuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICBgLFxuXG4gIG5vdEZvdW5kSXRlbTogYFxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgPGgyIGNsYXNzPVwidGV4dC14bFwiPkwnYXJ0aWNsZSBkZW1hbmTDqSBuJ2V4aXN0ZSBwYXMuPC9oMj5cbiAgICAgIDxwIGNsYXNzPVwibXQtNlwiPlxuICAgICAgICA8YSBjbGFzcz1cInVuZGVybGluZSB0ZXh0LWJsdWUtNjAwIGhvdmVyOnRleHQtYmx1ZS04MDBcIiBocmVmPVwiaW5kZXguaHRtbFwiPlJldG91cm5lciDDoCBsYSBwYWdlIGQnYWNjdWVpbC48L2E+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIGAsXG5cbiAgb3JkZXJTdWNjZXNzKGlkKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJtYXgtdy1sZyBteC1hdXRvIHAtOCB0ZXh0LWdyZWVuLTgwMCBiZy1ncmVlbi0xMDAgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyZWVuLTIwMFwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LXhsIHRleHQtY2VudGVyXCI+Vm90cmUgY29tbWFuZGUgYSDDqXTDqSB2YWxpZMOpZTwvaDI+XG4gICAgICAgIDxwIGNsYXNzPVwibXQtNlwiPk9yaW5vY28gdm91cyByZW1lcmNpZSBwb3VyIHZvdHJlIGFjaGF0LjwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJtdC00XCI+XG4gICAgICAgICAgTGEgY29tbWFuZGUgcmVmOiA8c3Ryb25nPiR7aWR9PC9zdHJvbmc+IGVzdCBlbiBjb3VycyBkZVxuICAgICAgICAgIHRyYWl0ZW1lbnQgZXQgc2VyYSBleHDDqWRpw6kgZGFucyBsZXMgbWVpbGxldXJzIGTDqWxhaXMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJtdC02IHRleHQtcmlnaHRcIj5BIGJpZW50w7R0IHN1ciBPcmlub2NvLjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbn0iLCIvLyBNYWtlIHByaWNlIHJlYWRhYmxlIGZvciB1c2Vyc1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFByaWNlKHByaWNlKSB7XG4gIHByaWNlID0gcHJpY2UgLyAxMDA7XG5cbiAgcmV0dXJuIHByaWNlLnRvRml4ZWQoMikgKyAnIOKCrCc7XG59XG5cblxuLy8gR2V0IGlkIGZyb20gdXJsIHBhcmFtZXRlcnNcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0SWRGcm9tVXJsKCkge1xuICBjb25zdCBpZCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3BsaXQoXCI9XCIpWzFdO1xuXG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBpZDtcbn1cblxuLy8gQW5pbWF0ZSBjYXJ0IGJ1dHRvbiB3aGVuIGFuIGl0ZW0gaGFzIGJlZW4gYWRkZWRcbmV4cG9ydCBmdW5jdGlvbiBhbmltYXRlQ2FydEJ0bigpIHtcbiAgY29uc3QgY2FydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJ0LWJ0bicpO1xuXG4gIGNhcnRCdG4uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpO1xuXG4gIGNhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKVxuICB9KVxufSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL29yZGVyLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==
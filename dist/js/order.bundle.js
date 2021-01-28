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
      api.send(order).then(function (response) {
        cartMountPoint.innerHTML = _templates_defaultMarkup__WEBPACK_IMPORTED_MODULE_4__.default.orderSuccess(response.orderId);
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
    return "\n      <div class=\"max-w-lg mx-auto mt-12 p-8 text-green-800 bg-green-100 rounded-md border border-green-200\">\n        <h2 class=\"text-xl text-center\">Votre commande a \xE9t\xE9 valid\xE9e</h2>\n        <p class=\"mt-6\">Orinoco vous remercie pour votre achat.</p>\n        <p class=\"mt-4\">\n          La commande ref: <strong>".concat(id, "</strong> est en cours de\n          traitement et sera exp\xE9di\xE9 dans les meilleurs d\xE9lais.\n        </p>\n        <p class=\"mt-6 text-right\">A bient\xF4t sur Orinoco.</p>\n      </div>\n    ");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcmlub2NvLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9vcmlub2NvLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vb3Jpbm9jby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL29yaW5vY28vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb3Jpbm9jby8uL3NyYy9qcy9jb21wb25lbnRzL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovL29yaW5vY28vLi9zcmMvanMvY29tcG9uZW50cy9UYWJsZS5qcyIsIndlYnBhY2s6Ly9vcmlub2NvLy4vc3JjL2pzL21vZHVsZXMvQ2FydE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vb3Jpbm9jby8uL3NyYy9qcy9tb2R1bGVzL0RhdGFNYW5hZ2VyLmpzIiwid2VicGFjazovL29yaW5vY28vLi9zcmMvanMvb3JkZXIuanMiLCJ3ZWJwYWNrOi8vb3Jpbm9jby8uL3NyYy9qcy90ZW1wbGF0ZXMvZGVmYXVsdE1hcmt1cC5qcyIsIndlYnBhY2s6Ly9vcmlub2NvLy4vc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovL29yaW5vY28vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL29yaW5vY28vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb3Jpbm9jby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vcmlub2NvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vcmlub2NvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb3Jpbm9jby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29yaW5vY28vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkNvbnRhY3RGb3JtIiwidGVtcGxhdGUiLCJkYXRhIiwibW91bnRQb2ludCIsInRvSFRNTCIsImFwcGVuZENoaWxkIiwibGFzdE5hbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImZpcnN0TmFtZSIsImFkZHJlc3MiLCJjaXR5IiwiZW1haWwiLCJjYiIsImZvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkYXRlIiwiY29uc29sZSIsImVycm9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImNhcnRDbGVhckJ0biIsImNvbmZpcm1DYXJ0QnRuIiwicXVhbnRpdHkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibG9nIiwicXR5IiwiaXRlbUlkIiwidGFyZ2V0IiwiZGF0YXNldCIsImlkIiwidW5pdFByaWNlIiwicGFyc2VJbnQiLCJnZXRFbGVtZW50QnlJZCIsInByaWNlIiwidG90YWwiLCJzdG9yZSIsIkNhcnRNYW5hZ2VyIiwidGV4dENvbnRlbnQiLCJmb3JtYXRQcmljZSIsInNldFRvdGFsIiwidXBkYXRlSXRlbSIsInJlbW92ZUJ0biIsInJlbW92ZSIsInJlbW92ZUl0ZW0iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInRvdGFsUGVySXRlbSIsImNhcnRUb3RhbCIsIml0ZW0iLCJjb250YWluZXIiLCJ0YWJsZSIsIml0ZW1zIiwibWFwIiwibmFtZSIsImpvaW4iLCJjdGEiLCJ1cGRhdGVQcmljZSIsImluaXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FydCIsIkpTT04iLCJwYXJzZSIsIm5ld0l0ZW0iLCJkdXBsaWNhdGUiLCJwdXNoIiwic2F2ZSIsImZpbHRlciIsInJlZHVjZSIsImN1cnJlbnQiLCJjYXJ0SW5mb3JtYXRpb25zIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNsZWFyIiwibGVuZ3RoIiwiY2FydERhdGEiLCJhcGkiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImZldGNoRGF0YSIsIm9yZGVyIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJyZXF1ZXN0IiwiY2FydE1vdW50UG9pbnQiLCJnZXRDb3VudCIsInN1bW1hcnkiLCJUYWJsZSIsImdldERhdGEiLCJpbmplY3RUbyIsIm9uQ2FydENvbmZpcm1hdGlvbiIsIm9uU3VibWl0IiwiY29udGFjdCIsInByb2R1Y3RzIiwiZ2V0SXRlbXMiLCJEYXRhTWFuYWdlciIsInNlbmQiLCJ0aGVuIiwiZGVmYXVsdE1hcmt1cCIsIm9yZGVySWQiLCJvbkNhcnRDbGVhciIsImVtcHR5Q2FydCIsIm5vdEZvdW5kSXRlbSIsIm9yZGVyU3VjY2VzcyIsInRvRml4ZWQiLCJleHRyYWN0SWRGcm9tVXJsIiwic2VhcmNoIiwic3BsaXQiLCJhbmltYXRlQ2FydEJ0biIsImNhcnRCdG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLG1DOzs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Qjs7Ozs7Ozs7OztBQ2hCQSxnSEFB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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLENBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDM3VCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJvcmRlci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0Rm9ybSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGVtcGxhdGUgPSBudWxsO1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICB9XG5cbiAgaW5qZWN0VG8obW91bnRQb2ludCkge1xuICAgIC8vIENyZWF0ZSBtYXJrdXAgdGhlbiBpbmplY3QgaXQgaW50byBzZWxlY3RlZCBlbGVtZW50IChtb3VudFBvaW50KSBpbiB0aGUgRE9NXG4gICAgdGhpcy50b0hUTUwoKTtcbiAgICBtb3VudFBvaW50LmFwcGVuZENoaWxkKHRoaXMudGVtcGxhdGUpO1xuICB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgY29uc3QgbGFzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFzdG5hbWUnKS52YWx1ZSB8fCBudWxsXG4gICAgY29uc3QgZmlyc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpcnN0bmFtZScpLnZhbHVlIHx8IG51bGxcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHJlc3MnKS52YWx1ZSB8fCBudWxsXG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5JykudmFsdWUgfHwgbnVsbFxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJykudmFsdWUgfHwgbnVsbFxuXG4gICAgaWYgKGxhc3ROYW1lLCBmaXJzdE5hbWUsIGFkZHJlc3MsIGNpdHksIGVtYWlsKSB7XG4gICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgIGxhc3ROYW1lLFxuICAgICAgICBmaXJzdE5hbWUsXG4gICAgICAgIGFkZHJlc3MsXG4gICAgICAgIGNpdHksXG4gICAgICAgIGVtYWlsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uU3VibWl0KGNiKSB7XG4gICAgY29uc3QgZm9ybSA9IHRoaXMudGVtcGxhdGUucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMudmFsaWRhdGUoKSkge1xuICAgICAgICBjYih0aGlzLmRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVW5lIGVycmV1ciBlc3Qgc3VydmVudWUhJylcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRvSFRNTCgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdtdC0xNicsICdtYXgtdy1zY3JlZW4tc20nLCAnbXgtYXV0bycpO1xuXG4gICAgZm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICA8aDIgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LTJ4bFwiPkluZm9ybWF0aW9ucyBkZSBsaXZyYWlzb248L2gyPlxuICAgICAgPGZvcm0gaWQ9XCJjb250YWN0XCIgY2xhc3M9XCJtdC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJweC00IHB5LTIgYmcteWVsbG93LTIwMCB0ZXh0LXNtIHRleHQteWVsbG93LTkwMCByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtci0yXCI+JiMxMjg3MTI7PC9zcGFuPkxlcyBjaGFtcHMgcHLDqWPDqWTDqXMgZCd1blxuICAgICAgICAgIDxzdHJvbmc+Kjwvc3Ryb25nPiBzb250IG9ibGlnYXRvaXJlcy5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGdhcC00IG10LTggc206ZmxleC1yb3cgc206Z2FwLThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC0xXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibGFzdG5hbWVcIiBjbGFzcz1cImlubGluZS1ibG9jayB3LWZ1bGwgdGV4dC1zbVwiPipOb206PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJsYXN0bmFtZVwiXG4gICAgICAgICAgICAgIGlkPVwibGFzdG5hbWVcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbCBtdC0xIHB4LTQgcHktMiBib3JkZXIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdG5hbWVcIiBjbGFzcz1cImlubGluZS1ibG9jayB3LWZ1bGwgdGV4dC1zbVwiXG4gICAgICAgICAgICAgID4qUHLDqW5vbTo8L2xhYmVsXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwiZmlyc3RuYW1lXCJcbiAgICAgICAgICAgICAgaWQ9XCJmaXJzdG5hbWVcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbCBtdC0xIHB4LTQgcHktMiBib3JkZXIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LTRcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiYWRkcmVzc1wiIGNsYXNzPVwiaW5saW5lLWJsb2NrIHctZnVsbCB0ZXh0LXNtXCI+KkFkcmVzc2U6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgIGlkPVwiYWRkcmVzc1wiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgbXQtMSBweC00IHB5LTIgYm9yZGVyIHJvdW5kZWQtbWRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXQtNFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZGRyZXNzLWNvbXBsZW1lbnRcIiBjbGFzcz1cImlubGluZS1ibG9jayB3LWZ1bGwgdGV4dC1zbVwiXG4gICAgICAgICAgICA+Q29tcGzDqG1lbnQgZCdhZHJlc3NlOjwvbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiYWRkcmVzcy1jb21wbGVtZW50XCJcbiAgICAgICAgICAgIGlkPVwiYWRkcmVzcy1jb21wbGVtZW50XCJcbiAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIG10LTEgcHgtNCBweS0yIGJvcmRlciByb3VuZGVkLW1kXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgZ2FwLTQgc206ZmxleC1yb3cgc206Z2FwLTggbXQtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ6aXBcIiBjbGFzcz1cImlubGluZS1ibG9jayB3LWZ1bGwgdGV4dC1zbVwiXG4gICAgICAgICAgICAgID5Db2RlIHBvc3RhbDo8L2xhYmVsXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwiemlwXCJcbiAgICAgICAgICAgICAgaWQ9XCJ6aXBcIlxuICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbCBtdC0xIHB4LTQgcHktMiBib3JkZXIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCIgY2xhc3M9XCJpbmxpbmUtYmxvY2sgdy1mdWxsIHRleHQtc21cIj4qVmlsbGU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcbiAgICAgICAgICAgICAgaWQ9XCJjaXR5XCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgbXQtMSBweC00IHB5LTIgYm9yZGVyIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC00XCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCIgY2xhc3M9XCJpbmxpbmUtYmxvY2sgdy1mdWxsIHRleHQtc21cIlxuICAgICAgICAgICAgPkFkcmVzc2UgbWFpbDo8L2xhYmVsXG4gICAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBjbGFzcz1cInctZnVsbCBtdC0xIHB4LTQgcHktMiBib3JkZXIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC00XCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsLWNvbmZpcm1cIiBjbGFzcz1cImlubGluZS1ibG9jayB3LWZ1bGwgdGV4dC1zbVwiXG4gICAgICAgICAgICA+Q29uZmlybWVyIGwnYWRyZXNzZSBtYWlsOjwvbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsLWNvbmZpcm1cIlxuICAgICAgICAgICAgaWQ9XCJlbWFpbC1jb25maXJtXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBjbGFzcz1cInctZnVsbCBtdC0xIHB4LTQgcHktMiBib3JkZXIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC04IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5saW5lLWJsb2NrIGJnLWJsdWUtMjAwIHB4LTQgcHktMiB0ZXh0LWJsdWUtOTAwIHJvdW5kZWQtbWQgdGV4dC1sZyBmb250LXNlbWlib2xkIGhvdmVyOmJnLWJsdWUtMzAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgQ29tbWFuZGVyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIGA7XG5cbiAgICB0aGlzLnRlbXBsYXRlID0gZm9ybTtcbiAgfVxuXG59IiwiaW1wb3J0IENhcnRNYW5hZ2VyIGZyb20gJy4uL21vZHVsZXMvQ2FydE1hbmFnZXInO1xuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuLi91dGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IG51bGw7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIG9uQ2FydENsZWFyKGNiKSB7XG4gICAgY29uc3QgY2FydENsZWFyQnRuID0gdGhpcy50ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCcjY2xlYXItY2FydCcpO1xuXG4gICAgY2FydENsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2IpO1xuICB9XG5cbiAgb25DYXJ0Q29uZmlybWF0aW9uKGNiKSB7XG4gICAgY29uc3QgY29uZmlybUNhcnRCdG4gPSB0aGlzLnRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtLWNhcnQnKTtcblxuICAgIGNvbmZpcm1DYXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2IpO1xuICB9XG5cbiAgaW5qZWN0VG8obW91bnRQb2ludCkge1xuICAgIC8vIENyZWF0ZSBtYXJrdXAgdGhlbiBpbmplY3QgaXQgaW50byBzZWxlY3RlZCBlbGVtZW50IChtb3VudFBvaW50KSBpbiB0aGUgRE9NXG4gICAgdGhpcy50b0hUTUwoKTtcbiAgICBtb3VudFBvaW50LmFwcGVuZENoaWxkKHRoaXMudGVtcGxhdGUpO1xuICB9XG5cbiAgdXBkYXRlUHJpY2UoKSB7XG4gICAgY29uc3QgcXVhbnRpdHkgPSB0aGlzLnRlbXBsYXRlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3F1YW50aXR5Jyk7XG4gICAgY29uc29sZS5sb2cocXVhbnRpdHkpXG5cbiAgICBmb3IgKGxldCBxdHkgb2YgcXVhbnRpdHkpIHtcbiAgICAgIHF0eS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgIGNvbnN0IHVuaXRQcmljZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcmljZS0ke2l0ZW1JZH1gKS5kYXRhc2V0LnByaWNlKTtcbiAgICAgICAgY29uc3QgdG90YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdG90YWwtJHtpdGVtSWR9YClcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBuZXcgQ2FydE1hbmFnZXIoKTtcblxuICAgICAgICB0b3RhbC50ZXh0Q29udGVudCA9IGZvcm1hdFByaWNlKHVuaXRQcmljZSAqIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHRvdGFsLmRhdGFzZXQudG90YWwgPSBwYXJzZUludCh1bml0UHJpY2UgKiBldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgIHRoaXMuc2V0VG90YWwoKTtcblxuICAgICAgICBzdG9yZS51cGRhdGVJdGVtKGl0ZW1JZCwgcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBjb25zdCByZW1vdmVCdG4gPSB0aGlzLnRlbXBsYXRlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlbW92ZScpO1xuXG4gICAgY29uc29sZS5sb2cocmVtb3ZlQnRuKVxuXG4gICAgZm9yIChsZXQgcmVtb3ZlIG9mIHJlbW92ZUJ0bikge1xuICAgICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gbmV3IENhcnRNYW5hZ2VyKCk7XG4gICAgICAgIHN0b3JlLnJlbW92ZUl0ZW0ocmVtb3ZlLmRhdGFzZXQuaWQpO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuICBzZXRUb3RhbCgpIHtcbiAgICBjb25zdCB0b3RhbFBlckl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b3RhbC1wZXItaXRlbScpO1xuICAgIGNvbnN0IGNhcnRUb3RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0LXRvdGFsJyk7XG4gICAgbGV0IHRvdGFsID0gMDtcblxuICAgIGZvciAobGV0IGl0ZW0gb2YgdG90YWxQZXJJdGVtKSB7XG4gICAgICB0b3RhbCArPSBwYXJzZUludChpdGVtLmRhdGFzZXQudG90YWwpXG4gICAgfVxuXG4gICAgY2FydFRvdGFsLnRleHRDb250ZW50ID0gZm9ybWF0UHJpY2UodG90YWwpXG4gIH1cblxuICB0b0hUTUwoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgdGFibGUuY2xhc3NMaXN0LmFkZCgndy1mdWxsJyk7XG5cbiAgICB0YWJsZS5pbm5lckhUTUwgPSBgXG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0ciBjbGFzcz1cImJvcmRlci1iIHRleHQtbGdcIj5cbiAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWxlZnQgcGItMlwiPkTDqXNpZ25hdGlvbjwvdGg+XG4gICAgICAgICAgPHRoPlByaXg8L3RoPlxuICAgICAgICAgIDx0aD5RdWFudGl0w6k8L3RoPlxuICAgICAgICAgIDx0aD5Tb3VzLXRvdGFsPC90aD5cbiAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAke3RoaXMuZGF0YS5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gYFxuICAgICAgICAgIDx0ciBjbGFzcz1cImJvcmRlci1iXCI+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJweS0yXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJpdGVtLmh0bWw/aWQ9JHtpdGVtLmlkfVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5saW5lLWJsb2NrIHctZnVsbCB1cHBlcmNhc2UgZm9udC1zZW1pYm9sZFwiPlBlbHVjaGUgXCIke2l0ZW0ubmFtZX1cIjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlubGluZS1ibG9jayB0ZXh0LXNtXCI+UmVmOiAke2l0ZW0uaWR9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGlkPVwicHJpY2UtJHtpdGVtLmlkfVwiIGRhdGEtcHJpY2U9XCIke2l0ZW0ucHJpY2V9XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBweS0yXCI+XG4gICAgICAgICAgICAgICR7Zm9ybWF0UHJpY2UoaXRlbS5wcmljZSl9XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXIgcHktMlwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjFcIiBkYXRhLWlkPVwiJHtpdGVtLmlkfVwiIHZhbHVlPVwiJHtpdGVtLnF1YW50aXR5fVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwicXVhbnRpdHkgaW5saW5lLWJsb2NrIHctMTYgcHktMiBweC0xIHJvdW5kZWQtbWQgYm9yZGVyIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgaWQ9XCJ0b3RhbC0ke2l0ZW0uaWR9XCIgZGF0YS10b3RhbD1cIiR7aXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHl9XCIgY2xhc3M9XCJ0b3RhbC1wZXItaXRlbSB0ZXh0LWNlbnRlciBweS0yXCI+JHtmb3JtYXRQcmljZShpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eSl9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB4LTRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT1cIlN1cHByaW1lciBsJ2FydGljbGUgZHUgcGFuaWVyXCIgZGF0YS1pZD1cIiR7aXRlbS5pZH1cIiBjbGFzcz1cInJlbW92ZSB0ZXh0LWxnIHRleHQtcmVkLTQwMFwiPiYjMTAwMDY7PC9idXR0b24+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIGB9KS5qb2luKCcnKVxuICAgICAgfVxuICAgICAgPC90Ym9keT5cbiAgICAgIDx0Zm9vdD5cbiAgICAgICAgPHRyIGNsYXNzPVwiZm9udC1ib2xkXCI+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsZWFyLWNhcnRcIiBjbGFzcz1cImJvcmRlciBib3JkZXItcmVkLTQwMCB0ZXh0LXJlZC01MDAgcHktMiBweC00IHJvdW5kZWQtbWQgaG92ZXI6YmctcmVkLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIFZpZGVyIG1vbiBwYW5pZXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgdGV4dC1jZW50ZXIgdXBwZXJjYXNlXCI+VG90YWwgVC5ULkM6PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY2FydC10b3RhbFwiIGNsYXNzPVwidGV4dC0yeGxcIj5cbiAgICAgICAgICAgICAgJHtmb3JtYXRQcmljZSh0aGlzLmRhdGEudG90YWwpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGZvb3Q+XG4gICAgYDtcblxuICAgIGNvbnN0IGN0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGN0YS5jbGFzc0xpc3QuYWRkKCdtdC0xNicsICd0ZXh0LXJpZ2h0Jyk7XG5cbiAgICBjdGEuaW5uZXJIVE1MID0gYFxuICAgICAgPGJ1dHRvbiBpZD1cImNvbmZpcm0tY2FydFwiIGNsYXNzPVwiaW5saW5lLWJsb2NrIHB4LTQgcHktMiBib3JkZXIgdGV4dC1ibHVlLTUwMCBib3JkZXItYmx1ZS01MDAgcm91bmRlZC1tZCBmb250LW1lZGl1bSBob3ZlcjpiZy1ibHVlLTUwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgIFZhbGlkZXIgbGUgcGFuaWVyXG4gICAgICA8L2J1dHRvbj5cbiAgICBgXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFibGUpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN0YSlcblxuICAgIHRoaXMudGVtcGxhdGUgPSBjb250YWluZXI7XG5cbiAgICB0aGlzLnVwZGF0ZVByaWNlKCk7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLnRvdGFsID0gMDtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gQ2hlY2sgaWYgYSBjYXJ0IGhhcyBiZWVuIHNhdmVkIHRoZW4gbG9hZCBpdFxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKSB7XG4gICAgICBjb25zdCBjYXJ0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKTtcbiAgICAgIHRoaXMuaXRlbXMgPSBjYXJ0Lml0ZW1zO1xuICAgICAgdGhpcy50b3RhbCA9IGNhcnQudG90YWw7XG4gICAgfVxuICB9XG5cbiAgYWRkSXRlbShuZXdJdGVtKSB7XG4gICAgbGV0IGR1cGxpY2F0ZSA9IGZhbHNlO1xuXG4gICAgLy8gQ2hlY2sgaWYgaXRlbSByZWZlcmVuY2UgaXMgaW4gY2FydCB0byB1cGRhdGUgcXVhbnRpdHlcbiAgICB0aGlzLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLmlkID09PSBuZXdJdGVtLmlkKSB7XG4gICAgICAgIGl0ZW0ucXVhbnRpdHkgKz0gbmV3SXRlbS5xdWFudGl0eTtcbiAgICAgICAgZHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghZHVwbGljYXRlKSB7XG4gICAgICB0aGlzLml0ZW1zLnB1c2gobmV3SXRlbSk7XG4gICAgfVxuXG4gICAgLy8gU2F2ZSB0aGUgY2FydCBpbiBsb2NhbFN0b3JhZ2VcbiAgICB0aGlzLnNhdmUoKTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oaWQpIHtcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5pZCAhPT0gaWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNhdmUoKTtcbiAgfVxuXG4gIHVwZGF0ZUl0ZW0oaWQsIHF1YW50aXR5KSB7XG4gICAgdGhpcy5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgaXRlbS5xdWFudGl0eSA9IHF1YW50aXR5O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICBzZXRUb3RhbCgpIHtcbiAgICB0aGlzLnRvdGFsID0gdGhpcy5pdGVtcy5yZWR1Y2UoKHRvdGFsLCBjdXJyZW50KSA9PiB7XG4gICAgICByZXR1cm4gdG90YWwgKyAoY3VycmVudC5xdWFudGl0eSAqIGN1cnJlbnQucHJpY2UpO1xuICAgIH0sIDApXG4gIH1cblxuICBzYXZlKCkge1xuICAgIHRoaXMuc2V0VG90YWwoKTtcblxuICAgIGNvbnN0IGNhcnRJbmZvcm1hdGlvbnMgPSB7XG4gICAgICBpdGVtczogdGhpcy5pdGVtcyxcbiAgICAgIHRvdGFsOiB0aGlzLnRvdGFsXG4gICAgfVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0SW5mb3JtYXRpb25zKSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICAvLyBFbXB0eSB0aGUgY2FydFxuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAvLyBSZXNldCB0b3RhbFxuICAgIHRoaXMudG90YWwgPSAwO1xuXG4gICAgLy8gUmVtb3ZlIHNhdmVkXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgY29uc3QgY2FydERhdGEgPSB7XG4gICAgICBpdGVtczogdGhpcy5pdGVtcyxcbiAgICAgIHRvdGFsOiB0aGlzLnRvdGFsXG4gICAgfTtcblxuICAgIHJldHVybiBjYXJ0RGF0YTtcbiAgfVxuXG4gIGdldEl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLm1hcChpdGVtID0+IGl0ZW0uaWQpXG4gIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICBjb25zdHJ1Y3RvcihhcGkpIHtcbiAgICB0aGlzLmFwaSA9IGFwaTtcbiAgfVxuXG4gIGFzeW5jIGZldGNoRGF0YShpZCA9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlc3BvbnNlO1xuXG4gICAgICAvLyBTZW5kIHJlcXVlc3QgdG8gQVBJIHRoZW4gd2FpdCBmb3IgdGhlIHJlc3BvbnNlXG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLmFwaSArIGlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5hcGkpO1xuICAgICAgfVxuXG4gICAgICAvLyBDb252ZXJ0IHJlc3BvbnNlIHRvIGpzb25cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIHJldHVybiBkYXRhO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xhIGNvbm5lY3Rpb24gYXZlYyBsZSBzZXJ2ZXVyIG5cXCdhIHB1IMOqdHJlIMOpdGFibGllLlxcbicgKyBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZmV0Y2goaWQpIHtcbiAgICAvLyBDYWxsIGZldGNoRGF0YSB3aXRoIHBhcmFtZXRlciA9PiByZXR1cm4gMSBpdGVtXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2hEYXRhKGlkKTtcbiAgfVxuXG4gIGFzeW5jIGZldGNoQWxsKCkge1xuICAgIC8vIENhbGwgZmV0Y2hEYXRhIHdpdGhvdXQgcGFyYW1ldGVyID0+IHJldHVybiBhbGwgaXRlbXNcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaERhdGEoKTtcbiAgfVxuXG4gIGFzeW5jIHNlbmQob3JkZXIpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2godGhpcy5hcGksIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcmRlciksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuanNvbigpO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cblxufSIsImltcG9ydCBEYXRhTWFuYWdlciBmcm9tICcuL21vZHVsZXMvRGF0YU1hbmFnZXInO1xuaW1wb3J0IENhcnRNYW5hZ2VyIGZyb20gJy4vbW9kdWxlcy9DYXJ0TWFuYWdlcic7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL1RhYmxlJztcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFjdEZvcm0nO1xuaW1wb3J0IGRlZmF1bHRNYXJrdXAgZnJvbSAnLi90ZW1wbGF0ZXMvZGVmYXVsdE1hcmt1cCc7XG5cbmNvbnN0IGNhcnQgPSBuZXcgQ2FydE1hbmFnZXIoKTtcblxuY29uc3QgY2FydE1vdW50UG9pbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JkZXInKTtcblxuaWYgKGNhcnQuZ2V0Q291bnQoKSA+IDApIHtcbiAgY29uc3Qgc3VtbWFyeSA9IG5ldyBUYWJsZShjYXJ0LmdldERhdGEoKSk7XG5cbiAgc3VtbWFyeS5pbmplY3RUbyhjYXJ0TW91bnRQb2ludCk7XG5cbiAgc3VtbWFyeS5vbkNhcnRDb25maXJtYXRpb24oKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IG5ldyBDb250YWN0Rm9ybSgpO1xuICAgIGZvcm0uaW5qZWN0VG8oY2FydE1vdW50UG9pbnQpO1xuICAgIGV2ZW50LnRhcmdldC5yZW1vdmUoKTtcblxuICAgIGZvcm0ub25TdWJtaXQoKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IG9yZGVyID0ge1xuICAgICAgICBjb250YWN0OiBkYXRhLFxuICAgICAgICBwcm9kdWN0czogY2FydC5nZXRJdGVtcygpXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBhcGkgPSBuZXcgRGF0YU1hbmFnZXIoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdGVkZGllcy9vcmRlci8nKTtcblxuICAgICAgYXBpLnNlbmQob3JkZXIpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBjYXJ0TW91bnRQb2ludC5pbm5lckhUTUwgPSBkZWZhdWx0TWFya3VwLm9yZGVyU3VjY2VzcyhyZXNwb25zZS5vcmRlcklkKVxuICAgICAgICB9KTtcbiAgICB9KVxuXG4gIH0pXG5cbiAgc3VtbWFyeS5vbkNhcnRDbGVhcigoKSA9PiB7XG4gICAgY2FydC5jbGVhcigpO1xuICAgIGNhcnRNb3VudFBvaW50LmlubmVySFRNTCA9IGRlZmF1bHRNYXJrdXAuZW1wdHlDYXJ0O1xuICB9KVxuXG59IGVsc2Uge1xuICBjYXJ0TW91bnRQb2ludC5pbm5lckhUTUwgPSBkZWZhdWx0TWFya3VwLmVtcHR5Q2FydDtcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGVtcHR5Q2FydDogYFxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgIDxwPlZvdHJlIHBhbmllciBlc3QgdmlkZS48L3A+XG4gICAgPGRpdiBjbGFzcz1cIm10LTEyIHRleHQtY2VudGVyXCI+XG4gICAgICA8YSBocmVmPVwiaW5kZXguaHRtbFwiXG4gICAgICAgIGNsYXNzPVwiaW5saW5lLWJsb2NrIHB4LTQgcHktMiBib3JkZXIgdGV4dC1ibHVlLTUwMCBib3JkZXItYmx1ZS01MDAgcm91bmRlZC1tZCBmb250LW1lZGl1bSBob3ZlcjpiZy1ibHVlLTUwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgIETDqWNvdXZyaXIgbm9zIGFydGljbGVzXG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIGAsXG5cbiAgbm90Rm91bmRJdGVtOiBgXG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICA8aDIgY2xhc3M9XCJ0ZXh0LXhsXCI+TCdhcnRpY2xlIGRlbWFuZMOpIG4nZXhpc3RlIHBhcy48L2gyPlxuICAgICAgPHAgY2xhc3M9XCJtdC02XCI+XG4gICAgICAgIDxhIGNsYXNzPVwidW5kZXJsaW5lIHRleHQtYmx1ZS02MDAgaG92ZXI6dGV4dC1ibHVlLTgwMFwiIGhyZWY9XCJpbmRleC5odG1sXCI+UmV0b3VybmVyIMOgIGxhIHBhZ2UgZCdhY2N1ZWlsLjwvYT5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgYCxcblxuICBvcmRlclN1Y2Nlc3MoaWQpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcz1cIm1heC13LWxnIG14LWF1dG8gbXQtMTIgcC04IHRleHQtZ3JlZW4tODAwIGJnLWdyZWVuLTEwMCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JlZW4tMjAwXCI+XG4gICAgICAgIDxoMiBjbGFzcz1cInRleHQteGwgdGV4dC1jZW50ZXJcIj5Wb3RyZSBjb21tYW5kZSBhIMOpdMOpIHZhbGlkw6llPC9oMj5cbiAgICAgICAgPHAgY2xhc3M9XCJtdC02XCI+T3Jpbm9jbyB2b3VzIHJlbWVyY2llIHBvdXIgdm90cmUgYWNoYXQuPC9wPlxuICAgICAgICA8cCBjbGFzcz1cIm10LTRcIj5cbiAgICAgICAgICBMYSBjb21tYW5kZSByZWY6IDxzdHJvbmc+JHtpZH08L3N0cm9uZz4gZXN0IGVuIGNvdXJzIGRlXG4gICAgICAgICAgdHJhaXRlbWVudCBldCBzZXJhIGV4cMOpZGnDqSBkYW5zIGxlcyBtZWlsbGV1cnMgZMOpbGFpcy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzcz1cIm10LTYgdGV4dC1yaWdodFwiPkEgYmllbnTDtHQgc3VyIE9yaW5vY28uPC9wPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxufSIsIi8vIE1ha2UgcHJpY2UgcmVhZGFibGUgZm9yIHVzZXJzXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UHJpY2UocHJpY2UpIHtcbiAgcHJpY2UgPSBwcmljZSAvIDEwMDtcblxuICByZXR1cm4gcHJpY2UudG9GaXhlZCgyKSArICcg4oKsJztcbn1cblxuXG4vLyBHZXQgaWQgZnJvbSB1cmwgcGFyYW1ldGVyc1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RJZEZyb21VcmwoKSB7XG4gIGNvbnN0IGlkID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zcGxpdChcIj1cIilbMV07XG5cbiAgaWYgKCFpZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGlkO1xufVxuXG4vLyBBbmltYXRlIGNhcnQgYnV0dG9uIHdoZW4gYW4gaXRlbSBoYXMgYmVlbiBhZGRlZFxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGVDYXJ0QnRuKCkge1xuICBjb25zdCBjYXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcnQtYnRuJyk7XG5cbiAgY2FydEJ0bi5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJyk7XG5cbiAgY2FydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpXG4gIH0pXG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvb3JkZXIuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9
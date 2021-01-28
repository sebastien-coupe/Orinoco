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
    this.errors = [];
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
      this.errors = [];
      var lastName = document.querySelector('#lastname').value || null;
      var firstName = document.querySelector('#firstname').value || null;
      var address = document.querySelector('#address').value || null;
      var addressComplement = document.querySelector('#address-complement').value || null;
      var zip = document.querySelector('#zip').value || null;
      var city = document.querySelector('#city').value || null;
      var email = document.querySelector('#email').value || null;
      var emailConfirmation = document.querySelector('#email-confirm').value || null;

      if (email !== emailConfirmation) {
        this.errors.push('Les adresses email ne correspondent pas');
      }

      if (lastName, firstName, address, addressComplement, zip, city, email, emailConfirmation) {
        this.data = {
          lastName: lastName,
          firstName: firstName,
          address: address,
          addressComplement: addressComplement,
          zip: zip,
          city: city,
          email: email,
          emailConfirmation: emailConfirmation
        };
      }

      if (this.errors.length) {
        return false;
      }

      return true;
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(cb) {
      var _this = this;

      var form = this.template.querySelector('#contact');
      form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (_this.validate()) {
          var data = {
            lastName: _this.data.lastName,
            firstName: _this.data.firstName,
            address: _this.data.address,
            city: _this.data.city,
            email: _this.data.email
          };
          cb(data);
        } else {
          console.error('Une erreur est survenue!');
        }
      });
    }
  }, {
    key: "toHTML",
    value: function toHTML() {
      var _this$data$lastName, _this$data$firstName, _this$data$address, _this$data$addressCom, _this$data$zip, _this$data$city, _this$data$email, _this$data$emailConfi;

      var form = document.createElement('div');
      form.classList.add('mt-16', 'max-w-screen-sm', 'mx-auto');
      form.innerHTML = "\n      <h2 class=\"text-center text-2xl\">Informations de livraison</h2>\n      <form id=\"contact\" class=\"mt-8\">\n        <div class=\"px-4 py-2 bg-yellow-200 text-sm text-yellow-900 rounded-md\">\n          <span class=\"mr-2\">&#128712;</span>Les champs pr\xE9c\xE9d\xE9s d'un\n          <strong>*</strong> sont obligatoires.\n        </div>\n        <div class=\"flex flex-col gap-4 mt-8 sm:flex-row sm:gap-8\">\n          <div class=\"flex-1\">\n            <label for=\"lastname\" class=\"inline-block w-full text-sm\">*Nom:</label>\n            <input\n              type=\"text\"\n              name=\"lastname\"\n              id=\"lastname\"\n              value=\"".concat((_this$data$lastName = this.data.lastName) !== null && _this$data$lastName !== void 0 ? _this$data$lastName : '', "\"\n              required\n              class=\"w-full mt-1 px-4 py-2 border rounded-md\"\n            />\n          </div>\n          <div class=\"flex-1\">\n            <label for=\"firstname\" class=\"inline-block w-full text-sm\"\n              >*Pr\xE9nom:</label\n            >\n            <input\n              type=\"text\"\n              name=\"firstname\"\n              id=\"firstname\"\n              value=\"").concat((_this$data$firstName = this.data.firstName) !== null && _this$data$firstName !== void 0 ? _this$data$firstName : '', "\"\n              required\n              class=\"w-full mt-1 px-4 py-2 border rounded-md\"\n            />\n          </div>\n        </div>\n        <div class=\"mt-4\">\n          <label for=\"address\" class=\"inline-block w-full text-sm\">*Adresse:</label>\n          <input\n            type=\"text\"\n            name=\"address\"\n            id=\"address\"\n            value=\"").concat((_this$data$address = this.data.address) !== null && _this$data$address !== void 0 ? _this$data$address : '', "\"\n            required\n            class=\"w-full mt-1 px-4 py-2 border rounded-md\"\n          />\n        </div>\n        <div class=\"mt-4\">\n          <label for=\"address-complement\" class=\"inline-block w-full text-sm\"\n            >Compl\xE8ment d'adresse:</label\n          >\n          <input\n            type=\"text\"\n            name=\"address-complement\"\n            id=\"address-complement\"\n            value=\"").concat((_this$data$addressCom = this.data.addressComplement) !== null && _this$data$addressCom !== void 0 ? _this$data$addressCom : '', "\"\n            class=\"w-full mt-1 px-4 py-2 border rounded-md\"\n          />\n        </div>\n        <div class=\"flex flex-col gap-4 sm:flex-row sm:gap-8 mt-4\">\n          <div class=\"flex-1\">\n            <label for=\"zip\" class=\"inline-block w-full text-sm\"\n              >Code postal:</label\n            >\n            <input\n              type=\"text\"\n              name=\"zip\"\n              id=\"zip\"\n              value=\"").concat((_this$data$zip = this.data.zip) !== null && _this$data$zip !== void 0 ? _this$data$zip : '', "\"\n              class=\"w-full mt-1 px-4 py-2 border rounded-md\"\n            />\n          </div>\n          <div class=\"flex-1\">\n            <label for=\"city\" class=\"inline-block w-full text-sm\">*Ville:</label>\n            <input\n              type=\"text\"\n              name=\"city\"\n              id=\"city\"\n              value=\"").concat((_this$data$city = this.data.city) !== null && _this$data$city !== void 0 ? _this$data$city : '', "\"\n              required\n              class=\"w-full mt-1 px-4 py-2 border rounded-md\"\n            />\n          </div>\n        </div>\n        <div class=\"mt-4\">\n          <label for=\"email\" class=\"inline-block w-full text-sm\"\n            >Adresse mail:</label\n          >\n          <input\n            type=\"email\"\n            name=\"email\"\n            id=\"email\"\n            value=\"").concat((_this$data$email = this.data.email) !== null && _this$data$email !== void 0 ? _this$data$email : '', "\"\n            required\n            class=\"w-full mt-1 px-4 py-2 border rounded-md\"\n          />\n        </div>\n        <div class=\"mt-4\">\n          <label for=\"email-confirm\" class=\"inline-block w-full text-sm\"\n            >Confirmer l'adresse mail:</label\n          >\n          <input\n            type=\"email\"\n            name=\"email-confirm\"\n            id=\"email-confirm\"\n            value=\"").concat((_this$data$emailConfi = this.data.emailConfirmation) !== null && _this$data$emailConfi !== void 0 ? _this$data$emailConfi : '', "\"\n            required\n            class=\"w-full mt-1 px-4 py-2 border rounded-md\"\n          />\n        </div>\n        <div class=\"mt-8 text-right\">\n          <button\n            type=\"submit\"\n            class=\"inline-block bg-blue-200 px-4 py-2 text-blue-900 rounded-md text-lg font-semibold hover:bg-blue-300\"\n          >\n          Commander\n          </button>\n        </div>\n      </form>\n    ");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcmlub2NvLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9vcmlub2NvLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vb3Jpbm9jby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL29yaW5vY28vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb3Jpbm9jby8uL3NyYy9qcy9jb21wb25lbnRzL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovL29yaW5vY28vLi9zcmMvanMvY29tcG9uZW50cy9UYWJsZS5qcyIsIndlYnBhY2s6Ly9vcmlub2NvLy4vc3JjL2pzL21vZHVsZXMvQ2FydE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vb3Jpbm9jby8uL3NyYy9qcy9tb2R1bGVzL0RhdGFNYW5hZ2VyLmpzIiwid2VicGFjazovL29yaW5vY28vLi9zcmMvanMvb3JkZXIuanMiLCJ3ZWJwYWNrOi8vb3Jpbm9jby8uL3NyYy9qcy90ZW1wbGF0ZXMvZGVmYXVsdE1hcmt1cC5qcyIsIndlYnBhY2s6Ly9vcmlub2NvLy4vc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovL29yaW5vY28vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL29yaW5vY28vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb3Jpbm9jby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vcmlub2NvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vcmlub2NvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb3Jpbm9jby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29yaW5vY28vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkNvbnRhY3RGb3JtIiwidGVtcGxhdGUiLCJkYXRhIiwiZXJyb3JzIiwibW91bnRQb2ludCIsInRvSFRNTCIsImFwcGVuZENoaWxkIiwibGFzdE5hbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImZpcnN0TmFtZSIsImFkZHJlc3MiLCJhZGRyZXNzQ29tcGxlbWVudCIsInppcCIsImNpdHkiLCJlbWFpbCIsImVtYWlsQ29uZmlybWF0aW9uIiwicHVzaCIsImxlbmd0aCIsImNiIiwiZm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGUiLCJjb25zb2xlIiwiZXJyb3IiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiY2FydENsZWFyQnRuIiwiY29uZmlybUNhcnRCdG4iLCJxdWFudGl0eSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsb2ciLCJxdHkiLCJpdGVtSWQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiaWQiLCJ1bml0UHJpY2UiLCJwYXJzZUludCIsImdldEVsZW1lbnRCeUlkIiwicHJpY2UiLCJ0b3RhbCIsInN0b3JlIiwiQ2FydE1hbmFnZXIiLCJ0ZXh0Q29udGVudCIsImZvcm1hdFByaWNlIiwic2V0VG90YWwiLCJ1cGRhdGVJdGVtIiwicmVtb3ZlQnRuIiwicmVtb3ZlIiwicmVtb3ZlSXRlbSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwidG90YWxQZXJJdGVtIiwiY2FydFRvdGFsIiwiaXRlbSIsImNvbnRhaW5lciIsInRhYmxlIiwiaXRlbXMiLCJtYXAiLCJuYW1lIiwiam9pbiIsImN0YSIsInVwZGF0ZVByaWNlIiwiaW5pdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjYXJ0IiwiSlNPTiIsInBhcnNlIiwibmV3SXRlbSIsImR1cGxpY2F0ZSIsInNhdmUiLCJmaWx0ZXIiLCJyZWR1Y2UiLCJjdXJyZW50IiwiY2FydEluZm9ybWF0aW9ucyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjbGVhciIsImNhcnREYXRhIiwiYXBpIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJmZXRjaERhdGEiLCJvcmRlciIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwicmVxdWVzdCIsImNhcnRNb3VudFBvaW50IiwiZ2V0Q291bnQiLCJzdW1tYXJ5IiwiVGFibGUiLCJnZXREYXRhIiwiaW5qZWN0VG8iLCJvbkNhcnRDb25maXJtYXRpb24iLCJvblN1Ym1pdCIsImNvbnRhY3QiLCJwcm9kdWN0cyIsImdldEl0ZW1zIiwiRGF0YU1hbmFnZXIiLCJzZW5kIiwidGhlbiIsImRlZmF1bHRNYXJrdXAiLCJvcmRlcklkIiwib25DYXJ0Q2xlYXIiLCJlbXB0eUNhcnQiLCJub3RGb3VuZEl0ZW0iLCJvcmRlclN1Y2Nlc3MiLCJ0b0ZpeGVkIiwiZXh0cmFjdElkRnJvbVVybCIsInNlYXJjaCIsInNwbGl0IiwiYW5pbWF0ZUNhcnRCdG4iLCJjYXJ0QnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7O0FDTkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLENBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDM3VCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJvcmRlci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0Rm9ybSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGVtcGxhdGUgPSBudWxsO1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIHRoaXMuZXJyb3JzID0gW107XG4gIH1cblxuICBpbmplY3RUbyhtb3VudFBvaW50KSB7XG4gICAgLy8gQ3JlYXRlIG1hcmt1cCB0aGVuIGluamVjdCBpdCBpbnRvIHNlbGVjdGVkIGVsZW1lbnQgKG1vdW50UG9pbnQpIGluIHRoZSBET01cbiAgICB0aGlzLnRvSFRNTCgpO1xuICAgIG1vdW50UG9pbnQuYXBwZW5kQ2hpbGQodGhpcy50ZW1wbGF0ZSk7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICB0aGlzLmVycm9ycyA9IFtdO1xuXG4gICAgY29uc3QgbGFzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFzdG5hbWUnKS52YWx1ZSB8fCBudWxsXG4gICAgY29uc3QgZmlyc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpcnN0bmFtZScpLnZhbHVlIHx8IG51bGxcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHJlc3MnKS52YWx1ZSB8fCBudWxsXG4gICAgY29uc3QgYWRkcmVzc0NvbXBsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkcmVzcy1jb21wbGVtZW50JykudmFsdWUgfHwgbnVsbFxuICAgIGNvbnN0IHppcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN6aXAnKS52YWx1ZSB8fCBudWxsXG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5JykudmFsdWUgfHwgbnVsbFxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJykudmFsdWUgfHwgbnVsbFxuICAgIGNvbnN0IGVtYWlsQ29uZmlybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsLWNvbmZpcm0nKS52YWx1ZSB8fCBudWxsO1xuXG4gICAgaWYgKGVtYWlsICE9PSBlbWFpbENvbmZpcm1hdGlvbikge1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCgnTGVzIGFkcmVzc2VzIGVtYWlsIG5lIGNvcnJlc3BvbmRlbnQgcGFzJylcbiAgICB9XG5cbiAgICBpZiAobGFzdE5hbWUsIGZpcnN0TmFtZSwgYWRkcmVzcywgYWRkcmVzc0NvbXBsZW1lbnQsIHppcCwgY2l0eSwgZW1haWwsIGVtYWlsQ29uZmlybWF0aW9uKSB7XG4gICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgIGxhc3ROYW1lLFxuICAgICAgICBmaXJzdE5hbWUsXG4gICAgICAgIGFkZHJlc3MsXG4gICAgICAgIGFkZHJlc3NDb21wbGVtZW50LFxuICAgICAgICB6aXAsXG4gICAgICAgIGNpdHksXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBlbWFpbENvbmZpcm1hdGlvblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG9uU3VibWl0KGNiKSB7XG4gICAgY29uc3QgZm9ybSA9IHRoaXMudGVtcGxhdGUucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMudmFsaWRhdGUoKSkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGxhc3ROYW1lOiB0aGlzLmRhdGEubGFzdE5hbWUsXG4gICAgICAgICAgZmlyc3ROYW1lOiB0aGlzLmRhdGEuZmlyc3ROYW1lLFxuICAgICAgICAgIGFkZHJlc3M6IHRoaXMuZGF0YS5hZGRyZXNzLFxuICAgICAgICAgIGNpdHk6IHRoaXMuZGF0YS5jaXR5LFxuICAgICAgICAgIGVtYWlsOiB0aGlzLmRhdGEuZW1haWxcbiAgICAgICAgfVxuICAgICAgICBjYihkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlIScpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0b0hUTUwoKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnbXQtMTYnLCAnbWF4LXctc2NyZWVuLXNtJywgJ214LWF1dG8nKTtcblxuICAgIGZvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgPGgyIGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC0yeGxcIj5JbmZvcm1hdGlvbnMgZGUgbGl2cmFpc29uPC9oMj5cbiAgICAgIDxmb3JtIGlkPVwiY29udGFjdFwiIGNsYXNzPVwibXQtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHgtNCBweS0yIGJnLXllbGxvdy0yMDAgdGV4dC1zbSB0ZXh0LXllbGxvdy05MDAgcm91bmRlZC1tZFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXItMlwiPiYjMTI4NzEyOzwvc3Bhbj5MZXMgY2hhbXBzIHByw6ljw6lkw6lzIGQndW5cbiAgICAgICAgICA8c3Ryb25nPio8L3N0cm9uZz4gc29udCBvYmxpZ2F0b2lyZXMuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBtdC04IHNtOmZsZXgtcm93IHNtOmdhcC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtMVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxhc3RuYW1lXCIgY2xhc3M9XCJpbmxpbmUtYmxvY2sgdy1mdWxsIHRleHQtc21cIj4qTm9tOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwibGFzdG5hbWVcIlxuICAgICAgICAgICAgICBpZD1cImxhc3RuYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCIke3RoaXMuZGF0YS5sYXN0TmFtZSA/PyAnJ31cIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbCBtdC0xIHB4LTQgcHktMiBib3JkZXIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdG5hbWVcIiBjbGFzcz1cImlubGluZS1ibG9jayB3LWZ1bGwgdGV4dC1zbVwiXG4gICAgICAgICAgICAgID4qUHLDqW5vbTo8L2xhYmVsXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwiZmlyc3RuYW1lXCJcbiAgICAgICAgICAgICAgaWQ9XCJmaXJzdG5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT1cIiR7dGhpcy5kYXRhLmZpcnN0TmFtZSA/PyAnJ31cIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbCBtdC0xIHB4LTQgcHktMiBib3JkZXIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LTRcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiYWRkcmVzc1wiIGNsYXNzPVwiaW5saW5lLWJsb2NrIHctZnVsbCB0ZXh0LXNtXCI+KkFkcmVzc2U6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgIGlkPVwiYWRkcmVzc1wiXG4gICAgICAgICAgICB2YWx1ZT1cIiR7dGhpcy5kYXRhLmFkZHJlc3MgPz8gJyd9XCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBjbGFzcz1cInctZnVsbCBtdC0xIHB4LTQgcHktMiBib3JkZXIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC00XCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImFkZHJlc3MtY29tcGxlbWVudFwiIGNsYXNzPVwiaW5saW5lLWJsb2NrIHctZnVsbCB0ZXh0LXNtXCJcbiAgICAgICAgICAgID5Db21wbMOobWVudCBkJ2FkcmVzc2U6PC9sYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzLWNvbXBsZW1lbnRcIlxuICAgICAgICAgICAgaWQ9XCJhZGRyZXNzLWNvbXBsZW1lbnRcIlxuICAgICAgICAgICAgdmFsdWU9XCIke3RoaXMuZGF0YS5hZGRyZXNzQ29tcGxlbWVudCA/PyAnJ31cIlxuICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgbXQtMSBweC00IHB5LTIgYm9yZGVyIHJvdW5kZWQtbWRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBzbTpmbGV4LXJvdyBzbTpnYXAtOCBtdC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtMVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInppcFwiIGNsYXNzPVwiaW5saW5lLWJsb2NrIHctZnVsbCB0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgPkNvZGUgcG9zdGFsOjwvbGFiZWxcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ6aXBcIlxuICAgICAgICAgICAgICBpZD1cInppcFwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiJHt0aGlzLmRhdGEuemlwID8/ICcnfVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIG10LTEgcHgtNCBweS0yIGJvcmRlciByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtMVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIiBjbGFzcz1cImlubGluZS1ibG9jayB3LWZ1bGwgdGV4dC1zbVwiPipWaWxsZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImNpdHlcIlxuICAgICAgICAgICAgICBpZD1cImNpdHlcIlxuICAgICAgICAgICAgICB2YWx1ZT1cIiR7dGhpcy5kYXRhLmNpdHkgPz8gJyd9XCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgbXQtMSBweC00IHB5LTIgYm9yZGVyIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC00XCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCIgY2xhc3M9XCJpbmxpbmUtYmxvY2sgdy1mdWxsIHRleHQtc21cIlxuICAgICAgICAgICAgPkFkcmVzc2UgbWFpbDo8L2xhYmVsXG4gICAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPVwiJHt0aGlzLmRhdGEuZW1haWwgPz8gJyd9XCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBjbGFzcz1cInctZnVsbCBtdC0xIHB4LTQgcHktMiBib3JkZXIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC00XCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsLWNvbmZpcm1cIiBjbGFzcz1cImlubGluZS1ibG9jayB3LWZ1bGwgdGV4dC1zbVwiXG4gICAgICAgICAgICA+Q29uZmlybWVyIGwnYWRyZXNzZSBtYWlsOjwvbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsLWNvbmZpcm1cIlxuICAgICAgICAgICAgaWQ9XCJlbWFpbC1jb25maXJtXCJcbiAgICAgICAgICAgIHZhbHVlPVwiJHt0aGlzLmRhdGEuZW1haWxDb25maXJtYXRpb24gPz8gJyd9XCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBjbGFzcz1cInctZnVsbCBtdC0xIHB4LTQgcHktMiBib3JkZXIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC04IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5saW5lLWJsb2NrIGJnLWJsdWUtMjAwIHB4LTQgcHktMiB0ZXh0LWJsdWUtOTAwIHJvdW5kZWQtbWQgdGV4dC1sZyBmb250LXNlbWlib2xkIGhvdmVyOmJnLWJsdWUtMzAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgQ29tbWFuZGVyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIGA7XG5cbiAgICB0aGlzLnRlbXBsYXRlID0gZm9ybTtcbiAgfVxuXG59IiwiaW1wb3J0IENhcnRNYW5hZ2VyIGZyb20gJy4uL21vZHVsZXMvQ2FydE1hbmFnZXInO1xuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuLi91dGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IG51bGw7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIG9uQ2FydENsZWFyKGNiKSB7XG4gICAgY29uc3QgY2FydENsZWFyQnRuID0gdGhpcy50ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCcjY2xlYXItY2FydCcpO1xuXG4gICAgY2FydENsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2IpO1xuICB9XG5cbiAgb25DYXJ0Q29uZmlybWF0aW9uKGNiKSB7XG4gICAgY29uc3QgY29uZmlybUNhcnRCdG4gPSB0aGlzLnRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtLWNhcnQnKTtcblxuICAgIGNvbmZpcm1DYXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2IpO1xuICB9XG5cbiAgaW5qZWN0VG8obW91bnRQb2ludCkge1xuICAgIC8vIENyZWF0ZSBtYXJrdXAgdGhlbiBpbmplY3QgaXQgaW50byBzZWxlY3RlZCBlbGVtZW50IChtb3VudFBvaW50KSBpbiB0aGUgRE9NXG4gICAgdGhpcy50b0hUTUwoKTtcbiAgICBtb3VudFBvaW50LmFwcGVuZENoaWxkKHRoaXMudGVtcGxhdGUpO1xuICB9XG5cbiAgdXBkYXRlUHJpY2UoKSB7XG4gICAgY29uc3QgcXVhbnRpdHkgPSB0aGlzLnRlbXBsYXRlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3F1YW50aXR5Jyk7XG4gICAgY29uc29sZS5sb2cocXVhbnRpdHkpXG5cbiAgICBmb3IgKGxldCBxdHkgb2YgcXVhbnRpdHkpIHtcbiAgICAgIHF0eS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgIGNvbnN0IHVuaXRQcmljZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcmljZS0ke2l0ZW1JZH1gKS5kYXRhc2V0LnByaWNlKTtcbiAgICAgICAgY29uc3QgdG90YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdG90YWwtJHtpdGVtSWR9YClcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBuZXcgQ2FydE1hbmFnZXIoKTtcblxuICAgICAgICB0b3RhbC50ZXh0Q29udGVudCA9IGZvcm1hdFByaWNlKHVuaXRQcmljZSAqIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHRvdGFsLmRhdGFzZXQudG90YWwgPSBwYXJzZUludCh1bml0UHJpY2UgKiBldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgIHRoaXMuc2V0VG90YWwoKTtcblxuICAgICAgICBzdG9yZS51cGRhdGVJdGVtKGl0ZW1JZCwgcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBjb25zdCByZW1vdmVCdG4gPSB0aGlzLnRlbXBsYXRlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlbW92ZScpO1xuXG4gICAgY29uc29sZS5sb2cocmVtb3ZlQnRuKVxuXG4gICAgZm9yIChsZXQgcmVtb3ZlIG9mIHJlbW92ZUJ0bikge1xuICAgICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gbmV3IENhcnRNYW5hZ2VyKCk7XG4gICAgICAgIHN0b3JlLnJlbW92ZUl0ZW0ocmVtb3ZlLmRhdGFzZXQuaWQpO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuICBzZXRUb3RhbCgpIHtcbiAgICBjb25zdCB0b3RhbFBlckl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b3RhbC1wZXItaXRlbScpO1xuICAgIGNvbnN0IGNhcnRUb3RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0LXRvdGFsJyk7XG4gICAgbGV0IHRvdGFsID0gMDtcblxuICAgIGZvciAobGV0IGl0ZW0gb2YgdG90YWxQZXJJdGVtKSB7XG4gICAgICB0b3RhbCArPSBwYXJzZUludChpdGVtLmRhdGFzZXQudG90YWwpXG4gICAgfVxuXG4gICAgY2FydFRvdGFsLnRleHRDb250ZW50ID0gZm9ybWF0UHJpY2UodG90YWwpXG4gIH1cblxuICB0b0hUTUwoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgdGFibGUuY2xhc3NMaXN0LmFkZCgndy1mdWxsJyk7XG5cbiAgICB0YWJsZS5pbm5lckhUTUwgPSBgXG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0ciBjbGFzcz1cImJvcmRlci1iIHRleHQtbGdcIj5cbiAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWxlZnQgcGItMlwiPkTDqXNpZ25hdGlvbjwvdGg+XG4gICAgICAgICAgPHRoPlByaXg8L3RoPlxuICAgICAgICAgIDx0aD5RdWFudGl0w6k8L3RoPlxuICAgICAgICAgIDx0aD5Tb3VzLXRvdGFsPC90aD5cbiAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAke3RoaXMuZGF0YS5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gYFxuICAgICAgICAgIDx0ciBjbGFzcz1cImJvcmRlci1iXCI+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJweS0yXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJpdGVtLmh0bWw/aWQ9JHtpdGVtLmlkfVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5saW5lLWJsb2NrIHctZnVsbCB1cHBlcmNhc2UgZm9udC1zZW1pYm9sZFwiPlBlbHVjaGUgXCIke2l0ZW0ubmFtZX1cIjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlubGluZS1ibG9jayB0ZXh0LXNtXCI+UmVmOiAke2l0ZW0uaWR9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGlkPVwicHJpY2UtJHtpdGVtLmlkfVwiIGRhdGEtcHJpY2U9XCIke2l0ZW0ucHJpY2V9XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBweS0yXCI+XG4gICAgICAgICAgICAgICR7Zm9ybWF0UHJpY2UoaXRlbS5wcmljZSl9XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXIgcHktMlwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjFcIiBkYXRhLWlkPVwiJHtpdGVtLmlkfVwiIHZhbHVlPVwiJHtpdGVtLnF1YW50aXR5fVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwicXVhbnRpdHkgaW5saW5lLWJsb2NrIHctMTYgcHktMiBweC0xIHJvdW5kZWQtbWQgYm9yZGVyIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgaWQ9XCJ0b3RhbC0ke2l0ZW0uaWR9XCIgZGF0YS10b3RhbD1cIiR7aXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHl9XCIgY2xhc3M9XCJ0b3RhbC1wZXItaXRlbSB0ZXh0LWNlbnRlciBweS0yXCI+JHtmb3JtYXRQcmljZShpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eSl9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB4LTRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT1cIlN1cHByaW1lciBsJ2FydGljbGUgZHUgcGFuaWVyXCIgZGF0YS1pZD1cIiR7aXRlbS5pZH1cIiBjbGFzcz1cInJlbW92ZSB0ZXh0LWxnIHRleHQtcmVkLTQwMFwiPiYjMTAwMDY7PC9idXR0b24+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIGB9KS5qb2luKCcnKVxuICAgICAgfVxuICAgICAgPC90Ym9keT5cbiAgICAgIDx0Zm9vdD5cbiAgICAgICAgPHRyIGNsYXNzPVwiZm9udC1ib2xkXCI+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsZWFyLWNhcnRcIiBjbGFzcz1cImJvcmRlciBib3JkZXItcmVkLTQwMCB0ZXh0LXJlZC01MDAgcHktMiBweC00IHJvdW5kZWQtbWQgaG92ZXI6YmctcmVkLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIFZpZGVyIG1vbiBwYW5pZXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgdGV4dC1jZW50ZXIgdXBwZXJjYXNlXCI+VG90YWwgVC5ULkM6PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY2FydC10b3RhbFwiIGNsYXNzPVwidGV4dC0yeGxcIj5cbiAgICAgICAgICAgICAgJHtmb3JtYXRQcmljZSh0aGlzLmRhdGEudG90YWwpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGZvb3Q+XG4gICAgYDtcblxuICAgIGNvbnN0IGN0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGN0YS5jbGFzc0xpc3QuYWRkKCdtdC0xNicsICd0ZXh0LXJpZ2h0Jyk7XG5cbiAgICBjdGEuaW5uZXJIVE1MID0gYFxuICAgICAgPGJ1dHRvbiBpZD1cImNvbmZpcm0tY2FydFwiIGNsYXNzPVwiaW5saW5lLWJsb2NrIHB4LTQgcHktMiBib3JkZXIgdGV4dC1ibHVlLTUwMCBib3JkZXItYmx1ZS01MDAgcm91bmRlZC1tZCBmb250LW1lZGl1bSBob3ZlcjpiZy1ibHVlLTUwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgIFZhbGlkZXIgbGUgcGFuaWVyXG4gICAgICA8L2J1dHRvbj5cbiAgICBgXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFibGUpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN0YSlcblxuICAgIHRoaXMudGVtcGxhdGUgPSBjb250YWluZXI7XG5cbiAgICB0aGlzLnVwZGF0ZVByaWNlKCk7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLnRvdGFsID0gMDtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gQ2hlY2sgaWYgYSBjYXJ0IGhhcyBiZWVuIHNhdmVkIHRoZW4gbG9hZCBpdFxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKSB7XG4gICAgICBjb25zdCBjYXJ0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKTtcbiAgICAgIHRoaXMuaXRlbXMgPSBjYXJ0Lml0ZW1zO1xuICAgICAgdGhpcy50b3RhbCA9IGNhcnQudG90YWw7XG4gICAgfVxuICB9XG5cbiAgYWRkSXRlbShuZXdJdGVtKSB7XG4gICAgbGV0IGR1cGxpY2F0ZSA9IGZhbHNlO1xuXG4gICAgLy8gQ2hlY2sgaWYgaXRlbSByZWZlcmVuY2UgaXMgaW4gY2FydCB0byB1cGRhdGUgcXVhbnRpdHlcbiAgICB0aGlzLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLmlkID09PSBuZXdJdGVtLmlkKSB7XG4gICAgICAgIGl0ZW0ucXVhbnRpdHkgKz0gbmV3SXRlbS5xdWFudGl0eTtcbiAgICAgICAgZHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghZHVwbGljYXRlKSB7XG4gICAgICB0aGlzLml0ZW1zLnB1c2gobmV3SXRlbSk7XG4gICAgfVxuXG4gICAgLy8gU2F2ZSB0aGUgY2FydCBpbiBsb2NhbFN0b3JhZ2VcbiAgICB0aGlzLnNhdmUoKTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oaWQpIHtcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5pZCAhPT0gaWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNhdmUoKTtcbiAgfVxuXG4gIHVwZGF0ZUl0ZW0oaWQsIHF1YW50aXR5KSB7XG4gICAgdGhpcy5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgaXRlbS5xdWFudGl0eSA9IHF1YW50aXR5O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICBzZXRUb3RhbCgpIHtcbiAgICB0aGlzLnRvdGFsID0gdGhpcy5pdGVtcy5yZWR1Y2UoKHRvdGFsLCBjdXJyZW50KSA9PiB7XG4gICAgICByZXR1cm4gdG90YWwgKyAoY3VycmVudC5xdWFudGl0eSAqIGN1cnJlbnQucHJpY2UpO1xuICAgIH0sIDApXG4gIH1cblxuICBzYXZlKCkge1xuICAgIHRoaXMuc2V0VG90YWwoKTtcblxuICAgIGNvbnN0IGNhcnRJbmZvcm1hdGlvbnMgPSB7XG4gICAgICBpdGVtczogdGhpcy5pdGVtcyxcbiAgICAgIHRvdGFsOiB0aGlzLnRvdGFsXG4gICAgfVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0SW5mb3JtYXRpb25zKSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICAvLyBFbXB0eSB0aGUgY2FydFxuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAvLyBSZXNldCB0b3RhbFxuICAgIHRoaXMudG90YWwgPSAwO1xuXG4gICAgLy8gUmVtb3ZlIHNhdmVkXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgY29uc3QgY2FydERhdGEgPSB7XG4gICAgICBpdGVtczogdGhpcy5pdGVtcyxcbiAgICAgIHRvdGFsOiB0aGlzLnRvdGFsXG4gICAgfTtcblxuICAgIHJldHVybiBjYXJ0RGF0YTtcbiAgfVxuXG4gIGdldEl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLm1hcChpdGVtID0+IGl0ZW0uaWQpXG4gIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICBjb25zdHJ1Y3RvcihhcGkpIHtcbiAgICB0aGlzLmFwaSA9IGFwaTtcbiAgfVxuXG4gIGFzeW5jIGZldGNoRGF0YShpZCA9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlc3BvbnNlO1xuXG4gICAgICAvLyBTZW5kIHJlcXVlc3QgdG8gQVBJIHRoZW4gd2FpdCBmb3IgdGhlIHJlc3BvbnNlXG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLmFwaSArIGlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5hcGkpO1xuICAgICAgfVxuXG4gICAgICAvLyBDb252ZXJ0IHJlc3BvbnNlIHRvIGpzb25cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIHJldHVybiBkYXRhO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xhIGNvbm5lY3Rpb24gYXZlYyBsZSBzZXJ2ZXVyIG5cXCdhIHB1IMOqdHJlIMOpdGFibGllLlxcbicgKyBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZmV0Y2goaWQpIHtcbiAgICAvLyBDYWxsIGZldGNoRGF0YSB3aXRoIHBhcmFtZXRlciA9PiByZXR1cm4gMSBpdGVtXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2hEYXRhKGlkKTtcbiAgfVxuXG4gIGFzeW5jIGZldGNoQWxsKCkge1xuICAgIC8vIENhbGwgZmV0Y2hEYXRhIHdpdGhvdXQgcGFyYW1ldGVyID0+IHJldHVybiBhbGwgaXRlbXNcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaERhdGEoKTtcbiAgfVxuXG4gIGFzeW5jIHNlbmQob3JkZXIpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2godGhpcy5hcGksIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcmRlciksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuanNvbigpO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cblxufSIsImltcG9ydCBEYXRhTWFuYWdlciBmcm9tICcuL21vZHVsZXMvRGF0YU1hbmFnZXInO1xuaW1wb3J0IENhcnRNYW5hZ2VyIGZyb20gJy4vbW9kdWxlcy9DYXJ0TWFuYWdlcic7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL1RhYmxlJztcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFjdEZvcm0nO1xuaW1wb3J0IGRlZmF1bHRNYXJrdXAgZnJvbSAnLi90ZW1wbGF0ZXMvZGVmYXVsdE1hcmt1cCc7XG5cbmNvbnN0IGNhcnQgPSBuZXcgQ2FydE1hbmFnZXIoKTtcblxuY29uc3QgY2FydE1vdW50UG9pbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JkZXInKTtcblxuaWYgKGNhcnQuZ2V0Q291bnQoKSA+IDApIHtcbiAgY29uc3Qgc3VtbWFyeSA9IG5ldyBUYWJsZShjYXJ0LmdldERhdGEoKSk7XG5cbiAgc3VtbWFyeS5pbmplY3RUbyhjYXJ0TW91bnRQb2ludCk7XG5cbiAgc3VtbWFyeS5vbkNhcnRDb25maXJtYXRpb24oKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IG5ldyBDb250YWN0Rm9ybSgpO1xuICAgIGZvcm0uaW5qZWN0VG8oY2FydE1vdW50UG9pbnQpO1xuICAgIGV2ZW50LnRhcmdldC5yZW1vdmUoKTtcblxuICAgIGZvcm0ub25TdWJtaXQoKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IG9yZGVyID0ge1xuICAgICAgICBjb250YWN0OiBkYXRhLFxuICAgICAgICBwcm9kdWN0czogY2FydC5nZXRJdGVtcygpXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBhcGkgPSBuZXcgRGF0YU1hbmFnZXIoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdGVkZGllcy9vcmRlci8nKTtcblxuICAgICAgYXBpLnNlbmQob3JkZXIpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIGNhcnRNb3VudFBvaW50LmlubmVySFRNTCA9IGRlZmF1bHRNYXJrdXAub3JkZXJTdWNjZXNzKGRhdGEub3JkZXJJZClcbiAgICAgICAgICBjYXJ0LmNsZWFyKCk7XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgfSlcblxuICBzdW1tYXJ5Lm9uQ2FydENsZWFyKCgpID0+IHtcbiAgICBjYXJ0LmNsZWFyKCk7XG4gICAgY2FydE1vdW50UG9pbnQuaW5uZXJIVE1MID0gZGVmYXVsdE1hcmt1cC5lbXB0eUNhcnQ7XG4gIH0pXG5cbn0gZWxzZSB7XG4gIGNhcnRNb3VudFBvaW50LmlubmVySFRNTCA9IGRlZmF1bHRNYXJrdXAuZW1wdHlDYXJ0O1xufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZW1wdHlDYXJ0OiBgXG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgPHA+Vm90cmUgcGFuaWVyIGVzdCB2aWRlLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwibXQtMTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgIDxhIGhyZWY9XCJpbmRleC5odG1sXCJcbiAgICAgICAgY2xhc3M9XCJpbmxpbmUtYmxvY2sgcHgtNCBweS0yIGJvcmRlciB0ZXh0LWJsdWUtNTAwIGJvcmRlci1ibHVlLTUwMCByb3VuZGVkLW1kIGZvbnQtbWVkaXVtIGhvdmVyOmJnLWJsdWUtNTAwIGhvdmVyOnRleHQtd2hpdGVcIj5cbiAgICAgICAgRMOpY291dnJpciBub3MgYXJ0aWNsZXNcbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgYCxcblxuICBub3RGb3VuZEl0ZW06IGBcbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgIDxoMiBjbGFzcz1cInRleHQteGxcIj5MJ2FydGljbGUgZGVtYW5kw6kgbidleGlzdGUgcGFzLjwvaDI+XG4gICAgICA8cCBjbGFzcz1cIm10LTZcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJ1bmRlcmxpbmUgdGV4dC1ibHVlLTYwMCBob3Zlcjp0ZXh0LWJsdWUtODAwXCIgaHJlZj1cImluZGV4Lmh0bWxcIj5SZXRvdXJuZXIgw6AgbGEgcGFnZSBkJ2FjY3VlaWwuPC9hPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICBgLFxuXG4gIG9yZGVyU3VjY2VzcyhpZCkge1xuICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGNsYXNzPVwibWF4LXctbGcgbXgtYXV0byBwLTggdGV4dC1ncmVlbi04MDAgYmctZ3JlZW4tMTAwIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmVlbi0yMDBcIj5cbiAgICAgICAgPGgyIGNsYXNzPVwidGV4dC14bCB0ZXh0LWNlbnRlclwiPlZvdHJlIGNvbW1hbmRlIGEgw6l0w6kgdmFsaWTDqWU8L2gyPlxuICAgICAgICA8cCBjbGFzcz1cIm10LTZcIj5Pcmlub2NvIHZvdXMgcmVtZXJjaWUgcG91ciB2b3RyZSBhY2hhdC48L3A+XG4gICAgICAgIDxwIGNsYXNzPVwibXQtNFwiPlxuICAgICAgICAgIExhIGNvbW1hbmRlIHJlZjogPHN0cm9uZz4ke2lkfTwvc3Ryb25nPiBlc3QgZW4gY291cnMgZGVcbiAgICAgICAgICB0cmFpdGVtZW50IGV0IHNlcmEgZXhww6lkacOpIGRhbnMgbGVzIG1laWxsZXVycyBkw6lsYWlzLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwibXQtNiB0ZXh0LXJpZ2h0XCI+QSBiaWVudMO0dCBzdXIgT3Jpbm9jby48L3A+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG59IiwiLy8gTWFrZSBwcmljZSByZWFkYWJsZSBmb3IgdXNlcnNcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmljZShwcmljZSkge1xuICBwcmljZSA9IHByaWNlIC8gMTAwO1xuXG4gIHJldHVybiBwcmljZS50b0ZpeGVkKDIpICsgJyDigqwnO1xufVxuXG5cbi8vIEdldCBpZCBmcm9tIHVybCBwYXJhbWV0ZXJzXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdElkRnJvbVVybCgpIHtcbiAgY29uc3QgaWQgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnNwbGl0KFwiPVwiKVsxXTtcblxuICBpZiAoIWlkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gaWQ7XG59XG5cbi8vIEFuaW1hdGUgY2FydCBidXR0b24gd2hlbiBhbiBpdGVtIGhhcyBiZWVuIGFkZGVkXG5leHBvcnQgZnVuY3Rpb24gYW5pbWF0ZUNhcnRCdG4oKSB7XG4gIGNvbnN0IGNhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FydC1idG4nKTtcblxuICBjYXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcblxuICBjYXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlJylcbiAgfSlcbn0iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9vcmRlci5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=
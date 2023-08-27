(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./submit-confirm-jq_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/submit-confirm-jq_controller.js",
	"./upload-excel_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/upload-excel_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/submit-confirm-jq_controller.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/submit-confirm-jq_controller.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_22__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "onSubmit",
    value: function onSubmit(event) {
      var _this = this;
      event.preventDefault();
      sweetalert2__WEBPACK_IMPORTED_MODULE_21___default().fire({
        title: this.titleValue || null,
        text: this.textValue || null,
        icon: this.iconValue || null,
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Да, удалить',
        cancelButtonText: 'Отмена',
        showLoaderOnConfirm: true,
        preConfirm: function preConfirm() {
          return fetch(_this.formUrlValue).then(function (response) {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })["catch"](function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_21___default().showValidationMessage("Request failed: ".concat(error));
          });
        },
        allowOutsideClick: function allowOutsideClick() {
          return !sweetalert2__WEBPACK_IMPORTED_MODULE_21___default().isLoading();
        }
      }).then(function (result) {
        if (result.isConfirmed) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_21___default().fire({
            title: result.value['title'],
            text: result.value['text'],
            showCancelButton: true,
            showConfirmButton: false,
            cancelButtonColor: result.value['color'],
            cancelButtonText: result.value['button']
          });
          if (result.value['title'] !== 'Ошибка') {
            //типа удаляет строчку
            jquery__WEBPACK_IMPORTED_MODULE_22___default()('#row_' + result.value['id']).hide(2000);
          }
        }
      });
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__.Controller);
_defineProperty(_default, "values", {
  title: String,
  text: String,
  icon: String,
  confirmButtonText: String,
  submitAsync: Boolean,
  formUrl: String
});
_defineProperty(_default, "targets", ['row']);


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/upload-excel_controller.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/upload-excel_controller.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_23__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "onSubmit",
    value: function onSubmit(event) {
      var _this = this;
      //console.log('адрес для запроса='+this.urlValue+'; имя файла='+this.fileTarget.files[0].name);

      var formData = new FormData();
      formData.append('file', this.fileTarget.files[0]);

      //console.log(formData.get('file'));//если хочется посмотреть имя файла

      // делаем запрос на сервер по адресу, который пришел в переменной url
      // передаем через formData файл из поля input со свойством data-upload-excel-target="file"
      return fetch(this.urlValue, {
        method: 'POST',
        body: formData
      })

      //читаем заголовок ответа
      .then(function (response) {
        if (!response.ok) {
          // если в заголовке ответа от сервера содержится ошибка, то готовим текст ошибки
          throw new Error(response.statusText);
        }
        // возвращаем тело ответа в формате json
        //return response.json()
        return response.text();
      })

      //обрабатываем результат
      .then(function (result) {
        console.log('обработка результата');
        if (!result && result['title'] === 'Ошибка') {
          //показываем sweetalert сообщение, текст которого формирует
          // контроллер UserController (app_user_xlsx_to_mysql)
          sweetalert2__WEBPACK_IMPORTED_MODULE_21___default().fire({
            title: result['title'],
            text: result['text'],
            showCancelButton: true,
            showConfirmButton: false,
            cancelButtonColor: result['color'],
            cancelButtonText: result['button']
          });
        } else {
          //console.log('all good')
          console.log(result);
          _this.uploadresultTarget.innerHTML = result;
        }
      })["catch"](function (error) {
        // если был сформирован текст ошибки, то выдаем ее через sweetalert
        console.log('error=' + error); //вывод ошибки в консоль
        // Swal.showValidationMessage(
        //     `Request failed: ${error}`
        // )
      });
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__.Controller);
_defineProperty(_default, "values", {
  url: String
});
_defineProperty(_default, "targets", ['file', 'uploadresult']);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application



//скрипты меню
jquery__WEBPACK_IMPORTED_MODULE_2___default()('.btn').click(function () {
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).toggleClass("click");
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.sidebar').toggleClass("show");
});
jquery__WEBPACK_IMPORTED_MODULE_2___default()('.sidebar ul li a').click(function () {
  var id = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('id');
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('nav ul li ul.item-show-' + id).toggleClass("show");
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('nav ul li #' + id + ' span').toggleClass("rotate");
});
jquery__WEBPACK_IMPORTED_MODULE_2___default()('nav ul li').click(function () {
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).addClass("active").siblings().removeClass("active");
});

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-22c808"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O0FDaEMwRDs7QUFFNUQ7QUFDTyxJQUFNRSxHQUFHLEdBQUdELDBFQUFnQixDQUFDRSx5SUFJbkMsQ0FBQztBQUNGO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1RBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3N1Ym1pdC1jb25maXJtLWpxX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3VwbG9hZC1leGNlbF9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/M2ZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vc3VibWl0LWNvbmZpcm0tanFfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL3N1Ym1pdC1jb25maXJtLWpxX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL3VwbG9hZC1leGNlbF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvdXBsb2FkLWV4Y2VsX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHZhbHVlcyA9IHtcbiAgICAgICAgdGl0bGU6IFN0cmluZyxcbiAgICAgICAgdGV4dDogU3RyaW5nLFxuICAgICAgICBpY29uOiBTdHJpbmcsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBTdHJpbmcsXG4gICAgICAgIHN1Ym1pdEFzeW5jOiBCb29sZWFuLFxuICAgICAgICBmb3JtVXJsOiBTdHJpbmcsXG4gICAgfVxuICAgIHN0YXRpYyB0YXJnZXRzID0gWydyb3cnXTtcblxuICAgIG9uU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlVmFsdWUgfHwgbnVsbCxcbiAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dFZhbHVlIHx8IG51bGwsXG4gICAgICAgICAgICBpY29uOiB0aGlzLmljb25WYWx1ZSB8fCBudWxsLFxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyNkMzMnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAn0JTQsCwg0YPQtNCw0LvQuNGC0YwnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ9Ce0YLQvNC10L3QsCcsXG4gICAgICAgICAgICBzaG93TG9hZGVyT25Db25maXJtOiB0cnVlLFxuICAgICAgICAgICAgcHJlQ29uZmlybTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaCh0aGlzLmZvcm1VcmxWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5zaG93VmFsaWRhdGlvbk1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlcXVlc3QgZmFpbGVkOiAke2Vycm9yfWBcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbGxvd091dHNpZGVDbGljazogKCkgPT4gIVN3YWwuaXNMb2FkaW5nKClcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3VsdC52YWx1ZVsndGl0bGUnXSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzdWx0LnZhbHVlWyd0ZXh0J10sXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IHJlc3VsdC52YWx1ZVsnY29sb3InXSxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogcmVzdWx0LnZhbHVlWydidXR0b24nXSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWVbJ3RpdGxlJ10hPT0n0J7RiNC40LHQutCwJyl7XG4gICAgICAgICAgICAgICAgICAgIC8v0YLQuNC/0LAg0YPQtNCw0LvRj9C10YIg0YHRgtGA0L7Rh9C60YNcbiAgICAgICAgICAgICAgICAgICAgJCgnI3Jvd18nK3Jlc3VsdC52YWx1ZVsnaWQnXSkuaGlkZSgyMDAwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdmFsdWVzID0ge1xuICAgICAgICB1cmw6IFN0cmluZyxcbiAgICB9XG5cbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFsnZmlsZScsICd1cGxvYWRyZXN1bHQnXTtcblxuICAgIG9uU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ9Cw0LTRgNC10YEg0LTQu9GPINC30LDQv9GA0L7RgdCwPScrdGhpcy51cmxWYWx1ZSsnOyDQuNC80Y8g0YTQsNC50LvQsD0nK3RoaXMuZmlsZVRhcmdldC5maWxlc1swXS5uYW1lKTtcblxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCB0aGlzLmZpbGVUYXJnZXQuZmlsZXNbMF0pO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coZm9ybURhdGEuZ2V0KCdmaWxlJykpOy8v0LXRgdC70Lgg0YXQvtGH0LXRgtGB0Y8g0L/QvtGB0LzQvtGC0YDQtdGC0Ywg0LjQvNGPINGE0LDQudC70LBcblxuICAgICAgICAvLyDQtNC10LvQsNC10Lwg0LfQsNC/0YDQvtGBINC90LAg0YHQtdGA0LLQtdGAINC/0L4g0LDQtNGA0LXRgdGDLCDQutC+0YLQvtGA0YvQuSDQv9GA0LjRiNC10Lsg0LIg0L/QtdGA0LXQvNC10L3QvdC+0LkgdXJsXG4gICAgICAgIC8vINC/0LXRgNC10LTQsNC10Lwg0YfQtdGA0LXQtyBmb3JtRGF0YSDRhNCw0LnQuyDQuNC3INC/0L7Qu9GPIGlucHV0INGB0L4g0YHQstC+0LnRgdGC0LLQvtC8IGRhdGEtdXBsb2FkLWV4Y2VsLXRhcmdldD1cImZpbGVcIlxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy51cmxWYWx1ZSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICB9KVxuXG4gICAgICAgICAgICAvL9GH0LjRgtCw0LXQvCDQt9Cw0LPQvtC70L7QstC+0Log0L7RgtCy0LXRgtCwXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICAvLyDQtdGB0LvQuCDQsiDQt9Cw0LPQvtC70L7QstC60LUg0L7RgtCy0LXRgtCwINC+0YIg0YHQtdGA0LLQtdGA0LAg0YHQvtC00LXRgNC20LjRgtGB0Y8g0L7RiNC40LHQutCwLCDRgtC+INCz0L7RgtC+0LLQuNC8INGC0LXQutGB0YIg0L7RiNC40LHQutC4XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDQstC+0LfQstGA0LDRidCw0LXQvCDRgtC10LvQviDQvtGC0LLQtdGC0LAg0LIg0YTQvtGA0LzQsNGC0LUganNvblxuICAgICAgICAgICAgICAgIC8vcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8v0L7QsdGA0LDQsdCw0YLRi9Cy0LDQtdC8INGA0LXQt9GD0LvRjNGC0LDRglxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0L7QsdGA0LDQsdC+0YLQutCwINGA0LXQt9GD0LvRjNGC0LDRgtCwJylcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCAmJiByZXN1bHRbJ3RpdGxlJ109PT0n0J7RiNC40LHQutCwJyl7XG4gICAgICAgICAgICAgICAgICAgIC8v0L/QvtC60LDQt9GL0LLQsNC10Lwgc3dlZXRhbGVydCDRgdC+0L7QsdGJ0LXQvdC40LUsINGC0LXQutGB0YIg0LrQvtGC0L7RgNC+0LPQviDRhNC+0YDQvNC40YDRg9C10YJcbiAgICAgICAgICAgICAgICAgICAgLy8g0LrQvtC90YLRgNC+0LvQu9C10YAgVXNlckNvbnRyb2xsZXIgKGFwcF91c2VyX3hsc3hfdG9fbXlzcWwpXG4gICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzdWx0Wyd0aXRsZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzdWx0Wyd0ZXh0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IHJlc3VsdFsnY29sb3InXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IHJlc3VsdFsnYnV0dG9uJ10sXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdhbGwgZ29vZCcpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRyZXN1bHRUYXJnZXQuaW5uZXJIVE1MID0gcmVzdWx0XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAvLyDQtdGB0LvQuCDQsdGL0Lsg0YHRhNC+0YDQvNC40YDQvtCy0LDQvSDRgtC10LrRgdGCINC+0YjQuNCx0LrQuCwg0YLQviDQstGL0LTQsNC10Lwg0LXQtSDRh9C10YDQtdC3IHN3ZWV0YWxlcnRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcj0nK2Vycm9yKS8v0LLRi9Cy0L7QtCDQvtGI0LjQsdC60Lgg0LIg0LrQvtC90YHQvtC70YxcbiAgICAgICAgICAgIC8vIFN3YWwuc2hvd1ZhbGlkYXRpb25NZXNzYWdlKFxuICAgICAgICAgICAgLy8gICAgIGBSZXF1ZXN0IGZhaWxlZDogJHtlcnJvcn1gXG4gICAgICAgICAgICAvLyApXG4gICAgICAgIH0pXG4gICAgfVxufSIsImltcG9ydCAnLi9ib290c3RyYXAuanMnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8v0YHQutGA0LjQv9GC0Ysg0LzQtdC90Y5cbiQoJy5idG4nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJjbGlja1wiKTtcbiAgICAkKCcuc2lkZWJhcicpLnRvZ2dsZUNsYXNzKFwic2hvd1wiKTtcbn0pO1xuXG5cbiQoJy5zaWRlYmFyIHVsIGxpIGEnKS5jbGljayhmdW5jdGlvbigpe1xuICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAkKCduYXYgdWwgbGkgdWwuaXRlbS1zaG93LScraWQpLnRvZ2dsZUNsYXNzKFwic2hvd1wiKTtcbiAgICAkKCduYXYgdWwgbGkgIycraWQrJyBzcGFuJykudG9nZ2xlQ2xhc3MoXCJyb3RhdGVcIik7XG5cbn0pO1xuXG4kKCduYXYgdWwgbGknKS5jbGljayhmdW5jdGlvbigpe1xuICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbn0pO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJTd2FsIiwiJCIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsIl90aGlzIiwicHJldmVudERlZmF1bHQiLCJmaXJlIiwidGl0bGUiLCJ0aXRsZVZhbHVlIiwidGV4dCIsInRleHRWYWx1ZSIsImljb24iLCJpY29uVmFsdWUiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJzaG93TG9hZGVyT25Db25maXJtIiwicHJlQ29uZmlybSIsImZldGNoIiwiZm9ybVVybFZhbHVlIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1c1RleHQiLCJqc29uIiwiZXJyb3IiLCJzaG93VmFsaWRhdGlvbk1lc3NhZ2UiLCJjb25jYXQiLCJhbGxvd091dHNpZGVDbGljayIsImlzTG9hZGluZyIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwic2hvd0NvbmZpcm1CdXR0b24iLCJoaWRlIiwiX2RlZmluZVByb3BlcnR5IiwiU3RyaW5nIiwic3VibWl0QXN5bmMiLCJCb29sZWFuIiwiZm9ybVVybCIsImRlZmF1bHQiLCJNb2RhbCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlVGFyZ2V0IiwiZmlsZXMiLCJ1cmxWYWx1ZSIsIm1ldGhvZCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwidXBsb2FkcmVzdWx0VGFyZ2V0IiwiaW5uZXJIVE1MIiwidXJsIiwiY2xpY2siLCJ0b2dnbGVDbGFzcyIsImlkIiwiYXR0ciIsImFkZENsYXNzIiwic2libGluZ3MiLCJyZW1vdmVDbGFzcyIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style-src.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style-src.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Klee+One:wght@400;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  padding: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #c3e0e5;\n}\n\ni {\n  cursor: pointer;\n}\n\n.list-container {\n  background-color: #274472;\n  position: relative;\n  overflow-y: auto;\n  display: flex;\n  flex-flow: column;\n  width: 55%;\n  height: 70%;\n  margin: 10% auto;\n  box-shadow: 5px 5px 20px grey;\n  border-radius: 8px;\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  -ms-border-radius: 8px;\n  -o-border-radius: 8px;\n}\n\n.list-container .title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 50px;\n  padding: 0 20px 0 20px;\n  font-size: 1.8rem;\n  color: #e4f4f3;\n  font-family: 'Klee One', cursive;\n  font-weight: 600;\n}\n\n.list-container .add {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 50px;\n  border-top: 1px solid gray;\n}\n\n.list-container .add input {\n  background-color: transparent;\n  border: none;\n  margin-left: 20px;\n  width: 80%;\n  min-height: 45px;\n  font-size: 1.3rem;\n  color: #c3e0e5;\n}\n\n.list-container .add #add {\n  margin-right: 20px;\n  font-size: 1.2em;\n  border: none;\n  background-color: transparent;\n  color: #c3e0e5;\n}\n\n.list-container .clear {\n  background-color: #5885af;\n  cursor: pointer;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  min-height: 50px;\n  text-align: center;\n  border-top: 1px solid gray;\n  color: white;\n}\n\n.list-container .clear:active {\n  color: white;\n  background-color: red;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: gray;\n  font-style: italic;\n}\n\n.d-none {\n  display: none;\n}\n\n.list-container .list {\n  overflow-y: auto;\n  display: flex;\n  flex-flow: column;\n  height: 77%;\n  padding-left: 0;\n  margin: 0;\n}\n\n.list-container .list li {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  list-style: none;\n  border: 1px solid gray;\n  border-radius: 8px;\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  -ms-border-radius: 8px;\n  -o-border-radius: 8px;\n}\n\n.list-container .list li .description-container {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 90%;\n  margin: 0;\n  margin-left: 20px;\n  min-height: 70px;\n}\n\n.list-container .list li .description-container p {\n  margin: 10px;\n  width: 90%;\n  font-size: 1.2rem;\n  font-family: 'Klee One', cursive;\n  color: #c3e0e5;\n}\n\n.list-container .list .description-container .check {\n  appearance: none;\n  width: 1.2rem;\n  height: 1.2rem;\n  border: 2px solid #c3e0e5;\n  background: rgba(255, 241, 241, 0.1);\n}\n\n.list-container .list .description-container .edit-description {\n  min-height: 55px;\n  width: 90%;\n  font-size: 1.2rem;\n  background-color: rgba(255, 255, 255, 0.3);\n  border: none;\n}\n\n.fa-trash {\n  color: red;\n  padding: 10px;\n  font-size: 1.3rem;\n  margin-right: 15px;\n}\n\n.fa-check {\n  font-size: 1.5rem;\n  color: #c3e0e5;\n}\n\n.fa-edit {\n  font-size: 1.3rem;\n  margin-right: 15px;\n  color: #c3e0e5;\n}\n", "",{"version":3,"sources":["webpack://./src/style-src.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,UAAU;EACV,WAAW;EACX,gBAAgB;EAChB,6BAA6B;EAC7B,kBAAkB;EAClB,0BAA0B;EAC1B,uBAAuB;EACvB,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,iBAAiB;EACjB,cAAc;EACd,gCAAgC;EAChC,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,gBAAgB;EAChB,0BAA0B;AAC5B;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,iBAAiB;EACjB,UAAU;EACV,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,OAAO;EACP,gBAAgB;EAChB,kBAAkB;EAClB,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;EAC7B,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,WAAW;EACX,eAAe;EACf,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;EAClB,0BAA0B;EAC1B,uBAAuB;EACvB,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,iBAAiB;EACjB,gCAAgC;EAChC,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,cAAc;EACd,yBAAyB;EACzB,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,iBAAiB;EACjB,0CAA0C;EAC1C,YAAY;AACd;;AAEA;EACE,UAAU;EACV,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Klee+One:wght@400;600&display=swap');\n\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #c3e0e5;\n}\n\ni {\n  cursor: pointer;\n}\n\n.list-container {\n  background-color: #274472;\n  position: relative;\n  overflow-y: auto;\n  display: flex;\n  flex-flow: column;\n  width: 55%;\n  height: 70%;\n  margin: 10% auto;\n  box-shadow: 5px 5px 20px grey;\n  border-radius: 8px;\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  -ms-border-radius: 8px;\n  -o-border-radius: 8px;\n}\n\n.list-container .title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 50px;\n  padding: 0 20px 0 20px;\n  font-size: 1.8rem;\n  color: #e4f4f3;\n  font-family: 'Klee One', cursive;\n  font-weight: 600;\n}\n\n.list-container .add {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 50px;\n  border-top: 1px solid gray;\n}\n\n.list-container .add input {\n  background-color: transparent;\n  border: none;\n  margin-left: 20px;\n  width: 80%;\n  min-height: 45px;\n  font-size: 1.3rem;\n  color: #c3e0e5;\n}\n\n.list-container .add #add {\n  margin-right: 20px;\n  font-size: 1.2em;\n  border: none;\n  background-color: transparent;\n  color: #c3e0e5;\n}\n\n.list-container .clear {\n  background-color: #5885af;\n  cursor: pointer;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  min-height: 50px;\n  text-align: center;\n  border-top: 1px solid gray;\n  color: white;\n}\n\n.list-container .clear:active {\n  color: white;\n  background-color: red;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: gray;\n  font-style: italic;\n}\n\n.d-none {\n  display: none;\n}\n\n.list-container .list {\n  overflow-y: auto;\n  display: flex;\n  flex-flow: column;\n  height: 77%;\n  padding-left: 0;\n  margin: 0;\n}\n\n.list-container .list li {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  list-style: none;\n  border: 1px solid gray;\n  border-radius: 8px;\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  -ms-border-radius: 8px;\n  -o-border-radius: 8px;\n}\n\n.list-container .list li .description-container {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 90%;\n  margin: 0;\n  margin-left: 20px;\n  min-height: 70px;\n}\n\n.list-container .list li .description-container p {\n  margin: 10px;\n  width: 90%;\n  font-size: 1.2rem;\n  font-family: 'Klee One', cursive;\n  color: #c3e0e5;\n}\n\n.list-container .list .description-container .check {\n  appearance: none;\n  width: 1.2rem;\n  height: 1.2rem;\n  border: 2px solid #c3e0e5;\n  background: rgba(255, 241, 241, 0.1);\n}\n\n.list-container .list .description-container .edit-description {\n  min-height: 55px;\n  width: 90%;\n  font-size: 1.2rem;\n  background-color: rgba(255, 255, 255, 0.3);\n  border: none;\n}\n\n.fa-trash {\n  color: red;\n  padding: 10px;\n  font-size: 1.3rem;\n  margin-right: 15px;\n}\n\n.fa-check {\n  font-size: 1.5rem;\n  color: #c3e0e5;\n}\n\n.fa-edit {\n  font-size: 1.3rem;\n  margin-right: 15px;\n  color: #c3e0e5;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style-src.css":
/*!***************************!*\
  !*** ./src/style-src.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_src_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style-src.css */ "./node_modules/css-loader/dist/cjs.js!./src/style-src.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_src_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_src_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_src_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_src_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTask)
/* harmony export */ });
const addTask = (tasks) => {
  const description = document.getElementById('task-desc').value;
  const index = (tasks.length === 0) ? 1 : tasks[tasks.length - 1].index + 1;
  const completed = false;
  tasks.push({ description, index, completed });
  document.getElementById('task-desc').value = '';
};



/***/ }),

/***/ "./src/editTask.js":
/*!*************************!*\
  !*** ./src/editTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateStorage.js */ "./src/updateStorage.js");
/* harmony import */ var _showList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showList.js */ "./src/showList.js");



const editTask = (tasks, target) => {
  const id = parseInt(target.parentElement.parentElement.id, 10);
  let description = target.innerText;
  const input = target.parentElement.lastChild;
  const editButton = target.parentElement.parentElement.lastChild;
  const removeButton = editButton.previousSibling;
  target.classList.add('d-none');
  removeButton.classList.add('d-none');
  editButton.classList.remove('d-none');
  input.value = description;
  input.classList.remove('d-none');
  input.addEventListener('keyup', () => {
    description = input.value;
  });
  editButton.addEventListener('click', () => {
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].index === id) tasks[i].description = description;
    }
    editButton.classList.add('d-none');
    setTimeout(() => {
      removeButton.classList.remove('d-none');
    }, 1000);
    input.classList.add('d-none');
    target.classList.remove('d-none');
    (0,_updateStorage_js__WEBPACK_IMPORTED_MODULE_0__.default)(tasks);
    (0,_showList_js__WEBPACK_IMPORTED_MODULE_1__.default)(tasks);
  });
};



/***/ }),

/***/ "./src/getStorage.js":
/*!***************************!*\
  !*** ./src/getStorage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getStorage)
/* harmony export */ });
const getStorage = () => {
  const storage = JSON.parse(localStorage.getItem('storage'));
  return (storage !== null) ? storage : [];
};



/***/ }),

/***/ "./src/removeCompletedTasks.js":
/*!*************************************!*\
  !*** ./src/removeCompletedTasks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeCompletedTasks)
/* harmony export */ });
/* harmony import */ var _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateStorage.js */ "./src/updateStorage.js");
/* harmony import */ var _showList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showList.js */ "./src/showList.js");



const removeCompletedTasks = (tasks) => {
  tasks = tasks.filter((task) => task.completed === false);
  (0,_updateStorage_js__WEBPACK_IMPORTED_MODULE_0__.default)(tasks);
  (0,_showList_js__WEBPACK_IMPORTED_MODULE_1__.default)(tasks);
  return tasks;
};



/***/ }),

/***/ "./src/removeTask.js":
/*!***************************!*\
  !*** ./src/removeTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeTask)
/* harmony export */ });
/* harmony import */ var _updateStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateStorage.js */ "./src/updateStorage.js");
/* harmony import */ var _showList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showList.js */ "./src/showList.js");



const removeTask = (tasks, id) => {
  tasks = tasks.filter((task) => task.index !== id);
  (0,_updateStorage_js__WEBPACK_IMPORTED_MODULE_0__.default)(tasks);
  (0,_showList_js__WEBPACK_IMPORTED_MODULE_1__.default)(tasks);
  return tasks;
};



/***/ }),

/***/ "./src/showList.js":
/*!*************************!*\
  !*** ./src/showList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showList)
/* harmony export */ });
const showList = (tasksList) => {
  const listDiv = document.getElementById('list');
  listDiv.innerHTML = '';
  for (let index = 0; index < tasksList.length; index += 1) {
    const task = document.createElement('li');
    const remove = document.createElement('i');
    const edit = document.createElement('i');
    const descriptionContainer = document.createElement('div');
    const description = document.createElement('p');
    const editDescription = document.createElement('input');
    if (tasksList[index].completed) {
      const checked = document.createElement('i');
      checked.className = 'fas fa-check';
      descriptionContainer.appendChild(checked);
      description.classList.add('completed');
    } else {
      const check = document.createElement('input');
      check.type = 'checkbox';
      check.className = 'check';
      descriptionContainer.appendChild(check);
    }
    edit.className = 'fas fa-edit d-none';
    editDescription.type = 'text';
    editDescription.id = 'edit-Description';
    editDescription.className = 'edit-description d-none';
    task.id = tasksList[index].index;
    remove.className = 'fas fa-trash';
    descriptionContainer.classList.add('description-container');
    description.className += ' description';
    description.innerHTML += ` ${tasksList[index].description}`;
    descriptionContainer.appendChild(description);
    descriptionContainer.appendChild(editDescription);
    task.appendChild(descriptionContainer);
    task.appendChild(remove);
    task.appendChild(edit);
    listDiv.appendChild(task);
  }
};




/***/ }),

/***/ "./src/updateStatus.js":
/*!*****************************!*\
  !*** ./src/updateStatus.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateStatus)
/* harmony export */ });
const updateStatus = (list, id, completed) => {
  list.forEach((task) => {
    if (task.index === id) task.completed = completed;
  });
};




/***/ }),

/***/ "./src/updateStorage.js":
/*!******************************!*\
  !*** ./src/updateStorage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateStorage)
/* harmony export */ });
const updateStorage = (storage) => {
  localStorage.setItem('storage', JSON.stringify(storage));
};



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
/******/ 			id: moduleId,
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/main-src.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_src_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style-src.css */ "./src/style-src.css");
/* harmony import */ var _showList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showList.js */ "./src/showList.js");
/* harmony import */ var _updateStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateStatus.js */ "./src/updateStatus.js");
/* harmony import */ var _updateStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateStorage.js */ "./src/updateStorage.js");
/* harmony import */ var _getStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getStorage.js */ "./src/getStorage.js");
/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addTask.js */ "./src/addTask.js");
/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./removeTask.js */ "./src/removeTask.js");
/* harmony import */ var _removeCompletedTasks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./removeCompletedTasks.js */ "./src/removeCompletedTasks.js");
/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editTask.js */ "./src/editTask.js");











let tasks = (0,_getStorage_js__WEBPACK_IMPORTED_MODULE_4__.default)();

(0,_showList_js__WEBPACK_IMPORTED_MODULE_1__.default)(tasks);

// update the task status, edit && remove a task --------------------------------------------------

const listDiv = document.getElementById('list');
const clearAllButton = document.getElementById('clear-list');
listDiv.addEventListener('click', (event) => {
  if (event.target !== event.currentTarget) {
    if (event.target.className === 'check') {
      (0,_updateStatus_js__WEBPACK_IMPORTED_MODULE_2__.default)(tasks, parseInt(event.target.parentElement.parentElement.id, 10), true);
      (0,_showList_js__WEBPACK_IMPORTED_MODULE_1__.default)(tasks);
      (0,_updateStorage_js__WEBPACK_IMPORTED_MODULE_3__.default)(tasks);
    }
    if (event.target.className === 'fas fa-check') {
      (0,_updateStatus_js__WEBPACK_IMPORTED_MODULE_2__.default)(tasks, parseInt(event.target.parentElement.parentElement.id, 10), false);
      (0,_showList_js__WEBPACK_IMPORTED_MODULE_1__.default)(tasks);
      (0,_updateStorage_js__WEBPACK_IMPORTED_MODULE_3__.default)(tasks);
    }
    if (event.target.className === 'fas fa-trash') {
      tasks = (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_6__.default)(tasks, parseInt(event.target.parentElement.id, 10));
    }
    if (event.target.classList.contains('description')) {
      (0,_editTask_js__WEBPACK_IMPORTED_MODULE_8__.default)(tasks, event.target);
      // updateStorage(tasks);
      // showList(tasks);
    }
  }
  event.stopPropagation();
});

clearAllButton.addEventListener('click', () => {
  tasks = (0,_removeCompletedTasks_js__WEBPACK_IMPORTED_MODULE_7__.default)(tasks);
});

// add a task ----------------------------------------------------------------
const addTaskButton = document.getElementById('add');
addTaskButton.addEventListener('click', () => {
  (0,_addTask_js__WEBPACK_IMPORTED_MODULE_5__.default)(tasks);
  (0,_updateStorage_js__WEBPACK_IMPORTED_MODULE_3__.default)(tasks);
  (0,_showList_js__WEBPACK_IMPORTED_MODULE_1__.default)(tasks);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTs7QUFFdEIscURBQVE7O0FBRVI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seURBQVk7QUFDbEIsTUFBTSxxREFBUTtBQUNkLE1BQU0sMERBQWE7QUFDbkI7QUFDQTtBQUNBLE1BQU0seURBQVk7QUFDbEIsTUFBTSxxREFBUTtBQUNkLE1BQU0sMERBQWE7QUFDbkI7QUFDQTtBQUNBLGNBQWMsdURBQVU7QUFDeEI7QUFDQTtBQUNBLE1BQU0scURBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLFVBQVUsaUVBQW9CO0FBQzlCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBTztBQUNULEVBQUUsMERBQWE7QUFDZixFQUFFLHFEQUFRO0FBQ1YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUtc3JjLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS1zcmMuY3NzP2VjMTQiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9lZGl0VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2dldFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9yZW1vdmVDb21wbGV0ZWRUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3JlbW92ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zaG93TGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VwZGF0ZVN0YXR1cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VwZGF0ZVN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tYWluLXNyYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUtsZWUrT25lOndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjM2UwZTU7XFxufVxcblxcbmkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3NDQ3MjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICB3aWR0aDogNTUlO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBtYXJnaW46IDEwJSBhdXRvO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIC50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBjb2xvcjogI2U0ZjRmMztcXG4gIGZvbnQtZmFtaWx5OiAnS2xlZSBPbmUnLCBjdXJzaXZlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIC5hZGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciAuYWRkIGlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICB3aWR0aDogODAlO1xcbiAgbWluLWhlaWdodDogNDVweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6ICNjM2UwZTU7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciAuYWRkICNhZGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICNjM2UwZTU7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciAuY2xlYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODVhZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIC5jbGVhcjphY3RpdmUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyYXk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5kLW5vbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IHtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBoZWlnaHQ6IDc3JTtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtbXMtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW8tYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIgLmxpc3QgbGkgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciAubGlzdCBsaSAuZGVzY3JpcHRpb24tY29udGFpbmVyIHAge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdLbGVlIE9uZScsIGN1cnNpdmU7XFxuICBjb2xvcjogI2MzZTBlNTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC5kZXNjcmlwdGlvbi1jb250YWluZXIgLmNoZWNrIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICB3aWR0aDogMS4ycmVtO1xcbiAgaGVpZ2h0OiAxLjJyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCAjYzNlMGU1O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0MSwgMjQxLCAwLjEpO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZWRpdC1kZXNjcmlwdGlvbiB7XFxuICBtaW4taGVpZ2h0OiA1NXB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZmEtdHJhc2gge1xcbiAgY29sb3I6IHJlZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuXFxuLmZhLWNoZWNrIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6ICNjM2UwZTU7XFxufVxcblxcbi5mYS1lZGl0IHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgY29sb3I6ICNjM2UwZTU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS1zcmMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsMENBQTBDO0VBQzFDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUtsZWUrT25lOndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjM2UwZTU7XFxufVxcblxcbmkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3NDQ3MjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICB3aWR0aDogNTUlO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBtYXJnaW46IDEwJSBhdXRvO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIC50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBjb2xvcjogI2U0ZjRmMztcXG4gIGZvbnQtZmFtaWx5OiAnS2xlZSBPbmUnLCBjdXJzaXZlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIC5hZGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciAuYWRkIGlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICB3aWR0aDogODAlO1xcbiAgbWluLWhlaWdodDogNDVweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6ICNjM2UwZTU7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciAuYWRkICNhZGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICNjM2UwZTU7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciAuY2xlYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4ODVhZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIC5jbGVhcjphY3RpdmUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyYXk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5kLW5vbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IHtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBoZWlnaHQ6IDc3JTtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtbXMtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW8tYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIgLmxpc3QgbGkgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciAubGlzdCBsaSAuZGVzY3JpcHRpb24tY29udGFpbmVyIHAge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdLbGVlIE9uZScsIGN1cnNpdmU7XFxuICBjb2xvcjogI2MzZTBlNTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC5kZXNjcmlwdGlvbi1jb250YWluZXIgLmNoZWNrIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICB3aWR0aDogMS4ycmVtO1xcbiAgaGVpZ2h0OiAxLjJyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCAjYzNlMGU1O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0MSwgMjQxLCAwLjEpO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZWRpdC1kZXNjcmlwdGlvbiB7XFxuICBtaW4taGVpZ2h0OiA1NXB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZmEtdHJhc2gge1xcbiAgY29sb3I6IHJlZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuXFxuLmZhLWNoZWNrIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6ICNjM2UwZTU7XFxufVxcblxcbi5mYS1lZGl0IHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgY29sb3I6ICNjM2UwZTU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLXNyYy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLXNyYy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFkZFRhc2sgPSAodGFza3MpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjJykudmFsdWU7XG4gIGNvbnN0IGluZGV4ID0gKHRhc2tzLmxlbmd0aCA9PT0gMCkgPyAxIDogdGFza3NbdGFza3MubGVuZ3RoIC0gMV0uaW5kZXggKyAxO1xuICBjb25zdCBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgdGFza3MucHVzaCh7IGRlc2NyaXB0aW9uLCBpbmRleCwgY29tcGxldGVkIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjJykudmFsdWUgPSAnJztcbn07XG5cbmV4cG9ydCB7IGFkZFRhc2sgYXMgZGVmYXVsdCB9OyIsImltcG9ydCB1cGRhdGVTdG9yYWdlIGZyb20gJy4vdXBkYXRlU3RvcmFnZS5qcyc7XG5pbXBvcnQgc2hvd0xpc3QgZnJvbSAnLi9zaG93TGlzdC5qcyc7XG5cbmNvbnN0IGVkaXRUYXNrID0gKHRhc2tzLCB0YXJnZXQpID0+IHtcbiAgY29uc3QgaWQgPSBwYXJzZUludCh0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkLCAxMCk7XG4gIGxldCBkZXNjcmlwdGlvbiA9IHRhcmdldC5pbm5lclRleHQ7XG4gIGNvbnN0IGlucHV0ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQubGFzdENoaWxkO1xuICBjb25zdCBlZGl0QnV0dG9uID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5sYXN0Q2hpbGQ7XG4gIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGVkaXRCdXR0b24ucHJldmlvdXNTaWJsaW5nO1xuICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gIHJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgaW5wdXQudmFsdWUgPSBkZXNjcmlwdGlvbjtcbiAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgIGRlc2NyaXB0aW9uID0gaW5wdXQudmFsdWU7XG4gIH0pO1xuICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0YXNrc1tpXS5pbmRleCA9PT0gaWQpIHRhc2tzW2ldLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgfSwgMTAwMCk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgIHVwZGF0ZVN0b3JhZ2UodGFza3MpO1xuICAgIHNob3dMaXN0KHRhc2tzKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBlZGl0VGFzayBhcyBkZWZhdWx0IH07IiwiY29uc3QgZ2V0U3RvcmFnZSA9ICgpID0+IHtcbiAgY29uc3Qgc3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JhZ2UnKSk7XG4gIHJldHVybiAoc3RvcmFnZSAhPT0gbnVsbCkgPyBzdG9yYWdlIDogW107XG59O1xuXG5leHBvcnQgeyBnZXRTdG9yYWdlIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgdXBkYXRlU3RvcmFnZSBmcm9tICcuL3VwZGF0ZVN0b3JhZ2UuanMnO1xuaW1wb3J0IHNob3dMaXN0IGZyb20gJy4vc2hvd0xpc3QuanMnO1xuXG5jb25zdCByZW1vdmVDb21wbGV0ZWRUYXNrcyA9ICh0YXNrcykgPT4ge1xuICB0YXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKTtcbiAgdXBkYXRlU3RvcmFnZSh0YXNrcyk7XG4gIHNob3dMaXN0KHRhc2tzKTtcbiAgcmV0dXJuIHRhc2tzO1xufTtcblxuZXhwb3J0IHsgcmVtb3ZlQ29tcGxldGVkVGFza3MgYXMgZGVmYXVsdCB9OyIsImltcG9ydCB1cGRhdGVTdG9yYWdlIGZyb20gJy4vdXBkYXRlU3RvcmFnZS5qcyc7XG5pbXBvcnQgc2hvd0xpc3QgZnJvbSAnLi9zaG93TGlzdC5qcyc7XG5cbmNvbnN0IHJlbW92ZVRhc2sgPSAodGFza3MsIGlkKSA9PiB7XG4gIHRhc2tzID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmluZGV4ICE9PSBpZCk7XG4gIHVwZGF0ZVN0b3JhZ2UodGFza3MpO1xuICBzaG93TGlzdCh0YXNrcyk7XG4gIHJldHVybiB0YXNrcztcbn07XG5cbmV4cG9ydCB7IHJlbW92ZVRhc2sgYXMgZGVmYXVsdCB9OyIsImNvbnN0IHNob3dMaXN0ID0gKHRhc2tzTGlzdCkgPT4ge1xuICBjb25zdCBsaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTtcbiAgbGlzdERpdi5pbm5lckhUTUwgPSAnJztcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRhc2tzTGlzdC5sZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaWYgKHRhc2tzTGlzdFtpbmRleF0uY29tcGxldGVkKSB7XG4gICAgICBjb25zdCBjaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgY2hlY2tlZC5jbGFzc05hbWUgPSAnZmFzIGZhLWNoZWNrJztcbiAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrZWQpO1xuICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGNoZWNrLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgY2hlY2suY2xhc3NOYW1lID0gJ2NoZWNrJztcbiAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrKTtcbiAgICB9XG4gICAgZWRpdC5jbGFzc05hbWUgPSAnZmFzIGZhLWVkaXQgZC1ub25lJztcbiAgICBlZGl0RGVzY3JpcHRpb24udHlwZSA9ICd0ZXh0JztcbiAgICBlZGl0RGVzY3JpcHRpb24uaWQgPSAnZWRpdC1EZXNjcmlwdGlvbic7XG4gICAgZWRpdERlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICdlZGl0LWRlc2NyaXB0aW9uIGQtbm9uZSc7XG4gICAgdGFzay5pZCA9IHRhc2tzTGlzdFtpbmRleF0uaW5kZXg7XG4gICAgcmVtb3ZlLmNsYXNzTmFtZSA9ICdmYXMgZmEtdHJhc2gnO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLWNvbnRhaW5lcicpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSArPSAnIGRlc2NyaXB0aW9uJztcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgKz0gYCAke3Rhc2tzTGlzdFtpbmRleF0uZGVzY3JpcHRpb259YDtcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdERlc2NyaXB0aW9uKTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHJlbW92ZSk7XG4gICAgdGFzay5hcHBlbmRDaGlsZChlZGl0KTtcbiAgICBsaXN0RGl2LmFwcGVuZENoaWxkKHRhc2spO1xuICB9XG59O1xuXG5leHBvcnQgeyBzaG93TGlzdCBhcyBkZWZhdWx0IH07XG4iLCJjb25zdCB1cGRhdGVTdGF0dXMgPSAobGlzdCwgaWQsIGNvbXBsZXRlZCkgPT4ge1xuICBsaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5pbmRleCA9PT0gaWQpIHRhc2suY29tcGxldGVkID0gY29tcGxldGVkO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IHVwZGF0ZVN0YXR1cyBhcyBkZWZhdWx0IH07XG4iLCJjb25zdCB1cGRhdGVTdG9yYWdlID0gKHN0b3JhZ2UpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JhZ2UnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XG59O1xuXG5leHBvcnQgeyB1cGRhdGVTdG9yYWdlIGFzIGRlZmF1bHQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQgJy4vc3R5bGUtc3JjLmNzcyc7XG5pbXBvcnQgc2hvd0xpc3QgZnJvbSAnLi9zaG93TGlzdC5qcyc7XG5pbXBvcnQgdXBkYXRlU3RhdHVzIGZyb20gJy4vdXBkYXRlU3RhdHVzLmpzJztcbmltcG9ydCB1cGRhdGVTdG9yYWdlIGZyb20gJy4vdXBkYXRlU3RvcmFnZS5qcyc7XG5pbXBvcnQgZ2V0U3RvcmFnZSBmcm9tICcuL2dldFN0b3JhZ2UuanMnO1xuaW1wb3J0IGFkZFRhc2sgZnJvbSAnLi9hZGRUYXNrLmpzJztcbmltcG9ydCByZW1vdmVUYXNrIGZyb20gJy4vcmVtb3ZlVGFzay5qcyc7XG5pbXBvcnQgcmVtb3ZlQ29tcGxldGVkVGFza3MgZnJvbSAnLi9yZW1vdmVDb21wbGV0ZWRUYXNrcy5qcyc7XG5pbXBvcnQgZWRpdFRhc2sgZnJvbSAnLi9lZGl0VGFzay5qcyc7XG5cbmxldCB0YXNrcyA9IGdldFN0b3JhZ2UoKTtcblxuc2hvd0xpc3QodGFza3MpO1xuXG4vLyB1cGRhdGUgdGhlIHRhc2sgc3RhdHVzLCBlZGl0ICYmIHJlbW92ZSBhIHRhc2sgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgbGlzdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XG5jb25zdCBjbGVhckFsbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhci1saXN0Jyk7XG5saXN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NoZWNrJykge1xuICAgICAgdXBkYXRlU3RhdHVzKHRhc2tzLCBwYXJzZUludChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkLCAxMCksIHRydWUpO1xuICAgICAgc2hvd0xpc3QodGFza3MpO1xuICAgICAgdXBkYXRlU3RvcmFnZSh0YXNrcyk7XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnZmFzIGZhLWNoZWNrJykge1xuICAgICAgdXBkYXRlU3RhdHVzKHRhc2tzLCBwYXJzZUludChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkLCAxMCksIGZhbHNlKTtcbiAgICAgIHNob3dMaXN0KHRhc2tzKTtcbiAgICAgIHVwZGF0ZVN0b3JhZ2UodGFza3MpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2ZhcyBmYS10cmFzaCcpIHtcbiAgICAgIHRhc2tzID0gcmVtb3ZlVGFzayh0YXNrcywgcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQsIDEwKSk7XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZXNjcmlwdGlvbicpKSB7XG4gICAgICBlZGl0VGFzayh0YXNrcywgZXZlbnQudGFyZ2V0KTtcbiAgICAgIC8vIHVwZGF0ZVN0b3JhZ2UodGFza3MpO1xuICAgICAgLy8gc2hvd0xpc3QodGFza3MpO1xuICAgIH1cbiAgfVxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn0pO1xuXG5jbGVhckFsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdGFza3MgPSByZW1vdmVDb21wbGV0ZWRUYXNrcyh0YXNrcyk7XG59KTtcblxuLy8gYWRkIGEgdGFzayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZCcpO1xuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYWRkVGFzayh0YXNrcyk7XG4gIHVwZGF0ZVN0b3JhZ2UodGFza3MpO1xuICBzaG93TGlzdCh0YXNrcyk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
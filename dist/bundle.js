/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./apply-icon.svg */ "./src/apply-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\nbody,\nhtml {\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n}\n\ndiv#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\tposition: relative;\n}\n\ndiv#content button#backToProjectsBtn {\n\tposition: absolute;\n\ttop: 5px;\n\tleft: 5px;\n\tpadding: 10px 4px;\n}\n\ndiv#content h1 {\n\tposition: relative;\n}\n\ndiv#content h1 img#editTitleBtn {\n\tposition: absolute;\n\ttop: 5px;\n\tright: -35px;\n\twidth: 25px;\n\tcursor: pointer;\n\tfilter: invert(57%) sepia(0%) saturate(285%) hue-rotate(174deg) brightness(89%) contrast(95%);\n}\n\ndiv#content form#editProjectTitleForm {\n\tposition: relative;\n}\n\ndiv#content form#editProjectTitleForm button#closeEditProjectTitleFormBtn {\n\tposition: absolute;\n\ttop: 32px;\n\tleft: -45px;\n}\n\ndiv#content form#editProjectTitleForm input {\n\tmargin: 21.44px 0px;\n\tfont-size: 2em;\n\tfont-weight: bold;\n\ttext-align: center;\n}\n\ndiv#content form#editProjectTitleForm button#applyBtn {\n\tposition: absolute;\n\ttop: 25px;\n\tright: -35px;\n\twidth: 30px;\n\theight: 30px;\n\tcursor: pointer;\n\tborder: none;\n\tbackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\t/* filter: invert(22%) sepia(92%) saturate(4908%) hue-rotate(144deg) brightness(91%) contrast(90%); */\n}\n\ndiv#todoList ul,\ndiv#projectList ul {\n\tpadding: 0;\n\tmargin: 0;\n\tlist-style-type: none;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\ndiv#todoList ul li,\ndiv#projectList ul li {\n\tdisplay: flex;\n\twidth: 400px;\n\tborder: 1px solid #d6d9dc;\n\tgap: 5px;\n}\n\ndiv#projectList ul li {\n\tjustify-content: center;\n\tcursor: pointer;\n}\n\ndiv#todoList ul li p {\n\tmargin: 0;\n\tmargin-right: auto;\n}\n\ndiv#projectList h3 {\n\tmargin: 0;\n}\n\ndiv#todoList ul li button.todo-del-btn {\n\tcolor: red;\n\tfont-weight: bold;\n}\n\nform#addTodoForm,\nform#addProjectForm {\n\tbackground-color: #f6f7f8;\n\tborder: 1px solid #d6d9dc;\n\tborder-radius: 3px;\n\n\tpadding: 50px 50px 30px 30px;\n\tmargin: 0 0 20px 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tposition: relative;\n}\n\nform#addTodoForm button#closeTodoFormBtn,\nform#addProjectForm button#closeProjectFormBtn {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 5px;\n}\n\n.form-row {\n\tmargin-bottom: 20px;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n}\n\n.form-row label {\n\ttext-align: right;\n\twidth: 100px;\n\tpadding-right: 20px;\n}\n\n.form-row input[type=\"text\"],\n.form-row input[type=\"number\"] {\n\tbackground-color: #ffffff;\n\tborder: 1px solid #d6d9dc;\n\tborder-radius: 3px;\n\tpadding: 7px;\n\tfont-size: 14px;\n}\n\n.form-row button {\n\tmargin-left: 100px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,SAAS;IACT,UAAU;IACV,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;CACtB,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,QAAQ;CACR,SAAS;CACT,iBAAiB;AAClB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,QAAQ;CACR,YAAY;CACZ,WAAW;CACX,eAAe;CACf,6FAA6F;AAC9F;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,SAAS;CACT,WAAW;AACZ;;AAEA;CACC,mBAAmB;CACnB,cAAc;CACd,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,SAAS;CACT,YAAY;CACZ,WAAW;CACX,YAAY;CACZ,eAAe;CACf,YAAY;CACZ,mDAAmC;CACnC,qGAAqG;AACtG;;AAEA;;CAEC,UAAU;CACV,SAAS;CACT,qBAAqB;CACrB,aAAa;CACb,sBAAsB;AACvB;;AAEA;;CAEC,aAAa;CACb,YAAY;CACZ,yBAAyB;CACzB,QAAQ;AACT;;AAEA;CACC,uBAAuB;CACvB,eAAe;AAChB;;AAEA;CACC,SAAS;CACT,kBAAkB;AACnB;;AAEA;CACC,SAAS;AACV;;AAEA;CACC,UAAU;CACV,iBAAiB;AAClB;;AAEA;;CAEC,yBAAyB;CACzB,yBAAyB;CACzB,kBAAkB;;CAElB,4BAA4B;CAC5B,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;AACnB;;AAEA;;CAEC,kBAAkB;CAClB,QAAQ;CACR,UAAU;AACX;;AAEA;CACC,mBAAmB;CACnB,aAAa;CACb,2BAA2B;CAC3B,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;CACjB,YAAY;CACZ,mBAAmB;AACpB;;AAEA;;CAEC,yBAAyB;CACzB,yBAAyB;CACzB,kBAAkB;CAClB,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,kBAAkB;AACnB","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\nbody,\nhtml {\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n}\n\ndiv#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\tposition: relative;\n}\n\ndiv#content button#backToProjectsBtn {\n\tposition: absolute;\n\ttop: 5px;\n\tleft: 5px;\n\tpadding: 10px 4px;\n}\n\ndiv#content h1 {\n\tposition: relative;\n}\n\ndiv#content h1 img#editTitleBtn {\n\tposition: absolute;\n\ttop: 5px;\n\tright: -35px;\n\twidth: 25px;\n\tcursor: pointer;\n\tfilter: invert(57%) sepia(0%) saturate(285%) hue-rotate(174deg) brightness(89%) contrast(95%);\n}\n\ndiv#content form#editProjectTitleForm {\n\tposition: relative;\n}\n\ndiv#content form#editProjectTitleForm button#closeEditProjectTitleFormBtn {\n\tposition: absolute;\n\ttop: 32px;\n\tleft: -45px;\n}\n\ndiv#content form#editProjectTitleForm input {\n\tmargin: 21.44px 0px;\n\tfont-size: 2em;\n\tfont-weight: bold;\n\ttext-align: center;\n}\n\ndiv#content form#editProjectTitleForm button#applyBtn {\n\tposition: absolute;\n\ttop: 25px;\n\tright: -35px;\n\twidth: 30px;\n\theight: 30px;\n\tcursor: pointer;\n\tborder: none;\n\tbackground: url(\"./apply-icon.svg\");\n\t/* filter: invert(22%) sepia(92%) saturate(4908%) hue-rotate(144deg) brightness(91%) contrast(90%); */\n}\n\ndiv#todoList ul,\ndiv#projectList ul {\n\tpadding: 0;\n\tmargin: 0;\n\tlist-style-type: none;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\ndiv#todoList ul li,\ndiv#projectList ul li {\n\tdisplay: flex;\n\twidth: 400px;\n\tborder: 1px solid #d6d9dc;\n\tgap: 5px;\n}\n\ndiv#projectList ul li {\n\tjustify-content: center;\n\tcursor: pointer;\n}\n\ndiv#todoList ul li p {\n\tmargin: 0;\n\tmargin-right: auto;\n}\n\ndiv#projectList h3 {\n\tmargin: 0;\n}\n\ndiv#todoList ul li button.todo-del-btn {\n\tcolor: red;\n\tfont-weight: bold;\n}\n\nform#addTodoForm,\nform#addProjectForm {\n\tbackground-color: #f6f7f8;\n\tborder: 1px solid #d6d9dc;\n\tborder-radius: 3px;\n\n\tpadding: 50px 50px 30px 30px;\n\tmargin: 0 0 20px 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tposition: relative;\n}\n\nform#addTodoForm button#closeTodoFormBtn,\nform#addProjectForm button#closeProjectFormBtn {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 5px;\n}\n\n.form-row {\n\tmargin-bottom: 20px;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n}\n\n.form-row label {\n\ttext-align: right;\n\twidth: 100px;\n\tpadding-right: 20px;\n}\n\n.form-row input[type=\"text\"],\n.form-row input[type=\"number\"] {\n\tbackground-color: #ffffff;\n\tborder: 1px solid #d6d9dc;\n\tborder-radius: 3px;\n\tpadding: 7px;\n\tfont-size: 14px;\n}\n\n.form-row button {\n\tmargin-left: 100px;\n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
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
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/create-project.js":
/*!*******************************!*\
  !*** ./src/create-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CreateProject = (title, listOfTodos = []) => {
	if (!Array.isArray(listOfTodos)) {
		throw "Project must be created with a passed-in array";
	}

	const _isValidTitle = (title) => {
		if (typeof title !== "string" || title.length <= 0) return false;
		return true;
	};

	if (!_isValidTitle(title)) {
		throw "Please enter a valid string input for the project title";
	}

	var _title = title;
	var _listOfTodos = listOfTodos;

	const addTodo = (todo) => {
		_listOfTodos.push(todo);
	};

	const removeTodo = (index) => {
		_listOfTodos.splice(index, 1);
	}

	return {
		get title() {
			return _title;
		},
		get length() {
			return _listOfTodos.length;
		},
		get listOfTodos() {
			return _listOfTodos;
		},
		set listOfTodos(todoList) {
			if (!Array.isArray(todoList)) {
				throw "Setting type must be an array";
			}

			_listOfTodos = todoList;
		},
		set title(newTitle) {
			_title = newTitle;
		},
		addTodo,
		removeTodo,
	};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateProject);


/***/ }),

/***/ "./src/create-todo.js":
/*!****************************!*\
  !*** ./src/create-todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CreateTodo = (title, description = "No description") => {
    const _isValidTitle = (title) => {
        if (typeof title !== "string" || title.length <= 0) return false;
        return true;
    }

    const _isValidDescription = (description) => {
        if (typeof description !== "string") return false;
        return true;
    }

    if (!_isValidTitle(title)) {
        throw "Please enter a valid string input for the todo title!";
    }
    if (!_isValidDescription(description)) {
        throw "Please enter a valid string input for the todo description!";
    }
    
    var _title = title;
    var _description = description;

    return {
        get title() {
            return _title;
        },
        get description() {
            return _description;
        }
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateTodo);

/***/ }),

/***/ "./src/render-projects.js":
/*!********************************!*\
  !*** ./src/render-projects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-todos.js */ "./src/render-todos.js");


const projectsDOMHandler = (() => {
	var _h1PageTitle;
	var _divProjectList;
	var _btnAddProject;
	var _form;
	var _projects;

	const reloadProjectListDisplay = () => {
		_divProjectList.innerHTML = "<ul></ul>"; // Clear the todo list element of its children

		// Then re-populate the todo list with todo card elements
		_projects.forEach((project, index) => {
			// The first child of the todo list div element is the unordered list
			_divProjectList.firstChild.appendChild(
				createProjectCardDOMElement(project, index)
			);
		});
	};

	const renderProjectsPage = (projects) => {
		_projects = projects;
		const divContent = document.querySelector("div#content");
		divContent.innerHTML = "";
		_h1PageTitle = (0,_render_todos_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("h1", "", "Your Projects");
		_divProjectList = (0,_render_todos_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("div", "projectList");
		_btnAddProject = (0,_render_todos_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)(
			"button",
			"addProjectBtn",
			"Add Project"
		);
		_form = document.createElement("form");
		_form.setAttribute("action", "");
		_form.setAttribute("method", "get");
		_form.setAttribute("style", "display: none");
		_form.id = "addProjectForm";
		_form.append(
			(0,_render_todos_js__WEBPACK_IMPORTED_MODULE_0__.createFormCloseButton)("closeProjectFormBtn"),
			(0,_render_todos_js__WEBPACK_IMPORTED_MODULE_0__.createFormProperty)(
				"Title",
				"text",
				"titleName",
				"title_name",
				"Project Title"
			),
			(0,_render_todos_js__WEBPACK_IMPORTED_MODULE_0__.createFormSubmitButton)("projectFormSubmitBtn")
		);
		divContent.append(_h1PageTitle, _divProjectList, _btnAddProject, _form);
		reloadProjectListDisplay();
	};

	return {
		renderProjectsPage,
		reloadProjectListDisplay,
		get form() {
			return _form;
		},
		get btnAddProject() {
			return _btnAddProject;
		},
	};
})();

function createProjectCardDOMElement(project, index) {
	const _liProjectCard = (0,_render_todos_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("li", "openProject");
	const _h3TodoTitle = (0,_render_todos_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)(
		"h3",
		"openProject",
		project.title
	);
	_liProjectCard.setAttribute("data-index", index);
	_h3TodoTitle.setAttribute("data-index", index);
	_liProjectCard.append(_h3TodoTitle);
	return _liProjectCard;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectsDOMHandler);


/***/ }),

/***/ "./src/render-todos.js":
/*!*****************************!*\
  !*** ./src/render-todos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElementWithId": () => (/* binding */ createElementWithId),
/* harmony export */   "createFormCloseButton": () => (/* binding */ createFormCloseButton),
/* harmony export */   "createFormProperty": () => (/* binding */ createFormProperty),
/* harmony export */   "createFormSubmitButton": () => (/* binding */ createFormSubmitButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "disableForm": () => (/* binding */ disableForm),
/* harmony export */   "enableForm": () => (/* binding */ enableForm)
/* harmony export */ });
/* harmony import */ var _edit_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-icon.svg */ "./src/edit-icon.svg");


const todoListDOMHandler = (() => {
	const _divContent = document.querySelector("div#content");

	if (!_divContent) {
		_divContent = createElementWithId("div", "content");
		document.body.appendChild(_divContent);
	}
	var _btnBackToProjects;
	var _h1ProjectTitle;
	var _editProjectTitleForm;
	var _imgEditTitleBtn;
	var _divTodoList;
	var _btnAddTodo;
	var _addTodoForm;
	var _currProject;

	const reloadTodoListDisplay = () => {
		if (!_currProject)
			throw "A project has not been loaded on the page yet";
		_divTodoList.innerHTML = "<ul></ul>"; // Clear the todo list element of its children

		// Then re-populate the todo list with todo card elements
		_currProject.listOfTodos.forEach((todo, index) => {
			// The first child of the todo list div element is the unordered list
			_divTodoList.firstChild.appendChild(
				createTodoCardDOMElement(todo, index)
			);
		});
	};

	const enableProjectTitleForm = () => {
		_editProjectTitleForm.style.display = "flex";
		_h1ProjectTitle.style.display = "none";
	};

	const disableProjectTitleForm = () => {
		_editProjectTitleForm.reset();
		_editProjectTitleForm.style.display = "none";
		_h1ProjectTitle.style.display = "block";
	};

	const renderTodoListPage = (project) => {
		_divContent.innerHTML = "";
		_currProject = project;
		_btnBackToProjects = createElementWithId(
			"button",
			"backToProjectsBtn",
			"<- To Projects"
		);
		// Create h1 element that displays project title
		_h1ProjectTitle = createElementWithId(
			"h1",
			"",
			`Project: ${project.title}`
		);
		_editProjectTitleForm = document.createElement("form");
		_editProjectTitleForm.setAttribute("action", "");
		_editProjectTitleForm.setAttribute("method", "get");
		_editProjectTitleForm.setAttribute("style", "display: none");
		_editProjectTitleForm.id = "editProjectTitleForm";
		const _inputTitle = document.createElement("input");
		_inputTitle.setAttribute("type", "text");
		_inputTitle.setAttribute("name", "project_title");
		_inputTitle.setAttribute("placeholder", "New Project Title");
		_inputTitle.setAttribute("value", _currProject.title);
		const _btnApply = createElementWithId("button", "applyBtn");
		_btnApply.setAttribute("type", "submit");
		_editProjectTitleForm.append(
			createFormCloseButton("closeEditProjectTitleFormBtn"),
			_inputTitle,
			_btnApply
		);
		_imgEditTitleBtn = createElementWithId("img", "editTitleBtn");
		_imgEditTitleBtn.setAttribute("src", _edit_icon_svg__WEBPACK_IMPORTED_MODULE_0__);
		_h1ProjectTitle.appendChild(_imgEditTitleBtn);
		// Create div element that holds todo list
		_divTodoList = createElementWithId("div", "todoList");
		// Append button that reveals a form to create todo item
		_btnAddTodo = createElementWithId("button", "addTodoBtn", "Add Todo");
		_addTodoForm = document.createElement("form");
		_addTodoForm.setAttribute("action", "");
		_addTodoForm.setAttribute("method", "get");
		_addTodoForm.setAttribute("style", "display: none");
		_addTodoForm.id = "addTodoForm";
		_addTodoForm.append(
			createFormCloseButton("closeTodoFormBtn"),
			createFormProperty(
				"Title",
				"text",
				"titleName",
				"title_name",
				"Todo Title"
			),
			createFormProperty(
				"Description",
				"text",
				"description",
				"desc_text",
				"Todo Description"
			),
			createFormSubmitButton("todoFormSubmitBtn")
		);
		_divContent.append(
			_btnBackToProjects,
			_h1ProjectTitle,
			_editProjectTitleForm,
			_divTodoList,
			_btnAddTodo,
			_addTodoForm
		);
		reloadTodoListDisplay();
	};

	return {
		renderTodoListPage,
		reloadTodoListDisplay,
		enableProjectTitleForm,
		disableProjectTitleForm,
		get editProjectTitleForm() {
			return _editProjectTitleForm;
		},
		get addTodoForm() {
			return _addTodoForm;
		},
		get btnAddTodo() {
			return _btnAddTodo;
		},
		get currProject() {
			return _currProject;
		},
	};
})();

function enableForm(form, addBtn) {
	addBtn.style.display = "none";
	form.style.display = "block";
}

function disableForm(form, addBtn) {
	form.reset();
	addBtn.style.display = "block";
	form.style.display = "none";
}

function createFormProperty(title, type, id, name, placeholder = "") {
	if (
		typeof title !== "string" ||
		typeof type !== "string" ||
		typeof id !== "string" ||
		typeof name !== "string" ||
		typeof placeholder !== "string"
	) {
		throw "createFormProperty must be called with strings";
	}
	const _divFormRow = document.createElement("div");
	_divFormRow.setAttribute("class", "form-row");
	const _label = document.createElement("label");
	_label.setAttribute("for", `${id}`);
	_label.textContent = title;
	const _input = document.createElement("input");
	_input.setAttribute("type", type);
	_input.setAttribute("id", id);
	_input.setAttribute("name", name);
	_input.setAttribute("placeholder", placeholder);
	_divFormRow.append(_label, _input);
	return _divFormRow;
}

function createFormSubmitButton(id) {
	if (typeof id !== "string") {
		throw "createFormSubmitButton must be called with strings";
	}
	const _divFormRow = document.createElement("div");
	_divFormRow.setAttribute("class", "form-row");
	const _formSubmitBtn = document.createElement("button");
	_formSubmitBtn.setAttribute("type", "submit");
	_formSubmitBtn.id = id;
	_formSubmitBtn.textContent = "Submit";
	_divFormRow.appendChild(_formSubmitBtn);
	return _divFormRow;
}

function createFormCloseButton(id) {
	if (typeof id !== "string") {
		throw "createFormCloseButton must be called with strings";
	}

	const _formCloseBtn = document.createElement("button");
	_formCloseBtn.setAttribute("type", "button");
	_formCloseBtn.id = id;
	_formCloseBtn.textContent = "nvm";
	return _formCloseBtn;
}

function createElementWithId(tag, id = "", textContent = "") {
	if (
		typeof tag !== "string" ||
		typeof id !== "string" ||
		typeof textContent !== "string"
	) {
		throw "createElementWithId must be called with strings";
	}
	const _return = document.createElement(tag);
	_return.id = id;
	_return.textContent = textContent;

	return _return;
}

function createTodoCardDOMElement(todo, index) {
	const _liTodoCard = createElementWithId("li", `todo-${index}`);
	const _inputCheckbox = createElementWithId("input", `check-${index}`);
	_inputCheckbox.setAttribute("type", "checkbox");
	const _pTodoTitle = createElementWithId("p", "", todo.title);
	const _btnDeleteTodo = document.createElement("button");
	_btnDeleteTodo.classList.add("todo-del-btn");
	_btnDeleteTodo.id = "deleteTodoBtn";
	_btnDeleteTodo.setAttribute("data-index", index);
	_btnDeleteTodo.textContent = "X";
	_liTodoCard.append(_inputCheckbox, _pTodoTitle, _btnDeleteTodo);
	return _liTodoCard;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoListDOMHandler);


/***/ }),

/***/ "./src/apply-icon.svg":
/*!****************************!*\
  !*** ./src/apply-icon.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b43b23470ddfb344d424.svg";

/***/ }),

/***/ "./src/edit-icon.svg":
/*!***************************!*\
  !*** ./src/edit-icon.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d317290131028fe10cf.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _create_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-todo.js */ "./src/create-todo.js");
/* harmony import */ var _create_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-project.js */ "./src/create-project.js");
/* harmony import */ var _render_todos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render-todos.js */ "./src/render-todos.js");
/* harmony import */ var _render_projects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render-projects.js */ "./src/render-projects.js");






const mainAppLogic = (() => {
	const _projects = [];
	const _firstProject = (0,_create_project_js__WEBPACK_IMPORTED_MODULE_2__["default"])("My First Todo List", []);
	_projects.push(_firstProject);
	_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderTodoListPage(_firstProject);
	const _divContent = document.querySelector("div#content");
	const _preventDefaultSubmission = (e) => {
		e.preventDefault();
	};
	_divContent.addEventListener("click", (e) => {
		var formData;
		switch (e.target.id) {
			case "editTitleBtn":
				_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].enableProjectTitleForm();
				break;
			case "applyBtn":
				_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].editProjectTitleForm.addEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				formData = new FormData(
					_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].editProjectTitleForm
				);
				_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].editProjectTitleForm.removeEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].currProject.title = formData.get("project_title");
				_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderTodoListPage(_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].currProject);
				break;
			case "closeEditProjectTitleFormBtn":
				_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].disableProjectTitleForm();
				break;
			case "addTodoBtn":
				(0,_render_todos_js__WEBPACK_IMPORTED_MODULE_3__.enableForm)(
					_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].addTodoForm,
					_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].btnAddTodo
				);
				break;
			case "closeTodoFormBtn":
				(0,_render_todos_js__WEBPACK_IMPORTED_MODULE_3__.disableForm)(
					_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].addTodoForm,
					_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].btnAddTodo
				);
				break;
			case "addProjectBtn":
				(0,_render_todos_js__WEBPACK_IMPORTED_MODULE_3__.enableForm)(
					_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].form,
					_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].btnAddProject
				);
				break;
			case "closeProjectFormBtn":
				(0,_render_todos_js__WEBPACK_IMPORTED_MODULE_3__.disableForm)(
					_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].form,
					_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].btnAddProject
				);
				break;
			case "backToProjectsBtn":
				_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].renderProjectsPage(_projects);
				break;
			case "todoFormSubmitBtn":
				_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].addTodoForm.addEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				formData = new FormData(_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].addTodoForm);
				_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].addTodoForm.removeEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				addTodoToProject(formData);
				_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].reloadTodoListDisplay();
				(0,_render_todos_js__WEBPACK_IMPORTED_MODULE_3__.disableForm)(
					_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].addTodoForm,
					_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].btnAddTodo
				);
				break;
			case "projectFormSubmitBtn":
				_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].form.addEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				formData = new FormData(_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].form);
				_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].form.removeEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				const _newProject = (0,_create_project_js__WEBPACK_IMPORTED_MODULE_2__["default"])(formData.get("title_name"));
				_projects.push(_newProject);
				_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].reloadProjectListDisplay();
				(0,_render_todos_js__WEBPACK_IMPORTED_MODULE_3__.disableForm)(
					_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].form,
					_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].btnAddProject
				);
				break;
			case "deleteTodoBtn":
				_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].currProject.removeTodo(
					Number(e.target.dataset.index)
				);
				_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].reloadTodoListDisplay();
				break;
			case "openProject":
				_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderTodoListPage(
					_projects[e.target.dataset.index]
				);
				break;
			default:
				break;
		}
	});
})();

function addTodoToProject(formData) {
	const _newTodo = (0,_create_todo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
		formData.get("title_name"),
		formData.get("desc_text")
	);
	_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].currProject.addTodo(_newTodo);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUsseUVBQWdDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQVc7QUFDZixLQUFLLGdFQUF1QjtBQUM1QixLQUFLLHlFQUFnQztBQUNyQztBQUNBO0FBQ0E7QUFDQSxJQUFJLDhFQUFxQztBQUN6QztBQUNBO0FBQ0EsSUFBSSxxRkFBK0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9FQUE4QjtBQUMxRCxJQUFJLHdGQUFrRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOEVBQXdDO0FBQzVDLElBQUksNkRBQVc7QUFDZixLQUFLLG9FQUE4QjtBQUNuQyxLQUFLLG1FQUE2QjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxJQUFJLGlGQUF3QztBQUM1QztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0VBQXVCO0FBQ25ELElBQUksb0ZBQTJDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4REFBYTtBQUNyQztBQUNBLElBQUksb0ZBQTJDO0FBQy9DLElBQUksNkRBQVc7QUFDZixLQUFLLGdFQUF1QjtBQUM1QixLQUFLLHlFQUFnQztBQUNyQztBQUNBO0FBQ0E7QUFDQSxJQUFJLCtFQUF5QztBQUM3QztBQUNBO0FBQ0EsSUFBSSw4RUFBd0M7QUFDNUM7QUFDQTtBQUNBLElBQUksMkVBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0Esa0JBQWtCLDJEQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLENBQUMsNEVBQXNDO0FBQ3ZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGUtdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyLXByb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXItdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXBwbHktaWNvbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmRpdiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmRpdiNjb250ZW50IGJ1dHRvbiNiYWNrVG9Qcm9qZWN0c0J0biB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdGxlZnQ6IDVweDtcXG5cXHRwYWRkaW5nOiAxMHB4IDRweDtcXG59XFxuXFxuZGl2I2NvbnRlbnQgaDEge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuZGl2I2NvbnRlbnQgaDEgaW1nI2VkaXRUaXRsZUJ0biB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdHJpZ2h0OiAtMzVweDtcXG5cXHR3aWR0aDogMjVweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0ZmlsdGVyOiBpbnZlcnQoNTclKSBzZXBpYSgwJSkgc2F0dXJhdGUoMjg1JSkgaHVlLXJvdGF0ZSgxNzRkZWcpIGJyaWdodG5lc3MoODklKSBjb250cmFzdCg5NSUpO1xcbn1cXG5cXG5kaXYjY29udGVudCBmb3JtI2VkaXRQcm9qZWN0VGl0bGVGb3JtIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmRpdiNjb250ZW50IGZvcm0jZWRpdFByb2plY3RUaXRsZUZvcm0gYnV0dG9uI2Nsb3NlRWRpdFByb2plY3RUaXRsZUZvcm1CdG4ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDMycHg7XFxuXFx0bGVmdDogLTQ1cHg7XFxufVxcblxcbmRpdiNjb250ZW50IGZvcm0jZWRpdFByb2plY3RUaXRsZUZvcm0gaW5wdXQge1xcblxcdG1hcmdpbjogMjEuNDRweCAwcHg7XFxuXFx0Zm9udC1zaXplOiAyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5kaXYjY29udGVudCBmb3JtI2VkaXRQcm9qZWN0VGl0bGVGb3JtIGJ1dHRvbiNhcHBseUJ0biB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMjVweDtcXG5cXHRyaWdodDogLTM1cHg7XFxuXFx0d2lkdGg6IDMwcHg7XFxuXFx0aGVpZ2h0OiAzMHB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG5cXHQvKiBmaWx0ZXI6IGludmVydCgyMiUpIHNlcGlhKDkyJSkgc2F0dXJhdGUoNDkwOCUpIGh1ZS1yb3RhdGUoMTQ0ZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoOTAlKTsgKi9cXG59XFxuXFxuZGl2I3RvZG9MaXN0IHVsLFxcbmRpdiNwcm9qZWN0TGlzdCB1bCB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZGl2I3RvZG9MaXN0IHVsIGxpLFxcbmRpdiNwcm9qZWN0TGlzdCB1bCBsaSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogNDAwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2Q2ZDlkYztcXG5cXHRnYXA6IDVweDtcXG59XFxuXFxuZGl2I3Byb2plY3RMaXN0IHVsIGxpIHtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdiN0b2RvTGlzdCB1bCBsaSBwIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG5kaXYjcHJvamVjdExpc3QgaDMge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuZGl2I3RvZG9MaXN0IHVsIGxpIGJ1dHRvbi50b2RvLWRlbC1idG4ge1xcblxcdGNvbG9yOiByZWQ7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmZvcm0jYWRkVG9kb0Zvcm0sXFxuZm9ybSNhZGRQcm9qZWN0Rm9ybSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdmODtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZDZkOWRjO1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXG5cXHRwYWRkaW5nOiA1MHB4IDUwcHggMzBweCAzMHB4O1xcblxcdG1hcmdpbjogMCAwIDIwcHggMDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5mb3JtI2FkZFRvZG9Gb3JtIGJ1dHRvbiNjbG9zZVRvZG9Gb3JtQnRuLFxcbmZvcm0jYWRkUHJvamVjdEZvcm0gYnV0dG9uI2Nsb3NlUHJvamVjdEZvcm1CdG4ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVweDtcXG5cXHRyaWdodDogNXB4O1xcbn1cXG5cXG4uZm9ybS1yb3cge1xcblxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tcm93IGxhYmVsIHtcXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXG5cXHR3aWR0aDogMTAwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuLmZvcm0tcm93IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG4uZm9ybS1yb3cgaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl0ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2Q2ZDlkYztcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxuXFx0cGFkZGluZzogN3B4O1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmZvcm0tcm93IGJ1dHRvbiB7XFxuXFx0bWFyZ2luLWxlZnQ6IDEwMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtDQUN0QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7Q0FDVCxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFlBQVk7Q0FDWixXQUFXO0NBQ1gsZUFBZTtDQUNmLDZGQUE2RjtBQUM5Rjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsV0FBVztBQUNaOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxZQUFZO0NBQ1osV0FBVztDQUNYLFlBQVk7Q0FDWixlQUFlO0NBQ2YsWUFBWTtDQUNaLG1EQUFtQztDQUNuQyxxR0FBcUc7QUFDdEc7O0FBRUE7O0NBRUMsVUFBVTtDQUNWLFNBQVM7Q0FDVCxxQkFBcUI7Q0FDckIsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTs7Q0FFQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsaUJBQWlCO0FBQ2xCOztBQUVBOztDQUVDLHlCQUF5QjtDQUN6Qix5QkFBeUI7Q0FDekIsa0JBQWtCOztDQUVsQiw0QkFBNEI7Q0FDNUIsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtBQUNuQjs7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFVBQVU7QUFDWDs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsMkJBQTJCO0NBQzNCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osbUJBQW1CO0FBQ3BCOztBQUVBOztDQUVDLHlCQUF5QjtDQUN6Qix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuZGl2I2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuZGl2I2NvbnRlbnQgYnV0dG9uI2JhY2tUb1Byb2plY3RzQnRuIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cHg7XFxuXFx0bGVmdDogNXB4O1xcblxcdHBhZGRpbmc6IDEwcHggNHB4O1xcbn1cXG5cXG5kaXYjY29udGVudCBoMSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5kaXYjY29udGVudCBoMSBpbWcjZWRpdFRpdGxlQnRuIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cHg7XFxuXFx0cmlnaHQ6IC0zNXB4O1xcblxcdHdpZHRoOiAyNXB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmaWx0ZXI6IGludmVydCg1NyUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgyODUlKSBodWUtcm90YXRlKDE3NGRlZykgYnJpZ2h0bmVzcyg4OSUpIGNvbnRyYXN0KDk1JSk7XFxufVxcblxcbmRpdiNjb250ZW50IGZvcm0jZWRpdFByb2plY3RUaXRsZUZvcm0ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuZGl2I2NvbnRlbnQgZm9ybSNlZGl0UHJvamVjdFRpdGxlRm9ybSBidXR0b24jY2xvc2VFZGl0UHJvamVjdFRpdGxlRm9ybUJ0biB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMzJweDtcXG5cXHRsZWZ0OiAtNDVweDtcXG59XFxuXFxuZGl2I2NvbnRlbnQgZm9ybSNlZGl0UHJvamVjdFRpdGxlRm9ybSBpbnB1dCB7XFxuXFx0bWFyZ2luOiAyMS40NHB4IDBweDtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdiNjb250ZW50IGZvcm0jZWRpdFByb2plY3RUaXRsZUZvcm0gYnV0dG9uI2FwcGx5QnRuIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAyNXB4O1xcblxcdHJpZ2h0OiAtMzVweDtcXG5cXHR3aWR0aDogMzBweDtcXG5cXHRoZWlnaHQ6IDMwcHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXBwbHktaWNvbi5zdmdcXFwiKTtcXG5cXHQvKiBmaWx0ZXI6IGludmVydCgyMiUpIHNlcGlhKDkyJSkgc2F0dXJhdGUoNDkwOCUpIGh1ZS1yb3RhdGUoMTQ0ZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoOTAlKTsgKi9cXG59XFxuXFxuZGl2I3RvZG9MaXN0IHVsLFxcbmRpdiNwcm9qZWN0TGlzdCB1bCB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZGl2I3RvZG9MaXN0IHVsIGxpLFxcbmRpdiNwcm9qZWN0TGlzdCB1bCBsaSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogNDAwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2Q2ZDlkYztcXG5cXHRnYXA6IDVweDtcXG59XFxuXFxuZGl2I3Byb2plY3RMaXN0IHVsIGxpIHtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdiN0b2RvTGlzdCB1bCBsaSBwIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG5kaXYjcHJvamVjdExpc3QgaDMge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuZGl2I3RvZG9MaXN0IHVsIGxpIGJ1dHRvbi50b2RvLWRlbC1idG4ge1xcblxcdGNvbG9yOiByZWQ7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmZvcm0jYWRkVG9kb0Zvcm0sXFxuZm9ybSNhZGRQcm9qZWN0Rm9ybSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdmODtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZDZkOWRjO1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXG5cXHRwYWRkaW5nOiA1MHB4IDUwcHggMzBweCAzMHB4O1xcblxcdG1hcmdpbjogMCAwIDIwcHggMDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5mb3JtI2FkZFRvZG9Gb3JtIGJ1dHRvbiNjbG9zZVRvZG9Gb3JtQnRuLFxcbmZvcm0jYWRkUHJvamVjdEZvcm0gYnV0dG9uI2Nsb3NlUHJvamVjdEZvcm1CdG4ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVweDtcXG5cXHRyaWdodDogNXB4O1xcbn1cXG5cXG4uZm9ybS1yb3cge1xcblxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tcm93IGxhYmVsIHtcXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXG5cXHR3aWR0aDogMTAwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuLmZvcm0tcm93IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG4uZm9ybS1yb3cgaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl0ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2Q2ZDlkYztcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxuXFx0cGFkZGluZzogN3B4O1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmZvcm0tcm93IGJ1dHRvbiB7XFxuXFx0bWFyZ2luLWxlZnQ6IDEwMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgQ3JlYXRlUHJvamVjdCA9ICh0aXRsZSwgbGlzdE9mVG9kb3MgPSBbXSkgPT4ge1xuXHRpZiAoIUFycmF5LmlzQXJyYXkobGlzdE9mVG9kb3MpKSB7XG5cdFx0dGhyb3cgXCJQcm9qZWN0IG11c3QgYmUgY3JlYXRlZCB3aXRoIGEgcGFzc2VkLWluIGFycmF5XCI7XG5cdH1cblxuXHRjb25zdCBfaXNWYWxpZFRpdGxlID0gKHRpdGxlKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiB0aXRsZSAhPT0gXCJzdHJpbmdcIiB8fCB0aXRsZS5sZW5ndGggPD0gMCkgcmV0dXJuIGZhbHNlO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdGlmICghX2lzVmFsaWRUaXRsZSh0aXRsZSkpIHtcblx0XHR0aHJvdyBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIHN0cmluZyBpbnB1dCBmb3IgdGhlIHByb2plY3QgdGl0bGVcIjtcblx0fVxuXG5cdHZhciBfdGl0bGUgPSB0aXRsZTtcblx0dmFyIF9saXN0T2ZUb2RvcyA9IGxpc3RPZlRvZG9zO1xuXG5cdGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuXHRcdF9saXN0T2ZUb2Rvcy5wdXNoKHRvZG8pO1xuXHR9O1xuXG5cdGNvbnN0IHJlbW92ZVRvZG8gPSAoaW5kZXgpID0+IHtcblx0XHRfbGlzdE9mVG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0Z2V0IHRpdGxlKCkge1xuXHRcdFx0cmV0dXJuIF90aXRsZTtcblx0XHR9LFxuXHRcdGdldCBsZW5ndGgoKSB7XG5cdFx0XHRyZXR1cm4gX2xpc3RPZlRvZG9zLmxlbmd0aDtcblx0XHR9LFxuXHRcdGdldCBsaXN0T2ZUb2RvcygpIHtcblx0XHRcdHJldHVybiBfbGlzdE9mVG9kb3M7XG5cdFx0fSxcblx0XHRzZXQgbGlzdE9mVG9kb3ModG9kb0xpc3QpIHtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheSh0b2RvTGlzdCkpIHtcblx0XHRcdFx0dGhyb3cgXCJTZXR0aW5nIHR5cGUgbXVzdCBiZSBhbiBhcnJheVwiO1xuXHRcdFx0fVxuXG5cdFx0XHRfbGlzdE9mVG9kb3MgPSB0b2RvTGlzdDtcblx0XHR9LFxuXHRcdHNldCB0aXRsZShuZXdUaXRsZSkge1xuXHRcdFx0X3RpdGxlID0gbmV3VGl0bGU7XG5cdFx0fSxcblx0XHRhZGRUb2RvLFxuXHRcdHJlbW92ZVRvZG8sXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVQcm9qZWN0O1xuIiwiY29uc3QgQ3JlYXRlVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24gPSBcIk5vIGRlc2NyaXB0aW9uXCIpID0+IHtcbiAgICBjb25zdCBfaXNWYWxpZFRpdGxlID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGl0bGUgIT09IFwic3RyaW5nXCIgfHwgdGl0bGUubGVuZ3RoIDw9IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgX2lzVmFsaWREZXNjcmlwdGlvbiA9IChkZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGRlc2NyaXB0aW9uICE9PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghX2lzVmFsaWRUaXRsZSh0aXRsZSkpIHtcbiAgICAgICAgdGhyb3cgXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBzdHJpbmcgaW5wdXQgZm9yIHRoZSB0b2RvIHRpdGxlIVwiO1xuICAgIH1cbiAgICBpZiAoIV9pc1ZhbGlkRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pKSB7XG4gICAgICAgIHRocm93IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgc3RyaW5nIGlucHV0IGZvciB0aGUgdG9kbyBkZXNjcmlwdGlvbiFcIjtcbiAgICB9XG4gICAgXG4gICAgdmFyIF90aXRsZSA9IHRpdGxlO1xuICAgIHZhciBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGl0bGU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfZGVzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlVG9kbzsiLCJpbXBvcnQge1xuXHRjcmVhdGVFbGVtZW50V2l0aElkLFxuXHRjcmVhdGVGb3JtQ2xvc2VCdXR0b24sXG5cdGNyZWF0ZUZvcm1Qcm9wZXJ0eSxcblx0Y3JlYXRlRm9ybVN1Ym1pdEJ1dHRvbixcbn0gZnJvbSBcIi4vcmVuZGVyLXRvZG9zLmpzXCI7XG5cbmNvbnN0IHByb2plY3RzRE9NSGFuZGxlciA9ICgoKSA9PiB7XG5cdHZhciBfaDFQYWdlVGl0bGU7XG5cdHZhciBfZGl2UHJvamVjdExpc3Q7XG5cdHZhciBfYnRuQWRkUHJvamVjdDtcblx0dmFyIF9mb3JtO1xuXHR2YXIgX3Byb2plY3RzO1xuXG5cdGNvbnN0IHJlbG9hZFByb2plY3RMaXN0RGlzcGxheSA9ICgpID0+IHtcblx0XHRfZGl2UHJvamVjdExpc3QuaW5uZXJIVE1MID0gXCI8dWw+PC91bD5cIjsgLy8gQ2xlYXIgdGhlIHRvZG8gbGlzdCBlbGVtZW50IG9mIGl0cyBjaGlsZHJlblxuXG5cdFx0Ly8gVGhlbiByZS1wb3B1bGF0ZSB0aGUgdG9kbyBsaXN0IHdpdGggdG9kbyBjYXJkIGVsZW1lbnRzXG5cdFx0X3Byb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG5cdFx0XHQvLyBUaGUgZmlyc3QgY2hpbGQgb2YgdGhlIHRvZG8gbGlzdCBkaXYgZWxlbWVudCBpcyB0aGUgdW5vcmRlcmVkIGxpc3Rcblx0XHRcdF9kaXZQcm9qZWN0TGlzdC5maXJzdENoaWxkLmFwcGVuZENoaWxkKFxuXHRcdFx0XHRjcmVhdGVQcm9qZWN0Q2FyZERPTUVsZW1lbnQocHJvamVjdCwgaW5kZXgpXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlbmRlclByb2plY3RzUGFnZSA9IChwcm9qZWN0cykgPT4ge1xuXHRcdF9wcm9qZWN0cyA9IHByb2plY3RzO1xuXHRcdGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2NvbnRlbnRcIik7XG5cdFx0ZGl2Q29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdF9oMVBhZ2VUaXRsZSA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJoMVwiLCBcIlwiLCBcIllvdXIgUHJvamVjdHNcIik7XG5cdFx0X2RpdlByb2plY3RMaXN0ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBcInByb2plY3RMaXN0XCIpO1xuXHRcdF9idG5BZGRQcm9qZWN0ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcblx0XHRcdFwiYnV0dG9uXCIsXG5cdFx0XHRcImFkZFByb2plY3RCdG5cIixcblx0XHRcdFwiQWRkIFByb2plY3RcIlxuXHRcdCk7XG5cdFx0X2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblx0XHRfZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG5cdFx0X2Zvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwiZ2V0XCIpO1xuXHRcdF9mb3JtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZVwiKTtcblx0XHRfZm9ybS5pZCA9IFwiYWRkUHJvamVjdEZvcm1cIjtcblx0XHRfZm9ybS5hcHBlbmQoXG5cdFx0XHRjcmVhdGVGb3JtQ2xvc2VCdXR0b24oXCJjbG9zZVByb2plY3RGb3JtQnRuXCIpLFxuXHRcdFx0Y3JlYXRlRm9ybVByb3BlcnR5KFxuXHRcdFx0XHRcIlRpdGxlXCIsXG5cdFx0XHRcdFwidGV4dFwiLFxuXHRcdFx0XHRcInRpdGxlTmFtZVwiLFxuXHRcdFx0XHRcInRpdGxlX25hbWVcIixcblx0XHRcdFx0XCJQcm9qZWN0IFRpdGxlXCJcblx0XHRcdCksXG5cdFx0XHRjcmVhdGVGb3JtU3VibWl0QnV0dG9uKFwicHJvamVjdEZvcm1TdWJtaXRCdG5cIilcblx0XHQpO1xuXHRcdGRpdkNvbnRlbnQuYXBwZW5kKF9oMVBhZ2VUaXRsZSwgX2RpdlByb2plY3RMaXN0LCBfYnRuQWRkUHJvamVjdCwgX2Zvcm0pO1xuXHRcdHJlbG9hZFByb2plY3RMaXN0RGlzcGxheSgpO1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0cmVuZGVyUHJvamVjdHNQYWdlLFxuXHRcdHJlbG9hZFByb2plY3RMaXN0RGlzcGxheSxcblx0XHRnZXQgZm9ybSgpIHtcblx0XHRcdHJldHVybiBfZm9ybTtcblx0XHR9LFxuXHRcdGdldCBidG5BZGRQcm9qZWN0KCkge1xuXHRcdFx0cmV0dXJuIF9idG5BZGRQcm9qZWN0O1xuXHRcdH0sXG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2FyZERPTUVsZW1lbnQocHJvamVjdCwgaW5kZXgpIHtcblx0Y29uc3QgX2xpUHJvamVjdENhcmQgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwibGlcIiwgXCJvcGVuUHJvamVjdFwiKTtcblx0Y29uc3QgX2gzVG9kb1RpdGxlID0gY3JlYXRlRWxlbWVudFdpdGhJZChcblx0XHRcImgzXCIsXG5cdFx0XCJvcGVuUHJvamVjdFwiLFxuXHRcdHByb2plY3QudGl0bGVcblx0KTtcblx0X2xpUHJvamVjdENhcmQuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpbmRleCk7XG5cdF9oM1RvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGluZGV4KTtcblx0X2xpUHJvamVjdENhcmQuYXBwZW5kKF9oM1RvZG9UaXRsZSk7XG5cdHJldHVybiBfbGlQcm9qZWN0Q2FyZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHNET01IYW5kbGVyO1xuIiwiaW1wb3J0IEVkaXRJY29uIGZyb20gXCIuL2VkaXQtaWNvbi5zdmdcIjtcblxuY29uc3QgdG9kb0xpc3RET01IYW5kbGVyID0gKCgpID0+IHtcblx0Y29uc3QgX2RpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2NvbnRlbnRcIik7XG5cblx0aWYgKCFfZGl2Q29udGVudCkge1xuXHRcdF9kaXZDb250ZW50ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBcImNvbnRlbnRcIik7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChfZGl2Q29udGVudCk7XG5cdH1cblx0dmFyIF9idG5CYWNrVG9Qcm9qZWN0cztcblx0dmFyIF9oMVByb2plY3RUaXRsZTtcblx0dmFyIF9lZGl0UHJvamVjdFRpdGxlRm9ybTtcblx0dmFyIF9pbWdFZGl0VGl0bGVCdG47XG5cdHZhciBfZGl2VG9kb0xpc3Q7XG5cdHZhciBfYnRuQWRkVG9kbztcblx0dmFyIF9hZGRUb2RvRm9ybTtcblx0dmFyIF9jdXJyUHJvamVjdDtcblxuXHRjb25zdCByZWxvYWRUb2RvTGlzdERpc3BsYXkgPSAoKSA9PiB7XG5cdFx0aWYgKCFfY3VyclByb2plY3QpXG5cdFx0XHR0aHJvdyBcIkEgcHJvamVjdCBoYXMgbm90IGJlZW4gbG9hZGVkIG9uIHRoZSBwYWdlIHlldFwiO1xuXHRcdF9kaXZUb2RvTGlzdC5pbm5lckhUTUwgPSBcIjx1bD48L3VsPlwiOyAvLyBDbGVhciB0aGUgdG9kbyBsaXN0IGVsZW1lbnQgb2YgaXRzIGNoaWxkcmVuXG5cblx0XHQvLyBUaGVuIHJlLXBvcHVsYXRlIHRoZSB0b2RvIGxpc3Qgd2l0aCB0b2RvIGNhcmQgZWxlbWVudHNcblx0XHRfY3VyclByb2plY3QubGlzdE9mVG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcblx0XHRcdC8vIFRoZSBmaXJzdCBjaGlsZCBvZiB0aGUgdG9kbyBsaXN0IGRpdiBlbGVtZW50IGlzIHRoZSB1bm9yZGVyZWQgbGlzdFxuXHRcdFx0X2RpdlRvZG9MaXN0LmZpcnN0Q2hpbGQuYXBwZW5kQ2hpbGQoXG5cdFx0XHRcdGNyZWF0ZVRvZG9DYXJkRE9NRWxlbWVudCh0b2RvLCBpbmRleClcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgZW5hYmxlUHJvamVjdFRpdGxlRm9ybSA9ICgpID0+IHtcblx0XHRfZWRpdFByb2plY3RUaXRsZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRcdF9oMVByb2plY3RUaXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdH07XG5cblx0Y29uc3QgZGlzYWJsZVByb2plY3RUaXRsZUZvcm0gPSAoKSA9PiB7XG5cdFx0X2VkaXRQcm9qZWN0VGl0bGVGb3JtLnJlc2V0KCk7XG5cdFx0X2VkaXRQcm9qZWN0VGl0bGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRfaDFQcm9qZWN0VGl0bGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0fTtcblxuXHRjb25zdCByZW5kZXJUb2RvTGlzdFBhZ2UgPSAocHJvamVjdCkgPT4ge1xuXHRcdF9kaXZDb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cdFx0X2N1cnJQcm9qZWN0ID0gcHJvamVjdDtcblx0XHRfYnRuQmFja1RvUHJvamVjdHMgPSBjcmVhdGVFbGVtZW50V2l0aElkKFxuXHRcdFx0XCJidXR0b25cIixcblx0XHRcdFwiYmFja1RvUHJvamVjdHNCdG5cIixcblx0XHRcdFwiPC0gVG8gUHJvamVjdHNcIlxuXHRcdCk7XG5cdFx0Ly8gQ3JlYXRlIGgxIGVsZW1lbnQgdGhhdCBkaXNwbGF5cyBwcm9qZWN0IHRpdGxlXG5cdFx0X2gxUHJvamVjdFRpdGxlID0gY3JlYXRlRWxlbWVudFdpdGhJZChcblx0XHRcdFwiaDFcIixcblx0XHRcdFwiXCIsXG5cdFx0XHRgUHJvamVjdDogJHtwcm9qZWN0LnRpdGxlfWBcblx0XHQpO1xuXHRcdF9lZGl0UHJvamVjdFRpdGxlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXHRcdF9lZGl0UHJvamVjdFRpdGxlRm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG5cdFx0X2VkaXRQcm9qZWN0VGl0bGVGb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcImdldFwiKTtcblx0XHRfZWRpdFByb2plY3RUaXRsZUZvcm0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lXCIpO1xuXHRcdF9lZGl0UHJvamVjdFRpdGxlRm9ybS5pZCA9IFwiZWRpdFByb2plY3RUaXRsZUZvcm1cIjtcblx0XHRjb25zdCBfaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRfaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblx0XHRfaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdF90aXRsZVwiKTtcblx0XHRfaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5ldyBQcm9qZWN0IFRpdGxlXCIpO1xuXHRcdF9pbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIF9jdXJyUHJvamVjdC50aXRsZSk7XG5cdFx0Y29uc3QgX2J0bkFwcGx5ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImJ1dHRvblwiLCBcImFwcGx5QnRuXCIpO1xuXHRcdF9idG5BcHBseS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuXHRcdF9lZGl0UHJvamVjdFRpdGxlRm9ybS5hcHBlbmQoXG5cdFx0XHRjcmVhdGVGb3JtQ2xvc2VCdXR0b24oXCJjbG9zZUVkaXRQcm9qZWN0VGl0bGVGb3JtQnRuXCIpLFxuXHRcdFx0X2lucHV0VGl0bGUsXG5cdFx0XHRfYnRuQXBwbHlcblx0XHQpO1xuXHRcdF9pbWdFZGl0VGl0bGVCdG4gPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiaW1nXCIsIFwiZWRpdFRpdGxlQnRuXCIpO1xuXHRcdF9pbWdFZGl0VGl0bGVCdG4uc2V0QXR0cmlidXRlKFwic3JjXCIsIEVkaXRJY29uKTtcblx0XHRfaDFQcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQoX2ltZ0VkaXRUaXRsZUJ0bik7XG5cdFx0Ly8gQ3JlYXRlIGRpdiBlbGVtZW50IHRoYXQgaG9sZHMgdG9kbyBsaXN0XG5cdFx0X2RpdlRvZG9MaXN0ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBcInRvZG9MaXN0XCIpO1xuXHRcdC8vIEFwcGVuZCBidXR0b24gdGhhdCByZXZlYWxzIGEgZm9ybSB0byBjcmVhdGUgdG9kbyBpdGVtXG5cdFx0X2J0bkFkZFRvZG8gPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiYnV0dG9uXCIsIFwiYWRkVG9kb0J0blwiLCBcIkFkZCBUb2RvXCIpO1xuXHRcdF9hZGRUb2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXHRcdF9hZGRUb2RvRm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG5cdFx0X2FkZFRvZG9Gb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcImdldFwiKTtcblx0XHRfYWRkVG9kb0Zvcm0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lXCIpO1xuXHRcdF9hZGRUb2RvRm9ybS5pZCA9IFwiYWRkVG9kb0Zvcm1cIjtcblx0XHRfYWRkVG9kb0Zvcm0uYXBwZW5kKFxuXHRcdFx0Y3JlYXRlRm9ybUNsb3NlQnV0dG9uKFwiY2xvc2VUb2RvRm9ybUJ0blwiKSxcblx0XHRcdGNyZWF0ZUZvcm1Qcm9wZXJ0eShcblx0XHRcdFx0XCJUaXRsZVwiLFxuXHRcdFx0XHRcInRleHRcIixcblx0XHRcdFx0XCJ0aXRsZU5hbWVcIixcblx0XHRcdFx0XCJ0aXRsZV9uYW1lXCIsXG5cdFx0XHRcdFwiVG9kbyBUaXRsZVwiXG5cdFx0XHQpLFxuXHRcdFx0Y3JlYXRlRm9ybVByb3BlcnR5KFxuXHRcdFx0XHRcIkRlc2NyaXB0aW9uXCIsXG5cdFx0XHRcdFwidGV4dFwiLFxuXHRcdFx0XHRcImRlc2NyaXB0aW9uXCIsXG5cdFx0XHRcdFwiZGVzY190ZXh0XCIsXG5cdFx0XHRcdFwiVG9kbyBEZXNjcmlwdGlvblwiXG5cdFx0XHQpLFxuXHRcdFx0Y3JlYXRlRm9ybVN1Ym1pdEJ1dHRvbihcInRvZG9Gb3JtU3VibWl0QnRuXCIpXG5cdFx0KTtcblx0XHRfZGl2Q29udGVudC5hcHBlbmQoXG5cdFx0XHRfYnRuQmFja1RvUHJvamVjdHMsXG5cdFx0XHRfaDFQcm9qZWN0VGl0bGUsXG5cdFx0XHRfZWRpdFByb2plY3RUaXRsZUZvcm0sXG5cdFx0XHRfZGl2VG9kb0xpc3QsXG5cdFx0XHRfYnRuQWRkVG9kbyxcblx0XHRcdF9hZGRUb2RvRm9ybVxuXHRcdCk7XG5cdFx0cmVsb2FkVG9kb0xpc3REaXNwbGF5KCk7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRyZW5kZXJUb2RvTGlzdFBhZ2UsXG5cdFx0cmVsb2FkVG9kb0xpc3REaXNwbGF5LFxuXHRcdGVuYWJsZVByb2plY3RUaXRsZUZvcm0sXG5cdFx0ZGlzYWJsZVByb2plY3RUaXRsZUZvcm0sXG5cdFx0Z2V0IGVkaXRQcm9qZWN0VGl0bGVGb3JtKCkge1xuXHRcdFx0cmV0dXJuIF9lZGl0UHJvamVjdFRpdGxlRm9ybTtcblx0XHR9LFxuXHRcdGdldCBhZGRUb2RvRm9ybSgpIHtcblx0XHRcdHJldHVybiBfYWRkVG9kb0Zvcm07XG5cdFx0fSxcblx0XHRnZXQgYnRuQWRkVG9kbygpIHtcblx0XHRcdHJldHVybiBfYnRuQWRkVG9kbztcblx0XHR9LFxuXHRcdGdldCBjdXJyUHJvamVjdCgpIHtcblx0XHRcdHJldHVybiBfY3VyclByb2plY3Q7XG5cdFx0fSxcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVGb3JtKGZvcm0sIGFkZEJ0bikge1xuXHRhZGRCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlRm9ybShmb3JtLCBhZGRCdG4pIHtcblx0Zm9ybS5yZXNldCgpO1xuXHRhZGRCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0Zm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtUHJvcGVydHkodGl0bGUsIHR5cGUsIGlkLCBuYW1lLCBwbGFjZWhvbGRlciA9IFwiXCIpIHtcblx0aWYgKFxuXHRcdHR5cGVvZiB0aXRsZSAhPT0gXCJzdHJpbmdcIiB8fFxuXHRcdHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiIHx8XG5cdFx0dHlwZW9mIGlkICE9PSBcInN0cmluZ1wiIHx8XG5cdFx0dHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHxcblx0XHR0eXBlb2YgcGxhY2Vob2xkZXIgIT09IFwic3RyaW5nXCJcblx0KSB7XG5cdFx0dGhyb3cgXCJjcmVhdGVGb3JtUHJvcGVydHkgbXVzdCBiZSBjYWxsZWQgd2l0aCBzdHJpbmdzXCI7XG5cdH1cblx0Y29uc3QgX2RpdkZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRfZGl2Rm9ybVJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tcm93XCIpO1xuXHRjb25zdCBfbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdF9sYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYCR7aWR9YCk7XG5cdF9sYWJlbC50ZXh0Q29udGVudCA9IHRpdGxlO1xuXHRjb25zdCBfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdF9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xuXHRfaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuXHRfaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lKTtcblx0X2lucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHBsYWNlaG9sZGVyKTtcblx0X2RpdkZvcm1Sb3cuYXBwZW5kKF9sYWJlbCwgX2lucHV0KTtcblx0cmV0dXJuIF9kaXZGb3JtUm93O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9ybVN1Ym1pdEJ1dHRvbihpZCkge1xuXHRpZiAodHlwZW9mIGlkICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0dGhyb3cgXCJjcmVhdGVGb3JtU3VibWl0QnV0dG9uIG11c3QgYmUgY2FsbGVkIHdpdGggc3RyaW5nc1wiO1xuXHR9XG5cdGNvbnN0IF9kaXZGb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0X2RpdkZvcm1Sb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLXJvd1wiKTtcblx0Y29uc3QgX2Zvcm1TdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRfZm9ybVN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuXHRfZm9ybVN1Ym1pdEJ0bi5pZCA9IGlkO1xuXHRfZm9ybVN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG5cdF9kaXZGb3JtUm93LmFwcGVuZENoaWxkKF9mb3JtU3VibWl0QnRuKTtcblx0cmV0dXJuIF9kaXZGb3JtUm93O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9ybUNsb3NlQnV0dG9uKGlkKSB7XG5cdGlmICh0eXBlb2YgaWQgIT09IFwic3RyaW5nXCIpIHtcblx0XHR0aHJvdyBcImNyZWF0ZUZvcm1DbG9zZUJ1dHRvbiBtdXN0IGJlIGNhbGxlZCB3aXRoIHN0cmluZ3NcIjtcblx0fVxuXG5cdGNvbnN0IF9mb3JtQ2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRfZm9ybUNsb3NlQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cdF9mb3JtQ2xvc2VCdG4uaWQgPSBpZDtcblx0X2Zvcm1DbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwibnZtXCI7XG5cdHJldHVybiBfZm9ybUNsb3NlQnRuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhJZCh0YWcsIGlkID0gXCJcIiwgdGV4dENvbnRlbnQgPSBcIlwiKSB7XG5cdGlmIChcblx0XHR0eXBlb2YgdGFnICE9PSBcInN0cmluZ1wiIHx8XG5cdFx0dHlwZW9mIGlkICE9PSBcInN0cmluZ1wiIHx8XG5cdFx0dHlwZW9mIHRleHRDb250ZW50ICE9PSBcInN0cmluZ1wiXG5cdCkge1xuXHRcdHRocm93IFwiY3JlYXRlRWxlbWVudFdpdGhJZCBtdXN0IGJlIGNhbGxlZCB3aXRoIHN0cmluZ3NcIjtcblx0fVxuXHRjb25zdCBfcmV0dXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXHRfcmV0dXJuLmlkID0gaWQ7XG5cdF9yZXR1cm4udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcblxuXHRyZXR1cm4gX3JldHVybjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb0NhcmRET01FbGVtZW50KHRvZG8sIGluZGV4KSB7XG5cdGNvbnN0IF9saVRvZG9DYXJkID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImxpXCIsIGB0b2RvLSR7aW5kZXh9YCk7XG5cdGNvbnN0IF9pbnB1dENoZWNrYm94ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImlucHV0XCIsIGBjaGVjay0ke2luZGV4fWApO1xuXHRfaW5wdXRDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG5cdGNvbnN0IF9wVG9kb1RpdGxlID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInBcIiwgXCJcIiwgdG9kby50aXRsZSk7XG5cdGNvbnN0IF9idG5EZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0X2J0bkRlbGV0ZVRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG8tZGVsLWJ0blwiKTtcblx0X2J0bkRlbGV0ZVRvZG8uaWQgPSBcImRlbGV0ZVRvZG9CdG5cIjtcblx0X2J0bkRlbGV0ZVRvZG8uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpbmRleCk7XG5cdF9idG5EZWxldGVUb2RvLnRleHRDb250ZW50ID0gXCJYXCI7XG5cdF9saVRvZG9DYXJkLmFwcGVuZChfaW5wdXRDaGVja2JveCwgX3BUb2RvVGl0bGUsIF9idG5EZWxldGVUb2RvKTtcblx0cmV0dXJuIF9saVRvZG9DYXJkO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b2RvTGlzdERPTUhhbmRsZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgQ3JlYXRlVG9kbyBmcm9tIFwiLi9jcmVhdGUtdG9kby5qc1wiO1xuaW1wb3J0IENyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlLXByb2plY3QuanNcIjtcbmltcG9ydCB0b2RvTGlzdERPTUhhbmRsZXIsIHsgZW5hYmxlRm9ybSwgZGlzYWJsZUZvcm0gfSBmcm9tIFwiLi9yZW5kZXItdG9kb3MuanNcIjtcbmltcG9ydCBwcm9qZWN0c0RPTUhhbmRsZXIgZnJvbSBcIi4vcmVuZGVyLXByb2plY3RzLmpzXCI7XG5cbmNvbnN0IG1haW5BcHBMb2dpYyA9ICgoKSA9PiB7XG5cdGNvbnN0IF9wcm9qZWN0cyA9IFtdO1xuXHRjb25zdCBfZmlyc3RQcm9qZWN0ID0gQ3JlYXRlUHJvamVjdChcIk15IEZpcnN0IFRvZG8gTGlzdFwiLCBbXSk7XG5cdF9wcm9qZWN0cy5wdXNoKF9maXJzdFByb2plY3QpO1xuXHR0b2RvTGlzdERPTUhhbmRsZXIucmVuZGVyVG9kb0xpc3RQYWdlKF9maXJzdFByb2plY3QpO1xuXHRjb25zdCBfZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKTtcblx0Y29uc3QgX3ByZXZlbnREZWZhdWx0U3VibWlzc2lvbiA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9O1xuXHRfZGl2Q29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHR2YXIgZm9ybURhdGE7XG5cdFx0c3dpdGNoIChlLnRhcmdldC5pZCkge1xuXHRcdFx0Y2FzZSBcImVkaXRUaXRsZUJ0blwiOlxuXHRcdFx0XHR0b2RvTGlzdERPTUhhbmRsZXIuZW5hYmxlUHJvamVjdFRpdGxlRm9ybSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJhcHBseUJ0blwiOlxuXHRcdFx0XHR0b2RvTGlzdERPTUhhbmRsZXIuZWRpdFByb2plY3RUaXRsZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcInN1Ym1pdFwiLFxuXHRcdFx0XHRcdF9wcmV2ZW50RGVmYXVsdFN1Ym1pc3Npb24oZSlcblx0XHRcdFx0KTtcblx0XHRcdFx0Zm9ybURhdGEgPSBuZXcgRm9ybURhdGEoXG5cdFx0XHRcdFx0dG9kb0xpc3RET01IYW5kbGVyLmVkaXRQcm9qZWN0VGl0bGVGb3JtXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRvZG9MaXN0RE9NSGFuZGxlci5lZGl0UHJvamVjdFRpdGxlRm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFwic3VibWl0XCIsXG5cdFx0XHRcdFx0X3ByZXZlbnREZWZhdWx0U3VibWlzc2lvbihlKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0b2RvTGlzdERPTUhhbmRsZXIuY3VyclByb2plY3QudGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJwcm9qZWN0X3RpdGxlXCIpO1xuXHRcdFx0XHR0b2RvTGlzdERPTUhhbmRsZXIucmVuZGVyVG9kb0xpc3RQYWdlKHRvZG9MaXN0RE9NSGFuZGxlci5jdXJyUHJvamVjdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImNsb3NlRWRpdFByb2plY3RUaXRsZUZvcm1CdG5cIjpcblx0XHRcdFx0dG9kb0xpc3RET01IYW5kbGVyLmRpc2FibGVQcm9qZWN0VGl0bGVGb3JtKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImFkZFRvZG9CdG5cIjpcblx0XHRcdFx0ZW5hYmxlRm9ybShcblx0XHRcdFx0XHR0b2RvTGlzdERPTUhhbmRsZXIuYWRkVG9kb0Zvcm0sXG5cdFx0XHRcdFx0dG9kb0xpc3RET01IYW5kbGVyLmJ0bkFkZFRvZG9cblx0XHRcdFx0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiY2xvc2VUb2RvRm9ybUJ0blwiOlxuXHRcdFx0XHRkaXNhYmxlRm9ybShcblx0XHRcdFx0XHR0b2RvTGlzdERPTUhhbmRsZXIuYWRkVG9kb0Zvcm0sXG5cdFx0XHRcdFx0dG9kb0xpc3RET01IYW5kbGVyLmJ0bkFkZFRvZG9cblx0XHRcdFx0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiYWRkUHJvamVjdEJ0blwiOlxuXHRcdFx0XHRlbmFibGVGb3JtKFxuXHRcdFx0XHRcdHByb2plY3RzRE9NSGFuZGxlci5mb3JtLFxuXHRcdFx0XHRcdHByb2plY3RzRE9NSGFuZGxlci5idG5BZGRQcm9qZWN0XG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImNsb3NlUHJvamVjdEZvcm1CdG5cIjpcblx0XHRcdFx0ZGlzYWJsZUZvcm0oXG5cdFx0XHRcdFx0cHJvamVjdHNET01IYW5kbGVyLmZvcm0sXG5cdFx0XHRcdFx0cHJvamVjdHNET01IYW5kbGVyLmJ0bkFkZFByb2plY3Rcblx0XHRcdFx0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiYmFja1RvUHJvamVjdHNCdG5cIjpcblx0XHRcdFx0cHJvamVjdHNET01IYW5kbGVyLnJlbmRlclByb2plY3RzUGFnZShfcHJvamVjdHMpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJ0b2RvRm9ybVN1Ym1pdEJ0blwiOlxuXHRcdFx0XHR0b2RvTGlzdERPTUhhbmRsZXIuYWRkVG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcInN1Ym1pdFwiLFxuXHRcdFx0XHRcdF9wcmV2ZW50RGVmYXVsdFN1Ym1pc3Npb24oZSlcblx0XHRcdFx0KTtcblx0XHRcdFx0Zm9ybURhdGEgPSBuZXcgRm9ybURhdGEodG9kb0xpc3RET01IYW5kbGVyLmFkZFRvZG9Gb3JtKTtcblx0XHRcdFx0dG9kb0xpc3RET01IYW5kbGVyLmFkZFRvZG9Gb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0XCJzdWJtaXRcIixcblx0XHRcdFx0XHRfcHJldmVudERlZmF1bHRTdWJtaXNzaW9uKGUpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGFkZFRvZG9Ub1Byb2plY3QoZm9ybURhdGEpO1xuXHRcdFx0XHR0b2RvTGlzdERPTUhhbmRsZXIucmVsb2FkVG9kb0xpc3REaXNwbGF5KCk7XG5cdFx0XHRcdGRpc2FibGVGb3JtKFxuXHRcdFx0XHRcdHRvZG9MaXN0RE9NSGFuZGxlci5hZGRUb2RvRm9ybSxcblx0XHRcdFx0XHR0b2RvTGlzdERPTUhhbmRsZXIuYnRuQWRkVG9kb1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJwcm9qZWN0Rm9ybVN1Ym1pdEJ0blwiOlxuXHRcdFx0XHRwcm9qZWN0c0RPTUhhbmRsZXIuZm9ybS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFwic3VibWl0XCIsXG5cdFx0XHRcdFx0X3ByZXZlbnREZWZhdWx0U3VibWlzc2lvbihlKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShwcm9qZWN0c0RPTUhhbmRsZXIuZm9ybSk7XG5cdFx0XHRcdHByb2plY3RzRE9NSGFuZGxlci5mb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0XCJzdWJtaXRcIixcblx0XHRcdFx0XHRfcHJldmVudERlZmF1bHRTdWJtaXNzaW9uKGUpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGNvbnN0IF9uZXdQcm9qZWN0ID0gQ3JlYXRlUHJvamVjdChmb3JtRGF0YS5nZXQoXCJ0aXRsZV9uYW1lXCIpKTtcblx0XHRcdFx0X3Byb2plY3RzLnB1c2goX25ld1Byb2plY3QpO1xuXHRcdFx0XHRwcm9qZWN0c0RPTUhhbmRsZXIucmVsb2FkUHJvamVjdExpc3REaXNwbGF5KCk7XG5cdFx0XHRcdGRpc2FibGVGb3JtKFxuXHRcdFx0XHRcdHByb2plY3RzRE9NSGFuZGxlci5mb3JtLFxuXHRcdFx0XHRcdHByb2plY3RzRE9NSGFuZGxlci5idG5BZGRQcm9qZWN0XG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImRlbGV0ZVRvZG9CdG5cIjpcblx0XHRcdFx0dG9kb0xpc3RET01IYW5kbGVyLmN1cnJQcm9qZWN0LnJlbW92ZVRvZG8oXG5cdFx0XHRcdFx0TnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRvZG9MaXN0RE9NSGFuZGxlci5yZWxvYWRUb2RvTGlzdERpc3BsYXkoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwib3BlblByb2plY3RcIjpcblx0XHRcdFx0dG9kb0xpc3RET01IYW5kbGVyLnJlbmRlclRvZG9MaXN0UGFnZShcblx0XHRcdFx0XHRfcHJvamVjdHNbZS50YXJnZXQuZGF0YXNldC5pbmRleF1cblx0XHRcdFx0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH0pO1xufSkoKTtcblxuZnVuY3Rpb24gYWRkVG9kb1RvUHJvamVjdChmb3JtRGF0YSkge1xuXHRjb25zdCBfbmV3VG9kbyA9IENyZWF0ZVRvZG8oXG5cdFx0Zm9ybURhdGEuZ2V0KFwidGl0bGVfbmFtZVwiKSxcblx0XHRmb3JtRGF0YS5nZXQoXCJkZXNjX3RleHRcIilcblx0KTtcblx0dG9kb0xpc3RET01IYW5kbGVyLmN1cnJQcm9qZWN0LmFkZFRvZG8oX25ld1RvZG8pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
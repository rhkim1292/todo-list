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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\nbody,\nhtml {\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n}\n\ndiv#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\tposition: relative;\n}\n\ndiv#content button#backToProjectsBtn {\n\tposition: absolute;\n\ttop: 5px;\n\tleft: 5px;\n\tpadding: 10px 4px;\n}\n\ndiv#todoList ul,\ndiv#projectList ul {\n\tpadding: 0;\n\tmargin: 0;\n\tlist-style-type: none;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\ndiv#todoList ul li,\ndiv#projectList ul li {\n\tdisplay: flex;\n\twidth: 400px;\n\tborder: 1px solid #d6d9dc;\n\tgap: 5px;\n}\n\ndiv#projectList ul li {\n\tjustify-content: center;\n\tcursor: pointer;\n}\n\ndiv#todoList ul li p {\n\tmargin: 0;\n\tmargin-right: auto;\n}\n\ndiv#projectList h3 {\n\tmargin: 0;\n}\n\ndiv#todoList ul li button.todo-del-btn {\n\tcolor: red;\n\tfont-weight: bold;\n}\n\nform {\n\tbackground-color: #f6f7f8;\n\tborder: 1px solid #d6d9dc;\n\tborder-radius: 3px;\n\n\tpadding: 50px 50px 30px 30px;\n\tmargin: 0 0 20px 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tposition: relative;\n}\n\n.close-form-btn {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 5px;\n}\n\n.form-row {\n\tmargin-bottom: 20px;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n}\n\n.form-row label {\n\ttext-align: right;\n\twidth: 100px;\n\tpadding-right: 20px;\n}\n\n.form-row input[type=\"text\"],\n.form-row input[type=\"number\"] {\n\tbackground-color: #ffffff;\n\tborder: 1px solid #d6d9dc;\n\tborder-radius: 3px;\n\tpadding: 7px;\n\tfont-size: 14px;\n}\n\n.form-row button {\n\tmargin-left: 100px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,SAAS;IACT,UAAU;IACV,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;CACtB,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,QAAQ;CACR,SAAS;CACT,iBAAiB;AAClB;;AAEA;;CAEC,UAAU;CACV,SAAS;CACT,qBAAqB;CACrB,aAAa;CACb,sBAAsB;AACvB;;AAEA;;CAEC,aAAa;CACb,YAAY;CACZ,yBAAyB;CACzB,QAAQ;AACT;;AAEA;CACC,uBAAuB;CACvB,eAAe;AAChB;;AAEA;CACC,SAAS;CACT,kBAAkB;AACnB;;AAEA;CACC,SAAS;AACV;;AAEA;CACC,UAAU;CACV,iBAAiB;AAClB;;AAEA;CACC,yBAAyB;CACzB,yBAAyB;CACzB,kBAAkB;;CAElB,4BAA4B;CAC5B,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,QAAQ;CACR,UAAU;AACX;;AAEA;CACC,mBAAmB;CACnB,aAAa;CACb,2BAA2B;CAC3B,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;CACjB,YAAY;CACZ,mBAAmB;AACpB;;AAEA;;CAEC,yBAAyB;CACzB,yBAAyB;CACzB,kBAAkB;CAClB,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,kBAAkB;AACnB","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\nbody,\nhtml {\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n}\n\ndiv#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\tposition: relative;\n}\n\ndiv#content button#backToProjectsBtn {\n\tposition: absolute;\n\ttop: 5px;\n\tleft: 5px;\n\tpadding: 10px 4px;\n}\n\ndiv#todoList ul,\ndiv#projectList ul {\n\tpadding: 0;\n\tmargin: 0;\n\tlist-style-type: none;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\ndiv#todoList ul li,\ndiv#projectList ul li {\n\tdisplay: flex;\n\twidth: 400px;\n\tborder: 1px solid #d6d9dc;\n\tgap: 5px;\n}\n\ndiv#projectList ul li {\n\tjustify-content: center;\n\tcursor: pointer;\n}\n\ndiv#todoList ul li p {\n\tmargin: 0;\n\tmargin-right: auto;\n}\n\ndiv#projectList h3 {\n\tmargin: 0;\n}\n\ndiv#todoList ul li button.todo-del-btn {\n\tcolor: red;\n\tfont-weight: bold;\n}\n\nform {\n\tbackground-color: #f6f7f8;\n\tborder: 1px solid #d6d9dc;\n\tborder-radius: 3px;\n\n\tpadding: 50px 50px 30px 30px;\n\tmargin: 0 0 20px 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tposition: relative;\n}\n\n.close-form-btn {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 5px;\n}\n\n.form-row {\n\tmargin-bottom: 20px;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n}\n\n.form-row label {\n\ttext-align: right;\n\twidth: 100px;\n\tpadding-right: 20px;\n}\n\n.form-row input[type=\"text\"],\n.form-row input[type=\"number\"] {\n\tbackground-color: #ffffff;\n\tborder: 1px solid #d6d9dc;\n\tborder-radius: 3px;\n\tpadding: 7px;\n\tfont-size: 14px;\n}\n\n.form-row button {\n\tmargin-left: 100px;\n}"],"sourceRoot":""}]);
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
const todoListDOMHandler = (() => {
	const _divContent = document.querySelector("div#content");

	if (!_divContent) {
		_divContent = createElementWithId("div", "content");
		document.body.appendChild(_divContent);
	}
	var _btnBackToProjects;
	var _h1ProjectTitle;
	var _divTodoList;
	var _btnAddTodo;
	var _form;
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
		// Create div element that holds todo list
		_divTodoList = createElementWithId("div", "todoList");
		// Append button that reveals a form to create todo item
		_btnAddTodo = createElementWithId("button", "addTodoBtn", "Add Todo");
		_form = document.createElement("form");
		_form.setAttribute("action", "");
		_form.setAttribute("method", "get");
		_form.setAttribute("style", "display: none");
		_form.append(
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
			_divTodoList,
			_btnAddTodo,
			_form
		);
		reloadTodoListDisplay();
	};

	return {
		renderTodoListPage,
		reloadTodoListDisplay,
		get form() {
			return _form;
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
	_formCloseBtn.classList.add("close-form-btn");
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
			case "addTodoBtn":
				(0,_render_todos_js__WEBPACK_IMPORTED_MODULE_3__.enableForm)(_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].form, _render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].btnAddTodo);
				break;
			case "closeTodoFormBtn":
				(0,_render_todos_js__WEBPACK_IMPORTED_MODULE_3__.disableForm)(_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].form, _render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].btnAddTodo);
				break;
			case "addProjectBtn":
				(0,_render_todos_js__WEBPACK_IMPORTED_MODULE_3__.enableForm)(_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].form, _render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].btnAddProject);
				break;
			case "closeProjectFormBtn":
				(0,_render_todos_js__WEBPACK_IMPORTED_MODULE_3__.disableForm)(_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].form, _render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].btnAddProject);
				break;
			case "backToProjectsBtn":
				_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].renderProjectsPage(_projects);
				break;
			case "todoFormSubmitBtn":
				_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].form.addEventListener("submit", _preventDefaultSubmission(e));
				formData = new FormData(_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].form);
				_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].form.removeEventListener("submit", _preventDefaultSubmission(e));
				addTodoToProject(formData);
				_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].reloadTodoListDisplay();
				(0,_render_todos_js__WEBPACK_IMPORTED_MODULE_3__.disableForm)(_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].form, _render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].btnAddTodo);
				break;
			case "projectFormSubmitBtn":
				_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].form.addEventListener("submit", _preventDefaultSubmission(e));
				formData = new FormData(_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].form);
				_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].form.removeEventListener("submit", _preventDefaultSubmission(e));
				const _newProject = (0,_create_project_js__WEBPACK_IMPORTED_MODULE_2__["default"])(formData.get("title_name"));
				_projects.push(_newProject);
				_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].reloadProjectListDisplay();
				(0,_render_todos_js__WEBPACK_IMPORTED_MODULE_3__.disableForm)(_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].form, _render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].btnAddProject);
				break;
			case "deleteTodoBtn":
				_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].currProject.removeTodo(Number(e.target.dataset.index));
				_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].reloadTodoListDisplay();
				break;
			case "openProject":
				_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderTodoListPage(_projects[e.target.dataset.index]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUV0RDtBQUNBO0FBQ0EsdUJBQXVCLDhEQUFhO0FBQ3BDO0FBQ0EsQ0FBQywyRUFBcUM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQVUsQ0FBQyw2REFBdUIsRUFBRSxtRUFBNkI7QUFDckU7QUFDQTtBQUNBLElBQUksNkRBQVcsQ0FBQyw2REFBdUIsRUFBRSxtRUFBNkI7QUFDdEU7QUFDQTtBQUNBLElBQUksNERBQVUsQ0FBQyxnRUFBdUIsRUFBRSx5RUFBZ0M7QUFDeEU7QUFDQTtBQUNBLElBQUksNkRBQVcsQ0FBQyxnRUFBdUIsRUFBRSx5RUFBZ0M7QUFDekU7QUFDQTtBQUNBLElBQUksOEVBQXFDO0FBQ3pDO0FBQ0E7QUFDQSxJQUFJLDhFQUF3QztBQUM1Qyw0QkFBNEIsNkRBQXVCO0FBQ25ELElBQUksaUZBQTJDO0FBQy9DO0FBQ0EsSUFBSSw4RUFBd0M7QUFDNUMsSUFBSSw2REFBVyxDQUFDLDZEQUF1QixFQUFFLG1FQUE2QjtBQUN0RTtBQUNBO0FBQ0EsSUFBSSxpRkFBd0M7QUFDNUMsNEJBQTRCLGdFQUF1QjtBQUNuRCxJQUFJLG9GQUEyQztBQUMvQyx3QkFBd0IsOERBQWE7QUFDckM7QUFDQSxJQUFJLG9GQUEyQztBQUMvQyxJQUFJLDZEQUFXLENBQUMsZ0VBQXVCLEVBQUUseUVBQWdDO0FBQ3pFO0FBQ0E7QUFDQSxJQUFJLCtFQUF5QztBQUM3QyxJQUFJLDhFQUF3QztBQUM1QztBQUNBO0FBQ0EsSUFBSSwyRUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBLGtCQUFrQiwyREFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRFQUFzQztBQUN2QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS10b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXItcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci10b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmRpdiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmRpdiNjb250ZW50IGJ1dHRvbiNiYWNrVG9Qcm9qZWN0c0J0biB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdGxlZnQ6IDVweDtcXG5cXHRwYWRkaW5nOiAxMHB4IDRweDtcXG59XFxuXFxuZGl2I3RvZG9MaXN0IHVsLFxcbmRpdiNwcm9qZWN0TGlzdCB1bCB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZGl2I3RvZG9MaXN0IHVsIGxpLFxcbmRpdiNwcm9qZWN0TGlzdCB1bCBsaSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogNDAwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2Q2ZDlkYztcXG5cXHRnYXA6IDVweDtcXG59XFxuXFxuZGl2I3Byb2plY3RMaXN0IHVsIGxpIHtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdiN0b2RvTGlzdCB1bCBsaSBwIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG5kaXYjcHJvamVjdExpc3QgaDMge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuZGl2I3RvZG9MaXN0IHVsIGxpIGJ1dHRvbi50b2RvLWRlbC1idG4ge1xcblxcdGNvbG9yOiByZWQ7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmZvcm0ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmNmY3Zjg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2Q2ZDlkYztcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxuXFxuXFx0cGFkZGluZzogNTBweCA1MHB4IDMwcHggMzBweDtcXG5cXHRtYXJnaW46IDAgMCAyMHB4IDA7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNsb3NlLWZvcm0tYnRuIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cHg7XFxuXFx0cmlnaHQ6IDVweDtcXG59XFxuXFxuLmZvcm0tcm93IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLXJvdyBsYWJlbCB7XFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5mb3JtLXJvdyBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuLmZvcm0tcm93IGlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkNmQ5ZGM7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcblxcdHBhZGRpbmc6IDdweDtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5mb3JtLXJvdyBidXR0b24ge1xcblxcdG1hcmdpbi1sZWZ0OiAxMDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7Q0FDdEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixTQUFTO0NBQ1QsaUJBQWlCO0FBQ2xCOztBQUVBOztDQUVDLFVBQVU7Q0FDVixTQUFTO0NBQ1QscUJBQXFCO0NBQ3JCLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7O0NBRUMsYUFBYTtDQUNiLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsUUFBUTtBQUNUOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxTQUFTO0NBQ1Qsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsU0FBUztBQUNWOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6Qix5QkFBeUI7Q0FDekIsa0JBQWtCOztDQUVsQiw0QkFBNEI7Q0FDNUIsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsVUFBVTtBQUNYOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixtQkFBbUI7QUFDcEI7O0FBRUE7O0NBRUMseUJBQXlCO0NBQ3pCLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5kaXYjY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5kaXYjY29udGVudCBidXR0b24jYmFja1RvUHJvamVjdHNCdG4ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVweDtcXG5cXHRsZWZ0OiA1cHg7XFxuXFx0cGFkZGluZzogMTBweCA0cHg7XFxufVxcblxcbmRpdiN0b2RvTGlzdCB1bCxcXG5kaXYjcHJvamVjdExpc3QgdWwge1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmRpdiN0b2RvTGlzdCB1bCBsaSxcXG5kaXYjcHJvamVjdExpc3QgdWwgbGkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0d2lkdGg6IDQwMHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkNmQ5ZGM7XFxuXFx0Z2FwOiA1cHg7XFxufVxcblxcbmRpdiNwcm9qZWN0TGlzdCB1bCBsaSB7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYjdG9kb0xpc3QgdWwgbGkgcCB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuZGl2I3Byb2plY3RMaXN0IGgzIHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbmRpdiN0b2RvTGlzdCB1bCBsaSBidXR0b24udG9kby1kZWwtYnRuIHtcXG5cXHRjb2xvcjogcmVkO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5mb3JtIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmN2Y4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkNmQ5ZGM7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcblxcblxcdHBhZGRpbmc6IDUwcHggNTBweCAzMHB4IDMwcHg7XFxuXFx0bWFyZ2luOiAwIDAgMjBweCAwO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jbG9zZS1mb3JtLWJ0biB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdHJpZ2h0OiA1cHg7XFxufVxcblxcbi5mb3JtLXJvdyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1yb3cgbGFiZWwge1xcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcblxcdHdpZHRoOiAxMDBweDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uZm9ybS1yb3cgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbi5mb3JtLXJvdyBpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZDZkOWRjO1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXHRwYWRkaW5nOiA3cHg7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uZm9ybS1yb3cgYnV0dG9uIHtcXG5cXHRtYXJnaW4tbGVmdDogMTAwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgQ3JlYXRlUHJvamVjdCA9ICh0aXRsZSwgbGlzdE9mVG9kb3MgPSBbXSkgPT4ge1xuXHRpZiAoIUFycmF5LmlzQXJyYXkobGlzdE9mVG9kb3MpKSB7XG5cdFx0dGhyb3cgXCJQcm9qZWN0IG11c3QgYmUgY3JlYXRlZCB3aXRoIGEgcGFzc2VkLWluIGFycmF5XCI7XG5cdH1cblxuXHRjb25zdCBfaXNWYWxpZFRpdGxlID0gKHRpdGxlKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiB0aXRsZSAhPT0gXCJzdHJpbmdcIiB8fCB0aXRsZS5sZW5ndGggPD0gMCkgcmV0dXJuIGZhbHNlO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdGlmICghX2lzVmFsaWRUaXRsZSh0aXRsZSkpIHtcblx0XHR0aHJvdyBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIHN0cmluZyBpbnB1dCBmb3IgdGhlIHByb2plY3QgdGl0bGVcIjtcblx0fVxuXG5cdHZhciBfdGl0bGUgPSB0aXRsZTtcblx0dmFyIF9saXN0T2ZUb2RvcyA9IGxpc3RPZlRvZG9zO1xuXG5cdGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuXHRcdF9saXN0T2ZUb2Rvcy5wdXNoKHRvZG8pO1xuXHR9O1xuXG5cdGNvbnN0IHJlbW92ZVRvZG8gPSAoaW5kZXgpID0+IHtcblx0XHRfbGlzdE9mVG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0Z2V0IHRpdGxlKCkge1xuXHRcdFx0cmV0dXJuIF90aXRsZTtcblx0XHR9LFxuXHRcdGdldCBsZW5ndGgoKSB7XG5cdFx0XHRyZXR1cm4gX2xpc3RPZlRvZG9zLmxlbmd0aDtcblx0XHR9LFxuXHRcdGdldCBsaXN0T2ZUb2RvcygpIHtcblx0XHRcdHJldHVybiBfbGlzdE9mVG9kb3M7XG5cdFx0fSxcblx0XHRzZXQgbGlzdE9mVG9kb3ModG9kb0xpc3QpIHtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheSh0b2RvTGlzdCkpIHtcblx0XHRcdFx0dGhyb3cgXCJTZXR0aW5nIHR5cGUgbXVzdCBiZSBhbiBhcnJheVwiO1xuXHRcdFx0fVxuXG5cdFx0XHRfbGlzdE9mVG9kb3MgPSB0b2RvTGlzdDtcblx0XHR9LFxuXHRcdGFkZFRvZG8sXG5cdFx0cmVtb3ZlVG9kbyxcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVByb2plY3Q7XG4iLCJjb25zdCBDcmVhdGVUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiA9IFwiTm8gZGVzY3JpcHRpb25cIikgPT4ge1xuICAgIGNvbnN0IF9pc1ZhbGlkVGl0bGUgPSAodGl0bGUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aXRsZSAhPT0gXCJzdHJpbmdcIiB8fCB0aXRsZS5sZW5ndGggPD0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBfaXNWYWxpZERlc2NyaXB0aW9uID0gKGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZGVzY3JpcHRpb24gIT09IFwic3RyaW5nXCIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFfaXNWYWxpZFRpdGxlKHRpdGxlKSkge1xuICAgICAgICB0aHJvdyBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIHN0cmluZyBpbnB1dCBmb3IgdGhlIHRvZG8gdGl0bGUhXCI7XG4gICAgfVxuICAgIGlmICghX2lzVmFsaWREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikpIHtcbiAgICAgICAgdGhyb3cgXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBzdHJpbmcgaW5wdXQgZm9yIHRoZSB0b2RvIGRlc2NyaXB0aW9uIVwiO1xuICAgIH1cbiAgICBcbiAgICB2YXIgX3RpdGxlID0gdGl0bGU7XG4gICAgdmFyIF9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aXRsZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9kZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVUb2RvOyIsImltcG9ydCB7XG5cdGNyZWF0ZUVsZW1lbnRXaXRoSWQsXG5cdGNyZWF0ZUZvcm1DbG9zZUJ1dHRvbixcblx0Y3JlYXRlRm9ybVByb3BlcnR5LFxuXHRjcmVhdGVGb3JtU3VibWl0QnV0dG9uLFxufSBmcm9tIFwiLi9yZW5kZXItdG9kb3MuanNcIjtcblxuY29uc3QgcHJvamVjdHNET01IYW5kbGVyID0gKCgpID0+IHtcblx0dmFyIF9oMVBhZ2VUaXRsZTtcblx0dmFyIF9kaXZQcm9qZWN0TGlzdDtcblx0dmFyIF9idG5BZGRQcm9qZWN0O1xuXHR2YXIgX2Zvcm07XG5cdHZhciBfcHJvamVjdHM7XG5cblx0Y29uc3QgcmVsb2FkUHJvamVjdExpc3REaXNwbGF5ID0gKCkgPT4ge1xuXHRcdF9kaXZQcm9qZWN0TGlzdC5pbm5lckhUTUwgPSBcIjx1bD48L3VsPlwiOyAvLyBDbGVhciB0aGUgdG9kbyBsaXN0IGVsZW1lbnQgb2YgaXRzIGNoaWxkcmVuXG5cblx0XHQvLyBUaGVuIHJlLXBvcHVsYXRlIHRoZSB0b2RvIGxpc3Qgd2l0aCB0b2RvIGNhcmQgZWxlbWVudHNcblx0XHRfcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcblx0XHRcdC8vIFRoZSBmaXJzdCBjaGlsZCBvZiB0aGUgdG9kbyBsaXN0IGRpdiBlbGVtZW50IGlzIHRoZSB1bm9yZGVyZWQgbGlzdFxuXHRcdFx0X2RpdlByb2plY3RMaXN0LmZpcnN0Q2hpbGQuYXBwZW5kQ2hpbGQoXG5cdFx0XHRcdGNyZWF0ZVByb2plY3RDYXJkRE9NRWxlbWVudChwcm9qZWN0LCBpbmRleClcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyUHJvamVjdHNQYWdlID0gKHByb2plY3RzKSA9PiB7XG5cdFx0X3Byb2plY3RzID0gcHJvamVjdHM7XG5cdFx0Y29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKTtcblx0XHRkaXZDb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cdFx0X2gxUGFnZVRpdGxlID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImgxXCIsIFwiXCIsIFwiWW91ciBQcm9qZWN0c1wiKTtcblx0XHRfZGl2UHJvamVjdExpc3QgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIsIFwicHJvamVjdExpc3RcIik7XG5cdFx0X2J0bkFkZFByb2plY3QgPSBjcmVhdGVFbGVtZW50V2l0aElkKFxuXHRcdFx0XCJidXR0b25cIixcblx0XHRcdFwiYWRkUHJvamVjdEJ0blwiLFxuXHRcdFx0XCJBZGQgUHJvamVjdFwiXG5cdFx0KTtcblx0XHRfZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXHRcdF9mb3JtLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcblx0XHRfZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJnZXRcIik7XG5cdFx0X2Zvcm0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lXCIpO1xuXHRcdF9mb3JtLmFwcGVuZChcblx0XHRcdGNyZWF0ZUZvcm1DbG9zZUJ1dHRvbihcImNsb3NlUHJvamVjdEZvcm1CdG5cIiksXG5cdFx0XHRjcmVhdGVGb3JtUHJvcGVydHkoXG5cdFx0XHRcdFwiVGl0bGVcIixcblx0XHRcdFx0XCJ0ZXh0XCIsXG5cdFx0XHRcdFwidGl0bGVOYW1lXCIsXG5cdFx0XHRcdFwidGl0bGVfbmFtZVwiLFxuXHRcdFx0XHRcIlByb2plY3QgVGl0bGVcIlxuXHRcdFx0KSxcblx0XHRcdGNyZWF0ZUZvcm1TdWJtaXRCdXR0b24oXCJwcm9qZWN0Rm9ybVN1Ym1pdEJ0blwiKVxuXHRcdCk7XG5cdFx0ZGl2Q29udGVudC5hcHBlbmQoX2gxUGFnZVRpdGxlLCBfZGl2UHJvamVjdExpc3QsIF9idG5BZGRQcm9qZWN0LCBfZm9ybSk7XG5cdFx0cmVsb2FkUHJvamVjdExpc3REaXNwbGF5KCk7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRyZW5kZXJQcm9qZWN0c1BhZ2UsXG5cdFx0cmVsb2FkUHJvamVjdExpc3REaXNwbGF5LFxuXHRcdGdldCBmb3JtKCkge1xuXHRcdFx0cmV0dXJuIF9mb3JtO1xuXHRcdH0sXG5cdFx0Z2V0IGJ0bkFkZFByb2plY3QoKSB7XG5cdFx0XHRyZXR1cm4gX2J0bkFkZFByb2plY3Q7XG5cdFx0fSxcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDYXJkRE9NRWxlbWVudChwcm9qZWN0LCBpbmRleCkge1xuXHRjb25zdCBfbGlQcm9qZWN0Q2FyZCA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJsaVwiLCBcIm9wZW5Qcm9qZWN0XCIpO1xuXHRjb25zdCBfaDNUb2RvVGl0bGUgPSBjcmVhdGVFbGVtZW50V2l0aElkKFxuXHRcdFwiaDNcIixcblx0XHRcIm9wZW5Qcm9qZWN0XCIsXG5cdFx0cHJvamVjdC50aXRsZVxuXHQpO1xuXHRfbGlQcm9qZWN0Q2FyZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGluZGV4KTtcblx0X2gzVG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaW5kZXgpO1xuXHRfbGlQcm9qZWN0Q2FyZC5hcHBlbmQoX2gzVG9kb1RpdGxlKTtcblx0cmV0dXJuIF9saVByb2plY3RDYXJkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0c0RPTUhhbmRsZXI7XG4iLCJjb25zdCB0b2RvTGlzdERPTUhhbmRsZXIgPSAoKCkgPT4ge1xuXHRjb25zdCBfZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKTtcblxuXHRpZiAoIV9kaXZDb250ZW50KSB7XG5cdFx0X2RpdkNvbnRlbnQgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIsIFwiY29udGVudFwiKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKF9kaXZDb250ZW50KTtcblx0fVxuXHR2YXIgX2J0bkJhY2tUb1Byb2plY3RzO1xuXHR2YXIgX2gxUHJvamVjdFRpdGxlO1xuXHR2YXIgX2RpdlRvZG9MaXN0O1xuXHR2YXIgX2J0bkFkZFRvZG87XG5cdHZhciBfZm9ybTtcblx0dmFyIF9jdXJyUHJvamVjdDtcblxuXHRjb25zdCByZWxvYWRUb2RvTGlzdERpc3BsYXkgPSAoKSA9PiB7XG5cdFx0aWYgKCFfY3VyclByb2plY3QpXG5cdFx0XHR0aHJvdyBcIkEgcHJvamVjdCBoYXMgbm90IGJlZW4gbG9hZGVkIG9uIHRoZSBwYWdlIHlldFwiO1xuXHRcdF9kaXZUb2RvTGlzdC5pbm5lckhUTUwgPSBcIjx1bD48L3VsPlwiOyAvLyBDbGVhciB0aGUgdG9kbyBsaXN0IGVsZW1lbnQgb2YgaXRzIGNoaWxkcmVuXG5cblx0XHQvLyBUaGVuIHJlLXBvcHVsYXRlIHRoZSB0b2RvIGxpc3Qgd2l0aCB0b2RvIGNhcmQgZWxlbWVudHNcblx0XHRfY3VyclByb2plY3QubGlzdE9mVG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcblx0XHRcdC8vIFRoZSBmaXJzdCBjaGlsZCBvZiB0aGUgdG9kbyBsaXN0IGRpdiBlbGVtZW50IGlzIHRoZSB1bm9yZGVyZWQgbGlzdFxuXHRcdFx0X2RpdlRvZG9MaXN0LmZpcnN0Q2hpbGQuYXBwZW5kQ2hpbGQoXG5cdFx0XHRcdGNyZWF0ZVRvZG9DYXJkRE9NRWxlbWVudCh0b2RvLCBpbmRleClcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyVG9kb0xpc3RQYWdlID0gKHByb2plY3QpID0+IHtcblx0XHRfZGl2Q29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdF9jdXJyUHJvamVjdCA9IHByb2plY3Q7XG5cdFx0X2J0bkJhY2tUb1Byb2plY3RzID0gY3JlYXRlRWxlbWVudFdpdGhJZChcblx0XHRcdFwiYnV0dG9uXCIsXG5cdFx0XHRcImJhY2tUb1Byb2plY3RzQnRuXCIsXG5cdFx0XHRcIjwtIFRvIFByb2plY3RzXCJcblx0XHQpO1xuXHRcdC8vIENyZWF0ZSBoMSBlbGVtZW50IHRoYXQgZGlzcGxheXMgcHJvamVjdCB0aXRsZVxuXHRcdF9oMVByb2plY3RUaXRsZSA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXG5cdFx0XHRcImgxXCIsXG5cdFx0XHRcIlwiLFxuXHRcdFx0YFByb2plY3Q6ICR7cHJvamVjdC50aXRsZX1gXG5cdFx0KTtcblx0XHQvLyBDcmVhdGUgZGl2IGVsZW1lbnQgdGhhdCBob2xkcyB0b2RvIGxpc3Rcblx0XHRfZGl2VG9kb0xpc3QgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIsIFwidG9kb0xpc3RcIik7XG5cdFx0Ly8gQXBwZW5kIGJ1dHRvbiB0aGF0IHJldmVhbHMgYSBmb3JtIHRvIGNyZWF0ZSB0b2RvIGl0ZW1cblx0XHRfYnRuQWRkVG9kbyA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJidXR0b25cIiwgXCJhZGRUb2RvQnRuXCIsIFwiQWRkIFRvZG9cIik7XG5cdFx0X2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblx0XHRfZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG5cdFx0X2Zvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwiZ2V0XCIpO1xuXHRcdF9mb3JtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZVwiKTtcblx0XHRfZm9ybS5hcHBlbmQoXG5cdFx0XHRjcmVhdGVGb3JtQ2xvc2VCdXR0b24oXCJjbG9zZVRvZG9Gb3JtQnRuXCIpLFxuXHRcdFx0Y3JlYXRlRm9ybVByb3BlcnR5KFxuXHRcdFx0XHRcIlRpdGxlXCIsXG5cdFx0XHRcdFwidGV4dFwiLFxuXHRcdFx0XHRcInRpdGxlTmFtZVwiLFxuXHRcdFx0XHRcInRpdGxlX25hbWVcIixcblx0XHRcdFx0XCJUb2RvIFRpdGxlXCJcblx0XHRcdCksXG5cdFx0XHRjcmVhdGVGb3JtUHJvcGVydHkoXG5cdFx0XHRcdFwiRGVzY3JpcHRpb25cIixcblx0XHRcdFx0XCJ0ZXh0XCIsXG5cdFx0XHRcdFwiZGVzY3JpcHRpb25cIixcblx0XHRcdFx0XCJkZXNjX3RleHRcIixcblx0XHRcdFx0XCJUb2RvIERlc2NyaXB0aW9uXCJcblx0XHRcdCksXG5cdFx0XHRjcmVhdGVGb3JtU3VibWl0QnV0dG9uKFwidG9kb0Zvcm1TdWJtaXRCdG5cIilcblx0XHQpO1xuXHRcdF9kaXZDb250ZW50LmFwcGVuZChcblx0XHRcdF9idG5CYWNrVG9Qcm9qZWN0cyxcblx0XHRcdF9oMVByb2plY3RUaXRsZSxcblx0XHRcdF9kaXZUb2RvTGlzdCxcblx0XHRcdF9idG5BZGRUb2RvLFxuXHRcdFx0X2Zvcm1cblx0XHQpO1xuXHRcdHJlbG9hZFRvZG9MaXN0RGlzcGxheSgpO1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0cmVuZGVyVG9kb0xpc3RQYWdlLFxuXHRcdHJlbG9hZFRvZG9MaXN0RGlzcGxheSxcblx0XHRnZXQgZm9ybSgpIHtcblx0XHRcdHJldHVybiBfZm9ybTtcblx0XHR9LFxuXHRcdGdldCBidG5BZGRUb2RvKCkge1xuXHRcdFx0cmV0dXJuIF9idG5BZGRUb2RvO1xuXHRcdH0sXG5cdFx0Z2V0IGN1cnJQcm9qZWN0KCkge1xuXHRcdFx0cmV0dXJuIF9jdXJyUHJvamVjdDtcblx0XHR9LFxuXHR9O1xufSkoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUZvcm0oZm9ybSwgYWRkQnRuKSB7XG5cdGFkZEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVGb3JtKGZvcm0sIGFkZEJ0bikge1xuXHRmb3JtLnJlc2V0KCk7XG5cdGFkZEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcm1Qcm9wZXJ0eSh0aXRsZSwgdHlwZSwgaWQsIG5hbWUsIHBsYWNlaG9sZGVyID0gXCJcIikge1xuXHRpZiAoXG5cdFx0dHlwZW9mIHRpdGxlICE9PSBcInN0cmluZ1wiIHx8XG5cdFx0dHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIgfHxcblx0XHR0eXBlb2YgaWQgIT09IFwic3RyaW5nXCIgfHxcblx0XHR0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fFxuXHRcdHR5cGVvZiBwbGFjZWhvbGRlciAhPT0gXCJzdHJpbmdcIlxuXHQpIHtcblx0XHR0aHJvdyBcImNyZWF0ZUZvcm1Qcm9wZXJ0eSBtdXN0IGJlIGNhbGxlZCB3aXRoIHN0cmluZ3NcIjtcblx0fVxuXHRjb25zdCBfZGl2Rm9ybVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdF9kaXZGb3JtUm93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1yb3dcIik7XG5cdGNvbnN0IF9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0X2xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBgJHtpZH1gKTtcblx0X2xhYmVsLnRleHRDb250ZW50ID0gdGl0bGU7XG5cdGNvbnN0IF9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0X2lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XG5cdF9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG5cdF9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xuXHRfaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgcGxhY2Vob2xkZXIpO1xuXHRfZGl2Rm9ybVJvdy5hcHBlbmQoX2xhYmVsLCBfaW5wdXQpO1xuXHRyZXR1cm4gX2RpdkZvcm1Sb3c7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtU3VibWl0QnV0dG9uKGlkKSB7XG5cdGlmICh0eXBlb2YgaWQgIT09IFwic3RyaW5nXCIpIHtcblx0XHR0aHJvdyBcImNyZWF0ZUZvcm1TdWJtaXRCdXR0b24gbXVzdCBiZSBjYWxsZWQgd2l0aCBzdHJpbmdzXCI7XG5cdH1cblx0Y29uc3QgX2RpdkZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRfZGl2Rm9ybVJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tcm93XCIpO1xuXHRjb25zdCBfZm9ybVN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdF9mb3JtU3VibWl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG5cdF9mb3JtU3VibWl0QnRuLmlkID0gaWQ7XG5cdF9mb3JtU3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcblx0X2RpdkZvcm1Sb3cuYXBwZW5kQ2hpbGQoX2Zvcm1TdWJtaXRCdG4pO1xuXHRyZXR1cm4gX2RpdkZvcm1Sb3c7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtQ2xvc2VCdXR0b24oaWQpIHtcblx0aWYgKHR5cGVvZiBpZCAhPT0gXCJzdHJpbmdcIikge1xuXHRcdHRocm93IFwiY3JlYXRlRm9ybUNsb3NlQnV0dG9uIG11c3QgYmUgY2FsbGVkIHdpdGggc3RyaW5nc1wiO1xuXHR9XG5cblx0Y29uc3QgX2Zvcm1DbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdF9mb3JtQ2xvc2VCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblx0X2Zvcm1DbG9zZUJ0bi5pZCA9IGlkO1xuXHRfZm9ybUNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1mb3JtLWJ0blwiKTtcblx0X2Zvcm1DbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwibnZtXCI7XG5cdHJldHVybiBfZm9ybUNsb3NlQnRuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhJZCh0YWcsIGlkID0gXCJcIiwgdGV4dENvbnRlbnQgPSBcIlwiKSB7XG5cdGlmIChcblx0XHR0eXBlb2YgdGFnICE9PSBcInN0cmluZ1wiIHx8XG5cdFx0dHlwZW9mIGlkICE9PSBcInN0cmluZ1wiIHx8XG5cdFx0dHlwZW9mIHRleHRDb250ZW50ICE9PSBcInN0cmluZ1wiXG5cdCkge1xuXHRcdHRocm93IFwiY3JlYXRlRWxlbWVudFdpdGhJZCBtdXN0IGJlIGNhbGxlZCB3aXRoIHN0cmluZ3NcIjtcblx0fVxuXHRjb25zdCBfcmV0dXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXHRfcmV0dXJuLmlkID0gaWQ7XG5cdF9yZXR1cm4udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcblxuXHRyZXR1cm4gX3JldHVybjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb0NhcmRET01FbGVtZW50KHRvZG8sIGluZGV4KSB7XG5cdGNvbnN0IF9saVRvZG9DYXJkID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImxpXCIsIGB0b2RvLSR7aW5kZXh9YCk7XG5cdGNvbnN0IF9pbnB1dENoZWNrYm94ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImlucHV0XCIsIGBjaGVjay0ke2luZGV4fWApO1xuXHRfaW5wdXRDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG5cdGNvbnN0IF9wVG9kb1RpdGxlID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInBcIiwgXCJcIiwgdG9kby50aXRsZSk7XG5cdGNvbnN0IF9idG5EZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0X2J0bkRlbGV0ZVRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG8tZGVsLWJ0blwiKTtcblx0X2J0bkRlbGV0ZVRvZG8uaWQgPSBcImRlbGV0ZVRvZG9CdG5cIjtcblx0X2J0bkRlbGV0ZVRvZG8uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpbmRleCk7XG5cdF9idG5EZWxldGVUb2RvLnRleHRDb250ZW50ID0gXCJYXCI7XG5cdF9saVRvZG9DYXJkLmFwcGVuZChfaW5wdXRDaGVja2JveCwgX3BUb2RvVGl0bGUsIF9idG5EZWxldGVUb2RvKTtcblx0cmV0dXJuIF9saVRvZG9DYXJkO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b2RvTGlzdERPTUhhbmRsZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IENyZWF0ZVRvZG8gZnJvbSBcIi4vY3JlYXRlLXRvZG8uanNcIjtcbmltcG9ydCBDcmVhdGVQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0LmpzXCI7XG5pbXBvcnQgdG9kb0xpc3RET01IYW5kbGVyLCB7ZW5hYmxlRm9ybSwgZGlzYWJsZUZvcm19IGZyb20gXCIuL3JlbmRlci10b2Rvcy5qc1wiO1xuaW1wb3J0IHByb2plY3RzRE9NSGFuZGxlciBmcm9tIFwiLi9yZW5kZXItcHJvamVjdHMuanNcIjtcblxuY29uc3QgbWFpbkFwcExvZ2ljID0gKCgpID0+IHtcblx0Y29uc3QgX3Byb2plY3RzID0gW107XG5cdGNvbnN0IF9maXJzdFByb2plY3QgPSBDcmVhdGVQcm9qZWN0KFwiTXkgRmlyc3QgVG9kbyBMaXN0XCIsIFtdKTtcblx0X3Byb2plY3RzLnB1c2goX2ZpcnN0UHJvamVjdCk7XG5cdHRvZG9MaXN0RE9NSGFuZGxlci5yZW5kZXJUb2RvTGlzdFBhZ2UoX2ZpcnN0UHJvamVjdCk7XG5cdGNvbnN0IF9kaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNjb250ZW50XCIpO1xuXHRjb25zdCBfcHJldmVudERlZmF1bHRTdWJtaXNzaW9uID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH07XG5cdF9kaXZDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdHZhciBmb3JtRGF0YTtcblx0XHRzd2l0Y2ggKGUudGFyZ2V0LmlkKSB7XG5cdFx0XHRjYXNlIFwiYWRkVG9kb0J0blwiOlxuXHRcdFx0XHRlbmFibGVGb3JtKHRvZG9MaXN0RE9NSGFuZGxlci5mb3JtLCB0b2RvTGlzdERPTUhhbmRsZXIuYnRuQWRkVG9kbyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImNsb3NlVG9kb0Zvcm1CdG5cIjpcblx0XHRcdFx0ZGlzYWJsZUZvcm0odG9kb0xpc3RET01IYW5kbGVyLmZvcm0sIHRvZG9MaXN0RE9NSGFuZGxlci5idG5BZGRUb2RvKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiYWRkUHJvamVjdEJ0blwiOlxuXHRcdFx0XHRlbmFibGVGb3JtKHByb2plY3RzRE9NSGFuZGxlci5mb3JtLCBwcm9qZWN0c0RPTUhhbmRsZXIuYnRuQWRkUHJvamVjdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImNsb3NlUHJvamVjdEZvcm1CdG5cIjpcblx0XHRcdFx0ZGlzYWJsZUZvcm0ocHJvamVjdHNET01IYW5kbGVyLmZvcm0sIHByb2plY3RzRE9NSGFuZGxlci5idG5BZGRQcm9qZWN0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiYmFja1RvUHJvamVjdHNCdG5cIjpcblx0XHRcdFx0cHJvamVjdHNET01IYW5kbGVyLnJlbmRlclByb2plY3RzUGFnZShfcHJvamVjdHMpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJ0b2RvRm9ybVN1Ym1pdEJ0blwiOlxuXHRcdFx0XHR0b2RvTGlzdERPTUhhbmRsZXIuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIF9wcmV2ZW50RGVmYXVsdFN1Ym1pc3Npb24oZSkpO1xuXHRcdFx0XHRmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0b2RvTGlzdERPTUhhbmRsZXIuZm9ybSk7XG5cdFx0XHRcdHRvZG9MaXN0RE9NSGFuZGxlci5mb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgX3ByZXZlbnREZWZhdWx0U3VibWlzc2lvbihlKSk7XG5cdFx0XHRcdGFkZFRvZG9Ub1Byb2plY3QoZm9ybURhdGEpO1xuXHRcdFx0XHR0b2RvTGlzdERPTUhhbmRsZXIucmVsb2FkVG9kb0xpc3REaXNwbGF5KCk7XG5cdFx0XHRcdGRpc2FibGVGb3JtKHRvZG9MaXN0RE9NSGFuZGxlci5mb3JtLCB0b2RvTGlzdERPTUhhbmRsZXIuYnRuQWRkVG9kbyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInByb2plY3RGb3JtU3VibWl0QnRuXCI6XG5cdFx0XHRcdHByb2plY3RzRE9NSGFuZGxlci5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgX3ByZXZlbnREZWZhdWx0U3VibWlzc2lvbihlKSk7XG5cdFx0XHRcdGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHByb2plY3RzRE9NSGFuZGxlci5mb3JtKTtcblx0XHRcdFx0cHJvamVjdHNET01IYW5kbGVyLmZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBfcHJldmVudERlZmF1bHRTdWJtaXNzaW9uKGUpKTtcblx0XHRcdFx0Y29uc3QgX25ld1Byb2plY3QgPSBDcmVhdGVQcm9qZWN0KGZvcm1EYXRhLmdldChcInRpdGxlX25hbWVcIikpO1xuXHRcdFx0XHRfcHJvamVjdHMucHVzaChfbmV3UHJvamVjdCk7XG5cdFx0XHRcdHByb2plY3RzRE9NSGFuZGxlci5yZWxvYWRQcm9qZWN0TGlzdERpc3BsYXkoKTtcblx0XHRcdFx0ZGlzYWJsZUZvcm0ocHJvamVjdHNET01IYW5kbGVyLmZvcm0sIHByb2plY3RzRE9NSGFuZGxlci5idG5BZGRQcm9qZWN0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiZGVsZXRlVG9kb0J0blwiOlxuXHRcdFx0XHR0b2RvTGlzdERPTUhhbmRsZXIuY3VyclByb2plY3QucmVtb3ZlVG9kbyhOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5pbmRleCkpO1xuXHRcdFx0XHR0b2RvTGlzdERPTUhhbmRsZXIucmVsb2FkVG9kb0xpc3REaXNwbGF5KCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm9wZW5Qcm9qZWN0XCI6XG5cdFx0XHRcdHRvZG9MaXN0RE9NSGFuZGxlci5yZW5kZXJUb2RvTGlzdFBhZ2UoX3Byb2plY3RzW2UudGFyZ2V0LmRhdGFzZXQuaW5kZXhdKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH0pO1xufSkoKTtcblxuZnVuY3Rpb24gYWRkVG9kb1RvUHJvamVjdChmb3JtRGF0YSkge1xuXHRjb25zdCBfbmV3VG9kbyA9IENyZWF0ZVRvZG8oXG5cdFx0Zm9ybURhdGEuZ2V0KFwidGl0bGVfbmFtZVwiKSxcblx0XHRmb3JtRGF0YS5nZXQoXCJkZXNjX3RleHRcIilcblx0KTtcblx0dG9kb0xpc3RET01IYW5kbGVyLmN1cnJQcm9qZWN0LmFkZFRvZG8oX25ld1RvZG8pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
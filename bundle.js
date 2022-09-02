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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\nbody,\nhtml {\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n}\n\ndiv#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\tposition: relative;\n}\n\ndiv#content button#back-to-projects-btn {\n\tposition: absolute;\n\ttop: 5px;\n\tleft: 5px;\n\tpadding: 10px 4px;\n}\n\ndiv#todo-list ul,\ndiv#project-list ul {\n\tpadding: 0;\n\tmargin: 0;\n\tlist-style-type: none;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\ndiv#todo-list ul li,\ndiv#project-list ul li {\n\tdisplay: flex;\n\twidth: 400px;\n\tborder: 1px solid #d6d9dc;\n\tgap: 5px;\n}\n\ndiv#project-list ul li {\n\tjustify-content: center;\n}\n\ndiv#todo-list ul li p {\n\tmargin: 0;\n\tmargin-right: auto;\n}\n\ndiv#project-list h3 {\n\tmargin: 0;\n}\n\ndiv#todo-list ul li button.todo-del-btn {\n\tcolor: red;\n\tfont-weight: bold;\n}\n\n.add-todo-form {\n\tbackground-color: #f6f7f8;\n\tborder: 1px solid #d6d9dc;\n\tborder-radius: 3px;\n\n\tpadding: 50px 50px 30px 30px;\n\tmargin: 0 0 20px 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tposition: relative;\n}\n\n#closeFormBtn {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 5px;\n}\n\n.form-row {\n\tmargin-bottom: 20px;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n}\n\n.form-row label {\n\ttext-align: right;\n\twidth: 100px;\n\tpadding-right: 20px;\n}\n\n.form-row input[type=\"text\"],\n.form-row input[type=\"number\"] {\n\tbackground-color: #ffffff;\n\tborder: 1px solid #d6d9dc;\n\tborder-radius: 3px;\n\tpadding: 7px;\n\tfont-size: 14px;\n}\n\n.form-row button {\n\tmargin-left: 100px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,SAAS;IACT,UAAU;IACV,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;CACtB,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,QAAQ;CACR,SAAS;CACT,iBAAiB;AAClB;;AAEA;;CAEC,UAAU;CACV,SAAS;CACT,qBAAqB;CACrB,aAAa;CACb,sBAAsB;AACvB;;AAEA;;CAEC,aAAa;CACb,YAAY;CACZ,yBAAyB;CACzB,QAAQ;AACT;;AAEA;CACC,uBAAuB;AACxB;;AAEA;CACC,SAAS;CACT,kBAAkB;AACnB;;AAEA;CACC,SAAS;AACV;;AAEA;CACC,UAAU;CACV,iBAAiB;AAClB;;AAEA;CACC,yBAAyB;CACzB,yBAAyB;CACzB,kBAAkB;;CAElB,4BAA4B;CAC5B,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,QAAQ;CACR,UAAU;AACX;;AAEA;CACC,mBAAmB;CACnB,aAAa;CACb,2BAA2B;CAC3B,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;CACjB,YAAY;CACZ,mBAAmB;AACpB;;AAEA;;CAEC,yBAAyB;CACzB,yBAAyB;CACzB,kBAAkB;CAClB,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,kBAAkB;AACnB","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\nbody,\nhtml {\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n}\n\ndiv#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\tposition: relative;\n}\n\ndiv#content button#back-to-projects-btn {\n\tposition: absolute;\n\ttop: 5px;\n\tleft: 5px;\n\tpadding: 10px 4px;\n}\n\ndiv#todo-list ul,\ndiv#project-list ul {\n\tpadding: 0;\n\tmargin: 0;\n\tlist-style-type: none;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\ndiv#todo-list ul li,\ndiv#project-list ul li {\n\tdisplay: flex;\n\twidth: 400px;\n\tborder: 1px solid #d6d9dc;\n\tgap: 5px;\n}\n\ndiv#project-list ul li {\n\tjustify-content: center;\n}\n\ndiv#todo-list ul li p {\n\tmargin: 0;\n\tmargin-right: auto;\n}\n\ndiv#project-list h3 {\n\tmargin: 0;\n}\n\ndiv#todo-list ul li button.todo-del-btn {\n\tcolor: red;\n\tfont-weight: bold;\n}\n\n.add-todo-form {\n\tbackground-color: #f6f7f8;\n\tborder: 1px solid #d6d9dc;\n\tborder-radius: 3px;\n\n\tpadding: 50px 50px 30px 30px;\n\tmargin: 0 0 20px 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tposition: relative;\n}\n\n#closeFormBtn {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 5px;\n}\n\n.form-row {\n\tmargin-bottom: 20px;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n}\n\n.form-row label {\n\ttext-align: right;\n\twidth: 100px;\n\tpadding-right: 20px;\n}\n\n.form-row input[type=\"text\"],\n.form-row input[type=\"number\"] {\n\tbackground-color: #ffffff;\n\tborder: 1px solid #d6d9dc;\n\tborder-radius: 3px;\n\tpadding: 7px;\n\tfont-size: 14px;\n}\n\n.form-row button {\n\tmargin-left: 100px;\n}"],"sourceRoot":""}]);
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
const CreateProject = (title, listOfTodos) => {
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
		_h1PageTitle = (0,_render_todos_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("h1", "", "Your Projects");
		_divProjectList = (0,_render_todos_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("div", "project-list");
		divContent.append(_h1PageTitle, _divProjectList);
	};

	return {
		renderProjectsPage,
        reloadProjectListDisplay,
	};
})();

function createProjectCardDOMElement(project, index) {
	const _liProjectCard = (0,_render_todos_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("li", `project-${index}`);
	const _h3TodoTitle = (0,_render_todos_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("h3", "", project.title);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

	const enableForm = () => {
		_btnAddTodo.style.display = "none";
		_form.style.display = "block";
	};

	const disableForm = () => {
		_form.reset();
		_btnAddTodo.style.display = "block";
		_form.style.display = "none";
	};

	const reloadTodoListDisplay = () => {
		if (!_currProject) throw "A project has not been loaded on the page yet";
		_divTodoList.innerHTML = "<ul></ul>"; // Clear the todo list element of its children

		// Then re-populate the todo list with todo card elements
		_currProject.listOfTodos.forEach((todo, index) => {
			// The first child of the todo list div element is the unordered list
			_divTodoList.firstChild.appendChild(createTodoCardDOMElement(todo, index));
		});
	};

	const renderTodoListPage = (project) => {
		_currProject = project;
		_btnBackToProjects = createElementWithId("button", "back-to-projects-btn", "<- To Projects");
		// Create h1 element that displays project title
		_h1ProjectTitle = createElementWithId(
			"h1",
			"",
			`Project: ${project.title}`
		);
		// Create div element that holds todo list
		_divTodoList = createElementWithId("div", "todo-list");
		// Append button that reveals a form to create todo item
		_btnAddTodo = createElementWithId("button", "add-todo-btn", "Add Todo");
		_form = document.createElement("form");
		_form.setAttribute("action", "");
		_form.setAttribute("method", "get");
		_form.setAttribute("class", "add-todo-form");
		_form.setAttribute("style", "display: none");
		_btnAddTodo.addEventListener("click", (e) => {
			enableForm();
		});
		_form.append(
			createTodoFormCloseButton(_form, _btnAddTodo),
			createTodoFormProperty(
				"Title",
				"text",
				"titleName",
				"title_name",
				"Todo Title"
			),
			createTodoFormProperty(
				"Description",
				"text",
				"description",
				"desc_text",
				"Todo Description"
			),
			createTodoFormSubmitButton()
		);
		_divContent.append(_btnBackToProjects, _h1ProjectTitle, _divTodoList, _btnAddTodo, _form);
	};

	return {
		renderTodoListPage,
		enableForm,
		disableForm,
		reloadTodoListDisplay,
		get form() {
			return _form;
		},
		get currProject() {
			return _currProject;
		},
	};
})();

function createTodoFormProperty(title, type, id, name, placeholder = "") {
	if (
		typeof title !== "string" ||
		typeof type !== "string" ||
		typeof id !== "string" ||
		typeof name !== "string" ||
		typeof placeholder !== "string"
	) {
		throw "createTodoFormProperty must be called with strings";
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

function createTodoFormSubmitButton() {
	const _divFormRow = document.createElement("div");
	_divFormRow.setAttribute("class", "form-row");
	const _formSubmitBtn = document.createElement("button");
	_formSubmitBtn.setAttribute("type", "submit");
	_formSubmitBtn.textContent = "Submit";
	_divFormRow.appendChild(_formSubmitBtn);
	return _divFormRow;
}

function createTodoFormCloseButton() {
	const _formCloseBtn = document.createElement("button");
	_formCloseBtn.setAttribute("type", "button");
	_formCloseBtn.id = "closeFormBtn";
	_formCloseBtn.textContent = "nvm";
	_formCloseBtn.addEventListener("click", (e) => {
		todoListDOMHandler.disableForm();
	});
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
	_btnDeleteTodo.addEventListener("click", (e) => {
		todoListDOMHandler.currProject.removeTodo(index);
		todoListDOMHandler.reloadTodoListDisplay();
	});
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
	const _btnBackToProjects = document.querySelector(
		"button#back-to-projects-btn"
	);
	_btnBackToProjects.addEventListener("click", (e) => {
		const divContent = document.querySelector("div#content");
		divContent.innerHTML = "";
		_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].renderProjectsPage(_projects);
		_render_projects_js__WEBPACK_IMPORTED_MODULE_4__["default"].reloadProjectListDisplay();
	});
	// Implement form submit button
	_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].form.addEventListener("submit", (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		addTodoToProject(formData);
		_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].reloadTodoListDisplay();
		_render_todos_js__WEBPACK_IMPORTED_MODULE_3__["default"].disableForm();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS10b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXItcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci10b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmRpdiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmRpdiNjb250ZW50IGJ1dHRvbiNiYWNrLXRvLXByb2plY3RzLWJ0biB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdGxlZnQ6IDVweDtcXG5cXHRwYWRkaW5nOiAxMHB4IDRweDtcXG59XFxuXFxuZGl2I3RvZG8tbGlzdCB1bCxcXG5kaXYjcHJvamVjdC1saXN0IHVsIHtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG1hcmdpbjogMDtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5kaXYjdG9kby1saXN0IHVsIGxpLFxcbmRpdiNwcm9qZWN0LWxpc3QgdWwgbGkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0d2lkdGg6IDQwMHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkNmQ5ZGM7XFxuXFx0Z2FwOiA1cHg7XFxufVxcblxcbmRpdiNwcm9qZWN0LWxpc3QgdWwgbGkge1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXYjdG9kby1saXN0IHVsIGxpIHAge1xcblxcdG1hcmdpbjogMDtcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbmRpdiNwcm9qZWN0LWxpc3QgaDMge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuZGl2I3RvZG8tbGlzdCB1bCBsaSBidXR0b24udG9kby1kZWwtYnRuIHtcXG5cXHRjb2xvcjogcmVkO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdmODtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZDZkOWRjO1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXG5cXHRwYWRkaW5nOiA1MHB4IDUwcHggMzBweCAzMHB4O1xcblxcdG1hcmdpbjogMCAwIDIwcHggMDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jY2xvc2VGb3JtQnRuIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cHg7XFxuXFx0cmlnaHQ6IDVweDtcXG59XFxuXFxuLmZvcm0tcm93IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLXJvdyBsYWJlbCB7XFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5mb3JtLXJvdyBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuLmZvcm0tcm93IGlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkNmQ5ZGM7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcblxcdHBhZGRpbmc6IDdweDtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5mb3JtLXJvdyBidXR0b24ge1xcblxcdG1hcmdpbi1sZWZ0OiAxMDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7Q0FDdEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixTQUFTO0NBQ1QsaUJBQWlCO0FBQ2xCOztBQUVBOztDQUVDLFVBQVU7Q0FDVixTQUFTO0NBQ1QscUJBQXFCO0NBQ3JCLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7O0NBRUMsYUFBYTtDQUNiLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsUUFBUTtBQUNUOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsU0FBUztDQUNULGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFNBQVM7QUFDVjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIseUJBQXlCO0NBQ3pCLGtCQUFrQjs7Q0FFbEIsNEJBQTRCO0NBQzVCLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFVBQVU7QUFDWDs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsMkJBQTJCO0NBQzNCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osbUJBQW1CO0FBQ3BCOztBQUVBOztDQUVDLHlCQUF5QjtDQUN6Qix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuZGl2I2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuZGl2I2NvbnRlbnQgYnV0dG9uI2JhY2stdG8tcHJvamVjdHMtYnRuIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cHg7XFxuXFx0bGVmdDogNXB4O1xcblxcdHBhZGRpbmc6IDEwcHggNHB4O1xcbn1cXG5cXG5kaXYjdG9kby1saXN0IHVsLFxcbmRpdiNwcm9qZWN0LWxpc3QgdWwge1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmRpdiN0b2RvLWxpc3QgdWwgbGksXFxuZGl2I3Byb2plY3QtbGlzdCB1bCBsaSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogNDAwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2Q2ZDlkYztcXG5cXHRnYXA6IDVweDtcXG59XFxuXFxuZGl2I3Byb2plY3QtbGlzdCB1bCBsaSB7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmRpdiN0b2RvLWxpc3QgdWwgbGkgcCB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuZGl2I3Byb2plY3QtbGlzdCBoMyB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG5kaXYjdG9kby1saXN0IHVsIGxpIGJ1dHRvbi50b2RvLWRlbC1idG4ge1xcblxcdGNvbG9yOiByZWQ7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hZGQtdG9kby1mb3JtIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmN2Y4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkNmQ5ZGM7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcblxcblxcdHBhZGRpbmc6IDUwcHggNTBweCAzMHB4IDMwcHg7XFxuXFx0bWFyZ2luOiAwIDAgMjBweCAwO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNjbG9zZUZvcm1CdG4ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVweDtcXG5cXHRyaWdodDogNXB4O1xcbn1cXG5cXG4uZm9ybS1yb3cge1xcblxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tcm93IGxhYmVsIHtcXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXG5cXHR3aWR0aDogMTAwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuLmZvcm0tcm93IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG4uZm9ybS1yb3cgaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl0ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2Q2ZDlkYztcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxuXFx0cGFkZGluZzogN3B4O1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmZvcm0tcm93IGJ1dHRvbiB7XFxuXFx0bWFyZ2luLWxlZnQ6IDEwMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IENyZWF0ZVByb2plY3QgPSAodGl0bGUsIGxpc3RPZlRvZG9zKSA9PiB7XG5cdGlmICghQXJyYXkuaXNBcnJheShsaXN0T2ZUb2RvcykpIHtcblx0XHR0aHJvdyBcIlByb2plY3QgbXVzdCBiZSBjcmVhdGVkIHdpdGggYSBwYXNzZWQtaW4gYXJyYXlcIjtcblx0fVxuXG5cdGNvbnN0IF9pc1ZhbGlkVGl0bGUgPSAodGl0bGUpID0+IHtcblx0XHRpZiAodHlwZW9mIHRpdGxlICE9PSBcInN0cmluZ1wiIHx8IHRpdGxlLmxlbmd0aCA8PSAwKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblx0aWYgKCFfaXNWYWxpZFRpdGxlKHRpdGxlKSkge1xuXHRcdHRocm93IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgc3RyaW5nIGlucHV0IGZvciB0aGUgcHJvamVjdCB0aXRsZVwiO1xuXHR9XG5cblx0dmFyIF90aXRsZSA9IHRpdGxlO1xuXHR2YXIgX2xpc3RPZlRvZG9zID0gbGlzdE9mVG9kb3M7XG5cblx0Y29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG5cdFx0X2xpc3RPZlRvZG9zLnB1c2godG9kbyk7XG5cdH07XG5cblx0Y29uc3QgcmVtb3ZlVG9kbyA9IChpbmRleCkgPT4ge1xuXHRcdF9saXN0T2ZUb2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRnZXQgdGl0bGUoKSB7XG5cdFx0XHRyZXR1cm4gX3RpdGxlO1xuXHRcdH0sXG5cdFx0Z2V0IGxlbmd0aCgpIHtcblx0XHRcdHJldHVybiBfbGlzdE9mVG9kb3MubGVuZ3RoO1xuXHRcdH0sXG5cdFx0Z2V0IGxpc3RPZlRvZG9zKCkge1xuXHRcdFx0cmV0dXJuIF9saXN0T2ZUb2Rvcztcblx0XHR9LFxuXHRcdHNldCBsaXN0T2ZUb2Rvcyh0b2RvTGlzdCkge1xuXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KHRvZG9MaXN0KSkge1xuXHRcdFx0XHR0aHJvdyBcIlNldHRpbmcgdHlwZSBtdXN0IGJlIGFuIGFycmF5XCI7XG5cdFx0XHR9XG5cblx0XHRcdF9saXN0T2ZUb2RvcyA9IHRvZG9MaXN0O1xuXHRcdH0sXG5cdFx0YWRkVG9kbyxcblx0XHRyZW1vdmVUb2RvLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUHJvamVjdDtcbiIsImNvbnN0IENyZWF0ZVRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uID0gXCJObyBkZXNjcmlwdGlvblwiKSA9PiB7XG4gICAgY29uc3QgX2lzVmFsaWRUaXRsZSA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHRpdGxlICE9PSBcInN0cmluZ1wiIHx8IHRpdGxlLmxlbmd0aCA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IF9pc1ZhbGlkRGVzY3JpcHRpb24gPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXNjcmlwdGlvbiAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIV9pc1ZhbGlkVGl0bGUodGl0bGUpKSB7XG4gICAgICAgIHRocm93IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgc3RyaW5nIGlucHV0IGZvciB0aGUgdG9kbyB0aXRsZSFcIjtcbiAgICB9XG4gICAgaWYgKCFfaXNWYWxpZERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSkge1xuICAgICAgICB0aHJvdyBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIHN0cmluZyBpbnB1dCBmb3IgdGhlIHRvZG8gZGVzY3JpcHRpb24hXCI7XG4gICAgfVxuICAgIFxuICAgIHZhciBfdGl0bGUgPSB0aXRsZTtcbiAgICB2YXIgX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RpdGxlO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gX2Rlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVRvZG87IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFdpdGhJZCB9IGZyb20gXCIuL3JlbmRlci10b2Rvcy5qc1wiO1xuXG5jb25zdCBwcm9qZWN0c0RPTUhhbmRsZXIgPSAoKCkgPT4ge1xuXHR2YXIgX2gxUGFnZVRpdGxlO1xuXHR2YXIgX2RpdlByb2plY3RMaXN0O1xuXHR2YXIgX3Byb2plY3RzO1xuXG5cdGNvbnN0IHJlbG9hZFByb2plY3RMaXN0RGlzcGxheSA9ICgpID0+IHtcblx0XHRfZGl2UHJvamVjdExpc3QuaW5uZXJIVE1MID0gXCI8dWw+PC91bD5cIjsgLy8gQ2xlYXIgdGhlIHRvZG8gbGlzdCBlbGVtZW50IG9mIGl0cyBjaGlsZHJlblxuXG5cdFx0Ly8gVGhlbiByZS1wb3B1bGF0ZSB0aGUgdG9kbyBsaXN0IHdpdGggdG9kbyBjYXJkIGVsZW1lbnRzXG5cdFx0X3Byb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG5cdFx0XHQvLyBUaGUgZmlyc3QgY2hpbGQgb2YgdGhlIHRvZG8gbGlzdCBkaXYgZWxlbWVudCBpcyB0aGUgdW5vcmRlcmVkIGxpc3Rcblx0XHRcdF9kaXZQcm9qZWN0TGlzdC5maXJzdENoaWxkLmFwcGVuZENoaWxkKFxuXHRcdFx0XHRjcmVhdGVQcm9qZWN0Q2FyZERPTUVsZW1lbnQocHJvamVjdCwgaW5kZXgpXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlbmRlclByb2plY3RzUGFnZSA9IChwcm9qZWN0cykgPT4ge1xuXHRcdF9wcm9qZWN0cyA9IHByb2plY3RzO1xuXHRcdGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2NvbnRlbnRcIik7XG5cdFx0X2gxUGFnZVRpdGxlID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImgxXCIsIFwiXCIsIFwiWW91ciBQcm9qZWN0c1wiKTtcblx0XHRfZGl2UHJvamVjdExpc3QgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIsIFwicHJvamVjdC1saXN0XCIpO1xuXHRcdGRpdkNvbnRlbnQuYXBwZW5kKF9oMVBhZ2VUaXRsZSwgX2RpdlByb2plY3RMaXN0KTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdHJlbmRlclByb2plY3RzUGFnZSxcbiAgICAgICAgcmVsb2FkUHJvamVjdExpc3REaXNwbGF5LFxuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENhcmRET01FbGVtZW50KHByb2plY3QsIGluZGV4KSB7XG5cdGNvbnN0IF9saVByb2plY3RDYXJkID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImxpXCIsIGBwcm9qZWN0LSR7aW5kZXh9YCk7XG5cdGNvbnN0IF9oM1RvZG9UaXRsZSA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJoM1wiLCBcIlwiLCBwcm9qZWN0LnRpdGxlKTtcblx0X2xpUHJvamVjdENhcmQuYXBwZW5kKF9oM1RvZG9UaXRsZSk7XG5cdHJldHVybiBfbGlQcm9qZWN0Q2FyZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHNET01IYW5kbGVyO1xuIiwiY29uc3QgdG9kb0xpc3RET01IYW5kbGVyID0gKCgpID0+IHtcblx0Y29uc3QgX2RpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2NvbnRlbnRcIik7XG5cblx0aWYgKCFfZGl2Q29udGVudCkge1xuXHRcdF9kaXZDb250ZW50ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBcImNvbnRlbnRcIik7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChfZGl2Q29udGVudCk7XG5cdH1cblx0dmFyIF9idG5CYWNrVG9Qcm9qZWN0cztcblx0dmFyIF9oMVByb2plY3RUaXRsZTtcblx0dmFyIF9kaXZUb2RvTGlzdDtcblx0dmFyIF9idG5BZGRUb2RvO1xuXHR2YXIgX2Zvcm07XG5cdHZhciBfY3VyclByb2plY3Q7XG5cblx0Y29uc3QgZW5hYmxlRm9ybSA9ICgpID0+IHtcblx0XHRfYnRuQWRkVG9kby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0X2Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0fTtcblxuXHRjb25zdCBkaXNhYmxlRm9ybSA9ICgpID0+IHtcblx0XHRfZm9ybS5yZXNldCgpO1xuXHRcdF9idG5BZGRUb2RvLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0X2Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHR9O1xuXG5cdGNvbnN0IHJlbG9hZFRvZG9MaXN0RGlzcGxheSA9ICgpID0+IHtcblx0XHRpZiAoIV9jdXJyUHJvamVjdCkgdGhyb3cgXCJBIHByb2plY3QgaGFzIG5vdCBiZWVuIGxvYWRlZCBvbiB0aGUgcGFnZSB5ZXRcIjtcblx0XHRfZGl2VG9kb0xpc3QuaW5uZXJIVE1MID0gXCI8dWw+PC91bD5cIjsgLy8gQ2xlYXIgdGhlIHRvZG8gbGlzdCBlbGVtZW50IG9mIGl0cyBjaGlsZHJlblxuXG5cdFx0Ly8gVGhlbiByZS1wb3B1bGF0ZSB0aGUgdG9kbyBsaXN0IHdpdGggdG9kbyBjYXJkIGVsZW1lbnRzXG5cdFx0X2N1cnJQcm9qZWN0Lmxpc3RPZlRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG5cdFx0XHQvLyBUaGUgZmlyc3QgY2hpbGQgb2YgdGhlIHRvZG8gbGlzdCBkaXYgZWxlbWVudCBpcyB0aGUgdW5vcmRlcmVkIGxpc3Rcblx0XHRcdF9kaXZUb2RvTGlzdC5maXJzdENoaWxkLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9DYXJkRE9NRWxlbWVudCh0b2RvLCBpbmRleCkpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlbmRlclRvZG9MaXN0UGFnZSA9IChwcm9qZWN0KSA9PiB7XG5cdFx0X2N1cnJQcm9qZWN0ID0gcHJvamVjdDtcblx0XHRfYnRuQmFja1RvUHJvamVjdHMgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiYnV0dG9uXCIsIFwiYmFjay10by1wcm9qZWN0cy1idG5cIiwgXCI8LSBUbyBQcm9qZWN0c1wiKTtcblx0XHQvLyBDcmVhdGUgaDEgZWxlbWVudCB0aGF0IGRpc3BsYXlzIHByb2plY3QgdGl0bGVcblx0XHRfaDFQcm9qZWN0VGl0bGUgPSBjcmVhdGVFbGVtZW50V2l0aElkKFxuXHRcdFx0XCJoMVwiLFxuXHRcdFx0XCJcIixcblx0XHRcdGBQcm9qZWN0OiAke3Byb2plY3QudGl0bGV9YFxuXHRcdCk7XG5cdFx0Ly8gQ3JlYXRlIGRpdiBlbGVtZW50IHRoYXQgaG9sZHMgdG9kbyBsaXN0XG5cdFx0X2RpdlRvZG9MaXN0ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBcInRvZG8tbGlzdFwiKTtcblx0XHQvLyBBcHBlbmQgYnV0dG9uIHRoYXQgcmV2ZWFscyBhIGZvcm0gdG8gY3JlYXRlIHRvZG8gaXRlbVxuXHRcdF9idG5BZGRUb2RvID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImJ1dHRvblwiLCBcImFkZC10b2RvLWJ0blwiLCBcIkFkZCBUb2RvXCIpO1xuXHRcdF9mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cdFx0X2Zvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuXHRcdF9mb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcImdldFwiKTtcblx0XHRfZm9ybS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFkZC10b2RvLWZvcm1cIik7XG5cdFx0X2Zvcm0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lXCIpO1xuXHRcdF9idG5BZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0ZW5hYmxlRm9ybSgpO1xuXHRcdH0pO1xuXHRcdF9mb3JtLmFwcGVuZChcblx0XHRcdGNyZWF0ZVRvZG9Gb3JtQ2xvc2VCdXR0b24oX2Zvcm0sIF9idG5BZGRUb2RvKSxcblx0XHRcdGNyZWF0ZVRvZG9Gb3JtUHJvcGVydHkoXG5cdFx0XHRcdFwiVGl0bGVcIixcblx0XHRcdFx0XCJ0ZXh0XCIsXG5cdFx0XHRcdFwidGl0bGVOYW1lXCIsXG5cdFx0XHRcdFwidGl0bGVfbmFtZVwiLFxuXHRcdFx0XHRcIlRvZG8gVGl0bGVcIlxuXHRcdFx0KSxcblx0XHRcdGNyZWF0ZVRvZG9Gb3JtUHJvcGVydHkoXG5cdFx0XHRcdFwiRGVzY3JpcHRpb25cIixcblx0XHRcdFx0XCJ0ZXh0XCIsXG5cdFx0XHRcdFwiZGVzY3JpcHRpb25cIixcblx0XHRcdFx0XCJkZXNjX3RleHRcIixcblx0XHRcdFx0XCJUb2RvIERlc2NyaXB0aW9uXCJcblx0XHRcdCksXG5cdFx0XHRjcmVhdGVUb2RvRm9ybVN1Ym1pdEJ1dHRvbigpXG5cdFx0KTtcblx0XHRfZGl2Q29udGVudC5hcHBlbmQoX2J0bkJhY2tUb1Byb2plY3RzLCBfaDFQcm9qZWN0VGl0bGUsIF9kaXZUb2RvTGlzdCwgX2J0bkFkZFRvZG8sIF9mb3JtKTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdHJlbmRlclRvZG9MaXN0UGFnZSxcblx0XHRlbmFibGVGb3JtLFxuXHRcdGRpc2FibGVGb3JtLFxuXHRcdHJlbG9hZFRvZG9MaXN0RGlzcGxheSxcblx0XHRnZXQgZm9ybSgpIHtcblx0XHRcdHJldHVybiBfZm9ybTtcblx0XHR9LFxuXHRcdGdldCBjdXJyUHJvamVjdCgpIHtcblx0XHRcdHJldHVybiBfY3VyclByb2plY3Q7XG5cdFx0fSxcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9Gb3JtUHJvcGVydHkodGl0bGUsIHR5cGUsIGlkLCBuYW1lLCBwbGFjZWhvbGRlciA9IFwiXCIpIHtcblx0aWYgKFxuXHRcdHR5cGVvZiB0aXRsZSAhPT0gXCJzdHJpbmdcIiB8fFxuXHRcdHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiIHx8XG5cdFx0dHlwZW9mIGlkICE9PSBcInN0cmluZ1wiIHx8XG5cdFx0dHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHxcblx0XHR0eXBlb2YgcGxhY2Vob2xkZXIgIT09IFwic3RyaW5nXCJcblx0KSB7XG5cdFx0dGhyb3cgXCJjcmVhdGVUb2RvRm9ybVByb3BlcnR5IG11c3QgYmUgY2FsbGVkIHdpdGggc3RyaW5nc1wiO1xuXHR9XG5cdGNvbnN0IF9kaXZGb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0X2RpdkZvcm1Sb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLXJvd1wiKTtcblx0Y29uc3QgX2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRfbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGAke2lkfWApO1xuXHRfbGFiZWwudGV4dENvbnRlbnQgPSB0aXRsZTtcblx0Y29uc3QgX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRfaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcblx0X2lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcblx0X2lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgbmFtZSk7XG5cdF9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBwbGFjZWhvbGRlcik7XG5cdF9kaXZGb3JtUm93LmFwcGVuZChfbGFiZWwsIF9pbnB1dCk7XG5cdHJldHVybiBfZGl2Rm9ybVJvdztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb0Zvcm1TdWJtaXRCdXR0b24oKSB7XG5cdGNvbnN0IF9kaXZGb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0X2RpdkZvcm1Sb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLXJvd1wiKTtcblx0Y29uc3QgX2Zvcm1TdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRfZm9ybVN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuXHRfZm9ybVN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG5cdF9kaXZGb3JtUm93LmFwcGVuZENoaWxkKF9mb3JtU3VibWl0QnRuKTtcblx0cmV0dXJuIF9kaXZGb3JtUm93O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvRm9ybUNsb3NlQnV0dG9uKCkge1xuXHRjb25zdCBfZm9ybUNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0X2Zvcm1DbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHRfZm9ybUNsb3NlQnRuLmlkID0gXCJjbG9zZUZvcm1CdG5cIjtcblx0X2Zvcm1DbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwibnZtXCI7XG5cdF9mb3JtQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0dG9kb0xpc3RET01IYW5kbGVyLmRpc2FibGVGb3JtKCk7XG5cdH0pO1xuXHRyZXR1cm4gX2Zvcm1DbG9zZUJ0bjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoSWQodGFnLCBpZCA9IFwiXCIsIHRleHRDb250ZW50ID0gXCJcIikge1xuXHRpZiAoXG5cdFx0dHlwZW9mIHRhZyAhPT0gXCJzdHJpbmdcIiB8fFxuXHRcdHR5cGVvZiBpZCAhPT0gXCJzdHJpbmdcIiB8fFxuXHRcdHR5cGVvZiB0ZXh0Q29udGVudCAhPT0gXCJzdHJpbmdcIlxuXHQpIHtcblx0XHR0aHJvdyBcImNyZWF0ZUVsZW1lbnRXaXRoSWQgbXVzdCBiZSBjYWxsZWQgd2l0aCBzdHJpbmdzXCI7XG5cdH1cblx0Y29uc3QgX3JldHVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblx0X3JldHVybi5pZCA9IGlkO1xuXHRfcmV0dXJuLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG5cblx0cmV0dXJuIF9yZXR1cm47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9DYXJkRE9NRWxlbWVudCh0b2RvLCBpbmRleCkge1xuXHRjb25zdCBfbGlUb2RvQ2FyZCA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJsaVwiLCBgdG9kby0ke2luZGV4fWApO1xuXHRjb25zdCBfaW5wdXRDaGVja2JveCA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJpbnB1dFwiLCBgY2hlY2stJHtpbmRleH1gKTtcblx0X2lucHV0Q2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuXHRjb25zdCBfcFRvZG9UaXRsZSA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJwXCIsIFwiXCIsIHRvZG8udGl0bGUpO1xuXHRjb25zdCBfYnRuRGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdF9idG5EZWxldGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlbC1idG5cIik7XG5cdF9idG5EZWxldGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdHRvZG9MaXN0RE9NSGFuZGxlci5jdXJyUHJvamVjdC5yZW1vdmVUb2RvKGluZGV4KTtcblx0XHR0b2RvTGlzdERPTUhhbmRsZXIucmVsb2FkVG9kb0xpc3REaXNwbGF5KCk7XG5cdH0pO1xuXHRfYnRuRGVsZXRlVG9kby50ZXh0Q29udGVudCA9IFwiWFwiO1xuXHRfbGlUb2RvQ2FyZC5hcHBlbmQoX2lucHV0Q2hlY2tib3gsIF9wVG9kb1RpdGxlLCBfYnRuRGVsZXRlVG9kbyk7XG5cdHJldHVybiBfbGlUb2RvQ2FyZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9kb0xpc3RET01IYW5kbGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBDcmVhdGVUb2RvIGZyb20gXCIuL2NyZWF0ZS10b2RvLmpzXCI7XG5pbXBvcnQgQ3JlYXRlUHJvamVjdCBmcm9tIFwiLi9jcmVhdGUtcHJvamVjdC5qc1wiO1xuaW1wb3J0IHRvZG9MaXN0RE9NSGFuZGxlciBmcm9tIFwiLi9yZW5kZXItdG9kb3MuanNcIjtcbmltcG9ydCBwcm9qZWN0c0RPTUhhbmRsZXIgZnJvbSBcIi4vcmVuZGVyLXByb2plY3RzLmpzXCI7XG5cbmNvbnN0IG1haW5BcHBMb2dpYyA9ICgoKSA9PiB7XG5cdGNvbnN0IF9wcm9qZWN0cyA9IFtdO1xuXHRjb25zdCBfZmlyc3RQcm9qZWN0ID0gQ3JlYXRlUHJvamVjdChcIk15IEZpcnN0IFRvZG8gTGlzdFwiLCBbXSk7XG5cdF9wcm9qZWN0cy5wdXNoKF9maXJzdFByb2plY3QpO1xuXHR0b2RvTGlzdERPTUhhbmRsZXIucmVuZGVyVG9kb0xpc3RQYWdlKF9maXJzdFByb2plY3QpO1xuXHRjb25zdCBfYnRuQmFja1RvUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFwiYnV0dG9uI2JhY2stdG8tcHJvamVjdHMtYnRuXCJcblx0KTtcblx0X2J0bkJhY2tUb1Byb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2NvbnRlbnRcIik7XG5cdFx0ZGl2Q29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdHByb2plY3RzRE9NSGFuZGxlci5yZW5kZXJQcm9qZWN0c1BhZ2UoX3Byb2plY3RzKTtcblx0XHRwcm9qZWN0c0RPTUhhbmRsZXIucmVsb2FkUHJvamVjdExpc3REaXNwbGF5KCk7XG5cdH0pO1xuXHQvLyBJbXBsZW1lbnQgZm9ybSBzdWJtaXQgYnV0dG9uXG5cdHRvZG9MaXN0RE9NSGFuZGxlci5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuXHRcdGFkZFRvZG9Ub1Byb2plY3QoZm9ybURhdGEpO1xuXHRcdHRvZG9MaXN0RE9NSGFuZGxlci5yZWxvYWRUb2RvTGlzdERpc3BsYXkoKTtcblx0XHR0b2RvTGlzdERPTUhhbmRsZXIuZGlzYWJsZUZvcm0oKTtcblx0fSk7XG59KSgpO1xuXG5mdW5jdGlvbiBhZGRUb2RvVG9Qcm9qZWN0KGZvcm1EYXRhKSB7XG5cdGNvbnN0IF9uZXdUb2RvID0gQ3JlYXRlVG9kbyhcblx0XHRmb3JtRGF0YS5nZXQoXCJ0aXRsZV9uYW1lXCIpLFxuXHRcdGZvcm1EYXRhLmdldChcImRlc2NfdGV4dFwiKVxuXHQpO1xuXHR0b2RvTGlzdERPTUhhbmRsZXIuY3VyclByb2plY3QuYWRkVG9kbyhfbmV3VG9kbyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
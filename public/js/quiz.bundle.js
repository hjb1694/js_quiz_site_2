/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-src/quiz.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-src/navtoggle.js":
/*!*****************************!*\
  !*** ./wp-src/navtoggle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toggleNav = function toggleNav() {\n  document.querySelector('.nav').classList.toggle('show');\n};\n\ndocument.querySelector('.header__navtoggle').addEventListener('click', toggleNav);\ndocument.querySelector('.nav__closebtn').addEventListener('click', toggleNav);\n\n//# sourceURL=webpack:///./wp-src/navtoggle.js?");

/***/ }),

/***/ "./wp-src/quiz.js":
/*!************************!*\
  !*** ./wp-src/quiz.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navtoggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navtoggle */ \"./wp-src/navtoggle.js\");\n/* harmony import */ var _navtoggle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navtoggle__WEBPACK_IMPORTED_MODULE_0__);\n\ndocument.querySelector('#subbut').addEventListener('click', function (e) {\n  e.preventDefault();\n  var answerGroups = document.querySelectorAll('.quiz-item__answer-group');\n  var errs = 0;\n\n  for (var i = 1; i <= answerGroups.length; i++) {\n    var isChecked = function isChecked(grp) {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = grp[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var item = _step.value;\n\n          if (item.checked) {\n            return true;\n          }\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      return false;\n    };\n\n    var radioGrp = document.querySelectorAll(\"input[name=\\\"\".concat(i, \"\\\"]\"));\n    !isChecked(radioGrp) ? errs++ : null;\n  }\n\n  if (errs) {\n    alert('Please finish the quiz before submitting.');\n  } else {\n    document.querySelector('#quizForm').submit();\n  }\n});\n\n//# sourceURL=webpack:///./wp-src/quiz.js?");

/***/ })

/******/ });
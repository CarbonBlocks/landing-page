module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./global/globalStyles/globals.css":
/*!*****************************************!*\
  !*** ./global/globalStyles/globals.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2dsb2JhbC9nbG9iYWxTdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./global/globalStyles/globals.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _global_globalStyles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/globalStyles/globals.css */ \"./global/globalStyles/globals.css\");\n/* harmony import */ var _global_globalStyles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_globalStyles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-wallet */ \"use-wallet\");\n/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/mauricechristopher/Code/CarbonBlocks/landing-page/client/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst theme = {\n  device: {\n    mobileS: '320px',\n    mobileM: '375px',\n    mobileL: '425px',\n    tablet: '768px',\n    laptop: '1025px',\n    laptopL: '1440px',\n    desktop: '1680px'\n  },\n  colors: {\n    white: '#f2f2f2',\n    primaryGray: '#1F242C',\n    secondaryGray: '#2C3037',\n    tertiaryGray: '#444444',\n    blue: '#1F87E7',\n    blueGray: '#327DA7',\n    teal: '#1CFFFF'\n  },\n  fonts: {\n    inter: \"'Inter'\"\n  }\n};\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"CarbonBlocks\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        charSet: \"utf-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:type\",\n        content: \"website\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:url\",\n        content: \"https://www.carbonblocks.fi/\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: \"Daophinz\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:description\",\n        content: \"Creating an on-chain web3 carbon economy\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image\",\n        content: \"/images/Carblock.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"thumbnail\",\n        content: \"/images/Carblock.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"shortcut icon\",\n        href: \"/images/Carblock.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.googleapis.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\",\n        crossOrigin: \"true\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(use_wallet__WEBPACK_IMPORTED_MODULE_4__[\"UseWalletProvider\"], {\n      chainId: 1,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"ThemeProvider\"], {\n        theme: theme,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsidGhlbWUiLCJkZXZpY2UiLCJtb2JpbGVTIiwibW9iaWxlTSIsIm1vYmlsZUwiLCJ0YWJsZXQiLCJsYXB0b3AiLCJsYXB0b3BMIiwiZGVza3RvcCIsImNvbG9ycyIsIndoaXRlIiwicHJpbWFyeUdyYXkiLCJzZWNvbmRhcnlHcmF5IiwidGVydGlhcnlHcmF5IiwiYmx1ZSIsImJsdWVHcmF5IiwidGVhbCIsImZvbnRzIiwiaW50ZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxLQUFLLEdBQUc7QUFDYkMsUUFBTSxFQUFFO0FBQ1BDLFdBQU8sRUFBRSxPQURGO0FBRVBDLFdBQU8sRUFBRSxPQUZGO0FBR1BDLFdBQU8sRUFBRSxPQUhGO0FBSVBDLFVBQU0sRUFBRSxPQUpEO0FBS1BDLFVBQU0sRUFBRSxRQUxEO0FBTVBDLFdBQU8sRUFBRSxRQU5GO0FBT1BDLFdBQU8sRUFBRTtBQVBGLEdBREs7QUFVYkMsUUFBTSxFQUFFO0FBQ1BDLFNBQUssRUFBRSxTQURBO0FBRVBDLGVBQVcsRUFBRSxTQUZOO0FBR1BDLGlCQUFhLEVBQUUsU0FIUjtBQUlQQyxnQkFBWSxFQUFFLFNBSlA7QUFLUEMsUUFBSSxFQUFFLFNBTEM7QUFNUEMsWUFBUSxFQUFFLFNBTkg7QUFPUEMsUUFBSSxFQUFFO0FBUEMsR0FWSztBQW1CYkMsT0FBSyxFQUFFO0FBQ05DLFNBQUssRUFBRTtBQUREO0FBbkJNLENBQWQ7O0FBd0JBLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN4QyxzQkFDQztBQUFBLDRCQUNDLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUdDO0FBQU0sZUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhELGVBSUM7QUFDQyxZQUFJLEVBQUMsVUFETjtBQUVDLGVBQU8sRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRCxlQVFDO0FBQU0sZ0JBQVEsRUFBQyxTQUFmO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkQsZUFTQztBQUNDLGdCQUFRLEVBQUMsUUFEVjtBQUVDLGVBQU8sRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURCxlQWFDO0FBQU0sZ0JBQVEsRUFBQyxVQUFmO0FBQTBCLGVBQU8sRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkQsZUFjQztBQUNDLGdCQUFRLEVBQUMsZ0JBRFY7QUFFQyxlQUFPLEVBQUM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEQsZUFtQkM7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQkQsZUFvQkM7QUFBTSxZQUFJLEVBQUMsV0FBWDtBQUF1QixlQUFPLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCRCxlQXFCQztBQUFNLFdBQUcsRUFBQyxlQUFWO0FBQTBCLFlBQUksRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJELGVBdUJDO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkQsZUF3QkM7QUFDQyxXQUFHLEVBQUMsWUFETDtBQUVDLFlBQUksRUFBQywyQkFGTjtBQUdDLG1CQUFXLEVBQUM7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJELGVBNkJDO0FBQ0MsWUFBSSxFQUFDLHNGQUROO0FBRUMsV0FBRyxFQUFDO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQW1DQyxxRUFBQyw0REFBRDtBQUFtQixhQUFPLEVBQUUsQ0FBNUI7QUFBQSw2QkFDQyxxRUFBQywrREFBRDtBQUFlLGFBQUssRUFBRXJCLEtBQXRCO0FBQUEsK0JBQ0MscUVBQUMsU0FBRCxvQkFBZXFCLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkNEO0FBQUEsa0JBREQ7QUEyQ0E7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vZ2xvYmFsL2dsb2JhbFN0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IFVzZVdhbGxldFByb3ZpZGVyIH0gZnJvbSAndXNlLXdhbGxldCdcblxuY29uc3QgdGhlbWUgPSB7XG5cdGRldmljZToge1xuXHRcdG1vYmlsZVM6ICczMjBweCcsXG5cdFx0bW9iaWxlTTogJzM3NXB4Jyxcblx0XHRtb2JpbGVMOiAnNDI1cHgnLFxuXHRcdHRhYmxldDogJzc2OHB4Jyxcblx0XHRsYXB0b3A6ICcxMDI1cHgnLFxuXHRcdGxhcHRvcEw6ICcxNDQwcHgnLFxuXHRcdGRlc2t0b3A6ICcxNjgwcHgnLFxuXHR9LFxuXHRjb2xvcnM6IHtcblx0XHR3aGl0ZTogJyNmMmYyZjInLFxuXHRcdHByaW1hcnlHcmF5OiAnIzFGMjQyQycsXG5cdFx0c2Vjb25kYXJ5R3JheTogJyMyQzMwMzcnLFxuXHRcdHRlcnRpYXJ5R3JheTogJyM0NDQ0NDQnLFxuXHRcdGJsdWU6ICcjMUY4N0U3Jyxcblx0XHRibHVlR3JheTogJyMzMjdEQTcnLFxuXHRcdHRlYWw6ICcjMUNGRkZGJyxcblx0fSxcblx0Zm9udHM6IHtcblx0XHRpbnRlcjogXCInSW50ZXInXCIsXG5cdH0sXG59XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPkNhcmJvbkJsb2NrczwvdGl0bGU+XG5cblx0XHRcdFx0PG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG5cdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0bmFtZT0ndmlld3BvcnQnXG5cdFx0XHRcdFx0Y29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIG1pbmltdW0tc2NhbGU9MSwgbWF4aW11bS1zY2FsZT0xJ1xuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6dHlwZScgY29udGVudD0nd2Vic2l0ZScgLz5cblx0XHRcdFx0PG1ldGFcblx0XHRcdFx0XHRwcm9wZXJ0eT0nb2c6dXJsJ1xuXHRcdFx0XHRcdGNvbnRlbnQ9J2h0dHBzOi8vd3d3LmNhcmJvbmJsb2Nrcy5maS8nXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp0aXRsZScgY29udGVudD0nRGFvcGhpbnonIC8+XG5cdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0cHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJ1xuXHRcdFx0XHRcdGNvbnRlbnQ9J0NyZWF0aW5nIGFuIG9uLWNoYWluIHdlYjMgY2FyYm9uIGVjb25vbXknXG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmltYWdlJyBjb250ZW50PScvaW1hZ2VzL0NhcmJsb2NrLnBuZyc+PC9tZXRhPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPSd0aHVtYm5haWwnIGNvbnRlbnQ9Jy9pbWFnZXMvQ2FyYmxvY2sucG5nJyAvPlxuXHRcdFx0XHQ8bGluayByZWw9J3Nob3J0Y3V0IGljb24nIGhyZWY9Jy9pbWFnZXMvQ2FyYmxvY2sucG5nJyAvPlxuXG5cdFx0XHRcdDxsaW5rIHJlbD0ncHJlY29ubmVjdCcgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbScgLz5cblx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRyZWw9J3ByZWNvbm5lY3QnXG5cdFx0XHRcdFx0aHJlZj0naHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbSdcblx0XHRcdFx0XHRjcm9zc09yaWdpbj0ndHJ1ZSdcblx0XHRcdFx0Lz5cblx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXAnXG5cdFx0XHRcdFx0cmVsPSdzdHlsZXNoZWV0J1xuXHRcdFx0XHQvPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PFVzZVdhbGxldFByb3ZpZGVyIGNoYWluSWQ9ezF9PlxuXHRcdFx0XHQ8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuXHRcdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblx0XHRcdFx0PC9UaGVtZVByb3ZpZGVyPlxuXHRcdFx0PC9Vc2VXYWxsZXRQcm92aWRlcj5cblx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ }),

/***/ "use-wallet":
/*!*****************************!*\
  !*** external "use-wallet" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"use-wallet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1c2Utd2FsbGV0XCI/YTM3MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1c2Utd2FsbGV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXNlLXdhbGxldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///use-wallet\n");

/***/ })

/******/ });
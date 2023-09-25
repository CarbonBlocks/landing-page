module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/submit.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/submit.js":
/*!*****************************!*\
  !*** ./pages/api/submit.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var _utils_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mongodb */ \"./pages/utils/mongodb.js\");\n// pages/api/submit.js\n\nasync function handler(req, res) {\n  if (req.method !== \"POST\") {\n    return res.status(405).json({\n      message: \"Method Not Allowed\"\n    });\n  }\n\n  const formData = req.body;\n  formData.signUpTime = new Date();\n\n  try {\n    // Connect to MongoDB\n    const {\n      db\n    } = await Object(_utils_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"connectToDatabase\"])(); // Insert the form data into the database\n\n    await db.collection(\"formData\").insertOne(formData); // Respond with a success message\n\n    return res.status(200).json({\n      message: \"Form submitted successfully!\"\n    });\n  } catch (error) {\n    console.error(\"Error saving form data:\", error);\n    console.log(\"Form data received:\", formData);\n    console.error(\"Error saving form data:\", error.message);\n\n    if (error.message.includes(\"some specific error text\")) {\n      return res.status(400).json({\n        message: \"A specific error message\"\n      });\n    }\n\n    console.error(\"Error saving form data:\", error.message);\n    return res.status(500).json({\n      message: \"Internal Server Error\"\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc3VibWl0LmpzP2ZkYzMiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZm9ybURhdGEiLCJib2R5Iiwic2lnblVwVGltZSIsIkRhdGUiLCJkYiIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUsZUFBZUEsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFdBQU9ELEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFDRDs7QUFFRCxRQUFNQyxRQUFRLEdBQUdOLEdBQUcsQ0FBQ08sSUFBckI7QUFDQUQsVUFBUSxDQUFDRSxVQUFULEdBQXNCLElBQUlDLElBQUosRUFBdEI7O0FBRUEsTUFBSTtBQUNGO0FBQ0EsVUFBTTtBQUFFQztBQUFGLFFBQVMsTUFBTUMsd0VBQWlCLEVBQXRDLENBRkUsQ0FJRjs7QUFDQSxVQUFNRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxVQUFkLEVBQTBCQyxTQUExQixDQUFvQ1AsUUFBcEMsQ0FBTixDQUxFLENBT0Y7O0FBQ0EsV0FBT0wsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBckIsQ0FBUDtBQUNELEdBVEQsQ0FTRSxPQUFPUyxLQUFQLEVBQWM7QUFDZEMsV0FBTyxDQUFDRCxLQUFSLENBQWMseUJBQWQsRUFBeUNBLEtBQXpDO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DVixRQUFuQztBQUNBUyxXQUFPLENBQUNELEtBQVIsQ0FBYyx5QkFBZCxFQUF5Q0EsS0FBSyxDQUFDVCxPQUEvQzs7QUFFQSxRQUFJUyxLQUFLLENBQUNULE9BQU4sQ0FBY1ksUUFBZCxDQUF1QiwwQkFBdkIsQ0FBSixFQUF3RDtBQUN0RCxhQUFPaEIsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBckIsQ0FBUDtBQUNEOztBQUNEVSxXQUFPLENBQUNELEtBQVIsQ0FBYyx5QkFBZCxFQUF5Q0EsS0FBSyxDQUFDVCxPQUEvQztBQUNBLFdBQU9KLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFDRDtBQUNGIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3N1Ym1pdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9zdWJtaXQuanNcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uL3V0aWxzL21vbmdvZGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBcIk1ldGhvZCBOb3QgQWxsb3dlZFwiIH0pO1xuICB9XG5cbiAgY29uc3QgZm9ybURhdGEgPSByZXEuYm9keTtcbiAgZm9ybURhdGEuc2lnblVwVGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgdHJ5IHtcbiAgICAvLyBDb25uZWN0IHRvIE1vbmdvREJcbiAgICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gICAgLy8gSW5zZXJ0IHRoZSBmb3JtIGRhdGEgaW50byB0aGUgZGF0YWJhc2VcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiZm9ybURhdGFcIikuaW5zZXJ0T25lKGZvcm1EYXRhKTtcblxuICAgIC8vIFJlc3BvbmQgd2l0aCBhIHN1Y2Nlc3MgbWVzc2FnZVxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiRm9ybSBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5IVwiIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzYXZpbmcgZm9ybSBkYXRhOlwiLCBlcnJvcik7XG4gICAgY29uc29sZS5sb2coXCJGb3JtIGRhdGEgcmVjZWl2ZWQ6XCIsIGZvcm1EYXRhKTtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2F2aW5nIGZvcm0gZGF0YTpcIiwgZXJyb3IubWVzc2FnZSk7XG5cbiAgICBpZiAoZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhcInNvbWUgc3BlY2lmaWMgZXJyb3IgdGV4dFwiKSkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogXCJBIHNwZWNpZmljIGVycm9yIG1lc3NhZ2VcIiB9KTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNhdmluZyBmb3JtIGRhdGE6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/submit.js\n");

/***/ }),

/***/ "./pages/utils/mongodb.js":
/*!********************************!*\
  !*** ./pages/utils/mongodb.js ***!
  \********************************/
/*! exports provided: connectToDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectToDatabase\", function() { return connectToDatabase; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n};\nlet client;\nlet clientPromise;\nasync function connectToDatabase() {\n  if (!client) {\n    try {\n      client = new mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"](uri, options);\n      await client.connect();\n      console.log(\"Connected to MongoDB successfully\"); // Log success\n    } catch (error) {\n      console.error(\"Failed to connect to MongoDB:\", error); // Log failure\n\n      throw error; // Optionally, re-throw the error to handle it further up the call stack\n    }\n  }\n\n  return {\n    db: client.db(\"CarbonBlocks\")\n  }; // Replace \"your_database_name\" with your actual database name\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91dGlscy9tb25nb2RiLmpzPzgzZGYiXSwibmFtZXMiOlsidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwib3B0aW9ucyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJjb25uZWN0VG9EYXRhYmFzZSIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRiIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBeEI7QUFDQSxNQUFNQyxPQUFPLEdBQUc7QUFDZEMsaUJBQWUsRUFBRSxJQURIO0FBRWRDLG9CQUFrQixFQUFFO0FBRk4sQ0FBaEI7QUFLQSxJQUFJQyxNQUFKO0FBQ0EsSUFBSUMsYUFBSjtBQUVPLGVBQWVDLGlCQUFmLEdBQW1DO0FBQ3hDLE1BQUksQ0FBQ0YsTUFBTCxFQUFhO0FBQ1gsUUFBSTtBQUNGQSxZQUFNLEdBQUcsSUFBSUcsbURBQUosQ0FBZ0JWLEdBQWhCLEVBQXFCSSxPQUFyQixDQUFUO0FBQ0EsWUFBTUcsTUFBTSxDQUFDSSxPQUFQLEVBQU47QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksbUNBQVosRUFIRSxDQUdnRDtBQUNuRCxLQUpELENBSUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RGLGFBQU8sQ0FBQ0UsS0FBUixDQUFjLCtCQUFkLEVBQStDQSxLQUEvQyxFQURjLENBQ3lDOztBQUN2RCxZQUFNQSxLQUFOLENBRmMsQ0FFRDtBQUNkO0FBQ0Y7O0FBQ0QsU0FBTztBQUFFQyxNQUFFLEVBQUVSLE1BQU0sQ0FBQ1EsRUFBUCxDQUFVLGNBQVY7QUFBTixHQUFQLENBWHdDLENBV0U7QUFDM0MiLCJmaWxlIjoiLi9wYWdlcy91dGlscy9tb25nb2RiLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxufTtcblxubGV0IGNsaWVudDtcbmxldCBjbGllbnRQcm9taXNlO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmICghY2xpZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuICAgICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIE1vbmdvREIgc3VjY2Vzc2Z1bGx5XCIpOyAvLyBMb2cgc3VjY2Vzc1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNvbm5lY3QgdG8gTW9uZ29EQjpcIiwgZXJyb3IpOyAvLyBMb2cgZmFpbHVyZVxuICAgICAgdGhyb3cgZXJyb3I7IC8vIE9wdGlvbmFsbHksIHJlLXRocm93IHRoZSBlcnJvciB0byBoYW5kbGUgaXQgZnVydGhlciB1cCB0aGUgY2FsbCBzdGFja1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBkYjogY2xpZW50LmRiKFwiQ2FyYm9uQmxvY2tzXCIpIH07IC8vIFJlcGxhY2UgXCJ5b3VyX2RhdGFiYXNlX25hbWVcIiB3aXRoIHlvdXIgYWN0dWFsIGRhdGFiYXNlIG5hbWVcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/utils/mongodb.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });
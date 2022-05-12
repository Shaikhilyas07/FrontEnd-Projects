/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blogpost/[slug]";
exports.ids = ["pages/blogpost/[slug]"];
exports.modules = {

/***/ "./styles/BlogPost.module.css":
/*!************************************!*\
  !*** ./styles/BlogPost.module.css ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"BlogPost_main___fHoC\",\n\t\"container\": \"BlogPost_container__R5l2X\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQmxvZ1Bvc3QubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFuZGEvLi9zdHlsZXMvQmxvZ1Bvc3QubW9kdWxlLmNzcz9iMDlmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJCbG9nUG9zdF9tYWluX19fZkhvQ1wiLFxuXHRcImNvbnRhaW5lclwiOiBcIkJsb2dQb3N0X2NvbnRhaW5lcl9fUjVsMlhcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/BlogPost.module.css\n");

/***/ }),

/***/ "./pages/blogpost/[slug].js":
/*!**********************************!*\
  !*** ./pages/blogpost/[slug].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/BlogPost.module.css */ \"./styles/BlogPost.module.css\");\n/* harmony import */ var _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// import { useState } from 'react/cjs/react.production.min'\nconst slug = ()=>{\n    const { 0: blog , 1: setBlog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) return;\n        const { slug: slug1  } = router.query;\n        fetch(`http://localhost:3000/api/getblog?slug=${slug1}`).then((a)=>{\n            return a.json();\n        }).then((parsed)=>{\n            setBlog(parsed);\n        });\n    }, [\n        router.isReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: blog && blog.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ILYAS\\\\visual studio code\\\\python files\\\\web development\\\\javacript\\\\panda\\\\pages\\\\blogpost\\\\[slug].js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ILYAS\\\\visual studio code\\\\python files\\\\web development\\\\javacript\\\\panda\\\\pages\\\\blogpost\\\\[slug].js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: blog && blog.content\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ILYAS\\\\visual studio code\\\\python files\\\\web development\\\\javacript\\\\panda\\\\pages\\\\blogpost\\\\[slug].js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ILYAS\\\\visual studio code\\\\python files\\\\web development\\\\javacript\\\\panda\\\\pages\\\\blogpost\\\\[slug].js\",\n            lineNumber: 26,\n            columnNumber: 8\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ILYAS\\\\visual studio code\\\\python files\\\\web development\\\\javacript\\\\panda\\\\pages\\\\blogpost\\\\[slug].js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slug);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncG9zdC9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFDVDtBQUNjO0FBQ3JELDREQUE0RDtBQUU1RCxNQUFNSyxJQUFJLEdBQUcsSUFBTTtJQUNqQixNQUFNLEVBTlIsR0FNU0MsSUFBSSxHQU5iLEdBTWVDLE9BQU8sTUFBSU4sK0NBQVEsRUFBRTtJQUNsQyxNQUFNTyxNQUFNLEdBQUdMLHNEQUFTLEVBQUU7SUFDMUJELGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQ00sTUFBTSxDQUFDQyxPQUFPLEVBQUUsT0FBTztRQUM1QixNQUFNLEVBQUVKLElBQUksRUFBSkEsS0FBSSxHQUFFLEdBQUdHLE1BQU0sQ0FBQ0UsS0FBSztRQUU3QkMsS0FBSyxDQUFDLENBQUMsdUNBQXVDLEVBQUVOLEtBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ08sSUFBSSxDQUFDLENBQUNDLENBQUMsR0FBSztZQUNsRSxPQUFPQSxDQUFDLENBQUNDLElBQUksRUFBRSxDQUFDO1NBQ2pCLENBQUMsQ0FDQ0YsSUFBSSxDQUFDLENBQUNHLE1BQU0sR0FBSztZQUVoQlIsT0FBTyxDQUFDUSxNQUFNLENBQUM7U0FDaEIsQ0FBQztLQUVMLEVBQUU7UUFBQ1AsTUFBTSxDQUFDQyxPQUFPO0tBQUMsQ0FBQztJQUdwQixxQkFDRSw4REFBQ08sS0FBRztRQUFDQyxTQUFTLEVBQUViLDhFQUFnQjtrQkFDN0IsNEVBQUNlLE1BQUk7WUFBQ0YsU0FBUyxFQUFFYix5RUFBVzs7OEJBQzdCLDhEQUFDZ0IsSUFBRTs4QkFBRWQsSUFBSSxJQUFJQSxJQUFJLENBQUNlLEtBQUs7Ozs7OzZCQUFNOzhCQUM3Qiw4REFBQ0MsSUFBRTs7Ozs2QkFBRzs4QkFDTiw4REFBQ04sS0FBRzs4QkFBRVYsSUFBSSxJQUFJQSxJQUFJLENBQUNpQixPQUFPOzs7Ozs2QkFDcEI7Ozs7OztxQkFDQzs7Ozs7aUJBQ0gsQ0FFUDtDQUNGO0FBRUQsaUVBQWVsQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFuZGEvLi9wYWdlcy9ibG9ncG9zdC9bc2x1Z10uanM/Yjg5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0Jsb2dQb3N0Lm1vZHVsZS5jc3MnXHJcbi8vIGltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QvY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluJ1xyXG5cclxuY29uc3Qgc2x1ZyA9ICgpID0+IHtcclxuICBjb25zdCBbYmxvZywgc2V0QmxvZ10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJvdXRlci5pc1JlYWR5KSByZXR1cm47XHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIFxyXG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0YmxvZz9zbHVnPSR7c2x1Z31gKS50aGVuKChhKSA9PiB7XHJcbiAgICAgIHJldHVybiBhLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChwYXJzZWQpID0+IHtcclxuXHJcbiAgICAgICAgc2V0QmxvZyhwYXJzZWQpXHJcbiAgICAgIH0pXHJcbiAgIFxyXG4gIH0sIFtyb3V0ZXIuaXNSZWFkeV0pXHJcbiAgXHJcbiAgICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgIDxoMT57YmxvZyAmJiBibG9nLnRpdGxlfTwvaDE+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8ZGl2PntibG9nICYmIGJsb2cuY29udGVudH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzbHVnIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJzbHVnIiwiYmxvZyIsInNldEJsb2ciLCJyb3V0ZXIiLCJpc1JlYWR5IiwicXVlcnkiLCJmZXRjaCIsInRoZW4iLCJhIiwianNvbiIsInBhcnNlZCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1haW4iLCJoMSIsInRpdGxlIiwiaHIiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blogpost/[slug].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blogpost/[slug].js"));
module.exports = __webpack_exports__;

})();
"use strict";
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
exports.id = "pages/api/getblog";
exports.ids = ["pages/api/getblog"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/getblog.js":
/*!******************************!*\
  !*** ./pages/api/getblog.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nfunction handler(req, res) {\n    fs__WEBPACK_IMPORTED_MODULE_0__.readFile(`blogdata/${req.query.slug}.json`, \"utf-8\", (err, data)=>{\n        if (err) {\n            res.status(500).json({\n                error: \"No such blog found\"\n            });\n        }\n        console.log(req.query.slug);\n        res.status(200).json(JSON.parse(data));\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0YmxvZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw2RUFBNkU7QUFDcEQ7QUFDVixTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDSCx3Q0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFRSxHQUFHLENBQUNHLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDQyxHQUFHLEVBQUVDLElBQUksR0FBRztRQUNsRSxJQUFHRCxHQUFHLEVBQUM7WUFDTEosR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBQ0MsS0FBSyxFQUFDLG9CQUFvQjthQUFDLENBQUM7U0FFbkQ7UUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUNYLEdBQUcsQ0FBQ0csS0FBSyxDQUFDQyxJQUFJLENBQUMsQ0FBQztRQUM1QkgsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBRUksSUFBSSxDQUFDQyxLQUFLLENBQUNQLElBQUksQ0FBQyxDQUFDO0tBQ3hDLENBQUM7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3BhbmRhLy4vcGFnZXMvYXBpL2dldGJsb2cuanM/NjYxOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBmcy5yZWFkRmlsZShgYmxvZ2RhdGEvJHtyZXEucXVlcnkuc2x1Z30uanNvbmAsJ3V0Zi04JywgKGVyciwgZGF0YSk9PntcclxuICAgIGlmKGVycil7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtlcnJvcjpcIk5vIHN1Y2ggYmxvZyBmb3VuZFwifSlcclxuXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhyZXEucXVlcnkuc2x1Zyk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbiggSlNPTi5wYXJzZShkYXRhKSlcclxuICB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJmcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZWFkRmlsZSIsInF1ZXJ5Iiwic2x1ZyIsImVyciIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInBhcnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getblog.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getblog.js"));
module.exports = __webpack_exports__;

})();
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
exports.id = "pages/api/blogs";
exports.ids = ["pages/api/blogs"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/blogs.js":
/*!****************************!*\
  !*** ./pages/api/blogs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n    let data = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(\"blogdata\");\n    // res.status(200).json(data)\n    let myfile;\n    let allBlogs = [];\n    for(let index = 0; index < data.length; index++){\n        const item = data[index];\n        console.log(item);\n        myfile = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(\"blogdata/\" + item, \"utf-8\");\n        console.log(myfile);\n        allBlogs.push(JSON.parse(myfile));\n    }\n    res.status(200).json(allBlogs);\n// fs.promises.readdir(\"blogdata\", (err, data)=>{\n//   console.log(data)\n//   let allBlogs = [];\n//   data.forEach((item)=>{\n//     console.log(item);\n//     fs.readFile(('blogdata/' + item), (d)=>{\n//       allBlogs.push(d)\n//     })\n//   })\n// })\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBQ3BEO0FBQ1YsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJQyxJQUFJLEdBQUcsTUFBTUosZ0RBQW1CLENBQUMsVUFBVSxDQUFDO0lBQ2hELDZCQUE2QjtJQUM3QixJQUFJTyxNQUFNO0lBQ1YsSUFBSUMsUUFBUSxHQUFHLEVBQUU7SUFDZixJQUFLLElBQUlDLEtBQUssR0FBRyxDQUFDLEVBQUVBLEtBQUssR0FBR0wsSUFBSSxDQUFDTSxNQUFNLEVBQUVELEtBQUssRUFBRSxDQUFFO1FBQ2hELE1BQU1FLElBQUksR0FBR1AsSUFBSSxDQUFDSyxLQUFLLENBQUM7UUFDeEJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7UUFDakJKLE1BQU0sR0FBRyxNQUFNUCxpREFBb0IsQ0FBRSxXQUFXLEdBQUdXLElBQUksRUFBRyxPQUFPLENBQUM7UUFDbEVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixNQUFNLENBQUMsQ0FBQztRQUNwQkMsUUFBUSxDQUFDTyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDVixNQUFNLENBQUMsQ0FBQztLQUVsQztJQUNESixHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDWCxRQUFRLENBQUM7QUFNaEMsaURBQWlEO0FBQ2pELHNCQUFzQjtBQUN0Qix1QkFBdUI7QUFDdkIsMkJBQTJCO0FBQzNCLHlCQUF5QjtBQUN6QiwrQ0FBK0M7QUFDL0MseUJBQXlCO0FBRXpCLFNBQVM7QUFDVCxPQUFPO0FBR1AsS0FBSztDQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFuZGEvLi9wYWdlcy9hcGkvYmxvZ3MuanM/ZWM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBsZXQgZGF0YSA9IGF3YWl0IGZzLnByb21pc2VzLnJlYWRkaXIoXCJibG9nZGF0YVwiKTtcbiAgLy8gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSlcbiAgbGV0IG15ZmlsZTtcbiAgbGV0IGFsbEJsb2dzID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gZGF0YVtpbmRleF07XG4gICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgbXlmaWxlID0gYXdhaXQgZnMucHJvbWlzZXMucmVhZEZpbGUoKCdibG9nZGF0YS8nICsgaXRlbSksICd1dGYtOCcpXG4gICAgICBjb25zb2xlLmxvZyhteWZpbGUpO1xuICAgICAgYWxsQmxvZ3MucHVzaChKU09OLnBhcnNlKG15ZmlsZSkpXG4gICAgICBcbiAgICB9XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oYWxsQmxvZ3MpXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICBcbiAgXG4gICAgICAgIFxuICAvLyBmcy5wcm9taXNlcy5yZWFkZGlyKFwiYmxvZ2RhdGFcIiwgKGVyciwgZGF0YSk9PntcbiAgLy8gICBjb25zb2xlLmxvZyhkYXRhKVxuICAvLyAgIGxldCBhbGxCbG9ncyA9IFtdO1xuICAvLyAgIGRhdGEuZm9yRWFjaCgoaXRlbSk9PntcbiAgLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAvLyAgICAgZnMucmVhZEZpbGUoKCdibG9nZGF0YS8nICsgaXRlbSksIChkKT0+e1xuICAvLyAgICAgICBhbGxCbG9ncy5wdXNoKGQpXG5cbiAgLy8gICAgIH0pXG4gIC8vICAgfSlcblxuXG4gIC8vIH0pXG59XG4iXSwibmFtZXMiOlsiZnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGF0YSIsInByb21pc2VzIiwicmVhZGRpciIsIm15ZmlsZSIsImFsbEJsb2dzIiwiaW5kZXgiLCJsZW5ndGgiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsInJlYWRGaWxlIiwicHVzaCIsIkpTT04iLCJwYXJzZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/blogs.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/blogs.js"));
module.exports = __webpack_exports__;

})();
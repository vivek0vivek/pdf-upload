/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmacky%2FDeveloper%2Fpdf-upload%2Fpages%2Findex.js&page=%2F!":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmacky%2FDeveloper%2Fpdf-upload%2Fpages%2Findex.js&page=%2F! ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.js */ \"./pages/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRm1hY2t5JTJGRGV2ZWxvcGVyJTJGcGRmLXVwbG9hZCUyRnBhZ2VzJTJGaW5kZXguanMmcGFnZT0lMkYhIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsMENBQWtCO0FBQ3pDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz8yYjk4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmacky%2FDeveloper%2Fpdf-upload%2Fpages%2Findex.js&page=%2F!\n"));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// /pages/index.js\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [pdfList, setPdfList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Fetch the list of uploaded files\n    const fetchPdfList = async ()=>{\n        const response = await fetch(\"/api/getFiles\"); // API to list PDFs\n        const data = await response.json();\n        setPdfList(data.files);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPdfList();\n    }, []);\n    const handleFileChange = (e)=>{\n        setSelectedFile(e.target.files[0]);\n    };\n    const handleFileUpload = async ()=>{\n        const formData = new FormData();\n        formData.append(\"file\", selectedFile);\n        const response = await fetch(\"/api/upload\", {\n            method: \"POST\",\n            body: formData\n        });\n        if (response.ok) {\n            fetchPdfList();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app-wrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"app name\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Prizmora Task\"\n                }, void 0, false, {\n                    fileName: \"/Users/macky/Developer/pdf-upload/pages/index.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/macky/Developer/pdf-upload/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"upload-section\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Upload PDF\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macky/Developer/pdf-upload/pages/index.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                accept: \"application/pdf\",\n                                onChange: handleFileChange\n                            }, void 0, false, {\n                                fileName: \"/Users/macky/Developer/pdf-upload/pages/index.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleFileUpload,\n                                children: \"Upload\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macky/Developer/pdf-upload/pages/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macky/Developer/pdf-upload/pages/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"preview-section\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Uploaded PDFs\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macky/Developer/pdf-upload/pages/index.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: pdfList.map((file, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"/uploads/\".concat(file),\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            children: file\n                                        }, void 0, false, {\n                                            fileName: \"/Users/macky/Developer/pdf-upload/pages/index.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, index, false, {\n                                        fileName: \"/Users/macky/Developer/pdf-upload/pages/index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/macky/Developer/pdf-upload/pages/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macky/Developer/pdf-upload/pages/index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macky/Developer/pdf-upload/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macky/Developer/pdf-upload/pages/index.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"NnliXKZH7IhNg5m4scDJaLlUX9s=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGtCQUFrQjs7O0FBQzBCO0FBRTdCLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUN6QyxNQUFNLENBQUNLLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUVqRCxtQ0FBbUM7SUFDbkMsTUFBTU8sZUFBZTtRQUNuQixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sa0JBQWtCLG1CQUFtQjtRQUNsRSxNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7UUFDaENQLFdBQVdNLEtBQUtFLEtBQUs7SUFDdkI7SUFFQVgsZ0RBQVNBLENBQUM7UUFDUk07SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNTSxtQkFBbUIsQ0FBQ0M7UUFDeEJSLGdCQUFnQlEsRUFBRUMsTUFBTSxDQUFDSCxLQUFLLENBQUMsRUFBRTtJQUNuQztJQUVBLE1BQU1JLG1CQUFtQjtRQUN2QixNQUFNQyxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsUUFBUWQ7UUFFeEIsTUFBTUcsV0FBVyxNQUFNQyxNQUFNLGVBQWU7WUFDMUNXLFFBQVE7WUFDUkMsTUFBTUo7UUFDUjtRQUVBLElBQUlULFNBQVNjLEVBQUUsRUFBRTtZQUNmZjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7OEJBQUc7Ozs7Ozs7Ozs7OzBCQUlOLDhEQUFDRjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQU9DLFFBQU87Z0NBQWtCQyxVQUFVaEI7Ozs7OzswQ0FDdEQsOERBQUNpQjtnQ0FBT0MsU0FBU2Y7MENBQWtCOzs7Ozs7Ozs7Ozs7a0NBR3JDLDhEQUFDTzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNPOzBDQUNFN0IsUUFBUThCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbEIsOERBQUNDO2tEQUNDLDRFQUFDQzs0Q0FBRUMsTUFBTSxZQUFpQixPQUFMSjs0Q0FBUW5CLFFBQU87NENBQVN3QixLQUFJO3NEQUF1Qkw7Ozs7Ozt1Q0FEakVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3ZCO0dBN0R3QmpDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gL3BhZ2VzL2luZGV4LmpzXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcGRmTGlzdCwgc2V0UGRmTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZEZpbGUsIHNldFNlbGVjdGVkRmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyBGZXRjaCB0aGUgbGlzdCBvZiB1cGxvYWRlZCBmaWxlc1xuICBjb25zdCBmZXRjaFBkZkxpc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9nZXRGaWxlcycpOyAvLyBBUEkgdG8gbGlzdCBQREZzXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBzZXRQZGZMaXN0KGRhdGEuZmlsZXMpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hQZGZMaXN0KCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRTZWxlY3RlZEZpbGUoZS50YXJnZXQuZmlsZXNbMF0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZpbGVVcGxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBzZWxlY3RlZEZpbGUpO1xuICAgIFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdXBsb2FkJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICB9KTtcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgZmV0Y2hQZGZMaXN0KCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtd3JhcHBlclwiPlxuICAgICAgey8qIEFwcCBOYW1lIFNlY3Rpb24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcCBuYW1lXCI+XG4gICAgICAgIDxoMT5Qcml6bW9yYSBUYXNrPC9oMT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTWFpbiBDb250YWluZXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1zZWN0aW9uXCI+XG4gICAgICAgICAgPGgxPlVwbG9hZCBQREY8L2gxPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImFwcGxpY2F0aW9uL3BkZlwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRmlsZVVwbG9hZH0+VXBsb2FkPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1zZWN0aW9uXCI+XG4gICAgICAgICAgPGgxPlVwbG9hZGVkIFBERnM8L2gxPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtwZGZMaXN0Lm1hcCgoZmlsZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvdXBsb2Fkcy8ke2ZpbGV9YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPntmaWxlfTwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwicGRmTGlzdCIsInNldFBkZkxpc3QiLCJzZWxlY3RlZEZpbGUiLCJzZXRTZWxlY3RlZEZpbGUiLCJmZXRjaFBkZkxpc3QiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJmaWxlcyIsImhhbmRsZUZpbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaGFuZGxlRmlsZVVwbG9hZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJtZXRob2QiLCJib2R5Iiwib2siLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlucHV0IiwidHlwZSIsImFjY2VwdCIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsInVsIiwibWFwIiwiZmlsZSIsImluZGV4IiwibGkiLCJhIiwiaHJlZiIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmacky%2FDeveloper%2Fpdf-upload%2Fpages%2Findex.js&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
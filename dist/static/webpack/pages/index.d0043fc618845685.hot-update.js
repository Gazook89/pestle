"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_SVGEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/SVGEditor */ \"./components/SVGEditor.jsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Sidebar */ \"./components/Sidebar.jsx\");\n/* harmony import */ var _components_SvgContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/SvgContext */ \"./components/SvgContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _config_classTable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/classTable.js */ \"./config/classTable.js\");\n/* harmony import */ var _config_noteFrame_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/noteFrame.js */ \"./config/noteFrame.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst svgConfigs = {\n    classTable: _config_classTable_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    noteFrame: _config_noteFrame_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n};\nfunction Home() {\n    _s();\n    const [svgImage, setSvgImage] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"classTable\");\n    const setConfig = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(_components_SvgContext__WEBPACK_IMPORTED_MODULE_6__.SvgContext);\n    const handleSvgSelect = (evt)=>{\n        const selectedSvg = evt.target.value;\n        setSvgImage(selectedSvg);\n        setConfig(svgConfigs[selectedSvg]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SvgContext__WEBPACK_IMPORTED_MODULE_6__.SvgProvider, {\n        initialConfig: svgConfigs[\"classTable\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Pestle\"\n                        }, void 0, false, {\n                            fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/favicon.ico\"\n                        }, void 0, false, {\n                            fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                            lineNumber: 32,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: \"Pestle\"\n                        }, void 0, false, {\n                            fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                            lineNumber: 36,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            onChange: handleSvgSelect,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"classTable\",\n                                    children: \"Class Table\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"noteFrame\",\n                                    children: \"Note\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"layout\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SVGEditor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    svgImage: svgImage\n                                }, void 0, false, {\n                                    fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                            lineNumber: 43,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                    lineNumber: 35,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                    lineNumber: 49,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n            lineNumber: 29,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n        lineNumber: 28,\n        columnNumber: 3\n    }, this);\n}\n_s(Home, \"I5JrLIWzoaNzr+bLXuV+lE2xaas=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1c7QUFDQTtBQUNHO0FBQ0Q7QUFDdUI7QUFDVDtBQUVEO0FBQ0Y7QUFFckQsTUFBTVksYUFBYTtJQUNsQkMsWUFBWUgsNkRBQWdCQTtJQUM1QkksV0FBV0gsNERBQWVBO0FBQzNCO0FBRWUsU0FBU0k7O0lBQ3ZCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNVyxZQUFZVCxpREFBVUEsQ0FBQ0gsOERBQVVBO0lBRXZDLE1BQU1hLGtCQUFrQixDQUFDQztRQUN4QixNQUFNQyxjQUFjRCxJQUFJRSxNQUFNLENBQUNDLEtBQUs7UUFDcENOLFlBQVlJO1FBQ1pILFVBQVVOLFVBQVUsQ0FBQ1MsWUFBWTtJQUNsQztJQUVBLHFCQUNDLDhEQUFDaEIsK0RBQVdBO1FBQUNtQixlQUFlWixVQUFVLENBQUMsYUFBYTtrQkFDbkQsNEVBQUNhO1lBQUlDLFdBQVU7OzhCQUNkLDhEQUFDMUIsa0RBQUlBOztzQ0FDSiw4REFBQzJCO3NDQUFNOzs7Ozs7c0NBQ1AsOERBQUNDOzRCQUFLQyxLQUFJOzRCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7OEJBR3ZCLDhEQUFDQzs7c0NBQ0EsOERBQUM5QiwwREFBTUE7NEJBQUMwQixPQUFNOzs7Ozs7c0NBRWQsOERBQUNLOzRCQUFPQyxVQUFVZDs7OENBQ2pCLDhEQUFDZTtvQ0FBT1gsT0FBTTs4Q0FBYTs7Ozs7OzhDQUMzQiw4REFBQ1c7b0NBQU9YLE9BQU07OENBQVk7Ozs7Ozs7Ozs7OztzQ0FHM0IsOERBQUNFOzRCQUFJQyxXQUFVOzs4Q0FDZCw4REFBQ3ZCLDZEQUFNQTtvQ0FBQ2EsVUFBVUE7Ozs7Ozs4Q0FDbEIsOERBQUNaLDJEQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSVYsOERBQUNGLDBEQUFNQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlYO0dBcEN3QmE7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICdAY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICdAY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IEVkaXRvciBmcm9tICdAY29tcG9uZW50cy9TVkdFZGl0b3InO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnQGNvbXBvbmVudHMvU2lkZWJhcic7XG5pbXBvcnQgeyBTdmdQcm92aWRlciwgU3ZnQ29udGV4dCB9IGZyb20gJ0Bjb21wb25lbnRzL1N2Z0NvbnRleHQnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNsYXNzVGFibGVDb25maWcgZnJvbSAnLi4vY29uZmlnL2NsYXNzVGFibGUuanMnO1xuaW1wb3J0IG5vdGVGcmFtZUNvbmZpZyBmcm9tICcuLi9jb25maWcvbm90ZUZyYW1lLmpzJztcblxuY29uc3Qgc3ZnQ29uZmlncyA9IHtcblx0Y2xhc3NUYWJsZTogY2xhc3NUYWJsZUNvbmZpZyxcblx0bm90ZUZyYW1lOiBub3RlRnJhbWVDb25maWcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXHRjb25zdCBbc3ZnSW1hZ2UsIHNldFN2Z0ltYWdlXSA9IHVzZVN0YXRlKCdjbGFzc1RhYmxlJyk7XG5cdGNvbnN0IHNldENvbmZpZyA9IHVzZUNvbnRleHQoU3ZnQ29udGV4dCk7XG5cblx0Y29uc3QgaGFuZGxlU3ZnU2VsZWN0ID0gKGV2dCkgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdGVkU3ZnID0gZXZ0LnRhcmdldC52YWx1ZTtcblx0XHRzZXRTdmdJbWFnZShzZWxlY3RlZFN2Zyk7XG5cdFx0c2V0Q29uZmlnKHN2Z0NvbmZpZ3Nbc2VsZWN0ZWRTdmddKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxTdmdQcm92aWRlciBpbml0aWFsQ29uZmlnPXtzdmdDb25maWdzWydjbGFzc1RhYmxlJ119PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPlBlc3RsZTwvdGl0bGU+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdFx0PG1haW4+XG5cdFx0XHRcdFx0PEhlYWRlciB0aXRsZT1cIlBlc3RsZVwiIC8+XG5cblx0XHRcdFx0XHQ8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVTdmdTZWxlY3R9PlxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nY2xhc3NUYWJsZSc+Q2xhc3MgVGFibGU8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9J25vdGVGcmFtZSc+Tm90ZTwvb3B0aW9uPlxuXHRcdFx0XHRcdDwvc2VsZWN0PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cblx0XHRcdFx0XHRcdDxFZGl0b3Igc3ZnSW1hZ2U9e3N2Z0ltYWdlfSAvPlxuXHRcdFx0XHRcdFx0PFNpZGViYXIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9tYWluPlxuXG5cdFx0XHRcdDxGb290ZXIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvU3ZnUHJvdmlkZXI+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkhlYWRlciIsIkZvb3RlciIsIkVkaXRvciIsIlNpZGViYXIiLCJTdmdQcm92aWRlciIsIlN2Z0NvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJjbGFzc1RhYmxlQ29uZmlnIiwibm90ZUZyYW1lQ29uZmlnIiwic3ZnQ29uZmlncyIsImNsYXNzVGFibGUiLCJub3RlRnJhbWUiLCJIb21lIiwic3ZnSW1hZ2UiLCJzZXRTdmdJbWFnZSIsInNldENvbmZpZyIsImhhbmRsZVN2Z1NlbGVjdCIsImV2dCIsInNlbGVjdGVkU3ZnIiwidGFyZ2V0IiwidmFsdWUiLCJpbml0aWFsQ29uZmlnIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJzZWxlY3QiLCJvbkNoYW5nZSIsIm9wdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
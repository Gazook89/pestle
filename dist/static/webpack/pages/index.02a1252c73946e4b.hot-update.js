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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_SVGEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/SVGEditor */ \"./components/SVGEditor.jsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Sidebar */ \"./components/Sidebar.jsx\");\n/* harmony import */ var _components_SvgContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/SvgContext */ \"./components/SvgContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _config_classTable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/classTable.js */ \"./config/classTable.js\");\n/* harmony import */ var _config_noteFrame_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/noteFrame.js */ \"./config/noteFrame.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst svgConfigs = {\n    classTable: _config_classTable_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    noteFrame: _config_noteFrame_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n};\nconst HomeContent = ()=>{\n    _s();\n    const [svgImage, setSvgImage] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"classTable\");\n    const { setConfig } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(_components_SvgContext__WEBPACK_IMPORTED_MODULE_6__.SvgContext);\n    const handleSvgSelect = (evt)=>{\n        const selectedSvg = evt.target.value;\n        setSvgImage(selectedSvg);\n        setConfig(svgConfigs[selectedSvg]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Pestle\"\n                    }, void 0, false, {\n                        fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: \"Pestle\"\n                    }, void 0, false, {\n                        fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        onChange: handleSvgSelect,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"classTable\",\n                                children: \"Class Table\"\n                            }, void 0, false, {\n                                fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                                lineNumber: 38,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"noteFrame\",\n                                children: \"Note\"\n                            }, void 0, false, {\n                                fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                                lineNumber: 39,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"layout\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SVGEditor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                svgImage: svgImage\n                            }, void 0, false, {\n                                fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                                lineNumber: 43,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n        lineNumber: 28,\n        columnNumber: 3\n    }, undefined);\n};\n_s(HomeContent, \"6/U2Aif13vs3FAGX2fr5yANyeeo=\");\n_c = HomeContent;\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SvgContext__WEBPACK_IMPORTED_MODULE_6__.SvgProvider, {\n        initialConfig: svgConfigs[\"classTable\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HomeContent, {}, void 0, false, {\n            fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n            lineNumber: 56,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/pages/index.js\",\n        lineNumber: 55,\n        columnNumber: 3\n    }, this);\n}\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomeContent\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1c7QUFDQTtBQUNHO0FBQ0Q7QUFDdUI7QUFDcEI7QUFFVTtBQUNGO0FBRXJELE1BQU1XLGFBQWE7SUFDbEJDLFlBQVlILDZEQUFnQkE7SUFDNUJJLFdBQVdILDREQUFlQTtBQUMzQjtBQUVBLE1BQU1JLGNBQWM7O0lBQ25CLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLEVBQUVVLFNBQVMsRUFBRSxHQUFHVCxpREFBVUEsQ0FBQ0YsOERBQVVBO0lBRTNDLE1BQU1ZLGtCQUFrQixDQUFDQztRQUN4QixNQUFNQyxjQUFjRCxJQUFJRSxNQUFNLENBQUNDLEtBQUs7UUFDcENOLFlBQVlJO1FBQ1pILFVBQVVOLFVBQVUsQ0FBQ1MsWUFBWTtJQUNsQztJQUVBLHFCQUNDLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDZCw4REFBQ3hCLGtEQUFJQTs7a0NBQ0osOERBQUN5QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUd2Qiw4REFBQ0M7O2tDQUNBLDhEQUFDNUIsMERBQU1BO3dCQUFDd0IsT0FBTTs7Ozs7O2tDQUVkLDhEQUFDSzt3QkFBT0MsVUFBVWI7OzBDQUNqQiw4REFBQ2M7Z0NBQU9WLE9BQU07MENBQWE7Ozs7OzswQ0FDM0IsOERBQUNVO2dDQUFPVixPQUFNOzBDQUFZOzs7Ozs7Ozs7Ozs7a0NBRzNCLDhEQUFDQzt3QkFBSUMsV0FBVTs7MENBQ2QsOERBQUNyQiw2REFBTUE7Z0NBQUNZLFVBQVVBOzs7Ozs7MENBQ2xCLDhEQUFDWCwyREFBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlWLDhEQUFDRiwwREFBTUE7Ozs7Ozs7Ozs7O0FBR1Y7R0FsQ01ZO0tBQUFBO0FBb0NTLFNBQVNtQjtJQUN2QixxQkFDQyw4REFBQzVCLCtEQUFXQTtRQUFDNkIsZUFBZXZCLFVBQVUsQ0FBQyxhQUFhO2tCQUNuRCw0RUFBQ0c7Ozs7Ozs7Ozs7QUFHSjtNQU53Qm1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnQGNvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnQGNvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBFZGl0b3IgZnJvbSAnQGNvbXBvbmVudHMvU1ZHRWRpdG9yJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJ0Bjb21wb25lbnRzL1NpZGViYXInO1xuaW1wb3J0IHsgU3ZnUHJvdmlkZXIsIFN2Z0NvbnRleHQgfSBmcm9tICdAY29tcG9uZW50cy9TdmdDb250ZXh0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY2xhc3NUYWJsZUNvbmZpZyBmcm9tICcuLi9jb25maWcvY2xhc3NUYWJsZS5qcyc7XG5pbXBvcnQgbm90ZUZyYW1lQ29uZmlnIGZyb20gJy4uL2NvbmZpZy9ub3RlRnJhbWUuanMnO1xuXG5jb25zdCBzdmdDb25maWdzID0ge1xuXHRjbGFzc1RhYmxlOiBjbGFzc1RhYmxlQ29uZmlnLFxuXHRub3RlRnJhbWU6IG5vdGVGcmFtZUNvbmZpZyxcbn07XG5cbmNvbnN0IEhvbWVDb250ZW50ID0gKCkgPT4ge1xuXHRjb25zdCBbc3ZnSW1hZ2UsIHNldFN2Z0ltYWdlXSA9IHVzZVN0YXRlKCdjbGFzc1RhYmxlJyk7XG5cdGNvbnN0IHsgc2V0Q29uZmlnIH0gPSB1c2VDb250ZXh0KFN2Z0NvbnRleHQpO1xuXG5cdGNvbnN0IGhhbmRsZVN2Z1NlbGVjdCA9IChldnQpID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZFN2ZyA9IGV2dC50YXJnZXQudmFsdWU7XG5cdFx0c2V0U3ZnSW1hZ2Uoc2VsZWN0ZWRTdmcpO1xuXHRcdHNldENvbmZpZyhzdmdDb25maWdzW3NlbGVjdGVkU3ZnXSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT5QZXN0bGU8L3RpdGxlPlxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG5cdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdDxtYWluPlxuXHRcdFx0XHQ8SGVhZGVyIHRpdGxlPVwiUGVzdGxlXCIgLz5cblxuXHRcdFx0XHQ8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVTdmdTZWxlY3R9PlxuXHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9J2NsYXNzVGFibGUnPkNsYXNzIFRhYmxlPC9vcHRpb24+XG5cdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nbm90ZUZyYW1lJz5Ob3RlPC9vcHRpb24+XG5cdFx0XHRcdDwvc2VsZWN0PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG5cdFx0XHRcdFx0PEVkaXRvciBzdmdJbWFnZT17c3ZnSW1hZ2V9IC8+XG5cdFx0XHRcdFx0PFNpZGViYXIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cblx0XHRcdDxGb290ZXIgLz5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cdHJldHVybiAoXG5cdFx0PFN2Z1Byb3ZpZGVyIGluaXRpYWxDb25maWc9e3N2Z0NvbmZpZ3NbJ2NsYXNzVGFibGUnXX0+XG5cdFx0XHQ8SG9tZUNvbnRlbnQgLz5cblx0XHQ8L1N2Z1Byb3ZpZGVyPlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJIZWFkZXIiLCJGb290ZXIiLCJFZGl0b3IiLCJTaWRlYmFyIiwiU3ZnUHJvdmlkZXIiLCJTdmdDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiY2xhc3NUYWJsZUNvbmZpZyIsIm5vdGVGcmFtZUNvbmZpZyIsInN2Z0NvbmZpZ3MiLCJjbGFzc1RhYmxlIiwibm90ZUZyYW1lIiwiSG9tZUNvbnRlbnQiLCJzdmdJbWFnZSIsInNldFN2Z0ltYWdlIiwic2V0Q29uZmlnIiwiaGFuZGxlU3ZnU2VsZWN0IiwiZXZ0Iiwic2VsZWN0ZWRTdmciLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJvcHRpb24iLCJIb21lIiwiaW5pdGlhbENvbmZpZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
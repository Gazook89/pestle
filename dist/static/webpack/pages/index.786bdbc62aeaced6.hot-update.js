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

/***/ "./components/Sidebar.jsx":
/*!********************************!*\
  !*** ./components/Sidebar.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SvgContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SvgContext */ \"./components/SvgContext.js\");\n/* harmony import */ var _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar.module.css */ \"./components/Sidebar.module.css\");\n/* harmony import */ var _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-color */ \"./node_modules/react-color/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Sidebar = ()=>{\n    _s();\n    const { config } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_SvgContext__WEBPACK_IMPORTED_MODULE_2__.SvgContext);\n    const handleInputChange = (selector, property, value)=>{\n        const applyChange = (element)=>{\n            if (element) {\n                element.style[property] = value;\n            }\n        };\n        if (Array.isArray(selector)) {\n            selector.forEach((sel)=>{\n                if (!sel || sel.trim() === \"\") return;\n                const elements = document.querySelectorAll(sel);\n                elements === null || elements === void 0 ? void 0 : elements.forEach(applyChange);\n            });\n        } else {\n            if (!selector || selector.trim() === \"\") return;\n            const elements = document.querySelectorAll(selector);\n            elements === null || elements === void 0 ? void 0 : elements.forEach(applyChange);\n        }\n    };\n    const renderInput = (input, index)=>{\n        switch(input.type){\n            case \"color\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: input.label\n                        }, void 0, false, {\n                            fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/components/Sidebar.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_color__WEBPACK_IMPORTED_MODULE_4__.SketchPicker, {\n                            color: input.defaultValue,\n                            onChangeComplete: (e)=>{\n                                handleInputChange(input.selector, input.property, color);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/components/Sidebar.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/components/Sidebar.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 6\n                }, undefined);\n            case \"range\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: input.label\n                        }, void 0, false, {\n                            fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/components/Sidebar.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"range\",\n                            min: input.min,\n                            max: input.max,\n                            step: input.step,\n                            defaultValue: input.defaultValue,\n                            list: input.label,\n                            onInput: (e)=>handleInputChange(input.selector, input.property, \"\".concat(e.target.value, \"px\"))\n                        }, void 0, false, {\n                            fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/components/Sidebar.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"datalist\", {\n                            id: input.label,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: input.defaultValue\n                            }, void 0, false, {\n                                fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/components/Sidebar.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 8\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/components/Sidebar.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/components/Sidebar.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 6\n                }, undefined);\n            default:\n                return null;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidebar),\n        children: config === null || config === void 0 ? void 0 : config.inputs.map((input, index)=>renderInput(input, index))\n    }, void 0, false, {\n        fileName: \"/Users/JohnJones/Documents/Programming/Projects/pestle/components/Sidebar.jsx\",\n        lineNumber: 67,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Sidebar, \"T2vUeAbBksYJAoV2wJzLnuvT9X8=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0E7QUFDQTtBQUVDO0FBRTNDLE1BQU1LLFVBQVU7O0lBQ2YsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0wsaURBQVVBLENBQUNDLG1EQUFVQTtJQUV4QyxNQUFNSyxvQkFBb0IsQ0FBQ0MsVUFBVUMsVUFBVUM7UUFDOUMsTUFBTUMsY0FBYyxDQUFDQztZQUNwQixJQUFJQSxTQUFTO2dCQUNaQSxRQUFRQyxLQUFLLENBQUNKLFNBQVMsR0FBR0M7WUFDM0I7UUFDRDtRQUVBLElBQUlJLE1BQU1DLE9BQU8sQ0FBQ1AsV0FBVztZQUM1QkEsU0FBU1EsT0FBTyxDQUFDQyxDQUFBQTtnQkFDaEIsSUFBSSxDQUFDQSxPQUFPQSxJQUFJQyxJQUFJLE9BQU8sSUFBSTtnQkFDL0IsTUFBTUMsV0FBV0MsU0FBU0MsZ0JBQWdCLENBQUNKO2dCQUMzQ0UscUJBQUFBLCtCQUFBQSxTQUFVSCxPQUFPLENBQUNMO1lBQ25CO1FBQ0QsT0FBTztZQUNOLElBQUksQ0FBQ0gsWUFBWUEsU0FBU1UsSUFBSSxPQUFPLElBQUk7WUFDekMsTUFBTUMsV0FBV0MsU0FBU0MsZ0JBQWdCLENBQUNiO1lBQzNDVyxxQkFBQUEsK0JBQUFBLFNBQVVILE9BQU8sQ0FBQ0w7UUFDbkI7SUFDRDtJQUVBLE1BQU1XLGNBQWMsQ0FBQ0MsT0FBT0M7UUFDM0IsT0FBUUQsTUFBTUUsSUFBSTtZQUNqQixLQUFLO2dCQUNKLHFCQUNDLDhEQUFDQzs7c0NBQ0EsOERBQUNDO3NDQUFPSixNQUFNSSxLQUFLOzs7Ozs7c0NBQ25CLDhEQUFDdkIscURBQVlBOzRCQUFDd0IsT0FBT0wsTUFBTU0sWUFBWTs0QkFBRUMsa0JBQWtCLENBQUNDO2dDQUFLeEIsa0JBQWtCZ0IsTUFBTWYsUUFBUSxFQUFFZSxNQUFNZCxRQUFRLEVBQUVtQjs0QkFBTTs7Ozs7OzttQkFGaEhKOzs7OztZQVVaLEtBQUs7Z0JBQ0oscUJBQ0MsOERBQUNFOztzQ0FDQSw4REFBQ0M7c0NBQU9KLE1BQU1JLEtBQUs7Ozs7OztzQ0FDbkIsOERBQUNKOzRCQUNBRSxNQUFLOzRCQUNMTyxLQUFLVCxNQUFNUyxHQUFHOzRCQUNkQyxLQUFLVixNQUFNVSxHQUFHOzRCQUNkQyxNQUFNWCxNQUFNVyxJQUFJOzRCQUNoQkwsY0FBY04sTUFBTU0sWUFBWTs0QkFDaENNLE1BQU1aLE1BQU1JLEtBQUs7NEJBQ2pCUyxTQUFTLENBQUNMLElBQU14QixrQkFBa0JnQixNQUFNZixRQUFRLEVBQUVlLE1BQU1kLFFBQVEsRUFBRSxHQUFrQixPQUFmc0IsRUFBRU0sTUFBTSxDQUFDM0IsS0FBSyxFQUFDOzs7Ozs7c0NBRXJGLDhEQUFDNEI7NEJBQVNDLElBQUloQixNQUFNSSxLQUFLO3NDQUN4Qiw0RUFBQ2E7Z0NBQU85QixPQUFPYSxNQUFNTSxZQUFZOzs7Ozs7Ozs7Ozs7bUJBWnpCTDs7Ozs7WUFnQlo7Z0JBQVMsT0FBTztRQUNqQjtJQUNEO0lBRUEscUJBQ0MsOERBQUNFO1FBQUllLFdBQVd0QyxvRUFBYztrQkFDNUJHLG1CQUFBQSw2QkFBQUEsT0FBUXFDLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNyQixPQUFPQyxRQUFVRixZQUFZQyxPQUFPQzs7Ozs7O0FBRzVEO0dBaEVNbkI7S0FBQUE7QUFrRU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzeD80Y2I0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdmdDb250ZXh0IH0gZnJvbSBcIi4vU3ZnQ29udGV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TaWRlYmFyLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IHsgU2tldGNoUGlja2VyIH0gZnJvbSAncmVhY3QtY29sb3InO1xuXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xuXHRjb25zdCB7IGNvbmZpZyB9ID0gdXNlQ29udGV4dChTdmdDb250ZXh0KTtcblxuXHRjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChzZWxlY3RvciwgcHJvcGVydHksIHZhbHVlKSA9PiB7XG5cdFx0Y29uc3QgYXBwbHlDaGFuZ2UgPSAoZWxlbWVudCkgPT4ge1xuXHRcdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdFx0ZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG5cdFx0XHRzZWxlY3Rvci5mb3JFYWNoKHNlbCA9PiB7XG5cdFx0XHRcdGlmICghc2VsIHx8IHNlbC50cmltKCkgPT09ICcnKSByZXR1cm47XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpO1xuXHRcdFx0XHRlbGVtZW50cz8uZm9yRWFjaChhcHBseUNoYW5nZSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFzZWxlY3RvciB8fCBzZWxlY3Rvci50cmltKCkgPT09ICcnKSByZXR1cm47XG5cdFx0XHRjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXHRcdFx0ZWxlbWVudHM/LmZvckVhY2goYXBwbHlDaGFuZ2UpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCByZW5kZXJJbnB1dCA9IChpbnB1dCwgaW5kZXgpID0+IHtcblx0XHRzd2l0Y2ggKGlucHV0LnR5cGUpIHtcblx0XHRcdGNhc2UgJ2NvbG9yJzpcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8ZGl2IGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0PGxhYmVsPntpbnB1dC5sYWJlbH08L2xhYmVsPlxuXHRcdFx0XHRcdFx0PFNrZXRjaFBpY2tlciBjb2xvcj17aW5wdXQuZGVmYXVsdFZhbHVlfSBvbkNoYW5nZUNvbXBsZXRlPXsoZSk9PntoYW5kbGVJbnB1dENoYW5nZShpbnB1dC5zZWxlY3RvciwgaW5wdXQucHJvcGVydHksIGNvbG9yKX19IC8+XG5cdFx0XHRcdFx0XHR7LyogPGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJjb2xvclwiXG5cdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17aW5wdXQuZGVmYXVsdFZhbHVlfVxuXHRcdFx0XHRcdFx0XHRvbklucHV0PXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoaW5wdXQuc2VsZWN0b3IsIGlucHV0LnByb3BlcnR5LCBlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPiAqL31cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdGNhc2UgJ3JhbmdlJzpcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8ZGl2IGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0PGxhYmVsPntpbnB1dC5sYWJlbH08L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJyYW5nZVwiXG5cdFx0XHRcdFx0XHRcdG1pbj17aW5wdXQubWlufVxuXHRcdFx0XHRcdFx0XHRtYXg9e2lucHV0Lm1heH1cblx0XHRcdFx0XHRcdFx0c3RlcD17aW5wdXQuc3RlcH1cblx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtpbnB1dC5kZWZhdWx0VmFsdWV9XG5cdFx0XHRcdFx0XHRcdGxpc3Q9e2lucHV0LmxhYmVsfVxuXHRcdFx0XHRcdFx0XHRvbklucHV0PXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoaW5wdXQuc2VsZWN0b3IsIGlucHV0LnByb3BlcnR5LCBgJHtlLnRhcmdldC52YWx1ZX1weGApfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxkYXRhbGlzdCBpZD17aW5wdXQubGFiZWx9PlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPXtpbnB1dC5kZWZhdWx0VmFsdWV9Pjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PC9kYXRhbGlzdD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdGRlZmF1bHQ6IHJldHVybiBudWxsO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0gPlxuXHRcdFx0e2NvbmZpZz8uaW5wdXRzLm1hcCgoaW5wdXQsIGluZGV4KSA9PiByZW5kZXJJbnB1dChpbnB1dCwgaW5kZXgpKX1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiU3ZnQ29udGV4dCIsInN0eWxlcyIsIlNrZXRjaFBpY2tlciIsIlNpZGViYXIiLCJjb25maWciLCJoYW5kbGVJbnB1dENoYW5nZSIsInNlbGVjdG9yIiwicHJvcGVydHkiLCJ2YWx1ZSIsImFwcGx5Q2hhbmdlIiwiZWxlbWVudCIsInN0eWxlIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInNlbCIsInRyaW0iLCJlbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInJlbmRlcklucHV0IiwiaW5wdXQiLCJpbmRleCIsInR5cGUiLCJkaXYiLCJsYWJlbCIsImNvbG9yIiwiZGVmYXVsdFZhbHVlIiwib25DaGFuZ2VDb21wbGV0ZSIsImUiLCJtaW4iLCJtYXgiLCJzdGVwIiwibGlzdCIsIm9uSW5wdXQiLCJ0YXJnZXQiLCJkYXRhbGlzdCIsImlkIiwib3B0aW9uIiwiY2xhc3NOYW1lIiwic2lkZWJhciIsImlucHV0cyIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sidebar.jsx\n"));

/***/ })

});
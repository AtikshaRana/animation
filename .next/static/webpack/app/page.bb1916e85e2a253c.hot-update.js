"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page.module.css */ \"(app-client)/./src/app/page.module.css\");\n/* harmony import */ var _components_Intro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Intro */ \"(app-client)/./src/components/Intro/index.jsx\");\n/* harmony import */ var _components_Description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Description */ \"(app-client)/./src/components/Description/index.jsx\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects */ \"(app-client)/./src/components/Projects/index.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nfunction Home() {\n    // useEffect( () => {\n    //   (\n    //     async () => {\n    //         const LocomotiveScroll = (await import('locomotive-scroll')).default\n    //         const locomotiveScroll = new LocomotiveScroll();\n    //     }\n    //   )()\n    // }, [])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: _page_module_css__WEBPACK_IMPORTED_MODULE_5__.main,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Intro__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/page.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Description__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/page.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/page.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/page.js\",\n        lineNumber: 20,\n        columnNumber: 7\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNrQztBQUNJO0FBQ0U7QUFDWTtBQUNOO0FBRS9CLFNBQVNLO0lBRXRCLHFCQUFxQjtJQUNyQixNQUFNO0lBQ04sb0JBQW9CO0lBQ3BCLCtFQUErRTtJQUMvRSwyREFBMkQ7SUFDM0QsUUFBUTtJQUNSLFFBQVE7SUFDUixTQUFTO0lBRVQscUJBQ0ksOERBQUNDO1FBQUtDLFdBQVdOLDZDQUFNQSxDQUFDSzs7MEJBQ3RCLDhEQUFDSix5REFBS0E7Ozs7OzBCQUNOLDhEQUFDQywrREFBV0E7Ozs7OzBCQUNaLDhEQUFDQyw0REFBUUE7Ozs7Ozs7Ozs7O0FBR2pCO0tBbEJ3QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UubW9kdWxlLmNzcydcbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL0ludHJvJztcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0Rlc2NyaXB0aW9uJztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICAvLyB1c2VFZmZlY3QoICgpID0+IHtcbiAgLy8gICAoXG4gIC8vICAgICBhc3luYyAoKSA9PiB7XG4gIC8vICAgICAgICAgY29uc3QgTG9jb21vdGl2ZVNjcm9sbCA9IChhd2FpdCBpbXBvcnQoJ2xvY29tb3RpdmUtc2Nyb2xsJykpLmRlZmF1bHRcbiAgLy8gICAgICAgICBjb25zdCBsb2NvbW90aXZlU2Nyb2xsID0gbmV3IExvY29tb3RpdmVTY3JvbGwoKTtcbiAgLy8gICAgIH1cbiAgLy8gICApKClcbiAgLy8gfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8SW50cm8gLz5cbiAgICAgICAgPERlc2NyaXB0aW9uIC8+XG4gICAgICAgIDxQcm9qZWN0cyAvPlxuICAgICAgPC9tYWluPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0Iiwic3R5bGVzIiwiSW50cm8iLCJEZXNjcmlwdGlvbiIsIlByb2plY3RzIiwiSG9tZSIsIm1haW4iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.js\n"));

/***/ })

});
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

/***/ "(app-client)/./src/components/Description/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/Description/index.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-client)/./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.css */ \"(app-client)/./src/components/Description/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst phrases = [\n    \"Lorem ipsum dolor sit amet\",\n    \"consectetur adipisicing elit. Quaerat\",\n    \"earum unde ipsam ab aut labore\",\n    \"The nihil quasi. Labore total area\",\n    \"itaque nihil quasi. Labore, minima?\"\n];\nfunction Index() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),\n        children: phrases.map((phrase, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedText, {\n                children: phrase\n            }, index, false, {\n                fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Description/index.jsx\",\n                lineNumber: 14,\n                columnNumber: 24\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Description/index.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = Index;\nfunction AnimatedText(param) {\n    let { children } = param;\n    _s();\n    const text = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].from(text.current, {\n            scrollTrigger: {\n                trigger: text.current,\n                scrub: true,\n                start: \"0px bottom\",\n                end: \"bottom+=400px bottom\"\n            },\n            opacity: 0,\n            left: \"-200px\",\n            ease: \"power3.Out\"\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        ref: text,\n        children: [\n            children,\n            \"  \"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Description/index.jsx\",\n        lineNumber: 36,\n        columnNumber: 12\n    }, this);\n}\n_s(AnimatedText, \"g7MJ70IzyCm8uwhrZCdgeT11BKs=\");\n_c1 = AnimatedText;\nvar _c, _c1;\n$RefreshReg$(_c, \"Index\");\n$RefreshReg$(_c1, \"AnimatedText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvRGVzY3JpcHRpb24vaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDSDtBQUMzQjtBQUNnQjtBQUV4QyxNQUFNTSxVQUFVO0lBQUM7SUFBOEI7SUFBeUM7SUFBa0M7SUFBc0M7Q0FBc0M7QUFFdkwsU0FBU0M7SUFFdEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdKLHNFQUFrQks7a0JBRTFCSixRQUFRSyxJQUFLLENBQUNDLFFBQVFDO1lBQ2xCLHFCQUFPLDhEQUFDQzswQkFBMEJGO2VBQVJDOzs7OztRQUM5Qjs7Ozs7O0FBSVo7S0FYd0JOO0FBWXhCLFNBQVNPLGFBQWEsS0FBVTtRQUFWLEVBQUNDLFFBQVEsRUFBQyxHQUFWOztJQUNsQixNQUFNQyxPQUFPZCw2Q0FBTUEsQ0FBQztJQUNwQkQsc0RBQWVBLENBQUU7UUFDYkcsNENBQUlBLENBQUNhLGVBQWVkLDZEQUFhQTtRQUNqQ0MsNENBQUlBLENBQUNjLEtBQUtGLEtBQUtHLFNBQVM7WUFDcEJDLGVBQWU7Z0JBQ1hDLFNBQVNMLEtBQUtHO2dCQUNkRyxPQUFPO2dCQUNQQyxPQUFPO2dCQUNQQyxLQUFLO1lBQ1Q7WUFDQUMsU0FBUztZQUNUQyxNQUFNO1lBQ05DLE1BQU07UUFDVjtJQUNKLEdBQUcsRUFBRTtJQUNMLHFCQUFPLDhEQUFDQztRQUFFQyxLQUFLYjs7WUFBT0Q7WUFBUzs7Ozs7OztBQUNuQztHQWpCU0Q7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGVzY3JpcHRpb24vaW5kZXguanN4PzY5NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSAnZ3NhcC9TY3JvbGxUcmlnZ2VyJztcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBwaHJhc2VzID0gW1wiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcIiwgXCJjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFlcmF0XCIsIFwiZWFydW0gdW5kZSBpcHNhbSBhYiBhdXQgbGFib3JlXCIsIFwiVGhlIG5paGlsIHF1YXNpLiBMYWJvcmUgdG90YWwgYXJlYVwiLCBcIml0YXF1ZSBuaWhpbCBxdWFzaS4gTGFib3JlLCBtaW5pbWE/XCJdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0gPlxuICAgICAgICB7XG4gICAgICAgICAgICBwaHJhc2VzLm1hcCggKHBocmFzZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPEFuaW1hdGVkVGV4dCBrZXk9e2luZGV4fT57cGhyYXNlfTwvQW5pbWF0ZWRUZXh0PlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5mdW5jdGlvbiBBbmltYXRlZFRleHQoe2NoaWxkcmVufSkge1xuICAgIGNvbnN0IHRleHQgPSB1c2VSZWYobnVsbCk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCAoKSA9PiB7XG4gICAgICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG4gICAgICAgIGdzYXAuZnJvbSh0ZXh0LmN1cnJlbnQsIHtcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiB0ZXh0LmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgc2NydWI6IHRydWUsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiMHB4IGJvdHRvbVwiLFxuICAgICAgICAgICAgICAgIGVuZDogXCJib3R0b20rPTQwMHB4IGJvdHRvbVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICBsZWZ0OiBcIi0yMDBweFwiLFxuICAgICAgICAgICAgZWFzZTogXCJwb3dlcjMuT3V0XCJcbiAgICAgICAgfSlcbiAgICB9LCBbXSlcbiAgICByZXR1cm4gPHAgcmVmPXt0ZXh0fT57Y2hpbGRyZW59ICA8L3A+XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlUmVmIiwiU2Nyb2xsVHJpZ2dlciIsImdzYXAiLCJzdHlsZXMiLCJwaHJhc2VzIiwiSW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsIm1hcCIsInBocmFzZSIsImluZGV4IiwiQW5pbWF0ZWRUZXh0IiwiY2hpbGRyZW4iLCJ0ZXh0IiwicmVnaXN0ZXJQbHVnaW4iLCJmcm9tIiwiY3VycmVudCIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic2NydWIiLCJzdGFydCIsImVuZCIsIm9wYWNpdHkiLCJsZWZ0IiwiZWFzZSIsInAiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Description/index.jsx\n"));

/***/ })

});
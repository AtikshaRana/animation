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

/***/ "(app-client)/./src/components/Newone/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Newone/index.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"(app-client)/./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Index() {\n    _s();\n    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const pin = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.fromTo(sectionRef.current, {\n            translateX: 0\n        }, {\n            translateX: \"-300vw\",\n            ease: \"none\",\n            duration: 1,\n            scrollTrigger: {\n                trigger: triggerRef.current,\n                start: \"top top\",\n                end: \"2000 top\",\n                scrub: 0.6,\n                pin: true\n            }\n        });\n        return ()=>{\n            {}\n            pin.kill();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"scroll-section-outer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: triggerRef,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: sectionRef,\n                className: \"scroll-section-inner\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"scroll-section\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Section 1\"\n                        }, void 0, false, {\n                            fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Newone/index.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Newone/index.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"scroll-section\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Section 2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Newone/index.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Newone/index.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"scroll-section\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Section 3\"\n                        }, void 0, false, {\n                            fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Newone/index.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Newone/index.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"scroll-section\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Section 4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Newone/index.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Newone/index.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Newone/index.jsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Newone/index.jsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Newone/index.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"4T38NAjndkK2FQ/20bPVz/GD+3w=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvTmV3b25lL2luZGV4LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUQ7QUFDckI7QUFDNEI7QUFHeEQsU0FBU0s7O0lBQ1AsTUFBTUMsYUFBYUwsNkNBQU1BLENBQUM7SUFDMUIsTUFBTU0sYUFBYU4sNkNBQU1BLENBQUM7SUFFMUJFLHNDQUFJQSxDQUFDSyxlQUFlSixrRUFBYUE7SUFFakNGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sTUFBTU4sc0NBQUlBLENBQUNPLE9BQ2ZKLFdBQVdLLFNBQ1g7WUFDRUMsWUFBWTtRQUNkLEdBQ0E7WUFDRUEsWUFBWTtZQUNaQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsZUFBZTtnQkFDYkMsU0FBU1QsV0FBV0k7Z0JBQ3BCTSxPQUFPO2dCQUNQQyxLQUFLO2dCQUNMQyxPQUFPO2dCQUNQVixLQUFLO1lBQ1A7UUFDRjtRQUVGLE9BQU87WUFDTCxDQUF3RTtZQUN4RUEsSUFBSVc7UUFDTjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVO2tCQU1qQiw0RUFBQ0M7WUFBSUMsS0FBS2pCO3NCQUNSLDRFQUFDZ0I7Z0JBQUlDLEtBQUtsQjtnQkFBWWdCLFdBQVU7O2tDQUM5Qiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNHO3NDQUFHOzs7Ozs7Ozs7OztrQ0FFTiw4REFBQ0Y7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNHO3NDQUFHOzs7Ozs7Ozs7OztrQ0FFTiw4REFBQ0Y7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNHO3NDQUFHOzs7Ozs7Ozs7OztrQ0FFTiw4REFBQ0Y7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNHO3NDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEI7R0F4RFNwQjtLQUFBQTtBQTBEVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OZXdvbmUvaW5kZXguanN4PzUzMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIjtcblxuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3Qgc2VjdGlvblJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgdHJpZ2dlclJlZiA9IHVzZVJlZihudWxsKTtcblxuICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcGluID0gZ3NhcC5mcm9tVG8oXG4gICAgICBzZWN0aW9uUmVmLmN1cnJlbnQsXG4gICAgICB7XG4gICAgICAgIHRyYW5zbGF0ZVg6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0cmFuc2xhdGVYOiBcIi0zMDB2d1wiLFxuICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VyUmVmLmN1cnJlbnQsXG4gICAgICAgICAgc3RhcnQ6IFwidG9wIHRvcFwiLFxuICAgICAgICAgIGVuZDogXCIyMDAwIHRvcFwiLFxuICAgICAgICAgIHNjcnViOiAwLjYsXG4gICAgICAgICAgcGluOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHsvKiBBIHJldHVybiBmdW5jdGlvbiBmb3Iga2lsbGluZyB0aGUgYW5pbWF0aW9uIG9uIGNvbXBvbmVudCB1bm1vdW50ICovIH1cbiAgICAgIHBpbi5raWxsKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2Nyb2xsLXNlY3Rpb24tb3V0ZXJcIj5cbiAgICAgIHsvKiBUaGUgc2VjdGlvbiB1cCBhY3QganVzdCBhcyBhIHdyYXBwZXIuIElmIHRoZSB0cmlnZ2VyIChiZWxvdykgaXMgdGhlXG4gICAgICBmaXJzdCBqc3ggZWxlbWVudCBpbiB0aGUgY29tcG9uZW50LCB5b3UgZ2V0IGFuIGVycm9yIG9uIHJvdXRlIGNoYW5nZSAqL31cblxuICAgICAgey8qIFRoZSBkaXYgYmVsb3cgYWN0IGp1c3QgYXMgYSB0cmlnZ2VyLiBBcyB0aGUgZG9jIHN1Z2dlc3RzLCB0aGUgdHJpZ2dlciBhbmQgXG4gICAgICB0aGUgYW5pbWF0aW9uIHNob3VsZCBhbHdheSBiZSB0d28gc2VwYXJhdGVkIHJlZnMgKi99XG4gICAgICA8ZGl2IHJlZj17dHJpZ2dlclJlZn0+XG4gICAgICAgIDxkaXYgcmVmPXtzZWN0aW9uUmVmfSBjbGFzc05hbWU9XCJzY3JvbGwtc2VjdGlvbi1pbm5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxoMz5TZWN0aW9uIDE8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxoMz5TZWN0aW9uIDI8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxoMz5TZWN0aW9uIDM8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxoMz5TZWN0aW9uIDQ8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsIkluZGV4Iiwic2VjdGlvblJlZiIsInRyaWdnZXJSZWYiLCJyZWdpc3RlclBsdWdpbiIsInBpbiIsImZyb21UbyIsImN1cnJlbnQiLCJ0cmFuc2xhdGVYIiwiZWFzZSIsImR1cmF0aW9uIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJzdGFydCIsImVuZCIsInNjcnViIiwia2lsbCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJyZWYiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Newone/index.jsx\n"));

/***/ })

});
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

/***/ "(app-client)/./src/components/Intro/index.jsx":
/*!****************************************!*\
  !*** ./src/components/Intro/index.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.css */ \"(app-client)/./src/components/Intro/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-client)/./node_modules/gsap/ScrollTrigger.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Index() {\n    _s();\n    const background = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const introImage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n        const timeline = gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].timeline({\n            scrollTrigger: {\n                trigger: document.documentElement,\n                scrub: true,\n                start: \"top\",\n                end: \"+=500px\"\n            }\n        });\n        timeline.from(background.current, {\n            clipPath: \"inset(15%)\"\n        }).to(introImage.current, {\n            height: \"200px\"\n        }, 0);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().homeHeader),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().backgroundImage),\n                ref: background,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/images/background.jpeg\",\n                    fill: true,\n                    alt: \"background image\",\n                    priority: true\n                }, void 0, false, {\n                    fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Intro/index.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Intro/index.jsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().intro),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: introImage,\n                        \"data-scroll\": true,\n                        \"data-scroll-speed\": \"0.3\",\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().introImage),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/images/intro.png\",\n                            alt: \"intro image\",\n                            fill: true,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Intro/index.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Intro/index.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        \"data-scroll\": true,\n                        \"data-scroll-speed\": \"0.7\",\n                        children: \"SMOOTH Down\"\n                    }, void 0, false, {\n                        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Intro/index.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Intro/index.jsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Intro/index.jsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(Index, \"2A/mW1ZFtiPm8OgFOvz6So5gYj0=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvSW50cm8vaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNzRDtBQUNkO0FBQ1Q7QUFDUDtBQUMyQjtBQUVwQyxTQUFTTzs7SUFFcEIsTUFBTUMsYUFBYU4sNkNBQU1BLENBQUM7SUFDMUIsTUFBTU8sYUFBYVAsNkNBQU1BLENBQUM7SUFFMUJELHNEQUFlQSxDQUFFO1FBQ2JJLDRDQUFJQSxDQUFDSyxlQUFlSiw2REFBYUE7UUFFakMsTUFBTUssV0FBV04sNENBQUlBLENBQUNNLFNBQVM7WUFDM0JDLGVBQWU7Z0JBQ1hDLFNBQVNDLFNBQVNDO2dCQUNsQkMsT0FBTztnQkFDUEMsT0FBTztnQkFDUEMsS0FBSztZQUNUO1FBQ0o7UUFFQVAsU0FDS1EsS0FBS1gsV0FBV1ksU0FBUztZQUFDQyxVQUFXO1FBQVcsR0FDaERDLEdBQUdiLFdBQVdXLFNBQVM7WUFBQ0csUUFBUTtRQUFPLEdBQUc7SUFDbkQsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVd0QixxRUFBaUJ1Qjs7MEJBQzdCLDhEQUFDRjtnQkFBSUMsV0FBV3RCLDBFQUFzQndCO2dCQUFFQyxLQUFLcEI7MEJBQ3pDLDRFQUFDSixtREFBS0E7b0JBQ0Z5QixLQUFLO29CQUNMQyxNQUFNO29CQUNOQyxLQUFJO29CQUNKQyxVQUFVOzs7Ozs7Ozs7OzswQkFHbEIsOERBQUNSO2dCQUFJQyxXQUFXdEIsZ0VBQVk4Qjs7a0NBQ3BCLDhEQUFDVDt3QkFBSUksS0FBS25CO3dCQUFZeUIsYUFBVzt3QkFBQ0MscUJBQWtCO3dCQUFNVixXQUFXdEIscUVBQWlCTTtrQ0FDbEYsNEVBQUNMLG1EQUFLQTs0QkFDRnlCLEtBQUs7NEJBQ0xFLEtBQUk7NEJBQ0pELE1BQU07NEJBQ05FLFVBQVU7Ozs7Ozs7Ozs7O2tDQUdsQiw4REFBQ0k7d0JBQUdGLGFBQVc7d0JBQUNDLHFCQUFrQjtrQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVEO0dBN0N3QjVCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ludHJvL2luZGV4LmpzeD8zOWU0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSAnZ3NhcC9TY3JvbGxUcmlnZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IGludHJvSW1hZ2UgPSB1c2VSZWYobnVsbCk7XG5cbiAgICB1c2VMYXlvdXRFZmZlY3QoICgpID0+IHtcbiAgICAgICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuICAgICAgICBjb25zdCB0aW1lbGluZSA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICAgICAgICBzY3J1YjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdGFydDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICBlbmQ6IFwiKz01MDBweFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcblxuICAgICAgICB0aW1lbGluZVxuICAgICAgICAgICAgLmZyb20oYmFja2dyb3VuZC5jdXJyZW50LCB7Y2xpcFBhdGg6IGBpbnNldCgxNSUpYH0pXG4gICAgICAgICAgICAudG8oaW50cm9JbWFnZS5jdXJyZW50LCB7aGVpZ2h0OiBcIjIwMHB4XCJ9LCAwKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lSGVhZGVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZEltYWdlfSByZWY9e2JhY2tncm91bmR9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgc3JjPXsnL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZWcnfVxuICAgICAgICAgICAgICAgICAgICBmaWxsPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJiYWNrZ3JvdW5kIGltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk9e3RydWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtpbnRyb0ltYWdlfSBkYXRhLXNjcm9sbCBkYXRhLXNjcm9sbC1zcGVlZD1cIjAuM1wiIGNsYXNzTmFtZT17c3R5bGVzLmludHJvSW1hZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsnL2ltYWdlcy9pbnRyby5wbmcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImludHJvIGltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPXt0cnVlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDEgZGF0YS1zY3JvbGwgZGF0YS1zY3JvbGwtc3BlZWQ9XCIwLjdcIj5TTU9PVEggRG93bjwvaDE+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsInN0eWxlcyIsIkltYWdlIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJJbmRleCIsImJhY2tncm91bmQiLCJpbnRyb0ltYWdlIiwicmVnaXN0ZXJQbHVnaW4iLCJ0aW1lbGluZSIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3J1YiIsInN0YXJ0IiwiZW5kIiwiZnJvbSIsImN1cnJlbnQiLCJjbGlwUGF0aCIsInRvIiwiaGVpZ2h0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaG9tZUhlYWRlciIsImJhY2tncm91bmRJbWFnZSIsInJlZiIsInNyYyIsImZpbGwiLCJhbHQiLCJwcmlvcml0eSIsImludHJvIiwiZGF0YS1zY3JvbGwiLCJkYXRhLXNjcm9sbC1zcGVlZCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Intro/index.jsx\n"));

/***/ })

});
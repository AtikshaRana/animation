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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.css */ \"(app-client)/./src/components/Intro/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-client)/./node_modules/gsap/ScrollTrigger.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Index() {\n    _s();\n    const background = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const introImage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n        const timeline = gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].timeline({\n            scrollTrigger: {\n                trigger: document.documentElement,\n                scrub: true,\n                start: \"top\",\n                end: \"+=500px\"\n            }\n        });\n        timeline.from(background.current, {\n            clipPath: \"inset(15%)\"\n        }).to(introImage.current, {\n            height: \"200px\"\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().homeHeader),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().backgroundImage),\n                ref: background,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/images/premium_photo-1673971700988-346588461fa7.avif\",\n                    fill: true,\n                    alt: \"background image\",\n                    priority: true\n                }, void 0, false, {\n                    fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Intro/index.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Intro/index.jsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().intro),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: introImage,\n                        \"data-scroll\": true,\n                        \"data-scroll-speed\": \"0.3\",\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().introImage),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/images/premium_photo-1673374235916-79c1a9016ce0.avif\",\n                            alt: \"intro image\",\n                            fill: true,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Intro/index.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Intro/index.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        \"data-scroll\": true,\n                        \"data-scroll-speed\": \"0.7\",\n                        children: \"SCROLL DOWN\"\n                    }, void 0, false, {\n                        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Intro/index.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Intro/index.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Intro/index.jsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(Index, \"2A/mW1ZFtiPm8OgFOvz6So5gYj0=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvSW50cm8vaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNzRDtBQUNkO0FBQ1Q7QUFDUDtBQUMyQjtBQUVwQyxTQUFTTzs7SUFFcEIsTUFBTUMsYUFBYU4sNkNBQU1BLENBQUM7SUFDMUIsTUFBTU8sYUFBYVAsNkNBQU1BLENBQUM7SUFFMUJELHNEQUFlQSxDQUFFO1FBQ2JJLDRDQUFJQSxDQUFDSyxlQUFlSiw2REFBYUE7UUFFakMsTUFBTUssV0FBV04sNENBQUlBLENBQUNNLFNBQVM7WUFDM0JDLGVBQWU7Z0JBQ1hDLFNBQVNDLFNBQVNDO2dCQUNsQkMsT0FBTztnQkFDUEMsT0FBTztnQkFDUEMsS0FBSztZQUNUO1FBQ0o7UUFDQVAsU0FDS1EsS0FBS1gsV0FBV1ksU0FBUztZQUFDQyxVQUFXO1FBQVcsR0FDaERDLEdBQUdiLFdBQVdXLFNBQVM7WUFBQ0csUUFBUTtRQUFPO0lBQ2hELEdBQUcsRUFBRTtJQUNMLHFCQUNJLDhEQUFDQztRQUFRQyxXQUFXdEIscUVBQWlCdUI7OzBCQUNqQyw4REFBQ0M7Z0JBQUlGLFdBQVd0QiwwRUFBc0J5QjtnQkFBRUMsS0FBS3JCOzBCQUN6Qyw0RUFBQ0osbURBQUtBO29CQUNGMEIsS0FBSztvQkFDTEMsTUFBTTtvQkFDTkMsS0FBSTtvQkFDSkMsVUFBVTs7Ozs7Ozs7Ozs7MEJBR2xCLDhEQUFDTjtnQkFBSUYsV0FBV3RCLGdFQUFZK0I7O2tDQUNwQiw4REFBQ1A7d0JBQUlFLEtBQUtwQjt3QkFBWTBCLGFBQVc7d0JBQUNDLHFCQUFrQjt3QkFBTVgsV0FBV3RCLHFFQUFpQk07a0NBQ2xGLDRFQUFDTCxtREFBS0E7NEJBQ0YwQixLQUFLOzRCQUNMRSxLQUFJOzRCQUNKRCxNQUFNOzRCQUNORSxVQUFVOzs7Ozs7Ozs7OztrQ0FHbEIsOERBQUNJO3dCQUFHRixhQUFXO3dCQUFDQyxxQkFBa0I7a0NBQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RDtHQTNDd0I3QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9JbnRyby9pbmRleC5qc3g/MzllNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gJ2dzYXAvU2Nyb2xsVHJpZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBpbnRyb0ltYWdlID0gdXNlUmVmKG51bGwpO1xuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCAoKSA9PiB7XG4gICAgICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbiAgICAgICAgY29uc3QgdGltZWxpbmUgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgc2NydWI6IHRydWUsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgZW5kOiBcIis9NTAwcHhcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIHRpbWVsaW5lXG4gICAgICAgICAgICAuZnJvbShiYWNrZ3JvdW5kLmN1cnJlbnQsIHtjbGlwUGF0aDogYGluc2V0KDE1JSlgfSlcbiAgICAgICAgICAgIC50byhpbnRyb0ltYWdlLmN1cnJlbnQsIHtoZWlnaHQ6IFwiMjAwcHhcIn0pXG4gICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaG9tZUhlYWRlcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmRJbWFnZX0gcmVmPXtiYWNrZ3JvdW5kfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Jy9pbWFnZXMvcHJlbWl1bV9waG90by0xNjczOTcxNzAwOTg4LTM0NjU4ODQ2MWZhNy5hdmlmJ31cbiAgICAgICAgICAgICAgICAgICAgZmlsbD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiYmFja2dyb3VuZCBpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5PXt0cnVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW50cm99PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17aW50cm9JbWFnZX0gZGF0YS1zY3JvbGwgZGF0YS1zY3JvbGwtc3BlZWQ9XCIwLjNcIiBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb0ltYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Jy9pbWFnZXMvcHJlbWl1bV9waG90by0xNjczMzc0MjM1OTE2LTc5YzFhOTAxNmNlMC5hdmlmJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbnRybyBpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD17dHJ1ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGRhdGEtc2Nyb2xsIGRhdGEtc2Nyb2xsLXNwZWVkPVwiMC43XCI+U0NST0xMIERPV048L2gxPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlUmVmIiwic3R5bGVzIiwiSW1hZ2UiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsIkluZGV4IiwiYmFja2dyb3VuZCIsImludHJvSW1hZ2UiLCJyZWdpc3RlclBsdWdpbiIsInRpbWVsaW5lIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcnViIiwic3RhcnQiLCJlbmQiLCJmcm9tIiwiY3VycmVudCIsImNsaXBQYXRoIiwidG8iLCJoZWlnaHQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaG9tZUhlYWRlciIsImRpdiIsImJhY2tncm91bmRJbWFnZSIsInJlZiIsInNyYyIsImZpbGwiLCJhbHQiLCJwcmlvcml0eSIsImludHJvIiwiZGF0YS1zY3JvbGwiLCJkYXRhLXNjcm9sbC1zcGVlZCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Intro/index.jsx\n"));

/***/ })

});
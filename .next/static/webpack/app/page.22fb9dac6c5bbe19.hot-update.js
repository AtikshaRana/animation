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

/***/ "(app-client)/./src/components/Projects/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/Projects/index.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.css */ \"(app-client)/./src/components/Projects/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-client)/./node_modules/gsap/ScrollTrigger.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst projects = [\n    {\n        title: \"Lorem, ipsum dolor\",\n        src: \"red-flowers.avif\"\n    },\n    {\n        title: \"amet consectetur\",\n        src: \"road.avif\"\n    },\n    {\n        title: \"consequatur nam cum\",\n        src: \"flower.jpeg\"\n    },\n    {\n        title: \"deserunt consequatur\",\n        src: \"miniques_lagoon.jpg\"\n    }\n];\nfunction Index() {\n    _s();\n    const [selectedProject, setSelectedProject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const container = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const imageContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger.create({\n            trigger: imageContainer.current,\n            pin: true,\n            start: \"top-=100px\",\n            end: \"bottom top\"\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: container,\n        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().projects),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().projectDescription),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: imageContainer,\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().imageContainer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/images/\".concat(projects[selectedProject].src),\n                            fill: true,\n                            alt: \"project image\",\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Projects/index.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Projects/index.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().column),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Lorem ipsum dolor sit, amet consectetur, quae placeat cumque exercitationem dolore! Accusantium!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Projects/index.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Projects/index.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().column),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa mollitia deserunt consequatur nam cum, cupiditate in voluptas quisquam atque quo rem illum quibusdam expedita a debitis tempore culpa, nobis nisi.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Projects/index.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Projects/index.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Projects/index.jsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().projectList),\n                children: projects.map((project, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onMouseOver: ()=>{\n                            setSelectedProject(index);\n                        },\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().projectEl),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: project.title\n                        }, void 0, false, {\n                            fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Projects/index.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 29\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Projects/index.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 32\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Projects/index.jsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/components/Projects/index.jsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n_s(Index, \"+filPxxER+cDIbwZF5gs8AWugbY=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFnRTtBQUN4QjtBQUNUO0FBQ1A7QUFDMkI7QUFFbkQsTUFBTVEsV0FBVztJQUNiO1FBQ0lDLE9BQU87UUFDUEMsS0FBSztJQUNUO0lBQ0E7UUFDSUQsT0FBTztRQUNQQyxLQUFLO0lBQ1Q7SUFDQTtRQUNJRCxPQUFPO1FBQ1BDLEtBQUs7SUFDVDtJQUNBO1FBQ0lELE9BQU87UUFDUEMsS0FBSztJQUNUO0NBQ0g7QUFFYyxTQUFTQzs7SUFFcEIsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNYSxZQUFZWCw2Q0FBTUEsQ0FBQztJQUN6QixNQUFNWSxpQkFBaUJaLDZDQUFNQSxDQUFDO0lBRTlCRCxzREFBZUEsQ0FBRTtRQUNiSSw0Q0FBSUEsQ0FBQ1UsZUFBZVQsNkRBQWFBO1FBQ2pDQSw2REFBYUEsQ0FBQ1UsT0FBTztZQUNqQkMsU0FBU0gsZUFBZUk7WUFDeEJDLEtBQUs7WUFDTEMsT0FBTztZQUNQQyxLQUFLO1FBQ1Q7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0M7UUFBSUMsS0FBS1Y7UUFBV1csV0FBV3JCLG1FQUFlSTs7MEJBQzNDLDhEQUFDZTtnQkFBSUUsV0FBV3JCLDZFQUF5QnNCOztrQ0FDckMsOERBQUNIO3dCQUFJQyxLQUFLVDt3QkFBZ0JVLFdBQVdyQix5RUFBcUJXO2tDQUN0RCw0RUFBQ1YsbURBQUtBOzRCQUNGSyxLQUFLLFdBQXlDLE9BQTlCRixRQUFRLENBQUNJLGdCQUFnQixDQUFDRjs0QkFDMUNpQixNQUFNOzRCQUNOQyxLQUFJOzRCQUNKQyxVQUFVOzs7Ozs7Ozs7OztrQ0FHbEIsOERBQUNOO3dCQUFJRSxXQUFXckIsaUVBQWEwQjtrQ0FDekIsNEVBQUNDO3NDQUFFOzs7Ozs7Ozs7OztrQ0FFUCw4REFBQ1I7d0JBQUlFLFdBQVdyQixpRUFBYTBCO2tDQUN6Qiw0RUFBQ0M7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdYLDhEQUFDUjtnQkFBSUUsV0FBV3JCLHNFQUFrQjRCOzBCQUUxQnhCLFNBQVN5QixJQUFLLENBQUNDLFNBQVNDO29CQUNwQixxQkFBTyw4REFBQ1o7d0JBQWdCYSxhQUFhOzRCQUFPdkIsbUJBQW1Cc0I7d0JBQU07d0JBQUdWLFdBQVdyQixvRUFBZ0JpQztrQ0FDL0YsNEVBQUNDO3NDQUFJSixRQUFRekI7Ozs7Ozt1QkFEQTBCOzs7OztnQkFHckI7Ozs7Ozs7Ozs7OztBQUtwQjtHQTdDd0J4QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy9pbmRleC5qc3g/NmIxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tICdnc2FwL1Njcm9sbFRyaWdnZXInO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkxvcmVtLCBpcHN1bSBkb2xvclwiLFxuICAgICAgICBzcmM6IFwicmVkLWZsb3dlcnMuYXZpZlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcImFtZXQgY29uc2VjdGV0dXJcIixcbiAgICAgICAgc3JjOiBcInJvYWQuYXZpZlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcImNvbnNlcXVhdHVyIG5hbSBjdW1cIixcbiAgICAgICAgc3JjOiBcImZsb3dlci5qcGVnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiZGVzZXJ1bnQgY29uc2VxdWF0dXJcIixcbiAgICAgICAgc3JjOiBcIm1pbmlxdWVzX2xhZ29vbi5qcGdcIlxuICAgIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuXG4gICAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IHVzZVJlZihudWxsKTtcblxuICAgIHVzZUxheW91dEVmZmVjdCggKCkgPT4ge1xuICAgICAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuICAgICAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICB0cmlnZ2VyOiBpbWFnZUNvbnRhaW5lci5jdXJyZW50LFxuICAgICAgICAgICAgcGluOiB0cnVlLFxuICAgICAgICAgICAgc3RhcnQ6IFwidG9wLT0xMDBweFwiLFxuICAgICAgICAgICAgZW5kOiAnYm90dG9tIHRvcCcsXG4gICAgICAgIH0pXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHJlZj17Y29udGFpbmVyfSBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0c30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3REZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e2ltYWdlQ29udGFpbmVyfSBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvJHtwcm9qZWN0c1tzZWxlY3RlZFByb2plY3RdLnNyY31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2plY3QgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2x1bW59PlxuICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIsIHF1YWUgcGxhY2VhdCBjdW1xdWUgZXhlcmNpdGF0aW9uZW0gZG9sb3JlISBBY2N1c2FudGl1bSE8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2x1bW59PlxuICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSXBzYSBtb2xsaXRpYSBkZXNlcnVudCBjb25zZXF1YXR1ciBuYW0gY3VtLCBjdXBpZGl0YXRlIGluIHZvbHVwdGFzIHF1aXNxdWFtIGF0cXVlIHF1byByZW0gaWxsdW0gcXVpYnVzZGFtIGV4cGVkaXRhIGEgZGViaXRpcyB0ZW1wb3JlIGN1bHBhLCBub2JpcyBuaXNpLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0TGlzdH0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy5tYXAoIChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gb25Nb3VzZU92ZXI9eygpID0+IHtzZXRTZWxlY3RlZFByb2plY3QoaW5kZXgpfX0gY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdEVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3Byb2plY3QudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsInN0eWxlcyIsIkltYWdlIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJwcm9qZWN0cyIsInRpdGxlIiwic3JjIiwiSW5kZXgiLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJjb250YWluZXIiLCJpbWFnZUNvbnRhaW5lciIsInJlZ2lzdGVyUGx1Z2luIiwiY3JlYXRlIiwidHJpZ2dlciIsImN1cnJlbnQiLCJwaW4iLCJzdGFydCIsImVuZCIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsInByb2plY3REZXNjcmlwdGlvbiIsImZpbGwiLCJhbHQiLCJwcmlvcml0eSIsImNvbHVtbiIsInAiLCJwcm9qZWN0TGlzdCIsIm1hcCIsInByb2plY3QiLCJpbmRleCIsIm9uTW91c2VPdmVyIiwicHJvamVjdEVsIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Projects/index.jsx\n"));

/***/ })

});
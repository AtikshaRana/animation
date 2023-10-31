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

/***/ "(app-client)/./src/app/component/slides.jsx":
/*!**************************************!*\
  !*** ./src/app/component/slides.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"(app-client)/./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// import Style from \"./style.module.css\";\n\nconst Slides = ()=>{\n    _s();\n    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const pin = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.fromTo(sectionRef.current, {\n            translateX: 0\n        }, {\n            translateX: \"-300vw\",\n            ease: \"none\",\n            duration: 1,\n            scrollTrigger: {\n                trigger: triggerRef.current,\n                start: \"top-=10%\",\n                end: \"2000 top\",\n                scrub: 0.6,\n                pin: true\n            }\n        });\n        return ()=>{\n            {\n            /* A return function for killing the animation on component unmount */ }\n            pin.kill();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-neutral-800\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex h-48 items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"font-semibold uppercase text-neutral-500\",\n                    children: \"Scroll down\"\n                }, void 0, false, {\n                    fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/component/slides.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/component/slides.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                ref: targetRef,\n                className: \"relative h-[300vh] bg-neutral-900\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sticky top-0 flex h-screen items-center overflow-hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(motion.div, {\n                            style: {\n                                x\n                            },\n                            className: \"flex gap-4\",\n                            children: cards.map((card)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                    card: card\n                                }, card.id, false, {\n                                    fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/component/slides.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 20\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/component/slides.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/component/slides.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"relative bg-neutral-900\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: triggerRef,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: sectionRef,\n                                className: \"scroll-section-inner\",\n                                children: cards.map((card)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"group relative h-[450px] w-[450px] overflow-hidden bg-purple scroll-section \".concat(data.color),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                style: {\n                                                    backgroundImage: \"url(\".concat(card.url, \")\"),\n                                                    backgroundSize: \"cover\",\n                                                    backgroundPosition: \"center\"\n                                                },\n                                                className: \"absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/component/slides.jsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 13\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"absolute inset-0 z-10 grid place-content-center\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg\",\n                                                    children: card.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/component/slides.jsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 15\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/component/slides.jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 13\n                                            }, undefined)\n                                        ]\n                                    }, card.id, true, {\n                                        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/component/slides.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 23\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/component/slides.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 9\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/component/slides.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/component/slides.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/component/slides.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex h-48 items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"font-semibold uppercase text-neutral-500\",\n                    children: \"Scroll up\"\n                }, void 0, false, {\n                    fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/component/slides.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/component/slides.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/atiksha/Desktop/next-folder/animation/src/app/component/slides.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Slides, \"4T38NAjndkK2FQ/20bPVz/GD+3w=\");\n_c = Slides;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slides);\nconst cards = [\n    {\n        url: \"/imgs/abstract/1.jpg\",\n        title: \"Title 1\",\n        id: 1\n    },\n    {\n        url: \"/imgs/abstract/2.jpg\",\n        title: \"Title 2\",\n        id: 2\n    },\n    {\n        url: \"/imgs/abstract/3.jpg\",\n        title: \"Title 3\",\n        id: 3\n    },\n    {\n        url: \"/imgs/abstract/4.jpg\",\n        title: \"Title 4\",\n        id: 4\n    },\n    {\n        url: \"/imgs/abstract/5.jpg\",\n        title: \"Title 5\",\n        id: 5\n    },\n    {\n        url: \"/imgs/abstract/6.jpg\",\n        title: \"Title 6\",\n        id: 6\n    },\n    {\n        url: \"/imgs/abstract/7.jpg\",\n        title: \"Title 7\",\n        id: 7\n    }\n];\nvar _c;\n$RefreshReg$(_c, \"Slides\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnQvc2xpZGVzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDaUQ7QUFDckI7QUFDNUIsMENBQTBDO0FBQ2M7QUFFeEQsTUFBTUssU0FBUzs7SUFDWCxNQUFNQyxhQUFhTCw2Q0FBTUEsQ0FBQztJQUMxQixNQUFNTSxhQUFhTiw2Q0FBTUEsQ0FBQztJQUMxQkUsc0NBQUlBLENBQUNLLGVBQWVKLGtFQUFhQTtJQUNqQ0YsZ0RBQVNBLENBQUM7UUFDTixNQUFNTyxNQUFNTixzQ0FBSUEsQ0FBQ08sT0FDZkosV0FBV0ssU0FDWDtZQUNFQyxZQUFZO1FBQ2QsR0FDQTtZQUNFQSxZQUFZO1lBQ1pDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxlQUFlO2dCQUNiQyxTQUFTVCxXQUFXSTtnQkFDcEJNLE9BQU87Z0JBQ1BDLEtBQUs7Z0JBQ0xDLE9BQU87Z0JBQ1BWLEtBQUs7WUFDUDtRQUNGO1FBRUYsT0FBTztZQUNMO1lBQ0Usb0VBQW9FLEdBQ3RFO1lBQ0FBLElBQUlXO1FBQ047SUFDRixHQUFHLEVBQUU7SUFDVCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBS0QsV0FBVTs4QkFBMkM7Ozs7Ozs7Ozs7OzBCQUk3RCw4REFBQ0U7Z0JBQVFDLEtBQUtDO2dCQUFXSixXQUFVOztrQ0FDbkMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDSyxPQUFPTjs0QkFBSU8sT0FBTztnQ0FBRUM7NEJBQUU7NEJBQUdQLFdBQVU7c0NBQ2pDUSxNQUFNQyxJQUFJLENBQUNDO2dDQUNWLHFCQUFPLDhEQUFDQztvQ0FBS0QsTUFBTUE7bUNBQVdBLEtBQUtFOzs7Ozs0QkFDckM7Ozs7Ozs7Ozs7O2tDQUdKLDhEQUFDVjt3QkFBUUYsV0FBVTtrQ0FDbkIsNEVBQUNEOzRCQUFJSSxLQUFLbEI7c0NBQ1IsNEVBQUNjO2dDQUFJSSxLQUFLbkI7Z0NBQVlnQixXQUFVOzBDQUM1QlEsTUFBTUMsSUFBSSxDQUFDQztvQ0FDWCxxQkFBVSw4REFBQ1g7d0NBQWtCQyxXQUFXLCtFQUEwRixPQUFYYSxLQUFLQzs7MERBQzVILDhEQUFDZjtnREFDQ08sT0FBTztvREFDTFMsaUJBQWlCLE9BQWdCLE9BQVRMLEtBQUtNLEtBQUk7b0RBQ2pDQyxnQkFBZ0I7b0RBQ2hCQyxvQkFBb0I7Z0RBQ3RCO2dEQUNBbEIsV0FBVTs7Ozs7OzBEQUVaLDhEQUFDRDtnREFBSUMsV0FBVTswREFDYiw0RUFBQ21CO29EQUFFbkIsV0FBVTs4REFDVlUsS0FBS1U7Ozs7Ozs7Ozs7Ozt1Q0FYVVYsS0FBS0U7Ozs7O2dDQWUzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLSiw4REFBQ2I7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFLRCxXQUFVOzhCQUEyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkU7R0E1RU1qQjtLQUFBQTtBQWtGTiwrREFBZUEsTUFBTUEsRUFBQztBQUV0QixNQUFNeUIsUUFBUTtJQUNaO1FBQ0VRLEtBQUs7UUFDTEksT0FBTztRQUNQUixJQUFJO0lBQ047SUFDQTtRQUNFSSxLQUFLO1FBQ0xJLE9BQU87UUFDUFIsSUFBSTtJQUNOO0lBQ0E7UUFDRUksS0FBSztRQUNMSSxPQUFPO1FBQ1BSLElBQUk7SUFDTjtJQUNBO1FBQ0VJLEtBQUs7UUFDTEksT0FBTztRQUNQUixJQUFJO0lBQ047SUFDQTtRQUNFSSxLQUFLO1FBQ0xJLE9BQU87UUFDUFIsSUFBSTtJQUNOO0lBQ0E7UUFDRUksS0FBSztRQUNMSSxPQUFPO1FBQ1BSLElBQUk7SUFDTjtJQUNBO1FBQ0VJLEtBQUs7UUFDTEksT0FBTztRQUNQUixJQUFJO0lBQ047Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudC9zbGlkZXMuanN4PzdjMzQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbi8vIGltcG9ydCBTdHlsZSBmcm9tIFwiLi9zdHlsZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XG5cbmNvbnN0IFNsaWRlcyA9ICgpID0+IHtcbiAgICBjb25zdCBzZWN0aW9uUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHRyaWdnZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBwaW4gPSBnc2FwLmZyb21UbyhcbiAgICAgICAgICBzZWN0aW9uUmVmLmN1cnJlbnQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHJhbnNsYXRlWDogMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6IFwiLTMwMHZ3XCIsXG4gICAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VyUmVmLmN1cnJlbnQsXG4gICAgICAgICAgICAgIHN0YXJ0OiBcInRvcC09MTAlXCIsXG4gICAgICAgICAgICAgIGVuZDogXCIyMDAwIHRvcFwiLFxuICAgICAgICAgICAgICBzY3J1YjogMC42LFxuICAgICAgICAgICAgICBwaW46IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvKiBBIHJldHVybiBmdW5jdGlvbiBmb3Iga2lsbGluZyB0aGUgYW5pbWF0aW9uIG9uIGNvbXBvbmVudCB1bm1vdW50ICovXG4gICAgICAgICAgfVxuICAgICAgICAgIHBpbi5raWxsKCk7XG4gICAgICAgIH07XG4gICAgICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1uZXV0cmFsLTgwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtNDggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRleHQtbmV1dHJhbC01MDBcIj5cbiAgICAgICAgICBTY3JvbGwgZG93blxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzZWN0aW9uIHJlZj17dGFyZ2V0UmVmfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLVszMDB2aF0gYmctbmV1dHJhbC05MDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIGZsZXggaC1zY3JlZW4gaXRlbXMtY2VudGVyIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8bW90aW9uLmRpdiBzdHlsZT17eyB4IH19IGNsYXNzTmFtZT1cImZsZXggZ2FwLTRcIj5cbiAgICAgICAgICB7Y2FyZHMubWFwKChjYXJkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPENhcmQgY2FyZD17Y2FyZH0ga2V5PXtjYXJkLmlkfSAvPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1uZXV0cmFsLTkwMFwiPlxuICAgICAgPGRpdiByZWY9e3RyaWdnZXJSZWZ9PlxuICAgICAgICA8ZGl2IHJlZj17c2VjdGlvblJlZn0gY2xhc3NOYW1lPVwic2Nyb2xsLXNlY3Rpb24taW5uZXJcIj5cbiAgICAgICAgICAge2NhcmRzLm1hcCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICAgIDxkaXYga2V5PXtjYXJkLmlkfSBjbGFzc05hbWU9e2Bncm91cCByZWxhdGl2ZSBoLVs0NTBweF0gdy1bNDUwcHhdIG92ZXJmbG93LWhpZGRlbiBiZy1wdXJwbGUgc2Nyb2xsLXNlY3Rpb24gJHtkYXRhLmNvbG9yfWB9PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2NhcmQudXJsfSlgLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHotMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwXCJcbiAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB6LTEwIGdyaWQgcGxhY2UtY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYnIgZnJvbS13aGl0ZS8yMCB0by13aGl0ZS8wIHAtOCB0ZXh0LTZ4bCBmb250LWJsYWNrIHVwcGVyY2FzZSB0ZXh0LXdoaXRlIGJhY2tkcm9wLWJsdXItbGdcIj5cbiAgICAgICAgICAgICAgICB7Y2FyZC50aXRsZX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLTQ4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0ZXh0LW5ldXRyYWwtNTAwXCI+XG4gICAgICAgICAgU2Nyb2xsIHVwXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXM7XG5cbmNvbnN0IGNhcmRzID0gW1xuICB7XG4gICAgdXJsOiBcIi9pbWdzL2Fic3RyYWN0LzEuanBnXCIsXG4gICAgdGl0bGU6IFwiVGl0bGUgMVwiLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdXJsOiBcIi9pbWdzL2Fic3RyYWN0LzIuanBnXCIsXG4gICAgdGl0bGU6IFwiVGl0bGUgMlwiLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdXJsOiBcIi9pbWdzL2Fic3RyYWN0LzMuanBnXCIsXG4gICAgdGl0bGU6IFwiVGl0bGUgM1wiLFxuICAgIGlkOiAzLFxuICB9LFxuICB7XG4gICAgdXJsOiBcIi9pbWdzL2Fic3RyYWN0LzQuanBnXCIsXG4gICAgdGl0bGU6IFwiVGl0bGUgNFwiLFxuICAgIGlkOiA0LFxuICB9LFxuICB7XG4gICAgdXJsOiBcIi9pbWdzL2Fic3RyYWN0LzUuanBnXCIsXG4gICAgdGl0bGU6IFwiVGl0bGUgNVwiLFxuICAgIGlkOiA1LFxuICB9LFxuICB7XG4gICAgdXJsOiBcIi9pbWdzL2Fic3RyYWN0LzYuanBnXCIsXG4gICAgdGl0bGU6IFwiVGl0bGUgNlwiLFxuICAgIGlkOiA2LFxuICB9LFxuICB7XG4gICAgdXJsOiBcIi9pbWdzL2Fic3RyYWN0LzcuanBnXCIsXG4gICAgdGl0bGU6IFwiVGl0bGUgN1wiLFxuICAgIGlkOiA3LFxuICB9LFxuXTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsIlNsaWRlcyIsInNlY3Rpb25SZWYiLCJ0cmlnZ2VyUmVmIiwicmVnaXN0ZXJQbHVnaW4iLCJwaW4iLCJmcm9tVG8iLCJjdXJyZW50IiwidHJhbnNsYXRlWCIsImVhc2UiLCJkdXJhdGlvbiIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJzY3J1YiIsImtpbGwiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwic2VjdGlvbiIsInJlZiIsInRhcmdldFJlZiIsIm1vdGlvbiIsInN0eWxlIiwieCIsImNhcmRzIiwibWFwIiwiY2FyZCIsIkNhcmQiLCJpZCIsImRhdGEiLCJjb2xvciIsImJhY2tncm91bmRJbWFnZSIsInVybCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwicCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/component/slides.jsx\n"));

/***/ })

});
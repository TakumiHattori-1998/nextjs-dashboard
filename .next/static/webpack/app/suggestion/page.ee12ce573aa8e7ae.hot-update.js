"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/suggestion/page",{

/***/ "(app-pages-browser)/./app/ui/suggestion/enter-form.tsx":
/*!******************************************!*\
  !*** ./app/ui/suggestion/enter-form.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EnterForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-2024_ma5zmqaxqio5fndyl5qy52jyg4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_ui_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/ui/fonts */ \"(app-pages-browser)/./app/ui/fonts.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-2024_ma5zmqaxqio5fndyl5qy52jyg4/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction EnterForm() {\n    _s();\n    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const fetchScreenshot = async ()=>{\n        try {\n            const response = await fetch(\"/api/fetchhtml?url=\".concat(encodeURIComponent(url)));\n            if (response.ok) {\n                console.log(response);\n            } else {\n                console.error('response is not ok');\n            }\n        } catch (error) {\n            console.error('Failed to fetch screenshot');\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full flex-col md:col-span-4 ml-[20px] mt-[20px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"\".concat(_app_ui_fonts__WEBPACK_IMPORTED_MODULE_1__.lusitana.className, \" mb-4 text-xl md:text-2xl\"),\n                children: \"Enter URL to test\"\n            }, void 0, false, {\n                fileName: \"/Users/hattoritakumi/gyomu/チャレプロ/tech/workspace2/kadai6/api_app/nextjs-dashboard/app/ui/suggestion/enter-form.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-[10px] max-w-[800px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"bg-gray-50 border-none rounded-xl w-[70%] focus:outline-none\",\n                        type: \"text\",\n                        onChange: (e)=>setUrl(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/hattoritakumi/gyomu/チャレプロ/tech/workspace2/kadai6/api_app/nextjs-dashboard/app/ui/suggestion/enter-form.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-gray-500 border-none text-white rounded-xl w-[20%]\",\n                        onClick: fetchScreenshot,\n                        children: \"check design\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hattoritakumi/gyomu/チャレプロ/tech/workspace2/kadai6/api_app/nextjs-dashboard/app/ui/suggestion/enter-form.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hattoritakumi/gyomu/チャレプロ/tech/workspace2/kadai6/api_app/nextjs-dashboard/app/ui/suggestion/enter-form.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hattoritakumi/gyomu/チャレプロ/tech/workspace2/kadai6/api_app/nextjs-dashboard/app/ui/suggestion/enter-form.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(EnterForm, \"ZV/BRor2ecoM1gSD+06O4c7I8qc=\");\n_c = EnterForm;\nvar _c;\n$RefreshReg$(_c, \"EnterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9zdWdnZXN0aW9uL2VudGVyLWZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFMEM7QUFDVDtBQUdsQixTQUFTRTs7SUFDcEIsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdILCtDQUFRQSxDQUFTO0lBQ3ZDLE1BQU1JLGtCQUFrQjtRQUNwQixJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHNCQUE4QyxPQUF4QkMsbUJBQW1CTDtZQUN0RSxJQUFJRyxTQUFTRyxFQUFFLEVBQUU7Z0JBQ2JDLFFBQVFDLEdBQUcsQ0FBQ0w7WUFDaEIsT0FBTTtnQkFDRkksUUFBUUUsS0FBSyxDQUFDO1lBQ2xCO1FBQ0osRUFBQyxPQUFPQSxPQUFNO1lBQ1ZGLFFBQVFFLEtBQUssQ0FBQztRQUNsQjtJQUNKO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVyxHQUFzQixPQUFuQmQsbURBQVFBLENBQUNjLFNBQVMsRUFBQzswQkFBNEI7Ozs7OzswQkFHakUsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0U7d0JBQU1GLFdBQVU7d0JBQStERyxNQUFLO3dCQUFPQyxVQUFVLENBQUNDLElBQU1mLE9BQU9lLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7O2tDQUNsSSw4REFBQ0M7d0JBQU9SLFdBQVU7d0JBQXdEUyxTQUFTbEI7a0NBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEg7R0ExQndCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdWkvc3VnZ2VzdGlvbi9lbnRlci1mb3JtLnRzeD9mODJiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IGx1c2l0YW5hIH0gZnJvbSAnQC9hcHAvdWkvZm9udHMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRW50ZXJGb3JtICgpIHtcbiAgICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gICAgY29uc3QgZmV0Y2hTY3JlZW5zaG90ID0gYXN5bmMoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2ZldGNoaHRtbD91cmw9JHtlbmNvZGVVUklDb21wb25lbnQodXJsKX1gKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3Jlc3BvbnNlIGlzIG5vdCBvaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9Y2F0Y2ggKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBzY3JlZW5zaG90Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LWNvbCBtZDpjb2wtc3Bhbi00IG1sLVsyMHB4XSBtdC1bMjBweF1cIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Ake2x1c2l0YW5hLmNsYXNzTmFtZX0gbWItNCB0ZXh0LXhsIG1kOnRleHQtMnhsYH0+XG4gICAgICAgICAgICAgICAgRW50ZXIgVVJMIHRvIHRlc3RcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC1bMTBweF0gbWF4LXctWzgwMHB4XVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlci1ub25lIHJvdW5kZWQteGwgdy1bNzAlXSBmb2N1czpvdXRsaW5lLW5vbmVcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXJsKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS01MDAgYm9yZGVyLW5vbmUgdGV4dC13aGl0ZSByb3VuZGVkLXhsIHctWzIwJV1cIiBvbkNsaWNrPXtmZXRjaFNjcmVlbnNob3R9PmNoZWNrIGRlc2lnbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbImx1c2l0YW5hIiwidXNlU3RhdGUiLCJFbnRlckZvcm0iLCJ1cmwiLCJzZXRVcmwiLCJmZXRjaFNjcmVlbnNob3QiLCJyZXNwb25zZSIsImZldGNoIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib2siLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/suggestion/enter-form.tsx\n"));

/***/ })

});
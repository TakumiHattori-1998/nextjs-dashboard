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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EnterForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-2024_ma5zmqaxqio5fndyl5qy52jyg4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_ui_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/ui/fonts */ \"(app-pages-browser)/./app/ui/fonts.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-2024_ma5zmqaxqio5fndyl5qy52jyg4/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nasync function EnterForm() {\n    _s();\n    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    console.log(url);\n    const fetchScreenshot = async ()=>{\n        try {\n            const response = await fetch(\"\".concat(encodeURIComponent(url)));\n            if (response.ok) {\n                console.log(response);\n            } else {\n                console.error('response is not ok');\n            }\n        } catch (error) {\n            console.error('Failed to fetch screenshot');\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full flex-col md:col-span-4 ml-[20px] mt-[20px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"\".concat(_app_ui_fonts__WEBPACK_IMPORTED_MODULE_1__.lusitana.className, \" mb-4 text-xl md:text-2xl\"),\n                children: \"Enter URL to test\"\n            }, void 0, false, {\n                fileName: \"/Users/hattoritakumi/gyomu/チャレプロ/tech/workspace2/kadai6/api_app/nextjs-dashboard/app/ui/suggestion/enter-form.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-[10px] max-w-[800px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"bg-gray-50 border-none rounded-xl w-[70%] focus:outline-none\",\n                        type: \"text\",\n                        onChange: (e)=>setUrl(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/hattoritakumi/gyomu/チャレプロ/tech/workspace2/kadai6/api_app/nextjs-dashboard/app/ui/suggestion/enter-form.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-gray-500 border-none text-white rounded-xl w-[20%]\",\n                        onClick: fetchScreenshot,\n                        children: \"check design\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hattoritakumi/gyomu/チャレプロ/tech/workspace2/kadai6/api_app/nextjs-dashboard/app/ui/suggestion/enter-form.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hattoritakumi/gyomu/チャレプロ/tech/workspace2/kadai6/api_app/nextjs-dashboard/app/ui/suggestion/enter-form.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hattoritakumi/gyomu/チャレプロ/tech/workspace2/kadai6/api_app/nextjs-dashboard/app/ui/suggestion/enter-form.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(EnterForm, \"ZV/BRor2ecoM1gSD+06O4c7I8qc=\");\n_c = EnterForm;\nvar _c;\n$RefreshReg$(_c, \"EnterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9zdWdnZXN0aW9uL2VudGVyLWZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFMEM7QUFDVDtBQUdsQixlQUFlRTs7SUFDMUIsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdILCtDQUFRQSxDQUFTO0lBQ3ZDSSxRQUFRQyxHQUFHLENBQUNIO0lBQ1osTUFBTUksa0JBQWtCO1FBQ3BCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sR0FBMkIsT0FBeEJDLG1CQUFtQlA7WUFDbkQsSUFBSUssU0FBU0csRUFBRSxFQUFFO2dCQUNiTixRQUFRQyxHQUFHLENBQUNFO1lBQ2hCLE9BQU07Z0JBQ0ZILFFBQVFPLEtBQUssQ0FBQztZQUNsQjtRQUNKLEVBQUMsT0FBT0EsT0FBTTtZQUNWUCxRQUFRTyxLQUFLLENBQUM7UUFDbEI7SUFDSjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVcsR0FBc0IsT0FBbkJkLG1EQUFRQSxDQUFDYyxTQUFTLEVBQUM7MEJBQTRCOzs7Ozs7MEJBR2pFLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNFO3dCQUFNRixXQUFVO3dCQUErREcsTUFBSzt3QkFBT0MsVUFBVSxDQUFDQyxJQUFNZixPQUFPZSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7OztrQ0FDbEksOERBQUNDO3dCQUFPUixXQUFVO3dCQUF3RFMsU0FBU2hCO2tDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBIO0dBM0I4Qkw7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VpL3N1Z2dlc3Rpb24vZW50ZXItZm9ybS50c3g/ZjgyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyBsdXNpdGFuYSB9IGZyb20gJ0AvYXBwL3VpL2ZvbnRzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEVudGVyRm9ybSAoKSB7XG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgY29uc3QgZmV0Y2hTY3JlZW5zaG90ID0gYXN5bmMoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2VuY29kZVVSSUNvbXBvbmVudCh1cmwpfWApO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigncmVzcG9uc2UgaXMgbm90IG9rJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1jYXRjaCAoZXJyb3Ipe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZldGNoIHNjcmVlbnNob3QnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGZsZXgtY29sIG1kOmNvbC1zcGFuLTQgbWwtWzIwcHhdIG10LVsyMHB4XVwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17YCR7bHVzaXRhbmEuY2xhc3NOYW1lfSBtYi00IHRleHQteGwgbWQ6dGV4dC0yeGxgfT5cbiAgICAgICAgICAgICAgICBFbnRlciBVUkwgdG8gdGVzdFxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LVsxMHB4XSBtYXgtdy1bODAwcHhdXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyLW5vbmUgcm91bmRlZC14bCB3LVs3MCVdIGZvY3VzOm91dGxpbmUtbm9uZVwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRVcmwoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwMCBib3JkZXItbm9uZSB0ZXh0LXdoaXRlIHJvdW5kZWQteGwgdy1bMjAlXVwiIG9uQ2xpY2s9e2ZldGNoU2NyZWVuc2hvdH0+Y2hlY2sgZGVzaWduPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsibHVzaXRhbmEiLCJ1c2VTdGF0ZSIsIkVudGVyRm9ybSIsInVybCIsInNldFVybCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaFNjcmVlbnNob3QiLCJyZXNwb25zZSIsImZldGNoIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib2siLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/suggestion/enter-form.tsx\n"));

/***/ })

});
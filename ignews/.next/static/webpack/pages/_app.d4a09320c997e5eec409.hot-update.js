"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/SignInButton/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/SignInButton/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInButton": function() { return /* binding */ SignInButton; }
/* harmony export */ });
/* harmony import */ var C_Users_usuario_Projetos_ignite_reactjs_ignews_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/SignInButton/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\usuario\\Projetos\\ignite-reactjs\\ignews\\src\\components\\SignInButton\\index.tsx",
    _s = $RefreshSig$();






function SignInButton() {
  _s();

  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession)(),
      _useSession2 = (0,C_Users_usuario_Projetos_ignite_reactjs_ignews_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useSession, 1),
      session = _useSession2[0];

  return session ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
    type: "button",
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().signInButton),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaGithub, {
      color: "#04d361"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), session.user.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiX, {
      color: "#737380",
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().closeIcon)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
    type: "button",
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().signInButton),
    onClick: function onClick() {
      return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.signIn)('github');
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaGithub, {
      color: "#eba417"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), "Sign in with Github"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

_s(SignInButton, "Vxy5gMemEU/s8dbgarDyE2/t+kg=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession];
});

_c = SignInButton;

var _c;

$RefreshReg$(_c, "SignInButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kNGEwOTMyMGM5OTdlNWVlYzQwOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVPLFNBQVNLLFlBQVQsR0FBd0I7QUFBQTs7QUFDM0Isb0JBQWtCRiw0REFBVSxFQUE1QjtBQUFBO0FBQUEsTUFBT0csT0FBUDs7QUFFQSxTQUFPQSxPQUFPLGdCQUNWO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFFRix5RUFBakM7QUFBQSw0QkFDSSw4REFBQyxvREFBRDtBQUFVLFdBQUssRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFFS0UsT0FBTyxDQUFDRSxJQUFSLENBQWFDLElBRmxCLGVBR0ksOERBQUMsK0NBQUQ7QUFBSyxXQUFLLEVBQUMsU0FBWDtBQUFxQixlQUFTLEVBQUVMLHNFQUFnQk07QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURVLGdCQU9WO0FBQ0ksUUFBSSxFQUFDLFFBRFQ7QUFFSSxhQUFTLEVBQUVOLHlFQUZmO0FBR0ksV0FBTyxFQUFFO0FBQUEsYUFBTUYsd0RBQU0sQ0FBQyxRQUFELENBQVo7QUFBQSxLQUhiO0FBQUEsNEJBS0ksOERBQUMsb0RBQUQ7QUFBVSxXQUFLLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVBKO0FBZ0JIOztHQW5CZUc7VUFDTUY7OztLQURORSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWduSW5CdXR0b24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhR2l0aHViIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBGaVggfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XHJcbmltcG9ydCB7IHNpZ25JbiwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lnbkluQnV0dG9uKCkge1xyXG4gICAgY29uc3QgW3Nlc3Npb25dID0gdXNlU2Vzc2lvbigpO1xyXG5cclxuICAgIHJldHVybiBzZXNzaW9uID8gKFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLnNpZ25JbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgIDxGYUdpdGh1YiBjb2xvcj1cIiMwNGQzNjFcIi8+XHJcbiAgICAgICAgICAgIHtzZXNzaW9uLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgPEZpWCBjb2xvcj1cIiM3MzczODBcIiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZUljb259IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApIDogKFxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbkluQnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduSW4oJ2dpdGh1YicpfSAgICBcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGYUdpdGh1YiBjb2xvcj1cIiNlYmE0MTdcIi8+XHJcbiAgICAgICAgICAgIFNpZ24gaW4gd2l0aCBHaXRodWJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiRmFHaXRodWIiLCJGaVgiLCJzaWduSW4iLCJ1c2VTZXNzaW9uIiwic3R5bGVzIiwiU2lnbkluQnV0dG9uIiwic2Vzc2lvbiIsInNpZ25JbkJ1dHRvbiIsInVzZXIiLCJuYW1lIiwiY2xvc2VJY29uIl0sInNvdXJjZVJvb3QiOiIifQ==
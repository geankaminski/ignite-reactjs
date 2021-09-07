(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscribeButton": () => (/* binding */ SubscribeButton)
/* harmony export */ });
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/SubscribeButton/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\usuario\\Projetos\\ignite-reactjs\\ignews\\src\\components\\SubscribeButton\\index.tsx";


function SubscribeButton({
  priceId
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().subscribeButton),
    children: "Subscribe Now"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ "./src/pages/home.module.scss");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SubscribeButton */ "./src/components/SubscribeButton/index.tsx");
/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/stripe */ "./src/services/stripe.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\usuario\\Projetos\\ignite-reactjs\\ignews\\src\\pages\\index.tsx";

/* eslint-disable @next/next/no-img-element */



 // Formas de realizar requisição:
// Client-side -> useEffect, etc... 
// Server-side -> getServerSideProps -> SSR
// Static Site Generation -> getStaticProps -> SSG



function Home({
  product
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
        children: "Home | ig.news"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("main", {
      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: "\uD83D\uDC4F  Hey, welcome"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
          children: ["News about the ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            children: "React"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 30
          }, this), " world"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: ["Get access to all the publications ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 48
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            children: ["for ", product.amount, " month"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_1__.SubscribeButton, {
          priceId: product.priceId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
        src: "/images/avatar.svg",
        alt: "Girl coding"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true);
} //getServerSideProps || getStaticProps -> (SSR || SSG)

const getStaticProps = async () => {
  const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__.stripe.prices.retrieve('price_1JX7doGJxOFHGRqIR3emMBxu');
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  };
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 hours

  };
};

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stripe": () => (/* binding */ stripe)
/* harmony export */ });
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ "stripe");
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);

const stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {
  apiVersion: '2020-08-27',
  appInfo: {
    name: 'Ignews',
    version: '0.1.0'
  }
});

/***/ }),

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"subscribeButton": "styles_subscribeButton__1uQAs"
};


/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"contentContainer": "home_contentContainer__21EWl",
	"hero": "home_hero__3Za5I"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQU9PLFNBQVNDLGVBQVQsQ0FBeUI7QUFBRUMsRUFBQUE7QUFBRixDQUF6QixFQUE0RDtBQUMvRCxzQkFDSTtBQUNJLFFBQUksRUFBQyxRQURUO0FBRUksYUFBUyxFQUFFRiw0RUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJEO0FBQ0E7QUFDQTtBQUNBO0NBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFTZSxTQUFTTSxJQUFULENBQWM7QUFBRUMsRUFBQUE7QUFBRixDQUFkLEVBQXNDO0FBRW5ELHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQU0sZUFBUyxFQUFFUCwyRUFBakI7QUFBQSw4QkFDRTtBQUFTLGlCQUFTLEVBQUVBLCtEQUFwQjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxxREFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQUEseUVBQ3FDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRHJDLGVBRUU7QUFBQSwrQkFBV08sT0FBTyxDQUFDRyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBT0UsOERBQUMsd0VBQUQ7QUFBaUIsaUJBQU8sRUFBRUgsT0FBTyxDQUFDTDtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBV0U7QUFBSyxXQUFHLEVBQUMsb0JBQVQ7QUFBOEIsV0FBRyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBLGtCQURGO0FBcUJELEVBRUQ7O0FBQ08sTUFBTVMsY0FBOEIsR0FBRyxZQUFXO0FBQ3ZELFFBQU1DLEtBQUssR0FBRyxNQUFNUCxvRUFBQSxDQUF1QixnQ0FBdkIsQ0FBcEI7QUFFQSxRQUFNRSxPQUFPLEdBQUc7QUFDZEwsSUFBQUEsT0FBTyxFQUFFVSxLQUFLLENBQUNHLEVBREQ7QUFFZEwsSUFBQUEsTUFBTSxFQUFFLElBQUlNLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUNyQ0MsTUFBQUEsS0FBSyxFQUFFLFVBRDhCO0FBRXJDQyxNQUFBQSxRQUFRLEVBQUU7QUFGMkIsS0FBL0IsRUFHTEMsTUFISyxDQUdFUixLQUFLLENBQUNTLFdBQU4sR0FBb0IsR0FIdEI7QUFGTSxHQUFoQjtBQVFBLFNBQU87QUFDTEMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xmLE1BQUFBO0FBREssS0FERjtBQUlMZ0IsSUFBQUEsVUFBVSxFQUFFLEtBQUssRUFBTCxHQUFVLEVBSmpCLENBSXFCOztBQUpyQixHQUFQO0FBTUQsQ0FqQk07Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NQO0FBRU8sTUFBTWxCLE1BQU0sR0FBRyxJQUFJbUIsK0NBQUosQ0FDbEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxjQURNLEVBRWxCO0FBQ0lDLEVBQUFBLFVBQVUsRUFBRSxZQURoQjtBQUVJQyxFQUFBQSxPQUFPLEVBQUU7QUFDTEMsSUFBQUEsSUFBSSxFQUFFLFFBREQ7QUFFTEMsSUFBQUEsT0FBTyxFQUFFO0FBRko7QUFGYixDQUZrQixDQUFmOzs7Ozs7Ozs7O0FDRlA7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4Iiwid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL3N0cmlwZS50cyIsIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9ob21lLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcInN0cmlwZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIFN1YnNjcmliZUJ1dHRvblByb3BzIHtcclxuICAgIHByaWNlSWQ6IHN0cmluZztcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdWJzY3JpYmVCdXR0b24oeyBwcmljZUlkIH06IFN1YnNjcmliZUJ1dHRvblByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN1YnNjcmliZUJ1dHRvbn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFN1YnNjcmliZSBOb3dcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufSIsIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ob21lLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgU3Vic2NyaWJlQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24nXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tICcuLi9zZXJ2aWNlcy9zdHJpcGUnXG5cbi8vIEZvcm1hcyBkZSByZWFsaXphciByZXF1aXNpw6fDo286XG4vLyBDbGllbnQtc2lkZSAtPiB1c2VFZmZlY3QsIGV0Yy4uLiBcbi8vIFNlcnZlci1zaWRlIC0+IGdldFNlcnZlclNpZGVQcm9wcyAtPiBTU1Jcbi8vIFN0YXRpYyBTaXRlIEdlbmVyYXRpb24gLT4gZ2V0U3RhdGljUHJvcHMgLT4gU1NHXG5cbmludGVyZmFjZSBIb21lUHJvcHMge1xuICBwcm9kdWN0OiB7XG4gICAgcHJpY2VJZDogc3RyaW5nO1xuICAgIGFtb3VudDogbnVtYmVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm9kdWN0IH06IEhvbWVQcm9wcykge1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SG9tZSB8IGlnLm5ld3M8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICBcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRDb250YWluZXJ9PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvfT5cbiAgICAgICAgICA8c3Bhbj7wn5GPICBIZXksIHdlbGNvbWU8L3NwYW4+XG4gICAgICAgICAgPGgxPk5ld3MgYWJvdXQgdGhlIDxzcGFuPlJlYWN0PC9zcGFuPiB3b3JsZDwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBHZXQgYWNjZXNzIHRvIGFsbCB0aGUgcHVibGljYXRpb25zIDxiciAvPlxuICAgICAgICAgICAgPHNwYW4+Zm9yIHtwcm9kdWN0LmFtb3VudH0gbW9udGg8L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxTdWJzY3JpYmVCdXR0b24gcHJpY2VJZD17cHJvZHVjdC5wcmljZUlkfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2F2YXRhci5zdmdcIiBhbHQ9XCJHaXJsIGNvZGluZ1wiIC8+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiBcbi8vZ2V0U2VydmVyU2lkZVByb3BzIHx8IGdldFN0YXRpY1Byb3BzIC0+IChTU1IgfHwgU1NHKVxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jKCkgPT4ge1xuICBjb25zdCBwcmljZSA9IGF3YWl0IHN0cmlwZS5wcmljZXMucmV0cmlldmUoJ3ByaWNlXzFKWDdkb0dKeE9GSEdScUlSM2VtTUJ4dScpXG5cbiAgY29uc3QgcHJvZHVjdCA9IHtcbiAgICBwcmljZUlkOiBwcmljZS5pZCxcbiAgICBhbW91bnQ6IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgIGN1cnJlbmN5OiAnVVNEJ1xuICAgIH0pLmZvcm1hdChwcmljZS51bml0X2Ftb3VudCAvIDEwMCksXG4gIH0gXG4gIFxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0XG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogMjQsIC8vIDI0IGhvdXJzXG4gIH1cbn1cbiIsImltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXHJcbiAgICBwcm9jZXNzLmVudi5TVFJJUEVfQVBJX0tFWSxcclxuICAgIHtcclxuICAgICAgICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXHJcbiAgICAgICAgYXBwSW5mbzoge1xyXG4gICAgICAgICAgICBuYW1lOiAnSWduZXdzJyxcclxuICAgICAgICAgICAgdmVyc2lvbjogJzAuMS4wJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1YnNjcmliZUJ1dHRvblwiOiBcInN0eWxlc19zdWJzY3JpYmVCdXR0b25fXzF1UUFzXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50Q29udGFpbmVyXCI6IFwiaG9tZV9jb250ZW50Q29udGFpbmVyX18yMUVXbFwiLFxuXHRcImhlcm9cIjogXCJob21lX2hlcm9fXzNaYTVJXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmlwZVwiKTsiXSwibmFtZXMiOlsic3R5bGVzIiwiU3Vic2NyaWJlQnV0dG9uIiwicHJpY2VJZCIsInN1YnNjcmliZUJ1dHRvbiIsIkhlYWQiLCJzdHJpcGUiLCJIb21lIiwicHJvZHVjdCIsImNvbnRlbnRDb250YWluZXIiLCJoZXJvIiwiYW1vdW50IiwiZ2V0U3RhdGljUHJvcHMiLCJwcmljZSIsInByaWNlcyIsInJldHJpZXZlIiwiaWQiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsInVuaXRfYW1vdW50IiwicHJvcHMiLCJyZXZhbGlkYXRlIiwiU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIiwidmVyc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=
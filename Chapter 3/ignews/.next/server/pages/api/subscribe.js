"use strict";
(() => {
var exports = {};
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "./src/pages/api/subscribe.ts":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ "faunadb");
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fauna */ "./src/services/fauna.ts");
/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stripe */ "./src/services/stripe.ts");




// eslint-disable-next-line import/no-anonymous-default-export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  if (req.method === 'POST') {
    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({
      req
    });
    const user = await _services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(session.user.email))));
    let customerId = user.data.stripe_customer_id;

    if (!customerId) {
      const stripeCustomer = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.customers.create({
        email: session.user.email // metadata

      });
      await _services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Update(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Ref(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection('users'), user.ref.id), {
        data: {
          stripe_customer_id: stripeCustomer.id
        }
      }));
      customerId = stripeCustomer.id;
    }

    const stripeCheckoutSession = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [{
        price: 'price_1JX7doGJxOFHGRqIR3emMBxu',
        quantity: 1
      }],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL
    });
    return res.status(200).json({
      sessionId: stripeCheckoutSession.id
    });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
});

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fauna": () => (/* binding */ fauna)
/* harmony export */ });
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ "faunadb");
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);

const fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({
  secret: process.env.FAUNADB_KEY
});

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/subscribe.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUFBLElBQUksRUFBRSxRQUREO0FBRUxDLElBQUFBLE9BQU8sRUFBRTtBQUZKO0FBRmIsQ0FGa0IsQ0FBZjs7Ozs7Ozs7OztBQ0ZQOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9hcGkvc3Vic2NyaWJlLnRzIiwid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9mYXVuYS50cyIsIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcImZhdW5hZGJcIiIsIndlYnBhY2s6Ly9pZ25ld3MvZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vaWduZXdzL2V4dGVybmFsIFwic3RyaXBlXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHF1ZXJ5IGFzIHEgfSBmcm9tICdmYXVuYWRiJztcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXHJcbmltcG9ydCB7IGZhdW5hIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2ZhdW5hXCI7XHJcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdHJpcGVcIjtcclxuXHJcbnR5cGUgVXNlciA9IHtcclxuICAgIHJlZjoge1xyXG4gICAgICAgIGlkOiBzdHJpbmc7XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHN0cmlwZV9jdXN0b21lcl9pZDogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWFub255bW91cy1kZWZhdWx0LWV4cG9ydFxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICAgIGlmKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGZhdW5hLnF1ZXJ5PFVzZXI+KFxyXG4gICAgICAgICAgICBxLkdldChcclxuICAgICAgICAgICAgICAgIHEuTWF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgcS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHEuQ2FzZWZvbGQoc2Vzc2lvbi51c2VyLmVtYWlsKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBsZXQgY3VzdG9tZXJJZCA9IHVzZXIuZGF0YS5zdHJpcGVfY3VzdG9tZXJfaWRcclxuXHJcbiAgICAgICAgaWYoIWN1c3RvbWVySWQpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RyaXBlQ3VzdG9tZXIgPSBhd2FpdCBzdHJpcGUuY3VzdG9tZXJzLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgLy8gbWV0YWRhdGFcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IGZhdW5hLnF1ZXJ5KFxyXG4gICAgICAgICAgICAgICAgcS5VcGRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgcS5SZWYocS5Db2xsZWN0aW9uKCd1c2VycycpLCB1c2VyLnJlZi5pZCksXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpcGVfY3VzdG9tZXJfaWQ6IHN0cmlwZUN1c3RvbWVyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBjdXN0b21lcklkID0gc3RyaXBlQ3VzdG9tZXIuaWRcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zdCBzdHJpcGVDaGVja291dFNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcclxuICAgICAgICAgICAgY3VzdG9tZXI6IGN1c3RvbWVySWQsXHJcbiAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbJ2NhcmQnXSxcclxuICAgICAgICAgICAgYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb246ICdyZXF1aXJlZCcsXHJcbiAgICAgICAgICAgIGxpbmVfaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgIHsgcHJpY2U6ICdwcmljZV8xSlg3ZG9HSnhPRkhHUnFJUjNlbU1CeHUnLCBxdWFudGl0eTogMSB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIG1vZGU6ICdzdWJzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICBhbGxvd19wcm9tb3Rpb25fY29kZXM6IHRydWUsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3NfdXJsOiBwcm9jZXNzLmVudi5TVFJJUEVfU1VDQ0VTU19VUkwsXHJcbiAgICAgICAgICAgIGNhbmNlbF91cmw6IHByb2Nlc3MuZW52LlNUUklQRV9DQU5DRUxfVVJMXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc2Vzc2lvbklkOiBzdHJpcGVDaGVja291dFNlc3Npb24uaWQgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCAnUE9TVCcpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgnTWV0aG9kIG5vdCBhbGxvd2VkJylcclxuICAgIH1cclxufSAgICIsImltcG9ydCB7IENsaWVudCB9IGZyb20gJ2ZhdW5hZGInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhdW5hID0gbmV3IENsaWVudCh7XHJcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BREJfS0VZXHJcbn0pIiwiaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnXHJcblxyXG5leHBvcnQgY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShcclxuICAgIHByb2Nlc3MuZW52LlNUUklQRV9BUElfS0VZLFxyXG4gICAge1xyXG4gICAgICAgIGFwaVZlcnNpb246ICcyMDIwLTA4LTI3JyxcclxuICAgICAgICBhcHBJbmZvOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdJZ25ld3MnLFxyXG4gICAgICAgICAgICB2ZXJzaW9uOiAnMC4xLjAnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmF1bmFkYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmlwZVwiKTsiXSwibmFtZXMiOlsicXVlcnkiLCJxIiwiZ2V0U2Vzc2lvbiIsImZhdW5hIiwic3RyaXBlIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2Vzc2lvbiIsInVzZXIiLCJHZXQiLCJNYXRjaCIsIkluZGV4IiwiQ2FzZWZvbGQiLCJlbWFpbCIsImN1c3RvbWVySWQiLCJkYXRhIiwic3RyaXBlX2N1c3RvbWVyX2lkIiwic3RyaXBlQ3VzdG9tZXIiLCJjdXN0b21lcnMiLCJjcmVhdGUiLCJVcGRhdGUiLCJSZWYiLCJDb2xsZWN0aW9uIiwicmVmIiwiaWQiLCJzdHJpcGVDaGVja291dFNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3VzdG9tZXIiLCJwYXltZW50X21ldGhvZF90eXBlcyIsImJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uIiwibGluZV9pdGVtcyIsInByaWNlIiwicXVhbnRpdHkiLCJtb2RlIiwiYWxsb3dfcHJvbW90aW9uX2NvZGVzIiwic3VjY2Vzc191cmwiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NVQ0NFU1NfVVJMIiwiY2FuY2VsX3VybCIsIlNUUklQRV9DQU5DRUxfVVJMIiwic3RhdHVzIiwianNvbiIsInNlc3Npb25JZCIsInNldEhlYWRlciIsImVuZCIsIkNsaWVudCIsInNlY3JldCIsIkZBVU5BREJfS0VZIiwiU3RyaXBlIiwiU1RSSVBFX0FQSV9LRVkiLCJhcGlWZXJzaW9uIiwiYXBwSW5mbyIsIm5hbWUiLCJ2ZXJzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==
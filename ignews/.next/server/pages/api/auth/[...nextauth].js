"use strict";
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ "faunadb");
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ "./src/services/fauna.ts");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default().GitHub({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    scope: 'read:user'
  })],
  callbacks: {
    async signIn(user, account, profile) {
      const {
        email
      } = user;
      await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection('users'), {
        data: {
          email
        }
      }));
      return true;
    }

  }
}));

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

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBLGlFQUFlRSxnREFBUSxDQUFDO0FBQ3RCRyxFQUFBQSxTQUFTLEVBQUUsQ0FDVEYsaUVBQUEsQ0FBaUI7QUFDZkksSUFBQUEsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBRFA7QUFFZkMsSUFBQUEsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsb0JBRlg7QUFHZkMsSUFBQUEsS0FBSyxFQUFFO0FBSFEsR0FBakIsQ0FEUyxDQURXO0FBUXRCQyxFQUFBQSxTQUFTLEVBQUU7QUFDVCxVQUFNQyxNQUFOLENBQWFDLElBQWIsRUFBbUJDLE9BQW5CLEVBQTRCQyxPQUE1QixFQUFxQztBQUNuQyxZQUFNO0FBQUVDLFFBQUFBO0FBQUYsVUFBWUgsSUFBbEI7QUFFQSxZQUFNWix3REFBQSxDQUNKSCxpREFBQSxDQUNFQSxxREFBQSxDQUFhLE9BQWIsQ0FERixFQUVFO0FBQUVxQixRQUFBQSxJQUFJLEVBQUU7QUFBRUgsVUFBQUE7QUFBRjtBQUFSLE9BRkYsQ0FESSxDQUFOO0FBT0EsYUFBTyxJQUFQO0FBQ0Q7O0FBWlE7QUFSVyxDQUFELENBQXZCOzs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFFTyxNQUFNZixLQUFLLEdBQUcsSUFBSW1CLDJDQUFKLENBQVc7QUFDNUJDLEVBQUFBLE1BQU0sRUFBRWhCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZ0I7QUFEUSxDQUFYLENBQWQ7Ozs7Ozs7Ozs7QUNGUDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cyIsIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvZmF1bmEudHMiLCJ3ZWJwYWNrOi8vaWduZXdzL2V4dGVybmFsIFwiZmF1bmFkYlwiIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcIm5leHQtYXV0aFwiIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcIm5leHQtYXV0aC9wcm92aWRlcnNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSAnZmF1bmFkYic7XHJcblxyXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXHJcbmltcG9ydCBQcm92aWRlcnMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnNcIlxyXG5cclxuaW1wb3J0IHsgZmF1bmEgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYXVuYSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBQcm92aWRlcnMuR2l0SHViKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXHJcbiAgICAgIHNjb3BlOiAncmVhZDp1c2VyJ1xyXG4gICAgfSksXHJcbiAgXSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIHNpZ25Jbih1c2VyLCBhY2NvdW50LCBwcm9maWxlKSB7XHJcbiAgICAgIGNvbnN0IHsgZW1haWwgfSA9IHVzZXJcclxuICAgICAgXHJcbiAgICAgIGF3YWl0IGZhdW5hLnF1ZXJ5KFxyXG4gICAgICAgIHEuQ3JlYXRlKFxyXG4gICAgICAgICAgcS5Db2xsZWN0aW9uKCd1c2VycycpLFxyXG4gICAgICAgICAgeyBkYXRhOiB7IGVtYWlsIH0gfVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG5cclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICB9XHJcbn0pIiwiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnZmF1bmFkYic7XHJcblxyXG5leHBvcnQgY29uc3QgZmF1bmEgPSBuZXcgQ2xpZW50KHtcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuRkFVTkFEQl9LRVlcclxufSkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYXVuYWRiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIpOyJdLCJuYW1lcyI6WyJxdWVyeSIsInEiLCJOZXh0QXV0aCIsIlByb3ZpZGVycyIsImZhdW5hIiwicHJvdmlkZXJzIiwiR2l0SHViIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwic2NvcGUiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJ1c2VyIiwiYWNjb3VudCIsInByb2ZpbGUiLCJlbWFpbCIsIkNyZWF0ZSIsIkNvbGxlY3Rpb24iLCJkYXRhIiwiQ2xpZW50Iiwic2VjcmV0IiwiRkFVTkFEQl9LRVkiXSwic291cmNlUm9vdCI6IiJ9
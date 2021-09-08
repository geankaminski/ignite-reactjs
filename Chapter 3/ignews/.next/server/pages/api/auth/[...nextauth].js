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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default().GitHub({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    scope: 'read:user'
  })],
  callbacks: {
    async session(session) {
      try {
        const userActiveSubscription = await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Intersection([faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('subscription_by_user_ref'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Select("ref", faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(session.user.email))))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('subscription_by_status'), "active")])));
        return _objectSpread(_objectSpread({}, session), {}, {
          activeSubscription: userActiveSubscription
        });
      } catch {
        return _objectSpread(_objectSpread({}, session), {}, {
          activeSubscription: null
        });
      }
    },

    async signIn(user, account, profile) {
      const {
        email
      } = user;

      try {
        await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))), // true
        faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection('users'), {
          data: {
            email
          }
        }), // false
        faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))));
        return true;
      } catch {
        return false;
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUVBLGlFQUFlRSxnREFBUSxDQUFDO0FBQ3RCRyxFQUFBQSxTQUFTLEVBQUUsQ0FDVEYsaUVBQUEsQ0FBaUI7QUFDZkksSUFBQUEsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBRFA7QUFFZkMsSUFBQUEsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsb0JBRlg7QUFHZkMsSUFBQUEsS0FBSyxFQUFFO0FBSFEsR0FBakIsQ0FEUyxDQURXO0FBUXRCQyxFQUFBQSxTQUFTLEVBQUU7QUFDVCxVQUFNQyxPQUFOLENBQWNBLE9BQWQsRUFBdUI7QUFDckIsVUFBSTtBQUNGLGNBQU1DLHNCQUFzQixHQUFHLE1BQU1aLHdEQUFBLENBQ25DSCw4Q0FBQSxDQUNFQSx1REFBQSxDQUFlLENBQ2JBLGdEQUFBLENBQ0VBLGdEQUFBLENBQVEsMEJBQVIsQ0FERixFQUVFQSxpREFBQSxDQUNFLEtBREYsRUFFRUEsOENBQUEsQ0FDRUEsZ0RBQUEsQ0FDRUEsZ0RBQUEsQ0FBUSxlQUFSLENBREYsRUFFRUEsbURBQUEsQ0FBV2MsT0FBTyxDQUFDUSxJQUFSLENBQWFDLEtBQXhCLENBRkYsQ0FERixDQUZGLENBRkYsQ0FEYSxFQWFidkIsZ0RBQUEsQ0FDRUEsZ0RBQUEsQ0FBUSx3QkFBUixDQURGLEVBRUUsUUFGRixDQWJhLENBQWYsQ0FERixDQURtQyxDQUFyQztBQXVCQSwrQ0FDS2MsT0FETDtBQUVFVSxVQUFBQSxrQkFBa0IsRUFBRVQ7QUFGdEI7QUFJRCxPQTVCRCxDQTRCRSxNQUFNO0FBQ04sK0NBQ0tELE9BREw7QUFFRVUsVUFBQUEsa0JBQWtCLEVBQUU7QUFGdEI7QUFJRDtBQUNGLEtBcENROztBQXFDVCxVQUFNQyxNQUFOLENBQWFILElBQWIsRUFBbUJJLE9BQW5CLEVBQTRCQyxPQUE1QixFQUFxQztBQUNuQyxZQUFNO0FBQUVKLFFBQUFBO0FBQUYsVUFBWUQsSUFBbEI7O0FBRUEsVUFBSTtBQUNGLGNBQU1uQix3REFBQSxDQUNKSCw2Q0FBQSxDQUNFQSw4Q0FBQSxDQUNFQSxpREFBQSxDQUNFQSxnREFBQSxDQUNFQSxnREFBQSxDQUFRLGVBQVIsQ0FERixFQUVFQSxtREFBQSxDQUFXc0IsSUFBSSxDQUFDQyxLQUFoQixDQUZGLENBREYsQ0FERixDQURGLEVBUUs7QUFDSHZCLFFBQUFBLGlEQUFBLENBQ0VBLHFEQUFBLENBQWEsT0FBYixDQURGLEVBRUU7QUFBRWlDLFVBQUFBLElBQUksRUFBRTtBQUFFVixZQUFBQTtBQUFGO0FBQVIsU0FGRixDQVRGLEVBWUs7QUFDSHZCLFFBQUFBLDhDQUFBLENBQ0VBLGdEQUFBLENBQ0VBLGdEQUFBLENBQVEsZUFBUixDQURGLEVBRUVBLG1EQUFBLENBQVdzQixJQUFJLENBQUNDLEtBQWhCLENBRkYsQ0FERixDQWJGLENBREksQ0FBTjtBQXNCQSxlQUFPLElBQVA7QUFDRCxPQXhCRCxDQXdCRSxNQUFNO0FBQ04sZUFBTyxLQUFQO0FBQ0Q7QUFFRjs7QUFwRVE7QUFSVyxDQUFELENBQXZCOzs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFFTyxNQUFNcEIsS0FBSyxHQUFHLElBQUkrQiwyQ0FBSixDQUFXO0FBQzVCQyxFQUFBQSxNQUFNLEVBQUU1QixPQUFPLENBQUNDLEdBQVIsQ0FBWTRCO0FBRFEsQ0FBWCxDQUFkOzs7Ozs7Ozs7O0FDRlA7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHMiLCJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL2ZhdW5hLnRzIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcImZhdW5hZGJcIiIsIndlYnBhY2s6Ly9pZ25ld3MvZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIiIsIndlYnBhY2s6Ly9pZ25ld3MvZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcXVlcnkgYXMgcSB9IGZyb20gJ2ZhdW5hZGInO1xyXG5cclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxyXG5pbXBvcnQgeyBzZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCc7XHJcbmltcG9ydCBQcm92aWRlcnMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnNcIlxyXG5cclxuaW1wb3J0IHsgZmF1bmEgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYXVuYSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBQcm92aWRlcnMuR2l0SHViKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXHJcbiAgICAgIHNjb3BlOiAncmVhZDp1c2VyJ1xyXG4gICAgfSksXHJcbiAgXSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIHNlc3Npb24oc2Vzc2lvbikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJBY3RpdmVTdWJzY3JpcHRpb24gPSBhd2FpdCBmYXVuYS5xdWVyeShcclxuICAgICAgICAgIHEuR2V0KFxyXG4gICAgICAgICAgICBxLkludGVyc2VjdGlvbihbXHJcbiAgICAgICAgICAgICAgcS5NYXRjaChcclxuICAgICAgICAgICAgICAgIHEuSW5kZXgoJ3N1YnNjcmlwdGlvbl9ieV91c2VyX3JlZicpLFxyXG4gICAgICAgICAgICAgICAgcS5TZWxlY3QoXHJcbiAgICAgICAgICAgICAgICAgIFwicmVmXCIsXHJcbiAgICAgICAgICAgICAgICAgIHEuR2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIHEuTWF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgICBxLkluZGV4KCd1c2VyX2J5X2VtYWlsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICBxLkNhc2Vmb2xkKHNlc3Npb24udXNlci5lbWFpbClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIHEuTWF0Y2goXHJcbiAgICAgICAgICAgICAgICBxLkluZGV4KCdzdWJzY3JpcHRpb25fYnlfc3RhdHVzJyksXHJcbiAgICAgICAgICAgICAgICBcImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc2Vzc2lvbixcclxuICAgICAgICAgIGFjdGl2ZVN1YnNjcmlwdGlvbjogdXNlckFjdGl2ZVN1YnNjcmlwdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnNlc3Npb24sXHJcbiAgICAgICAgICBhY3RpdmVTdWJzY3JpcHRpb246IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBzaWduSW4odXNlciwgYWNjb3VudCwgcHJvZmlsZSkge1xyXG4gICAgICBjb25zdCB7IGVtYWlsIH0gPSB1c2VyXHJcbiAgICAgIFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGZhdW5hLnF1ZXJ5KFxyXG4gICAgICAgICAgcS5JZihcclxuICAgICAgICAgICAgcS5Ob3QoXHJcbiAgICAgICAgICAgICAgcS5FeGlzdHMoXHJcbiAgICAgICAgICAgICAgICBxLk1hdGNoKFxyXG4gICAgICAgICAgICAgICAgICBxLkluZGV4KCd1c2VyX2J5X2VtYWlsJyksXHJcbiAgICAgICAgICAgICAgICAgIHEuQ2FzZWZvbGQodXNlci5lbWFpbClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICksIC8vIHRydWVcclxuICAgICAgICAgICAgcS5DcmVhdGUoXHJcbiAgICAgICAgICAgICAgcS5Db2xsZWN0aW9uKCd1c2VycycpLFxyXG4gICAgICAgICAgICAgIHsgZGF0YTogeyBlbWFpbCB9IH1cclxuICAgICAgICAgICAgKSwgLy8gZmFsc2VcclxuICAgICAgICAgICAgcS5HZXQoXHJcbiAgICAgICAgICAgICAgcS5NYXRjaChcclxuICAgICAgICAgICAgICAgIHEuSW5kZXgoJ3VzZXJfYnlfZW1haWwnKSxcclxuICAgICAgICAgICAgICAgIHEuQ2FzZWZvbGQodXNlci5lbWFpbClcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIClcclxuICAgICAgICApXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgICBcclxuICAgIH1cclxuICB9XHJcbn0pIiwiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnZmF1bmFkYic7XHJcblxyXG5leHBvcnQgY29uc3QgZmF1bmEgPSBuZXcgQ2xpZW50KHtcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuRkFVTkFEQl9LRVlcclxufSkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYXVuYWRiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIpOyJdLCJuYW1lcyI6WyJxdWVyeSIsInEiLCJOZXh0QXV0aCIsIlByb3ZpZGVycyIsImZhdW5hIiwicHJvdmlkZXJzIiwiR2l0SHViIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwic2NvcGUiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidXNlckFjdGl2ZVN1YnNjcmlwdGlvbiIsIkdldCIsIkludGVyc2VjdGlvbiIsIk1hdGNoIiwiSW5kZXgiLCJTZWxlY3QiLCJDYXNlZm9sZCIsInVzZXIiLCJlbWFpbCIsImFjdGl2ZVN1YnNjcmlwdGlvbiIsInNpZ25JbiIsImFjY291bnQiLCJwcm9maWxlIiwiSWYiLCJOb3QiLCJFeGlzdHMiLCJDcmVhdGUiLCJDb2xsZWN0aW9uIiwiZGF0YSIsIkNsaWVudCIsInNlY3JldCIsIkZBVU5BREJfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==
(() => {
var exports = {};
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./src/pages/posts/[slug].tsx":
/*!************************************!*\
  !*** ./src/pages/posts/[slug].tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-dom */ "prismic-dom");
/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/prismic */ "./src/services/prismic.ts");
/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post.module.scss */ "./src/pages/posts/post.module.scss");
/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\usuario\\Projetos\\ignite-reactjs\\Chapter 3\\ignews\\src\\pages\\posts\\[slug].tsx";







function Post({
  post
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("title", {
        children: [post.title, " | ig.news"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("main", {
      className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("article", {
        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().post),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
          children: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("time", {
          children: post.updatedAt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().postContent),
          dangerouslySetInnerHTML: {
            __html: post.content
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}
const getServerSideProps = async ({
  req,
  params
}) => {
  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({
    req
  });
  const {
    slug
  } = params;

  if (!(session !== null && session !== void 0 && session.activeSubscription)) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  const prismic = (0,_services_prismic__WEBPACK_IMPORTED_MODULE_3__.getPrismicClient)(req);
  const response = await prismic.getByUID('publication', String(slug), {});
  const post = {
    slug,
    title: prismic_dom__WEBPACK_IMPORTED_MODULE_2__.RichText.asText(response.data.title),
    content: prismic_dom__WEBPACK_IMPORTED_MODULE_2__.RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  };
  return {
    props: {
      post
    }
  };
};

/***/ }),

/***/ "./src/services/prismic.ts":
/*!*********************************!*\
  !*** ./src/services/prismic.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPrismicClient": () => (/* binding */ getPrismicClient)
/* harmony export */ });
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ "@prismicio/client");
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);

function getPrismicClient(req) {
  const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default().client(process.env.PRISMIC_ENDPOINT, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  });
  return prismic;
}

/***/ }),

/***/ "./src/pages/posts/post.module.scss":
/*!******************************************!*\
  !*** ./src/pages/posts/post.module.scss ***!
  \******************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "post_container__2m5md",
	"post": "post_post__3quL2",
	"postContent": "post_postContent__B7qN9",
	"previewContent": "post_previewContent__oPpak",
	"continueReading": "post_continueReading__2RmZn"
};


/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prismicio/client");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "prismic-dom":
/*!******************************!*\
  !*** external "prismic-dom" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismic-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/posts/[slug].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RjdCLEdBRlksQ0FBaEI7QUFRQSxTQUFPcEIsT0FBUDtBQUNIOzs7Ozs7Ozs7O0FDWkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLnRzeCIsIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvcHJpc21pYy50cyIsIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvcG9zdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9pZ25ld3MvZXh0ZXJuYWwgXCJAcHJpc21pY2lvL2NsaWVudFwiIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly9pZ25ld3MvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9pZ25ld3MvZXh0ZXJuYWwgXCJwcmlzbWljLWRvbVwiIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCJcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gXCJwcmlzbWljLWRvbVwiXHJcbmltcG9ydCB7IGdldFByaXNtaWNDbGllbnQgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcHJpc21pY1wiXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9zdC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgUG9zdFByb3BzIHtcclxuICAgIHBvc3Q6IHtcclxuICAgICAgICBzbHVnOiBzdHJpbmc7XHJcbiAgICAgICAgdGl0bGU6IHN0cmluZztcclxuICAgICAgICBjb250ZW50OiBzdHJpbmc7XHJcbiAgICAgICAgdXBkYXRlZEF0OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0IH06IFBvc3RQcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57cG9zdC50aXRsZX0gfCBpZy5uZXdzPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aW1lPntwb3N0LnVwZGF0ZWRBdH08L3RpbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Q29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuY29udGVudCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHJlcSwgcGFyYW1zIH0pID0+IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pXHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IHBhcmFtcztcclxuXHJcbiAgICBpZighc2Vzc2lvbj8uYWN0aXZlU3Vic2NyaXB0aW9uKSB7ICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiAnLycsXHJcbiAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICBjb25zdCBwcmlzbWljID0gZ2V0UHJpc21pY0NsaWVudChyZXEpXHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcmlzbWljLmdldEJ5VUlEKCdwdWJsaWNhdGlvbicsIFN0cmluZyhzbHVnKSwge30pXHJcblxyXG4gICAgY29uc3QgcG9zdCA9IHtcclxuICAgICAgICBzbHVnLFxyXG4gICAgICAgIHRpdGxlOiBSaWNoVGV4dC5hc1RleHQocmVzcG9uc2UuZGF0YS50aXRsZSksXHJcbiAgICAgICAgY29udGVudDogUmljaFRleHQuYXNIdG1sKHJlc3BvbnNlLmRhdGEuY29udGVudCksXHJcbiAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZShyZXNwb25zZS5sYXN0X3B1YmxpY2F0aW9uX2RhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygncHQtQlInLCB7XHJcbiAgICAgICAgICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICBtb250aDogJ2xvbmcnLFxyXG4gICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYydcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcG9zdCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUHJpc21pYyBmcm9tICdAcHJpc21pY2lvL2NsaWVudCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJpc21pY0NsaWVudChyZXE/OiB1bmtub3duKSB7XHJcbiAgICBjb25zdCBwcmlzbWljID0gUHJpc21pYy5jbGllbnQoXHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuUFJJU01JQ19FTkRQT0lOVCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlcSxcclxuICAgICAgICAgICAgYWNjZXNzVG9rZW46IHByb2Nlc3MuZW52LlBSSVNNSUNfQUNDRVNTX1RPS0VOXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiBwcmlzbWljO1xyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwicG9zdF9jb250YWluZXJfXzJtNW1kXCIsXG5cdFwicG9zdFwiOiBcInBvc3RfcG9zdF9fM3F1TDJcIixcblx0XCJwb3N0Q29udGVudFwiOiBcInBvc3RfcG9zdENvbnRlbnRfX0I3cU45XCIsXG5cdFwicHJldmlld0NvbnRlbnRcIjogXCJwb3N0X3ByZXZpZXdDb250ZW50X19vUHBha1wiLFxuXHRcImNvbnRpbnVlUmVhZGluZ1wiOiBcInBvc3RfY29udGludWVSZWFkaW5nX18yUm1ablwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtaWNpby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpc21pYy1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwiSGVhZCIsIlJpY2hUZXh0IiwiZ2V0UHJpc21pY0NsaWVudCIsInN0eWxlcyIsIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJjb250YWluZXIiLCJ1cGRhdGVkQXQiLCJwb3N0Q29udGVudCIsIl9faHRtbCIsImNvbnRlbnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJwYXJhbXMiLCJzZXNzaW9uIiwic2x1ZyIsImFjdGl2ZVN1YnNjcmlwdGlvbiIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiLCJwcmlzbWljIiwicmVzcG9uc2UiLCJnZXRCeVVJRCIsIlN0cmluZyIsImFzVGV4dCIsImRhdGEiLCJhc0h0bWwiLCJEYXRlIiwibGFzdF9wdWJsaWNhdGlvbl9kYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwicHJvcHMiLCJQcmlzbWljIiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIlBSSVNNSUNfRU5EUE9JTlQiLCJhY2Nlc3NUb2tlbiIsIlBSSVNNSUNfQUNDRVNTX1RPS0VOIl0sInNvdXJjZVJvb3QiOiIifQ==
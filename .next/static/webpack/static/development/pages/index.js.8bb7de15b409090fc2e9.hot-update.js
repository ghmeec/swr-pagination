webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/fetch */ "./libs/fetch.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");

var _jsxFileName = "/Users/mrmages/Desktop/GHMEEC/pagination/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(2),
      pageIn = _useState[0],
      setPageIn = _useState[1];

  var _useSWRPages = Object(swr__WEBPACK_IMPORTED_MODULE_4__["useSWRPages"])( // page key
  'demo-page', // page component
  function (_ref) {
    var offset = _ref.offset,
        withSWR = _ref.withSWR;
    var link = 'https://us-east-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/the-ocean-app-ycpma/service/API/incoming_webhook/getNewsFeedsInPages?page=' + (offset || 1);
    console.log("Link : ", link);

    var _withSWR = withSWR( // use the wrapper to wrap the *pagination API SWR*
    Object(swr__WEBPACK_IMPORTED_MODULE_4__["default"])(link, _libs_fetch__WEBPACK_IMPORTED_MODULE_2__["default"])),
        projects = _withSWR.data; // you can still use other SWRs outside


    if (!projects) {
      return __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "loading");
    }

    return projects.map(function (project, index) {
      return __jsx("div", {
        key: index + "_" + _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()().toString,
        style: {
          paddingRight: 15,
          paddingLeft: 15
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("img", {
        src: project.image,
        alt: "Image",
        style: {
          width: "100%",
          sheight: "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx("p", {
        key: project.id,
        style: {
          fontSize: 18
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, project.title));
    });
  }, // one page's SWR => offset of next page
  function (_ref2) {
    var projects = _ref2.data;
    setPageIn(pageIn + 1);
    var page = pageIn; // return the last element id here

    return projects && projects.length ? page : null;
  }, // deps of the page component
  []),
      pages = _useSWRPages.pages,
      isLoadingMore = _useSWRPages.isLoadingMore,
      isReachingEnd = _useSWRPages.isReachingEnd,
      loadMore = _useSWRPages.loadMore;

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Church App Pagination Tests"), pages, __jsx("button", {
    onClick: loadMore,
    disabled: isReachingEnd || isLoadingMore,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, isLoadingMore ? '. . .' : isReachingEnd ? 'You have reached the end' : 'Load more'));
});

/***/ })

})
//# sourceMappingURL=index.js.8bb7de15b409090fc2e9.hot-update.js.map
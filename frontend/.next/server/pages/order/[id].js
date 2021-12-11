(function() {
var exports = {};
exports.id = "pages/order/[id]";
exports.ids = ["pages/order/[id]"];
exports.modules = {

/***/ "./components/styles/OrderStyles.js":
/*!******************************************!*\
  !*** ./components/styles/OrderStyles.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const OrderStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "OrderStyles",
  componentId: "sc-4oqalm-0"
})(["max-width:1000px;margin:0 auto;border:1px solid var(--offWhite);box-shadow:var(--bs);padding:2rem;border-top:10px solid red;& > p{display:grid;grid-template-columns:1fr 5fr;margin:0;border-bottom:1px solid var(--offWhite);span{padding:1rem;&:first-child{font-weight:900;text-align:right;}}}.order-item{border-bottom:1px solid var(--offWhite);display:grid;grid-template-columns:300px 1fr;align-items:center;grid-gap:2rem;margin:2rem 0;padding-bottom:2rem;img{width:100%;height:100%;object-fit:cover;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (OrderStyles);

/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ formatMoney; }
/* harmony export */ });
function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }; // check if its a clean dollar amount

  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
}

/***/ }),

/***/ "./pages/order/[id].js":
/*!*****************************!*\
  !*** ./pages/order/[id].js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SingleOrderPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _components_styles_OrderStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/styles/OrderStyles */ "./components/styles/OrderStyles.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/formatMoney */ "./lib/formatMoney.js");

var _jsxFileName = "C:\\Users\\Jose\\Desktop\\sick-fits\\frontend\\pages\\order\\[id].js";






const SINGLE_ORDER_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order: Order(where: { id: $id }) {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;
function SingleOrderPage({
  query
}) {
  const {
    data,
    error,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(SINGLE_ORDER_QUERY, {
    variables: {
      id: query.id
    }
  });
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__.default, {
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 21
  }, this);
  const {
    order
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_styles_OrderStyles__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Speed - ", order.id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Order Id:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: order.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Charge:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: order.charge
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Order Total:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__.default)(order.total)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "ItemCount:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: order.items.length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "items",
      children: order.items.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "order-item",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: item.photo.image.publicUrlTransformed,
          alt: item.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "item-details",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: item.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Qty: ", item.quantity]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Each: ", (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__.default)(item.price)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Sub Total: ", (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__.default)(item.price * item.quantity)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: item.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }, this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_ErrorMessage_js"], function() { return __webpack_exec__("./pages/order/[id].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9PcmRlclN0eWxlcy5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvZm9ybWF0TW9uZXkuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vcGFnZXMvb3JkZXIvW2lkXS5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJPcmRlclN0eWxlcyIsInN0eWxlZCIsImZvcm1hdE1vbmV5IiwiYW1vdW50Iiwib3B0aW9ucyIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0IiwiU0lOR0xFX09SREVSX1FVRVJZIiwiZ3FsIiwiU2luZ2xlT3JkZXJQYWdlIiwicXVlcnkiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJpZCIsIm9yZGVyIiwiY2hhcmdlIiwidG90YWwiLCJpdGVtcyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJ0aXRsZSIsIm5hbWUiLCJxdWFudGl0eSIsInByaWNlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsNGZBQWpCO0FBbUNBLCtEQUFlRCxXQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztBQ3JDZSxTQUFTRSxXQUFULENBQXFCQyxNQUFNLEdBQUcsQ0FBOUIsRUFBaUM7QUFDOUMsUUFBTUMsT0FBTyxHQUFHO0FBQ2RDLFNBQUssRUFBRSxVQURPO0FBRWRDLFlBQVEsRUFBRSxLQUZJO0FBR2RDLHlCQUFxQixFQUFFO0FBSFQsR0FBaEIsQ0FEOEMsQ0FPOUM7O0FBQ0EsTUFBSUosTUFBTSxHQUFHLEdBQVQsS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEJDLFdBQU8sQ0FBQ0cscUJBQVIsR0FBZ0MsQ0FBaEM7QUFDRDs7QUFFRCxRQUFNQyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsWUFBTCxDQUFrQixPQUFsQixFQUEyQk4sT0FBM0IsQ0FBbEI7QUFFQSxTQUFPSSxTQUFTLENBQUNHLE1BQVYsQ0FBaUJSLE1BQU0sR0FBRyxHQUExQixDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1TLGtCQUFrQixHQUFHQyxvREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBdkJBO0FBd0JlLFNBQVNDLGVBQVQsQ0FBeUI7QUFBRUM7QUFBRixDQUF6QixFQUFvQztBQUNqRCxRQUFNO0FBQUVDLFFBQUY7QUFBUUMsU0FBUjtBQUFlQztBQUFmLE1BQTJCQyx3REFBUSxDQUFD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RCw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9vcmRlci9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IE9yZGVyU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1vZmZXaGl0ZSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJzKTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCByZWQ7XG4gICYgPiBwIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW9mZldoaXRlKTtcbiAgICBzcGFuIHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5vcmRlci1pdGVtIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tb2ZmV2hpdGUpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLWdhcDogMnJlbTtcbiAgICBtYXJnaW46IDJyZW0gMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gIH1cbmA7XG5leHBvcnQgZGVmYXVsdCBPcmRlclN0eWxlcztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdE1vbmV5KGFtb3VudCA9IDApIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICB9O1xuXG4gIC8vIGNoZWNrIGlmIGl0cyBhIGNsZWFuIGRvbGxhciBhbW91bnRcbiAgaWYgKGFtb3VudCAlIDEwMCA9PT0gMCkge1xuICAgIG9wdGlvbnMubWluaW11bUZyYWN0aW9uRGlnaXRzID0gMDtcbiAgfVxuXG4gIGNvbnN0IGZvcm1hdHRlciA9IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIG9wdGlvbnMpO1xuXG4gIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGFtb3VudCAvIDEwMCk7XG59XG4iLCJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UnO1xuaW1wb3J0IE9yZGVyU3R5bGVzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc3R5bGVzL09yZGVyU3R5bGVzJztcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi8uLi9saWIvZm9ybWF0TW9uZXknO1xuXG5jb25zdCBTSU5HTEVfT1JERVJfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IFNJTkdMRV9PUkRFUl9RVUVSWSgkaWQ6IElEISkge1xuICAgIG9yZGVyOiBPcmRlcih3aGVyZTogeyBpZDogJGlkIH0pIHtcbiAgICAgIGlkXG4gICAgICBjaGFyZ2VcbiAgICAgIHRvdGFsXG4gICAgICB1c2VyIHtcbiAgICAgICAgaWRcbiAgICAgIH1cbiAgICAgIGl0ZW1zIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBwcmljZVxuICAgICAgICBxdWFudGl0eVxuICAgICAgICBwaG90byB7XG4gICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5nbGVPcmRlclBhZ2UoeyBxdWVyeSB9KSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9PUkRFUl9RVUVSWSwge1xuICAgIHZhcmlhYmxlczogeyBpZDogcXVlcnkuaWQgfSxcbiAgfSk7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvck1lc3NhZ2UgZXJyb3I9e2Vycm9yfSAvPjtcbiAgY29uc3QgeyBvcmRlciB9ID0gZGF0YTtcbiAgcmV0dXJuIChcbiAgICA8T3JkZXJTdHlsZXM+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNpY2sgRml0cyAtIHtvcmRlci5pZH08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHA+XG4gICAgICAgIDxzcGFuPk9yZGVyIElkOjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e29yZGVyLmlkfTwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8c3Bhbj5DaGFyZ2U6PC9zcGFuPlxuICAgICAgICA8c3Bhbj57b3JkZXIuY2hhcmdlfTwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8c3Bhbj5PcmRlciBUb3RhbDo8L3NwYW4+XG4gICAgICAgIDxzcGFuPntmb3JtYXRNb25leShvcmRlci50b3RhbCl9PC9zcGFuPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxzcGFuPkl0ZW1Db3VudDo8L3NwYW4+XG4gICAgICAgIDxzcGFuPntvcmRlci5pdGVtcy5sZW5ndGh9PC9zcGFuPlxuICAgICAgPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtc1wiPlxuICAgICAgICB7b3JkZXIuaXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1pdGVtXCIga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfSBhbHQ9e2l0ZW0udGl0bGV9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tZGV0YWlsc1wiPlxuICAgICAgICAgICAgICA8aDI+e2l0ZW0ubmFtZX08L2gyPlxuICAgICAgICAgICAgICA8cD5RdHk6IHtpdGVtLnF1YW50aXR5fTwvcD5cbiAgICAgICAgICAgICAgPHA+RWFjaDoge2Zvcm1hdE1vbmV5KGl0ZW0ucHJpY2UpfTwvcD5cbiAgICAgICAgICAgICAgPHA+U3ViIFRvdGFsOiB7Zm9ybWF0TW9uZXkoaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHkpfTwvcD5cbiAgICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9PcmRlclN0eWxlcz5cbiAgKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
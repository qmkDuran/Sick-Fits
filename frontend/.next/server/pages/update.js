(function() {
var exports = {};
exports.id = "pages/update";
exports.ids = ["pages/update"];
exports.modules = {

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UpdateProduct; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");

var _jsxFileName = "C:\\Users\\Jose\\Desktop\\sick-fits\\frontend\\components\\UpdateProduct.js";





const SINGLE_PRODUCT_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;
const UPDATE_PRODUCT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;
function UpdateProduct({
  id
}) {
  // 1. We need to get the existing product
  const {
    data,
    error,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(SINGLE_PRODUCT_QUERY, {
    variables: {
      id
    }
  }); // 2. We need to get the mutation to update the product

  const [updateProduct, {
    data: updateData,
    error: updateError,
    loading: updateLoading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(UPDATE_PRODUCT_MUTATION); // 2.5 Create some state for the form inputs:

  const {
    inputs,
    handleChange,
    clearForm,
    resetForm
  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_3__.default)((data === null || data === void 0 ? void 0 : data.Product) || {
    name: '',
    description: '',
    price: ''
  });
  console.log(inputs);
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 23
  }, this); // 3. We need the form to handle the updates

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_5__.default, {
    onSubmit: async e => {
      e.preventDefault();
      const res = await updateProduct({
        variables: {
          id,
          name: inputs.name,
          description: inputs.description,
          price: inputs.price
        }
      }).catch(console.error);
      console.log(res); // Submit the inputfields to the backend:
      // TODO: Handle Submit!!!
      // const res = await createProduct();
      // clearForm();
      // // Go to that product's page!
      // Router.push({
      //   pathname: `/product/${res.data.createProduct.id}`,
      // });
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__.default, {
      error: error || updateError
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("fieldset", {
      disabled: updateLoading,
      "aria-busy": updateLoading,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          id: "name",
          name: "name",
          placeholder: "Name",
          value: inputs.name,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "price",
        children: ["Price", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "number",
          id: "price",
          name: "price",
          placeholder: "price",
          value: inputs.price,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "description",
        children: ["Description", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
          id: "description",
          name: "description",
          placeholder: "Description",
          value: inputs.description,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "Update Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const loading = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({
  displayName: "Form",
  componentId: "sc-1xszr8q-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:var(--red);}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-color:black;}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useForm; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function useForm(initial = {}) {
  // create a state object for our inputs
  const {
    0: inputs,
    1: setInputs
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);
  const initialValues = Object.values(initial).join('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // This function runs when the things we are watching change
    setInputs(initial);
  }, [initialValues]); // {
  //   name: 'wes',
  //   description: 'nice shoes',
  //   price: 1000
  // }

  function handleChange(e) {
    let {
      value,
      name,
      type
    } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      [value] = e.target.files;
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {
      [name]: value
    }));
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
    setInputs(blankState);
  } // return the things we want to surface from this custom hook


  return {
    inputs,
    handleChange,
    resetForm,
    clearForm
  };
}

/***/ }),

/***/ "./pages/update.js":
/*!*************************!*\
  !*** ./pages/update.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UpdatePage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UpdateProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UpdateProduct */ "./components/UpdateProduct.js");

var _jsxFileName = "C:\\Users\\Jose\\Desktop\\sick-fits\\frontend\\pages\\update.js";

function UpdatePage({
  query
}) {
  console.log(query);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UpdateProduct__WEBPACK_IMPORTED_MODULE_1__.default, {
      id: query.id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_ErrorMessage_js"], function() { return __webpack_exec__("./pages/update.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1VwZGF0ZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvRm9ybS5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvdXNlRm9ybS5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiU0lOR0xFX1BST0RVQ1RfUVVFUlkiLCJncWwiLCJVUERBVEVfUFJPRFVDVF9NVVRBVElPTiIsIlVwZGF0ZVByb2R1Y3QiLCJpZCIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsInVwZGF0ZVByb2R1Y3QiLCJ1cGRhdGVEYXRhIiwidXBkYXRlRXJyb3IiLCJ1cGRhdGVMb2FkaW5nIiwidXNlTXV0YXRpb24iLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJ1c2VGb3JtIiwiUHJvZHVjdCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiY29uc29sZSIsImxvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImNhdGNoIiwia2V5ZnJhbWVzIiwiRm9ybSIsInN0eWxlZCIsImluaXRpYWwiLCJzZXRJbnB1dHMiLCJ1c2VTdGF0ZSIsImluaXRpYWxWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJqb2luIiwidXNlRWZmZWN0IiwidmFsdWUiLCJ0eXBlIiwidGFyZ2V0IiwicGFyc2VJbnQiLCJmaWxlcyIsImJsYW5rU3RhdGUiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJVcGRhdGVQYWdlIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsb0JBQW9CLEdBQUdDLG9EQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVRBO0FBV0EsTUFBTUMsdUJBQXVCLEdBQUdELG9EQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FqQkE7QUFtQmUsU0FBU0UsYUFBVCxDQUF1QjtBQUFFQztBQUFGLENBQXZCLEVBQStCO0FBQzVDO0FBQ0EsUUFBTTtBQUFFQyxRQUFGO0FBQVFDLFNBQVI7QUFBZUM7QUFBZixNQUEyQkMsd0RBQVEsQ0FBQ1Isb0JBQUQsRUFBdUI7QUFDOURTLGFBQVMsRUFBRTtBQUFFTDtBQUFGO0FBRG1ELEdBQXZCLENBQXpDLENBRjRDLENBSzVDOztBQUNBLFFBQU0sQ0FDSk0sYUFESSxFQUVKO0FBQUVMLFFBQUksRUFBRU0sVUFBUjtBQUFvQkwsU0FBSyxFQUFFTSxXQUEzQjtBQUF3Q0wsV0FBTyxFQUFFTTtBQUFqRCxHQUZJLElBR0ZDLDJEQUFXLENBQUNaLHVCQUFELENBSGYsQ0FONEMsQ0FVNUM7O0FBQ0EsUUFBTTtBQUFFYSxVQUFGO0FBQVVDLGdCQUFW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LENBQW5CO0FBR0FoQixhQUFTLENBQUNZLFVBQUQsQ0FBVDtBQUNELEdBeEMyQyxDQTBDNUM7OztBQUNBLFNBQU87QUFDTC9CLFVBREs7QUFFTEMsZ0JBRks7QUFHTEUsYUFISztBQUlMRDtBQUpLLEdBQVA7QUFNRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25ERDtBQUVlLFNBQVNrQyxVQUFULENBQW9CO0FBQUVDO0FBQUYsQ0FBcEIsRUFBK0I7QUFDNUM1QixTQUFPLENBQUNDLEdBQVIsQ0FBWTJCLEtBQVo7QUFDQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDhEQUFEO0FBQWUsUUFBRSxFQUFFQSxLQUFLLENBQUNoRDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQzs7Ozs7Ozs7Ozs7QUNURCw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy91cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL2xpYi91c2VGb3JtJztcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XG5cbmNvbnN0IFNJTkdMRV9QUk9EVUNUX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBTSU5HTEVfUFJPRFVDVF9RVUVSWSgkaWQ6IElEISkge1xuICAgIFByb2R1Y3Qod2hlcmU6IHsgaWQ6ICRpZCB9KSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIHByaWNlXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBVUERBVEVfUFJPRFVDVF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04oXG4gICAgJGlkOiBJRCFcbiAgICAkbmFtZTogU3RyaW5nXG4gICAgJGRlc2NyaXB0aW9uOiBTdHJpbmdcbiAgICAkcHJpY2U6IEludFxuICApIHtcbiAgICB1cGRhdGVQcm9kdWN0KFxuICAgICAgaWQ6ICRpZFxuICAgICAgZGF0YTogeyBuYW1lOiAkbmFtZSwgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvbiwgcHJpY2U6ICRwcmljZSB9XG4gICAgKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIHByaWNlXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVQcm9kdWN0KHsgaWQgfSkge1xuICAvLyAxLiBXZSBuZWVkIHRvIGdldCB0aGUgZXhpc3RpbmcgcHJvZHVjdFxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShTSU5HTEVfUFJPRFVDVF9RVUVSWSwge1xuICAgIHZhcmlhYmxlczogeyBpZCB9LFxuICB9KTtcbiAgLy8gMi4gV2UgbmVlZCB0byBnZXQgdGhlIG11dGF0aW9uIHRvIHVwZGF0ZSB0aGUgcHJvZHVjdFxuICBjb25zdCBbXG4gICAgdXBkYXRlUHJvZHVjdCxcbiAgICB7IGRhdGE6IHVwZGF0ZURhdGEsIGVycm9yOiB1cGRhdGVFcnJvciwgbG9hZGluZzogdXBkYXRlTG9hZGluZyB9LFxuICBdID0gdXNlTXV0YXRpb24oVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04pO1xuICAvLyAyLjUgQ3JlYXRlIHNvbWUgc3RhdGUgZm9yIHRoZSBmb3JtIGlucHV0czpcbiAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgY2xlYXJGb3JtLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oXG4gICAgZGF0YT8uUHJvZHVjdCB8fCB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHByaWNlOiAnJyxcbiAgICB9XG4gICk7XG4gIGNvbnNvbGUubG9nKGlucHV0cyk7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+bG9hZGluZy4uLjwvcD47XG4gIC8vIDMuIFdlIG5lZWQgdGhlIGZvcm0gdG8gaGFuZGxlIHRoZSB1cGRhdGVzXG4gIHJldHVybiAoXG4gICAgPEZvcm1cbiAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHVwZGF0ZVByb2R1Y3Qoe1xuICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBuYW1lOiBpbnB1dHMubmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpbnB1dHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwcmljZTogaW5wdXRzLnByaWNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAvLyBTdWJtaXQgdGhlIGlucHV0ZmllbGRzIHRvIHRoZSBiYWNrZW5kOlxuICAgICAgICAvLyBUT0RPOiBIYW5kbGUgU3VibWl0ISEhXG4gICAgICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGNyZWF0ZVByb2R1Y3QoKTtcbiAgICAgICAgLy8gY2xlYXJGb3JtKCk7XG4gICAgICAgIC8vIC8vIEdvIHRvIHRoYXQgcHJvZHVjdCdzIHBhZ2UhXG4gICAgICAgIC8vIFJvdXRlci5wdXNoKHtcbiAgICAgICAgLy8gICBwYXRobmFtZTogYC9wcm9kdWN0LyR7cmVzLmRhdGEuY3JlYXRlUHJvZHVjdC5pZH1gLFxuICAgICAgICAvLyB9KTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3IgfHwgdXBkYXRlRXJyb3J9IC8+XG4gICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e3VwZGF0ZUxvYWRpbmd9IGFyaWEtYnVzeT17dXBkYXRlTG9hZGluZ30+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxuICAgICAgICAgIE5hbWVcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+XG4gICAgICAgICAgUHJpY2VcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJwcmljZVwiXG4gICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwcmljZVwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnByaWNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5VcGRhdGUgUHJvZHVjdDwvYnV0dG9uPlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgbG9hZGluZyA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgIC8qIHJvdGF0ZTogMDsgKi9cbiAgfVxuXG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gICAgLyogcm90YXRlOiAzNjBkZWc7ICovXG4gIH1cbmA7XG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICBpbnB1dCxcbiAgdGV4dGFyZWEsXG4gIHNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXJlZCk7XG4gICAgfVxuICB9XG4gIGJ1dHRvbixcbiAgaW5wdXRbdHlwZT0nc3VibWl0J10ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gIH1cbiAgZmllbGRzZXQge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICAmOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICAmW2FyaWEtYnVzeT0ndHJ1ZSddOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCUgYXV0bztcbiAgICAgIGFuaW1hdGlvbjogJHtsb2FkaW5nfSAwLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JtKGluaXRpYWwgPSB7fSkge1xuICAvLyBjcmVhdGUgYSBzdGF0ZSBvYmplY3QgZm9yIG91ciBpbnB1dHNcbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKGluaXRpYWwpO1xuICBjb25zdCBpbml0aWFsVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhpbml0aWFsKS5qb2luKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFRoaXMgZnVuY3Rpb24gcnVucyB3aGVuIHRoZSB0aGluZ3Mgd2UgYXJlIHdhdGNoaW5nIGNoYW5nZVxuICAgIHNldElucHV0cyhpbml0aWFsKTtcbiAgfSwgW2luaXRpYWxWYWx1ZXNdKTtcblxuICAvLyB7XG4gIC8vICAgbmFtZTogJ3dlcycsXG4gIC8vICAgZGVzY3JpcHRpb246ICduaWNlIHNob2VzJyxcbiAgLy8gICBwcmljZTogMTAwMFxuICAvLyB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBsZXQgeyB2YWx1ZSwgbmFtZSwgdHlwZSB9ID0gZS50YXJnZXQ7XG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdmaWxlJykge1xuICAgICAgW3ZhbHVlXSA9IGUudGFyZ2V0LmZpbGVzO1xuICAgIH1cbiAgICBzZXRJbnB1dHMoe1xuICAgICAgLy8gY29weSB0aGUgZXhpc3Rpbmcgc3RhdGVcbiAgICAgIC4uLmlucHV0cyxcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgc2V0SW5wdXRzKGluaXRpYWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xuICAgIGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICBPYmplY3QuZW50cmllcyhpbnB1dHMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCAnJ10pXG4gICAgKTtcbiAgICBzZXRJbnB1dHMoYmxhbmtTdGF0ZSk7XG4gIH1cblxuICAvLyByZXR1cm4gdGhlIHRoaW5ncyB3ZSB3YW50IHRvIHN1cmZhY2UgZnJvbSB0aGlzIGN1c3RvbSBob29rXG4gIHJldHVybiB7XG4gICAgaW5wdXRzLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICByZXNldEZvcm0sXG4gICAgY2xlYXJGb3JtLFxuICB9O1xufVxuIiwiaW1wb3J0IFVwZGF0ZVByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBkYXRlUGFnZSh7IHF1ZXJ5IH0pIHtcbiAgY29uc29sZS5sb2cocXVlcnkpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VXBkYXRlUHJvZHVjdCBpZD17cXVlcnkuaWR9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9
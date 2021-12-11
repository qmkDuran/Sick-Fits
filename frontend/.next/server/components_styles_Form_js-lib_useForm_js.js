exports.id = "components_styles_Form_js-lib_useForm_js";
exports.ids = ["components_styles_Form_js-lib_useForm_js"];
exports.modules = {

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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9Gb3JtLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2xpYi91c2VGb3JtLmpzIl0sIm5hbWVzIjpbImxvYWRpbmciLCJrZXlmcmFtZXMiLCJGb3JtIiwic3R5bGVkIiwidXNlRm9ybSIsImluaXRpYWwiLCJpbnB1dHMiLCJzZXRJbnB1dHMiLCJ1c2VTdGF0ZSIsImluaXRpYWxWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJqb2luIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwibmFtZSIsInR5cGUiLCJ0YXJnZXQiLCJwYXJzZUludCIsImZpbGVzIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwiYmxhbmtTdGF0ZSIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIm1hcCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0MsNERBQUgsc0VBQWI7QUFZQSxNQUFNQyxJQUFJLEdBQUdDLHdFQUFIO0FBQUE7QUFBQTtBQUFBLG9xQkFpRFNILE9BakRULENBQVY7QUFzREEsK0RBQWVFLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFFZSxTQUFTRSxPQUFULENBQWlCQyxPQUFPLEdBQUcsRUFBM0IsRUFBK0I7QUFDNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLCtDQUFRLENBQUNILE9BQUQsQ0FBcEM7QUFDQSxRQUFNSSxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTixPQUFkLEVBQXVCTyxJQUF2QixDQUE0QixFQUE1QixDQUF0QjtBQUVBQyxrREFBUyxDQUFDLE1BQU07QUFDZDtBQUNBTixhQUFTLENBQUNGLE9BQUQsQ0FBVDtBQUNELEdBSFEsRUFHTixDQUFDSSxhQUFELENBSE0sQ0FBVCxDQUw0QyxDQVU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVNLLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCO0FBQ3ZCLFFBQUk7QUFBRUMsV0FBRjtBQUFTQyxVQUFUO0FBQWVDO0FBQWYsUUFBd0JILENBQUMsQ0FBQ0ksTUFBOUI7O0FBQ0EsUUFBSUQsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDckJGLFdBQUssR0FBR0ksUUFBUSxDQUFDSixLQUFELENBQWhCO0FBQ0Q7O0FBQ0QsUUFBSUUsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkIsT0FBQ0YsS0FBRCxJQUFVRCxDQUFDLENBQUNJLE1BQUYsQ0FBU0UsS0FBbkI7QUFDRDs7QUFDRGQsYUFBUyxpQ0FFSkQsTUFGSTtBQUdQLE9BQUNXLElBQUQsR0FBUUQ7QUFIRCxPQUFUO0FBS0Q7O0FBRUQsV0FBU00sU0FBVCxHQUFxQjtBQUNuQmYsYUFBUyxDQUFDRixPQUFELENBQVQ7QUFDRDs7QUFFRCxXQUFTa0IsU0FBVCxHQUFxQjtBQUNuQixVQUFNQyxVQUFVLEdBQUdkLE1BQU0sQ0FBQ2UsV0FBUCxDQUNqQmYsTUFBTSxDQUFDZ0IsT0FBUCxDQUFlcEIsTUFBZixFQUF1QnFCLEdBQXZCLENBQTJCLENBQUMsQ0FBQ0MsR0FBRCxFQUFNWixLQUFOLENBQUQsS0FBa0IsQ0FBQ1ksR0FBRCxFQUFNLEVBQU4sQ0FBN0MsQ0FEaUIsQ0FBbkI7QUFHQXJCLGFBQVMsQ0FBQ2lCLFVBQUQsQ0FBVDtBQUNELEdBeEMyQyxDQTBDNUM7OztBQUNBLFNBQU87QUFDTGxCLFVBREs7QUFFTFEsZ0JBRks7QUFHTFEsYUFISztBQUlMQztBQUpLLEdBQVA7QUFNRCxDIiwiZmlsZSI6ImNvbXBvbmVudHNfc3R5bGVzX0Zvcm1fanMtbGliX3VzZUZvcm1fanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgbG9hZGluZyA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgIC8qIHJvdGF0ZTogMDsgKi9cbiAgfVxuXG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gICAgLyogcm90YXRlOiAzNjBkZWc7ICovXG4gIH1cbmA7XG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICBpbnB1dCxcbiAgdGV4dGFyZWEsXG4gIHNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXJlZCk7XG4gICAgfVxuICB9XG4gIGJ1dHRvbixcbiAgaW5wdXRbdHlwZT0nc3VibWl0J10ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gIH1cbiAgZmllbGRzZXQge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICAmOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICAmW2FyaWEtYnVzeT0ndHJ1ZSddOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCUgYXV0bztcbiAgICAgIGFuaW1hdGlvbjogJHtsb2FkaW5nfSAwLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JtKGluaXRpYWwgPSB7fSkge1xuICAvLyBjcmVhdGUgYSBzdGF0ZSBvYmplY3QgZm9yIG91ciBpbnB1dHNcbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKGluaXRpYWwpO1xuICBjb25zdCBpbml0aWFsVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhpbml0aWFsKS5qb2luKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFRoaXMgZnVuY3Rpb24gcnVucyB3aGVuIHRoZSB0aGluZ3Mgd2UgYXJlIHdhdGNoaW5nIGNoYW5nZVxuICAgIHNldElucHV0cyhpbml0aWFsKTtcbiAgfSwgW2luaXRpYWxWYWx1ZXNdKTtcblxuICAvLyB7XG4gIC8vICAgbmFtZTogJ3dlcycsXG4gIC8vICAgZGVzY3JpcHRpb246ICduaWNlIHNob2VzJyxcbiAgLy8gICBwcmljZTogMTAwMFxuICAvLyB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBsZXQgeyB2YWx1ZSwgbmFtZSwgdHlwZSB9ID0gZS50YXJnZXQ7XG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdmaWxlJykge1xuICAgICAgW3ZhbHVlXSA9IGUudGFyZ2V0LmZpbGVzO1xuICAgIH1cbiAgICBzZXRJbnB1dHMoe1xuICAgICAgLy8gY29weSB0aGUgZXhpc3Rpbmcgc3RhdGVcbiAgICAgIC4uLmlucHV0cyxcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgc2V0SW5wdXRzKGluaXRpYWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xuICAgIGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICBPYmplY3QuZW50cmllcyhpbnB1dHMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCAnJ10pXG4gICAgKTtcbiAgICBzZXRJbnB1dHMoYmxhbmtTdGF0ZSk7XG4gIH1cblxuICAvLyByZXR1cm4gdGhlIHRoaW5ncyB3ZSB3YW50IHRvIHN1cmZhY2UgZnJvbSB0aGlzIGN1c3RvbSBob29rXG4gIHJldHVybiB7XG4gICAgaW5wdXRzLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICByZXNldEZvcm0sXG4gICAgY2xlYXJGb3JtLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
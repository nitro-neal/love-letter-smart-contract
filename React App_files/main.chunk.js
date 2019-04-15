(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@-webkit-keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ReadString__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ReadString */ "./src/ReadString.js");
/* harmony import */ var _SetString__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SetString */ "./src/SetString.js");





var _jsxFileName = "/Users/nealroessler/MY-WORKSPACE/drizzle-react-tutorial/client/src/App.js";






var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      loading: true,
      drizzleState: null
    };
    return _this;
  }

  Object(_Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var drizzle = this.props.drizzle; // subscribe to changes in the store

      this.unsubscribe = drizzle.store.subscribe(function () {
        // every time the store updates, grab the state from drizzle
        var drizzleState = drizzle.store.getState(); // check to see if it's ready, if so, update local component state

        if (drizzleState.drizzleStatus.initialized) {
          _this2.setState({
            loading: false,
            drizzleState: drizzleState
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loading) return "Loading Drizzle...";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ReadString__WEBPACK_IMPORTED_MODULE_8__["default"], {
        drizzle: this.props.drizzle,
        drizzleState: this.state.drizzleState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_SetString__WEBPACK_IMPORTED_MODULE_9__["default"], {
        drizzle: this.props.drizzle,
        drizzleState: this.state.drizzleState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/ReadString.js":
/*!***************************!*\
  !*** ./src/ReadString.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/nealroessler/MY-WORKSPACE/drizzle-react-tutorial/client/src/ReadString.js";


var ReadString =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ReadString, _React$Component);

  function ReadString() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReadString);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ReadString)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      dataKey: null
    };
    return _this;
  }

  Object(_Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ReadString, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var drizzle = this.props.drizzle;
      var contract = drizzle.contracts.MyStringStore; // let drizzle know we want to watch the `myString` method

      var dataKey = contract.methods["myString"].cacheCall(); // save the `dataKey` to local component state for later reference

      this.setState({
        dataKey: dataKey
      });
    }
  }, {
    key: "render",
    value: function render() {
      // get the contract state from drizzleState
      var MyStringStore = this.props.drizzleState.contracts.MyStringStore; // using the saved `dataKey`, get the variable we're interested in

      var myString = MyStringStore.myString[this.state.dataKey]; // if it exists, then we display its value

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "My stored string: ", myString && myString.value);
    }
  }]);

  return ReadString;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ReadString);

/***/ }),

/***/ "./src/SetString.js":
/*!**************************!*\
  !*** ./src/SetString.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/nealroessler/MY-WORKSPACE/drizzle-react-tutorial/client/src/SetString.js";


var SetString =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SetString, _React$Component);

  function SetString() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SetString);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SetString)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      stackId: null
    };

    _this.handleKeyDown = function (e) {
      // if the enter key is pressed, set the value with the string
      if (e.keyCode === 13) {
        _this.setValue(e.target.value);
      }
    };

    _this.setValue = function (value) {
      var _this$props = _this.props,
          drizzle = _this$props.drizzle,
          drizzleState = _this$props.drizzleState;
      var contract = drizzle.contracts.MyStringStore; // let drizzle know we want to call the `set` method with `value`

      var stackId = contract.methods["set"].cacheSend(value, {
        from: drizzleState.accounts[0]
      }); // save the `stackId` for later reference

      _this.setState({
        stackId: stackId
      });
    };

    _this.getTxStatus = function () {
      // get the transaction states from the drizzle state
      var _this$props$drizzleSt = _this.props.drizzleState,
          transactions = _this$props$drizzleSt.transactions,
          transactionStack = _this$props$drizzleSt.transactionStack; // get the transaction hash using our saved `stackId`

      var txHash = transactionStack[_this.state.stackId]; // if transaction hash does not exist, don't display anything

      if (!txHash) return null; // otherwise, return the transaction status

      return "Transaction status: ".concat(transactions[txHash] && transactions[txHash].status);
    };

    return _this;
  }

  Object(_Users_nealroessler_MY_WORKSPACE_drizzle_react_tutorial_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SetString, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        onKeyDown: this.handleKeyDown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, this.getTxStatus()));
    }
  }]);

  return SetString;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SetString);

/***/ }),

/***/ "./src/contracts/MyStringStore.json":
/*!******************************************!*\
  !*** ./src/contracts/MyStringStore.json ***!
  \******************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = {"contractName":"MyStringStore","abi":[{"constant":true,"inputs":[],"name":"myString","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x492bfa18"},{"constant":false,"inputs":[{"name":"x","type":"string"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x4ed3885e"}],"metadata":"{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"myString\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"x\",\"type\":\"string\"}],\"name\":\"set\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/nealroessler/MY-WORKSPACE/drizzle-react-tutorial/contracts/MyStringStore.sol\":\"MyStringStore\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/nealroessler/MY-WORKSPACE/drizzle-react-tutorial/contracts/MyStringStore.sol\":{\"keccak256\":\"0x0c5604d480feb0a07eb5148fed2e7c15ac004d6f869256d8280cf2faded77024\",\"urls\":[\"bzzr://cdacfff9e02a7ef45fd01c70a36b4f99ff952dc0f9a30c3bc287826e5b8f9a38\"]}},\"version\":1}","bytecode":"0x60806040526040805190810160405280600b81526020017f48656c6c6f20576f726c640000000000000000000000000000000000000000008152506000908051906020019061004f929190610062565b5034801561005c57600080fd5b50610107565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a357805160ff19168380011785556100d1565b828001600101855582156100d1579182015b828111156100d05782518255916020019190600101906100b5565b5b5090506100de91906100e2565b5090565b61010491905b808211156101005760008160009055506001016100e8565b5090565b90565b610332806101166000396000f3fe60806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063492bfa18146100515780634ed3885e146100e1575b600080fd5b34801561005d57600080fd5b506100666101a9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100a657808201518184015260208101905061008b565b50505050905090810190601f1680156100d35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156100ed57600080fd5b506101a76004803603602081101561010457600080fd5b810190808035906020019064010000000081111561012157600080fd5b82018360208201111561013357600080fd5b8035906020019184600183028401116401000000008311171561015557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610247565b005b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561023f5780601f106102145761010080835404028352916020019161023f565b820191906000526020600020905b81548152906001019060200180831161022257829003601f168201915b505050505081565b806000908051906020019061025d929190610261565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102a257805160ff19168380011785556102d0565b828001600101855582156102d0579182015b828111156102cf5782518255916020019190600101906102b4565b5b5090506102dd91906102e1565b5090565b61030391905b808211156102ff5760008160009055506001016102e7565b5090565b9056fea165627a7a7230582001504f8d0e5a1aab25afd50d1dd51476e156ffd48b7f2e05ecc8c8d7fd2b24b30029","deployedBytecode":"0x60806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063492bfa18146100515780634ed3885e146100e1575b600080fd5b34801561005d57600080fd5b506100666101a9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100a657808201518184015260208101905061008b565b50505050905090810190601f1680156100d35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156100ed57600080fd5b506101a76004803603602081101561010457600080fd5b810190808035906020019064010000000081111561012157600080fd5b82018360208201111561013357600080fd5b8035906020019184600183028401116401000000008311171561015557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610247565b005b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561023f5780601f106102145761010080835404028352916020019161023f565b820191906000526020600020905b81548152906001019060200180831161022257829003601f168201915b505050505081565b806000908051906020019061025d929190610261565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102a257805160ff19168380011785556102d0565b828001600101855582156102d0579182015b828111156102cf5782518255916020019190600101906102b4565b5b5090506102dd91906102e1565b5090565b61030391905b808211156102ff5760008160009055506001016102e7565b5090565b9056fea165627a7a7230582001504f8d0e5a1aab25afd50d1dd51476e156ffd48b7f2e05ecc8c8d7fd2b24b30029","sourceMap":"25:132:1:-;;;52:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;25:132;8:9:-1;5:2;;;30:1;27;20:12;5:2;25:132:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;","deployedSourceMap":"25:132:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;52:38;;8:9:-1;5:2;;;30:1;27;20:12;5:2;52:38:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;52:38:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;95:60;;8:9:-1;5:2;;;30:1;27;20:12;5:2;95:60:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;95:60:1;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;95:60:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;95:60:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;95:60:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;95:60:1;;;;;;;;;;;;;;;;;;52:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;95:60::-;149:1;138:8;:12;;;;;;;;;;;;:::i;:::-;;95:60;:::o;25:132::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o","source":"pragma solidity ^0.5.0;\n\ncontract MyStringStore {\n  string public myString = \"Hello World\";\n\n  function set(string memory x) public {\n    myString = x;\n  }\n}","sourcePath":"/Users/nealroessler/MY-WORKSPACE/drizzle-react-tutorial/contracts/MyStringStore.sol","ast":{"absolutePath":"/Users/nealroessler/MY-WORKSPACE/drizzle-react-tutorial/contracts/MyStringStore.sol","exportedSymbols":{"MyStringStore":[72]},"id":73,"nodeType":"SourceUnit","nodes":[{"id":58,"literals":["solidity","^","0.5",".0"],"nodeType":"PragmaDirective","src":"0:23:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":72,"linearizedBaseContracts":[72],"name":"MyStringStore","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":61,"name":"myString","nodeType":"VariableDeclaration","scope":72,"src":"52:38:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":59,"name":"string","nodeType":"ElementaryTypeName","src":"52:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":{"argumentTypes":null,"hexValue":"48656c6c6f20576f726c64","id":60,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"77:13:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_592fa743889fc7f92ac2a37bb1f5ba1daf2a5c84741ca0e0061d243a2e6707ba","typeString":"literal_string \"Hello World\""},"value":"Hello World"},"visibility":"public"},{"body":{"id":70,"nodeType":"Block","src":"132:23:1","statements":[{"expression":{"argumentTypes":null,"id":68,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":66,"name":"myString","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":61,"src":"138:8:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":67,"name":"x","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":63,"src":"149:1:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"138:12:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":69,"nodeType":"ExpressionStatement","src":"138:12:1"}]},"documentation":null,"id":71,"implemented":true,"kind":"function","modifiers":[],"name":"set","nodeType":"FunctionDefinition","parameters":{"id":64,"nodeType":"ParameterList","parameters":[{"constant":false,"id":63,"name":"x","nodeType":"VariableDeclaration","scope":71,"src":"108:15:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":62,"name":"string","nodeType":"ElementaryTypeName","src":"108:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"107:17:1"},"returnParameters":{"id":65,"nodeType":"ParameterList","parameters":[],"src":"132:0:1"},"scope":72,"src":"95:60:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":73,"src":"25:132:1"}],"src":"0:157:1"},"legacyAST":{"absolutePath":"/Users/nealroessler/MY-WORKSPACE/drizzle-react-tutorial/contracts/MyStringStore.sol","exportedSymbols":{"MyStringStore":[72]},"id":73,"nodeType":"SourceUnit","nodes":[{"id":58,"literals":["solidity","^","0.5",".0"],"nodeType":"PragmaDirective","src":"0:23:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":72,"linearizedBaseContracts":[72],"name":"MyStringStore","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":61,"name":"myString","nodeType":"VariableDeclaration","scope":72,"src":"52:38:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":59,"name":"string","nodeType":"ElementaryTypeName","src":"52:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":{"argumentTypes":null,"hexValue":"48656c6c6f20576f726c64","id":60,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"77:13:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_592fa743889fc7f92ac2a37bb1f5ba1daf2a5c84741ca0e0061d243a2e6707ba","typeString":"literal_string \"Hello World\""},"value":"Hello World"},"visibility":"public"},{"body":{"id":70,"nodeType":"Block","src":"132:23:1","statements":[{"expression":{"argumentTypes":null,"id":68,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":66,"name":"myString","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":61,"src":"138:8:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":67,"name":"x","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":63,"src":"149:1:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"138:12:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":69,"nodeType":"ExpressionStatement","src":"138:12:1"}]},"documentation":null,"id":71,"implemented":true,"kind":"function","modifiers":[],"name":"set","nodeType":"FunctionDefinition","parameters":{"id":64,"nodeType":"ParameterList","parameters":[{"constant":false,"id":63,"name":"x","nodeType":"VariableDeclaration","scope":71,"src":"108:15:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":62,"name":"string","nodeType":"ElementaryTypeName","src":"108:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"107:17:1"},"returnParameters":{"id":65,"nodeType":"ParameterList","parameters":[],"src":"132:0:1"},"scope":72,"src":"95:60:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":73,"src":"25:132:1"}],"src":"0:157:1"},"compiler":{"name":"solc","version":"0.5.0+commit.1d4f565a.Emscripten.clang"},"networks":{"3":{"events":{},"links":{},"address":"0x8943Ee7723553a9476BB5192AafF8C87a9987152","transactionHash":"0x949f55b398fc78a856fe48057fb1a9ebe10df2e797197b317ecf3cc5277ba968"},"5777":{"events":{},"links":{},"address":"0xA8d5cc7d0a65056c30a2bed20bacF6D863D5d1F6","transactionHash":"0x7aa60337d895494c07ad16a8af26ad45c52ac620e9c4be243183058e7dc20b67"}},"schemaVersion":"3.0.6","updatedAt":"2019-04-15T06:28:54.823Z","devdoc":{"methods":{}},"userdoc":{"methods":{}}};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var drizzle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! drizzle */ "./node_modules/drizzle/dist/drizzle.js");
/* harmony import */ var drizzle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(drizzle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contracts_MyStringStore_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contracts/MyStringStore.json */ "./src/contracts/MyStringStore.json");
var _contracts_MyStringStore_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./contracts/MyStringStore.json */ "./src/contracts/MyStringStore.json", 1);
var _jsxFileName = "/Users/nealroessler/MY-WORKSPACE/drizzle-react-tutorial/client/src/index.js";




 // import drizzle functions and contract artifact


 // let drizzle know what contracts we want and how to access our test blockchain

var options = {
  contracts: [_contracts_MyStringStore_json__WEBPACK_IMPORTED_MODULE_6__],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545"
    }
  }
}; // setup the drizzle store and drizzle

var drizzle = new drizzle__WEBPACK_IMPORTED_MODULE_5__["Drizzle"](options);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  drizzle: drizzle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), document.getElementById('root'));

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5d5d9eef.svg";

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/nealroessler/MY-WORKSPACE/drizzle-react-tutorial/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/nealroessler/MY-WORKSPACE/drizzle-react-tutorial/client/src/index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map
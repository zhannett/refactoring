module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/teal");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/red");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n    @media (max-width: ", "em) {\n      ", "\n    }\n  "]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var sizes = {
  giant: 2560,
  desktop: 1920,
  laptop: 1200,
  small: 1024,
  tablet: 768,
  phone: 376 // Iterate through the sizes and create a media template

};
var media = Object.keys(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["css"])(_templateObject, sizes[label] / 16, __WEBPACK_IMPORTED_MODULE_0_styled_components__["css"].apply(void 0, arguments));
  };

  return acc;
}, {});
/* harmony default export */ __webpack_exports__["a"] = (media);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Typography");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(8);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(9);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "styled-components"
var external__styled_components_ = __webpack_require__(1);
var external__styled_components__default = /*#__PURE__*/__webpack_require__.n(external__styled_components_);

// EXTERNAL MODULE: ./mediaTemplate.js
var mediaTemplate = __webpack_require__(4);

// EXTERNAL MODULE: external "material-ui/colors/teal"
var teal_ = __webpack_require__(2);
var teal__default = /*#__PURE__*/__webpack_require__.n(teal_);

// EXTERNAL MODULE: external "material-ui/colors/red"
var red_ = __webpack_require__(3);
var red__default = /*#__PURE__*/__webpack_require__.n(red_);

// CONCATENATED MODULE: ./components/SocialIcons.js
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n    background: #B2DFDB;\n    text-align: center;\n    ul {\n        display: flex;\n        flex-flow: row nowrap;\n        justify-content: space-between;\n        width: 80%;\n        position: relative;\n        top: -8px;\n        list-style: none;\n        padding-left: 0;\n        margin: 0 auto;\n    }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    width: 32px;\n    height: 32px;\n    margin-top: 8px;\n    fill: hsl(240, 100%, 50%);\n    position: relative;\n    top: 4px;\n    &:hover {\n  \t\tfill: #D32F2F;\n  \t\ttransform: scale(1.5);\n  \t\ttransition: background-color .5s, transform .5s ease-out;\n\t}\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var primary = teal__default.a[500]; // #009688

var secondary = red__default.a[300]; // #F44336

var secondary700 = red__default.a[700];
var secondary900 = red__default.a[900];
var primaryDark = teal__default.a[700];
var primaryLight = teal__default.a[300];
var secondaryDark = '#ba000d';
var secondaryLight = '#ff7961';
var StayConnectedWrapper = external__styled_components__default.a.div(_templateObject);
var SocIcon = external__styled_components__default.a.div(_templateObject2);
/* harmony default export */ var SocialIcons = (function () {
  return external__react__default.a.createElement(StayConnectedWrapper, null, external__react__default.a.createElement("ul", null, external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "http://www.linkedin.com/in/janetkulyk",
    title: "LinkedIn"
  }, external__react__default.a.createElement(SocIcon, null, external__react__default.a.createElement("svg", {
    viewBox: "0 0 512 512"
  }, external__react__default.a.createElement("path", {
    d: "M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"
  }))))), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "mailto:janetkulyk@yahoo.com",
    title: "Email"
  }, external__react__default.a.createElement(SocIcon, null, external__react__default.a.createElement("svg", {
    viewBox: "0 0 512 512"
  }, external__react__default.a.createElement("path", {
    d: "M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"
  }))))), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "https://www.facebook.com/janetkulyk",
    title: "Facebook"
  }, external__react__default.a.createElement(SocIcon, null, external__react__default.a.createElement("svg", {
    viewBox: "0 0 512 512"
  }, external__react__default.a.createElement("path", {
    d: "M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"
  }))))), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "https://twitter.com/zhannett",
    title: "Twitter"
  }, external__react__default.a.createElement(SocIcon, null, external__react__default.a.createElement("svg", {
    viewBox: "0 0 512 512"
  }, external__react__default.a.createElement("path", {
    d: "M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"
  }))))), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "https://plus.google.com/110317853968895582194/",
    title: "GooglePlus"
  }, external__react__default.a.createElement(SocIcon, null, external__react__default.a.createElement("svg", {
    viewBox: "0 0 512 512"
  }, external__react__default.a.createElement("path", {
    d: "M179.7 237.6L179.7 284.2 256.7 284.2C253.6 304.2 233.4 342.9 179.7 342.9 133.4 342.9 95.6 304.4 95.6 257 95.6 209.6 133.4 171.1 179.7 171.1 206.1 171.1 223.7 182.4 233.8 192.1L270.6 156.6C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257 44 332.2 104.7 393 179.7 393 258 393 310 337.8 310 260.1 310 251.2 309 244.4 307.9 237.6L179.7 237.6 179.7 237.6ZM468 236.7L429.3 236.7 429.3 198 390.7 198 390.7 236.7 352 236.7 352 275.3 390.7 275.3 390.7 314 429.3 314 429.3 275.3 468 275.3"
  }))))), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "https://github.com/zhannett",
    title: "Github"
  }, external__react__default.a.createElement(SocIcon, null, external__react__default.a.createElement("svg", {
    viewBox: "0 0 512 512"
  }, external__react__default.a.createElement("path", {
    d: "M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"
  })))))));
});
// CONCATENATED MODULE: ./components/Footer.js
var Footer__templateObject = /*#__PURE__*/ Footer__taggedTemplateLiteral(["\n    height: 2.8rem;\n    line-height: 2.8em;\n    background-color: #333;\n    font-size: small;\n    text-align: center;\n    color: #fff;\n"]);

function Footer__taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





external__react__default.a.createElement("style", {
  jsx: true
}, "\n  footer {\n    display: block;\n    width: 100%;\n    max-width: 1920px;\n    overflow: hidden;\n    background-color: rgba(102,102,102,0.5);\n    background: rgba(153,153,153,0.5);\n  }\n");
var Copyright = external__styled_components__default.a.div(Footer__templateObject);
var now = new Date();
/* harmony default export */ var Footer = (function () {
  return external__react__default.a.createElement("footer", null, external__react__default.a.createElement(SocialIcons, null), external__react__default.a.createElement(Copyright, null, "\xA9 Copyright ", now.getFullYear(), ". All Rights Reserved"));
});
// EXTERNAL MODULE: external "material-ui/styles"
var styles_ = __webpack_require__(10);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(6);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// EXTERNAL MODULE: external "material-ui/Drawer"
var Drawer_ = __webpack_require__(11);
var Drawer__default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: external "material-ui/AppBar"
var AppBar_ = __webpack_require__(12);
var AppBar__default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "material-ui/Toolbar"
var Toolbar_ = __webpack_require__(13);
var Toolbar__default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "material-ui/List"
var List_ = __webpack_require__(14);
var List__default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "material-ui/Typography"
var Typography_ = __webpack_require__(5);
var Typography__default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "material-ui/Divider"
var Divider_ = __webpack_require__(15);
var Divider__default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "material-ui/IconButton"
var IconButton_ = __webpack_require__(16);
var IconButton__default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__(17);
var Menu__default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@material-ui/icons/ChevronLeft"
var ChevronLeft_ = __webpack_require__(18);
var ChevronLeft__default = /*#__PURE__*/__webpack_require__.n(ChevronLeft_);

// EXTERNAL MODULE: external "@material-ui/icons/ChevronRight"
var ChevronRight_ = __webpack_require__(19);
var ChevronRight__default = /*#__PURE__*/__webpack_require__.n(ChevronRight_);

// EXTERNAL MODULE: external "@material-ui/icons/Home"
var Home_ = __webpack_require__(20);
var Home__default = /*#__PURE__*/__webpack_require__.n(Home_);

// EXTERNAL MODULE: external "@material-ui/icons/Face"
var Face_ = __webpack_require__(21);
var Face__default = /*#__PURE__*/__webpack_require__.n(Face_);

// EXTERNAL MODULE: external "@material-ui/icons/Call"
var Call_ = __webpack_require__(22);
var Call__default = /*#__PURE__*/__webpack_require__.n(Call_);

// EXTERNAL MODULE: external "@material-ui/icons/ViewList"
var ViewList_ = __webpack_require__(23);
var ViewList__default = /*#__PURE__*/__webpack_require__.n(ViewList_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(24);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./layouts/Main.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























var Main_primary = teal__default.a[500]; // #009688

var Main_secondary = red__default.a[300];
var Main_secondary700 = red__default.a[700];
var Main_secondary900 = red__default.a[900];
var Main_primaryDark = '#008ba3';
var Main_primaryLight = '#62efff';
var Main_secondaryDark = '#ba000d';
var Main_secondaryLight = '#ff7961';
var accent1 = '#b61827';
var linkStyle = {
  marginRight: 15 // import { mailFolderListItems, otherMailFolderListItems } from './tileData';

};
var drawerWidth = 240;

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      height: 430,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36
    },
    hide: {
      display: 'none'
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerPaperClose: _defineProperty({
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing.unit * 7
    }, theme.breakpoints.up('sm'), {
      width: theme.spacing.unit * 9
    }),
    toolbar: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px'
    }, theme.mixins.toolbar),
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3
    }
  };
};

var Main_MiniDrawer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MiniDrawer, _React$Component);

  function MiniDrawer() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, MiniDrawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = MiniDrawer.__proto__ || Object.getPrototypeOf(MiniDrawer)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        open: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleDrawerOpen", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          open: true
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleDrawerClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          open: false
        });
      }
    }), _temp));
  }

  _createClass(MiniDrawer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          theme = _props.theme;
      return external__react__default.a.createElement("div", {
        style: {
          height: '100%'
        }
      }, external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("meta", {
        charset: "utf-8"
      }), external__react__default.a.createElement("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge,chrome=1"
      }), external__react__default.a.createElement("title", null, "Janet (Zhanna) Kulyk\\'s Web Site - Web / Mobile Development Services - Toronto, Canada"), external__react__default.a.createElement("meta", {
        name: "author",
        content: "Janet (Zhanna) Kulyk"
      }), external__react__default.a.createElement("meta", {
        name: "keywords",
        content: "Janet (Zhanna) Kulyk, \u0416\u0430\u043D\u043D\u0430 \u041A\u0443\u043B\u0438\u043A, PWA, Progressive Web Applications, React.js, Redux, Material-UI, JavaScript, UI developer, Toronto, Ontario, Canada"
      }), external__react__default.a.createElement("meta", {
        name: "description",
        content: "Personal web site of Janet (Zhanna) Kulyk and JK IT Consulting Ltd., web / mobile development"
      }), external__react__default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), external__react__default.a.createElement("title", null, this.props.title), external__react__default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      })), external__react__default.a.createElement(AppBar__default.a, {
        position: "absolute",
        className: external__classnames__default()(classes.appBar, this.state.open && classes.appBarShift),
        style: {
          background: Main_primary
        }
      }, external__react__default.a.createElement(Toolbar__default.a, {
        disableGutters: !this.state.open
      }, external__react__default.a.createElement(IconButton__default.a, {
        color: "inherit",
        "aria-label": "open drawer",
        onClick: this.handleDrawerOpen,
        className: external__classnames__default()(classes.menuButton, this.state.open && classes.hide)
      }, external__react__default.a.createElement(Menu__default.a, null)), external__react__default.a.createElement(Typography__default.a, {
        variant: "title",
        color: "inherit",
        noWrap: true
      }, "Janet (Zhanna) Kulyk  - Web Development Consulting World-Wide"), external__react__default.a.createElement(IconButton__default.a, null, "\uD83C\uDF0E"))), external__react__default.a.createElement(Drawer__default.a, {
        variant: "permanent",
        classes: {
          paper: external__classnames__default()(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
        },
        open: this.state.open,
        style: {
          height: '100%'
        }
      }, external__react__default.a.createElement("div", {
        className: classes.toolbar
      }, external__react__default.a.createElement(IconButton__default.a, {
        onClick: this.handleDrawerClose
      }, theme.direction === 'rtl' ? external__react__default.a.createElement(ChevronRight__default.a, null) : external__react__default.a.createElement(ChevronLeft__default.a, null))), external__react__default.a.createElement(Divider__default.a, null), external__react__default.a.createElement(List__default.a, null, external__react__default.a.createElement(link__default.a, {
        href: "/"
      }, external__react__default.a.createElement("a", {
        style: {
          fontSize: 20,
          textDecoration: 'none'
        }
      }, external__react__default.a.createElement("span", {
        style: {
          position: 'absolute',
          top: '6px',
          left: '24px',
          color: Main_primary
        }
      }, external__react__default.a.createElement(Home__default.a, null)), external__react__default.a.createElement(Typography__default.a, {
        style: {
          marginLeft: '72px',
          color: Main_primary
        }
      }, "Home")))), external__react__default.a.createElement(Divider__default.a, null), external__react__default.a.createElement(List__default.a, null, external__react__default.a.createElement(link__default.a, {
        href: "/skills"
      }, external__react__default.a.createElement("a", {
        style: {
          fontSize: 20,
          textDecoration: 'none'
        }
      }, external__react__default.a.createElement("span", {
        style: {
          position: 'absolute',
          top: '6px',
          left: '24px',
          color: Main_primary
        }
      }, external__react__default.a.createElement(ViewList__default.a, null)), external__react__default.a.createElement(Typography__default.a, {
        style: {
          marginLeft: '72px',
          color: Main_primary
        }
      }, "Skills")))), external__react__default.a.createElement(Divider__default.a, null), external__react__default.a.createElement(List__default.a, null, external__react__default.a.createElement(link__default.a, {
        href: "/contact"
      }, external__react__default.a.createElement("a", {
        style: {
          fontSize: 20,
          textDecoration: 'none'
        }
      }, external__react__default.a.createElement("span", {
        style: {
          position: 'absolute',
          top: '6px',
          left: '24px',
          color: Main_primary
        }
      }, external__react__default.a.createElement(Call__default.a, null)), external__react__default.a.createElement(Typography__default.a, {
        style: {
          marginLeft: '72px',
          color: Main_primary
        }
      }, "Contact")))), external__react__default.a.createElement(Divider__default.a, null)), external__react__default.a.createElement("main", {
        className: classes.content,
        style: {
          height: '100%'
        }
      }, external__react__default.a.createElement("div", {
        className: classes.toolbar
      }), this.props.children)), external__react__default.a.createElement(Footer, null));
    }
  }]);

  return MiniDrawer;
}(external__react__default.a.Component);

/* harmony default export */ var Main = __webpack_exports__["a"] = (Object(styles_["withStyles"])(styles, {
  withTheme: true
})(Main_MiniDrawer));

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Drawer");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Toolbar");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Divider");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Face");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Call");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewList");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Typography__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mediaTemplate__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_colors_teal__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_colors_teal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_colors_teal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_colors_red__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_colors_red___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_colors_red__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n    width: 90%;\n    max-width: 840px;\n    padding: 16px;\n    border: 1px solid #ccc;\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n    text-align: center;\n    margin-top: 32px;\n    margin-bottom: 32px;\n        background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);\n        background-size: 400% 400%;\n        -webkit-animation: Gradient 10s ease infinite;\n        -moz-animation: Gradient 10s ease infinite;\n        animation: Gradient 10s ease infinite;\n    @-webkit-keyframes Gradient {\n        0% {background-position: 0% 50%}\n        50% {background-position: 100% 50%}\n        100% {background-position: 0% 50%}\n    }\n    @-moz-keyframes Gradient {\n        0% {background-position: 0% 50%}\n        50% {background-position: 100% 50%}\n        100% {background-position: 0% 50%}\n    }\n    @keyframes Gradient {\n        0% {background-position: 0% 50%}\n        50% {background-position: 100% 50%}\n        100% {background-position: 0% 50%}\n    }\n    ", ";\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n      width: 100% - 4px);\n      padding: 0;\n    "]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var primary = __WEBPACK_IMPORTED_MODULE_4_material_ui_colors_teal___default.a[500]; // #009688

var secondary = __WEBPACK_IMPORTED_MODULE_5_material_ui_colors_red___default.a[300]; // #F44336

var secondary700 = __WEBPACK_IMPORTED_MODULE_5_material_ui_colors_red___default.a[700];
var secondary900 = __WEBPACK_IMPORTED_MODULE_5_material_ui_colors_red___default.a[900];
var primaryDark = __WEBPACK_IMPORTED_MODULE_4_material_ui_colors_teal___default.a[700];
var primaryLight = __WEBPACK_IMPORTED_MODULE_4_material_ui_colors_teal___default.a[300];
var secondaryDark = '#ba000d';
var secondaryLight = '#ff7961';
var ThisSite = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, __WEBPACK_IMPORTED_MODULE_3__mediaTemplate__["a" /* default */].tablet(_templateObject2));
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ThisSite, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Typography___default.a, {
    variant: "title",
    style: {
      color: '#fff',
      lineHeight: 2
    }
  }, "This site is built using React.js, Next.js, Material-UI, CSS3, Node.js, Nginx, and Express.")));
});

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Typography__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_set__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_google_maps__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_google_maps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_Main__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ThisSite__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mediaTemplate__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_colors_teal__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_colors_teal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_colors_teal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_colors_red__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_colors_red___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_colors_red__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n    display: inline-block;\n    width: 32px;\n    height: 32px;\n    vertical-align: top;\n    margin: -4px 8px 20px 0;\n    background: url(http://janetkulyk.s3.amazonaws.com/img/sprite-icons.png) no-repeat;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    background-position: -378px 0;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    background-position: -336px 0;\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    background-position: -252px 0;\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    background-position: -210px 0;\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    background-position: -294px 0;\n"]),
    _templateObject7 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  width: 100%;\n  ", "\n  ", ";\n"]),
    _templateObject8 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    flex-wrap: wrap;\n  "]),
    _templateObject9 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    flex-direction: row;\n  "]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var primary = __WEBPACK_IMPORTED_MODULE_9_material_ui_colors_teal___default.a[500]; // #009688

var secondary = __WEBPACK_IMPORTED_MODULE_10_material_ui_colors_red___default.a[300]; // #F44336

var secondary700 = __WEBPACK_IMPORTED_MODULE_10_material_ui_colors_red___default.a[700];
var secondary900 = __WEBPACK_IMPORTED_MODULE_10_material_ui_colors_red___default.a[900];
var primaryDark = __WEBPACK_IMPORTED_MODULE_9_material_ui_colors_teal___default.a[700];
var primaryLight = __WEBPACK_IMPORTED_MODULE_9_material_ui_colors_teal___default.a[300];
var secondaryDark = '#ba000d';
var secondaryLight = '#ff7961';
var ContactInfoThumbs = __WEBPACK_IMPORTED_MODULE_5_styled_components___default.a.div(_templateObject);
var WWW = __WEBPACK_IMPORTED_MODULE_5_styled_components___default()(ContactInfoThumbs)(_templateObject2);
var Home = __WEBPACK_IMPORTED_MODULE_5_styled_components___default()(ContactInfoThumbs)(_templateObject3);
var Email = __WEBPACK_IMPORTED_MODULE_5_styled_components___default()(ContactInfoThumbs)(_templateObject4);
var Phone = __WEBPACK_IMPORTED_MODULE_5_styled_components___default()(ContactInfoThumbs)(_templateObject5);
var Skype = __WEBPACK_IMPORTED_MODULE_5_styled_components___default()(ContactInfoThumbs)(_templateObject6);
var ContactWrapper = __WEBPACK_IMPORTED_MODULE_5_styled_components___default.a.div(_templateObject7, __WEBPACK_IMPORTED_MODULE_8__mediaTemplate__["a" /* default */].small(_templateObject8), __WEBPACK_IMPORTED_MODULE_8__mediaTemplate__["a" /* default */].phone(_templateObject9)); // export default () => (

var Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      var latitude = 43.6677490;
      var longitude = -79.4061090;
      var MapComponent = Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["withProps"])({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            height: "100%"
          }
        }),
        containerElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            width: '360px',
            height: "240px"
          }
        }),
        mapElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            height: "100%"
          }
        })
      }), __WEBPACK_IMPORTED_MODULE_3_react_google_maps__["withScriptjs"], __WEBPACK_IMPORTED_MODULE_3_react_google_maps__["withGoogleMap"])(function (props) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_google_maps__["GoogleMap"], {
          defaultZoom: 12,
          defaultCenter: {
            lat: latitude,
            lng: longitude
          }
        }, props.isMarkerShown && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_google_maps__["Marker"], {
          position: {
            lat: latitude,
            lng: longitude
          }
        }));
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__layouts_Main__["a" /* default */], {
        style: {
          height: '100%',
          overflow: 'scroll',
          marginBottom: '150px'
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          height: '100%',
          overflow: 'scroll',
          marginBottom: '150px'
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_Typography___default.a, {
        variant: "display3",
        style: {
          color: secondary
        }
      }, "Contact Info"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactWrapper, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        style: {
          listStyle: 'none',
          paddingLeft: 0,
          paddingRight: '24px',
          minWidth: '35%'
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WWW, null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_Typography___default.a, {
        noWrap: "true",
        style: {
          display: 'inline'
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "http://www.janetkulyk.com/",
        "class": "url"
      }, "www.janetkulyk.com"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Home, null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_Typography___default.a, {
        noWrap: "true",
        style: {
          display: 'inline'
        }
      }, "Toronto, ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("abbr", {
        title: "Ontario"
      }, "ON"), ", Canada")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Email, null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_Typography___default.a, {
        noWrap: "true",
        style: {
          display: 'inline'
        }
      }, "E-mail: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "mailto:janetkulyk@yahoo.com"
      }, "janetkulyk@yahoo.com"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Phone, null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_Typography___default.a, {
        noWrap: "true",
        style: {
          display: 'inline'
        }
      }, "Phone: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tel:+14169294372"
      }, "(416) 841-4372"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Skype, null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_Typography___default.a, {
        noWrap: "true",
        style: {
          display: 'inline'
        }
      }, "Skype: janetkulyk"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MapComponent, {
        isMarkerShown: true
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_ThisSite__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          marginBottom: '150px'
        }
      })));
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("lodash/set");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ })
/******/ ]);
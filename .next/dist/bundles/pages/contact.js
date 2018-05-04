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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mediaTemplate__ = __webpack_require__("./mediaTemplate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SocialIcons__ = __webpack_require__("./components/SocialIcons.js");
var _jsxFileName = "/Users/janetkulyk/VisualStudioCode/jk/components/Footer.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n    height: 2.8rem;\n    line-height: 2.8em;\n    background-color: #333;\n    font-size: small;\n    text-align: center;\n    color: #fff;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  }
}, "\n  footer {\n    display: block;\n    width: 100%;\n    max-width: 1920px;\n    overflow: hidden;\n    background-color: rgba(102,102,102,0.5);\n    background: rgba(153,153,153,0.5);\n  }\n");
var Copyright = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject);
var now = new Date();
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SocialIcons__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Copyright, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "\xA9 Copyright ", now.getFullYear(), ". All Rights Reserved"));
});

/***/ }),

/***/ "./components/MiniDrawer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Drawer__ = __webpack_require__("material-ui/Drawer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Drawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar__ = __webpack_require__("material-ui/AppBar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Toolbar__ = __webpack_require__("material-ui/Toolbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_List__ = __webpack_require__("material-ui/List");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Typography__ = __webpack_require__("material-ui/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Divider__ = __webpack_require__("material-ui/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_IconButton__ = __webpack_require__("material-ui/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Menu__ = __webpack_require__("@material-ui/icons/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_ChevronLeft__ = __webpack_require__("@material-ui/icons/ChevronLeft");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_ChevronLeft___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_icons_ChevronLeft__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_icons_ChevronRight__ = __webpack_require__("@material-ui/icons/ChevronRight");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_icons_ChevronRight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__material_ui_icons_ChevronRight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Home__ = __webpack_require__("@material-ui/icons/Home");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Face__ = __webpack_require__("@material-ui/icons/Face");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Face___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Face__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_ui_icons_Call__ = __webpack_require__("@material-ui/icons/Call");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_ui_icons_Call___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__material_ui_icons_Call__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_ui_icons_ViewList__ = __webpack_require__("@material-ui/icons/ViewList");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_ui_icons_ViewList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__material_ui_icons_ViewList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_index__ = __webpack_require__("./pages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_skills__ = __webpack_require__("./pages/skills.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_contact__ = __webpack_require__("./pages/contact.js");
var _jsxFileName = "/Users/janetkulyk/VisualStudioCode/jk/components/MiniDrawer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























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

var MiniDrawer =
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar___default.a, {
        position: "absolute",
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.appBar, this.state.open && classes.appBarShift),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Toolbar___default.a, {
        disableGutters: !this.state.open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_IconButton___default.a, {
        color: "inherit",
        "aria-label": "open drawer",
        onClick: this.handleDrawerOpen,
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.menuButton, this.state.open && classes.hide),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Menu___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Typography___default.a, {
        variant: "title",
        color: "inherit",
        noWrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, "Janet (Zhanna) Kulyk Personal Website"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Drawer___default.a, {
        variant: "permanent",
        classes: {
          paper: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
        },
        open: this.state.open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.toolbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_IconButton___default.a, {
        onClick: this.handleDrawerClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, theme.direction === 'rtl' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_icons_ChevronRight___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_icons_ChevronLeft___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_List___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          fontSize: 16
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          position: 'absolute',
          top: '8px',
          left: '24px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Home___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          marginLeft: '72px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, "Home")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_List___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18_next_link___default.a, {
        href: "/skills",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          fontSize: 16
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          position: 'absolute',
          top: '8px',
          left: '24px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__material_ui_icons_ViewList___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          marginLeft: '72px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, "Skills")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_List___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18_next_link___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          fontSize: 16
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          position: 'absolute',
          top: '8px',
          left: '24px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__material_ui_icons_Call___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          marginLeft: '72px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, "Contact")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
        className: classes.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.toolbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }), this.props.children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, "inside Drawer")));
    }
  }]);

  return MiniDrawer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

MiniDrawer.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles, {
  withTheme: true
})(MiniDrawer));

/***/ }),

/***/ "./components/SocialIcons.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mediaTemplate__ = __webpack_require__("./mediaTemplate.js");
var _jsxFileName = "/Users/janetkulyk/VisualStudioCode/jk/components/SocialIcons.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n    background: rgba(153,153,153,0.5);\n    text-align: center;\n    padding: 0 16px;\n    ", "\n    ul {\n        display: flex;\n        flex-flow: row nowrap;\n        justify-content: space-between;\n        position: relative;\n        top: -8px;\n        list-style: none;\n        padding-left: 0;\n        margin: 0 auto;\n        li {\n            padding: 0 8px;\n            ", ";\n        }\n    }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n        padding: 0 8px;\n    "]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n            padding: 0 4px;\n            "]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    width: 48px;\n    height: 48px;\n    margin-top: 16px;\n    fill: hsl(240, 100%, 50%);\n    ", ";\n    &:hover {\n  \t\tfill: red;\n  \t\ttransform: scale(1.5);\n  \t\ttransition: background-color .5s, transform .5s ease-out;\n\t}\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n      width: 40px;\n      height: 40px;\n    "]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var StayConnectedWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__mediaTemplate__["a" /* default */].tablet(_templateObject2), __WEBPACK_IMPORTED_MODULE_2__mediaTemplate__["a" /* default */].tablet(_templateObject3));
var SocIcon = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject4, __WEBPACK_IMPORTED_MODULE_2__mediaTemplate__["a" /* default */].phone(_templateObject5));
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StayConnectedWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "http://www.linkedin.com/in/janetkulyk",
    title: "LinkedIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SocIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "mailto:janetkulyk@yahoo.com",
    title: "Email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SocIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://www.facebook.com/janetkulyk",
    title: "Facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SocIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://twitter.com/zhannett",
    title: "Twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SocIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://plus.google.com/110317853968895582194/",
    title: "GooglePlus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SocIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M179.7 237.6L179.7 284.2 256.7 284.2C253.6 304.2 233.4 342.9 179.7 342.9 133.4 342.9 95.6 304.4 95.6 257 95.6 209.6 133.4 171.1 179.7 171.1 206.1 171.1 223.7 182.4 233.8 192.1L270.6 156.6C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257 44 332.2 104.7 393 179.7 393 258 393 310 337.8 310 260.1 310 251.2 309 244.4 307.9 237.6L179.7 237.6 179.7 237.6ZM468 236.7L429.3 236.7 429.3 198 390.7 198 390.7 236.7 352 236.7 352 275.3 390.7 275.3 390.7 314 429.3 314 429.3 275.3 468 275.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://github.com/zhannett",
    title: "Github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SocIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  })))))));
});

/***/ }),

/***/ "./layouts/PageLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles_MuiThemeProvider__ = __webpack_require__("material-ui/styles/MuiThemeProvider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_AppBar__ = __webpack_require__("material-ui/AppBar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_MiniDrawer__ = __webpack_require__("./components/MiniDrawer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_styled_components__);
var _jsxFileName = "/Users/janetkulyk/VisualStudioCode/jk/layouts/PageLayout.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  html {\n    font-size: 1rem;\n    box-sizing: border-box;\n  }\n  body {\n    font-family: sans-serif;\n    font-size: 1.6rem;\n    line-height: 1.6;\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








Object(__WEBPACK_IMPORTED_MODULE_6_styled_components__["injectGlobal"])(_templateObject);

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charset: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge,chrome=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "Janet (Zhanna) Kulyk\\'s Web Site - Web / Mobile Development Services - Toronto, Canada"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "author",
        content: "Janet (Zhanna) Kulyk",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "keywords",
        content: "Janet (Zhanna) Kulyk, \u0416\u0430\u043D\u043D\u0430 \u041A\u0443\u043B\u0438\u043A, web / mobile developer, HTML5, CSS3, JavaScript, jQuery, PHP, MySQL, performance, UI developer, frontend, web performance, Toronto, Ontario, Canada",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "description",
        content: "Personal web site of Janet (Zhanna) Kulyk and JK IT Consulting Ltd., web / mobile development, design, front-end engineering",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "alternate",
        media: "handheld",
        type: "application/xhtml+xml",
        href: "http://m.janetkulyk.com/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, this.props.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_MiniDrawer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./mediaTemplate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
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

/***/ "./pages/contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MiniDrawer__ = __webpack_require__("./components/MiniDrawer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
var _jsxFileName = "/Users/janetkulyk/VisualStudioCode/jk/pages/contact.js";
 // import Layout from '../layouts/PageLayout'



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_MiniDrawer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "This is the Contact page"));
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MiniDrawer__ = __webpack_require__("./components/MiniDrawer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Typography__ = __webpack_require__("material-ui/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_components__);
var _jsxFileName = "/Users/janetkulyk/VisualStudioCode/jk/pages/index.js";

 // import Layout from '../layouts/PageLayout'



 // export default () => <div>Welcome to next.js!</div>

var IndexPage = function IndexPage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_MiniDrawer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Hello \uD83C\uDF0E!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    "class": "main_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    "class": "main_content welcome",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    "class": "visuallyhidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Janet (Zhanna) Kulyk's Web Site - Web Development Services"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    "class": "h1_home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Welcome!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figure", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "http://janetkulyk.s3.amazonaws.com/img/me3.png",
    alt: "Janet's Photo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    "class": "promo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    "class": "pres grey1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Hi!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    "class": "pres grey2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "I'm Janet Kulyk."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    "class": "pres grey3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "I'm a Front-End Developer."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "I build web and mobile web applications for large corporations and small businesses. Sometimes I work as a one-person web agency."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "My current focus is Full Stack JavaScript application development for all spectrum of devices, responsive web design, performance optimization, web standards, user experience, accessibility, cross-browser and cross-platform development."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "This web site highlights some of my professional skills, contains reference materials and links, has some fun pages, and serves as a sandbox for playing with new code."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Services"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    "class": "services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    "class": "black bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "Web Services:"), " domain registration, web hosting, concept development, content management (maintenance)"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    "class": "black bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Web Design:"), " concept design and building web applications (desktop, tablet, mobile, responsive design)"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    "class": "black bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Web Development:"), " programming and integration of web / mobile applications"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    "class": "black bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Web Template Service:"), " converting your designs to HTML5, CSS3, and JavaScript templates, to React components that adhere to W3C standards and the highest level of accessibility"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    "class": "black bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Website Assessment Report:"), " reviewing every aspect of your online presence and recommend cost-effective improvements."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    "class": "black bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "Website Performance Optimization:"), " analyzing the speed of your website, make recommendations, and implement solutions to make your website fast."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    "class": "black bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "Internationalization:"), " developing multi-lingual websites or add additional languagues to your existing website."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    "class": "black bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "Google Analytics"), " for your website."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    "class": "black bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "Email Newsletters:"), " design, build, sending.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "JK IT Consulting, Ltd. is registered in Ontario, Canada, but the web allows me to collaborate no matter where you are in the world."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "I speak English, Russian, and Ukrainian.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    "class": "aside_right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    "class": "quot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, "Be yourself, everyone else is already taken.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("cite", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "Oscar Wilde"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    "class": "quot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, "The greatest glory is not in never failing, but in rising up every time we fall.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("cite", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, "Confucius,", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }), "551 BC \u2013 479 BC"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    "class": "title_css3_demo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "http://www.janetkulyk.com/kinetic-typography-video/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "<?php echo $media ?>ad_css3_125x125.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./pages/skills.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_PageLayout__ = __webpack_require__("./layouts/PageLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MiniDrawer__ = __webpack_require__("./components/MiniDrawer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
var _jsxFileName = "/Users/janetkulyk/VisualStudioCode/jk/pages/skills.js";




/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_MiniDrawer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "This is the Skills page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "This is the Skills page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "This is the Skills page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "This is the Skills page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "This is the Skills page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "This is the Skills page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "This is the Skills page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "This is the Skills page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "This is the Skills page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "This is the Skills page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "This is the Skills page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "This is the Skills page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "This is the Skills page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "This is the Skills page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "This is the Skills page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "This is the Skills page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "This is the Skills page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "This is the Skills page")));
});

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/contact.js");


/***/ }),

/***/ "@material-ui/icons/Call":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Call");

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "@material-ui/icons/Face":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Face");

/***/ }),

/***/ "@material-ui/icons/Home":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "@material-ui/icons/Menu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/ViewList":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewList");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "material-ui/AppBar":
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),

/***/ "material-ui/Divider":
/***/ (function(module, exports) {

module.exports = require("material-ui/Divider");

/***/ }),

/***/ "material-ui/Drawer":
/***/ (function(module, exports) {

module.exports = require("material-ui/Drawer");

/***/ }),

/***/ "material-ui/IconButton":
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),

/***/ "material-ui/List":
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),

/***/ "material-ui/Toolbar":
/***/ (function(module, exports) {

module.exports = require("material-ui/Toolbar");

/***/ }),

/***/ "material-ui/Typography":
/***/ (function(module, exports) {

module.exports = require("material-ui/Typography");

/***/ }),

/***/ "material-ui/styles":
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),

/***/ "material-ui/styles/MuiThemeProvider":
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=contact.js.map
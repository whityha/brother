/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css ***!
  \**********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.noUi-target {\n  position: relative;\n}\n\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n\n.noUi-vertical {\n  width: 18px;\n}\n\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n\n.noUi-connects {\n  border-radius: 3px;\n}\n\n.noUi-connect {\n  background: #3FB8AF;\n}\n\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n\n.noUi-handle:after {\n  left: 17px;\n}\n\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n\n.noUi-marker-sub {\n  background: #AAA;\n}\n\n.noUi-marker-large {\n  background: #AAA;\n}\n\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n\n.noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n\n.noUi-rtl .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}", "",{"version":3,"sources":["webpack://./node_modules/nouislider/dist/nouislider.css"],"names":[],"mappings":"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","sourcesContent":["/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/cards/card.sass":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/cards/card.sass ***!
  \**************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_star_with_fill_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/images/star_with_fill.png */ "./src/assets/images/star_with_fill.png");
/* harmony import */ var _assets_images_star_without_fill_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/star_without_fill.png */ "./src/assets/images/star_without_fill.png");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Roboto:wght@300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_images_star_with_fill_png__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_images_star_without_fill_png__WEBPACK_IMPORTED_MODULE_4__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card {\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n  background: #dfd5a5;\n  width: 80%;\n  height: 370px;\n  margin: 10px;\n  color: black;\n  overflow: hidden;\n  box-shadow: 0px 0px 10px grey;\n  font-family: \"Georgia\";\n}\n.card:hover {\n  box-shadow: 0px 0px 15px grey;\n}\n.card:hover img {\n  height: 100%;\n}\n.card-image {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  padding-top: 10px;\n  height: 200px;\n  background: white;\n}\n.card-image .discount {\n  position: absolute;\n  display: inline-block;\n  text-align: center;\n  border-radius: 10px 0px 10px 0px;\n  padding: 3px;\n  top: 0;\n  left: 0;\n  background: #98cd98;\n}\n.card-image img {\n  width: auto;\n  height: 97%;\n  padding: 13px 0px;\n  transition: 0.2s;\n}\n.card-image .star {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 40px;\n  height: 40px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center/100%;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center center/100%;\n}\n.card-image .star:hover {\n  cursor: pointer;\n  transition: 0.1s;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center/100%;\n}\n.card-body {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n.card-body .name {\n  font-family: \"Montserrat\";\n}\n.card-body .on-cart {\n  margin-top: 10px;\n  border-radius: 5px;\n  padding: 5px;\n  background: #cf995f;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.card-body .on-cart.added {\n  background: #bd3232;\n  color: white;\n}\n.card-body .item-description,\n.card-body .item-location {\n  font-size: 15px;\n}", "",{"version":3,"sources":["webpack://./src/components/view/cards/card.sass","webpack://./src/variables.sass"],"names":[],"mappings":"AACA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,mBCHe;EDIf,UAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,gBAAA;EACA,6BAAA;EACA,sBCDW;ADEf;AAAI;EACI,6BAAA;AAER;AADQ;EACI,YAAA;AAGZ;AADI;EACI,aAAA;EACA,kBAAA;EACA,uBAAA;EACA,iBAAA;EACA,aAAA;EACA,iBAAA;AAGR;AAFQ;EACI,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gCAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;AAIZ;AAHQ;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,gBAAA;AAKZ;AAJQ;EACI,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,gFAAA;EACA,gFAAA;AAMZ;AALY;EACI,eAAA;EACA,gBAAA;EACA,gFAAA;AAOhB;AANI;EACI,aAAA;EACA,sBAAA;EACA,aAAA;AAQR;AAPQ;EACI,yBC9CC;ADuDb;AARQ;EACI,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,mBCzDJ;ED0DI,eAAA;EACA,gBAAA;AAUZ;AATQ;EACI,mBAAA;EACA,YAAA;AAWZ;AAVQ;;EAEI,eAAA;AAYZ","sourcesContent":["@import '../../../variables.sass'\r\n.card\r\n    display: flex\r\n    flex-direction: column\r\n    border-radius: 10px\r\n    background: $medium-champagne\r\n    width: 80%\r\n    height: 370px\r\n    margin: 10px\r\n    color: black\r\n    overflow: hidden\r\n    box-shadow: 0px 0px 10px grey\r\n    font-family: $mainCardFont\r\n    &:hover\r\n        box-shadow: 0px 0px 15px grey\r\n        img\r\n            height: 100%\r\n    \r\n    &-image\r\n        display: flex\r\n        position: relative\r\n        justify-content: center\r\n        padding-top: 10px\r\n        height: 200px\r\n        background: white\r\n        .discount\r\n            position: absolute\r\n            display: inline-block\r\n            text-align: center\r\n            border-radius: 10px 0px 10px 0px\r\n            padding: 3px\r\n            top: 0\r\n            left: 0\r\n            background: #98cd98\r\n        img\r\n            width: auto\r\n            height: 97%\r\n            padding: 13px 0px\r\n            transition: .2s\r\n        .star\r\n            position: absolute\r\n            top: 0px\r\n            right: 0px\r\n            width: 40px\r\n            height: 40px\r\n            background: url('../../../assets/images/star_with_fill.png') no-repeat center center/100%\r\n            background: url('../../../assets/images/star_without_fill.png') no-repeat center center/100%\r\n            &:hover\r\n                cursor: pointer\r\n                transition: .1s\r\n                background: url('../../../assets/images/star_with_fill.png') no-repeat center center/100%\r\n    &-body\r\n        display: flex\r\n        flex-direction: column\r\n        padding: 10px\r\n        .name\r\n            font-family: $fontOfName\r\n        .on-cart\r\n            margin-top: 10px\r\n            border-radius: 5px\r\n            padding: 5px\r\n            background: $camel\r\n            cursor: pointer\r\n            transition: .2s\r\n        .on-cart.added\r\n            background: #bd3232\r\n            color: white\r\n        .item-description,\r\n        .item-location\r\n            font-size: 15px","$slate-gray: #27333a\r\n$middle-grey: #96897bff\r\n$medium-champagne: #dfd5a5ff\r\n$earth-yellow: #dbad6aff\r\n$camel: #cf995fff\r\n$searchFocus: #1a1a1a\r\n\r\n$max: 1220px\r\n$min: 980px\r\n\r\n$fontOfName: 'Montserrat'\r\n$mainCardFont: 'Georgia'\r\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Roboto:wght@300&display=swap')\r\n$filterNames: 'Roboto', sans-serif\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/cart/cart.sass":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/cart/cart.sass ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cart-count {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n  right: 20%;\n  bottom: 20%;\n  background: #bd3232;\n  border-radius: 100px;\n  font-size: 12px;\n  color: white;\n  font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/components/view/cart/cart.sass"],"names":[],"mappings":"AACA;EACI,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;EACA,mBAAA;EACA,oBAAA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;AAAJ","sourcesContent":["\r\n.cart-count\r\n    position: absolute\r\n    display: flex\r\n    justify-content: center\r\n    align-items: center\r\n    width: 24px\r\n    height: 24px\r\n    right: 20%\r\n    bottom: 20%\r\n    background: #bd3232\r\n    border-radius: 100px\r\n    font-size: 12px\r\n    color: white\r\n    font-weight: bold\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/filter/filter-range/filter-range-date.sass":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/filter/filter-range/filter-range-date.sass ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Roboto:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".noUi-horizontal {\n  height: 10px;\n}\n\n.noUi-horizontal .noUi-handle {\n  top: -11px;\n}\n\n.noUi-connect {\n  background: #cf995f;\n}\n\n.noUi-target {\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.noUi-handle {\n  cursor: pointer;\n}\n\n.slider-range {\n  margin-top: 20px;\n}\n\n.slider-head {\n  padding-left: 30px;\n  font-size: 20px;\n  margin-top: 20px;\n}\n\n.values-box {\n  display: flex;\n  justify-content: space-around;\n}\n.values-box .value {\n  display: flex;\n  justify-content: center;\n  padding: 7px 0px;\n  width: 80px;\n  border: 1px solid #cf995f;\n  font-size: 16px;\n  font-family: \"Montserrat\";\n  font-weight: bold;\n  color: #cf995f;\n  user-select: none;\n}", "",{"version":3,"sources":["webpack://./src/components/view/filter/filter-range/filter-range-date.sass","webpack://./src/variables.sass"],"names":[],"mappings":"AACA;EACI,YAAA;AACJ;;AAAA;EACI,UAAA;AAGJ;;AAFA;EACI,mBCFI;ADOR;;AAJA;EACI,UAAA;EACA,cAAA;EACA,gBAAA;EACA,mBAAA;AAOJ;;AANA;EACI,eAAA;AASJ;;AARA;EACI,gBAAA;AAWJ;;AAVA;EACI,kBAAA;EACA,eAAA;EACA,gBAAA;AAaJ;;AAZA;EACI,aAAA;EACA,6BAAA;AAeJ;AAdI;EACI,aAAA;EACA,uBAAA;EACA,gBAAA;EACA,WAAA;EACA,yBAAA;EACA,eAAA;EACA,yBAAA;EACA,iBAAA;EACA,cC5BA;ED6BA,iBAAA;AAgBR","sourcesContent":["@import '../../../../variables.sass'\r\n.noUi-horizontal\r\n    height: 10px\r\n.noUi-horizontal .noUi-handle\r\n    top: -11px\r\n.noUi-connect\r\n    background: $camel\r\n.noUi-target\r\n    width: 80%\r\n    margin: 0 auto\r\n    margin-top: 20px\r\n    margin-bottom: 20px\r\n.noUi-handle\r\n    cursor: pointer\r\n.slider-range\r\n    margin-top: 20px\r\n.slider-head\r\n    padding-left: 30px\r\n    font-size: 20px\r\n    margin-top: 20px\r\n.values-box\r\n    display: flex\r\n    justify-content: space-around\r\n    .value\r\n        display: flex\r\n        justify-content: center\r\n        padding: 7px 0px\r\n        width: 80px\r\n        border: 1px solid $camel\r\n        font-size: 16px\r\n        font-family: 'Montserrat'\r\n        font-weight: bold\r\n        color: $camel\r\n        user-select: none ","$slate-gray: #27333a\r\n$middle-grey: #96897bff\r\n$medium-champagne: #dfd5a5ff\r\n$earth-yellow: #dbad6aff\r\n$camel: #cf995fff\r\n$searchFocus: #1a1a1a\r\n\r\n$max: 1220px\r\n$min: 980px\r\n\r\n$fontOfName: 'Montserrat'\r\n$mainCardFont: 'Georgia'\r\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Roboto:wght@300&display=swap')\r\n$filterNames: 'Roboto', sans-serif\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/filter/filter.sass":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/filter/filter.sass ***!
  \*****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Roboto:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".filter-area {\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.filter-area .filter-head {\n  align-self: center;\n  font-size: 26px;\n  font-weight: bold;\n  margin-top: 10px;\n}\n.filter-area .filter-box {\n  margin-top: 10px;\n  margin-left: 20px;\n  margin-bottom: 10px;\n}\n.filter-area .filter-box-name {\n  font-size: 20px;\n  margin-bottom: 10px;\n}\n.filter-area .filter-box-list .filter-box-item {\n  margin-top: 5px;\n  font-family: \"Roboto\", sans-serif;\n}\n.filter-area .filter-box-list .filter-box-item input {\n  margin-right: 10px;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/components/view/filter/filter.sass","webpack://./src/variables.sass"],"names":[],"mappings":"AACA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;AACJ;AAAI;EACI,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;AAER;AADI;EACI,gBAAA;EACA,iBAAA;EACA,mBAAA;AAGR;AAFQ;EACI,eAAA;EACA,mBAAA;AAIZ;AAFY;EACI,eAAA;EACA,iCCRF;ADYd;AAHgB;EACI,kBAAA;EACA,eAAA;AAKpB","sourcesContent":["@import '../../../variables.sass'\r\n.filter-area\r\n    display: flex\r\n    flex-direction: column\r\n    border-radius: 10px\r\n    overflow: hidden\r\n    .filter-head\r\n        align-self: center\r\n        font-size: 26px\r\n        font-weight: bold\r\n        margin-top: 10px\r\n    .filter-box\r\n        margin-top: 10px\r\n        margin-left: 20px\r\n        margin-bottom: 10px\r\n        &-name\r\n            font-size: 20px\r\n            margin-bottom: 10px\r\n        &-list\r\n            .filter-box-item\r\n                margin-top: 5px\r\n                font-family: $filterNames\r\n                input\r\n                    margin-right: 10px\r\n                    cursor: pointer","$slate-gray: #27333a\r\n$middle-grey: #96897bff\r\n$medium-champagne: #dfd5a5ff\r\n$earth-yellow: #dbad6aff\r\n$camel: #cf995fff\r\n$searchFocus: #1a1a1a\r\n\r\n$max: 1220px\r\n$min: 980px\r\n\r\n$fontOfName: 'Montserrat'\r\n$mainCardFont: 'Georgia'\r\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Roboto:wght@300&display=swap')\r\n$filterNames: 'Roboto', sans-serif\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/search/search-area.sass":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/search/search-area.sass ***!
  \**********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Roboto:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".search-area {\n  display: flex;\n  justify-content: flex-end;\n  border-radius: 10px;\n  width: 100%;\n  position: relative;\n  margin-right: 22px;\n}\n.search-area .search-input {\n  width: 13%;\n  padding: 15px 40px 15px 10px;\n  box-shadow: 0 0 0 1px grey;\n  border: none;\n  border-radius: 10px;\n  transition: 0.3s;\n}\n.search-area .search-input:focus {\n  width: 60%;\n  outline: none;\n  box-shadow: 0 0 0 2px #1a1a1a;\n}\n.search-area .search-icon {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  top: 12px;\n  right: 12px;\n  border: 2px solid grey;\n  border-radius: 100px;\n  transition: 0.15s;\n}\n.search-area .search-icon:focus + .search-input {\n  width: 60%;\n}\n.search-area .search-icon::after {\n  content: \"\";\n  position: absolute;\n  width: 12px;\n  height: 2px;\n  background: grey;\n  transform: rotateZ(-60deg);\n  top: 10px;\n  right: 8px;\n  transform-origin: right;\n  transition: 0.2s;\n}\n.search-area .search-icon::before {\n  content: \"\";\n  position: absolute;\n  width: 0px;\n  height: 2px;\n  background: grey;\n  top: 10px;\n  right: 9px;\n  transform-origin: right;\n  transition: 0.2s;\n}\n.search-area .search-icon.close {\n  width: 24px;\n  height: 24px;\n  top: 12px;\n  right: 12px;\n  border: 2px solid grey;\n  cursor: pointer;\n}\n.search-area .search-icon.close::after {\n  content: \"\";\n  position: absolute;\n  width: 12px;\n  height: 2px;\n  background: grey;\n  top: 50%;\n  right: 50%;\n  transform: translate(50%, -50%) rotateZ(-45deg);\n  transform-origin: center;\n}\n.search-area .search-icon.close::before {\n  content: \"\";\n  position: absolute;\n  width: 12px;\n  height: 2px;\n  background: grey;\n  top: 50%;\n  right: 50%;\n  transform: translate(50%, -50%) rotateZ(45deg);\n  transform-origin: center;\n}", "",{"version":3,"sources":["webpack://./src/components/view/search/search-area.sass"],"names":[],"mappings":"AACA;EACI,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;AACJ;AAAI;EACI,UAAA;EACA,4BAAA;EACA,0BAAA;EACA,YAAA;EACA,mBAAA;EACA,gBAAA;AAER;AADQ;EACI,UAAA;EACA,aAAA;EACA,6BAAA;AAGZ;AAFI;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,sBAAA;EACA,oBAAA;EACA,iBAAA;AAIR;AAHQ;EACI,UAAA;AAKZ;AAJQ;EACI,WAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,0BAAA;EACA,SAAA;EACA,UAAA;EACA,uBAAA;EACA,gBAAA;AAMZ;AALQ;EACI,WAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;EACA,uBAAA;EACA,gBAAA;AAOZ;AANQ;EACI,WAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,sBAAA;EACA,eAAA;AAQZ;AAPY;EACI,WAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,QAAA;EACA,UAAA;EACA,+CAAA;EACA,wBAAA;AAShB;AARY;EACI,WAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,QAAA;EACA,UAAA;EACA,8CAAA;EACA,wBAAA;AAUhB","sourcesContent":["@import '../../../variables.sass'\r\n.search-area\r\n    display: flex\r\n    justify-content: flex-end \r\n    border-radius: 10px\r\n    width: 100%\r\n    position: relative    \r\n    margin-right: 22px  \r\n    .search-input\r\n        width: 13%\r\n        padding: 15px 40px 15px 10px \r\n        box-shadow: 0 0 0 1px grey\r\n        border: none\r\n        border-radius: 10px\r\n        transition: .3s\r\n        &:focus\r\n            width: 60%\r\n            outline: none\r\n            box-shadow: 0 0 0 2px $searchFocus\r\n    .search-icon\r\n        position: absolute \r\n        width: 14px\r\n        height: 14px\r\n        top: 12px\r\n        right: 12px\r\n        border: 2px solid grey \r\n        border-radius: 100px\r\n        transition: .15s\r\n        &:focus + .search-input\r\n            width: 60%    \r\n        &::after \r\n            content: ''\r\n            position: absolute\r\n            width: 12px\r\n            height: 2px\r\n            background: grey\r\n            transform: rotateZ(-60deg) \r\n            top: 10px\r\n            right: 8px\r\n            transform-origin: right\r\n            transition: .2s        \r\n        &::before\r\n            content: ''\r\n            position: absolute\r\n            width: 0px\r\n            height: 2px\r\n            background: grey\r\n            top: 10px\r\n            right: 9px\r\n            transform-origin: right\r\n            transition: .2s\r\n        &.close \r\n            width: 24px\r\n            height: 24px\r\n            top: 12px\r\n            right: 12px\r\n            border: 2px solid grey \r\n            cursor: pointer        \r\n            &::after  \r\n                content: ''\r\n                position: absolute\r\n                width: 12px\r\n                height: 2px\r\n                background: grey\r\n                top: 50%\r\n                right: 50%\r\n                transform: translate(50%, -50%) rotateZ(-45deg)\r\n                transform-origin: center\r\n            &::before\r\n                content: ''\r\n                position: absolute\r\n                width: 12px\r\n                height: 2px\r\n                background: grey\r\n                top: 50%\r\n                right: 50%\r\n                transform: translate(50%, -50%) rotateZ(45deg)\r\n                transform-origin: center\r\n        \r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/sort/sort-area.sass":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/sort/sort-area.sass ***!
  \******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Roboto:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sort-area {\n  display: flex;\n  justify-content: space-between;\n}\n.sort-area .sort-select {\n  width: 57%;\n  padding: 13px 15px;\n  border-radius: 10px;\n  font-family: inherit;\n  font-size: inherit;\n  cursor: pointer;\n  outline: none;\n  border: 1px solid #96897b;\n  transition: 0.2s;\n}\n.sort-area .sort-select:hover {\n  background-color: #dfd5a5;\n}\n.sort-area .sort-button {\n  padding: 13px 5px;\n  cursor: pointer;\n  border: 1px solid #96897b;\n  border-radius: 10px;\n  width: 37%;\n  transition: 0.2s;\n}\n.sort-area .sort-button:hover {\n  background-color: #dfd5a5;\n}", "",{"version":3,"sources":["webpack://./src/components/view/sort/sort-area.sass","webpack://./src/variables.sass"],"names":[],"mappings":"AACA;EACI,aAAA;EACA,8BAAA;AACJ;AAAI;EACI,UAAA;EACA,kBAAA;EACA,mBAAA;EACA,oBAAA;EACA,kBAAA;EACA,eAAA;EACA,aAAA;EACA,yBAAA;EACA,gBAAA;AAER;AADQ;EACI,yBCbO;ADgBnB;AAFI;EACI,iBAAA;EACA,eAAA;EACA,yBAAA;EACA,mBAAA;EACA,UAAA;EACA,gBAAA;AAIR;AAHQ;EACI,yBCtBO;AD2BnB","sourcesContent":["@import '../../../variables.sass'\r\n.sort-area\r\n    display: flex\r\n    justify-content: space-between\r\n    .sort-select\r\n        width: 57%\r\n        padding: 13px 15px\r\n        border-radius: 10px\r\n        font-family: inherit\r\n        font-size: inherit    \r\n        cursor: pointer\r\n        outline: none\r\n        border: 1px solid $middle-grey\r\n        transition: .2s\r\n        &:hover\r\n            background-color: $medium-champagne\r\n    .sort-button\r\n        padding: 13px 5px\r\n        cursor: pointer\r\n        border: 1px solid $middle-grey\r\n        border-radius: 10px\r\n        width: 37%\r\n        transition: .2s\r\n        &:hover\r\n            background-color: $medium-champagne\r\n","$slate-gray: #27333a\r\n$middle-grey: #96897bff\r\n$medium-champagne: #dfd5a5ff\r\n$earth-yellow: #dbad6aff\r\n$camel: #cf995fff\r\n$searchFocus: #1a1a1a\r\n\r\n$max: 1220px\r\n$min: 980px\r\n\r\n$fontOfName: 'Montserrat'\r\n$mainCardFont: 'Georgia'\r\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Roboto:wght@300&display=swap')\r\n$filterNames: 'Roboto', sans-serif\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/global.sass":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/global.sass ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_cart2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/cart2.png */ "./src/assets/images/cart2.png");
/* harmony import */ var _assets_images_github_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/github.png */ "./src/assets/images/github.png");
/* harmony import */ var _assets_images_rs_school_js_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/rs_school_js.svg */ "./src/assets/images/rs_school_js.svg");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Roboto:wght@300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_images_cart2_png__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_images_github_png__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_images_rs_school_js_svg__WEBPACK_IMPORTED_MODULE_5__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  list-style: none;\n}\n\nbutton {\n  border: none;\n  background: inherit;\n  font-family: inherit;\n  font-size: inherit;\n}\n\n.wrapper {\n  width: 1200px;\n  margin: 0 auto;\n}\n@media (max-width: 1220px) {\n  .wrapper {\n    width: 960px;\n  }\n}\n@media (max-width: 1220px) and (max-width: 980px) {\n  .wrapper {\n    width: 740px;\n  }\n}\n\n.header {\n  background: #cf995f;\n  margin-bottom: 20px;\n}\n.header .content {\n  display: flex;\n  height: 100px;\n  justify-content: space-between;\n}\n.header .content .logo {\n  display: flex;\n  align-self: center;\n  flex-direction: column;\n}\n.header .content .logo-link {\n  text-decoration: none;\n  color: #27333a;\n  font-size: 50px;\n  font-weight: bold;\n  font-family: \"Impact\";\n}\n.header .content .logo-store {\n  color: #27333a;\n  font-size: 20px;\n}\n.header .content .cart {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  position: relative;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center/80%;\n}\n\n.main .content {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.main .content .sort-area {\n  width: 35%;\n}\n@media (max-width: 980px) {\n  .main .content .sort-area {\n    width: 50%;\n  }\n}\n.main .content .search-area {\n  width: 60%;\n  margin-bottom: 20px;\n}\n@media (max-width: 980px) {\n  .main .content .search-area {\n    width: 50%;\n    margin-right: 0;\n  }\n}\n.main .content .filter-area {\n  width: 20%;\n  background: #ebebeb;\n}\n@media (max-width: 1220px) {\n  .main .content .filter-area {\n    width: 25%;\n  }\n}\n@media (max-width: 1220px) and (max-width: 980px) {\n  .main .content .filter-area {\n    width: 35%;\n  }\n}\n.main .content .filter-area .buttons-reset {\n  display: flex;\n  justify-content: space-around;\n}\n.main .content .filter-area .buttons-reset .button-reset {\n  margin: 10px 5px 0px 5px;\n  padding: 4px 0px;\n  border: 1px solid grey;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.main .content .filter-area .buttons-reset .button-reset:hover {\n  background-color: #dfd5a5;\n}\n.main .content .card-list {\n  width: 80%;\n  display: flex;\n  flex-wrap: wrap;\n}\n@media (max-width: 1220px) {\n  .main .content .card-list {\n    width: 75%;\n  }\n}\n@media (max-width: 1220px) and (max-width: 980px) {\n  .main .content .card-list {\n    width: 65%;\n  }\n}\n.main .content .card-list-item {\n  display: flex;\n  width: 25%;\n  justify-content: center;\n}\n@media (max-width: 1220px) {\n  .main .content .card-list-item {\n    width: 33%;\n  }\n}\n@media (max-width: 980px) {\n  .main .content .card-list-item {\n    width: 50%;\n  }\n}\n.main .content .card-list .no-cards {\n  font-size: 40px;\n  padding: 30px 50px;\n}\n\n.footer {\n  background: #cf995f;\n}\n.footer .content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 30px;\n  min-height: 140px;\n}\n.footer .content .github a {\n  display: inline-block;\n  width: 150px;\n  height: 90px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center center/50%;\n}\n.footer .content .RS-logo a {\n  display: flex;\n  width: 150px;\n  height: 80px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat top 30% center/70%;\n  align-items: flex-end;\n  justify-content: center;\n  color: black;\n  font-weight: 900;\n  text-decoration: none;\n  font-size: 24px;\n  font-family: \"Montserrat\";\n}", "",{"version":3,"sources":["webpack://./src/global.sass","webpack://./src/variables.sass"],"names":[],"mappings":"AACA;EACI,UAAA;EACA,SAAA;EACA,sBAAA;EACA,gBAAA;AACJ;;AACA;EACI,YAAA;EACA,mBAAA;EACA,oBAAA;EACA,kBAAA;AAEJ;;AAAA;EACI,aAAA;EACA,cAAA;AAGJ;AAFI;EAHJ;IAIQ,YAAA;EAKN;AACF;AALQ;EALR;IAMY,YAAA;EAQV;AACF;;AARA;EACI,mBCjBI;EDkBJ,mBAAA;AAWJ;AAVI;EACI,aAAA;EACA,aAAA;EACA,8BAAA;AAYR;AAXQ;EACI,aAAA;EACA,kBAAA;EACA,sBAAA;AAaZ;AAZY;EACI,qBAAA;EACA,cCjCH;EDkCG,eAAA;EACA,iBAAA;EACA,qBAAA;AAchB;AAbY;EACI,cCtCH;EDuCG,eAAA;AAehB;AAdQ;EACI,YAAA;EACA,aAAA;EACA,aAAA;EACA,kBAAA;EACA,+EAAA;AAgBZ;;AAbI;EACI,WAAA;EACA,aAAA;EACA,uBAAA;EACA,eAAA;EACA,8BAAA;AAgBR;AAfQ;EACI,UAAA;AAiBZ;AAhBY;EAFJ;IAGQ,UAAA;EAmBd;AACF;AAnBQ;EACI,UAAA;EACA,mBAAA;AAqBZ;AApBY;EAHJ;IAIQ,UAAA;IACA,eAAA;EAuBd;AACF;AAvBQ;EACI,UAAA;EACA,mBAAA;AAyBZ;AAxBY;EAHJ;IAIQ,UAAA;EA2Bd;AACF;AA3BgB;EALR;IAMY,UAAA;EA8BlB;AACF;AA9BY;EACI,aAAA;EACA,6BAAA;AAgChB;AA/BgB;EACI,wBAAA;EACA,gBAAA;EACA,sBAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;AAiCpB;AAhCoB;EACI,yBChFL;ADkHnB;AAjCQ;EACI,UAAA;EACA,aAAA;EACA,eAAA;AAmCZ;AAlCY;EAJJ;IAKQ,UAAA;EAqCd;AACF;AArCgB;EANR;IAOY,UAAA;EAwClB;AACF;AAxCY;EACI,aAAA;EACA,UAAA;EACA,uBAAA;AA0ChB;AAzCgB;EAJJ;IAKQ,UAAA;EA4ClB;AACF;AA5CgB;EANJ;IAOQ,UAAA;EA+ClB;AACF;AA/CY;EACI,eAAA;EACA,kBAAA;AAiDhB;;AA/CA;EACI,mBCpGI;ADsJR;AAjDI;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,gBAAA;EACA,iBAAA;AAmDR;AAjDY;EACI,qBAAA;EACA,YAAA;EACA,YAAA;EACA,+EAAA;AAmDhB;AAjDY;EACI,aAAA;EACA,YAAA;EACA,YAAA;EACA,gFAAA;EACA,qBAAA;EACA,uBAAA;EACA,YAAA;EACA,gBAAA;EACA,qBAAA;EACA,eAAA;EACA,yBAAA;AAmDhB","sourcesContent":["@import './variables.sass'\r\n*\r\n    padding: 0\r\n    margin: 0\r\n    box-sizing: border-box\r\n    list-style: none\r\n\r\nbutton\r\n    border: none\r\n    background: inherit\r\n    font-family: inherit\r\n    font-size: inherit\r\n\r\n.wrapper\r\n    width: 1200px\r\n    margin: 0 auto\r\n    @media ( max-width: $max )\r\n        width: 960px        \r\n        @media ( max-width: $min )\r\n            width: 740px\r\n.header\r\n    background: $camel\r\n    margin-bottom: 20px\r\n    .content\r\n        display: flex\r\n        height: 100px\r\n        justify-content: space-between        \r\n        .logo\r\n            display: flex\r\n            align-self: center\r\n            flex-direction: column\r\n            &-link\r\n                text-decoration: none\r\n                color: $slate-gray\r\n                font-size: 50px\r\n                font-weight: bold\r\n                font-family: 'Impact'\r\n            &-store                \r\n                color: $slate-gray\r\n                font-size: 20px\r\n        .cart\r\n            width: 100px\r\n            height: 100px\r\n            display: flex\r\n            position: relative\r\n            background: url('./assets/images/cart2.png') no-repeat center center/80%\r\n\r\n.main  \r\n    .content\r\n        width: 100%\r\n        display: flex\r\n        align-items: flex-start\r\n        flex-wrap: wrap\r\n        justify-content: space-between\r\n        .sort-area\r\n            width: 35%\r\n            @media ( max-width: $min )\r\n                width: 50%\r\n        .search-area\r\n            width: 60%\r\n            margin-bottom: 20px\r\n            @media ( max-width: $min )\r\n                width: 50%\r\n                margin-right: 0\r\n        .filter-area\r\n            width: 20%\r\n            background: #ebebeb\r\n            @media ( max-width: $max )\r\n                width: 25%\r\n                @media ( max-width: $min )\r\n                    width: 35%\r\n            .buttons-reset\r\n                display: flex\r\n                justify-content: space-around                \r\n                .button-reset\r\n                    margin: 10px 5px 0px 5px\r\n                    padding: 4px 0px\r\n                    border: 1px solid grey\r\n                    border-radius: 10px\r\n                    cursor: pointer\r\n                    transition: .2s\r\n                    &:hover\r\n                        background-color: $medium-champagne\r\n        .card-list\r\n            width: 80%\r\n            display: flex\r\n            flex-wrap: wrap \r\n            @media ( max-width: $max )\r\n                width: 75%\r\n                @media ( max-width: $min )\r\n                    width: 65% \r\n            &-item\r\n                display: flex\r\n                width: 25%\r\n                justify-content: center\r\n                @media ( max-width: $max )\r\n                    width: 33%\r\n                @media ( max-width: $min )\r\n                    width: 50%               \r\n            .no-cards\r\n                font-size: 40px\r\n                padding: 30px 50px\r\n\r\n.footer\r\n    background: $camel    \r\n    .content\r\n        display: flex\r\n        align-items: center\r\n        justify-content: space-between\r\n        margin-top: 30px\r\n        min-height: 140px\r\n        .github\r\n            a\r\n                display: inline-block\r\n                width: 150px\r\n                height: 90px\r\n                background: url('./assets/images/github.png') no-repeat center center/50%\r\n        .RS-logo\r\n            a\r\n                display: flex\r\n                width: 150px\r\n                height: 80px\r\n                background: url('./assets/images/rs_school_js.svg') no-repeat top 30% center/70%\r\n                align-items: flex-end\r\n                justify-content: center\r\n                color: black\r\n                font-weight: 900\r\n                text-decoration: none\r\n                font-size: 24px\r\n                font-family: 'Montserrat'","$slate-gray: #27333a\r\n$middle-grey: #96897bff\r\n$medium-champagne: #dfd5a5ff\r\n$earth-yellow: #dbad6aff\r\n$camel: #cf995fff\r\n$searchFocus: #1a1a1a\r\n\r\n$max: 1220px\r\n$min: 980px\r\n\r\n$fontOfName: 'Montserrat'\r\n$mainCardFont: 'Georgia'\r\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Roboto:wght@300&display=swap')\r\n$filterNames: 'Roboto', sans-serif\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/nouislider/dist/nouislider.js":
/*!****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
     true ? factory(exports) :
    0;
})(this, (function (exports) { 'use strict';

    exports.PipsMode = void 0;
    (function (PipsMode) {
        PipsMode["Range"] = "range";
        PipsMode["Steps"] = "steps";
        PipsMode["Positions"] = "positions";
        PipsMode["Count"] = "count";
        PipsMode["Values"] = "values";
    })(exports.PipsMode || (exports.PipsMode = {}));
    exports.PipsType = void 0;
    (function (PipsType) {
        PipsType[PipsType["None"] = -1] = "None";
        PipsType[PipsType["NoValue"] = 0] = "NoValue";
        PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
        PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
    })(exports.PipsType || (exports.PipsType = {}));
    //region Helper Methods
    function isValidFormatter(entry) {
        return isValidPartialFormatter(entry) && typeof entry.from === "function";
    }
    function isValidPartialFormatter(entry) {
        // partial formatters only need a to function and not a from function
        return typeof entry === "object" && typeof entry.to === "function";
    }
    function removeElement(el) {
        el.parentElement.removeChild(el);
    }
    function isSet(value) {
        return value !== null && value !== undefined;
    }
    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }
    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function (a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }
    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }
    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);
        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }
        return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
    }
    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }
    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function () {
                removeClass(element, className);
            }, duration);
        }
    }
    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }
    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }
    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }
    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.add(className);
        }
        else {
            el.className += " " + className;
        }
    }
    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }
    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;
        return {
            x: x,
            y: y,
        };
    }
    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup",
            }
            : window.navigator.msPointerEnabled
                ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp",
                }
                : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend",
                };
    }
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;
        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                },
            });
            // @ts-ignore
            window.addEventListener("test", null, opts);
        }
        catch (e) { }
        /* eslint-enable */
        return supportsPassive;
    }
    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    //endregion
    //region Range Calculation
    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }
    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value, startRange) {
        return (value * 100) / (range[startRange + 1] - range[startRange]);
    }
    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }
    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }
    function getJ(value, arr) {
        var j = 1;
        while (value >= arr[j]) {
            j += 1;
        }
        return j;
    }
    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }
        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }
    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }
        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }
    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }
        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];
        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }
            return a;
        }
        if (!xSteps[j - 1]) {
            return value;
        }
        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }
    //endregion
    //region Spectrum
    var Spectrum = /** @class */ (function () {
        function Spectrum(entry, snap, singleStep) {
            this.xPct = [];
            this.xVal = [];
            this.xSteps = [];
            this.xNumSteps = [];
            this.xHighestCompleteStep = [];
            this.xSteps = [singleStep || false];
            this.xNumSteps = [false];
            this.snap = snap;
            var index;
            var ordered = [];
            // Map the object keys to an array.
            Object.keys(entry).forEach(function (index) {
                ordered.push([asArray(entry[index]), index]);
            });
            // Sort all entries by value (numeric sort).
            ordered.sort(function (a, b) {
                return a[0][0] - b[0][0];
            });
            // Convert all entries to subranges.
            for (index = 0; index < ordered.length; index++) {
                this.handleEntryPoint(ordered[index][1], ordered[index][0]);
            }
            // Store the actual step values.
            // xSteps is sorted in the same order as xPct and xVal.
            this.xNumSteps = this.xSteps.slice(0);
            // Convert all numeric steps to the percentage of the subrange they represent.
            for (index = 0; index < this.xNumSteps.length; index++) {
                this.handleStepPoint(index, this.xNumSteps[index]);
            }
        }
        Spectrum.prototype.getDistance = function (value) {
            var distances = [];
            for (var index = 0; index < this.xNumSteps.length - 1; index++) {
                distances[index] = fromPercentage(this.xVal, value, index);
            }
            return distances;
        };
        // Calculate the percentual distance over the whole scale of ranges.
        // direction: 0 = backwards / 1 = forwards
        Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
            var xPct_index = 0;
            // Calculate range where to start calculation
            if (value < this.xPct[this.xPct.length - 1]) {
                while (value > this.xPct[xPct_index + 1]) {
                    xPct_index++;
                }
            }
            else if (value === this.xPct[this.xPct.length - 1]) {
                xPct_index = this.xPct.length - 2;
            }
            // If looking backwards and the value is exactly at a range separator then look one range further
            if (!direction && value === this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
            if (distances === null) {
                distances = [];
            }
            var start_factor;
            var rest_factor = 1;
            var rest_rel_distance = distances[xPct_index];
            var range_pct = 0;
            var rel_range_distance = 0;
            var abs_distance_counter = 0;
            var range_counter = 0;
            // Calculate what part of the start range the value is
            if (direction) {
                start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            else {
                start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            // Do until the complete distance across ranges is calculated
            while (rest_rel_distance > 0) {
                // Calculate the percentage of total range
                range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                // Detect if the margin, padding or limit is larger then the current range and calculate
                if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                    // If larger then take the percentual distance of the whole range
                    rel_range_distance = range_pct * start_factor;
                    // Rest factor of relative percentual distance still to be calculated
                    rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                    // Set start factor to 1 as for next range it does not apply.
                    start_factor = 1;
                }
                else {
                    // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                    rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                    // No rest left as the rest fits in current range
                    rest_factor = 0;
                }
                if (direction) {
                    abs_distance_counter = abs_distance_counter - rel_range_distance;
                    // Limit range to first range when distance becomes outside of minimum range
                    if (this.xPct.length + range_counter >= 1) {
                        range_counter--;
                    }
                }
                else {
                    abs_distance_counter = abs_distance_counter + rel_range_distance;
                    // Limit range to last range when distance becomes outside of maximum range
                    if (this.xPct.length - range_counter >= 1) {
                        range_counter++;
                    }
                }
                // Rest of relative percentual distance still to be calculated
                rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
            }
            return value + abs_distance_counter;
        };
        Spectrum.prototype.toStepping = function (value) {
            value = toStepping(this.xVal, this.xPct, value);
            return value;
        };
        Spectrum.prototype.fromStepping = function (value) {
            return fromStepping(this.xVal, this.xPct, value);
        };
        Spectrum.prototype.getStep = function (value) {
            value = getStep(this.xPct, this.xSteps, this.snap, value);
            return value;
        };
        Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
            var j = getJ(value, this.xPct);
            // When at the top or stepping down, look at the previous sub-range
            if (value === 100 || (isDown && value === this.xPct[j - 1])) {
                j = Math.max(j - 1, 1);
            }
            return (this.xVal[j] - this.xVal[j - 1]) / size;
        };
        Spectrum.prototype.getNearbySteps = function (value) {
            var j = getJ(value, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[j - 2],
                    step: this.xNumSteps[j - 2],
                    highestStep: this.xHighestCompleteStep[j - 2],
                },
                thisStep: {
                    startValue: this.xVal[j - 1],
                    step: this.xNumSteps[j - 1],
                    highestStep: this.xHighestCompleteStep[j - 1],
                },
                stepAfter: {
                    startValue: this.xVal[j],
                    step: this.xNumSteps[j],
                    highestStep: this.xHighestCompleteStep[j],
                },
            };
        };
        Spectrum.prototype.countStepDecimals = function () {
            var stepDecimals = this.xNumSteps.map(countDecimals);
            return Math.max.apply(null, stepDecimals);
        };
        Spectrum.prototype.hasNoSize = function () {
            return this.xVal[0] === this.xVal[this.xVal.length - 1];
        };
        // Outside testing
        Spectrum.prototype.convert = function (value) {
            return this.getStep(this.toStepping(value));
        };
        Spectrum.prototype.handleEntryPoint = function (index, value) {
            var percentage;
            // Covert min/max syntax to 0 and 100.
            if (index === "min") {
                percentage = 0;
            }
            else if (index === "max") {
                percentage = 100;
            }
            else {
                percentage = parseFloat(index);
            }
            // Check for correct input.
            if (!isNumeric(percentage) || !isNumeric(value[0])) {
                throw new Error("noUiSlider: 'range' value isn't numeric.");
            }
            // Store values.
            this.xPct.push(percentage);
            this.xVal.push(value[0]);
            var value1 = Number(value[1]);
            // NaN will evaluate to false too, but to keep
            // logging clear, set step explicitly. Make sure
            // not to override the 'step' setting with false.
            if (!percentage) {
                if (!isNaN(value1)) {
                    this.xSteps[0] = value1;
                }
            }
            else {
                this.xSteps.push(isNaN(value1) ? false : value1);
            }
            this.xHighestCompleteStep.push(0);
        };
        Spectrum.prototype.handleStepPoint = function (i, n) {
            // Ignore 'false' stepping.
            if (!n) {
                return;
            }
            // Step over zero-length ranges (#948);
            if (this.xVal[i] === this.xVal[i + 1]) {
                this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                return;
            }
            // Factor to range ratio
            this.xSteps[i] =
                fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
            var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
            var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
            var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
            this.xHighestCompleteStep[i] = step;
        };
        return Spectrum;
    }());
    //endregion
    //region Options
    /*	Every input option is tested and parsed. This will prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */
    //region Defaults
    var defaultFormatter = {
        to: function (value) {
            return value === undefined ? "" : value.toFixed(2);
        },
        from: Number,
    };
    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub",
    };
    // Namespaces of internal event listeners
    var INTERNAL_EVENT_NS = {
        tooltips: ".__tooltips",
        aria: ".__aria",
    };
    //endregion
    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'step' is not numeric.");
        }
        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }
    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
        }
        parsed.keyboardPageMultiplier = entry;
    }
    function testKeyboardMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
        }
        parsed.keyboardMultiplier = entry;
    }
    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
        }
        parsed.keyboardDefaultStep = entry;
    }
    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider: 'range' is not an object.");
        }
        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        }
        parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
    }
    function testStart(parsed, entry) {
        entry = asArray(entry);
        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider: 'start' option is incorrect.");
        }
        // Store the number of handles.
        parsed.handles = entry.length;
        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }
    function testSnap(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'snap' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;
    }
    function testAnimate(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'animate' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;
    }
    function testAnimationDuration(parsed, entry) {
        if (typeof entry !== "number") {
            throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        }
        parsed.animationDuration = entry;
    }
    function testConnect(parsed, entry) {
        var connect = [false];
        var i;
        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        }
        else if (entry === "upper") {
            entry = [false, true];
        }
        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }
            connect.push(false);
        }
        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        }
        else {
            connect = entry;
        }
        parsed.connect = connect;
    }
    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }
    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'margin' option must be numeric.");
        }
        // Issue #582
        if (entry === 0) {
            return;
        }
        parsed.margin = parsed.spectrum.getDistance(entry);
    }
    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'limit' option must be numeric.");
        }
        parsed.limit = parsed.spectrum.getDistance(entry);
        if (!parsed.limit || parsed.handles < 2) {
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
    }
    function testPadding(parsed, entry) {
        var index;
        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (entry === 0) {
            return;
        }
        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }
        // 'getDistance' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            }
        }
        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
        if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
    }
    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }
    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        }
        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;
        var dragAll = entry.indexOf("drag-all") >= 0;
        var smoothSteps = entry.indexOf("smooth-steps") >= 0;
        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            }
            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }
        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
        }
        parsed.events = {
            tap: tap || snap,
            drag: drag,
            dragAll: dragAll,
            smoothSteps: smoothSteps,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained,
        };
    }
    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }
        if (entry === true || isValidPartialFormatter(entry)) {
            parsed.tooltips = [];
            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(entry);
            }
        }
        else {
            entry = asArray(entry);
            if (entry.length !== parsed.handles) {
                throw new Error("noUiSlider: must pass a formatter for all handles.");
            }
            entry.forEach(function (formatter) {
                if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                    throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }
            });
            parsed.tooltips = entry;
        }
    }
    function testHandleAttributes(parsed, entry) {
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a attributes for all handles.");
        }
        parsed.handleAttributes = entry;
    }
    function testAriaFormat(parsed, entry) {
        if (!isValidPartialFormatter(entry)) {
            throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
        }
        parsed.ariaFormat = entry;
    }
    function testFormat(parsed, entry) {
        if (!isValidFormatter(entry)) {
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
        }
        parsed.format = entry;
    }
    function testKeyboardSupport(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
        }
        parsed.keyboardSupport = entry;
    }
    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }
    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        }
        parsed.cssPrefix = entry;
    }
    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
        }
        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};
            Object.keys(entry).forEach(function (key) {
                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            });
        }
        else {
            parsed.cssClasses = entry;
        }
    }
    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);
        var parsed = {
            margin: null,
            limit: null,
            padding: null,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter,
        };
        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
            keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
            keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses },
            handleAttributes: { r: false, t: testHandleAttributes },
        };
        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardMultiplier: 1,
            keyboardDefaultStep: 10,
        };
        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }
        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function (name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider: '" + name + "' is required.");
                }
                return;
            }
            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });
        // Forward pips options
        parsed.pips = options.pips;
        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;
        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
        // Pips don't move, so we can place them using left/top.
        var styles = [
            ["left", "top"],
            ["right", "bottom"],
        ];
        parsed.style = styles[parsed.dir][parsed.ort];
        return parsed;
    }
    //endregion
    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();
        // All variables local to 'scope' are prefixed with 'scope_'
        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;
        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};
        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;
        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");
            if (className) {
                addClass(div, className);
            }
            addTarget.appendChild(div);
            return div;
        }
        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);
            addNodeTo(handle, options.cssClasses.touchArea);
            handle.setAttribute("data-handle", String(handleNumber));
            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function (event) {
                    return eventKeydown(event, handleNumber);
                });
            }
            if (options.handleAttributes !== undefined) {
                var attributes_1 = options.handleAttributes[handleNumber];
                Object.keys(attributes_1).forEach(function (attribute) {
                    handle.setAttribute(attribute, attributes_1[attribute]);
                });
            }
            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            }
            else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }
            return origin;
        }
        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }
            return addNodeTo(base, options.cssClasses.connect);
        }
        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);
            scope_Handles = [];
            scope_Connects = [];
            scope_Connects.push(addConnect(connectBase, connectOptions[0]));
            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]
            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }
        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);
            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            }
            else {
                addClass(addTarget, options.cssClasses.rtl);
            }
            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            }
            else {
                addClass(addTarget, options.cssClasses.vertical);
            }
            var textDirection = getComputedStyle(addTarget).direction;
            if (textDirection === "rtl") {
                addClass(addTarget, options.cssClasses.textDirectionRtl);
            }
            else {
                addClass(addTarget, options.cssClasses.textDirectionLtr);
            }
            return addNodeTo(addTarget, options.cssClasses.base);
        }
        function addTooltip(handle, handleNumber) {
            if (!options.tooltips || !options.tooltips[handleNumber]) {
                return false;
            }
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }
        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }
        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }
        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                scope_Tooltips.forEach(function (tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }
        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();
            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);
            bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
                if (!scope_Tooltips || !options.tooltips) {
                    return;
                }
                if (scope_Tooltips[handleNumber] === false) {
                    return;
                }
                var formattedValue = values[handleNumber];
                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }
                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }
        function aria() {
            removeEvent("update" + INTERNAL_EVENT_NS.aria);
            bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function (index) {
                    var handle = scope_Handles[index];
                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                    var now = positions[index];
                    // Formatted value for display
                    var text = String(options.ariaFormat.to(unencoded[index]));
                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);
                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }
        function getGroup(pips) {
            // Use the range.
            if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) {
                return scope_Spectrum.xVal;
            }
            if (pips.mode === exports.PipsMode.Count) {
                if (pips.values < 2) {
                    throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                }
                // Divide 0 - 100 in 'count' parts.
                var interval = pips.values - 1;
                var spread = 100 / interval;
                var values = [];
                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }
                values.push(100);
                return mapToRange(values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Positions) {
                // Map all percentages to on-range values.
                return mapToRange(pips.values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Values) {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (pips.stepped) {
                    return pips.values.map(function (value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }
                // Otherwise, we can simply use the values.
                return pips.values;
            }
            return []; // pips.mode = never
        }
        function mapToRange(values, stepped) {
            return values.map(function (value) {
                return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
            });
        }
        function generateSpread(pips) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return Number((value + increment).toFixed(7));
            }
            var group = getGroup(pips);
            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;
            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(group.slice().sort(function (a, b) {
                return a - b;
            }));
            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }
            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }
            group.forEach(function (current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = pips.mode === exports.PipsMode.Steps;
                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }
                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }
                // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
                if (high === undefined) {
                    high = low;
                }
                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);
                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;
                    steps = pctDifference / (pips.density || 1);
                    realSteps = Math.round(steps);
                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;
                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }
                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;
                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst && i !== high) {
                        type = 0;
                    }
                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }
                    // Update the percentage count.
                    prevPct = newPct;
                }
            });
            return indexes;
        }
        function addMarking(spread, filterFunc, formatter) {
            var _a, _b;
            var element = scope_Document.createElement("div");
            var valueSizeClasses = (_a = {},
                _a[exports.PipsType.None] = "",
                _a[exports.PipsType.NoValue] = options.cssClasses.valueNormal,
                _a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge,
                _a[exports.PipsType.SmallValue] = options.cssClasses.valueSub,
                _a);
            var markerSizeClasses = (_b = {},
                _b[exports.PipsType.None] = "",
                _b[exports.PipsType.NoValue] = options.cssClasses.markerNormal,
                _b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge,
                _b[exports.PipsType.SmallValue] = options.cssClasses.markerSub,
                _b);
            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }
            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;
                if (type === exports.PipsType.None) {
                    return;
                }
                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";
                // Values are only appended for points marked '1' or '2'.
                if (type > exports.PipsType.NoValue) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", String(value));
                    node.style[options.style] = offset + "%";
                    node.innerHTML = String(formatter.to(value));
                }
            }
            // Append all points.
            Object.keys(spread).forEach(function (offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });
            return element;
        }
        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }
        function pips(pips) {
            // Fix #669
            removePips();
            var spread = generateSpread(pips);
            var filter = pips.filter;
            var format = pips.format || {
                to: function (value) {
                    return String(Math.round(value));
                },
            };
            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
            return scope_Pips;
        }
        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = ("offset" + ["Width", "Height"][options.ort]);
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }
        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList
            var method = function (event) {
                var e = fixEvent(event, data.pageOffset, data.target || element);
                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }
                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }
                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }
                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }
                e.calcPoint = e.points[options.ort];
                // Call the event handler with the event [ and additional data ].
                callback(e, data);
                return;
            };
            var methods = [];
            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function (eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });
            return methods;
        }
        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;
            var x = 0;
            var y = 0;
            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }
            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
            // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
            if (e.type === "mousedown" && !e.buttons && !e.touches) {
                return false;
            }
            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function (checkTouch) {
                    var target = checkTouch.target;
                    return (target === eventTarget ||
                        eventTarget.contains(target) ||
                        (e.composed && e.composedPath().shift() === eventTarget));
                };
                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }
                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                }
                else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }
                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document);
            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }
            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435
            return e;
        }
        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();
            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);
            return options.dir ? 100 - proposal : proposal;
        }
        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;
            scope_Handles.forEach(function (handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }
                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                // Initial state
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                // Difference with this handle is smaller than the previously checked handle
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            });
            return handleNumber;
        }
        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" &&
                event.target.nodeName === "HTML" &&
                event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }
        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }
            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;
            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
        }
        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }
            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function (c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });
            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();
                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }
            if (options.events.smoothSteps) {
                data.handleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
                });
                data.handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                });
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }
        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return;
            }
            var handle;
            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];
                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;
                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }
            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();
            // Record the event listeners.
            var listeners = [];
            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                connect: data.connect,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice(),
            });
            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
            });
            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
            });
            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }
                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("start", handleNumber);
            });
        }
        // Move closest handle to tapped location.
        function eventTap(event) {
            // The tap event shouldn't propagate up
            event.stopPropagation();
            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);
            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return;
            }
            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            setHandle(handleNumber, proposal, true, true);
            setZindex();
            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            if (!options.events.snap) {
                fireEvent("change", handleNumber, true);
                fireEvent("set", handleNumber, true);
            }
            else {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }
        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);
            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);
            Object.keys(scope_Events).forEach(function (targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }
        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }
            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            var largeStepKeys = ["PageDown", "PageUp"];
            var edgeKeys = ["Home", "End"];
            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            }
            else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }
            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");
            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];
            if (!isDown && !isUp && !isMin && !isMax) {
                return true;
            }
            event.preventDefault();
            var to;
            if (isUp || isDown) {
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];
                // At the edge of a slider, do nothing
                if (step === null) {
                    return false;
                }
                // No step set, use the default of 10% of the sub-range
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                }
                if (isLargeUp || isLargeDown) {
                    step *= options.keyboardPageMultiplier;
                }
                else {
                    step *= options.keyboardMultiplier;
                }
                // Step over zero-length ranges (#948);
                step = Math.max(step, 0.0000001);
                // Decrement for down steps
                step = (isDown ? -1 : 1) * step;
                to = scope_Values[handleNumber] + step;
            }
            else if (isMax) {
                // End key
                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
            }
            else {
                // Home key
                to = options.spectrum.xVal[0];
            }
            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            return false;
        }
        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function (handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index],
                    });
                });
            }
            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }
            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true,
                });
            }
            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function (connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];
                    var handlesToDrag = [handleBefore, handleAfter];
                    var handleNumbersToDrag = [index - 1, index];
                    addClass(connect, options.cssClasses.draggable);
                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    if (behaviour.dragAll) {
                        handlesToDrag = scope_Handles;
                        handleNumbersToDrag = scope_HandleNumbers;
                    }
                    eventHolders.forEach(function (eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: handlesToDrag,
                            handleNumbers: handleNumbersToDrag,
                            connect: connect,
                        });
                    });
                });
            }
        }
        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);
            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function (a, index) {
                    fireEvent("update", index);
                });
            }
        }
        function isInternalNamespace(namespace) {
            return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
        }
        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
            Object.keys(scope_Events).forEach(function (bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);
                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    // only delete protected internal event if intentional
                    if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                        delete scope_Events[bind];
                    }
                }
            });
        }
        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function (targetEvent) {
                var eventType = targetEvent.split(".")[0];
                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(
                        // Use the slider public API as the scope ('this')
                        scope_Self, 
                        // Return values as array, so arg_1[arg_2] is always valid.
                        scope_Values.map(options.format.to), 
                        // Handle index, 0 or 1
                        handleNumber, 
                        // Un-formatted slider values
                        scope_Values.slice(), 
                        // Event is fired by tap, true or false
                        tap || false, 
                        // Left offset of the handle, in relation to the slider
                        scope_Locations.slice(), 
                        // add the slider public API to an accessible parameter when this is unavailable
                        scope_Self);
                    });
                }
            });
        }
        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
            var distance;
            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                    to = Math.max(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                    to = Math.min(to, distance);
                }
            }
            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                    to = Math.min(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                    to = Math.max(to, distance);
                }
            }
            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                    to = Math.max(to, distance);
                }
                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                    to = Math.min(to, distance);
                }
            }
            if (!smoothSteps) {
                to = scope_Spectrum.getStep(to);
            }
            // Limit percentage to the 0 - 100 range
            to = limit(to);
            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }
            return to;
        }
        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }
        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers, connect) {
            var proposals = locations.slice();
            // Store first handle now, so we still have it in case handleNumbers is reversed
            var firstHandle = handleNumbers[0];
            var smoothSteps = options.events.smoothSteps;
            var b = [!upward, upward];
            var f = [upward, !upward];
            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();
            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }
            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function (handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    }
                    else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }
            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }
            var state = false;
            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function (handleNumber, o) {
                state =
                    setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
            });
            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
                // If target is a connect, then fire drag event
                if (connect != undefined) {
                    fireEvent("drag", firstHandle);
                }
            }
        }
        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }
        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;
            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
            var translation = transformDirection(to, 0) - scope_DirOffset;
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = translateRule;
            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }
        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function (handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = String(zIndex);
            });
        }
        // Test suggested values and apply margin, step.
        // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
        function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
            if (!exactInput) {
                to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
            }
            if (to === false) {
                return false;
            }
            updateHandlePosition(handleNumber, to);
            return true;
        }
        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }
            var l = 0;
            var h = 100;
            if (index !== 0) {
                l = scope_Locations[index - 1];
            }
            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }
            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
            scope_Connects[index].style[options.transformRule] =
                translateRule + " " + scaleRule;
        }
        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }
            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }
            to = options.format.from(to);
            if (to !== false) {
                to = scope_Spectrum.toStepping(to);
            }
            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }
            return to;
        }
        // Set the slider value.
        function valueSet(input, fireSetEvent, exactInput) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;
            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
            });
            var i = scope_HandleNumbers.length === 1 ? 0 : 1;
            // Spread handles evenly across the slider if the range has no size (min=max)
            if (isInit && scope_Spectrum.hasNoSize()) {
                exactInput = true;
                scope_Locations[0] = 0;
                if (scope_HandleNumbers.length > 1) {
                    var space_1 = 100 / (scope_HandleNumbers.length - 1);
                    scope_HandleNumbers.forEach(function (handleNumber) {
                        scope_Locations[handleNumber] = handleNumber * space_1;
                    });
                }
            }
            // Secondary passes. Now that all base values are set, apply constraints.
            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
            for (; i < scope_HandleNumbers.length; ++i) {
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                });
            }
            setZindex();
            scope_HandleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }
        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }
        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
            // Ensure numeric input
            handleNumber = Number(handleNumber);
            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
            }
            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            // The exactInput argument can be used to ignore slider stepping (#436)
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
            fireEvent("update", handleNumber);
            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }
        // Get the slider value.
        function valueGet(unencoded) {
            if (unencoded === void 0) { unencoded = false; }
            if (unencoded) {
                // return a copy of the raw values
                return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
            }
            var values = scope_Values.map(options.format.to);
            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }
            return values;
        }
        // Removes classes from the root and empties it.
        function destroy() {
            // remove protected internal listeners
            removeEvent(INTERNAL_EVENT_NS.aria);
            removeEvent(INTERNAL_EVENT_NS.tooltips);
            Object.keys(options.cssClasses).forEach(function (key) {
                removeClass(scope_Target, options.cssClasses[key]);
            });
            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }
            delete scope_Target.noUiSlider;
        }
        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;
            // If snapped, directly use defined step value
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null,
                ];
            }
            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }
            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            }
            else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }
            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }
            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            }
            else if (location === 0) {
                decrement = null;
            }
            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();
            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }
            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }
            return [decrement, increment];
        }
        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }
        // Updatable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();
            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips",
            ];
            // Only change options that we're actually passed to update.
            updateAble.forEach(function (name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });
            var newOptions = testOptions(originalOptions);
            // Load new options into the slider state
            updateAble.forEach(function (name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });
            scope_Spectrum = newOptions.spectrum;
            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;
            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            }
            else {
                removePips();
            }
            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            }
            else {
                removeTooltips();
            }
            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
        }
        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);
            addElements(options.connect, scope_Base);
            // Attach user events.
            bindSliderEvents(options.events);
            // Use the public value method to set the start values.
            valueSet(options.start);
            if (options.pips) {
                pips(options.pips);
            }
            if (options.tooltips) {
                tooltips();
            }
            aria();
        }
        setupSlider();
        var scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function (upward, proposal, handleNumbers) {
                moveHandles(upward, proposal, scope_Locations, handleNumbers);
            },
            options: originalOptions,
            updateOptions: updateOptions,
            target: scope_Target,
            removePips: removePips,
            removeTooltips: removeTooltips,
            getPositions: function () {
                return scope_Locations.slice();
            },
            getTooltips: function () {
                return scope_Tooltips;
            },
            getOrigins: function () {
                return scope_Handles;
            },
            pips: pips, // Issue #594
        };
        return scope_Self;
    }
    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider: create requires a single element, got: " + target);
        }
        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider: Slider was already initialized.");
        }
        // Test the options and create the slider environment;
        var options = testOptions(originalOptions);
        var api = scope(target, options, originalOptions);
        target.noUiSlider = api;
        return api;
    }
    var nouislider = {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        // A reference to the default classes, allows global changes.
        // Use the cssClasses option for changes to one slider.
        cssClasses: cssClasses,
        create: initialize,
    };

    exports.create = initialize;
    exports.cssClasses = cssClasses;
    exports["default"] = nouislider;

    Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "./node_modules/nouislider/dist/nouislider.css":
/*!*****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./nouislider.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/view/cards/card.sass":
/*!*********************************************!*\
  !*** ./src/components/view/cards/card.sass ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_card_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./card.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/cards/card.sass");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_card_sass__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_card_sass__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/view/cart/cart.sass":
/*!********************************************!*\
  !*** ./src/components/view/cart/cart.sass ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cart_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./cart.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/cart/cart.sass");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cart_sass__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cart_sass__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/view/filter/filter-range/filter-range-date.sass":
/*!************************************************************************!*\
  !*** ./src/components/view/filter/filter-range/filter-range-date.sass ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_filter_range_date_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./filter-range-date.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/filter/filter-range/filter-range-date.sass");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_filter_range_date_sass__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_filter_range_date_sass__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/view/filter/filter.sass":
/*!************************************************!*\
  !*** ./src/components/view/filter/filter.sass ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_filter_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./filter.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/filter/filter.sass");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_filter_sass__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_filter_sass__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/view/search/search-area.sass":
/*!*****************************************************!*\
  !*** ./src/components/view/search/search-area.sass ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_search_area_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./search-area.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/search/search-area.sass");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_search_area_sass__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_search_area_sass__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/view/sort/sort-area.sass":
/*!*************************************************!*\
  !*** ./src/components/view/sort/sort-area.sass ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sort_area_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./sort-area.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/sort/sort-area.sass");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sort_area_sass__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sort_area_sass__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/global.sass":
/*!*************************!*\
  !*** ./src/global.sass ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./global.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/global.sass");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_sass__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_sass__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/app/app.ts":
/*!***********************************!*\
  !*** ./src/components/app/app.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const appView_1 = __importDefault(__webpack_require__(/*! ../view/appView */ "./src/components/view/appView.ts"));
const controller_1 = __importDefault(__webpack_require__(/*! ../controller/controller */ "./src/components/controller/controller.ts"));
const web_storage_1 = __importDefault(__webpack_require__(/*! ../view/web-storage/web-storage */ "./src/components/view/web-storage/web-storage.ts"));
const constants_1 = __webpack_require__(/*! ../constants/constants */ "./src/components/constants/constants.ts");
class App {
    constructor(data) {
        this.view = new appView_1.default();
        this.controller = new controller_1.default();
        this.storage = new web_storage_1.default();
        this.cartItems = this.storage.getItem('cart') || [];
        this.defaultOptions = {
            sortSettings: {
                direction: 'line',
                type: 'date',
            },
            filterSetting: {},
            search: '',
            filterSliders: {
                sliderDate: [2017, 2022, 2017, 2022],
                sliderPrice: [0, 45, 0, 45],
            },
        };
        this.options = this.storage.getItem('options') || JSON.parse(JSON.stringify(this.defaultOptions));
        this.defauleFilterSetting = {
            filterSetting: {
                country: ['Индия', 'Китай', 'Англия', 'Индонезия'],
            },
        };
        this.data = data;
    }
    resetEvent() {
        const reset = document.querySelector('.filter-reset');
        reset.addEventListener('click', () => {
            this.options.filterSetting = JSON.parse(JSON.stringify(this.defaultOptions)).filterSetting;
            this.options.filterSliders = JSON.parse(JSON.stringify(this.defaultOptions)).filterSliders;
            this.options.search = '';
            this.renderFilteringData(this.options);
            this.view.renderFilterArea(this.options);
            this.view.renderSearch(this.options);
            this.checkboxEvent();
            this.filterSliderEvent();
            this.searchEvent();
            this.storage.setItem('options', this.options);
        });
        const resetAll = document.querySelector('.all-reset');
        resetAll.addEventListener('click', () => {
            this.storage.clear();
            location.reload();
        });
    }
    cardsEvent() {
        const cartBtns = document.querySelectorAll('.on-cart');
        cartBtns.forEach((item) => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    if (this.cartItems.length <= constants_1.MAX_CART_COUNT) {
                        const changeCart = () => {
                            cartBtn.classList.toggle('added');
                            this.clearBox('.cart');
                            this.view.renderCart(this.cartItems.length);
                        };
                        const cartBtn = e.target;
                        const cardId = cartBtn.dataset.id;
                        if (!cartBtn.classList.contains('added') && cardId && this.cartItems.length < constants_1.MAX_CART_COUNT) {
                            this.cartItems.push(cardId);
                            cartBtn.innerText = 'Добавлено!';
                            changeCart();
                        }
                        else if (!cartBtn.classList.contains('added') &&
                            cardId &&
                            this.cartItems.length == constants_1.MAX_CART_COUNT) {
                            alert('Извините, корзина заполнена. Удлаить из корзины что нибдуь');
                        }
                        else if (cartBtn.classList.contains('added') && cardId) {
                            const i = this.cartItems.findIndex((item) => item == cardId);
                            this.cartItems.splice(i, 1);
                            cartBtn.innerText = 'В корзину';
                            changeCart();
                        }
                    }
                    else
                        throw new Error(`В корзине уже больше ${constants_1.MAX_CART_COUNT} штук`);
                    this.storage.setItem('cart', this.cartItems);
                }
            });
        });
    }
    sortEvent() {
        const sort = document.querySelector('.sort-select');
        const sortBtn = document.querySelector('.sort-button');
        // клик сортировки по возрастанию либо убыванию
        sortBtn.addEventListener('click', () => {
            const value = sortBtn.value;
            this.options.sortSettings.direction = value;
            if (Object.keys(this.options.filterSetting))
                this.renderFilteringData(this.options);
            else
                this.renderSortingData(this.options);
            this.storage.setItem('options', this.options);
        });
        // изменения select по разным критериям сортировки
        sort.addEventListener('change', () => {
            const value = sort.options[sort.selectedIndex]['value'];
            this.options.sortSettings.type = value;
            if (Object.keys(this.options.filterSetting))
                this.renderFilteringData(this.options);
            else
                this.renderSortingData(this.options);
            this.storage.setItem('options', this.options);
        });
    }
    searchEvent() {
        const search = document.querySelector('.search-input');
        const clearBtn = document.querySelector('.search-icon');
        clearBtn.addEventListener('click', () => {
            this.options.search = '';
            this.renderFilteringData(this.options);
            this.storage.setItem('options', this.options);
        });
        search.addEventListener('input', () => {
            this.options.search = search.value;
            this.renderFilteringData(this.options);
            this.storage.setItem('options', this.options);
        });
    }
    checkboxEvent() {
        //навешиваеем обработчики событий на чекбоксы, для изменения настроек фильтрации
        const checkboxes = document.querySelectorAll('.filter-area input[type=checkbox]');
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', (e) => {
                if (e.target) {
                    const checkbox = e.target;
                    const checkboxValue = checkbox.value;
                    const checkboxName = checkbox.name;
                    if (checkbox.checked) {
                        if (this.options.filterSetting) {
                            const array = this.options.filterSetting[checkboxName] || [];
                            array.push(`${checkboxValue.toLowerCase()}`);
                            this.options.filterSetting[checkboxName] = array; //создаем массив с данными для фильтрации
                        }
                    }
                    else {
                        if (this.options.filterSetting) {
                            const i = this.options.filterSetting[checkboxName].findIndex((item) => item.toLowerCase() === checkboxValue.toLowerCase());
                            this.options.filterSetting[checkboxName].splice(i, 1);
                            if (!this.options.filterSetting[checkboxName].length)
                                delete this.options.filterSetting[checkboxName];
                        }
                    }
                    this.renderFilteringData(this.options);
                    this.storage.setItem('options', this.options);
                }
            });
        });
    }
    filterSliderEvent() {
        const sliderDate = document.querySelector('.slider-date');
        const sliderPrice = document.querySelector('.slider-price');
        sliderDate.noUiSlider.on('change', (values, handle) => {
            this.options.filterSliders.sliderDate[handle] = Math.round(values[handle]);
            this.renderFilteringData(this.options);
            this.storage.setItem('options', this.options);
        });
        sliderPrice.noUiSlider.on('change', (values, handle) => {
            this.options.filterSliders.sliderPrice[handle] = Math.round(values[handle]);
            this.renderFilteringData(this.options);
            this.storage.setItem('options', this.options);
        });
    }
    renderSortingData(options) {
        this.clearBox('.card-list');
        this.controller.sort(this.data, options, (data) => {
            this.view.renderCards(data, this.cartItems);
        });
        this.cardsEvent();
    }
    renderFilteringData(options) {
        let newData = this.data;
        this.clearBox('.card-list');
        newData = this.controller.sort(newData, options);
        if (!Object.keys(options.filterSetting).length) {
            // если нет настроек для фильтра, мы используем дефолтные настройки для фильтрации
            this.controller.filter(newData, this.defauleFilterSetting.filterSetting, options.search, options.filterSliders, (data) => {
                this.view.renderCards(data, this.cartItems);
            });
        }
        else {
            this.controller.filter(newData, options.filterSetting, options.search, options.filterSliders, (data) => {
                this.view.renderCards(data, this.cartItems);
            });
        }
        this.cardsEvent();
    }
    clearBox(className) {
        const cardsList = document.querySelector(`${className}`);
        cardsList.innerHTML = '';
    }
    start() {
        this.view.renderFilterArea(this.options);
        this.view.renderSearch(this.options);
        this.view.renderSortArea(this.options);
        this.view.renderCart(this.cartItems.length);
        this.checkboxEvent();
        this.searchEvent();
        this.sortEvent();
        this.filterSliderEvent();
        this.resetEvent();
        this.renderFilteringData(this.options);
    }
}
exports["default"] = App;


/***/ }),

/***/ "./src/components/constants/constants.ts":
/*!***********************************************!*\
  !*** ./src/components/constants/constants.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MAX_CART_COUNT = void 0;
const MAX_CART_COUNT = 20;
exports.MAX_CART_COUNT = MAX_CART_COUNT;


/***/ }),

/***/ "./src/components/constants/data.ts":
/*!******************************************!*\
  !*** ./src/components/constants/data.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.data = void 0;
exports.data = [
    {
        id: 1,
        discount_value: 0,
        discount: false,
        image: {
            src: './assets/images/AHMAD.jpg',
        },
        brand: 'AHMAD TEA',
        type: 'чай',
        box: 'листовой',
        color: 'черный',
        country: 'Индия',
        price: 10,
        date: 2019,
    },
    {
        id: 3,
        discount_value: 10,
        discount: true,
        image: {
            src: './assets/images/lipton.jpg',
        },
        brand: 'LIPTON',
        type: 'чай',
        box: 'пакетированный',
        color: 'черный',
        country: 'Индонезия',
        price: 12,
        date: 2021,
    },
    {
        id: 2,
        discount_value: 0,
        discount: false,
        image: {
            src: './assets/images/AHMAD_red.jpg',
        },
        brand: 'AHMAD TEA',
        type: 'чай',
        box: 'пакетированный',
        color: 'красный',
        country: 'Индия',
        price: 13,
        date: 2020,
    },
    {
        id: 4,
        discount_value: 0,
        discount: false,
        image: {
            src: './assets/images/richard.jpg',
        },
        brand: 'RICHARD',
        type: 'чай',
        box: 'листовой',
        color: 'черный',
        country: 'Англия',
        price: 5,
        date: 2022,
    },
    {
        id: 5,
        discount_value: 30,
        discount: true,
        image: {
            src: './assets/images/greenfield.png',
        },
        brand: 'Greenfield',
        type: 'чай',
        box: 'листовой',
        color: 'зеленый',
        country: 'Китай',
        price: 30,
        date: 2022,
    },
    {
        id: 6,
        discount_value: 50,
        discount: true,
        image: {
            src: './assets/images/richard_white.jpg',
        },
        brand: 'RICHARD',
        type: 'чай',
        box: 'листовой',
        color: 'белый',
        country: 'Англия',
        price: 22,
        date: 2022,
    },
    {
        id: 7,
        discount_value: 52,
        discount: true,
        image: {
            src: './assets/images/curtis_black.jpg',
        },
        brand: 'CURTIS',
        type: 'чай',
        box: 'листовой',
        color: 'черный',
        country: 'Индонезия',
        price: 7,
        date: 2018,
    },
    {
        id: 8,
        discount_value: 5,
        discount: true,
        image: {
            src: './assets/images/curtis_green_pack.jpg',
        },
        brand: 'CURTIS',
        type: 'чай',
        box: 'пакетированный',
        color: 'зеленый',
        country: 'Индонезия',
        price: 13,
        date: 2017,
    },
    {
        id: 9,
        discount_value: 42,
        discount: true,
        image: {
            src: './assets/images/impra_black.jpg',
        },
        brand: 'IMPRA',
        type: 'чай',
        box: 'листовой',
        color: 'черный',
        country: 'Англия',
        price: 24,
        date: 2018,
    },
    {
        id: 10,
        discount_value: 50,
        discount: true,
        image: {
            src: './assets/images/impra_green.jpg',
        },
        brand: 'IMPRA',
        type: 'чай',
        box: 'листовой',
        color: 'зеленый',
        country: 'Англия',
        price: 15,
        date: 2020,
    },
    {
        id: 11,
        discount_value: 50,
        discount: true,
        image: {
            src: './assets/images/impra_red.jpg',
        },
        brand: 'IMPRA',
        type: 'чай',
        box: 'листовой',
        color: 'красный',
        country: 'Англия',
        price: 10,
        date: 2022,
    },
    {
        id: 12,
        discount_value: 50,
        discount: true,
        image: {
            src: './assets/images/AHMAD_white.jpg',
        },
        brand: 'AHMAD TEA',
        type: 'чай',
        box: 'листовой',
        color: 'белый',
        country: 'Индия',
        price: 21,
        date: 2022,
    },
    {
        id: 13,
        discount_value: 50,
        discount: true,
        image: {
            src: './assets/images/curtis_white.jpg',
        },
        brand: 'CURTIS',
        type: 'чай',
        box: 'листовой',
        color: 'белый',
        country: 'Индонезия',
        price: 22.5,
        date: 2018,
    },
    {
        id: 14,
        discount_value: 50,
        discount: true,
        image: {
            src: './assets/images/richard.jpg',
        },
        brand: 'RICHARD',
        type: 'чай',
        box: 'листовой',
        color: 'черный',
        country: 'Китай',
        price: 14.2,
        date: 2022,
    },
    {
        id: 15,
        discount_value: 50,
        discount: true,
        image: {
            src: './assets/images/lipton_green.webp',
        },
        brand: 'Lipton',
        type: 'чай',
        box: 'пакетированный',
        color: 'зеленый',
        country: 'Индия',
        price: 13.2,
        date: 2022,
    },
    {
        id: 16,
        discount_value: 10,
        discount: true,
        image: {
            src: './assets/images/lipton_red.jpg',
        },
        brand: 'Lipton',
        type: 'чай',
        box: 'пакетированный',
        color: 'черный',
        country: 'Англия',
        price: 5.5,
        date: 2021,
    },
    {
        id: 17,
        discount_value: 0,
        discount: false,
        image: {
            src: './assets/images/lipton-white.jpg',
        },
        brand: 'Lipton',
        type: 'чай',
        box: 'пакетированный',
        color: 'черный',
        country: 'Англия',
        price: 10,
        date: 2021,
    },
    {
        id: 18,
        discount_value: 0,
        discount: false,
        image: {
            src: './assets/images/richard_red.jpg',
        },
        brand: 'RICHARD',
        type: 'чай',
        box: 'пакетированный',
        color: 'красный',
        country: 'Англия',
        price: 19.99,
        date: 2020,
    },
    {
        id: 19,
        discount_value: 0,
        discount: false,
        image: {
            src: './assets/images/richard_green.jpg',
        },
        brand: 'RICHARD',
        type: 'чай',
        box: 'листовой',
        color: 'зеленый',
        country: 'Англия',
        price: 10,
        date: 2019,
    },
    {
        id: 20,
        discount_value: 0,
        discount: false,
        image: {
            src: './assets/images/greenfield_black.jpg',
        },
        brand: 'Greenfield',
        type: 'чай',
        box: 'листовой',
        color: 'черный',
        country: 'Индонезия',
        price: 11,
        date: 2021,
    },
    {
        id: 21,
        discount_value: 50,
        discount: false,
        image: {
            src: './assets/images/greenfield_white.jpg',
        },
        brand: 'Greenfield',
        type: 'чай',
        box: 'листовой',
        color: 'белый',
        country: 'Индонезия',
        price: 10,
        date: 2022,
    },
    {
        id: 22,
        discount_value: 50,
        discount: false,
        image: {
            src: './assets/images/greenfield_red.jpg',
        },
        brand: 'Greenfield',
        type: 'чай',
        box: 'листовой',
        color: 'красный',
        country: 'Англия',
        price: 10,
        date: 2018,
    },
];


/***/ }),

/***/ "./src/components/controller/controller.ts":
/*!*************************************************!*\
  !*** ./src/components/controller/controller.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class AppController {
    sort(data, options, callback) {
        const sortData = data.sort((a, b) => {
            if (options.sortSettings.direction === 'line') {
                return a[`${options.sortSettings.type}`] - b[`${options.sortSettings.type}`];
            }
            else if (options.sortSettings.direction === 'reverse') {
                return b[`${options.sortSettings.type}`] - a[`${options.sortSettings.type}`];
            }
            else
                throw new Error('options передались неправильно');
        });
        if (callback)
            callback(sortData);
        return sortData; // возвращаем sortData, потому что мы фильтруем после сортировки.
    }
    filter(data, filterSetting, search, filterSliders, callback) {
        let newData = [];
        const messageNoCards = () => {
            const cardsArea = document.querySelector('.card-list');
            const messageBox = document.createElement('div');
            messageBox.className = 'no-cards';
            messageBox.innerHTML = 'Совпадений не найдено';
            cardsArea.append(messageBox);
        };
        const filteringCard = (key, card) => {
            // фильтруем сперва по слайдеру цены
            if (card.price >= filterSliders.sliderPrice[0] && card.price <= filterSliders.sliderPrice[1]) {
                //фультруем по слайдеру даты
                if (card.date >= filterSliders.sliderDate[0] && card.date <= filterSliders.sliderDate[1]) {
                    //фильтруем название чая по поиску в строке. Если совпадения есть, фильтруем дальше, если нет, то возвращаем false
                    if (card.brand.toLowerCase().indexOf(search.toLowerCase()) != -1) {
                        // фильтурем по чекбоксам фильтров
                        return filterSetting[key].some((value) => {
                            switch (typeof card[key]) {
                                case 'number':
                                    return value == card[key];
                                case 'boolean':
                                    return value === card[key].toString();
                                case 'string':
                                    return value.toLowerCase() === card[key].toLowerCase();
                            }
                        });
                    }
                    return false;
                }
                return false;
            }
            return false;
        };
        for (const key in filterSetting) {
            //проверяем на наличие карточек в newData. При первой итерации их нет, мы используем первоначальную Data.
            if (!newData.length) {
                newData = data.filter((card) => {
                    return filteringCard(key, card);
                });
                if (newData.length === 0) {
                    messageNoCards();
                    break;
                }
            }
            else {
                newData = newData.filter((card) => {
                    return filteringCard(key, card);
                });
                // в случае, если в Data уже нет карточек, мы прерываем выполнение фильтрации, иначе попадет под первое условие
                if (newData.length === 0) {
                    messageNoCards();
                    break;
                }
            }
        }
        callback(newData);
    }
}
exports["default"] = AppController;


/***/ }),

/***/ "./src/components/view/appView.ts":
/*!****************************************!*\
  !*** ./src/components/view/appView.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const cards_1 = __importDefault(__webpack_require__(/*! ./cards/cards */ "./src/components/view/cards/cards.ts"));
const filter_area_1 = __importDefault(__webpack_require__(/*! ./filter/filter-area */ "./src/components/view/filter/filter-area.ts"));
const search_area_1 = __importDefault(__webpack_require__(/*! ./search/search-area */ "./src/components/view/search/search-area.ts"));
const sort_area_1 = __importDefault(__webpack_require__(/*! ./sort/sort-area */ "./src/components/view/sort/sort-area.ts"));
const cart_1 = __importDefault(__webpack_require__(/*! ./cart/cart */ "./src/components/view/cart/cart.ts"));
class AppView {
    constructor() {
        this.cards = new cards_1.default();
        this.filterArea = new filter_area_1.default();
        this.searchArea = new search_area_1.default();
        this.sortArea = new sort_area_1.default();
        this.cart = new cart_1.default();
    }
    renderCart(a) {
        this.cart.changeCount(a);
        this.cart.render();
    }
    renderCards(data, cartItems) {
        this.cards.render(data, cartItems);
    }
    renderFilterArea(options) {
        this.filterArea.render(options);
    }
    renderSearch(options) {
        this.searchArea.render(options);
    }
    renderSortArea(options) {
        this.sortArea.render(options);
    }
}
exports["default"] = AppView;


/***/ }),

/***/ "./src/components/view/cards/cards.ts":
/*!********************************************!*\
  !*** ./src/components/view/cards/cards.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./card.sass */ "./src/components/view/cards/card.sass");
class Cards {
    render(data, cartItems) {
        const itemsList = document.querySelector('.card-list');
        data.forEach((item) => {
            //создаем элементы, которые содержаться внутри списка карточек
            const listitem = document.createElement('li');
            const card = document.createElement('div');
            const makeImageBox = () => {
                const box = document.createElement('div');
                const discount = document.createElement('p');
                const star = document.createElement('div');
                const image = new Image();
                image.src = item.image.src;
                image.alt = item.type;
                box.className = 'card-image';
                discount.className = 'discount';
                star.className = 'star no-fill';
                //если есть скидка, добавляем блок со скидкой
                if (item.discount) {
                    discount.innerText = `Скидка ${item.discount_value}%`;
                    box.append(discount);
                }
                box.append(star, image);
                return box;
            };
            const makeCardBody = () => {
                const cardBody = document.createElement('div');
                const price = document.createElement('h2');
                const name = document.createElement('h3');
                const itemDescription = document.createElement('p');
                const itemLocation = document.createElement('p');
                cardBody.className = 'card-body';
                price.className = 'price';
                name.className = 'name';
                itemDescription.className = 'item-description';
                itemLocation.className = 'item-location';
                price.innerText = `$${item.price}`;
                name.innerText = `${item.brand}`;
                itemDescription.innerHTML = `
                    <span data-type=${item.type}>${item.type}</span>
                    <span data-box=${item.box}>${item.box}</span>
                    <p data-color = ${item.color}>${item.color}</p>
                `;
                itemLocation.innerHTML = `
                    <span data-country=${item.country}>${item.country}</span>
                    <span data-date=${item.date}>${item.date}</span>
                `;
                const makeButtonCart = () => {
                    const buttonCart = document.createElement('button');
                    buttonCart.className = 'on-cart';
                    buttonCart.setAttribute('type', 'button');
                    buttonCart.setAttribute('data-id', `${item.id}`);
                    buttonCart.innerText = 'В корзину';
                    if (cartItems.some((id) => id === item.id.toString())) {
                        buttonCart.innerText = 'Добавлено!';
                        buttonCart.classList.add('added');
                    }
                    buttonCart.addEventListener('click', (e) => {
                        if (e.target) {
                            const btnCart = e.target;
                            if (!btnCart.classList.contains('added')) {
                                console.log('Card has been added in cart');
                            }
                        }
                    });
                    return buttonCart;
                };
                const btnCart = makeButtonCart();
                cardBody.append(price, name, itemDescription, itemLocation, btnCart);
                return cardBody;
            };
            listitem.className = 'card-list-item';
            card.className = 'card';
            card.setAttribute('data-price', `${item.price}`);
            card.setAttribute('data-brand', `${item.brand}`);
            card.setAttribute('data-type', `${item.type}`);
            const cardImage = makeImageBox();
            const cardBody = makeCardBody();
            card.append(cardImage, cardBody);
            listitem.append(card);
            if (itemsList)
                itemsList.append(listitem);
            else
                throw new Error('Не обнаружен контейнер для рендера краточек');
        });
    }
}
exports["default"] = Cards;


/***/ }),

/***/ "./src/components/view/cart/cart.ts":
/*!******************************************!*\
  !*** ./src/components/view/cart/cart.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./cart.sass */ "./src/components/view/cart/cart.sass");
class Cart {
    constructor() {
        this.count = 0;
        this.count = 0;
    }
    changeCount(a) {
        this.count = a;
    }
    render() {
        const cart_count = document.createElement('div');
        const cart = document.querySelector('.cart');
        cart_count.className = 'cart-count';
        cart_count.innerText = `${this.count}`;
        cart.append(cart_count);
    }
}
exports["default"] = Cart;


/***/ }),

/***/ "./src/components/view/filter/filter-area.ts":
/*!***************************************************!*\
  !*** ./src/components/view/filter/filter-area.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./filter.sass */ "./src/components/view/filter/filter.sass");
__webpack_require__(/*! nouislider/dist/nouislider.css */ "./node_modules/nouislider/dist/nouislider.css");
const filter_range_slider_1 = __webpack_require__(/*! ./filter-range/filter-range-slider */ "./src/components/view/filter/filter-range/filter-range-slider.ts");
class FilterArea {
    constructor() {
        this.filterAreaOptions = {
            discount: {
                values: ['true'],
                name: 'Скидка',
            },
            country: {
                values: ['Индия', 'Китай', 'Англия', 'Индонезия'],
                name: 'Страны',
            },
            color: {
                values: ['черный', 'белый', 'красный', 'зеленый'],
                name: 'Цвет',
            },
            brand: {
                values: ['Lipton', 'Richard', 'Greenfield', 'Ahmad tea', 'Impra', 'Curtis'],
                name: 'Брэнд',
            },
            box: {
                values: ['листовой', 'пакетированный'],
                name: 'Упаковка',
            },
        };
    }
    makeFilterBox(key, name, value, checkedValues) {
        const box = document.createElement('div');
        const filterBoxList = document.createElement('ul');
        const filterBoxName = document.createElement('p');
        box.className = 'filter-box';
        filterBoxName.className = 'filter-box-name';
        filterBoxList.className = 'filter-box-list';
        filterBoxName.innerText = name;
        if (value.length) {
            value.forEach((element) => {
                const item = document.createElement('li');
                item.className = `filter-box-item filter-box-${key}-item`;
                item.innerText = element;
                if (element == 'true' || element == 'false')
                    item.innerText = 'Только со скидкой';
                const checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('name', key);
                checkbox.setAttribute('value', element);
                if (checkedValues && checkedValues.some((checkbox) => checkbox.toLowerCase() === element.toLowerCase()))
                    checkbox.setAttribute('checked', '');
                item.prepend(checkbox);
                filterBoxList.append(item);
            });
        }
        else {
            console.log(`В ключе ${key} нет values`);
        }
        box.append(filterBoxName, filterBoxList);
        return box;
    }
    render(options) {
        const container = document.querySelector('.filter-settings');
        container.innerHTML = '';
        const sliderDate = new filter_range_slider_1.Slider(options.filterSliders.sliderDate, 'date', 'По дате').createSlider();
        const sliderPrice = new filter_range_slider_1.Slider(options.filterSliders.sliderPrice, 'price', 'По цене').createSlider();
        container.append(sliderDate, sliderPrice);
        if (this.filterAreaOptions) {
            for (const key in this.filterAreaOptions) {
                const keyBox = this.makeFilterBox(key, this.filterAreaOptions[key]['name'], this.filterAreaOptions[key]['values'], options.filterSetting[key]);
                container.append(keyBox);
            }
        }
    }
}
exports["default"] = FilterArea;


/***/ }),

/***/ "./src/components/view/filter/filter-range/filter-range-slider.ts":
/*!************************************************************************!*\
  !*** ./src/components/view/filter/filter-range/filter-range-slider.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Slider = void 0;
const nouislider_1 = __importDefault(__webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.js"));
__webpack_require__(/*! ./filter-range-date.sass */ "./src/components/view/filter/filter-range/filter-range-date.sass");
class Slider {
    constructor(prop, className, headTitle) {
        this.start = prop[0];
        this.end = prop[1];
        this.min = prop[2];
        this.max = prop[3];
        this.className = className;
        this.headTitle = headTitle;
    }
    createSlider() {
        const sliderBox = document.createElement('div');
        const sliderHead = document.createElement('div');
        const dateSlider = document.createElement('div');
        const valueBefore = document.createElement('div');
        const valueAfter = document.createElement('div');
        sliderHead.innerText = `${this.headTitle}`;
        sliderHead.className = 'slider-head';
        const createValuesBox = () => {
            const valuesBox = document.createElement('div');
            valuesBox.className = 'values-box';
            valueAfter.className = 'value';
            valueBefore.className = 'value';
            valuesBox.append(valueBefore, valueAfter);
            return valuesBox;
        };
        const valuesBox = createValuesBox();
        dateSlider.className = `slider-range slider-${this.className}`;
        nouislider_1.default.create(dateSlider, {
            start: [this.start, this.end],
            connect: true,
            step: 1,
            range: {
                min: [this.min],
                max: [this.max],
            },
        });
        dateSlider.noUiSlider.on('update', (values) => {
            valueBefore.innerText = Math.round(values[0]).toString();
            valueAfter.innerText = Math.round(values[1]).toString();
        });
        sliderBox.append(sliderHead, dateSlider, valuesBox);
        return sliderBox;
    }
}
exports.Slider = Slider;


/***/ }),

/***/ "./src/components/view/search/search-area.ts":
/*!***************************************************!*\
  !*** ./src/components/view/search/search-area.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./search-area.sass */ "./src/components/view/search/search-area.sass");
//asd
class SearchArea {
    events(input, closeBtn) {
        input.addEventListener('input', ( /*e todo rename*/) => {
            if (input.value.length && !closeBtn.classList.contains('close'))
                closeBtn.classList.add('close');
            else if (!input.value.length)
                closeBtn.classList.remove('close');
        });
        closeBtn.addEventListener('click', () => {
            input.value = '';
            closeBtn.classList.remove('close');
            input.focus();
        });
    }
    render(options) {
        const searchArea = document.querySelector('.search-area');
        searchArea.innerHTML = '';
        const input = document.createElement('input');
        const closeBtn = document.createElement('button');
        input.setAttribute('placeholder', 'Найдите свой любимый чай');
        input.setAttribute('type', 'text');
        input.setAttribute('autofocus', 'true');
        input.className = 'search-input';
        closeBtn.className = 'search-icon';
        input.value = options.search;
        if (options.search)
            closeBtn.classList.add('close');
        this.events(input, closeBtn);
        searchArea.append(closeBtn, input);
    }
}
exports["default"] = SearchArea;


/***/ }),

/***/ "./src/components/view/sort/sort-area.ts":
/*!***********************************************!*\
  !*** ./src/components/view/sort/sort-area.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./sort-area.sass */ "./src/components/view/sort/sort-area.sass");
class SortArea {
    render(options) {
        const makeButton = (setting) => {
            const sortButton = document.createElement('button');
            sortButton.className = 'sort-button';
            sortButton.setAttribute('value', options.sortSettings.direction);
            if (setting === 'line')
                sortButton.innerText = 'по возрастанию';
            else if (setting === 'reverse')
                sortButton.innerText = 'по убыванию';
            sortButton.addEventListener('click', (e) => {
                const btn = e.target;
                if (btn)
                    btn.innerText === 'по убыванию'
                        ? (btn.innerText = 'по возрастанию')
                        : (btn.innerText = 'по убыванию');
                btn.getAttribute('value') === 'line'
                    ? btn.setAttribute('value', 'reverse')
                    : btn.setAttribute('value', 'line');
            });
            return sortButton;
        };
        const makeSelect = (setting) => {
            const select = document.createElement('select');
            const arr = ['По дате сборки урожая', 'По цене' /*, 'По стране'*/];
            const values = ['date', 'price'];
            for (let i = 0; i < 2; i++) {
                const option = document.createElement('option');
                if (values[i] === setting)
                    option.setAttribute('selected', '');
                option.setAttribute('value', values[i]);
                option.innerText = arr[i];
                select.append(option);
            }
            select.className = 'sort-select';
            return select;
        };
        const sortArea = document.querySelector('.sort-area');
        const button = makeButton(options.sortSettings.direction);
        const select = makeSelect(options.sortSettings.type);
        sortArea.append(select, button);
    }
}
exports["default"] = SortArea;


/***/ }),

/***/ "./src/components/view/web-storage/web-storage.ts":
/*!********************************************************!*\
  !*** ./src/components/view/web-storage/web-storage.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// import { TOptions } from '../../types/types';
Object.defineProperty(exports, "__esModule", ({ value: true }));
class WebStorage {
    // options: TOptions | undefined;
    // constructor() {
    //     if (typeof localStorage.getItem('options') === 'string')
    //         this.options = JSON.parse(localStorage.getItem('options'));
    // }
    getItem(key) {
        const object = localStorage.getItem(key);
        return JSON.parse(object);
    }
    setItem(key, value) {
        const object = JSON.stringify(value);
        localStorage.setItem(key, object);
    }
    clear() {
        localStorage.clear();
    }
}
exports["default"] = WebStorage;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./global.sass */ "./src/global.sass");
const app_1 = __importDefault(__webpack_require__(/*! ./components/app/app */ "./src/components/app/app.ts"));
const data_1 = __webpack_require__(/*! ./components/constants/data */ "./src/components/constants/data.ts");
const APP = new app_1.default(data_1.data);
APP.start();


/***/ }),

/***/ "./src/assets/images/cart2.png":
/*!*************************************!*\
  !*** ./src/assets/images/cart2.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/cart2.png";

/***/ }),

/***/ "./src/assets/images/github.png":
/*!**************************************!*\
  !*** ./src/assets/images/github.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/github.png";

/***/ }),

/***/ "./src/assets/images/rs_school_js.svg":
/*!********************************************!*\
  !*** ./src/assets/images/rs_school_js.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/rs_school_js.svg";

/***/ }),

/***/ "./src/assets/images/star_with_fill.png":
/*!**********************************************!*\
  !*** ./src/assets/images/star_with_fill.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/star_with_fill.png";

/***/ }),

/***/ "./src/assets/images/star_without_fill.png":
/*!*************************************************!*\
  !*** ./src/assets/images/star_without_fill.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/star_without_fill.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlELDJDQUEyQyxtQ0FBbUMsY0FBYyxnQkFBZ0IsR0FBRyxPQUFPLGdIQUFnSCxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssS0FBSyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLEtBQUssS0FBSyxXQUFXLE9BQU8sUUFBUSxXQUFXLE9BQU8sT0FBTyxLQUFLLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQkFBK0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtQ0FBbUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4Q0FBOEM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFdBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRixnQkFBZ0I7QUFDaEc7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywrQkFBK0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Ozs7QUNuQkQsOERBQXVCO0FBQ3ZCLDhHQUF1QztBQUN2Qyw0R0FBbUQ7QUFFbkQsTUFBTSxHQUFHLEdBQUcsSUFBSSxhQUFHLENBQUMsV0FBSSxDQUFDLENBQUM7QUFDMUIsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0xaO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmNzcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy92aWV3L2NhcmRzL2NhcmQuc2FzcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy92aWV3L2NhcnQvY2FydC5zYXNzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvZmlsdGVyL2ZpbHRlci1yYW5nZS9maWx0ZXItcmFuZ2UtZGF0ZS5zYXNzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvZmlsdGVyL2ZpbHRlci5zYXNzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc2VhcmNoL3NlYXJjaC1hcmVhLnNhc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zb3J0L3NvcnQtYXJlYS5zYXNzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9nbG9iYWwuc2FzcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3M/ZTIzMSIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy92aWV3L2NhcmRzL2NhcmQuc2Fzcz9kOTlkIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY2FydC9jYXJ0LnNhc3M/ZDJjZSIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy92aWV3L2ZpbHRlci9maWx0ZXItcmFuZ2UvZmlsdGVyLXJhbmdlLWRhdGUuc2Fzcz8wMWE2Iiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvZmlsdGVyL2ZpbHRlci5zYXNzPzdkMTUiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zZWFyY2gvc2VhcmNoLWFyZWEuc2Fzcz84NWY4Iiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc29ydC9zb3J0LWFyZWEuc2Fzcz9jMDE0Iiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9nbG9iYWwuc2Fzcz82OWM2Iiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2NvbnN0YW50cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY29uc3RhbnRzL2RhdGEudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbGxlci9jb250cm9sbGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvYXBwVmlldy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy92aWV3L2NhcmRzL2NhcmRzLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY2FydC9jYXJ0LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvZmlsdGVyL2ZpbHRlci1hcmVhLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvZmlsdGVyL2ZpbHRlci1yYW5nZS9maWx0ZXItcmFuZ2Utc2xpZGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc2VhcmNoL3NlYXJjaC1hcmVhLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc29ydC9zb3J0LWFyZWEudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvdmlldy93ZWItc3RvcmFnZS93ZWItc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBGdW5jdGlvbmFsIHN0eWxpbmc7XFxuICogVGhlc2Ugc3R5bGVzIGFyZSByZXF1aXJlZCBmb3Igbm9VaVNsaWRlciB0byBmdW5jdGlvbi5cXG4gKiBZb3UgZG9uJ3QgbmVlZCB0byBjaGFuZ2UgdGhlc2UgcnVsZXMgdG8gYXBwbHkgeW91ciBkZXNpZ24uXFxuICovXFxuLm5vVWktdGFyZ2V0LFxcbi5ub1VpLXRhcmdldCAqIHtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm5vVWktdGFyZ2V0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5vVWktYmFzZSxcXG4ubm9VaS1jb25uZWN0cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi8qIFdyYXBwZXIgZm9yIGFsbCBjb25uZWN0IGVsZW1lbnRzLlxcbiAqL1xcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiAwO1xcbn1cXG5cXG4ubm9VaS1jb25uZWN0LFxcbi5ub1VpLW9yaWdpbiB7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XFxufVxcblxcbi8qIE9mZnNldCBkaXJlY3Rpb25cXG4gKi9cXG4ubm9VaS10eHQtZGlyLXJ0bC5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogYXV0bztcXG59XFxuXFxuLyogR2l2ZSBvcmlnaW5zIDAgaGVpZ2h0L3dpZHRoIHNvIHRoZXkgZG9uJ3QgaW50ZXJmZXJlIHdpdGggY2xpY2tpbmcgdGhlXFxuICogY29ubmVjdCBlbGVtZW50cy5cXG4gKi9cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1vcmlnaW4ge1xcbiAgdG9wOiAtMTAwJTtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi5ub1VpLWhhbmRsZSB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLm5vVWktdG91Y2gtYXJlYSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5vVWktc3RhdGUtdGFwIC5ub1VpLWNvbm5lY3QsXFxuLm5vVWktc3RhdGUtdGFwIC5ub1VpLW9yaWdpbiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcblxcbi5ub1VpLXN0YXRlLWRyYWcgKiB7XFxuICBjdXJzb3I6IGluaGVyaXQgIWltcG9ydGFudDtcXG59XFxuXFxuLyogU2xpZGVyIHNpemUgYW5kIGhhbmRsZSBwbGFjZW1lbnQ7XFxuICovXFxuLm5vVWktaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDE4cHg7XFxufVxcblxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgcmlnaHQ6IC0xN3B4O1xcbiAgdG9wOiAtNnB4O1xcbn1cXG5cXG4ubm9VaS12ZXJ0aWNhbCB7XFxuICB3aWR0aDogMThweDtcXG59XFxuXFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlIHtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgcmlnaHQ6IC02cHg7XFxuICBib3R0b206IC0xN3B4O1xcbn1cXG5cXG4ubm9VaS10eHQtZGlyLXJ0bC5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcXG4gIGxlZnQ6IC0xN3B4O1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcblxcbi8qIFN0eWxpbmc7XFxuICogR2l2aW5nIHRoZSBjb25uZWN0IGVsZW1lbnQgYSBib3JkZXIgcmFkaXVzIGNhdXNlcyBpc3N1ZXMgd2l0aCB1c2luZyB0cmFuc2Zvcm06IHNjYWxlXFxuICovXFxuLm5vVWktdGFyZ2V0IHtcXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDNEM0QzO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICNGMEYwRjAsIDAgM3B4IDZweCAtNXB4ICNCQkI7XFxufVxcblxcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm5vVWktY29ubmVjdCB7XFxuICBiYWNrZ3JvdW5kOiAjM0ZCOEFGO1xcbn1cXG5cXG4vKiBIYW5kbGVzIGFuZCBjdXJzb3JzO1xcbiAqL1xcbi5ub1VpLWRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG59XFxuXFxuLm5vVWktdmVydGljYWwgLm5vVWktZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG5cXG4ubm9VaS1oYW5kbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICNGRkYsIGluc2V0IDAgMXB4IDdweCAjRUJFQkVCLCAwIDNweCA2cHggLTNweCAjQkJCO1xcbn1cXG5cXG4ubm9VaS1hY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjRkZGLCBpbnNldCAwIDFweCA3cHggI0RERCwgMCAzcHggNnB4IC0zcHggI0JCQjtcXG59XFxuXFxuLyogSGFuZGxlIHN0cmlwZXM7XFxuICovXFxuLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTRweDtcXG4gIHdpZHRoOiAxcHg7XFxuICBiYWNrZ3JvdW5kOiAjRThFN0U2O1xcbiAgbGVmdDogMTRweDtcXG4gIHRvcDogNnB4O1xcbn1cXG5cXG4ubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgbGVmdDogMTdweDtcXG59XFxuXFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmJlZm9yZSxcXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGxlZnQ6IDZweDtcXG4gIHRvcDogMTRweDtcXG59XFxuXFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIHRvcDogMTdweDtcXG59XFxuXFxuLyogRGlzYWJsZWQgc3RhdGU7XFxuICovXFxuW2Rpc2FibGVkXSAubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICNCOEI4Qjg7XFxufVxcblxcbltkaXNhYmxlZF0ubm9VaS10YXJnZXQsXFxuW2Rpc2FibGVkXS5ub1VpLWhhbmRsZSxcXG5bZGlzYWJsZWRdIC5ub1VpLWhhbmRsZSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4vKiBCYXNlO1xcbiAqXFxuICovXFxuLm5vVWktcGlwcyxcXG4ubm9VaS1waXBzICoge1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm5vVWktcGlwcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuXFxuLyogVmFsdWVzO1xcbiAqXFxuICovXFxuLm5vVWktdmFsdWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5vVWktdmFsdWUtc3ViIHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4vKiBNYXJraW5ncztcXG4gKlxcbiAqL1xcbi5ub1VpLW1hcmtlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjQ0NDO1xcbn1cXG5cXG4ubm9VaS1tYXJrZXItc3ViIHtcXG4gIGJhY2tncm91bmQ6ICNBQUE7XFxufVxcblxcbi5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICBiYWNrZ3JvdW5kOiAjQUFBO1xcbn1cXG5cXG4vKiBIb3Jpem9udGFsIGxheW91dDtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMtaG9yaXpvbnRhbCB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcXG59XFxuXFxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLWhvcml6b250YWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxufVxcblxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogNXB4O1xcbn1cXG5cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlci1zdWIge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcbi8qIFZlcnRpY2FsIGxheW91dDtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMtdmVydGljYWwge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMTAwJTtcXG59XFxuXFxuLm5vVWktdmFsdWUtdmVydGljYWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtdmVydGljYWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcXG59XFxuXFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyIHtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxufVxcblxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1zdWIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlci1sYXJnZSB7XFxuICB3aWR0aDogMTVweDtcXG59XFxuXFxuLm5vVWktdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgbGVmdDogNTAlO1xcbiAgYm90dG9tOiAxMjAlO1xcbn1cXG5cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDEyMCU7XFxufVxcblxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luID4gLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDApO1xcbiAgbGVmdDogYXV0bztcXG4gIGJvdHRvbTogMTBweDtcXG59XFxuXFxuLm5vVWktdmVydGljYWwgLm5vVWktb3JpZ2luID4gLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xOHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xOHB4KTtcXG4gIHRvcDogYXV0bztcXG4gIHJpZ2h0OiAyOHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvbm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFBQTtBQUlBOztFQUVFLDJCQUFBO0VBQ0EsNkNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUFBOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBREE7RUFBQTtB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QUE7QUErQ0Y7O0FBN0NBO0VBQ0UsV0FBQTtBQWdERjs7QUE5Q0E7RUFDRSxXQUFBO0FBaURGOztBQS9DQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWtERjs7QUFoREE7RUFDRSxxQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFtREY7O0FBakRBO0VBQ0UscUNBQUE7RUFDQSw2QkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBb0RGOztBQWxEQTtFQUNFLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQXFERjs7QUFuREE7RUFDRSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFzREZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRnVuY3Rpb25hbCBzdHlsaW5nO1xcbiAqIFRoZXNlIHN0eWxlcyBhcmUgcmVxdWlyZWQgZm9yIG5vVWlTbGlkZXIgdG8gZnVuY3Rpb24uXFxuICogWW91IGRvbid0IG5lZWQgdG8gY2hhbmdlIHRoZXNlIHJ1bGVzIHRvIGFwcGx5IHlvdXIgZGVzaWduLlxcbiAqL1xcbi5ub1VpLXRhcmdldCxcXG4ubm9VaS10YXJnZXQgKiB7XFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5ub1VpLXRhcmdldCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5ub1VpLWJhc2UsXFxuLm5vVWktY29ubmVjdHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4vKiBXcmFwcGVyIGZvciBhbGwgY29ubmVjdCBlbGVtZW50cy5cXG4gKi9cXG4ubm9VaS1jb25uZWN0cyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogMDtcXG59XFxuLm5vVWktY29ubmVjdCxcXG4ubm9VaS1vcmlnaW4ge1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xcbn1cXG4vKiBPZmZzZXQgZGlyZWN0aW9uXFxuICovXFxuLm5vVWktdHh0LWRpci1ydGwubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcbi8qIEdpdmUgb3JpZ2lucyAwIGhlaWdodC93aWR0aCBzbyB0aGV5IGRvbid0IGludGVyZmVyZSB3aXRoIGNsaWNraW5nIHRoZVxcbiAqIGNvbm5lY3QgZWxlbWVudHMuXFxuICovXFxuLm5vVWktdmVydGljYWwgLm5vVWktb3JpZ2luIHtcXG4gIHRvcDogLTEwMCU7XFxuICB3aWR0aDogMDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4ge1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4ubm9VaS1oYW5kbGUge1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5ub1VpLXRvdWNoLWFyZWEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5ub1VpLXN0YXRlLXRhcCAubm9VaS1jb25uZWN0LFxcbi5ub1VpLXN0YXRlLXRhcCAubm9VaS1vcmlnaW4ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG4ubm9VaS1zdGF0ZS1kcmFnICoge1xcbiAgY3Vyc29yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XFxufVxcbi8qIFNsaWRlciBzaXplIGFuZCBoYW5kbGUgcGxhY2VtZW50O1xcbiAqL1xcbi5ub1VpLWhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XFxuICB3aWR0aDogMzRweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIHJpZ2h0OiAtMTdweDtcXG4gIHRvcDogLTZweDtcXG59XFxuLm5vVWktdmVydGljYWwge1xcbiAgd2lkdGg6IDE4cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZSB7XFxuICB3aWR0aDogMjhweDtcXG4gIGhlaWdodDogMzRweDtcXG4gIHJpZ2h0OiAtNnB4O1xcbiAgYm90dG9tOiAtMTdweDtcXG59XFxuLm5vVWktdHh0LWRpci1ydGwubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XFxuICBsZWZ0OiAtMTdweDtcXG4gIHJpZ2h0OiBhdXRvO1xcbn1cXG4vKiBTdHlsaW5nO1xcbiAqIEdpdmluZyB0aGUgY29ubmVjdCBlbGVtZW50IGEgYm9yZGVyIHJhZGl1cyBjYXVzZXMgaXNzdWVzIHdpdGggdXNpbmcgdHJhbnNmb3JtOiBzY2FsZVxcbiAqL1xcbi5ub1VpLXRhcmdldCB7XFxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0QzRDNEMztcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCAjRjBGMEYwLCAwIDNweCA2cHggLTVweCAjQkJCO1xcbn1cXG4ubm9VaS1jb25uZWN0cyB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5ub1VpLWNvbm5lY3Qge1xcbiAgYmFja2dyb3VuZDogIzNGQjhBRjtcXG59XFxuLyogSGFuZGxlcyBhbmQgY3Vyc29ycztcXG4gKi9cXG4ubm9VaS1kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IG5zLXJlc2l6ZTtcXG59XFxuLm5vVWktaGFuZGxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjRkZGO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjRkZGLCBpbnNldCAwIDFweCA3cHggI0VCRUJFQiwgMCAzcHggNnB4IC0zcHggI0JCQjtcXG59XFxuLm5vVWktYWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggI0ZGRiwgaW5zZXQgMCAxcHggN3B4ICNEREQsIDAgM3B4IDZweCAtM3B4ICNCQkI7XFxufVxcbi8qIEhhbmRsZSBzdHJpcGVzO1xcbiAqL1xcbi5ub1VpLWhhbmRsZTpiZWZvcmUsXFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICB3aWR0aDogMXB4O1xcbiAgYmFja2dyb3VuZDogI0U4RTdFNjtcXG4gIGxlZnQ6IDE0cHg7XFxuICB0b3A6IDZweDtcXG59XFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIGxlZnQ6IDE3cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTpiZWZvcmUsXFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBsZWZ0OiA2cHg7XFxuICB0b3A6IDE0cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTphZnRlciB7XFxuICB0b3A6IDE3cHg7XFxufVxcbi8qIERpc2FibGVkIHN0YXRlO1xcbiAqL1xcbltkaXNhYmxlZF0gLm5vVWktY29ubmVjdCB7XFxuICBiYWNrZ3JvdW5kOiAjQjhCOEI4O1xcbn1cXG5bZGlzYWJsZWRdLm5vVWktdGFyZ2V0LFxcbltkaXNhYmxlZF0ubm9VaS1oYW5kbGUsXFxuW2Rpc2FibGVkXSAubm9VaS1oYW5kbGUge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLyogQmFzZTtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMsXFxuLm5vVWktcGlwcyAqIHtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5ub1VpLXBpcHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICM5OTk7XFxufVxcbi8qIFZhbHVlcztcXG4gKlxcbiAqL1xcbi5ub1VpLXZhbHVlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ub1VpLXZhbHVlLXN1YiB7XFxuICBjb2xvcjogI2NjYztcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuLyogTWFya2luZ3M7XFxuICpcXG4gKi9cXG4ubm9VaS1tYXJrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI0NDQztcXG59XFxuLm5vVWktbWFya2VyLXN1YiB7XFxuICBiYWNrZ3JvdW5kOiAjQUFBO1xcbn1cXG4ubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgYmFja2dyb3VuZDogI0FBQTtcXG59XFxuLyogSG9yaXpvbnRhbCBsYXlvdXQ7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLWhvcml6b250YWwge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubm9VaS12YWx1ZS1ob3Jpem9udGFsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XFxufVxcbi5ub1VpLXJ0bCAubm9VaS12YWx1ZS1ob3Jpem9udGFsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbn1cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlciB7XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDVweDtcXG59XFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXItc3ViIHtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG4vKiBWZXJ0aWNhbCBsYXlvdXQ7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLXZlcnRpY2FsIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcbi5ub1VpLXZhbHVlLXZlcnRpY2FsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLXZlcnRpY2FsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlciB7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiAycHg7XFxuICBtYXJnaW4tdG9wOiAtMXB4O1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXItc3ViIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcbi5ub1VpLXRvb2x0aXAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJvdHRvbTogMTIwJTtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAxMjAlO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiA+IC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKTtcXG4gIGxlZnQ6IGF1dG87XFxuICBib3R0b206IDEwcHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLW9yaWdpbiA+IC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMThweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMThweCk7XFxuICB0b3A6IGF1dG87XFxuICByaWdodDogMjhweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdGFyX3dpdGhfZmlsbC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdGFyX3dpdGhvdXRfZmlsbC5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDYwMDs3MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6ICNkZmQ1YTU7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAzNzBweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggZ3JleTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2VvcmdpYVxcXCI7XFxufVxcbi5jYXJkOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCBncmV5O1xcbn1cXG4uY2FyZDpob3ZlciBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uY2FyZC1pbWFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuLmNhcmQtaW1hZ2UgLmRpc2NvdW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDEwcHggMHB4O1xcbiAgcGFkZGluZzogM3B4O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6ICM5OGNkOTg7XFxufVxcbi5jYXJkLWltYWdlIGltZyB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogOTclO1xcbiAgcGFkZGluZzogMTNweCAwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG4uY2FyZC1pbWFnZSAuc3RhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvMTAwJTtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvMTAwJTtcXG59XFxuLmNhcmQtaW1hZ2UgLnN0YXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4xcztcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvMTAwJTtcXG59XFxuLmNhcmQtYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5jYXJkLWJvZHkgLm5hbWUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXG59XFxuLmNhcmQtYm9keSAub24tY2FydCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZDogI2NmOTk1ZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcbi5jYXJkLWJvZHkgLm9uLWNhcnQuYWRkZWQge1xcbiAgYmFja2dyb3VuZDogI2JkMzIzMjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNhcmQtYm9keSAuaXRlbS1kZXNjcmlwdGlvbixcXG4uY2FyZC1ib2R5IC5pdGVtLWxvY2F0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXJkcy9jYXJkLnNhc3NcIixcIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJDSGU7RURJZixVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQ0RXO0FERWY7QUFBSTtFQUNJLDZCQUFBO0FBRVI7QUFEUTtFQUNJLFlBQUE7QUFHWjtBQURJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUdSO0FBRlE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0FBSVo7QUFIUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUtaO0FBSlE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnRkFBQTtFQUNBLGdGQUFBO0FBTVo7QUFMWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdGQUFBO0FBT2hCO0FBTkk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBUVI7QUFQUTtFQUNJLHlCQzlDQztBRHVEYjtBQVJRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkN6REo7RUQwREksZUFBQTtFQUNBLGdCQUFBO0FBVVo7QUFUUTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQVdaO0FBVlE7O0VBRUksZUFBQTtBQVlaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcy5zYXNzJ1xcclxcbi5jYXJkXFxyXFxuICAgIGRpc3BsYXk6IGZsZXhcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4XFxyXFxuICAgIGJhY2tncm91bmQ6ICRtZWRpdW0tY2hhbXBhZ25lXFxyXFxuICAgIHdpZHRoOiA4MCVcXHJcXG4gICAgaGVpZ2h0OiAzNzBweFxcclxcbiAgICBtYXJnaW46IDEwcHhcXHJcXG4gICAgY29sb3I6IGJsYWNrXFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW5cXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IGdyZXlcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRtYWluQ2FyZEZvbnRcXHJcXG4gICAgJjpob3ZlclxcclxcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IGdyZXlcXHJcXG4gICAgICAgIGltZ1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJVxcclxcbiAgICBcXHJcXG4gICAgJi1pbWFnZVxcclxcbiAgICAgICAgZGlzcGxheTogZmxleFxcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHhcXHJcXG4gICAgICAgIGhlaWdodDogMjAwcHhcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlXFxyXFxuICAgICAgICAuZGlzY291bnRcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAxMHB4IDBweFxcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweFxcclxcbiAgICAgICAgICAgIHRvcDogMFxcclxcbiAgICAgICAgICAgIGxlZnQ6IDBcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOThjZDk4XFxyXFxuICAgICAgICBpbWdcXHJcXG4gICAgICAgICAgICB3aWR0aDogYXV0b1xcclxcbiAgICAgICAgICAgIGhlaWdodDogOTclXFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMTNweCAwcHhcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMnNcXHJcXG4gICAgICAgIC5zdGFyXFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXFxyXFxuICAgICAgICAgICAgdG9wOiAwcHhcXHJcXG4gICAgICAgICAgICByaWdodDogMHB4XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDQwcHhcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHhcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3Rhcl93aXRoX2ZpbGwucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvMTAwJVxcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdGFyX3dpdGhvdXRfZmlsbC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci8xMDAlXFxyXFxuICAgICAgICAgICAgJjpob3ZlclxcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjFzXFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdGFyX3dpdGhfZmlsbC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci8xMDAlXFxyXFxuICAgICYtYm9keVxcclxcbiAgICAgICAgZGlzcGxheTogZmxleFxcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcclxcbiAgICAgICAgcGFkZGluZzogMTBweFxcclxcbiAgICAgICAgLm5hbWVcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnRPZk5hbWVcXHJcXG4gICAgICAgIC5vbi1jYXJ0XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweFxcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweFxcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweFxcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjYW1lbFxcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC4yc1xcclxcbiAgICAgICAgLm9uLWNhcnQuYWRkZWRcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmQzMjMyXFxyXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlXFxyXFxuICAgICAgICAuaXRlbS1kZXNjcmlwdGlvbixcXHJcXG4gICAgICAgIC5pdGVtLWxvY2F0aW9uXFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4XCIsXCIkc2xhdGUtZ3JheTogIzI3MzMzYVxcclxcbiRtaWRkbGUtZ3JleTogIzk2ODk3YmZmXFxyXFxuJG1lZGl1bS1jaGFtcGFnbmU6ICNkZmQ1YTVmZlxcclxcbiRlYXJ0aC15ZWxsb3c6ICNkYmFkNmFmZlxcclxcbiRjYW1lbDogI2NmOTk1ZmZmXFxyXFxuJHNlYXJjaEZvY3VzOiAjMWExYTFhXFxyXFxuXFxyXFxuJG1heDogMTIyMHB4XFxyXFxuJG1pbjogOTgwcHhcXHJcXG5cXHJcXG4kZm9udE9mTmFtZTogJ01vbnRzZXJyYXQnXFxyXFxuJG1haW5DYXJkRm9udDogJ0dlb3JnaWEnXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRANjAwOzcwMCZmYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpXFxyXFxuJGZpbHRlck5hbWVzOiAnUm9ib3RvJywgc2Fucy1zZXJpZlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJ0LWNvdW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHJpZ2h0OiAyMCU7XFxuICBib3R0b206IDIwJTtcXG4gIGJhY2tncm91bmQ6ICNiZDMyMzI7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NhcnQvY2FydC5zYXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbi5jYXJ0LWNvdW50XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxcclxcbiAgICBkaXNwbGF5OiBmbGV4XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXHJcXG4gICAgd2lkdGg6IDI0cHhcXHJcXG4gICAgaGVpZ2h0OiAyNHB4XFxyXFxuICAgIHJpZ2h0OiAyMCVcXHJcXG4gICAgYm90dG9tOiAyMCVcXHJcXG4gICAgYmFja2dyb3VuZDogI2JkMzIzMlxcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweFxcclxcbiAgICBmb250LXNpemU6IDEycHhcXHJcXG4gICAgY29sb3I6IHdoaXRlXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRANjAwOzcwMCZmYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ub1VpLWhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XFxuICB0b3A6IC0xMXB4O1xcbn1cXG5cXG4ubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICNjZjk5NWY7XFxufVxcblxcbi5ub1VpLXRhcmdldCB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLm5vVWktaGFuZGxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNsaWRlci1yYW5nZSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uc2xpZGVyLWhlYWQge1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnZhbHVlcy1ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4udmFsdWVzLWJveCAudmFsdWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogN3B4IDBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmOTk1ZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjY2Y5OTVmO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3ZpZXcvZmlsdGVyL2ZpbHRlci1yYW5nZS9maWx0ZXItcmFuZ2UtZGF0ZS5zYXNzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxZQUFBO0FBQ0o7O0FBQUE7RUFDSSxVQUFBO0FBR0o7O0FBRkE7RUFDSSxtQkNGSTtBRE9SOztBQUpBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBT0o7O0FBTkE7RUFDSSxlQUFBO0FBU0o7O0FBUkE7RUFDSSxnQkFBQTtBQVdKOztBQVZBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFhSjs7QUFaQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQWVKO0FBZEk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0M1QkE7RUQ2QkEsaUJBQUE7QUFnQlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNhc3MnXFxyXFxuLm5vVWktaG9yaXpvbnRhbFxcclxcbiAgICBoZWlnaHQ6IDEwcHhcXHJcXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZVxcclxcbiAgICB0b3A6IC0xMXB4XFxyXFxuLm5vVWktY29ubmVjdFxcclxcbiAgICBiYWNrZ3JvdW5kOiAkY2FtZWxcXHJcXG4ubm9VaS10YXJnZXRcXHJcXG4gICAgd2lkdGg6IDgwJVxcclxcbiAgICBtYXJnaW46IDAgYXV0b1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHhcXHJcXG4ubm9VaS1oYW5kbGVcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyXFxyXFxuLnNsaWRlci1yYW5nZVxcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4XFxyXFxuLnNsaWRlci1oZWFkXFxyXFxuICAgIHBhZGRpbmctbGVmdDogMzBweFxcclxcbiAgICBmb250LXNpemU6IDIwcHhcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweFxcclxcbi52YWx1ZXMtYm94XFxyXFxuICAgIGRpc3BsYXk6IGZsZXhcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcXHJcXG4gICAgLnZhbHVlXFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxcclxcbiAgICAgICAgcGFkZGluZzogN3B4IDBweFxcclxcbiAgICAgICAgd2lkdGg6IDgwcHhcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjYW1lbFxcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnXFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZFxcclxcbiAgICAgICAgY29sb3I6ICRjYW1lbFxcclxcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmUgXCIsXCIkc2xhdGUtZ3JheTogIzI3MzMzYVxcclxcbiRtaWRkbGUtZ3JleTogIzk2ODk3YmZmXFxyXFxuJG1lZGl1bS1jaGFtcGFnbmU6ICNkZmQ1YTVmZlxcclxcbiRlYXJ0aC15ZWxsb3c6ICNkYmFkNmFmZlxcclxcbiRjYW1lbDogI2NmOTk1ZmZmXFxyXFxuJHNlYXJjaEZvY3VzOiAjMWExYTFhXFxyXFxuXFxyXFxuJG1heDogMTIyMHB4XFxyXFxuJG1pbjogOTgwcHhcXHJcXG5cXHJcXG4kZm9udE9mTmFtZTogJ01vbnRzZXJyYXQnXFxyXFxuJG1haW5DYXJkRm9udDogJ0dlb3JnaWEnXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRANjAwOzcwMCZmYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpXFxyXFxuJGZpbHRlck5hbWVzOiAnUm9ib3RvJywgc2Fucy1zZXJpZlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDYwMDs3MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZmlsdGVyLWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmZpbHRlci1hcmVhIC5maWx0ZXItaGVhZCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5maWx0ZXItYXJlYSAuZmlsdGVyLWJveCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uZmlsdGVyLWFyZWEgLmZpbHRlci1ib3gtbmFtZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uZmlsdGVyLWFyZWEgLmZpbHRlci1ib3gtbGlzdCAuZmlsdGVyLWJveC1pdGVtIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLmZpbHRlci1hcmVhIC5maWx0ZXItYm94LWxpc3QgLmZpbHRlci1ib3gtaXRlbSBpbnB1dCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3ZpZXcvZmlsdGVyL2ZpbHRlci5zYXNzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQURJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBR1I7QUFGUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUlaO0FBRlk7RUFDSSxlQUFBO0VBQ0EsaUNDUkY7QURZZDtBQUhnQjtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUtwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMuc2FzcydcXHJcXG4uZmlsdGVyLWFyZWFcXHJcXG4gICAgZGlzcGxheTogZmxleFxcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxcclxcbiAgICAuZmlsdGVyLWhlYWRcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlclxcclxcbiAgICAgICAgZm9udC1zaXplOiAyNnB4XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZFxcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweFxcclxcbiAgICAuZmlsdGVyLWJveFxcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweFxcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHhcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHhcXHJcXG4gICAgICAgICYtbmFtZVxcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweFxcclxcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHhcXHJcXG4gICAgICAgICYtbGlzdFxcclxcbiAgICAgICAgICAgIC5maWx0ZXItYm94LWl0ZW1cXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZmlsdGVyTmFtZXNcXHJcXG4gICAgICAgICAgICAgICAgaW5wdXRcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweFxcclxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXCIsXCIkc2xhdGUtZ3JheTogIzI3MzMzYVxcclxcbiRtaWRkbGUtZ3JleTogIzk2ODk3YmZmXFxyXFxuJG1lZGl1bS1jaGFtcGFnbmU6ICNkZmQ1YTVmZlxcclxcbiRlYXJ0aC15ZWxsb3c6ICNkYmFkNmFmZlxcclxcbiRjYW1lbDogI2NmOTk1ZmZmXFxyXFxuJHNlYXJjaEZvY3VzOiAjMWExYTFhXFxyXFxuXFxyXFxuJG1heDogMTIyMHB4XFxyXFxuJG1pbjogOTgwcHhcXHJcXG5cXHJcXG4kZm9udE9mTmFtZTogJ01vbnRzZXJyYXQnXFxyXFxuJG1haW5DYXJkRm9udDogJ0dlb3JnaWEnXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRANjAwOzcwMCZmYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpXFxyXFxuJGZpbHRlck5hbWVzOiAnUm9ib3RvJywgc2Fucy1zZXJpZlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDYwMDs3MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2VhcmNoLWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tcmlnaHQ6IDIycHg7XFxufVxcbi5zZWFyY2gtYXJlYSAuc2VhcmNoLWlucHV0IHtcXG4gIHdpZHRoOiAxMyU7XFxuICBwYWRkaW5nOiAxNXB4IDQwcHggMTVweCAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IGdyZXk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLnNlYXJjaC1hcmVhIC5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xcbiAgd2lkdGg6IDYwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggIzFhMWExYTtcXG59XFxuLnNlYXJjaC1hcmVhIC5zZWFyY2gtaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMTRweDtcXG4gIHRvcDogMTJweDtcXG4gIHJpZ2h0OiAxMnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4xNXM7XFxufVxcbi5zZWFyY2gtYXJlYSAuc2VhcmNoLWljb246Zm9jdXMgKyAuc2VhcmNoLWlucHV0IHtcXG4gIHdpZHRoOiA2MCU7XFxufVxcbi5zZWFyY2gtYXJlYSAuc2VhcmNoLWljb246OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQ6IGdyZXk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVooLTYwZGVnKTtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiA4cHg7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcbi5zZWFyY2gtYXJlYSAuc2VhcmNoLWljb246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAwcHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQ6IGdyZXk7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogOXB4O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG4uc2VhcmNoLWFyZWEgLnNlYXJjaC1pY29uLmNsb3NlIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgdG9wOiAxMnB4O1xcbiAgcmlnaHQ6IDEycHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2VhcmNoLWFyZWEgLnNlYXJjaC1pY29uLmNsb3NlOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiBncmV5O1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKSByb3RhdGVaKC00NWRlZyk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxufVxcbi5zZWFyY2gtYXJlYSAuc2VhcmNoLWljb24uY2xvc2U6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiBncmV5O1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKSByb3RhdGVaKDQ1ZGVnKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zZWFyY2gvc2VhcmNoLWFyZWEuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksVUFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUVSO0FBRFE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBR1o7QUFGSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUlSO0FBSFE7RUFDSSxVQUFBO0FBS1o7QUFKUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQU1aO0FBTFE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBT1o7QUFOUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFRWjtBQVBZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsK0NBQUE7RUFDQSx3QkFBQTtBQVNoQjtBQVJZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsOENBQUE7RUFDQSx3QkFBQTtBQVVoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMuc2FzcydcXHJcXG4uc2VhcmNoLWFyZWFcXHJcXG4gICAgZGlzcGxheTogZmxleFxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kIFxcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4XFxyXFxuICAgIHdpZHRoOiAxMDAlXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAgICBcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMnB4ICBcXHJcXG4gICAgLnNlYXJjaC1pbnB1dFxcclxcbiAgICAgICAgd2lkdGg6IDEzJVxcclxcbiAgICAgICAgcGFkZGluZzogMTVweCA0MHB4IDE1cHggMTBweCBcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCBncmV5XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmVcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IC4zc1xcclxcbiAgICAgICAgJjpmb2N1c1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA2MCVcXHJcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lXFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICRzZWFyY2hGb2N1c1xcclxcbiAgICAuc2VhcmNoLWljb25cXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSBcXHJcXG4gICAgICAgIHdpZHRoOiAxNHB4XFxyXFxuICAgICAgICBoZWlnaHQ6IDE0cHhcXHJcXG4gICAgICAgIHRvcDogMTJweFxcclxcbiAgICAgICAgcmlnaHQ6IDEycHhcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXkgXFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweFxcclxcbiAgICAgICAgdHJhbnNpdGlvbjogLjE1c1xcclxcbiAgICAgICAgJjpmb2N1cyArIC5zZWFyY2gtaW5wdXRcXHJcXG4gICAgICAgICAgICB3aWR0aDogNjAlICAgIFxcclxcbiAgICAgICAgJjo6YWZ0ZXIgXFxyXFxuICAgICAgICAgICAgY29udGVudDogJydcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTJweFxcclxcbiAgICAgICAgICAgIGhlaWdodDogMnB4XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JleVxcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNjBkZWcpIFxcclxcbiAgICAgICAgICAgIHRvcDogMTBweFxcclxcbiAgICAgICAgICAgIHJpZ2h0OiA4cHhcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodFxcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC4ycyAgICAgICAgXFxyXFxuICAgICAgICAmOjpiZWZvcmVcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJ1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxcclxcbiAgICAgICAgICAgIHdpZHRoOiAwcHhcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDJweFxcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGdyZXlcXHJcXG4gICAgICAgICAgICB0b3A6IDEwcHhcXHJcXG4gICAgICAgICAgICByaWdodDogOXB4XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHRcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMnNcXHJcXG4gICAgICAgICYuY2xvc2UgXFxyXFxuICAgICAgICAgICAgd2lkdGg6IDI0cHhcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHhcXHJcXG4gICAgICAgICAgICB0b3A6IDEycHhcXHJcXG4gICAgICAgICAgICByaWdodDogMTJweFxcclxcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXkgXFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyICAgICAgICBcXHJcXG4gICAgICAgICAgICAmOjphZnRlciAgXFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnXFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJweFxcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweFxcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmV5XFxyXFxuICAgICAgICAgICAgICAgIHRvcDogNTAlXFxyXFxuICAgICAgICAgICAgICAgIHJpZ2h0OiA1MCVcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKSByb3RhdGVaKC00NWRlZylcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyXFxyXFxuICAgICAgICAgICAgJjo6YmVmb3JlXFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnXFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJweFxcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweFxcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmV5XFxyXFxuICAgICAgICAgICAgICAgIHRvcDogNTAlXFxyXFxuICAgICAgICAgICAgICAgIHJpZ2h0OiA1MCVcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKSByb3RhdGVaKDQ1ZGVnKVxcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXJcXHJcXG4gICAgICAgIFxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDYwMDs3MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc29ydC1hcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zb3J0LWFyZWEgLnNvcnQtc2VsZWN0IHtcXG4gIHdpZHRoOiA1NyU7XFxuICBwYWRkaW5nOiAxM3B4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzk2ODk3YjtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcbi5zb3J0LWFyZWEgLnNvcnQtc2VsZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmQ1YTU7XFxufVxcbi5zb3J0LWFyZWEgLnNvcnQtYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEzcHggNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzk2ODk3YjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogMzclO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuLnNvcnQtYXJlYSAuc29ydC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZDVhNTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zb3J0L3NvcnQtYXJlYS5zYXNzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUFJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBRVI7QUFEUTtFQUNJLHlCQ2JPO0FEZ0JuQjtBQUZJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUlSO0FBSFE7RUFDSSx5QkN0Qk87QUQyQm5CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcy5zYXNzJ1xcclxcbi5zb3J0LWFyZWFcXHJcXG4gICAgZGlzcGxheTogZmxleFxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cXHJcXG4gICAgLnNvcnQtc2VsZWN0XFxyXFxuICAgICAgICB3aWR0aDogNTclXFxyXFxuICAgICAgICBwYWRkaW5nOiAxM3B4IDE1cHhcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0XFxyXFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQgICAgXFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmVcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRtaWRkbGUtZ3JleVxcclxcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzXFxyXFxuICAgICAgICAmOmhvdmVyXFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1lZGl1bS1jaGFtcGFnbmVcXHJcXG4gICAgLnNvcnQtYnV0dG9uXFxyXFxuICAgICAgICBwYWRkaW5nOiAxM3B4IDVweFxcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbWlkZGxlLWdyZXlcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcXHJcXG4gICAgICAgIHdpZHRoOiAzNyVcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IC4yc1xcclxcbiAgICAgICAgJjpob3ZlclxcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtZWRpdW0tY2hhbXBhZ25lXFxyXFxuXCIsXCIkc2xhdGUtZ3JheTogIzI3MzMzYVxcclxcbiRtaWRkbGUtZ3JleTogIzk2ODk3YmZmXFxyXFxuJG1lZGl1bS1jaGFtcGFnbmU6ICNkZmQ1YTVmZlxcclxcbiRlYXJ0aC15ZWxsb3c6ICNkYmFkNmFmZlxcclxcbiRjYW1lbDogI2NmOTk1ZmZmXFxyXFxuJHNlYXJjaEZvY3VzOiAjMWExYTFhXFxyXFxuXFxyXFxuJG1heDogMTIyMHB4XFxyXFxuJG1pbjogOTgwcHhcXHJcXG5cXHJcXG4kZm9udE9mTmFtZTogJ01vbnRzZXJyYXQnXFxyXFxuJG1haW5DYXJkRm9udDogJ0dlb3JnaWEnXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRANjAwOzcwMCZmYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpXFxyXFxuJGZpbHRlck5hbWVzOiAnUm9ib3RvJywgc2Fucy1zZXJpZlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9jYXJ0Mi5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2dpdGh1Yi5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3JzX3NjaG9vbF9qcy5zdmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDYwMDs3MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIyMHB4KSB7XFxuICAud3JhcHBlciB7XFxuICAgIHdpZHRoOiA5NjBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMjBweCkgYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XFxuICAud3JhcHBlciB7XFxuICAgIHdpZHRoOiA3NDBweDtcXG4gIH1cXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiAjY2Y5OTVmO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmhlYWRlciAuY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmhlYWRlciAuY29udGVudCAubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmhlYWRlciAuY29udGVudCAubG9nby1saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjMjczMzNhO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LWZhbWlseTogXFxcIkltcGFjdFxcXCI7XFxufVxcbi5oZWFkZXIgLmNvbnRlbnQgLmxvZ28tc3RvcmUge1xcbiAgY29sb3I6ICMyNzMzM2E7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5oZWFkZXIgLmNvbnRlbnQgLmNhcnQge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyLzgwJTtcXG59XFxuXFxuLm1haW4gLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5tYWluIC5jb250ZW50IC5zb3J0LWFyZWEge1xcbiAgd2lkdGg6IDM1JTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XFxuICAubWFpbiAuY29udGVudCAuc29ydC1hcmVhIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG59XFxuLm1haW4gLmNvbnRlbnQgLnNlYXJjaC1hcmVhIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcXG4gIC5tYWluIC5jb250ZW50IC5zZWFyY2gtYXJlYSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gIH1cXG59XFxuLm1haW4gLmNvbnRlbnQgLmZpbHRlci1hcmVhIHtcXG4gIHdpZHRoOiAyMCU7XFxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIyMHB4KSB7XFxuICAubWFpbiAuY29udGVudCAuZmlsdGVyLWFyZWEge1xcbiAgICB3aWR0aDogMjUlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIyMHB4KSBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcXG4gIC5tYWluIC5jb250ZW50IC5maWx0ZXItYXJlYSB7XFxuICAgIHdpZHRoOiAzNSU7XFxuICB9XFxufVxcbi5tYWluIC5jb250ZW50IC5maWx0ZXItYXJlYSAuYnV0dG9ucy1yZXNldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5tYWluIC5jb250ZW50IC5maWx0ZXItYXJlYSAuYnV0dG9ucy1yZXNldCAuYnV0dG9uLXJlc2V0IHtcXG4gIG1hcmdpbjogMTBweCA1cHggMHB4IDVweDtcXG4gIHBhZGRpbmc6IDRweCAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcbi5tYWluIC5jb250ZW50IC5maWx0ZXItYXJlYSAuYnV0dG9ucy1yZXNldCAuYnV0dG9uLXJlc2V0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmQ1YTU7XFxufVxcbi5tYWluIC5jb250ZW50IC5jYXJkLWxpc3Qge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjIwcHgpIHtcXG4gIC5tYWluIC5jb250ZW50IC5jYXJkLWxpc3Qge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIyMHB4KSBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcXG4gIC5tYWluIC5jb250ZW50IC5jYXJkLWxpc3Qge1xcbiAgICB3aWR0aDogNjUlO1xcbiAgfVxcbn1cXG4ubWFpbiAuY29udGVudCAuY2FyZC1saXN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAyNSU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMjBweCkge1xcbiAgLm1haW4gLmNvbnRlbnQgLmNhcmQtbGlzdC1pdGVtIHtcXG4gICAgd2lkdGg6IDMzJTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XFxuICAubWFpbiAuY29udGVudCAuY2FyZC1saXN0LWl0ZW0ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbn1cXG4ubWFpbiAuY29udGVudCAuY2FyZC1saXN0IC5uby1jYXJkcyB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgYmFja2dyb3VuZDogI2NmOTk1ZjtcXG59XFxuLmZvb3RlciAuY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBtaW4taGVpZ2h0OiAxNDBweDtcXG59XFxuLmZvb3RlciAuY29udGVudCAuZ2l0aHViIGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiA5MHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci81MCU7XFxufVxcbi5mb290ZXIgLmNvbnRlbnQgLlJTLWxvZ28gYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBuby1yZXBlYXQgdG9wIDMwJSBjZW50ZXIvNzAlO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2dsb2JhbC5zYXNzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBR0o7QUFGSTtFQUhKO0lBSVEsWUFBQTtFQUtOO0FBQ0Y7QUFMUTtFQUxSO0lBTVksWUFBQTtFQVFWO0FBQ0Y7O0FBUkE7RUFDSSxtQkNqQkk7RURrQkosbUJBQUE7QUFXSjtBQVZJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQVlSO0FBWFE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQWFaO0FBWlk7RUFDSSxxQkFBQTtFQUNBLGNDakNIO0VEa0NHLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBY2hCO0FBYlk7RUFDSSxjQ3RDSDtFRHVDRyxlQUFBO0FBZWhCO0FBZFE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLCtFQUFBO0FBZ0JaOztBQWJJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQWdCUjtBQWZRO0VBQ0ksVUFBQTtBQWlCWjtBQWhCWTtFQUZKO0lBR1EsVUFBQTtFQW1CZDtBQUNGO0FBbkJRO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FBcUJaO0FBcEJZO0VBSEo7SUFJUSxVQUFBO0lBQ0EsZUFBQTtFQXVCZDtBQUNGO0FBdkJRO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FBeUJaO0FBeEJZO0VBSEo7SUFJUSxVQUFBO0VBMkJkO0FBQ0Y7QUEzQmdCO0VBTFI7SUFNWSxVQUFBO0VBOEJsQjtBQUNGO0FBOUJZO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FBZ0NoQjtBQS9CZ0I7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWlDcEI7QUFoQ29CO0VBQ0kseUJDaEZMO0FEa0huQjtBQWpDUTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQW1DWjtBQWxDWTtFQUpKO0lBS1EsVUFBQTtFQXFDZDtBQUNGO0FBckNnQjtFQU5SO0lBT1ksVUFBQTtFQXdDbEI7QUFDRjtBQXhDWTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUEwQ2hCO0FBekNnQjtFQUpKO0lBS1EsVUFBQTtFQTRDbEI7QUFDRjtBQTVDZ0I7RUFOSjtJQU9RLFVBQUE7RUErQ2xCO0FBQ0Y7QUEvQ1k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFpRGhCOztBQS9DQTtFQUNJLG1CQ3BHSTtBRHNKUjtBQWpESTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQW1EUjtBQWpEWTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwrRUFBQTtBQW1EaEI7QUFqRFk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnRkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQW1EaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi92YXJpYWJsZXMuc2FzcydcXHJcXG4qXFxyXFxuICAgIHBhZGRpbmc6IDBcXHJcXG4gICAgbWFyZ2luOiAwXFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZVxcclxcblxcclxcbmJ1dHRvblxcclxcbiAgICBib3JkZXI6IG5vbmVcXHJcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdFxcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdFxcclxcbiAgICBmb250LXNpemU6IGluaGVyaXRcXHJcXG5cXHJcXG4ud3JhcHBlclxcclxcbiAgICB3aWR0aDogMTIwMHB4XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvXFxyXFxuICAgIEBtZWRpYSAoIG1heC13aWR0aDogJG1heCApXFxyXFxuICAgICAgICB3aWR0aDogOTYwcHggICAgICAgIFxcclxcbiAgICAgICAgQG1lZGlhICggbWF4LXdpZHRoOiAkbWluIClcXHJcXG4gICAgICAgICAgICB3aWR0aDogNzQwcHhcXHJcXG4uaGVhZGVyXFxyXFxuICAgIGJhY2tncm91bmQ6ICRjYW1lbFxcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4XFxyXFxuICAgIC5jb250ZW50XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMHB4XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gICAgICAgIFxcclxcbiAgICAgICAgLmxvZ29cXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxyXFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyXFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcclxcbiAgICAgICAgICAgICYtbGlua1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRzbGF0ZS1ncmF5XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweFxcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZFxcclxcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0ltcGFjdCdcXHJcXG4gICAgICAgICAgICAmLXN0b3JlICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogJHNsYXRlLWdyYXlcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4XFxyXFxuICAgICAgICAuY2FydFxcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweFxcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHhcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuL2Fzc2V0cy9pbWFnZXMvY2FydDIucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvODAlXFxyXFxuXFxyXFxuLm1haW4gIFxcclxcbiAgICAuY29udGVudFxcclxcbiAgICAgICAgd2lkdGg6IDEwMCVcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXBcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxcclxcbiAgICAgICAgLnNvcnQtYXJlYVxcclxcbiAgICAgICAgICAgIHdpZHRoOiAzNSVcXHJcXG4gICAgICAgICAgICBAbWVkaWEgKCBtYXgtd2lkdGg6ICRtaW4gKVxcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlXFxyXFxuICAgICAgICAuc2VhcmNoLWFyZWFcXHJcXG4gICAgICAgICAgICB3aWR0aDogNjAlXFxyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweFxcclxcbiAgICAgICAgICAgIEBtZWRpYSAoIG1heC13aWR0aDogJG1pbiApXFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCVcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwXFxyXFxuICAgICAgICAuZmlsdGVyLWFyZWFcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjAlXFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ViZWJlYlxcclxcbiAgICAgICAgICAgIEBtZWRpYSAoIG1heC13aWR0aDogJG1heCApXFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNSVcXHJcXG4gICAgICAgICAgICAgICAgQG1lZGlhICggbWF4LXdpZHRoOiAkbWluIClcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNSVcXHJcXG4gICAgICAgICAgICAuYnV0dG9ucy1yZXNldFxcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAuYnV0dG9uLXJlc2V0XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggNXB4IDBweCA1cHhcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAwcHhcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXlcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcXHJcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxcclxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjJzXFxyXFxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1lZGl1bS1jaGFtcGFnbmVcXHJcXG4gICAgICAgIC5jYXJkLWxpc3RcXHJcXG4gICAgICAgICAgICB3aWR0aDogODAlXFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleFxcclxcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcCBcXHJcXG4gICAgICAgICAgICBAbWVkaWEgKCBtYXgtd2lkdGg6ICRtYXggKVxcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogNzUlXFxyXFxuICAgICAgICAgICAgICAgIEBtZWRpYSAoIG1heC13aWR0aDogJG1pbiApXFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjUlIFxcclxcbiAgICAgICAgICAgICYtaXRlbVxcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNSVcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcXHJcXG4gICAgICAgICAgICAgICAgQG1lZGlhICggbWF4LXdpZHRoOiAkbWF4IClcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMyVcXHJcXG4gICAgICAgICAgICAgICAgQG1lZGlhICggbWF4LXdpZHRoOiAkbWluIClcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCUgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAubm8tY2FyZHNcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggNTBweFxcclxcblxcclxcbi5mb290ZXJcXHJcXG4gICAgYmFja2dyb3VuZDogJGNhbWVsICAgIFxcclxcbiAgICAuY29udGVudFxcclxcbiAgICAgICAgZGlzcGxheTogZmxleFxcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiAxNDBweFxcclxcbiAgICAgICAgLmdpdGh1YlxcclxcbiAgICAgICAgICAgIGFcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweFxcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHhcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuL2Fzc2V0cy9pbWFnZXMvZ2l0aHViLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyLzUwJVxcclxcbiAgICAgICAgLlJTLWxvZ29cXHJcXG4gICAgICAgICAgICBhXFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogODBweFxcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXRzL2ltYWdlcy9yc19zY2hvb2xfanMuc3ZnJykgbm8tcmVwZWF0IHRvcCAzMCUgY2VudGVyLzcwJVxcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmRcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrXFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDBcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweFxcclxcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnXCIsXCIkc2xhdGUtZ3JheTogIzI3MzMzYVxcclxcbiRtaWRkbGUtZ3JleTogIzk2ODk3YmZmXFxyXFxuJG1lZGl1bS1jaGFtcGFnbmU6ICNkZmQ1YTVmZlxcclxcbiRlYXJ0aC15ZWxsb3c6ICNkYmFkNmFmZlxcclxcbiRjYW1lbDogI2NmOTk1ZmZmXFxyXFxuJHNlYXJjaEZvY3VzOiAjMWExYTFhXFxyXFxuXFxyXFxuJG1heDogMTIyMHB4XFxyXFxuJG1pbjogOTgwcHhcXHJcXG5cXHJcXG4kZm9udE9mTmFtZTogJ01vbnRzZXJyYXQnXFxyXFxuJG1haW5DYXJkRm9udDogJ0dlb3JnaWEnXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRANjAwOzcwMCZmYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpXFxyXFxuJGZpbHRlck5hbWVzOiAnUm9ib3RvJywgc2Fucy1zZXJpZlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG4gICAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwubm9VaVNsaWRlciA9IHt9KSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgZXhwb3J0cy5QaXBzTW9kZSA9IHZvaWQgMDtcbiAgICAoZnVuY3Rpb24gKFBpcHNNb2RlKSB7XG4gICAgICAgIFBpcHNNb2RlW1wiUmFuZ2VcIl0gPSBcInJhbmdlXCI7XG4gICAgICAgIFBpcHNNb2RlW1wiU3RlcHNcIl0gPSBcInN0ZXBzXCI7XG4gICAgICAgIFBpcHNNb2RlW1wiUG9zaXRpb25zXCJdID0gXCJwb3NpdGlvbnNcIjtcbiAgICAgICAgUGlwc01vZGVbXCJDb3VudFwiXSA9IFwiY291bnRcIjtcbiAgICAgICAgUGlwc01vZGVbXCJWYWx1ZXNcIl0gPSBcInZhbHVlc1wiO1xuICAgIH0pKGV4cG9ydHMuUGlwc01vZGUgfHwgKGV4cG9ydHMuUGlwc01vZGUgPSB7fSkpO1xuICAgIGV4cG9ydHMuUGlwc1R5cGUgPSB2b2lkIDA7XG4gICAgKGZ1bmN0aW9uIChQaXBzVHlwZSkge1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIk5vbmVcIl0gPSAtMV0gPSBcIk5vbmVcIjtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJOb1ZhbHVlXCJdID0gMF0gPSBcIk5vVmFsdWVcIjtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJMYXJnZVZhbHVlXCJdID0gMV0gPSBcIkxhcmdlVmFsdWVcIjtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJTbWFsbFZhbHVlXCJdID0gMl0gPSBcIlNtYWxsVmFsdWVcIjtcbiAgICB9KShleHBvcnRzLlBpcHNUeXBlIHx8IChleHBvcnRzLlBpcHNUeXBlID0ge30pKTtcbiAgICAvL3JlZ2lvbiBIZWxwZXIgTWV0aG9kc1xuICAgIGZ1bmN0aW9uIGlzVmFsaWRGb3JtYXR0ZXIoZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSAmJiB0eXBlb2YgZW50cnkuZnJvbSA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkge1xuICAgICAgICAvLyBwYXJ0aWFsIGZvcm1hdHRlcnMgb25seSBuZWVkIGEgdG8gZnVuY3Rpb24gYW5kIG5vdCBhIGZyb20gZnVuY3Rpb25cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBlbnRyeSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZW50cnkudG8gPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbCkge1xuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNTZXQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIEJpbmRhYmxlIHZlcnNpb25cbiAgICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgLy8gUmVtb3ZlcyBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXkuXG4gICAgZnVuY3Rpb24gdW5pcXVlKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpc1thXSA/ICh0aGlzW2FdID0gdHJ1ZSkgOiBmYWxzZTtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICAvLyBSb3VuZCBhIHZhbHVlIHRvIHRoZSBjbG9zZXN0ICd0bycuXG4gICAgZnVuY3Rpb24gY2xvc2VzdCh2YWx1ZSwgdG8pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgLyB0bykgKiB0bztcbiAgICB9XG4gICAgLy8gQ3VycmVudCBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIHRoZSBkb2N1bWVudC5cbiAgICBmdW5jdGlvbiBvZmZzZXQoZWxlbSwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgdmFyIHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xuICAgICAgICB2YXIgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHZhciBwYWdlT2Zmc2V0ID0gZ2V0UGFnZU9mZnNldChkb2MpO1xuICAgICAgICAvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgY29udGFpbnMgbGVmdCBzY3JvbGwgaW4gQ2hyb21lIG9uIEFuZHJvaWQuXG4gICAgICAgIC8vIEkgaGF2ZW4ndCBmb3VuZCBhIGZlYXR1cmUgZGV0ZWN0aW9uIHRoYXQgcHJvdmVzIHRoaXMuIFdvcnN0IGNhc2VcbiAgICAgICAgLy8gc2NlbmFyaW8gb24gbWlzLW1hdGNoOiB0aGUgJ3RhcCcgZmVhdHVyZSBvbiBob3Jpem9udGFsIHNsaWRlcnMgYnJlYWtzLlxuICAgICAgICBpZiAoL3dlYmtpdC4qQ2hyb21lLipNb2JpbGUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBwYWdlT2Zmc2V0LnggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcmllbnRhdGlvbiA/IHJlY3QudG9wICsgcGFnZU9mZnNldC55IC0gZG9jRWxlbS5jbGllbnRUb3AgOiByZWN0LmxlZnQgKyBwYWdlT2Zmc2V0LnggLSBkb2NFbGVtLmNsaWVudExlZnQ7XG4gICAgfVxuICAgIC8vIENoZWNrcyB3aGV0aGVyIGEgdmFsdWUgaXMgbnVtZXJpY2FsLlxuICAgIGZ1bmN0aW9uIGlzTnVtZXJpYyhhKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gXCJudW1iZXJcIiAmJiAhaXNOYU4oYSkgJiYgaXNGaW5pdGUoYSk7XG4gICAgfVxuICAgIC8vIFNldHMgYSBjbGFzcyBhbmQgcmVtb3ZlcyBpdCBhZnRlciBbZHVyYXRpb25dIG1zLlxuICAgIGZ1bmN0aW9uIGFkZENsYXNzRm9yKGVsZW1lbnQsIGNsYXNzTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gTGltaXRzIGEgdmFsdWUgdG8gMCAtIDEwMFxuICAgIGZ1bmN0aW9uIGxpbWl0KGEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKGEsIDEwMCksIDApO1xuICAgIH1cbiAgICAvLyBXcmFwcyBhIHZhcmlhYmxlIGFzIGFuIGFycmF5LCBpZiBpdCBpc24ndCBvbmUgeWV0LlxuICAgIC8vIE5vdGUgdGhhdCBhbiBpbnB1dCBhcnJheSBpcyByZXR1cm5lZCBieSByZWZlcmVuY2UhXG4gICAgZnVuY3Rpb24gYXNBcnJheShhKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGEpID8gYSA6IFthXTtcbiAgICB9XG4gICAgLy8gQ291bnRzIGRlY2ltYWxzXG4gICAgZnVuY3Rpb24gY291bnREZWNpbWFscyhudW1TdHIpIHtcbiAgICAgICAgbnVtU3RyID0gU3RyaW5nKG51bVN0cik7XG4gICAgICAgIHZhciBwaWVjZXMgPSBudW1TdHIuc3BsaXQoXCIuXCIpO1xuICAgICAgICByZXR1cm4gcGllY2VzLmxlbmd0aCA+IDEgPyBwaWVjZXNbMV0ubGVuZ3RoIDogMDtcbiAgICB9XG4gICAgLy8gaHR0cDovL3lvdW1pZ2h0bm90bmVlZGpxdWVyeS5jb20vI2FkZF9jbGFzc1xuICAgIGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCAmJiAhL1xccy8udGVzdChjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaHR0cDovL3lvdW1pZ2h0bm90bmVlZGpxdWVyeS5jb20vI3JlbW92ZV9jbGFzc1xuICAgIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCAmJiAhL1xccy8udGVzdChjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXGIpXCIgKyBjbGFzc05hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpICsgXCIoXFxcXGJ8JClcIiwgXCJnaVwiKSwgXCIgXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vcGxhaW5qcy5jb20vamF2YXNjcmlwdC9hdHRyaWJ1dGVzL2FkZGluZy1yZW1vdmluZy1hbmQtdGVzdGluZy1mb3ItY2xhc3Nlcy05L1xuICAgIGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdCA/IGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpIDogbmV3IFJlZ0V4cChcIlxcXFxiXCIgKyBjbGFzc05hbWUgKyBcIlxcXFxiXCIpLnRlc3QoZWwuY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9zY3JvbGxZI05vdGVzXG4gICAgZnVuY3Rpb24gZ2V0UGFnZU9mZnNldChkb2MpIHtcbiAgICAgICAgdmFyIHN1cHBvcnRQYWdlT2Zmc2V0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBpc0NTUzFDb21wYXQgPSAoZG9jLmNvbXBhdE1vZGUgfHwgXCJcIikgPT09IFwiQ1NTMUNvbXBhdFwiO1xuICAgICAgICB2YXIgeCA9IHN1cHBvcnRQYWdlT2Zmc2V0XG4gICAgICAgICAgICA/IHdpbmRvdy5wYWdlWE9mZnNldFxuICAgICAgICAgICAgOiBpc0NTUzFDb21wYXRcbiAgICAgICAgICAgICAgICA/IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdFxuICAgICAgICAgICAgICAgIDogZG9jLmJvZHkuc2Nyb2xsTGVmdDtcbiAgICAgICAgdmFyIHkgPSBzdXBwb3J0UGFnZU9mZnNldFxuICAgICAgICAgICAgPyB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgICAgIDogaXNDU1MxQ29tcGF0XG4gICAgICAgICAgICAgICAgPyBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgICAgICAgICAgIDogZG9jLmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHksXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIHdlIHByb3ZpZGUgYSBmdW5jdGlvbiB0byBjb21wdXRlIGNvbnN0YW50cyBpbnN0ZWFkXG4gICAgLy8gb2YgYWNjZXNzaW5nIHdpbmRvdy4qIGFzIHNvb24gYXMgdGhlIG1vZHVsZSBuZWVkcyBpdFxuICAgIC8vIHNvIHRoYXQgd2UgZG8gbm90IGNvbXB1dGUgYW55dGhpbmcgaWYgbm90IG5lZWRlZFxuICAgIGZ1bmN0aW9uIGdldEFjdGlvbnMoKSB7XG4gICAgICAgIC8vIERldGVybWluZSB0aGUgZXZlbnRzIHRvIGJpbmQuIElFMTEgaW1wbGVtZW50cyBwb2ludGVyRXZlbnRzIHdpdGhvdXRcbiAgICAgICAgLy8gYSBwcmVmaXgsIHdoaWNoIGJyZWFrcyBjb21wYXRpYmlsaXR5IHdpdGggdGhlIElFMTAgaW1wbGVtZW50YXRpb24uXG4gICAgICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBzdGFydDogXCJwb2ludGVyZG93blwiLFxuICAgICAgICAgICAgICAgIG1vdmU6IFwicG9pbnRlcm1vdmVcIixcbiAgICAgICAgICAgICAgICBlbmQ6IFwicG9pbnRlcnVwXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogXCJNU1BvaW50ZXJEb3duXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vdmU6IFwiTVNQb2ludGVyTW92ZVwiLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFwiTVNQb2ludGVyVXBcIixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcIm1vdXNlZG93biB0b3VjaHN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIG1vdmU6IFwibW91c2Vtb3ZlIHRvdWNobW92ZVwiLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFwibW91c2V1cCB0b3VjaGVuZFwiLFxuICAgICAgICAgICAgICAgIH07XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kXG4gICAgLy8gSXNzdWUgIzc4NVxuICAgIGZ1bmN0aW9uIGdldFN1cHBvcnRzUGFzc2l2ZSgpIHtcbiAgICAgICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIFwicGFzc2l2ZVwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsIG51bGwsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5DU1MgJiYgQ1NTLnN1cHBvcnRzICYmIENTUy5zdXBwb3J0cyhcInRvdWNoLWFjdGlvblwiLCBcIm5vbmVcIik7XG4gICAgfVxuICAgIC8vZW5kcmVnaW9uXG4gICAgLy9yZWdpb24gUmFuZ2UgQ2FsY3VsYXRpb25cbiAgICAvLyBEZXRlcm1pbmUgdGhlIHNpemUgb2YgYSBzdWItcmFuZ2UgaW4gcmVsYXRpb24gdG8gYSBmdWxsIHJhbmdlLlxuICAgIGZ1bmN0aW9uIHN1YlJhbmdlUmF0aW8ocGEsIHBiKSB7XG4gICAgICAgIHJldHVybiAxMDAgLyAocGIgLSBwYSk7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBIb3cgbWFueSBwZXJjZW50IGlzIHRoaXMgdmFsdWUgb2YgdGhpcyByYW5nZT9cbiAgICBmdW5jdGlvbiBmcm9tUGVyY2VudGFnZShyYW5nZSwgdmFsdWUsIHN0YXJ0UmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAqIDEwMCkgLyAocmFuZ2Vbc3RhcnRSYW5nZSArIDFdIC0gcmFuZ2Vbc3RhcnRSYW5nZV0pO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgV2hlcmUgaXMgdGhpcyB2YWx1ZSBvbiB0aGlzIHJhbmdlP1xuICAgIGZ1bmN0aW9uIHRvUGVyY2VudGFnZShyYW5nZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZyb21QZXJjZW50YWdlKHJhbmdlLCByYW5nZVswXSA8IDAgPyB2YWx1ZSArIE1hdGguYWJzKHJhbmdlWzBdKSA6IHZhbHVlIC0gcmFuZ2VbMF0sIDApO1xuICAgIH1cbiAgICAvLyAodmFsdWUpIEhvdyBtdWNoIGlzIHRoaXMgcGVyY2VudGFnZSBvbiB0aGlzIHJhbmdlP1xuICAgIGZ1bmN0aW9uIGlzUGVyY2VudGFnZShyYW5nZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAqIChyYW5nZVsxXSAtIHJhbmdlWzBdKSkgLyAxMDAgKyByYW5nZVswXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Sih2YWx1ZSwgYXJyKSB7XG4gICAgICAgIHZhciBqID0gMTtcbiAgICAgICAgd2hpbGUgKHZhbHVlID49IGFycltqXSkge1xuICAgICAgICAgICAgaiArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBqO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgSW5wdXQgYSB2YWx1ZSwgZmluZCB3aGVyZSwgb24gYSBzY2FsZSBvZiAwLTEwMCwgaXQgYXBwbGllcy5cbiAgICBmdW5jdGlvbiB0b1N0ZXBwaW5nKHhWYWwsIHhQY3QsIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA+PSB4VmFsLnNsaWNlKC0xKVswXSkge1xuICAgICAgICAgICAgcmV0dXJuIDEwMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhWYWwpO1xuICAgICAgICB2YXIgdmEgPSB4VmFsW2ogLSAxXTtcbiAgICAgICAgdmFyIHZiID0geFZhbFtqXTtcbiAgICAgICAgdmFyIHBhID0geFBjdFtqIC0gMV07XG4gICAgICAgIHZhciBwYiA9IHhQY3Rbal07XG4gICAgICAgIHJldHVybiBwYSArIHRvUGVyY2VudGFnZShbdmEsIHZiXSwgdmFsdWUpIC8gc3ViUmFuZ2VSYXRpbyhwYSwgcGIpO1xuICAgIH1cbiAgICAvLyAodmFsdWUpIElucHV0IGEgcGVyY2VudGFnZSwgZmluZCB3aGVyZSBpdCBpcyBvbiB0aGUgc3BlY2lmaWVkIHJhbmdlLlxuICAgIGZ1bmN0aW9uIGZyb21TdGVwcGluZyh4VmFsLCB4UGN0LCB2YWx1ZSkge1xuICAgICAgICAvLyBUaGVyZSBpcyBubyByYW5nZSBncm91cCB0aGF0IGZpdHMgMTAwXG4gICAgICAgIGlmICh2YWx1ZSA+PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiB4VmFsLnNsaWNlKC0xKVswXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhQY3QpO1xuICAgICAgICB2YXIgdmEgPSB4VmFsW2ogLSAxXTtcbiAgICAgICAgdmFyIHZiID0geFZhbFtqXTtcbiAgICAgICAgdmFyIHBhID0geFBjdFtqIC0gMV07XG4gICAgICAgIHZhciBwYiA9IHhQY3Rbal07XG4gICAgICAgIHJldHVybiBpc1BlcmNlbnRhZ2UoW3ZhLCB2Yl0sICh2YWx1ZSAtIHBhKSAqIHN1YlJhbmdlUmF0aW8ocGEsIHBiKSk7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBHZXQgdGhlIHN0ZXAgdGhhdCBhcHBsaWVzIGF0IGEgY2VydGFpbiB2YWx1ZS5cbiAgICBmdW5jdGlvbiBnZXRTdGVwKHhQY3QsIHhTdGVwcywgc25hcCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhQY3QpO1xuICAgICAgICB2YXIgYSA9IHhQY3RbaiAtIDFdO1xuICAgICAgICB2YXIgYiA9IHhQY3Rbal07XG4gICAgICAgIC8vIElmICdzbmFwJyBpcyBzZXQsIHN0ZXBzIGFyZSB1c2VkIGFzIGZpeGVkIHBvaW50cyBvbiB0aGUgc2xpZGVyLlxuICAgICAgICBpZiAoc25hcCkge1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgY2xvc2VzdCBwb3NpdGlvbiwgYSBvciBiLlxuICAgICAgICAgICAgaWYgKHZhbHVlIC0gYSA+IChiIC0gYSkgLyAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXhTdGVwc1tqIC0gMV0pIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geFBjdFtqIC0gMV0gKyBjbG9zZXN0KHZhbHVlIC0geFBjdFtqIC0gMV0sIHhTdGVwc1tqIC0gMV0pO1xuICAgIH1cbiAgICAvL2VuZHJlZ2lvblxuICAgIC8vcmVnaW9uIFNwZWN0cnVtXG4gICAgdmFyIFNwZWN0cnVtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBTcGVjdHJ1bShlbnRyeSwgc25hcCwgc2luZ2xlU3RlcCkge1xuICAgICAgICAgICAgdGhpcy54UGN0ID0gW107XG4gICAgICAgICAgICB0aGlzLnhWYWwgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueFN0ZXBzID0gW107XG4gICAgICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcCA9IFtdO1xuICAgICAgICAgICAgdGhpcy54U3RlcHMgPSBbc2luZ2xlU3RlcCB8fCBmYWxzZV07XG4gICAgICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IFtmYWxzZV07XG4gICAgICAgICAgICB0aGlzLnNuYXAgPSBzbmFwO1xuICAgICAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICAgICAgdmFyIG9yZGVyZWQgPSBbXTtcbiAgICAgICAgICAgIC8vIE1hcCB0aGUgb2JqZWN0IGtleXMgdG8gYW4gYXJyYXkuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlbnRyeSkuZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBvcmRlcmVkLnB1c2goW2FzQXJyYXkoZW50cnlbaW5kZXhdKSwgaW5kZXhdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gU29ydCBhbGwgZW50cmllcyBieSB2YWx1ZSAobnVtZXJpYyBzb3J0KS5cbiAgICAgICAgICAgIG9yZGVyZWQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhWzBdWzBdIC0gYlswXVswXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQ29udmVydCBhbGwgZW50cmllcyB0byBzdWJyYW5nZXMuXG4gICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBvcmRlcmVkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRW50cnlQb2ludChvcmRlcmVkW2luZGV4XVsxXSwgb3JkZXJlZFtpbmRleF1bMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGFjdHVhbCBzdGVwIHZhbHVlcy5cbiAgICAgICAgICAgIC8vIHhTdGVwcyBpcyBzb3J0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgeFBjdCBhbmQgeFZhbC5cbiAgICAgICAgICAgIHRoaXMueE51bVN0ZXBzID0gdGhpcy54U3RlcHMuc2xpY2UoMCk7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGFsbCBudW1lcmljIHN0ZXBzIHRvIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBzdWJyYW5nZSB0aGV5IHJlcHJlc2VudC5cbiAgICAgICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHRoaXMueE51bVN0ZXBzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3RlcFBvaW50KGluZGV4LCB0aGlzLnhOdW1TdGVwc1tpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXREaXN0YW5jZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMueE51bVN0ZXBzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZXNbaW5kZXhdID0gZnJvbVBlcmNlbnRhZ2UodGhpcy54VmFsLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpc3RhbmNlcztcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBwZXJjZW50dWFsIGRpc3RhbmNlIG92ZXIgdGhlIHdob2xlIHNjYWxlIG9mIHJhbmdlcy5cbiAgICAgICAgLy8gZGlyZWN0aW9uOiAwID0gYmFja3dhcmRzIC8gMSA9IGZvcndhcmRzXG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXRBYnNvbHV0ZURpc3RhbmNlID0gZnVuY3Rpb24gKHZhbHVlLCBkaXN0YW5jZXMsIGRpcmVjdGlvbikge1xuICAgICAgICAgICAgdmFyIHhQY3RfaW5kZXggPSAwO1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHJhbmdlIHdoZXJlIHRvIHN0YXJ0IGNhbGN1bGF0aW9uXG4gICAgICAgICAgICBpZiAodmFsdWUgPCB0aGlzLnhQY3RbdGhpcy54UGN0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHZhbHVlID4gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgICAgICB4UGN0X2luZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IHRoaXMueFBjdFt0aGlzLnhQY3QubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgICAgICB4UGN0X2luZGV4ID0gdGhpcy54UGN0Lmxlbmd0aCAtIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBsb29raW5nIGJhY2t3YXJkcyBhbmQgdGhlIHZhbHVlIGlzIGV4YWN0bHkgYXQgYSByYW5nZSBzZXBhcmF0b3IgdGhlbiBsb29rIG9uZSByYW5nZSBmdXJ0aGVyXG4gICAgICAgICAgICBpZiAoIWRpcmVjdGlvbiAmJiB2YWx1ZSA9PT0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHhQY3RfaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZXMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdGFydF9mYWN0b3I7XG4gICAgICAgICAgICB2YXIgcmVzdF9mYWN0b3IgPSAxO1xuICAgICAgICAgICAgdmFyIHJlc3RfcmVsX2Rpc3RhbmNlID0gZGlzdGFuY2VzW3hQY3RfaW5kZXhdO1xuICAgICAgICAgICAgdmFyIHJhbmdlX3BjdCA9IDA7XG4gICAgICAgICAgICB2YXIgcmVsX3JhbmdlX2Rpc3RhbmNlID0gMDtcbiAgICAgICAgICAgIHZhciBhYnNfZGlzdGFuY2VfY291bnRlciA9IDA7XG4gICAgICAgICAgICB2YXIgcmFuZ2VfY291bnRlciA9IDA7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgd2hhdCBwYXJ0IG9mIHRoZSBzdGFydCByYW5nZSB0aGUgdmFsdWUgaXNcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAodmFsdWUgLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pIC8gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhcnRfZmFjdG9yID0gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB2YWx1ZSkgLyAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEbyB1bnRpbCB0aGUgY29tcGxldGUgZGlzdGFuY2UgYWNyb3NzIHJhbmdlcyBpcyBjYWxjdWxhdGVkXG4gICAgICAgICAgICB3aGlsZSAocmVzdF9yZWxfZGlzdGFuY2UgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBwZXJjZW50YWdlIG9mIHRvdGFsIHJhbmdlXG4gICAgICAgICAgICAgICAgcmFuZ2VfcGN0ID0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxICsgcmFuZ2VfY291bnRlcl0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdO1xuICAgICAgICAgICAgICAgIC8vIERldGVjdCBpZiB0aGUgbWFyZ2luLCBwYWRkaW5nIG9yIGxpbWl0IGlzIGxhcmdlciB0aGVuIHRoZSBjdXJyZW50IHJhbmdlIGFuZCBjYWxjdWxhdGVcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJlc3RfZmFjdG9yICsgMTAwIC0gc3RhcnRfZmFjdG9yICogMTAwID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGxhcmdlciB0aGVuIHRha2UgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb2YgdGhlIHdob2xlIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIHJlbF9yYW5nZV9kaXN0YW5jZSA9IHJhbmdlX3BjdCAqIHN0YXJ0X2ZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzdCBmYWN0b3Igb2YgcmVsYXRpdmUgcGVyY2VudHVhbCBkaXN0YW5jZSBzdGlsbCB0byBiZSBjYWxjdWxhdGVkXG4gICAgICAgICAgICAgICAgICAgIHJlc3RfZmFjdG9yID0gKHJlc3RfcmVsX2Rpc3RhbmNlIC0gMTAwICogc3RhcnRfZmFjdG9yKSAvIGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl07XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBzdGFydCBmYWN0b3IgdG8gMSBhcyBmb3IgbmV4dCByYW5nZSBpdCBkb2VzIG5vdCBhcHBseS5cbiAgICAgICAgICAgICAgICAgICAgc3RhcnRfZmFjdG9yID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHNtYWxsZXIgb3IgZXF1YWwgdGhlbiB0YWtlIHRoZSBwZXJjZW50dWFsIGRpc3RhbmNlIG9mIHRoZSBjYWxjdWxhdGUgcGVyY2VudHVhbCBwYXJ0IG9mIHRoYXQgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgcmVsX3JhbmdlX2Rpc3RhbmNlID0gKChkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmFuZ2VfcGN0KSAvIDEwMCkgKiByZXN0X2ZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gcmVzdCBsZWZ0IGFzIHRoZSByZXN0IGZpdHMgaW4gY3VycmVudCByYW5nZVxuICAgICAgICAgICAgICAgICAgICByZXN0X2ZhY3RvciA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgYWJzX2Rpc3RhbmNlX2NvdW50ZXIgPSBhYnNfZGlzdGFuY2VfY291bnRlciAtIHJlbF9yYW5nZV9kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTGltaXQgcmFuZ2UgdG8gZmlyc3QgcmFuZ2Ugd2hlbiBkaXN0YW5jZSBiZWNvbWVzIG91dHNpZGUgb2YgbWluaW11bSByYW5nZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54UGN0Lmxlbmd0aCArIHJhbmdlX2NvdW50ZXIgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VfY291bnRlci0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhYnNfZGlzdGFuY2VfY291bnRlciA9IGFic19kaXN0YW5jZV9jb3VudGVyICsgcmVsX3JhbmdlX2Rpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBMaW1pdCByYW5nZSB0byBsYXN0IHJhbmdlIHdoZW4gZGlzdGFuY2UgYmVjb21lcyBvdXRzaWRlIG9mIG1heGltdW0gcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueFBjdC5sZW5ndGggLSByYW5nZV9jb3VudGVyID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlX2NvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXN0IG9mIHJlbGF0aXZlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugc3RpbGwgdG8gYmUgY2FsY3VsYXRlZFxuICAgICAgICAgICAgICAgIHJlc3RfcmVsX2Rpc3RhbmNlID0gZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJlc3RfZmFjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlICsgYWJzX2Rpc3RhbmNlX2NvdW50ZXI7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS50b1N0ZXBwaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRvU3RlcHBpbmcodGhpcy54VmFsLCB0aGlzLnhQY3QsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmZyb21TdGVwcGluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21TdGVwcGluZyh0aGlzLnhWYWwsIHRoaXMueFBjdCwgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0U3RlcCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBnZXRTdGVwKHRoaXMueFBjdCwgdGhpcy54U3RlcHMsIHRoaXMuc25hcCwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0RGVmYXVsdFN0ZXAgPSBmdW5jdGlvbiAodmFsdWUsIGlzRG93biwgc2l6ZSkge1xuICAgICAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB0aGlzLnhQY3QpO1xuICAgICAgICAgICAgLy8gV2hlbiBhdCB0aGUgdG9wIG9yIHN0ZXBwaW5nIGRvd24sIGxvb2sgYXQgdGhlIHByZXZpb3VzIHN1Yi1yYW5nZVxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAxMDAgfHwgKGlzRG93biAmJiB2YWx1ZSA9PT0gdGhpcy54UGN0W2ogLSAxXSkpIHtcbiAgICAgICAgICAgICAgICBqID0gTWF0aC5tYXgoaiAtIDEsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnhWYWxbal0gLSB0aGlzLnhWYWxbaiAtIDFdKSAvIHNpemU7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXROZWFyYnlTdGVwcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB0aGlzLnhQY3QpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGVwQmVmb3JlOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqIC0gMl0sXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHRoaXMueE51bVN0ZXBzW2ogLSAyXSxcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaiAtIDJdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpc1N0ZXA6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2ogLSAxXSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbaiAtIDFdLFxuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0U3RlcDogdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtqIC0gMV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdGVwQWZ0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2pdLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqXSxcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbal0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5jb3VudFN0ZXBEZWNpbWFscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzdGVwRGVjaW1hbHMgPSB0aGlzLnhOdW1TdGVwcy5tYXAoY291bnREZWNpbWFscyk7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgc3RlcERlY2ltYWxzKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmhhc05vU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnhWYWxbMF0gPT09IHRoaXMueFZhbFt0aGlzLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgIH07XG4gICAgICAgIC8vIE91dHNpZGUgdGVzdGluZ1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RlcCh0aGlzLnRvU3RlcHBpbmcodmFsdWUpKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmhhbmRsZUVudHJ5UG9pbnQgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcGVyY2VudGFnZTtcbiAgICAgICAgICAgIC8vIENvdmVydCBtaW4vbWF4IHN5bnRheCB0byAwIGFuZCAxMDAuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSBwYXJzZUZsb2F0KGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBjb3JyZWN0IGlucHV0LlxuICAgICAgICAgICAgaWYgKCFpc051bWVyaWMocGVyY2VudGFnZSkgfHwgIWlzTnVtZXJpYyh2YWx1ZVswXSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncmFuZ2UnIHZhbHVlIGlzbid0IG51bWVyaWMuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RvcmUgdmFsdWVzLlxuICAgICAgICAgICAgdGhpcy54UGN0LnB1c2gocGVyY2VudGFnZSk7XG4gICAgICAgICAgICB0aGlzLnhWYWwucHVzaCh2YWx1ZVswXSk7XG4gICAgICAgICAgICB2YXIgdmFsdWUxID0gTnVtYmVyKHZhbHVlWzFdKTtcbiAgICAgICAgICAgIC8vIE5hTiB3aWxsIGV2YWx1YXRlIHRvIGZhbHNlIHRvbywgYnV0IHRvIGtlZXBcbiAgICAgICAgICAgIC8vIGxvZ2dpbmcgY2xlYXIsIHNldCBzdGVwIGV4cGxpY2l0bHkuIE1ha2Ugc3VyZVxuICAgICAgICAgICAgLy8gbm90IHRvIG92ZXJyaWRlIHRoZSAnc3RlcCcgc2V0dGluZyB3aXRoIGZhbHNlLlxuICAgICAgICAgICAgaWYgKCFwZXJjZW50YWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih2YWx1ZTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueFN0ZXBzWzBdID0gdmFsdWUxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMueFN0ZXBzLnB1c2goaXNOYU4odmFsdWUxKSA/IGZhbHNlIDogdmFsdWUxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXAucHVzaCgwKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmhhbmRsZVN0ZXBQb2ludCA9IGZ1bmN0aW9uIChpLCBuKSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgJ2ZhbHNlJyBzdGVwcGluZy5cbiAgICAgICAgICAgIGlmICghbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0ZXAgb3ZlciB6ZXJvLWxlbmd0aCByYW5nZXMgKCM5NDgpO1xuICAgICAgICAgICAgaWYgKHRoaXMueFZhbFtpXSA9PT0gdGhpcy54VmFsW2kgKyAxXSkge1xuICAgICAgICAgICAgICAgIHRoaXMueFN0ZXBzW2ldID0gdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtpXSA9IHRoaXMueFZhbFtpXTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGYWN0b3IgdG8gcmFuZ2UgcmF0aW9cbiAgICAgICAgICAgIHRoaXMueFN0ZXBzW2ldID1cbiAgICAgICAgICAgICAgICBmcm9tUGVyY2VudGFnZShbdGhpcy54VmFsW2ldLCB0aGlzLnhWYWxbaSArIDFdXSwgbiwgMCkgLyBzdWJSYW5nZVJhdGlvKHRoaXMueFBjdFtpXSwgdGhpcy54UGN0W2kgKyAxXSk7XG4gICAgICAgICAgICB2YXIgdG90YWxTdGVwcyA9ICh0aGlzLnhWYWxbaSArIDFdIC0gdGhpcy54VmFsW2ldKSAvIHRoaXMueE51bVN0ZXBzW2ldO1xuICAgICAgICAgICAgdmFyIGhpZ2hlc3RTdGVwID0gTWF0aC5jZWlsKE51bWJlcih0b3RhbFN0ZXBzLnRvRml4ZWQoMykpIC0gMSk7XG4gICAgICAgICAgICB2YXIgc3RlcCA9IHRoaXMueFZhbFtpXSArIHRoaXMueE51bVN0ZXBzW2ldICogaGlnaGVzdFN0ZXA7XG4gICAgICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ldID0gc3RlcDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFNwZWN0cnVtO1xuICAgIH0oKSk7XG4gICAgLy9lbmRyZWdpb25cbiAgICAvL3JlZ2lvbiBPcHRpb25zXG4gICAgLypcdEV2ZXJ5IGlucHV0IG9wdGlvbiBpcyB0ZXN0ZWQgYW5kIHBhcnNlZC4gVGhpcyB3aWxsIHByZXZlbnRcbiAgICAgICAgZW5kbGVzcyB2YWxpZGF0aW9uIGluIGludGVybmFsIG1ldGhvZHMuIFRoZXNlIHRlc3RzIGFyZVxuICAgICAgICBzdHJ1Y3R1cmVkIHdpdGggYW4gaXRlbSBmb3IgZXZlcnkgb3B0aW9uIGF2YWlsYWJsZS4gQW5cbiAgICAgICAgb3B0aW9uIGNhbiBiZSBtYXJrZWQgYXMgcmVxdWlyZWQgYnkgc2V0dGluZyB0aGUgJ3InIGZsYWcuXG4gICAgICAgIFRoZSB0ZXN0aW5nIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHdpdGggdGhyZWUgYXJndW1lbnRzOlxuICAgICAgICAgICAgLSBUaGUgcHJvdmlkZWQgdmFsdWUgZm9yIHRoZSBvcHRpb247XG4gICAgICAgICAgICAtIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIG9iamVjdDtcbiAgICAgICAgICAgIC0gVGhlIG5hbWUgZm9yIHRoZSBvcHRpb247XG5cbiAgICAgICAgVGhlIHRlc3RpbmcgZnVuY3Rpb24gcmV0dXJucyBmYWxzZSB3aGVuIGFuIGVycm9yIGlzIGRldGVjdGVkLFxuICAgICAgICBvciB0cnVlIHdoZW4gZXZlcnl0aGluZyBpcyBPSy4gSXQgY2FuIGFsc28gbW9kaWZ5IHRoZSBvcHRpb25cbiAgICAgICAgb2JqZWN0LCB0byBtYWtlIHN1cmUgYWxsIHZhbHVlcyBjYW4gYmUgY29ycmVjdGx5IGxvb3BlZCBlbHNld2hlcmUuICovXG4gICAgLy9yZWdpb24gRGVmYXVsdHNcbiAgICB2YXIgZGVmYXVsdEZvcm1hdHRlciA9IHtcbiAgICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBcIlwiIDogdmFsdWUudG9GaXhlZCgyKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnJvbTogTnVtYmVyLFxuICAgIH07XG4gICAgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgICAgIHRhcmdldDogXCJ0YXJnZXRcIixcbiAgICAgICAgYmFzZTogXCJiYXNlXCIsXG4gICAgICAgIG9yaWdpbjogXCJvcmlnaW5cIixcbiAgICAgICAgaGFuZGxlOiBcImhhbmRsZVwiLFxuICAgICAgICBoYW5kbGVMb3dlcjogXCJoYW5kbGUtbG93ZXJcIixcbiAgICAgICAgaGFuZGxlVXBwZXI6IFwiaGFuZGxlLXVwcGVyXCIsXG4gICAgICAgIHRvdWNoQXJlYTogXCJ0b3VjaC1hcmVhXCIsXG4gICAgICAgIGhvcml6b250YWw6IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICB2ZXJ0aWNhbDogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBcImJhY2tncm91bmRcIixcbiAgICAgICAgY29ubmVjdDogXCJjb25uZWN0XCIsXG4gICAgICAgIGNvbm5lY3RzOiBcImNvbm5lY3RzXCIsXG4gICAgICAgIGx0cjogXCJsdHJcIixcbiAgICAgICAgcnRsOiBcInJ0bFwiLFxuICAgICAgICB0ZXh0RGlyZWN0aW9uTHRyOiBcInR4dC1kaXItbHRyXCIsXG4gICAgICAgIHRleHREaXJlY3Rpb25SdGw6IFwidHh0LWRpci1ydGxcIixcbiAgICAgICAgZHJhZ2dhYmxlOiBcImRyYWdnYWJsZVwiLFxuICAgICAgICBkcmFnOiBcInN0YXRlLWRyYWdcIixcbiAgICAgICAgdGFwOiBcInN0YXRlLXRhcFwiLFxuICAgICAgICBhY3RpdmU6IFwiYWN0aXZlXCIsXG4gICAgICAgIHRvb2x0aXA6IFwidG9vbHRpcFwiLFxuICAgICAgICBwaXBzOiBcInBpcHNcIixcbiAgICAgICAgcGlwc0hvcml6b250YWw6IFwicGlwcy1ob3Jpem9udGFsXCIsXG4gICAgICAgIHBpcHNWZXJ0aWNhbDogXCJwaXBzLXZlcnRpY2FsXCIsXG4gICAgICAgIG1hcmtlcjogXCJtYXJrZXJcIixcbiAgICAgICAgbWFya2VySG9yaXpvbnRhbDogXCJtYXJrZXItaG9yaXpvbnRhbFwiLFxuICAgICAgICBtYXJrZXJWZXJ0aWNhbDogXCJtYXJrZXItdmVydGljYWxcIixcbiAgICAgICAgbWFya2VyTm9ybWFsOiBcIm1hcmtlci1ub3JtYWxcIixcbiAgICAgICAgbWFya2VyTGFyZ2U6IFwibWFya2VyLWxhcmdlXCIsXG4gICAgICAgIG1hcmtlclN1YjogXCJtYXJrZXItc3ViXCIsXG4gICAgICAgIHZhbHVlOiBcInZhbHVlXCIsXG4gICAgICAgIHZhbHVlSG9yaXpvbnRhbDogXCJ2YWx1ZS1ob3Jpem9udGFsXCIsXG4gICAgICAgIHZhbHVlVmVydGljYWw6IFwidmFsdWUtdmVydGljYWxcIixcbiAgICAgICAgdmFsdWVOb3JtYWw6IFwidmFsdWUtbm9ybWFsXCIsXG4gICAgICAgIHZhbHVlTGFyZ2U6IFwidmFsdWUtbGFyZ2VcIixcbiAgICAgICAgdmFsdWVTdWI6IFwidmFsdWUtc3ViXCIsXG4gICAgfTtcbiAgICAvLyBOYW1lc3BhY2VzIG9mIGludGVybmFsIGV2ZW50IGxpc3RlbmVyc1xuICAgIHZhciBJTlRFUk5BTF9FVkVOVF9OUyA9IHtcbiAgICAgICAgdG9vbHRpcHM6IFwiLl9fdG9vbHRpcHNcIixcbiAgICAgICAgYXJpYTogXCIuX19hcmlhXCIsXG4gICAgfTtcbiAgICAvL2VuZHJlZ2lvblxuICAgIGZ1bmN0aW9uIHRlc3RTdGVwKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc3RlcCcgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSBzdGVwIG9wdGlvbiBjYW4gc3RpbGwgYmUgdXNlZCB0byBzZXQgc3RlcHBpbmdcbiAgICAgICAgLy8gZm9yIGxpbmVhciBzbGlkZXJzLiBPdmVyd3JpdHRlbiBpZiBzZXQgaW4gJ3JhbmdlJy5cbiAgICAgICAgcGFyc2VkLnNpbmdsZVN0ZXAgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkUGFnZU11bHRpcGxpZXIocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZFBhZ2VNdWx0aXBsaWVyJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkUGFnZU11bHRpcGxpZXIgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkTXVsdGlwbGllcihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkTXVsdGlwbGllcicgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5rZXlib2FyZE11bHRpcGxpZXIgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkRGVmYXVsdFN0ZXAocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZERlZmF1bHRTdGVwJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkRGVmYXVsdFN0ZXAgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFJhbmdlKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gRmlsdGVyIGluY29ycmVjdCBpbnB1dC5cbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJvYmplY3RcIiB8fCBBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3JhbmdlJyBpcyBub3QgYW4gb2JqZWN0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYXRjaCBtaXNzaW5nIHN0YXJ0IG9yIGVuZC5cbiAgICAgICAgaWYgKGVudHJ5Lm1pbiA9PT0gdW5kZWZpbmVkIHx8IGVudHJ5Lm1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBNaXNzaW5nICdtaW4nIG9yICdtYXgnIGluICdyYW5nZScuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5zcGVjdHJ1bSA9IG5ldyBTcGVjdHJ1bShlbnRyeSwgcGFyc2VkLnNuYXAgfHwgZmFsc2UsIHBhcnNlZC5zaW5nbGVTdGVwKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFN0YXJ0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgZW50cnkgPSBhc0FycmF5KGVudHJ5KTtcbiAgICAgICAgLy8gVmFsaWRhdGUgaW5wdXQuIFZhbHVlcyBhcmVuJ3QgdGVzdGVkLCBhcyB0aGUgcHVibGljIC52YWwgbWV0aG9kXG4gICAgICAgIC8vIHdpbGwgYWx3YXlzIHByb3ZpZGUgYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSB8fCAhZW50cnkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc3RhcnQnIG9wdGlvbiBpcyBpbmNvcnJlY3QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0b3JlIHRoZSBudW1iZXIgb2YgaGFuZGxlcy5cbiAgICAgICAgcGFyc2VkLmhhbmRsZXMgPSBlbnRyeS5sZW5ndGg7XG4gICAgICAgIC8vIFdoZW4gdGhlIHNsaWRlciBpcyBpbml0aWFsaXplZCwgdGhlIC52YWwgbWV0aG9kIHdpbGxcbiAgICAgICAgLy8gYmUgY2FsbGVkIHdpdGggdGhlIHN0YXJ0IG9wdGlvbnMuXG4gICAgICAgIHBhcnNlZC5zdGFydCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0U25hcChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc25hcCcgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbmZvcmNlIDEwMCUgc3RlcHBpbmcgd2l0aGluIHN1YnJhbmdlcy5cbiAgICAgICAgcGFyc2VkLnNuYXAgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEFuaW1hdGUocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FuaW1hdGUnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5mb3JjZSAxMDAlIHN0ZXBwaW5nIHdpdGhpbiBzdWJyYW5nZXMuXG4gICAgICAgIHBhcnNlZC5hbmltYXRlID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RBbmltYXRpb25EdXJhdGlvbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhbmltYXRpb25EdXJhdGlvbicgb3B0aW9uIG11c3QgYmUgYSBudW1iZXIuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5hbmltYXRpb25EdXJhdGlvbiA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0Q29ubmVjdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIHZhciBjb25uZWN0ID0gW2ZhbHNlXTtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIC8vIE1hcCBsZWdhY3kgb3B0aW9uc1xuICAgICAgICBpZiAoZW50cnkgPT09IFwibG93ZXJcIikge1xuICAgICAgICAgICAgZW50cnkgPSBbdHJ1ZSwgZmFsc2VdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVudHJ5ID09PSBcInVwcGVyXCIpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gW2ZhbHNlLCB0cnVlXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgYm9vbGVhbiBvcHRpb25zXG4gICAgICAgIGlmIChlbnRyeSA9PT0gdHJ1ZSB8fCBlbnRyeSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBwYXJzZWQuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29ubmVjdC5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbm5lY3QucHVzaChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVqZWN0IGludmFsaWQgaW5wdXRcbiAgICAgICAgZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpIHx8ICFlbnRyeS5sZW5ndGggfHwgZW50cnkubGVuZ3RoICE9PSBwYXJzZWQuaGFuZGxlcyArIDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjb25uZWN0JyBvcHRpb24gZG9lc24ndCBtYXRjaCBoYW5kbGUgY291bnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29ubmVjdCA9IGVudHJ5O1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5jb25uZWN0ID0gY29ubmVjdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdE9yaWVudGF0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gU2V0IG9yaWVudGF0aW9uIHRvIGFuIGEgbnVtZXJpY2FsIHZhbHVlIGZvciBlYXN5XG4gICAgICAgIC8vIGFycmF5IHNlbGVjdGlvbi5cbiAgICAgICAgc3dpdGNoIChlbnRyeSkge1xuICAgICAgICAgICAgY2FzZSBcImhvcml6b250YWxcIjpcbiAgICAgICAgICAgICAgICBwYXJzZWQub3J0ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ2ZXJ0aWNhbFwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5vcnQgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnb3JpZW50YXRpb24nIG9wdGlvbiBpcyBpbnZhbGlkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0TWFyZ2luKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbWFyZ2luJyBvcHRpb24gbXVzdCBiZSBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJc3N1ZSAjNTgyXG4gICAgICAgIGlmIChlbnRyeSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5tYXJnaW4gPSBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0TGltaXQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdsaW1pdCcgb3B0aW9uIG11c3QgYmUgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmxpbWl0ID0gcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5KTtcbiAgICAgICAgaWYgKCFwYXJzZWQubGltaXQgfHwgcGFyc2VkLmhhbmRsZXMgPCAyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbGltaXQnIG9wdGlvbiBpcyBvbmx5IHN1cHBvcnRlZCBvbiBsaW5lYXIgc2xpZGVycyB3aXRoIDIgb3IgbW9yZSBoYW5kbGVzLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0UGFkZGluZyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpICYmICFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMgb3IgYXJyYXkgb2YgZXhhY3RseSAyIG51bWJlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVudHJ5KSAmJiAhKGVudHJ5Lmxlbmd0aCA9PT0gMiB8fCBpc051bWVyaWMoZW50cnlbMF0pIHx8IGlzTnVtZXJpYyhlbnRyeVsxXSkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgICAgZW50cnkgPSBbZW50cnksIGVudHJ5XTtcbiAgICAgICAgfVxuICAgICAgICAvLyAnZ2V0RGlzdGFuY2UnIHJldHVybnMgZmFsc2UgZm9yIGludmFsaWQgdmFsdWVzLlxuICAgICAgICBwYXJzZWQucGFkZGluZyA9IFtwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnlbMF0pLCBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnlbMV0pXTtcbiAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgcGFyc2VkLnNwZWN0cnVtLnhOdW1TdGVwcy5sZW5ndGggLSAxOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAvLyBsYXN0IFwicmFuZ2VcIiBjYW4ndCBjb250YWluIHN0ZXAgc2l6ZSBhcyBpdCBpcyBwdXJlbHkgYW4gZW5kcG9pbnQuXG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhZGRpbmdbMF1baW5kZXhdIDwgMCB8fCBwYXJzZWQucGFkZGluZ1sxXVtpbmRleF0gPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyKHMpLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdG90YWxQYWRkaW5nID0gZW50cnlbMF0gKyBlbnRyeVsxXTtcbiAgICAgICAgdmFyIGZpcnN0VmFsdWUgPSBwYXJzZWQuc3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgdmFyIGxhc3RWYWx1ZSA9IHBhcnNlZC5zcGVjdHJ1bS54VmFsW3BhcnNlZC5zcGVjdHJ1bS54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAodG90YWxQYWRkaW5nIC8gKGxhc3RWYWx1ZSAtIGZpcnN0VmFsdWUpID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IG5vdCBleGNlZWQgMTAwJSBvZiB0aGUgcmFuZ2UuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3REaXJlY3Rpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBTZXQgZGlyZWN0aW9uIGFzIGEgbnVtZXJpY2FsIHZhbHVlIGZvciBlYXN5IHBhcnNpbmcuXG4gICAgICAgIC8vIEludmVydCBjb25uZWN0aW9uIGZvciBSVEwgc2xpZGVycywgc28gdGhhdCB0aGUgcHJvcGVyXG4gICAgICAgIC8vIGhhbmRsZXMgZ2V0IHRoZSBjb25uZWN0L2JhY2tncm91bmQgY2xhc3Nlcy5cbiAgICAgICAgc3dpdGNoIChlbnRyeSkge1xuICAgICAgICAgICAgY2FzZSBcImx0clwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5kaXIgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJ0bFwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5kaXIgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnZGlyZWN0aW9uJyBvcHRpb24gd2FzIG5vdCByZWNvZ25pemVkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QmVoYXZpb3VyKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpbnB1dCBpcyBhIHN0cmluZy5cbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2JlaGF2aW91cicgbXVzdCBiZSBhIHN0cmluZyBjb250YWluaW5nIG9wdGlvbnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBzdHJpbmcgY29udGFpbnMgYW55IGtleXdvcmRzLlxuICAgICAgICAvLyBOb25lIGFyZSByZXF1aXJlZC5cbiAgICAgICAgdmFyIHRhcCA9IGVudHJ5LmluZGV4T2YoXCJ0YXBcIikgPj0gMDtcbiAgICAgICAgdmFyIGRyYWcgPSBlbnRyeS5pbmRleE9mKFwiZHJhZ1wiKSA+PSAwO1xuICAgICAgICB2YXIgZml4ZWQgPSBlbnRyeS5pbmRleE9mKFwiZml4ZWRcIikgPj0gMDtcbiAgICAgICAgdmFyIHNuYXAgPSBlbnRyeS5pbmRleE9mKFwic25hcFwiKSA+PSAwO1xuICAgICAgICB2YXIgaG92ZXIgPSBlbnRyeS5pbmRleE9mKFwiaG92ZXJcIikgPj0gMDtcbiAgICAgICAgdmFyIHVuY29uc3RyYWluZWQgPSBlbnRyeS5pbmRleE9mKFwidW5jb25zdHJhaW5lZFwiKSA+PSAwO1xuICAgICAgICB2YXIgZHJhZ0FsbCA9IGVudHJ5LmluZGV4T2YoXCJkcmFnLWFsbFwiKSA+PSAwO1xuICAgICAgICB2YXIgc21vb3RoU3RlcHMgPSBlbnRyeS5pbmRleE9mKFwic21vb3RoLXN0ZXBzXCIpID49IDA7XG4gICAgICAgIGlmIChmaXhlZCkge1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5oYW5kbGVzICE9PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2ZpeGVkJyBiZWhhdmlvdXIgbXVzdCBiZSB1c2VkIHdpdGggMiBoYW5kbGVzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXNlIG1hcmdpbiB0byBlbmZvcmNlIGZpeGVkIHN0YXRlXG4gICAgICAgICAgICB0ZXN0TWFyZ2luKHBhcnNlZCwgcGFyc2VkLnN0YXJ0WzFdIC0gcGFyc2VkLnN0YXJ0WzBdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5jb25zdHJhaW5lZCAmJiAocGFyc2VkLm1hcmdpbiB8fCBwYXJzZWQubGltaXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAndW5jb25zdHJhaW5lZCcgYmVoYXZpb3VyIGNhbm5vdCBiZSB1c2VkIHdpdGggbWFyZ2luIG9yIGxpbWl0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5ldmVudHMgPSB7XG4gICAgICAgICAgICB0YXA6IHRhcCB8fCBzbmFwLFxuICAgICAgICAgICAgZHJhZzogZHJhZyxcbiAgICAgICAgICAgIGRyYWdBbGw6IGRyYWdBbGwsXG4gICAgICAgICAgICBzbW9vdGhTdGVwczogc21vb3RoU3RlcHMsXG4gICAgICAgICAgICBmaXhlZDogZml4ZWQsXG4gICAgICAgICAgICBzbmFwOiBzbmFwLFxuICAgICAgICAgICAgaG92ZXI6IGhvdmVyLFxuICAgICAgICAgICAgdW5jb25zdHJhaW5lZDogdW5jb25zdHJhaW5lZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFRvb2x0aXBzKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKGVudHJ5ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeSA9PT0gdHJ1ZSB8fCBpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJzZWQuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnRvb2x0aXBzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW50cnkgPSBhc0FycmF5KGVudHJ5KTtcbiAgICAgICAgICAgIGlmIChlbnRyeS5sZW5ndGggIT09IHBhcnNlZC5oYW5kbGVzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogbXVzdCBwYXNzIGEgZm9ybWF0dGVyIGZvciBhbGwgaGFuZGxlcy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbnRyeS5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZvcm1hdHRlciAhPT0gXCJib29sZWFuXCIgJiYgIWlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGZvcm1hdHRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3Rvb2x0aXBzJyBtdXN0IGJlIHBhc3NlZCBhIGZvcm1hdHRlciBvciAnZmFsc2UnLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcyA9IGVudHJ5O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RIYW5kbGVBdHRyaWJ1dGVzKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IG11c3QgcGFzcyBhIGF0dHJpYnV0ZXMgZm9yIGFsbCBoYW5kbGVzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuaGFuZGxlQXR0cmlidXRlcyA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QXJpYUZvcm1hdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYXJpYUZvcm1hdCcgcmVxdWlyZXMgJ3RvJyBtZXRob2QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5hcmlhRm9ybWF0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RGb3JtYXQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzVmFsaWRGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnZm9ybWF0JyByZXF1aXJlcyAndG8nIGFuZCAnZnJvbScgbWV0aG9kcy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmZvcm1hdCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmRTdXBwb3J0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZFN1cHBvcnQnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkU3VwcG9ydCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0RG9jdW1lbnRFbGVtZW50KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBhbiBhZHZhbmNlZCBvcHRpb24uIFBhc3NlZCB2YWx1ZXMgYXJlIHVzZWQgd2l0aG91dCB2YWxpZGF0aW9uLlxuICAgICAgICBwYXJzZWQuZG9jdW1lbnRFbGVtZW50ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RDc3NQcmVmaXgocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcInN0cmluZ1wiICYmIGVudHJ5ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nzc1ByZWZpeCcgbXVzdCBiZSBhIHN0cmluZyBvciBgZmFsc2VgLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuY3NzUHJlZml4ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RDc3NDbGFzc2VzKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nzc0NsYXNzZXMnIG11c3QgYmUgYW4gb2JqZWN0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHBhcnNlZC5jc3NQcmVmaXggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHBhcnNlZC5jc3NDbGFzc2VzID0ge307XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlbnRyeSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLmNzc0NsYXNzZXNba2V5XSA9IHBhcnNlZC5jc3NQcmVmaXggKyBlbnRyeVtrZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3NlcyA9IGVudHJ5O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFRlc3QgYWxsIGRldmVsb3BlciBzZXR0aW5ncyBhbmQgcGFyc2UgdG8gYXNzdW1wdGlvbi1zYWZlIHZhbHVlcy5cbiAgICBmdW5jdGlvbiB0ZXN0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIC8vIFRvIHByb3ZlIGEgZml4IGZvciAjNTM3LCBmcmVlemUgb3B0aW9ucyBoZXJlLlxuICAgICAgICAvLyBJZiB0aGUgb2JqZWN0IGlzIG1vZGlmaWVkLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAgICAgICAgLy8gT2JqZWN0LmZyZWV6ZShvcHRpb25zKTtcbiAgICAgICAgdmFyIHBhcnNlZCA9IHtcbiAgICAgICAgICAgIG1hcmdpbjogbnVsbCxcbiAgICAgICAgICAgIGxpbWl0OiBudWxsLFxuICAgICAgICAgICAgcGFkZGluZzogbnVsbCxcbiAgICAgICAgICAgIGFuaW1hdGU6IHRydWUsXG4gICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgYXJpYUZvcm1hdDogZGVmYXVsdEZvcm1hdHRlcixcbiAgICAgICAgICAgIGZvcm1hdDogZGVmYXVsdEZvcm1hdHRlcixcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVGVzdHMgYXJlIGV4ZWN1dGVkIGluIHRoZSBvcmRlciB0aGV5IGFyZSBwcmVzZW50ZWQgaGVyZS5cbiAgICAgICAgdmFyIHRlc3RzID0ge1xuICAgICAgICAgICAgc3RlcDogeyByOiBmYWxzZSwgdDogdGVzdFN0ZXAgfSxcbiAgICAgICAgICAgIGtleWJvYXJkUGFnZU11bHRpcGxpZXI6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZFBhZ2VNdWx0aXBsaWVyIH0sXG4gICAgICAgICAgICBrZXlib2FyZE11bHRpcGxpZXI6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZE11bHRpcGxpZXIgfSxcbiAgICAgICAgICAgIGtleWJvYXJkRGVmYXVsdFN0ZXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZERlZmF1bHRTdGVwIH0sXG4gICAgICAgICAgICBzdGFydDogeyByOiB0cnVlLCB0OiB0ZXN0U3RhcnQgfSxcbiAgICAgICAgICAgIGNvbm5lY3Q6IHsgcjogdHJ1ZSwgdDogdGVzdENvbm5lY3QgfSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogeyByOiB0cnVlLCB0OiB0ZXN0RGlyZWN0aW9uIH0sXG4gICAgICAgICAgICBzbmFwOiB7IHI6IGZhbHNlLCB0OiB0ZXN0U25hcCB9LFxuICAgICAgICAgICAgYW5pbWF0ZTogeyByOiBmYWxzZSwgdDogdGVzdEFuaW1hdGUgfSxcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB7IHI6IGZhbHNlLCB0OiB0ZXN0QW5pbWF0aW9uRHVyYXRpb24gfSxcbiAgICAgICAgICAgIHJhbmdlOiB7IHI6IHRydWUsIHQ6IHRlc3RSYW5nZSB9LFxuICAgICAgICAgICAgb3JpZW50YXRpb246IHsgcjogZmFsc2UsIHQ6IHRlc3RPcmllbnRhdGlvbiB9LFxuICAgICAgICAgICAgbWFyZ2luOiB7IHI6IGZhbHNlLCB0OiB0ZXN0TWFyZ2luIH0sXG4gICAgICAgICAgICBsaW1pdDogeyByOiBmYWxzZSwgdDogdGVzdExpbWl0IH0sXG4gICAgICAgICAgICBwYWRkaW5nOiB7IHI6IGZhbHNlLCB0OiB0ZXN0UGFkZGluZyB9LFxuICAgICAgICAgICAgYmVoYXZpb3VyOiB7IHI6IHRydWUsIHQ6IHRlc3RCZWhhdmlvdXIgfSxcbiAgICAgICAgICAgIGFyaWFGb3JtYXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RBcmlhRm9ybWF0IH0sXG4gICAgICAgICAgICBmb3JtYXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RGb3JtYXQgfSxcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7IHI6IGZhbHNlLCB0OiB0ZXN0VG9vbHRpcHMgfSxcbiAgICAgICAgICAgIGtleWJvYXJkU3VwcG9ydDogeyByOiB0cnVlLCB0OiB0ZXN0S2V5Ym9hcmRTdXBwb3J0IH0sXG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQ6IHsgcjogZmFsc2UsIHQ6IHRlc3REb2N1bWVudEVsZW1lbnQgfSxcbiAgICAgICAgICAgIGNzc1ByZWZpeDogeyByOiB0cnVlLCB0OiB0ZXN0Q3NzUHJlZml4IH0sXG4gICAgICAgICAgICBjc3NDbGFzc2VzOiB7IHI6IHRydWUsIHQ6IHRlc3RDc3NDbGFzc2VzIH0sXG4gICAgICAgICAgICBoYW5kbGVBdHRyaWJ1dGVzOiB7IHI6IGZhbHNlLCB0OiB0ZXN0SGFuZGxlQXR0cmlidXRlcyB9LFxuICAgICAgICB9O1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBjb25uZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJsdHJcIixcbiAgICAgICAgICAgIGJlaGF2aW91cjogXCJ0YXBcIixcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgIGtleWJvYXJkU3VwcG9ydDogdHJ1ZSxcbiAgICAgICAgICAgIGNzc1ByZWZpeDogXCJub1VpLVwiLFxuICAgICAgICAgICAgY3NzQ2xhc3NlczogY3NzQ2xhc3NlcyxcbiAgICAgICAgICAgIGtleWJvYXJkUGFnZU11bHRpcGxpZXI6IDUsXG4gICAgICAgICAgICBrZXlib2FyZE11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBrZXlib2FyZERlZmF1bHRTdGVwOiAxMCxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQXJpYUZvcm1hdCBkZWZhdWx0cyB0byByZWd1bGFyIGZvcm1hdCwgaWYgYW55LlxuICAgICAgICBpZiAob3B0aW9ucy5mb3JtYXQgJiYgIW9wdGlvbnMuYXJpYUZvcm1hdCkge1xuICAgICAgICAgICAgb3B0aW9ucy5hcmlhRm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUnVuIGFsbCBvcHRpb25zIHRocm91Z2ggYSB0ZXN0aW5nIG1lY2hhbmlzbSB0byBlbnN1cmUgY29ycmVjdFxuICAgICAgICAvLyBpbnB1dC4gSXQgc2hvdWxkIGJlIG5vdGVkIHRoYXQgb3B0aW9ucyBtaWdodCBnZXQgbW9kaWZpZWQgdG9cbiAgICAgICAgLy8gYmUgaGFuZGxlZCBwcm9wZXJseS4gRS5nLiB3cmFwcGluZyBpbnRlZ2VycyBpbiBhcnJheXMuXG4gICAgICAgIE9iamVjdC5rZXlzKHRlc3RzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgb3B0aW9uIGlzbid0IHNldCwgYnV0IGl0IGlzIHJlcXVpcmVkLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgICAgIGlmICghaXNTZXQob3B0aW9uc1tuYW1lXSkgJiYgZGVmYXVsdHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmICh0ZXN0c1tuYW1lXS5yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdcIiArIG5hbWUgKyBcIicgaXMgcmVxdWlyZWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZXN0c1tuYW1lXS50KHBhcnNlZCwgIWlzU2V0KG9wdGlvbnNbbmFtZV0pID8gZGVmYXVsdHNbbmFtZV0gOiBvcHRpb25zW25hbWVdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEZvcndhcmQgcGlwcyBvcHRpb25zXG4gICAgICAgIHBhcnNlZC5waXBzID0gb3B0aW9ucy5waXBzO1xuICAgICAgICAvLyBBbGwgcmVjZW50IGJyb3dzZXJzIGFjY2VwdCB1bnByZWZpeGVkIHRyYW5zZm9ybS5cbiAgICAgICAgLy8gV2UgbmVlZCAtbXMtIGZvciBJRTkgYW5kIC13ZWJraXQtIGZvciBvbGRlciBBbmRyb2lkO1xuICAgICAgICAvLyBBc3N1bWUgdXNlIG9mIC13ZWJraXQtIGlmIHVucHJlZml4ZWQgYW5kIC1tcy0gYXJlIG5vdCBzdXBwb3J0ZWQuXG4gICAgICAgIC8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI2ZlYXQ9dHJhbnNmb3JtczJkXG4gICAgICAgIHZhciBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG1zUHJlZml4ID0gZC5zdHlsZS5tc1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgbm9QcmVmaXggPSBkLnN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBwYXJzZWQudHJhbnNmb3JtUnVsZSA9IG5vUHJlZml4ID8gXCJ0cmFuc2Zvcm1cIiA6IG1zUHJlZml4ID8gXCJtc1RyYW5zZm9ybVwiIDogXCJ3ZWJraXRUcmFuc2Zvcm1cIjtcbiAgICAgICAgLy8gUGlwcyBkb24ndCBtb3ZlLCBzbyB3ZSBjYW4gcGxhY2UgdGhlbSB1c2luZyBsZWZ0L3RvcC5cbiAgICAgICAgdmFyIHN0eWxlcyA9IFtcbiAgICAgICAgICAgIFtcImxlZnRcIiwgXCJ0b3BcIl0sXG4gICAgICAgICAgICBbXCJyaWdodFwiLCBcImJvdHRvbVwiXSxcbiAgICAgICAgXTtcbiAgICAgICAgcGFyc2VkLnN0eWxlID0gc3R5bGVzW3BhcnNlZC5kaXJdW3BhcnNlZC5vcnRdO1xuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cbiAgICAvL2VuZHJlZ2lvblxuICAgIGZ1bmN0aW9uIHNjb3BlKHRhcmdldCwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zKSB7XG4gICAgICAgIHZhciBhY3Rpb25zID0gZ2V0QWN0aW9ucygpO1xuICAgICAgICB2YXIgc3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUgPSBnZXRTdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSgpO1xuICAgICAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gc3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUgJiYgZ2V0U3VwcG9ydHNQYXNzaXZlKCk7XG4gICAgICAgIC8vIEFsbCB2YXJpYWJsZXMgbG9jYWwgdG8gJ3Njb3BlJyBhcmUgcHJlZml4ZWQgd2l0aCAnc2NvcGVfJ1xuICAgICAgICAvLyBTbGlkZXIgRE9NIE5vZGVzXG4gICAgICAgIHZhciBzY29wZV9UYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHZhciBzY29wZV9CYXNlO1xuICAgICAgICB2YXIgc2NvcGVfSGFuZGxlcztcbiAgICAgICAgdmFyIHNjb3BlX0Nvbm5lY3RzO1xuICAgICAgICB2YXIgc2NvcGVfUGlwcztcbiAgICAgICAgdmFyIHNjb3BlX1Rvb2x0aXBzO1xuICAgICAgICAvLyBTbGlkZXIgc3RhdGUgdmFsdWVzXG4gICAgICAgIHZhciBzY29wZV9TcGVjdHJ1bSA9IG9wdGlvbnMuc3BlY3RydW07XG4gICAgICAgIHZhciBzY29wZV9WYWx1ZXMgPSBbXTtcbiAgICAgICAgdmFyIHNjb3BlX0xvY2F0aW9ucyA9IFtdO1xuICAgICAgICB2YXIgc2NvcGVfSGFuZGxlTnVtYmVycyA9IFtdO1xuICAgICAgICB2YXIgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ID0gMDtcbiAgICAgICAgdmFyIHNjb3BlX0V2ZW50cyA9IHt9O1xuICAgICAgICAvLyBEb2N1bWVudCBOb2Rlc1xuICAgICAgICB2YXIgc2NvcGVfRG9jdW1lbnQgPSB0YXJnZXQub3duZXJEb2N1bWVudDtcbiAgICAgICAgdmFyIHNjb3BlX0RvY3VtZW50RWxlbWVudCA9IG9wdGlvbnMuZG9jdW1lbnRFbGVtZW50IHx8IHNjb3BlX0RvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHNjb3BlX0JvZHkgPSBzY29wZV9Eb2N1bWVudC5ib2R5O1xuICAgICAgICAvLyBGb3IgaG9yaXpvbnRhbCBzbGlkZXJzIGluIHN0YW5kYXJkIGx0ciBkb2N1bWVudHMsXG4gICAgICAgIC8vIG1ha2UgLm5vVWktb3JpZ2luIG92ZXJmbG93IHRvIHRoZSBsZWZ0IHNvIHRoZSBkb2N1bWVudCBkb2Vzbid0IHNjcm9sbC5cbiAgICAgICAgdmFyIHNjb3BlX0Rpck9mZnNldCA9IHNjb3BlX0RvY3VtZW50LmRpciA9PT0gXCJydGxcIiB8fCBvcHRpb25zLm9ydCA9PT0gMSA/IDAgOiAxMDA7XG4gICAgICAgIC8vIENyZWF0ZXMgYSBub2RlLCBhZGRzIGl0IHRvIHRhcmdldCwgcmV0dXJucyB0aGUgbmV3IG5vZGUuXG4gICAgICAgIGZ1bmN0aW9uIGFkZE5vZGVUbyhhZGRUYXJnZXQsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdmFyIGRpdiA9IHNjb3BlX0RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoZGl2LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkVGFyZ2V0LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGVuZCBhIG9yaWdpbiB0byB0aGUgYmFzZVxuICAgICAgICBmdW5jdGlvbiBhZGRPcmlnaW4oYmFzZSwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luID0gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5vcmlnaW4pO1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGFkZE5vZGVUbyhvcmlnaW4sIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGUpO1xuICAgICAgICAgICAgYWRkTm9kZVRvKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLnRvdWNoQXJlYSk7XG4gICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1oYW5kbGVcIiwgU3RyaW5nKGhhbmRsZU51bWJlcikpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMua2V5Ym9hcmRTdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9HbG9iYWxfYXR0cmlidXRlcy90YWJpbmRleFxuICAgICAgICAgICAgICAgIC8vIDAgPSBmb2N1c2FibGUgYW5kIHJlYWNoYWJsZVxuICAgICAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgICAgICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRLZXlkb3duKGV2ZW50LCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaGFuZGxlQXR0cmlidXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZXNfMSA9IG9wdGlvbnMuaGFuZGxlQXR0cmlidXRlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXNfMSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzXzFbYXR0cmlidXRlXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInNsaWRlclwiKTtcbiAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLW9yaWVudGF0aW9uXCIsIG9wdGlvbnMub3J0ID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZUxvd2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGhhbmRsZU51bWJlciA9PT0gb3B0aW9ucy5oYW5kbGVzIC0gMSkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZVVwcGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcmlnaW47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5zZXJ0IG5vZGVzIGZvciBjb25uZWN0IGVsZW1lbnRzXG4gICAgICAgIGZ1bmN0aW9uIGFkZENvbm5lY3QoYmFzZSwgYWRkKSB7XG4gICAgICAgICAgICBpZiAoIWFkZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmNvbm5lY3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBoYW5kbGVzIHRvIHRoZSBzbGlkZXIgYmFzZS5cbiAgICAgICAgZnVuY3Rpb24gYWRkRWxlbWVudHMoY29ubmVjdE9wdGlvbnMsIGJhc2UpIHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0QmFzZSA9IGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMuY29ubmVjdHMpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcyA9IFtdO1xuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMgPSBbXTtcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLnB1c2goYWRkQ29ubmVjdChjb25uZWN0QmFzZSwgY29ubmVjdE9wdGlvbnNbMF0pKTtcbiAgICAgICAgICAgIC8vIFs6Ojo6Tz09PT1PPT09PU89PT09XVxuICAgICAgICAgICAgLy8gY29ubmVjdE9wdGlvbnMgPSBbMCwgMSwgMSwgMV1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyBLZWVwIGEgbGlzdCBvZiBhbGwgYWRkZWQgaGFuZGxlcy5cbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzLnB1c2goYWRkT3JpZ2luKGJhc2UsIGkpKTtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzW2ldID0gaTtcbiAgICAgICAgICAgICAgICBzY29wZV9Db25uZWN0cy5wdXNoKGFkZENvbm5lY3QoY29ubmVjdEJhc2UsIGNvbm5lY3RPcHRpb25zW2kgKyAxXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEluaXRpYWxpemUgYSBzaW5nbGUgc2xpZGVyLlxuICAgICAgICBmdW5jdGlvbiBhZGRTbGlkZXIoYWRkVGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBBcHBseSBjbGFzc2VzIGFuZCBkYXRhIHRvIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXJnZXQpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGlyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMubHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnJ0bCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5vcnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5ob3Jpem9udGFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnZlcnRpY2FsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0ZXh0RGlyZWN0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZShhZGRUYXJnZXQpLmRpcmVjdGlvbjtcbiAgICAgICAgICAgIGlmICh0ZXh0RGlyZWN0aW9uID09PSBcInJ0bFwiKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGV4dERpcmVjdGlvblJ0bCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50ZXh0RGlyZWN0aW9uTHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGROb2RlVG8oYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuYmFzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYWRkVG9vbHRpcChoYW5kbGUsIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnRvb2x0aXBzIHx8ICFvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGhhbmRsZS5maXJzdENoaWxkLCBvcHRpb25zLmNzc0NsYXNzZXMudG9vbHRpcCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNTbGlkZXJEaXNhYmxlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9UYXJnZXQuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGlzYWJsZSB0aGUgc2xpZGVyIGRyYWdnaW5nIGlmIGFueSBoYW5kbGUgaXMgZGlzYWJsZWRcbiAgICAgICAgZnVuY3Rpb24gaXNIYW5kbGVEaXNhYmxlZChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVPcmlnaW4gPSBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlT3JpZ2luLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVRvb2x0aXBzKCkge1xuICAgICAgICAgICAgaWYgKHNjb3BlX1Rvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzKTtcbiAgICAgICAgICAgICAgICBzY29wZV9Ub29sdGlwcy5mb3JFYWNoKGZ1bmN0aW9uICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50KHRvb2x0aXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSB0b29sdGlwcyBvcHRpb24gaXMgYSBzaG9ydGhhbmQgZm9yIHVzaW5nIHRoZSAndXBkYXRlJyBldmVudC5cbiAgICAgICAgZnVuY3Rpb24gdG9vbHRpcHMoKSB7XG4gICAgICAgICAgICByZW1vdmVUb29sdGlwcygpO1xuICAgICAgICAgICAgLy8gVG9vbHRpcHMgYXJlIGFkZGVkIHdpdGggb3B0aW9ucy50b29sdGlwcyBpbiBvcmlnaW5hbCBvcmRlci5cbiAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzID0gc2NvcGVfSGFuZGxlcy5tYXAoYWRkVG9vbHRpcCk7XG4gICAgICAgICAgICBiaW5kRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGVOdW1iZXIsIHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgICAgIGlmICghc2NvcGVfVG9vbHRpcHMgfHwgIW9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2NvcGVfVG9vbHRpcHNbaGFuZGxlTnVtYmVyXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSB2YWx1ZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gb3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdLnRvKHVuZW5jb2RlZFtoYW5kbGVOdW1iZXJdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHNbaGFuZGxlTnVtYmVyXS5pbm5lckhUTUwgPSBmb3JtYXR0ZWRWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFyaWEoKSB7XG4gICAgICAgICAgICByZW1vdmVFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMuYXJpYSk7XG4gICAgICAgICAgICBiaW5kRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLmFyaWEsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZU51bWJlciwgdW5lbmNvZGVkLCB0YXAsIHBvc2l0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBBcmlhIFZhbHVlcyBmb3IgYWxsIGhhbmRsZXMsIGFzIGEgY2hhbmdlIGluIG9uZSBjaGFuZ2VzIG1pbiBhbmQgbWF4IHZhbHVlcyBmb3IgdGhlIG5leHQuXG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlID0gc2NvcGVfSGFuZGxlc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaW5kZXgsIDAsIHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGluZGV4LCAxMDAsIHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm93ID0gcG9zaXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9ybWF0dGVkIHZhbHVlIGZvciBkaXNwbGF5XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gU3RyaW5nKG9wdGlvbnMuYXJpYUZvcm1hdC50byh1bmVuY29kZWRbaW5kZXhdKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1hcCB0byBzbGlkZXIgcmFuZ2UgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhtaW4pLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgIG1heCA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhtYXgpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgIG5vdyA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhub3cpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbWluXCIsIG1pbik7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbWF4XCIsIG1heCk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbm93XCIsIG5vdyk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiLCB0ZXh0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEdyb3VwKHBpcHMpIHtcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgcmFuZ2UuXG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlJhbmdlIHx8IHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5TdGVwcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9TcGVjdHJ1bS54VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5Db3VudCkge1xuICAgICAgICAgICAgICAgIGlmIChwaXBzLnZhbHVlcyA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3ZhbHVlcycgKD49IDIpIHJlcXVpcmVkIGZvciBtb2RlICdjb3VudCcuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEaXZpZGUgMCAtIDEwMCBpbiAnY291bnQnIHBhcnRzLlxuICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IHBpcHMudmFsdWVzIC0gMTtcbiAgICAgICAgICAgICAgICB2YXIgc3ByZWFkID0gMTAwIC8gaW50ZXJ2YWw7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIExpc3QgdGhlc2UgcGFydHMgYW5kIGhhdmUgdGhlbSBoYW5kbGVkIGFzICdwb3NpdGlvbnMnLlxuICAgICAgICAgICAgICAgIHdoaWxlIChpbnRlcnZhbC0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpbnRlcnZhbF0gPSBpbnRlcnZhbCAqIHNwcmVhZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goMTAwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwVG9SYW5nZSh2YWx1ZXMsIHBpcHMuc3RlcHBlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlBvc2l0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIE1hcCBhbGwgcGVyY2VudGFnZXMgdG8gb24tcmFuZ2UgdmFsdWVzLlxuICAgICAgICAgICAgICAgIHJldHVybiBtYXBUb1JhbmdlKHBpcHMudmFsdWVzLCBwaXBzLnN0ZXBwZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5WYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgbXVzdCBiZSBzdGVwcGVkLCBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBwZXJjZW50YWdlIGZpcnN0LlxuICAgICAgICAgICAgICAgIGlmIChwaXBzLnN0ZXBwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBpcHMudmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgdG8gcGVyY2VudGFnZSwgYXBwbHkgc3RlcCwgcmV0dXJuIHRvIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodmFsdWUpKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHdlIGNhbiBzaW1wbHkgdXNlIHRoZSB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpcHMudmFsdWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtdOyAvLyBwaXBzLm1vZGUgPSBuZXZlclxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1hcFRvUmFuZ2UodmFsdWVzLCBzdGVwcGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHN0ZXBwZWQgPyBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHZhbHVlKSA6IHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlU3ByZWFkKHBpcHMpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNhZmVJbmNyZW1lbnQodmFsdWUsIGluY3JlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIEF2b2lkIGZsb2F0aW5nIHBvaW50IHZhcmlhbmNlIGJ5IGRyb3BwaW5nIHRoZSBzbWFsbGVzdCBkZWNpbWFsIHBsYWNlcy5cbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKCh2YWx1ZSArIGluY3JlbWVudCkudG9GaXhlZCg3KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZ3JvdXAgPSBnZXRHcm91cChwaXBzKTtcbiAgICAgICAgICAgIHZhciBpbmRleGVzID0ge307XG4gICAgICAgICAgICB2YXIgZmlyc3RJblJhbmdlID0gc2NvcGVfU3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgICAgIHZhciBsYXN0SW5SYW5nZSA9IHNjb3BlX1NwZWN0cnVtLnhWYWxbc2NvcGVfU3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHZhciBpZ25vcmVGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGlnbm9yZUxhc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBwcmV2UGN0ID0gMDtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIGdyb3VwLCBzb3J0IGl0IGFuZCBmaWx0ZXIgYXdheSBhbGwgZHVwbGljYXRlcy5cbiAgICAgICAgICAgIGdyb3VwID0gdW5pcXVlKGdyb3VwLnNsaWNlKCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgcmFuZ2Ugc3RhcnRzIHdpdGggdGhlIGZpcnN0IGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoZ3JvdXBbMF0gIT09IGZpcnN0SW5SYW5nZSkge1xuICAgICAgICAgICAgICAgIGdyb3VwLnVuc2hpZnQoZmlyc3RJblJhbmdlKTtcbiAgICAgICAgICAgICAgICBpZ25vcmVGaXJzdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMaWtld2lzZSBmb3IgdGhlIGxhc3Qgb25lLlxuICAgICAgICAgICAgaWYgKGdyb3VwW2dyb3VwLmxlbmd0aCAtIDFdICE9PSBsYXN0SW5SYW5nZSkge1xuICAgICAgICAgICAgICAgIGdyb3VwLnB1c2gobGFzdEluUmFuZ2UpO1xuICAgICAgICAgICAgICAgIGlnbm9yZUxhc3QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JvdXAuZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc3RlcCBhbmQgdGhlIGxvd2VyICsgdXBwZXIgcG9zaXRpb25zLlxuICAgICAgICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgIHZhciBxO1xuICAgICAgICAgICAgICAgIHZhciBsb3cgPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIHZhciBoaWdoID0gZ3JvdXBbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3UGN0O1xuICAgICAgICAgICAgICAgIHZhciBwY3REaWZmZXJlbmNlO1xuICAgICAgICAgICAgICAgIHZhciBwY3RQb3M7XG4gICAgICAgICAgICAgICAgdmFyIHR5cGU7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBzO1xuICAgICAgICAgICAgICAgIHZhciByZWFsU3RlcHM7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBTaXplO1xuICAgICAgICAgICAgICAgIHZhciBpc1N0ZXBzID0gcGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlN0ZXBzO1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gdXNpbmcgJ3N0ZXBzJyBtb2RlLCB1c2UgdGhlIHByb3ZpZGVkIHN0ZXBzLlxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgd2UnbGwgc3RlcCBvbiB0byB0aGUgbmV4dCBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICBpZiAoaXNTdGVwcykge1xuICAgICAgICAgICAgICAgICAgICBzdGVwID0gc2NvcGVfU3BlY3RydW0ueE51bVN0ZXBzW2luZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCB0byBhICdmdWxsJyBzdGVwLlxuICAgICAgICAgICAgICAgIGlmICghc3RlcCkge1xuICAgICAgICAgICAgICAgICAgICBzdGVwID0gaGlnaCAtIGxvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgaGlnaCBpcyB1bmRlZmluZWQgd2UgYXJlIGF0IHRoZSBsYXN0IHN1YnJhbmdlLiBNYWtlIHN1cmUgaXQgaXRlcmF0ZXMgb25jZSAoIzEwODgpXG4gICAgICAgICAgICAgICAgaWYgKGhpZ2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBoaWdoID0gbG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgc3RlcCBpc24ndCAwLCB3aGljaCB3b3VsZCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wICgjNjU0KVxuICAgICAgICAgICAgICAgIHN0ZXAgPSBNYXRoLm1heChzdGVwLCAwLjAwMDAwMDEpO1xuICAgICAgICAgICAgICAgIC8vIEZpbmQgYWxsIHN0ZXBzIGluIHRoZSBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBsb3c7IGkgPD0gaGlnaDsgaSA9IHNhZmVJbmNyZW1lbnQoaSwgc3RlcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBwZXJjZW50YWdlIHZhbHVlIGZvciB0aGUgY3VycmVudCBzdGVwLFxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHNpemUgZm9yIHRoZSBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICAgICAgbmV3UGN0ID0gc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyhpKTtcbiAgICAgICAgICAgICAgICAgICAgcGN0RGlmZmVyZW5jZSA9IG5ld1BjdCAtIHByZXZQY3Q7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXBzID0gcGN0RGlmZmVyZW5jZSAvIChwaXBzLmRlbnNpdHkgfHwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWxTdGVwcyA9IE1hdGgucm91bmQoc3RlcHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHJhdGlvIHJlcHJlc2VudHMgdGhlIGFtb3VudCBvZiBwZXJjZW50YWdlLXNwYWNlIGEgcG9pbnQgaW5kaWNhdGVzLlxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgYSBkZW5zaXR5IDEgdGhlIHBvaW50cy9wZXJjZW50YWdlID0gMS4gRm9yIGRlbnNpdHkgMiwgdGhhdCBwZXJjZW50YWdlIG5lZWRzIHRvIGJlIHJlLWRpdmlkZWQuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJvdW5kIHRoZSBwZXJjZW50YWdlIG9mZnNldCB0byBhbiBldmVuIG51bWJlciwgdGhlbiBkaXZpZGUgYnkgdHdvXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIHNwcmVhZCB0aGUgb2Zmc2V0IG9uIGJvdGggc2lkZXMgb2YgdGhlIHJhbmdlLlxuICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZSA9IHBjdERpZmZlcmVuY2UgLyByZWFsU3RlcHM7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpdmlkZSBhbGwgcG9pbnRzIGV2ZW5seSwgYWRkaW5nIHRoZSBjb3JyZWN0IG51bWJlciB0byB0aGlzIHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgICAgICAvLyBSdW4gdXAgdG8gPD0gc28gdGhhdCAxMDAlIGdldHMgYSBwb2ludCwgZXZlbnQgaWYgaWdub3JlTGFzdCBpcyBzZXQuXG4gICAgICAgICAgICAgICAgICAgIGZvciAocSA9IDE7IHEgPD0gcmVhbFN0ZXBzOyBxICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSByYXRpbyBiZXR3ZWVuIHRoZSByb3VuZGVkIHZhbHVlIGFuZCB0aGUgYWN0dWFsIHNpemUgbWlnaHQgYmUgfjElIG9mZi5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvcnJlY3QgdGhlIHBlcmNlbnRhZ2Ugb2Zmc2V0IGJ5IHRoZSBudW1iZXIgb2YgcG9pbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXIgc3VicmFuZ2UuIGRlbnNpdHkgPSAxIHdpbGwgcmVzdWx0IGluIDEwMCBwb2ludHMgb24gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmdWxsIHJhbmdlLCAyIGZvciA1MCwgNCBmb3IgMjUsIGV0Yy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBjdFBvcyA9IHByZXZQY3QgKyBxICogc3RlcFNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVzW3BjdFBvcy50b0ZpeGVkKDUpXSA9IFtzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcocGN0UG9zKSwgMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBwb2ludCB0eXBlLlxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gZ3JvdXAuaW5kZXhPZihpKSA+IC0xID8gZXhwb3J0cy5QaXBzVHlwZS5MYXJnZVZhbHVlIDogaXNTdGVwcyA/IGV4cG9ydHMuUGlwc1R5cGUuU21hbGxWYWx1ZSA6IGV4cG9ydHMuUGlwc1R5cGUuTm9WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5mb3JjZSB0aGUgJ2lnbm9yZUZpcnN0JyBvcHRpb24gYnkgb3ZlcndyaXRpbmcgdGhlIHR5cGUgZm9yIDAuXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5kZXggJiYgaWdub3JlRmlyc3QgJiYgaSAhPT0gaGlnaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoaSA9PT0gaGlnaCAmJiBpZ25vcmVMYXN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFyayB0aGUgJ3R5cGUnIG9mIHRoaXMgcG9pbnQuIDAgPSBwbGFpbiwgMSA9IHJlYWwgdmFsdWUsIDIgPSBzdGVwIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhlc1tuZXdQY3QudG9GaXhlZCg1KV0gPSBbaSwgdHlwZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBwZXJjZW50YWdlIGNvdW50LlxuICAgICAgICAgICAgICAgICAgICBwcmV2UGN0ID0gbmV3UGN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYWRkTWFya2luZyhzcHJlYWQsIGZpbHRlckZ1bmMsIGZvcm1hdHRlcikge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gc2NvcGVfRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZVNpemVDbGFzc2VzID0gKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5Ob25lXSA9IFwiXCIsXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZU5vcm1hbCxcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLkxhcmdlVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlTGFyZ2UsXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5TbWFsbFZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZVN1YixcbiAgICAgICAgICAgICAgICBfYSk7XG4gICAgICAgICAgICB2YXIgbWFya2VyU2l6ZUNsYXNzZXMgPSAoX2IgPSB7fSxcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLk5vbmVdID0gXCJcIixcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlck5vcm1hbCxcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLkxhcmdlVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlckxhcmdlLFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuU21hbGxWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyU3ViLFxuICAgICAgICAgICAgICAgIF9iKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZU9yaWVudGF0aW9uQ2xhc3NlcyA9IFtvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVIb3Jpem9udGFsLCBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVWZXJ0aWNhbF07XG4gICAgICAgICAgICB2YXIgbWFya2VyT3JpZW50YXRpb25DbGFzc2VzID0gW29wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJIb3Jpem9udGFsLCBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyVmVydGljYWxdO1xuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgb3B0aW9ucy5jc3NDbGFzc2VzLnBpcHMpO1xuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgb3B0aW9ucy5vcnQgPT09IDAgPyBvcHRpb25zLmNzc0NsYXNzZXMucGlwc0hvcml6b250YWwgOiBvcHRpb25zLmNzc0NsYXNzZXMucGlwc1ZlcnRpY2FsKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldENsYXNzZXModHlwZSwgc291cmNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBzb3VyY2UgPT09IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZW50YXRpb25DbGFzc2VzID0gYSA/IHZhbHVlT3JpZW50YXRpb25DbGFzc2VzIDogbWFya2VyT3JpZW50YXRpb25DbGFzc2VzO1xuICAgICAgICAgICAgICAgIHZhciBzaXplQ2xhc3NlcyA9IGEgPyB2YWx1ZVNpemVDbGFzc2VzIDogbWFya2VyU2l6ZUNsYXNzZXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZSArIFwiIFwiICsgb3JpZW50YXRpb25DbGFzc2VzW29wdGlvbnMub3J0XSArIFwiIFwiICsgc2l6ZUNsYXNzZXNbdHlwZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRTcHJlYWQob2Zmc2V0LCB2YWx1ZSwgdHlwZSkge1xuICAgICAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBmaWx0ZXIgZnVuY3Rpb24sIGlmIGl0IGlzIHNldC5cbiAgICAgICAgICAgICAgICB0eXBlID0gZmlsdGVyRnVuYyA/IGZpbHRlckZ1bmModmFsdWUsIHR5cGUpIDogdHlwZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5QaXBzVHlwZS5Ob25lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIGEgbWFya2VyIGZvciBldmVyeSBwb2ludFxuICAgICAgICAgICAgICAgIHZhciBub2RlID0gYWRkTm9kZVRvKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGdldENsYXNzZXModHlwZSwgb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlcik7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtvcHRpb25zLnN0eWxlXSA9IG9mZnNldCArIFwiJVwiO1xuICAgICAgICAgICAgICAgIC8vIFZhbHVlcyBhcmUgb25seSBhcHBlbmRlZCBmb3IgcG9pbnRzIG1hcmtlZCAnMScgb3IgJzInLlxuICAgICAgICAgICAgICAgIGlmICh0eXBlID4gZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBhZGROb2RlVG8oZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGdldENsYXNzZXModHlwZSwgb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlW29wdGlvbnMuc3R5bGVdID0gb2Zmc2V0ICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gU3RyaW5nKGZvcm1hdHRlci50byh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFwcGVuZCBhbGwgcG9pbnRzLlxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3ByZWFkKS5mb3JFYWNoKGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICBhZGRTcHJlYWQob2Zmc2V0LCBzcHJlYWRbb2Zmc2V0XVswXSwgc3ByZWFkW29mZnNldF1bMV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZW1vdmVQaXBzKCkge1xuICAgICAgICAgICAgaWYgKHNjb3BlX1BpcHMpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50KHNjb3BlX1BpcHMpO1xuICAgICAgICAgICAgICAgIHNjb3BlX1BpcHMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBpcHMocGlwcykge1xuICAgICAgICAgICAgLy8gRml4ICM2NjlcbiAgICAgICAgICAgIHJlbW92ZVBpcHMoKTtcbiAgICAgICAgICAgIHZhciBzcHJlYWQgPSBnZW5lcmF0ZVNwcmVhZChwaXBzKTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSBwaXBzLmZpbHRlcjtcbiAgICAgICAgICAgIHZhciBmb3JtYXQgPSBwaXBzLmZvcm1hdCB8fCB7XG4gICAgICAgICAgICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKE1hdGgucm91bmQodmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNjb3BlX1BpcHMgPSBzY29wZV9UYXJnZXQuYXBwZW5kQ2hpbGQoYWRkTWFya2luZyhzcHJlYWQsIGZpbHRlciwgZm9ybWF0KSk7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfUGlwcztcbiAgICAgICAgfVxuICAgICAgICAvLyBTaG9ydGhhbmQgZm9yIGJhc2UgZGltZW5zaW9ucy5cbiAgICAgICAgZnVuY3Rpb24gYmFzZVNpemUoKSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNjb3BlX0Jhc2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB2YXIgYWx0ID0gKFwib2Zmc2V0XCIgKyBbXCJXaWR0aFwiLCBcIkhlaWdodFwiXVtvcHRpb25zLm9ydF0pO1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMub3J0ID09PSAwID8gcmVjdC53aWR0aCB8fCBzY29wZV9CYXNlW2FsdF0gOiByZWN0LmhlaWdodCB8fCBzY29wZV9CYXNlW2FsdF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlciBmb3IgYXR0YWNoaW5nIGV2ZW50cyB0cm91Z2ggYSBwcm94eS5cbiAgICAgICAgZnVuY3Rpb24gYXR0YWNoRXZlbnQoZXZlbnRzLCBlbGVtZW50LCBjYWxsYmFjaywgZGF0YSkge1xuICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byAnZmlsdGVyJyBldmVudHMgdG8gdGhlIHNsaWRlci5cbiAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYSBub2RlLCBub3QgYSBub2RlTGlzdFxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gZml4RXZlbnQoZXZlbnQsIGRhdGEucGFnZU9mZnNldCwgZGF0YS50YXJnZXQgfHwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgLy8gZml4RXZlbnQgcmV0dXJucyBmYWxzZSBpZiB0aGlzIGV2ZW50IGhhcyBhIGRpZmZlcmVudCB0YXJnZXRcbiAgICAgICAgICAgICAgICAvLyB3aGVuIGhhbmRsaW5nIChtdWx0aS0pIHRvdWNoIGV2ZW50cztcbiAgICAgICAgICAgICAgICBpZiAoIWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkb05vdFJlamVjdCBpcyBwYXNzZWQgYnkgYWxsIGVuZCBldmVudHMgdG8gbWFrZSBzdXJlIHJlbGVhc2VkIHRvdWNoZXNcbiAgICAgICAgICAgICAgICAvLyBhcmUgbm90IHJlamVjdGVkLCBsZWF2aW5nIHRoZSBzbGlkZXIgXCJzdHVja1wiIHRvIHRoZSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgaWYgKGlzU2xpZGVyRGlzYWJsZWQoKSAmJiAhZGF0YS5kb05vdFJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0b3AgaWYgYW4gYWN0aXZlICd0YXAnIHRyYW5zaXRpb24gaXMgdGFraW5nIHBsYWNlLlxuICAgICAgICAgICAgICAgIGlmIChoYXNDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXApICYmICFkYXRhLmRvTm90UmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIHJpZ2h0IG9yIG1pZGRsZSBjbGlja3Mgb24gc3RhcnQgIzQ1NFxuICAgICAgICAgICAgICAgIGlmIChldmVudHMgPT09IGFjdGlvbnMuc3RhcnQgJiYgZS5idXR0b25zICE9PSB1bmRlZmluZWQgJiYgZS5idXR0b25zID4gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElnbm9yZSByaWdodCBvciBtaWRkbGUgY2xpY2tzIG9uIHN0YXJ0ICM0NTRcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5ob3ZlciAmJiBlLmJ1dHRvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAnc3VwcG9ydHNQYXNzaXZlJyBpcyBvbmx5IHRydWUgaWYgYSBicm93c2VyIGFsc28gc3VwcG9ydHMgdG91Y2gtYWN0aW9uOiBub25lIGluIENTUy5cbiAgICAgICAgICAgICAgICAvLyBpT1Mgc2FmYXJpIGRvZXMgbm90LCBzbyBpdCBkb2Vzbid0IGdldCB0byBiZW5lZml0IGZyb20gcGFzc2l2ZSBzY3JvbGxpbmcuIGlPUyBkb2VzIHN1cHBvcnRcbiAgICAgICAgICAgICAgICAvLyB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbiwgYnV0IHRoYXQgYWxsb3dzIHBhbm5pbmcsIHdoaWNoIGJyZWFrc1xuICAgICAgICAgICAgICAgIC8vIHNsaWRlcnMgYWZ0ZXIgem9vbWluZy9vbiBub24tcmVzcG9uc2l2ZSBwYWdlcy5cbiAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzMxMTJcbiAgICAgICAgICAgICAgICBpZiAoIXN1cHBvcnRzUGFzc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUuY2FsY1BvaW50ID0gZS5wb2ludHNbb3B0aW9ucy5vcnRdO1xuICAgICAgICAgICAgICAgIC8vIENhbGwgdGhlIGV2ZW50IGhhbmRsZXIgd2l0aCB0aGUgZXZlbnQgWyBhbmQgYWRkaXRpb25hbCBkYXRhIF0uXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBtZXRob2RzID0gW107XG4gICAgICAgICAgICAvLyBCaW5kIGEgY2xvc3VyZSBvbiB0aGUgdGFyZ2V0IGZvciBldmVyeSBldmVudCB0eXBlLlxuICAgICAgICAgICAgZXZlbnRzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBtZXRob2QsIHN1cHBvcnRzUGFzc2l2ZSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2UpO1xuICAgICAgICAgICAgICAgIG1ldGhvZHMucHVzaChbZXZlbnROYW1lLCBtZXRob2RdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJvdmlkZSBhIGNsZWFuIGV2ZW50IHdpdGggc3RhbmRhcmRpemVkIG9mZnNldCB2YWx1ZXMuXG4gICAgICAgIGZ1bmN0aW9uIGZpeEV2ZW50KGUsIHBhZ2VPZmZzZXQsIGV2ZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBGaWx0ZXIgdGhlIGV2ZW50IHRvIHJlZ2lzdGVyIHRoZSB0eXBlLCB3aGljaCBjYW4gYmVcbiAgICAgICAgICAgIC8vIHRvdWNoLCBtb3VzZSBvciBwb2ludGVyLiBPZmZzZXQgY2hhbmdlcyBuZWVkIHRvIGJlXG4gICAgICAgICAgICAvLyBtYWRlIG9uIGFuIGV2ZW50IHNwZWNpZmljIGJhc2lzLlxuICAgICAgICAgICAgdmFyIHRvdWNoID0gZS50eXBlLmluZGV4T2YoXCJ0b3VjaFwiKSA9PT0gMDtcbiAgICAgICAgICAgIHZhciBtb3VzZSA9IGUudHlwZS5pbmRleE9mKFwibW91c2VcIikgPT09IDA7XG4gICAgICAgICAgICB2YXIgcG9pbnRlciA9IGUudHlwZS5pbmRleE9mKFwicG9pbnRlclwiKSA9PT0gMDtcbiAgICAgICAgICAgIHZhciB4ID0gMDtcbiAgICAgICAgICAgIHZhciB5ID0gMDtcbiAgICAgICAgICAgIC8vIElFMTAgaW1wbGVtZW50ZWQgcG9pbnRlciBldmVudHMgd2l0aCBhIHByZWZpeDtcbiAgICAgICAgICAgIGlmIChlLnR5cGUuaW5kZXhPZihcIk1TUG9pbnRlclwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBvaW50ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRXJyb25lb3VzIGV2ZW50cyBzZWVtIHRvIGJlIHBhc3NlZCBpbiBvY2Nhc2lvbmFsbHkgb24gaU9TL2lQYWRPUyBhZnRlciB1c2VyIGZpbmlzaGVzIGludGVyYWN0aW5nIHdpdGhcbiAgICAgICAgICAgIC8vIHRoZSBzbGlkZXIuIFRoZXkgYXBwZWFyIHRvIGJlIG9mIHR5cGUgTW91c2VFdmVudCwgeWV0IHRoZXkgZG9uJ3QgaGF2ZSB1c3VhbCBwcm9wZXJ0aWVzIHNldC4gSWdub3JlXG4gICAgICAgICAgICAvLyBldmVudHMgdGhhdCBoYXZlIG5vIHRvdWNoZXMgb3IgYnV0dG9ucyBhc3NvY2lhdGVkIHdpdGggdGhlbS4gKCMxMDU3LCAjMTA3OSwgIzEwOTUpXG4gICAgICAgICAgICBpZiAoZS50eXBlID09PSBcIm1vdXNlZG93blwiICYmICFlLmJ1dHRvbnMgJiYgIWUudG91Y2hlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBvbmx5IHRoaW5nIG9uZSBoYW5kbGUgc2hvdWxkIGJlIGNvbmNlcm5lZCBhYm91dCBpcyB0aGUgdG91Y2hlcyB0aGF0IG9yaWdpbmF0ZWQgb24gdG9wIG9mIGl0LlxuICAgICAgICAgICAgaWYgKHRvdWNoKSB7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJucyB0cnVlIGlmIGEgdG91Y2ggb3JpZ2luYXRlZCBvbiB0aGUgdGFyZ2V0LlxuICAgICAgICAgICAgICAgIHZhciBpc1RvdWNoT25UYXJnZXQgPSBmdW5jdGlvbiAoY2hlY2tUb3VjaCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gY2hlY2tUb3VjaC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodGFyZ2V0ID09PSBldmVudFRhcmdldCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuY29udGFpbnModGFyZ2V0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKGUuY29tcG9zZWQgJiYgZS5jb21wb3NlZFBhdGgoKS5zaGlmdCgpID09PSBldmVudFRhcmdldCkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGNhc2Ugb2YgdG91Y2hzdGFydCBldmVudHMsIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoZXJlIGlzIHN0aWxsIG5vIG1vcmUgdGhhbiBvbmVcbiAgICAgICAgICAgICAgICAvLyB0b3VjaCBvbiB0aGUgdGFyZ2V0IHNvIHdlIGxvb2sgYW1vbmdzdCBhbGwgdG91Y2hlcy5cbiAgICAgICAgICAgICAgICBpZiAoZS50eXBlID09PSBcInRvdWNoc3RhcnRcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VG91Y2hlcyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlLnRvdWNoZXMsIGlzVG91Y2hPblRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvIG5vdCBzdXBwb3J0IG1vcmUgdGhhbiBvbmUgdG91Y2ggcGVyIGhhbmRsZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHggPSB0YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICB5ID0gdGFyZ2V0VG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluIHRoZSBvdGhlciBjYXNlcywgZmluZCBvbiBjaGFuZ2VkVG91Y2hlcyBpcyBlbm91Z2guXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRUb3VjaCA9IEFycmF5LnByb3RvdHlwZS5maW5kLmNhbGwoZS5jaGFuZ2VkVG91Y2hlcywgaXNUb3VjaE9uVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FuY2VsIGlmIHRoZSB0YXJnZXQgdG91Y2ggaGFzIG5vdCBtb3ZlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRUb3VjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHggPSB0YXJnZXRUb3VjaC5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHRhcmdldFRvdWNoLnBhZ2VZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZ2VPZmZzZXQgPSBwYWdlT2Zmc2V0IHx8IGdldFBhZ2VPZmZzZXQoc2NvcGVfRG9jdW1lbnQpO1xuICAgICAgICAgICAgaWYgKG1vdXNlIHx8IHBvaW50ZXIpIHtcbiAgICAgICAgICAgICAgICB4ID0gZS5jbGllbnRYICsgcGFnZU9mZnNldC54O1xuICAgICAgICAgICAgICAgIHkgPSBlLmNsaWVudFkgKyBwYWdlT2Zmc2V0Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnBhZ2VPZmZzZXQgPSBwYWdlT2Zmc2V0O1xuICAgICAgICAgICAgZS5wb2ludHMgPSBbeCwgeV07XG4gICAgICAgICAgICBlLmN1cnNvciA9IG1vdXNlIHx8IHBvaW50ZXI7IC8vIEZpeCAjNDM1XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUcmFuc2xhdGUgYSBjb29yZGluYXRlIGluIHRoZSBkb2N1bWVudCB0byBhIHBlcmNlbnRhZ2Ugb24gdGhlIHNsaWRlclxuICAgICAgICBmdW5jdGlvbiBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoY2FsY1BvaW50KSB7XG4gICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBjYWxjUG9pbnQgLSBvZmZzZXQoc2NvcGVfQmFzZSwgb3B0aW9ucy5vcnQpO1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gKGxvY2F0aW9uICogMTAwKSAvIGJhc2VTaXplKCk7XG4gICAgICAgICAgICAvLyBDbGFtcCBwcm9wb3NhbCBiZXR3ZWVuIDAlIGFuZCAxMDAlXG4gICAgICAgICAgICAvLyBPdXQtb2YtYm91bmQgY29vcmRpbmF0ZXMgbWF5IG9jY3VyIHdoZW4gLm5vVWktYmFzZSBwc2V1ZG8tZWxlbWVudHNcbiAgICAgICAgICAgIC8vIGFyZSB1c2VkIChlLmcuIGNvbnRhaW5lZCBoYW5kbGVzIGZlYXR1cmUpXG4gICAgICAgICAgICBwcm9wb3NhbCA9IGxpbWl0KHByb3Bvc2FsKTtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmRpciA/IDEwMCAtIHByb3Bvc2FsIDogcHJvcG9zYWw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmluZCBoYW5kbGUgY2xvc2VzdCB0byBhIGNlcnRhaW4gcGVyY2VudGFnZSBvbiB0aGUgc2xpZGVyXG4gICAgICAgIGZ1bmN0aW9uIGdldENsb3Nlc3RIYW5kbGUoY2xpY2tlZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc21hbGxlc3REaWZmZXJlbmNlID0gMTAwO1xuICAgICAgICAgICAgdmFyIGhhbmRsZU51bWJlciA9IGZhbHNlO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gRGlzYWJsZWQgaGFuZGxlcyBhcmUgaWdub3JlZFxuICAgICAgICAgICAgICAgIGlmIChpc0hhbmRsZURpc2FibGVkKGluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVQb3NpdGlvbiA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgdmFyIGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA9IE1hdGguYWJzKGhhbmRsZVBvc2l0aW9uIC0gY2xpY2tlZFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsIHN0YXRlXG4gICAgICAgICAgICAgICAgdmFyIGNsaWNrQXRFZGdlID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlID09PSAxMDAgJiYgc21hbGxlc3REaWZmZXJlbmNlID09PSAxMDA7XG4gICAgICAgICAgICAgICAgLy8gRGlmZmVyZW5jZSB3aXRoIHRoaXMgaGFuZGxlIGlzIHNtYWxsZXIgdGhhbiB0aGUgcHJldmlvdXNseSBjaGVja2VkIGhhbmRsZVxuICAgICAgICAgICAgICAgIHZhciBpc0Nsb3NlciA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA8IHNtYWxsZXN0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgICAgICB2YXIgaXNDbG9zZXJBZnRlciA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA8PSBzbWFsbGVzdERpZmZlcmVuY2UgJiYgY2xpY2tlZFBvc2l0aW9uID4gaGFuZGxlUG9zaXRpb247XG4gICAgICAgICAgICAgICAgaWYgKGlzQ2xvc2VyIHx8IGlzQ2xvc2VyQWZ0ZXIgfHwgY2xpY2tBdEVkZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHNtYWxsZXN0RGlmZmVyZW5jZSA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyZSAnZW5kJyB3aGVuIGEgbW91c2Ugb3IgcGVuIGxlYXZlcyB0aGUgZG9jdW1lbnQuXG4gICAgICAgIGZ1bmN0aW9uIGRvY3VtZW50TGVhdmUoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSBcIm1vdXNlb3V0XCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQubm9kZU5hbWUgPT09IFwiSFRNTFwiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGV2ZW50RW5kKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgbW92ZW1lbnQgb24gZG9jdW1lbnQgZm9yIGhhbmRsZSBhbmQgcmFuZ2UgZHJhZy5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRNb3ZlKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICAvLyBGaXggIzQ5OFxuICAgICAgICAgICAgLy8gQ2hlY2sgdmFsdWUgb2YgLmJ1dHRvbnMgaW4gJ3N0YXJ0JyB0byB3b3JrIGFyb3VuZCBhIGJ1ZyBpbiBJRTEwIG1vYmlsZSAoZGF0YS5idXR0b25zUHJvcGVydHkpLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy85MjcwMDUvbW9iaWxlLWllMTAtd2luZG93cy1waG9uZS1idXR0b25zLXByb3BlcnR5LW9mLXBvaW50ZXJtb3ZlLWV2ZW50LWFsd2F5cy16ZXJvXG4gICAgICAgICAgICAvLyBJRTkgaGFzIC5idXR0b25zIGFuZCAud2hpY2ggemVybyBvbiBtb3VzZW1vdmUuXG4gICAgICAgICAgICAvLyBGaXJlZm94IGJyZWFrcyB0aGUgc3BlYyBNRE4gZGVmaW5lcy5cbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiTVNJRSA5XCIpID09PSAtMSAmJiBldmVudC5idXR0b25zID09PSAwICYmIGRhdGEuYnV0dG9uc1Byb3BlcnR5ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50RW5kKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlIGFyZSBtb3ZpbmcgdXAgb3IgZG93blxuICAgICAgICAgICAgdmFyIG1vdmVtZW50ID0gKG9wdGlvbnMuZGlyID8gLTEgOiAxKSAqIChldmVudC5jYWxjUG9pbnQgLSBkYXRhLnN0YXJ0Q2FsY1BvaW50KTtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIG1vdmVtZW50IGludG8gYSBwZXJjZW50YWdlIG9mIHRoZSBzbGlkZXIgd2lkdGgvaGVpZ2h0XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSAobW92ZW1lbnQgKiAxMDApIC8gZGF0YS5iYXNlU2l6ZTtcbiAgICAgICAgICAgIG1vdmVIYW5kbGVzKG1vdmVtZW50ID4gMCwgcHJvcG9zYWwsIGRhdGEubG9jYXRpb25zLCBkYXRhLmhhbmRsZU51bWJlcnMsIGRhdGEuY29ubmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVW5iaW5kIG1vdmUgZXZlbnRzIG9uIGRvY3VtZW50LCBjYWxsIGNhbGxiYWNrcy5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRFbmQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIFRoZSBoYW5kbGUgaXMgbm8gbG9uZ2VyIGFjdGl2ZSwgc28gcmVtb3ZlIHRoZSBjbGFzcy5cbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGRhdGEuaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgICAgICAgICBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVuYmluZCB0aGUgbW92ZSBhbmQgZW5kIGV2ZW50cywgd2hpY2ggYXJlIGFkZGVkIG9uICdzdGFydCcuXG4gICAgICAgICAgICBkYXRhLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfRG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoY1swXSwgY1sxXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZHJhZ2dpbmcgY2xhc3MuXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZyk7XG4gICAgICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGN1cnNvciBzdHlsZXMgYW5kIHRleHQtc2VsZWN0aW9uIGV2ZW50cyBib3VuZCB0byB0aGUgYm9keS5cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkuc3R5bGUuY3Vyc29yID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfQm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2VsZWN0c3RhcnRcIiwgcHJldmVudERlZmF1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmV2ZW50cy5zbW9vdGhTdGVwcykge1xuICAgICAgICAgICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZGF0YS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJlbmRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJpbmQgbW92ZSBldmVudHMgb24gZG9jdW1lbnQuXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50U3RhcnQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSBldmVudCBpZiBhbnkgaGFuZGxlIGlzIGRpc2FibGVkXG4gICAgICAgICAgICBpZiAoZGF0YS5oYW5kbGVOdW1iZXJzLnNvbWUoaXNIYW5kbGVEaXNhYmxlZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGFuZGxlO1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFuZGxlTnVtYmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlT3JpZ2luID0gc2NvcGVfSGFuZGxlc1tkYXRhLmhhbmRsZU51bWJlcnNbMF1dO1xuICAgICAgICAgICAgICAgIGhhbmRsZSA9IGhhbmRsZU9yaWdpbi5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICAvLyBNYXJrIHRoZSBoYW5kbGUgYXMgJ2FjdGl2ZScgc28gaXQgY2FuIGJlIHN0eWxlZC5cbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQSBkcmFnIHNob3VsZCBuZXZlciBwcm9wYWdhdGUgdXAgdG8gdGhlICd0YXAnIGV2ZW50LlxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAvLyBSZWNvcmQgdGhlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCB0aGUgbW92ZSBhbmQgZW5kIGV2ZW50cy5cbiAgICAgICAgICAgIHZhciBtb3ZlRXZlbnQgPSBhdHRhY2hFdmVudChhY3Rpb25zLm1vdmUsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZXZlbnRNb3ZlLCB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGV2ZW50IHRhcmdldCBoYXMgY2hhbmdlZCBzbyB3ZSBuZWVkIHRvIHByb3BhZ2F0ZSB0aGUgb3JpZ2luYWwgb25lIHNvIHRoYXQgd2Uga2VlcFxuICAgICAgICAgICAgICAgIC8vIHJlbHlpbmcgb24gaXQgdG8gZXh0cmFjdCB0YXJnZXQgdG91Y2hlcy5cbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICBjb25uZWN0OiBkYXRhLmNvbm5lY3QsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICAgICAgc3RhcnRDYWxjUG9pbnQ6IGV2ZW50LmNhbGNQb2ludCxcbiAgICAgICAgICAgICAgICBiYXNlU2l6ZTogYmFzZVNpemUoKSxcbiAgICAgICAgICAgICAgICBwYWdlT2Zmc2V0OiBldmVudC5wYWdlT2Zmc2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVycyxcbiAgICAgICAgICAgICAgICBidXR0b25zUHJvcGVydHk6IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zOiBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGVuZEV2ZW50ID0gYXR0YWNoRXZlbnQoYWN0aW9ucy5lbmQsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZXZlbnRFbmQsIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgICAgICBkb05vdFJlamVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBkYXRhLmhhbmRsZU51bWJlcnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBvdXRFdmVudCA9IGF0dGFjaEV2ZW50KFwibW91c2VvdXRcIiwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudExlYXZlLCB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICAgICAgZG9Ob3RSZWplY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBXZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBwdXNoZWQgdGhlIGxpc3RlbmVycyBpbiB0aGUgbGlzdGVuZXIgbGlzdCByYXRoZXIgdGhhbiBjcmVhdGluZ1xuICAgICAgICAgICAgLy8gYSBuZXcgb25lIGFzIGl0IGhhcyBhbHJlYWR5IGJlZW4gcGFzc2VkIHRvIHRoZSBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgIGxpc3RlbmVycy5wdXNoLmFwcGx5KGxpc3RlbmVycywgbW92ZUV2ZW50LmNvbmNhdChlbmRFdmVudCwgb3V0RXZlbnQpKTtcbiAgICAgICAgICAgIC8vIFRleHQgc2VsZWN0aW9uIGlzbid0IGFuIGlzc3VlIG9uIHRvdWNoIGRldmljZXMsXG4gICAgICAgICAgICAvLyBzbyBhZGRpbmcgY3Vyc29yIHN0eWxlcyBjYW4gYmUgc2tpcHBlZC5cbiAgICAgICAgICAgIGlmIChldmVudC5jdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHRoZSAnSScgY3Vyc29yIGFuZCBleHRlbmQgdGhlIHJhbmdlLWRyYWcgY3Vyc29yLlxuICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkuc3R5bGUuY3Vyc29yID0gZ2V0Q29tcHV0ZWRTdHlsZShldmVudC50YXJnZXQpLmN1cnNvcjtcbiAgICAgICAgICAgICAgICAvLyBNYXJrIHRoZSB0YXJnZXQgd2l0aCBhIGRyYWdnaW5nIHN0YXRlLlxuICAgICAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdGV4dCBzZWxlY3Rpb24gd2hlbiBkcmFnZ2luZyB0aGUgaGFuZGxlcy5cbiAgICAgICAgICAgICAgICAvLyBJbiBub1VpU2xpZGVyIDw9IDkuMi4wLCB0aGlzIHdhcyBoYW5kbGVkIGJ5IGNhbGxpbmcgcHJldmVudERlZmF1bHQgb24gbW91c2UvdG91Y2ggc3RhcnQvbW92ZSxcbiAgICAgICAgICAgICAgICAvLyB3aGljaCBpcyBzY3JvbGwgYmxvY2tpbmcuIFRoZSBzZWxlY3RzdGFydCBldmVudCBpcyBzdXBwb3J0ZWQgYnkgRmlyZUZveCBzdGFydGluZyBmcm9tIHZlcnNpb24gNTIsXG4gICAgICAgICAgICAgICAgLy8gbWVhbmluZyB0aGUgb25seSBob2xkb3V0IGlzIGlPUyBTYWZhcmkuIFRoaXMgZG9lc24ndCBtYXR0ZXI6IHRleHQgc2VsZWN0aW9uIGlzbid0IHRyaWdnZXJlZCB0aGVyZS5cbiAgICAgICAgICAgICAgICAvLyBUaGUgJ2N1cnNvcicgZmxhZyBpcyBmYWxzZS5cbiAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHA6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXNlbGVjdHN0YXJ0XG4gICAgICAgICAgICAgICAgc2NvcGVfQm9keS5hZGRFdmVudExpc3RlbmVyKFwic2VsZWN0c3RhcnRcIiwgcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzdGFydFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTW92ZSBjbG9zZXN0IGhhbmRsZSB0byB0YXBwZWQgbG9jYXRpb24uXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50VGFwKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyBUaGUgdGFwIGV2ZW50IHNob3VsZG4ndCBwcm9wYWdhdGUgdXBcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gY2FsY1BvaW50VG9QZXJjZW50YWdlKGV2ZW50LmNhbGNQb2ludCk7XG4gICAgICAgICAgICB2YXIgaGFuZGxlTnVtYmVyID0gZ2V0Q2xvc2VzdEhhbmRsZShwcm9wb3NhbCk7XG4gICAgICAgICAgICAvLyBUYWNrbGUgdGhlIGNhc2UgdGhhdCBhbGwgaGFuZGxlcyBhcmUgJ2Rpc2FibGVkJy5cbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmxhZyB0aGUgc2xpZGVyIGFzIGl0IGlzIG5vdyBpbiBhIHRyYW5zaXRpb25hbCBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFRyYW5zaXRpb24gdGFrZXMgYSBjb25maWd1cmFibGUgYW1vdW50IG9mIG1zIChkZWZhdWx0IDMwMCkuIFJlLWVuYWJsZSB0aGUgc2xpZGVyIGFmdGVyIHRoYXQuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuZXZlbnRzLnNuYXApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzc0ZvcihzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXAsIG9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcHJvcG9zYWwsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuZXZlbnRzLnNuYXApIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50U3RhcnQoZXZlbnQsIHsgaGFuZGxlTnVtYmVyczogW2hhbmRsZU51bWJlcl0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyZXMgYSAnaG92ZXInIGV2ZW50IGZvciBhIGhvdmVyZWQgbW91c2UvcGVuIHBvc2l0aW9uLlxuICAgICAgICBmdW5jdGlvbiBldmVudEhvdmVyKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoZXZlbnQuY2FsY1BvaW50KTtcbiAgICAgICAgICAgIHZhciB0byA9IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAocHJvcG9zYWwpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHRvKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJob3ZlclwiID09PSB0YXJnZXRFdmVudC5zcGxpdChcIi5cIilbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfRXZlbnRzW3RhcmdldEV2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChzY29wZV9TZWxmLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZXMga2V5ZG93biBvbiBmb2N1c2VkIGhhbmRsZXNcbiAgICAgICAgLy8gRG9uJ3QgbW92ZSB0aGUgZG9jdW1lbnQgd2hlbiBwcmVzc2luZyBhcnJvdyBrZXlzIG9uIGZvY3VzZWQgaGFuZGxlc1xuICAgICAgICBmdW5jdGlvbiBldmVudEtleWRvd24oZXZlbnQsIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgaWYgKGlzU2xpZGVyRGlzYWJsZWQoKSB8fCBpc0hhbmRsZURpc2FibGVkKGhhbmRsZU51bWJlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaG9yaXpvbnRhbEtleXMgPSBbXCJMZWZ0XCIsIFwiUmlnaHRcIl07XG4gICAgICAgICAgICB2YXIgdmVydGljYWxLZXlzID0gW1wiRG93blwiLCBcIlVwXCJdO1xuICAgICAgICAgICAgdmFyIGxhcmdlU3RlcEtleXMgPSBbXCJQYWdlRG93blwiLCBcIlBhZ2VVcFwiXTtcbiAgICAgICAgICAgIHZhciBlZGdlS2V5cyA9IFtcIkhvbWVcIiwgXCJFbmRcIl07XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kaXIgJiYgIW9wdGlvbnMub3J0KSB7XG4gICAgICAgICAgICAgICAgLy8gT24gYW4gcmlnaHQtdG8tbGVmdCBzbGlkZXIsIHRoZSBsZWZ0IGFuZCByaWdodCBrZXlzIGFjdCBpbnZlcnRlZFxuICAgICAgICAgICAgICAgIGhvcml6b250YWxLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMub3J0ICYmICFvcHRpb25zLmRpcikge1xuICAgICAgICAgICAgICAgIC8vIE9uIGEgdG9wLXRvLWJvdHRvbSBzbGlkZXIsIHRoZSB1cCBhbmQgZG93biBrZXlzIGFjdCBpbnZlcnRlZFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgICAgICAgICAgbGFyZ2VTdGVwS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdHJpcCBcIkFycm93XCIgZm9yIElFIGNvbXBhdGliaWxpdHkuIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9LZXlib2FyZEV2ZW50L2tleVxuICAgICAgICAgICAgdmFyIGtleSA9IGV2ZW50LmtleS5yZXBsYWNlKFwiQXJyb3dcIiwgXCJcIik7XG4gICAgICAgICAgICB2YXIgaXNMYXJnZURvd24gPSBrZXkgPT09IGxhcmdlU3RlcEtleXNbMF07XG4gICAgICAgICAgICB2YXIgaXNMYXJnZVVwID0ga2V5ID09PSBsYXJnZVN0ZXBLZXlzWzFdO1xuICAgICAgICAgICAgdmFyIGlzRG93biA9IGtleSA9PT0gdmVydGljYWxLZXlzWzBdIHx8IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMF0gfHwgaXNMYXJnZURvd247XG4gICAgICAgICAgICB2YXIgaXNVcCA9IGtleSA9PT0gdmVydGljYWxLZXlzWzFdIHx8IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMV0gfHwgaXNMYXJnZVVwO1xuICAgICAgICAgICAgdmFyIGlzTWluID0ga2V5ID09PSBlZGdlS2V5c1swXTtcbiAgICAgICAgICAgIHZhciBpc01heCA9IGtleSA9PT0gZWRnZUtleXNbMV07XG4gICAgICAgICAgICBpZiAoIWlzRG93biAmJiAhaXNVcCAmJiAhaXNNaW4gJiYgIWlzTWF4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIHRvO1xuICAgICAgICAgICAgaWYgKGlzVXAgfHwgaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGlzRG93biA/IDAgOiAxO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwcyA9IGdldE5leHRTdGVwc0ZvckhhbmRsZShoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwID0gc3RlcHNbZGlyZWN0aW9uXTtcbiAgICAgICAgICAgICAgICAvLyBBdCB0aGUgZWRnZSBvZiBhIHNsaWRlciwgZG8gbm90aGluZ1xuICAgICAgICAgICAgICAgIGlmIChzdGVwID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm8gc3RlcCBzZXQsIHVzZSB0aGUgZGVmYXVsdCBvZiAxMCUgb2YgdGhlIHN1Yi1yYW5nZVxuICAgICAgICAgICAgICAgIGlmIChzdGVwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBzdGVwID0gc2NvcGVfU3BlY3RydW0uZ2V0RGVmYXVsdFN0ZXAoc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIGlzRG93biwgb3B0aW9ucy5rZXlib2FyZERlZmF1bHRTdGVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzTGFyZ2VVcCB8fCBpc0xhcmdlRG93bikge1xuICAgICAgICAgICAgICAgICAgICBzdGVwICo9IG9wdGlvbnMua2V5Ym9hcmRQYWdlTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgKj0gb3B0aW9ucy5rZXlib2FyZE11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0ZXAgb3ZlciB6ZXJvLWxlbmd0aCByYW5nZXMgKCM5NDgpO1xuICAgICAgICAgICAgICAgIHN0ZXAgPSBNYXRoLm1heChzdGVwLCAwLjAwMDAwMDEpO1xuICAgICAgICAgICAgICAgIC8vIERlY3JlbWVudCBmb3IgZG93biBzdGVwc1xuICAgICAgICAgICAgICAgIHN0ZXAgPSAoaXNEb3duID8gLTEgOiAxKSAqIHN0ZXA7XG4gICAgICAgICAgICAgICAgdG8gPSBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXSArIHN0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc01heCkge1xuICAgICAgICAgICAgICAgIC8vIEVuZCBrZXlcbiAgICAgICAgICAgICAgICB0byA9IG9wdGlvbnMuc3BlY3RydW0ueFZhbFtvcHRpb25zLnNwZWN0cnVtLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBIb21lIGtleVxuICAgICAgICAgICAgICAgIHRvID0gb3B0aW9ucy5zcGVjdHJ1bS54VmFsWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh0byksIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2xpZGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwiY2hhbmdlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdHRhY2ggZXZlbnRzIHRvIHNldmVyYWwgc2xpZGVyIHBhcnRzLlxuICAgICAgICBmdW5jdGlvbiBiaW5kU2xpZGVyRXZlbnRzKGJlaGF2aW91cikge1xuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSBzdGFuZGFyZCBkcmFnIGV2ZW50IHRvIHRoZSBoYW5kbGVzLlxuICAgICAgICAgICAgaWYgKCFiZWhhdmlvdXIuZml4ZWQpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2UgZXZlbnRzIGFyZSBvbmx5IGJvdW5kIHRvIHRoZSB2aXN1YWwgaGFuZGxlXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQsIG5vdCB0aGUgJ3JlYWwnIG9yaWdpbiBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBoYW5kbGUuY2hpbGRyZW5bMF0sIGV2ZW50U3RhcnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IFtpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSB0YXAgZXZlbnQgdG8gdGhlIHNsaWRlciBiYXNlLlxuICAgICAgICAgICAgaWYgKGJlaGF2aW91ci50YXApIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBzY29wZV9CYXNlLCBldmVudFRhcCwge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmlyZSBob3ZlciBldmVudHNcbiAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuaG92ZXIpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLm1vdmUsIHNjb3BlX0Jhc2UsIGV2ZW50SG92ZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHRoZSByYW5nZSBkcmFnZ2FibGUuXG4gICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmRyYWcpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9Db25uZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChjb25uZWN0LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29ubmVjdCA9PT0gZmFsc2UgfHwgaW5kZXggPT09IDAgfHwgaW5kZXggPT09IHNjb3BlX0Nvbm5lY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlQmVmb3JlID0gc2NvcGVfSGFuZGxlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlQWZ0ZXIgPSBzY29wZV9IYW5kbGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50SG9sZGVycyA9IFtjb25uZWN0XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXNUb0RyYWcgPSBbaGFuZGxlQmVmb3JlLCBoYW5kbGVBZnRlcl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVOdW1iZXJzVG9EcmFnID0gW2luZGV4IC0gMSwgaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcyhjb25uZWN0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZ2dhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB0aGUgcmFuZ2UgaXMgZml4ZWQsIHRoZSBlbnRpcmUgcmFuZ2UgY2FuXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlIGRyYWdnZWQgYnkgdGhlIGhhbmRsZXMuIFRoZSBoYW5kbGUgaW4gdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgICAgIC8vIG9yaWdpbiB3aWxsIHByb3BhZ2F0ZSB0aGUgc3RhcnQgZXZlbnQgdXB3YXJkLFxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgaXQgbmVlZHMgdG8gYmUgYm91bmQgbWFudWFsbHkgb24gdGhlIG90aGVyLlxuICAgICAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmZpeGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMucHVzaChoYW5kbGVCZWZvcmUuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLnB1c2goaGFuZGxlQWZ0ZXIuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuZHJhZ0FsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlc1RvRHJhZyA9IHNjb3BlX0hhbmRsZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzVG9EcmFnID0gc2NvcGVfSGFuZGxlTnVtYmVycztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRIb2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIGV2ZW50SG9sZGVyLCBldmVudFN0YXJ0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlczogaGFuZGxlc1RvRHJhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBoYW5kbGVOdW1iZXJzVG9EcmFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Q6IGNvbm5lY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXR0YWNoIGFuIGV2ZW50IHRvIHRoaXMgc2xpZGVyLCBwb3NzaWJseSBpbmNsdWRpbmcgYSBuYW1lc3BhY2VcbiAgICAgICAgZnVuY3Rpb24gYmluZEV2ZW50KG5hbWVzcGFjZWRFdmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdID0gc2NvcGVfRXZlbnRzW25hbWVzcGFjZWRFdmVudF0gfHwgW107XG4gICAgICAgICAgICBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBldmVudCBib3VuZCBpcyAndXBkYXRlLCcgZmlyZSBpdCBpbW1lZGlhdGVseSBmb3IgYWxsIGhhbmRsZXMuXG4gICAgICAgICAgICBpZiAobmFtZXNwYWNlZEV2ZW50LnNwbGl0KFwiLlwiKVswXSA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoYSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc0ludGVybmFsTmFtZXNwYWNlKG5hbWVzcGFjZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5hbWVzcGFjZSA9PT0gSU5URVJOQUxfRVZFTlRfTlMuYXJpYSB8fCBuYW1lc3BhY2UgPT09IElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVuZG8gYXR0YWNobWVudCBvZiBldmVudFxuICAgICAgICBmdW5jdGlvbiByZW1vdmVFdmVudChuYW1lc3BhY2VkRXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5hbWVzcGFjZWRFdmVudCAmJiBuYW1lc3BhY2VkRXZlbnQuc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGV2ZW50ID8gbmFtZXNwYWNlZEV2ZW50LnN1YnN0cmluZyhldmVudC5sZW5ndGgpIDogbmFtZXNwYWNlZEV2ZW50O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChiaW5kKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRFdmVudCA9IGJpbmQuc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICAgICAgICAgIHZhciB0TmFtZXNwYWNlID0gYmluZC5zdWJzdHJpbmcodEV2ZW50Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKCghZXZlbnQgfHwgZXZlbnQgPT09IHRFdmVudCkgJiYgKCFuYW1lc3BhY2UgfHwgbmFtZXNwYWNlID09PSB0TmFtZXNwYWNlKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGRlbGV0ZSBwcm90ZWN0ZWQgaW50ZXJuYWwgZXZlbnQgaWYgaW50ZW50aW9uYWxcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0ludGVybmFsTmFtZXNwYWNlKHROYW1lc3BhY2UpIHx8IG5hbWVzcGFjZSA9PT0gdE5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNjb3BlX0V2ZW50c1tiaW5kXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEV4dGVybmFsIGV2ZW50IGhhbmRsaW5nXG4gICAgICAgIGZ1bmN0aW9uIGZpcmVFdmVudChldmVudE5hbWUsIGhhbmRsZU51bWJlciwgdGFwKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY29wZV9FdmVudHMpLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50VHlwZSA9IHRhcmdldEV2ZW50LnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSBldmVudFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfRXZlbnRzW3RhcmdldEV2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgc2xpZGVyIHB1YmxpYyBBUEkgYXMgdGhlIHNjb3BlICgndGhpcycpXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9TZWxmLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldHVybiB2YWx1ZXMgYXMgYXJyYXksIHNvIGFyZ18xW2FyZ18yXSBpcyBhbHdheXMgdmFsaWQuXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9WYWx1ZXMubWFwKG9wdGlvbnMuZm9ybWF0LnRvKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgaW5kZXgsIDAgb3IgMVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVuLWZvcm1hdHRlZCBzbGlkZXIgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9WYWx1ZXMuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFdmVudCBpcyBmaXJlZCBieSB0YXAsIHRydWUgb3IgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcCB8fCBmYWxzZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMZWZ0IG9mZnNldCBvZiB0aGUgaGFuZGxlLCBpbiByZWxhdGlvbiB0byB0aGUgc2xpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIHNsaWRlciBwdWJsaWMgQVBJIHRvIGFuIGFjY2Vzc2libGUgcGFyYW1ldGVyIHdoZW4gdGhpcyBpcyB1bmF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfU2VsZik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNwbGl0IG91dCB0aGUgaGFuZGxlIHBvc2l0aW9uaW5nIGxvZ2ljIHNvIHRoZSBNb3ZlIGV2ZW50IGNhbiB1c2UgaXQsIHRvb1xuICAgICAgICBmdW5jdGlvbiBjaGVja0hhbmRsZVBvc2l0aW9uKHJlZmVyZW5jZSwgaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZ2V0VmFsdWUsIHNtb290aFN0ZXBzKSB7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2U7XG4gICAgICAgICAgICAvLyBGb3Igc2xpZGVycyB3aXRoIG11bHRpcGxlIGhhbmRsZXMsIGxpbWl0IG1vdmVtZW50IHRvIHRoZSBvdGhlciBoYW5kbGUuXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgbWFyZ2luIG9wdGlvbiBieSBhZGRpbmcgaXQgdG8gdGhlIGhhbmRsZSBwb3NpdGlvbnMuXG4gICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlcy5sZW5ndGggPiAxICYmICFvcHRpb25zLmV2ZW50cy51bmNvbnN0cmFpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tCYWNrd2FyZCAmJiBoYW5kbGVOdW1iZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyIC0gMV0sIG9wdGlvbnMubWFyZ2luLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tGb3J3YXJkICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciArIDFdLCBvcHRpb25zLm1hcmdpbiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgbGltaXQgb3B0aW9uIGhhcyB0aGUgb3Bwb3NpdGUgZWZmZWN0LCBsaW1pdGluZyBoYW5kbGVzIHRvIGFcbiAgICAgICAgICAgIC8vIG1heGltdW0gZGlzdGFuY2UgZnJvbSBhbm90aGVyLiBMaW1pdCBtdXN0IGJlID4gMCwgYXMgb3RoZXJ3aXNlXG4gICAgICAgICAgICAvLyBoYW5kbGVzIHdvdWxkIGJlIHVubW92YWJsZS5cbiAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEgJiYgb3B0aW9ucy5saW1pdCkge1xuICAgICAgICAgICAgICAgIGlmIChsb29rQmFja3dhcmQgJiYgaGFuZGxlTnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciAtIDFdLCBvcHRpb25zLmxpbWl0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tGb3J3YXJkICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciArIDFdLCBvcHRpb25zLmxpbWl0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBwYWRkaW5nIG9wdGlvbiBrZWVwcyB0aGUgaGFuZGxlcyBhIGNlcnRhaW4gZGlzdGFuY2UgZnJvbSB0aGVcbiAgICAgICAgICAgIC8vIGVkZ2VzIG9mIHRoZSBzbGlkZXIuIFBhZGRpbmcgbXVzdCBiZSA+IDAuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5wYWRkaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UoMCwgb3B0aW9ucy5wYWRkaW5nWzBdLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZSgxMDAsIG9wdGlvbnMucGFkZGluZ1sxXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNtb290aFN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgdG8gPSBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHRvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExpbWl0IHBlcmNlbnRhZ2UgdG8gdGhlIDAgLSAxMDAgcmFuZ2VcbiAgICAgICAgICAgIHRvID0gbGltaXQodG8pO1xuICAgICAgICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIGhhbmRsZSBjYW4ndCBtb3ZlXG4gICAgICAgICAgICBpZiAodG8gPT09IHJlZmVyZW5jZVtoYW5kbGVOdW1iZXJdICYmICFnZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgfVxuICAgICAgICAvLyBVc2VzIHNsaWRlciBvcmllbnRhdGlvbiB0byBjcmVhdGUgQ1NTIHJ1bGVzLiBhID0gYmFzZSB2YWx1ZTtcbiAgICAgICAgZnVuY3Rpb24gaW5SdWxlT3JkZXIodiwgYSkge1xuICAgICAgICAgICAgdmFyIG8gPSBvcHRpb25zLm9ydDtcbiAgICAgICAgICAgIHJldHVybiAobyA/IGEgOiB2KSArIFwiLCBcIiArIChvID8gdiA6IGEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmVzIGhhbmRsZShzKSBieSBhIHBlcmNlbnRhZ2VcbiAgICAgICAgLy8gKGJvb2wsICUgdG8gbW92ZSwgWyUgd2hlcmUgaGFuZGxlIHN0YXJ0ZWQsIC4uLl0sIFtpbmRleCBpbiBzY29wZV9IYW5kbGVzLCAuLi5dKVxuICAgICAgICBmdW5jdGlvbiBtb3ZlSGFuZGxlcyh1cHdhcmQsIHByb3Bvc2FsLCBsb2NhdGlvbnMsIGhhbmRsZU51bWJlcnMsIGNvbm5lY3QpIHtcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbHMgPSBsb2NhdGlvbnMuc2xpY2UoKTtcbiAgICAgICAgICAgIC8vIFN0b3JlIGZpcnN0IGhhbmRsZSBub3csIHNvIHdlIHN0aWxsIGhhdmUgaXQgaW4gY2FzZSBoYW5kbGVOdW1iZXJzIGlzIHJldmVyc2VkXG4gICAgICAgICAgICB2YXIgZmlyc3RIYW5kbGUgPSBoYW5kbGVOdW1iZXJzWzBdO1xuICAgICAgICAgICAgdmFyIHNtb290aFN0ZXBzID0gb3B0aW9ucy5ldmVudHMuc21vb3RoU3RlcHM7XG4gICAgICAgICAgICB2YXIgYiA9IFshdXB3YXJkLCB1cHdhcmRdO1xuICAgICAgICAgICAgdmFyIGYgPSBbdXB3YXJkLCAhdXB3YXJkXTtcbiAgICAgICAgICAgIC8vIENvcHkgaGFuZGxlTnVtYmVycyBzbyB3ZSBkb24ndCBjaGFuZ2UgdGhlIGRhdGFzZXRcbiAgICAgICAgICAgIGhhbmRsZU51bWJlcnMgPSBoYW5kbGVOdW1iZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgd2hpY2ggaGFuZGxlIGlzICdsZWFkaW5nJy5cbiAgICAgICAgICAgIC8vIElmIHRoYXQgb25lIGNhbid0IG1vdmUgdGhlIHNlY29uZCBjYW4ndCBlaXRoZXIuXG4gICAgICAgICAgICBpZiAodXB3YXJkKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdGVwIDE6IGdldCB0aGUgbWF4aW11bSBwZXJjZW50YWdlIHRoYXQgYW55IG9mIHRoZSBoYW5kbGVzIGNhbiBtb3ZlXG4gICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIsIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvID0gY2hlY2tIYW5kbGVQb3NpdGlvbihwcm9wb3NhbHMsIGhhbmRsZU51bWJlciwgcHJvcG9zYWxzW2hhbmRsZU51bWJlcl0gKyBwcm9wb3NhbCwgYltvXSwgZltvXSwgZmFsc2UsIHNtb290aFN0ZXBzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCBpZiBvbmUgb2YgdGhlIGhhbmRsZXMgY2FuJ3QgbW92ZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWwgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWwgPSB0byAtIHByb3Bvc2Fsc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWxzW2hhbmRsZU51bWJlcl0gPSB0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXNpbmcgb25lIGhhbmRsZSwgY2hlY2sgYmFja3dhcmQgQU5EIGZvcndhcmRcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGIgPSBmID0gW3RydWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBTdGVwIDI6IFRyeSB0byBzZXQgdGhlIGhhbmRsZXMgd2l0aCB0aGUgZm91bmQgcGVyY2VudGFnZVxuICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIsIG8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIGxvY2F0aW9uc1toYW5kbGVOdW1iZXJdICsgcHJvcG9zYWwsIGJbb10sIGZbb10sIGZhbHNlLCBzbW9vdGhTdGVwcykgfHwgc3RhdGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFN0ZXAgMzogSWYgYSBoYW5kbGUgbW92ZWQsIGZpcmUgZXZlbnRzXG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2xpZGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBJZiB0YXJnZXQgaXMgYSBjb25uZWN0LCB0aGVuIGZpcmUgZHJhZyBldmVudFxuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJkcmFnXCIsIGZpcnN0SGFuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGFrZXMgYSBiYXNlIHZhbHVlIGFuZCBhbiBvZmZzZXQuIFRoaXMgb2Zmc2V0IGlzIHVzZWQgZm9yIHRoZSBjb25uZWN0IGJhciBzaXplLlxuICAgICAgICAvLyBJbiB0aGUgaW5pdGlhbCBkZXNpZ24gZm9yIHRoaXMgZmVhdHVyZSwgdGhlIG9yaWdpbiBlbGVtZW50IHdhcyAxJSB3aWRlLlxuICAgICAgICAvLyBVbmZvcnR1bmF0ZWx5LCBhIHJvdW5kaW5nIGJ1ZyBpbiBDaHJvbWUgbWFrZXMgaXQgaW1wb3NzaWJsZSB0byBpbXBsZW1lbnQgdGhpcyBmZWF0dXJlXG4gICAgICAgIC8vIGluIHRoaXMgbWFubmVyOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03OTgyMjNcbiAgICAgICAgZnVuY3Rpb24gdHJhbnNmb3JtRGlyZWN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmRpciA/IDEwMCAtIGEgLSBiIDogYTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGVzIHNjb3BlX0xvY2F0aW9ucyBhbmQgc2NvcGVfVmFsdWVzLCB1cGRhdGVzIHZpc3VhbCBzdGF0ZVxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVIYW5kbGVQb3NpdGlvbihoYW5kbGVOdW1iZXIsIHRvKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgbG9jYXRpb25zLlxuICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPSB0bztcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIHZhbHVlIHRvIHRoZSBzbGlkZXIgc3RlcHBpbmcvcmFuZ2UuXG4gICAgICAgICAgICBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXSA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyh0byk7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRpb24gPSB0cmFuc2Zvcm1EaXJlY3Rpb24odG8sIDApIC0gc2NvcGVfRGlyT2Zmc2V0O1xuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZVJ1bGUgPSBcInRyYW5zbGF0ZShcIiArIGluUnVsZU9yZGVyKHRyYW5zbGF0aW9uICsgXCIlXCIsIFwiMFwiKSArIFwiKVwiO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnN0eWxlW29wdGlvbnMudHJhbnNmb3JtUnVsZV0gPSB0cmFuc2xhdGVSdWxlO1xuICAgICAgICAgICAgdXBkYXRlQ29ubmVjdChoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgdXBkYXRlQ29ubmVjdChoYW5kbGVOdW1iZXIgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGVzIGJlZm9yZSB0aGUgc2xpZGVyIG1pZGRsZSBhcmUgc3RhY2tlZCBsYXRlciA9IGhpZ2hlcixcbiAgICAgICAgLy8gSGFuZGxlcyBhZnRlciB0aGUgbWlkZGxlIGxhdGVyIGlzIGxvd2VyXG4gICAgICAgIC8vIFtbN10gWzhdIC4uLi4uLi4uLi4gfCAuLi4uLi4uLi4uIFs1XSBbNF1cbiAgICAgICAgZnVuY3Rpb24gc2V0WmluZGV4KCkge1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlyID0gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPiA1MCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICB2YXIgekluZGV4ID0gMyArIChzY29wZV9IYW5kbGVzLmxlbmd0aCArIGRpciAqIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnN0eWxlLnpJbmRleCA9IFN0cmluZyh6SW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGVzdCBzdWdnZXN0ZWQgdmFsdWVzIGFuZCBhcHBseSBtYXJnaW4sIHN0ZXAuXG4gICAgICAgIC8vIGlmIGV4YWN0SW5wdXQgaXMgdHJ1ZSwgZG9uJ3QgcnVuIGNoZWNrSGFuZGxlUG9zaXRpb24sIHRoZW4gdGhlIGhhbmRsZSBjYW4gYmUgcGxhY2VkIGluIGJldHdlZW4gc3RlcHMgKCM0MzYpXG4gICAgICAgIGZ1bmN0aW9uIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBleGFjdElucHV0LCBzbW9vdGhTdGVwcykge1xuICAgICAgICAgICAgaWYgKCFleGFjdElucHV0KSB7XG4gICAgICAgICAgICAgICAgdG8gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZmFsc2UsIHNtb290aFN0ZXBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVIYW5kbGVQb3NpdGlvbihoYW5kbGVOdW1iZXIsIHRvKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZXMgc3R5bGUgYXR0cmlidXRlIGZvciBjb25uZWN0IG5vZGVzXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbm5lY3QoaW5kZXgpIHtcbiAgICAgICAgICAgIC8vIFNraXAgY29ubmVjdHMgc2V0IHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAoIXNjb3BlX0Nvbm5lY3RzW2luZGV4XSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsID0gMDtcbiAgICAgICAgICAgIHZhciBoID0gMTAwO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgbCA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBzY29wZV9Db25uZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgaCA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBXZSB1c2UgdHdvIHJ1bGVzOlxuICAgICAgICAgICAgLy8gJ3RyYW5zbGF0ZScgdG8gY2hhbmdlIHRoZSBsZWZ0L3RvcCBvZmZzZXQ7XG4gICAgICAgICAgICAvLyAnc2NhbGUnIHRvIGNoYW5nZSB0aGUgd2lkdGggb2YgdGhlIGVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBBcyB0aGUgZWxlbWVudCBoYXMgYSB3aWR0aCBvZiAxMDAlLCBhIHRyYW5zbGF0aW9uIG9mIDEwMCUgaXMgZXF1YWwgdG8gMTAwJSBvZiB0aGUgcGFyZW50ICgubm9VaS1iYXNlKVxuICAgICAgICAgICAgdmFyIGNvbm5lY3RXaWR0aCA9IGggLSBsO1xuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZVJ1bGUgPSBcInRyYW5zbGF0ZShcIiArIGluUnVsZU9yZGVyKHRyYW5zZm9ybURpcmVjdGlvbihsLCBjb25uZWN0V2lkdGgpICsgXCIlXCIsIFwiMFwiKSArIFwiKVwiO1xuICAgICAgICAgICAgdmFyIHNjYWxlUnVsZSA9IFwic2NhbGUoXCIgKyBpblJ1bGVPcmRlcihjb25uZWN0V2lkdGggLyAxMDAsIFwiMVwiKSArIFwiKVwiO1xuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHNbaW5kZXhdLnN0eWxlW29wdGlvbnMudHJhbnNmb3JtUnVsZV0gPVxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVJ1bGUgKyBcIiBcIiArIHNjYWxlUnVsZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQYXJzZXMgdmFsdWUgcGFzc2VkIHRvIC5zZXQgbWV0aG9kLiBSZXR1cm5zIGN1cnJlbnQgdmFsdWUgaWYgbm90IHBhcnNlLWFibGUuXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVUb1ZhbHVlKHRvLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIC8vIFNldHRpbmcgd2l0aCBudWxsIGluZGljYXRlcyBhbiAnaWdub3JlJy5cbiAgICAgICAgICAgIC8vIElucHV0dGluZyAnZmFsc2UnIGlzIGludmFsaWQuXG4gICAgICAgICAgICBpZiAodG8gPT09IG51bGwgfHwgdG8gPT09IGZhbHNlIHx8IHRvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhIGZvcm1hdHRlZCBudW1iZXIgd2FzIHBhc3NlZCwgYXR0ZW1wdCB0byBkZWNvZGUgaXQuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRvID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdG8gPSBTdHJpbmcodG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG8gPSBvcHRpb25zLmZvcm1hdC5mcm9tKHRvKTtcbiAgICAgICAgICAgIGlmICh0byAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0byA9IHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgcGFyc2luZyB0aGUgbnVtYmVyIGZhaWxlZCwgdXNlIHRoZSBjdXJyZW50IHZhbHVlLlxuICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSB8fCBpc05hTih0bykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG87XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHRoZSBzbGlkZXIgdmFsdWUuXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlU2V0KGlucHV0LCBmaXJlU2V0RXZlbnQsIGV4YWN0SW5wdXQpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBhc0FycmF5KGlucHV0KTtcbiAgICAgICAgICAgIHZhciBpc0luaXQgPSBzY29wZV9Mb2NhdGlvbnNbMF0gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIC8vIEV2ZW50IGZpcmVzIGJ5IGRlZmF1bHRcbiAgICAgICAgICAgIGZpcmVTZXRFdmVudCA9IGZpcmVTZXRFdmVudCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGZpcmVTZXRFdmVudDtcbiAgICAgICAgICAgIC8vIEFuaW1hdGlvbiBpcyBvcHRpb25hbC5cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaW5pdGlhbCB2YWx1ZXMgd2VyZSBzZXQgYmVmb3JlIHVzaW5nIGFuaW1hdGVkIHBsYWNlbWVudC5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGUgJiYgIWlzSW5pdCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzRm9yKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCwgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXJzdCBwYXNzLCB3aXRob3V0IGxvb2tBaGVhZCBidXQgd2l0aCBsb29rQmFja3dhcmQuIFZhbHVlcyBhcmUgc2V0IGZyb20gbGVmdCB0byByaWdodC5cbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcmVzb2x2ZVRvVmFsdWUodmFsdWVzW2hhbmRsZU51bWJlcl0sIGhhbmRsZU51bWJlciksIHRydWUsIGZhbHNlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGkgPSBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCA9PT0gMSA/IDAgOiAxO1xuICAgICAgICAgICAgLy8gU3ByZWFkIGhhbmRsZXMgZXZlbmx5IGFjcm9zcyB0aGUgc2xpZGVyIGlmIHRoZSByYW5nZSBoYXMgbm8gc2l6ZSAobWluPW1heClcbiAgICAgICAgICAgIGlmIChpc0luaXQgJiYgc2NvcGVfU3BlY3RydW0uaGFzTm9TaXplKCkpIHtcbiAgICAgICAgICAgICAgICBleGFjdElucHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnNbMF0gPSAwO1xuICAgICAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwYWNlXzEgPSAxMDAgLyAoc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdID0gaGFuZGxlTnVtYmVyICogc3BhY2VfMTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2Vjb25kYXJ5IHBhc3Nlcy4gTm93IHRoYXQgYWxsIGJhc2UgdmFsdWVzIGFyZSBzZXQsIGFwcGx5IGNvbnN0cmFpbnRzLlxuICAgICAgICAgICAgLy8gSXRlcmF0ZSBhbGwgaGFuZGxlcyB0byBlbnN1cmUgY29uc3RyYWludHMgYXJlIGFwcGxpZWQgZm9yIHRoZSBlbnRpcmUgc2xpZGVyIChJc3N1ZSAjMTAwOSlcbiAgICAgICAgICAgIGZvciAoOyBpIDwgc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdLCB0cnVlLCB0cnVlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAvLyBGaXJlIHRoZSBldmVudCBvbmx5IGZvciBoYW5kbGVzIHRoYXQgcmVjZWl2ZWQgYSBuZXcgdmFsdWUsIGFzIHBlciAjNTc5XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlc1toYW5kbGVOdW1iZXJdICE9PSBudWxsICYmIGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCBzbGlkZXIgdG8gaW5pdGlhbCB2YWx1ZXNcbiAgICAgICAgZnVuY3Rpb24gdmFsdWVSZXNldChmaXJlU2V0RXZlbnQpIHtcbiAgICAgICAgICAgIHZhbHVlU2V0KG9wdGlvbnMuc3RhcnQsIGZpcmVTZXRFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHZhbHVlIGZvciBhIHNpbmdsZSBoYW5kbGVcbiAgICAgICAgZnVuY3Rpb24gdmFsdWVTZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCB2YWx1ZSwgZmlyZVNldEV2ZW50LCBleGFjdElucHV0KSB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgbnVtZXJpYyBpbnB1dFxuICAgICAgICAgICAgaGFuZGxlTnVtYmVyID0gTnVtYmVyKGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBpZiAoIShoYW5kbGVOdW1iZXIgPj0gMCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBpbnZhbGlkIGhhbmRsZSBudW1iZXIsIGdvdDogXCIgKyBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTG9vayBib3RoIGJhY2t3YXJkIGFuZCBmb3J3YXJkLCBzaW5jZSB3ZSBkb24ndCB3YW50IHRoaXMgaGFuZGxlIHRvIFwicHVzaFwiIG90aGVyIGhhbmRsZXMgKCM5NjApO1xuICAgICAgICAgICAgLy8gVGhlIGV4YWN0SW5wdXQgYXJndW1lbnQgY2FuIGJlIHVzZWQgdG8gaWdub3JlIHNsaWRlciBzdGVwcGluZyAoIzQzNilcbiAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHJlc29sdmVUb1ZhbHVlKHZhbHVlLCBoYW5kbGVOdW1iZXIpLCB0cnVlLCB0cnVlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgaWYgKGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEdldCB0aGUgc2xpZGVyIHZhbHVlLlxuICAgICAgICBmdW5jdGlvbiB2YWx1ZUdldCh1bmVuY29kZWQpIHtcbiAgICAgICAgICAgIGlmICh1bmVuY29kZWQgPT09IHZvaWQgMCkgeyB1bmVuY29kZWQgPSBmYWxzZTsgfVxuICAgICAgICAgICAgaWYgKHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBhIGNvcHkgb2YgdGhlIHJhdyB2YWx1ZXNcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfVmFsdWVzLmxlbmd0aCA9PT0gMSA/IHNjb3BlX1ZhbHVlc1swXSA6IHNjb3BlX1ZhbHVlcy5zbGljZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBzY29wZV9WYWx1ZXMubWFwKG9wdGlvbnMuZm9ybWF0LnRvKTtcbiAgICAgICAgICAgIC8vIElmIG9ubHkgb25lIGhhbmRsZSBpcyB1c2VkLCByZXR1cm4gYSBzaW5nbGUgdmFsdWUuXG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZXNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZXMgY2xhc3NlcyBmcm9tIHRoZSByb290IGFuZCBlbXB0aWVzIGl0LlxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHByb3RlY3RlZCBpbnRlcm5hbCBsaXN0ZW5lcnNcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KElOVEVSTkFMX0VWRU5UX05TLmFyaWEpO1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQoSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5jc3NDbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlc1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2hpbGUgKHNjb3BlX1RhcmdldC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfVGFyZ2V0LnJlbW92ZUNoaWxkKHNjb3BlX1RhcmdldC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSBzY29wZV9UYXJnZXQubm9VaVNsaWRlcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXROZXh0U3RlcHNGb3JIYW5kbGUoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIHZhciBuZWFyYnlTdGVwcyA9IHNjb3BlX1NwZWN0cnVtLmdldE5lYXJieVN0ZXBzKGxvY2F0aW9uKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNjb3BlX1ZhbHVlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgdmFyIGluY3JlbWVudCA9IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0ZXA7XG4gICAgICAgICAgICB2YXIgZGVjcmVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIC8vIElmIHNuYXBwZWQsIGRpcmVjdGx5IHVzZSBkZWZpbmVkIHN0ZXAgdmFsdWVcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNuYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAtIG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuc3RhcnRWYWx1ZSB8fCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSAtIHZhbHVlIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBuZXh0IHZhbHVlIGluIHRoaXMgc3RlcCBtb3ZlcyBpbnRvIHRoZSBuZXh0IHN0ZXAsXG4gICAgICAgICAgICAvLyB0aGUgaW5jcmVtZW50IGlzIHRoZSBzdGFydCBvZiB0aGUgbmV4dCBzdGVwIC0gdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIGlmIChpbmNyZW1lbnQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICsgaW5jcmVtZW50ID4gbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUgLSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYmV5b25kIHRoZSBzdGFydGluZyBwb2ludFxuICAgICAgICAgICAgaWYgKHZhbHVlID4gbmVhcmJ5U3RlcHMudGhpc1N0ZXAuc3RhcnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuZWFyYnlTdGVwcy5zdGVwQmVmb3JlLnN0ZXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhIGhhbmRsZSBpcyBhdCB0aGUgc3RhcnQgb2YgYSBzdGVwLCBpdCBhbHdheXMgc3RlcHMgYmFjayBpbnRvIHRoZSBwcmV2aW91cyBzdGVwIGZpcnN0XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSB2YWx1ZSAtIG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuaGlnaGVzdFN0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOb3csIGlmIGF0IHRoZSBzbGlkZXIgZWRnZXMsIHRoZXJlIGlzIG5vIGluL2RlY3JlbWVudFxuICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09PSAxMDApIHtcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobG9jYXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXMgcGVyICMzOTEsIHRoZSBjb21wYXJpc29uIGZvciB0aGUgZGVjcmVtZW50IHN0ZXAgY2FuIGhhdmUgc29tZSByb3VuZGluZyBpc3N1ZXMuXG4gICAgICAgICAgICB2YXIgc3RlcERlY2ltYWxzID0gc2NvcGVfU3BlY3RydW0uY291bnRTdGVwRGVjaW1hbHMoKTtcbiAgICAgICAgICAgIC8vIFJvdW5kIHBlciAjMzkxXG4gICAgICAgICAgICBpZiAoaW5jcmVtZW50ICE9PSBudWxsICYmIGluY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnQgPSBOdW1iZXIoaW5jcmVtZW50LnRvRml4ZWQoc3RlcERlY2ltYWxzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVjcmVtZW50ICE9PSBudWxsICYmIGRlY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBOdW1iZXIoZGVjcmVtZW50LnRvRml4ZWQoc3RlcERlY2ltYWxzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW2RlY3JlbWVudCwgaW5jcmVtZW50XTtcbiAgICAgICAgfVxuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc3RlcCBzaXplIGZvciB0aGUgc2xpZGVyLlxuICAgICAgICBmdW5jdGlvbiBnZXROZXh0U3RlcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfSGFuZGxlTnVtYmVycy5tYXAoZ2V0TmV4dFN0ZXBzRm9ySGFuZGxlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGFibGU6IG1hcmdpbiwgbGltaXQsIHBhZGRpbmcsIHN0ZXAsIHJhbmdlLCBhbmltYXRlLCBzbmFwXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMob3B0aW9uc1RvVXBkYXRlLCBmaXJlU2V0RXZlbnQpIHtcbiAgICAgICAgICAgIC8vIFNwZWN0cnVtIGlzIGNyZWF0ZWQgdXNpbmcgdGhlIHJhbmdlLCBzbmFwLCBkaXJlY3Rpb24gYW5kIHN0ZXAgb3B0aW9ucy5cbiAgICAgICAgICAgIC8vICdzbmFwJyBhbmQgJ3N0ZXAnIGNhbiBiZSB1cGRhdGVkLlxuICAgICAgICAgICAgLy8gSWYgJ3NuYXAnIGFuZCAnc3RlcCcgYXJlIG5vdCBwYXNzZWQsIHRoZXkgc2hvdWxkIHJlbWFpbiB1bmNoYW5nZWQuXG4gICAgICAgICAgICB2YXIgdiA9IHZhbHVlR2V0KCk7XG4gICAgICAgICAgICB2YXIgdXBkYXRlQWJsZSA9IFtcbiAgICAgICAgICAgICAgICBcIm1hcmdpblwiLFxuICAgICAgICAgICAgICAgIFwibGltaXRcIixcbiAgICAgICAgICAgICAgICBcInBhZGRpbmdcIixcbiAgICAgICAgICAgICAgICBcInJhbmdlXCIsXG4gICAgICAgICAgICAgICAgXCJhbmltYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJzbmFwXCIsXG4gICAgICAgICAgICAgICAgXCJzdGVwXCIsXG4gICAgICAgICAgICAgICAgXCJmb3JtYXRcIixcbiAgICAgICAgICAgICAgICBcInBpcHNcIixcbiAgICAgICAgICAgICAgICBcInRvb2x0aXBzXCIsXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgLy8gT25seSBjaGFuZ2Ugb3B0aW9ucyB0aGF0IHdlJ3JlIGFjdHVhbGx5IHBhc3NlZCB0byB1cGRhdGUuXG4gICAgICAgICAgICB1cGRhdGVBYmxlLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgdW5kZWZpbmVkLiBudWxsIHJlbW92ZXMgdGhlIHZhbHVlLlxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zVG9VcGRhdGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbE9wdGlvbnNbbmFtZV0gPSBvcHRpb25zVG9VcGRhdGVbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgbmV3T3B0aW9ucyA9IHRlc3RPcHRpb25zKG9yaWdpbmFsT3B0aW9ucyk7XG4gICAgICAgICAgICAvLyBMb2FkIG5ldyBvcHRpb25zIGludG8gdGhlIHNsaWRlciBzdGF0ZVxuICAgICAgICAgICAgdXBkYXRlQWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNUb1VwZGF0ZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbbmFtZV0gPSBuZXdPcHRpb25zW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2NvcGVfU3BlY3RydW0gPSBuZXdPcHRpb25zLnNwZWN0cnVtO1xuICAgICAgICAgICAgLy8gTGltaXQsIG1hcmdpbiBhbmQgcGFkZGluZyBkZXBlbmQgb24gdGhlIHNwZWN0cnVtIGJ1dCBhcmUgc3RvcmVkIG91dHNpZGUgb2YgaXQuICgjNjc3KVxuICAgICAgICAgICAgb3B0aW9ucy5tYXJnaW4gPSBuZXdPcHRpb25zLm1hcmdpbjtcbiAgICAgICAgICAgIG9wdGlvbnMubGltaXQgPSBuZXdPcHRpb25zLmxpbWl0O1xuICAgICAgICAgICAgb3B0aW9ucy5wYWRkaW5nID0gbmV3T3B0aW9ucy5wYWRkaW5nO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHBpcHMsIHJlbW92ZXMgZXhpc3RpbmcuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICAgICAgcGlwcyhvcHRpb25zLnBpcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlIHRvb2x0aXBzLCByZW1vdmVzIGV4aXN0aW5nLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICB0b29sdGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVG9vbHRpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEludmFsaWRhdGUgdGhlIGN1cnJlbnQgcG9zaXRpb25pbmcgc28gdmFsdWVTZXQgZm9yY2VzIGFuIHVwZGF0ZS5cbiAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9ucyA9IFtdO1xuICAgICAgICAgICAgdmFsdWVTZXQoaXNTZXQob3B0aW9uc1RvVXBkYXRlLnN0YXJ0KSA/IG9wdGlvbnNUb1VwZGF0ZS5zdGFydCA6IHYsIGZpcmVTZXRFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gc3RlcHNcbiAgICAgICAgZnVuY3Rpb24gc2V0dXBTbGlkZXIoKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGJhc2UgZWxlbWVudCwgaW5pdGlhbGl6ZSBIVE1MIGFuZCBzZXQgY2xhc3Nlcy5cbiAgICAgICAgICAgIC8vIEFkZCBoYW5kbGVzIGFuZCBjb25uZWN0IGVsZW1lbnRzLlxuICAgICAgICAgICAgc2NvcGVfQmFzZSA9IGFkZFNsaWRlcihzY29wZV9UYXJnZXQpO1xuICAgICAgICAgICAgYWRkRWxlbWVudHMob3B0aW9ucy5jb25uZWN0LCBzY29wZV9CYXNlKTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCB1c2VyIGV2ZW50cy5cbiAgICAgICAgICAgIGJpbmRTbGlkZXJFdmVudHMob3B0aW9ucy5ldmVudHMpO1xuICAgICAgICAgICAgLy8gVXNlIHRoZSBwdWJsaWMgdmFsdWUgbWV0aG9kIHRvIHNldCB0aGUgc3RhcnQgdmFsdWVzLlxuICAgICAgICAgICAgdmFsdWVTZXQob3B0aW9ucy5zdGFydCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICAgICAgcGlwcyhvcHRpb25zLnBpcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICB0b29sdGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJpYSgpO1xuICAgICAgICB9XG4gICAgICAgIHNldHVwU2xpZGVyKCk7XG4gICAgICAgIHZhciBzY29wZV9TZWxmID0ge1xuICAgICAgICAgICAgZGVzdHJveTogZGVzdHJveSxcbiAgICAgICAgICAgIHN0ZXBzOiBnZXROZXh0U3RlcHMsXG4gICAgICAgICAgICBvbjogYmluZEV2ZW50LFxuICAgICAgICAgICAgb2ZmOiByZW1vdmVFdmVudCxcbiAgICAgICAgICAgIGdldDogdmFsdWVHZXQsXG4gICAgICAgICAgICBzZXQ6IHZhbHVlU2V0LFxuICAgICAgICAgICAgc2V0SGFuZGxlOiB2YWx1ZVNldEhhbmRsZSxcbiAgICAgICAgICAgIHJlc2V0OiB2YWx1ZVJlc2V0LFxuICAgICAgICAgICAgLy8gRXhwb3NlZCBmb3IgdW5pdCB0ZXN0aW5nLCBkb24ndCB1c2UgdGhpcyBpbiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICAgICAgX19tb3ZlSGFuZGxlczogZnVuY3Rpb24gKHVwd2FyZCwgcHJvcG9zYWwsIGhhbmRsZU51bWJlcnMpIHtcbiAgICAgICAgICAgICAgICBtb3ZlSGFuZGxlcyh1cHdhcmQsIHByb3Bvc2FsLCBzY29wZV9Mb2NhdGlvbnMsIGhhbmRsZU51bWJlcnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9yaWdpbmFsT3B0aW9ucyxcbiAgICAgICAgICAgIHVwZGF0ZU9wdGlvbnM6IHVwZGF0ZU9wdGlvbnMsXG4gICAgICAgICAgICB0YXJnZXQ6IHNjb3BlX1RhcmdldCxcbiAgICAgICAgICAgIHJlbW92ZVBpcHM6IHJlbW92ZVBpcHMsXG4gICAgICAgICAgICByZW1vdmVUb29sdGlwczogcmVtb3ZlVG9vbHRpcHMsXG4gICAgICAgICAgICBnZXRQb3NpdGlvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zLnNsaWNlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0VG9vbHRpcHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfVG9vbHRpcHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0T3JpZ2luczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9IYW5kbGVzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBpcHM6IHBpcHMsIC8vIElzc3VlICM1OTRcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHNjb3BlX1NlbGY7XG4gICAgfVxuICAgIC8vIFJ1biB0aGUgc3RhbmRhcmQgaW5pdGlhbGl6ZXJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKHRhcmdldCwgb3JpZ2luYWxPcHRpb25zKSB7XG4gICAgICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQubm9kZU5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IGNyZWF0ZSByZXF1aXJlcyBhIHNpbmdsZSBlbGVtZW50LCBnb3Q6IFwiICsgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaHJvdyBhbiBlcnJvciBpZiB0aGUgc2xpZGVyIHdhcyBhbHJlYWR5IGluaXRpYWxpemVkLlxuICAgICAgICBpZiAodGFyZ2V0Lm5vVWlTbGlkZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IFNsaWRlciB3YXMgYWxyZWFkeSBpbml0aWFsaXplZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGVzdCB0aGUgb3B0aW9ucyBhbmQgY3JlYXRlIHRoZSBzbGlkZXIgZW52aXJvbm1lbnQ7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGVzdE9wdGlvbnMob3JpZ2luYWxPcHRpb25zKTtcbiAgICAgICAgdmFyIGFwaSA9IHNjb3BlKHRhcmdldCwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zKTtcbiAgICAgICAgdGFyZ2V0Lm5vVWlTbGlkZXIgPSBhcGk7XG4gICAgICAgIHJldHVybiBhcGk7XG4gICAgfVxuICAgIHZhciBub3Vpc2xpZGVyID0ge1xuICAgICAgICAvLyBFeHBvc2VkIGZvciB1bml0IHRlc3RpbmcsIGRvbid0IHVzZSB0aGlzIGluIHlvdXIgYXBwbGljYXRpb24uXG4gICAgICAgIF9fc3BlY3RydW06IFNwZWN0cnVtLFxuICAgICAgICAvLyBBIHJlZmVyZW5jZSB0byB0aGUgZGVmYXVsdCBjbGFzc2VzLCBhbGxvd3MgZ2xvYmFsIGNoYW5nZXMuXG4gICAgICAgIC8vIFVzZSB0aGUgY3NzQ2xhc3NlcyBvcHRpb24gZm9yIGNoYW5nZXMgdG8gb25lIHNsaWRlci5cbiAgICAgICAgY3NzQ2xhc3NlczogY3NzQ2xhc3NlcyxcbiAgICAgICAgY3JlYXRlOiBpbml0aWFsaXplLFxuICAgIH07XG5cbiAgICBleHBvcnRzLmNyZWF0ZSA9IGluaXRpYWxpemU7XG4gICAgZXhwb3J0cy5jc3NDbGFzc2VzID0gY3NzQ2xhc3NlcztcbiAgICBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IG5vdWlzbGlkZXI7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSk7XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3Vpc2xpZGVyLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcmQuc2Fzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcnQuc2Fzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZpbHRlci1yYW5nZS1kYXRlLnNhc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9maWx0ZXIuc2Fzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaC1hcmVhLnNhc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zb3J0LWFyZWEuc2Fzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5zYXNzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgQXBwVmlldyBmcm9tICcuLi92aWV3L2FwcFZpZXcnO1xyXG5pbXBvcnQgQXBwQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVyL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgV2ViU3RvcmFnZSBmcm9tICcuLi92aWV3L3dlYi1zdG9yYWdlL3dlYi1zdG9yYWdlJztcclxuaW1wb3J0IHsgVENhcmRzLCBUT3B0aW9ucywgVGRlZmF1bHRGaWx0ZXIsIFRzb3J0X3R5cGUsIFRzb3J0X2RpcmVjdGlvbiwgVERTbGlkZXIgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XHJcbmltcG9ydCB7IE1BWF9DQVJUX0NPVU5UIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcbmNsYXNzIEFwcCB7XHJcbiAgICB2aWV3OiBBcHBWaWV3O1xyXG4gICAgY29udHJvbGxlcjogQXBwQ29udHJvbGxlcjtcclxuICAgIHN0b3JhZ2U6IFdlYlN0b3JhZ2U7XHJcbiAgICBvcHRpb25zOiBUT3B0aW9ucztcclxuICAgIHJlYWRvbmx5IGRlZmF1bGVGaWx0ZXJTZXR0aW5nOiBUZGVmYXVsdEZpbHRlcjtcclxuICAgIGRhdGE6IFRDYXJkcztcclxuICAgIGNhcnRJdGVtczogc3RyaW5nW107XHJcbiAgICByZWFkb25seSBkZWZhdWx0T3B0aW9uczogVE9wdGlvbnM7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBUQ2FyZHMpIHtcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgQXBwVmlldygpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBBcHBDb250cm9sbGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gbmV3IFdlYlN0b3JhZ2UoKTtcclxuICAgICAgICB0aGlzLmNhcnRJdGVtcyA9IHRoaXMuc3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykgfHwgW107XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc29ydFNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdsaW5lJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdkYXRlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsdGVyU2V0dGluZzoge30sXHJcbiAgICAgICAgICAgIHNlYXJjaDogJycsXHJcbiAgICAgICAgICAgIGZpbHRlclNsaWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlckRhdGU6IFsyMDE3LCAyMDIyLCAyMDE3LCAyMDIyXSxcclxuICAgICAgICAgICAgICAgIHNsaWRlclByaWNlOiBbMCwgNDUsIDAsIDQ1XSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuc3RvcmFnZS5nZXRJdGVtKCdvcHRpb25zJykgfHwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmRlZmF1bHRPcHRpb25zKSk7XHJcbiAgICAgICAgdGhpcy5kZWZhdWxlRmlsdGVyU2V0dGluZyA9IHtcclxuICAgICAgICAgICAgZmlsdGVyU2V0dGluZzoge1xyXG4gICAgICAgICAgICAgICAgY291bnRyeTogWyfQmNC90LTQuNGPJywgJ9Ca0LjRgtCw0LknLCAn0JDQvdCz0LvQuNGPJywgJ9CY0L3QtNC+0L3QtdC30LjRjyddLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0RXZlbnQoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLXJlc2V0JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5maWx0ZXJTZXR0aW5nID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmRlZmF1bHRPcHRpb25zKSkuZmlsdGVyU2V0dGluZztcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZpbHRlclNsaWRlcnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZGVmYXVsdE9wdGlvbnMpKS5maWx0ZXJTbGlkZXJzO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2VhcmNoID0gJyc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckZpbHRlcmluZ0RhdGEodGhpcy5vcHRpb25zKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnJlbmRlckZpbHRlckFyZWEodGhpcy5vcHRpb25zKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnJlbmRlclNlYXJjaCh0aGlzLm9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGVja2JveEV2ZW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyU2xpZGVyRXZlbnQoKTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hFdmVudCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldEl0ZW0oJ29wdGlvbnMnLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCByZXNldEFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcmVzZXQnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICByZXNldEFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjYXJkc0V2ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IGNhcnRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9uLWNhcnQnKTtcclxuICAgICAgICBjYXJ0QnRucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FydEl0ZW1zLmxlbmd0aCA8PSBNQVhfQ0FSVF9DT1VOVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2VDYXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydEJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdhZGRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckJveCgnLmNhcnQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5yZW5kZXJDYXJ0KHRoaXMuY2FydEl0ZW1zLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRCdG4gPSBlLnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FyZElkID0gY2FydEJ0bi5kYXRhc2V0LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhcnRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRlZCcpICYmIGNhcmRJZCAmJiB0aGlzLmNhcnRJdGVtcy5sZW5ndGggPCBNQVhfQ0FSVF9DT1VOVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJ0SXRlbXMucHVzaChjYXJkSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydEJ0bi5pbm5lclRleHQgPSAn0JTQvtCx0LDQstC70LXQvdC+ISc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDYXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhY2FydEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZGVkJykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJ0SXRlbXMubGVuZ3RoID09IE1BWF9DQVJUX0NPVU5UXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9CY0LfQstC40L3QuNGC0LUsINC60L7RgNC30LjQvdCwINC30LDQv9C+0LvQvdC10L3QsC4g0KPQtNC70LDQuNGC0Ywg0LjQtyDQutC+0YDQt9C40L3RiyDRh9GC0L4g0L3QuNCx0LTRg9GMJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FydEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZGVkJykgJiYgY2FyZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpID0gdGhpcy5jYXJ0SXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtID09IGNhcmRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcnRJdGVtcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0QnRuLmlubmVyVGV4dCA9ICfQkiDQutC+0YDQt9C40L3Rgyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDYXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgdGhyb3cgbmV3IEVycm9yKGDQkiDQutC+0YDQt9C40L3QtSDRg9C20LUg0LHQvtC70YzRiNC1ICR7TUFYX0NBUlRfQ09VTlR9INGI0YLRg9C6YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgdGhpcy5jYXJ0SXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc29ydEV2ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29ydC1zZWxlY3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgICAgICBjb25zdCBzb3J0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvcnQtYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgLy8g0LrQu9C40Log0YHQvtGA0YLQuNGA0L7QstC60Lgg0L/QviDQstC+0LfRgNCw0YHRgtCw0L3QuNGOINC70LjQsdC+INGD0LHRi9Cy0LDQvdC40Y5cclxuICAgICAgICBzb3J0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNvcnRCdG4udmFsdWUgYXMgVHNvcnRfZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc29ydFNldHRpbmdzLmRpcmVjdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5vcHRpb25zLmZpbHRlclNldHRpbmcpKSB0aGlzLnJlbmRlckZpbHRlcmluZ0RhdGEodGhpcy5vcHRpb25zKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLnJlbmRlclNvcnRpbmdEYXRhKHRoaXMub3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbSgnb3B0aW9ucycsIHRoaXMub3B0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g0LjQt9C80LXQvdC10L3QuNGPIHNlbGVjdCDQv9C+INGA0LDQt9C90YvQvCDQutGA0LjRgtC10YDQuNGP0Lwg0YHQvtGA0YLQuNGA0L7QstC60LhcclxuICAgICAgICBzb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzb3J0Lm9wdGlvbnNbc29ydC5zZWxlY3RlZEluZGV4XVsndmFsdWUnXSBhcyBUc29ydF90eXBlO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc29ydFNldHRpbmdzLnR5cGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5maWx0ZXJTZXR0aW5nKSkgdGhpcy5yZW5kZXJGaWx0ZXJpbmdEYXRhKHRoaXMub3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZW5kZXJTb3J0aW5nRGF0YSh0aGlzLm9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldEl0ZW0oJ29wdGlvbnMnLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZWFyY2hFdmVudCgpIHtcclxuICAgICAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBjb25zdCBjbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaWNvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgIGNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2VhcmNoID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRmlsdGVyaW5nRGF0YSh0aGlzLm9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldEl0ZW0oJ29wdGlvbnMnLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNlYXJjaCA9IHNlYXJjaC52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJGaWx0ZXJpbmdEYXRhKHRoaXMub3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbSgnb3B0aW9ucycsIHRoaXMub3B0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNoZWNrYm94RXZlbnQoKSB7XHJcbiAgICAgICAgLy/QvdCw0LLQtdGI0LjQstCw0LXQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC60Lgg0YHQvtCx0YvRgtC40Lkg0L3QsCDRh9C10LrQsdC+0LrRgdGLLCDQtNC70Y8g0LjQt9C80LXQvdC10L3QuNGPINC90LDRgdGC0YDQvtC10Log0YTQuNC70YzRgtGA0LDRhtC40LhcclxuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlci1hcmVhIGlucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcbiAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xyXG4gICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94VmFsdWUgPSBjaGVja2JveC52YWx1ZSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3hOYW1lID0gY2hlY2tib3gubmFtZSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5maWx0ZXJTZXR0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJheTogc3RyaW5nW10gPSB0aGlzLm9wdGlvbnMuZmlsdGVyU2V0dGluZ1tjaGVja2JveE5hbWVdIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChgJHtjaGVja2JveFZhbHVlLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZmlsdGVyU2V0dGluZ1tjaGVja2JveE5hbWVdID0gYXJyYXk7IC8v0YHQvtC30LTQsNC10Lwg0LzQsNGB0YHQuNCyINGBINC00LDQvdC90YvQvNC4INC00LvRjyDRhNC40LvRjNGC0YDQsNGG0LjQuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5maWx0ZXJTZXR0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpID0gdGhpcy5vcHRpb25zLmZpbHRlclNldHRpbmdbY2hlY2tib3hOYW1lXS5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0udG9Mb3dlckNhc2UoKSA9PT0gY2hlY2tib3hWYWx1ZS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZpbHRlclNldHRpbmdbY2hlY2tib3hOYW1lXS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5maWx0ZXJTZXR0aW5nW2NoZWNrYm94TmFtZV0ubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMuZmlsdGVyU2V0dGluZ1tjaGVja2JveE5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRmlsdGVyaW5nRGF0YSh0aGlzLm9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbSgnb3B0aW9ucycsIHRoaXMub3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmaWx0ZXJTbGlkZXJFdmVudCgpIHtcclxuICAgICAgICBjb25zdCBzbGlkZXJEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1kYXRlJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgc2xpZGVyUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLXByaWNlJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgKChzbGlkZXJEYXRlIGFzIHVua25vd24pIGFzIFREU2xpZGVyKS5ub1VpU2xpZGVyLm9uKCdjaGFuZ2UnLCAodmFsdWVzOiBudW1iZXJbXSwgaGFuZGxlOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZpbHRlclNsaWRlcnMuc2xpZGVyRGF0ZVtoYW5kbGVdID0gTWF0aC5yb3VuZCh2YWx1ZXNbaGFuZGxlXSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRmlsdGVyaW5nRGF0YSh0aGlzLm9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldEl0ZW0oJ29wdGlvbnMnLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICgoc2xpZGVyUHJpY2UgYXMgdW5rbm93bikgYXMgVERTbGlkZXIpLm5vVWlTbGlkZXIub24oJ2NoYW5nZScsICh2YWx1ZXM6IG51bWJlcltdLCBoYW5kbGU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZmlsdGVyU2xpZGVycy5zbGlkZXJQcmljZVtoYW5kbGVdID0gTWF0aC5yb3VuZCh2YWx1ZXNbaGFuZGxlXSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRmlsdGVyaW5nRGF0YSh0aGlzLm9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldEl0ZW0oJ29wdGlvbnMnLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyU29ydGluZ0RhdGEob3B0aW9uczogVE9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmNsZWFyQm94KCcuY2FyZC1saXN0Jyk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLnNvcnQodGhpcy5kYXRhLCBvcHRpb25zLCAoZGF0YTogVENhcmRzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5yZW5kZXJDYXJkcyhkYXRhLCB0aGlzLmNhcnRJdGVtcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYXJkc0V2ZW50KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlbmRlckZpbHRlcmluZ0RhdGEob3B0aW9uczogVE9wdGlvbnMpIHtcclxuICAgICAgICBsZXQgbmV3RGF0YSA9IHRoaXMuZGF0YTtcclxuICAgICAgICB0aGlzLmNsZWFyQm94KCcuY2FyZC1saXN0Jyk7XHJcbiAgICAgICAgbmV3RGF0YSA9IHRoaXMuY29udHJvbGxlci5zb3J0KG5ld0RhdGEsIG9wdGlvbnMpO1xyXG4gICAgICAgIGlmICghT2JqZWN0LmtleXMob3B0aW9ucy5maWx0ZXJTZXR0aW5nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8g0LXRgdC70Lgg0L3QtdGCINC90LDRgdGC0YDQvtC10Log0LTQu9GPINGE0LjQu9GM0YLRgNCwLCDQvNGLINC40YHQv9C+0LvRjNC30YPQtdC8INC00LXRhNC+0LvRgtC90YvQtSDQvdCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINGE0LjQu9GM0YLRgNCw0YbQuNC4XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWxlRmlsdGVyU2V0dGluZy5maWx0ZXJTZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zZWFyY2gsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZpbHRlclNsaWRlcnMsXHJcbiAgICAgICAgICAgICAgICAoZGF0YTogVENhcmRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnJlbmRlckNhcmRzKGRhdGEsIHRoaXMuY2FydEl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmlsdGVyU2V0dGluZyxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuc2VhcmNoLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5maWx0ZXJTbGlkZXJzLFxyXG4gICAgICAgICAgICAgICAgKGRhdGE6IFRDYXJkcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5yZW5kZXJDYXJkcyhkYXRhLCB0aGlzLmNhcnRJdGVtcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FyZHNFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xlYXJCb3goY2xhc3NOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBjYXJkc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2NsYXNzTmFtZX1gKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBjYXJkc0xpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMudmlldy5yZW5kZXJGaWx0ZXJBcmVhKHRoaXMub3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy52aWV3LnJlbmRlclNlYXJjaCh0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMudmlldy5yZW5kZXJTb3J0QXJlYSh0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMudmlldy5yZW5kZXJDYXJ0KHRoaXMuY2FydEl0ZW1zLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tib3hFdmVudCgpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoRXZlbnQoKTtcclxuICAgICAgICB0aGlzLnNvcnRFdmVudCgpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyU2xpZGVyRXZlbnQoKTtcclxuICAgICAgICB0aGlzLnJlc2V0RXZlbnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJGaWx0ZXJpbmdEYXRhKHRoaXMub3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiY29uc3QgTUFYX0NBUlRfQ09VTlQgPSAyMDtcclxuZXhwb3J0IHsgTUFYX0NBUlRfQ09VTlQgfTtcclxuIiwiaW1wb3J0IHsgVENhcmRzIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGE6IFRDYXJkcyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBkaXNjb3VudF92YWx1ZTogMCxcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgc3JjOiAnLi9hc3NldHMvaW1hZ2VzL0FITUFELmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBicmFuZDogJ0FITUFEIFRFQScsXHJcbiAgICAgICAgdHlwZTogJ9GH0LDQuScsXHJcbiAgICAgICAgYm94OiAn0LvQuNGB0YLQvtCy0L7QuScsXHJcbiAgICAgICAgY29sb3I6ICfRh9C10YDQvdGL0LknLFxyXG4gICAgICAgIGNvdW50cnk6ICfQmNC90LTQuNGPJyxcclxuICAgICAgICBwcmljZTogMTAsXHJcbiAgICAgICAgZGF0ZTogMjAxOSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgZGlzY291bnRfdmFsdWU6IDEwLFxyXG4gICAgICAgIGRpc2NvdW50OiB0cnVlLFxyXG4gICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICAgIHNyYzogJy4vYXNzZXRzL2ltYWdlcy9saXB0b24uanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJyYW5kOiAnTElQVE9OJyxcclxuICAgICAgICB0eXBlOiAn0YfQsNC5JyxcclxuICAgICAgICBib3g6ICfQv9Cw0LrQtdGC0LjRgNC+0LLQsNC90L3Ri9C5JyxcclxuICAgICAgICBjb2xvcjogJ9GH0LXRgNC90YvQuScsXHJcbiAgICAgICAgY291bnRyeTogJ9CY0L3QtNC+0L3QtdC30LjRjycsXHJcbiAgICAgICAgcHJpY2U6IDEyLFxyXG4gICAgICAgIGRhdGU6IDIwMjEsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIGRpc2NvdW50X3ZhbHVlOiAwLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICBzcmM6ICcuL2Fzc2V0cy9pbWFnZXMvQUhNQURfcmVkLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBicmFuZDogJ0FITUFEIFRFQScsXHJcbiAgICAgICAgdHlwZTogJ9GH0LDQuScsXHJcbiAgICAgICAgYm94OiAn0L/QsNC60LXRgtC40YDQvtCy0LDQvdC90YvQuScsXHJcbiAgICAgICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICAgICAgY291bnRyeTogJ9CY0L3QtNC40Y8nLFxyXG4gICAgICAgIHByaWNlOiAxMyxcclxuICAgICAgICBkYXRlOiAyMDIwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICBkaXNjb3VudF92YWx1ZTogMCxcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgc3JjOiAnLi9hc3NldHMvaW1hZ2VzL3JpY2hhcmQuanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJyYW5kOiAnUklDSEFSRCcsXHJcbiAgICAgICAgdHlwZTogJ9GH0LDQuScsXHJcbiAgICAgICAgYm94OiAn0LvQuNGB0YLQvtCy0L7QuScsXHJcbiAgICAgICAgY29sb3I6ICfRh9C10YDQvdGL0LknLFxyXG4gICAgICAgIGNvdW50cnk6ICfQkNC90LPQu9C40Y8nLFxyXG4gICAgICAgIHByaWNlOiA1LFxyXG4gICAgICAgIGRhdGU6IDIwMjIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA1LFxyXG4gICAgICAgIGRpc2NvdW50X3ZhbHVlOiAzMCxcclxuICAgICAgICBkaXNjb3VudDogdHJ1ZSxcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICBzcmM6ICcuL2Fzc2V0cy9pbWFnZXMvZ3JlZW5maWVsZC5wbmcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJhbmQ6ICdHcmVlbmZpZWxkJyxcclxuICAgICAgICB0eXBlOiAn0YfQsNC5JyxcclxuICAgICAgICBib3g6ICfQu9C40YHRgtC+0LLQvtC5JyxcclxuICAgICAgICBjb2xvcjogJ9C30LXQu9C10L3Ri9C5JyxcclxuICAgICAgICBjb3VudHJ5OiAn0JrQuNGC0LDQuScsXHJcbiAgICAgICAgcHJpY2U6IDMwLFxyXG4gICAgICAgIGRhdGU6IDIwMjIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA2LFxyXG4gICAgICAgIGRpc2NvdW50X3ZhbHVlOiA1MCxcclxuICAgICAgICBkaXNjb3VudDogdHJ1ZSxcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICBzcmM6ICcuL2Fzc2V0cy9pbWFnZXMvcmljaGFyZF93aGl0ZS5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJhbmQ6ICdSSUNIQVJEJyxcclxuICAgICAgICB0eXBlOiAn0YfQsNC5JyxcclxuICAgICAgICBib3g6ICfQu9C40YHRgtC+0LLQvtC5JyxcclxuICAgICAgICBjb2xvcjogJ9Cx0LXQu9GL0LknLFxyXG4gICAgICAgIGNvdW50cnk6ICfQkNC90LPQu9C40Y8nLFxyXG4gICAgICAgIHByaWNlOiAyMixcclxuICAgICAgICBkYXRlOiAyMDIyLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNyxcclxuICAgICAgICBkaXNjb3VudF92YWx1ZTogNTIsXHJcbiAgICAgICAgZGlzY291bnQ6IHRydWUsXHJcbiAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgc3JjOiAnLi9hc3NldHMvaW1hZ2VzL2N1cnRpc19ibGFjay5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJhbmQ6ICdDVVJUSVMnLFxyXG4gICAgICAgIHR5cGU6ICfRh9Cw0LknLFxyXG4gICAgICAgIGJveDogJ9C70LjRgdGC0L7QstC+0LknLFxyXG4gICAgICAgIGNvbG9yOiAn0YfQtdGA0L3Ri9C5JyxcclxuICAgICAgICBjb3VudHJ5OiAn0JjQvdC00L7QvdC10LfQuNGPJyxcclxuICAgICAgICBwcmljZTogNyxcclxuICAgICAgICBkYXRlOiAyMDE4LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogOCxcclxuICAgICAgICBkaXNjb3VudF92YWx1ZTogNSxcclxuICAgICAgICBkaXNjb3VudDogdHJ1ZSxcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICBzcmM6ICcuL2Fzc2V0cy9pbWFnZXMvY3VydGlzX2dyZWVuX3BhY2suanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJyYW5kOiAnQ1VSVElTJyxcclxuICAgICAgICB0eXBlOiAn0YfQsNC5JyxcclxuICAgICAgICBib3g6ICfQv9Cw0LrQtdGC0LjRgNC+0LLQsNC90L3Ri9C5JyxcclxuICAgICAgICBjb2xvcjogJ9C30LXQu9C10L3Ri9C5JyxcclxuICAgICAgICBjb3VudHJ5OiAn0JjQvdC00L7QvdC10LfQuNGPJyxcclxuICAgICAgICBwcmljZTogMTMsXHJcbiAgICAgICAgZGF0ZTogMjAxNyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDksXHJcbiAgICAgICAgZGlzY291bnRfdmFsdWU6IDQyLFxyXG4gICAgICAgIGRpc2NvdW50OiB0cnVlLFxyXG4gICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICAgIHNyYzogJy4vYXNzZXRzL2ltYWdlcy9pbXByYV9ibGFjay5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJhbmQ6ICdJTVBSQScsXHJcbiAgICAgICAgdHlwZTogJ9GH0LDQuScsXHJcbiAgICAgICAgYm94OiAn0LvQuNGB0YLQvtCy0L7QuScsXHJcbiAgICAgICAgY29sb3I6ICfRh9C10YDQvdGL0LknLFxyXG4gICAgICAgIGNvdW50cnk6ICfQkNC90LPQu9C40Y8nLFxyXG4gICAgICAgIHByaWNlOiAyNCxcclxuICAgICAgICBkYXRlOiAyMDE4LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMTAsXHJcbiAgICAgICAgZGlzY291bnRfdmFsdWU6IDUwLFxyXG4gICAgICAgIGRpc2NvdW50OiB0cnVlLFxyXG4gICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICAgIHNyYzogJy4vYXNzZXRzL2ltYWdlcy9pbXByYV9ncmVlbi5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJhbmQ6ICdJTVBSQScsXHJcbiAgICAgICAgdHlwZTogJ9GH0LDQuScsXHJcbiAgICAgICAgYm94OiAn0LvQuNGB0YLQvtCy0L7QuScsXHJcbiAgICAgICAgY29sb3I6ICfQt9C10LvQtdC90YvQuScsXHJcbiAgICAgICAgY291bnRyeTogJ9CQ0L3Qs9C70LjRjycsXHJcbiAgICAgICAgcHJpY2U6IDE1LFxyXG4gICAgICAgIGRhdGU6IDIwMjAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxMSxcclxuICAgICAgICBkaXNjb3VudF92YWx1ZTogNTAsXHJcbiAgICAgICAgZGlzY291bnQ6IHRydWUsXHJcbiAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgc3JjOiAnLi9hc3NldHMvaW1hZ2VzL2ltcHJhX3JlZC5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJhbmQ6ICdJTVBSQScsXHJcbiAgICAgICAgdHlwZTogJ9GH0LDQuScsXHJcbiAgICAgICAgYm94OiAn0LvQuNGB0YLQvtCy0L7QuScsXHJcbiAgICAgICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICAgICAgY291bnRyeTogJ9CQ0L3Qs9C70LjRjycsXHJcbiAgICAgICAgcHJpY2U6IDEwLFxyXG4gICAgICAgIGRhdGU6IDIwMjIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxMixcclxuICAgICAgICBkaXNjb3VudF92YWx1ZTogNTAsXHJcbiAgICAgICAgZGlzY291bnQ6IHRydWUsXHJcbiAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgc3JjOiAnLi9hc3NldHMvaW1hZ2VzL0FITUFEX3doaXRlLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBicmFuZDogJ0FITUFEIFRFQScsXHJcbiAgICAgICAgdHlwZTogJ9GH0LDQuScsXHJcbiAgICAgICAgYm94OiAn0LvQuNGB0YLQvtCy0L7QuScsXHJcbiAgICAgICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgICAgICBjb3VudHJ5OiAn0JjQvdC00LjRjycsXHJcbiAgICAgICAgcHJpY2U6IDIxLFxyXG4gICAgICAgIGRhdGU6IDIwMjIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxMyxcclxuICAgICAgICBkaXNjb3VudF92YWx1ZTogNTAsXHJcbiAgICAgICAgZGlzY291bnQ6IHRydWUsXHJcbiAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgc3JjOiAnLi9hc3NldHMvaW1hZ2VzL2N1cnRpc193aGl0ZS5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJhbmQ6ICdDVVJUSVMnLFxyXG4gICAgICAgIHR5cGU6ICfRh9Cw0LknLFxyXG4gICAgICAgIGJveDogJ9C70LjRgdGC0L7QstC+0LknLFxyXG4gICAgICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICAgICAgY291bnRyeTogJ9CY0L3QtNC+0L3QtdC30LjRjycsXHJcbiAgICAgICAgcHJpY2U6IDIyLjUsXHJcbiAgICAgICAgZGF0ZTogMjAxOCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDE0LFxyXG4gICAgICAgIGRpc2NvdW50X3ZhbHVlOiA1MCxcclxuICAgICAgICBkaXNjb3VudDogdHJ1ZSxcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICBzcmM6ICcuL2Fzc2V0cy9pbWFnZXMvcmljaGFyZC5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJhbmQ6ICdSSUNIQVJEJyxcclxuICAgICAgICB0eXBlOiAn0YfQsNC5JyxcclxuICAgICAgICBib3g6ICfQu9C40YHRgtC+0LLQvtC5JyxcclxuICAgICAgICBjb2xvcjogJ9GH0LXRgNC90YvQuScsXHJcbiAgICAgICAgY291bnRyeTogJ9Ca0LjRgtCw0LknLFxyXG4gICAgICAgIHByaWNlOiAxNC4yLFxyXG4gICAgICAgIGRhdGU6IDIwMjIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxNSxcclxuICAgICAgICBkaXNjb3VudF92YWx1ZTogNTAsXHJcbiAgICAgICAgZGlzY291bnQ6IHRydWUsXHJcbiAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgc3JjOiAnLi9hc3NldHMvaW1hZ2VzL2xpcHRvbl9ncmVlbi53ZWJwJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJyYW5kOiAnTGlwdG9uJyxcclxuICAgICAgICB0eXBlOiAn0YfQsNC5JyxcclxuICAgICAgICBib3g6ICfQv9Cw0LrQtdGC0LjRgNC+0LLQsNC90L3Ri9C5JyxcclxuICAgICAgICBjb2xvcjogJ9C30LXQu9C10L3Ri9C5JyxcclxuICAgICAgICBjb3VudHJ5OiAn0JjQvdC00LjRjycsXHJcbiAgICAgICAgcHJpY2U6IDEzLjIsXHJcbiAgICAgICAgZGF0ZTogMjAyMixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDE2LFxyXG4gICAgICAgIGRpc2NvdW50X3ZhbHVlOiAxMCxcclxuICAgICAgICBkaXNjb3VudDogdHJ1ZSxcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICBzcmM6ICcuL2Fzc2V0cy9pbWFnZXMvbGlwdG9uX3JlZC5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJhbmQ6ICdMaXB0b24nLFxyXG4gICAgICAgIHR5cGU6ICfRh9Cw0LknLFxyXG4gICAgICAgIGJveDogJ9C/0LDQutC10YLQuNGA0L7QstCw0L3QvdGL0LknLFxyXG4gICAgICAgIGNvbG9yOiAn0YfQtdGA0L3Ri9C5JyxcclxuICAgICAgICBjb3VudHJ5OiAn0JDQvdCz0LvQuNGPJyxcclxuICAgICAgICBwcmljZTogNS41LFxyXG4gICAgICAgIGRhdGU6IDIwMjEsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxNyxcclxuICAgICAgICBkaXNjb3VudF92YWx1ZTogMCxcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgc3JjOiAnLi9hc3NldHMvaW1hZ2VzL2xpcHRvbi13aGl0ZS5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJhbmQ6ICdMaXB0b24nLFxyXG4gICAgICAgIHR5cGU6ICfRh9Cw0LknLFxyXG4gICAgICAgIGJveDogJ9C/0LDQutC10YLQuNGA0L7QstCw0L3QvdGL0LknLFxyXG4gICAgICAgIGNvbG9yOiAn0YfQtdGA0L3Ri9C5JyxcclxuICAgICAgICBjb3VudHJ5OiAn0JDQvdCz0LvQuNGPJyxcclxuICAgICAgICBwcmljZTogMTAsXHJcbiAgICAgICAgZGF0ZTogMjAyMSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDE4LFxyXG4gICAgICAgIGRpc2NvdW50X3ZhbHVlOiAwLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICBzcmM6ICcuL2Fzc2V0cy9pbWFnZXMvcmljaGFyZF9yZWQuanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJyYW5kOiAnUklDSEFSRCcsXHJcbiAgICAgICAgdHlwZTogJ9GH0LDQuScsXHJcbiAgICAgICAgYm94OiAn0L/QsNC60LXRgtC40YDQvtCy0LDQvdC90YvQuScsXHJcbiAgICAgICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICAgICAgY291bnRyeTogJ9CQ0L3Qs9C70LjRjycsXHJcbiAgICAgICAgcHJpY2U6IDE5Ljk5LFxyXG4gICAgICAgIGRhdGU6IDIwMjAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxOSxcclxuICAgICAgICBkaXNjb3VudF92YWx1ZTogMCxcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgc3JjOiAnLi9hc3NldHMvaW1hZ2VzL3JpY2hhcmRfZ3JlZW4uanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJyYW5kOiAnUklDSEFSRCcsXHJcbiAgICAgICAgdHlwZTogJ9GH0LDQuScsXHJcbiAgICAgICAgYm94OiAn0LvQuNGB0YLQvtCy0L7QuScsXHJcbiAgICAgICAgY29sb3I6ICfQt9C10LvQtdC90YvQuScsXHJcbiAgICAgICAgY291bnRyeTogJ9CQ0L3Qs9C70LjRjycsXHJcbiAgICAgICAgcHJpY2U6IDEwLFxyXG4gICAgICAgIGRhdGU6IDIwMTksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyMCxcclxuICAgICAgICBkaXNjb3VudF92YWx1ZTogMCxcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgc3JjOiAnLi9hc3NldHMvaW1hZ2VzL2dyZWVuZmllbGRfYmxhY2suanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJyYW5kOiAnR3JlZW5maWVsZCcsXHJcbiAgICAgICAgdHlwZTogJ9GH0LDQuScsXHJcbiAgICAgICAgYm94OiAn0LvQuNGB0YLQvtCy0L7QuScsXHJcbiAgICAgICAgY29sb3I6ICfRh9C10YDQvdGL0LknLFxyXG4gICAgICAgIGNvdW50cnk6ICfQmNC90LTQvtC90LXQt9C40Y8nLFxyXG4gICAgICAgIHByaWNlOiAxMSxcclxuICAgICAgICBkYXRlOiAyMDIxLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMjEsXHJcbiAgICAgICAgZGlzY291bnRfdmFsdWU6IDUwLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICBzcmM6ICcuL2Fzc2V0cy9pbWFnZXMvZ3JlZW5maWVsZF93aGl0ZS5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJhbmQ6ICdHcmVlbmZpZWxkJyxcclxuICAgICAgICB0eXBlOiAn0YfQsNC5JyxcclxuICAgICAgICBib3g6ICfQu9C40YHRgtC+0LLQvtC5JyxcclxuICAgICAgICBjb2xvcjogJ9Cx0LXQu9GL0LknLFxyXG4gICAgICAgIGNvdW50cnk6ICfQmNC90LTQvtC90LXQt9C40Y8nLFxyXG4gICAgICAgIHByaWNlOiAxMCxcclxuICAgICAgICBkYXRlOiAyMDIyLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMjIsXHJcbiAgICAgICAgZGlzY291bnRfdmFsdWU6IDUwLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICBzcmM6ICcuL2Fzc2V0cy9pbWFnZXMvZ3JlZW5maWVsZF9yZWQuanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJyYW5kOiAnR3JlZW5maWVsZCcsXHJcbiAgICAgICAgdHlwZTogJ9GH0LDQuScsXHJcbiAgICAgICAgYm94OiAn0LvQuNGB0YLQvtCy0L7QuScsXHJcbiAgICAgICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICAgICAgY291bnRyeTogJ9CQ0L3Qs9C70LjRjycsXHJcbiAgICAgICAgcHJpY2U6IDEwLFxyXG4gICAgICAgIGRhdGU6IDIwMTgsXHJcbiAgICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgeyBUQ2FsbEJhY2ssIFRPcHRpb25zLCBUQ2FyZHMsIFRmaWx0ZXJTZXR0aW5nLCBUZmlsdGVyU2xpZGVycyB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcclxuaW1wb3J0IHsgSUNhcmQgfSBmcm9tICcuLi90eXBlcy9pbnRlcmZhY2VzJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQ29udHJvbGxlciB7XHJcbiAgICBzb3J0KGRhdGE6IFRDYXJkcywgb3B0aW9uczogUGljazxUT3B0aW9ucywgJ3NvcnRTZXR0aW5ncyc+LCBjYWxsYmFjaz86IFRDYWxsQmFjayk6IFRDYXJkcyB7XHJcbiAgICAgICAgY29uc3Qgc29ydERhdGEgPSBkYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc29ydFNldHRpbmdzLmRpcmVjdGlvbiA9PT0gJ2xpbmUnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYVtgJHtvcHRpb25zLnNvcnRTZXR0aW5ncy50eXBlfWBdIC0gYltgJHtvcHRpb25zLnNvcnRTZXR0aW5ncy50eXBlfWBdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuc29ydFNldHRpbmdzLmRpcmVjdGlvbiA9PT0gJ3JldmVyc2UnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYltgJHtvcHRpb25zLnNvcnRTZXR0aW5ncy50eXBlfWBdIC0gYVtgJHtvcHRpb25zLnNvcnRTZXR0aW5ncy50eXBlfWBdO1xyXG4gICAgICAgICAgICB9IGVsc2UgdGhyb3cgbmV3IEVycm9yKCdvcHRpb25zINC/0LXRgNC10LTQsNC70LjRgdGMINC90LXQv9GA0LDQstC40LvRjNC90L4nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHNvcnREYXRhKTtcclxuICAgICAgICByZXR1cm4gc29ydERhdGE7IC8vINCy0L7Qt9Cy0YDQsNGJ0LDQtdC8IHNvcnREYXRhLCDQv9C+0YLQvtC80YMg0YfRgtC+INC80Ysg0YTQuNC70YzRgtGA0YPQtdC8INC/0L7RgdC70LUg0YHQvtGA0YLQuNGA0L7QstC60LguXHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKFxyXG4gICAgICAgIGRhdGE6IFRDYXJkcyxcclxuICAgICAgICBmaWx0ZXJTZXR0aW5nOiBUZmlsdGVyU2V0dGluZyxcclxuICAgICAgICBzZWFyY2g6IHN0cmluZyxcclxuICAgICAgICBmaWx0ZXJTbGlkZXJzOiBUZmlsdGVyU2xpZGVycyxcclxuICAgICAgICBjYWxsYmFjazogVENhbGxCYWNrXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBsZXQgbmV3RGF0YTogVENhcmRzID0gW107XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZU5vQ2FyZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWxpc3QnKSBhcyBIVE1MVUxpc3RFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VCb3guY2xhc3NOYW1lID0gJ25vLWNhcmRzJztcclxuICAgICAgICAgICAgbWVzc2FnZUJveC5pbm5lckhUTUwgPSAn0KHQvtCy0L/QsNC00LXQvdC40Lkg0L3QtSDQvdCw0LnQtNC10L3Qvic7XHJcbiAgICAgICAgICAgIGNhcmRzQXJlYS5hcHBlbmQobWVzc2FnZUJveCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBmaWx0ZXJpbmdDYXJkID0gKGtleTogc3RyaW5nLCBjYXJkOiBJQ2FyZCkgPT4ge1xyXG4gICAgICAgICAgICAvLyDRhNC40LvRjNGC0YDRg9C10Lwg0YHQv9C10YDQstCwINC/0L4g0YHQu9Cw0LnQtNC10YDRgyDRhtC10L3Ri1xyXG4gICAgICAgICAgICBpZiAoY2FyZC5wcmljZSA+PSBmaWx0ZXJTbGlkZXJzLnNsaWRlclByaWNlWzBdICYmIGNhcmQucHJpY2UgPD0gZmlsdGVyU2xpZGVycy5zbGlkZXJQcmljZVsxXSkge1xyXG4gICAgICAgICAgICAgICAgLy/RhNGD0LvRjNGC0YDRg9C10Lwg0L/QviDRgdC70LDQudC00LXRgNGDINC00LDRgtGLXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FyZC5kYXRlID49IGZpbHRlclNsaWRlcnMuc2xpZGVyRGF0ZVswXSAmJiBjYXJkLmRhdGUgPD0gZmlsdGVyU2xpZGVycy5zbGlkZXJEYXRlWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/RhNC40LvRjNGC0YDRg9C10Lwg0L3QsNC30LLQsNC90LjQtSDRh9Cw0Y8g0L/QviDQv9C+0LjRgdC60YMg0LIg0YHRgtGA0L7QutC1LiDQldGB0LvQuCDRgdC+0LLQv9Cw0LTQtdC90LjRjyDQtdGB0YLRjCwg0YTQuNC70YzRgtGA0YPQtdC8INC00LDQu9GM0YjQtSwg0LXRgdC70Lgg0L3QtdGCLCDRgtC+INCy0L7Qt9Cy0YDQsNGJ0LDQtdC8IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmQuYnJhbmQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDRhNC40LvRjNGC0YPRgNC10Lwg0L/QviDRh9C10LrQsdC+0LrRgdCw0Lwg0YTQuNC70YzRgtGA0L7QslxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyU2V0dGluZ1trZXldLnNvbWUoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBjYXJkW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gY2FyZFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IGNhcmRba2V5XS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAoY2FyZFtrZXldIGFzIHN0cmluZykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBmaWx0ZXJTZXR0aW5nKSB7XHJcbiAgICAgICAgICAgIC8v0L/RgNC+0LLQtdGA0Y/QtdC8INC90LAg0L3QsNC70LjRh9C40LUg0LrQsNGA0YLQvtGH0LXQuiDQsiBuZXdEYXRhLiDQn9GA0Lgg0L/QtdGA0LLQvtC5INC40YLQtdGA0LDRhtC40Lgg0LjRhSDQvdC10YIsINC80Ysg0LjRgdC/0L7Qu9GM0LfRg9C10Lwg0L/QtdGA0LLQvtC90LDRh9Cw0LvRjNC90YPRjiBEYXRhLlxyXG4gICAgICAgICAgICBpZiAoIW5ld0RhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhID0gZGF0YS5maWx0ZXIoKGNhcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyaW5nQ2FyZChrZXksIGNhcmQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3RGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlTm9DYXJkcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3RGF0YSA9IG5ld0RhdGEuZmlsdGVyKChjYXJkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmluZ0NhcmQoa2V5LCBjYXJkKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8g0LIg0YHQu9GD0YfQsNC1LCDQtdGB0LvQuCDQsiBEYXRhINGD0LbQtSDQvdC10YIg0LrQsNGA0YLQvtGH0LXQuiwg0LzRiyDQv9GA0LXRgNGL0LLQsNC10Lwg0LLRi9C/0L7Qu9C90LXQvdC40LUg0YTQuNC70YzRgtGA0LDRhtC40LgsINC40L3QsNGH0LUg0L/QvtC/0LDQtNC10YIg0L/QvtC0INC/0LXRgNCy0L7QtSDRg9GB0LvQvtCy0LjQtVxyXG4gICAgICAgICAgICAgICAgaWYgKG5ld0RhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU5vQ2FyZHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsYmFjayhuZXdEYXRhKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ2FyZHMgZnJvbSAnLi9jYXJkcy9jYXJkcyc7XHJcbmltcG9ydCB7IFRDYXJkcywgVE9wdGlvbnMgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XHJcbmltcG9ydCBGaWx0ZXJBcmVhIGZyb20gJy4vZmlsdGVyL2ZpbHRlci1hcmVhJztcclxuaW1wb3J0IFNlYXJjaEFyZWEgZnJvbSAnLi9zZWFyY2gvc2VhcmNoLWFyZWEnO1xyXG5pbXBvcnQgU29ydEFyZWEgZnJvbSAnLi9zb3J0L3NvcnQtYXJlYSc7XHJcbmltcG9ydCBDYXJ0IGZyb20gJy4vY2FydC9jYXJ0JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwVmlldyB7XHJcbiAgICBwdWJsaWMgY2FyZHM6IENhcmRzO1xyXG4gICAgcHVibGljIGZpbHRlckFyZWE6IEZpbHRlckFyZWE7XHJcbiAgICBwdWJsaWMgc2VhcmNoQXJlYTogU2VhcmNoQXJlYTtcclxuICAgIHB1YmxpYyBzb3J0QXJlYTogU29ydEFyZWE7XHJcbiAgICBwdWJsaWMgY2FydDogQ2FydDtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FyZHMgPSBuZXcgQ2FyZHMoKTtcclxuICAgICAgICB0aGlzLmZpbHRlckFyZWEgPSBuZXcgRmlsdGVyQXJlYSgpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoQXJlYSA9IG5ldyBTZWFyY2hBcmVhKCk7XHJcbiAgICAgICAgdGhpcy5zb3J0QXJlYSA9IG5ldyBTb3J0QXJlYSgpO1xyXG4gICAgICAgIHRoaXMuY2FydCA9IG5ldyBDYXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2FydChhOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNhcnQuY2hhbmdlQ291bnQoYSk7XHJcbiAgICAgICAgdGhpcy5jYXJ0LnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyQ2FyZHMoZGF0YTogVENhcmRzLCBjYXJ0SXRlbXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkcy5yZW5kZXIoZGF0YSwgY2FydEl0ZW1zKTtcclxuICAgIH1cclxuICAgIHJlbmRlckZpbHRlckFyZWEob3B0aW9uczogVE9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmZpbHRlckFyZWEucmVuZGVyKG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyU2VhcmNoKG9wdGlvbnM6IFRPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hBcmVhLnJlbmRlcihvcHRpb25zKTtcclxuICAgIH1cclxuICAgIHJlbmRlclNvcnRBcmVhKG9wdGlvbnM6IFRPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5zb3J0QXJlYS5yZW5kZXIob3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVENhcmRzIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgJy4vY2FyZC5zYXNzJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZHMge1xyXG4gICAgcmVuZGVyKGRhdGE6IFRDYXJkcywgY2FydEl0ZW1zOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWxpc3QnKSBhcyBIVE1MVUxpc3RFbGVtZW50O1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAvL9GB0L7Qt9C00LDQtdC8INGN0LvQtdC80LXQvdGC0YssINC60L7RgtC+0YDRi9C1INGB0L7QtNC10YDQttCw0YLRjNGB0Y8g0LLQvdGD0YLRgNC4INGB0L/QuNGB0LrQsCDQutCw0YDRgtC+0YfQtdC6XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSBhcyBIVE1MTElFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWtlSW1hZ2VCb3ggPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc2NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGl0ZW0uaW1hZ2Uuc3JjO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuYWx0ID0gaXRlbS50eXBlO1xyXG5cclxuICAgICAgICAgICAgICAgIGJveC5jbGFzc05hbWUgPSAnY2FyZC1pbWFnZSc7XHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudC5jbGFzc05hbWUgPSAnZGlzY291bnQnO1xyXG4gICAgICAgICAgICAgICAgc3Rhci5jbGFzc05hbWUgPSAnc3RhciBuby1maWxsJztcclxuXHJcbiAgICAgICAgICAgICAgICAvL9C10YHQu9C4INC10YHRgtGMINGB0LrQuNC00LrQsCwg0LTQvtCx0LDQstC70Y/QtdC8INCx0LvQvtC6INGB0L4g0YHQutC40LTQutC+0LlcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpc2NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzY291bnQuaW5uZXJUZXh0ID0gYNCh0LrQuNC00LrQsCAke2l0ZW0uZGlzY291bnRfdmFsdWV9JWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmFwcGVuZChkaXNjb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBib3guYXBwZW5kKHN0YXIsIGltYWdlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBib3g7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWtlQ2FyZEJvZHkgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpIGFzIEhUTUxIZWFkaW5nRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpIGFzIEhUTUxIZWFkaW5nRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Mb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXJkQm9keS5jbGFzc05hbWUgPSAnY2FyZC1ib2R5JztcclxuICAgICAgICAgICAgICAgIHByaWNlLmNsYXNzTmFtZSA9ICdwcmljZSc7XHJcbiAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTmFtZSA9ICduYW1lJztcclxuICAgICAgICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAnaXRlbS1kZXNjcmlwdGlvbic7XHJcbiAgICAgICAgICAgICAgICBpdGVtTG9jYXRpb24uY2xhc3NOYW1lID0gJ2l0ZW0tbG9jYXRpb24nO1xyXG5cclxuICAgICAgICAgICAgICAgIHByaWNlLmlubmVyVGV4dCA9IGAkJHtpdGVtLnByaWNlfWA7XHJcbiAgICAgICAgICAgICAgICBuYW1lLmlubmVyVGV4dCA9IGAke2l0ZW0uYnJhbmR9YDtcclxuICAgICAgICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS10eXBlPSR7aXRlbS50eXBlfT4ke2l0ZW0udHlwZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1ib3g9JHtpdGVtLmJveH0+JHtpdGVtLmJveH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1jb2xvciA9ICR7aXRlbS5jb2xvcn0+JHtpdGVtLmNvbG9yfTwvcD5cclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICBpdGVtTG9jYXRpb24uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtY291bnRyeT0ke2l0ZW0uY291bnRyeX0+JHtpdGVtLmNvdW50cnl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtZGF0ZT0ke2l0ZW0uZGF0ZX0+JHtpdGVtLmRhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYWtlQnV0dG9uQ2FydCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b25DYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ2FydC5jbGFzc05hbWUgPSAnb24tY2FydCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ2FydC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ2FydC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBgJHtpdGVtLmlkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNhcnQuaW5uZXJUZXh0ID0gJ9CSINC60L7RgNC30LjQvdGDJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FydEl0ZW1zLnNvbWUoKGlkKSA9PiBpZCA9PT0gaXRlbS5pZC50b1N0cmluZygpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25DYXJ0LmlubmVyVGV4dCA9ICfQlNC+0LHQsNCy0LvQtdC90L4hJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ2FydC5jbGFzc0xpc3QuYWRkKCdhZGRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBidXR0b25DYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidG5DYXJ0ID0gZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJ0bkNhcnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhcmQgaGFzIGJlZW4gYWRkZWQgaW4gY2FydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbkNhcnQ7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnRuQ2FydCA9IG1ha2VCdXR0b25DYXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBjYXJkQm9keS5hcHBlbmQocHJpY2UsIG5hbWUsIGl0ZW1EZXNjcmlwdGlvbiwgaXRlbUxvY2F0aW9uLCBidG5DYXJ0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYXJkQm9keTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxpc3RpdGVtLmNsYXNzTmFtZSA9ICdjYXJkLWxpc3QtaXRlbSc7XHJcbiAgICAgICAgICAgIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQnO1xyXG4gICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScsIGAke2l0ZW0ucHJpY2V9YCk7XHJcbiAgICAgICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWJyYW5kJywgYCR7aXRlbS5icmFuZH1gKTtcclxuICAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIGAke2l0ZW0udHlwZX1gKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRJbWFnZSA9IG1ha2VJbWFnZUJveCgpO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkQm9keSA9IG1ha2VDYXJkQm9keSgpO1xyXG5cclxuICAgICAgICAgICAgY2FyZC5hcHBlbmQoY2FyZEltYWdlLCBjYXJkQm9keSk7XHJcbiAgICAgICAgICAgIGxpc3RpdGVtLmFwcGVuZChjYXJkKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW1zTGlzdCkgaXRlbXNMaXN0LmFwcGVuZChsaXN0aXRlbSk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yKCfQndC1INC+0LHQvdCw0YDRg9C20LXQvSDQutC+0L3RgtC10LnQvdC10YAg0LTQu9GPINGA0LXQvdC00LXRgNCwINC60YDQsNGC0L7Rh9C10LonKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgJy4vY2FydC5zYXNzJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCB7XHJcbiAgICBwcml2YXRlIGNvdW50ID0gMDtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUNvdW50KGE6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSBhO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBjYXJ0X2NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgY2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0JykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGNhcnRfY291bnQuY2xhc3NOYW1lID0gJ2NhcnQtY291bnQnO1xyXG5cclxuICAgICAgICBjYXJ0X2NvdW50LmlubmVyVGV4dCA9IGAke3RoaXMuY291bnR9YDtcclxuXHJcbiAgICAgICAgY2FydC5hcHBlbmQoY2FydF9jb3VudCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSWZpbHRlckFyZWFPcHRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCAnLi9maWx0ZXIuc2Fzcyc7XHJcbmltcG9ydCAnbm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuY3NzJztcclxuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSAnLi9maWx0ZXItcmFuZ2UvZmlsdGVyLXJhbmdlLXNsaWRlcic7XHJcbmltcG9ydCB7IFRPcHRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJBcmVhIHtcclxuICAgIHJlYWRvbmx5IGZpbHRlckFyZWFPcHRpb25zOiBJZmlsdGVyQXJlYU9wdGlvbnM7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmZpbHRlckFyZWFPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBkaXNjb3VudDoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbJ3RydWUnXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfQodC60LjQtNC60LAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb3VudHJ5OiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFsn0JjQvdC00LjRjycsICfQmtC40YLQsNC5JywgJ9CQ0L3Qs9C70LjRjycsICfQmNC90LTQvtC90LXQt9C40Y8nXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfQodGC0YDQsNC90YsnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbJ9GH0LXRgNC90YvQuScsICfQsdC10LvRi9C5JywgJ9C60YDQsNGB0L3Ri9C5JywgJ9C30LXQu9C10L3Ri9C5J10sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn0KbQstC10YInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBicmFuZDoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbJ0xpcHRvbicsICdSaWNoYXJkJywgJ0dyZWVuZmllbGQnLCAnQWhtYWQgdGVhJywgJ0ltcHJhJywgJ0N1cnRpcyddLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ9CR0YDRjdC90LQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib3g6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlczogWyfQu9C40YHRgtC+0LLQvtC5JywgJ9C/0LDQutC10YLQuNGA0L7QstCw0L3QvdGL0LknXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfQo9C/0LDQutC+0LLQutCwJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBtYWtlRmlsdGVyQm94KGtleTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmdbXSwgY2hlY2tlZFZhbHVlczogc3RyaW5nW10pIHtcclxuICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBmaWx0ZXJCb3hMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCBmaWx0ZXJCb3hOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGJveC5jbGFzc05hbWUgPSAnZmlsdGVyLWJveCc7XHJcbiAgICAgICAgZmlsdGVyQm94TmFtZS5jbGFzc05hbWUgPSAnZmlsdGVyLWJveC1uYW1lJztcclxuICAgICAgICBmaWx0ZXJCb3hMaXN0LmNsYXNzTmFtZSA9ICdmaWx0ZXItYm94LWxpc3QnO1xyXG4gICAgICAgIGZpbHRlckJveE5hbWUuaW5uZXJUZXh0ID0gbmFtZTtcclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc05hbWUgPSBgZmlsdGVyLWJveC1pdGVtIGZpbHRlci1ib3gtJHtrZXl9LWl0ZW1gO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5pbm5lclRleHQgPSBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT0gJ3RydWUnIHx8IGVsZW1lbnQgPT0gJ2ZhbHNlJykgaXRlbS5pbm5lclRleHQgPSAn0KLQvtC70YzQutC+INGB0L4g0YHQutC40LTQutC+0LknO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICAgICAgICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkVmFsdWVzICYmIGNoZWNrZWRWYWx1ZXMuc29tZSgoY2hlY2tib3gpID0+IGNoZWNrYm94LnRvTG93ZXJDYXNlKCkgPT09IGVsZW1lbnQudG9Mb3dlckNhc2UoKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0ucHJlcGVuZChjaGVja2JveCk7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJCb3hMaXN0LmFwcGVuZChpdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYNCSINC60LvRjtGH0LUgJHtrZXl9INC90LXRgiB2YWx1ZXNgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm94LmFwcGVuZChmaWx0ZXJCb3hOYW1lLCBmaWx0ZXJCb3hMaXN0KTtcclxuICAgICAgICByZXR1cm4gYm94O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbmRlcihvcHRpb25zOiBUT3B0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItc2V0dGluZ3MnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgY29uc3Qgc2xpZGVyRGF0ZSA9IG5ldyBTbGlkZXIob3B0aW9ucy5maWx0ZXJTbGlkZXJzLnNsaWRlckRhdGUsICdkYXRlJywgJ9Cf0L4g0LTQsNGC0LUnKS5jcmVhdGVTbGlkZXIoKTtcclxuICAgICAgICBjb25zdCBzbGlkZXJQcmljZSA9IG5ldyBTbGlkZXIob3B0aW9ucy5maWx0ZXJTbGlkZXJzLnNsaWRlclByaWNlLCAncHJpY2UnLCAn0J/QviDRhtC10L3QtScpLmNyZWF0ZVNsaWRlcigpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoc2xpZGVyRGF0ZSwgc2xpZGVyUHJpY2UpO1xyXG4gICAgICAgIGlmICh0aGlzLmZpbHRlckFyZWFPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZmlsdGVyQXJlYU9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleUJveCA9IHRoaXMubWFrZUZpbHRlckJveChcclxuICAgICAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJBcmVhT3B0aW9uc1trZXkgYXMga2V5b2YgSWZpbHRlckFyZWFPcHRpb25zXVsnbmFtZSddLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQXJlYU9wdGlvbnNba2V5IGFzIGtleW9mIElmaWx0ZXJBcmVhT3B0aW9uc11bJ3ZhbHVlcyddLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZmlsdGVyU2V0dGluZ1trZXldXHJcbiAgICAgICAgICAgICAgICApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChrZXlCb3gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBub1VpU2xpZGVyIGZyb20gJ25vdWlzbGlkZXInO1xyXG5pbXBvcnQgJy4vZmlsdGVyLXJhbmdlLWRhdGUuc2Fzcyc7XHJcbmltcG9ydCB7IFREU2xpZGVyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvdHlwZXMnO1xyXG5cclxuY2xhc3MgU2xpZGVyIHtcclxuICAgIHN0YXJ0OiBudW1iZXI7XHJcbiAgICBlbmQ6IG51bWJlcjtcclxuICAgIG1pbjogbnVtYmVyO1xyXG4gICAgbWF4OiBudW1iZXI7XHJcbiAgICBjbGFzc05hbWU6IHN0cmluZztcclxuICAgIGhlYWRUaXRsZTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IocHJvcDogbnVtYmVyW10sIGNsYXNzTmFtZTogc3RyaW5nLCBoZWFkVGl0bGU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBwcm9wWzBdO1xyXG4gICAgICAgIHRoaXMuZW5kID0gcHJvcFsxXTtcclxuICAgICAgICB0aGlzLm1pbiA9IHByb3BbMl07XHJcbiAgICAgICAgdGhpcy5tYXggPSBwcm9wWzNdO1xyXG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgICAgIHRoaXMuaGVhZFRpdGxlID0gaGVhZFRpdGxlO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlU2xpZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHNsaWRlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHNsaWRlckhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBkYXRlU2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlQmVmb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdmFsdWVBZnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBzbGlkZXJIZWFkLmlubmVyVGV4dCA9IGAke3RoaXMuaGVhZFRpdGxlfWA7XHJcbiAgICAgICAgc2xpZGVySGVhZC5jbGFzc05hbWUgPSAnc2xpZGVyLWhlYWQnO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZVZhbHVlc0JveCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVzQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHZhbHVlc0JveC5jbGFzc05hbWUgPSAndmFsdWVzLWJveCc7XHJcbiAgICAgICAgICAgIHZhbHVlQWZ0ZXIuY2xhc3NOYW1lID0gJ3ZhbHVlJztcclxuICAgICAgICAgICAgdmFsdWVCZWZvcmUuY2xhc3NOYW1lID0gJ3ZhbHVlJztcclxuICAgICAgICAgICAgdmFsdWVzQm94LmFwcGVuZCh2YWx1ZUJlZm9yZSwgdmFsdWVBZnRlcik7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXNCb3g7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB2YWx1ZXNCb3ggPSBjcmVhdGVWYWx1ZXNCb3goKTtcclxuXHJcbiAgICAgICAgZGF0ZVNsaWRlci5jbGFzc05hbWUgPSBgc2xpZGVyLXJhbmdlIHNsaWRlci0ke3RoaXMuY2xhc3NOYW1lfWA7XHJcbiAgICAgICAgbm9VaVNsaWRlci5jcmVhdGUoZGF0ZVNsaWRlciwge1xyXG4gICAgICAgICAgICBzdGFydDogW3RoaXMuc3RhcnQsIHRoaXMuZW5kXSxcclxuICAgICAgICAgICAgY29ubmVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgc3RlcDogMSxcclxuICAgICAgICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgICAgICAgIG1pbjogW3RoaXMubWluXSxcclxuICAgICAgICAgICAgICAgIG1heDogW3RoaXMubWF4XSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAoKGRhdGVTbGlkZXIgYXMgdW5rbm93bikgYXMgVERTbGlkZXIpLm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsICh2YWx1ZXM6IG51bWJlcltdKSA9PiB7XHJcbiAgICAgICAgICAgIHZhbHVlQmVmb3JlLmlubmVyVGV4dCA9IE1hdGgucm91bmQodmFsdWVzWzBdKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB2YWx1ZUFmdGVyLmlubmVyVGV4dCA9IE1hdGgucm91bmQodmFsdWVzWzFdKS50b1N0cmluZygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzbGlkZXJCb3guYXBwZW5kKHNsaWRlckhlYWQsIGRhdGVTbGlkZXIsIHZhbHVlc0JveCk7XHJcbiAgICAgICAgcmV0dXJuIHNsaWRlckJveDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgeyBTbGlkZXIgfTtcclxuIiwiaW1wb3J0IHsgVE9wdGlvbnMgfSBmcm9tICcuLi8uLi90eXBlcy90eXBlcyc7XHJcbmltcG9ydCAnLi9zZWFyY2gtYXJlYS5zYXNzJztcclxuLy9hc2RcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQXJlYSB7XHJcbiAgICBwcml2YXRlIGV2ZW50cyhpbnB1dDogSFRNTElucHV0RWxlbWVudCwgY2xvc2VCdG46IEhUTUxCdXR0b25FbGVtZW50KSB7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoLyplIHRvZG8gcmVuYW1lKi8pID0+IHtcclxuICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCAmJiAhY2xvc2VCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdjbG9zZScpKSBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICghaW5wdXQudmFsdWUubGVuZ3RoKSBjbG9zZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZScpO1xyXG4gICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihvcHRpb25zOiBUT3B0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWFyZWEnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBzZWFyY2hBcmVhLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAn0J3QsNC50LTQuNGC0LUg0YHQstC+0Lkg0LvRjtCx0LjQvNGL0Lkg0YfQsNC5Jyk7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2F1dG9mb2N1cycsICd0cnVlJyk7XHJcblxyXG4gICAgICAgIGlucHV0LmNsYXNzTmFtZSA9ICdzZWFyY2gtaW5wdXQnO1xyXG4gICAgICAgIGNsb3NlQnRuLmNsYXNzTmFtZSA9ICdzZWFyY2gtaWNvbic7XHJcblxyXG4gICAgICAgIGlucHV0LnZhbHVlID0gb3B0aW9ucy5zZWFyY2g7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuc2VhcmNoKSBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cyhpbnB1dCwgY2xvc2VCdG4pO1xyXG5cclxuICAgICAgICBzZWFyY2hBcmVhLmFwcGVuZChjbG9zZUJ0biwgaW5wdXQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRPcHRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgJy4vc29ydC1hcmVhLnNhc3MnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3J0QXJlYSB7XHJcbiAgICByZW5kZXIob3B0aW9uczogVE9wdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBtYWtlQnV0dG9uID0gKHNldHRpbmc6IHN0cmluZyk6IEhUTUxCdXR0b25FbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc29ydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgICAgICBzb3J0QnV0dG9uLmNsYXNzTmFtZSA9ICdzb3J0LWJ1dHRvbic7XHJcbiAgICAgICAgICAgIHNvcnRCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9wdGlvbnMuc29ydFNldHRpbmdzLmRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGlmIChzZXR0aW5nID09PSAnbGluZScpIHNvcnRCdXR0b24uaW5uZXJUZXh0ID0gJ9C/0L4g0LLQvtC30YDQsNGB0YLQsNC90LjRjic7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNldHRpbmcgPT09ICdyZXZlcnNlJykgc29ydEJ1dHRvbi5pbm5lclRleHQgPSAn0L/QviDRg9Cx0YvQstCw0L3QuNGOJztcclxuICAgICAgICAgICAgc29ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidG4gPSBlLnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGlmIChidG4pXHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLmlubmVyVGV4dCA9PT0gJ9C/0L4g0YPQsdGL0LLQsNC90LjRjidcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAoYnRuLmlubmVyVGV4dCA9ICfQv9C+INCy0L7Qt9GA0LDRgdGC0LDQvdC40Y4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IChidG4uaW5uZXJUZXh0ID0gJ9C/0L4g0YPQsdGL0LLQsNC90LjRjicpO1xyXG4gICAgICAgICAgICAgICAgYnRuLmdldEF0dHJpYnV0ZSgndmFsdWUnKSA9PT0gJ2xpbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgPyBidG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdyZXZlcnNlJylcclxuICAgICAgICAgICAgICAgICAgICA6IGJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xpbmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzb3J0QnV0dG9uO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWFrZVNlbGVjdCA9IChzZXR0aW5nOiBzdHJpbmcpOiBIVE1MU2VsZWN0RWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBhcnIgPSBbJ9Cf0L4g0LTQsNGC0LUg0YHQsdC+0YDQutC4INGD0YDQvtC20LDRjycsICfQn9C+INGG0LXQvdC1JyAvKiwgJ9Cf0L4g0YHRgtGA0LDQvdC1JyovXTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gWydkYXRlJywgJ3ByaWNlJ107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJykgYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVzW2ldID09PSBzZXR0aW5nKSBvcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWVzW2ldKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBhcnJbaV07XHJcbiAgICAgICAgICAgICAgICBzZWxlY3QuYXBwZW5kKG9wdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTmFtZSA9ICdzb3J0LXNlbGVjdCc7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3Q7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc29ydEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29ydC1hcmVhJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbWFrZUJ1dHRvbihvcHRpb25zLnNvcnRTZXR0aW5ncy5kaXJlY3Rpb24pO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IG1ha2VTZWxlY3Qob3B0aW9ucy5zb3J0U2V0dGluZ3MudHlwZSk7XHJcbiAgICAgICAgc29ydEFyZWEuYXBwZW5kKHNlbGVjdCwgYnV0dG9uKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBpbXBvcnQgeyBUT3B0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYlN0b3JhZ2Uge1xyXG4gICAgLy8gb3B0aW9uczogVE9wdGlvbnMgfCB1bmRlZmluZWQ7XHJcbiAgICAvLyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vICAgICBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcHRpb25zJykgPT09ICdzdHJpbmcnKVxyXG4gICAgLy8gICAgICAgICB0aGlzLm9wdGlvbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcHRpb25zJykpO1xyXG4gICAgLy8gfVxyXG4gICAgZ2V0SXRlbShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IG9iamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgYXMgc3RyaW5nO1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKG9iamVjdCk7XHJcbiAgICB9XHJcbiAgICBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogdW5rbm93bikge1xyXG4gICAgICAgIGNvbnN0IG9iamVjdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIG9iamVjdCk7XHJcbiAgICB9XHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgJy4vZ2xvYmFsLnNhc3MnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwJztcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vY29tcG9uZW50cy9jb25zdGFudHMvZGF0YSc7XHJcblxyXG5jb25zdCBBUFAgPSBuZXcgQXBwKGRhdGEpO1xyXG5BUFAuc3RhcnQoKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
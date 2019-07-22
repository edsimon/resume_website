webpackHotUpdate("main",{

/***/ "./src/components/projectsComponent/Project.js":
/*!*****************************************************!*\
  !*** ./src/components/projectsComponent/Project.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring_renderprops_universal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring/renderprops-universal */ "./node_modules/react-spring/renderprops-universal.js");
/* harmony import */ var react_spring_renderprops_universal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring_renderprops_universal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_awesome_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-awesome-button */ "./node_modules/react-awesome-button/dist/index.js");
/* harmony import */ var react_awesome_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_awesome_button_dist_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-awesome-button/dist/styles.css */ "./node_modules/react-awesome-button/dist/styles.css");
/* harmony import */ var react_awesome_button_dist_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_awesome_button_dist_styles_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/se/Documents/resume/dynamic_website/resume_website/src/components/projectsComponent/Project.js";





class Project extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.setHover = () => {
      this.setState({
        opacity: .1,
        marginTop: "-" + this.props.height,
        pOp: 1,
        delay: 500,
        stroke: 0
      });
    };

    this.cancelHover = () => {
      this.setState({
        opacity: 1,
        marginTop: "0px",
        pOp: 0,
        delay: 0,
        stroke: 100
      });
    };

    this.state = {
      opacity: 1,
      marginTop: "0px",
      pOp: 0,
      delay: 0,
      stroke: 100
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring_renderprops_universal__WEBPACK_IMPORTED_MODULE_1__["Spring"], {
      to: {
        opacity: this.state.opacity,
        marginTop: this.state.marginTop
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "projectContainer",
      onMouseOver: this.setHover,
      onMouseLeave: this.cancelHover,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "imageContainer",
      style: {
        height: this.props.height
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "projectImage",
      alt: "random",
      src: this.props.image,
      style: {
        opacity: props.opacity
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "projectHeaderContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      style: {
        marginTop: props.marginTop
      },
      className: "projectHeader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, this.props.header)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring_renderprops_universal__WEBPACK_IMPORTED_MODULE_1__["Spring"], {
      to: {
        pOp: this.state.pOp
      },
      delay: this.state.delay,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      width: "100%",
      height: "100%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        opacity: props.pOp
      },
      className: "projectInformation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, this.props.modalInfo), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        opacity: props.pOp
      },
      className: "projectButtons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_awesome_button__WEBPACK_IMPORTED_MODULE_2__["AwesomeButtonSocial"], {
      className: "githubButton",
      size: "primary",
      type: "github",
      url: "https://github.com/edsimon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring_renderprops_universal__WEBPACK_IMPORTED_MODULE_1__["Spring"], {
      to: {
        x: this.state.stroke
      },
      delay: this.state.delay,
      config: {
        duration: this.state.delay
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      className: "projectLine",
      viewBox: "0 0 100 1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
      x1: "0",
      y1: "0",
      x2: "100",
      y2: "00",
      stroke: "#9a0200",
      strokeWidth: "2px",
      strokeDasharray: 100,
      strokeDashoffset: props.x,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Project);
/*
<button className="projectButton github">Github</button>
 */

/***/ })

})
//# sourceMappingURL=main.61e534f9ae1e733c3b37.hot-update.js.map
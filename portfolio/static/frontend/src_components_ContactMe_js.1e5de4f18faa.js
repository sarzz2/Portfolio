/*! For license information please see src_components_ContactMe_js.js.LICENSE.txt */
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["src_components_ContactMe_js"],{"./src/components/ContactMe.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ ContactMe)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _assets_css_contactme_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/contactme.css */ "./src/components/assets/css/contactme.css");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n(axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.xsrfHeaderName) = "X-CSRFTOKEN";\n(axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.xsrfCookieName) = "csrftoken";\nclass ContactMe extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      Name: "",\n      Email: "",\n      Subject: "",\n      Message: ""\n    };\n    this.handleChange = this.handleChange.bind(this);\n    this.handleSubmit = this.handleSubmit.bind(this);\n    this.goBack = this.goBack.bind(this);\n  }\n\n  handleChange(event) {\n    this.setState({\n      [event.target.name]: event.target.value\n    });\n  }\n\n  async handleSubmit() {\n    try {\n      const resp = await axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/contact", {\n        name: this.state.Name,\n        email: this.state.Email,\n        subject: this.state.Subject,\n        message: this.state.Message\n      });\n    } catch (err) {\n      console.error(err);\n      alert(err + "Failed Try Again!");\n    } finally {\n      window.location = "/contactme";\n    }\n  }\n\n  goBack() {\n    this.props.history.goBack();\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      class: "contactme-container"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      class: "contactme-title"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n      class: "close",\n      onClick: this.goBack\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {\n      class: "fas fa-times"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {\n      class: "contactme-heading"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {\n      class: "contactme-pre-heading"\n    }, "Get in touch with me"), "Contact Me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      class: "contactme-grid-wrapper"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      class: "form"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {\n      class: "message-me"\n    }, "Message Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {\n      onSubmit: this.handleSubmit\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n      type: "text",\n      placeholder: "Name",\n      class: "textfield-name",\n      name: "Name",\n      required: true,\n      onChange: this.handleChange\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n      type: "email",\n      placeholder: "Email",\n      required: true,\n      class: "textfield-email",\n      name: "Email",\n      onChange: this.handleChange\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n      type: "text",\n      placeholder: "Subject",\n      required: true,\n      class: "textfield-subject",\n      name: "Subject",\n      onChange: this.handleChange,\n      required: true\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {\n      placeholder: "Message",\n      rows: "8",\n      required: true,\n      name: "Message",\n      onChange: this.handleChange\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n      type: "submit",\n      value: "Send Message",\n      class: "textfield-send"\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      class: "contactme-info"\n    })));\n  }\n\n}\n\n//# sourceURL=webpack://frontend/./src/components/ContactMe.js?')},"./node_modules/css-loader/dist/cjs.js!./src/components/assets/css/contactme.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ".contactme-container {\\n  width: 100%;\\n  height: 100%;\\n  color: white;\\n  background-color: rgb(17, 17, 17);\\n  overflow-x: hidden;\\n}\\n\\n.close {\\n  right: 4%;\\n  font-size: 5vh;\\n  top: 4%;\\n  position: fixed;\\n  color: white;\\n  background-color: rgb(17, 17, 17);\\n  border: none;\\n  cursor: pointer;\\n}\\n.contactme-pre-heading {\\n  position: relative;\\n  font-size: 2vh;\\n  text-align: center;\\n  font-family: \\"Poppins\\";\\n  color: rgb(206, 206, 206);\\n}\\n\\n.contactme-heading {\\n  position: relative;\\n  font-size: 5vh;\\n  text-align: center;\\n  font-family: \\"Montserrat\\", sans-serif;\\n  font-weight: bolder;\\n  margin-top: 5%;\\n}\\n\\n.message-me {\\n  font-size: 3vh;\\n  font-family: \\"Poppins\\";\\n  color: white;\\n}\\n.contactme-grid-wrapper {\\n  margin: auto;\\n  width: 90%;\\n}\\n.form {\\n  width: 100%;\\n  margin-left: 15%;\\n  float: left;\\n}\\n\\ninput {\\n  height: 3vh;\\n  background-color: #161616;\\n  border: none;\\n  border-bottom: 1px solid #1d1d1d;\\n  border-radius: 0;\\n  font-size: 1.8vh;\\n  padding: 9px 14px;\\n  margin-right: 5%;\\n  margin-top: 3%;\\n  color: rgb(206, 206, 206);\\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\\n}\\n\\ntextarea {\\n  width: 68%;\\n  background-color: #161616;\\n  color: rgb(206, 206, 206);\\n  border: none;\\n  border-bottom: 1px solid #1d1d1d;\\n  border-radius: 0;\\n  font-size: 1.8vh;\\n  padding: 9px 14px;\\n  margin-right: 5%;\\n  margin-top: 3%;\\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\\n}\\ninput:focus,\\ntextarea:focus,\\nselect:focus {\\n  outline: none;\\n  border-bottom: 1.5px solid rgb(57, 155, 107);\\n}\\n.textfield-name,\\n.textfield-email {\\n  width: 30%;\\n}\\n\\n.textfield-subject {\\n  width: 68%;\\n}\\n\\n.textfield-send {\\n  height: 15%;\\n  width: 20%;\\n  border-radius: 50px;\\n  font-size: 1.6vw;\\n  background-color: rgb(57, 155, 107);\\n  color: white;\\n  cursor: pointer;\\n}\\n\\n.textfield-send:hover {\\n  background-color: rgb(10, 194, 105);\\n}\\n\\n.contactme-hr {\\n  margin: 0 10px;\\n}\\n\\n.list-class {\\n  display: flex;\\n}\\n.contactme-detail {\\n  display: flex;\\n}\\n\\n.contactme-info-name {\\n  margin: 0;\\n  margin-bottom: 5%;\\n  font-family: \\"Poppins\\";\\n  font-size: 2vh;\\n}\\n\\n.contactme-info-span {\\n  font-family: \\"Poppins\\";\\n  color: rgb(206, 206, 206);\\n}\\n\\n@media screen and (max-width: 898px) {\\n  .contactme-heading {\\n    margin-top: 15%;\\n  }\\n  .textfield-name,\\n  .textfield-email,\\n  .textfield-subject,\\n  textarea {\\n    width: 90%;\\n  }\\n  .textfield-send {\\n    height: 30%;\\n    width: 45%;\\n    font-size: large;\\n    border-radius: 50px;\\n    background-color: rgb(57, 155, 107);\\n    color: white;\\n    cursor: pointer;\\n  }\\n  .form {\\n    margin-left: 0;\\n  }\\n}\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://frontend/./src/components/assets/css/contactme.css?./node_modules/css-loader/dist/cjs.js')},"./src/components/assets/css/contactme.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contactme_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./contactme.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/assets/css/contactme.css");\n\n            \n\nvar options = {};\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_contactme_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_contactme_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://frontend/./src/components/assets/css/contactme.css?')}}]);
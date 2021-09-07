(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_nav_company__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/nav_company */ "./resources/vuedir/assets/jsfunc/nav_company.js");
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var useraccount = _assets_jsfunc_nav_company__WEBPACK_IMPORTED_MODULE_0__["default"].data.jsonparse(window.Laravel.useraccount);
var status = _assets_jsfunc_nav_company__WEBPACK_IMPORTED_MODULE_0__["default"].data.jsonparse(window.Laravel.status);
var userid = atob(useraccount.uid);
var userpwd = atob(useraccount.password);
var pwd_min = 0;
var pwd_max = 0;
var pwd_letter = 0;
var pwd_upper_lower = 0;
var pwd_digital = 0;
var pwd_special = 0;
var pwd_color = '#ffffff';
var pwd_warning = '';
var pwd_warinig_color = '#ffffff';
var pwd_state = false;
var vueOBJ = null;

function setUserAccountPage() {
  $('#csa_id').text(userid);
  $('#csa_username').val(atob(useraccount.uname));
  $('#csa_email').val(atob(useraccount.uemail));
  $('#csa_mobile').val(atob(useraccount.umobile));
  $('#csa_password').val(userpwd);
  $('#csa_confirmpassword').val(userpwd);
  var password = '';
  $("#modal_user_pwd").on("keyup", function (e) {
    var is_letter = false;
    var is_upper = false;
    var is_number = false;
    var is_special = false;
    pwd_state = false;
    password = $("#modal_user_pwd").val();
    var len = password.length;

    if (pwd_letter == 0 && pwd_upper_lower == 0 && pwd_digital == 0 && pwd_special == 0) {
      showPasswordEnterState(0);
      return;
    }

    if (len >= pwd_min && len <= pwd_max) {
      var pwd_arr = Array.from(password);

      for (var i = 0; i < password.length; i++) {
        var code = pwd_arr[i];

        if (pwd_letter == 1) {
          if (code.match(/^[A-Z]$/) != null || code.match(/^[a-z]$/) != null) is_letter = true;
        } else is_letter = true;

        if (pwd_upper_lower == 1) {
          if (code.match(/^[A-Z]$/) != null) is_upper = true;
        } else is_upper = true;

        if (pwd_digital == 1) {
          if (code.match(/^\d{1,}$/) != null) is_number = true;
        } else is_number = true;

        if (pwd_special == 1) {
          var check_spc = /[~!@#$%^&*()_+|<>?:{}]/;
          is_special = check_spc.test(password);
        } else is_special = true;
      }

      if (is_letter && is_upper && is_number && is_special) {
        showPasswordEnterState(1);
        pwd_state = true;
      } else {
        showPasswordEnterState(0);
        pwd_state = false;
      }
    } else {
      showPasswordEnterState(0);
      pwd_state = false;
    }
  });
  $("#modal_user_confpwd").on("keyup", function (e) {
    $('#error_password').css('display', 'none');
  });
  $("#modal_user_name").on("keyup", function (e) {
    $('#error_user_name').css('display', 'none');
  });
  if (status == 0) $('#ModalChangeAccount').modal('show');
}

function showPasswordEnterState(val) {
  if (val == 1) {
    $('#passwordworings1').css('background', pwd_color);
    $('#pwd_warning_txt').css('display', 'none');
    $('#pwd_check').css('display', 'block');
  } else {
    $('#passwordworings1').css('background', '#a9a7a7');
    $('#pwd_warning_txt').css('display', 'block');
    $('#pwd_check').css('display', 'none');
  }
}

function getSystemSettingPassword() {
  $.ajax({
    method: "POST",
    url: "/company.getSystemSettingPassword",
    statusCode: {
      404: function _() {
        alramMSG("page not found");
        return false;
      }
    },
    success: function success(response) {
      var msg = response.msg;

      if (msg === "ok") {
        var setpwd = response.setpwd;
        pwd_min = setpwd.format1_val;
        pwd_max = setpwd.format2_val;
        pwd_letter = setpwd.style_letter;
        pwd_upper_lower = setpwd.style_upper_lower;
        pwd_digital = setpwd.style_digital;
        pwd_special = setpwd.style_special;
        pwd_color = setpwd.colour_val;
        pwd_warning = setpwd.warning_text;
        pwd_warinig_color = setpwd.warning_colour_val;
        $('#pwd_warning_txt').text('*' + pwd_warning);
        $('#pwd_warning_txt').css('color', pwd_warinig_color);
        $('#pwd_warning_txt').css('display', 'none');
        $('#pwd_check').css('display', 'none');
      } else {
        console.log(response.data.message);
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CompanySettingAccount",
  data: function data() {
    return {
      pageid: 'company-setting-account-fav',
      mu_setting: '',
      musu_company_setting_account: '',
      btntxt_change: '',
      btntxt_save: '',
      pgtxt_username: '',
      pgtxt_email: '',
      pgtxt_mobile: '',
      pgtxt_password: '',
      pgtxt_confirm: '',
      pgtxt_changeusername: '',
      pgtxt_inconsistentpwd: '',
      pgtxt_enteremail: '',
      pgtxt_entername: '',
      pgtxt_entermobile: '',
      pgtxt_enterpassword: ''
    };
  },
  computed: {
    // 계산된 getter
    title: function title() {
      return this.$store.state.curMenu;
    },
    cmu_setting: function cmu_setting() {
      return this.mu_setting;
    },
    cmusu_company_setting_account: function cmusu_company_setting_account() {
      return this.musu_company_setting_account;
    },
    cpgtxt_username: function cpgtxt_username() {
      return this.pgtxt_username;
    },
    cpgtxt_email: function cpgtxt_email() {
      return this.pgtxt_email;
    },
    cpgtxt_mobile: function cpgtxt_mobile() {
      return this.pgtxt_mobile;
    },
    cpgtxt_password: function cpgtxt_password() {
      return this.pgtxt_password;
    },
    cpgtxt_confirm: function cpgtxt_confirm() {
      return this.pgtxt_confirm;
    },
    cbtntxt_save: function cbtntxt_save() {
      return this.btntxt_save;
    },
    cbtntxt_change: function cbtntxt_change() {
      return this.btntxt_change;
    },
    cpgtxt_changeusername: function cpgtxt_changeusername() {
      return this.pgtxt_changeusername;
    },
    cpgtxt_inconsistentpwd: function cpgtxt_inconsistentpwd() {
      return this.pgtxt_inconsistentpwd;
    },
    contentchange: function contentchange() {
      //cckd
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
        //console.log(obj.hasOwnProperty(key));
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
      return this.$store.state.contentchange;
    }
  },
  watch: {},
  mounted: function mounted() {
    /* fav part*/
    vueOBJ = this;
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    this.initpage();
  },
  methods: {
    /* fav part */
    getSiteFaveritelist: function getSiteFaveritelist(list) {
      if (list != null && list != '') {
        var imgsrc = '/images/icons/star_f.png';
        $('#' + this.pageid + ' img').attr("src", imgsrc);
        $('#' + this.pageid).attr("data-status", "on");
      }
    },
    initpage: function initpage() {
      getSystemSettingPassword();
      setUserAccountPage();
    },
    SaveSettingAccount: function SaveSettingAccount() {
      var pgtxt_dbsaved = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
      var username = $('#csa_username').val();
      var email = $('#csa_email').val();
      var mobile = $('#csa_mobile').val();
      var password = $('#csa_password').val();
      var confpwd = $('#csa_confirmpassword').val();

      if (username == null || username == '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_entername');
        return;
      }

      if (email == null || email == '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_enteremail');
        return;
      }

      if (mobile == null || mobile == '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_entermobile');
        return;
      }

      if (password == null || password == '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_enterpassword');
        return;
      }

      if (password != confpwd) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_inconsistentpwd');
        return;
      }

      $.ajax({
        url: '/company.saveUserAccountInfo',
        type: 'POST',
        data: {
          userid: userid,
          username: username,
          email: email,
          mobile: mobile,
          password: password
        },
        async: false,
        success: function success(data) {
          if (data.msg == "ok") {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert(pgtxt_dbsaved);
          } else if (data.msg == "dup") {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_changeusername');
          }
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    },
    ChanageCompanyAccountModalBtn: function ChanageCompanyAccountModalBtn() {
      var username = $('#modal_user_name').val();
      var password = $('#modal_user_pwd').val();
      var confpwd = $('#modal_user_confpwd').val();
      if (!pwd_state) return;

      if (password != confpwd) {
        $('#error_password').css('display', 'block');
        return;
      }

      $.ajax({
        url: '/company.setCompanyUserPassword',
        type: 'POST',
        data: {
          userid: userid,
          username: username,
          password: password
        },
        async: false,
        success: function success(data) {
          if (data.msg == "ok") {
            $('#csa_username').val(username);
            $('#csa_password').val(password);
            $('#csa_confirmpassword').val(password);
            $('#ModalChangeAccount').modal('hide');
          } else if (data.msg == "dup") {
            $('#error_user_name').css('display', 'block');
          }
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table.table-lg td {\n    padding: 0.7rem 0.75rem;\n}\n.page_slider_content_list{\n    display: none;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.csa_change_txt{\n    width: 10rem;\n    text-align: right;\n    line-height: 35px;\n    color: blue;\n    cursor: pointer;\n    text-decoration: underline;\n}\n.error_text{\n    position: absolute;\n    width: 93%;\n    text-align: right;\n    color: red;\n    display: none;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySettingAccount.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=template&id=1179f959&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=template&id=1179f959& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c("div", { staticStyle: { display: "none" } }, [
      _vm._v(_vm._s(_vm.contentchange))
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "page-header" }, [
      _c("div", { staticClass: "page-title" }, [
        _c("h3", [_vm._v(_vm._s(_vm.cmusu_company_setting_account))]),
        _vm._v(" "),
        _c("span", { staticStyle: { color: "#656262" } }, [
          _vm._v("   |   \n               "),
          _c(
            "svg",
            {
              staticClass: "feather feather-home",
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }
            },
            [
              _c("path", {
                attrs: { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }
              }),
              _vm._v(" "),
              _c("polyline", { attrs: { points: "9 22 9 12 15 12 15 22" } })
            ]
          ),
          _vm._v(
            "\n                      " +
              _vm._s(_vm.cmu_setting) +
              "   >>  " +
              _vm._s(_vm.cmusu_company_setting_account) +
              "\n                  "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row", staticStyle: { height: "100%" } }, [
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list active",
          attrs: { id: "dash" }
        },
        [
          _c("div", { staticClass: "card", staticStyle: { height: "85%" } }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "col-md-10" }, [
                _c("div", { staticStyle: { "margin-bottom": "20px" } }, [
                  _c(
                    "div",
                    {
                      staticClass: "col-md-4",
                      staticStyle: { "margin-top": "8px" }
                    },
                    [_vm._v(_vm._s(_vm.cpgtxt_username))]
                  ),
                  _vm._v(" "),
                  _vm._m(2)
                ]),
                _vm._v(" "),
                _c("div", { staticStyle: { "margin-bottom": "20px" } }, [
                  _c(
                    "div",
                    {
                      staticClass: "col-md-4",
                      staticStyle: { "margin-top": "8px" }
                    },
                    [_vm._v(_vm._s(_vm.cpgtxt_email))]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-md-8",
                      staticStyle: { "margin-top": "8px", display: "flex" }
                    },
                    [
                      _c("input", {
                        staticClass: "form-control border-input-text",
                        attrs: {
                          type: "text",
                          id: "csa_email",
                          name: "csa_email"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "csa_change_txt" }, [
                        _vm._v(
                          _vm._s(_vm.cbtntxt_change) +
                            " " +
                            _vm._s(_vm.cpgtxt_email)
                        )
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticStyle: { "margin-bottom": "20px" } }, [
                  _c(
                    "div",
                    {
                      staticClass: "col-md-4",
                      staticStyle: { "margin-top": "8px" }
                    },
                    [_vm._v(_vm._s(_vm.cpgtxt_mobile))]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-md-8",
                      staticStyle: { "margin-top": "8px", display: "flex" }
                    },
                    [
                      _c("input", {
                        staticClass: "form-control border-input-text",
                        attrs: {
                          type: "text",
                          id: "csa_mobile",
                          name: "csa_mobile"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "csa_change_txt" }, [
                        _vm._v(
                          _vm._s(_vm.cbtntxt_change) +
                            " " +
                            _vm._s(_vm.cpgtxt_mobile)
                        )
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticStyle: { "margin-bottom": "20px" } }, [
                  _c(
                    "div",
                    {
                      staticClass: "col-md-4",
                      staticStyle: { "margin-top": "8px" }
                    },
                    [_vm._v(_vm._s(_vm.cpgtxt_password))]
                  ),
                  _vm._v(" "),
                  _vm._m(3)
                ]),
                _vm._v(" "),
                _c("div", { staticStyle: { "margin-bottom": "20px" } }, [
                  _c(
                    "div",
                    {
                      staticClass: "col-md-4",
                      staticStyle: { "margin-top": "8px" }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.cpgtxt_confirm) +
                          " " +
                          _vm._s(_vm.cpgtxt_password)
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(4)
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticStyle: {
                      "text-align": "right",
                      "margin-bottom": "20px"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "col-md-8",
                        staticStyle: { "margin-top": "30px" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "btn btn-outline-light  dash-my-btn-0 active p-l-r-30",
                            attrs: { id: "add_domainBtn" },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.SaveSettingAccount()
                              }
                            }
                          },
                          [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_save))])]
                        )
                      ]
                    )
                  ]
                )
              ])
            ])
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "ModalChangeAccount",
          "data-keyboard": "false",
          "data-backdrop": "static"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered modal-sm",
            staticStyle: { "min-width": "500px!important" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c(
                "div",
                {
                  staticClass: "modal-body",
                  staticStyle: { padding: "0 1.5rem 1.5rem 1.5rem" },
                  attrs: { id: "ChangeAccountModalBody" }
                },
                [
                  _c("div", { staticClass: "panel", attrs: { id: "tab4" } }, [
                    _c(
                      "div",
                      {
                        staticClass: "row",
                        staticStyle: { "padding-bottom": "20px" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "col-md-12",
                            staticStyle: { "margin-top": "20px" }
                          },
                          [
                            _c("div", [
                              _c("div", { staticClass: "col-md-4" }, [
                                _c(
                                  "label",
                                  {
                                    staticStyle: {
                                      "margin-top": "8px",
                                      color: "#666"
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.cpgtxt_username))]
                                )
                              ]),
                              _vm._v(" "),
                              _vm._m(5),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-12" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "error_text",
                                    attrs: { id: "error_user_name" }
                                  },
                                  [_vm._v(_vm._s(_vm.cpgtxt_changeusername))]
                                )
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-md-12",
                            staticStyle: { "margin-top": "20px" }
                          },
                          [
                            _c("div", [
                              _c(
                                "div",
                                {
                                  staticClass: "col-md-12",
                                  staticStyle: { display: "flex" }
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticStyle: {
                                        "margin-top": "8px",
                                        color: "#666",
                                        "margin-right": "10px"
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.cpgtxt_password))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        "line-height": "32px",
                                        display: "none"
                                      },
                                      attrs: { id: "pwd_check" }
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "icon",
                                          attrs: {
                                            t: "1618377574117",
                                            viewBox: "0 0 1024 1024",
                                            version: "1.1",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            "p-id": "1122",
                                            width: "16",
                                            height: "16"
                                          }
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              d:
                                                "M811.24864 372.41344a35.83488 35.83488 0 0 0-50.68288 0l-286.01344 286.00832-170.15808-170.15808a35.83488 35.83488 0 0 0-50.68288 0 35.83488 35.83488 0 0 0 0 50.68288l195.49696 195.49696 0.00512 0.00512a35.83488 35.83488 0 0 0 50.68288 0l311.35232-311.35232a35.83488 35.83488 0 0 0 0-50.68288z",
                                              fill: "#07bd23",
                                              "p-id": "1123"
                                            }
                                          }),
                                          _c("path", {
                                            attrs: {
                                              d:
                                                "M512 133.12c208.91648 0 378.88 169.96352 378.88 378.88s-169.96352 378.88-378.88 378.88-378.88-169.96352-378.88-378.88 169.96352-378.88 378.88-378.88m0-71.68c-248.83712 0-450.56 201.72288-450.56 450.56s201.72288 450.56 450.56 450.56 450.56-201.72288 450.56-450.56-201.72288-450.56-450.56-450.56z",
                                              fill: "#07bd23",
                                              "p-id": "1124"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticStyle: {
                                      "line-height": "32px",
                                      width: "100%",
                                      "text-align": "right",
                                      "font-size": "1.3vh",
                                      display: "block"
                                    },
                                    attrs: { id: "pwd_warning_txt" }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(6),
                              _vm._v(" "),
                              _vm._m(7)
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-md-12",
                            staticStyle: { "margin-top": "10px" }
                          },
                          [
                            _c("div", [
                              _c("div", { staticClass: "col-md-4" }, [
                                _c(
                                  "label",
                                  {
                                    staticStyle: {
                                      "margin-top": "8px",
                                      color: "#666"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.cpgtxt_confirm) +
                                        " " +
                                        _vm._s(_vm.cpgtxt_password)
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm._m(8),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-12" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "error_text",
                                    attrs: { id: "error_password" }
                                  },
                                  [_vm._v(_vm._s(_vm.cpgtxt_inconsistentpwd))]
                                )
                              ])
                            ])
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "row",
                        staticStyle: { "margin-top": "25px" }
                      },
                      [
                        _c("div", { staticClass: "col-md-12 text-center" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "btn btn-outline-light  dash-my-btn-0 active p-l-r-35",
                              attrs: { id: "ssfe-model-add" },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.ChanageCompanyAccountModalBtn()
                                }
                              }
                            },
                            [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_save))])]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        attrs: {
          href: "#",
          id: "company-setting-account-fav",
          "data-status": "off",
          "data-page-info": "Account_company-setting-account"
        }
      },
      [
        _vm._v("\n                   "),
        _c("img", {
          staticClass: "iconsimg",
          attrs: {
            src: "/images/icons/star_e.png",
            width: "16",
            height: "16",
            onerror: "this.src ='/images/noimg.png';"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body" }, [
      _c("h6", { staticClass: "card-title m-b-20" }, [
        _vm._v("ID :\n                        "),
        _c("label", { attrs: { id: "csa_id" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-md-8", staticStyle: { "margin-top": "8px" } },
      [
        _c("input", {
          staticClass: "form-control border-input-text",
          attrs: { type: "text", id: "csa_username", name: "csa_username" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-md-8", staticStyle: { "margin-top": "8px" } },
      [
        _c("input", {
          staticClass: "form-control border-input-text",
          attrs: { type: "password", id: "csa_password", name: "csa_password" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-md-8", staticStyle: { "margin-top": "8px" } },
      [
        _c("input", {
          staticClass: "form-control border-input-text",
          attrs: {
            type: "password",
            id: "csa_confirmpassword",
            name: "csa_confirmpassword"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", id: "modal_user_name", name: "modal_user_name" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "password",
          id: "modal_user_pwd",
          name: "modal_user_pwd"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "row",
        staticStyle: { "padding-top": "5px", "padding-right": "10px" }
      },
      [
        _c(
          "div",
          { staticClass: "col-md-12", staticStyle: { padding: "0 30px" } },
          [
            _c("div", {
              staticStyle: {
                padding: "0",
                margin: "0",
                width: "28px",
                background: "#a9a7a7",
                height: "6px",
                float: "right",
                "border-radius": "5px"
              },
              attrs: { id: "passwordworings1" }
            }),
            _vm._v(" "),
            _c("div", {
              staticStyle: {
                padding: "0",
                "margin-right": "2px",
                width: "28px",
                background: "#bfbebe",
                height: "6px",
                float: "right",
                "border-radius": "5px"
              },
              attrs: { id: "passwordworings2" }
            }),
            _vm._v(" "),
            _c("div", {
              staticStyle: {
                padding: "0",
                "margin-right": "2px",
                width: "28px",
                background: "#e2e1e1",
                height: "6px",
                float: "right",
                "border-radius": "5px"
              },
              attrs: { id: "passwordworings3" }
            })
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "password",
          id: "modal_user_confpwd",
          name: "modal_user_confpwd"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/company/setting/CompanySettingAccount.vue":
/*!********************************************************************!*\
  !*** ./resources/vuedir/company/setting/CompanySettingAccount.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanySettingAccount_vue_vue_type_template_id_1179f959___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanySettingAccount.vue?vue&type=template&id=1179f959& */ "./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=template&id=1179f959&");
/* harmony import */ var _CompanySettingAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanySettingAccount.vue?vue&type=script&lang=js& */ "./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CompanySettingAccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanySettingAccount.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CompanySettingAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanySettingAccount_vue_vue_type_template_id_1179f959___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanySettingAccount_vue_vue_type_template_id_1179f959___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/company/setting/CompanySettingAccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettingAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySettingAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettingAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettingAccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySettingAccount.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettingAccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettingAccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettingAccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettingAccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettingAccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=template&id=1179f959&":
/*!***************************************************************************************************!*\
  !*** ./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=template&id=1179f959& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettingAccount_vue_vue_type_template_id_1179f959___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySettingAccount.vue?vue&type=template&id=1179f959& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/company/setting/CompanySettingAccount.vue?vue&type=template&id=1179f959&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettingAccount_vue_vue_type_template_id_1179f959___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettingAccount_vue_vue_type_template_id_1179f959___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
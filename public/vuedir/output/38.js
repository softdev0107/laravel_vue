(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
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



var userid = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.jsonparse(window.Laravel.userinfo).id;
var preview = '';
var tabstatus = 0;
var vueOBJ = null;
var pstart = 1;
var pnum = pstart;
var pcnt = 5;
var numg = 5;
var pgperm = {};
var edit_id;

function pageNavigation(totalpage) {
  var nav_tag = '';
  nav_tag += '<nav aria-label="..." class="mb-4">';
  nav_tag += '<ul class="pagination pagination-rounded justify-content-center">';
  var disble = "";
  if (pstart == 1) disble = "disabled";
  var prenum = parseInt(pstart) - 1;
  nav_tag += '<li class="page-item  ' + disble + ' ">';
  nav_tag += '<a class="page-link" href="#"  id="ssmunavnum_' + prenum + '" >';
  nav_tag += '<i class="ti-angle-left"></i>';
  nav_tag += '</a>';
  nav_tag += '</li>';
  var pnum = pstart <= numg ? 1 : parseInt(pstart) - 1;

  for (var idx = 0; idx < numg; idx++) {
    var actv = "";
    var aria_current = '';
    var spantag = '';
    var oid = '';

    if (pnum == pstart) {
      actv = 'active';
      aria_current = 'aria-current="page"';
      spantag = '<span class="sr-only">(current)</span>';
    } else oid = "ssmunavnum_" + pnum;

    nav_tag += '<li class="page-item ' + actv + '"  ' + aria_current + '>';
    nav_tag += '<a class="page-link" id="' + oid + '"  href="#" >' + pnum + '  ' + spantag + '</a>';
    nav_tag += '</li>';
    if (pnum == totalpage) break;
    pnum = pnum + 1;
  }

  var nextnum = parseInt(pstart) + 1;
  var edisble = "";
  if (pstart == totalpage) edisble = "disabled";
  nav_tag += '<li class="page-item ' + edisble + ' ">';
  nav_tag += '<a class="page-link" id="ssmunavnum_' + nextnum + '" href="#">';
  nav_tag += '<i class="ti-angle-right"></i>';
  nav_tag += '</a>';
  nav_tag += '</li>';
  nav_tag += '</ul>';
  nav_tag += '</nav>';
  $('#ssmu_page_nav').html(nav_tag);
  /* events { */

  $('a[id^="ssmunavnum_"]').click(function () {
    var oid = $(this).attr("id");
    pstart = oid.split('_')[1];
    getApplyUsersList();
  });
}

function initSearchContent() {
  $('#uoa_search_items').val(0);
  $('#uoa_search_cont').val('');
}

function showUserList(lists) {
  $('#user_content_lists').html('');

  if (lists == null && lists == '') {
    return;
  }

  var btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
  var btntxt_activate = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_activate');
  var btntxt_inactivate = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_inactivate');
  var pgctl_block = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgctl_block');
  var btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
  var tags = '';

  for (var i = 0; i < lists.length; i++) {
    var uid = '';
    var item = lists[i];
    var id = item.id;
    var uname = item.uname;
    var uemail = item.uemail;
    var umobile = item.umobile;
    var country_code = item.country_code;
    var organization = item.organization;
    if (id < 10) uid = '00000' + id;else if (id < 100) uid = '0000' + id;else if (id < 1000) uid = '000' + id;else if (id < 10000) uid = '00' + id;else if (id < 100000) uid = '0' + id;else uid = id;
    tags += '<tr role="row" class="odd">';
    tags += '    <td>' + uid + '</td>';
    tags += '    <td>' + organization + '</td>';
    tags += '    <td>' + uname + '</td>';
    tags += '    <td>' + uemail + '</td>';
    tags += '    <td>+' + country_code + ' ' + umobile + '</td>';
    if (parseInt(item.status) == 1) tags += '    <td class="data-ajax" data-ajax="btntxt_activate">' + btntxt_activate + '</td>';else if (parseInt(item.status) == 2) tags += '    <td class="data-ajax" data-ajax="btntxt_inactivate">' + btntxt_inactivate + '</td>';else if (parseInt(item.status) == 3) tags += '    <td class="data-ajax" data-ajax="pgctl_block">' + pgctl_block + '</td>';else tags += '    <td class="data-ajax" data-ajax="btntxt_activate">' + btntxt_activate + '</td>';
    tags += '   <td>';
    tags += '       <div class="form-group m-b-0">';
    tags += '           <select class="my-border-radius-slt form-control float-right" id="user_edit_btn-' + id + '" name="user_edit_btn-' + id + '">';
    tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">' + btntxt_edit + '</option>';
    tags += '               <option value="1" class="data-ajax" data-ajax="pgtxt_activate">' + btntxt_activate + '</option>';
    tags += '               <option value="2" class="data-ajax" data-ajax="pgtxt_inactivate">' + btntxt_inactivate + '</option>';
    tags += '               <option value="3" class="data-ajax" data-ajax="pgctl_block">' + pgctl_block + '</option>';
    tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">' + btntxt_delete + '</option>';
    tags += '           </select>';
    tags += '       </div>';
    tags += '   </td>';
    tags += '</tr>';
  }

  $('#user_content_lists').html(tags);
  $('select[id^="user_edit_btn-"]').click(function () {
    if (pgperm.write != 1) {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlertHidden('pgtxt_notpermission');
      return;
    }

    var id = $(this).attr('id');
    edit_id = id.split('-')[1];
    var sel_val = $(this).val();

    if (sel_val == "delete") {
      if (pgperm["delete"] != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlertHidden('pgtxt_notpermission');
        return;
      }

      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.Confirm('pgtxt_wantdeleteitem', function (val) {
        if (val) {
          deleteApplyUsersInfo();
        }
      });
    } else {
      if (sel_val != "") changeApplyUsersInfo(sel_val);
    }
  });
}

function getApplyUsersList() {
  var search_item = $('#uoa_search_items').val();
  var search_cont = $('#uoa_search_cont').val();
  $.ajax({
    method: "POST",
    url: "admin.getChinaOUserInfoList",
    data: {
      pstart: pstart,
      pcnt: pcnt,
      search_item: search_item,
      search_cont: search_cont
    },
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        showUserList(lists);
        pstart = data.pstart;
        var total = data.total;

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

        var totalpage = data.totalpage;
        pageNavigation(totalpage);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function initPage() {
  $('#uoa_search_btn').click(function () {
    getApplyUsersList();
  });
  $('#ouser_list_nav_cnt').change(function () {
    pstart = 1;
    pcnt = $(this).val();
    getApplyUsersList();
  });
}

function deleteApplyUsersInfo() {
  var search_item = $('#uoa_search_items').val();
  var search_cont = $('#uoa_search_cont').val();
  $.ajax({
    method: "POST",
    url: "admin.deleteChinaOUserInfoList",
    data: {
      edit_id: edit_id,
      pstart: pstart,
      pcnt: pcnt,
      search_item: search_item,
      search_cont: search_cont
    },
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        showUserList(lists);
        pstart = data.pstart;
        var total = data.total;

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

        var totalpage = data.totalpage;
        pageNavigation(totalpage);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function changeApplyUsersInfo(status) {
  var search_item = $('#uoa_search_items').val();
  var search_cont = $('#uoa_search_cont').val();
  $.ajax({
    method: "POST",
    url: "admin.changeChinaOUserInfoList",
    data: {
      edit_id: edit_id,
      status: status,
      pstart: pstart,
      pcnt: pcnt,
      search_item: search_item,
      search_cont: search_cont
    },
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        showUserList(lists);
        pstart = data.pstart;
        var total = data.total;

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

        var totalpage = data.totalpage;
        pageNavigation(totalpage);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UsersOrgChinaUser",
  data: function data() {
    return {
      pageid: 'users-organization-china-ouser-fav',
      mu_users: '',
      musu_users_org: '',
      mususu_users_org_china: '',
      musususu_users_org_ouser: '',
      btntxt_edit: '',
      pgtxt_list: '',
      pgtxt_filters: '',
      pgtxt_search: '',
      pgtxt_username: '',
      pgtxt_email: '',
      pgtxt_mobile: '',
      pgtxt_organization: '',
      pgtxt_setupthe: '',
      pgtxt_operation: '',
      pgtxt_status: '',
      btntxt_activate: '',
      btntxt_inactivate: '',
      pgctl_block: '',
      btntxt_delete: ''
    };
  },
  computed: {
    cmu_users: function cmu_users() {
      return this.mu_users;
    },
    cmusu_users_org: function cmusu_users_org() {
      return this.musu_users_org;
    },
    cmususu_users_org_china: function cmususu_users_org_china() {
      return this.mususu_users_org_china;
    },
    cmusususu_users_org_ouser: function cmusususu_users_org_ouser() {
      return this.musususu_users_org_ouser;
    },
    cpgtxt_list: function cpgtxt_list() {
      return this.pgtxt_list;
    },
    cpgtxt_filters: function cpgtxt_filters() {
      return this.pgtxt_filters;
    },
    cpgtxt_search: function cpgtxt_search() {
      return this.pgtxt_search;
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
    cpgtxt_organization: function cpgtxt_organization() {
      return this.pgtxt_organization;
    },
    cpgtxt_setupthe: function cpgtxt_setupthe() {
      return this.pgtxt_setupthe;
    },
    cpgtxt_operation: function cpgtxt_operation() {
      return this.pgtxt_operation;
    },
    cpgtxt_status: function cpgtxt_status() {
      return this.pgtxt_status;
    },
    cbtntxt_activate: function cbtntxt_activate() {
      return this.btntxt_activate;
    },
    cbtntxt_inactivate: function cbtntxt_inactivate() {
      return this.btntxt_inactivate;
    },
    cpgctl_block: function cpgctl_block() {
      return this.pgctl_block;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_delete: function cbtntxt_delete() {
      return this.btntxt_delete;
    },
    contentchange: function contentchange() {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
      return this.$store.state.contentchange;
    }
  },
  created: function created() {},
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    /* fav part*/
    vueOBJ = this;
    pgperm = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getPagePermission(this.$store.state.permission, this.pageid);
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
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
      initPage();
      getApplyUsersList();
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page1_content_content_bottom svg{\n    color: #6b85e2;\n}\n.page_slider_content_list{\n    display: none;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.input-group-append-my span{\n    border-top-right-radius:1.25rem;\n    border-bottom-right-radius:1.25rem;\n    background-color: #d6d6d6;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersOrgChinaUser.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=template&id=55627ca4&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=template&id=55627ca4& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v(_vm._s(_vm.cmusususu_users_org_ouser))]),
        _vm._v(" "),
        _c("span", { staticStyle: { color: "#656262" } }, [
          _vm._v("   |   \n                   "),
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
            "\n                         " +
              _vm._s(_vm.cmu_users) +
              "   >> " +
              _vm._s(_vm.cmusu_users_org) +
              "   >>  " +
              _vm._s(_vm.cmususu_users_org_china) +
              "   >>  " +
              _vm._s(_vm.cmusususu_users_org_ouser) +
              "\n                      "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "row",
        staticStyle: { display: "block" },
        attrs: { id: "applyuser_list" }
      },
      [
        _c(
          "div",
          {
            staticClass: "col-md-12",
            staticStyle: { "margin-bottom": "30px" }
          },
          [
            _c("div", { staticClass: "page1_content_content_bar" }, [
              _c(
                "div",
                {
                  staticClass: "page1_content_content_title",
                  staticStyle: {
                    padding: "0px",
                    border: "0px",
                    display: "flex",
                    height: "auto"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "col-md-12",
                      staticStyle: { padding: "0px" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticStyle: {
                            "flex-grow": "1",
                            "margin-left": "15px",
                            "font-size": "1rem"
                          }
                        },
                        [_vm._v(_vm._s(_vm.cpgtxt_filters))]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "page2_content_text",
                          staticStyle: { padding: "20px 30px" }
                        },
                        [
                          _c("div", { staticClass: "row mb-3" }, [
                            _c(
                              "div",
                              {
                                staticClass: "col-auto",
                                staticStyle: { width: "90px" }
                              },
                              [_c("span", [_vm._v(_vm._s(_vm.cpgtxt_search))])]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "col-md-5",
                                staticStyle: { display: "flex" }
                              },
                              [
                                _vm._m(1),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      display: "flex",
                                      "flex-direction": "row",
                                      width: "150px",
                                      position: "absolute",
                                      "border-right": "1px solid #fff"
                                    }
                                  },
                                  [
                                    _c(
                                      "select",
                                      {
                                        staticClass:
                                          "form-control w-100 select-noneborder-rightcolor",
                                        staticStyle: { "border-bottom": "0px" },
                                        attrs: {
                                          id: "uoa_search_items",
                                          name: "uoa_search_items"
                                        }
                                      },
                                      [
                                        _c(
                                          "option",
                                          { attrs: { value: "0" } },
                                          [_vm._v("ID")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "1" } },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.cpgtxt_organization)
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "2" } },
                                          [_vm._v(_vm._s(_vm.cpgtxt_username))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "3" } },
                                          [_vm._v(_vm._s(_vm.cpgtxt_email))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "4" } },
                                          [_vm._v(_vm._s(_vm.cpgtxt_mobile))]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-md-12 page_slider_content_list active",
            attrs: { id: "uoa_list" }
          },
          [
            _c("div", { staticClass: "page1_content_content_bar" }, [
              _c(
                "div",
                {
                  staticClass: "page1_content_content_title",
                  staticStyle: { padding: "0px", border: "0px" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "col-md-12",
                      staticStyle: {
                        display: "flex",
                        "flex-direction": "row",
                        "align-items": "center",
                        padding: "0px"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticStyle: {
                            "flex-grow": "1",
                            "margin-left": "15px",
                            "font-size": "1rem"
                          }
                        },
                        [_vm._v(_vm._s(_vm.cpgtxt_list))]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-12" }, [
                _c(
                  "table",
                  {
                    staticClass: "table table-lg  no-footer",
                    attrs: {
                      role: "grid",
                      "aria-describedby": "user-list_info"
                    }
                  },
                  [
                    _c("thead", [
                      _c(
                        "tr",
                        {
                          staticStyle: { "border-bottom": "1px solid #e4e2e2" },
                          attrs: { role: "row" }
                        },
                        [
                          _c("th", { staticStyle: { border: "0" } }, [
                            _vm._v("ID")
                          ]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { border: "0" } }, [
                            _vm._v(_vm._s(_vm.cpgtxt_organization))
                          ]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { border: "0" } }, [
                            _vm._v(_vm._s(_vm.cpgtxt_username))
                          ]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { border: "0" } }, [
                            _vm._v(_vm._s(_vm.cpgtxt_email))
                          ]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { border: "0" } }, [
                            _vm._v(_vm._s(_vm.cpgtxt_mobile))
                          ]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { border: "0" } }, [
                            _vm._v(_vm._s(_vm.cpgtxt_status))
                          ]),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticStyle: {
                                border: "0",
                                "text-align": "right",
                                "padding-right": "20px"
                              }
                            },
                            [_vm._v(_vm._s(_vm.cpgtxt_operation))]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("tbody", { attrs: { id: "user_content_lists" } })
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-md-2 col-sm-3",
                  staticStyle: { "margin-bottom": "10px" }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticStyle: { width: "auto", "padding-left": "15px" }
                      },
                      [_c("span", [_vm._v(_vm._s(_vm.cpgtxt_setupthe))])]
                    ),
                    _vm._v(" "),
                    _vm._m(2)
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "col-md-9 col-sm-12",
                attrs: { id: "ssmu_page_nav" }
              })
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
          id: "users-organization-china-ouser-fav",
          "data-status": "off",
          "data-page-info": "User_users-organization-china-ouser"
        }
      },
      [
        _vm._v("\n                       "),
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
    return _c("div", { staticStyle: { width: "100%" } }, [
      _c("input", {
        staticClass: "form-control",
        staticStyle: {
          height: "calc(1.5em + .75rem + 6px)",
          "padding-left": "160px"
        },
        attrs: { type: "text", id: "uoa_search_cont", name: "uoa_search_cont" }
      }),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "btn",
          staticStyle: {
            padding: "5px",
            right: "20px",
            "margin-top": "-32px",
            position: "absolute"
          },
          attrs: { id: "uoa_search_btn" }
        },
        [_c("i", { staticClass: "ti-search" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", { staticClass: "input-group", staticStyle: { width: "95%" } }, [
        _c(
          "select",
          {
            staticClass: "form-control page2_input",
            attrs: { id: "ouser_list_nav_cnt", name: "ouser_list_nav_cnt" }
          },
          [
            _c("option", { attrs: { value: "5", selected: "selected" } }, [
              _vm._v("5")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "10" } }, [_vm._v("10")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "15" } }, [_vm._v("15")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "20" } }, [_vm._v("20")])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgChinaUser.vue":
/*!************************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgChinaUser.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersOrgChinaUser_vue_vue_type_template_id_55627ca4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersOrgChinaUser.vue?vue&type=template&id=55627ca4& */ "./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=template&id=55627ca4&");
/* harmony import */ var _UsersOrgChinaUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersOrgChinaUser.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UsersOrgChinaUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UsersOrgChinaUser.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UsersOrgChinaUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsersOrgChinaUser_vue_vue_type_template_id_55627ca4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsersOrgChinaUser_vue_vue_type_template_id_55627ca4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/users/UsersOrgChinaUser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgChinaUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersOrgChinaUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgChinaUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgChinaUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersOrgChinaUser.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgChinaUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgChinaUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgChinaUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgChinaUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgChinaUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=template&id=55627ca4&":
/*!*******************************************************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=template&id=55627ca4& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgChinaUser_vue_vue_type_template_id_55627ca4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersOrgChinaUser.vue?vue&type=template&id=55627ca4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/users/UsersOrgChinaUser.vue?vue&type=template&id=55627ca4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgChinaUser_vue_vue_type_template_id_55627ca4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgChinaUser_vue_vue_type_template_id_55627ca4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
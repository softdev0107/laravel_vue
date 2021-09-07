"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vuedir_pages_apps_AppsCoursesSettingLength_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/apps/AppsCoursesSettingLength.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/apps/AppsCoursesSettingLength.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var vueOBJ;
var userid = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_2__.default.data.jsonparse(window.Laravel.userinfo).id;
var btntxt_edit = "";
var btntxt_change = "";
var btntxt_delete = "";
var pgtxt_department = "";
var pgtxt_position = "";
var pgtxt_superior = "";
var pgtxt_name = "";
var btntxt_add = "";
var pgtxt_wantdeleteitem = "";
var pstart = 1;
var pnum = pstart;
var pcnt = 5;
var numg = 5;
var is_edit = false;
var edit_id = 0;
var checked_del_items = new Array();
var pgperm = {};

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
    getAWCSLengthList();
  });
} /// Length /////////////////////////////////////////////////////////////////////////////////////////////////////


function LengthList(lists) {
  $('#awcs_length_tbody').html('');
  var tags = '';

  for (var i = 0; i < lists.length; i++) {
    var id = lists[i].id;
    var name = lists[i].name;
    var describe = lists[i].describes;
    var uid = lists[i].userid;
    tags += '<tr class="awcs_length_item-' + id + '" data-id="' + id + '" data-name="' + name + '" data-describe="' + describe + '">';
    tags += '   <td>';
    tags += '   <div class="form-check form-check-inline">';
    tags += '       <input class="form-check-input" type="checkbox" id="cgCheckbox_' + id + '" value="">';
    tags += '   </div>';
    tags += '   </td>';
    tags += '   <td>' + name + '</td>';
    tags += '   <td>' + describe + '</td>';
    tags += '   <td>';
    tags += '       <div class="form-group m-b-0">';
    tags += '           <select class="my-border-radius-slt form-control float-right" id="awcs_length_table-' + id + '" name="awcs_length_table-' + id + '">';
    tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit" >' + btntxt_edit + '</option>';
    tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change" >' + btntxt_change + '</option>';
    tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete" >' + btntxt_delete + '</option>';
    tags += '           </select>';
    tags += '       </div>';
    tags += '   </td>';
    tags += '</tr>';
  }

  $('#awcs_length_tbody').html(tags);
  $('input[id^="cgCheckbox_"]').change(function () {
    var id = $(this).attr("id");
    var del_id = id.split('_')[1];

    if ($(this).is(':checked')) {
      checked_del_items.push(del_id);
    } else {
      var idx = checked_del_items.indexOf(del_id);
      if (idx > -1) checked_del_items.splice(idx, 1);
    }
  });
  $('select[id^="awcs_length_table-"]').change(function () {
    var id = $(this).attr("id");
    edit_id = id.split('-')[1];
    var sel_val = $(this).val();

    if (sel_val == "change") {
      if (pgperm.write != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      var id = $('.awcs_length_item-' + edit_id).data("id");
      var name = $('.awcs_length_item-' + edit_id).data("name");
      var describe = $('.awcs_length_item-' + edit_id).data("describe");
      var max = $('.awcs_length_item-' + edit_id).data("max");
      $('#AWCSettingName_Input_item').val(name);
      $('#AWCSettingDescribe_Input_item').val(describe);
      is_edit = true;
      $('#ModalAWCSettingDescribe').modal('show');
    } else if (sel_val == "delete") {
      if (pgperm["delete"] != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.Confirm('pgtxt_wantdeleteitem', function (val) {
        if (val) {
          deleteAWCSLengthList();
        }
      });
    }

    $(this).val('');
  });
}

function getAWCSLengthList() {
  $.ajax({
    url: 'admin.getAWCSLengthList',
    data: {
      userid: userid,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var totallist = data.totallist;
        var total = data.total;

        if (lists != "" && lists != null) {
          LengthList(lists);
        } else {
          $('#awcs_length_tbody').html('');
        }

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function addAWCSLengthList() {
  var name = $('#AWCSettingName_Input_item').val();
  var describe = $('#AWCSettingDescribe_Input_item').val();
  name = $.trim(name);
  describe = $.trim(describe);
  $.ajax({
    url: 'admin.addAWCSLengthList',
    data: {
      userid: userid,
      name: name,
      describe: describe,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var totallist = data.totallist;
        var total = data.total;

        if (lists != null && lists != '') {
          LengthList(lists);
        } else $('#awcs_length_tbody').html('');

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
        $('#ModalAWCSettingDescribe').modal('hide');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function editAWCSLengthList() {
  var name = $('#AWCSettingName_Input_item').val();
  var describe = $('#AWCSettingDescribe_Input_item').val();
  $.ajax({
    url: 'admin.editAWCSLengthList',
    data: {
      edit_id: edit_id,
      userid: userid,
      name: name,
      describe: describe,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var totallist = data.totallist;
        var total = data.total;

        if (lists != null && lists != '') {
          LengthList(lists);
        } else $('#awcs_length_tbody').html('');

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
        $('#ModalAWCSettingDescribe').modal('hide');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function deleteAWCSLengthList() {
  if (edit_id < 1) {
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('no select');
    return;
  }

  $.ajax({
    url: 'admin.deleteAWCSLengthList',
    data: {
      edit_id: edit_id,
      userid: userid,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var totallist = data.totallist;
        var total = data.total;

        if (lists != null && lists != '') {
          LengthList(lists);
        } else {
          $('#awcs_length_tbody').html('');
        }

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
        $('#ModalAWCSettingDescribe').modal('hide');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function allDeleteAWCSLengthList() {
  $('.awcs_length_all_delete').click(function () {
    if (pgperm["delete"]() != 1) {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('pgtxt_notpermission');
      return;
    }

    if (checked_del_items.length > 0) {
      var dis = 0;
      if (window.confirm(pgtxt_wantdeleteitem)) dis = 1;
      if (dis < 1) return;
      $.ajax({
        url: 'admin.allDeleteAWCSLengthList',
        data: {
          ids: checked_del_items,
          userid: userid,
          pstart: pstart,
          pcnt: pcnt
        },
        type: 'POST',
        async: false,
        success: function success(data) {
          if (data.msg === "ok") {
            var lists = data.lists;
            var totallist = data.totallist;
            var total = data.total;

            if (lists != null && lists != '') {
              LengthList(lists);
            } else {
              $('#awcs_length_tbody').html('');
            }

            if (total <= 0) {
              $('#ssmu_page_nav').html('');
              return;
            }

            pstart = data.pstart;
            var totalpage = data.totalpage;
            pageNavigation(totalpage);
            $('#ModalAWCSettingDescribe').modal('hide');
          } else {
            console.log(data.msg);
          }
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    }
  });
} ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pageid: 'apps-courses-setting-fav',
      musu_apps_courses: '',
      btntxt_roles: '',
      btntxt_add: '',
      btntxt_edit: '',
      btntxt_change: '',
      btntxt_delete: '',
      pgtxt_list: '',
      pgtxt_name: '',
      pgtxt_number: '',
      pgtxt_delete: '',
      pgtxt_superior: '',
      pgtxt_colleagues: '',
      pgtxt_suserlist: '',
      pgtxt_all: '',
      pgtxt_describe: '',
      pgtxt_length: '',
      btntxt_ok: '',
      btntxt_cancel: '',
      pgtxt_wantdeleteitem: '',
      pgtxt_notpermission: '',
      pgtxt_notification: ''
    };
  },
  computed: {
    // 계산된 getter
    cbtntxt_roles: function cbtntxt_roles() {
      return this.btntxt_roles;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_change: function cbtntxt_change() {
      return this.btntxt_change;
    },
    cbtntxt_delete: function cbtntxt_delete() {
      return this.btntxt_delete;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cpgtxt_list: function cpgtxt_list() {
      return this.pgtxt_list;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
    },
    cpgtxt_number: function cpgtxt_number() {
      return this.pgtxt_number;
    },
    cpgtxt_delete: function cpgtxt_delete() {
      return this.pgtxt_delete;
    },
    cpgtxt_superior: function cpgtxt_superior() {
      return this.pgtxt_superior;
    },
    cpgtxt_colleagues: function cpgtxt_colleagues() {
      return this.pgtxt_colleagues;
    },
    cpgtxt_suserlist: function cpgtxt_suserlist() {
      return this.pgtxt_suserlist;
    },
    cpgtxt_all: function cpgtxt_all() {
      return this.pgtxt_all;
    },
    cmusu_apps_courses: function cmusu_apps_courses() {
      return this.musu_apps_courses;
    },
    cpgtxt_describe: function cpgtxt_describe() {
      return this.pgtxt_describe;
    },
    cpgtxt_length: function cpgtxt_length() {
      return this.pgtxt_length;
    },
    contentchange: function contentchange() {
      //cckd
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
      return this.$store.state.contentchange;
    }
  },
  created: function created() {},
  mounted: function mounted() {
    vueOBJ = this;
    pgperm = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getPagePermission(this.$store.state.permission, this.pageid);
    this.initPage();
  },
  methods: {
    initPage: function initPage() {
      btntxt_add = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_add');
      btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
      btntxt_change = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
      btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
      pgtxt_department = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_department');
      pgtxt_position = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_position');
      pgtxt_superior = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_superior');
      pgtxt_name = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_name');
      pgtxt_wantdeleteitem = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_wantdeleteitem');
      is_edit = false;
      $("#ModalAWCSettingDescribe").on('hide.bs.modal', function () {
        $('select[id^="awcs_length_table-"]').val('');
      });
      getAWCSLengthList();
      allDeleteAWCSLengthList();
    },
    addAWC_SettingLength_Btn: function addAWC_SettingLength_Btn() {
      if (pgperm.create != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      is_edit = false;
      edit_id = 0;
      $('#AWCSettingName_Input_item').val('');
      $('#ModalAWCSettingDescribe').modal('show');
    },
    addLengthModalBtn: function addLengthModalBtn() {
      var item_name = $('#AWCSettingName_Input_item').val();
      item_name = $.trim(item_name);

      if (item_name != null && item_name != "") {
        if (is_edit) {
          editAWCSLengthList();
        } else {
          addAWCSLengthList();
        }
      } else {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('Name have to not empty!');
      }
    }
  }
});

/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsCoursesSettingLength.vue":
/*!******************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsCoursesSettingLength.vue ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppsCoursesSettingLength_vue_vue_type_template_id_61e7c212___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppsCoursesSettingLength.vue?vue&type=template&id=61e7c212& */ "./resources/vuedir/pages/apps/AppsCoursesSettingLength.vue?vue&type=template&id=61e7c212&");
/* harmony import */ var _AppsCoursesSettingLength_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppsCoursesSettingLength.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/apps/AppsCoursesSettingLength.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AppsCoursesSettingLength_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AppsCoursesSettingLength_vue_vue_type_template_id_61e7c212___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppsCoursesSettingLength_vue_vue_type_template_id_61e7c212___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/apps/AppsCoursesSettingLength.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsCoursesSettingLength.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsCoursesSettingLength.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsCoursesSettingLength_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppsCoursesSettingLength.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/apps/AppsCoursesSettingLength.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsCoursesSettingLength_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsCoursesSettingLength.vue?vue&type=template&id=61e7c212&":
/*!*************************************************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsCoursesSettingLength.vue?vue&type=template&id=61e7c212& ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsCoursesSettingLength_vue_vue_type_template_id_61e7c212___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsCoursesSettingLength_vue_vue_type_template_id_61e7c212___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsCoursesSettingLength_vue_vue_type_template_id_61e7c212___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppsCoursesSettingLength.vue?vue&type=template&id=61e7c212& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/apps/AppsCoursesSettingLength.vue?vue&type=template&id=61e7c212&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/apps/AppsCoursesSettingLength.vue?vue&type=template&id=61e7c212&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/apps/AppsCoursesSettingLength.vue?vue&type=template&id=61e7c212& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticStyle: { width: "100%" } }, [
    _c("div", { staticStyle: { display: "none" } }, [
      _vm._v(_vm._s(_vm.contentchange))
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card border-0 m-b-10 text-right" }, [
          _c("div", [
            _c(
              "div",
              {
                staticClass:
                  "btn btn-outline-light dash-my-btn-0 active p-l-r-30",
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.addAWC_SettingLength_Btn($event)
                  }
                }
              },
              [_c("span", [_vm._v(" " + _vm._s(_vm.cbtntxt_add) + " ")])]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12 page_roles_content_list active",
          attrs: { id: "length" }
        },
        [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              {
                staticClass: "col-md-4",
                staticStyle: { margin: "20px 0px 0px 20px" }
              },
              [
                _c("h6", { staticClass: "card-title m-b-20" }, [
                  _vm._v(_vm._s(_vm.cpgtxt_list))
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", [
              _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  {
                    staticClass: "table table-lg  no-footer",
                    attrs: {
                      id: "sum-department-list",
                      role: "grid",
                      "aria-describedby": "user-list_info"
                    }
                  },
                  [
                    _c("thead", [
                      _c("tr", { attrs: { role: "row" } }, [
                        _c("th", { staticStyle: { width: "40px!important" } }),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.cpgtxt_name))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.cpgtxt_describe))]),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticStyle: {
                              "text-align": "right",
                              "padding-right": "40px"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "awcs_length_all_delete",
                                staticStyle: {
                                  cursor: "pointer",
                                  color: "#1e598d"
                                }
                              },
                              [_vm._v(_vm._s(_vm.cpgtxt_delete))]
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", { attrs: { id: "awcs_length_tbody" } })
                  ]
                )
              ])
            ])
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "ModalAWCSettingDescribe" } },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered modal-sm",
            staticStyle: { "min-width": "500px!important" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h4",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "ModalAWCSettingTitle" }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.cbtntxt_add) + " " + _vm._s(_vm.cpgtxt_length)
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("×")]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal-body",
                  staticStyle: { padding: "0 1.5rem 1.5rem 1.5rem" },
                  attrs: { id: "ModalAWCSettingbody" }
                },
                [
                  _c("div", { staticClass: "panel", attrs: { id: "tab4" } }, [
                    _c("form", { attrs: { id: "ssfe-email-frm" } }, [
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
                              _c("div", { staticClass: "d-flex flex-wrap" }, [
                                _c("div", { staticClass: "col-md-4" }, [
                                  _c(
                                    "label",
                                    {
                                      staticStyle: {
                                        "margin-top": "8px",
                                        color: "#666"
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.cpgtxt_name))]
                                  )
                                ]),
                                _vm._v(" "),
                                _vm._m(1)
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
                              _c("div", { staticClass: "d-flex flex-wrap" }, [
                                _c("div", { staticClass: "col-md-4" }, [
                                  _c(
                                    "label",
                                    {
                                      staticStyle: {
                                        "margin-top": "8px",
                                        color: "#666"
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.cpgtxt_describe))]
                                  )
                                ]),
                                _vm._v(" "),
                                _vm._m(2)
                              ])
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-12 text-center" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "btn btn-outline-light  dash-my-btn-0 active p-l-r-35",
                              attrs: { id: "ssfe-Length-model-add" },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.addLengthModalBtn($event)
                                }
                              }
                            },
                            [
                              _c("span", [
                                _vm._v("+ " + _vm._s(_vm.cbtntxt_add))
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        attrs: { type: "hidden", id: "ssfe-id", value: "" }
                      })
                    ])
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12", attrs: { id: "ssmu_page_nav" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-8" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "text",
          id: "AWCSettingName_Input_item",
          name: "AWCSettingName_Input_item"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-8" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "text",
          id: "AWCSettingDescribe_Input_item",
          name: "AWCSettingDescribe_Input_item"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ })

}]);
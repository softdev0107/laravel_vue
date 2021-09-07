(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var userid = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.jsonparse(window.Laravel.userinfo).id;
var btntxt_edit = "";
var btntxt_change = "";
var btntxt_delete = "";
var btntxt_add = "";
var pgtxt_wantdeleteitem = "";
var pgtxt_default = "";
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
    getEmailManageFailedList();
  });
} /// category /////////////////////////////////////////////////////////////////////////////////////////////////////


function initEmailManagerPage(status) {
  if (!is_edit) pstart = 1;

  if (status == 0) {
    $('#applyapproval').css('display', 'block');
    $('#edit_emailmanage').css('display', 'none');
    $('#EmailManageAddLayout').css('display', 'block');
    $('#ssmu_page_nav').css('display', 'block');
  } else {
    $('#applyapproval').css('display', 'none');
    $('#edit_emailmanage').css('display', 'block');
    $('#EmailManageAddLayout').css('display', 'none');
    $('#ssmu_page_nav').css('display', 'none');
  }
}

function emailManageList(lists) {
  $('#uo_emailnamge_tbody').html('');
  var tags = '';

  for (var i = 0; i < lists.length; i++) {
    var id = lists[i].id;
    var title = lists[i].title;
    var keyword = lists[i].keyword;
    var content = lists[i].content;
    var date = lists[i].created_at;
    var split_date = date.split(' ');
    var dates = split_date[0].split('-');
    date = parseInt(dates[0]) + ' / ' + parseInt(dates[1]) + ' / ' + parseInt(dates[2]);
    var state = lists[i].state;
    tags += '<tr class="uoe_applyapproval_item-' + id + '" data-id="' + id + '" data-title="' + title + '" data-cont="' + content + '" data-key="' + keyword + '">';
    tags += '   <td></td>';
    tags += '   <td>' + title + '</td>';
    tags += '   <td>' + date + '</td>';
    if (state == 0) tags += '   <td>-</td>';else tags += '   <td class="data-ajax" data-ajax="pgtxt_default">' + pgtxt_default + '</td>';
    tags += '   <td>';
    tags += '       <div class="form-group m-b-0">';
    tags += '           <select class="my-border-radius-slt form-control float-right" id="uoe_applyapproval_table-' + id + '" name="uoe_applyapproval_table-' + id + '">';
    tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit" >' + btntxt_edit + '</option>';
    tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change" >' + btntxt_change + '</option>';
    tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete" >' + btntxt_delete + '</option>';
    tags += '               <option value="default" class="data-ajax" data-ajax="pgtxt_default" >' + pgtxt_default + '</option>';
    tags += '           </select>';
    tags += '       </div>';
    tags += '   </td>';
    tags += '</tr>';
  }

  $('#uo_emailnamge_tbody').html(tags);
  $('select[id^="uoe_applyapproval_table-"]').change(function () {
    var id = $(this).attr("id");
    edit_id = id.split('-')[1];
    var sel_val = $(this).val();

    if (sel_val == "change") {
      if (pgperm.write != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
        return;
      }

      var id = $('.uoe_applyapproval_item-' + edit_id).data("id");
      var title = $('.uoe_applyapproval_item-' + edit_id).data("title");
      var cont = $('.uoe_applyapproval_item-' + edit_id).data("cont");
      var keyword = $('.uoe_applyapproval_item-' + edit_id).data("key");
      $('#emailmanage_edit_title').val(title);
      $('#emailmanage_edit_keyword').val('[[' + keyword + ']]');
      var edt0 = htmldecodejs(cont);
      vueOBJ.TinyMCMcontent0 = edt0;
      is_edit = true;
      initEmailManagerPage(1);
    } else if (sel_val == "delete") {
      if (pgperm["delete"] != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
        return;
      }

      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.Confirm('pgtxt_wantdeleteitem', function (val) {
        if (val) {
          deleteEmailManageFailedList();
        }
      });
    } else if (sel_val == "default") {
      if (pgperm.write != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
        return;
      }

      setEmailManageFailedState();
    }

    $(this).val('');
  });
}

function getEmailManageFailedList() {
  $.ajax({
    url: 'admin.getEmailManageFailedList',
    data: {
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var total = data.total;

        if (lists != "" && lists != null) {
          emailManageList(lists);
        } else {
          $('#uo_emailnamge_tbody').html('');
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

function setEmailManageFailedState() {
  $.ajax({
    url: 'admin.setEmailManageFailedState',
    data: {
      id: edit_id,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var total = data.total;

        if (lists != "" && lists != null) {
          emailManageList(lists);
        } else {
          $('#uo_emailnamge_tbody').html('');
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

function editEmailManageFailedList() {
  var title = $('#emailmanage_edit_title').val();
  if (title == '' || title == null) return;
  var keyword = $('#emailmanage_edit_keyword').val();
  if (keyword == '' || keyword == null) return;
  $('#editcont0').val(vueOBJ.TinyMCMcontent0);
  var formData = new FormData($("#emailmanage_frm")[0]);
  formData.append('pstart', pstart);
  formData.append('pcnt', pcnt);
  formData.append('edit_id', edit_id);
  $.ajax({
    url: 'admin.editEmailManageFailedList',
    data: formData,
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var total = data.total;

        if (lists != "" && lists != null) {
          emailManageList(lists);
        } else {
          $('#uo_emailnamge_tbody').html('');
        }

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
        initEmailManagerPage(0);
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    },
    cache: false,
    contentType: false,
    processData: false
  });
}

function saveEmailManageFailedList() {
  var title = $('#emailmanage_edit_title').val();
  if (title == '' || title == null) return;
  var keyword = $('#emailmanage_edit_keyword').val();
  if (keyword == '' || keyword == null) return;
  $('#editcont0').val(vueOBJ.TinyMCMcontent0);
  var formData = new FormData($("#emailmanage_frm")[0]);
  formData.append('pstart', pstart);
  formData.append('pcnt', pcnt);
  $.ajax({
    url: 'admin.saveEmailManageFailedList',
    data: formData,
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var total = data.total;

        if (lists != "" && lists != null) {
          emailManageList(lists);
        } else {
          $('#uo_emailnamge_tbody').html('');
        }

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
        initEmailManagerPage(0);
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    },
    cache: false,
    contentType: false,
    processData: false
  });
}

function deleteEmailManageFailedList() {
  if (edit_id < 1) {
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('no select');
    return;
  }

  $.ajax({
    url: 'admin.deleteEmailManageFailedList',
    data: {
      del_id: edit_id,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var total = data.total;

        if (lists != null && lists != '') {
          emailManageList(lists);
        } else {
          $('#uo_emailnamge_tbody').html('');
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
} ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UsersOrgGlobalEmailManageFailed",
  components: {
    'editor0': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      pageid: 'users-organization-global-emailmanage-fav',
      btntxt_roles: '',
      btntxt_add: '',
      btntxt_edit: '',
      btntxt_change: '',
      btntxt_delete: '',
      btntxt_cancel: '',
      btntxt_savechange: '',
      pgtxt_list: '',
      pgtxt_title: '',
      pgtxt_keywords: '',
      pgtxt_date: '',
      pgtxt_setting: '',
      pgtxt_sua_State: '',
      pgtxt_option: '',
      pgtxt_default: '',
      pgtxt_wantdeleteitem: '',
      pgtxt_notpermission: '',
      pgtxt_notification: '',
      TinyMCMcontent0: ''
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
    cbtntxt_cancel: function cbtntxt_cancel() {
      return this.btntxt_cancel;
    },
    cbtntxt_savechange: function cbtntxt_savechange() {
      return this.btntxt_savechange;
    },
    cpgtxt_list: function cpgtxt_list() {
      return this.pgtxt_list;
    },
    cpgtxt_title: function cpgtxt_title() {
      return this.pgtxt_title;
    },
    cpgtxt_keywords: function cpgtxt_keywords() {
      return this.pgtxt_keywords;
    },
    cpgtxt_date: function cpgtxt_date() {
      return this.pgtxt_date;
    },
    cpgtxt_setting: function cpgtxt_setting() {
      return this.pgtxt_setting;
    },
    cpgtxt_sua_State: function cpgtxt_sua_State() {
      return this.pgtxt_sua_State;
    },
    cpgtxt_option: function cpgtxt_option() {
      return this.pgtxt_option;
    },
    contentchange: function contentchange() {
      //cckd
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
  mounted: function mounted() {
    vueOBJ = this;
    pgperm = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getPagePermission(this.$store.state.permission, this.pageid);
    this.initPage();
  },
  methods: {
    initPage: function initPage() {
      btntxt_add = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_add');
      btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
      btntxt_change = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
      btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
      pgtxt_wantdeleteitem = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_wantdeleteitem');
      pgtxt_default = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_default');
      is_edit = false;
      getEmailManageFailedList();
      initEmailManagerPage(0);
    },
    editorclick0: function editorclick0() {//$('.tox.tox-tinymce').css('height','350px');
    },
    editorblue0: function editorblue0() {//if(tabstatus!==3)
      // $('.tox.tox-tinymce').css('height','150px');
    },
    edit_init_callback0: function edit_init_callback0() {
      $('.tox-statusbar').css('display', 'none');
    },
    upload_handler0: function upload_handler0(blobInfo, success, failure, progress) {
      if (pgperm.write != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
        return;
      }

      var xhr, formData;
      xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open('POST', 'admin.UpdateWWGBarCenterImg');

      xhr.upload.onprogress = function (e) {
        progress(e.loaded / e.total * 100);
      };

      xhr.onload = function () {
        var json;

        if (xhr.status < 200 || xhr.status >= 300) {
          failure('HTTP Error: ' + xhr.status);
          return;
        }

        json = JSON.parse(xhr.responseText);

        if (!json || typeof json.location != 'string') {
          failure('Invalid JSON: ' + xhr.responseText);
          return;
        } // $('#wwga_footbarleft_upload_preview_temp').val(json.filename);


        success(json.location);
      };

      xhr.onerror = function () {
        failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
      };

      formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());
      xhr.send(formData);
    },
    addEmailManageFailed_Btn: function addEmailManageFailed_Btn() {
      if (pgperm.create != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
        return;
      }

      is_edit = false;
      vueOBJ.TinyMCMcontent0 = '';
      $('#editcont0').val('');
      $('#emailmanage_edit_title').val('');
      initEmailManagerPage(1);
    },
    SaveEmailManageContent: function SaveEmailManageContent() {
      if (!is_edit) saveEmailManageFailedList();else editEmailManageFailedList();
    },
    GotoEmailManagelist: function GotoEmailManagelist() {
      initEmailManagerPage(0);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.tox.tox-tinymce{\n    border-radius: 20px;\n    width: 95% !important;\n    height: 300px;\n    min-height: 300px !important;\n    margin-left: 40px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersOrgGlobalEmailManageFailed.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=template&id=13c3173d&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=template&id=13c3173d& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticStyle: { width: "100%" } }, [
    _c("div", { staticStyle: { display: "none" } }, [
      _vm._v(_vm._s(_vm.contentchange))
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12", attrs: { id: "EmailManageAddLayout" } },
        [
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
                      return _vm.addEmailManageFailed_Btn($event)
                    }
                  }
                },
                [_c("span", [_vm._v(" " + _vm._s(_vm.cbtntxt_add) + " ")])]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12 page_roles_content_list active",
          attrs: { id: "applyapproval" }
        },
        [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              {
                staticClass: "col-md-4",
                staticStyle: { margin: "20px 0px 0px 10px" }
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
                        _c("th", [_vm._v(_vm._s(_vm.cpgtxt_title))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.cpgtxt_date))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.cpgtxt_sua_State))]),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticStyle: {
                              "text-align": "right",
                              "padding-right": "40px"
                            }
                          },
                          [_vm._v(_vm._s(_vm.cpgtxt_option))]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", { attrs: { id: "uo_emailnamge_tbody" } })
                  ]
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12 page_roles_content_list active",
          attrs: { id: "edit_emailmanage" }
        },
        [
          _c(
            "form",
            {
              attrs: {
                method: "post",
                enctype: "multipart/form-data",
                name: "emailmanage_frm",
                id: "emailmanage_frm"
              }
            },
            [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-md-4",
                    staticStyle: { margin: "20px 0px 0px 10px" }
                  },
                  [
                    _c("h6", { staticClass: "card-title m-b-20" }, [
                      _vm._v(_vm._s(_vm.cpgtxt_setting))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-12" }, [
                  _c("div", { staticClass: "d-flex" }, [
                    _c(
                      "div",
                      {
                        staticClass: "col-md-6 col-sm-6",
                        staticStyle: { "line-height": "40px", display: "flex" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "col-md-2 col-sm-2",
                            staticStyle: { "line-height": "40px" }
                          },
                          [_c("span", [_vm._v(_vm._s(_vm.cpgtxt_title))])]
                        ),
                        _vm._v(" "),
                        _vm._m(0)
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-6 col-sm-6",
                        staticStyle: { "line-height": "40px", display: "flex" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "col-md-3 col-sm-3",
                            staticStyle: { "line-height": "40px" }
                          },
                          [_c("span", [_vm._v(_vm._s(_vm.cpgtxt_keywords))])]
                        ),
                        _vm._v(" "),
                        _vm._m(1)
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "d-flex",
                      staticStyle: { margin: "2rem 0" }
                    },
                    [
                      _c("textarea", {
                        staticStyle: { display: "none" },
                        attrs: { name: "editcont0", id: "editcont0", value: "" }
                      }),
                      _vm._v(" "),
                      _c("editor0", {
                        attrs: {
                          "api-key":
                            "vozqdhfpn1ddjlq31cj4d788tvxdfyyv5sl208xskz86xqoh",
                          "cloud-channel": "5-dev",
                          init: {
                            id: "02",

                            plugins: [
                              "lists link image code table paste help wordcount "
                            ],
                            toolbar:
                              "undo redo | code table | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor | link image ",
                            images_upload_handler: _vm.upload_handler0,
                            init_instance_callback: _vm.edit_init_callback0
                          }
                        },
                        on: {
                          onClick: _vm.editorclick0,
                          onBlur: _vm.editorblue0
                        },
                        model: {
                          value: _vm.TinyMCMcontent0,
                          callback: function($$v) {
                            _vm.TinyMCMcontent0 = $$v
                          },
                          expression: "TinyMCMcontent0"
                        }
                      })
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "row justify-content-end",
                  staticStyle: { "padding-bottom": "1.5rem" }
                },
                [
                  _c("div", { staticClass: "col-md-4 col-sm-4 text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info-theme active savebtn",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.SaveEmailManageContent($event)
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.cbtntxt_savechange))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-2" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info-theme",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.GotoEmailManagelist($event)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.cbtntxt_cancel) +
                            "\n                        "
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
    ]),
    _vm._v(" "),
    _vm._m(2)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-9" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "text",
          id: "emailmanage_edit_title",
          name: "emailmanage_edit_title"
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
          id: "emailmanage_edit_keyword",
          name: "emailmanage_edit_keyword"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12", attrs: { id: "ssmu_page_nav" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue":
/*!**************************************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersOrgGlobalEmailManageFailed_vue_vue_type_template_id_13c3173d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersOrgGlobalEmailManageFailed.vue?vue&type=template&id=13c3173d& */ "./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=template&id=13c3173d&");
/* harmony import */ var _UsersOrgGlobalEmailManageFailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersOrgGlobalEmailManageFailed.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UsersOrgGlobalEmailManageFailed_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UsersOrgGlobalEmailManageFailed.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UsersOrgGlobalEmailManageFailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsersOrgGlobalEmailManageFailed_vue_vue_type_template_id_13c3173d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsersOrgGlobalEmailManageFailed_vue_vue_type_template_id_13c3173d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageFailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersOrgGlobalEmailManageFailed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageFailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageFailed_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersOrgGlobalEmailManageFailed.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageFailed_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageFailed_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageFailed_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageFailed_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageFailed_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=template&id=13c3173d&":
/*!*********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=template&id=13c3173d& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageFailed_vue_vue_type_template_id_13c3173d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersOrgGlobalEmailManageFailed.vue?vue&type=template&id=13c3173d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageFailed.vue?vue&type=template&id=13c3173d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageFailed_vue_vue_type_template_id_13c3173d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageFailed_vue_vue_type_template_id_13c3173d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
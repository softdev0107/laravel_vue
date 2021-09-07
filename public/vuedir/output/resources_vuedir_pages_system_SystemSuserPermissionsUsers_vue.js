"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vuedir_pages_system_SystemSuserPermissionsUsers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
/* harmony import */ var _assets_jsfunc_lang_module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/jsfunc/lang_module.js */ "./resources/vuedir/assets/jsfunc/lang_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var userid = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_2__.default.data.jsonparse(window.Laravel.userinfo).id;
var loginusermail = '';
var pstart = 1;
var pnum = pstart;
var pcnt = 5;
var numg = 5;
var secondlevelpermissions = [];
var currentid;
var group_user_ids = new Array();
var group_user_names = new Array();
var dialogSelectedId = -1;
var dialogSelectedName;
var btntxt_change;
var btntxt_delete;
var btntxt_edit;
var cpgtxt_department;
var btntxt_permissions;
var pgtxt_wantdeleteitem;
var pgtxt_name;
var checked_del_items = new Array();
var initial_permissions_list = new Array();
var vueOBJ = null;
var pgperm = {};

function getPermissionUserList() {
  checked_del_items = new Array();
  var type = $('#sum_user_role_sel').val();
  var subtype = $('#sum_user_role_content_sel').val();
  var search = $('#user_search_cont').val();
  var postData = {
    type: type,
    subtype: subtype,
    search: search,
    start: pstart,
    cnt: pcnt
  };
  axios__WEBPACK_IMPORTED_MODULE_1___default().post('admin.getSUPUUserInfoList', postData).then(function (response) {
    var status = response.data.status;

    if (status == "ok") {
      var total = response.data.total;

      if (total <= 0) {
        $('#supr_user_list').html('');
        $('#supr_page_nav').html('');
        return;
      }

      pstart = response.data.start;
      var totalpage = response.data.totalpage;
      var userlist = response.data.userlist;
      var tags = '';

      for (var i = 0; i < userlist.length; i++) {
        var user = userlist[i];
        var id = user.id;
        var name = user.name;
        var permission = user.permission;
        var readCount = 0;
        var writeCount = 0;
        var createCount = 0;
        var deleteCount = 0;

        if (permission != null && permission != '') {
          var permission_lists = JSON.parse(permission);

          for (var j = 0; j < permission_lists.length; j++) {
            var temp = permission_lists[j];

            if (temp.menu_id.split('-').length > 1) {
              if (parseInt(temp.read) == 1) readCount++;
              if (parseInt(temp.write) == 1) writeCount++;
              if (parseInt(temp.create) == 1) createCount++;
              if (parseInt(temp["delete"]) == 1) deleteCount++;
            }
          }
        }

        tags += '<tr role="row" class="odd">';
        tags += '<td>';
        tags += '<div class="form-check form-check-inline">';
        tags += '<input class="form-check-input" type="checkbox" id="oneCheckbox_' + user.id + '" value="">';
        tags += '</div>';
        tags += '</td>';
        tags += '<td>' + user.name + '</td>';
        tags += '<td>' + readCount + '</td>';
        tags += '<td>' + writeCount + '</td>';
        tags += '<td>' + createCount + '</td>';
        tags += '<td>' + deleteCount + '</td>';
        tags += '<td>';
        tags += '<div class="form-group m-b-0">';
        tags += '<select class="my-border-radius-slt form-control float-right" id="supuuser_table_status_' + user.id + '_' + user.name + '">';
        tags += '<option value="" class="data-ajax" data-ajax="btntxt_edit">' + btntxt_edit + '</option>';
        tags += '<option value="change" class="data-ajax" data-ajax="btntxt_change">' + btntxt_change + '</option>';
        tags += '<option value="delete" class="data-ajax" data-ajax="btntxt_delete">' + btntxt_delete + '</option>';
        tags += '</select>';
        tags += '</div>';
        tags += '</td>';
        tags += '</tr>';
      }

      $('#supr_user_list').html(tags);
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
      pnum = pstart <= numg ? 1 : parseInt(pstart) - 1;

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
      $('#supr_page_nav').html(nav_tag);
      /* events { */

      $('a[id^="ssmunavnum_"]').click(function () {
        var oid = $(this).attr("id");
        pstart = oid.split('_')[1];
        getPermissionUserList();
      });
      $("#supr_allCheckbox").prop('checked', false);
      $('input[id^="oneCheckbox_"]').change(function () {
        var id = $(this).attr("id");
        var del_id = id.split('_')[1];

        if ($(this).is(':checked')) {
          checked_del_items.push(del_id);
        } else {
          var _idx = checked_del_items.indexOf(del_id);

          if (_idx > -1) checked_del_items.splice(_idx, 1);
        }
      });
      $('select[id^="supuuser_table_status_"]').change(function () {
        var tid = $(this).attr("id");
        var t_id = tid.split("_")[3];
        var t_uname = tid.split('_')[4];
        var value = $(this).val();

        if (value == 'change') {
          if (pgperm.write == 1) {
            showEditPermissionPage();
            getUserPermissionData(t_id);
          } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('pgtxt_notpermission');
        } else if (value == 'delete') {
          if (pgperm["delete"] == 1) {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.Confirm('pgtxt_wantdeleteitem', function (val) {
              if (val) {
                deleteUserPermissions(t_id);
              }
            });
          } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('pgtxt_notpermission');
        }

        $(this).val('');
      });
    } else console.log('getSSMUUserList Error');
  })["catch"](function (error) {
    console.log(error);
  });
}

function selete_role_sel() {
  var tag = '<option value="0" class="data-ajax" data-ajax="pgtxt_name">' + pgtxt_name + '</option>';

  if ($('#sum_user_role_sel').val() == 0) {
    $('#sum_user_role_content_sel').html(tag);
  }

  $('select[id^="sum_user_role_sel"]').change(function () {
    var sel_val = $(this).val();

    if (sel_val == 0) {
      $('#sum_user_role_content_sel').html(tag);
      getPermissionUserList();
    } else {
      getSubRoleType();
    }
  });
  $('select[id^="sum_user_role_content_sel"]').change(function () {
    var sel_val = $(this).val();
    pstart = 1;
    getPermissionUserList();
  });
}

function getSubRoleType() {
  var type = $('#sum_user_role_sel').val();
  $('#sum_user_role_content_sel').html('');

  if (type != 0) {
    $.ajax({
      url: 'admin.getSUPUSubRoleType',
      data: {
        type: type,
        userid: userid
      },
      type: 'POST',
      async: false,
      success: function success(data) {
        if (data.msg === "ok") {
          var lists = data.lists;

          if (lists !== null && lists != "") {
            var otag = "";

            for (var i = 0; i < lists.length; i++) {
              otag += '<option value="' + lists[i].id + '">' + lists[i].name + '</option>';
            }

            $('#sum_user_role_content_sel').html(otag);
          }
        } else {
          console.log(data.msg);
        }
      },
      error: function error(jqXHR, errdata, errorThrown) {
        console.log(errdata);
      }
    });
  }
}

function getUserPermissionData(id) {
  //id: id of selected user
  currentid = id;
  $.ajax({
    url: 'admin.getSUPUserPermissionData',
    data: {
      id: id
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var name = data.name;
        var sub_title = btntxt_edit + ' ' + name + ' ' + btntxt_permissions;
        $('#supr_edit_permission_name_title').html(sub_title);

        if (data.lists != null && data.lists != '') {
          var _list = JSON.parse(data.lists);

          if (_list.length < initial_permissions_list.length) {
            for (var i = 0; i < initial_permissions_list.length; i++) {
              for (var j = 0; j < _list.length; j++) {
                if (_list[j].id == initial_permissions_list[i].id) {
                  initial_permissions_list[i] = _list[j];
                  break;
                }
              }
            }
          } else {
            var obj = _list[0];

            if (obj.id !== undefined && obj.id !== null && obj.id !== '') {
              initial_permissions_list = new Array();
              initial_permissions_list = _list;
            }
          }
        }

        setPermissionListMenu();
        changeEditUIStatus();
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function saveUserPermissionData() {
  //id: id of selected user
  var permissions_str = JSON.stringify(initial_permissions_list);
  $.ajax({
    url: 'admin.saveSUPUserPermissionData',
    data: {
      id: currentid,
      permissions: permissions_str
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        getPermissionUserList();
      } else {
        getPermissionUserList();
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function deleteUserPermissions(selectedId) {
  //id: id of selected user
  var permissions_str = JSON.stringify(clearPermissionValues());
  $.ajax({
    url: 'admin.saveSUPUserPermissionData',
    data: {
      id: selectedId,
      permissions: permissions_str
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        // myjs.data.showAlert("Delete success");
        getPermissionUserList();
      } else {
        getPermissionUserList(); // myjs.data.showAlert('Delete failed');
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function deleteSeveralUserPermissionData() {
  if (checked_del_items.length > 0) {
    var permissions_str = JSON.stringify(clearPermissionValues());
    $.ajax({
      url: 'admin.deleteSeveralSUPUserPermissionData',
      data: {
        permissions: permissions_str,
        ids: checked_del_items
      },
      type: 'POST',
      success: function success(data) {
        if (data.msg === "ok") {
          pstart = 1;
          getPermissionUserList();
        } else {
          pstart = 1;
          getPermissionUserList();
        }
      },
      error: function error(jqXHR, errdata, errorThrown) {
        console.log(errdata);
      }
    });
  }
}

function showUserListTable() {
  $('#ssu_management_roles_user').html('');
  var type = $('#dlg_sum_user_role_sel').val();
  var subtype = $('#dlg_sum_user_role_content_sel').val();
  var search = $('#dlg_user_search_cont').val();
  $.ajax({
    url: 'admin.getSUPUDialogUserInfoList',
    data: {
      type: type,
      subtype: subtype,
      search: search
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;

        if (lists !== null && lists != "") {
          user_list_func(lists);
        } else $('#ssu_management_roles_user').html('');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function user_list_func(lists) {
  var tags = '';

  for (var i = 0; i < lists.length; i++) {
    var is_checked = false;
    var id = lists[i].id;
    var name = lists[i].name;
    var department = lists[i].d_name;
    var position = lists[i].p_name;
    tags += '<tr class="sua_user_item-' + id + '" data-id="' + id + '" data-name="' + name + '">';
    tags += '<td>';
    tags += '<div class="form-check form-check-inline">';
    tags += '<input class="form-check-input" name="user-checkbox" type="checkbox" id="userCheckbox_' + id + '" value="' + name + '">';
    tags += '</div>';
    tags += '</td>';
    tags += '<td>' + name + '</td>';
    tags += '<td>' + department + '</td>';
    tags += '<td>' + position + '</td>';
    tags += '</tr>';
  }

  $('#ssu_management_roles_user').html(tags);
  $('input[id^="userCheckbox_"]').on('change', function () {
    var id = $(this).attr("id");
    var uid = id.split("_")[1];
    var user_name = $(this).val();

    if ($(this).is(':checked')) {
      dialogSelectedId = uid;
      dialogSelectedName = user_name;
    } else {
      dialogSelectedId = -1;
      dialogSelectedName = '';
    }

    $('input[name="' + this.name + '"]').not(this).prop('checked', false);
  });
}

function dlg_selete_role_sel() {
  var tag = '<option value="0" class="data-ajax" data-ajax="pgtxt_name">' + pgtxt_name + '</option>';

  if ($('#dlg_sum_user_role_sel').val() == 0) {
    $('#dlg_sum_user_role_content_sel').html(tag);
  }

  $('select[id^="dlg_sum_user_role_sel"]').change(function () {
    if (pgperm.read == 1) {
      var sel_val = $(this).val();

      if (sel_val == 0) {
        $('#dlg_sum_user_role_content_sel').html(tag);
        showUserListTable();
      } else {
        dlg_getSubRoleType();
      }
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('pgtxt_notpermission');
  });
  $('select[id^="dlg_sum_user_role_content_sel"]').change(function () {
    if (pgperm.read == 1) {
      var sel_val = $(this).val();
      showUserListTable();
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('pgtxt_notpermission');
  });
}

function dlg_getSubRoleType() {
  var type = $('#dlg_sum_user_role_sel').val();
  $('#dlg_sum_user_role_content_sel').html('');

  if (type != 0) {
    $.ajax({
      url: 'admin.getSUPUSubRoleType',
      data: {
        type: type,
        userid: userid
      },
      type: 'POST',
      async: false,
      success: function success(data) {
        if (data.msg === "ok") {
          var lists = data.lists;

          if (lists !== null && lists != "") {
            var otag = "";

            for (var i = 0; i < lists.length; i++) {
              otag += '<option value="' + lists[i].id + '">' + lists[i].name + '</option>';
            }

            $('#dlg_sum_user_role_content_sel').html(otag); // showUserListTable();
          }
        } else {
          console.log(data.msg);
        }
      },
      error: function error(jqXHR, errdata, errorThrown) {
        console.log(errdata);
      }
    });
  }
}

function showEditPermissionPage() {
  $('#supr_edit_page').css('display', 'block');
  $('#supr_main_page').css('display', 'none');
  $('#supr_edit_btn_container').css('display', 'block');
  $('#supr_edit_permission_list_container').css('display', 'none');
  $('div[id^="supr_permission_total_checkbox_"]').removeClass('active');
}

function showMainPage() {
  currentid = 0;
  $('#supr_edit_page').css('display', 'none');
  $('#supr_main_page').css('display', 'block');
  $('select[id^="supuuser_table_status_"]').val('');
}

function showEditPermissionList() {
  $('#supr_edit_btn_container').css('display', 'none');
  $('#supr_edit_permission_list_container').css('display', 'block');
} //use


function makeAllmenu(lists, plevel, pid) {
  for (var i = 0; i < lists.length; i++) {
    var obj = lists[i];
    var name = obj.menu;
    var level = plevel + 1;
    var id = 0;
    if (pid === 0) id = '' + (i + 1) + '';else id = pid + '-' + (i + 1);
    var p_id = '' + pid + '';
    var tran_key = obj.tk;
    var childcnt = obj.submenus.length;
    var have_page = childcnt > 0 ? 0 : 1;
    var rid = obj.id;
    var item = {
      menu_id: id,
      read: 0,
      write: 0,
      create: 0,
      "delete": 0,
      p_id: p_id,
      have_page: have_page,
      level: level,
      name: name,
      id: rid,
      tran_key: tran_key
    };
    initial_permissions_list.push(item);

    if (childcnt > 0) {
      makeAllmenu(obj.submenus, level, id);
    }
  } //level 1 for

}

function getAllMenuList() {
  initial_permissions_list = new Array();
  initial_permissions_list = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getDashboardMenuList();
  setPermissionListMenu();
} //use


function setPermissionListMenu() {
  $('#supr_edit_permissions_lists').html('');
  var tags = '';

  for (var i = 0; i < initial_permissions_list.length; i++) {
    var obj = initial_permissions_list[i];
    var id = obj.menu_id;
    var name = obj.name;
    var tk = obj.tran_key;
    var level = obj.level;
    var p_id = obj.p_id;
    var have_page = obj.have_page;

    if (parseInt(level) === 1) {
      tags += '<tr id="supr_edit_permission_row_' + id + '/' + have_page + '" style="display: table-row" class="table-row-collapsed" data-id="' + id + '" data-name="' + name + '">';
    } else {
      tags += '<tr id="supr_edit_permission_row_' + id + '/' + have_page + '" style="display: none;" class="table-row-expanded related_parent_id_' + p_id + '" data-id="' + id + '" data-name="' + name + '">';
    }

    tags += '<td>';
    tags += '<div class="form-check" style="line-height: 24px; padding-left: 0px;">';
    tags += '<div class="form-check-input rect-group content-type-checkbox" style="position: relative; margin: 0 auto;" id="supr_permission_total_checkbox_' + id + '">';
    tags += '<div></div>';
    tags += '</div>';
    tags += '</div>';
    tags += '</td>';
    tags += '<td style="text-align: left;" class="permission-name-left-' + level + ' data-ajax" data-ajax="' + tk + '">' + name;
    tags += '<span class="badge badge-round nav-link-notify permission-count-notice" id="supr_first_level_count_' + id + '"></span>';
    tags += '</td>';
    tags += '<td>';
    tags += '<div class="form-check sub-menu-arrow-container" style="cursor: pointer;line-height: 24px; padding-left: 0px;">';

    if (parseInt(have_page) === 0) {
      tags += '<i class="sub-menu-arrow fa fa-caret-down "  id="supr_permission_arrow_' + id + '"></i>';
    }

    tags += '</div>';
    tags += '</td>';
    tags += '<td>';
    tags += '<div class="form-check" style="line-height: 24px; padding-left: 0px;">';
    tags += '<div class="form-check-input rect-group content-type-checkbox" style="position: relative; margin: 0 auto;" id="supr_permission_read_checkbox_' + id + '">';
    tags += '<div></div>';
    tags += '</div>';
    tags += '</div>';
    tags += '</td>';
    tags += '<td>';
    tags += '<div class="form-check" style="line-height: 24px; padding-left: 0px;">';
    tags += '<div class="form-check-input rect-group content-type-checkbox" style="position: relative; margin: 0 auto;" id="supr_permission_write_checkbox_' + id + '">';
    tags += '<div></div>';
    tags += '</div>';
    tags += '</div>';
    tags += '</td>';
    tags += '<td>';
    tags += '<div class="form-check" style="line-height: 24px; padding-left: 0px;">';
    tags += '<div class="form-check-input rect-group content-type-checkbox" style="position: relative; margin: 0 auto;" id="supr_permission_create_checkbox_' + id + '">';
    tags += '<div></div>';
    tags += '</div>';
    tags += '</div>';
    tags += '</td>';
    tags += '<td>';
    tags += '<div class="form-check" style="line-height: 24px; padding-left: 0px;">';
    tags += '<div class="form-check-input rect-group content-type-checkbox" style="position: relative; margin: 0 auto;" id="supr_permission_delete_checkbox_' + id + '">';
    tags += '<div></div>';
    tags += '</div>';
    tags += '</div>';
    tags += '</td>';
    tags += '</tr>';
  }

  $('#supr_edit_permissions_lists').html(tags);
  $('div[id^="supr_permission_total_checkbox_"]').click(function () {
    var oid = $(this).attr("id");
    var menu_id = oid.split('_')[4];
    var setting_val = 0;

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
      setting_val = 1;
    }

    editPermissionValues(menu_id, 'total', setting_val);
    changeEditUIStatus();
  });
  $('div[id^="supr_permission_read_checkbox_"]').click(function () {
    var oid = $(this).attr("id");
    var menu_id = oid.split('_')[4];
    var setting_val = 0;

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
      setting_val = 1;
    }

    editPermissionValues(menu_id, 'read', setting_val);
    changeEditUIStatus();
  });
  $('div[id^="supr_permission_write_checkbox_"]').click(function () {
    var oid = $(this).attr("id");
    var menu_id = oid.split('_')[4];
    var setting_val = 0;

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
      setting_val = 1;
    }

    editPermissionValues(menu_id, 'write', setting_val);
    changeEditUIStatus();
  });
  $('div[id^="supr_permission_create_checkbox_"]').click(function () {
    var oid = $(this).attr("id");
    var menu_id = oid.split('_')[4];
    var setting_val = 0;

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
      setting_val = 1;
    }

    editPermissionValues(menu_id, 'create', setting_val);
    changeEditUIStatus();
  });
  $('div[id^="supr_permission_delete_checkbox_"]').click(function () {
    var oid = $(this).attr("id");
    var menu_id = oid.split('_')[4];
    var setting_val = 0;

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
      setting_val = 1;
    }

    editPermissionValues(menu_id, 'delete', setting_val);
    changeEditUIStatus();
  });
  $('div.sub-menu-arrow-container').click(function (event) {
    var i_element = $(this).children('i[id^="supr_permission_arrow_"]');
    var oid = $(i_element).attr("id");
    var id = oid.split('_')[3];

    if ($(i_element).hasClass('fa-caret-up')) {
      $(i_element).removeClass('fa-caret-up');
      $(i_element).addClass('fa-caret-down');
      $(i_element).closest('tr').removeClass('table-row-expanded');
      $(i_element).closest('tr').addClass('table-row-collapsed');
      collapseChildrenRows(id);
    } else {
      $(i_element).removeClass('fa-caret-down');
      $(i_element).addClass('fa-caret-up');
      $(i_element).closest('tr').removeClass('table-row-collapsed');
      $(i_element).closest('tr').addClass('table-row-expanded');
      expandChildrenRows(id);
    }
  });
}

function clearPermissionValues() {
  for (var j = 0; j < initial_permissions_list.length; j++) {
    initial_permissions_list[j].read = 0;
    initial_permissions_list[j].write = 0;
    initial_permissions_list[j].create = 0;
    initial_permissions_list[j]["delete"] = 0;
  }

  return initial_permissions_list;
} //use


function editPermissionValues(menu_id, who, value) {
  if (who === 'total') {
    for (var j = 0; j < initial_permissions_list.length; j++) {
      if (menu_id == initial_permissions_list[j].menu_id) {
        initial_permissions_list[j].read = value;
        initial_permissions_list[j].write = value;
        initial_permissions_list[j].create = value;
        initial_permissions_list[j]["delete"] = value;
      }

      if (menu_id == initial_permissions_list[j].p_id && menu_id != initial_permissions_list[j].menu_id) {
        var child_id = initial_permissions_list[j].menu_id;
        editPermissionValues(child_id, who, value);
      }
    }
  } else if (who === 'read') {
    for (var j = 0; j < initial_permissions_list.length; j++) {
      if (menu_id == initial_permissions_list[j].menu_id) {
        initial_permissions_list[j].read = value;
      }

      if (menu_id == initial_permissions_list[j].p_id && menu_id != initial_permissions_list[j].menu_id) {
        var child_id = initial_permissions_list[j].menu_id;
        editPermissionValues(child_id, who, value);
      }
    }
  } else if (who === 'write') {
    for (var j = 0; j < initial_permissions_list.length; j++) {
      if (menu_id == initial_permissions_list[j].menu_id) {
        initial_permissions_list[j].write = value;
      }

      if (menu_id == initial_permissions_list[j].p_id && menu_id != initial_permissions_list[j].menu_id) {
        var child_id = initial_permissions_list[j].menu_id;
        editPermissionValues(child_id, who, value);
      }
    }
  } else if (who === 'create') {
    for (var j = 0; j < initial_permissions_list.length; j++) {
      if (menu_id == initial_permissions_list[j].menu_id) {
        initial_permissions_list[j].create = value;
      }

      if (menu_id == initial_permissions_list[j].p_id && menu_id != initial_permissions_list[j].menu_id) {
        var child_id = initial_permissions_list[j].menu_id;
        editPermissionValues(child_id, who, value);
      }
    }
  } else if (who === 'delete') {
    for (var j = 0; j < initial_permissions_list.length; j++) {
      if (menu_id == initial_permissions_list[j].menu_id) {
        initial_permissions_list[j]["delete"] = value;
      }

      if (menu_id == initial_permissions_list[j].p_id && menu_id != initial_permissions_list[j].menu_id) {
        var child_id = initial_permissions_list[j].menu_id;
        editPermissionValues(child_id, who, value);
      }
    }
  }
}

function changeEditUIStatus() {
  showCheckBoxesStatus();
  showFirstLevelNumbers();
  showTopAreaStatus();
}

function showCheckBoxesStatus() {
  for (var j = 0; j < initial_permissions_list.length; j++) {
    var p_info = initial_permissions_list[j];
    var id = p_info.menu_id;
    var read_val = p_info.read;
    var write_val = p_info.write;
    var create_val = p_info.create;
    var delete_val = p_info["delete"];
    var read_id_string = 'supr_permission_read_checkbox_' + id;
    var write_id_string = 'supr_permission_write_checkbox_' + id;
    var create_id_string = 'supr_permission_create_checkbox_' + id;
    var delete_id_string = 'supr_permission_delete_checkbox_' + id;
    var total_id_string = 'supr_permission_total_checkbox_' + id;
    var top_column_id = '';
    if (id.split('-').length > 0) top_column_id = id.split('-')[0];
    var row_total_cnt = 0;

    if (parseInt(read_val) === 0) {
      $('#' + read_id_string).removeClass('active');
      if (top_column_id !== '') $('#supr_permission_read_checkbox_' + top_column_id).removeClass('active');
    } else if (parseInt(read_val) === 1) {
      $('#' + read_id_string).addClass('active');
      row_total_cnt++;
    }

    if (parseInt(write_val) === 0) {
      $('#' + write_id_string).removeClass('active');
      if (top_column_id !== '') $('#supr_permission_write_checkbox_' + top_column_id).removeClass('active');
    } else if (parseInt(write_val) === 1) {
      $('#' + write_id_string).addClass('active');
      row_total_cnt++;
    }

    if (parseInt(create_val) === 0) {
      $('#' + create_id_string).removeClass('active');
      if (top_column_id !== '') $('#supr_permission_create_checkbox_' + top_column_id).removeClass('active');
    } else if (parseInt(create_val) === 1) {
      $('#' + create_id_string).addClass('active');
      row_total_cnt++;
    }

    if (parseInt(delete_val) === 0) {
      $('#' + delete_id_string).removeClass('active');
      if (top_column_id !== '') $('#supr_permission_delete_checkbox_' + top_column_id).removeClass('active');
    } else if (parseInt(delete_val) === 1) {
      $('#' + delete_id_string).addClass('active');
      row_total_cnt++;
    }

    if (row_total_cnt === 4) $('#' + total_id_string).addClass('active');else {
      $('#' + total_id_string).removeClass('active'); //row total

      if (top_column_id !== '') {
        $('#supr_permission_total_checkbox_' + top_column_id).removeClass('active'); //top_column
      }
    }
  }
}

function showFirstLevelNumbers() {
  for (var j = 0; j < initial_permissions_list.length; j++) {
    var p_info = initial_permissions_list[j];
    var id = p_info.menu_id;
    var level = p_info.level;

    if (parseInt(level) == 1) {
      var permission_count = 0;

      for (var i = 0; i < initial_permissions_list.length; i++) {
        var temp = initial_permissions_list[i];

        if (temp.p_id.split('-').length > 0 && temp.p_id.split('-')[0] === id) {
          var read_val = temp.read;
          var write_val = temp.write;
          var create_val = temp.create;
          var delete_val = temp["delete"];
          if (parseInt(read_val) == 1) permission_count++;
          if (parseInt(write_val) == 1) permission_count++;
          if (parseInt(create_val) == 1) permission_count++;
          if (parseInt(delete_val) == 1) permission_count++;
        }

        var count_id_string = 'supr_first_level_count_' + id;

        if (permission_count > 0) {
          $('#' + count_id_string).html(permission_count);
        } else {
          $('#' + count_id_string).html('');
        }
      }
    }
  }
}

function showTopAreaStatus() {
  var first_level_id = 0;
  var start_index = 0;
  var end_index = 0;
  $('#edit_permission_top_read_container').html('');
  $('#edit_permission_top_write_container').html('');
  $('#edit_permission_top_create_container').html('');
  $('#edit_permission_top_delete_container').html('');
  var read_tags = '';
  var write_tags = '';
  var create_tags = '';
  var delete_tags = '';

  for (var i = 0; i < initial_permissions_list.length + 1; i++) {
    if (i == initial_permissions_list.length) {
      read_tags += getReadTagString(first_level_id, start_index, end_index);
      write_tags += getWriteTagString(first_level_id, start_index, end_index);
      create_tags += getCreateTagString(first_level_id, start_index, end_index);
      delete_tags += getDeleteTagString(first_level_id, start_index, end_index);
    } else {
      var p_info = initial_permissions_list[i];
      var id = p_info.menu_id;
      var level = p_info.level;

      if (parseInt(level) === 1) {
        if (start_index < end_index) {
          read_tags += getReadTagString(first_level_id, start_index, end_index);
          write_tags += getWriteTagString(first_level_id, start_index, end_index);
          create_tags += getCreateTagString(first_level_id, start_index, end_index);
          delete_tags += getDeleteTagString(first_level_id, start_index, end_index);
        }

        first_level_id = id;
        start_index = i;
      } else {
        end_index = i;
      }
    }
  }

  $('#edit_permission_top_read_container').html(read_tags);
  $('#edit_permission_top_write_container').html(write_tags);
  $('#edit_permission_top_create_container').html(create_tags);
  $('#edit_permission_top_delete_container').html(delete_tags);
  $('button[id^=supr_read_first_level_delete_]').click(function () {
    var idstring = $(this).attr("id");
    var menu_id = idstring.split('_')[5];
    var setting_val = 0;
    editPermissionValues(menu_id, 'read', setting_val);
    changeEditUIStatus();
  });
  $('button[id^=supr_read_second_level_delete_]').click(function () {
    var idstring = $(this).attr("id");
    var menu_id = idstring.split('_')[5];
    var setting_val = 0;
    editPermissionValues(menu_id, 'read', setting_val);
    changeEditUIStatus();
  });
  $('button[id^=supr_write_first_level_delete_]').click(function () {
    var idstring = $(this).attr("id");
    var menu_id = idstring.split('_')[5];
    var setting_val = 0;
    editPermissionValues(menu_id, 'write', setting_val);
    changeEditUIStatus();
  });
  $('button[id^=supr_write_second_level_delete_]').click(function () {
    var idstring = $(this).attr("id");
    var menu_id = idstring.split('_')[5];
    var setting_val = 0;
    editPermissionValues(menu_id, 'write', setting_val);
    changeEditUIStatus();
  });
  $('button[id^=supr_create_first_level_delete_]').click(function () {
    var idstring = $(this).attr("id");
    var menu_id = idstring.split('_')[5];
    var setting_val = 0;
    editPermissionValues(menu_id, 'create', setting_val);
    changeEditUIStatus();
  });
  $('button[id^=supr_create_second_level_delete_]').click(function () {
    var idstring = $(this).attr("id");
    var menu_id = idstring.split('_')[5];
    var setting_val = 0;
    editPermissionValues(menu_id, 'create', setting_val);
    changeEditUIStatus();
  });
  $('button[id^=supr_delete_first_level_delete_]').click(function () {
    var idstring = $(this).attr("id");
    var menu_id = idstring.split('_')[5];
    var setting_val = 0;
    editPermissionValues(menu_id, 'delete', setting_val);
    changeEditUIStatus();
  });
  $('button[id^=supr_delete_second_level_delete_]').click(function () {
    var idstring = $(this).attr("id");
    var menu_id = idstring.split('_')[5];
    var setting_val = 0;
    editPermissionValues(menu_id, 'delete', setting_val);
    changeEditUIStatus();
  });
}

function getReadTagString(first_level_id, start_index, end_index) {
  var read_count = 0;
  var read_tags = '';

  for (var i = start_index; i < end_index + 1; i++) {
    var p_info = initial_permissions_list[i];
    var p_id = p_info.p_id;
    var level = p_info.level;

    if (parseInt(level) != 1) {
      if (parseInt(p_info.read) === 1) read_count++;
    }
  }

  if (read_count > 0) {
    for (var j = start_index; j < end_index + 1; j++) {
      if (j == start_index) {
        var p_info = initial_permissions_list[j];
        var id = p_info.menu_id;
        var level = p_info.level;
        var name = p_info.name;
        var tk = p_info.tran_key;
        read_tags += '<div class="col-md-12" style="padding-left: 50px; padding-right: 0px;">';
        read_tags += '<div class="col-md-12 role-row-permission-box" >';
        read_tags += '<div class="col-md-2 role-first-level-permission-text" id="supr_read_first_level_permission_' + first_level_id + '">';
        read_tags += '<div class="data-ajax" data-ajax="' + tk + '">' + name + '</div>';
        read_tags += '<div style="height: 20px; padding-left: 5px;">';
        read_tags += '<button type="button" class="close" id="supr_read_first_level_delete_' + first_level_id + '">&times;</button>';
        read_tags += '</div>';
        read_tags += '</div>';
        read_tags += '<div class="col-md-10 role-second-level-permission-box d-flex flex-wrap">';
      } else {
        var p_info = initial_permissions_list[j];
        var id = p_info.menu_id;
        var read_val = p_info.read;
        var name = p_info.name;
        var tk = p_info.tran_key;

        if (parseInt(read_val) == 1) {
          read_tags += '<div class=" role-permission-box" id="supr_read_second_level_permission_"' + id + '>';
          read_tags += '<div class="page1_content_content_title role-permission-text data-ajax" data-ajax="' + tk + '">' + name + '</div>';
          read_tags += '<div style="height: 20px; ">';
          read_tags += '<button type="button" class="close" id="supr_read_second_level_delete_' + id + '">&times;</button>';
          read_tags += '</div>';
          read_tags += '</div>';
        }
      }
    }

    read_tags += '</div>';
    read_tags += '</div>';
    read_tags += '</div>';
  }

  return read_tags;
}

function getWriteTagString(first_level_id, start_index, end_index) {
  var write_count = 0;
  var write_tags = '';

  for (var i = start_index; i < end_index + 1; i++) {
    var p_info = initial_permissions_list[i];
    var p_id = p_info.p_id;

    if (parseInt(p_id) !== 0) {
      if (parseInt(p_info.write) === 1) write_count++;
    }
  }

  if (write_count > 0) {
    for (var j = start_index; j < end_index + 1; j++) {
      if (j == start_index) {
        var p_info = initial_permissions_list[j];
        var id = p_info.menu_id;
        var level = p_info.level;
        var name = p_info.name;
        var tk = p_info.tran_key;
        write_tags += '<div class="col-md-12" style="padding-left: 50px; padding-right: 0px;">';
        write_tags += '<div class="col-md-12 role-row-permission-box" >';
        write_tags += '<div class="col-md-2 role-first-level-permission-text" id="supr_write_first_level_permission_' + first_level_id + '">';
        write_tags += '<div class="data-ajax" data-ajax="' + tk + '">' + name + '</div>';
        write_tags += '<div style="height: 20px; padding-left: 5px;">';
        write_tags += '<button type="button" class="close" id="supr_write_first_level_delete_' + first_level_id + '">&times;</button>';
        write_tags += '</div>';
        write_tags += '</div>';
        write_tags += '<div class="col-md-10 role-second-level-permission-box d-flex flex-wrap">';
      } else {
        var p_info = initial_permissions_list[j];
        var id = p_info.menu_id;
        var write_val = p_info.write;
        var name = p_info.name;
        var tk = p_info.tran_key;

        if (parseInt(write_val) === 1) {
          write_tags += '<div class=" role-permission-box" id="supr_write_second_level_permission_"' + id + '>';
          write_tags += '<div class="page1_content_content_title role-permission-text data-ajax" data-ajax="' + tk + '">' + name + '</div>';
          write_tags += '<div style="height: 20px; ">';
          write_tags += '<button type="button" class="close" id="supr_write_second_level_delete_' + id + '">&times;</button>';
          write_tags += '</div>';
          write_tags += '</div>';
        }
      }
    }

    write_tags += '</div>';
    write_tags += '</div>';
    write_tags += '</div>';
  }

  return write_tags;
}

function getCreateTagString(first_level_id, start_index, end_index) {
  var create_count = 0;
  var create_tags = '';

  for (var i = start_index; i < end_index + 1; i++) {
    var p_info = initial_permissions_list[i];
    var p_id = p_info.p_id;

    if (parseInt(p_id) !== 0) {
      if (parseInt(p_info.create) === 1) create_count++;
    }
  }

  if (create_count > 0) {
    for (var j = start_index; j < end_index + 1; j++) {
      if (j == start_index) {
        var _p_info = initial_permissions_list[j];
        var id = _p_info.menu_id;
        var level = _p_info.level;
        var name = _p_info.name;
        var tk = _p_info.tran_key;
        create_tags += '<div class="col-md-12" style="padding-left: 50px; padding-right: 0px;">';
        create_tags += '<div class="col-md-12 role-row-permission-box" >';
        create_tags += '<div class="col-md-2 role-first-level-permission-text" id="supr_create_first_level_permission_' + first_level_id + '">';
        create_tags += '<div class="data-ajax" data-ajax="' + tk + '">' + name + '</div>';
        create_tags += '<div style="height: 20px; padding-left: 5px;">';
        create_tags += '<button type="button" class="close" id="supr_create_first_level_delete_' + first_level_id + '">&times;</button>';
        create_tags += '</div>';
        create_tags += '</div>';
        create_tags += '<div class="col-md-10 role-second-level-permission-box d-flex flex-wrap">';
      } else {
        var _p_info2 = initial_permissions_list[j];
        var _id = _p_info2.menu_id;
        var create_val = _p_info2.create;
        var _name = _p_info2.name;
        var tk = _p_info2.tran_key;

        if (parseInt(create_val) === 1) {
          create_tags += '<div class=" role-permission-box" id="supr_create_second_level_permission_"' + _id + '>';
          create_tags += '<div class="page1_content_content_title role-permission-text data-ajax" data-ajax="' + tk + '">' + _name + '</div>';
          create_tags += '<div style="height: 20px; ">';
          create_tags += '<button type="button" class="close" id="supr_create_second_level_delete_' + _id + '">&times;</button>';
          create_tags += '</div>';
          create_tags += '</div>';
        }
      }
    }

    create_tags += '</div>';
    create_tags += '</div>';
    create_tags += '</div>';
  }

  return create_tags;
}

function getDeleteTagString(first_level_id, start_index, end_index) {
  var delete_count = 0;
  var delete_tags = '';

  for (var i = start_index; i < end_index + 1; i++) {
    var p_info = initial_permissions_list[i];
    var p_id = p_info.p_id;

    if (parseInt(p_id) !== 0) {
      if (parseInt(p_info["delete"]) === 1) delete_count++;
    }
  }

  if (delete_count > 0) {
    for (var j = start_index; j < end_index + 1; j++) {
      if (j == start_index) {
        var _p_info3 = initial_permissions_list[j];
        var id = _p_info3.menu_id;
        var level = _p_info3.level;
        var name = _p_info3.name;
        var tk = _p_info3.tran_key;
        delete_tags += '<div class="col-md-12" style="padding-left: 50px; padding-right: 0px;">';
        delete_tags += '<div class="col-md-12 role-row-permission-box" >';
        delete_tags += '<div class="col-md-2 role-first-level-permission-text" id="supr_delete_first_level_permission_' + first_level_id + '">';
        delete_tags += '<div class="data-ajax" data-ajax="' + tk + '">' + name + '</div>';
        delete_tags += '<div style="height: 20px; padding-left: 5px;">';
        delete_tags += '<button type="button" class="close" id="supr_delete_first_level_delete_' + first_level_id + '">&times;</button>';
        delete_tags += '</div>';
        delete_tags += '</div>';
        delete_tags += '<div class="col-md-10 role-second-level-permission-box d-flex flex-wrap">';
      } else {
        var _p_info4 = initial_permissions_list[j];
        var _id2 = _p_info4.menu_id;
        var delete_val = _p_info4["delete"];
        var _name2 = _p_info4.name;
        var tk = _p_info4.tran_key;

        if (parseInt(delete_val) === 1) {
          delete_tags += '<div class=" role-permission-box" id="supr_delete_second_level_permission_"' + _id2 + '>';
          delete_tags += '<div class="page1_content_content_title role-permission-text">' + _name2 + '</div>';
          delete_tags += '<div style="height: 20px; ">';
          delete_tags += '<button type="button" class="close" id="supr_delete_second_level_delete_' + _id2 + '">&times;</button>';
          delete_tags += '</div>';
          delete_tags += '</div>';
        }
      }
    }

    delete_tags += '</div>';
    delete_tags += '</div>';
    delete_tags += '</div>';
  }

  return delete_tags;
}

function expandChildrenRows(id) {
  var relatedClassName = 'related_parent_id_' + id;
  $('.' + relatedClassName).css('display', 'table-row');
  $('.' + relatedClassName).each(function () {
    var id_string = $(this).attr('id');
    var id_hpage = id_string.split('_')[4];
    var t_id = id_hpage.split('/')[0];
    var t_have_page = id_string.split('/')[1];
    $(this).removeClass('table-row-expanded');
    $(this).addClass('table-row-collapsed');

    if (t_have_page == '0') {
      var i_id = 'supr_permission_arrow_' + t_id;
      $('#' + i_id).addClass('fa-caret-down');
      $('#' + i_id).removeClass('fa-caret-up');
    }
  });
}

function collapseChildrenRows(id) {
  var relatedClassName = 'related_parent_id_' + id;
  $('.' + relatedClassName).css('display', 'none');
  $('.' + relatedClassName).each(function () {
    var id_string = $(this).attr('id');
    var id_hpage = id_string.split('_')[4];
    var t_id = id_hpage.split('/')[0];
    var t_have_page = id_string.split('/')[1];

    if (t_have_page == '0') {
      collapseChildrenRows(t_id);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SystemSuserPermissionsUsers",
  data: function data() {
    return {
      pageid: 'system-esuser-permissions-users-fav',
      musususu_system_suser_permissions_user: '',
      pgtxt_suserlist: '',
      pgctl_actions: '',
      pgtxt_name: '',
      pgtxt_create: '',
      pgtxt_read: '',
      pgtxt_write: '',
      pgtxt_list: '',
      pgtxt_username: '',
      pgtxt_email: '',
      pgtxt_position: '',
      pgtxt_status: '',
      pgtxt_operation: '',
      btntxt_adduser: '',
      pgtxt_all: '',
      musu_dash_analy: '',
      musu_dash_stud: '',
      musu_dash_user: '',
      musu_apps_website: '',
      musu_apps_ecomm: '',
      musu_apps_work: '',
      musu_users_org: '',
      musu_users_ind: '',
      musu_webs_wesglobal: '',
      musu_webs_waauptaiwan: '',
      musu_webs_waaupstore: '',
      musu_webs_waaupwaw: '',
      musu_webs_waaupmagazine: '',
      musu_webs_waauptravel: '',
      musu_webs_waaupmember: '',
      musu_others_emailtemp: '',
      musu_others_mulevel: '',
      musu_system_set: '',
      musu_system_theme: '',
      musu_system_bsuser: '',
      musususu_system_suser_permissions_role: '',
      musususu_system_suser_manage_perm: '',
      btntxt_permissions: '',
      btntxt_edit: '',
      btntxt_delete: '',
      btntxt_save: '',
      btntxt_cancel: '',
      btntxt_search: '',
      btntxt_change: '',
      pgtxt_group: '',
      btntxt_add: '',
      pgtxt_department: '',
      pgtxt_wantdeleteitem: '',
      mu_system: '',
      mu_dash: '',
      mu_apps: '',
      mu_users: '',
      mu_webs: '',
      mu_others: '',
      pgtxt_notpermission: '',
      pgtxt_notification: ''
    };
  },
  computed: {
    // 계산된 getter
    title: function title() {
      return this.$store.state.curMenu;
    },
    cmu_system: function cmu_system() {
      return this.mu_system;
    },
    cmusu_system_bsuser: function cmusu_system_bsuser() {
      return this.musu_system_bsuser;
    },
    cmu_dash: function cmu_dash() {
      return this.mu_dash;
    },
    cmusususu_system_suser_permissions_user: function cmusususu_system_suser_permissions_user() {
      return this.musususu_system_suser_permissions_user;
    },
    cmusususu_system_suser_manage_perm: function cmusususu_system_suser_manage_perm() {
      return this.musususu_system_suser_manage_perm;
    },
    cpgctl_actions: function cpgctl_actions() {
      return this.pgctl_actions;
    },
    cbtntxt_adduser: function cbtntxt_adduser() {
      return this.btntxt_adduser;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
    },
    cpgtxt_username: function cpgtxt_username() {
      return this.pgtxt_username;
    },
    cpgtxt_email: function cpgtxt_email() {
      return this.pgtxt_email;
    },
    cpgtxt_status: function cpgtxt_status() {
      return this.pgtxt_status;
    },
    cpgtxt_operation: function cpgtxt_operation() {
      return this.pgtxt_operation;
    },
    cpgtxt_suserlist: function cpgtxt_suserlist() {
      return this.pgtxt_suserlist;
    },
    cpgtxt_all: function cpgtxt_all() {
      return this.pgtxt_all;
    },
    cmu_apps: function cmu_apps() {
      return this.mu_apps;
    },
    cmu_users: function cmu_users() {
      return this.mu_users;
    },
    cmu_webs: function cmu_webs() {
      return this.mu_webs;
    },
    cmu_others: function cmu_others() {
      return this.mu_others;
    },
    cmusu_dash_analy: function cmusu_dash_analy() {
      return this.musu_dash_analy;
    },
    cmusu_dash_stud: function cmusu_dash_stud() {
      return this.musu_dash_stud;
    },
    cmusu_dash_user: function cmusu_dash_user() {
      return this.musu_dash_user;
    },
    cmusu_apps_website: function cmusu_apps_website() {
      return this.musu_apps_website;
    },
    cmusu_apps_ecomm: function cmusu_apps_ecomm() {
      return this.musu_apps_ecomm;
    },
    cmusu_apps_work: function cmusu_apps_work() {
      return this.musu_apps_work;
    },
    cmusu_users_org: function cmusu_users_org() {
      return this.musu_users_org;
    },
    cmusu_users_ind: function cmusu_users_ind() {
      return this.musu_users_ind;
    },
    cmusu_webs_wesglobal: function cmusu_webs_wesglobal() {
      return this.musu_webs_wesglobal;
    },
    cmusu_webs_waauptaiwan: function cmusu_webs_waauptaiwan() {
      return this.musu_webs_waauptaiwan;
    },
    cmusu_webs_waaupstore: function cmusu_webs_waaupstore() {
      return this.musu_webs_waaupstore;
    },
    cmusu_webs_waaupwaw: function cmusu_webs_waaupwaw() {
      return this.musu_webs_waaupwaw;
    },
    cmusu_webs_waaupmagazine: function cmusu_webs_waaupmagazine() {
      return this.musu_webs_waaupmagazine;
    },
    cmusu_webs_waauptravel: function cmusu_webs_waauptravel() {
      return this.musu_webs_waauptravel;
    },
    cmusu_webs_waaupmember: function cmusu_webs_waaupmember() {
      return this.musu_webs_waaupmember;
    },
    cmusu_others_emailtemp: function cmusu_others_emailtemp() {
      return this.musu_others_emailtemp;
    },
    cmusu_others_mulevel: function cmusu_others_mulevel() {
      return this.musu_others_mulevel;
    },
    cmusu_system_set: function cmusu_system_set() {
      return this.musu_system_set;
    },
    cmusu_system_theme: function cmusu_system_theme() {
      return this.musu_system_theme;
    },
    cmusususu_system_suser_permissions_role: function cmusususu_system_suser_permissions_role() {
      return this.musususu_system_suser_permissions_role;
    },
    cbtntxt_permissions: function cbtntxt_permissions() {
      return this.btntxt_permissions;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_delete: function cbtntxt_delete() {
      return this.btntxt_delete;
    },
    cbtntxt_save: function cbtntxt_save() {
      return this.btntxt_save;
    },
    cbtntxt_cancel: function cbtntxt_cancel() {
      return this.btntxt_cancel;
    },
    cbtntxt_search: function cbtntxt_search() {
      return this.btntxt_search;
    },
    cbtntxt_change: function cbtntxt_change() {
      return this.btntxt_change;
    },
    cpgtxt_department: function cpgtxt_department() {
      return this.pgtxt_department;
    },
    cpgtxt_position: function cpgtxt_position() {
      return this.pgtxt_position;
    },
    cpgtxt_group: function cpgtxt_group() {
      return this.pgtxt_group;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cpgtxt_create: function cpgtxt_create() {
      return this.pgtxt_create;
    },
    cpgtxt_read: function cpgtxt_read() {
      return this.pgtxt_read;
    },
    cpgtxt_write: function cpgtxt_write() {
      return this.pgtxt_write;
    },
    cpgtxt_list: function cpgtxt_list() {
      return this.pgtxt_list;
    },
    cpgtxt_notpermission: function cpgtxt_notpermission() {
      return this.pgtxt_notpermission;
    },
    cpgtxt_notification: function cpgtxt_notification() {
      return this.pgtxt_notification;
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
    loginusermail = this.$store.state.userinfo.email;
    /* fav part*/

    vueOBJ = this;
    pgperm = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getPagePermission(this.$store.state.permission, this.pageid);
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    btntxt_change = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
    btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
    btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
    cpgtxt_department = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_department');
    btntxt_permissions = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_permissions');
    pgtxt_wantdeleteitem = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_wantdeleteitem');
    pgtxt_name = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_name');
    this.initPage();
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

    /*fav part*/
    initPage: function initPage() {
      getPermissionUserList();
      selete_role_sel();
      dlg_selete_role_sel();
      getAllMenuList();
      $('#ssmuser_table_btn').click(function () {//showPermisionDialogNonUser();
      });
      $('#supr_edit_save_btn').click(function () {
        saveUserPermissionData();
        showMainPage();
      });
      $('#supr_edit_cancel_btn').click(function () {
        showMainPage();
      });
      $('#supr_edit_edit_btn').click(function () {
        showEditPermissionList();
      });
      $('.supr_selected_all_delete').click(function () {
        if (pgperm["delete"] == 1) {
          deleteSeveralUserPermissionData();
        } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('pgtxt_notpermission');
      });
    },
    role_userSearchBtn: function role_userSearchBtn() {
      pstart = 1;
      getPermissionUserList();
    },
    dlg_role_userSearchBtn: function dlg_role_userSearchBtn() {
      showUserListTable();
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.role-permission-text{\n    height: 20px;\n    font-size: 13px;\n    line-height: 20px;\n    border-bottom: 0px;\n    padding-left: 10px;\n    padding-right: 5px;\n}\n.role-permission-box{\n    padding-left: 0px;\n    padding-right: 0px;\n    height: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.role-first-level-permission-text{\n    font-size: 13px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.role-second-level-permission-box{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding-left: 0px;\n    padding-right: 0px;\n}\n.role-row-permission-box{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding-left: 0px;\n    padding-right: 0px;\n}\n.menu-permission-button{\n    width: 100px;\n    margin-bottom: 5px;\n}\n.permission-count-notice{\n    height: 15px;\n    padding-top: 4px !important;\n    top: 8px !important;\n    margin-left: 30px;\n    text-align: center;\n    background: #5c6bc0;\n    color: white;\n}\n.form-check-input.rect-group{\n    width: 16px;height: 16px; border: 1px solid #bbbbbb;\n    cursor: pointer;\n}\n.form-check-input.rect-group > div{\n    width: 10px; height: 10px;\n    position: absolute;\n    left: 2px;top: 2px;\n    background-color: #e4e6e8;\n}\n.form-check-input.rect-group.active > div{\n    width: 10px; height: 10px;\n    position: absolute;\n    left: 2px;top: 2px;\n    background-color: #0075ff;\n}\n.edit-button-size {\n    width: 120px;\n}\n.user-name-text {\n    font-size: 17px;\n    padding-left: 14px;\n    padding-right: 50px;\n    padding-top: 5px;\n    width: 150px;\n}\n.permission-name-left-1{\n    padding-left: 10px !important;\n}\n.permission-name-left-2{\n    padding-left: 40px !important;\n}\n.permission-name-left-3{\n    padding-left: 70px !important;\n}\n.permission-name-left-4{\n    padding-left: 100px !important;\n}\n.permission-name-left-5{\n    padding-left: 130px !important;\n}\n.permission-name-left-6{\n    padding-left: 160px !important;\n}\n.table-row-expanded{\n    background: #f2f3f5;\n}\n.table-row-collapsed{\n    background: white;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserPermissionsUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemSuserPermissionsUsers.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserPermissionsUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserPermissionsUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue":
/*!***********************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SystemSuserPermissionsUsers_vue_vue_type_template_id_7709663e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemSuserPermissionsUsers.vue?vue&type=template&id=7709663e& */ "./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=template&id=7709663e&");
/* harmony import */ var _SystemSuserPermissionsUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemSuserPermissionsUsers.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=script&lang=js&");
/* harmony import */ var _SystemSuserPermissionsUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SystemSuserPermissionsUsers.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _SystemSuserPermissionsUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SystemSuserPermissionsUsers_vue_vue_type_template_id_7709663e___WEBPACK_IMPORTED_MODULE_0__.render,
  _SystemSuserPermissionsUsers_vue_vue_type_template_id_7709663e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserPermissionsUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemSuserPermissionsUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserPermissionsUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserPermissionsUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemSuserPermissionsUsers.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=style&index=0&lang=css&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserPermissionsUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=template&id=7709663e&":
/*!******************************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=template&id=7709663e& ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserPermissionsUsers_vue_vue_type_template_id_7709663e___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserPermissionsUsers_vue_vue_type_template_id_7709663e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserPermissionsUsers_vue_vue_type_template_id_7709663e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemSuserPermissionsUsers.vue?vue&type=template&id=7709663e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=template&id=7709663e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=template&id=7709663e&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSuserPermissionsUsers.vue?vue&type=template&id=7709663e& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "content" }, [
    _c("div", { staticStyle: { display: "none" } }, [
      _vm._v(_vm._s(_vm.contentchange))
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "page-header" }, [
      _c("div", { staticClass: "page-title" }, [
        _c("h3", [_vm._v(_vm._s(_vm.cmusususu_system_suser_permissions_user))]),
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
              _vm._s(_vm.cmu_system) +
              "  >>  " +
              _vm._s(_vm.cmusu_system_bsuser) +
              "  >>  " +
              _vm._s(_vm.cmusususu_system_suser_manage_perm) +
              "  >>  " +
              _vm._s(_vm.cmusususu_system_suser_permissions_user) +
              "\n                  "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col", attrs: { id: "supr_main_page" } }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              {
                staticClass: "col-md-12 text-right ",
                staticStyle: { "padding-bottom": "20px", display: "none" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "btn btn-outline-light  dash-my-btn-0 active",
                    staticStyle: {
                      "font-size": "0.9rem",
                      padding: "10px 20px"
                    },
                    attrs: { id: "ssmuser_table_btn" }
                  },
                  [_c("span", [_vm._v("+ " + _vm._s(_vm.cbtntxt_adduser))])]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              {
                staticClass: "row",
                staticStyle: { padding: "30px 30px 5px 40px" }
              },
              [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("h6", { staticClass: "card-title m-b-20" }, [
                    _vm._v(
                      _vm._s(_vm.cmusususu_system_suser_permissions_user) +
                        " " +
                        _vm._s(_vm.cbtntxt_permissions)
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-5" }, [
                  _c("div", { staticClass: "d-flex flex-wrap" }, [
                    _c(
                      "div",
                      {
                        staticStyle: {
                          width: "100%",
                          position: "relative",
                          display: "flex"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "input-group-append",
                            staticStyle: { width: "100%" }
                          },
                          [
                            _c("input", {
                              staticClass: "form-control",
                              staticStyle: {
                                height: "calc(1.5em + .75rem + 6px)",
                                "padding-left": "280px",
                                "padding-right": "40px"
                              },
                              attrs: {
                                type: "text",
                                id: "user_search_cont",
                                name: "user_search_cont"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "btn",
                                staticStyle: {
                                  position: "absolute",
                                  right: "0px"
                                },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.role_userSearchBtn($event)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "ti-search" })]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              display: "flex",
                              "flex-direction": "row",
                              width: "135px",
                              position: "absolute"
                            }
                          },
                          [
                            _c(
                              "select",
                              {
                                staticClass:
                                  "form-control w-100 select-noneborder-rightcolor",
                                attrs: {
                                  id: "sum_user_role_sel",
                                  name: "sum_user_role_sel"
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { value: "0", selected: "" } },
                                  [_vm._v(_vm._s(_vm.cpgtxt_all))]
                                ),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "1" } }, [
                                  _vm._v(_vm._s(_vm.cpgtxt_department))
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2" } }, [
                                  _vm._v(_vm._s(_vm.cpgtxt_position))
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(2)
                      ]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    {
                      staticClass: "table table-lg  no-footer",
                      attrs: {
                        id: "user-list",
                        role: "grid",
                        "aria-describedby": "user-list_info"
                      }
                    },
                    [
                      _c("thead", [
                        _c("tr", { attrs: { role: "row" } }, [
                          _vm._m(3),
                          _vm._v(" "),
                          _c("th", { staticStyle: { border: "0" } }, [
                            _vm._v(_vm._s(_vm.cpgtxt_name))
                          ]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { border: "0" } }, [
                            _vm._v(_vm._s(_vm.cpgtxt_read))
                          ]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { border: "0" } }, [
                            _vm._v(_vm._s(_vm.cpgtxt_write))
                          ]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { border: "0" } }, [
                            _vm._v(_vm._s(_vm.cpgtxt_create))
                          ]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { border: "0" } }, [
                            _vm._v(_vm._s(_vm.cbtntxt_delete))
                          ]),
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
                                  staticClass: "supr_selected_all_delete",
                                  staticStyle: { cursor: "pointer" }
                                },
                                [_vm._v(_vm._s(_vm.cbtntxt_delete))]
                              )
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tbody", { attrs: { id: "supr_user_list" } })
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(4)
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "col",
        staticStyle: { display: "none" },
        attrs: { id: "supr_edit_page" }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "col-md-12",
              staticStyle: { "margin-bottom": "30px" }
            },
            [
              _c("div", { staticClass: "page1_content_side_bar" }, [
                _vm._m(5),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-md-12",
                    staticStyle: { display: "flex", "padding-left": "0px" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "row",
                        staticStyle: { width: "50px", "padding-left": "20px" }
                      },
                      [_vm._v(_vm._s(_vm.cpgtxt_read) + ":")]
                    ),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "row",
                      staticStyle: { width: "100%" },
                      attrs: { id: "edit_permission_top_read_container" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-md-12",
                    staticStyle: { display: "flex", "padding-left": "0px" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "row",
                        staticStyle: { width: "50px", "padding-left": "20px" }
                      },
                      [_vm._v(_vm._s(_vm.cpgtxt_write) + ":")]
                    ),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "row",
                      staticStyle: { width: "100%" },
                      attrs: { id: "edit_permission_top_write_container" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-md-12",
                    staticStyle: { display: "flex", "padding-left": "0px" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "row",
                        staticStyle: { width: "50px", "padding-left": "20px" }
                      },
                      [_vm._v(_vm._s(_vm.cpgtxt_create) + ":")]
                    ),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "row",
                      staticStyle: { width: "100%" },
                      attrs: { id: "edit_permission_top_create_container" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-md-12",
                    staticStyle: { display: "flex", "padding-left": "0px" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "row",
                        staticStyle: { width: "50px", "padding-left": "20px" }
                      },
                      [_vm._v(_vm._s(_vm.cbtntxt_delete) + ":")]
                    ),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "row",
                      staticStyle: { width: "100%" },
                      attrs: { id: "edit_permission_top_delete_container" }
                    })
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-md-12",
              attrs: { id: "supr_edit_btn_container" }
            },
            [
              _c("div", { staticClass: "page1_content_side_bar text-center" }, [
                _c(
                  "div",
                  {
                    staticStyle: { cursor: "pointer" },
                    attrs: { id: "supr_edit_edit_btn" }
                  },
                  [_vm._v("+ " + _vm._s(_vm.cbtntxt_edit))]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-md-12",
              staticStyle: { "margin-bottom": "0px", display: "none" },
              attrs: { id: "supr_edit_permission_list_container" }
            },
            [
              _c("div", { staticClass: "page1_content_content_bar" }, [
                _c(
                  "div",
                  {
                    staticClass: "page1_content_content_title",
                    staticStyle: { padding: "0px" }
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
                              "margin-left": "15px"
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.cbtntxt_permissions) +
                                " " +
                                _vm._s(_vm.cpgtxt_list)
                            )
                          ]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-md-12",
                    staticStyle: {
                      "padding-left": "0px",
                      "padding-right": "0px"
                    }
                  },
                  [
                    _c(
                      "table",
                      {
                        staticClass: "table table-lg  no-footer",
                        staticStyle: { "text-align": "center" },
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
                              staticStyle: {
                                "border-bottom": "1px solid #e4e2e2"
                              },
                              attrs: { role: "row" }
                            },
                            [
                              _c("th", {
                                staticStyle: {
                                  width: "40px!important",
                                  border: "0"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "th",
                                {
                                  staticStyle: {
                                    border: "0",
                                    "text-align": "left",
                                    width: "300px"
                                  }
                                },
                                [_vm._v(_vm._s(_vm.cpgtxt_name))]
                              ),
                              _vm._v(" "),
                              _c("th", {
                                staticStyle: { border: "0", width: "50px" }
                              }),
                              _vm._v(" "),
                              _c("th", { staticStyle: { border: "0" } }, [
                                _vm._v(_vm._s(_vm.cpgtxt_read))
                              ]),
                              _vm._v(" "),
                              _c("th", { staticStyle: { border: "0" } }, [
                                _vm._v(_vm._s(_vm.cpgtxt_write))
                              ]),
                              _vm._v(" "),
                              _c("th", { staticStyle: { border: "0" } }, [
                                _vm._v(_vm._s(_vm.cpgtxt_create))
                              ]),
                              _vm._v(" "),
                              _c("th", { staticStyle: { border: "0" } }, [
                                _vm._v(_vm._s(_vm.cbtntxt_delete))
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("tbody", {
                          attrs: { id: "supr_edit_permissions_lists" }
                        })
                      ]
                    )
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12" }, [
            _c(
              "div",
              {
                staticClass: "text-right",
                staticStyle: { "padding-top": "20px" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "btn btn-outline-light  dash-my-btn-0 active",
                    staticStyle: {
                      "font-size": "0.9rem",
                      padding: "10px 20px",
                      "margin-right": "15px"
                    },
                    attrs: { id: "supr_edit_save_btn" }
                  },
                  [
                    _c("span", [
                      _vm._v(
                        "+ " +
                          _vm._s(_vm.cbtntxt_save) +
                          " " +
                          _vm._s(_vm.cbtntxt_change)
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "btn btn-outline-light  dash-my-btn-0 ",
                    staticStyle: {
                      "font-size": "0.9rem",
                      padding: "10px 20px"
                    },
                    attrs: { id: "supr_edit_cancel_btn" }
                  },
                  [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_cancel))])]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "col-md-12",
            staticStyle: { padding: "35px 0" }
          })
        ])
      ]
    ),
    _vm._v(" "),
    _vm._m(6),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "ModalForUserItem" } },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered modal-sm",
            staticStyle: { "min-width": "500px !important" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h4", { staticClass: "modal-title" }, [
                  _vm._v(_vm._s(_vm.cpgtxt_suserlist))
                ]),
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
              _c("input", {
                attrs: {
                  type: "hidden",
                  id: "sel_role_type",
                  name: "sel_role_type",
                  value: ""
                }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: {
                  type: "hidden",
                  id: "sel_role_subtype",
                  name: "sel_role_subtype",
                  value: ""
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal-body",
                  staticStyle: { padding: "0 1.5rem 1.5rem 1.5rem" },
                  attrs: { id: "groupModalUserbody" }
                },
                [
                  _c("div", { staticClass: "panel" }, [
                    _c("form", { attrs: { id: "ssfe-groupUserModal-frm" } }, [
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
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      width: "100%",
                                      position: "relative",
                                      display: "flex"
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "input-group-append",
                                        staticStyle: { width: "100%" }
                                      },
                                      [
                                        _c("input", {
                                          staticClass: "form-control",
                                          staticStyle: {
                                            height:
                                              "calc(1.5em + .75rem + 6px)",
                                            "padding-left": "290px",
                                            "padding-right": "40px"
                                          },
                                          attrs: {
                                            type: "text",
                                            id: "dlg_user_search_cont",
                                            name: "user_search_cont"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass: "btn",
                                            staticStyle: {
                                              position: "absolute",
                                              right: "0px"
                                            },
                                            on: {
                                              click: function($event) {
                                                $event.stopPropagation()
                                                return _vm.dlg_role_userSearchBtn(
                                                  $event
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "ti-search"
                                            })
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          display: "flex",
                                          "flex-direction": "row",
                                          width: "135px",
                                          position: "absolute"
                                        }
                                      },
                                      [
                                        _c(
                                          "select",
                                          {
                                            staticClass:
                                              "form-control w-100 select-noneborder-rightcolor",
                                            attrs: {
                                              id: "dlg_sum_user_role_sel",
                                              name: "sum_user_role_sel"
                                            }
                                          },
                                          [
                                            _c(
                                              "option",
                                              {
                                                attrs: {
                                                  value: "0",
                                                  selected: ""
                                                }
                                              },
                                              [_vm._v(_vm._s(_vm.cpgtxt_all))]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "1" } },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.cpgtxt_department)
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "2" } },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.cpgtxt_position)
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._m(7)
                                  ]
                                )
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
                              _c(
                                "div",
                                {
                                  staticClass: "table-responsive",
                                  staticStyle: {
                                    "border-top": "1px solid #e0dede",
                                    "border-bottom": "1px solid #e0dede",
                                    height: "200px",
                                    "overflow-y": "auto"
                                  }
                                },
                                [
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
                                        _c("tr", { attrs: { role: "row" } }, [
                                          _c("th", {
                                            staticClass: "role_user_th",
                                            staticStyle: {
                                              width: "40px!important"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { staticClass: "role_user_th" },
                                            [_vm._v(_vm._s(_vm.cpgtxt_name))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { staticClass: "role_user_th" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.cpgtxt_department)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { staticClass: "role_user_th" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.cpgtxt_position)
                                              )
                                            ]
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tbody", {
                                        attrs: {
                                          id: "ssu_management_roles_user"
                                        }
                                      })
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "d-flex flex-wrap",
                            staticStyle: {
                              width: "100%",
                              height: "0px",
                              "overflow-y": "auto",
                              margin: "10px 15px 0px 20px"
                            },
                            attrs: { id: "select_users_name_group" }
                          })
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
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.addUserListModalBtn()
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
                      ])
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
    return _c(
      "a",
      {
        attrs: {
          href: "#",
          id: "system-esuser-permissions-users-fav",
          "data-status": "off",
          "data-page-info": "Users_system-esuser-permissions-users"
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
    return _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticClass: "form-group m-b-0" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticStyle: {
          display: "flex",
          "flex-direction": "row",
          width: "135px",
          position: "absolute",
          "margin-left": "135px"
        }
      },
      [
        _c("select", {
          staticClass: "form-control w-100 select-noneborder-rightcolor",
          attrs: {
            id: "sum_user_role_content_sel",
            name: "sum_user_role_content_sel"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticStyle: { width: "20px!important" } }, [
      _c("div", { staticClass: "form-check form-check-inline" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12", attrs: { id: "supr_page_nav" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "flex" } }, [
      _c("div", {
        staticClass:
          "page1_content_side_bar_text page1_content_side_bar_seleted",
        attrs: { id: "supr_edit_permission_name_title" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row m-t-15" }, [
      _c("div", { staticClass: "col-md-12" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticStyle: {
          display: "flex",
          "flex-direction": "row",
          width: "145px",
          position: "absolute",
          "margin-left": "133px"
        }
      },
      [
        _c("select", {
          staticClass: "form-control w-100 select-noneborder-rightcolor",
          attrs: {
            id: "dlg_sum_user_role_content_sel",
            name: "sum_user_role_content_sel"
          }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);
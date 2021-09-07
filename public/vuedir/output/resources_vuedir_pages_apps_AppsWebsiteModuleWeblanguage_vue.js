"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vuedir_pages_apps_AppsWebsiteModuleWeblanguage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/lang_module */ "./resources/vuedir/assets/jsfunc/lang_module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
/* harmony import */ var _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/jsfunc/media_module */ "./resources/vuedir/assets/jsfunc/media_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var userid = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__.default.data.jsonparse(window.Laravel.userinfo).id;
var tabstatus = 0;
var vueOBJ = null;
var wwgfield = 'setting';
var btntxt_save = "";
var btntxt_delete = "";
var btntxt_enable = "";
var btntxt_disable = "";
var btntxt_edit = "";
var btntxt_change = "";
var checked_del_items = new Array();
var checked_list_del_items = new Array();
var pstart = 1;
var pnum = pstart;
var pcnt = 5;
var numg = 5;
var coutryLists = [];
var precountryLists = [];
var current_selected_id = '0';
var pgperm = {};
var text_option_ids = [];
var text_option_values = []; // setting tab start /////////////////////////////////////////////////////////////////////////////////////////////

function settingPageNavigation(totalpage) {
  var nav_tag = '';
  nav_tag += '<nav aria-label="..." class="mb-4">';
  nav_tag += '<ul class="pagination pagination-rounded justify-content-center">';
  var disble = "";
  if (pstart == 1) disble = "disabled";
  var prenum = parseInt(pstart) - 1;
  nav_tag += '<li class="page-item  ' + disble + ' ">';
  nav_tag += '<a class="page-link" href="#"  id="settingpagenavnum_' + prenum + '" >';
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
    } else oid = "settingpagenavnum_" + pnum;

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
  nav_tag += '<a class="page-link" id="settingpagenavnum_' + nextnum + '" href="#">';
  nav_tag += '<i class="ti-angle-right"></i>';
  nav_tag += '</a>';
  nav_tag += '</li>';
  nav_tag += '</ul>';
  nav_tag += '</nav>';
  $('#awml_settingpage_nav').html(nav_tag);
  /* events { */

  $('a[id^="settingpagenavnum_"]').click(function () {
    var oid = $(this).attr("id");
    pstart = oid.split('_')[1];

    if (tabstatus == 0) {
      getSettingLangData();
    } else if (tabstatus == 1) {
      getListLangData();
    }
  });
}

function getSettingLangData() {
  $.ajax({
    url: 'admin.getAWMLanguage',
    data: {
      start: pstart,
      cnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var prelists = data.prelists;

        if (prelists !== null && prelists != "") {
          precountryLists = [];

          for (var i = 0; i < prelists.length; i++) {
            var obj = prelists[i];
            precountryLists[i] = obj;
          }
        }

        if (lists !== null && lists != "") {
          settingContentList(lists);
        } else $('#awml_setting_content_lists').html('');

        var total = data.total;

        if (total <= 0) {
          $('#awml_settingpage_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        settingPageNavigation(totalpage);
        checked_del_items = new Array();
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function saveSettingLangChanges(id, status) {
  $.ajax({
    url: 'admin.saveAWMLanguageChanges',
    data: {
      id: id,
      status: status
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        pstart = 1;
        getSettingLangData();
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function awmlangAddonDlg() {
  var c_tag = "";
  var j = 0;

  for (var i = 0; i < coutryLists.length; i++) {
    var nameobj = coutryLists[i].name;
    var name = $.trim(nameobj.split('(')[0]);
    var dialCode = $.trim(coutryLists[i].dialCode);
    var iso2 = $.trim(coutryLists[i].iso2);
    var ckid = iso2 + '-' + dialCode;
    var check = "";

    for (var k = 0; k < precountryLists.length; k++) {
      var oneobj = precountryLists[k];
      var iso = oneobj.iso;
      var dialcd = oneobj.dialcode;
      var temp = iso + '-' + dialcd;

      if (temp == ckid) {
        check = "checked";
        break;
      }
    }

    if (j == 0) c_tag += '<tr role="row" class="odd">';
    c_tag += '<td style="width:50%;">';
    c_tag += '<div class="form-check form-check-inline">';
    c_tag += '<input class="form-check-input m-r-10" data-country="' + name + '" type="checkbox" ' + check + ' id="onelangCheckbox_' + ckid + '" value="">';
    c_tag += '<span class="iti__country-name" style="background: #3f6ad2; color: white; text-transform:uppercase;border: 1px solid transparent; border-radius: 20px; padding: 5px 3px; font-size: 12px">' + iso2 + '</span>';
    c_tag += '<span class="iti__country-name">' + name + '</span>';
    c_tag += '</div>';
    c_tag += '</td>';
    j++;

    if (j == 2) {
      c_tag += '</tr>';
      j = 0;
    }
  }

  c_tag += '<tr role="row" class="odd"> <td style="padding: 0 0.75rem !important;width:50%;">&nbsp;</td>';
  c_tag += '<td  style="padding: 0 0.75rem !important;width:50%;">&nbsp;</td></tr>';
  $('#awmlang_dlg_list').html(c_tag);
}

function awmlangEditonDlg() {
  var c_tag = "";
  var j = 0;

  for (var i = 0; i < precountryLists.length; i++) {
    var oneobj = precountryLists[i];
    var name = oneobj.name;
    var dialCode = oneobj.dialcode;
    var iso2 = oneobj.iso;
    var status = oneobj.status;
    var ckid = iso2 + '-' + dialCode;
    var check = "";

    if (status == 'enable') {
      if (j == 0) c_tag += '<tr role="row" class="odd">';
      c_tag += '<td style="width:50%; border-bottom: 1px solid #dee2e6;">';
      c_tag += '<div class="form-check form-check-inline">';
      c_tag += '<input class="form-check-input m-r-10" data-country="' + name + '" type="checkbox" ' + check + ' id="oneeditlangCheckbox_' + ckid + '" value="">';
      c_tag += '<span class="iti__country-name" style="background: #3f6ad2; color: white; text-transform:uppercase;border: 1px solid transparent; border-radius: 20px; padding: 5px 3px; font-size: 12px">' + iso2 + '</span>';
      c_tag += '<span class="iti__country-name">' + name + '</span>';
      c_tag += '</div>';
      c_tag += '</td>';
      j++;

      if (j == 2) {
        c_tag += '</tr>';
        j = 0;
      }
    }
  }

  c_tag += '<tr role="row" class="odd"> <td style="padding: 0 0.75rem !important;width:50%;">&nbsp;</td>';
  c_tag += '<td  style="padding: 0 0.75rem !important;width:50%;">&nbsp;</td></tr>';
  $('#awmlang_editdlg_list').html(c_tag);
}

function hideAddLangDialog() {
  $("#mySettingLangModal").modal('hide');
}

function settingContentList(lists) {
  $('#awml_setting_content_lists').html('');
  var tags = '';

  for (var i = 0; i < lists.length; i++) {
    var obj = lists[i];
    var id = lists[i].id;
    var name = lists[i].name;
    var status = lists[i].status;
    tags += '<tr class="sub_content_list-' + id + '" data-id="' + id + '" data-name="' + name + '">';
    tags += '   <td>';
    tags += '   <div class="form-check form-check-inline">';
    tags += '       <input class="form-check-input" type="checkbox" id="subcontCheckbox_' + id + '" value="">';
    tags += '   </div>';
    tags += '   </td>';
    tags += '   <td>' + name + '</td>';
    tags += '   <td>';
    tags += '       <div class="form-group m-b-0">';
    tags += '           <select class="my-border-radius-slt form-control float-right" id="setting_language_list_edit-' + id + '" name="setting_language_list_edit-' + id + '">';
    tags += '               <option value="" class="data-ajax" data-ajax="btntxt_edit">' + btntxt_edit + '</option>';
    if (status != null && status != "" && status == "enable") tags += '<option value="enable" selected class="data-ajax" data-ajax="btntxt_enable">' + btntxt_enable + '</option>';else tags += '<option value="enable" class="data-ajax" data-ajax="btntxt_enable">' + btntxt_enable + '</option>';
    if (status != null && status != "" && status == "disable") tags += '<option value="disable" selected class="data-ajax" data-ajax="btntxt_disable">' + btntxt_disable + '</option>';else tags += '<option value="disable" class="data-ajax" data-ajax="btntxt_disable">' + btntxt_disable + '</option>';
    if (status != null && status != "" && status == "delete") tags += '<option value="delete" selected class="data-ajax" data-ajax="btntxt_delete">' + btntxt_delete + '</option>';else tags += '<option value="delete" class="data-ajax" data-ajax="btntxt_delete">' + btntxt_delete + '</option>';
    tags += '           </select>';
    tags += '       </div>';
    tags += '   </td>';
    tags += '</tr>';
  }

  $('#awml_setting_content_lists').html(tags);
  $('input[id^="subcontCheckbox_"]').change(function () {
    var id = $(this).attr("id");
    var del_id = id.split('_')[1];

    if ($(this).is(':checked')) {
      checked_del_items.push(del_id);
    } else {
      var idx = checked_del_items.indexOf(del_id);
      if (idx > -1) checked_del_items.splice(idx, 1);
    }
  });
  $('select[id^="setting_language_list_edit-"]').change(function () {
    var id = $(this).attr("id");
    var event_id = id.split('-')[1];
    var sel_val = $(this).val();

    if (pgperm.write != 1) {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
      return;
    }

    saveSettingLangChanges(event_id, sel_val);
  });
}

function initUIEvent() {
  $('.setting_selected_all_delete').click(function () {
    if (checked_del_items.length > 0) {
      $.ajax({
        url: 'admin.deleteSeveralAWMLanguages',
        data: {
          ids: checked_del_items
        },
        type: 'POST',
        success: function success(data) {
          if (data.msg === "ok") {
            checked_del_items = new Array();
            pstart = 1;
            getSettingLangData();
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
  $('.list_selected_all_delete').click(function () {
    if (checked_list_del_items.length > 0) {
      $.ajax({
        url: 'admin.deleteSeveralAWMListLanguages',
        data: {
          ids: checked_list_del_items
        },
        type: 'POST',
        success: function success(data) {
          if (data.msg === "ok") {
            checked_list_del_items = new Array();
            pstart = 1;
            getListLangData();
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
  $('#awml_list_dlg_chk_icon').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('#awml_icon_select_container').css('display', 'none');
    } else {
      $(this).addClass('active');
      $('#awml_icon_select_container').css('display', 'flex');
    }
  });
  $('#awml_list_dlg_chk_text').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('#awml_text_select_container').css('display', 'none');
      $('#awml_text_sizecolor_select_container').css('display', 'none');
    } else {
      $(this).addClass('active');
      $('#awml_text_select_container').css('display', 'flex');
      $('#awml_text_sizecolor_select_container').css('display', 'flex');
    }
  });
  /*$('#awml_sel_text_type').change(function(){
      var value=$(this).val();
      var tval = '0-0';
      for(var i = 0; i < text_option_ids.length; i++){
          if(text_option_ids[i] == value){
              tval = text_option_values[i];
              break;
          }
      }
      var min = tval.split("-")[0];
      var max = tval.split("-")[1];
      initFontSizeSelect(min, value);
  });*/
} // setting tab end ///////////////////////////////////////////////////////////////////////////////////////////////
// list tab start /////////////////////////////////////////////////////////////////////////////////////////////


function getListLangData() {
  $.ajax({
    url: 'admin.getAWMListData',
    data: {
      start: pstart,
      cnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;

        if (lists !== null && lists != "") {
          listContentList(lists);
        } else $('#awml_list_content_lists').html('');

        var total = data.total;

        if (total <= 0) {
          $('#awml_listpage_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        listPageNavigation(totalpage);
        checked_del_items = new Array();
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function listContentList(lists) {
  $('#awml_list_content_lists').html('');
  var tags = '';

  for (var i = 0; i < lists.length; i++) {
    var obj = lists[i];
    var id = obj.id;
    var name = obj.name;
    var languagenames = obj.languagenames;
    var style = obj.style;
    tags += '<tr class="sub_content_list-' + id + '" data-id="' + id + '" data-name="' + name + '">';
    tags += '   <td>';
    tags += '   <div class="form-check form-check-inline">';
    tags += '       <input class="form-check-input" type="checkbox" id="listcontCheckbox_' + id + '" value="">';
    tags += '   </div>';
    tags += '   </td>';
    tags += '   <td>' + name + '</td>';
    tags += '   <td>' + languagenames + '</td>';

    if (style == 0) {
      tags += '   <td>Icon</td>';
    }

    if (style == 1) {
      tags += '   <td>Text</td>';
    }

    if (style == 2) {
      tags += '   <td>Icon&Text</td>';
    }

    tags += '   <td>';
    tags += '       <div class="form-group m-b-0">';
    tags += '           <select class="my-border-radius-slt form-control float-right" id="list_language_list_edit-' + id + '" name="list_language_list_edit-' + id + '">';
    tags += '               <option value="" class="data-ajax" data-ajax="btntxt_edit">' + btntxt_edit + '</option>';
    tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">' + btntxt_change + '</option>';
    tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">' + btntxt_delete + '</option>';
    tags += '           </select>';
    tags += '       </div>';
    tags += '   </td>';
    tags += '</tr>';
  }

  $('#awml_list_content_lists').html(tags);
  $('input[id^="listcontCheckbox_"]').change(function () {
    var id = $(this).attr("id");
    var del_id = id.split('_')[1];

    if ($(this).is(':checked')) {
      checked_list_del_items.push(del_id);
    } else {
      var idx = checked_list_del_items.indexOf(del_id);
      if (idx > -1) checked_list_del_items.splice(idx, 1);
    }
  });
  $('select[id^="list_language_list_edit-"]').change(function () {
    var id = $(this).attr("id");
    var event_id = id.split('-')[1];
    var sel_val = $(this).val();

    if (sel_val == 'delete') {
      if (pgperm["delete"] != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.Confirm('pgtxt_wantdeleteitem', function (val) {
        if (val) {
          deleteListLangData(event_id);
        }
      });
    }

    if (sel_val == 'change') {
      if (pgperm.write != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      current_selected_id = event_id;
      showListLangDialog();
    }

    $(this).val('');
  });
}

function listPageNavigation(totalpage) {
  var nav_tag = '';
  nav_tag += '<nav aria-label="..." class="mb-4">';
  nav_tag += '<ul class="pagination pagination-rounded justify-content-center">';
  var disble = "";
  if (pstart == 1) disble = "disabled";
  var prenum = parseInt(pstart) - 1;
  nav_tag += '<li class="page-item  ' + disble + ' ">';
  nav_tag += '<a class="page-link" href="#"  id="listpagenavnum_' + prenum + '" >';
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
    } else oid = "listpagenavnum_" + pnum;

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
  nav_tag += '<a class="page-link" id="listpagenavnum_' + nextnum + '" href="#">';
  nav_tag += '<i class="ti-angle-right"></i>';
  nav_tag += '</a>';
  nav_tag += '</li>';
  nav_tag += '</ul>';
  nav_tag += '</nav>';
  $('#awml_listpage_nav').html(nav_tag);
  /* events { */

  $('a[id^="listpagenavnum_"]').click(function () {
    var oid = $(this).attr("id");
    pstart = oid.split('_')[1];

    if (tabstatus == 0) {
      getSettingLangData();
    } else if (tabstatus == 1) {
      getListLangData();
    }
  });
}

function colorButtons() {
  var hiddenThemeColorPicker = document.getElementById('hiddenThemeColorPicker');
  var pickerLeft = new ColorPicker(hiddenThemeColorPicker, '#ffffff');
  hiddenThemeColorPicker.addEventListener('colorChange', function (event) {
    var color = event.detail.color.hexa;
    $('#hiddenThemeColorPicker').val(color);
    document.getElementById("selected_color_value").innerHTML = color;
    var div = document.getElementById('selected_color_image');
    div.style.backgroundColor = color;
  });
}

function deleteListLangData(id) {
  $.ajax({
    url: 'admin.deleteAWMListData',
    data: {
      id: id
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        pstart = 1;
        getListLangData();
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function showListLangDialog() {
  $('#awml_list_dlg_err').text('').css({
    'display': 'none'
  });
  $('#awml_sel_icon_type').html('');
  $('#awml_sel_text_type').html('');
  $('#awml_sel_text_size').html('');
  $('#awml_list_dlg_chk_icon').removeClass('active');
  $('#awml_list_dlg_chk_text').removeClass('active');
  $('#awml_icon_select_container').css('display', 'none');
  $('#awml_text_select_container').css('display', 'none');
  $('#awml_text_sizecolor_select_container').css('display', 'none');
  initFontSizeSelect(11);
  initTextFieldData();
  $('#myListLangModal').modal('show');
}

function initTextFieldData() {
  text_option_ids = new Array();
  text_option_values = new Array();
  $.ajax({
    url: 'admin.getAppModuleLanguageStyleList',
    data: {},
    type: 'POST',
    success: function success(data) {
      var texttags = '';
      var icontags = '';

      if (data.msg === "ok") {
        var textlists = data.textlist;

        if (textlists.length > 0) {
          $('#awml_sel_text_type').html('');

          for (var i = 0; i < textlists.length; i++) {
            var name = textlists[i].name;
            var id = textlists[i].id;
            var max = textlists[i].maxvalue;
            var min = textlists[i].minvalue;
            var tvalue = min + '-' + max;
            text_option_ids.push(id);
            text_option_values.push(tvalue);
            texttags += '<option value="' + id + '">' + name + '</option>';
          }

          $('#awml_sel_text_type').html(texttags);
        }

        var iconlists = data.iconlist;

        if (iconlists.length > 0) {
          $('#awml_sel_icon_type').html('');

          for (var i = 0; i < iconlists.length; i++) {
            var name = iconlists[i].name;
            var id = iconlists[i].id;
            var size = iconlists[i].size;
            var style = iconlists[i].style;
            var capacity = iconlists[i].capacity;
            var imgtype = iconlists[i].imgtype;
            var tvalue = name + '#' + style + '#' + size + '#' + capacity;
            icontags += '<option value="' + tvalue + '">' + name + '</option>';
          }

          $('#awml_sel_icon_type').html(icontags);
        }

        initListDialogContent();
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function initListDialogContent() {
  if (current_selected_id == '0') {
    $('#awml_list_dlg_input_name').val('');
    $('#awml_list_dlg_selected_country').text('');
  } else {
    $.ajax({
      url: 'admin.getAWMListDataFromId',
      data: {
        id: current_selected_id
      },
      type: 'POST',
      success: function success(data) {
        var tags = '';

        if (data.msg === "ok") {
          var list = data.list;
          var name = list.name;
          var languagenames = list.languagenames;
          var style = parseInt(list.style);
          var sel_icon = list.icon_name + '#' + list.icon_style + '#' + list.icon_size + '#' + list.icon_capacity;
          $('#awml_list_dlg_input_name').val(name);
          $('#awml_list_dlg_selected_country').text(languagenames);

          if (style == 0) {
            $('#awml_list_dlg_chk_icon').addClass('active');
            $('#awml_icon_select_container').css('display', 'flex');
            $('#awml_sel_icon_type').val(sel_icon);
          } else if (style == 1) {
            $('#awml_list_dlg_chk_text').addClass('active');
            $('#awml_text_select_container').css('display', 'flex');
            $('#awml_text_sizecolor_select_container').css('display', 'flex');
            $('#awml_sel_text_type').val(list.text_name);
            $('#awml_sel_text_size').val(list.text_fontsize);
            initFontSizeSelect(list.text_fontsize);
          } else if (style == 2) {
            $('#awml_list_dlg_chk_icon').addClass('active');
            $('#awml_list_dlg_chk_text').addClass('active');
            $('#awml_icon_select_container').css('display', 'flex');
            $('#awml_text_select_container').css('display', 'flex');
            $('#awml_text_sizecolor_select_container').css('display', 'flex');
            $('#awml_sel_icon_type').val(sel_icon);
            $('#awml_sel_text_type').val(list.text_name);
            $('#awml_sel_text_size').val(list.text_fontsize);
            initFontSizeSelect(list.text_fontsize);
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

function initFontSizeSelect(size) {
  var tags = '';
  $('#awml_sel_text_size').html('');

  for (var i = 11; i <= 30; i++) {
    var name = i + ' pt';
    var tvalue = i;
    if (size == i) tags += '<option value="' + tvalue + '" selected>' + name + '</option>';else tags += '<option value="' + tvalue + '">' + name + '</option>';
  }

  $('#awml_sel_text_size').html(tags);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppsWebSiteModuleWeblanguage",
  data: function data() {
    return {
      pageid: 'apps-website-module-weblanguage-fav',
      mu_apps: '',
      musu_apps_website: '',
      mususu_apps_website_appear: '',
      mususu_apps_website_module: '',
      musususu_apps_website_appear_head: '',
      musususu_apps_website_module_weblanguage: '',
      btntxt_add: '',
      btntxt_edit: '',
      btntxt_save: '',
      btntxt_delete: '',
      btntxt_change: '',
      btntxt_topheader: '',
      btntxt_header: '',
      btntxt_setting: '',
      btntxt_subheader: '',
      btntxt_browse: '',
      btntxt_text: '',
      pgtxt_category: '',
      pgtxt_background: '',
      pgtxt_list: '',
      pgtxt_name: '',
      pgtxt_language: '',
      pgtxt_css: '',
      pgtxt_icon: '',
      pgtxt_operation: '',
      pgtxt_style: '',
      pgtxt_titleontheleft: '',
      pgtxt_titleontheright: '',
      pgtxt_breadcrumbsontheleft: '',
      pgtxt_breadcrumbsontheright: '',
      pgtxt_titlebreadcrumbsontheleft: '',
      pgtxt_titlebreadcrumbsontheright: '',
      pgtxt_titlebreadcrumbsonthemiddle: '',
      pgtxt_hide: '',
      pgtxt_fixed: '',
      pgtxt_breadcrumbs: '',
      pgtxt_page: '',
      pgtxt_title: '',
      pgtxt_yes: '',
      pgtxt_no: '',
      pgtxt_padding: '',
      pgtxt_use: '',
      pgtxt_value: '',
      pgtxt_swidth: '',
      pgtxt_or: '',
      pgtxt_example: '',
      pgtxt_readcontentfields: '',
      pgtxt_specifiedsize: '',
      pgtxt_nogreaterthan: '',
      pgtxt_addlanguage: '',
      pgtxt_color: '',
      btntxt_ok: '',
      btntxt_cancel: '',
      pgtxt_wantdeleteitem: '',
      pgtxt_notpermission: '',
      pgtxt_notification: ''
    };
  },
  computed: {
    cmususu_apps_website_appear: function cmususu_apps_website_appear() {
      return this.mususu_apps_website_appear;
    },
    cmususu_apps_website_module: function cmususu_apps_website_module() {
      return this.mususu_apps_website_module;
    },
    cmusususu_apps_website_appear_head: function cmusususu_apps_website_appear_head() {
      return this.musususu_apps_website_appear_head;
    },
    cmusususu_apps_website_module_weblanguage: function cmusususu_apps_website_module_weblanguage() {
      return this.musususu_apps_website_module_weblanguage;
    },
    cmu_apps: function cmu_apps() {
      return this.mu_apps;
    },
    cmusu_apps_website: function cmusu_apps_website() {
      return this.musu_apps_website;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_save: function cbtntxt_save() {
      return this.btntxt_save;
    },
    cbtntxt_change: function cbtntxt_change() {
      return this.btntxt_change;
    },
    cbtntxt_delete: function cbtntxt_delete() {
      return this.btntxt_delete;
    },
    cbtntxt_topheader: function cbtntxt_topheader() {
      return this.btntxt_topheader;
    },
    cbtntxt_header: function cbtntxt_header() {
      return this.btntxt_header;
    },
    cbtntxt_setting: function cbtntxt_setting() {
      return this.btntxt_setting;
    },
    cbtntxt_subheader: function cbtntxt_subheader() {
      return this.btntxt_subheader;
    },
    cbtntxt_browse: function cbtntxt_browse() {
      return this.btntxt_browse;
    },
    cbtntxt_text: function cbtntxt_text() {
      return this.btntxt_text;
    },
    cpgtxt_category: function cpgtxt_category() {
      return this.pgtxt_category;
    },
    cpgtxt_background: function cpgtxt_background() {
      return this.pgtxt_background;
    },
    cpgtxt_list: function cpgtxt_list() {
      return this.pgtxt_list;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
    },
    cpgtxt_language: function cpgtxt_language() {
      return this.pgtxt_language;
    },
    cpgtxt_css: function cpgtxt_css() {
      return this.pgtxt_css;
    },
    cpgtxt_icon: function cpgtxt_icon() {
      return this.pgtxt_icon;
    },
    cpgtxt_operation: function cpgtxt_operation() {
      return this.pgtxt_operation;
    },
    cpgtxt_style: function cpgtxt_style() {
      return this.pgtxt_style;
    },
    cpgtxt_titleontheleft: function cpgtxt_titleontheleft() {
      return this.pgtxt_titleontheleft;
    },
    cpgtxt_titleontheright: function cpgtxt_titleontheright() {
      return this.pgtxt_titleontheright;
    },
    cpgtxt_breadcrumbsontheleft: function cpgtxt_breadcrumbsontheleft() {
      return this.pgtxt_breadcrumbsontheleft;
    },
    cpgtxt_breadcrumbsontheright: function cpgtxt_breadcrumbsontheright() {
      return this.pgtxt_breadcrumbsontheright;
    },
    cpgtxt_titlebreadcrumbsontheleft: function cpgtxt_titlebreadcrumbsontheleft() {
      return this.pgtxt_titlebreadcrumbsontheleft;
    },
    cpgtxt_titlebreadcrumbsontheright: function cpgtxt_titlebreadcrumbsontheright() {
      return this.pgtxt_titlebreadcrumbsontheright;
    },
    cpgtxt_titlebreadcrumbsonthemiddle: function cpgtxt_titlebreadcrumbsonthemiddle() {
      return this.pgtxt_titlebreadcrumbsonthemiddle;
    },
    cpgtxt_hide: function cpgtxt_hide() {
      return this.pgtxt_hide;
    },
    cpgtxt_fixed: function cpgtxt_fixed() {
      return this.pgtxt_fixed;
    },
    cpgtxt_breadcrumbs: function cpgtxt_breadcrumbs() {
      return this.pgtxt_breadcrumbs;
    },
    cpgtxt_page: function cpgtxt_page() {
      return this.pgtxt_page;
    },
    cpgtxt_title: function cpgtxt_title() {
      return this.pgtxt_title;
    },
    cpgtxt_yes: function cpgtxt_yes() {
      return this.pgtxt_yes;
    },
    cpgtxt_no: function cpgtxt_no() {
      return this.pgtxt_no;
    },
    cpgtxt_padding: function cpgtxt_padding() {
      return this.pgtxt_padding;
    },
    cpgtxt_use: function cpgtxt_use() {
      return this.pgtxt_use;
    },
    cpgtxt_value: function cpgtxt_value() {
      return this.pgtxt_value;
    },
    cpgtxt_swidth: function cpgtxt_swidth() {
      return this.pgtxt_swidth;
    },
    cpgtxt_or: function cpgtxt_or() {
      return this.pgtxt_or;
    },
    cpgtxt_example: function cpgtxt_example() {
      return this.pgtxt_example;
    },
    cpgtxt_readcontentfields: function cpgtxt_readcontentfields() {
      return this.pgtxt_readcontentfields;
    },
    cpgtxt_specifiedsize: function cpgtxt_specifiedsize() {
      return this.pgtxt_specifiedsize;
    },
    cpgtxt_nogreaterthan: function cpgtxt_nogreaterthan() {
      return this.pgtxt_nogreaterthan;
    },
    cpgtxt_addlanguage: function cpgtxt_addlanguage() {
      return this.pgtxt_addlanguage;
    },
    cpgtxt_color: function cpgtxt_color() {
      return this.pgtxt_color;
    },
    contentchange: function contentchange() {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
      return this.$store.state.contentchange;
    }
  },
  created: function created() {
    coutryLists = _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getLangCodes();
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    /* fav part*/
    vueOBJ = this;
    pgperm = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__.default.data.getPagePermission(this.$store.state.permission, this.pageid);
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    btntxt_save = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_save');
    btntxt_change = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
    btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
    btntxt_enable = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_enable');
    btntxt_disable = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_disable');
    btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
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
      this.sliderTabs();
      tabstatus = 0;
      getSettingLangData();
      initUIEvent();
      colorButtons();
    } //initpage
    ,
    loaddata: function loaddata() {},
    ShowColorPalette: function ShowColorPalette() {
      $('#hiddenThemeColorPicker').trigger('click');
    },
    addDlgCategory: function addDlgCategory() {},
    sliderTabs: function sliderTabs() {
      $('.page1_content_side_bar div.page1_content_side_bar_text').click(function () {
        $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
        $(this).addClass('page1_content_side_bar_seleted');
        var subid = $(this).attr('data-target');
        $('.col-md-12.page_slider_content_list').removeClass('active');
        $('#' + subid).addClass('active');

        if (subid == 'setting') {
          tabstatus = 0;
          wwgfield = 'setting';
          getSettingLangData();
        } else if (subid == 'list') {
          tabstatus = 1;
          wwgfield = 'list';
          getListLangData();
        }
      });
    },
    showAddLanguageDialog: function showAddLanguageDialog() {
      if (pgperm.create != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      if (tabstatus == 0) {
        $('#mySettingLangModal').modal('show');
        awmlangAddonDlg();
      } else if (tabstatus == 1) {
        current_selected_id = '0';
        showListLangDialog();
      }
    },
    showEditLangDialog: function showEditLangDialog() {
      awmlangEditonDlg();
      $('#myListLangModal').modal('hide');
      $('#myListEditLangModal').modal('show');
    },
    awmlang_add: function awmlang_add() {
      if (pgperm.create != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      var idlist = [];
      $('input:checkbox[id^="onelangCheckbox_"]:checked').each(function () {
        var oneidstr = $(this).attr('id');
        var cname = $(this).attr('data-country');
        var t_id = oneidstr.split('_')[1];
        t_id += '-' + cname;
        idlist.push(t_id);
      });

      if (idlist.length > 0) {
        var postData = {
          langlist: idlist
        };
        axios__WEBPACK_IMPORTED_MODULE_1___default().post('admin.saveAWMLanguage', postData).then(function (response) {
          var msg = response.data.msg;

          if (msg == "ok") {
            if (response.data.cnt > 0) {
              var addlist = response.data.addlist;
              hideAddLangDialog();
              getSettingLangData();
            }
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    awmlang_add_to_list_dialog: function awmlang_add_to_list_dialog() {
      var idlist = [];
      var countrynamelist = [];
      $('input:checkbox[id^="oneeditlangCheckbox_"]:checked').each(function () {
        var oneidstr = $(this).attr('id');
        var cname = $(this).attr('data-country');
        var t_id = oneidstr.split('_')[1];
        t_id += '-' + cname;
        countrynamelist.push(cname);
        idlist.push(t_id);
      });
      $('#awml_list_dlg_selected_country').text(countrynamelist);
      $('#myListEditLangModal').modal('hide');
      $('#myListLangModal').modal('show');
    },
    addListLangDataOne: function addListLangDataOne() {
      var name = $('#awml_list_dlg_input_name').val();

      if (name == null || name == '') {
        $('#awml_list_dlg_err').text('Please select name!').css({
          'display': 'block',
          'color': '#d41b11'
        });
        return;
      }

      var languagenames = $('#awml_list_dlg_selected_country').text();

      if (languagenames == null || languagenames == '') {
        $('#awml_list_dlg_err').text('Please select language!').css({
          'display': 'block',
          'color': '#d41b11'
        });
        return;
      }

      var style = -1;

      if ($('#awml_list_dlg_chk_icon').hasClass('active')) {
        style = 0;
      }

      if ($('#awml_list_dlg_chk_text').hasClass('active')) {
        style = 1;
      }

      if ($('#awml_list_dlg_chk_text').hasClass('active') && $('#awml_list_dlg_chk_icon').hasClass('active')) {
        style = 2;
      }

      if (style == -1) {
        $('#awml_list_dlg_err').text('Please select css!').css({
          'display': 'block',
          'color': '#d41b11'
        });
        return;
      }

      var icon_select_val = $('#awml_sel_icon_type').val();
      var temparr = icon_select_val.split('#');
      var icon_name = temparr[0];
      var icon_style = temparr[1];
      var icon_size = temparr[2];
      var icon_capacity = temparr[3];
      var text_fontsize = $('#awml_sel_text_size').val();
      var text_color = $('#selected_color_value').html();
      var text_name = $('#awml_sel_text_type').val();
      var postData = {
        id: current_selected_id,
        name: name,
        style: style,
        languagenames: languagenames,
        icon_name: icon_name,
        icon_style: icon_style,
        icon_size: icon_size,
        icon_capacity: icon_capacity,
        text_color: text_color,
        text_fontsize: text_fontsize,
        text_name: text_name
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default().post('admin.saveAWMListData', postData).then(function (response) {
        var msg = response.data.msg;

        if (msg == "ok") {
          $('#awml_list_dlg_err').text('Success Save in DB!').css({
            'display': 'block',
            'color': '#0BC334'
          });
          setTimeout(function () {
            $("#myListLangModal").modal('hide');
          }, 1000);
          getListLangData();
        } else if (msg == 'du') {
          $('#awml_list_dlg_err').text('Name already exist!').css({
            'display': 'block',
            'color': '#d41b11'
          });
        } else if (msg == 'du') {
          $('#awml_list_dlg_err').text('Error insert in DB!').css({
            'display': 'block',
            'color': '#d41b11'
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  } //method

});

/***/ }),

/***/ "./resources/vuedir/assets/jsfunc/media_module.js":
/*!********************************************************!*\
  !*** ./resources/vuedir/assets/jsfunc/media_module.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mjs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");


var vueNavOBJ = null;
var curpath = '/';
var img_id = "";
var file_pre_id = "";
var is_upload = false;
var id = "";
var ajax_url = "";
var trans = "";
var dbname = "";
var table = "";
var field = "";
var fval = "";
var mineType = {
  image: 'fas fa-file-image text-primary',
  jpg: 'fas fa-file-image text-danger',
  gif: 'fas fa-file-image text-warning',
  png: 'fas fa-file-image text-primary',
  jpeg: 'fas fa-file-image text-danger',
  audio: 'fas fa-file-audio text-warning',
  mp3: 'fas fa-file-audio text-warning',
  video: 'fas fa-file-movie-o text-warning',
  mp4: 'fas fa-file-movie-o text-warning',
  avi: 'fas fa-file-movie-o text-warning',
  pdf: 'fas fa-file-pdf text-danger',
  doc: 'fas fa-file-word text-primary',
  docx: 'fas fa-file-word text-primary',
  txt: 'fas fa-file-text text-info',
  xls: 'fas fa-file-excel text-success',
  xlsx: 'fas fa-file-excel text-success',
  sheet: 'fas fa-file-excel text-success',
  ppt: 'fas fa-file-powerpoint text-danger',
  pptx: 'fas fa-file-powerpoint text-danger',
  presentation: 'fas fa-file-powerpoint text-danger',
  htm: 'fas fa-file-code text-info',
  html: 'fas fa-file-code text-info',
  gzip: 'fas fa-file-archive text-muted',
  zip: 'fas fa-file-archive text-muted',
  sql: 'fas fa fa-database',
  rar: 'fas fa-file-archive text-muted',
  folder: 'fas fa-folder',
  file: 'fas fa-file'
};

function SearchMediaDirectory() {
  $('.Media_directory_files').html('');
  var cont = $('#Media_Modal_Search_Text').val();
  cont = $.trim(cont);
  if (cont === "") return;
  $.ajax({
    url: 'admin.searchAllHostObj',
    data: {
      path: curpath,
      scont: cont,
      param: 1
    },
    type: 'POST',
    async: true,
    success: function success(data) {
      if (data.msg === "ok") {
        var dirlist = data.dirs;

        for (var i = 0; i < dirlist.length; i++) {
          var dirnameArr = dirlist[i];
          var dpath = dirnameArr.split("&&")[0];
          var dirname = dirnameArr.split("&&")[1];
          var dirnameid = "";

          if (dirnameArr == "[..]") {
            dirnameid = "nonDirectory";
            dirname = dirnameArr;
          } else {
            dirnameid = dirname.replace(/(\s*)/g, '');
          }

          if (dpath.indexOf('/') > -1) {
            var s = dpath.split('/');
            var len = s.length;

            for (var j = 1; j < len; j++) {
              prefix += 'f';
            }
          } else prefix = 'f';

          prefix += '_';
          var tag = '<div id="sele_media_directory" style="font-size: 15px;">';
          tag += '<div class="d-flex flex-row p-l-20 p-t-5 cursor-pointer dir_folder_item_modal" data-path="' + dpath + '/" data-selected="off" id="' + prefix + dirnameid + '">';
          tag += '<span class="p-l-10 folder-icon">';
          tag += '<i class="' + mineType["folder"] + '" style="font-size:20px;color:#f0c243e3"></i>';
          tag += '</span>';
          tag += '<span class="cgobj-name">';
          tag += dirname;
          tag += '</span>';
          tag += '</div>';
          tag += '</div>';
          $('.Media_directory_files').append(tag);
          $('#' + prefix + dirnameid).dblclick(function (e) {
            e.preventDefault();
            var path = $(this).attr('data-path');
            var ename = $(this).children('span.cgobj-name').text();
            var selPath = path + ename + '/';
            if (ename == "[..]") selPath = "/";
            selPath = selPath.replace("./", "");
            getDirectories(selPath);
          });
        }

        var filelist = data.files;
        var thumblist = data.thumb;

        for (var i = 0; i < filelist.length; i++) {
          var filenameArr = filelist[i];
          var thumbs = thumblist[i];
          var dpath = filenameArr.split("&&")[0];
          var filename = filenameArr.split("&&")[1];
          var prefix = '';

          if (dpath.indexOf('/') > -1) {
            var s = dpath.split('/');
            var len = s.length;

            for (var j = 1; j < len; j++) {
              prefix += 'f';
            }
          } else prefix = 'f';

          prefix += '_';
          var fileid = "";
          fileid = filename.replace(/./g, "_");
          fileid = fileid.replace(/(\s*)/g, '');
          var ftag = '<div id="sele_media_file">';
          ftag += '<div class="d-flex flex-row p-l-20 p-t-5 cursor-pointer dir_file_item_modal" data-path="' + dpath + '/" data-selected="off" id="' + prefix + fileid + '" style="font-size: 15px;">';
          ftag += '<span class="p-l-10 file-icon">'; //if(isUrlFound(thumbs[0]))

          ftag += '<img src="' + thumbs[0] + '" style="width: 20px;">'; //else
          //    ftag += '<i class="'+getMineType(filename)+'" style="font-size:48px;"></i>';

          ftag += '</span>';
          ftag += '<span class="cgobj-name">';
          ftag += filename;
          ftag += '</span>';
          ftag += '</div>';
          ftag += '</div>';
          $('.Media_directory_files').append(ftag);
        }
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

var setImageTagID = function setImageTagID(img, file_pre) {
  var is_up = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var ajax = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var fid = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var tran = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
  var db = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
  var tb = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '';
  var fd = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : '';
  var v = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : '';
  img_id = img;
  file_pre_id = file_pre;
  is_upload = is_up;
  id = fid;
  ajax_url = ajax;
  trans = tran;
  dbname = db;
  table = tb;
  field = fd;
  fval = v;
};

var getDirectories = function getDirectories(p_path) {
  $.ajax({
    url: 'admin.getHostDirectories',
    data: {
      path: p_path,
      param: 1
    },
    type: 'POST',
    async: true,
    success: function success(data) {
      $('.Media_directory_files').html('');
      var dirlist = data.dirs;
      curpath = p_path;
      var prefix = '';

      if (p_path.indexOf('/') > -1) {
        var s = p_path.split('/');
        var len = s.length;

        for (var j = 1; j < len; j++) {
          prefix += 'f';
        }
      } else prefix = 'f';

      prefix += '_';

      for (var i = 0; i < dirlist.length; i++) {
        var dirname = dirlist[i];

        if (dirname.indexOf('/') > 0) {
          var s_dirname = dirname.split('/');
          dirname = s_dirname[s_dirname.length - 1];
        }

        dirname = dirname.replace(p_path, '');
        var dirnameid = dirname.replace(/(\s*)/g, '');
        if (dirnameid == "[..]") dirnameid = "nonDirectory";
        var tag = '<div id="sele_media_directory" style="font-size: 15px;">';
        tag += '<div class="d-flex flex-row p-l-20 p-t-5 cursor-pointer dir_folder_item_modal" data-path="' + p_path + '" data-selected="off" id="' + prefix + dirnameid + '">';
        tag += '<span class="p-l-10 folder-icon">';
        tag += '<i class="' + mineType["folder"] + '" style="font-size:20px; color:#f0c243e3"></i>';
        tag += '</span>';
        tag += '<span class="cgobj-name" style="margin-left: 10px">';
        tag += dirname;
        tag += '</span>';
        tag += '</div>';
        tag += '</div>';
        $('.Media_directory_files').append(tag);
        $('#' + prefix + dirnameid).dblclick(function (e) {
          e.preventDefault();
          var path = $(this).attr('data-path');
          var ename = $(this).children('span.cgobj-name').text();
          var selPath = path + ename + '/';

          if (ename == "[..]") {
            var out_path = '';
            var path_arr = selPath.split('/');

            for (var p = 0; p < path_arr.length - 3; p++) {
              out_path += path_arr[p] + '/';
            }

            selPath = out_path;
          }

          getDirectories(selPath);
        });
        $('div[id^="sele_media_directory"]').on('mouseover', function () {
          $(this).css("background", "#f5f5f5");
        });
        $('div[id^="sele_media_directory"]').on('mouseleave', function () {
          $(this).css("background", "#ffffff");
        });
      }

      var filelist = data.files;
      var thumblist = data.thumb;
      var urllist = data.fileUrl;

      for (var i = 0; i < filelist.length; i++) {
        var filename = filelist[i];
        var thumbs = thumblist[i];
        var url = urllist[i];
        var fileid = "";

        if (filename.indexOf('/') > 0) {
          var s_filename = filename.split('/');
          filename = s_filename[s_filename.length - 1];
        }

        fileid = filename.replace(/./g, "_");
        fileid = fileid.replace(/(\s*)/g, '');
        var ftag = '<div id="sele_media_file">';
        ftag = '<div class="d-flex flex-row p-l-20 p-t-5 cursor-pointer dir_file_item_modal" data-path="' + p_path + '" dara-url="' + url + '" data-selected="off" id="' + prefix + fileid + '" style="font-size: 15px;">';
        ftag += '<span class="p-l-10 file-icon">'; //ftag += '<i class="'+getMineType(filename)+'" style="font-size:20px;"></i>';

        ftag += '<img src="' + thumbs[0] + '" style="width: 20px;">';
        ftag += '</span>';
        ftag += '<span class="cgobj-name" style="margin-left: 10px">';
        ftag += filename;
        ftag += '</span>';
        ftag += '</div>';
        ftag += '</div>';
        $('.Media_directory_files').append(ftag);
        $('#' + prefix + fileid).dblclick(function (e) {
          e.preventDefault();
          var imgUrl = $(this).attr('dara-url'); //var ename = $(this).children('span.cgobj-name').text(); console.log(path+ename);

          $('#' + img_id).attr('src', imgUrl);
          $('#' + file_pre_id).val(imgUrl);
          $('#MediaDirectoryModal').modal('hide');
          var value = imgUrl + "||" + fval;

          if (is_upload) {
            $.ajax({
              url: ajax_url,
              type: 'POST',
              data: {
                id: id,
                trans: trans,
                dbname: dbname,
                table: table,
                field: field,
                fval: value
              },
              success: function success(data) {
                if (data.msg == "ok") {} else alert(data.msg);
              },
              error: function error(jqXHR, errdata, errorThrown) {
                console.log(errdata);
              }
            });
          }
        });
        $('div[id^="sele_media_file"]').on('mouseover', function () {
          $(this).css("background", "#f5f5f5");
        });
        $('div[id^="sele_media_file"]').on('mouseleave', function () {
          $(this).css("background", "#ffffff");
        });
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
};

var MediaSelectImageModal = function MediaSelectImageModal(vueOBJ) {
  $('#MediaDirectoryModal').remove();
  vueNavOBJ = vueOBJ;
  var pgtxt_media = _mjs_module__WEBPACK_IMPORTED_MODULE_1__.default.data.getByAjaxtext(vueNavOBJ.$store.state.sitecontents, 'pgtxt_media');
  var btntxt_search = _mjs_module__WEBPACK_IMPORTED_MODULE_1__.default.data.getByAjaxtext(vueNavOBJ.$store.state.sitecontents, 'btntxt_search');
  var htag = '';
  htag += '<div class="modal fade" id="MediaDirectoryModal">';
  htag += '<div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">';
  htag += '<div class="modal-content" style="height:420px;" >';
  htag += '<div class="modal-header" style="background: whitesmoke;">';
  htag += '<h4 class="modal-title">' + pgtxt_media + '</h4>';
  htag += '</div>';
  htag += '<div class="d-flex panel" style="margin: 20px 0px 0px 20px;">';
  htag += '<div>';
  htag += '<input type="text" class="form-control" style="background-color: #fff;border: 1px solid #ced4da; width: 350px; border-radius: 6px;" id="Media_Modal_Search_Text">';
  htag += '</div>';
  htag += '<div>';
  htag += '<div id="Media_Modal_Search_Btn" class="btn btn-outline-light  dash-my-btn-0 active" style="border-radius: 6px;">';
  htag += '<span>' + btntxt_search + '</span>';
  htag += '</div>';
  htag += '</div>';
  htag += '</div>';
  htag += '<div class="panel" style="margin: 20px;">';
  htag += '<div style="max-height: 250px; min-height: 250px; width: 100%; border: 1px solid #ced4da; overflow-y: auto;">';
  htag += '<div class="Media_directory_files">';
  htag += '</div>';
  htag += '</div>';
  htag += '</div>';
  htag += '</div>';
  htag += '</div>';
  htag += '</div>';
  $('body').append(htag);
  $('#Media_Modal_Search_Btn').click(function () {
    SearchMediaDirectory();
  });
};

var getMediaType = function getMediaType() {
  return mineType;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    setImageTagID: setImageTagID,
    getDirectories: getDirectories,
    MediaSelectImageModal: MediaSelectImageModal,
    getMediaType: getMediaType
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.page1_content_content_bottom svg{\n    color: #6b85e2;\n}\n.page_slider_content_list{\n    display: none;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.awml_page_button{\n    width: 120px;\n}\n#aqah_page1_content_side_bar_text,\n#aqah_page2_content_side_bar_text,\n#aqah_page3_content_side_bar_text\n{\n    float: left;\n    cursor: pointer;\n    height: auto;\n}\n#addpic_btn{\n    height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;\n}\n.form-check-input.rect-group{\n    width: 16px;height: 16px; border: 1px solid #bbbbbb;\n    cursor: pointer;\n}\n.form-check-input.rect-group > div{\n    width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;\n}\n.form-check-input.rect-group.active > div{\n    width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;\n}\n.selectedThemeColor{\n    width: 50px;\n    border: 2px solid #888;\n    background: black;\n    cursor: pointer;\n}\n.modal-dialog {\n    max-width: 550px; /* New width for default modal */\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteModuleWeblanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppsWebsiteModuleWeblanguage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteModuleWeblanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteModuleWeblanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue":
/*!**********************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppsWebsiteModuleWeblanguage_vue_vue_type_template_id_8e2a9d4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppsWebsiteModuleWeblanguage.vue?vue&type=template&id=8e2a9d4e& */ "./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=template&id=8e2a9d4e&");
/* harmony import */ var _AppsWebsiteModuleWeblanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppsWebsiteModuleWeblanguage.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=script&lang=js&");
/* harmony import */ var _AppsWebsiteModuleWeblanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppsWebsiteModuleWeblanguage.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _AppsWebsiteModuleWeblanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AppsWebsiteModuleWeblanguage_vue_vue_type_template_id_8e2a9d4e___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppsWebsiteModuleWeblanguage_vue_vue_type_template_id_8e2a9d4e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteModuleWeblanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppsWebsiteModuleWeblanguage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteModuleWeblanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteModuleWeblanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppsWebsiteModuleWeblanguage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=style&index=0&lang=css&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteModuleWeblanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=template&id=8e2a9d4e&":
/*!*****************************************************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=template&id=8e2a9d4e& ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteModuleWeblanguage_vue_vue_type_template_id_8e2a9d4e___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteModuleWeblanguage_vue_vue_type_template_id_8e2a9d4e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteModuleWeblanguage_vue_vue_type_template_id_8e2a9d4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppsWebsiteModuleWeblanguage.vue?vue&type=template&id=8e2a9d4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=template&id=8e2a9d4e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=template&id=8e2a9d4e&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteModuleWeblanguage.vue?vue&type=template&id=8e2a9d4e& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [
          _vm._v(_vm._s(_vm.cmusususu_apps_website_module_weblanguage))
        ]),
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
              _vm._s(_vm.cmu_apps) +
              "   >> " +
              _vm._s(_vm.cmusu_apps_website) +
              "   >>  " +
              _vm._s(_vm.cmususu_apps_website_module) +
              "   >>  " +
              _vm._s(_vm.cmusususu_apps_website_module_weblanguage) +
              "\n                      "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12", staticStyle: { "margin-bottom": "30px" } },
        [
          _c(
            "div",
            {
              staticClass: "page1_content_side_bar",
              staticStyle: { display: "flex" }
            },
            [
              _c("div", { staticClass: "awml_page_button" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "page1_content_side_bar_text page1_content_side_bar_seleted",
                    attrs: {
                      id: "aqah_page1_content_side_bar_text",
                      "data-target": "setting"
                    }
                  },
                  [_vm._v(_vm._s(_vm.cbtntxt_setting))]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "awml_page_button" }, [
                _c(
                  "div",
                  {
                    staticClass: "page1_content_side_bar_text",
                    attrs: {
                      id: "aqah_page2_content_side_bar_text",
                      "data-target": "list"
                    }
                  },
                  [_vm._v(_vm._s(_vm.cpgtxt_list))]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12",
          staticStyle: { "padding-bottom": "20px", display: "flex" }
        },
        [
          _c("div", { staticClass: "col-md-10 " }),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-2 text-right" }, [
            _c(
              "div",
              {
                staticClass:
                  "btn btn-outline-light  dash-my-btn-0 active p-l-r-35",
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.showAddLanguageDialog()
                  }
                }
              },
              [_c("span", [_vm._v("+ " + _vm._s(_vm.cbtntxt_add))])]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list active",
          attrs: { id: "setting" }
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
                          "margin-left": "15px",
                          "font-size": "1rem"
                        }
                      },
                      [_vm._v(_vm._s(_vm.cbtntxt_setting))]
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
                  attrs: { role: "grid", "aria-describedby": "user-list_info" }
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
                        _c("th", {
                          staticStyle: { width: "40px!important", border: "0" }
                        }),
                        _vm._v(" "),
                        _c("th", { staticStyle: { border: "0" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_name))
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
                                staticClass: "setting_selected_all_delete",
                                staticStyle: { cursor: "pointer" }
                              },
                              [_vm._v(_vm._s(_vm.cbtntxt_delete))]
                            )
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("tbody", { attrs: { id: "awml_setting_content_lists" } })
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _vm._m(1)
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list",
          attrs: { id: "list" }
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
                  attrs: { role: "grid", "aria-describedby": "user-list_info" }
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
                        _c("th", {
                          staticStyle: { width: "40px!important", border: "0" }
                        }),
                        _vm._v(" "),
                        _c("th", { staticStyle: { border: "0" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_name))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { border: "0" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_language))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { border: "0" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_style))
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
                                staticClass: "list_selected_all_delete",
                                staticStyle: { cursor: "pointer" }
                              },
                              [_vm._v(_vm._s(_vm.cbtntxt_delete))]
                            )
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("tbody", { attrs: { id: "awml_list_content_lists" } })
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _vm._m(2)
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "mySettingLangModal" } },
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
                    staticStyle: { color: "#055ada", "font-size": "16px" }
                  },
                  [_vm._v(_vm._s(_vm.cpgtxt_addlanguage))]
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
                  attrs: { id: "myAlertModalbody" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "panel",
                      staticStyle: { display: "block" },
                      attrs: { id: "tab4" }
                    },
                    [
                      _c("form", { attrs: { id: "sslang_reg_lang" } }, [
                        _vm._m(3),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-12" }, [
                            _c(
                              "div",
                              {
                                staticClass: "bottom",
                                staticStyle: {
                                  "text-align": "center",
                                  "padding-top": "0px"
                                }
                              },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-outline-light  dash-my-btn-0 active p-l-r-35",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                        return _vm.awmlang_add()
                                      }
                                    }
                                  },
                                  [_vm._v("+ " + _vm._s(_vm.cbtntxt_add))]
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "myListLangModal" } }, [
      _c(
        "div",
        {
          staticClass: "modal-dialog modal-dialog-centered modal-sm",
          staticStyle: { "min-width": "450px!important" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "h4",
                {
                  staticClass: "modal-title",
                  staticStyle: { color: "#055ada", "font-size": "16px" }
                },
                [_vm._v(_vm._s(_vm.cpgtxt_addlanguage))]
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
                attrs: { id: "myMenuAddModalbody" }
              },
              [
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "panel", attrs: { id: "tab1" } }, [
                  _c(
                    "div",
                    {
                      staticClass: "row",
                      staticStyle: { "padding-bottom": "10px" }
                    },
                    [
                      _vm._m(5),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticStyle: { margin: "10px 10px 0px 10px" } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "row",
                              staticStyle: { padding: "10px" }
                            },
                            [
                              _c("div", { staticClass: "col-md-1" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticStyle: {
                                        "margin-top": "8px",
                                        color: "#666",
                                        width: "100px"
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.cpgtxt_name))]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _vm._m(6),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-1" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticStyle: {
                                        "margin-top": "8px",
                                        color: "#666",
                                        width: "100px"
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.cpgtxt_language))]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _vm._m(7),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "col-md-12 text-left",
                                  staticStyle: {
                                    "margin-top": "-10px",
                                    "padding-left": "97px",
                                    "padding-bottom": "10px"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "btn btn-outline-light  dash-my-btn-0 text-center",
                                      staticStyle: {
                                        width: "70px",
                                        padding: "10px 20px"
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation()
                                          return _vm.showEditLangDialog()
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(_vm.cbtntxt_edit) +
                                          "\n                                        "
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "col-md-12 ",
                                  staticStyle: { display: "flex" }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "col-md-3",
                                      staticStyle: { "padding-left": "0px" }
                                    },
                                    [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c(
                                          "label",
                                          {
                                            staticStyle: {
                                              "margin-top": "4px",
                                              color: "#666",
                                              width: "100px"
                                            }
                                          },
                                          [_vm._v(_vm._s(_vm.cpgtxt_css))]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "form-check col-md-4",
                                      staticStyle: { "line-height": "24px" }
                                    },
                                    [
                                      _vm._m(8),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          staticClass: "form-check-label m-l-10"
                                        },
                                        [_vm._v(_vm._s(_vm.cpgtxt_icon))]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "form-check col-md-4",
                                      staticStyle: { "line-height": "24px" }
                                    },
                                    [
                                      _vm._m(9),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          staticClass: "form-check-label m-l-10"
                                        },
                                        [_vm._v(_vm._s(_vm.cbtntxt_text))]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "col-md-12 row modal-dialog-row",
                                  staticStyle: {
                                    "padding-left": "50px",
                                    "padding-bottom": "10px",
                                    display: "none"
                                  },
                                  attrs: { id: "awml_icon_select_container" }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "col-md-2 page2_content_text"
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticStyle: { width: "80px" } },
                                        [
                                          _c("span", [
                                            _vm._v(_vm._s(_vm.cpgtxt_icon))
                                          ])
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(10)
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "col-md-12 row modal-dialog-row",
                                  staticStyle: {
                                    "padding-left": "50px",
                                    "padding-bottom": "10px",
                                    display: "none"
                                  },
                                  attrs: { id: "awml_text_select_container" }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "col-md-2 page2_content_text"
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticStyle: { width: "80px" } },
                                        [
                                          _c("span", [
                                            _vm._v(_vm._s(_vm.cbtntxt_text))
                                          ])
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(11)
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "col-md-12 row modal-dialog-row",
                                  staticStyle: {
                                    "padding-left": "50px",
                                    "padding-bottom": "10px",
                                    display: "none"
                                  },
                                  attrs: {
                                    id: "awml_text_sizecolor_select_container"
                                  }
                                },
                                [
                                  _vm._m(12),
                                  _vm._v(" "),
                                  _vm._m(13),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-md-1 selectedThemeColor",
                                      staticStyle: {
                                        "margin-left": "40px",
                                        "margin-top": "8px",
                                        "margin-bottom": "8px"
                                      },
                                      attrs: { id: "selected_color_image" },
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation()
                                          return _vm.ShowColorPalette()
                                        }
                                      }
                                    },
                                    [
                                      _c("input", {
                                        attrs: {
                                          type: "hidden",
                                          value: "",
                                          id: "hiddenThemeColorPicker"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(14)
                                ]
                              )
                            ]
                          )
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
                          attrs: { id: "wwgm-model-add" },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.addListLangDataOne()
                            }
                          }
                        },
                        [_c("span", [_vm._v("+ " + _vm._s(_vm.cbtntxt_add))])]
                      )
                    ])
                  ])
                ])
              ]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "myListEditLangModal" } },
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
                    staticStyle: { color: "#055ada", "font-size": "16px" }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.cbtntxt_edit) +
                        " " +
                        _vm._s(_vm.cpgtxt_language)
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
                  attrs: { id: "myListEditLangModalbody" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "panel", staticStyle: { display: "block" } },
                    [
                      _c("form", [
                        _vm._m(15),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-12" }, [
                            _c(
                              "div",
                              {
                                staticClass: "bottom",
                                staticStyle: {
                                  "text-align": "center",
                                  "padding-top": "0px"
                                }
                              },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-outline-light  dash-my-btn-0 active p-l-r-35",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                        return _vm.awmlang_add_to_list_dialog()
                                      }
                                    }
                                  },
                                  [_vm._v("+ " + _vm._s(_vm.cbtntxt_add))]
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ]
                  )
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
          id: "apps-website-module-weblanguage-fav",
          "data-status": "off",
          "data-page-info": "Web language_apps-website-module-weblanguage"
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-10 text-center" }, [
        _c("div", {
          staticStyle: { width: "100%" },
          attrs: { id: "awml_settingpage_nav" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-10 text-center" }, [
        _c("div", {
          staticStyle: { width: "100%" },
          attrs: { id: "awml_listpage_nav" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row", staticStyle: { padding: "10px" } }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          {
            staticClass: "table-responsive",
            staticStyle: {
              "max-height": "300px",
              "overflow-y": "auto",
              "min-height": "100px"
            }
          },
          [
            _c(
              "table",
              {
                staticClass: "table table-lg  no-footer",
                attrs: {
                  id: "sslang-list-table",
                  role: "grid",
                  "aria-describedby": "sslang-list_info"
                }
              },
              [_c("tbody", { attrs: { id: "awmlang_dlg_list" } })]
            )
          ]
        )
      ])
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
        staticStyle: { display: "none" },
        attrs: { id: "awml_list_dlg_err" }
      },
      [
        _c("div", { staticClass: "col" }, [
          _vm._v(
            "\n                            error;\n                        "
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("div", {
        staticClass: "form-group m-b-0",
        staticStyle: { padding: "1px 0px 0px 0px", "font-family": "SimHei" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-md-11", staticStyle: { "padding-left": "62px" } },
      [
        _c("div", {}, [
          _c("input", {
            staticClass: "form-control",
            staticStyle: { width: "200px" },
            attrs: {
              type: "text",
              placeholder: "",
              id: "awml_list_dlg_input_name",
              "aria-describedby": "basic-addon2"
            }
          })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-md-11", staticStyle: { "padding-left": "62px" } },
      [
        _c("label", {
          staticStyle: { "margin-top": "8px", color: "#666" },
          attrs: { id: "awml_list_dlg_selected_country" }
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
      {
        staticClass: "form-check-input rect-group",
        attrs: { id: "awml_list_dlg_chk_icon" }
      },
      [_c("div")]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "form-check-input rect-group",
        attrs: { id: "awml_list_dlg_chk_text" }
      },
      [_c("div")]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-10" }, [
      _c("select", {
        staticClass: "form-control float-left",
        staticStyle: { width: "200px" },
        attrs: { id: "awml_sel_icon_type", name: "awml_sel_icon_type" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-10" }, [
      _c("select", {
        staticClass: "form-control float-left",
        staticStyle: { width: "200px" },
        attrs: { id: "awml_sel_text_type", name: "awml_sel_text_type" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2 page2_content_text" }, [
      _c("div", { staticStyle: { width: "80px" } }, [_c("span")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-5" }, [
      _c("select", {
        staticClass: "form-control float-left",
        staticStyle: { width: "200px" },
        attrs: { id: "awml_sel_text_size", name: "awml_sel_text_size" }
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
        staticClass: "col-md-2 text-center",
        staticStyle: {
          height: "40px",
          "line-height": "40px",
          "text-align": "center"
        }
      },
      [
        _c("span", { attrs: { id: "selected_color_value" } }, [
          _vm._v("#000000")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row", staticStyle: { padding: "10px" } }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          {
            staticClass: "table-responsive",
            staticStyle: {
              "max-height": "300px",
              "overflow-y": "auto",
              "min-height": "100px"
            }
          },
          [
            _c(
              "table",
              {
                staticClass: "table table-lg  no-footer",
                attrs: { role: "grid", "aria-describedby": "sslang-list_info" }
              },
              [_c("tbody", { attrs: { id: "awmlang_editdlg_list" } })]
            )
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);
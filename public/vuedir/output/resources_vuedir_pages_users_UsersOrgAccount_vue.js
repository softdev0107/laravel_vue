"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vuedir_pages_users_UsersOrgAccount_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/jsfunc/lang_module */ "./resources/vuedir/assets/jsfunc/lang_module.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var vueOBJ = null;
var txt_name;
var txt_size;
var txt_style;
var txt_limitation;
var txt_character;
var txt_image;
var txt_set;
var txt_pleaseselectitem;
var txt_updatesucceeded;
var txt_createitem;
var txt_font;
var txt_line;
var txt_height;
var txt_characters;
var btn_edit;
var btn_delete;
var btn_text;
var btn_number;
var btn_email;
var btn_date;
var tabIndex = 1;
var btnIndex = 0;
var settingfield = "";
var is_add = false;
var is_edit = false;
var editIndex = -1;
var pgperm = {};

function loadPageText() {
  txt_name = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_name');
  txt_size = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_size');
  txt_style = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_style');
  txt_limitation = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_limitation');
  txt_image = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_image');
  txt_character = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_character');
  txt_set = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_set');
  txt_pleaseselectitem = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_pleaseselectitem');
  txt_updatesucceeded = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_updatesucceeded');
  txt_createitem = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_createitem');
  txt_font = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_font');
  txt_line = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_line');
  txt_height = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_height');
  txt_characters = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_characters');
  btn_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
  btn_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
  btn_text = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_text');
  btn_number = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_number');
  btn_email = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_email');
  btn_date = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_date');
}

function initAccountPage() {
  $("#user_id").val(userid);
  $('a[id^="system_user_account_tab-"]').click(function () {
    var id = $(this).attr('id');
    tabIndex = id.split("-")[1];
    $("#tab_index").val(tabIndex);

    if (tabIndex == 3) {
      vueOBJ.getPasswordItemList("strong");
      $('#add_item_part').css('display', 'none');
    } else loadingPageData();
  });
}

function ShowModalWindow() {
  var modalTableHeader = "";

  if (is_add) {
    $('#modal_title').text(txt_createitem);

    if (settingfield == "txt") {
      modalTableHeader += '<th class="border-bottom-0">' + txt_name + '</th>';
      modalTableHeader += '<th class="border-bottom-0">' + txt_limitation + '</th>';
      modalTableHeader += '<th class="border-bottom-0">' + txt_style + '</th>';
    } else if (settingfield == "number") {
      modalTableHeader += '<th class="border-bottom-0">' + txt_name + '</th>';
      modalTableHeader += '<th class="border-bottom-0">' + txt_font + ' ' + txt_size + '</th>';
      modalTableHeader += '<th class="border-bottom-0">' + txt_line + ' ' + txt_height + '</th>';
      modalTableHeader += '<th class="border-bottom-0">' + txt_characters + '</th>';
    }
  } else {
    if (settingfield == "img") $('#modal_title').text(txt_image + " " + txt_set);else if (settingfield == "txt") $('#modal_title').text(txt_character + " " + txt_set);
    modalTableHeader += '<th class="border-bottom-0">' + txt_name + '</th>';
    if (settingfield == "img") modalTableHeader += '<th class="border-bottom-0">' + txt_size + '</th>';else if (settingfield == "txt") modalTableHeader += '<th class="border-bottom-0">' + txt_limitation + '</th>';
    modalTableHeader += '<th class="border-bottom-0">' + txt_style + '</th>';
  }

  $('#ssua_table_header').html(modalTableHeader);
  $('#ssua_table_body').html("");
  $("#modal_table_select_item").val("");
  $.ajax({
    url: 'admin.getSystemSettingField',
    type: 'POST',
    data: {
      settingfield: settingfield
    },
    success: function success(data) {
      if (data.msg == "ok") {
        if (data.fieldData != "" && data.fieldData != null) {
          setTableBody(data.fieldData);
        }
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert(data.msg);
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function setTableBody(fieldData) {
  var modalTableBody = "";
  var name = "";
  var cont = "";
  var style = "";
  var cont1 = "";
  var cont2 = "";
  var cont3 = "";

  for (var i = 0; i < fieldData.length; i++) {
    var data = fieldData[i];

    if (settingfield == "img") {
      name = data.name;
      cont = data.size;
      style = data.style;
    } else if (settingfield == "txt") {
      name = data.name;
      cont = data.minvalue + "-" + data.maxvalue;
      style = data.style_title;
    } else if (settingfield == "number") {
      name = data.fname;
      cont1 = data.fontsize;
      cont2 = data.flineheight;
      cont = data.fnumber;
    } else if (settingfield == "email") {} else if (settingfield == "date") {}

    modalTableBody += "<tr class='sua-field-list-item' data-id='" + data.id + "' data-name='" + name + "' data-cont='" + cont + "'>";
    modalTableBody += "<td class='border-0' style='border-radius: 50px 0 0 50px'>" + name + "</td>";

    if (settingfield == "number") {
      modalTableBody += "<td class='border-0'>" + cont1 + "</td>";
      modalTableBody += "<td class='border-0'>" + cont2 + "</td>";
    }

    modalTableBody += "<td class='border-0'>" + cont + "</td>";
    modalTableBody += "<td class='border-0' style='border-radius: 0 50px 50px 0'>" + style + "</td>";
    modalTableBody += "</tr>";
  }

  $('#ssua_table_body').html(modalTableBody);
  $(document).on('click', '.sua-field-list-item', function () {
    var name = $(this).attr("data-name");
    var itemdata = $(this).attr("data-cont");
    var id = $(this).attr("data-id");
    $("#modal_table_select_item").val(name);
    $("#modal_item_con").val(itemdata);
    $("#modal_item_id").val(id);
    $("#modal_item_name").val(name);
  });
}

function pageEvent() {
  $('#ssua_general_photo_editBtn').click(function () {
    is_add = false;
    is_edit = false;
    btnIndex = 1;
    settingfield = "img";
    $('#selete_filed_div').html("");
    $('#EditItemModal').modal('show');
    ShowModalWindow();
  });
  $('#ssua_general_back_editBtn').click(function () {
    is_add = false;
    is_edit = false;
    btnIndex = 2;
    settingfield = "img";
    $('#selete_filed_div').html("");
    $('#EditItemModal').modal('show');
    ShowModalWindow();
  });
  $('#ssua_general_username_editBtn').click(function () {
    is_add = false;
    is_edit = false;
    btnIndex = 3;
    settingfield = "txt";
    $('#selete_filed_div').html("");
    $('#EditItemModal').modal('show');
    ShowModalWindow();
  });
  $('#ssua_general_name_editBtn').click(function () {
    is_add = false;
    is_edit = false;
    btnIndex = 4;
    settingfield = "txt";
    $('#selete_filed_div').html("");
    $('#EditItemModal').modal('show');
    ShowModalWindow();
  });
  /*
          $('#ssua_information_department_editBtn').click(function(){
              is_add = false;
              is_edit = false;
              btnIndex = 1;
              settingfield = "txt";
              $('#selete_filed_div').html("");
              $('#EditItemModal').modal('show');
              ShowModalWindow();
          });
          $('#ssua_information_position_editBtn').click(function(){
              is_add = false;
              is_edit = false;
              btnIndex = 2;
              settingfield = "txt";
              $('#selete_filed_div').html("");
              $('#EditItemModal').modal('show');
              ShowModalWindow();
          });
          $('#ssua_information_group_editBtn').click(function(){
              is_add = false;
              is_edit = false;
              btnIndex = 3;
              settingfield = "txt";
              $('#selete_filed_div').html("");
              $('#EditItemModal').modal('show');
              ShowModalWindow();
          });
  */

  $("#sus-password-letter, #sus-password-digital, #sus-password-special, #sus-password-letter-option").click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  });
  var sus_password_color = document.getElementById('sus-password-color');
  var pickerColor = new ColorPicker(sus_password_color, '#a2de9f');
  sus_password_color.addEventListener('colorChange', function (event) {
    var color = event.detail.color.hexa;
    $('#sus-password-color_value').text(color);
  });
  var sus_password_warning_color = document.getElementById('sus-password-warning-color');
  var pickerWarningColor = new ColorPicker(sus_password_warning_color, '#e82b5c');
  sus_password_warning_color.addEventListener('colorChange', function (event) {
    var color = event.detail.color.hexa;
    $('#sus-password-warning-color_value').text(color);
  });
}

function loadingPageData() {
  $.ajax({
    url: 'admin.getUsersOrgAccountAllData',
    type: 'POST',
    data: {
      userid: userid,
      tabIndex: tabIndex
    },
    success: function success(data) {
      if (data.msg == "ok") {
        if (data.baseData != "" && data.baseData != null) {
          var baseData = $.parseJSON(data.baseData);
          $("#base_item1_id").val(baseData[0].id_1);
          $("#base_item1_val").val(baseData[0].val_1);
          $("#base_item2_id").val(baseData[0].id_2);
          $("#base_item2_val").val(baseData[0].val_2);
          $("#base_item3_id").val(baseData[0].id_3);
          $("#base_item3_val").val(baseData[0].val_3);
          $("#base_item4_id").val(baseData[0].id_4);
          $("#base_item4_val").val(baseData[0].val_4);
          showPageBaseData(baseData);
        }

        if (data.addData != "" && data.addData != null) {
          showPageAddedData($.parseJSON(data.addData));
        } else {
          $('#add_index').val(0);
          $('#ssua_add_item').html("");
        }
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert(data.msg);
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function showPageBaseData(baseData) {
  if (tabIndex == 1) {
    $("#ssua_general_photo_size").text(baseData[0].val_1);
    $("#ssua_general_back_size").text(baseData[0].val_2);
    $("#ssua_general_username_limit").text(baseData[0].val_3);
    $("#ssua_general_name_limit").text(baseData[0].val_4);
    $('#add_item_part').css('display', 'block');
  }
  /*
          if(tabIndex == 2){
              $("#information_department_limitation").text(baseData[0].val_1);
              $("#information_position_limitation").text(baseData[0].val_2);
              $("#information_group_limitation").text(baseData[0].val_3);
          }
  */


  if (tabIndex == 3) {
    $('#add_item_part').css('display', 'none');
  }
}

function showPageAddedData(addData) {
  var tags = "";

  if (addData != null && addData != "") {
    $('#add_index').val(addData.length);

    for (var i = 0; i < addData.length; i++) {
      var list = addData[i];
      var index = list.index;
      var settingfield = list.settingfield;
      var id = list.id;
      var name = list.name;
      var itemdata = list.itemdata;
      tags += "<div class='row'>";
      tags += "<div class='col-md-2'><div class='form-group'><label style='margin-top: 8px' class='data-ajax' data-ajax='pgtxt_name'>" + name + "</label></div></div>";
      tags += "<div class='col-md-2 mt-2'><div id='sua-name-limitation' class='input-group' style='color: #a7a7ed'>" + itemdata + "</div></div>";
      tags += "<div class='col-md-2 text-left'><div class='btn btn-outline-light dash-my-btn-0 data-ajax' id='sua-text-list-item' data-id='" + id + "' data-cont='" + itemdata + "' data-name='" + name + "' data-index='" + index + "' data-ajax='btntxt_edit'><span>" + btn_edit + "</span></div></div>";
      tags += "<div class='col-md-3 text-left'><div class='btn btn-outline-light dash-my-btn-0 data-ajax' id='sua-text-del-item' data-index='" + index + "' data-ajax='btntxt_delete'><span>" + btn_delete + "</span></div></div>";
      tags += "</div>";
    }

    $('#ssua_add_item').html(tags);
    $('div[id="sua-text-list-item"]').click(function () {
      editIndex = $(this).attr("data-index");
      var name = $(this).attr("data-name");
      var itemdata = $(this).attr("data-cont");
      var id = $(this).attr("data-id");
      $("#modal_item_con").val(itemdata);
      $("#modal_item_id").val(id);
      $("#modal_item_name").val(name);
      is_edit = true;
      is_add = false;
      vueOBJ.AccountSetEditItemBtn();
    });
    $('div[id="sua-text-del-item"]').click(function () {
      var delIndex = $(this).attr("data-index");
      $.ajax({
        url: 'admin.deleteUsersOrgAccountAddData',
        type: 'POST',
        data: {
          userid: userid,
          tabIndex: tabIndex,
          delIndex: delIndex
        },
        success: function success(data) {
          if (data.msg == "ok") {
            if (data.addData != "" && data.addData != null) {
              showPageAddedData($.parseJSON(data.addData));
            } else {
              $('#ssua_add_item').html("");
              $('#add_index').val(0);
            }
          } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert(data.msg);
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    });
  }
}

function AddModalTabButton() {
  settingfield = "txt";
  $('#selete_filed_div').html("");
  $('#EditItemModal').modal('show');
  ShowModalWindow();
  var modalTab = "";
  modalTab += '<div class="btn btn-outline-light active dash-my-btn-1" id="tab-mu_1" style="width: 23%; margin-right: 5px;"><span class="m-auto">' + btn_text + '</span></div>';
  modalTab += '<div class="btn btn-outline-light dash-my-btn-1" id="tab-mu_2" style="width: 23%; margin-right: 5px;"><span class="m-auto">' + btn_number + '</span></div>';
  modalTab += '<div class="btn btn-outline-light dash-my-btn-1" id="tab-mu_3" style="width: 23%; margin-right: 5px;"><span class="m-auto">' + btn_email + '</span></div>';
  modalTab += '<div class="btn btn-outline-light dash-my-btn-1" id="tab-mu_4" style="width: 23%; margin-right: 5px;"><span class="m-auto">' + btn_date + '</span></div>';
  $('#selete_filed_div').html(modalTab);
  $('div[id^="tab-mu_"]').click(function () {
    var id = $(this).attr("id");
    modalTabClick(id.split("_")[1]);
  });
}

function modalTabClick(n) {
  $('.modal-body .btn.btn-outline-light').removeClass('active');

  if (n == 1) {
    settingfield = "txt";
    $('#tab-mu_1').addClass('active');
  } else if (n == 2) {
    settingfield = "number";
    $('#tab-mu_2').addClass('active');
  } else if (n == 3) {
    settingfield = "email";
    $('#tab-mu_3').addClass('active');
  } else if (n == 4) {
    settingfield = "date";
    $('#tab-mu_4').addClass('active');
  }

  ShowModalWindow();
}

function ShowAlertPasswordModalDlg() {
  $('#myAlertPasswordModal').modal('show');
}

function SaveGeneralSetting() {
  var formData = new FormData($("#users_org_account_frm")[0]);
  $.ajax({
    url: 'admin.setUsersOrgAccountBaseData',
    type: 'POST',
    data: formData,
    async: false,
    success: function success(data) {
      if (data.msg == "ok") {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert(txt_updatesucceeded);
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

function SavePasswordSetting() {
  if (pgperm.create != 1 || pgperm.write != 1) {
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('pgtxt_notpermission');
    return;
  }

  var password_data = {};
  var password_head_val = $.trim($('#sus_password_head_val').val());

  if (password_head_val != '') {
    var sval_list = password_head_val.split(':');

    for (var i = 0; i < sval_list.length; i++) {
      password_data[sval_list[i]] = {
        "name": sval_list[i],
        "check": "1"
      };
    }
  }

  var notice = $('#sus_password_notice').val();
  var postData = {
    data: password_head_val !== '' ? password_data : '',
    notice: notice
  };
  axios__WEBPACK_IMPORTED_MODULE_1___default().post('admin.updateUOPPasswordItem', postData).then(function (response) {
    var msg = response.data.msg;

    if (msg === "ok") {
      vueOBJ.getPasswordItemList("strong");
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert(txt_updatesucceeded);
    } else {
      console.log(response.data.message);
    }
  })["catch"](function (error) {
    console.log(error);
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Lang_module: _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_2__.default
  },
  data: function data() {
    return {
      pageid: 'users-organization-account-fav',
      mususu_users_org_account: '',
      mu_users: '',
      musu_users_org: '',
      btntxt_general: '',
      btntxt_senior: '',
      btntxt_infomation: '',
      pgtxt_imgupcondition: '',
      pgtxt_username: '',
      pgtxt_name: '',
      pgtxt_mail: '',
      pgtxt_background: '',
      btntxt_edit: '',
      btntxt_add: '',
      pgtxt_ProfilePhoto: '',
      pgtxt_ProfileBackground: '',
      pgtxt_news: '',
      pgtxt_style: '',
      pgtxt_limitation: '',
      pgtxt_character: '',
      pgtxt_set: '',
      pgtxt_title: '',
      pgtxt_createitem: '',
      btntxt_text: '',
      btntxt_number: '',
      btntxt_email: '',
      btntxt_date: '',
      btntxt_delete: '',
      btntxt_savechange: '',
      pgtxt_font: '',
      pgtxt_size: '',
      pgtxt_line: '',
      pgtxt_height: '',
      pgtxt_characters: '',
      pgtxt_smsalramarea: '',
      pgtxt_department: '',
      pgtxt_position: '',
      pgtxt_group: '',
      pgtxt_password: '',
      pgtxt_setting: '',
      pgtxt_image: '',
      pgtxt_pleaseselectitem: '',
      pgtxt_updatesucceeded: '',
      btntxt_ok: '',
      btntxt_cancel: '',
      pgtxt_wantdeleteitem: '',
      pgtxt_notpermission: '',
      pgtxt_notification: '',
      pgtxt_greaterthan: '',
      pgtxt_equalto: '',
      pgtxt_lessthan: '',
      pgtxt_nogreaterthan: '',
      pgtxt_notlessthan: '',
      pgtxt_alphabet: '',
      pgtxt_special: '',
      pgtxt_upper_lower: '',
      pgtxt_colour: '',
      pgtxt_warning: '',
      pgtxt_format: '',
      pgtxt_number: '',
      pgtxt_notice: ''
    };
  },
  computed: {
    // 계산된 getter
    title: function title() {
      return this.$store.state.curMenu;
    },
    cpgtxt_createitem: function cpgtxt_createitem() {
      return this.pgtxt_createitem;
    },
    cbtntxt_text: function cbtntxt_text() {
      return this.btntxt_text;
    },
    cbtntxt_number: function cbtntxt_number() {
      return this.btntxt_number;
    },
    cbtntxt_email: function cbtntxt_email() {
      return this.btntxt_email;
    },
    cbtntxt_date: function cbtntxt_date() {
      return this.btntxt_date;
    },
    cpgtxt_font: function cpgtxt_font() {
      return this.pgtxt_font;
    },
    cpgtxt_size: function cpgtxt_size() {
      return this.pgtxt_size;
    },
    cpgtxt_line: function cpgtxt_line() {
      return this.pgtxt_line;
    },
    cpgtxt_height: function cpgtxt_height() {
      return this.pgtxt_height;
    },
    cpgtxt_characters: function cpgtxt_characters() {
      return this.pgtxt_characters;
    },
    cpgtxt_smsalramarea: function cpgtxt_smsalramarea() {
      return this.pgtxt_smsalramarea;
    },
    cmususu_users_org_account: function cmususu_users_org_account() {
      return this.mususu_users_org_account;
    },
    cmu_users: function cmu_users() {
      return this.mu_users;
    },
    cmusu_users_org: function cmusu_users_org() {
      return this.musu_users_org;
    },
    cbtntxt_general: function cbtntxt_general() {
      return this.btntxt_general;
    },
    cbtntxt_senior: function cbtntxt_senior() {
      return this.btntxt_senior;
    },
    cbtntxt_infomation: function cbtntxt_infomation() {
      return this.btntxt_infomation;
    },
    cpgtxt_sua_Information: function cpgtxt_sua_Information() {
      return this.pgtxt_sua_Information;
    },
    cpgtxt_imgupcondition: function cpgtxt_imgupcondition() {
      return this.pgtxt_imgupcondition;
    },
    cpgtxt_username: function cpgtxt_username() {
      return this.pgtxt_username;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
    },
    cpgtxt_style: function cpgtxt_style() {
      return this.pgtxt_style;
    },
    cpgtxt_mail: function cpgtxt_mail() {
      return this.pgtxt_mail;
    },
    cpgtxt_background: function cpgtxt_background() {
      return this.pgtxt_background;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_savechange: function cbtntxt_savechange() {
      return this.btntxt_savechange;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cpgtxt_ProfilePhoto: function cpgtxt_ProfilePhoto() {
      return this.pgtxt_ProfilePhoto;
    },
    cpgtxt_ProfileBackground: function cpgtxt_ProfileBackground() {
      return this.pgtxt_ProfileBackground;
    },
    cpgtxt_limitation: function cpgtxt_limitation() {
      return this.pgtxt_limitation;
    },
    cpgtxt_character: function cpgtxt_character() {
      return this.pgtxt_character;
    },
    cpgtxt_set: function cpgtxt_set() {
      return this.pgtxt_set;
    },
    cpgtxt_title: function cpgtxt_title() {
      return this.pgtxt_title;
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
    cpgtxt_password: function cpgtxt_password() {
      return this.pgtxt_password;
    },
    cpgtxt_setting: function cpgtxt_setting() {
      return this.pgtxt_setting;
    },
    cpgtxt_notice: function cpgtxt_notice() {
      return this.pgtxt_notice;
    },
    cpgtxt_image: function cpgtxt_image() {
      return this.pgtxt_image;
    },
    cpgtxt_pleaseselectitem: function cpgtxt_pleaseselectitem() {
      return this.pgtxt_pleaseselectitem;
    },
    cpgtxt_updatesucceeded: function cpgtxt_updatesucceeded() {
      return this.pgtxt_updatesucceeded;
    },
    cpgtxt_greaterthan: function cpgtxt_greaterthan() {
      return this.pgtxt_greaterthan;
    },
    cpgtxt_equalto: function cpgtxt_equalto() {
      return this.pgtxt_equalto;
    },
    cpgtxt_lessthan: function cpgtxt_lessthan() {
      return this.pgtxt_lessthan;
    },
    cpgtxt_nogreaterthan: function cpgtxt_nogreaterthan() {
      return this.pgtxt_nogreaterthan;
    },
    cpgtxt_notlessthan: function cpgtxt_notlessthan() {
      return this.pgtxt_notlessthan;
    },
    cpgtxt_alphabet: function cpgtxt_alphabet() {
      return this.pgtxt_alphabet;
    },
    cpgtxt_special: function cpgtxt_special() {
      return this.pgtxt_special;
    },
    cpgtxt_upper_lower: function cpgtxt_upper_lower() {
      return this.pgtxt_upper_lower;
    },
    cpgtxt_colour: function cpgtxt_colour() {
      return this.pgtxt_colour;
    },
    cpgtxt_warning: function cpgtxt_warning() {
      return this.pgtxt_warning;
    },
    cpgtxt_format: function cpgtxt_format() {
      return this.pgtxt_format;
    },
    cpgtxt_number: function cpgtxt_number() {
      return this.pgtxt_number;
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
  beforeMount: function beforeMount() {},
  created: function created() {
    var $userinfo = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__.default.data.jsonparse(window.Laravel.userinfo);
  },
  mounted: function mounted() {
    /* fav part*/
    vueOBJ = this;
    pgperm = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__.default.data.getPagePermission(this.$store.state.permission, this.pageid);
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    this.initPage();
  },
  methods: {
    getSiteFaveritelist: function getSiteFaveritelist(list) {
      if (list != null && list != '') {
        var imgsrc = '/images/icons/star_f.png';
        $('#' + this.pageid + ' img').attr("src", imgsrc);
        $('#' + this.pageid).attr("data-status", "on");
      }
    },
    initPage: function initPage() {
      loadPageText();
      loadingPageData();
      initAccountPage();
      pageEvent();
      this.getPasswordItemList("strong");
    },
    SaveBaseItemBtn: function SaveBaseItemBtn() {
      if (tabIndex == 1) SaveGeneralSetting();else if (tabIndex == 3) SavePasswordSetting();
    },
    AccountSetAddItemBtn: function AccountSetAddItemBtn() {
      is_add = true;
      is_edit = false;
      AddModalTabButton();
    },
    AccountSetEditItemBtn: function AccountSetEditItemBtn() {
      is_add = false;
      is_edit = true;
      AddModalTabButton();
    },
    ModalSaveItemBtn: function ModalSaveItemBtn() {
      var title = $('#modal_table_select_item').val();

      if (title === '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert(txt_pleaseselectitem);
      } else {
        if (tabIndex == 1) {
          if (btnIndex == 1) {
            $("#ssua_general_photo_size").text($("#modal_item_con").val());
            $("#base_item1_id").val($("#modal_item_id").val());
            $("#base_item1_val").val($("#modal_item_con").val());
          }

          if (btnIndex == 2) {
            $("#ssua_general_back_size").text($("#modal_item_con").val());
            $("#base_item2_id").val($("#modal_item_id").val());
            $("#base_item2_val").val($("#modal_item_con").val());
          }

          if (btnIndex == 3) {
            $("#ssua_general_username_limit").text($("#modal_item_con").val());
            $("#base_item3_id").val($("#modal_item_id").val());
            $("#base_item3_val").val($("#modal_item_con").val());
          }

          if (btnIndex == 4) {
            $("#ssua_general_name_limit").text($("#modal_item_con").val());
            $("#base_item4_id").val($("#modal_item_id").val());
            $("#base_item4_val").val($("#modal_item_con").val());
          }
        }
        /*
                            if(tabIndex == 2) {
                                if (btnIndex == 1) {
                                    $("#information_department_limitation").text($("#modal_item_con").val());
                                    $("#base_item1_id").val($("#modal_item_id").val());
                                    $("#base_item1_val").val($("#modal_item_con").val());
                                }
                                if (btnIndex == 2) {
                                    $("#information_position_limitation").text($("#modal_item_con").val());
                                    $("#base_item2_id").val($("#modal_item_id").val());
                                    $("#base_item2_val").val($("#modal_item_con").val());
                                }
                                if (btnIndex == 3) {
                                    $("#information_group_limitation").text($("#modal_item_con").val());
                                    $("#base_item3_id").val($("#modal_item_id").val());
                                    $("#base_item3_val").val($("#modal_item_con").val());
                                }
                            }
        */


        if (tabIndex == 3) {
          if (btnIndex == 1) {
            $("#senior_department_limitation").text($("#modal_item_con").val());
            $("#base_item1_id").val($("#modal_item_id").val());
            $("#base_item1_val").val($("#modal_item_con").val());
          }

          if (btnIndex == 2) {
            $("#senior_position_limitation").text($("#modal_item_con").val());
            $("#base_item2_id").val($("#modal_item_id").val());
            $("#base_item2_val").val($("#modal_item_con").val());
          }

          if (btnIndex == 3) {
            $("#senior_group_limitation").text($("#modal_item_con").val());
            $("#base_item3_id").val($("#modal_item_id").val());
            $("#base_item3_val").val($("#modal_item_con").val());
          }
        }

        if (is_add) {
          var add_index = $('#add_index').val();
          var id = $("#modal_item_id").val();
          var itemdata = $("#modal_item_con").val();
          var name = $("#modal_item_name").val();
          $.ajax({
            url: 'admin.setUsersOrgAccountAddData',
            type: 'POST',
            data: {
              userid: userid,
              tabIndex: tabIndex,
              add_index: add_index,
              id: id,
              name: name,
              itemdata: itemdata,
              settingfield: settingfield
            },
            success: function success(data) {
              if (data.msg == "ok") {
                if (data.addData != "" && data.addData != null) {
                  showPageAddedData($.parseJSON(data.addData));
                }
              } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert(data.msg);
            },
            error: function error(jqXHR, errdata, errorThrown) {
              console.log(errdata);
            }
          });
        }

        if (is_edit) {
          var id = $("#modal_item_id").val();
          var itemdata = $("#modal_item_con").val();
          var name = $("#modal_item_name").val();
          $.ajax({
            url: 'admin.editUsersOrgAccountAddData',
            type: 'POST',
            data: {
              userid: userid,
              tabIndex: tabIndex,
              editIndex: editIndex,
              id: id,
              name: name,
              itemdata: itemdata,
              settingfield: settingfield
            },
            success: function success(data) {
              if (data.msg == "ok") {
                if (data.addData != "" && data.addData != null) {
                  showPageAddedData($.parseJSON(data.addData));
                }
              } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert(data.msg);
            },
            error: function error(jqXHR, errdata, errorThrown) {
              console.log(errdata);
            }
          });
        }

        if (is_add) is_add = false;
        if (is_edit) is_edit = false;
        btnIndex = 0;
        $('#selete_filed_div').html("");
        $('#EditItemModal').modal('hide');
      }
    },
    getPasswordItemList: function getPasswordItemList(password_type) {
      var postData = {};
      axios__WEBPACK_IMPORTED_MODULE_1___default().post('admin.getUOPPasswordItem', postData).then(function (response) {
        var msg = response.data.msg;

        if (msg === "ok") {
          var lists = response.data.list;
          $('#sus_password_notice').val(response.data.notice);
          var tags = "";
          var password_head_val = "";
          var btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
          var pgtxt_strong = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_strong');
          var pgtxt_medium = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_medium');
          var pgtxt_weak = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_weak');
          Object.keys(lists).forEach(function (element) {
            tags += "<div class='row'>";
            tags += "<div class='col-md-2 form-check' style='margin: 10px; line-height: 24px;'>";

            if (lists[element].check === "0") {
              tags += "<div class='form-check-input rect-group' data-num='sus_password_' id='" + lists[element].name + "'>";
            } else {
              tags += "<div class='form-check-input rect-group active' data-num='sus_password_' id='" + lists[element].name + "'>";
              if (password_head_val === "") password_head_val = lists[element].name;else password_head_val += ":" + lists[element].name;
            }

            tags += "<div></div>";
            tags += "</div>";
            if (lists[element].name === "Strong") tags += "<label class='form-check-label ml-2 data-ajax' data-ajax='pgtxt_strong'>" + pgtxt_strong + "</label>";else if (lists[element].name === "Medium") tags += "<label class='form-check-label ml-2 data-ajax' data-ajax='pgtxt_medium'>" + pgtxt_medium + "</label>";else if (lists[element].name === "Weak") tags += "<label class='form-check-label ml-2 data-ajax' data-ajax='pgtxt_weak'>" + pgtxt_weak + "</label>";else tags += "<label class='form-check-label ml-2'>" + lists[element].name + "</label>";
            tags += "</div>";
            tags += "<div id='sus_password_edit_' style='padding: 12px 23px;' class='col-md-1 btn btn-outline-light dash-my-btn-0 m-t-b-5' " + "data-name='" + lists[element].name + "'" + "data-format1_opt='" + lists[element].format1_opt + "'" + "data-format1_val='" + lists[element].format1_val + "'" + "data-format2_opt='" + lists[element].format2_opt + "'" + "data-format2_val='" + lists[element].format2_val + "'" + "data-style_letter='" + lists[element].style_letter + "'" + "data-style_digital='" + lists[element].style_digital + "'" + "data-style_special='" + lists[element].style_special + "'" + "data-style_upper_lower='" + lists[element].style_upper_lower + "'" + "data-colour_val='" + lists[element].colour_val + "'" + "data-warning_text='" + lists[element].warning_text + "'" + "data-warning_colour_val='" + lists[element].warning_colour_val + "'" + ">";
            tags += "<span class='data-ajax' data-ajax='btntxt_edit'>" + btntxt_edit + "</span>";
            tags += "</div>";
            tags += "</div>";
          });
          $("#sus-password-lists").html(tags);
          if (tags !== "") $('#sus-password-lists').show();else $('#sus-password-lists').hide();
          $("div[id^='sus_password_edit_']").click(function () {
            if (pgperm.write != 1) {
              _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('pgtxt_notpermission');
              return;
            }

            var name = $(this).attr("data-name");
            var format1_opt = $(this).attr("data-format1_opt");
            var format1_val = $(this).attr("data-format1_val");
            var format2_opt = $(this).attr("data-format2_opt");
            var format2_val = $(this).attr("data-format2_val");
            var style_letter = $(this).attr("data-style_letter");
            var style_digital = $(this).attr("data-style_digital");
            var style_special = $(this).attr("data-style_special");
            var style_upper_lower = $(this).attr("data-style_upper_lower");
            var colour_val = $(this).attr("data-colour_val");
            var warning_text = $(this).attr("data-warning_text");
            var warning_colour_val = $(this).attr("data-warning_colour_val");
            vueOBJ.ShowAlertPasswordModalDLG("password", name, format1_opt, format1_val, format2_opt, format2_val, style_letter, style_digital, style_special, style_upper_lower, colour_val, warning_text, warning_colour_val);
          });
          $("#sus_password_head_val").val(password_head_val);
          $("div[data-num^='sus_password_']").click(function () {
            var thisid = $(this).attr('id');
            $("div[data-num^='sus_password_']").removeClass('active');
            $(this).addClass('active');
            $('#sus_password_head_val').val(thisid);
          });
        } else {
          console.log(response.data.message);
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    addPasswordItem: function addPasswordItem() {
      var _this = this;

      var password_type = $.trim($('#sus-password-modal').text());
      var name = $.trim($('#sus-password-txt').val());
      var org_name = $.trim($('#sus-password-txt-tmp').val());
      var format1_option = $.trim($('#sus-password-format1-select').val());
      var format1_val = $.trim($('#sus-password-format1-txt').val());
      var format2_option = $.trim($('#sus-password-format2-select').val());
      var format2_val = $.trim($('#sus-password-format2-txt').val());
      var style_letter = "0";
      if ($('#sus-password-letter').hasClass('active')) style_letter = "1";
      var style_digital = "0";
      if ($('#sus-password-digital').hasClass('active')) style_digital = "1";
      var style_special = "0";
      if ($('#sus-password-special').hasClass('active')) style_special = "1";
      var style_upper_lower = "0";
      if ($('#sus-password-letter-option').hasClass('active')) style_upper_lower = "1";
      var colour_val = $.trim($('#sus-password-color_value').text());
      var warning_text = $.trim($('#sus-password-warning-txt').val());
      var warning_colour_val = $.trim($('#sus-password-warning-color_value').text());

      if (name === '' || format1_val === '' || format2_val === '' || warning_text === '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert("you must empty this fields.");
      } else {
        var postData = {
          password_type: password_type,
          name: name,
          org_name: org_name,
          format1_opt: format1_option,
          format1_val: format1_val,
          format2_opt: format2_option,
          format2_val: format2_val,
          style_letter: style_letter,
          style_digital: style_digital,
          style_special: style_special,
          style_upper_lower: style_upper_lower,
          colour_val: colour_val,
          warning_text: warning_text,
          warning_colour_val: warning_colour_val,
          check: "0"
        };
        axios__WEBPACK_IMPORTED_MODULE_1___default().post('admin.insertUOPPasswordItem', postData).then(function (response) {
          var msg = response.data.msg;

          if (msg === "ok") {
            $('#myAlertPasswordModal').modal('hide');

            _this.getPasswordItemList(password_type);
          } else {
            console.log(response.data.message);
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    ShowAlertPasswordModalDLG: function ShowAlertPasswordModalDLG(modaltype) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var format1_opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var format1_val = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      var format2_opt = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
      var format2_val = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
      var style_letter = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "";
      var style_digital = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "";
      var style_special = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : "";
      var style_upper_lower = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : "";
      var colour_val = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : "";
      var warning_text = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : "";
      var warning_colour_val = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : "";
      $('#myAlertPasswordModal #sus-password-modal').text(modaltype);

      if (name === "") {
        $('#myAlertPasswordModal .modal-title').text('Create Password');
        $('#myAlertPasswordModal #sus-password-txt').val('');
        $('#myAlertMobileModal #sus-password-txt-tmp').val('');
        $('#myAlertPasswordModal #sus-password-format1-select').val('0');
        $('#myAlertPasswordModal #sus-password-format1-txt').val('8');
        $('#myAlertPasswordModal #sus-password-format2-select').val('3');
        $('#myAlertPasswordModal #sus-password-format2-txt').val('12');
        if ($('#sus-password-letter').hasClass('active')) $('#myAlertPasswordModal #sus-password-letter').removeClass('active');
        if ($('#sus-password-digital').hasClass('active')) $('#myAlertPasswordModal #sus-password-digital').removeClass('active');
        if ($('#sus-password-special').hasClass('active')) $('#myAlertPasswordModal #sus-password-special').removeClass('active');
        if ($('#sus-password-letter-option').hasClass('active')) $('#myAlertPasswordModal #sus-password-letter-option').removeClass('active');
        $('#myAlertPasswordModal #sus-password-color').css('background-color', '#a2de9f');
        $('#myAlertPasswordModal #sus-password-color_value').text('#a2de9f');
        $('#myAlertPasswordModal #sus-password-warning-txt').val('Please Enter A Password Of 8-12 Characters');
        $('#myAlertPasswordModal #sus-password-warning-color').css('background-color', '#e82b5c');
        $('#myAlertPasswordModal #sus-password-warning-color_value').text('#e82b5c');
      } else {
        $('#myAlertPasswordModal .modal-title').text(this.cpgtxt_editpassword);
        $('#myAlertPasswordModal #sus-password-txt').val(name);
        $('#myAlertMobileModal #sus-password-txt-tmp').val(name);
        $('#myAlertPasswordModal #sus-password-format1-select').val(format1_opt);
        $('#myAlertPasswordModal #sus-password-format1-txt').val(format1_val);
        $('#myAlertPasswordModal #sus-password-format2-select').val(format2_opt);
        $('#myAlertPasswordModal #sus-password-format2-txt').val(format2_val);
        if (style_letter === "1") $('#myAlertPasswordModal #sus-password-letter').addClass('active');
        if (style_digital === "1") $('#myAlertPasswordModal #sus-password-digital').addClass('active');
        if (style_special === "1") $('#myAlertPasswordModal #sus-password-special').addClass('active');
        if (style_upper_lower === "1") $('#myAlertPasswordModal #sus-password-letter-option').addClass('active');
        $('#myAlertPasswordModal #sus-password-color').css('background-color', colour_val);
        $('#myAlertPasswordModal #sus-password-color_value').val(colour_val);
        $('#myAlertPasswordModal #sus-password-warning-txt').val(warning_text);
        $('#myAlertPasswordModal #sus-password-warning-color').css('background-color', warning_colour_val);
        $('#myAlertPasswordModal #sus-password-warning-color_value').val(warning_colour_val);
      }

      ShowAlertPasswordModalDlg();
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.form-check-input.rect-group{\n    width: 16px;height: 16px; border: 1px solid #bbbbbb;\n    cursor: pointer;\n}\n.form-check-input.rect-group > div{\n    width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;\n}\n.form-check-input.rect-group.active > div{\n    width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;\n}\n.form-check-input.circle-group{\n    width: 16px;height: 16px; border-radius: 16px; border: 1px solid #bbbbbb;\n    cursor: pointer;\n}\n.form-check-input.circle-group > div{\n    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;\n}\n.form-check-input.circle-group.active > div{\n    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;\n}\n.form-check-inline a {\n    margin-left: 20px; text-decoration: underline; color: #a7a7ed;\n}\n#sus_password_notice{\n    background-color: #fff;\n    border: 1px solid #ced4da;\n    width: 100%;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgAccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersOrgAccount.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgAccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgAccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgAccount.vue":
/*!**********************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgAccount.vue ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersOrgAccount_vue_vue_type_template_id_6d905be2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersOrgAccount.vue?vue&type=template&id=6d905be2& */ "./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=template&id=6d905be2&");
/* harmony import */ var _UsersOrgAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersOrgAccount.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=script&lang=js&");
/* harmony import */ var _UsersOrgAccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UsersOrgAccount.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _UsersOrgAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UsersOrgAccount_vue_vue_type_template_id_6d905be2___WEBPACK_IMPORTED_MODULE_0__.render,
  _UsersOrgAccount_vue_vue_type_template_id_6d905be2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/users/UsersOrgAccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersOrgAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgAccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersOrgAccount.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=style&index=0&lang=css&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgAccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=template&id=6d905be2&":
/*!*****************************************************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=template&id=6d905be2& ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgAccount_vue_vue_type_template_id_6d905be2___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgAccount_vue_vue_type_template_id_6d905be2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgAccount_vue_vue_type_template_id_6d905be2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersOrgAccount.vue?vue&type=template&id=6d905be2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=template&id=6d905be2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=template&id=6d905be2&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgAccount.vue?vue&type=template&id=6d905be2& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v(_vm._s(_vm.cmususu_users_org_account))]),
        _vm._v(" "),
        _c("span", { staticStyle: { color: "#656262" } }, [
          _vm._v("   |   \n                       "),
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
            "\n                           " +
              _vm._s(_vm.cmu_users) +
              "  >>  " +
              _vm._s(_vm.cmusu_users_org) +
              "  >>  " +
              _vm._s(_vm.cmususu_users_org_account) +
              "\n                          "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row m-t-15" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c(
              "div",
              {
                staticClass: "nav nav-pills nav-fill m-b-20",
                attrs: { role: "tablist", "aria-orientation": "vertical" }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "nav-item nav-link active m-r-15",
                    staticStyle: {
                      flex: "0.02 1 auto",
                      border: "1px solid #e6e6e6",
                      "border-radius": "1.2rem"
                    },
                    attrs: {
                      id: "system_user_account_tab-1",
                      "data-toggle": "pill",
                      href: "#system-user-profile-general",
                      role: "tab",
                      "aria-controls": "system-user-profile-general",
                      "aria-selected": "true"
                    }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "icon",
                        attrs: {
                          t: "1599124664697",
                          viewBox: "0 0 1024 1024",
                          version: "1.1",
                          xmlns: "http://www.w3.org/2000/svg",
                          "p-id": "23124",
                          width: "17",
                          height: "17"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M512.3 63.1C264.5 63.1 63.6 264 63.6 511.8c0 137.4 61.7 260.3 159 342.6 2.5 2.9 5.6 5.4 9 7.4 76.9 61.7 174.5 98.7 280.8 98.7 106.3 0 203.9-36.9 280.8-98.7 3.4-2 6.4-4.5 9-7.4 97.2-82.3 159-205.3 159-342.6-0.1-247.8-201-448.7-448.9-448.7z m0 822.7c-81 0-155.9-25.7-217.1-69.4l1.4-3.8c33-90.7 119.2-151.1 215.7-151.1 95.4 0 183.6 51.9 211 134.3L730 816c-61.2 43.9-136.4 69.8-217.7 69.8zM400.2 474.4c0-62 50.2-112.2 112.2-112.2s112.2 50.2 112.2 112.2-50.2 112.2-112.2 112.2-112.2-50.2-112.2-112.2z m390.4 287.3c-27.3-71.3-84.4-121.9-151.4-149.8 37-34.2 60.2-83.1 60.2-137.4 0-103.3-83.7-187-187-187s-187 83.7-187 187c0 55.2 23.9 104.8 62 139-66 29.7-120.4 82.5-151.5 150.2-60.6-66.5-97.5-154.8-97.5-251.8 0-206.5 167.4-373.9 373.9-373.9s373.9 167.4 373.9 373.9c0.1 96-36.1 183.5-95.6 249.8z",
                            "p-id": "23125"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "m-l-10" }, [
                      _vm._v(_vm._s(_vm.cbtntxt_general))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-item nav-link m-r-15",
                    staticStyle: {
                      flex: "0.02 1 auto",
                      border: "1px solid #e6e6e6",
                      "border-radius": "1.2rem"
                    },
                    attrs: {
                      id: "system_user_account_tab-2",
                      "data-toggle": "pill",
                      href: "#system-user-profile-infomation",
                      role: "tab",
                      "aria-controls": "system-user-profile-infomation",
                      "aria-selected": "false"
                    }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "icon",
                        attrs: {
                          t: "1599124713464",
                          viewBox: "0 0 1024 1024",
                          version: "1.1",
                          xmlns: "http://www.w3.org/2000/svg",
                          "p-id": "23895",
                          width: "17",
                          height: "17"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M627.2 328.533333C597.333333 298.666667 554.666667 281.6 512 281.6c-89.6 0-162.133333 72.533333-162.133333 162.133333 0 89.6 72.533333 162.133333 162.133333 162.133334s162.133333-72.533333 162.133333-162.133334c0-42.666667-17.066667-85.333333-46.933333-115.2z",
                            "p-id": "23896"
                          }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            d:
                              "M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 977.066667C256 977.066667 46.933333 768 46.933333 512S256 46.933333 512 46.933333 977.066667 256 977.066667 512 768 977.066667 512 977.066667z",
                            "p-id": "23897"
                          }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            d:
                              "M725.333333 584.533333c34.133333-46.933333 51.2-110.933333 42.666667-174.933333-12.8-115.2-110.933333-209.066667-226.133333-221.866667C384 170.666667 256 294.4 256 443.733333c0 51.2 17.066667 102.4 42.666667 140.8l-93.866667 162.133334h128l64 110.933333 93.866667-162.133333h42.666666l93.866667 162.133333 64-110.933333h128L725.333333 584.533333z m-59.733333 119.466667l-38.4 64-72.533333-119.466667c-29.866667 8.533333-59.733333 8.533333-89.6 0l-68.266667 123.733334-38.4-64H281.6l72.533333-123.733334c-21.333333-25.6-38.4-55.466667-46.933333-89.6-34.133333-153.6 98.133333-285.866667 251.733333-251.733333 76.8 17.066667 140.8 81.066667 157.866667 157.866667 17.066667 72.533333-4.266667 140.8-46.933333 187.733333l72.533333 123.733333-76.8-8.533333z",
                            "p-id": "23898"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "m-l-10" }, [
                      _vm._v(_vm._s(_vm.cbtntxt_infomation))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-item nav-link m-r-15",
                    staticStyle: {
                      flex: "0.02 1 auto",
                      border: "1px solid #e6e6e6",
                      "border-radius": "1.2rem"
                    },
                    attrs: {
                      id: "system_user_account_tab-3",
                      "data-toggle": "pill",
                      href: "#system-user-profile-senior",
                      role: "tab",
                      "aria-controls": "system-user-profile-senior",
                      "aria-selected": "false"
                    }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "icon",
                        attrs: {
                          t: "1599124753113",
                          viewBox: "0 0 1024 1024",
                          version: "1.1",
                          xmlns: "http://www.w3.org/2000/svg",
                          "p-id": "24641",
                          width: "17",
                          height: "17"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M512 64a448 448 0 1 0 0.0512 896.0512A448 448 0 0 0 512 64z m0 820.0192a372.0704 372.0704 0 0 1 0-744.0384 372.0704 372.0704 0 0 1 0 744.0384z",
                            "p-id": "24642"
                          }
                        }),
                        _c("path", {
                          attrs: {
                            d:
                              "M464.0256 336.0256a48.0256 48.0256 0 1 0 96 0 48.0256 48.0256 0 0 0-96.0512 0zM536.0128 448H487.936a8.0384 8.0384 0 0 0-7.9872 7.9872v272.0256c0 4.4032 3.584 7.9872 7.9872 7.9872h48.0256c4.4032 0 7.9872-3.584 7.9872-7.9872V455.9872a8.0384 8.0384 0 0 0-7.9872-7.9872z",
                            "p-id": "24643"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "m-l-10" }, [
                      _vm._v(_vm._s(_vm.cbtntxt_senior))
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "tab-content" }, [
              _c(
                "div",
                {
                  staticClass: "tab-pane fade show active",
                  attrs: {
                    id: "system-user-profile-general",
                    role: "tabpanel",
                    "aria-labelledby": "system_user_account_tab-1"
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "card p-30" }, [
                        _c("div", { attrs: { id: "sua-profile-default" } }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { staticStyle: { "margin-top": "8px" } },
                                  [_vm._v(_vm._s(_vm.cpgtxt_ProfilePhoto))]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _vm._m(1),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-7 text-left" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "btn btn-outline-light dash-my-btn-0",
                                  attrs: { id: "ssua_general_photo_editBtn" }
                                },
                                [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_edit))])]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { staticStyle: { "margin-top": "8px" } },
                                  [_vm._v(_vm._s(_vm.cpgtxt_ProfileBackground))]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _vm._m(2),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-7 text-left" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "btn btn-outline-light dash-my-btn-0",
                                  attrs: { id: "ssua_general_back_editBtn" }
                                },
                                [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_edit))])]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { staticStyle: { "margin-top": "8px" } },
                                  [_vm._v(_vm._s(_vm.cpgtxt_username))]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _vm._m(3),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-7 text-left" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "btn btn-outline-light dash-my-btn-0 data-ajax",
                                  attrs: { id: "ssua_general_username_editBtn" }
                                },
                                [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_edit))])]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { staticStyle: { "margin-top": "8px" } },
                                  [_vm._v(_vm._s(_vm.cpgtxt_name))]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _vm._m(4),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-7 text-left" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "btn btn-outline-light dash-my-btn-0 data-ajax",
                                  attrs: { id: "ssua_general_name_editBtn" }
                                },
                                [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_edit))])]
                              )
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        { staticClass: "card border-0 m-b-30 text-right" },
                        [
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "btn btn-outline-light dash-my-btn-0 active p-l-r-30",
                                attrs: { id: "sua-profile-default-edit" },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.SaveBaseItemBtn()
                                  }
                                }
                              },
                              [
                                _c("span", [
                                  _vm._v(_vm._s(_vm.cbtntxt_savechange))
                                ])
                              ]
                            )
                          ])
                        ]
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "tab-pane fade",
                attrs: {
                  id: "system-user-profile-infomation",
                  role: "tabpanel",
                  "aria-labelledby": "system_user_account_tab-2"
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "tab-pane fade",
                  attrs: {
                    id: "system-user-profile-senior",
                    role: "tabpanel",
                    "aria-labelledby": "system_user_account_tab-3"
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "card p-30" }, [
                        _c("div", { attrs: { id: "sua-senior-default" } }, [
                          _c("h6", { staticClass: "card-title m-b-20" }, [
                            _vm._v(
                              _vm._s(_vm.cpgtxt_password) +
                                " " +
                                _vm._s(_vm.cpgtxt_setting)
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col-md-12 page_slider_content_list active",
                                attrs: { id: "passwordbar" }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "page1_content_content page2_content_text",
                                    staticStyle: { padding: "0px 20px" }
                                  },
                                  [
                                    _c("input", {
                                      attrs: {
                                        type: "hidden",
                                        name: "sus_password_head_val",
                                        id: "sus_password_head_val",
                                        value: ""
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _c("div", { staticClass: "col-md-2" }, [
                                        _vm._v(_vm._s(_vm.cpgtxt_notice))
                                      ]),
                                      _vm._v(" "),
                                      _vm._m(5)
                                    ]),
                                    _vm._v(" "),
                                    _c("div", {
                                      staticClass: "m-b-15",
                                      attrs: { id: "sus-password-lists" }
                                    })
                                  ]
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        { staticClass: "card border-0 m-b-30 text-right" },
                        [
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "btn btn-outline-light dash-my-btn-0 active p-l-r-30",
                                attrs: { id: "sua-senior-default-save" },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.SaveBaseItemBtn()
                                  }
                                }
                              },
                              [
                                _c("span", [
                                  _vm._v(_vm._s(_vm.cbtntxt_savechange))
                                ])
                              ]
                            )
                          ])
                        ]
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row", attrs: { id: "add_item_part" } },
                [
                  _vm._m(6),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-12" }, [
                    _c(
                      "div",
                      { staticClass: "card border-0 m-b-10 text-right" },
                      [
                        _c("div", [
                          _c(
                            "div",
                            {
                              staticClass:
                                "btn btn-outline-light dash-my-btn-0 active p-l-r-30",
                              attrs: { id: "sua-profile-add-item" },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.AccountSetAddItemBtn()
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
                      ]
                    )
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "EditItemModal" } }, [
      _c(
        "div",
        {
          staticClass: "modal-dialog modal-dialog-centered modal-sm",
          staticStyle: { "min-width": "500px!important" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(7),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal-body",
                staticStyle: { padding: "0 1.5rem 1.5rem 1.5rem" },
                attrs: { id: "Modalbody" }
              },
              [
                _vm._m(8),
                _vm._v(" "),
                _c("div", { staticClass: "panel" }, [
                  _c("form", { attrs: { id: "stua-profile-photo-edit" } }, [
                    _c(
                      "div",
                      {
                        staticClass: "col",
                        staticStyle: { "padding-bottom": "10px" }
                      },
                      [
                        _vm._m(9),
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
                                _vm._m(10),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-1 mt-3" }, [
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
                                      [_vm._v(_vm._s(_vm.cpgtxt_title))]
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _vm._m(11),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-12 text-center" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "btn btn-outline-light  dash-my-btn-0 active p-l-r-35",
                                        attrs: { id: "modal_savechangeBtn" },
                                        on: {
                                          click: function($event) {
                                            $event.stopPropagation()
                                            return _vm.ModalSaveItemBtn()
                                          }
                                        }
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(_vm._s(_vm.cbtntxt_savechange))
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
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
      { staticClass: "modal fade", attrs: { id: "myAlertPasswordModal" } },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered modal-sm",
            staticStyle: { "min-width": "650px!important" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(12),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal-body",
                  staticStyle: { padding: "0 1.5rem 1.5rem 1.5rem" },
                  attrs: { id: "myAlertPasswordModalbody" }
                },
                [
                  _c("div", { staticClass: "panel" }, [
                    _c("form", { attrs: { id: "sts-password-frm" } }, [
                      _vm._m(13),
                      _vm._v(" "),
                      _vm._m(14),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticStyle: {
                                  "margin-top": "8px",
                                  color: "#666"
                                },
                                attrs: { id: "stua-password-format1-title" }
                              },
                              [_vm._v(_vm._s(_vm.cpgtxt_format))]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "input-group mb-3" }, [
                              _c(
                                "select",
                                {
                                  staticClass: "form-control",
                                  attrs: { id: "sus-password-format1-select" }
                                },
                                [
                                  _c("option", { attrs: { value: "0" } }, [
                                    _vm._v(_vm._s(_vm.cpgtxt_greaterthan))
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "1" } }, [
                                    _vm._v(_vm._s(_vm.cpgtxt_equalto))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    {
                                      attrs: {
                                        value: "2",
                                        selected: "selected"
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.cpgtxt_lessthan))]
                                  ),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "3" } }, [
                                    _vm._v(_vm._s(_vm.cpgtxt_nogreaterthan))
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "4" } }, [
                                    _vm._v(_vm._s(_vm.cpgtxt_notlessthan))
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group " }, [
                              _c(
                                "select",
                                {
                                  staticClass: "form-control",
                                  attrs: { id: "sus-password-format2-select" }
                                },
                                [
                                  _c("option", { attrs: { value: "0" } }, [
                                    _vm._v(_vm._s(_vm.cpgtxt_greaterthan))
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "1" } }, [
                                    _vm._v(_vm._s(_vm.cpgtxt_equalto))
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "2" } }, [
                                    _vm._v(_vm._s(_vm.cpgtxt_lessthan))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    {
                                      attrs: {
                                        value: "3",
                                        selected: "selected"
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.cpgtxt_nogreaterthan))]
                                  ),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "4" } }, [
                                    _vm._v(_vm._s(_vm.cpgtxt_notlessthan))
                                  ])
                                ]
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(15)
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-2" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticStyle: {
                                  "margin-top": "8px",
                                  color: "#666"
                                },
                                attrs: { id: "stua-password-style1-title" }
                              },
                              [_vm._v(_vm._s(_vm.cpgtxt_style))]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "input-group mb-3" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "form-check",
                                  staticStyle: { "line-height": "24px" }
                                },
                                [
                                  _vm._m(16),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    { staticClass: "form-check-label m-l-10" },
                                    [_vm._v(_vm._s(_vm.cpgtxt_alphabet))]
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group mb-3" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "form-check",
                                  staticStyle: { "line-height": "24px" }
                                },
                                [
                                  _vm._m(17),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    { staticClass: "form-check-label m-l-10" },
                                    [_vm._v(_vm._s(_vm.cpgtxt_number))]
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group " }, [
                              _c(
                                "div",
                                {
                                  staticClass: "form-check",
                                  staticStyle: { "line-height": "24px" }
                                },
                                [
                                  _vm._m(18),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    { staticClass: "form-check-label m-l-10" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.cpgtxt_special) +
                                          " " +
                                          _vm._s(_vm.cpgtxt_characters)
                                      )
                                    ]
                                  )
                                ]
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "input-group " }, [
                              _c(
                                "div",
                                {
                                  staticClass: "form-check",
                                  staticStyle: { "line-height": "24px" }
                                },
                                [
                                  _vm._m(19),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    { staticClass: "form-check-label" },
                                    [_vm._v(_vm._s(_vm.cpgtxt_upper_lower))]
                                  )
                                ]
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticStyle: {
                                  "margin-top": "8px",
                                  color: "#666"
                                },
                                attrs: { id: "stua-password-color-title" }
                              },
                              [_vm._v(_vm._s(_vm.cpgtxt_colour))]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(20),
                        _vm._v(" "),
                        _vm._m(21)
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticStyle: {
                                  "margin-top": "8px",
                                  color: "#666"
                                },
                                attrs: { id: "stua-password-warning-title" }
                              },
                              [_vm._v(_vm._s(_vm.cpgtxt_warning))]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(22)
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticStyle: {
                                  "margin-top": "8px",
                                  color: "#666"
                                },
                                attrs: {
                                  id: "stua-password-warning-color-title"
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.cpgtxt_warning) +
                                    " " +
                                    _vm._s(_vm.cpgtxt_colour)
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(23),
                        _vm._v(" "),
                        _vm._m(24)
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-12 text-center" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "btn btn-outline-light  dash-my-btn-0 active p-l-r-35",
                              attrs: { id: "sus-password-add-btn" },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.addPasswordItem()
                                }
                              }
                            },
                            [
                              _c("span", [
                                _vm._v(" + " + _vm._s(_vm.cbtntxt_add) + " ")
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
    ),
    _vm._v(" "),
    _c("input", { attrs: { type: "hidden", id: "modal_item_id" } }),
    _vm._v(" "),
    _c("input", { attrs: { type: "hidden", id: "modal_item_con" } }),
    _vm._v(" "),
    _c("input", { attrs: { type: "hidden", id: "modal_item_name" } }),
    _vm._v(" "),
    _c("input", { attrs: { type: "hidden", id: "add_index", value: "0" } }),
    _vm._v(" "),
    _vm._m(25)
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
          id: "users-organization-account-fav",
          "data-status": "off",
          "data-page-info": "Account_users-organization-account"
        }
      },
      [
        _vm._v("\n                           "),
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
    return _c("div", { staticClass: "col-md-2 mt-2" }, [
      _c("div", {
        staticClass: "input-group",
        staticStyle: { color: "#a7a7ed" },
        attrs: { id: "ssua_general_photo_size" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2 mt-2" }, [
      _c("div", {
        staticClass: "input-group",
        staticStyle: { color: "#a7a7ed" },
        attrs: { id: "ssua_general_back_size" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2 mt-2" }, [
      _c("div", {
        staticClass: "input-group",
        staticStyle: { color: "#a7a7ed" },
        attrs: { id: "ssua_general_username_limit" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2 mt-2" }, [
      _c("div", {
        staticClass: "input-group",
        staticStyle: { color: "#a7a7ed" },
        attrs: { id: "ssua_general_name_limit" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "text",
          placeholder: "",
          id: "sus_password_notice",
          name: "sus_password_notice"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "card p-30" }, [
        _c("div", { attrs: { id: "ssua_add_item" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title", attrs: { id: "modal_title" } }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("×")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", {
        staticClass: "col-md-12",
        staticStyle: { "text-align": "center" },
        attrs: { id: "selete_filed_div" }
      })
    ])
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
    return _c("div", { staticClass: "col-md-12" }, [
      _c(
        "div",
        {
          staticStyle: {
            height: "200px",
            "overflow-y": "auto",
            "overflow-x": "hidden"
          }
        },
        [
          _c("div", {}, [
            _c(
              "table",
              {
                staticClass: "table table-hover",
                staticStyle: { "text-align": "center" }
              },
              [
                _c("thead", { staticStyle: { width: "100%" } }, [
                  _c("tr", { attrs: { id: "ssua_table_header" } })
                ]),
                _vm._v(" "),
                _c("tbody", { attrs: { id: "ssua_table_body" } })
              ]
            )
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-md-11 mt-3",
        staticStyle: { "padding-left": "22px" }
      },
      [
        _c("div", { staticClass: "input-group mb-3" }, [
          _c("input", {
            staticClass: "form-control",
            staticStyle: {
              "background-color": "#fff",
              border: "1px solid #ced4da",
              width: "300px"
            },
            attrs: {
              type: "text",
              placeholder: "",
              id: "modal_table_select_item",
              "aria-describedby": "basic-addon2",
              readonly: ""
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
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Create Password")]),
      _vm._v(" "),
      _c(
        "p",
        {
          staticStyle: {
            display: "none",
            padding: "5px 10px",
            "border-radius": "20px"
          },
          attrs: { id: "sus-password-modal" }
        },
        [_vm._v("Create Password")]
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
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", {
          staticClass: "form-group m-b-0",
          staticStyle: { padding: "1px 0px 0px 0px", "font-family": "SimHei" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row", staticStyle: { display: "none" } }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c("div", { staticClass: "form-group" }, [
          _c(
            "label",
            {
              staticStyle: { "margin-top": "8px", color: "#666" },
              attrs: { id: "stua-password-title" }
            },
            [_vm._v("Title Name")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "input-group" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "text",
                placeholder: "",
                "aria-label": "sus-pasword-txt",
                id: "sus-password-txt",
                name: "sus-password-txt",
                "aria-describedby": "basic-addon2"
              }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("label", {
        staticStyle: { display: "none" },
        attrs: { id: "sus-password-txt-tmp" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticClass: "input-group mb-3" }, [
        _c("input", {
          staticClass: "form-control",
          staticStyle: { width: "80px" },
          attrs: {
            type: "number",
            placeholder: "",
            "aria-label": "sus-password-format1-txt",
            id: "sus-password-format1-txt",
            name: "sus-password-format1-txt",
            "aria-describedby": "basic-addon2",
            value: "8"
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "input-group " }, [
        _c("input", {
          staticClass: "form-control",
          staticStyle: { width: "80px" },
          attrs: {
            type: "number",
            placeholder: "",
            "aria-label": "sus-password-format2-txt",
            id: "sus-password-format2-txt",
            name: "sus-password-format2-txt",
            "aria-describedby": "basic-addon2",
            value: "12"
          }
        })
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
        staticClass: "form-check-input rect-group",
        attrs: { id: "sus-password-letter" }
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
        attrs: { id: "sus-password-digital" }
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
        attrs: { id: "sus-password-special" }
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
        attrs: { id: "sus-password-letter-option" }
      },
      [_c("div")]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2 " }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "input-group mt-2" }, [
          _c("div", {
            staticClass: "m-r-15",
            staticStyle: {
              cursor: "pointer",
              background: "#a2de9f",
              width: "70px",
              height: "20px"
            },
            attrs: { id: "sus-password-color", "data-color": "#a2de9f" }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2 " }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "input-group mt-2" }, [
          _c("div", { attrs: { id: "sus-password-color_value" } }, [
            _vm._v("#a2de9f")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-9" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "input-group " }, [
          _c("input", {
            staticClass: "form-control",
            attrs: {
              type: "text",
              placeholder: "",
              "aria-label": "sus-password-warning-txt",
              id: "sus-password-warning-txt",
              name: "sus-password-warning-txt",
              "aria-describedby": "basic-addon2",
              value: "Please Enter A Password Of 8-12 Characters"
            }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2 " }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "input-group mt-2" }, [
          _c("div", {
            staticClass: "m-r-15",
            staticStyle: {
              cursor: "pointer",
              background: "#e82b5c",
              width: "70px",
              height: "20px"
            },
            attrs: { id: "sus-password-warning-color", "data-color": "#e82b5c" }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2 " }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "input-group mt-2" }, [
          _c("div", { attrs: { id: "sus-password-warning-color_value" } }, [
            _vm._v("#e82b5c")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "form",
      {
        attrs: {
          method: "post",
          enctype: "multipart/form-data",
          name: "users_org_account_frm",
          id: "users_org_account_frm"
        }
      },
      [
        _c("input", {
          attrs: {
            type: "hidden",
            id: "base_item1_id",
            name: "base_item1_id",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "hidden",
            id: "base_item1_val",
            name: "base_item1_val",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "hidden",
            id: "base_item2_id",
            name: "base_item2_id",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "hidden",
            id: "base_item2_val",
            name: "base_item2_val",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "hidden",
            id: "base_item3_id",
            name: "base_item3_id",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "hidden",
            id: "base_item3_val",
            name: "base_item3_val",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "hidden",
            id: "base_item4_id",
            name: "base_item4_id",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "hidden",
            id: "base_item4_val",
            name: "base_item4_val",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "hidden",
            id: "tab_index",
            name: "tab_index",
            value: "1"
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: { type: "hidden", id: "user_id", name: "user_id" }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);
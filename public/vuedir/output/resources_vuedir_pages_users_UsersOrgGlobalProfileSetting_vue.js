"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vuedir_pages_users_UsersOrgGlobalProfileSetting_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var vueOBJ = null;
var tabstatus = 0;
var pgperm = {};

function ShowAlertPasswordModalDlg() {
  $('#myAlertPasswordModal').modal('show');
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UsersOrgGlobalProfileSetting",
  data: function data() {
    return {
      pageid: 'users-organization-global-profilesetting-fav',
      mu_users: '',
      musu_users_org: '',
      mususu_users_org_global: '',
      musususu_users_org_profilesetting: '',
      pgtxt_password: '',
      pgtxt_email: '',
      pgtxt_mobile: '',
      btntxt_add: '',
      btntxt_edit: '',
      btntxt_change: '',
      btntxt_save: '',
      btntxt_savechange: '',
      pgtxt_name: '',
      pgtxt_characters: '',
      pgtxt_format: '',
      pgtxt_style: '',
      pgtxt_colour: '',
      pgtxt_warning: '',
      pgtxt_alphabet: '',
      pgtxt_number: '',
      pgtxt_special: '',
      pgtxt_upper_lower: '',
      pgtxt_createemail: '',
      pgtxt_editemail: '',
      pgtxt_createmobile: '',
      pgtxt_editmobile: '',
      pgtxt_editpassword: '',
      pgtxt_font: '',
      pgtxt_size: '',
      pgtxt_pixels: '',
      pgtxt_line: '',
      pgtxt_height: '',
      btntxt_ok: '',
      btntxt_cancel: '',
      pgtxt_wantdeleteitem: '',
      pgtxt_notpermission: '',
      pgtxt_notification: ''
    };
  },
  computed: {
    // 계산된 getter
    cmu_users: function cmu_users() {
      return this.mu_users;
    },
    cmusu_users_org: function cmusu_users_org() {
      return this.musu_users_org;
    },
    cmususu_users_org_global: function cmususu_users_org_global() {
      return this.mususu_users_org_global;
    },
    cmusususu_users_org_profilesetting: function cmusususu_users_org_profilesetting() {
      return this.musususu_users_org_profilesetting;
    },
    cpgtxt_password: function cpgtxt_password() {
      return this.pgtxt_password;
    },
    cpgtxt_email: function cpgtxt_email() {
      return this.pgtxt_email;
    },
    cpgtxt_mobile: function cpgtxt_mobile() {
      return this.pgtxt_mobile;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_change: function cbtntxt_change() {
      return this.btntxt_change;
    },
    cbtntxt_save: function cbtntxt_save() {
      return this.btntxt_save;
    },
    cbtntxt_savechange: function cbtntxt_savechange() {
      return this.btntxt_savechange;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
    },
    cpgtxt_characters: function cpgtxt_characters() {
      return this.pgtxt_characters;
    },
    cpgtxt_format: function cpgtxt_format() {
      return this.pgtxt_format;
    },
    cpgtxt_style: function cpgtxt_style() {
      return this.pgtxt_style;
    },
    cpgtxt_colour: function cpgtxt_colour() {
      return this.pgtxt_colour;
    },
    cpgtxt_warning: function cpgtxt_warning() {
      return this.pgtxt_warning;
    },
    cpgtxt_alphabet: function cpgtxt_alphabet() {
      return this.pgtxt_alphabet;
    },
    cpgtxt_number: function cpgtxt_number() {
      return this.pgtxt_number;
    },
    cpgtxt_special: function cpgtxt_special() {
      return this.pgtxt_special;
    },
    cpgtxt_upper_lower: function cpgtxt_upper_lower() {
      return this.pgtxt_upper_lower;
    },
    cpgtxt_createemail: function cpgtxt_createemail() {
      return this.pgtxt_createemail;
    },
    cpgtxt_editemail: function cpgtxt_editemail() {
      return this.pgtxt_editemail;
    },
    cpgtxt_createmobile: function cpgtxt_createmobile() {
      return this.pgtxt_createmobile;
    },
    cpgtxt_editmobile: function cpgtxt_editmobile() {
      return this.pgtxt_editmobile;
    },
    cpgtxt_editpassword: function cpgtxt_editpassword() {
      return this.pgtxt_editpassword;
    },
    cpgtxt_font: function cpgtxt_font() {
      return this.pgtxt_font;
    },
    cpgtxt_size: function cpgtxt_size() {
      return this.pgtxt_size;
    },
    cpgtxt_pixels: function cpgtxt_pixels() {
      return this.pgtxt_pixels;
    },
    cpgtxt_line: function cpgtxt_line() {
      return this.pgtxt_line;
    },
    cpgtxt_height: function cpgtxt_height() {
      return this.pgtxt_height;
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
  mounted: function mounted() {
    /* fav part*/
    vueOBJ = this;
    pgperm = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getPagePermission(this.$store.state.permission, this.pageid);
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    this.initpage();
  },
  methods: {
    getSiteFaveritelist: function getSiteFaveritelist(list) {
      if (list != null && list != '') {
        var imgsrc = '/images/icons/star_f.png';
        $('#' + this.pageid + ' img').attr("src", imgsrc);
        $('#' + this.pageid).attr("data-status", "on");
      }
    },
    initpage: function initpage() {
      this.sliderTabs();
      this.getPasswordItemList("strong"); //this.getPasswordItemList("medium");
      //this.getPasswordItemList("low");

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
    },
    sliderTabs: function sliderTabs() {
      $('.page1_content_side_bar div.page1_content_side_bar_text').click(function () {
        $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
        $(this).addClass('page1_content_side_bar_seleted');
        var subid = $(this).attr('data-target');
        $('.col-md-12.page_slider_content_list').removeClass('active');
        $('#' + subid).addClass('active');

        if (subid == 'passwordbar') {
          tabstatus = 0;
          vueOBJ.getPasswordItemList("strong");
        }
      });
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
    },

    /*password*/
    getPasswordItemList: function getPasswordItemList(password_type) {
      var postData = {};
      axios__WEBPACK_IMPORTED_MODULE_1___default().post('admin.getUOPPasswordItem', postData).then(function (response) {
        var msg = response.data.msg;

        if (msg === "ok") {
          var lists = response.data.list;
          var tags = "";
          var password_head_val = "";
          var btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
          var pgtxt_strong = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_strong');
          var pgtxt_medium = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_medium');
          var pgtxt_weak = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_weak');
          Object.keys(lists).forEach(function (element) {
            tags += "<div class='row'>";
            tags += "<div class='form-check' style='margin: 10px; line-height: 24px;'>";

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
            tags += "<div id='sus_password_edit_' class='btn btn-outline-light dash-my-btn-0 ml-auto m-t-b-5' " + "data-name='" + lists[element].name + "'" + "data-format1_opt='" + lists[element].format1_opt + "'" + "data-format1_val='" + lists[element].format1_val + "'" + "data-format2_opt='" + lists[element].format2_opt + "'" + "data-format2_val='" + lists[element].format2_val + "'" + "data-style_letter='" + lists[element].style_letter + "'" + "data-style_digital='" + lists[element].style_digital + "'" + "data-style_special='" + lists[element].style_special + "'" + "data-style_upper_lower='" + lists[element].style_upper_lower + "'" + "data-colour_val='" + lists[element].colour_val + "'" + "data-warning_text='" + lists[element].warning_text + "'" + "data-warning_colour_val='" + lists[element].warning_colour_val + "'" + ">";
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
            /*if ($(this).hasClass('active'))
            {
                var thisid = $(this).attr('id');
                var sval = $('#sus_password_head_val').val();
                 if (sval !== '')
                {
                    var sval_list = sval.split(':');
                    var tmp_list = '';
                     if (sval_list.length > 0)
                    {
                        for (var i = 0; i < sval_list.length; i ++)
                        {
                            var item = sval_list[i];
                            if (item !== thisid)
                            {
                                if (tmp_list === '') {
                                    tmp_list = item;
                                } else {
                                    tmp_list += ':'+item;
                                }
                            }
                        }
                        $('#sus_password_head_val').val(tmp_list);
                    }
                } else {
                    if (sval === thisid)
                        $('#sus_password_head_val').val('');
                }
                $(this).removeClass('active');
            } else {
                var thisid = $(this).attr('id');
                var sval = $('#sus_password_head_val').val();
                 if (sval == "")
                    sval = thisid;
                else
                    sval += ":" + thisid;
                 $("#sus_password_head_val").val(sval);
                $(this).addClass('active');
            }*/
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
    deletePasswordItem: function deletePasswordItem(password_type, name) {
      var _this2 = this;

      var postData = {
        password_type: password_type,
        name: name
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default().post('admin.deleteSUSPasswordItem', postData).then(function (response) {
        var msg = response.data.msg;

        if (msg === "ok") {
          _this2.getPasswordItemList(password_type);
        } else {
          console.log(response.data.message);
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    saveContentChange: function saveContentChange() {
      var _this3 = this;

      if (pgperm.create != 1 || pgperm.write != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      if (tabstatus === 0) {
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

        var postData = {
          data: password_head_val !== '' ? password_data : ''
        };
        axios__WEBPACK_IMPORTED_MODULE_1___default().post('admin.updateUOPPasswordItem', postData).then(function (response) {
          var msg = response.data.msg;

          if (msg === "ok") {
            _this3.getPasswordItemList("strong");
          } else {
            console.log(response.data.message);
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_assets_css_flag_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../assets/css/flag.min.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./resources/vuedir/assets/css/flag.min.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_assets_css_flag_min_css__WEBPACK_IMPORTED_MODULE_1__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.page_slider_content_list{\n    display: none;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.page1_content_side_bar .page1_content_side_bar_text{\n    cursor: pointer;\n    float: left;\n}\n.bsuser_security_tab{\n    width: 150px;\n}\n.form-check-input.rect-group{\n    width: 16px;height: 16px; border: 1px solid #bbbbbb;\n    cursor: pointer;\n}\n.form-check-input.rect-group > div{\n    width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;\n}\n.form-check-input.rect-group.active > div{\n    width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;\n}\n.form-check-input.circle-group{\n    width: 16px;height: 16px; border-radius: 16px; border: 1px solid #bbbbbb;\n    cursor: pointer;\n}\n.form-check-input.circle-group > div{\n    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;\n}\n.form-check-input.circle-group.active > div{\n    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;\n}\n.form-check-inline a {\n    margin-left: 20px; text-decoration: underline; color: #a7a7ed;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./resources/vuedir/assets/css/flag.min.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./resources/vuedir/assets/css/flag.min.css ***!
  \******************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\r\n * # Semantic UI 2.4.2 - Flag\r\n * http://github.com/semantic-org/semantic-ui/\r\n *\r\n *\r\n * Released under the MIT license\r\n * http://opensource.org/licenses/MIT\r\n *\r\n */i.flag:not(.icon){display:inline-block;width:16px;height:11px;margin:0 .5em 0 0;line-height:11px;text-decoration:inherit;vertical-align:baseline;-webkit-backface-visibility:hidden;backface-visibility:hidden}i.flag:not(.icon):before{display:inline-block;width:16px;height:11px;content:\"\";background:url(\"https://mdbootstrap.com/img/svg/flags.png\") no-repeat -108px -1976px}i.flag.ad:before,i.flag.andorra:before{background-position:0 0}i.flag.ae:before,i.flag.united.arab.emirates:before,i.flag.uae:before{background-position:0 -26px}i.flag.af:before,i.flag.afghanistan:before{background-position:0 -52px}i.flag.ag:before,i.flag.antigua:before{background-position:0 -78px}i.flag.ai:before,i.flag.anguilla:before{background-position:0 -104px}i.flag.al:before,i.flag.albania:before{background-position:0 -130px}i.flag.am:before,i.flag.armenia:before{background-position:0 -156px}i.flag.an:before,i.flag.netherlands.antilles:before{background-position:0 -182px}i.flag.ao:before,i.flag.angola:before{background-position:0 -208px}i.flag.ar:before,i.flag.argentina:before{background-position:0 -234px}i.flag.as:before,i.flag.american.samoa:before{background-position:0 -260px}i.flag.at:before,i.flag.austria:before{background-position:0 -286px}i.flag.au:before,i.flag.australia:before{background-position:0 -312px}i.flag.aw:before,i.flag.aruba:before{background-position:0 -338px}i.flag.ax:before,i.flag.aland.islands:before{background-position:0 -364px}i.flag.az:before,i.flag.azerbaijan:before{background-position:0 -390px}i.flag.ba:before,i.flag.bosnia:before{background-position:0 -416px}i.flag.bb:before,i.flag.barbados:before{background-position:0 -442px}i.flag.bd:before,i.flag.bangladesh:before{background-position:0 -468px}i.flag.be:before,i.flag.belgium:before{background-position:0 -494px}i.flag.bf:before,i.flag.burkina.faso:before{background-position:0 -520px}i.flag.bg:before,i.flag.bulgaria:before{background-position:0 -546px}i.flag.bh:before,i.flag.bahrain:before{background-position:0 -572px}i.flag.bi:before,i.flag.burundi:before{background-position:0 -598px}i.flag.bj:before,i.flag.benin:before{background-position:0 -624px}i.flag.bm:before,i.flag.bermuda:before{background-position:0 -650px}i.flag.bn:before,i.flag.brunei:before{background-position:0 -676px}i.flag.bo:before,i.flag.bolivia:before{background-position:0 -702px}i.flag.br:before,i.flag.brazil:before{background-position:0 -728px}i.flag.bs:before,i.flag.bahamas:before{background-position:0 -754px}i.flag.bt:before,i.flag.bhutan:before{background-position:0 -780px}i.flag.bv:before,i.flag.bouvet.island:before{background-position:0 -806px}i.flag.bw:before,i.flag.botswana:before{background-position:0 -832px}i.flag.by:before,i.flag.belarus:before{background-position:0 -858px}i.flag.bz:before,i.flag.belize:before{background-position:0 -884px}i.flag.ca:before,i.flag.canada:before{background-position:0 -910px}i.flag.cc:before,i.flag.cocos.islands:before{background-position:0 -962px}i.flag.cd:before,i.flag.congo:before{background-position:0 -988px}i.flag.cf:before,i.flag.central.african.republic:before{background-position:0 -1014px}i.flag.cg:before,i.flag.congo.brazzaville:before{background-position:0 -1040px}i.flag.ch:before,i.flag.switzerland:before{background-position:0 -1066px}i.flag.ci:before,i.flag.cote.divoire:before{background-position:0 -1092px}i.flag.ck:before,i.flag.cook.islands:before{background-position:0 -1118px}i.flag.cl:before,i.flag.chile:before{background-position:0 -1144px}i.flag.cm:before,i.flag.cameroon:before{background-position:0 -1170px}i.flag.cn:before,i.flag.china:before{background-position:0 -1196px}i.flag.co:before,i.flag.colombia:before{background-position:0 -1222px}i.flag.cr:before,i.flag.costa.rica:before{background-position:0 -1248px}i.flag.cs:before,i.flag.serbia:before{background-position:0 -1274px}i.flag.cu:before,i.flag.cuba:before{background-position:0 -1300px}i.flag.cv:before,i.flag.cape.verde:before{background-position:0 -1326px}i.flag.cx:before,i.flag.christmas.island:before{background-position:0 -1352px}i.flag.cy:before,i.flag.cyprus:before{background-position:0 -1378px}i.flag.cz:before,i.flag.czech.republic:before{background-position:0 -1404px}i.flag.de:before,i.flag.germany:before{background-position:0 -1430px}i.flag.dj:before,i.flag.djibouti:before{background-position:0 -1456px}i.flag.dk:before,i.flag.denmark:before{background-position:0 -1482px}i.flag.dm:before,i.flag.dominica:before{background-position:0 -1508px}i.flag.do:before,i.flag.dominican.republic:before{background-position:0 -1534px}i.flag.dz:before,i.flag.algeria:before{background-position:0 -1560px}i.flag.ec:before,i.flag.ecuador:before{background-position:0 -1586px}i.flag.ee:before,i.flag.estonia:before{background-position:0 -1612px}i.flag.eg:before,i.flag.egypt:before{background-position:0 -1638px}i.flag.eh:before,i.flag.western.sahara:before{background-position:0 -1664px}i.flag.gb.eng:before,i.flag.england:before{background-position:0 -1690px}i.flag.er:before,i.flag.eritrea:before{background-position:0 -1716px}i.flag.es:before,i.flag.spain:before{background-position:0 -1742px}i.flag.et:before,i.flag.ethiopia:before{background-position:0 -1768px}i.flag.eu:before,i.flag.european.union:before{background-position:0 -1794px}i.flag.fi:before,i.flag.finland:before{background-position:0 -1846px}i.flag.fj:before,i.flag.fiji:before{background-position:0 -1872px}i.flag.fk:before,i.flag.falkland.islands:before{background-position:0 -1898px}i.flag.fm:before,i.flag.micronesia:before{background-position:0 -1924px}i.flag.fo:before,i.flag.faroe.islands:before{background-position:0 -1950px}i.flag.fr:before,i.flag.france:before{background-position:0 -1976px}i.flag.ga:before,i.flag.gabon:before{background-position:-36px 0}i.flag.gb:before,i.flag.uk:before,i.flag.united.kingdom:before{background-position:-36px -26px}i.flag.gd:before,i.flag.grenada:before{background-position:-36px -52px}i.flag.ge:before,i.flag.georgia:before{background-position:-36px -78px}i.flag.gf:before,i.flag.french.guiana:before{background-position:-36px -104px}i.flag.gh:before,i.flag.ghana:before{background-position:-36px -130px}i.flag.gi:before,i.flag.gibraltar:before{background-position:-36px -156px}i.flag.gl:before,i.flag.greenland:before{background-position:-36px -182px}i.flag.gm:before,i.flag.gambia:before{background-position:-36px -208px}i.flag.gn:before,i.flag.guinea:before{background-position:-36px -234px}i.flag.gp:before,i.flag.guadeloupe:before{background-position:-36px -260px}i.flag.gq:before,i.flag.equatorial.guinea:before{background-position:-36px -286px}i.flag.gr:before,i.flag.greece:before{background-position:-36px -312px}i.flag.gs:before,i.flag.sandwich.islands:before{background-position:-36px -338px}i.flag.gt:before,i.flag.guatemala:before{background-position:-36px -364px}i.flag.gu:before,i.flag.guam:before{background-position:-36px -390px}i.flag.gw:before,i.flag.guinea-bissau:before{background-position:-36px -416px}i.flag.gy:before,i.flag.guyana:before{background-position:-36px -442px}i.flag.hk:before,i.flag.hong.kong:before{background-position:-36px -468px}i.flag.hm:before,i.flag.heard.island:before{background-position:-36px -494px}i.flag.hn:before,i.flag.honduras:before{background-position:-36px -520px}i.flag.hr:before,i.flag.croatia:before{background-position:-36px -546px}i.flag.ht:before,i.flag.haiti:before{background-position:-36px -572px}i.flag.hu:before,i.flag.hungary:before{background-position:-36px -598px}i.flag.id:before,i.flag.indonesia:before{background-position:-36px -624px}i.flag.ie:before,i.flag.ireland:before{background-position:-36px -650px}i.flag.il:before,i.flag.israel:before{background-position:-36px -676px}i.flag.in:before,i.flag.india:before{background-position:-36px -702px}i.flag.io:before,i.flag.indian.ocean.territory:before{background-position:-36px -728px}i.flag.iq:before,i.flag.iraq:before{background-position:-36px -754px}i.flag.ir:before,i.flag.iran:before{background-position:-36px -780px}i.flag.is:before,i.flag.iceland:before{background-position:-36px -806px}i.flag.it:before,i.flag.italy:before{background-position:-36px -832px}i.flag.jm:before,i.flag.jamaica:before{background-position:-36px -858px}i.flag.jo:before,i.flag.jordan:before{background-position:-36px -884px}i.flag.jp:before,i.flag.japan:before{background-position:-36px -910px}i.flag.ke:before,i.flag.kenya:before{background-position:-36px -936px}i.flag.kg:before,i.flag.kyrgyzstan:before{background-position:-36px -962px}i.flag.kh:before,i.flag.cambodia:before{background-position:-36px -988px}i.flag.ki:before,i.flag.kiribati:before{background-position:-36px -1014px}i.flag.km:before,i.flag.comoros:before{background-position:-36px -1040px}i.flag.kn:before,i.flag.saint.kitts.and.nevis:before{background-position:-36px -1066px}i.flag.kp:before,i.flag.north.korea:before{background-position:-36px -1092px}i.flag.kr:before,i.flag.south.korea:before{background-position:-36px -1118px}i.flag.kw:before,i.flag.kuwait:before{background-position:-36px -1144px}i.flag.ky:before,i.flag.cayman.islands:before{background-position:-36px -1170px}i.flag.kz:before,i.flag.kazakhstan:before{background-position:-36px -1196px}i.flag.la:before,i.flag.laos:before{background-position:-36px -1222px}i.flag.lb:before,i.flag.lebanon:before{background-position:-36px -1248px}i.flag.lc:before,i.flag.saint.lucia:before{background-position:-36px -1274px}i.flag.li:before,i.flag.liechtenstein:before{background-position:-36px -1300px}i.flag.lk:before,i.flag.sri.lanka:before{background-position:-36px -1326px}i.flag.lr:before,i.flag.liberia:before{background-position:-36px -1352px}i.flag.ls:before,i.flag.lesotho:before{background-position:-36px -1378px}i.flag.lt:before,i.flag.lithuania:before{background-position:-36px -1404px}i.flag.lu:before,i.flag.luxembourg:before{background-position:-36px -1430px}i.flag.lv:before,i.flag.latvia:before{background-position:-36px -1456px}i.flag.ly:before,i.flag.libya:before{background-position:-36px -1482px}i.flag.ma:before,i.flag.morocco:before{background-position:-36px -1508px}i.flag.mc:before,i.flag.monaco:before{background-position:-36px -1534px}i.flag.md:before,i.flag.moldova:before{background-position:-36px -1560px}i.flag.me:before,i.flag.montenegro:before{background-position:-36px -1586px}i.flag.mg:before,i.flag.madagascar:before{background-position:-36px -1613px}i.flag.mh:before,i.flag.marshall.islands:before{background-position:-36px -1639px}i.flag.mk:before,i.flag.macedonia:before{background-position:-36px -1665px}i.flag.ml:before,i.flag.mali:before{background-position:-36px -1691px}i.flag.mm:before,i.flag.myanmar:before,i.flag.burma:before{background-position:-73px -1821px}i.flag.mn:before,i.flag.mongolia:before{background-position:-36px -1743px}i.flag.mo:before,i.flag.macau:before{background-position:-36px -1769px}i.flag.mp:before,i.flag.northern.mariana.islands:before{background-position:-36px -1795px}i.flag.mq:before,i.flag.martinique:before{background-position:-36px -1821px}i.flag.mr:before,i.flag.mauritania:before{background-position:-36px -1847px}i.flag.ms:before,i.flag.montserrat:before{background-position:-36px -1873px}i.flag.mt:before,i.flag.malta:before{background-position:-36px -1899px}i.flag.mu:before,i.flag.mauritius:before{background-position:-36px -1925px}i.flag.mv:before,i.flag.maldives:before{background-position:-36px -1951px}i.flag.mw:before,i.flag.malawi:before{background-position:-36px -1977px}i.flag.mx:before,i.flag.mexico:before{background-position:-72px 0}i.flag.my:before,i.flag.malaysia:before{background-position:-72px -26px}i.flag.mz:before,i.flag.mozambique:before{background-position:-72px -52px}i.flag.na:before,i.flag.namibia:before{background-position:-72px -78px}i.flag.nc:before,i.flag.new.caledonia:before{background-position:-72px -104px}i.flag.ne:before,i.flag.niger:before{background-position:-72px -130px}i.flag.nf:before,i.flag.norfolk.island:before{background-position:-72px -156px}i.flag.ng:before,i.flag.nigeria:before{background-position:-72px -182px}i.flag.ni:before,i.flag.nicaragua:before{background-position:-72px -208px}i.flag.nl:before,i.flag.netherlands:before{background-position:-72px -234px}i.flag.no:before,i.flag.norway:before{background-position:-72px -260px}i.flag.np:before,i.flag.nepal:before{background-position:-72px -286px}i.flag.nr:before,i.flag.nauru:before{background-position:-72px -312px}i.flag.nu:before,i.flag.niue:before{background-position:-72px -338px}i.flag.nz:before,i.flag.new.zealand:before{background-position:-72px -364px}i.flag.om:before,i.flag.oman:before{background-position:-72px -390px}i.flag.pa:before,i.flag.panama:before{background-position:-72px -416px}i.flag.pe:before,i.flag.peru:before{background-position:-72px -442px}i.flag.pf:before,i.flag.french.polynesia:before{background-position:-72px -468px}i.flag.pg:before,i.flag.new.guinea:before{background-position:-72px -494px}i.flag.ph:before,i.flag.philippines:before{background-position:-72px -520px}i.flag.pk:before,i.flag.pakistan:before{background-position:-72px -546px}i.flag.pl:before,i.flag.poland:before{background-position:-72px -572px}i.flag.pm:before,i.flag.saint.pierre:before{background-position:-72px -598px}i.flag.pn:before,i.flag.pitcairn.islands:before{background-position:-72px -624px}i.flag.pr:before,i.flag.puerto.rico:before{background-position:-72px -650px}i.flag.ps:before,i.flag.palestine:before{background-position:-72px -676px}i.flag.pt:before,i.flag.portugal:before{background-position:-72px -702px}i.flag.pw:before,i.flag.palau:before{background-position:-72px -728px}i.flag.py:before,i.flag.paraguay:before{background-position:-72px -754px}i.flag.qa:before,i.flag.qatar:before{background-position:-72px -780px}i.flag.re:before,i.flag.reunion:before{background-position:-72px -806px}i.flag.ro:before,i.flag.romania:before{background-position:-72px -832px}i.flag.rs:before,i.flag.serbia:before{background-position:-72px -858px}i.flag.ru:before,i.flag.russia:before{background-position:-72px -884px}i.flag.rw:before,i.flag.rwanda:before{background-position:-72px -910px}i.flag.sa:before,i.flag.saudi.arabia:before{background-position:-72px -936px}i.flag.sb:before,i.flag.solomon.islands:before{background-position:-72px -962px}i.flag.sc:before,i.flag.seychelles:before{background-position:-72px -988px}i.flag.gb.sct:before,i.flag.scotland:before{background-position:-72px -1014px}i.flag.sd:before,i.flag.sudan:before{background-position:-72px -1040px}i.flag.se:before,i.flag.sweden:before{background-position:-72px -1066px}i.flag.sg:before,i.flag.singapore:before{background-position:-72px -1092px}i.flag.sh:before,i.flag.saint.helena:before{background-position:-72px -1118px}i.flag.si:before,i.flag.slovenia:before{background-position:-72px -1144px}i.flag.sj:before,i.flag.svalbard:before,i.flag.jan.mayen:before{background-position:-72px -1170px}i.flag.sk:before,i.flag.slovakia:before{background-position:-72px -1196px}i.flag.sl:before,i.flag.sierra.leone:before{background-position:-72px -1222px}i.flag.sm:before,i.flag.san.marino:before{background-position:-72px -1248px}i.flag.sn:before,i.flag.senegal:before{background-position:-72px -1274px}i.flag.so:before,i.flag.somalia:before{background-position:-72px -1300px}i.flag.sr:before,i.flag.suriname:before{background-position:-72px -1326px}i.flag.st:before,i.flag.sao.tome:before{background-position:-72px -1352px}i.flag.sv:before,i.flag.el.salvador:before{background-position:-72px -1378px}i.flag.sy:before,i.flag.syria:before{background-position:-72px -1404px}i.flag.sz:before,i.flag.swaziland:before{background-position:-72px -1430px}i.flag.tc:before,i.flag.caicos.islands:before{background-position:-72px -1456px}i.flag.td:before,i.flag.chad:before{background-position:-72px -1482px}i.flag.tf:before,i.flag.french.territories:before{background-position:-72px -1508px}i.flag.tg:before,i.flag.togo:before{background-position:-72px -1534px}i.flag.th:before,i.flag.thailand:before{background-position:-72px -1560px}i.flag.tj:before,i.flag.tajikistan:before{background-position:-72px -1586px}i.flag.tk:before,i.flag.tokelau:before{background-position:-72px -1612px}i.flag.tl:before,i.flag.timorleste:before{background-position:-72px -1638px}i.flag.tm:before,i.flag.turkmenistan:before{background-position:-72px -1664px}i.flag.tn:before,i.flag.tunisia:before{background-position:-72px -1690px}i.flag.to:before,i.flag.tonga:before{background-position:-72px -1716px}i.flag.tr:before,i.flag.turkey:before{background-position:-72px -1742px}i.flag.tt:before,i.flag.trinidad:before{background-position:-72px -1768px}i.flag.tv:before,i.flag.tuvalu:before{background-position:-72px -1794px}i.flag.tw:before,i.flag.taiwan:before{background-position:-72px -1820px}i.flag.tz:before,i.flag.tanzania:before{background-position:-72px -1846px}i.flag.ua:before,i.flag.ukraine:before{background-position:-72px -1872px}i.flag.ug:before,i.flag.uganda:before{background-position:-72px -1898px}i.flag.um:before,i.flag.us.minor.islands:before{background-position:-72px -1924px}i.flag.us:before,i.flag.america:before,i.flag.united.states:before{background-position:-72px -1950px}i.flag.uy:before,i.flag.uruguay:before{background-position:-72px -1976px}i.flag.uz:before,i.flag.uzbekistan:before{background-position:-108px 0}i.flag.va:before,i.flag.vatican.city:before{background-position:-108px -26px}i.flag.vc:before,i.flag.saint.vincent:before{background-position:-108px -52px}i.flag.ve:before,i.flag.venezuela:before{background-position:-108px -78px}i.flag.vg:before,i.flag.british.virgin.islands:before{background-position:-108px -104px}i.flag.vi:before,i.flag.us.virgin.islands:before{background-position:-108px -130px}i.flag.vn:before,i.flag.vietnam:before{background-position:-108px -156px}i.flag.vu:before,i.flag.vanuatu:before{background-position:-108px -182px}i.flag.gb.wls:before,i.flag.wales:before{background-position:-108px -208px}i.flag.wf:before,i.flag.wallis.and.futuna:before{background-position:-108px -234px}i.flag.ws:before,i.flag.samoa:before{background-position:-108px -260px}i.flag.ye:before,i.flag.yemen:before{background-position:-108px -286px}i.flag.yt:before,i.flag.mayotte:before{background-position:-108px -312px}i.flag.za:before,i.flag.south.africa:before{background-position:-108px -338px}i.flag.zm:before,i.flag.zambia:before{background-position:-108px -364px}i.flag.zw:before,i.flag.zimbabwe:before{background-position:-108px -390px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalProfileSetting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersOrgGlobalProfileSetting.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalProfileSetting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalProfileSetting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue":
/*!***********************************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersOrgGlobalProfileSetting_vue_vue_type_template_id_98fcf610___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersOrgGlobalProfileSetting.vue?vue&type=template&id=98fcf610& */ "./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=template&id=98fcf610&");
/* harmony import */ var _UsersOrgGlobalProfileSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersOrgGlobalProfileSetting.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=script&lang=js&");
/* harmony import */ var _UsersOrgGlobalProfileSetting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UsersOrgGlobalProfileSetting.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _UsersOrgGlobalProfileSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UsersOrgGlobalProfileSetting_vue_vue_type_template_id_98fcf610___WEBPACK_IMPORTED_MODULE_0__.render,
  _UsersOrgGlobalProfileSetting_vue_vue_type_template_id_98fcf610___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalProfileSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersOrgGlobalProfileSetting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalProfileSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalProfileSetting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersOrgGlobalProfileSetting.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=style&index=0&lang=css&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalProfileSetting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=template&id=98fcf610&":
/*!******************************************************************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=template&id=98fcf610& ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalProfileSetting_vue_vue_type_template_id_98fcf610___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalProfileSetting_vue_vue_type_template_id_98fcf610___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalProfileSetting_vue_vue_type_template_id_98fcf610___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersOrgGlobalProfileSetting.vue?vue&type=template&id=98fcf610& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=template&id=98fcf610&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=template&id=98fcf610&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalProfileSetting.vue?vue&type=template&id=98fcf610& ***!
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
        _c("h3", [_vm._v(_vm._s(_vm.cmusususu_users_org_profilesetting))]),
        _vm._v(" "),
        _c("span", { staticStyle: { color: "#656262" } }, [
          _vm._v("   |   \n               "),
          _c(
            "svg",
            {
              staticClass: "bi bi-shield-lock",
              attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 16 16",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg"
              }
            },
            [
              _c("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  d:
                    "M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d:
                    "M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"
                }
              })
            ]
          ),
          _vm._v(
            "\n                   " +
              _vm._s(_vm.cmu_users) +
              "  >>  " +
              _vm._s(_vm.cmusu_users_org) +
              "  >>  " +
              _vm._s(_vm.cmususu_users_org_global) +
              "  >>  " +
              _vm._s(_vm.cmusususu_users_org_profilesetting) +
              "\n                "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "page1_content_side_bar",
        staticStyle: { display: "flex", "margin-bottom": "20px" }
      },
      [
        _c("div", { staticClass: "bsuser_security_tab" }, [
          _c(
            "div",
            {
              staticClass:
                "page1_content_side_bar_text page1_content_side_bar_seleted",
              attrs: { "data-target": "passwordbar" }
            },
            [_vm._v(_vm._s(_vm.cpgtxt_password))]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
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
                  return _vm.saveContentChange()
                }
              }
            },
            [_c("span", [_vm._v(" " + _vm._s(_vm.cbtntxt_savechange) + " ")])]
          )
        ])
      ])
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
              _vm._m(2),
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
                      _vm._m(3),
                      _vm._v(" "),
                      _vm._m(4),
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
                        _vm._m(5),
                        _vm._v(" "),
                        _vm._m(6)
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
                                  _vm._m(7),
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
                                  _vm._m(8),
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
                                  _vm._m(9),
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
                                  _vm._m(10),
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
                        _vm._m(11),
                        _vm._v(" "),
                        _vm._m(12)
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
                        _vm._m(13)
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
                        _vm._m(14),
                        _vm._v(" "),
                        _vm._m(15)
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
          id: "users-organization-global-profilesetting-fav",
          "data-status": "off",
          "data-page-info":
            "Profile Setting_users-organization-global-profilesetting"
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
    return _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list active",
          attrs: { id: "passwordbar" }
        },
        [
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c(
              "div",
              { staticClass: "page1_content_content page2_content_text" },
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
                _c("div", {
                  staticClass: "m-b-15",
                  attrs: { id: "sus-password-lists" }
                })
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
    return _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "input-group mb-3" }, [
          _c(
            "select",
            {
              staticClass: "form-control",
              attrs: { id: "sus-password-format1-select" }
            },
            [
              _c("option", { attrs: { value: "0" } }, [_vm._v("Greater Than")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "1" } }, [_vm._v("Equal To")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "2", selected: "selected" } }, [
                _vm._v("Less Than")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "3" } }, [
                _vm._v("No Greater Than")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "4" } }, [_vm._v("Not Less Than")])
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
              _c("option", { attrs: { value: "0" } }, [_vm._v("Greater Than")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "1" } }, [_vm._v("Equal To")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "2" } }, [_vm._v("Less Than")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "3", selected: "selected" } }, [
                _vm._v("No Greater Than")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "4" } }, [_vm._v("Not Less Than")])
            ]
          )
        ])
      ])
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
  }
]
render._withStripped = true



/***/ })

}]);
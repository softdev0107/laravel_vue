"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vuedir_pages_system_SystemSetBasicFrontPagesLogin_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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





var pgperm = {};
var preview = '';
var tabstatus = 0;
var vueOBJ = null;

function _initpage() {
  $('#ssb_frontpage_back_upbtn').click(function () {
    if (pgperm.write != 1) {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
      return;
    }

    $('.Media_directory_files').html("");
    $('#Media_Modal_Search_Text').val("");
    _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__.default.data.setImageTagID("ssb_frontpage_back_preview", "ssb_frontpage_back_pre");
    _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getDirectories('/');
    _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__.default.data.MediaSelectImageModal(vueOBJ);
    $('#MediaDirectoryModal').modal('show');
  });
  $('#ssb_frontpage_logo_upbtn').click(function () {
    if (pgperm.write != 1) {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
      return;
    }

    $('.Media_directory_files').html("");
    $('#Media_Modal_Search_Text').val("");
    _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__.default.data.setImageTagID("ssb_frontpage_logo_preview", "ssb_frontpage_logo_pre");
    _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getDirectories('/');
    _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__.default.data.MediaSelectImageModal(vueOBJ);
    $('#MediaDirectoryModal').modal('show');
  });
  var ssb_frontpage_login_font_colorpicker = document.getElementById('ssb_frontpage_login_font_colorpicker');
  var pickercolor = new ColorPicker(ssb_frontpage_login_font_colorpicker, '#ffffff');
  ssb_frontpage_login_font_colorpicker.addEventListener('colorChange', function (event) {
    var color = event.detail.color.hexa;
    $('#ssb_frontpage_login_font_color_value').text(color);
    $('#ssb_frontpage_login_font_color_val').val(color);
  });
  var ssb_frontpage_login_theme_colorpicker = document.getElementById('ssb_frontpage_login_theme_colorpicker');
  var pickerborder = new ColorPicker(ssb_frontpage_login_theme_colorpicker, '#104f8e');
  ssb_frontpage_login_theme_colorpicker.addEventListener('colorChange', function (event) {
    var color = event.detail.color.hexa;
    $('#ssb_frontpage_login_theme_color_value').text(color);
    $('#ssb_frontpage_login_theme_color_val').val(color);
  });
  var ssb_frontpage_login_back_colorpicker = document.getElementById('ssb_frontpage_login_back_colorpicker');
  var pickerbk = new ColorPicker(ssb_frontpage_login_back_colorpicker, '#ffffff');
  ssb_frontpage_login_back_colorpicker.addEventListener('colorChange', function (event) {
    var color = event.detail.color.hexa;
    $('#ssb_frontpage_login_back_color_value').text(color);
    $('#ssb_frontpage_login_back_color_val').val(color);
  });
}

function getLoginSettingData() {
  $.ajax({
    url: 'admin.getSystemSettingBasicLogin',
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.pageinfo != '') {
        var dt = data.pageinfo;
        dt = $.parseJSON(dt);
        $('#ssb_frontpage_back_preview').attr('src', dt.backimg);
        $('#ssb_frontpage_back_pre').val(dt.backimg);
        $('#ssb_frontpage_logo_preview').attr('src', dt.logoimg);
        $('#ssb_frontpage_logo_pre').val(dt.logoimg);
        var ct = decodeURIComponent(dt.tiptxt);
        $('#ssb_frontpage_login_tip').val(ct);
        $('#ssb_frontpage_login_font_color_val').val(dt.fontcolor);
        $('#ssb_frontpage_login_font_color_value').text(dt.fontcolor);
        $('#ssb_frontpage_login_font_colorpicker').css('background', dt.fontcolor);
        $('#ssb_frontpage_login_theme_color_value').text(dt.themecolor);
        $('#ssb_frontpage_login_theme_color_val').val(dt.themecolor);
        $('#ssb_frontpage_login_theme_colorpicker').css('background', dt.themecolor);
        $('#ssb_frontpage_login_back_color_value').text(dt.backcolor);
        $('#ssb_frontpage_login_back_color_val').val(dt.backcolor);
        $('#ssb_frontpage_login_back_colorpicker').css('background', dt.backcolor);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pageid: 'system-setting-basic-fav',
      pgtxt_setting: '',
      pgtxt_font: '',
      pgtxt_background: '',
      pgtxt_logo: '',
      btntxt_add: '',
      pgtxt_tip: '',
      pgtxt_color: '',
      btntxt_theme: '',
      pgtxt_back: '',
      pgtxt_fontcolour: '',
      btntxt_edit: '',
      pgtxt_media: '',
      btntxt_search: '',
      pgtxt_dbsaved: '',
      btntxt_savechange: '',
      btntxt_ok: '',
      btntxt_cancel: '',
      pgtxt_wantdeleteitem: '',
      pgtxt_notpermission: '',
      pgtxt_notification: ''
    };
  },
  computed: {
    cpgtxt_setting: function cpgtxt_setting() {
      return this.pgtxt_setting;
    },
    cpgtxt_font: function cpgtxt_font() {
      return this.pgtxt_font;
    },
    cpgtxt_background: function cpgtxt_background() {
      return this.pgtxt_background;
    },
    cpgtxt_logo: function cpgtxt_logo() {
      return this.pgtxt_logo;
    },
    cpgtxt_tip: function cpgtxt_tip() {
      return this.pgtxt_tip;
    },
    cpgtxt_color: function cpgtxt_color() {
      return this.pgtxt_color;
    },
    cpgtxt_back: function cpgtxt_back() {
      return this.pgtxt_back;
    },
    cbtntxt_theme: function cbtntxt_theme() {
      return this.btntxt_theme;
    },
    cpgtxt_fontcolour: function cpgtxt_fontcolour() {
      return this.pgtxt_fontcolour;
    },
    cpgtxt_media: function cpgtxt_media() {
      return this.pgtxt_media;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_search: function cbtntxt_search() {
      return this.btntxt_search;
    },
    cpgtxt_dbsaved: function cpgtxt_dbsaved() {
      return this.pgtxt_dbsaved;
    },
    cbtntxt_savechange: function cbtntxt_savechange() {
      return this.btntxt_savechange;
    },
    cpgtxt_notpermission: function cpgtxt_notpermission() {
      return this.pgtxt_notpermission;
    },
    cpgtxt_notification: function cpgtxt_notification() {
      return this.pgtxt_notification;
    },
    contentchange: function contentchange() {
      //cckd
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
      return this.$store.state.contentchange;
    }
  },
  mounted: function mounted() {
    vueOBJ = this;
    pgperm = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__.default.data.getPagePermission(this.$store.state.permission, this.pageid);
    this.initpage();
  },
  methods: {
    initpage: function initpage() {
      _initpage();

      getLoginSettingData();
    },
    SavePageContent: function SavePageContent() {
      if (pgperm.create == 1 || pgperm.write == 1) {
        var ct = $('#ssb_frontpage_login_tip').val();
        ct = encodeURIComponent(ct);
        $('#ssb_frontpage_login_tip_val').val(ct);
        var formData = new FormData($("#ssb_frontpage_login_frm")[0]);
        $.ajax({
          url: 'admin.setSystemSettingBasicLogin',
          type: 'POST',
          data: formData,
          async: false,
          success: function success(data) {
            if (data.msg == "ok") {
              _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_dbsaved');
            } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert(data.msg);
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          },
          cache: false,
          contentType: false,
          processData: false
        });
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.page1_content_content_bottom svg{\n    color: #6b85e2;\n}\n.page_front_content_list{\n    display: none;\n}\n.page_front_content_list.active{\n    display: block;\n}\n.page1_content_side_bar .page1_content_side_bar_text{\n    cursor: pointer;\n    height: auto;\n    float: left;\n}\n#addpic_btn{\n    height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;\n}\n.page_login_tab{\n    width: 150px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue":
/*!*************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SystemSetBasicFrontPagesLogin_vue_vue_type_template_id_5c2090fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemSetBasicFrontPagesLogin.vue?vue&type=template&id=5c2090fe& */ "./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=template&id=5c2090fe&");
/* harmony import */ var _SystemSetBasicFrontPagesLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemSetBasicFrontPagesLogin.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=script&lang=js&");
/* harmony import */ var _SystemSetBasicFrontPagesLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _SystemSetBasicFrontPagesLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SystemSetBasicFrontPagesLogin_vue_vue_type_template_id_5c2090fe___WEBPACK_IMPORTED_MODULE_0__.render,
  _SystemSetBasicFrontPagesLogin_vue_vue_type_template_id_5c2090fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemSetBasicFrontPagesLogin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=template&id=5c2090fe&":
/*!********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=template&id=5c2090fe& ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_template_id_5c2090fe___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_template_id_5c2090fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_template_id_5c2090fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemSetBasicFrontPagesLogin.vue?vue&type=template&id=5c2090fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=template&id=5c2090fe&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=template&id=5c2090fe&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=template&id=5c2090fe& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        {
          staticClass: "col-md-12 page_front_content_list active",
          attrs: { id: "frontpage_login" }
        },
        [
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c(
              "form",
              {
                attrs: {
                  method: "post",
                  enctype: "multipart/form-data",
                  name: "ssb_frontpage_login_frm",
                  id: "ssb_frontpage_login_frm"
                }
              },
              [
                _c("input", {
                  attrs: {
                    type: "hidden",
                    name: "ssb_frontpage_login_tip_val",
                    id: "ssb_frontpage_login_tip_val",
                    value: ""
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "page1_content_content_title" }, [
                  _vm._v(_vm._s(_vm.cpgtxt_setting))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "page1_content_content page2_content_text" },
                  [
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_background))])
                      ]),
                      _vm._v(" "),
                      _vm._m(0),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn page1_custom_btn",
                            staticStyle: {
                              height: "40px",
                              "border-radius": "20px",
                              padding: "0 30px",
                              "margin-right": "15px"
                            },
                            attrs: {
                              type: "button",
                              id: "ssb_frontpage_back_upbtn"
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.cbtntxt_edit) +
                                "\n                                "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_logo))])
                      ]),
                      _vm._v(" "),
                      _vm._m(1),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn page1_custom_btn",
                            staticStyle: {
                              height: "40px",
                              "border-radius": "20px",
                              padding: "0 30px",
                              "margin-right": "15px"
                            },
                            attrs: {
                              type: "button",
                              id: "ssb_frontpage_logo_upbtn"
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.cbtntxt_edit) +
                                "\n                                "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_tip))])
                      ]),
                      _vm._v(" "),
                      _vm._m(2)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_fontcolour))])
                      ]),
                      _vm._v(" "),
                      _vm._m(3),
                      _vm._v(" "),
                      _vm._m(4)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cbtntxt_theme) +
                              " " +
                              _vm._s(_vm.cpgtxt_color)
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(5),
                      _vm._v(" "),
                      _vm._m(6)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_back) +
                              "  " +
                              _vm._s(_vm.cpgtxt_color)
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(7),
                      _vm._v(" "),
                      _vm._m(8)
                    ])
                  ]
                )
              ]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticStyle: { "text-align": "right", "margin-bottom": "15px" } },
      [
        _c(
          "div",
          {
            staticClass: "btn btn-outline-light  dash-my-btn-0 active p-l-r-30",
            attrs: { id: "add_domainBtn" },
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.SavePageContent()
              }
            }
          },
          [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_savechange))])]
        )
      ]
    ),
    _vm._v(" "),
    _vm._m(9)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticStyle: { display: "none" } }, [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "ssb_frontpage_back_pre",
            id: "ssb_frontpage_back_pre",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "file",
            name: "ssb_frontpage_back",
            id: "ssb_frontpage_back",
            value: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("img", {
        staticStyle: { width: "100px" },
        attrs: {
          src: "/images/icons/image_tp.png",
          alt: "",
          id: "ssb_frontpage_back_preview",
          onerror: "this.src ='/images/noimg.png';"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticStyle: { display: "none" } }, [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "ssb_frontpage_logo_pre",
            id: "ssb_frontpage_logo_pre",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "file",
            name: "ssb_frontpage_logo",
            id: "ssb_frontpage_logo",
            value: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("img", {
        staticStyle: { width: "100px" },
        attrs: {
          src: "/images/icons/image_tp.png",
          alt: "",
          id: "ssb_frontpage_logo_preview",
          onerror: "this.src ='/images/noimg.png';"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-5" }, [
      _c("textarea", {
        staticClass: "form-control border-input-text",
        staticStyle: { "min-height": "60px" },
        attrs: {
          placeholder: "",
          name: "ssb_frontpage_login_tip",
          id: "ssb_frontpage_login_tip",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("input", {
        attrs: {
          type: "hidden",
          name: "ssb_frontpage_login_font_color_val",
          id: "ssb_frontpage_login_font_color_val",
          value: "#ffffff"
        }
      }),
      _vm._v(" "),
      _c("div", {
        staticStyle: {
          border: "1px solid #aaaaaa",
          width: "70px",
          height: "75%",
          cursor: "pointer",
          background: "rgb(227, 13, 13)"
        },
        attrs: {
          id: "ssb_frontpage_login_font_colorpicker",
          "data-color": "#ffffff"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { attrs: { id: "ssb_frontpage_login_font_color_value" } }, [
        _vm._v("#ffffff")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("input", {
        attrs: {
          type: "hidden",
          name: "ssb_frontpage_login_theme_color_val",
          id: "ssb_frontpage_login_theme_color_val",
          value: "#104f8e"
        }
      }),
      _vm._v(" "),
      _c("div", {
        staticStyle: {
          border: "1px solid #aaaaaa",
          width: "70px",
          height: "75%",
          cursor: "pointer",
          background: "rgb(227, 13, 13)"
        },
        attrs: {
          id: "ssb_frontpage_login_theme_colorpicker",
          "data-color": "#104f8e"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { attrs: { id: "ssb_frontpage_login_theme_color_value" } }, [
        _vm._v("#104f8e")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("input", {
        attrs: {
          type: "hidden",
          name: "ssb_frontpage_login_back_color_val",
          id: "ssb_frontpage_login_back_color_val",
          value: "#ffffff"
        }
      }),
      _vm._v(" "),
      _c("div", {
        staticStyle: {
          border: "1px solid #aaaaaa",
          width: "70px",
          height: "75%",
          cursor: "pointer",
          background: "rgb(227, 13, 13)"
        },
        attrs: {
          id: "ssb_frontpage_login_back_colorpicker",
          "data-color": "#ffffff"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { attrs: { id: "ssb_frontpage_login_back_color_value" } }, [
        _vm._v("#ffffff")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row empty-line" }, [
      _c(
        "div",
        { staticClass: "col-md-12", staticStyle: { padding: "30px 0" } },
        [_vm._v(" ")]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);
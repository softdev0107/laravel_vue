"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vuedir_pages_webs_WesGlobal_WebsWesGlobalPagesLogin_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/jsfunc/lang_module */ "./resources/vuedir/assets/jsfunc/lang_module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
/* harmony import */ var _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/jsfunc/media_module */ "./resources/vuedir/assets/jsfunc/media_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var preview = '';
var tabstatus = 0;
var vueOBJ = null;
var transedlang = '';
var wwgfield = 'sharinglogin';
var pgperm = {};

function initSharinglogin() {}

function getSharingloginData() {
  return;
}

function initInstructions() {
  var wwgp_instruction_font_colorpicker = document.getElementById('wwgp_instruction_font_colorpicker');
  var pickercolor = new ColorPicker(wwgp_instruction_font_colorpicker, '#000000');
  wwgp_instruction_font_colorpicker.addEventListener('colorChange', function (event) {
    var color = event.detail.color.hexa;
    $('#wwgp_instruction_font_color_value').text(color);
    $('#wwgp_instruction_font_color_val').val(color);
  });
  var wwgp_instruction_border_colorpicker = document.getElementById('wwgp_instruction_border_colorpicker');
  var pickerborder = new ColorPicker(wwgp_instruction_border_colorpicker, '#000000');
  wwgp_instruction_border_colorpicker.addEventListener('colorChange', function (event) {
    var color = event.detail.color.hexa;
    $('#wwgp_instruction_border_color_value').text(color);
    $('#wwgp_instruction_border_color_val').val(color);
  });
  var wwgp_instruction_back_colorpicker = document.getElementById('wwgp_instruction_back_colorpicker');
  var pickerbk = new ColorPicker(wwgp_instruction_back_colorpicker, '#000000');
  wwgp_instruction_back_colorpicker.addEventListener('colorChange', function (event) {
    var color = event.detail.color.hexa;
    $('#wwgp_instruction_back_color_value').text(color);
    $('#wwgp_instruction_back_color_val').val(color);
  });
  $('textarea#login_instruction_content').on('keyup', function () {
    var lengthOfline = $(this).val().split(/\n/g).length;
    var maxline = $('#login_instruction_maxline').val();

    if (lengthOfline > 0) {
      var lines = $(this).val().split(/\n/g);

      for (var i = 0; i < lengthOfline; i++) {
        var line = lines[i]; //console.log(line);

        var lengthOfTextLine = line.replace(/\s/g, '').length;
        var maxline = $('#login_instruction_maxline').val();

        if (lengthOfTextLine > maxline) {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('Maximum Characters Per Line ' + maxline + '.');
          break;
        }
      }
    }

    var lengthOfText = $(this).val().replace(/\s/g, '').length;
    var maxnum = $('#login_instruction_maxnum').val();
    if (lengthOfText > maxnum) _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('Maximum Characters Per Number ' + maxnum + '.');
  });
}

function getInstructionsData() {
  $.ajax({
    url: 'admin.getwwgpLoginInstructData',
    data: {
      transLang: transedlang
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg == "ok") {
        if (data.item != '') {
          var dt = data.item;
          dt = $.parseJSON(dt);
          var ct = decodeURIComponent(dt.help);
          $('#login_instruction_content').val(ct);
          $('#login_instruction_maxline').val(dt.maxline);
          $('#login_instruction_maxnum').val(dt.maxnum);
          $('#wwgp_instruction_font_color_val').val(dt.fontcolor);
          $('#wwgp_instruction_font_color_value').text(dt.fontcolor);
          $('#wwgp_instruction_font_colorpicker').css('background', dt.fontcolor);
          $('#wwgp_instruction_border_color_value').text(dt.bordercolor);
          $('#wwgp_instruction_border_color_val').val(dt.bordercolor);
          $('#wwgp_instruction_border_colorpicker').css('background', dt.bordercolor);
          $('#wwgp_instruction_back_color_value').text(dt.backcolor);
          $('#wwgp_instruction_back_color_val').val(dt.backcolor);
          $('#wwgp_instruction_back_colorpicker').css('background', dt.backcolor);

          if (transedlang != null && transedlang != '') {
            $('.page1_alarm_bar').addClass('active');
            $('.page1_alarm_bar span').text('Save  Appear');
          }
        }
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert(data.msg);
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function initAdvan() {
  $('#advan_file_upbtn').click(function () {
    //$('#advan_file').trigger('click');
    $('.Media_directory_files').html("");
    $('#Media_Modal_Search_Text').val("");
    _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__.default.data.setImageTagID("advan_file_preview", "advan_file_pre");
    _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getDirectories('/');
    _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__.default.data.MediaSelectImageModal(vueOBJ);
    $('#MediaDirectoryModal').modal('show');
  });
}

function getAdvanData() {
  $.ajax({
    url: 'admin.getwwgpLoginAdvanData',
    data: {
      transLang: transedlang
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg == "ok") {
        if (data.advan != '') {
          //$('#advan_file_preview').attr('src','/uploads/images/wesimg/'+data.advan);
          $('#advan_file_preview').attr('src', data.advan);
          $('#advan_file_pre').val(data.advan);

          if (transedlang != null && transedlang != '') {
            $('.page1_alarm_bar').addClass('active');
            $('.page1_alarm_bar span').text('Save  Appear');
          }
        } else {}
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert(data.msg);
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalPagesLogin",

  /* components: {
       CKEditor
   },*/
  data: function data() {
    return {
      pageid: 'webs-wesglobal-pages-login-fav',
      mu_webs: '',
      musu_webs_wesglobal: '',
      mususu_webs_wesglobal_pages: '',
      musususu_webs_wesglobal_pages_login: '',
      pgtxt_translation: '',
      pgtxt_save: '',
      pgtxt_preview: '',
      pgtxt_release: '',
      pgtxt_korean: '',
      pgtxt_chinese: '',
      pgtxt_english: '',
      pgtxt_nosavenoappear: '',
      pgtxt_instructions: '',
      pgtxt_sharinglogin: '',
      pgtxt_advanced: '',
      pgtxt_css: '',
      pgtxt_bar: '',
      pgtxt_pleaseenter: '',
      pgtxt_font: '',
      pgtxt_content: '',
      pgtxt_background: '',
      btntxt_add: '',
      pgtxt_maximumcharactersperline: '',
      pgtxt_maximumcharacterspernumber: '',
      pgtxt_color: '',
      pgtxt_tab: '',
      pgtxt_border: '',
      pgtxt_index: '',
      pgtxt_login: '',
      pgtxt_page: '',
      pgtxt_fontcolour: '',
      pgtxt_image: '',
      pgtxt_media: '',
      btntxt_edit: '',
      btntxt_search: '',
      pgtxt_dbsaved: '',
      pgtxt_previewpage: '',
      pgtxt_releasesuccess: '',
      btntxt_ok: '',
      btntxt_cancel: '',
      pgtxt_wantdeleteitem: '',
      pgtxt_notpermission: '',
      pgtxt_notification: ''
    };
  },
  created: function created() {},
  beforeMount: function beforeMount() {},
  computed: {
    cmususu_webs_wesglobal_pages: function cmususu_webs_wesglobal_pages() {
      return this.mususu_webs_wesglobal_pages;
    },
    cmusususu_webs_wesglobal_pages_login: function cmusususu_webs_wesglobal_pages_login() {
      return this.musususu_webs_wesglobal_pages_login;
    },
    cmu_webs: function cmu_webs() {
      return this.mu_webs;
    },
    cmusu_webs_wesglobal: function cmusu_webs_wesglobal() {
      return this.musu_webs_wesglobal;
    },
    cpgtxt_translation: function cpgtxt_translation() {
      return this.pgtxt_translation;
    },
    cpgtxt_save: function cpgtxt_save() {
      return this.pgtxt_save;
    },
    cpgtxt_preview: function cpgtxt_preview() {
      return this.pgtxt_preview;
    },
    cpgtxt_release: function cpgtxt_release() {
      return this.pgtxt_release;
    },
    cpgtxt_korean: function cpgtxt_korean() {
      return this.pgtxt_korean;
    },
    cpgtxt_chinese: function cpgtxt_chinese() {
      return this.pgtxt_chinese;
    },
    cpgtxt_english: function cpgtxt_english() {
      return this.pgtxt_english;
    },
    cpgtxt_nosavenoappear: function cpgtxt_nosavenoappear() {
      return this.pgtxt_nosavenoappear;
    },
    cpgtxt_sharinglogin: function cpgtxt_sharinglogin() {
      return this.pgtxt_sharinglogin;
    },
    cpgtxt_instructions: function cpgtxt_instructions() {
      return this.pgtxt_instructions;
    },
    cpgtxt_advanced: function cpgtxt_advanced() {
      return this.pgtxt_advanced;
    },
    cpgtxt_pleaseenter: function cpgtxt_pleaseenter() {
      return this.pgtxt_pleaseenter;
    },
    cpgtxt_font: function cpgtxt_font() {
      return this.pgtxt_font;
    },
    cpgtxt_content: function cpgtxt_content() {
      return this.pgtxt_content;
    },
    cpgtxt_background: function cpgtxt_background() {
      return this.pgtxt_background;
    },
    cpgtxt_maximumcharactersperline: function cpgtxt_maximumcharactersperline() {
      return this.pgtxt_maximumcharactersperline;
    },
    cpgtxt_maximumcharacterspernumber: function cpgtxt_maximumcharacterspernumber() {
      return this.pgtxt_maximumcharacterspernumber;
    },
    cpgtxt_color: function cpgtxt_color() {
      return this.pgtxt_color;
    },
    cpgtxt_tab: function cpgtxt_tab() {
      return this.pgtxt_tab;
    },
    cpgtxt_border: function cpgtxt_border() {
      return this.pgtxt_border;
    },
    cpgtxt_index: function cpgtxt_index() {
      return this.pgtxt_index;
    },
    cpgtxt_login: function cpgtxt_login() {
      return this.pgtxt_login;
    },
    cpgtxt_page: function cpgtxt_page() {
      return this.pgtxt_page;
    },
    cpgtxt_bar: function cpgtxt_bar() {
      return this.pgtxt_bar;
    },
    cpgtxt_css: function cpgtxt_css() {
      return this.pgtxt_css;
    },
    cpgtxt_fontcolour: function cpgtxt_fontcolour() {
      return this.pgtxt_fontcolour;
    },
    cpgtxt_image: function cpgtxt_image() {
      return this.pgtxt_image;
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
    cpgtxt_previewpage: function cpgtxt_previewpage() {
      return this.pgtxt_previewpage;
    },
    cpgtxt_releasesuccess: function cpgtxt_releasesuccess() {
      return this.pgtxt_releasesuccess;
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
    /* fav part*/
    vueOBJ = this;
    pgperm = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__.default.data.getPagePermission(this.$store.state.permission, this.pageid);
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    this.getWWGStoredLang();
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
    getWWGStoredLang: function getWWGStoredLang() {
      axios__WEBPACK_IMPORTED_MODULE_1___default().post('admin.getWWGStoredLang').then(function (response) {
        var msg = response.data.msg;

        if (msg == "ok") {
          var stored_langs = response.data.langlist;

          if (stored_langs != '') {
            stored_langs = $.parseJSON(stored_langs);
            var tags = '';

            for (var j = 0; j < stored_langs.length; j++) {
              var obj = stored_langs[j];
              var iso = obj.iso;
              var dialCode = obj.dialcode;
              var cname = obj.name;
              var status = obj.status;
              var dcont = iso + '-' + dialCode + '-' + cname;
              if (status == 'enable') tags += '<span class="page1_translate_span" style="cursor: pointer" data-cont="' + dcont + '">' + cname + '</span>&nbsp;&nbsp;&nbsp;';
            }

            $('#translanglist').html(tags);
            $('.page1_translate_span').click(function () {
              $('.page1_translate_span').removeClass('active');
              $(this).addClass('active');
              var cont = $(this).attr('data-cont');
              var len = cont.split('-').length;

              if (len > 0) {
                var sky = cont.split('-')[0] + '-' + cont.split('-')[1];
                transedlang = sky;
                $('.page1_alarm_bar').removeClass('active');
                $('.page1_alarm_bar span').text('No Save No Appear');
                if (wwgfield == 'sharinglogin') getSharingloginData();else if (wwgfield == 'instructions') getInstructionsData();else if (wwgfield == 'advanced') getAdvanData();
              }
            });
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    initpage: function initpage() {
      this.sliderTabs();
      getSharingloginData();
    } //initpage
    ,
    sliderTabs: function sliderTabs() {
      $('.page1_content_side_bar div.page1_content_side_bar_text').click(function () {
        $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
        $(this).addClass('page1_content_side_bar_seleted');
        var subid = $(this).attr('data-target');
        $('.col-md-12.page_slider_content_list').removeClass('active');
        $('#' + subid).addClass('active');
        $('.page1_alarm_bar span').text('No Save No Appear');
        $('.page1_alarm_bar').removeClass('active');
        $('.page1_translate_span').removeClass('active');
        transedlang = '';

        if (subid == 'sharinglogin') {
          tabstatus = 0;
          wwgfield = 'sharinglogin';
          getSharingloginData();
        } else if (subid == 'instructions') {
          tabstatus = 1;
          wwgfield = 'instructions';
          getInstructionsData();
        } else if (subid == 'advanced') {
          tabstatus = 2;
          wwgfield = 'advanced';
          getAdvanData();
        }
      });
      initSharinglogin();
      initInstructions();
      initAdvan();
    },
    PagePreview: function PagePreview() {
      $("#previewModalModalbody").html('');
      var iframeH = $(window).height() - 100;
      var lang = "";
      if (transedlang == '') lang = "en";else lang = transedlang.split("-")[0];
      $("#previewModalModalbody").html('<iframe src="/' + lang + '/preview/login" style="border:none;width:100%; height: ' + iframeH + 'px;" title="preview"></iframe>');
      $("#previewModal").modal('show');
    },
    PageRelease: function PageRelease() {
      if (pgperm.write != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      if (transedlang == '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('Please Select language of Content for save!');
        return;
      }

      var pgtxt_releasesuccess = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_releasesuccess');
      var pgtxt_release = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_release');

      if (window.confirm(pgtxt_release)) {
        $.ajax({
          url: 'admin.wwgploginRelease',
          type: 'POST',
          data: {
            trans: transedlang,
            tabstatus: tabstatus,
            release: 1
          },
          success: function success(data) {
            if (data.msg == "ok") {
              _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert(pgtxt_releasesuccess);
            } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert(data.msg);
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          }
        });
      } else {
        $.ajax({
          url: 'admin.wwgploginRelease',
          type: 'POST',
          data: {
            trans: transedlang,
            tabstatus: tabstatus,
            release: 0
          },
          success: function success(data) {},
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          }
        });
      }
    },
    SavePageContent: function SavePageContent() {
      if (pgperm.write != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      var pgtxt_dbsaved = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');

      if (tabstatus == 0) {
        /* tansLang:transedlang,
             wwgfield:wwgfield*/
      } else if (tabstatus == 1) {
        var ct = $('#login_instruction_content').val();
        ct = encodeURIComponent(ct);
        $('#login_instruction_content_val').val(ct);
        $("#instruct_frm_transLang").val(transedlang);
        var formData = new FormData($("#instruct_frm")[0]);
        $.ajax({
          url: 'admin.wwgploginInstruct',
          type: 'POST',
          data: formData,
          async: false,
          success: function success(data) {
            if (data.msg == "ok") {
              _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert(pgtxt_dbsaved);
            } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert(data.msg);
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          },
          cache: false,
          contentType: false,
          processData: false
        });
      } else if (tabstatus == 2) {
        $("#advan_frm_transLang").val(transedlang);
        var formData = new FormData($("#advan_frm")[0]);
        $.ajax({
          url: 'admin.wwgploginAdvanupload',
          type: 'POST',
          data: formData,
          async: false,
          success: function success(data) {
            if (data.msg == "ok") {
              _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert(pgtxt_dbsaved);
            } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert(data.msg);
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          },
          cache: false,
          contentType: false,
          processData: false
        });
      }
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.page1_content_content_bottom svg{\n    color: #6b85e2;\n}\n.page_slider_content_list{\n    display: none;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.page1_content_side_bar .page1_content_side_bar_text{\n    cursor: pointer;\n    height: auto;\n    float: left;\n}\n#addpic_btn{\n    height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;\n}\n.page_login_tab{\n    width: 150px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesGlobalPagesLogin.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue":
/*!***************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesGlobalPagesLogin_vue_vue_type_template_id_23885802___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesGlobalPagesLogin.vue?vue&type=template&id=23885802& */ "./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=template&id=23885802&");
/* harmony import */ var _WebsWesGlobalPagesLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesGlobalPagesLogin.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=script&lang=js&");
/* harmony import */ var _WebsWesGlobalPagesLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesGlobalPagesLogin.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _WebsWesGlobalPagesLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _WebsWesGlobalPagesLogin_vue_vue_type_template_id_23885802___WEBPACK_IMPORTED_MODULE_0__.render,
  _WebsWesGlobalPagesLogin_vue_vue_type_template_id_23885802___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesGlobalPagesLogin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesGlobalPagesLogin.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=style&index=0&lang=css&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=template&id=23885802&":
/*!**********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=template&id=23885802& ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesLogin_vue_vue_type_template_id_23885802___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesLogin_vue_vue_type_template_id_23885802___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesLogin_vue_vue_type_template_id_23885802___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesGlobalPagesLogin.vue?vue&type=template&id=23885802& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=template&id=23885802&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=template&id=23885802&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesLogin.vue?vue&type=template&id=23885802& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v(_vm._s(_vm.cmusususu_webs_wesglobal_pages_login))]),
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
              _vm._s(_vm.cmu_webs) +
              "   >> " +
              _vm._s(_vm.cmusu_webs_wesglobal) +
              "   >>  " +
              _vm._s(_vm.cmususu_webs_wesglobal_pages) +
              "   >>  " +
              _vm._s(_vm.cmusususu_webs_wesglobal_pages_login) +
              "\n                      "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "page1_translate_bar" }, [
          _c("div", { staticClass: "page1_translate_text" }, [
            _vm._v(_vm._s(_vm.cpgtxt_translation))
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "page1_translate_bar_left",
            attrs: { id: "translanglist" }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "page1_translate_bar_right",
              staticStyle: { display: "flex" }
            },
            [
              _c(
                "div",
                {
                  staticClass: "page1_translate_div",
                  staticStyle: { cursor: "pointer" },
                  on: { click: _vm.SavePageContent }
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "iconify",
                      staticStyle: {
                        "font-size": "24px",
                        transform: "rotate(360deg)"
                      },
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        "aria-hidden": "true",
                        focusable: "false",
                        width: "1em",
                        height: "1em",
                        preserveAspectRatio: "xMidYMid meet",
                        viewBox: "0 0 24 24",
                        "data-inline": "false",
                        "data-icon": "ic:sharp-save-alt"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67l2.59-2.58L17 11.5l-5 5l-5-5l1.41-1.41L11 12.67V3h2v9.67z",
                          fill: "currentColor"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "page1_translate_span_right" }, [
                    _vm._v(_vm._s(_vm.cpgtxt_save))
                  ])
                ]
              ),
              _vm._v("  |   \n                    "),
              _c(
                "div",
                {
                  staticClass: "page1_translate_div",
                  staticStyle: { cursor: "pointer" },
                  on: { click: _vm.PagePreview }
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "iconify",
                      staticStyle: {
                        "font-size": "24px",
                        transform: "rotate(360deg)"
                      },
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        "aria-hidden": "true",
                        focusable: "false",
                        width: "1em",
                        height: "1em",
                        preserveAspectRatio: "xMidYMid meet",
                        viewBox: "0 0 24 24",
                        "data-inline": "false",
                        "data-icon": "ic:outline-preview"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-7-8.5c1.84 0 3.48.96 4.34 2.5c-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z",
                          fill: "currentColor"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "page1_translate_span_right" }, [
                    _vm._v(_vm._s(_vm.cpgtxt_preview))
                  ])
                ]
              ),
              _vm._v("  |   \n                    "),
              _c(
                "div",
                {
                  staticClass: "page1_translate_div",
                  staticStyle: { cursor: "pointer" },
                  on: { click: _vm.PageRelease }
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "iconify",
                      staticStyle: {
                        "font-size": "24px",
                        transform: "rotate(360deg)"
                      },
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        "aria-hidden": "true",
                        focusable: "false",
                        width: "1em",
                        height: "1em",
                        preserveAspectRatio: "xMidYMid meet",
                        viewBox: "0 0 24 24",
                        "data-inline": "false",
                        "data-icon": "ic:outline-new-releases"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68L23 12zm-4.51 2.11l.26 2.79l-2.74.62l-1.43 2.41L12 18.82l-2.58 1.11l-1.43-2.41l-2.74-.62l.26-2.8L3.66 12l1.85-2.12l-.26-2.78l2.74-.61l1.43-2.41L12 5.18l2.58-1.11l1.43 2.41l2.74.62l-.26 2.79L20.34 12l-1.85 2.11zM11 15h2v2h-2zm0-8h2v6h-2z",
                          fill: "currentColor"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "page1_translate_span_right" }, [
                    _vm._v(_vm._s(_vm.cpgtxt_release))
                  ])
                ]
              ),
              _vm._v("   \n                ")
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "page1_alarm_bar" }, [
          _c(
            "svg",
            {
              staticClass: "iconify",
              staticStyle: { "font-size": "24px", transform: "rotate(360deg)" },
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                "aria-hidden": "true",
                focusable: "false",
                width: "1em",
                height: "1em",
                preserveAspectRatio: "xMidYMid meet",
                viewBox: "0 0 24 24",
                "data-inline": "false",
                "data-icon": "mi:circle-warning"
              }
            },
            [
              _c("g", { attrs: { fill: "none" } }, [
                _c("path", {
                  attrs: {
                    d:
                      "M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z",
                    fill: "currentColor"
                  }
                }),
                _c("path", {
                  attrs: {
                    d: "M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z",
                    fill: "currentColor"
                  }
                }),
                _c("path", {
                  attrs: {
                    d: "M10.5 16.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z",
                    fill: "currentColor"
                  }
                })
              ])
            ]
          ),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.cpgtxt_nosavenoappear))])
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
        _c("div", { staticClass: "page_login_tab" }, [
          _c(
            "div",
            {
              staticClass:
                "page1_content_side_bar_text page1_content_side_bar_seleted",
              attrs: { "data-target": "sharinglogin" }
            },
            [
              _vm._v(
                _vm._s(_vm.cpgtxt_sharinglogin) + " " + _vm._s(_vm.cpgtxt_bar)
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "page_login_tab" }, [
          _c(
            "div",
            {
              staticClass: "page1_content_side_bar_text",
              attrs: { "data-target": "instructions" }
            },
            [
              _vm._v(
                _vm._s(_vm.cpgtxt_instructions) + " " + _vm._s(_vm.cpgtxt_bar)
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "page_login_tab" }, [
          _c(
            "div",
            {
              staticClass: "page1_content_side_bar_text",
              attrs: { "data-target": "advanced" }
            },
            [_vm._v(_vm._s(_vm.cpgtxt_advanced) + " " + _vm._s(_vm.cpgtxt_css))]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", {
        staticClass: "col-md-12 page_slider_content_list active",
        attrs: { id: "sharinglogin" }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list",
          attrs: { id: "instructions" }
        },
        [
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c(
              "form",
              {
                attrs: {
                  method: "post",
                  enctype: "multipart/form-data",
                  name: "instruct_frm",
                  id: "instruct_frm"
                }
              },
              [
                _c("input", {
                  attrs: {
                    type: "hidden",
                    name: "transLang",
                    id: "instruct_frm_transLang",
                    value: ""
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  attrs: {
                    type: "hidden",
                    name: "login_instruction_content_val",
                    id: "login_instruction_content_val",
                    value: "en-1"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "page1_content_content_title" }, [
                  _vm._v(
                    _vm._s(_vm.cpgtxt_instructions) +
                      " " +
                      _vm._s(_vm.cpgtxt_bar)
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "page1_content_content page2_content_text" },
                  [
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_content))])
                      ]),
                      _vm._v(" "),
                      _vm._m(1)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("span", [
                          _vm._v(_vm._s(_vm.cpgtxt_maximumcharactersperline))
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _vm._v(
                          "\n                               " +
                            _vm._s(_vm.cpgtxt_pleaseenter) +
                            " 20-50\n                            "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("span", [
                          _vm._v(_vm._s(_vm.cpgtxt_maximumcharacterspernumber))
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(3),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _vm._v(
                          "\n                                " +
                            _vm._s(_vm.cpgtxt_pleaseenter) +
                            " 50-100\n                            "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_font) +
                              " " +
                              _vm._s(_vm.cpgtxt_color)
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(4),
                      _vm._v(" "),
                      _vm._m(5)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_tab) +
                              "  " +
                              _vm._s(_vm.cpgtxt_border) +
                              "  " +
                              _vm._s(_vm.cpgtxt_color)
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(6),
                      _vm._v(" "),
                      _vm._m(7)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_tab) +
                              "  " +
                              _vm._s(_vm.cpgtxt_background)
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(8),
                      _vm._v(" "),
                      _vm._m(9)
                    ])
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
          staticClass: "col-md-12 page_slider_content_list",
          attrs: { id: "advanced" }
        },
        [
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c(
              "form",
              {
                attrs: {
                  method: "post",
                  enctype: "multipart/form-data",
                  name: "advan_frm",
                  id: "advan_frm"
                }
              },
              [
                _c("input", {
                  attrs: {
                    type: "hidden",
                    name: "transLang",
                    id: "advan_frm_transLang",
                    value: ""
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "page1_content_content_title" }, [
                  _vm._v(_vm._s(_vm.cpgtxt_background))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "page1_content_content" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-2" }, [
                      _c("span", [_vm._v(_vm._s(_vm.cpgtxt_image))])
                    ]),
                    _vm._v(" "),
                    _vm._m(10),
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
                          attrs: { type: "button", id: "advan_file_upbtn" }
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
      {
        staticClass: "modal fade",
        attrs: { id: "previewModal", role: "dialog" }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-sm",
            staticStyle: { "min-width": "95%!important" }
          },
          [
            _c(
              "div",
              {
                staticClass: "modal-content",
                staticStyle: { "border-radius": "0" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "modal-header",
                    staticStyle: { height: "25px", padding: "0 5px" }
                  },
                  [
                    _c(
                      "h4",
                      {
                        staticClass: "modal-title",
                        staticStyle: { margin: "0px auto" }
                      },
                      [_vm._v(_vm._s(_vm.cpgtxt_previewpage))]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "close",
                        staticStyle: {
                          width: "18px",
                          height: "18px",
                          padding: "0"
                        },
                        attrs: { type: "button", "data-dismiss": "modal" }
                      },
                      [_vm._v("×")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "modal-body",
                  staticStyle: { padding: "0" },
                  attrs: { id: "previewModalModalbody" }
                })
              ]
            )
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
          id: "webs-wesglobal-pages-login-fav",
          "data-status": "off",
          "data-page-info": "Login_webs-wesglobal-pages-login"
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
    return _c("div", { staticClass: "col-md-7" }, [
      _c("textarea", {
        staticClass: "page2_input login_instruction_content",
        attrs: {
          placeholder: "currently only china mobile phone number is supported",
          name: "login_instruction_content",
          id: "login_instruction_content",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "number",
          value: "20",
          name: "login_instruction_maxline",
          id: "login_instruction_maxline"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "number",
          value: "50",
          name: "login_instruction_maxnum",
          id: "login_instruction_maxnum"
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
          name: "wwgp_instruction_font_color_val",
          id: "wwgp_instruction_font_color_val",
          value: "#000000"
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
          id: "wwgp_instruction_font_colorpicker",
          "data-color": "#000000"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { attrs: { id: "wwgp_instruction_font_color_value" } }, [
        _vm._v("#000000")
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
          name: "wwgp_instruction_border_color_val",
          id: "wwgp_instruction_border_color_val",
          value: "#000000"
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
          id: "wwgp_instruction_border_colorpicker",
          "data-color": "#000000"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { attrs: { id: "wwgp_instruction_border_color_value" } }, [
        _vm._v("#000000")
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
          name: "wwgp_instruction_back_color_val",
          id: "wwgp_instruction_back_color_val",
          value: "#000000"
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
          id: "wwgp_instruction_back_colorpicker",
          "data-color": "#000000"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { attrs: { id: "wwgp_instruction_back_color_value" } }, [
        _vm._v("#000000")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticStyle: { display: "none" } }, [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "advan_file_pre",
            id: "advan_file_pre",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "file",
            name: "advan_file",
            id: "advan_file",
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
          id: "advan_file_preview",
          onerror: "this.src ='/images/noimg.png';"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ })

}]);
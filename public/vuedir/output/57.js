(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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





var preview = '';
var tabstatus = 0;
var vueOBJ = null;
var transedlang = '';
var pgperm = {};

function initAdvan() {
  $('#advan_file_upbtn').click(function () {
    //$('#advan_file').trigger('click');
    $('.Media_directory_files').html("");
    $('#Media_Modal_Search_Text').val("");
    _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.setImageTagID("advan_file_preview", "advan_file_pre");
    _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getDirectories('/');
    _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.MediaSelectImageModal(vueOBJ);
    $('#MediaDirectoryModal').modal('show');
  });
}

function getAdvanData() {
  $.ajax({
    url: 'admin.getwwgpConstructionData',
    data: {
      transLang: transedlang
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg == "ok") {
        if (data.advan != '') {
          $('#advan_file_preview').attr('src', data.advan);
          $('#advan_file_pre').val(data.advan);
        } else {
          $('#advan_file_preview').attr('src', '/images/icons/image_tp.png');
          $('#advan_file_pre').val('');
        }
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert(data.msg);
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalPagesConstruction",
  data: function data() {
    return {
      pageid: 'webs-wesglobal-pages-construction-fav',
      mu_webs: '',
      musu_webs_weschina: '',
      mususu_webs_wesglobal_pages: '',
      musususu_webs_wesglobal_pages_construction: '',
      pgtxt_translation: '',
      pgtxt_save: '',
      pgtxt_preview: '',
      pgtxt_release: '',
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
      pgtxt_notification: '',
      pgtxt_background: ''
    };
  },
  created: function created() {},
  beforeMount: function beforeMount() {},
  computed: {
    cmususu_webs_wesglobal_pages: function cmususu_webs_wesglobal_pages() {
      return this.mususu_webs_wesglobal_pages;
    },
    cmusususu_webs_wesglobal_pages_construction: function cmusususu_webs_wesglobal_pages_construction() {
      return this.musususu_webs_wesglobal_pages_construction;
    },
    cmu_webs: function cmu_webs() {
      return this.mu_webs;
    },
    cmusu_webs_weschina: function cmusu_webs_weschina() {
      return this.musu_webs_weschina;
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
    cpgtxt_nosavenoappear: function cpgtxt_nosavenoappear() {
      return this.pgtxt_nosavenoappear;
    },
    cpgtxt_advanced: function cpgtxt_advanced() {
      return this.pgtxt_advanced;
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
    cpgtxt_background: function cpgtxt_background() {
      return this.pgtxt_background;
    },
    contentchange: function contentchange() {
      //cckd
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
      return this.$store.state.contentchange;
    }
  },
  mounted: function mounted() {
    /* fav part*/
    vueOBJ = this;
    pgperm = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.getPagePermission(this.$store.state.permission, this.pageid);
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
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
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.getWWGStoredLang').then(function (response) {
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
            $('.page1_alarm_bar').removeClass('active');
            $('.page1_alarm_bar span').text("No Save No Appear");
            $('.page1_translate_span').click(function () {
              $('.page1_translate_span').removeClass('active');
              $(this).addClass('active');
              var cont = $(this).attr('data-cont');
              var len = cont.split('-').length;

              if (len > 0) {
                var sky = cont.split('-')[0] + '-' + cont.split('-')[1];
                transedlang = sky;

                if (transedlang != null && transedlang != '') {
                  $('.page1_alarm_bar').addClass('active');
                  $('.page1_alarm_bar span').text('Save  Appear');
                }

                getAdvanData();
              }
            });
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    initpage: function initpage() {
      initAdvan();
      getAdvanData();
    },
    PagePreview: function PagePreview() {
      $("#previewModalModalbody").html('');
      var iframeH = $(window).height() - 100;
      var lang = "";
      if (transedlang == '') lang = "en";else lang = transedlang.split("-")[0];
      $("#previewModalModalbody").html('<iframe src="/' + lang + '/preview/construction" style="border:none;width:100%; height: ' + iframeH + 'px;" title="preview"></iframe>');
      $("#previewModal").modal('show');
    },
    PageRelease: function PageRelease() {
      if (pgperm.write != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
        return;
      }

      if (transedlang == '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_selectlanguage');
        return;
      }

      var pgtxt_releasesuccess = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_releasesuccess');
      var pgtxt_release = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_release');

      if (window.confirm(pgtxt_release)) {
        $.ajax({
          url: 'admin.wwgpConstructionRelease',
          type: 'POST',
          data: {
            trans: transedlang,
            release: 1
          },
          success: function success(data) {
            if (data.msg == "ok") {
              _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert(pgtxt_releasesuccess);
            } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert(data.msg);
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          }
        });
      } else {
        $.ajax({
          url: 'admin.wwgpConstructionRelease',
          type: 'POST',
          data: {
            trans: transedlang,
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
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
        return;
      }

      if (transedlang == null || transedlang == '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_selectlanguage');
        return;
      }

      var pgtxt_dbsaved = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
      $("#advan_frm_transLang").val(transedlang);
      var formData = new FormData($("#advan_frm")[0]);
      $.ajax({
        url: 'admin.wwgpConstructionUpload',
        type: 'POST',
        data: formData,
        async: false,
        success: function success(data) {
          if (data.msg == "ok") {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert(pgtxt_dbsaved);
          } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert(data.msg);
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        },
        cache: false,
        contentType: false,
        processData: false
      });
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page1_content_content_bottom svg{\n    color: #6b85e2;\n}\n.page_slider_content_list{\n    display: none;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.page1_content_side_bar .page1_content_side_bar_text{\n    cursor: pointer;\n    height: auto;\n    float: left;\n}\n#addpic_btn{\n    height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;\n}\n.page_login_tab{\n    width: 150px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesChinaPagesConstruction.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=template&id=157d6c3c&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=template&id=157d6c3c& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [
          _vm._v(_vm._s(_vm.cmusususu_webs_wesglobal_pages_construction))
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
              _vm._s(_vm.cmu_webs) +
              "   >> " +
              _vm._s(_vm.cmusu_webs_weschina) +
              "   >>  " +
              _vm._s(_vm.cmususu_webs_wesglobal_pages) +
              "   >>  " +
              _vm._s(_vm.cmusususu_webs_wesglobal_pages_construction) +
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
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list active",
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
          id: "webs-wesglobal-pages-construction-fav",
          "data-status": "off",
          "data-page-info": "Construction_webs-wesglobal-pages-construction"
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



/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue":
/*!********************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesChinaPagesConstruction_vue_vue_type_template_id_157d6c3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesChinaPagesConstruction.vue?vue&type=template&id=157d6c3c& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=template&id=157d6c3c&");
/* harmony import */ var _WebsWesChinaPagesConstruction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesChinaPagesConstruction.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WebsWesChinaPagesConstruction_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesChinaPagesConstruction.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WebsWesChinaPagesConstruction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsWesChinaPagesConstruction_vue_vue_type_template_id_157d6c3c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsWesChinaPagesConstruction_vue_vue_type_template_id_157d6c3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesConstruction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesChinaPagesConstruction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesConstruction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesConstruction_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesChinaPagesConstruction.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesConstruction_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesConstruction_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesConstruction_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesConstruction_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesConstruction_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=template&id=157d6c3c&":
/*!***************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=template&id=157d6c3c& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesConstruction_vue_vue_type_template_id_157d6c3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesChinaPagesConstruction.vue?vue&type=template&id=157d6c3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesConstruction.vue?vue&type=template&id=157d6c3c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesConstruction_vue_vue_type_template_id_157d6c3c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesConstruction_vue_vue_type_template_id_157d6c3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalPagesContent",
  components: {
    'WebsWesGlobalPagesContentList': function WebsWesGlobalPagesContentList() {
      return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(82)]).then(__webpack_require__.bind(null, /*! ../../../pages/webs/WesGlobal/WebsWesGlobalPagesContentList */ "./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContentList.vue"));
    },
    'WebsWesGlobalPagesContentType': function WebsWesGlobalPagesContentType() {
      return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(84)]).then(__webpack_require__.bind(null, /*! ../../../pages/webs/WesGlobal/WebsWesGlobalPagesContentType */ "./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContentType.vue"));
    },
    'WebsWesGlobalPagesContentSidebar': function WebsWesGlobalPagesContentSidebar() {
      return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(83)]).then(__webpack_require__.bind(null, /*! ../../../pages/webs/WesGlobal/WebsWesGlobalPagesContentSidebar */ "./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContentSidebar.vue"));
    }
  },
  data: function data() {
    return {
      pageid: 'webs-wesglobal-pages-content-fav',
      mu_webs: '',
      musu_webs_wesglobal: '',
      mususu_webs_wesglobal_pages: '',
      musususu_webs_wesglobal_pages_page: '',
      musususu_webs_wesglobal_pages_content: '',
      pgtxt_list: '',
      pgtxt_contenttype: '',
      pgtxt_sidebar: '',
      ptabstatus: 0
    };
  },
  computed: {
    PageComponentItem: function PageComponentItem() {
      switch (this.ptabstatus) {
        case 0:
          return 'WebsWesGlobalPagesContentList';

        case 1:
          return 'WebsWesGlobalPagesContentType';

        case 2:
          return 'WebsWesGlobalPagesContentSidebar';
      }
    },
    cmususu_webs_wesglobal_pages: function cmususu_webs_wesglobal_pages() {
      return this.mususu_webs_wesglobal_pages;
    },
    cmusususu_webs_wesglobal_pages_page: function cmusususu_webs_wesglobal_pages_page() {
      return this.musususu_webs_wesglobal_pages_page;
    },
    cmusususu_webs_wesglobal_pages_content: function cmusususu_webs_wesglobal_pages_content() {
      return this.musususu_webs_wesglobal_pages_content;
    },
    cmu_webs: function cmu_webs() {
      return this.mu_webs;
    },
    cmusu_webs_wesglobal: function cmusu_webs_wesglobal() {
      return this.musu_webs_wesglobal;
    },
    cpgtxt_list: function cpgtxt_list() {
      return this.pgtxt_list;
    },
    cpgtxt_contenttype: function cpgtxt_contenttype() {
      return this.pgtxt_contenttype;
    },
    cpgtxt_sidebar: function cpgtxt_sidebar() {
      return this.pgtxt_sidebar;
    },
    contentchange: function contentchange() {
      //cckd
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
      return this.$store.state.contentchange;
    }
  },
  created: function created() {
    var userinfo = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.jsonparse(window.Laravel.userinfo);
    this.username = userinfo.username;
    this.uname = userinfo.name;
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    /* fav part*/
    vueOBJ = this;
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    this.sliderTabs();
  },
  methods: {
    getSiteFaveritelist: function getSiteFaveritelist(list) {
      if (list != null && list != '') {
        var imgsrc = '/images/icons/star_f.png';
        $('#' + this.pageid + ' img').attr("src", imgsrc);
        $('#' + this.pageid).attr("data-status", "on");
      }
    },
    sliderTabs: function sliderTabs() {
      $('.page1_content_side_bar div.page1_content_side_bar_text').click(function () {
        $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
        $(this).addClass('page1_content_side_bar_seleted');
        var subid = $(this).attr('data-target');
        $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('active');
        $('#' + subid).addClass('active');

        if (subid == 'wwpc_list') {
          $('#publick_contaniner').css('display', 'none');
          $('#pageContAdd_btn_container').css('display', 'block');
          $('#pagesetting').removeClass('active');
          $('#wwpc_list').addClass('active');
          $('div[data-target="wwpc_list"]').addClass('page1_content_side_bar_seleted');
          vueOBJ.ptabstatus = 0;
        } else if (subid == 'wwpc_type') {
          vueOBJ.ptabstatus = 1;
        } else if (subid == 'wwpc_sidebar') {
          vueOBJ.ptabstatus = 2;
        }
      });
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page1_content_content_bottom svg{\n    color: #6b85e2;\n}\n.page1_content_side_bar .page1_content_side_bar_text{\n    cursor: pointer;\n    height: auto;\n    float: left;\n}\n.global_page_content_tab{\n    width: 100px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesContent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=template&id=3c35f8d2&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=template&id=3c35f8d2& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v(_vm._s(_vm.cmusususu_webs_wesglobal_pages_content))]),
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
            "\n                     " +
              _vm._s(_vm.cmu_webs) +
              "   >> " +
              _vm._s(_vm.cmusu_webs_wesglobal) +
              "   >>  " +
              _vm._s(_vm.cmususu_webs_wesglobal_pages) +
              "   >>  " +
              _vm._s(_vm.cmusususu_webs_wesglobal_pages_content) +
              "\n                  "
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
        _c(
          "div",
          {
            staticClass: "global_page_content_tab",
            staticStyle: { width: "60px" }
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "page1_content_side_bar_text page1_content_side_bar_seleted",
                attrs: { "data-target": "wwpc_list" }
              },
              [_vm._v(_vm._s(_vm.cpgtxt_list))]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "global_page_content_tab" }, [
          _c(
            "div",
            {
              staticClass: "page1_content_side_bar_text",
              attrs: { "data-target": "wwpc_type" }
            },
            [_vm._v(_vm._s(_vm.cpgtxt_contenttype))]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "global_page_content_tab" }, [
          _c(
            "div",
            {
              staticClass: "page1_content_side_bar_text",
              attrs: { "data-target": "wwpc_sidebar" }
            },
            [_vm._v(_vm._s(_vm.cpgtxt_sidebar))]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticStyle: { display: "block" } },
      [_c(_vm.PageComponentItem, { tag: "component" })],
      1
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
          id: "webs-wesglobal-pages-content-fav",
          "data-status": "off",
          "data-page-info": "Content_webs-wesglobal-pages-content"
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue":
/*!*****************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesGlobalPagesContent_vue_vue_type_template_id_3c35f8d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesGlobalPagesContent.vue?vue&type=template&id=3c35f8d2& */ "./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=template&id=3c35f8d2&");
/* harmony import */ var _WebsWesGlobalPagesContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesGlobalPagesContent.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WebsWesGlobalPagesContent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesGlobalPagesContent.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WebsWesGlobalPagesContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsWesGlobalPagesContent_vue_vue_type_template_id_3c35f8d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsWesGlobalPagesContent_vue_vue_type_template_id_3c35f8d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesContent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesContent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesContent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesContent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesContent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesContent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesContent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=template&id=3c35f8d2&":
/*!************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=template&id=3c35f8d2& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesContent_vue_vue_type_template_id_3c35f8d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesContent.vue?vue&type=template&id=3c35f8d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesGlobal/WebsWesGlobalPagesContent.vue?vue&type=template&id=3c35f8d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesContent_vue_vue_type_template_id_3c35f8d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesContent_vue_vue_type_template_id_3c35f8d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
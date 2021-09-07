"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vuedir_pages_webs_WesChina_WebsWesChinaAppearanceHead_vue"],{

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptLoader": function() { return /* binding */ ScriptLoader; }
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var createState = function () {
    return {
        listeners: [],
        scriptId: (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.uuid)('tiny-script'),
        scriptLoaded: false
    };
};
var CreateScriptLoader = function () {
    var state = createState();
    var injectScriptTag = function (scriptId, doc, url, callback) {
        var scriptTag = doc.createElement('script');
        scriptTag.referrerPolicy = 'origin';
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.src = url;
        var handler = function () {
            scriptTag.removeEventListener('load', handler);
            callback();
        };
        scriptTag.addEventListener('load', handler);
        if (doc.head) {
            doc.head.appendChild(scriptTag);
        }
    };
    var load = function (doc, url, callback) {
        if (state.scriptLoaded) {
            callback();
        }
        else {
            state.listeners.push(callback);
            if (!doc.getElementById(state.scriptId)) {
                injectScriptTag(state.scriptId, doc, url, function () {
                    state.listeners.forEach(function (fn) { return fn(); });
                    state.scriptLoaded = true;
                });
            }
        }
    };
    // Only to be used by tests.
    var reinitialize = function () {
        state = createState();
    };
    return {
        load: load,
        reinitialize: reinitialize
    };
};
var ScriptLoader = CreateScriptLoader();



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTinymce": function() { return /* binding */ getTinymce; }
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getGlobal = function () { return (typeof window !== 'undefined' ? window : __webpack_require__.g); };
var getTinymce = function () {
    var global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindHandlers": function() { return /* binding */ bindHandlers; },
/* harmony export */   "bindModelHandlers": function() { return /* binding */ bindModelHandlers; },
/* harmony export */   "initEditor": function() { return /* binding */ initEditor; },
/* harmony export */   "uuid": function() { return /* binding */ uuid; },
/* harmony export */   "isTextarea": function() { return /* binding */ isTextarea; },
/* harmony export */   "mergePlugins": function() { return /* binding */ mergePlugins; },
/* harmony export */   "isNullOrUndefined": function() { return /* binding */ isNullOrUndefined; }
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];
var isValidKey = function (key) { return validEvents.indexOf(key) !== -1; };
var bindHandlers = function (initEvent, listeners, editor) {
    Object.keys(listeners)
        .filter(isValidKey)
        .forEach(function (key) {
        var handler = listeners[key];
        if (typeof handler === 'function') {
            if (key === 'onInit') {
                handler(initEvent, editor);
            }
            else {
                editor.on(key.substring(2), function (e) { return handler(e, editor); });
            }
        }
    });
};
var bindModelHandlers = function (ctx, editor) {
    var modelEvents = ctx.$props.modelEvents ? ctx.$props.modelEvents : null;
    var normalizedEvents = Array.isArray(modelEvents) ? modelEvents.join(' ') : modelEvents;
    ctx.$watch('value', function (val, prevVal) {
        if (editor && typeof val === 'string' && val !== prevVal && val !== editor.getContent({ format: ctx.$props.outputFormat })) {
            editor.setContent(val);
        }
    });
    editor.on(normalizedEvents ? normalizedEvents : 'change input undo redo', function () {
        ctx.$emit('input', editor.getContent({ format: ctx.$props.outputFormat }));
    });
};
var initEditor = function (initEvent, ctx, editor) {
    var value = ctx.$props.value ? ctx.$props.value : '';
    var initialValue = ctx.$props.initialValue ? ctx.$props.initialValue : '';
    editor.setContent(value || initialValue);
    // checks if the v-model shorthand is used (which sets an v-on:input listener) and then binds either
    // specified the events or defaults to "change keyup" event and emits the editor content on that event
    if (ctx.$listeners.input) {
        bindModelHandlers(ctx, editor);
    }
    bindHandlers(initEvent, ctx.$listeners, editor);
};
var unique = 0;
var uuid = function (prefix) {
    var time = Date.now();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextarea = function (element) {
    return element !== null && element.tagName.toLowerCase() === 'textarea';
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
var isNullOrUndefined = function (value) { return value === null || value === undefined; };



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Editor": function() { return /* binding */ Editor; }
/* harmony export */ });
/* harmony import */ var _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ScriptLoader */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js");
/* harmony import */ var _TinyMCE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TinyMCE */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/* harmony import */ var _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorPropTypes */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var renderInline = function (h, id, tagName) {
    return h(tagName ? tagName : 'div', {
        attrs: { id: id }
    });
};
var renderIframe = function (h, id) {
    return h('textarea', {
        attrs: { id: id },
        style: { visibility: 'hidden' }
    });
};
var initialise = function (ctx) { return function () {
    var finalInit = __assign(__assign({}, ctx.$props.init), { readonly: ctx.$props.disabled, selector: "#" + ctx.elementId, plugins: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.mergePlugins)(ctx.$props.init && ctx.$props.init.plugins, ctx.$props.plugins), toolbar: ctx.$props.toolbar || (ctx.$props.init && ctx.$props.init.toolbar), inline: ctx.inlineEditor, setup: function (editor) {
            ctx.editor = editor;
            editor.on('init', function (e) { return (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.initEditor)(e, ctx, editor); });
            if (ctx.$props.init && typeof ctx.$props.init.setup === 'function') {
                ctx.$props.init.setup(editor);
            }
        } });
    if ((0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isTextarea)(ctx.element)) {
        ctx.element.style.visibility = '';
    }
    (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)().init(finalInit);
}; };
var Editor = {
    props: _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__.editorProps,
    created: function () {
        this.elementId = this.$props.id || (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.uuid)('tiny-vue');
        this.inlineEditor = (this.$props.init && this.$props.init.inline) || this.$props.inline;
    },
    watch: {
        disabled: function () {
            this.editor.setMode(this.disabled ? 'readonly' : 'design');
        }
    },
    mounted: function () {
        this.element = this.$el;
        if ((0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)() !== null) {
            initialise(this)();
        }
        else if (this.element && this.element.ownerDocument) {
            var channel = this.$props.cloudChannel ? this.$props.cloudChannel : '5';
            var apiKey = this.$props.apiKey ? this.$props.apiKey : 'no-api-key';
            var scriptSrc = (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(this.$props.tinymceScriptSrc) ?
                "https://cdn.tiny.cloud/1/" + apiKey + "/tinymce/" + channel + "/tinymce.min.js" :
                this.$props.tinymceScriptSrc;
            _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__.ScriptLoader.load(this.element.ownerDocument, scriptSrc, initialise(this));
        }
    },
    beforeDestroy: function () {
        if ((0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)() !== null) {
            (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)().remove(this.editor);
        }
    },
    render: function (h) {
        return this.inlineEditor ? renderInline(h, this.elementId, this.$props.tagName) : renderIframe(h, this.elementId);
    }
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editorProps": function() { return /* binding */ editorProps; }
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var editorProps = {
    apiKey: String,
    cloudChannel: String,
    id: String,
    init: Object,
    initialValue: String,
    inline: Boolean,
    modelEvents: [String, Array],
    plugins: [String, Array],
    tagName: String,
    toolbar: [String, Array],
    value: String,
    disabled: Boolean,
    tinymceScriptSrc: String,
    outputFormat: {
        type: String,
        validator: function (prop) { return prop === 'html' || prop === 'text'; }
    },
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Editor */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* harmony default export */ __webpack_exports__["default"] = (_components_Editor__WEBPACK_IMPORTED_MODULE_0__.Editor);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/jsfunc/lang_module */ "./resources/vuedir/assets/jsfunc/lang_module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var wwgfield = 'head';
var pgperm = {};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalAppearanceHead",
  data: function data() {
    return {
      pageid: 'webs-wesglobal-appearance-head-fav',
      mu_webs: '',
      musu_webs_weschina: '',
      mususu_webs_wesglobal_appearance: '',
      musususu_webs_wesglobal_appearance_head: '',
      pgtxt_head: '',
      pgtxt_foot: '',
      pgtxt_topheader: '',
      pgtxt_hide: '',
      pgtxt_location: '',
      pgtxt_logo: '',
      btntxt_edit: '',
      pgtxt_slogan: '',
      pgtxt_bar: '',
      pgtxt_normal: '',
      pgtxt_css: '',
      pgtxt_content: '',
      pgtxt_image: '',
      pgtxt_link: '',
      pgtxt_center: '',
      pgtxt_right: '',
      pgtxt_font: '',
      pgtxt_size: '',
      pgtxt_toolbar: '',
      pgtxt_calendar: '',
      pgtxt_module: '',
      pgtxt_left: '',
      btntxt_add: '',
      pgtxt_language: '',
      pgtxt_translation: '',
      pgtxt_save: '',
      pgtxt_preview: '',
      pgtxt_release: '',
      pgtxt_nosavenoappear: '',
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
    cmususu_webs_wesglobal_appearance: function cmususu_webs_wesglobal_appearance() {
      return this.mususu_webs_wesglobal_appearance;
    },
    cmusususu_webs_wesglobal_appearance_head: function cmusususu_webs_wesglobal_appearance_head() {
      return this.musususu_webs_wesglobal_appearance_head;
    },
    cmu_webs: function cmu_webs() {
      return this.mu_webs;
    },
    cmusu_webs_weschina: function cmusu_webs_weschina() {
      return this.musu_webs_weschina;
    },
    cpgtxt_head: function cpgtxt_head() {
      return this.pgtxt_head;
    },
    cpgtxt_foot: function cpgtxt_foot() {
      return this.pgtxt_foot;
    },
    cpgtxt_topheader: function cpgtxt_topheader() {
      return this.pgtxt_topheader;
    },
    cpgtxt_hide: function cpgtxt_hide() {
      return this.pgtxt_hide;
    },
    cpgtxt_location: function cpgtxt_location() {
      return this.pgtxt_location;
    },
    cpgtxt_logo: function cpgtxt_logo() {
      return this.pgtxt_logo;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cpgtxt_slogan: function cpgtxt_slogan() {
      return this.pgtxt_slogan;
    },
    cpgtxt_bar: function cpgtxt_bar() {
      return this.pgtxt_bar;
    },
    cpgtxt_normal: function cpgtxt_normal() {
      return this.pgtxt_normal;
    },
    cpgtxt_css: function cpgtxt_css() {
      return this.pgtxt_css;
    },
    cpgtxt_content: function cpgtxt_content() {
      return this.pgtxt_content;
    },
    cpgtxt_image: function cpgtxt_image() {
      return this.pgtxt_image;
    },
    cpgtxt_link: function cpgtxt_link() {
      return this.pgtxt_link;
    },
    cpgtxt_center: function cpgtxt_center() {
      return this.pgtxt_center;
    },
    cpgtxt_right: function cpgtxt_right() {
      return this.pgtxt_right;
    },
    cpgtxt_left: function cpgtxt_left() {
      return this.pgtxt_left;
    },
    cpgtxt_font: function cpgtxt_font() {
      return this.pgtxt_font;
    },
    cpgtxt_size: function cpgtxt_size() {
      return this.pgtxt_size;
    },
    cpgtxt_toolbar: function cpgtxt_toolbar() {
      return this.pgtxt_toolbar;
    },
    cpgtxt_calendar: function cpgtxt_calendar() {
      return this.pgtxt_calendar;
    },
    cpgtxt_module: function cpgtxt_module() {
      return this.pgtxt_module;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cpgtxt_language: function cpgtxt_language() {
      return this.pgtxt_language;
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
    contentchange: function contentchange() {
      //cckd
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
        //console.log(obj.hasOwnProperty(key));
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
    pgperm = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getPagePermission(this.$store.state.permission, this.pageid);
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    this.initpage();
    this.getWWGStoredLang();
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
    getWWGStoredLang: function getWWGStoredLang() {
      axios__WEBPACK_IMPORTED_MODULE_1___default().post('admin.getWWGStoredLang').then(function (response) {
        var msg = response.data.msg;

        if (msg == "ok") {
          var stored_langs = response.data.langlist;

          if (stored_langs !== '') {
            stored_langs = $.parseJSON(stored_langs);
            var tags = '';

            for (var j = 0; j < stored_langs.length; j++) {
              var obj = stored_langs[j]; // console.log(obj);

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
                $('#tranedLang').val(sky);
                vueOBJ.loaddata();
              }
            });
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    SavePageContent: function SavePageContent() {
      var formData = '';
      var tlang = $('#tranedLang').val();

      if (pgperm.create != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      if (tlang == '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('Please Select language of Content for save!');
        return;
      }

      formData = new FormData($("#wwga_head_flw")[0]);
      $.ajax({
        url: 'admin.saveWebsWesChinaUpload',
        type: 'POST',
        data: formData,
        async: false,
        success: function success(data) {
          // data = JSON.parse(data);
          if (data.msg == "ok") {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('Sucess save in Database');
          } else {
            console.log(data.msg);
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert(data.msg);
          }
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        },
        cache: false,
        contentType: false,
        processData: false
      });
    },
    PagePreview: function PagePreview() {
      $("#previewModalModalbody").html('');
      var iframeH = $(window).height() - 100;
      var lang = $('#tranedLang').val();
      if (lang == '' || lang == null) lang = "en";else lang = lang.split("-")[0];
      $("#previewModalModalbody").html('<iframe src="/' + lang + '/preview" style="border:none;width:100%; height: ' + iframeH + 'px;" title="preview"></iframe>');
      $("#previewModal").modal('show');
    },
    PageRelease: function PageRelease() {
      if (pgperm.create != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      var tlang = $('#tranedLang').val();

      if (tlang == '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('Please Select language of Content for save!');
        return;
      }

      $.ajax({
        url: 'admin.websChinaFrontPageRelease',
        type: 'POST',
        data: {
          trans: tlang,
          part: "HeadFootBar",
          tabstatus: 'head'
        },
        success: function success(data) {
          if (data.msg == "ok") {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('Success Release Page');
          } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert(data.msg);
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    },
    initpage: function initpage() {
      $("#wwga_modulelang").click(function () {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $('#wwga_modulelang_val').val('on');
        } else {
          $(this).addClass('active');
          $('#wwga_modulelang_val').val('off');
        }
      });
      $("#wwga_calendar, #wwga_toolbar").click(function () {
        if ($(this).hasClass('active')) {
          var thisid = $(this).attr('id');

          if (thisid == 'wwga_calendar') {
            $('#wwga_calendar_val').val('on');
          } else if (thisid == 'wwga_toolbar') {
            $('#wwga_toobar_val').val('on');
          }

          $(this).removeClass('active');
        } else {
          var thisid = $(this).attr('id');

          if (thisid == 'wwga_calendar') {
            $('#wwga_calendar_val').val('off');
          } else if (thisid == 'wwga_toolbar') {
            $('#wwga_toobar_val').val('off');
          }

          $(this).addClass('active');
        }
      });
      $("#wgtplocation, #wgtptopheader").click(function () {
        if ($(this).hasClass('active')) {
          var thisid = $(this).attr('id');

          if (thisid == 'wgtplocation') {
            $('#wgtp_location_val').val('on');
          } else if (thisid == 'wgtptopheader') {
            $('#wgtp_header_val').val('on');
          }

          $(this).removeClass('active');
        } else {
          var thisid = $(this).attr('id');

          if (thisid == 'wgtplocation') {
            $('#wgtp_location_val').val('off');
          } else if (thisid == 'wgtptopheader') {
            $('#wgtp_header_val').val('off');
          }

          $(this).addClass('active');
        }
      });
      $('input[name="wwga_footbarleft"]').on("click", function () {
        var v = $(this).val(); //console.log(v);

        if (v == 'normal') {
          $('.barleft_css_part').css('display', 'none');
          $('.barleft_normal_part').css('display', 'block');
        } else if (v == 'css') {
          $('.barleft_css_part').css('display', 'block');
          $('.barleft_normal_part').css('display', 'none');
        }
      });
      /*barcent*/

      $('input[name="wwga_footbar_cent"]').on("click", function () {
        var v = $(this).val(); //console.log(v);

        if (v == 'normal') {
          $('.barcent_css_part').css('display', 'none');
          $('.barcent_normal_part').css('display', 'block');
        } else if (v == 'css') {
          $('.barcent_css_part').css('display', 'block');
          $('.barcent_normal_part').css('display', 'none');
        }
      }); // this.loaddata();
    },
    loaddata: function loaddata() {
      var transedlang = $('#tranedLang').val();
      $.ajax({
        url: 'admin.getWebsWesChinaUpload',
        data: {
          tedLang: transedlang,
          wwgfield: wwgfield
        },
        type: 'POST',
        success: function success(data) {
          var list = data.lists; //console.log(list);

          if (list !== '') {
            if (list.toplocation == 'off') $('#wgtplocation').addClass('active');else $('#wgtplocation').removeClass('active');
            $('#wgtp_location_val').val(list.toplocation);

            if (list.topheader == 'off') {
              $('#wgtptopheader').addClass('active');
            } else $('#wgtptopheader').removeClass('active');

            $('#wgtp_headbar_val').val(list.topheader);

            if (list.toolcalc == 'off') {
              $('#wwga_calendar').addClass('active');
            } else $('#wwga_calendar').removeClass('active');

            $('#wwga_calendar_val').val(list.toolcalc);

            if (list.toolbar == 'off') {
              $('#wwga_toolbar').addClass('active');
            } else $('#wwga_toolbar').removeClass('active');

            $('#wwga_toobar_val').val(list.toolbar);

            if (list.modules == 'off') {
              $('#wwga_modulelang').addClass('active');
            } else $('#wwga_modulelang').removeClass('active');

            $('#wwga_modulelang_val').val(list.modules);

            if (transedlang != null && transedlang != '') {
              $('.page1_alarm_bar').addClass('active');
              $('.page1_alarm_bar span').text('Save  Appear');
            }
          } else {
            $('.page1_alarm_bar').removeClass('active');
            $('.page1_alarm_bar span').text('No Save No Appear');
          }
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    }
  } //method

});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.sl-tab-container{\n    display: none;\n}\n.sl-tab-container.active{\n    display: block;\n}\n.ck.ck-editor {\n    width: 100%;\n}\n.tox.tox-tinymce{\n    border-radius: 20px;\n    width: 100% !important;\n    min-height: 350px !important;\n}\n.apper-top-lang{\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center\n}\n.apper-top-lang div{\n    line-height: 25px;\n    text-align: center;\n}\n.form-check-input.group{\n    width: 16px;height: 16px;border-radius: 16px; border: 1px solid #bbbbbb;\n    cursor: pointer;\n}\n.form-check-input.group > div{\n    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;\n}\n.form-check-input.group.active > div{\n    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;\n}\n#wwga_footbarleft_upload_preview, #wwga_footbarright_upload_preview{\n    background-repeat: no-repeat;\n    background-size:100% 100%;\n}\n\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaAppearanceHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaAppearanceHead.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaAppearanceHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaAppearanceHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue":
/*!*****************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesChinaAppearanceHead_vue_vue_type_template_id_02a96426___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesChinaAppearanceHead.vue?vue&type=template&id=02a96426& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=template&id=02a96426&");
/* harmony import */ var _WebsWesChinaAppearanceHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesChinaAppearanceHead.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=script&lang=js&");
/* harmony import */ var _WebsWesChinaAppearanceHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesChinaAppearanceHead.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _WebsWesChinaAppearanceHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _WebsWesChinaAppearanceHead_vue_vue_type_template_id_02a96426___WEBPACK_IMPORTED_MODULE_0__.render,
  _WebsWesChinaAppearanceHead_vue_vue_type_template_id_02a96426___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaAppearanceHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaAppearanceHead.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaAppearanceHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaAppearanceHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaAppearanceHead.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=style&index=0&lang=css&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaAppearanceHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=template&id=02a96426&":
/*!************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=template&id=02a96426& ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaAppearanceHead_vue_vue_type_template_id_02a96426___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaAppearanceHead_vue_vue_type_template_id_02a96426___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaAppearanceHead_vue_vue_type_template_id_02a96426___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaAppearanceHead.vue?vue&type=template&id=02a96426& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=template&id=02a96426&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=template&id=02a96426&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaAppearanceHead.vue?vue&type=template&id=02a96426& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
          _vm._v(_vm._s(_vm.cmusususu_webs_wesglobal_appearance_head))
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
              _vm._s(_vm.cmususu_webs_wesglobal_appearance) +
              "   >>  " +
              _vm._s(_vm.cmusususu_webs_wesglobal_appearance_head) +
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
          _c("div", { staticClass: "page1_translate_bar_right" }, [
            _c(
              "span",
              {
                staticClass: "page1_translate_span_right cursor-pointer",
                attrs: { id: "wwga_save" },
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
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.cpgtxt_save) +
                    "\n                    "
                )
              ]
            ),
            _vm._v("   |   \n                    "),
            _c(
              "span",
              {
                staticClass: "page1_translate_span_right cursor-pointer",
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
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.cpgtxt_preview) +
                    "\n                    "
                )
              ]
            ),
            _vm._v("   |   \n                    "),
            _c(
              "span",
              {
                staticClass: "page1_translate_span_right cursor-pointer",
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
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.cpgtxt_release) +
                    "\n                    "
                )
              ]
            ),
            _vm._v("   \n                ")
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          {
            staticClass: "page1_alarm_bar",
            staticStyle: { "margin-bottom": "0" }
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
                      d:
                        "M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z",
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
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "sl-tab-container active",
        staticStyle: { "margin-top": "20px" },
        attrs: { id: "HeadContainer" }
      },
      [
        _c(
          "form",
          {
            attrs: {
              method: "post",
              enctype: "multipart/form-data",
              name: "wwga_head_flw",
              id: "wwga_head_flw"
            }
          },
          [
            _c("input", {
              attrs: { type: "hidden", name: "wwgafrm", value: "head" }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "tranedLang",
                id: "tranedLang",
                value: ""
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h6", { staticClass: "card-title m-b-30" }, [
                      _vm._v(_vm._s(_vm.cpgtxt_topheader))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-1" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group m-b-0",
                            staticStyle: { "line-height": "40px" }
                          },
                          [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(_vm.cpgtxt_hide) +
                                "\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-11" }, [
                        _c("input", {
                          attrs: {
                            type: "hidden",
                            name: "wgtp_location_val",
                            id: "wgtp_location_val",
                            value: "on"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "form-check",
                            staticStyle: {
                              margin: "10px 0",
                              "line-height": "24px"
                            }
                          },
                          [
                            _vm._m(1),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "wgtplocation" }
                              },
                              [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(_vm.cpgtxt_location) +
                                    "\n                                        "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            type: "hidden",
                            name: "wgtp_header_val",
                            id: "wgtp_header_val",
                            value: "on"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "form-check",
                            staticStyle: {
                              margin: "10px 0",
                              "line-height": "24px"
                            }
                          },
                          [
                            _vm._m(2),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "wgtptopheader" }
                              },
                              [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(_vm.cpgtxt_topheader) +
                                    "\n                                        "
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h6", { staticClass: "card-title m-b-30" }, [
                      _vm._v(_vm._s(_vm.cpgtxt_toolbar))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-1" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group m-b-0",
                            staticStyle: { "line-height": "40px" }
                          },
                          [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(_vm.cpgtxt_hide) +
                                "\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-11" }, [
                        _c("input", {
                          attrs: {
                            type: "hidden",
                            name: "wwga_calendar_val",
                            id: "wwga_calendar_val",
                            value: "on"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "form-check",
                            staticStyle: {
                              margin: "10px 0",
                              "line-height": "24px"
                            }
                          },
                          [
                            _vm._m(3),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "wwga_calendar" }
                              },
                              [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(_vm.cpgtxt_calendar) +
                                    "\n                                        "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            type: "hidden",
                            name: "wwga_toobar_val",
                            id: "wwga_toobar_val",
                            value: "on"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "form-check",
                            staticStyle: {
                              margin: "10px 0",
                              "line-height": "24px"
                            }
                          },
                          [
                            _vm._m(4),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "wwga_toolbar" }
                              },
                              [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(_vm.cpgtxt_toolbar) +
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
                            staticClass: "form-check",
                            staticStyle: {
                              margin: "10px 0",
                              "line-height": "24px",
                              "padding-left": "0"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "btn btn-outline-light webglogappearbtn",
                                attrs: { id: "webs-wesglobal-toolbar-btn" }
                              },
                              [
                                _c("span", [
                                  _vm._v(" + " + _vm._s(_vm.cbtntxt_add))
                                ])
                              ]
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("input", {
                  attrs: { type: "hidden", name: "wwga_module_val", value: "" }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h6", { staticClass: "card-title m-b-30" }, [
                      _vm._v(_vm._s(_vm.cpgtxt_module))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("input", {
                        attrs: {
                          type: "hidden",
                          name: "wwga_modulelang_val",
                          id: "wwga_modulelang_val",
                          value: "on"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-1" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group m-b-0",
                            staticStyle: { "line-height": "40px" }
                          },
                          [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(_vm.cpgtxt_hide) +
                                "\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-11" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-check",
                            staticStyle: {
                              margin: "10px 0",
                              "line-height": "24px"
                            }
                          },
                          [
                            _vm._m(5),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "wwga_modulelang" }
                              },
                              [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(_vm.cpgtxt_language) +
                                    "\n                                        "
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _vm._m(6)
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
          id: "webs-wesglobal-appearance-head-fav",
          "data-status": "off",
          "data-page-info": "Head_webs-wesglobal-appearance-head"
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
    return _c(
      "div",
      {
        staticClass: "form-check-input group ",
        attrs: { name: "wgtplocation", id: "wgtplocation" }
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
        staticClass: "form-check-input group",
        attrs: { name: "wgtptopheader", id: "wgtptopheader" }
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
        staticClass: "form-check-input group ",
        attrs: { name: "wwga_calendar", id: "wwga_calendar" }
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
        staticClass: "form-check-input group",
        attrs: { name: "wwga_toolbar", id: "wwga_toolbar" }
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
        staticClass: "form-check-input group",
        attrs: { name: "wwga_modulelang", id: "wwga_modulelang" }
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
                    _c("h4", { staticClass: "modal-title" }, [
                      _vm._v("page preview")
                    ]),
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
  }
]
render._withStripped = true



/***/ })

}]);
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vuedir_pages_webs_WesChina_WebsWesChinaPagesContentType_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/jsfunc/lang_module */ "./resources/vuedir/assets/jsfunc/lang_module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var vueOBJ = null;
var transedlang = ''; //default;

var pstart = 1;
var pnum = pstart;
var numg = 5;
var content_type = 0;
var contentpagetype = 0;
var psearchstring = '';
var contenttypetypecheckboxid = '';
var stored_langs = '';
var content_accounting_lang = {};
var pcnt = 5;
var firsttypeselectId = 0;
var currentId = 0;
var currentSidebarType = 0;
var pgperm = {};
var langOBJS = [];
var tabstatus = 0;
var pagename_default = '';
var pageurl_default = '';
var pagetype_default = 0;

function setTempLang() {
  if (transedlang !== null && transedlang !== '') return;

  for (var j = 0; j < stored_langs.length; j++) {
    var obj = stored_langs[j];
    var iso = obj.iso;
    var dialCode = obj.dialcode;
    var status = obj.status;
    var dcont = iso + '-' + dialCode;

    if (status == 'enable') {
      transedlang = dcont;
      break;
    }
  }
}

function initContentTypeHeader() {
  $('#pagetype-container').html(''); //console.log(stored_langs);

  var btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
  var tags = '<div class="row m-0 align-items-start contenttype-list-header" style="padding: 0 0 8px 0; border-bottom: 1px solid #d6d6d6;font-weight: bold; font-size: 14px;">';
  tags += '<div class="col" style="max-width: 60px;"></div>';

  for (var j = 0; j < stored_langs.length; j++) {
    var obj = stored_langs[j];
    var iso = obj.iso;
    var dialCode = obj.dialcode;
    var cname = obj.name;
    var status = obj.status;
    var dcont = iso + '-' + dialCode + '-' + cname.toLowerCase();

    if (status == 'enable') {
      tags += '<div class="col">' + cname + '</div>';
    }
  }

  tags += '<div class="col cursor-pointer data-ajax" data-ajax="btntxt_delete" style="max-width: 120px;" id="pagecontenttype_all_delete">' + btntxt_delete + '</div>';
  tags += '</div>';
  $('#pagetype-container').append(tags);
  $('#pagecontenttype_all_delete').click(function () {
    var ids = {};
    $('input[id^="wwgpcCheckbox_"]').each(function (index, element) {
      if ($(element).is(':checked')) {
        var idstr = $(element).attr('id');
        var id = idstr.split('_')[1]; //console.log(id);

        ids[index] = id;
        $.ajax({
          url: 'admin.changePageType',
          type: 'POST',
          data: {
            cond: 'muldelete',
            id: ids
          },
          async: false,
          success: function success(data) {
            if (data.msg == "ok") {
              getContentTypeList();
            } else {
              _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert(data.msg);
            }
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          }
        });
      }
    });
  });
} //add ckd


function getContentTypeList() {
  if (stored_langs == '' || !(stored_langs instanceof Array)) return;
  initContentTypeHeader();
  $.ajax({
    url: 'admin.getContentTypeList',
    data: {
      langs: stored_langs
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg === "ok") {
        var list = data.list;

        if (list !== null && list !== '' && list instanceof Array) {
          var btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
          var btntxt_change = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
          var btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
          var tags = '';

          for (var j = 0; j < list.length; j++) {
            var obj = list[j];
            var id = obj.id;
            var itemcnt = obj.itemcnt;
            if (j < list.length - 1) tags += '<div class="row m-0 align-items-start" style="padding: 10px 0; border-bottom: 1px solid #d6d6d6;line-height:30px;">';else tags += '<div class="row m-0 align-items-start" style="padding: 10px 0; border-bottom: 0;line-height:30px;">';
            tags += '<div class="col max-width-60 pagecontenttype-checkbox" data-idx="' + id + '">';
            tags += '<div class="form-check form-check-inline">';
            tags += '<input class="form-check-input" type="checkbox" id="wwgpcCheckbox_' + id + '" value="">';
            tags += '</div>';
            tags += '</div>';
            var ddttaa = '';

            for (var jj = 0; jj < stored_langs.length; jj++) {
              var objj = stored_langs[jj];
              var status = objj.status;
              var iso = objj.iso;

              if (status == 'enable') {
                var cname = objj.name;
                cname = cname.toLowerCase();
                var v = obj[cname];
                ddttaa += iso + '_' + cname + '_' + v + '-';
                tags += '<div class="col">' + v + '</div>';
              }
            }

            var sustr = ddttaa.substr(0, ddttaa.length - 1);
            tags += '<div class="col max-width-120">';
            tags += '<select class="my-border-radius-slt form-control float-right"  data-prop="' + sustr + '" id="contenttypecontroller_' + id + '">';
            tags += '<option value="" class="data-ajax" data-ajax="btntxt_edit" selected>' + btntxt_edit + '</option>';
            tags += '<option value="change" class="data-ajax" data-ajax="btntxt_change">' + btntxt_change + '</option>';
            tags += '<option value="delete" class="data-ajax" data-ajax="btntxt_delete">' + btntxt_delete + '</option>';
            tags += '</select>';
            tags += '</div>';
            tags += '</div>';
          }

          $('#pagetype-container').append(tags);
          $('select[id^="contenttypecontroller_"]').change(function () {
            if (pgperm.write != 1) {
              _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert('pgtxt_notpermission');
              return;
            }

            var value = $(this).val();
            var idstr = $(this).attr("id");
            var del_id = idstr.split('_')[1];
            $('input[id="pagecontenttypechangeid"]').val('');

            if (value !== '' && value === 'delete') {
              $.ajax({
                url: 'admin.changePageType',
                type: 'POST',
                data: {
                  cond: value,
                  id: del_id
                },
                async: false,
                success: function success(data) {
                  if (data.msg == "ok") {
                    getContentTypeList();
                  } else {
                    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert('Error Save from DB!');
                  }
                },
                error: function error(jqXHR, errdata, errorThrown) {
                  console.log(errdata);
                }
              });
              $(this).val('');
            } else if (value !== '' && value === 'change') {
              initContentTypeDlg(0);
              $('#dlgErr').text('').css('display', 'none');
              $('.paytype-add-letter').css('display', 'none');
              $('.paytype-up-letter').css('display', 'block');
              $('#addNextDlg_btn').css('display', 'none');
              $('#changeNextDlg_btn').css('display', 'block');
              $('#myAddContentTypeModal').modal('show');
              var prop = $(this).data('prop');
              changeContenttypeToDlg(del_id, prop);
              $(this).val('');
            }
          });
        }
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function getPageTypeList() {
  setTempLang();
  $.ajax({
    url: 'admin.getPageTypeList',
    data: {
      lang: transedlang
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg == "ok") {
        var list = data.list; //console.log(list);

        if (list !== null && list !== '' && list instanceof Array) {
          var btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
          var btntxt_change = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
          var btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
          var tags = '';

          for (var j = 0; j < list.length; j++) {
            var obj = list[j];
            var id = obj.id;
            var itemcnt = obj.itemcnt;
            var g_path = obj.g_path;
            if (j < list.length - 1) tags += '<div class="row m-0 align-items-start" style="padding: 10px 0; border-bottom: 1px solid #d6d6d6;line-height:30px;">';else tags += '<div class="row m-0 align-items-start" style="padding: 10px 0; border-bottom: 0;line-height:30px;">';
            tags += '<div class="col max-width-60 pagecontenttype-checkbox" data-idx="' + id + '">';
            tags += '<div class="form-check form-check-inline">';
            tags += '<input class="form-check-input" type="checkbox" id="wwgpcCheckbox_' + id + '" value="">';
            tags += '</div>';
            tags += '</div>';
            var ddttaa = '';

            for (var jj = 0; jj < stored_langs.length; jj++) {
              var objj = stored_langs[jj];
              var status = objj.status;
              var iso = objj.iso;

              if (status == 'enable') {
                var cname = objj.name;
                cname = cname.toLowerCase();
                var v = obj[cname];
                ddttaa += iso + '_' + cname + '_' + v + '-';
                tags += '<div class="col">' + v + '</div>';
              }
            }

            var sustr = ddttaa.substr(0, ddttaa.length - 1);
            tags += '<div class="col max-width-120">';
            tags += '<select class="my-border-radius-slt form-control float-right"  data-prop="' + sustr + '" id="contenttypecontroller_' + id + '">';
            tags += '<option value="" class="data-ajax" data-ajax="btntxt_edit" selected>' + btntxt_edit + '</option>';
            tags += '<option value="change" class="data-ajax" data-ajax="btntxt_change">' + btntxt_change + '</option>';
            tags += '<option value="delete" class="data-ajax" data-ajax="btntxt_delete">' + btntxt_delete + '</option>';
            tags += '</select>';
            tags += '</div>';
            tags += '</div>';
          }

          $('#pagetype-container').append(tags);
          $('select[id^="contenttypecontroller_"]').change(function () {
            var value = $(this).val();
            var idstr = $(this).attr("id");
            var del_id = idstr.split('_')[1];
            $('input[id="pagecontenttypechangeid"]').val('');

            if (value !== '' && value === 'delete') {
              $.ajax({
                url: 'admin.changePageType',
                type: 'POST',
                data: {
                  cond: value,
                  id: del_id
                },
                async: false,
                success: function success(data) {
                  if (data.msg == "ok") {
                    getPageTypeList();
                  } else {
                    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert('Error Save from DB!');
                  }
                },
                error: function error(jqXHR, errdata, errorThrown) {
                  console.log(errdata);
                }
              });
            } else if (value !== '' && value === 'change') {
              initContentTypeDlg(0);
              $('#dlgErr').text('').css('display', 'none');
              $('.paytype-add-letter').css('display', 'none');
              $('.paytype-up-letter').css('display', 'block');
              $('#addNextDlg_btn').css('display', 'none');
              $('#changeNextDlg_btn').css('display', 'block');
              $('#myAddContentTypeModal').modal('show');
              var prop = $(this).data('prop');
              changeContenttypeToDlg(del_id, prop);
            }
          });
        }
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
} //add ckd


function initContentTypeDlg(n) {
  if (n == 0) {
    content_accounting_lang = {};
    $('#dlg-contenttype-lang-list').html('');
    $('#pagetype_add_name').val('');
    $('#pagetype_add_span_messagebox').html('');
    $('#pagetype_add_span_messagebox_container').css('display', 'none');
    $('.page-type-first-content').css('display', 'block');
    $('#dlg-contenttype-next-lang-list').html('');
    $('.page-type-next-content').css('display', 'none');
  } else if (n == 1) {
    $('#pagetype_add_name').val('');
    $('#pagetype_add_span_messagebox').html('');
    $('#pagetype_add_span_messagebox_container').css('display', 'none');
    $('.page-type-first-content').css('display', 'block');
    $('#dlg-contenttype-next-lang-list').html('');
    $('.page-type-next-content').css('display', 'none');
  }
} //add ckd


function changeContenttypeToDlg(sid, dvalue) {
  //console.log(dvalue);
  var splitstr = dvalue.split('-');

  if (splitstr instanceof Array) {
    $('input[id="pagecontenttypechangeid"]').val(sid);
    var tags = '';
    var f_ac = 0;

    for (var j = 0; j < splitstr.length; j++) {
      var iso = splitstr[j].split('_')[0];
      var cname = splitstr[j].split('_')[1];
      var v = splitstr[j].split('_')[2];
      content_accounting_lang[cname] = v;
      var dcont = iso + '-' + cname.toLowerCase();
      var cls = '';

      if (v !== undefined && v !== null && v !== '') {
        if (f_ac === 0) {
          cls = ' class="active" ';
          $('#pagetype_add_name').val(v);
          f_ac = 1;
        } else cls = ' class="enable" ';
      }

      tags += '<div class="m-2"><a id="' + iso + '" ' + cls + '  data-state="up" data-cont="' + dcont + '" data-name="' + cname.toLowerCase() + '">' + cname + '</a></div>';
    }

    $('#dlg-contenttype-lang-list').html(tags);
    dlg_contenttype_lang_list_a_click();
  }
} //add ckd


function addContenttypeToDlg(n) {
  var tags = '';
  var f_ac = 0;

  for (var j = 0; j < stored_langs.length; j++) {
    var obj = stored_langs[j];
    var iso = obj.iso;
    var dialCode = obj.dialcode;
    var cname = obj.name;
    var status = obj.status;
    var dcont = iso + '-' + cname.toLowerCase();

    if (status == 'enable') {
      if (n === 0) {
        content_accounting_lang[cname.toLowerCase()] = ''; //add key lang

        tags += '<div class="m-2"><a id="' + iso + '" data-state="add" data-cont="' + dcont + '" data-name="' + cname.toLowerCase() + '">' + cname + '</a></div>';
      } else {
        var cls = '';

        if (content_accounting_lang[cname.toLowerCase()] !== undefined && content_accounting_lang[cname.toLowerCase()] !== null && content_accounting_lang[cname.toLowerCase()] !== '') {
          if (f_ac === 0) {
            cls = ' class="active" ';
            $('#pagetype_add_name').val(content_accounting_lang[cname.toLowerCase()]);
            f_ac = 1;
          } else cls = ' class="enable" ';
        } else content_accounting_lang[cname.toLowerCase()] = '';

        tags += '<div class="m-2"><a id="' + iso + '" ' + cls + ' data-state="add" data-cont="' + dcont + '" data-name="' + cname.toLowerCase() + '">' + cname + '</a></div>';
      }
    }
  }

  $('#dlg-contenttype-lang-list').html(tags);
  dlg_contenttype_lang_list_a_click();
} //add ckd


function dlg_contenttype_lang_list_a_click() {
  $('#dlg-contenttype-lang-list a').click(function () {
    var this_state = $(this).data('state');

    if (this_state === 'up') {} else if (this_state === 'add') {}

    var this_n = $(this).data('name');
    var this_id = $(this).attr('id');
    $('#dlg-contenttype-lang-list a').each(function (index, element) {
      var ele_n = $(element).data('name');
      var ele_id = $(element).attr('id');

      if (this_id !== ele_id) {
        var input_n = '';

        if ($(element).hasClass('active')) {
          $(element).removeClass('active');
          input_n = $.trim($('#pagetype_add_name').val());
          content_accounting_lang[ele_n] = input_n;
          if (content_accounting_lang[ele_n] !== '') $(element).addClass('enable');
        } else {
          if (content_accounting_lang[ele_n] !== '') $(element).addClass('enable');
        }
      }
    });

    if (content_accounting_lang[this_n] !== '') {
      $(this).removeClass('enable');
      $('#pagetype_add_name').val(content_accounting_lang[this_n]);
    } else $('#pagetype_add_name').val('');

    $(this).addClass('active');
  });
} //add ckd


function addContenttypeToNextDlg() {
  var keys = Object.keys(content_accounting_lang);
  $('#dlg-contenttype-next-lang-list').html('');
  if (keys.length < 1) return;
  var tag = '';

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var v = content_accounting_lang[key];
    tag += '<div class="col-3 wes-theme-color">';
    tag += key;
    tag += '</div>';
    tag += '<div class="col-9">';
    tag += v;
    tag += '</div>';
  }

  $('#dlg-contenttype-next-lang-list').html(tag);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalPagesContent",
  components: {
    'editor0': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  data: function data() {
    return {
      pageid: 'webs-wesglobal-pages-content-fav',
      pgtxt_translation: '',
      pgtxt_list: '',
      pgtxt_contenttype: '',
      pgtxt_select: '',
      pgtxt_content: '',
      pgtxt_type: '',
      pgtxt_delete: '',
      pgtxt_dbsaved: '',
      btntxt_nextstep: '',
      pgtxt_confirm: '',
      btntxt_cancel: '',
      pgtxt_notpermission: '',
      btntxt_add: '',
      btntxt_edit: '',
      btntxt_delete: '',
      btntxt_change: '',
      username: '',
      uname: ''
    };
  },
  computed: {
    cpgtxt_translation: function cpgtxt_translation() {
      return this.pgtxt_translation;
    },
    cpgtxt_list: function cpgtxt_list() {
      return this.pgtxt_list;
    },
    cpgtxt_contenttype: function cpgtxt_contenttype() {
      return this.pgtxt_contenttype;
    },
    cpgtxt_select: function cpgtxt_select() {
      return this.pgtxt_select;
    },
    cpgtxt_delete: function cpgtxt_delete() {
      return this.pgtxt_delete;
    },
    cpgtxt_content: function cpgtxt_content() {
      return this.pgtxt_content;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cbtntxt_nextstep: function cbtntxt_nextstep() {
      return this.btntxt_nextstep;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_delete: function cbtntxt_delete() {
      return this.btntxt_delete;
    },
    cpgtxt_type: function cpgtxt_type() {
      return this.pgtxt_type;
    },
    cpgtxt_priority: function cpgtxt_priority() {
      return this.pgtxt_priority;
    },
    cpgtxt_dbsaved: function cpgtxt_dbsaved() {
      return this.pgtxt_dbsaved;
    },
    cpgtxt_confirm: function cpgtxt_confirm() {
      return this.pgtxt_confirm;
    },
    cbtntxt_cancel: function cbtntxt_cancel() {
      return this.btntxt_cancel;
    },
    cbtntxt_change: function cbtntxt_change() {
      return this.btntxt_change;
    },
    contentchange: function contentchange() {
      //cckd
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
      return this.$store.state.contentchange;
    }
  },
  created: function created() {
    var userinfo = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__.default.data.jsonparse(window.Laravel.userinfo);
    this.username = userinfo.username;
    this.uname = userinfo.name;
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    /* fav part*/
    vueOBJ = this;
    pgperm = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__.default.data.getPagePermission(this.$store.state.permission, this.pageid);
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    this.getWWGStoredLang(); //setTimeout(this.initpage,500);
  },
  methods: {
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
          if (response.data.langlist != '') {
            stored_langs = $.parseJSON(response.data.langlist);
            vueOBJ.initpage();
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    initpage: function initpage() {
      getContentTypeList();
      $('#pageContAdd_btn').click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (pgperm.create != 1) {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert('pgtxt_notpermission');
          return;
        }

        initContentTypeDlg(0);
        $('#dlgErr').text('').css('display', 'none');
        $('.paytype-add-letter').css('display', 'block');
        $('.paytype-up-letter').css('display', 'none');
        $('#addNextDlg_btn').css('display', 'block');
        $('#changeNextDlg_btn').css('display', 'none');

        if (stored_langs !== '') {
          $('#myAddContentTypeModal').modal('show');
          addContenttypeToDlg(0);
        } else {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert('You no have language. please Add language!');
        }
      });
      $('#wwpc_side_content_type_add').click(function () {
        if (pgperm.create != 1) {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlertHidden('pgtxt_notpermission');
          return;
        }

        $('#wwpc_content_type_dlgErr').text('').css('display', 'none');
        $('#wwpc_sel_slider_type').val(firsttypeselectId);
        $('#wwpc_mySideContentTypeModal').modal('show');
        getSideContentCountAccoringPageType(0, firsttypeselectId, 0);
      });
      $('#wwpc_sel_content_type_type').change(function () {
        var typeid = $('#wwpc_sel_slider_type').val();
        getSideContentCountAccoringPageType(0, typeid, 0);
      });
      $('#wwpc_edit_sel_content_type_type').change(function () {
        var typeid = $('#wwpc_edit_sel_content_type_type').val();
        getSideContentCountAccoringPageType(0, typeid, 1);
      });
      $('#wwpc_side_content_page_add').click(function () {
        if (pgperm.create != 1) {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert('pgtxt_notpermission');
          return;
        }

        $('#wwpc_content_page_dlgErr').text('').css('display', 'none');
        $('#wwpc_sel_content_page_type').val(firsttypeselectId);
        $('#wwpc_mySideContentPageModal').modal('show');
        getSideContentCountAccoringPageType(1, firsttypeselectId, 0);
      });
      $('#wwpc_sel_content_page_type').change(function () {
        var typeid = $('#wwpc_sel_content_page_type').val();
        getSideContentCountAccoringPageType(1, typeid, 0);
      });
    },
    addPageTypeToOne: function addPageTypeToOne() {
      //add ckd
      var input_n = $.trim($('#pagetype_add_name').val());

      if (input_n !== '') {
        var ele_n = $('#dlg-contenttype-lang-list a.active').data('name');
        if (ele_n !== undefined) content_accounting_lang[ele_n] = input_n;
      } else {
        var ele_n = $('#dlg-contenttype-lang-list a.active').data('name');
        if (ele_n !== undefined) content_accounting_lang[ele_n] = '';
      }

      var keys = Object.keys(content_accounting_lang);
      if (keys.length < 1) return;
      var msg = '';
      var idx = 0;

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var v = content_accounting_lang[key];

        if (v == '') {
          if (idx == 0) msg += 'There is no content in <span style="color:#67a6d2">' + key + '</span>';else msg += ' and <span style="color:#67a6d2">' + key + '</span>';
          idx++;
        }
      }

      if (msg !== '') {
        $('#pagetype_add_span_messagebox').html(msg);
        $('#pagetype_add_span_messagebox_container').css('display', 'block');
      } else {
        $('.page-type-first-content').css('display', 'none');
        $('.page-type-next-content').css('display', 'block');
        addContenttypeToNextDlg();
      }
    },
    changePageTypeToNextOne: function changePageTypeToNextOne() {
      var cid = $('input[id="pagecontenttypechangeid"]').val(); // console.log(cid);

      $.ajax({
        url: 'admin.changePageType',
        type: 'POST',
        data: {
          cond: 'update',
          id: cid,
          upstr: content_accounting_lang
        },
        async: false,
        success: function success(data) {
          if (data.msg == "ok") {
            $('#dlgNextErr').text('Success Update in DB!').css({
              'display': 'block',
              'color': '#16D414'
            });
            setTimeout(function () {
              $('#dlgNextErr').text('').css('display', 'none');
              $("#myAddContentTypeModal").modal('hide');
            }, 1000);
            getContentTypeList();
          } else if (data.msg == "uperr") {
            $('#dlgNextErr').text('Error Update from DB!').css({
              'display': 'block',
              'color': '#d41b11'
            });
            setTimeout(function () {
              $('#dlgNextErr').text('').css('display', 'none');
            }, 3000);
          } else {
            $('#dlgNextErr').text(data.msg).css({
              'display': 'block',
              'color': '#d41b11'
            });
            setTimeout(function () {
              $('#dlgNextErr').text('').css('display', 'none');
            }, 3000);
          }
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    },
    addPageTypeToNextOne: function addPageTypeToNextOne() {
      //add insert to db
      $.ajax({
        url: 'admin.addPageType',
        type: 'POST',
        data: {
          contentdata: content_accounting_lang
        },
        async: false,
        success: function success(data) {
          if (data.msg == "ok") {
            $('#dlgNextErr').text('Success Save in DB!').css({
              'display': 'block',
              'color': '#16D414'
            });
            setTimeout(function () {
              $('#dlgNextErr').text('').css('display', 'none');
              $("#myAddContentTypeModal").modal('hide');
            }, 1000);
            getContentTypeList();
          } else if (data.msg == "du") {
            $('#dlgNextErr').text('Exist same name in DB!').css({
              'display': 'block',
              'color': '#d41b11'
            });
            setTimeout(function () {
              $('#dlgNextErr').text('').css('display', 'none');
            }, 3000);
          } else {
            $('#dlgNextErr').text(data.msg).css({
              'display': 'block',
              'color': '#d41b11'
            });
            setTimeout(function () {
              $('#dlgNextErr').text('').css('display', 'none');
            }, 3000);
          }
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    },
    cancelPageTypeToNextOne: function cancelPageTypeToNextOne() {
      //return pre page
      initContentTypeDlg(1);
      addContenttypeToDlg(1);
    }
  } //method

});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.page1_content_content_bottom svg{\n    color: #6b85e2;\n}\n.page_slider_content_list{\n    display: none;\n}\n.span_langitem_controller{\n    color: #1b78c7;\n    font-size: 15px;\n    cursor: pointer;\n    padding: 5px 5px 5px 0;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.page1_translate_span {\n    padding-left: 20px;\n}\n#addDlg_btn{\n    height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;\n}\n.table thead th{\n    text-transform:none;\n    font-size: 14px;\n}\n.table thead th.th-lp-20, .table tbody td.th-lp-20{\n    padding-left: 20px;\n}\n.table thead th.th-rp-20, .table tbody td.th-rp-20{\n    padding-right: 20px;\n}\n.content-table-row{\n    height: 45px;\n}\n#dlgErr{\n    color: #d41b11;\n    text-align:center;\n}\n.form-check-input.rect-group{\n    width: 16px;height: 16px; border: 1px solid #bbbbbb;\n    cursor: pointer;\n}\n.form-check-input.rect-group > div{\n    width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;\n}\n.form-check-input.rect-group.active > div{\n    width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;\n}\n#dlg-contenttype-lang-list div{\n    line-height:20px;\n}\n#dlg-contenttype-lang-list a{\n    text-decoration:underline !important;\n    padding: 3px;\n    cursor: pointer;\n    color:#b9b9b9;\n}\n#dlg-contenttype-lang-list a.enable{\n    color:rgba(0, 0, 0, 0.7);\n}\n#dlg-contenttype-lang-list a.active{\n    color:rgba(0, 0, 0, 1);\n    font-weight: bold;\n}\n#dlg-contenttype-next-lang-list{\n    padding:10px;\n    min-height: 80px;\n    border:1px solid rgb(223, 221, 221);\n    border-radius: 5px\n}\n.max-width-60{\n    max-width: 60px;\n}\n.max-width-120{\n    max-width: 120px;\n}\n.page1_translate_span.active {\n    color: #555659;\n    font-weight: bold;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentType_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaPagesContentType.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentType_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentType_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue":
/*!*******************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesChinaPagesContentType_vue_vue_type_template_id_4a41b4b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesChinaPagesContentType.vue?vue&type=template&id=4a41b4b8& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=template&id=4a41b4b8&");
/* harmony import */ var _WebsWesChinaPagesContentType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesChinaPagesContentType.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=script&lang=js&");
/* harmony import */ var _WebsWesChinaPagesContentType_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesChinaPagesContentType.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _WebsWesChinaPagesContentType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _WebsWesChinaPagesContentType_vue_vue_type_template_id_4a41b4b8___WEBPACK_IMPORTED_MODULE_0__.render,
  _WebsWesChinaPagesContentType_vue_vue_type_template_id_4a41b4b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaPagesContentType.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentType_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaPagesContentType.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=style&index=0&lang=css&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentType_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=template&id=4a41b4b8&":
/*!**************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=template&id=4a41b4b8& ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentType_vue_vue_type_template_id_4a41b4b8___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentType_vue_vue_type_template_id_4a41b4b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentType_vue_vue_type_template_id_4a41b4b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaPagesContentType.vue?vue&type=template&id=4a41b4b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=template&id=4a41b4b8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=template&id=4a41b4b8&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentType.vue?vue&type=template&id=4a41b4b8& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "row", attrs: { id: "pageContAdd_btn_container" } },
      [
        _c(
          "div",
          {
            staticClass: "col-md-12 text-right",
            staticStyle: { height: "50px" }
          },
          [
            _c(
              "button",
              {
                staticClass: "btn page1_custom_select_btn mb-sm-2",
                staticStyle: {
                  height: "40px",
                  "border-radius": "20px",
                  padding: "0 25px",
                  float: "right",
                  display: "block"
                },
                attrs: { type: "button", id: "pageContAdd_btn" }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "iconify",
                    staticStyle: {
                      "font-size": "24px",
                      transform: "rotate(360deg)",
                      "margin-right": "5px"
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
                      "data-icon": "gg:add"
                    }
                  },
                  [
                    _c("g", { attrs: { fill: "none" } }, [
                      _c("path", {
                        attrs: {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d:
                            "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16z",
                          fill: "currentColor"
                        }
                      }),
                      _c("path", {
                        attrs: {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d:
                            "M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7z",
                          fill: "currentColor"
                        }
                      })
                    ])
                  ]
                ),
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.cbtntxt_add) +
                    "\n            "
                )
              ]
            )
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list active",
          attrs: { id: "wwpc_type" }
        },
        [
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c("div", { staticClass: "page1_content_content_title border-0" }, [
              _vm._v(_vm._s(_vm.cpgtxt_list))
            ]),
            _vm._v(" "),
            _vm._m(0)
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "myAddContentTypeModal", role: "dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-dialog-centered" }, [
          _c(
            "div",
            {
              staticClass: "modal-content page-type-first-content",
              staticStyle: { display: "block" }
            },
            [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "div",
                  {
                    staticClass: "wes-theme-color paytype-add-letter",
                    staticStyle: {
                      "font-size": "20px",
                      "font-weight": "600",
                      display: "block"
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.cbtntxt_add) +
                        " " +
                        _vm._s(_vm.cpgtxt_content) +
                        " " +
                        _vm._s(_vm.cpgtxt_type)
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "wes-theme-color paytype-up-letter",
                    staticStyle: {
                      "font-size": "20px",
                      "font-weight": "600",
                      display: "none"
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.cbtntxt_change) +
                        " " +
                        _vm._s(_vm.cpgtxt_content) +
                        " " +
                        _vm._s(_vm.cpgtxt_type)
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
              _c("div", { staticClass: "modal-body pt-0" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "page2_modal page2_content_text p-0" },
                  [
                    _c("div", { staticClass: "container-fluid p-0 m-0" }, [
                      _c(
                        "div",
                        {
                          staticClass: "row m-2",
                          staticStyle: {
                            "min-height": "80px",
                            border: "1px solid rgb(223, 221, 221)",
                            "border-radius": "20px"
                          }
                        },
                        [
                          _c(
                            "label",
                            {
                              staticClass:
                                "col-3 col-form-label wes-theme-color",
                              staticStyle: { "line-height": "3.5rem" }
                            },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(_vm.cpgtxt_translation) +
                                  "\n                                "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "col-9 d-flex flex-wrap",
                            attrs: { id: "dlg-contenttype-lang-list" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "row m-2 mt-3" }, [
                        _c("label", { staticClass: "col-4 col-form-label" }, [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.cpgtxt_content) +
                              " " +
                              _vm._s(_vm.cpgtxt_type) +
                              "\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _vm._m(3)
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "row m-2 mt-3",
                          staticStyle: { display: "none" },
                          attrs: {
                            id: "pagetype_add_span_messagebox_container"
                          }
                        },
                        [
                          _c("div", { staticClass: "col-12" }, [
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "margin-bottom": "0px",
                                  height: "28px",
                                  "background-color": "#ededed",
                                  "line-height": "28px",
                                  "border-radius": "20px",
                                  padding: "0 20px"
                                }
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "iconify",
                                    staticStyle: {
                                      "font-size": "22px",
                                      transform: "rotate(360deg)"
                                    },
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "xmlns:xlink":
                                        "http://www.w3.org/1999/xlink",
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
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z",
                                          fill: "currentColor"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M10.5 16.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z",
                                          fill: "currentColor"
                                        }
                                      })
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("span", {
                                  attrs: { id: "pagetype_add_span_messagebox" }
                                })
                              ]
                            )
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
                  staticClass: "modal-footer",
                  staticStyle: { height: "auto" }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn page1_custom_select_btn",
                      attrs: { type: "button", id: "addDlg_btn" },
                      on: { click: _vm.addPageTypeToOne }
                    },
                    [
                      _c("span", {
                        staticClass: "iconify",
                        staticStyle: { "font-size": "24px" },
                        attrs: { "data-inline": "false", "data-icon": "gg:add" }
                      }),
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.cbtntxt_nextstep) +
                          "\n                    "
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
              staticClass: "modal-content page-type-next-content",
              staticStyle: { display: "none" }
            },
            [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "div",
                  {
                    staticClass: "wes-theme-color",
                    staticStyle: { "font-size": "20px", "font-weight": "600" }
                  },
                  [_vm._v(_vm._s(_vm.cpgtxt_confirm))]
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
              _vm._m(4),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal-footer",
                  staticStyle: { height: "auto", "justify-content": "center" }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn page1_custom_select_btn mr-2",
                      attrs: { type: "button", id: "addNextDlg_btn" },
                      on: { click: _vm.addPageTypeToNextOne }
                    },
                    [
                      _vm._v(
                        "\n                       + " +
                          _vm._s(_vm.cbtntxt_add) +
                          "\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn page1_custom_select_btn mr-2 ",
                      attrs: { type: "button", id: "changeNextDlg_btn" },
                      on: { click: _vm.changePageTypeToNextOne }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.cbtntxt_change) +
                          "\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn page1_custom_select_btn",
                      attrs: { type: "button", id: "cancelNextDlg_btn" },
                      on: { click: _vm.cancelPageTypeToNextOne }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.cbtntxt_cancel) +
                          "\n                    "
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body p-0" }, [
      _c("div", {
        staticClass: "container-fluid p-0 p-b-10",
        attrs: { id: "pagetype-container" }
      })
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
        attrs: { id: "dlgErr" }
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
    return _c("div", { staticClass: "col-8" }, [
      _c("input", {
        staticClass: "form-control",
        staticStyle: {
          background: "rgb(234, 234, 234)",
          "border-radius": "20px"
        },
        attrs: {
          type: "text",
          name: "pagetype_add_name",
          id: "pagetype_add_name",
          placeholder: "",
          "aria-label": "content input"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body pt-0" }, [
      _c("input", {
        attrs: {
          type: "hidden",
          name: "pagecontenttypechangeid",
          id: "pagecontenttypechangeid",
          value: ""
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "row",
          staticStyle: { display: "none", padding: "5px 10px 5px 20px" },
          attrs: { id: "dlgNextErr" }
        },
        [_vm._v("\n                        error\n                    ")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "page2_modal page2_content_text p-0" }, [
        _c("div", { staticClass: "container-fluid p-0 m-0" }, [
          _c("div", {
            staticClass: "row m-2",
            attrs: { id: "dlg-contenttype-next-lang-list" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);
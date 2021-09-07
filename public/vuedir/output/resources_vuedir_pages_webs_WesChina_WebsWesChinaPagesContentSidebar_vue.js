"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vuedir_pages_webs_WesChina_WebsWesChinaPagesContentSidebar_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var pgtxt_selectlanguagesave = "";
var pgtxt_selectlanguage = "";
var stored_langs = '';
var content_accounting_lang = {};
var pcnt = 5;
var firsttypeselectId = 0;
var currentId = 0;
var currentSidebarType = 0;
var pgperm = {};
var langOBJS = [];
var tabstatus = 5;
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

function initSideBarTranslatelist() {
  $('#translanglist').html('');
  var tags = '';

  for (var j = 0; j < stored_langs.length; j++) {
    var obj = stored_langs[j];
    var iso = obj.iso;
    var dialCode = obj.dialcode;
    var cname = obj.name;
    var status = obj.status;
    var dcont = iso + '-' + dialCode + '-' + cname;
    var spanid = iso + '-' + dialCode;
    var active = '';

    if (status === 'enable') {
      if (transedlang !== null && transedlang !== '' && transedlang === spanid) {
        active = 'active';
      }

      tags += '<span id="' + spanid + '">';
      tags += '<span class="page1_translate_span ' + active + '" style="cursor: pointer;display: inline-block" data-cont="' + dcont + '">' + cname + '</span>';
      if (j < stored_langs.length - 1) tags += '&nbsp;&nbsp;|&nbsp;&nbsp;';
      tags += '</span>';
    }
  }

  $('#translanglist').html(tags);
  $('#translanglist').children().each(function (index, element) {
    if (transedlang === null || transedlang === '') {
      //console.log($(element).attr('id'));
      var cid = $(element).attr('id');
      transedlang = cid;
      $('#' + cid + ' span.page1_translate_span').addClass('active');
      return;
    }
  });
  $('span.page1_translate_span').click(function (e) {
    $('span.page1_translate_span').removeClass('active');
    $(this).addClass('active');
    var dcont = $(this).data('cont');

    if (dcont.split('-').length > 1) {
      transedlang = dcont.split('-')[0] + '-' + dcont.split('-')[1];
      getSideContentTypeData();
      getSideContentPageData();
      getSidePageTypeList();
    }
  });
}

function initSideBar() {
  psearchstring = '';
  $('#wwgpp_f_s_c').text('Current Number : ...');
  $('#wwgpp_f_s').change(function () {
    var val = $(this).val();

    if (val !== null) {
      if (val.split('_').length > 1) {
        var num = val.split('_')[1];
        $('#wwgpp_f_s_c').text('Current Number : ' + num);
      } else $('#wwgpp_f_s_c').text('Current Number : 1');
    }
  });
  $('#wwpc_search_content_page').on('input', function (e) {
    var val = $(this).val();

    if (val !== null) {
      psearchstring = val.trim();
      getSideContentPageData();
    }
  });
}

function initContentTypeCheckboxes() {
  var checkboxes = document.getElementsByClassName("content-type-checkbox");

  if (checkboxes != null && checkboxes.length > 0) {
    for (var i = 0; i < checkboxes.length; i++) {
      var checkbox = checkboxes[i];
      if (checkbox.id != contenttypetypecheckboxid) checkbox.classList.remove('active');
    }
  }

  content_type = 0;
}

function initContentPageSelectbox(list) {
  var sel_content_page_tags = '';
  sel_content_page_tags += '<option value="0">All</option>';

  if (list instanceof Array) {
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      var name = item.name;
      var id = item.id;
      sel_content_page_tags += '<option value="' + id + '">' + name + '</option>';
    }
  }

  $('#wwpc_select_content_page_type').html(sel_content_page_tags);
}

function initDialogSelectbox(list) {
  var add_type_dialog_tags = '';
  var add_page_dialog_tags = '';
  var edit_dialog_tags = '';

  if (list instanceof Array) {
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      var name = item.name;
      var id = item.id;
      add_type_dialog_tags += '<option value="' + id + '">' + name + '</option>';
      add_page_dialog_tags += '<option value="' + id + '">' + name + '</option>';
      edit_dialog_tags += '<option value="' + id + '">' + name + '</option>';
    }
  }

  $('#wwpc_sel_slider_type').html(add_type_dialog_tags);
  $('#wwpc_sel_content_page_type').html(add_page_dialog_tags);
  $('#wwpc_edit_sel_content_type_type').html(edit_dialog_tags);
}

function getSideContentTypeData() {
  var pgtxt_list = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_list');
  var pgtxt_picture = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_picture');
  var btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
  var btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
  var pgtxt_operation = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_operation');
  var trans = 'en-1';
  setTempLang();
  trans = transedlang;
  var postData = {
    trans: trans,
    start: pstart,
    cnt: pcnt,
    contenttype: content_type
  };
  axios__WEBPACK_IMPORTED_MODULE_1___default().post('admin.getSideContentTypeData', postData).then(function (response) {
    var status = response.data.msg;

    if (status == "ok") {
      var total = response.data.total;

      if (total <= 0) {
        $('#wwpc_content_type_list').html('');
        $('#wwpc_content_type_nav').html(''); //$('.page1_alarm_bar span').text('No Save No Appear');
        //$('.page1_alarm_bar').removeClass('active');
        // $('.page1_translate_span').removeClass('active');

        return;
      }

      pstart = response.data.start;
      var totalpage = response.data.totalpage;
      var contentList = response.data.list;
      var tags = '';

      for (var i = 0; i < contentList.length; i++) {
        var content = contentList[i];
        tags += '<tr role="row" class="odd content-table-row">';
        var order = i + 1;
        tags += '<td>' + order + '</td>';
        var mode;
        if (content.mode == 0) mode = pgtxt_list;else mode = pgtxt_picture;
        var sidetype;
        if (content.sidebar_type == 0) sidetype = 'content type';else sidetype = 'content page';
        tags += '<td>' + mode + '</td>';
        tags += '<td>' + content.title + '</td>';
        tags += '<td>' + content.name + '</td>';
        tags += '<td>' + sidetype + '</td>';
        tags += '<td>' + content.number + '</td>';
        var picture_mode = '';
        if (content.picture_mode == 0) picture_mode = pgtxt_list;else picture_mode = pgtxt_picture;
        tags += '<td>' + picture_mode + '</td>';
        tags += '<td>';
        tags += '<div class="form-group m-b-0">';
        tags += '<select class="my-border-radius-slt form-control float-right" data-sidetype="' + content.sidebar_type + '" id="wwpc_contenttype_status_' + content.id + '" name="wwpc_contenttype_status_' + content.id + '">';
        tags += '<option class="data-ajax" data-ajax="pgtxt_operation" value="operation">' + pgtxt_operation + '</option>';
        tags += '<option class="data-ajax" data-ajax="btntxt_edit" value="edit">' + btntxt_edit + '</option>';
        tags += '<option class="data-ajax" data-ajax="btntxt_delete" value="delete">' + btntxt_delete + '</option>';
        tags += '</select>';
        tags += '</div>';
        tags += '</td>';
        tags += '</tr>';
      }

      $('#wwpc_content_type_list').html(tags);
      var nav_tag = '';
      nav_tag += '<nav aria-label="..." class="mb-4">';
      nav_tag += '<ul class="pagination pagination-rounded justify-content-center">';
      var disble = "";
      if (pstart == 1) disble = "disabled";
      var prenum = parseInt(pstart) - 1;
      nav_tag += '<li class="page-item  ' + disble + ' ">';
      nav_tag += '<a class="page-link" href="#"  id="wwpc_ctypenavnum_' + prenum + '" >';
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
        } else oid = "wwpc_ctypenavnum_" + pnum;

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
      nav_tag += '<a class="page-link" id="wwpc_ctypenavnum_' + nextnum + '" href="#">';
      nav_tag += '<i class="ti-angle-right"></i>';
      nav_tag += '</a>';
      nav_tag += '</li>';
      nav_tag += '</ul>';
      nav_tag += '</nav>';
      $('#wwpc_content_type_nav').html(nav_tag);
      /* events { */

      $('a[id^="wwpc_ctypenavnum_"]').click(function () {
        var oid = $(this).attr("id");
        pstart = oid.split('_')[2];
        getSideContentTypeData();
      });
      $('select[id^="wwpc_contenttype_status_"]').change(function () {
        if (pgperm.write != 1) {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert('pgtxt_notpermission');
          return;
        }

        var tid = $(this).attr("id");
        var sidetype = $(this).data("sidetype");
        var t_id = tid.split("_")[3];
        var value = $(this).val();

        if (value == 'edit') {
          showEditSideContentTypeDialog(sidetype, t_id);
        } else if (value == 'delete') {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.Confirm('pgtxt_wantdeleteitem', function (val) {
            if (val) {
              deleteSideContentData(t_id, 0);
            }
          });
        }
      });
    } else {
      $('#wwpc_content_type_list').html('');
      $('#wwpc_content_type_nav').html(''); // return;
    }
  })["catch"](function (error) {
    console.log(error);
  });
}

function getSidePageTypeList() {
  var trans = 'en-1';
  setTempLang();
  trans = transedlang;
  $.ajax({
    url: 'admin.getPageTypeList',
    data: {
      lang: trans
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      $('#wwpc_side_type_checkbox_container').html('');

      if (data.msg == "ok") {
        var list = data.list;
        var tags = '';

        if (list !== null) {
          if (list instanceof Array) {
            for (var i = 0; i < list.length; i++) {
              var item = list[i];
              var name = item.name;
              var id = item.id;
              if (i == 0) firsttypeselectId = id;
              tags += '<div class="input-group mb-3">';
              tags += '<div class="form-check" style="line-height: 24px;">';
              tags += '<div class="form-check-input rect-group content-type-checkbox" id="wwpc_content_type_checkbox_' + id + '">';
              tags += '<div></div>';
              tags += '</div>';
              tags += '<label class="form-check-label m-l-10">' + name + '</label>';
              tags += '</div>';
              tags += '</div>';
            }
          }

          $('#wwpc_side_type_checkbox_container').html(tags);
          initContentPageSelectbox(list);
          initDialogSelectbox(list);
          $('div[id^="wwpc_content_type_checkbox_"]').click(function () {
            var oid = $(this).attr("id");
            contenttypetypecheckboxid = oid;
            initContentTypeCheckboxes();

            if ($(this).hasClass('active')) {
              $(this).removeClass('active');
            } else {
              $(this).addClass('active');
              content_type = oid.split('_')[4];
            }

            getSideContentTypeData();
          });
        }
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function showEditSideContentTypeDialog(sidebarType, selectedId) {
  // sidebarType = 0: content type, 1: content page
  // selectedId: id of selected row
  if (transedlang === '') {
    //mjs_module.data.showAlert(pgtxt_selectlanguage);
    //return;
    setTempLang();
  } else {
    currentId = selectedId;
    currentSidebarType = sidebarType;
    getSideContentDataFromId(selectedId);
    $('#wwpc_edit_content_type_dlgErr').text('').css('display', 'none');
    $('#wwpc_myEditSideContentTypeModal').modal('show');
  }
}

function getSideContentCountAccoringPageType(sidetype, pagetypeid, add_edit_flag) {
  // sidtype = 0: content_type, 1: content page
  // pagetypeid: pagetype_id
  // add_edit_flag  0: add, 1: edit
  var trans = 'en-1';
  setTempLang();
  trans = transedlang;
  var postData = {
    lang: trans,
    sidetype: sidetype,
    pagetypeid: pagetypeid
  };
  axios__WEBPACK_IMPORTED_MODULE_1___default().post('admin.getSideContentCountAccoringPageType', postData).then(function (response) {
    var status = response.data.msg;

    if (status == "ok") {
      if (add_edit_flag == 0) {
        if (sidetype == 0) {
          $('#wwpc_sel_content_type_order').html('');
          var tags = '';
          var availablecount = response.data.cnt + 2;

          for (var i = 1; i < availablecount; i++) {
            tags += '<option value="' + i + '">' + i + '</option>';
          }

          $('#wwpc_sel_content_type_order').html(tags);
        } else {
          $('#wwpc_sel_content_page_order').html('');
          var tags = '';
          var availablecount = response.data.cnt + 2;

          for (var i = 1; i < availablecount; i++) {
            tags += '<option value="' + i + '">' + i + '</option>';
          }

          $('#wwpc_sel_content_page_order').html(tags);
        }
      } else {
        $('#wwpc_edit_sel_content_type_order').html('');
        var tags = '';
        var availablecount = response.data.cnt + 1;

        for (var i = 1; i < availablecount; i++) {
          tags += '<option value="' + i + '">' + i + '</option>';
        }

        if (response.data.cnt == 0) tags += '<option value="1">1</option>';
        $('#wwpc_edit_sel_content_type_order').html(tags);
      }
    } else {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert(response.data.msg);
    }
  })["catch"](function (error) {
    console.log(error);
  });
}

function getSideContentDataFromId(selectedId) {
  var postData = {
    id: selectedId
  };
  axios__WEBPACK_IMPORTED_MODULE_1___default().post('admin.getSideContentDataFromId', postData).then(function (response) {
    var status = response.data.msg;

    if (status == "ok") {
      var contentList = response.data.list;
      var mode = contentList.mode;
      var sidetype = contentList.sidebar_type;
      var title = contentList.title;
      var number = contentList.number;
      var order_no = contentList.order_no;
      var picture_mode = contentList.picture_mode;
      var type = contentList.pagetype_id;
      $('#wwpc_edit_input_content_type_title').val(title);
      $('#wwpc_edit_sel_content_type_mode').val(mode);
      $('#wwpc_edit_sel_content_type_type').val(type);
      $('#wwpc_edit_sel_content_type_number').val(number);
      $('#wwpc_edit_sel_content_type_order').val(order_no);
      getSideContentCountAccoringPageType(sidetype, type, 1);
    }
  })["catch"](function (error) {
    console.log(error);
  });
}

function deleteSideContentData(contentId, pageType) {
  var trans = 'en-1';
  setTempLang();
  trans = transedlang;
  var postData = {
    id: contentId,
    lang: trans
  };
  axios__WEBPACK_IMPORTED_MODULE_1___default().post('admin.deleteSideContentData', postData).then(function (response) {
    var status = response.data.msg;

    if (status == "ok") {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert("Remove success");

      if (pageType == 0) {
        getSideContentTypeData();
      } else if (pageType == 1) {
        getSideContentPageData();
      }
    } else {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert("Remove failed");
    }
  })["catch"](function (error) {
    console.log(error);
  });
}

function getSideContentPageData() {
  var pgtxt_list = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_list');
  var pgtxt_picture = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_picture');
  var btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
  var btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
  var pgtxt_operation = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_operation');
  var trans = 'en-1';
  setTempLang();
  trans = transedlang;
  var postData = {
    trans: trans,
    start: pstart,
    cnt: pcnt,
    pagetypeid: contentpagetype,
    tstring: psearchstring
  };
  axios__WEBPACK_IMPORTED_MODULE_1___default().post('admin.getSideContentPageData', postData).then(function (response) {
    var status = response.data.msg;

    if (status == "ok") {
      var total = response.data.total;

      if (total <= 0) {
        $('#wwpc_content_page_list').html('');
        $('#wwpc_content_page_nav').html('');
        return;
      }

      pstart = response.data.start;
      var totalpage = response.data.totalpage;
      var contentList = response.data.list;
      var tags = '';

      for (var i = 0; i < contentList.length; i++) {
        var content = contentList[i];
        tags += '<tr role="row" class="odd">';
        var order = i + 1;
        tags += '<td>' + order + '</td>';
        var mode = '';
        if (content.mode == 0) mode = pgtxt_list;else mode = pgtxt_picture;
        tags += '<td>' + mode + '</td>';
        tags += '<td>' + content.title + '</td>';
        tags += '<td>' + content.name + '</td>';
        tags += '<td>' + content.number + '</td>';
        var picture_mode = '';
        if (content.picture_mode == 0) picture_mode = pgtxt_list;else picture_mode = pgtxt_picture;
        tags += '<td>' + picture_mode + '</td>';
        tags += '<td>';
        tags += '<div class="form-group m-b-0">';
        tags += '<select class="my-border-radius-slt form-control float-right" id="wwpc_contentpage_status_' + content.id + '" name="wwpc_contentpage_status_' + content.id + '">';
        tags += '<option class="data-ajax" data-ajax="pgtxt_operation" value="operation">' + pgtxt_operation + '</option>';
        tags += '<option class="data-ajax" data-ajax="btntxt_edit" value="edit">' + btntxt_edit + '</option>';
        tags += '<option class="data-ajax" data-ajax="btntxt_delete" value="delete">' + btntxt_delete + '</option>';
        tags += '</select>';
        tags += '</div>';
        tags += '</td>';
        tags += '</tr>';
      }

      $('#wwpc_content_page_list').html(tags);
      var nav_tag = '';
      nav_tag += '<nav aria-label="..." class="mb-4">';
      nav_tag += '<ul class="pagination pagination-rounded justify-content-center">';
      var disble = "";
      if (pstart == 1) disble = "disabled";
      var prenum = parseInt(pstart) - 1;
      nav_tag += '<li class="page-item  ' + disble + ' ">';
      nav_tag += '<a class="page-link" href="#"  id="wwpc_cpagenavnum_' + prenum + '" >';
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
        } else oid = "wwpc_cpagenavnum_" + pnum;

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
      nav_tag += '<a class="page-link" id="wwpc_cpagenavnum_' + nextnum + '" href="#">';
      nav_tag += '<i class="ti-angle-right"></i>';
      nav_tag += '</a>';
      nav_tag += '</li>';
      nav_tag += '</ul>';
      nav_tag += '</nav>';
      $('#wwpc_content_page_nav').html(nav_tag);
      /* events { */

      $('a[id^="wwpc_cpagenavnum_"]').click(function () {
        var oid = $(this).attr("id");
        pstart = oid.split('_')[2];
        getSideContentPageData();
      });
      $('select[id^="wwpc_contentpage_status_"]').change(function () {
        if (pgperm.write != 1) {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert('pgtxt_notpermission');
          return;
        }

        var tid = $(this).attr("id");
        var t_id = tid.split("_")[3];
        var value = $(this).val();

        if (value == 'edit') {
          showEditSideContentTypeDialog(1, t_id);
        } else if (value == 'delete') {
          if (confirm('Really remove? ') == false) return;
          deleteSideContentData(t_id, 1);
        }
      });
    } else {
      $('#wwpc_content_page_list').html('');
      $('#wwpc_content_page_nav').html('');
    }
  })["catch"](function (error) {
    console.log(error);
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
      pgtxt_preview: '',
      pgtxt_release: '',
      pgtxt_nosavenoappear: '',
      pgtxt_list: '',
      pgtxt_contenttype: '',
      pgtxt_sidebar: '',
      pgtxt_slider: '',
      pgtxt_order: '',
      pgtxt_mode: '',
      pgtxt_picture: '',
      pgtxt_select: '',
      pgtxt_operation: '',
      pgtxt_title: '',
      pgtxt_content: '',
      pgtxt_page: '',
      pgtxt_number: '',
      pgtxt_type: '',
      pgtxt_create: '',
      pgtxt_previewpage: '',
      pgtxt_releasesuccess: '',
      pgtxt_selectlanguagesave: '',
      pgtxt_selectlanguage: '',
      pgtxt_wantdeleteitem: '',
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
    cpgtxt_preview: function cpgtxt_preview() {
      return this.pgtxt_preview;
    },
    cpgtxt_release: function cpgtxt_release() {
      return this.pgtxt_release;
    },
    cpgtxt_list: function cpgtxt_list() {
      return this.pgtxt_list;
    },
    cpgtxt_contenttype: function cpgtxt_contenttype() {
      return this.pgtxt_contenttype;
    },
    cpgtxt_page: function cpgtxt_page() {
      return this.pgtxt_page;
    },
    cpgtxt_sidebar: function cpgtxt_sidebar() {
      return this.pgtxt_sidebar;
    },
    cpgtxt_slider: function cpgtxt_slider() {
      return this.pgtxt_slider;
    },
    cpgtxt_order: function cpgtxt_order() {
      return this.pgtxt_order;
    },
    cpgtxt_mode: function cpgtxt_mode() {
      return this.pgtxt_mode;
    },
    cpgtxt_picture: function cpgtxt_picture() {
      return this.pgtxt_picture;
    },
    cpgtxt_select: function cpgtxt_select() {
      return this.pgtxt_select;
    },
    cpgtxt_operation: function cpgtxt_operation() {
      return this.pgtxt_operation;
    },
    cpgtxt_title: function cpgtxt_title() {
      return this.pgtxt_title;
    },
    cpgtxt_content: function cpgtxt_content() {
      return this.pgtxt_content;
    },
    cpgtxt_number: function cpgtxt_number() {
      return this.pgtxt_number;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
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
    cpgtxt_create: function cpgtxt_create() {
      return this.pgtxt_create;
    },
    cpgtxt_previewpage: function cpgtxt_previewpage() {
      return this.pgtxt_previewpage;
    },
    cpgtxt_releasesuccess: function cpgtxt_releasesuccess() {
      return this.pgtxt_releasesuccess;
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

    pgtxt_selectlanguage = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguage');
    pgtxt_selectlanguagesave = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguagesave');
    this.getWWGStoredLang();
  },
  methods: {
    /* fav part */
    select_content_page_search: function select_content_page_search() {
      var objval = $('#wwpc_select_content_page_type').val();
      var pagetype = parseInt(objval);

      if (isNaN(pagetype)) {
        pagetype = 0;
      } else contentpagetype = pagetype;

      getSideContentPageData();
    },
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
      initSideBarTranslatelist();
      getSideContentTypeData();
      getSideContentPageData();
      getSidePageTypeList();
      $('#wwpc_side_content_type_add').click(function () {
        if (pgperm.create != 1) {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlertHidden('pgtxt_notpermission');
          return;
        } else {
          $('#wwpc_content_type_dlgErr').text('').css('display', 'none');
          $('#wwpc_sel_slider_type').val(firsttypeselectId);
          $('#wwpc_mySideContentTypeModal').modal('show');
          getSideContentCountAccoringPageType(0, firsttypeselectId, 0);
        }
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

        if (transedlang === '') {//mjs_module.data.showAlert(pgtxt_selectlanguage);
          //return;
          // setTempLang();
        } else {
          $('#wwpc_content_page_dlgErr').text('').css('display', 'none');
          $('#wwpc_sel_content_page_type').val(firsttypeselectId);
          $('#wwpc_mySideContentPageModal').modal('show');
          getSideContentCountAccoringPageType(1, firsttypeselectId, 0);
        }
      });
      $('#wwpc_sel_content_page_type').change(function () {
        var typeid = $('#wwpc_sel_content_page_type').val();
        getSideContentCountAccoringPageType(1, typeid, 0);
      });
    },
    PagePreview: function PagePreview() {
      $("#wwpc_previewModalModalbody").html('');
      var iframeH = $(window).height() - 100;
      var lang = "";
      setTempLang();
      lang = transedlang.split("-")[0];
      $("#wwpc_previewModalModalbody").html('<iframe src="/' + lang + '/preview" style="border:none;width:100%; height: ' + iframeH + 'px;" title="preview"></iframe>');
      $("#wwpc_previewModal").modal('show');
    },
    PageRelease: function PageRelease() {
      if (pgperm.write != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      var pgtxt_releasesuccess = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_releasesuccess');
      var pgtxt_release = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_release');
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.Confirm(pgtxt_release, function (val) {
        if (val) {
          $.ajax({
            url: 'admin.wwpContentRelease',
            type: 'POST',
            data: {
              trans: transedlang,
              tabstatus: tabstatus,
              release: 1
            },
            success: function success(data) {
              if (data.msg == "ok") {
                _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert(pgtxt_releasesuccess);
              } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert(data.msg);
            },
            error: function error(jqXHR, errdata, errorThrown) {
              console.log(errdata);
            }
          });
        } else {
          $.ajax({
            url: 'admin.wwpContentRelease',
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
      });
    },
    addSideContentTypeOne: function addSideContentTypeOne() {
      setTempLang();

      if (transedlang === '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert(pgtxt_selectlanguage);
        $("#wwpc_mySideContentTypeModal").modal('hide');
        return;
      }

      var typeId = -1;
      var mode = $('#wwpc_sel_content_type_mode').val();
      var title = $.trim($('#wwpc_input_content_type_title').val());

      if (title == null || title == '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert('Please Input Title!');
        return;
      }

      var pagetypeid = $('#wwpc_sel_slider_type').val();
      var number = $('#wwpc_sel_content_type_number').val();
      var order = $('#wwpc_sel_content_type_order').val();
      $.ajax({
        url: 'admin.addSideContentTypeData',
        type: 'POST',
        data: {
          id: typeId,
          trans: transedlang,
          mode: mode,
          title: title,
          pagetypeid: pagetypeid,
          sidetype: 0,
          number: number,
          order: order
        },
        async: false,
        success: function success(data) {
          if (data.msg == "ok") {
            $('#wwpc_content_type_dlgErr').text('Success Save in DB!').css({
              'display': 'block',
              'color': '#0BC334'
            });
            setTimeout(function () {
              $("#wwpc_mySideContentTypeModal").modal('hide');
            }, 1000);
            getSideContentTypeData();
          } else $('#wwpc_content_type_dlgErr').text('Error insert in DB!').css({
            'display': 'block',
            'color': '#d41b11'
          });
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    },
    editSideContentDataOne: function editSideContentDataOne() {
      setTempLang();

      if (transedlang === '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert(pgtxt_selectlanguage);
        $("#wwpc_myEditSideContentTypeModal").modal('hide');
        return;
      }

      var typeId = currentId;
      var mode = $('#wwpc_edit_sel_content_type_mode').val();
      var title = $.trim($('#wwpc_edit_input_content_type_title').val());

      if (title == null || title == '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert('Please Input Title!');
        return;
      }

      var type = $('#wwpc_edit_sel_content_type_type').val();
      var number = $('#wwpc_edit_sel_content_type_number').val();
      var order = $('#wwpc_edit_sel_content_type_order').val();
      var sidebartype = currentSidebarType;
      $.ajax({
        url: 'admin.editSideContentData',
        type: 'POST',
        data: {
          id: typeId,
          sidetype: sidebartype,
          mode: mode,
          title: title,
          type: type,
          number: number,
          order: order
        },
        async: false,
        success: function success(data) {
          if (data.msg == "ok") {
            $('#wwpc_edit_content_type_dlgErr').text('Success Save in DB!').css({
              'display': 'block',
              'color': '#0BC334'
            });
            setTimeout(function () {
              $("#wwpc_myEditSideContentTypeModal").modal('hide');
            }, 1000);
            if (sidebartype == 0) getSideContentTypeData();else getSideContentPageData();
          } else $('#wwpc_edit_content_type_dlgErr').text('Error insert in DB!').css({
            'display': 'block',
            'color': '#d41b11'
          });
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    },
    addSideContentPageOne: function addSideContentPageOne() {
      setTempLang();

      if (transedlang === '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__.default.data.showAlert(pgtxt_selectlanguage);
        $("#wwpc_mySideContentPageModal").modal('hide');
        return;
      }

      var pageId = -1;
      var mode = $('#wwpc_sel_content_page_mode').val();
      var title = $.trim($('#wwpc_input_content_page_title').val());
      var type = $('#wwpc_sel_content_page_type').val();
      var number = $('#wwpc_sel_content_page_number').val();
      var order = $('#wwpc_sel_content_page_order').val();
      $.ajax({
        url: 'admin.addSideContentPageData',
        type: 'POST',
        data: {
          id: pageId,
          trans: transedlang,
          mode: mode,
          title: title,
          type: type,
          number: number,
          order: order
        },
        async: false,
        success: function success(data) {
          if (data.msg == "ok") {
            $('#wwpc_content_page_dlgErr').text('Success Save in DB!').css({
              'display': 'block',
              'color': '#0BC334'
            });
            setTimeout(function () {
              $("#wwpc_mySideContentPageModal").modal('hide');
            }, 1000);
            getSideContentPageData();
          } else $('#wwpc_content_page_dlgErr').text(data.msg).css('display', 'block');
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    },
    wwpc_contentpage_search_btn: function wwpc_contentpage_search_btn() {
      //console.log('click');
      var val = $('#wwpc_search_content_page').val();

      if (val !== null) {
        psearchstring = val.trim();
        getSideContentPageData();
      }
    }
  } //method

});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.page1_content_content_bottom svg{\n    color: #6b85e2;\n}\n.page_slider_content_list{\n    display: none;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.page1_content_side_bar .page1_content_side_bar_text{\n    cursor: pointer;\n    height: auto;\n    float: left;\n}\n.page1_translate_span {\n    padding-left: 20px;\n}\n.input-group-append-my{\n    border-top-right-radius:1.25rem;border-bottom-right-radius:1.25rem;\n}\n.input-group-text-my{\n    background-color: #d6d6d6;border-top-right-radius:1.25rem;border-bottom-right-radius:1.25rem;\n}\n.form-control.page2_input:focus,.form-control.page2_input:hover{\n    background-color:#d6d6d6;\n}\n.table thead th{\n    text-transform:none;\n    font-size: 14px;\n}\n.table thead th.th-lp-20, .table tbody td.th-lp-20{\n    padding-left: 20px;\n}\n.table thead th.th-rp-20, .table tbody td.th-rp-20{\n    padding-right: 20px;\n}\n.content-table-row{\n    height: 45px;\n}\n.form-check-input.rect-group{\n    width: 16px;height: 16px; border: 1px solid #bbbbbb;\n    cursor: pointer;\n}\n.form-check-input.rect-group > div{\n    width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;\n}\n.form-check-input.rect-group.active > div{\n    width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;\n}\n.modal-dialog-row{\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n#dlg-contenttype-lang-list div{\n    line-height:20px;\n}\n#dlg-contenttype-lang-list a{\n    text-decoration:underline !important;\n    padding: 3px;\n    cursor: pointer;\n    color:#b9b9b9;\n}\n#dlg-contenttype-lang-list a.enable{\n    color:rgba(0, 0, 0, 0.7);\n}\n#dlg-contenttype-lang-list a.active{\n    color:rgba(0, 0, 0, 1);\n    font-weight: bold;\n}\n.max-width-60{\n    max-width: 60px;\n}\n.max-width-120{\n    max-width: 120px;\n}\n.page1_translate_span.active {\n    color: #555659;\n    font-weight: bold;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentSidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaPagesContentSidebar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentSidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentSidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue":
/*!**********************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesChinaPagesContentSidebar_vue_vue_type_template_id_22413e4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesChinaPagesContentSidebar.vue?vue&type=template&id=22413e4e& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=template&id=22413e4e&");
/* harmony import */ var _WebsWesChinaPagesContentSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesChinaPagesContentSidebar.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _WebsWesChinaPagesContentSidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesChinaPagesContentSidebar.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _WebsWesChinaPagesContentSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _WebsWesChinaPagesContentSidebar_vue_vue_type_template_id_22413e4e___WEBPACK_IMPORTED_MODULE_0__.render,
  _WebsWesChinaPagesContentSidebar_vue_vue_type_template_id_22413e4e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaPagesContentSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentSidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaPagesContentSidebar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=style&index=0&lang=css&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentSidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=template&id=22413e4e&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=template&id=22413e4e& ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentSidebar_vue_vue_type_template_id_22413e4e___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentSidebar_vue_vue_type_template_id_22413e4e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentSidebar_vue_vue_type_template_id_22413e4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaPagesContentSidebar.vue?vue&type=template&id=22413e4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=template&id=22413e4e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=template&id=22413e4e&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentSidebar.vue?vue&type=template&id=22413e4e& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "page1_translate_bar" }, [
          _c("div", { staticClass: "page1_translate_text" }, [
            _vm._v(_vm._s(_vm.cpgtxt_translation))
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "page1_translate_bar_left",
            staticStyle: { padding: "0" },
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
                  on: { click: _vm.PagePreview }
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "iconify",
                      staticStyle: {
                        "font-size": "20px",
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
                  ]),
                  _vm._v("  |   \n                    ")
                ]
              ),
              _vm._v(" "),
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
                        "font-size": "20px",
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
                  ]),
                  _vm._v("   \n                    ")
                ]
              )
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list active",
          attrs: { id: "wwpc_sidebar" }
        },
        [
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c(
              "form",
              {
                attrs: {
                  method: "post",
                  enctype: "multipart/form-data",
                  name: "wwpc_content_type_frm",
                  id: "wwpc_content_type_frm"
                }
              },
              [
                _c("input", {
                  attrs: { type: "hidden", name: "wfm", value: "st" }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "page1_content_content_title" }, [
                  _vm._v(
                    "\n                             " +
                      _vm._s(_vm.cpgtxt_sidebar) +
                      "   >> " +
                      _vm._s(_vm.cpgtxt_contenttype) +
                      "\n                    "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "page_content",
                    staticStyle: { padding: "25px 20px" }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("div", { staticClass: "col col-md-12" }, [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                staticClass: "col-md-12 text-right",
                                staticStyle: { "padding-right": "0px" }
                              },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn page1_custom_select_btn mb-sm-2",
                                    staticStyle: {
                                      height: "40px",
                                      "border-radius": "10px",
                                      padding: "0 35px",
                                      "margin-right": "0px"
                                    },
                                    attrs: {
                                      type: "button",
                                      id: "wwpc_side_content_type_add"
                                    },
                                    on: { click: function($event) {} }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                                " +
                                        _vm._s(_vm.cbtntxt_add) +
                                        "\n                                            "
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "table-responsive page1_content_content_bar"
                          },
                          [
                            _c(
                              "table",
                              {
                                staticClass: "table table-lg  no-footer",
                                staticStyle: { "text-align": "center" },
                                attrs: {
                                  id: "content-type",
                                  role: "grid",
                                  "aria-describedby": "user-list_info"
                                }
                              },
                              [
                                _c("thead", [
                                  _c("tr", { attrs: { role: "row" } }, [
                                    _c(
                                      "th",
                                      { staticStyle: { "font-size": "14px" } },
                                      [_vm._v(_vm._s(_vm.cpgtxt_order))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      { staticStyle: { "font-size": "14px" } },
                                      [_vm._v(_vm._s(_vm.cpgtxt_mode))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      { staticStyle: { "font-size": "14px" } },
                                      [_vm._v(_vm._s(_vm.cpgtxt_title))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      { staticStyle: { "font-size": "14px" } },
                                      [_vm._v(_vm._s(_vm.cpgtxt_type))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      { staticStyle: { "font-size": "14px" } },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.cpgtxt_slider) +
                                            " " +
                                            _vm._s(_vm.cpgtxt_type)
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      { staticStyle: { "font-size": "14px" } },
                                      [_vm._v(_vm._s(_vm.cpgtxt_number))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      {
                                        staticStyle: {
                                          "text-align": "center",
                                          "font-size": "14px"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.cpgtxt_picture) +
                                            " " +
                                            _vm._s(_vm.cpgtxt_mode)
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      {
                                        staticStyle: {
                                          "text-align": "center",
                                          "font-size": "14px"
                                        }
                                      },
                                      [_vm._v(_vm._s(_vm.cpgtxt_operation))]
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tbody", {
                                  attrs: { id: "wwpc_content_type_list" }
                                })
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(1)
                      ])
                    ])
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c(
              "form",
              {
                attrs: {
                  method: "post",
                  enctype: "multipart/form-data",
                  name: "wwpc_content_page_frm",
                  id: "wwpc_content_page_frm",
                  onkeydown: "return event.key != 'Enter';"
                }
              },
              [
                _c("input", {
                  attrs: { type: "hidden", name: "wfm", value: "st" }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "page1_content_content_title" }, [
                  _vm._v(
                    "\n                             " +
                      _vm._s(_vm.cpgtxt_sidebar) +
                      "   >> " +
                      _vm._s(_vm.cpgtxt_content) +
                      " " +
                      _vm._s(_vm.cpgtxt_page) +
                      "\n                    "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col page1_content_content_title",
                    staticStyle: {
                      display: "flex",
                      "padding-top": "0px",
                      height: "75px",
                      "align-items": "center"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "col-md-1",
                        staticStyle: { width: "auto", "padding-left": "15px" }
                      },
                      [_c("span", [_vm._v(_vm._s(_vm.cpgtxt_type))])]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-5" }, [
                      _c(
                        "div",
                        {
                          staticClass: "input-group",
                          staticStyle: { width: "80%" }
                        },
                        [
                          _c("select", {
                            staticClass: "form-control page2_input",
                            attrs: {
                              id: "wwpc_select_content_page_type",
                              name: "wwpc_select_content_page_type"
                            },
                            on: {
                              change: function($event) {
                                return _vm.select_content_page_search()
                              }
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-1",
                        staticStyle: { width: "auto", "padding-left": "15px" }
                      },
                      [_c("span", [_vm._v(_vm._s(_vm.cpgtxt_title))])]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-5" }, [
                      _c(
                        "div",
                        {
                          staticClass: "input-group",
                          staticStyle: { width: "80%" }
                        },
                        [
                          _c("input", {
                            staticClass: "form-control page2_input",
                            attrs: {
                              type: "text",
                              id: "wwpc_search_content_page",
                              placeholder: "",
                              "aria-label": "page content search"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "input-group-append input-group-append-my cursor-pointer",
                              on: { click: _vm.wwpc_contentpage_search_btn }
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "input-group-text input-group-text-my",
                                  attrs: { id: "" }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass: "feather feather-search ",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24px",
                                        height: "24px",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    },
                                    [
                                      _c("circle", {
                                        attrs: { cx: "11", cy: "11", r: "8" }
                                      }),
                                      _vm._v(" "),
                                      _c("line", {
                                        attrs: {
                                          x1: "21",
                                          y1: "21",
                                          x2: "16.65",
                                          y2: "16.65"
                                        }
                                      })
                                    ]
                                  )
                                ]
                              )
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
                    staticClass: "page_content",
                    staticStyle: { padding: "25px 20px" }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("div", { staticClass: "col col-md-12" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                staticClass: "col-md-12 text-right",
                                staticStyle: { "padding-right": "0px" }
                              },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn page1_custom_select_btn mb-sm-2",
                                    staticStyle: {
                                      height: "40px",
                                      "border-radius": "10px",
                                      padding: "0 35px",
                                      "margin-right": "0px"
                                    },
                                    attrs: {
                                      type: "button",
                                      id: "wwpc_side_content_page_add"
                                    },
                                    on: { click: function($event) {} }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                                " +
                                        _vm._s(_vm.cbtntxt_add) +
                                        "\n                                            "
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "table-responsive page1_content_content_bar"
                          },
                          [
                            _c(
                              "table",
                              {
                                staticClass: "table table-lg  no-footer",
                                staticStyle: { "text-align": "center" },
                                attrs: { id: "wwpc_content_page", role: "grid" }
                              },
                              [
                                _c("thead", [
                                  _c("tr", { attrs: { role: "row" } }, [
                                    _c(
                                      "th",
                                      { staticStyle: { "font-size": "14px" } },
                                      [_vm._v(_vm._s(_vm.cpgtxt_order))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      { staticStyle: { "font-size": "14px" } },
                                      [_vm._v(_vm._s(_vm.cpgtxt_mode))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      { staticStyle: { "font-size": "14px" } },
                                      [_vm._v(_vm._s(_vm.cpgtxt_title))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      { staticStyle: { "font-size": "14px" } },
                                      [_vm._v(_vm._s(_vm.cpgtxt_type))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      { staticStyle: { "font-size": "14px" } },
                                      [_vm._v(_vm._s(_vm.cpgtxt_number))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      {
                                        staticStyle: {
                                          "text-align": "center",
                                          "font-size": "14px"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.cpgtxt_picture) +
                                            " " +
                                            _vm._s(_vm.cpgtxt_mode)
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      {
                                        staticStyle: {
                                          "text-align": "center",
                                          "font-size": "14px"
                                        }
                                      },
                                      [_vm._v(_vm._s(_vm.cpgtxt_operation))]
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tbody", {
                                  attrs: { id: "wwpc_content_page_list" }
                                })
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(2)
                      ])
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
    _vm._m(3),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "wwpc_mySideContentTypeModal", role: "dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-dialog-centered" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "div",
                {
                  staticStyle: {
                    color: "#5c6bc0",
                    "font-size": "20px",
                    "font-weight": "600"
                  }
                },
                [_vm._v(_vm._s(_vm.cpgtxt_create))]
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
            _c("div", { staticClass: "modal-body" }, [
              _vm._m(4),
              _vm._v(" "),
              _c("div", { staticClass: " " }, [
                _c("div", { staticClass: "row modal-dialog-row" }, [
                  _c("div", { staticClass: "col-md-3 page2_content_text" }, [
                    _c("div", { staticStyle: { width: "80px" } }, [
                      _c("span", [_vm._v(_vm._s(_vm.cpgtxt_mode))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c(
                      "select",
                      {
                        staticClass: "form-control float-right",
                        attrs: {
                          id: "wwpc_sel_content_type_mode",
                          name: "wwpc_sel_content_type_mode"
                        }
                      },
                      [
                        _c(
                          "option",
                          { attrs: { value: "0", selected: "selected" } },
                          [_vm._v(_vm._s(_vm.cpgtxt_list))]
                        ),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_picture))
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row modal-dialog-row" }, [
                  _c("div", { staticClass: "col-md-3 page2_content_text" }, [
                    _c("div", { staticStyle: { width: "80px" } }, [
                      _c("span", [_vm._v(_vm._s(_vm.cpgtxt_title))])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(5)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row modal-dialog-row" }, [
                  _c("div", { staticClass: "col-md-3 page2_content_text" }, [
                    _c("div", { staticStyle: { width: "80px" } }, [
                      _c("span", [_vm._v(_vm._s(_vm.cpgtxt_type))])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(6)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row modal-dialog-row" }, [
                  _c("div", { staticClass: "col-md-3 page2_content_text" }, [
                    _c("div", { staticStyle: { width: "80px" } }, [
                      _c("span", [_vm._v(_vm._s(_vm.cpgtxt_number))])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(7)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row modal-dialog-row" }, [
                  _c("div", { staticClass: "col-md-3 page2_content_text" }, [
                    _c("div", { staticStyle: { width: "80px" } }, [
                      _c("span", [_vm._v(_vm._s(_vm.cpgtxt_order))])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(8)
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal-footer justify-content-center",
                staticStyle: { height: "auto" }
              },
              [
                _c("div", { staticClass: "row modal-dialog-row" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn page1_custom_select_btn justify-content-center",
                      staticStyle: { width: "100px" },
                      attrs: {
                        type: "button",
                        id: "wwpc_content_type_addDlg_btn"
                      },
                      on: { click: _vm.addSideContentTypeOne }
                    },
                    [
                      _c("span", {
                        staticClass: "iconify",
                        staticStyle: { "font-size": "24px" },
                        attrs: { "data-inline": "false", "data-icon": "gg:add" }
                      }),
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.cbtntxt_add) +
                          "\n                        "
                      )
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
      {
        staticClass: "modal fade",
        attrs: { id: "wwpc_myEditSideContentTypeModal", role: "dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-dialog-centered" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "div",
                {
                  staticStyle: {
                    color: "#5c6bc0",
                    "font-size": "20px",
                    "font-weight": "600"
                  }
                },
                [_vm._v(_vm._s(_vm.cbtntxt_edit))]
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
            _c("div", { staticClass: "modal-body" }, [
              _vm._m(9),
              _vm._v(" "),
              _c("div", { staticClass: " " }, [
                _c("div", { staticClass: "row modal-dialog-row" }, [
                  _c("div", { staticClass: "col-md-3 page2_content_text" }, [
                    _c("div", { staticStyle: { width: "80px" } }, [
                      _c("span", [_vm._v(_vm._s(_vm.cpgtxt_mode))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c(
                      "select",
                      {
                        staticClass: "form-control float-right",
                        attrs: {
                          id: "wwpc_edit_sel_content_type_mode",
                          name: "wwpc_sel_content_type_mode"
                        }
                      },
                      [
                        _c(
                          "option",
                          { attrs: { value: "0", selected: "selected" } },
                          [_vm._v(_vm._s(_vm.cpgtxt_list))]
                        ),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_picture))
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row modal-dialog-row" }, [
                  _c("div", { staticClass: "col-md-3 page2_content_text" }, [
                    _c("div", { staticStyle: { width: "80px" } }, [
                      _c("span", [_vm._v(_vm._s(_vm.cpgtxt_title))])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(10)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row modal-dialog-row" }, [
                  _c("div", { staticClass: "col-md-3 page2_content_text" }, [
                    _c("div", { staticStyle: { width: "80px" } }, [
                      _c("span", [_vm._v(_vm._s(_vm.cpgtxt_type))])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(11)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row modal-dialog-row" }, [
                  _c("div", { staticClass: "col-md-3 page2_content_text" }, [
                    _c("div", { staticStyle: { width: "80px" } }, [
                      _c("span", [_vm._v(_vm._s(_vm.cpgtxt_number))])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(12)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row modal-dialog-row" }, [
                  _c("div", { staticClass: "col-md-3 page2_content_text" }, [
                    _c("div", { staticStyle: { width: "80px" } }, [
                      _c("span", [_vm._v(_vm._s(_vm.cpgtxt_order))])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(13)
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal-footer justify-content-center",
                staticStyle: { height: "auto" }
              },
              [
                _c("div", { staticClass: "row modal-dialog-row" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn page1_custom_select_btn justify-content-center",
                      staticStyle: { width: "100px" },
                      attrs: {
                        type: "button",
                        id: "wwpc_edit_content_type_addDlg_btn"
                      },
                      on: { click: _vm.editSideContentDataOne }
                    },
                    [
                      _c("span", {
                        staticClass: "iconify",
                        staticStyle: { "font-size": "24px" },
                        attrs: { "data-inline": "false", "data-icon": "gg:add" }
                      }),
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.cbtntxt_edit) +
                          "\n                        "
                      )
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
      {
        staticClass: "modal fade",
        attrs: { id: "wwpc_mySideContentPageModal", role: "dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-dialog-centered" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "div",
                {
                  staticStyle: {
                    color: "#5c6bc0",
                    "font-size": "20px",
                    "font-weight": "600"
                  }
                },
                [_vm._v(_vm._s(_vm.cpgtxt_create))]
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
            _c("div", { staticClass: "modal-body" }, [
              _vm._m(14),
              _vm._v(" "),
              _c("div", { staticClass: " " }, [
                _c("div", { staticClass: "row modal-dialog-row" }, [
                  _c("div", { staticClass: "col-md-3 page2_content_text" }, [
                    _c("div", { staticStyle: { width: "80px" } }, [
                      _c("span", [_vm._v(_vm._s(_vm.cpgtxt_mode))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c(
                      "select",
                      {
                        staticClass: "form-control float-right",
                        attrs: {
                          id: "wwpc_sel_content_page_mode",
                          name: "wwpc_sel_content_page_mode"
                        }
                      },
                      [
                        _c(
                          "option",
                          { attrs: { value: "0", selected: "selected" } },
                          [_vm._v(_vm._s(_vm.cpgtxt_list))]
                        ),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_picture))
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row modal-dialog-row" }, [
                  _c("div", { staticClass: "col-md-3 page2_content_text" }, [
                    _c("div", { staticStyle: { width: "80px" } }, [
                      _c("span", [_vm._v(_vm._s(_vm.cpgtxt_title))])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(15)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row modal-dialog-row" }, [
                  _c("div", { staticClass: "col-md-3 page2_content_text" }, [
                    _c("div", { staticStyle: { width: "80px" } }, [
                      _c("span", [_vm._v(_vm._s(_vm.cpgtxt_type))])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(16)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row modal-dialog-row" }, [
                  _c("div", { staticClass: "col-md-3 page2_content_text" }, [
                    _c("div", { staticStyle: { width: "80px" } }, [
                      _c("span", [_vm._v(_vm._s(_vm.cpgtxt_number))])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(17)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row modal-dialog-row" }, [
                  _c("div", { staticClass: "col-md-3 page2_content_text" }, [
                    _c("div", { staticStyle: { width: "80px" } }, [
                      _c("span", [_vm._v(_vm._s(_vm.cpgtxt_order))])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(18)
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal-footer justify-content-center",
                staticStyle: { height: "auto" }
              },
              [
                _c("div", { staticClass: "row modal-dialog-row" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn page1_custom_select_btn justify-content-center",
                      staticStyle: { width: "100px" },
                      attrs: {
                        type: "button",
                        id: "wwpc_content_page_addDlg_btn"
                      },
                      on: { click: _vm.addSideContentPageOne }
                    },
                    [
                      _c("span", {
                        staticClass: "iconify",
                        staticStyle: { "font-size": "24px" },
                        attrs: { "data-inline": "false", "data-icon": "gg:add" }
                      }),
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.cbtntxt_add) +
                          "\n                        "
                      )
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
      {
        staticClass: "modal fade",
        attrs: { id: "wwpc_previewModal", role: "dialog" }
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
                        staticStyle: {
                          color: "#242424",
                          "font-size": "15px",
                          margin: "0 auto"
                        }
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
                  attrs: { id: "wwpc_previewModalModalbody" }
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
    return _c("div", { staticClass: "col-md-8" }, [
      _c("div", {
        staticClass: "col content-type-checkbox-container",
        staticStyle: { display: "flex" },
        attrs: { id: "wwpc_side_type_checkbox_container" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", {
        staticClass: "col-md-12",
        attrs: { id: "wwpc_content_type_nav" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", {
        staticClass: "col-md-12",
        attrs: { id: "wwpc_content_page_nav" }
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
        attrs: { id: "wwpc_content_type_dlgErr" }
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
    return _c(
      "div",
      { staticClass: "col-md-9", staticStyle: { "padding-bottom": "5px" } },
      [
        _c("input", {
          staticClass: "page2_input",
          staticStyle: {
            "background-color": "#ededed",
            "border-radius": "12px"
          },
          attrs: {
            type: "text",
            placeholder: "",
            value: "",
            autocomplete: "off",
            name: "wwpc_input_content_type_title",
            id: "wwpc_input_content_type_title"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-9" }, [
      _c("select", {
        staticClass: "form-control float-right",
        attrs: { id: "wwpc_sel_slider_type", name: "wwpc_sel_slider_type" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-9" }, [
      _c(
        "select",
        {
          staticClass: "form-control float-right",
          attrs: {
            id: "wwpc_sel_content_type_number",
            name: "wwpc_sel_content_type_number"
          }
        },
        [
          _c("option", { attrs: { value: "1", selected: "selected" } }, [
            _vm._v("1")
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "2" } }, [_vm._v("2")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "3" } }, [_vm._v("3")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "4" } }, [_vm._v("4")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "5" } }, [_vm._v("5")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-9" }, [
      _c("select", {
        staticClass: "form-control float-right",
        attrs: {
          id: "wwpc_sel_content_type_order",
          name: "wwpc_sel_content_type_order"
        }
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
        staticClass: "row",
        staticStyle: { display: "none" },
        attrs: { id: "wwpc_edit_content_type_dlgErr" }
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
    return _c(
      "div",
      { staticClass: "col-md-9", staticStyle: { "padding-bottom": "5px" } },
      [
        _c("input", {
          staticClass: "page2_input",
          staticStyle: {
            "background-color": "#ededed",
            "border-radius": "12px"
          },
          attrs: {
            type: "text",
            placeholder: "",
            value: "",
            autocomplete: "off",
            name: "wwpc_edit_input_content_type_title",
            id: "wwpc_edit_input_content_type_title"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-9" }, [
      _c("select", {
        staticClass: "form-control float-right",
        attrs: {
          id: "wwpc_edit_sel_content_type_type",
          name: "wwpc_edit_sel_content_type_type"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-9" }, [
      _c(
        "select",
        {
          staticClass: "form-control float-right",
          attrs: {
            id: "wwpc_edit_sel_content_type_number",
            name: "wwpc_sel_content_type_number"
          }
        },
        [
          _c("option", { attrs: { value: "1", selected: "selected" } }, [
            _vm._v("1")
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "2" } }, [_vm._v("2")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "3" } }, [_vm._v("3")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "4" } }, [_vm._v("4")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "5" } }, [_vm._v("5")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-9" }, [
      _c("select", {
        staticClass: "form-control float-right",
        attrs: {
          id: "wwpc_edit_sel_content_type_order",
          name: "wwpc_edit_sel_content_type_order"
        }
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
        staticClass: "row",
        staticStyle: { display: "none" },
        attrs: { id: "wwpc_content_page_dlgErr" }
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
    return _c(
      "div",
      { staticClass: "col-md-9", staticStyle: { "padding-bottom": "5px" } },
      [
        _c("input", {
          staticClass: "page2_input",
          staticStyle: {
            "background-color": "#ededed",
            "border-radius": "12px"
          },
          attrs: {
            type: "text",
            placeholder: "",
            value: "",
            autocomplete: "off",
            name: "wwpc_input_content_page_title",
            id: "wwpc_input_content_page_title"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-9" }, [
      _c("select", {
        staticClass: "form-control float-right",
        attrs: {
          id: "wwpc_sel_content_page_type",
          name: "wwpc_sel_content_page_type"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-9" }, [
      _c(
        "select",
        {
          staticClass: "form-control float-right",
          attrs: {
            id: "wwpc_sel_content_page_number",
            name: "wwpc_sel_content_page_number"
          }
        },
        [
          _c("option", { attrs: { value: "1", selected: "selected" } }, [
            _vm._v("1")
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "2" } }, [_vm._v("2")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "3" } }, [_vm._v("3")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "4" } }, [_vm._v("4")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "5" } }, [_vm._v("5")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-9" }, [
      _c("select", {
        staticClass: "form-control float-right",
        attrs: {
          id: "wwpc_sel_content_page_order",
          name: "wwpc_sel_content_page_order"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ })

}]);
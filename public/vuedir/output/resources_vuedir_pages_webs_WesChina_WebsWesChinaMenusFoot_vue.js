"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vuedir_pages_webs_WesChina_WebsWesChinaMenusFoot_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*  import CKEditor from '@ckeditor/ckeditor5-build-classic';*/





var vueOBJ = null;
var footmenucnt0 = 0;
var footmenucnt1 = 0;
var footmenucnt2 = 0;
var pgperm = {};
var device_name = 'D';

function colorButtons() {
  var wwgm_footbarleftcolorpicker = document.getElementById('wwgm_footbarleftcolorpicker');
  var pickerLeft = new ColorPicker(wwgm_footbarleftcolorpicker, '#000000');
  wwgm_footbarleftcolorpicker.addEventListener('colorChange', function (event) {
    var color = event.detail.color.hexa;
    $('#wwgm_footbarleftcolorpicker_value').text(color);
    $('#wwgm_footbarleftcolorpicker_val').val(color);
  });
  var wwgm_footbarcentcolorpicker = document.getElementById('wwgm_footbarcentcolorpicker');
  var pickercent = new ColorPicker(wwgm_footbarcentcolorpicker, '#000000');
  wwgm_footbarcentcolorpicker.addEventListener('colorChange', function (event) {
    var color = event.detail.color.hexa;
    $('#wwgm_footbarcentcolorpicker_value').text(color);
    $('#wwgm_footbarcentcolorpicker_val').val(color);
  });
  var wwgm_footbarrightcolorpicker = document.getElementById('wwgm_footbarrightcolorpicker');
  var pickerright = new ColorPicker(wwgm_footbarrightcolorpicker, '#000000');
  wwgm_footbarrightcolorpicker.addEventListener('colorChange', function (event) {
    var color = event.detail.color.hexa;
    $('#wwgm_footbarrightcolorpicker_value').text(color);
    $('#wwgm_footbarrightcolorpicker_val').val(color);
  });
}

function configmenu0ContList(menu0contlinks) {
  var lks = menu0contlinks;
  var fcontlist = lks.split(',');
  var ct = fcontlist.length;
  footmenucnt0 = ct;
  var txt = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_link');
  var dtxt = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
  var tags = '';

  for (var i = 0; i < footmenucnt0; i++) {
    var item = fcontlist[i];
    var cont = item.split(':')[0];
    var lk = decodeURIComponent(item.split(':')[1]);
    var dt = item.split(':')[2];
    var itemcont = 'item0_' + i;
    var c_id = 'c_' + i;
    var l_id = 'l_' + i;
    tags += '<div class="d-flex m-b-10" id="' + itemcont + '">';
    tags += '<input type="hidden" id="createdate-' + itemcont + '" name="wwgm_createdate0[]" value="' + dt + '">';
    tags += '<div style="flex-grow: 1">';
    tags += '<input type="text" id="' + c_id + '" name="wwgm_fontleftcont[]" value="' + cont + '" class="form-control"  style="width: 100%;">';
    tags += ' </div>';
    tags += '<div style="flex-grow: 1;text-align: right;padding-right: 15px;line-height: 35px;min-width: 50px;" class="data-ajax" data-ajax="pgtxt_link">' + txt + '</div>';
    tags += '<div style="flex-grow: 1">';
    tags += '<input type="text" id="' + l_id + '" name="wwgm_fontleftlink[]" value="' + lk + '" class="form-control" style="width: 100%;">';
    tags += '</div>';
    tags += '<div style="flex-grow: 1;text-align: right;padding-right: 45px;line-height: 35px;">';
    tags += '<div class="btn btn-outline-light wwgmleftdelbtn" style="min-width: 60px;" data-cont="b_' + i + '" ><span class="data-ajax" data-ajax="btntxt_delete">' + dtxt + '</span></div>';
    tags += '</div>';
    tags += '</div>';
  }

  $('#fontleftcont_list').html(tags);
  $('.wwgmleftdelbtn').click(function () {
    if (pgperm["delete"] != 1) {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
      return;
    }

    var contid = $(this).attr('data-cont');
    var idx = contid.split('_')[1];
    var cidx = 'c_' + idx;
    var dcont = $.trim($('#' + cidx).val());
    $('#item0_' + idx).remove();
  });
}

function configmenu1ContList(menu1contlinks) {
  var lks = menu1contlinks;
  var fcontlist = lks.split(',');
  var ct = fcontlist.length;
  footmenucnt1 = ct;
  var txt = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_link');
  var dtxt = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
  var tags = '';

  for (var i = 0; i < footmenucnt1; i++) {
    var item = fcontlist[i];
    var cont = item.split(':')[0];
    var lk = decodeURIComponent(item.split(':')[1]);
    var dt = item.split(':')[2];
    var itemcont = 'item1_' + i;
    var c_id = 'cc_' + i;
    var l_id = 'll_' + i;
    tags += '<div class="d-flex m-b-10" id="' + itemcont + '">';
    tags += '<input type="hidden" id="createdate-' + itemcont + '" name="wwgm_createdate1[]" value="' + dt + '">';
    tags += '<div style="flex-grow: 1">';
    tags += '<input type="text" id="' + c_id + '" name="wwgm_fontcentcont[]" value="' + cont + '" class="form-control"  style="width: 100%;">';
    tags += ' </div>';
    tags += '<div style="flex-grow: 1;text-align: right;padding-right: 50px;line-height: 35px;" class="data-ajax" data-ajax="pgtxt_link">' + txt + '</div>';
    tags += '<div style="flex-grow: 1">';
    tags += '<input type="text" id="' + l_id + '" name="wwgm_fontcentlink[]" value="' + lk + '" class="form-control" style="width: 100%;">';
    tags += '</div>';
    tags += '<div style="flex-grow: 1;text-align: right;padding-right: 50px;line-height: 35px;">';
    tags += '<div class="btn btn-outline-light wwgmcentdelbtn" data-cont="b_' + i + '" ><span class="data-ajax" data-ajax="btntxt_delete">' + dtxt + '</span></div>';
    tags += '</div>';
    tags += '</div>';
  }

  $('#fontcentcont_list').html(tags);
  $('.wwgmcentdelbtn').click(function () {
    var contid = $(this).attr('data-cont');
    var idx = contid.split('_')[1];
    var cidx = 'c_' + idx;
    var dcont = $.trim($('#' + cidx).val());
    $('#item1_' + idx).remove();
  });
}

function footloaddata(whisfrm) {
  var transedlang = $('#wwga_transedlang').val();
  $.ajax({
    url: 'admin.frontGetMenu',
    data: {
      transedlang: transedlang,
      wwgfield: whisfrm,
      device: device_name
    },
    type: 'POST',
    async: true,
    success: function success(data) {
      var footlist = data.list;
      var trans = data.trans;

      if (footlist !== null && footlist !== '') {
        /* menu0 part */
        if (footlist.menu0style !== undefined && footlist.menu0style !== null && footlist.menu0style === 'normal') {
          $('input[id="wwgm_footbarleftnor"]').prop('checked', true);
          $('.footmenu0_normal_part').css('display', 'block');
          $('.footmenu0_css_part').css('display', 'none');
        } else {
          $('input[id="wwgm_footbarleftcss"]').prop('checked', true);
          $('.footmenu0_normal_part').css('display', 'none');
          $('.footmenu0_css_part').css('display', 'block');
        }

        if (footlist.menu0fontcolor !== undefined && footlist.menu0fontcolor !== null && footlist.menu0fontcolor !== '') {
          $('#wwgm_footbarleftcolorpicker_val').val(footlist.menu0fontcolor);
          $('#wwgm_footbarleftcolorpicker').css('background', footlist.menu0fontcolor);
          $('#wwgm_footbarleftcolorpicker').attr('data-color', footlist.menu0fontcolor);
          $('#wwgm_footbarleftcolorpicker_value').text(footlist.menu0fontcolor);
        }

        if (footlist.menu0fonttitle !== undefined && footlist.menu0fonttitle !== null && footlist.menu0fonttitle !== '') {
          $('#wwgm_footbarleft_fonttitle').val(footlist.menu0fonttitle);
        }

        if (footlist.menu0fontsize !== undefined && footlist.menu0fontsize !== null && footlist.menu0fontsize !== '') {
          $('#wwgm_footbarleft_fontsize_s').val(footlist.menu0fontsize);
        }

        if (footlist.menu0contlinks !== undefined && footlist.menu0contlinks !== null && footlist.menu0contlinks !== '') {
          configmenu0ContList(footlist.menu0contlinks);
        }

        if (footlist.menu0icon !== undefined && footlist.menu0icon !== null && footlist.menu0icon !== '') {
          $('#wwgm_footbarleft_upload_preview').text('');
          $('#wwgm_footbarleft_upload_preview_temp').val(footlist.menu0icon);
          $('#wwgm_footbarleft_upload_preview').css('background-image', 'url("/uploads/images/wesimg/' + footlist.menu0icon + '")');
        }

        if (footlist.edit0 !== undefined && footlist.edit0 !== null && footlist.edit0 !== '') {
          var edt = htmldecodejs(footlist.edit0);
          vueOBJ.TinyMCMcontent0 = edt;
        }
        /* menu 1 part */


        if (footlist.menu1style !== undefined && footlist.menu1style !== null && footlist.menu1style === 'normal') {
          $('input[id="wwgm_footbarcent_nor"]').prop('checked', true);
          $('.footmenu1_normal_part').css('display', 'block');
          $('.footmenu1_css_part').css('display', 'none');
        } else {
          $('input[id="wwgm_footbarcent_css"]').prop('checked', true);
          $('.footmenu1_normal_part').css('display', 'none');
          $('.footmenu1_css_part').css('display', 'block');
        }

        if (footlist.menu1fontcolor !== undefined && footlist.menu1fontcolor !== null && footlist.menu1fontcolor !== '') {
          $('#wwgm_footbarcentcolorpicker_val').val(footlist.menu1fontcolor);
          $('#wwgm_footbarcentcolorpicker').css('background', footlist.menu1fontcolor);
          $('#wwgm_footbarcentcolorpicker').attr('data-color', footlist.menu1fontcolor);
          $('#wwgm_footbarcentcolorpicker_value').text(footlist.menu1fontcolor);
        }

        if (footlist.menu1fonttitle !== undefined && footlist.menu1fonttitle !== null && footlist.menu1fonttitle !== '') {
          $('#wwgm_footbarcent_fonttitle').val(footlist.menu1fonttitle);
        }

        if (footlist.menu1fontsize !== undefined && footlist.menu1fontsize !== null && footlist.menu1fontsize !== '') {
          $('#wwgm_footbarcent_fontsize_s').val(footlist.menu1fontsize);
        }

        if (footlist.menu1contlinks !== undefined && footlist.menu1contlinks !== null && footlist.menu1contlinks !== '') {
          configmenu1ContList(footlist.menu1contlinks);
        }

        if (footlist.menu1icon !== undefined && footlist.menu1icon !== null && footlist.menu1icon !== '') {
          $('#wwgm_footbarcent_upload_preview').text('');
          $('#wwgm_footbarcent_upload_preview_temp').val(footlist.menu1icon);
          $('#wwgm_footbarcent_upload_preview').css('background-image', 'url("/uploads/images/wesimg/' + footlist.menu1icon + '")');
        }

        if (footlist.edit1 !== undefined && footlist.edit1 !== null && footlist.edit1 !== '') {
          var edt = htmldecodejs(footlist.edit1);
          vueOBJ.TinyMCMcontent1 = edt;
        }
        /* menu 2 part */


        if (footlist.menu2style !== undefined && footlist.menu2style !== null && footlist.menu2style === 'normal') {
          $('input[id="wwgm_footbarright_nor"]').prop('checked', true);
          $('.footmenu2_normal_part').css('display', 'block');
          $('.footmenu2_css_part').css('display', 'none');
        } else {
          $('input[id="wwgm_footbarright_css"]').prop('checked', true);
          $('.footmenu2_normal_part').css('display', 'none');
          $('.footmenu2_css_part').css('display', 'block');
        }

        if (footlist.menu2fontcolor !== undefined && footlist.menu2fontcolor !== null && footlist.menu2fontcolor !== '') {
          $('#wwgm_footbarrightcolorpicker_val').val(footlist.menu2fontcolor);
          $('#wwgm_footbarrightcolorpicker').css('background', footlist.menu2fontcolor);
          $('#wwgm_footbarrightcolorpicker').attr('data-color', footlist.menu2fontcolor);
          $('#wwgm_footbarrightcolorpicker_value').text(footlist.menu2fontcolor);
        }

        if (footlist.menu2fonttitle !== undefined && footlist.menu2fonttitle !== null && footlist.menu2fonttitle !== '') {
          $('#wwgm_footbarright_fonttitle').val(footlist.menu2fonttitle);
        }

        if (footlist.menu2fontsize !== undefined && footlist.menu2fontsize !== null && footlist.menu2fontsize !== '') {
          $('#wwgm_footbarright_fontsize_s').val(footlist.menu2fontsize);
        }

        if (footlist.menu2contenttype !== undefined && footlist.menu2contenttype !== null && footlist.menu2contenttype !== '') {
          $('#wwgm_footbarright_contenttype_s').val(footlist.menu2contenttype);
        }

        if (footlist.menu2contenttype !== undefined && footlist.menu2contenttype !== null && footlist.menu2contenttype !== '') {
          $('#wwgm_footbarright_contenttype_s').val(footlist.menu2contenttype);
        }

        if (footlist.menu2orderbydate !== undefined && footlist.menu2orderbydate !== null && footlist.menu2orderbydate !== '') {
          $('#wwgm_footbarright_orderby_s').val(footlist.menu2orderbydate);
        }

        if (footlist.menu2number !== undefined && footlist.menu2number !== null && footlist.menu2number !== '') {
          $('#wwgm_footbarright_number_i').val(footlist.menu2number);
        } else {
          $('#wwgm_footbarright_number_i').val('');
        }
        /*if(footlist.menu2contlinks!==undefined && footlist.menu2contlinks!==null && footlist.menu2contlinks!=='')
        {
            configmenu2ContList(footlist.menu2contlinks);
        }*/


        if (footlist.menu2icon !== undefined && footlist.menu2icon !== null && footlist.menu2icon !== '') {
          $('#wwgm_footbarright_upload_preview').text('');
          $('#wwgm_footbarright_upload_preview_temp').val(footlist.menu2icon);
          $('#wwgm_footbarright_upload_preview').css('background-image', 'url("/uploads/images/wesimg/' + footlist.menu2icon + '")');
        }

        if (footlist.edit2 !== undefined && footlist.edit2 !== null && footlist.edit2 !== '') {
          var edt = htmldecodejs(footlist.edit2);
          vueOBJ.TinyMCMcontent2 = edt;
        }

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

function showContentType(lang) {
  $.ajax({
    url: 'admin.wwmfGetContentType',
    type: 'POST',
    data: {
      lang: lang
    },
    async: true,
    success: function success(data) {
      if (data.msg === 'ok') {
        var list = data.list;
        $('#wwgm_footbarright_contenttype_s').html('');
        var tags = '';

        for (var i = 0; i < list.length; i++) {
          tags += '<option value="' + list[i].id + '">' + list[i].field + '</option>';
        }

        $('#wwgm_footbarright_contenttype_s').html(tags);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function hidenModel() {
  $('#wwgm-menucont').val('');
  $('#wwgm-menulink').val('');
  $("#myMenuAddModal").modal('hide');
}

var wwgfield = 'footmenu';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalMenusFoot",
  components: {
    'editor0': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    'editor1': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    'editor2': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__.default
  },
  data: function data() {
    return {
      pageid: 'webs-wesglobal-menus-footmenu-fav',
      mu_webs: '',
      musu_webs_weschina: '',
      mususu_webs_wesglobal_menus: '',
      musususu_webs_wesglobal_menus_foot: '',
      mususu_mainmenu: '',
      mususu_footmenu: '',
      btntxt_add: '',
      pgtxt_font: '',
      pgtxt_content: '',
      pgtxt_link: '',
      pgtxt_createmenu: '',
      pgtxt_menu: '',
      pgtxt_normal: '',
      pgtxt_css: '',
      pgtxt_fontcolour: '',
      pgtxt_size: '',
      pgtxt_title: '',
      pgtxt_icon: '',
      btntxt_edit: '',
      pgtxt_news: '',
      pgtxt_save: '',
      pgtxt_preview: '',
      pgtxt_release: '',
      pgtxt_translation: '',
      pgtxt_navigation: '',
      pgtxt_label: '',
      btntxt_change: '',
      btntxt_remove: '',
      pgtxt_nosavenoappear: '',
      pgtxt_type: '',
      pgtxt_service: '',
      pgtxt_aboutus: '',
      pgtxt_information: '',
      pgtxt_orderbydate: '',
      pgtxt_number: '',
      btntxt_ok: '',
      btntxt_cancel: '',
      pgtxt_wantdeleteitem: '',
      pgtxt_notpermission: '',
      pgtxt_notification: '',
      pgtxt_dbsaved: '',
      TinyMCMcontent0: '',
      TinyMCMcontent1: '',
      TinyMCMcontent2: ''
    };
  },
  created: function created() {},
  beforeMount: function beforeMount() {},
  computed: {
    cmususu_webs_wesglobal_menus: function cmususu_webs_wesglobal_menus() {
      return this.mususu_webs_wesglobal_menus;
    },
    cmusususu_webs_wesglobal_menus_foot: function cmusususu_webs_wesglobal_menus_foot() {
      return this.musususu_webs_wesglobal_menus_foot;
    },
    cmu_webs: function cmu_webs() {
      return this.mu_webs;
    },
    cmusu_webs_weschina: function cmusu_webs_weschina() {
      return this.musu_webs_weschina;
    },
    cmususu_mainmenu: function cmususu_mainmenu() {
      return this.mususu_mainmenu;
    },
    cmususu_footmenu: function cmususu_footmenu() {
      return this.mususu_footmenu;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cpgtxt_font: function cpgtxt_font() {
      return this.pgtxt_font;
    },
    cpgtxt_content: function cpgtxt_content() {
      return this.pgtxt_content;
    },
    cpgtxt_link: function cpgtxt_link() {
      return this.pgtxt_link;
    },
    cpgtxt_createmenu: function cpgtxt_createmenu() {
      return this.pgtxt_createmenu;
    },
    cpgtxt_menu: function cpgtxt_menu() {
      return this.pgtxt_menu;
    },
    cpgtxt_normal: function cpgtxt_normal() {
      return this.pgtxt_normal;
    },
    cpgtxt_css: function cpgtxt_css() {
      return this.pgtxt_css;
    },
    cpgtxt_fontcolour: function cpgtxt_fontcolour() {
      return this.pgtxt_fontcolour;
    },
    cpgtxt_size: function cpgtxt_size() {
      return this.pgtxt_size;
    },
    cpgtxt_title: function cpgtxt_title() {
      return this.pgtxt_title;
    },
    cpgtxt_icon: function cpgtxt_icon() {
      return this.pgtxt_icon;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cpgtxt_news: function cpgtxt_news() {
      return this.pgtxt_news;
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
    cpgtxt_translation: function cpgtxt_translation() {
      return this.pgtxt_translation;
    },
    cpgtxt_nosavenoappear: function cpgtxt_nosavenoappear() {
      return this.pgtxt_nosavenoappear;
    },
    cpgtxt_type: function cpgtxt_type() {
      return this.pgtxt_type;
    },
    cpgtxt_service: function cpgtxt_service() {
      return this.pgtxt_service;
    },
    cpgtxt_aboutus: function cpgtxt_aboutus() {
      return this.pgtxt_aboutus;
    },
    cpgtxt_information: function cpgtxt_information() {
      return this.pgtxt_information;
    },
    cpgtxt_orderbydate: function cpgtxt_orderbydate() {
      return this.pgtxt_orderbydate;
    },
    cpgtxt_number: function cpgtxt_number() {
      return this.pgtxt_number;
    },
    cpgtxt_dbsaved: function cpgtxt_dbsaved() {
      return this.pgtxt_dbsaved;
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
    pgperm = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_4__.default.data.getPagePermission(this.$store.state.permission, this.pageid);
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getSiteFaveritelist(this.pageid, vueOBJ);
    colorButtons();
    this.initpage();
    this.getWWGStoredLang();
  },
  methods: {
    /* fav part */
    getSiteFaveritelist: function getSiteFaveritelist(list) {
      if (list !== null && list !== '') {
        var imgsrc = '/images/icons/star_f.png';
        $('#' + this.pageid + ' img').attr("src", imgsrc);
        $('#' + this.pageid).attr("data-status", "on");
      }
      /* fav part*/

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
              var lang_conts = cont.split('-');
              showContentType(lang_conts[2].toLowerCase());

              if (lang_conts.length > 0) {
                var sky = cont.split('-')[0] + '-' + cont.split('-')[1];
                $('#wwga_transedlang').val(sky);
                if (wwgfield == 'mainmenu') mainloaddata(wwgfield);else footloaddata(wwgfield);
              }
            });
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },

    /*fav part*/
    edit_init_callback0: function edit_init_callback0() {
      $('.tox-statusbar').css('display', 'none');
    },
    upload_handler0: function upload_handler0(blobInfo, success, failure, progress) {
      if (pgperm.create != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      var xhr, formData;
      xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open('POST', 'admin.UpdateWWGBarCenterImg');

      xhr.upload.onprogress = function (e) {
        progress(e.loaded / e.total * 100);
      };

      xhr.onload = function () {
        var json;

        if (xhr.status < 200 || xhr.status >= 300) {
          failure('HTTP Error: ' + xhr.status);
          return;
        }

        json = JSON.parse(xhr.responseText);

        if (!json || typeof json.location != 'string') {
          failure('Invalid JSON: ' + xhr.responseText);
          return;
        } // $('#wwga_footbarleft_upload_preview_temp').val(json.filename);


        success(json.location);
      };

      xhr.onerror = function () {
        failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
      };

      formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());
      xhr.send(formData);
    },
    edit_init_callback1: function edit_init_callback1() {
      $('.tox-statusbar').css('display', 'none');
    },
    upload_handler1: function upload_handler1(blobInfo, success, failure, progress) {
      if (pgperm.create != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      var xhr, formData;
      xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open('POST', 'admin.UpdateWWGBarCenterImg');

      xhr.upload.onprogress = function (e) {
        progress(e.loaded / e.total * 100);
      };

      xhr.onload = function () {
        var json;

        if (xhr.status < 200 || xhr.status >= 300) {
          failure('HTTP Error: ' + xhr.status);
          return;
        }

        json = JSON.parse(xhr.responseText);

        if (!json || typeof json.location != 'string') {
          failure('Invalid JSON: ' + xhr.responseText);
          return;
        } //$('#wwga_footbarleft_upload_preview_temp').val(json.filename);


        success(json.location);
      };

      xhr.onerror = function () {
        failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
      };

      formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());
      xhr.send(formData);
    },
    edit_init_callback2: function edit_init_callback2() {
      $('.tox-statusbar').css('display', 'none');
    },
    upload_handler2: function upload_handler2(blobInfo, success, failure, progress) {
      if (pgperm.create != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      var xhr, formData;
      xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open('POST', 'admin.UpdateWWGBarCenterImg');

      xhr.upload.onprogress = function (e) {
        progress(e.loaded / e.total * 100);
      };

      xhr.onload = function () {
        var json;

        if (xhr.status < 200 || xhr.status >= 300) {
          failure('HTTP Error: ' + xhr.status);
          return;
        }

        json = JSON.parse(xhr.responseText);

        if (!json || typeof json.location != 'string') {
          failure('Invalid JSON: ' + xhr.responseText);
          return;
        } // $('#wwga_footbarleft_upload_preview_temp').val(json.filename);


        success(json.location);
      };

      xhr.onerror = function () {
        failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
      };

      formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());
      xhr.send(formData);
    },
    initpage: function initpage() {
      vueOBJ = this;
      wwgfield = 'footmenu';
      showContentType('english');
      $('input[name="wwgmfrm"]').val('footmenu');
      $('#wwgm_footbarright_number_i').on("keyup", function () {
        var len = $("#wwgm_footbarright_number_i").val();
        if (parseInt(len) < 1 || len == null || len == '') $("#wwgm_footbarright_number_i").val('1');
      });
      $('input[name="wwgm_footbarleft"]').on("click", function () {
        var v = $(this).val();

        if (v === 'normal') {
          $('.footmenu0_normal_part').css('display', 'block');
          $('.footmenu0_css_part').css('display', 'none');
        } else if (v === 'css') {
          $('.footmenu0_normal_part').css('display', 'none');
          $('.footmenu0_css_part').css('display', 'block');
        }
      });
      $('input[name="wwgm_footbar_cent"]').on("click", function () {
        var v = $(this).val();

        if (v === 'normal') {
          $('.footmenu1_normal_part').css('display', 'block');
          $('.footmenu1_css_part').css('display', 'none');
        } else if (v === 'css') {
          $('.footmenu1_normal_part').css('display', 'none');
          $('.footmenu1_css_part').css('display', 'block');
        }
      });
      $('input[name="wwgm_footbar_right"]').on("click", function () {
        var v = $(this).val();

        if (v === 'normal') {
          $('.footmenu2_normal_part').css('display', 'block');
          $('.footmenu2_css_part').css('display', 'none');
        } else if (v === 'css') {
          $('.footmenu2_normal_part').css('display', 'none');
          $('.footmenu2_css_part').css('display', 'block');
        }
      });
      $('#wwgm_footbarleft_editbtn').click(function () {
        if (pgperm.write != 1) {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
          return;
        }

        $('#wwgm_footbarleft_upload').val('');
        $('#wwgm_footbarleft_upload').trigger('click');
      });
      $("#wwgm_footbarleft_upload").change(function () {
        if (this.files && this.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            $('#wwgm_footbarleft_upload_preview').text('');
            $('#wwgm_footbarleft_upload_preview').css('background-image', 'url("' + e.target.result + '")');
          };

          reader.readAsDataURL(this.files[0]); // convert to base64 string
        }
      });
      $('#wwgm_footbarcent_editbtn').click(function () {
        if (pgperm.write != 1) {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
          return;
        }

        $('#wwgm_footbarcent_upload').val('');
        $('#wwgm_footbarcent_upload').trigger('click');
      });
      $("#wwgm_footbarcent_upload").change(function () {
        if (this.files && this.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            $('#wwgm_footbarcent_upload_preview').text('');
            $('#wwgm_footbarcent_upload_preview').css('background-image', 'url("' + e.target.result + '")');
          };

          reader.readAsDataURL(this.files[0]); // convert to base64 string
        }
      });
      $('#wwgm_footbarright_editbtn').click(function () {
        if (pgperm.write != 1) {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
          return;
        }

        $('#wwgm_footbarright_upload').val('');
        $('#wwgm_footbarright_upload').trigger('click');
      });
      $("#wwgm_footbarright_upload").change(function () {
        if (this.files && this.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            $('#wwgm_footbarright_upload_preview').text('');
            $('#wwgm_footbarright_upload_preview').css('background-image', 'url("' + e.target.result + '")');
          };

          reader.readAsDataURL(this.files[0]); // convert to base64 string
        }
      });
      $('#fontleftcont_list-app-btn').click(function () {
        if (pgperm.create != 1) {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
          return;
        }

        var tags = '';
        var txt = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_link');
        var dtxt = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
        var c_id = 'c_' + footmenucnt0;
        var l_id = 'l_' + footmenucnt0;
        var timestamp = new Date().getTime();
        var itemcont = 'item_' + footmenucnt0;
        tags += '<div class="d-flex m-b-10" id="' + itemcont + '">';
        tags += '<input type="hidden" id="createdate-' + itemcont + '" name="wwgm_createdate0[]" value="' + timestamp + '">';
        tags += '<div style="flex-grow: 1" >';
        tags += '<input type="text" id="' + c_id + '" name="wwgm_fontleftcont[]" value="" class="form-control" style="width: 100%;">';
        tags += ' </div>';
        tags += '<div style="flex-grow: 1;text-align: right;padding-right: 50px;line-height: 35px;" class="data-ajax" data-ajax="pgtxt_link">' + txt + '</div>';
        tags += '<div style="flex-grow: 1">';
        tags += '<input type="text" id="' + l_id + '" name="wwgm_fontleftlink[]" value="" class="form-control" style="width: 100%;">';
        tags += '</div>';
        tags += '<div style="flex-grow: 1;text-align: right;padding-right: 50px;line-height: 35px;">';
        tags += '<div style="padding: 1px 15px;width: 70px;">&nbsp</div>'; // tags +='<div class="btn btn-outline-light wwgmdelbtn" data-cont="b_'+footmenucnt+'"><span class="data-ajax" data-ajax="btntxt_delete">'+dtxt+'</span></div>';

        tags += '</div>';
        tags += '</div>';
        $('#fontleftcont_list').append(tags);
        footmenucnt0++;
      });
      /* right menu*/

      $('#fontcentcont_list-app-btn').click(function () {
        if (pgperm.create != 1) {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
          return;
        }

        var tags = '';
        var txt = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_link');
        var dtxt = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
        var c_id = 'c_' + footmenucnt1;
        var l_id = 'l_' + footmenucnt1;
        var timestamp = new Date().getTime();
        var itemcont = 'item_' + footmenucnt1;
        tags += '<div class="d-flex m-b-10" id="' + itemcont + '">';
        tags += '<input type="hidden" id="createdate-' + itemcont + '" name="wwgm_createdate1[]" value="' + timestamp + '">';
        tags += '<div style="flex-grow: 1" >';
        tags += '<input type="text" id="' + c_id + '" name="wwgm_fontcentcont[]" value="" class="form-control" style="width: 100%;">';
        tags += ' </div>';
        tags += '<div style="flex-grow: 1;text-align: right;padding-right: 50px;line-height: 35px;" class="data-ajax" data-ajax="pgtxt_link">' + txt + '</div>';
        tags += '<div style="flex-grow: 1">';
        tags += '<input type="text" id="' + l_id + '" name="wwgm_fontcentlink[]" value="" class="form-control" style="width: 100%;">';
        tags += '</div>';
        tags += '<div style="flex-grow: 1;text-align: right;padding-right: 50px;line-height: 35px;">';
        tags += '<div style="padding: 1px 15px;width: 70px;">&nbsp</div>'; // tags +='<div class="btn btn-outline-light wwgmcentdelbtn" data-cont="b_'+footmenucnt+'"><span class="data-ajax" data-ajax="btntxt_delete">'+dtxt+'</span></div>';

        tags += '</div>';
        tags += '</div>';
        $('#fontcentcont_list').append(tags);
        footmenucnt1++;
      });
      /*real menu add*/

      footloaddata(wwgfield);
    } //initpage
    ,
    PagePreview: function PagePreview() {
      $("#previewModalModalbody").html('');
      var iframeH = $(window).height() - 100;
      var lang = $('#wwga_transedlang').val();
      if (lang == '') lang = "en";else lang = lang.split("-")[0];
      $("#previewModalModalbody").html('<iframe src="/' + lang + '/preview" style="border:none;width:100%; height: ' + iframeH + 'px;" title="preview"></iframe>');
      $("#previewModal").modal('show');
    },
    PageRelease: function PageRelease() {
      if (pgperm.write != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      var tlang = $('#wwga_transedlang').val();

      if (tlang == '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('Please Select language of Content for save!');
        return;
      }

      $.ajax({
        url: 'admin.websGlobalFrontPageRelease',
        type: 'POST',
        data: {
          trans: tlang,
          part: "footmenu",
          tabstatus: -1,
          device: device_name
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
    SavePageContent: function SavePageContent() {
      if (pgperm.write != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      var tlang = $('#wwga_transedlang').val();

      if (tlang == '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('Please Select language of Content for save!');
        return;
      } // encodeURIComponent ckdckd


      $('input[name="transedlang"]').val(tlang);
      var formData = '';
      var vobj = this;
      var url = '';
      $('#editcont0').val(this.TinyMCMcontent0);
      $('#editcont1').val(this.TinyMCMcontent1);
      $('#editcont2').val(this.TinyMCMcontent2);
      $('input[name^="wwgm_fontleftlink"]').each(function () {
        var surl = $.trim($(this).val());
        surl = surl.replace(/(\s*)/g, '');
        surl = encodeURIComponent(surl);
        $(this).val(surl);
      });
      $('input[name^="wwgm_fontcentlink"]').each(function () {
        var surl = $.trim($(this).val());
        surl = surl.replace(/(\s*)/g, '');
        surl = encodeURIComponent(surl);
        $(this).val(surl);
      });
      formData = new FormData($("#wwgm_foot_frm")[0]);
      url = 'admin.WebsWesGlobalMenuUpload';
      $.ajax({
        url: url,
        type: 'POST',
        data: formData,
        async: true,
        success: function success(data) {
          // data = JSON.parse(data);
          if (data.msg == "ok") {
            footloaddata(wwgfield);
            setTimeout(_assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_dbsaved'), 500); //myjs.data.showAlert('Sucess save in Database');
          } else {
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
    }
  } //method

});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.sl-tab-container{\n    display: none;\n}\n.sl-tab-container.active{\n    display: block;\n}\n.apper-top-lang{\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center\n}\n.apper-top-lang div{\n    line-height: 25px;\n    text-align: center;\n}\n.form-check-input.group{\n    width: 16px;height: 16px;border-radius: 16px; border: 1px solid #bbbbbb;\n    cursor: pointer;\n}\n.form-check-input.group > div{\n    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;\n}\n.form-check-input.group.active > div{\n    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;\n}\n#wwgm_footbarleft_upload_preview, #wwgm_footbarcent_upload_preview, #wwgm_footbarright_upload_preview {\n    background-repeat: no-repeat;\n    background-size:100% 100%;\n}\n.mainmenu-item-container{\n    width: 100%;line-height: 30px;padding: 0 20px;-webkit-box-align: baseline;-ms-flex-align: baseline;align-items: baseline;\n}\n.mainmenu-item-container-sub{\n    width: 100%;\n    line-height: 30px;\n    padding:20px;\n    border-top: 1px solid #e4e4e4;\n    display: none\n}\n.mainmenu-item-container-sub.active{\n    width: 100%;\n    line-height: 30px;\n    padding:20px;\n    border-top: 1px solid #e4e4e4;\n    display: block;\n}\n.tox.tox-tinymce{\n    border-radius: 20px;\n    width: 100% !important;\n    min-height: 350px !important;\n}\n\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaMenusFoot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaMenusFoot.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaMenusFoot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaMenusFoot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue":
/*!************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesChinaMenusFoot_vue_vue_type_template_id_241468ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesChinaMenusFoot.vue?vue&type=template&id=241468ee& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=template&id=241468ee&");
/* harmony import */ var _WebsWesChinaMenusFoot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesChinaMenusFoot.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=script&lang=js&");
/* harmony import */ var _WebsWesChinaMenusFoot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesChinaMenusFoot.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _WebsWesChinaMenusFoot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _WebsWesChinaMenusFoot_vue_vue_type_template_id_241468ee___WEBPACK_IMPORTED_MODULE_0__.render,
  _WebsWesChinaMenusFoot_vue_vue_type_template_id_241468ee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaMenusFoot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaMenusFoot.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaMenusFoot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaMenusFoot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaMenusFoot.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=style&index=0&lang=css&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaMenusFoot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=template&id=241468ee&":
/*!*******************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=template&id=241468ee& ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaMenusFoot_vue_vue_type_template_id_241468ee___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaMenusFoot_vue_vue_type_template_id_241468ee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaMenusFoot_vue_vue_type_template_id_241468ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaMenusFoot.vue?vue&type=template&id=241468ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=template&id=241468ee&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=template&id=241468ee&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaMenusFoot.vue?vue&type=template&id=241468ee& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v(_vm._s(_vm.cmusususu_webs_wesglobal_menus_foot))]),
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
              _vm._s(_vm.cmususu_webs_wesglobal_menus) +
              "   >>  " +
              _vm._s(_vm.cmusususu_webs_wesglobal_menus_foot) +
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
          _c("input", {
            attrs: {
              type: "hidden",
              name: "wwga_transedlang",
              id: "wwga_transedlang",
              value: "en-1"
            }
          }),
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
                attrs: { id: "wwgm_save" },
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
        staticStyle: { "margin-top": "25px" },
        attrs: { id: "FootMenuContainer" }
      },
      [
        _c(
          "form",
          {
            attrs: {
              method: "post",
              enctype: "multipart/form-data",
              name: "wwgm_foot_frm",
              id: "wwgm_foot_frm"
            }
          },
          [
            _c("input", {
              attrs: {
                type: "hidden",
                name: "wwgm_footbarleft_upload_preview_temp",
                id: "wwgm_footbarleft_upload_preview_temp",
                value: ""
              }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "wwgm_footbarcent_upload_preview_temp",
                id: "wwgm_footbarcent_upload_preview_temp",
                value: ""
              }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "wwgm_footbarright_upload_preview_temp",
                id: "wwgm_footbarright_upload_preview_temp",
                value: ""
              }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "hidden", name: "wwgafrm", value: "footmenu" }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "hidden", name: "transedlang", value: "en-1" }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "hidden", name: "device", value: "D" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h6", { staticClass: "card-title m-b-20" }, [
                      _vm._v(_vm._s(_vm.cpgtxt_menu) + " 1")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "d-flex flex-row m-b-20",
                        staticStyle: {
                          padding: "0px 120px",
                          "align-items": "center"
                        }
                      },
                      [
                        _c("div", { staticStyle: { width: "130px" } }, [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: {
                              type: "radio",
                              name: "wwgm_footbarleft",
                              id: "wwgm_footbarleftnor",
                              value: "normal",
                              checked: ""
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "form-check-label",
                              attrs: { for: "wwgm_footbarleftnor" }
                            },
                            [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(_vm.cpgtxt_normal) +
                                  "\n                                    "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticStyle: { width: "130px" } }, [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: {
                              type: "radio",
                              name: "wwgm_footbarleft",
                              id: "wwgm_footbarleftcss",
                              value: "css"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "form-check-label",
                              attrs: { for: "wwgm_footbarleftcss" }
                            },
                            [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(_vm.cpgtxt_css) +
                                  "\n                                    "
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
                        staticClass: "footmenu0_normal_part",
                        staticStyle: { display: "block" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(_vm._s(_vm.cpgtxt_fontcolour) + " ")
                            ]),
                            _vm._v(" "),
                            _vm._m(1)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_font) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_title)
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(2)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_font) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_size)
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(3)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: { padding: "0px 100px" }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_font) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_content)
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", {
                              staticStyle: { "flex-grow": "1" },
                              attrs: {
                                id: "fontleftcont_list",
                                "data-cnt": "0"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }),
                            _vm._v(" "),
                            _c("div", { staticStyle: { "flex-grow": "1" } }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "btn btn-outline-light  dash-my-btn-0 webs_tab p-l-r-30",
                                  attrs: { id: "fontleftcont_list-app-btn" }
                                },
                                [
                                  _vm._v(
                                    "\n                                            + "
                                  ),
                                  _c("span", { staticClass: "m-l-10" }, [
                                    _vm._v(_vm._s(_vm.cbtntxt_add))
                                  ])
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(_vm._s(_vm.cpgtxt_icon))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticStyle: { "flex-grow": "1" } }, [
                              _c("div", { staticClass: "flex-container" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "logimag",
                                    attrs: {
                                      id: "wwgm_footbarleft_upload_preview"
                                    }
                                  },
                                  [_vm._v("ICON")]
                                ),
                                _vm._v(" "),
                                _vm._m(4),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "btn btn-outline-light webglogappearbtn",
                                      attrs: { id: "wwgm_footbarleft_editbtn" }
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.cbtntxt_edit))
                                      ])
                                    ]
                                  )
                                ])
                              ])
                            ])
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "footmenu0_css_part",
                        staticStyle: { display: "none" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-column m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center",
                              "margin-top": "30px"
                            }
                          },
                          [
                            _c("textarea", {
                              staticStyle: { display: "none" },
                              attrs: {
                                name: "editcont0",
                                id: "editcont0",
                                value: ""
                              }
                            }),
                            _vm._v(" "),
                            _c("editor0", {
                              attrs: {
                                "api-key":
                                  "vozqdhfpn1ddjlq31cj4d788tvxdfyyv5sl208xskz86xqoh",
                                "cloud-channel": "5-dev",
                                init: {
                                  id: "00",
                                  plugins: [
                                    "lists link image code table paste help wordcount "
                                  ],
                                  toolbar:
                                    "undo redo | code table | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor | link image ",
                                  images_upload_handler: _vm.upload_handler0,
                                  init_instance_callback:
                                    _vm.edit_init_callback0
                                }
                              },
                              model: {
                                value: _vm.TinyMCMcontent0,
                                callback: function($$v) {
                                  _vm.TinyMCMcontent0 = $$v
                                },
                                expression: "TinyMCMcontent0"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h6", { staticClass: "card-title m-b-20" }, [
                      _vm._v(_vm._s(_vm.cpgtxt_menu) + " 2")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "d-flex flex-row m-b-20",
                        staticStyle: {
                          padding: "0px 100px",
                          "align-items": "center"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticStyle: {
                              width: "130px",
                              "margin-left": "20px"
                            }
                          },
                          [
                            _c("input", {
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "wwgm_footbar_cent",
                                id: "wwgm_footbarcent_nor",
                                value: "normal",
                                checked: ""
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "wwgm_footbarcent_nor" }
                              },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(_vm.cpgtxt_normal) +
                                    "\n                                    "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticStyle: { width: "130px" } }, [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: {
                              type: "radio",
                              name: "wwgm_footbar_cent",
                              id: "wwgm_footbarcent_css",
                              value: "css"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "form-check-label",
                              attrs: { for: "wwgm_footbarcent_css" }
                            },
                            [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(_vm.cpgtxt_css) +
                                  "\n                                    "
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
                        staticClass: "footmenu1_normal_part",
                        staticStyle: { display: "block" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(_vm._s(_vm.cpgtxt_fontcolour) + " ")
                            ]),
                            _vm._v(" "),
                            _vm._m(5)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_font) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_title)
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(6)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_font) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_size)
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(7)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: { padding: "0px 100px" }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_font) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_content)
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", {
                              staticStyle: { "flex-grow": "1" },
                              attrs: {
                                id: "fontcentcont_list",
                                "data-cnt": "0"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }),
                            _vm._v(" "),
                            _c("div", { staticStyle: { "flex-grow": "1" } }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "btn btn-outline-light  dash-my-btn-0 webs_tab p-l-r-30",
                                  attrs: { id: "fontcentcont_list-app-btn" }
                                },
                                [
                                  _vm._v(
                                    "\n                                            + "
                                  ),
                                  _c("span", { staticClass: "m-l-10" }, [
                                    _vm._v(_vm._s(_vm.cbtntxt_add))
                                  ])
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(_vm._s(_vm.cpgtxt_icon))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticStyle: { "flex-grow": "1" } }, [
                              _c("div", { staticClass: "flex-container" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "logimag",
                                    attrs: {
                                      id: "wwgm_footbarcent_upload_preview"
                                    }
                                  },
                                  [_vm._v("ICON")]
                                ),
                                _vm._v(" "),
                                _vm._m(8),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "btn btn-outline-light webglogappearbtn",
                                      attrs: { id: "wwgm_footbarcent_editbtn" }
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.cbtntxt_edit))
                                      ])
                                    ]
                                  )
                                ])
                              ])
                            ])
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "footmenu1_css_part",
                        staticStyle: { display: "none", "margin-top": "30px" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-column m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("textarea", {
                              staticStyle: { display: "none" },
                              attrs: {
                                name: "editcont1",
                                id: "editcont1",
                                value: ""
                              }
                            }),
                            _vm._v(" "),
                            _c("editor1", {
                              attrs: {
                                "api-key":
                                  "vozqdhfpn1ddjlq31cj4d788tvxdfyyv5sl208xskz86xqoh",
                                "cloud-channel": "5-dev",
                                init: {
                                  id: "01",
                                  plugins: [
                                    "lists link image code table paste help wordcount "
                                  ],
                                  toolbar:
                                    "undo redo | code table | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor | link image ",
                                  images_upload_handler: _vm.upload_handler1,
                                  init_instance_callback:
                                    _vm.edit_init_callback1
                                }
                              },
                              model: {
                                value: _vm.TinyMCMcontent1,
                                callback: function($$v) {
                                  _vm.TinyMCMcontent1 = $$v
                                },
                                expression: "TinyMCMcontent1"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h6", { staticClass: "card-title m-b-20" }, [
                      _vm._v(_vm._s(_vm.cpgtxt_menu) + " 3")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "d-flex flex-row m-b-20",
                        staticStyle: {
                          padding: "0px 100px",
                          "align-items": "center"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticStyle: {
                              width: "130px",
                              "margin-left": "20px"
                            }
                          },
                          [
                            _c("input", {
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "wwgm_footbar_right",
                                id: "wwgm_footbarright_nor",
                                value: "normal",
                                checked: ""
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "wwgm_footbarright_nor" }
                              },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(_vm.cpgtxt_normal) +
                                    "\n                                    "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticStyle: { width: "130px" } }, [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: {
                              type: "radio",
                              name: "wwgm_footbar_right",
                              id: "wwgm_footbarright_css",
                              value: "css"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "form-check-label",
                              attrs: { for: "wwgm_footbarright_css" }
                            },
                            [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(_vm.cpgtxt_css) +
                                  "\n                                    "
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
                        staticClass: "footmenu2_normal_part",
                        staticStyle: { display: "block" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(_vm._s(_vm.cpgtxt_fontcolour) + " ")
                            ]),
                            _vm._v(" "),
                            _vm._m(9)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_font) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_title)
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(10)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_font) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_size)
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(11)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: { padding: "0px 100px" }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_content) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_type)
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(12)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: { padding: "0px 100px" }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(_vm._s(_vm.cpgtxt_orderbydate))
                            ]),
                            _vm._v(" "),
                            _vm._m(13)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: { padding: "0px 100px" }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(_vm._s(_vm.cpgtxt_number))
                            ]),
                            _vm._v(" "),
                            _vm._m(14)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(_vm._s(_vm.cpgtxt_icon))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticStyle: { "flex-grow": "1" } }, [
                              _c("div", { staticClass: "flex-container" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "logimag",
                                    attrs: {
                                      id: "wwgm_footbarright_upload_preview"
                                    }
                                  },
                                  [_vm._v("ICON")]
                                ),
                                _vm._v(" "),
                                _vm._m(15),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "btn btn-outline-light webglogappearbtn",
                                      attrs: { id: "wwgm_footbarright_editbtn" }
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.cbtntxt_edit))
                                      ])
                                    ]
                                  )
                                ])
                              ])
                            ])
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "footmenu2_css_part",
                        staticStyle: { display: "none", "margin-top": "30px" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-column m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("textarea", {
                              staticStyle: { display: "none" },
                              attrs: {
                                name: "editcont2",
                                id: "editcont2",
                                value: ""
                              }
                            }),
                            _vm._v(" "),
                            _c("editor2", {
                              attrs: {
                                "api-key":
                                  "vozqdhfpn1ddjlq31cj4d788tvxdfyyv5sl208xskz86xqoh",
                                "cloud-channel": "5-dev",
                                init: {
                                  id: "02",
                                  plugins: [
                                    "lists link image code table paste help wordcount "
                                  ],
                                  toolbar:
                                    "undo redo | code table | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor | link image ",
                                  images_upload_handler: _vm.upload_handler2,
                                  init_instance_callback:
                                    _vm.edit_init_callback2
                                }
                              },
                              model: {
                                value: _vm.TinyMCMcontent2,
                                callback: function($$v) {
                                  _vm.TinyMCMcontent2 = $$v
                                },
                                expression: "TinyMCMcontent2"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    )
                  ])
                ])
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _vm._m(16)
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "myMenuAddModal" } }, [
      _c(
        "div",
        {
          staticClass: "modal-dialog modal-dialog-centered modal-sm",
          staticStyle: { "min-width": "450px!important" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c("h4", { staticClass: "modal-title" }, [
                _vm._v(_vm._s(_vm.cpgtxt_createmenu))
              ]),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticStyle: {
                    display: "none",
                    padding: "5px 10px",
                    "border-radius": "20px"
                  },
                  attrs: { id: "sfi_alert" }
                },
                [_vm._v("Create Menu area.")]
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
                _c("div", { staticClass: "panel", attrs: { id: "tab1" } }, [
                  _c(
                    "div",
                    {
                      staticClass: "row",
                      staticStyle: { "padding-bottom": "10px" }
                    },
                    [
                      _vm._m(17),
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
                                    [
                                      _vm._v(
                                        _vm._s(_vm.cpgtxt_font) +
                                          _vm._s(_vm.cpgtxt_content)
                                      )
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _vm._m(18),
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
                                    [_vm._v(_vm._s(_vm.cpgtxt_link))]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _vm._m(19)
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
                          attrs: { id: "wwgm-model-add" }
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
    _vm._m(20)
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
          id: "webs-wesglobal-menus-footmenu-fav",
          "data-status": "off",
          "data-page-info": "Foot_webs-wesglobal-menus-footmenu"
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
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("div", { staticStyle: { display: "flex" } }, [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "wwgm_footbarleftcolorpicker_val",
            id: "wwgm_footbarleftcolorpicker_val",
            value: "#000000"
          }
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "m-r-15",
          staticStyle: {
            width: "70px",
            cursor: "pointer",
            background: "#000000"
          },
          attrs: { id: "wwgm_footbarleftcolorpicker", "data-color": "#000000" }
        }),
        _vm._v(" "),
        _c("div", { attrs: { id: "wwgm_footbarleftcolorpicker_value" } }, [
          _vm._v("#000000")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("input", {
        staticClass: "form-control",
        staticStyle: { width: "60%" },
        attrs: {
          type: "text",
          id: "wwgm_footbarleft_fonttitle",
          name: "wwgm_footbarleft_fonttitle",
          value: "Service"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c(
        "div",
        {
          staticClass: "m-r-15",
          staticStyle: { width: "200px" },
          attrs: { id: "wwgm_footbarleft_fontsize" }
        },
        [
          _c(
            "select",
            {
              staticClass: "form-control",
              attrs: {
                id: "wwgm_footbarleft_fontsize_s",
                name: "wwgm_footbarleft_fontsize_s"
              }
            },
            [
              _c("option", { attrs: { value: "11" } }, [_vm._v("11px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "12" } }, [_vm._v("12px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "14", selected: "selected" } }, [
                _vm._v("14px")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "16" } }, [_vm._v("16px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "18" } }, [_vm._v("18px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "20" } }, [_vm._v("20px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "22" } }, [_vm._v("22px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "24" } }, [_vm._v("24px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "26" } }, [_vm._v("26px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "28" } }, [_vm._v("28px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "30" } }, [_vm._v("30px")])
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "file",
          name: "wwgm_footbarleft_upload",
          id: "wwgm_footbarleft_upload",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("div", { staticStyle: { display: "flex" } }, [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "wwgm_footbarcentcolorpicker_val",
            id: "wwgm_footbarcentcolorpicker_val",
            value: "#000000"
          }
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "m-r-15",
          staticStyle: {
            width: "70px",
            cursor: "pointer",
            background: "#000000"
          },
          attrs: { id: "wwgm_footbarcentcolorpicker", "data-color": "#000000" }
        }),
        _vm._v(" "),
        _c("div", { attrs: { id: "wwgm_footbarcentcolorpicker_value" } }, [
          _vm._v("#000000")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("input", {
        staticClass: "form-control",
        staticStyle: { width: "60%" },
        attrs: {
          type: "text",
          id: "wwgm_footbarcent_fonttitle",
          name: "wwgm_footbarcent_fonttitle",
          value: "Service"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c(
        "div",
        {
          staticClass: "m-r-15",
          staticStyle: { width: "200px" },
          attrs: { id: "wwgm_footbarcent_fontsize" }
        },
        [
          _c(
            "select",
            {
              staticClass: "form-control",
              attrs: {
                id: "wwgm_footbarcent_fontsize_s",
                name: "wwgm_footbarcent_fontsize_s"
              }
            },
            [
              _c("option", { attrs: { value: "11" } }, [_vm._v("11px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "12" } }, [_vm._v("12px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "14", selected: "selected" } }, [
                _vm._v("14px")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "16" } }, [_vm._v("16px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "18" } }, [_vm._v("18px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "20" } }, [_vm._v("20px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "22" } }, [_vm._v("22px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "24" } }, [_vm._v("24px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "26" } }, [_vm._v("26px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "28" } }, [_vm._v("28px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "30" } }, [_vm._v("30px")])
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "file",
          name: "wwgm_footbarcent_upload",
          id: "wwgm_footbarcent_upload",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("div", { staticStyle: { display: "flex" } }, [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "wwgm_footbarrightcolorpicker_val",
            id: "wwgm_footbarrightcolorpicker_val",
            value: "#000000"
          }
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "m-r-15",
          staticStyle: {
            width: "70px",
            cursor: "pointer",
            background: "#000000"
          },
          attrs: { id: "wwgm_footbarrightcolorpicker", "data-color": "#000000" }
        }),
        _vm._v(" "),
        _c("div", { attrs: { id: "wwgm_footbarrightcolorpicker_value" } }, [
          _vm._v("#000000")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("input", {
        staticClass: "form-control",
        staticStyle: { width: "60%" },
        attrs: {
          type: "text",
          id: "wwgm_footbarright_fonttitle",
          name: "wwgm_footbarright_fonttitle",
          value: "Service"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c(
        "div",
        {
          staticClass: "m-r-15",
          staticStyle: { width: "200px" },
          attrs: { id: "wwgm_footbarright_fontsize" }
        },
        [
          _c(
            "select",
            {
              staticClass: "form-control",
              attrs: {
                id: "wwgm_footbarright_fontsize_s",
                name: "wwgm_footbarright_fontsize_s"
              }
            },
            [
              _c("option", { attrs: { value: "11" } }, [_vm._v("11px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "12" } }, [_vm._v("12px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "14", selected: "selected" } }, [
                _vm._v("14px")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "16" } }, [_vm._v("16px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "18" } }, [_vm._v("18px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "20" } }, [_vm._v("20px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "22" } }, [_vm._v("22px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "24" } }, [_vm._v("24px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "26" } }, [_vm._v("26px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "28" } }, [_vm._v("28px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "30" } }, [_vm._v("30px")])
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c(
        "div",
        {
          staticClass: "m-r-15",
          staticStyle: { width: "200px" },
          attrs: { id: "wwgm_footbarright_contenttype" }
        },
        [
          _c("select", {
            staticClass: "form-control",
            attrs: {
              id: "wwgm_footbarright_contenttype_s",
              name: "wwgm_footbarright_contenttype_s"
            }
          })
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c(
        "div",
        {
          staticClass: "m-r-15",
          staticStyle: { width: "200px" },
          attrs: { id: "wwgm_footbarright_orderby" }
        },
        [
          _c(
            "select",
            {
              staticClass: "form-control",
              attrs: {
                id: "wwgm_footbarright_orderby_s",
                name: "wwgm_footbarright_orderby_s"
              }
            },
            [
              _c("option", { attrs: { value: "asc", selected: "selected" } }, [
                _vm._v("ASC")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "desc" } }, [_vm._v("DESC")])
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c(
        "div",
        {
          staticClass: "m-r-15",
          staticStyle: { width: "200px" },
          attrs: { id: "wwgm_footbarright_number" }
        },
        [
          _c("input", {
            staticClass: "form-control",
            staticStyle: { width: "60%" },
            attrs: {
              type: "number",
              id: "wwgm_footbarright_number_i",
              name: "wwgm_footbarright_number_i",
              value: "",
              min: "1"
            }
          })
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "file",
          name: "wwgm_footbarright_upload",
          id: "wwgm_footbarright_upload",
          value: ""
        }
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
        _c("div", { staticClass: "input-group mb-3" }, [
          _c("input", {
            staticClass: "form-control",
            staticStyle: { width: "300px" },
            attrs: {
              type: "text",
              name: "cont[]",
              placeholder: "",
              "aria-label": "wwgm-menucont",
              id: "wwgm-menucont",
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
        _c("div", { staticClass: "input-group mb-3" }, [
          _c("input", {
            staticClass: "form-control",
            staticStyle: { width: "300px" },
            attrs: {
              type: "text",
              name: "link[]",
              placeholder: "",
              "aria-label": "wwgm-menulink",
              id: "wwgm-menulink",
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
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vuedir_pages_users_UsersOrgGlobalEmailManageApproval_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var vueOBJ;
var userid = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_1__.default.data.jsonparse(window.Laravel.userinfo).id;
var btntxt_edit = "";
var btntxt_change = "";
var btntxt_delete = "";
var btntxt_add = "";
var pgtxt_wantdeleteitem = "";
var pgtxt_default = "";
var pstart = 1;
var pnum = pstart;
var pcnt = 5;
var numg = 5;
var is_edit = false;
var edit_id = 0;
var checked_del_items = new Array();
var pgperm = {};

function pageNavigation(totalpage) {
  var nav_tag = '';
  nav_tag += '<nav aria-label="..." class="mb-4">';
  nav_tag += '<ul class="pagination pagination-rounded justify-content-center">';
  var disble = "";
  if (pstart == 1) disble = "disabled";
  var prenum = parseInt(pstart) - 1;
  nav_tag += '<li class="page-item  ' + disble + ' ">';
  nav_tag += '<a class="page-link" href="#"  id="ssmunavnum_' + prenum + '" >';
  nav_tag += '<i class="ti-angle-left"></i>';
  nav_tag += '</a>';
  nav_tag += '</li>';
  var pnum = pstart <= numg ? 1 : parseInt(pstart) - 1;

  for (var idx = 0; idx < numg; idx++) {
    var actv = "";
    var aria_current = '';
    var spantag = '';
    var oid = '';

    if (pnum == pstart) {
      actv = 'active';
      aria_current = 'aria-current="page"';
      spantag = '<span class="sr-only">(current)</span>';
    } else oid = "ssmunavnum_" + pnum;

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
  nav_tag += '<a class="page-link" id="ssmunavnum_' + nextnum + '" href="#">';
  nav_tag += '<i class="ti-angle-right"></i>';
  nav_tag += '</a>';
  nav_tag += '</li>';
  nav_tag += '</ul>';
  nav_tag += '</nav>';
  $('#ssmu_page_nav').html(nav_tag);
  /* events { */

  $('a[id^="ssmunavnum_"]').click(function () {
    var oid = $(this).attr("id");
    pstart = oid.split('_')[1];
    getEmailManageApprovalList();
  });
} /// category /////////////////////////////////////////////////////////////////////////////////////////////////////


function initEmailManagerPage(status) {
  if (!is_edit) pstart = 1;

  if (status == 0) {
    $('#applyapproval').css('display', 'block');
    $('#edit_emailmanage').css('display', 'none');
    $('#EmailManageAddLayout').css('display', 'block');
    $('#ssmu_page_nav').css('display', 'block');
  } else {
    $('#applyapproval').css('display', 'none');
    $('#edit_emailmanage').css('display', 'block');
    $('#EmailManageAddLayout').css('display', 'none');
    $('#ssmu_page_nav').css('display', 'none');
  }
}

function emailManageList(lists) {
  $('#uo_emailnamge_tbody').html('');
  var tags = '';

  for (var i = 0; i < lists.length; i++) {
    var id = lists[i].id;
    var title = lists[i].title;
    var content = lists[i].content;
    var date = lists[i].created_at;
    var split_date = date.split(' ');
    var dates = split_date[0].split('-');
    date = parseInt(dates[0]) + ' / ' + parseInt(dates[1]) + ' / ' + parseInt(dates[2]);
    var state = lists[i].state;
    tags += '<tr class="uoe_applyapproval_item-' + id + '" data-id="' + id + '" data-title="' + title + '" data-cont="' + content + '">';
    tags += '   <td></td>';
    tags += '   <td>' + title + '</td>';
    tags += '   <td>' + date + '</td>';
    if (state == 0) tags += '   <td>-</td>';else tags += '   <td class="data-ajax" data-ajax="pgtxt_default">' + pgtxt_default + '</td>';
    tags += '   <td>';
    tags += '       <div class="form-group m-b-0">';
    tags += '           <select class="my-border-radius-slt form-control float-right" id="uoe_applyapproval_table-' + id + '" name="uoe_applyapproval_table-' + id + '">';
    tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit" >' + btntxt_edit + '</option>';
    tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change" >' + btntxt_change + '</option>';
    tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete" >' + btntxt_delete + '</option>';
    tags += '               <option value="default" class="data-ajax" data-ajax="pgtxt_default" >' + pgtxt_default + '</option>';
    tags += '           </select>';
    tags += '       </div>';
    tags += '   </td>';
    tags += '</tr>';
  }

  $('#uo_emailnamge_tbody').html(tags);
  $('select[id^="uoe_applyapproval_table-"]').change(function () {
    var id = $(this).attr("id");
    edit_id = id.split('-')[1];
    var sel_val = $(this).val();

    if (sel_val == "change") {
      if (pgperm.write != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      var id = $('.uoe_applyapproval_item-' + edit_id).data("id");
      var title = $('.uoe_applyapproval_item-' + edit_id).data("title");
      var cont = $('.uoe_applyapproval_item-' + edit_id).data("cont");
      $('#emailmanage_edit_title').val(title);
      var edt0 = htmldecodejs(cont);
      vueOBJ.TinyMCMcontent0 = edt0;
      is_edit = true;
      initEmailManagerPage(1);
    } else if (sel_val == "delete") {
      if (pgperm["delete"] != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.Confirm('pgtxt_wantdeleteitem', function (val) {
        if (val) {
          deleteEmailManageApprovalList();
        }
      });
    } else if (sel_val == "default") {
      if (pgperm.write != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      setEmailManageApprovalState();
    }

    $(this).val('');
  });
}

function getEmailManageApprovalList() {
  $.ajax({
    url: 'admin.getEmailManageApprovalList',
    data: {
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var total = data.total;

        if (lists != "" && lists != null) {
          emailManageList(lists);
        } else {
          $('#uo_emailnamge_tbody').html('');
        }

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function setEmailManageApprovalState() {
  $.ajax({
    url: 'admin.setEmailManageApprovalState',
    data: {
      id: edit_id,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var total = data.total;

        if (lists != "" && lists != null) {
          emailManageList(lists);
        } else {
          $('#uo_emailnamge_tbody').html('');
        }

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function editEmailManageApprovalList() {
  var title = $('#emailmanage_edit_title').val();
  if (title == '' || title == null) return;
  $('#editcont0').val(vueOBJ.TinyMCMcontent0);
  var formData = new FormData($("#emailmanage_frm")[0]);
  formData.append('pstart', pstart);
  formData.append('pcnt', pcnt);
  formData.append('edit_id', edit_id);
  $.ajax({
    url: 'admin.editEmailManageApprovalList',
    data: formData,
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var total = data.total;

        if (lists != "" && lists != null) {
          emailManageList(lists);
        } else {
          $('#uo_emailnamge_tbody').html('');
        }

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
        initEmailManagerPage(0);
      } else {
        console.log(data.msg);
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

function saveEmailManageApprovalList() {
  var title = $('#emailmanage_edit_title').val();
  if (title == '' || title == null) return;
  $('#editcont0').val(vueOBJ.TinyMCMcontent0);
  var formData = new FormData($("#emailmanage_frm")[0]);
  formData.append('pstart', pstart);
  formData.append('pcnt', pcnt);
  $.ajax({
    url: 'admin.saveEmailManageApprovalList',
    data: formData,
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var total = data.total;

        if (lists != "" && lists != null) {
          emailManageList(lists);
        } else {
          $('#uo_emailnamge_tbody').html('');
        }

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
        initEmailManagerPage(0);
      } else {
        console.log(data.msg);
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

function deleteEmailManageApprovalList() {
  if (edit_id < 1) {
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('no select');
    return;
  }

  $.ajax({
    url: 'admin.deleteEmailManageApprovalList',
    data: {
      del_id: edit_id,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var total = data.total;

        if (lists != null && lists != '') {
          emailManageList(lists);
        } else {
          $('#uo_emailnamge_tbody').html('');
        }

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
} ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UsersOrgGlobalEmailManageApproval",
  components: {
    'editor0': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  data: function data() {
    return {
      pageid: 'users-organization-global-emailmanage-fav',
      btntxt_roles: '',
      btntxt_add: '',
      btntxt_edit: '',
      btntxt_change: '',
      btntxt_delete: '',
      btntxt_cancel: '',
      btntxt_savechange: '',
      pgtxt_list: '',
      pgtxt_title: '',
      pgtxt_date: '',
      pgtxt_setting: '',
      pgtxt_sua_State: '',
      pgtxt_option: '',
      pgtxt_default: '',
      pgtxt_wantdeleteitem: '',
      pgtxt_notpermission: '',
      pgtxt_notification: '',
      TinyMCMcontent0: ''
    };
  },
  computed: {
    // 계산된 getter
    cbtntxt_roles: function cbtntxt_roles() {
      return this.btntxt_roles;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_change: function cbtntxt_change() {
      return this.btntxt_change;
    },
    cbtntxt_delete: function cbtntxt_delete() {
      return this.btntxt_delete;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cbtntxt_cancel: function cbtntxt_cancel() {
      return this.btntxt_cancel;
    },
    cbtntxt_savechange: function cbtntxt_savechange() {
      return this.btntxt_savechange;
    },
    cpgtxt_list: function cpgtxt_list() {
      return this.pgtxt_list;
    },
    cpgtxt_title: function cpgtxt_title() {
      return this.pgtxt_title;
    },
    cpgtxt_date: function cpgtxt_date() {
      return this.pgtxt_date;
    },
    cpgtxt_setting: function cpgtxt_setting() {
      return this.pgtxt_setting;
    },
    cpgtxt_sua_State: function cpgtxt_sua_State() {
      return this.pgtxt_sua_State;
    },
    cpgtxt_option: function cpgtxt_option() {
      return this.pgtxt_option;
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
  created: function created() {},
  mounted: function mounted() {
    vueOBJ = this;
    pgperm = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_1__.default.data.getPagePermission(this.$store.state.permission, this.pageid);
    this.initPage();
  },
  methods: {
    initPage: function initPage() {
      btntxt_add = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_add');
      btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
      btntxt_change = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
      btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
      pgtxt_wantdeleteitem = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_wantdeleteitem');
      pgtxt_default = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_default');
      is_edit = false;
      getEmailManageApprovalList();
      initEmailManagerPage(0);
    },
    editorclick0: function editorclick0() {//$('.tox.tox-tinymce').css('height','350px');
    },
    editorblue0: function editorblue0() {//if(tabstatus!==3)
      // $('.tox.tox-tinymce').css('height','150px');
    },
    edit_init_callback0: function edit_init_callback0() {
      $('.tox-statusbar').css('display', 'none');
    },
    upload_handler0: function upload_handler0(blobInfo, success, failure, progress) {
      if (pgperm.write != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('pgtxt_notpermission');
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
    addEmailManage_Btn: function addEmailManage_Btn() {
      if (pgperm.create != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__.default.data.showAlert('pgtxt_notpermission');
        return;
      }

      is_edit = false;
      vueOBJ.TinyMCMcontent0 = '';
      $('#editcont0').val('');
      $('#emailmanage_edit_title').val('');
      initEmailManagerPage(1);
    },
    SaveEmailManageContent: function SaveEmailManageContent() {
      if (!is_edit) saveEmailManageApprovalList();else editEmailManageApprovalList();
    },
    GotoEmailManagelist: function GotoEmailManagelist() {
      initEmailManagerPage(0);
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.tox.tox-tinymce{\n    border-radius: 20px;\n    width: 95% !important;\n    height: 300px;\n    min-height: 300px !important;\n    margin-left: 40px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageApproval_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersOrgGlobalEmailManageApproval.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageApproval_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageApproval_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue":
/*!****************************************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersOrgGlobalEmailManageApproval_vue_vue_type_template_id_073b5c43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersOrgGlobalEmailManageApproval.vue?vue&type=template&id=073b5c43& */ "./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=template&id=073b5c43&");
/* harmony import */ var _UsersOrgGlobalEmailManageApproval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersOrgGlobalEmailManageApproval.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=script&lang=js&");
/* harmony import */ var _UsersOrgGlobalEmailManageApproval_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UsersOrgGlobalEmailManageApproval.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _UsersOrgGlobalEmailManageApproval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UsersOrgGlobalEmailManageApproval_vue_vue_type_template_id_073b5c43___WEBPACK_IMPORTED_MODULE_0__.render,
  _UsersOrgGlobalEmailManageApproval_vue_vue_type_template_id_073b5c43___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageApproval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersOrgGlobalEmailManageApproval.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageApproval_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageApproval_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersOrgGlobalEmailManageApproval.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=style&index=0&lang=css&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageApproval_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=template&id=073b5c43&":
/*!***********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=template&id=073b5c43& ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageApproval_vue_vue_type_template_id_073b5c43___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageApproval_vue_vue_type_template_id_073b5c43___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersOrgGlobalEmailManageApproval_vue_vue_type_template_id_073b5c43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersOrgGlobalEmailManageApproval.vue?vue&type=template&id=073b5c43& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=template&id=073b5c43&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=template&id=073b5c43&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/users/UsersOrgGlobalEmailManageApproval.vue?vue&type=template&id=073b5c43& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "col-md-12", attrs: { id: "EmailManageAddLayout" } },
        [
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
                      return _vm.addEmailManage_Btn($event)
                    }
                  }
                },
                [_c("span", [_vm._v(" " + _vm._s(_vm.cbtntxt_add) + " ")])]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12 page_roles_content_list active",
          attrs: { id: "applyapproval" }
        },
        [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              {
                staticClass: "col-md-4",
                staticStyle: { margin: "20px 0px 0px 10px" }
              },
              [
                _c("h6", { staticClass: "card-title m-b-20" }, [
                  _vm._v(_vm._s(_vm.cpgtxt_list))
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", [
              _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  {
                    staticClass: "table table-lg  no-footer",
                    attrs: {
                      id: "sum-department-list",
                      role: "grid",
                      "aria-describedby": "user-list_info"
                    }
                  },
                  [
                    _c("thead", [
                      _c("tr", { attrs: { role: "row" } }, [
                        _c("th", { staticStyle: { width: "40px!important" } }),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.cpgtxt_title))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.cpgtxt_date))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.cpgtxt_sua_State))]),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticStyle: {
                              "text-align": "right",
                              "padding-right": "40px"
                            }
                          },
                          [_vm._v(_vm._s(_vm.cpgtxt_option))]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", { attrs: { id: "uo_emailnamge_tbody" } })
                  ]
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12 page_roles_content_list active",
          attrs: { id: "edit_emailmanage" }
        },
        [
          _c(
            "form",
            {
              attrs: {
                method: "post",
                enctype: "multipart/form-data",
                name: "emailmanage_frm",
                id: "emailmanage_frm"
              }
            },
            [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-md-4",
                    staticStyle: { margin: "20px 0px 0px 10px" }
                  },
                  [
                    _c("h6", { staticClass: "card-title m-b-20" }, [
                      _vm._v(_vm._s(_vm.cpgtxt_setting))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-12" }, [
                  _c("div", { staticClass: "d-flex" }, [
                    _c(
                      "div",
                      {
                        staticClass: "col-md-1 col-sm-1",
                        staticStyle: {
                          "line-height": "40px",
                          "margin-left": "30px"
                        }
                      },
                      [_c("span", [_vm._v(_vm._s(_vm.cpgtxt_title))])]
                    ),
                    _vm._v(" "),
                    _vm._m(0)
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "d-flex",
                      staticStyle: { margin: "2rem 0" }
                    },
                    [
                      _c("textarea", {
                        staticStyle: { display: "none" },
                        attrs: { name: "editcont0", id: "editcont0", value: "" }
                      }),
                      _vm._v(" "),
                      _c("editor0", {
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
                            images_upload_handler: _vm.upload_handler0,
                            init_instance_callback: _vm.edit_init_callback0
                          }
                        },
                        on: {
                          onClick: _vm.editorclick0,
                          onBlur: _vm.editorblue0
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
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "row justify-content-end",
                  staticStyle: { "padding-bottom": "1.5rem" }
                },
                [
                  _c("div", { staticClass: "col-md-4 col-sm-4 text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info-theme active savebtn",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.SaveEmailManageContent($event)
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.cbtntxt_savechange))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-2" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info-theme",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.GotoEmailManagelist($event)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.cbtntxt_cancel) +
                            "\n                        "
                        )
                      ]
                    )
                  ])
                ]
              )
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "text",
          id: "emailmanage_edit_title",
          name: "emailmanage_edit_title"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12", attrs: { id: "ssmu_page_nav" } })
    ])
  }
]
render._withStripped = true



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
var contenttypetypecheckboxid = '';
var pgtxt_selectlanguagesave = "";
var pgtxt_selectlanguage = "";
var pcnt = 5;
var pgperm = {};
var langOBJS = [];
var stored_langs = '';
var tabstatus = 0;
var pagename_default = '';
var pageurl_default = '';
var pagetype_default = 0;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function checkpagename(pgname, chid) {
  var result = false;
  $.ajax({
    url: 'admin.wwpc_checkpagename',
    data: {
      pgname: pgname,
      id: chid
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg === "ok") {
        if (data.cnt > 0) {
          result = true;
        } else {
          result = false;
        }
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
  return result;
}

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

function init_list_nav_cnt() {
  $('#wwgpp_list_nav_cnt').change(function () {
    var val = $(this).val();
    tabstatus = 0;
    pstart = 1;
    getContentList();
  });
  $('#pagesetting_url').keyup(function (e) {
    var change_url = $('#pagesetting_url').val();

    for (var i = 0; i < langOBJS.length; i++) {
      langOBJS[i].url = change_url;
    }
  });
}

function initContentListTranslatelist() {
  $('span.page1_translate_span').unbind('click');
  $('span.page1_translate_span').click(function (e) {
    $('span.page1_translate_span').removeClass('active');
    $(this).addClass('active');
    var dcont = $(this).data('cont');

    if (dcont.split('-').length > 2) {
      var prelang = transedlang;
      transedlang = dcont.split('-')[0] + '-' + dcont.split('-')[1];
      if (tabstatus === 2) // || tabstatus===3
        changelangOBJActive(transedlang, prelang);
      refreshPagesettingType();
    }
  });
  $('span.span_langitem_controller').unbind('click');
  $('span.span_langitem_controller').click(function (e) {
    var dcont = $(this).data('cont');
    if (dcont.split('-').length < 1) return;
    var iso = dcont.split('-')[0];
    var dialcode = dcont.split('-')[1];
    var delid = iso + '-' + dialcode;

    for (var i = 0; i < stored_langs.length; i++) {
      var objj = stored_langs[i];
      var j_iso = objj.iso;
      var j_dialcode = objj.dialcode;

      if (iso === j_iso && dialcode === j_dialcode) {
        objj.status = 'disable';
        stored_langs[i] = objj;
      }
    }

    if (tabstatus === 2) changeLangOBJADDDEL('del', delid);
    $('#' + delid).remove();
    $('span.page1_translate_span').removeClass('active');
    var activelangname = '';

    for (var ii = stored_langs.length - 1; ii > -1; ii--) {
      var objj = stored_langs[ii];
      var j_status = objj.status;
      var tlng = objj.iso + '-' + objj.dialcode;

      if (j_status === 'enable') {
        transedlang = tlng; //active that last language.

        activelangname = objj.name;
        activelangname = activelangname.toLowerCase();
        break;
      }
    }

    $('#' + transedlang + ' span.page1_translate_span').addClass('active');
    if (tabstatus === 2) // || tabstatus===3
      changelangOBJNewActive(transedlang, activelangname);
    refreshPagesettingType();
  });
}

function getContentList() {
  var btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
  var btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
  var btntxt_change = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
  var pgctl_activie = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgctl_activie');
  var pgctl_block = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgctl_block');
  var scont = $.trim($('#wwgpp_list_s_c').val());
  var ctypeid = $('#wwgpp_list_contenttype').val();
  var pcnt = $('#wwgpp_list_nav_cnt').val();
  var transplit = $('#wwgpp_lang_list').val();
  var seachlang = '';

  if (transplit !== null && transplit !== '' && transplit.split('-').length > 1) {
    transedlang = transplit.split('-')[0] + '-' + transplit.split('-')[1];
    seachlang = transedlang;
  }

  $.ajax({
    url: 'admin.getContentList',
    data: {
      lang: seachlang,
      cont: scont,
      start: pstart,
      ctypeid: ctypeid,
      cnt: pcnt
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      var total = data.total;

      if (total <= 0) {
        $('#wwgpp_list_container').html('');
        $('#wwgpc_pagelist_nav').html('');
        return;
      }

      if (data.msg === "ok") {
        var list = data.list;
        pstart = data.start;
        var totalpage = data.totalpage;

        if (list instanceof Array) {
          var tags = '';

          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = item.id;
            var url = '-';
            if (item.url !== null && item.url !== '') url = decodeURIComponent(item.url);
            var pagename = '-';
            if (item.pagename !== null && item.pagename !== '') pagename = item.pagename;
            var title = '-';
            if (item.title !== null && item.title !== '') title = item.title;
            var author = '-';
            if (item.author !== null && item.author !== '') author = item.author;
            var created_at = '-';
            if (item.created_at !== null && item.created_at !== '') created_at = item.created_at;
            var status = '-';
            if (item.status === 1) status = pgctl_activie;else status = pgctl_block;
            tags += '<tr role="row" class="odd" id="pglistitem_' + id + '">';
            tags += '<td style="text-align:center">';
            tags += '<input type="checkbox" name="wwgpc_contentlist_ck" data-id="' + id + '">';
            tags += '</td>';
            tags += '<td>';
            tags += pagename;
            tags += '</td>';
            tags += '<td>';
            tags += title;
            tags += '</td>';
            tags += '<td>' + item.contenttype + '</td>';
            tags += '<td>' + author + '</td>';
            tags += '<td>' + created_at + '</td>';
            tags += '<td id="0">' + url + '</td>';
            if (item.status === 1) tags += '<td class="data-ajax" data-ajax="pgctl_activie">' + pgctl_activie + '</td>';else tags += '<td class="data-ajax" data-ajax="pgctl_block">' + pgctl_block + '</td>';
            tags += '<td class="th-rp-20">';
            tags += '<div class="form-group m-b-0">';
            tags += '<select class="my-border-radius-slt form-control float-right" data-pagename="' + pagename + '" data-url="' + url + '" data-trans="' + item.trans + '" data-id="' + id + '" id="wwgpp_plist_ctrl_' + id + '" name="wwgpp_plist_ctrl_' + id + '">';
            tags += '<option class="data-ajax" data-ajax="btntxt_edit" value="">' + btntxt_edit + '</option>';
            tags += '<option class="data-ajax" data-ajax="btntxt_change" value="change">' + btntxt_change + '</option>';
            tags += '<option class="data-ajax" data-ajax="pgctl_activie" value="active">' + pgctl_activie + '</option>';
            tags += '<option class="data-ajax" data-ajax="pgctl_block" value="block">' + pgctl_block + '</option>';
            tags += '<option class="data-ajax" data-ajax="btntxt_delete" value="del">' + btntxt_delete + '</option>';
            tags += '</select>';
            tags += '</div>';
            tags += '</td>';
            tags += '</tr>';
          }

          $('#wwgpp_list_container').html(tags);
          var nav_tag = '';
          nav_tag += '<nav aria-label="..." class="mb-4">';
          nav_tag += '<ul class="pagination pagination-rounded justify-content-center">';
          var disble = "";
          if (pstart == 1) disble = "disabled";
          var prenum = parseInt(pstart) - 1;
          nav_tag += '<li class="page-item  ' + disble + ' ">';
          nav_tag += '<a class="page-link"  href="#"  data-num="sflunavnum_' + prenum + '" >';
          nav_tag += '<i class="ti-angle-left"></i>';
          nav_tag += '</a>';
          nav_tag += '</li>'; //mjs_module.data.showAlert(totalpage);

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
            } else oid = "sflunavnum_" + pnum;

            nav_tag += '<li class="page-item ' + actv + '"  ' + aria_current + '>';
            nav_tag += '<a class="page-link"  data-num="' + oid + '"  href="#" >' + pnum + '  ' + spantag + '</a>';
            nav_tag += '</li>';
            if (pnum == totalpage) break;
            pnum = pnum + 1;
          }

          var nextnum = parseInt(pstart) + 1;
          var edisble = "";
          if (pstart == totalpage) edisble = "disabled";
          nav_tag += '<li class="page-item ' + edisble + ' ">';
          nav_tag += '<a class="page-link" data-lang="' + transedlang + '"  data-num="sflunavnum_' + nextnum + '" href="#">';
          nav_tag += '<i class="ti-angle-right"></i>';
          nav_tag += '</a>';
          nav_tag += '</li>';
          nav_tag += '</ul>';
          nav_tag += '</nav>';
          $('#wwgpc_pagelist_nav').html(nav_tag);
          $('a[data-num^="sflunavnum_"]').click(function () {
            var oid = $(this).attr("data-num");
            pstart = oid.split('_')[1];
            getContentList();
          });
          $('select[id^="wwgpp_plist_ctrl_"]').change(function () {
            var value = $(this).val();
            if (value == '') return;
            var id = $(this).attr('data-id');
            var lang = $(this).attr('data-trans');
            var pagename = $(this).data('pagename');
            var url = $(this).data('url');

            if (value === 'change') {
              if (pgperm.write != 1) {
                _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden('pgtxt_notpermission');
                return;
              }

              if (pagename === undefined || pagename === null || pagename === '') {
                _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden('Error pagename');
                return;
              }

              $.ajax({
                method: "POST",
                url: "admin.changePageSettingitem",
                data: {
                  id: id,
                  cond: value,
                  lang: lang,
                  pagename: pagename,
                  url: url
                },
                success: function success(response) {
                  if (response.msg === "ok") {
                    if (value === "change") {
                      tabstatus = 3;
                      transedlang = lang;
                      ContentPageChange(response.pagetype, response.curlang, response.items);
                    } else {
                      $('#pglistitem_' + id).remove();
                    }
                  } else {
                    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden('Error get one item from db!');
                  }
                },
                error: function error(jqXHR, errdata, errorThrown) {
                  console.log(errdata);
                }
              });
            } else if (value === 'del') {
              if (pgperm["delete"] != 1) {
                _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden('pgtxt_notpermission');
                return;
              }

              _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.Confirm('pgtxt_wantdeleteitem', function (val) {
                if (val) {
                  $.ajax({
                    method: "POST",
                    url: "admin.changePageSettingitem",
                    data: {
                      id: id,
                      cond: value,
                      lang: lang
                    },
                    success: function success(response) {
                      if (response.msg === "ok") {
                        if (value === "change") {
                          $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
                          $('.col-md-12.page_slider_content_list').removeClass('active');
                          $('#pagesetting').addClass('active');
                          $('#pageContAdd_btn_container').css('display', 'none');
                          $('#publick_contaniner').css('display', 'none');
                          $('input[name="pgsettranedLang"]').val(lang);
                          $('input[name="pgsetstate"]').val('change');
                          $('input[name="pgsetid"]').val(id);
                          tabstatus = 3;
                          ContentPageChange(response.pagetype, response.curlang, response.items);
                        } else {
                          $('#pglistitem_' + id).remove();
                        }
                      } else {
                        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden('Error get one item from db!');
                      }
                    },
                    error: function error(jqXHR, errdata, errorThrown) {
                      console.log(errdata);
                    }
                  });
                }
              });
            } else if (value === 'active' || value === 'block') {
              if (pgperm.write != 1) {
                _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden('pgtxt_notpermission');
                return;
              }

              if (pagename === undefined || pagename === null || pagename === '') {
                _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden('Error pagename');
                return;
              }

              $.ajax({
                method: "POST",
                url: "admin.changePageSettingitem",
                data: {
                  id: id,
                  cond: value,
                  lang: lang
                },
                success: function success(response) {
                  if (response.msg === "ok") {
                    getContentList();
                  } else {
                    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden('Error get one item from db!');
                  }
                },
                error: function error(jqXHR, errdata, errorThrown) {
                  console.log(errdata);
                }
              });
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

function ContentPageChangeTwo(ppagetype, curlangname, pitem) {
  tabstatus = 3;
  var preitem = null;

  for (var j = 0; j < langOBJS.length; j++) {
    var item = langOBJS[j];

    if (pitem !== null && pitem !== '') {
      if (pitem.trans === item.langid && item.status === 'enable') {
        item.active = 'active';
        langOBJS[j] = item;
        if (item.data_init === 1) preitem = item;
        break;
      }
    } else {
      if (transedlang === item.langid && item.status === 'enable') {
        item.active = 'active';
        langOBJS[j] = item;
        if (item.data_init === 1) preitem = item;
        break;
      }
    }
  }

  if (preitem !== null) {
    if (preitem.pagename !== null && preitem.pagename !== '') {
      $('#pagesetting_name').val(preitem.pagename).attr('disabled', true); //read only, can't change
    } else {
      if (pagename_default !== null && pagename_default !== '') $('#pagesetting_name').val(pagename_default).attr('disabled', true); //read only, can't change
      else {
          pagename_default = createRandompageName();
          $('#pagesetting_name').val(pagename_default).attr('disabled', true); //read only, can't change
        }
    }

    $('#pagesetting_title').val(preitem.title);
    $('#pagesetting_author').val(preitem.author);
    $('input[name="pgsettranedLang"]').val(preitem.trans);
    $('input[name="pgsetstate"]').val('change'); // $('input[name="pgsetid"]').val(pitem.id);

    $('#pagesetting_datapicker').datepicker({
      dateFormat: 'yy/mm/dd'
    });
    var d = new Date();
    var yy = d.getFullYear();
    var mm = d.getMonth() + 1;
    var dd = d.getDate();

    if (preitem.time.split('-').length > 2) {
      yy = preitem.time.split('-')[0];
      mm = preitem.time.split('-')[1];
      dd = preitem.time.split('-')[2];
      dd = dd.substr(0, 2);
    } else if (preitem.time.split('/').length > 2) {
      yy = preitem.time.split('/')[0];
      mm = preitem.time.split('/')[1];
      dd = preitem.time.split('/')[2];
      dd = dd.substr(0, 2);
    }

    $('#pagesetting_datapicker').val(yy + '/' + mm + '/' + dd);
    var tag = '';

    for (var i = 0; i < ppagetype.length; i++) {
      var oneobj = ppagetype[i];
      var name = oneobj.name;
      var id = oneobj.id;
      var basic = '';
      if (curlangname === 'english') basic = name;else basic = oneobj.english;
      var seleted = '';

      if (parseInt(pagetype_default) !== 0) {
        if (id === parseInt(pagetype_default)) seleted = 'selected="selected"';
      } else if (id === pitem.pagetypeId) {
        seleted = 'selected="selected"';
      }

      tag += '<option value="' + id + '" ' + seleted + ' data-basic="' + basic + '">' + name + '</option>';
    }

    $('#pagesetting_pgtype').html(tag);
    $('#pagesetting_pgtype').change(function () {
      pagetype_default = parseInt($(this).val());
    });

    if (preitem.url !== undefined && preitem.url !== null && preitem.url !== '') {
      var url = decodeURIComponent(preitem.url);
      $('#pagesetting_url').val(url); //.attr('disabled', true);

      $('#pagesetting_url').attr('data-url', url);
    } else {
      $('#pagesetting_url').val(''); //.attr('disabled', false);

      $('#pagesetting_url').attr('data-url', '');
    }

    if (preitem.edit !== undefined && preitem.edit !== null && preitem.edit !== '') {
      var edt0 = htmldecodejs(preitem.edit);
      $('#editcont0').val(edt0);
      vueOBJ.TinyMCMcontent0 = edt0;
    } else vueOBJ.TinyMCMcontent0 = '';

    if (preitem.url_invisible === 0) $('#url_invisible').prop('checked', false);else $('#url_invisible').prop('checked', true);
    /*  if(url!==null && url!==''){
          $('#url_invisible').attr('disabled', true);
      }*/

    if (preitem.author_invisible === 0) $('#author_invisible').prop('checked', false);else $('#author_invisible').prop('checked', true);
    if (preitem.contenttype_invisible === 0) $('#type_invisible').prop('checked', false);else $('#type_invisible').prop('checked', true);
    if (preitem.time_invisible === 0) $('#time_invisible').prop('checked', false);else $('#time_invisible').prop('checked', true);
  } else {
    if (pitem !== undefined && pitem !== null && pitem !== '') {
      if (pitem.pagename !== null && pitem.pagename !== '') {
        $('#pagesetting_name').val(pitem.pagename).attr('disabled', true); //read only, can't change
      } else {
        if (pagename_default !== null && pagename_default !== '') $('#pagesetting_name').val(pagename_default).attr('disabled', true); //read only, can't change
        else {
            pagename_default = createRandompageName();
            $('#pagesetting_name').val(pagename_default).attr('disabled', true); //read only, can't change
          }
      }

      $('#pagesetting_title').val(pitem.title);
      $('#pagesetting_author').val(pitem.author);
      $('input[name="pgsettranedLang"]').val(pitem.trans);
      $('input[name="pgsetstate"]').val('change');
      $('input[name="pgsetid"]').val(pitem.id);
      $('#pagesetting_datapicker').datepicker({
        dateFormat: 'yy/mm/dd'
      });
      var d = new Date();
      var yy = d.getFullYear();
      var mm = d.getMonth() + 1;
      var dd = d.getDate();

      if (pitem.created_at !== null && pitem.created_at !== '') {
        if (pitem.created_at.split('-').length > 2) {
          yy = pitem.created_at.split('-')[0];
          mm = pitem.created_at.split('-')[1];
          dd = pitem.created_at.split('-')[2];
          dd = dd.substr(0, 2);
        } else if (pitem.created_at.split('/').length > 2) {
          yy = pitem.created_at.split('/')[0];
          mm = pitem.created_at.split('/')[1];
          dd = pitem.created_at.split('/')[2];
          dd = dd.substr(0, 2);
        }

        $('#pagesetting_datapicker').val(yy + '/' + mm + '/' + dd);
      }

      var tag = '';

      for (var i = 0; i < ppagetype.length; i++) {
        var oneobj = ppagetype[i];
        var name = oneobj.name;
        var id = oneobj.id;
        var basic = '';
        if (curlangname === 'english') basic = name;else basic = oneobj.english;
        var seleted = '';
        if (parseInt(pagetype_default) !== 0 && id === parseInt(pagetype_default)) seleted = 'selected="selected"';else if (id === pitem.pagetypeId) {
          seleted = 'selected="selected"';
        }
        tag += '<option value="' + id + '" ' + seleted + ' data-basic="' + basic + '">' + name + '</option>';
      }

      $('#pagesetting_pgtype').html(tag);
      $('#pagesetting_pgtype').change(function () {
        pagetype_default = parseInt($(this).val());
      });

      if (pitem.url !== undefined && pitem.url !== null && pitem.url !== '') {
        var url = decodeURIComponent(pitem.url);

        for (var j = 0; j < langOBJS.length; j++) {
          var item = langOBJS[j];

          if (pitem.trans === item.langid) {
            if (url !== item.url) url = item.url;
            break;
          }
        }

        $('#pagesetting_url').val(url); //.attr('disabled', true);

        $('#pagesetting_url').attr('data-url', url);
      } else {
        $('#pagesetting_url').val(''); //.attr('disabled', false);

        $('#pagesetting_url').attr('data-url', '');
      }

      if (pitem.content !== undefined && pitem.content !== null && pitem.content !== '') {
        var edt0 = htmldecodejs(pitem.content);
        vueOBJ.TinyMCMcontent0 = edt0;
      } else vueOBJ.TinyMCMcontent0 = '';

      if (pitem.url_state == 0) $('#url_invisible').prop('checked', false);else $('#url_invisible').prop('checked', true);
      /* if(url!==null && url!==''){
           $('#url_invisible').attr('disabled', true);
       }*/

      if (pitem.auth_state == 0) $('#author_invisible').prop('checked', false);else $('#author_invisible').prop('checked', true);
      if (pitem.type_state == 0) $('#type_invisible').prop('checked', false);else $('#type_invisible').prop('checked', true);
      if (pitem.date_state == 0) $('#time_invisible').prop('checked', false);else $('#time_invisible').prop('checked', true);
      var dialCode = pitem.trans.split('-')[1];
    } else {
      if (pagename_default !== '') $('#pagesetting_name').val(pagename_default).attr('disabled', true);else {
        pagename_default = createRandompageName();
        $('#pagesetting_name').val(pagename_default).attr('disabled', true);
      }
      $('#pagesetting_title').val('');
      $('#pagesetting_author').val(vueOBJ.username);
      $('input[name="pgsettranedLang"]').val('');
      $('input[name="pgsetstate"]').val('change');
      $('input[name="pgsetid"]').val('');
      $('#pagesetting_datapicker').datepicker({
        dateFormat: 'yy/mm/dd'
      });
      $('#pagesetting_url').val('');
      $('#pagesetting_url').attr('data-url', '');
      vueOBJ.TinyMCMcontent0 = '';
      $('#url_invisible').prop('checked', false);
      $('#author_invisible').prop('checked', false);
      $('#type_invisible').prop('checked', false);
      $('#time_invisible').prop('checked', false);
      var tag = '';
      $('#pagesetting_pgtype').html('');
      if (ppagetype !== undefined && ppagetype !== null && ppagetype !== '') for (var i = 0; i < ppagetype.length; i++) {
        var oneobj = ppagetype[i];
        var name = oneobj.name;
        var id = oneobj.id;
        var basic = '';
        if (curlangname === 'english') basic = name;else basic = oneobj.english;
        var seleted = '';
        if (parseInt(pagetype_default) !== 0 && id === parseInt(pagetype_default)) seleted = 'selected="selected"';
        tag += '<option value="' + id + '" ' + seleted + ' data-basic="' + basic + '">' + name + '</option>';
      }
      $('#pagesetting_pgtype').html(tag);
      $('#pagesetting_pgtype').change(function () {
        pagetype_default = parseInt($(this).val());
      });
      if (pagename_default !== '') $('#url_invisible').attr('checked', false);
      $('input[id="url_invisible"]').click(function () {
        if ($(this).is(':checked')) {
          var sel = document.getElementById('pagesetting_pgtype');

          if (sel.options.length > 0) {
            var opobj = sel.options[sel.selectedIndex];
            var pgtype = $(opobj).data('basic');
            var url = '';
            pgtype = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.js_trim(pgtype);
            if (pgtype !== undefined && pgtype !== null && pgtype !== '') url += '/' + pgtype;
            if (pagename_default !== '') url += '/' + pagename_default;else url += '/WESNode-';
            $('#pagesetting_url').val(url);
          }
        } else {
          $('#pagesetting_url').val('');
        }
      });
    } //pitem === null

  }
}

function savePreContentpageIntolangOBJ(preactiveLang) {
  for (var i = 0; i < langOBJS.length; i++) {
    if (langOBJS[i].langid === preactiveLang) {
      langOBJS[i].pagename = $('#pagesetting_name').val();
      langOBJS[i].title = $('#pagesetting_title').val();
      langOBJS[i].contenttype = $('#pagesetting_pgtype').val();
      langOBJS[i].contenttype_invisible = $('#type_invisible').is(':checked') ? 1 : 0;
      langOBJS[i].url = $('#pagesetting_url').val();
      langOBJS[i].url_invisible = $('#url_invisible').is(':checked') ? 1 : 0;
      langOBJS[i].author = $('#pagesetting_author').val();
      langOBJS[i].author_invisible = $('#author_invisible').is(':checked') ? 1 : 0;
      langOBJS[i].time = $('#pagesetting_datapicker').val();
      langOBJS[i].time_invisible = $('#time_invisible').is(':checked') ? 1 : 0;
      langOBJS[i].edit = vueOBJ.TinyMCMcontent0;
      langOBJS[i].active = '';
      langOBJS[i].data_init = 1; // break;
    } else langOBJS[i].active = '';
  }
}

function ContentPageChangeTwoLanguageEventHandler() {
  $('span.page1_translate_span').unbind('click');
  $('span.page1_translate_span').click(function (e) {
    if (tabstatus === 3) savePreContentpageIntolangOBJ(transedlang);
    $('span.page1_translate_span').removeClass('active');
    $(this).addClass('active');
    var dcont = $(this).data('cont');

    if (dcont.split('-').length > 2) {
      transedlang = dcont.split('-')[0] + '-' + dcont.split('-')[1];

      if (pagename_default !== null && pagename_default !== '') {
        $.ajax({
          url: 'admin.getChangeContentASLang',
          type: 'POST',
          data: {
            lang: transedlang,
            pagename: pagename_default
          },
          async: true,
          success: function success(data) {
            if (data.msg === 'ok') {
              ContentPageChangeTwo(data.pagetype, data.curlang, data.items);
            }
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          }
        });
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden('Error not pagename');
    }
  });
  $('span.span_langitem_controller').unbind('click');
  $('span.span_langitem_controller').click(function (e) {
    var dcont = $(this).data('cont');
    if (dcont.split('-').length < 2) return;
    var spanid = dcont.split('-')[0] + '-' + dcont.split('-')[1];
    $('#' + spanid).remove();
    var isrefresh = false;

    for (var i = 0; i < langOBJS.length; i++) {
      if (langOBJS[i].langid === spanid) {
        langOBJS[i].status = 'disable';

        if (langOBJS[i].active === 'active') {
          isrefresh = true;
          langOBJS[i].active = '';
        }
      }
    }

    if (isrefresh) {
      for (var ii = langOBJS.length - 1; ii > -1; ii--) {
        if (langOBJS[ii].status === 'enable') {
          transedlang = langOBJS[ii].langid; //active that last language.

          break;
        }
      }

      $('span.page1_translate_span').removeClass('active');
      $('#' + transedlang + ' span.page1_translate_span').addClass('active');

      if (isrefresh && pagename_default !== null && pagename_default !== '') {
        $.ajax({
          url: 'admin.getChangeContentASLang',
          type: 'POST',
          data: {
            lang: transedlang,
            pagename: pagename_default
          },
          async: true,
          success: function success(data) {
            if (data.msg === 'ok') {
              ContentPageChangeTwo(data.pagetype, data.curlang, data.items);
            }
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          }
        });
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden('Error not pagename');
    }
  });
}

function createRandompageName() {
  var d = new Date(); //var ymd=mjs_module.data.convertNumToStr(d.getFullYear())+mjs_module.data.convertNumToStr((d.getMonth()+1))+mjs_module.data.convertNumToStr((d.getDate()));

  var month = d.getMonth() + 1;
  if (month < 10) month = '0' + month;
  var day = d.getDate();
  if (day < 10) day = '0' + day;
  var ymd = d.getFullYear() + '' + month + '' + day;
  var hours = d.getHours();
  if (hours < 10) hours = '0' + hours;
  var min = d.getMinutes();
  if (min < 10) min = '0' + min;
  var sec = d.getSeconds();
  if (sec < 10) sec = '0' + sec;
  var hms = '-' + hours + '' + min + '' + sec;
  var rpagename = 'WESNode-' + ymd + hms;
  return rpagename;
}

function ContentPageChange(ppagetype, curlangname, pitem) {
  pagename_default = '';
  pagetype_default = 0;
  pageurl_default = '';

  for (var ii = 0; ii < stored_langs.length; ii++) {
    stored_langs[ii].status = 'enable';
  }

  $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
  $('.col-md-12.page_slider_content_list').removeClass('active');
  $('#pagesetting').addClass('active');
  $('#pageContAdd_btn_container').css('display', 'none'); //none add btn;

  $('#publick_contaniner').css('display', 'block');
  $('#datalist-container').css('display', 'none'); //$('.page1_translate_div.adddisablelang').css('display','none');//add language
  //$('.page1_translate_bar > .page1_translate_text, #translanglist').css('display','none');

  if (pitem.pagename !== null && pitem.pagename !== '') {
    pagename_default = pitem.pagename;
    $('#pagesetting_name').val(pagename_default).attr('disabled', true); //read only, can't change
  } else {
    if (pagename_default !== null && pagename_default !== '') $('#pagesetting_name').val(pagename_default).attr('disabled', true);else {
      pagename_default = createRandompageName();
      $('#pagesetting_name').val(pagename_default).attr('disabled', true);
    }
  }

  $('#pagesetting_title').val(pitem.title);
  $('#pagesetting_author').val(pitem.author);
  $('input[name="pgsettranedLang"]').val(pitem.trans);
  $('input[name="pgsetstate"]').val('change');
  $('input[name="pgsetid"]').val(pitem.id);
  var url = decodeURIComponent(pitem.url);

  if (pitem.url !== undefined && pitem.url !== null && pitem.url !== '') {
    pageurl_default = url;
    $('#pagesetting_url').val(url); //.attr('disabled', true);

    $('#pagesetting_url').attr('data-url', url);
  } else {
    pageurl_default = '';
    $('#pagesetting_url').val(''); //.attr('disabled', false);

    $('#pagesetting_url').attr('data-url', '');
  }

  for (var i = langOBJS.length; i > 0; i--) {
    langOBJS.pop();
  }

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
    var find = false;
    if (pitem.trans == spanid) active = 'active';

    if (status === 'enable') {
      tags += '<span id="' + spanid + '">';
      tags += '<span class="page1_translate_span ' + active + '" style="cursor: pointer;display: inline-block" data-cont="' + dcont + '">' + cname + '</span>';
      tags += '<span class="span_langitem_controller" data-cont="' + dcont + '">&nbsp;&nbsp;|&nbsp;&nbsp; × </span>';
      tags += '</span>';
    }

    if (pitem.trans === spanid) {
      var obj = {
        pagename: pagename_default,
        langname: cname.toLowerCase(),
        langid: pitem.trans,
        lagn_dialcode: dialCode,
        title: pitem.title,
        contenttype: pitem.pagetypeId,
        contenttype_invisible: pitem.type_state == 0 ? 0 : 1,
        url: pageurl_default,
        url_invisible: pitem.url_state == 0 ? 0 : 1,
        author: pitem.author,
        author_invisible: pitem.auth_state == 0 ? 0 : 1,
        time: pitem.created_at,
        time_invisible: pitem.date_state == 0 ? 0 : 1,
        edit: pitem.content,
        active: active,
        status: status,
        data_init: 1
      };
    } else {
      var obj = {
        pagename: pagename_default,
        langname: cname.toLowerCase(),
        langid: spanid,
        lagn_dialcode: dialCode,
        title: '',
        contenttype: 0,
        contenttype_invisible: 0,
        url: pageurl_default,
        url_invisible: 0,
        author: vueOBJ.username,
        author_invisible: 0,
        time: '',
        time_invisible: 0,
        edit: '',
        active: active,
        status: status,
        data_init: 0
      };
    }

    langOBJS.push(obj);
  }

  $('#translanglist').html(tags);
  ContentPageChangeTwoLanguageEventHandler();
  $('#pagesetting_datapicker').datepicker({
    dateFormat: 'yy/mm/dd'
  });
  var d = new Date();
  var yy = d.getFullYear();
  var mm = d.getMonth() + 1;
  var dd = d.getDate();

  if (pitem.created_at !== null && pitem.created_at !== '') {
    if (pitem.created_at.split('-').length > 2) {
      yy = pitem.created_at.split('-')[0];
      mm = pitem.created_at.split('-')[1];
      dd = pitem.created_at.split('-')[2];
      dd = dd.substr(0, 2);
    } else if (pitem.created_at.split('/').length > 2) {
      yy = pitem.created_at.split('/')[0];
      mm = pitem.created_at.split('/')[1];
      dd = pitem.created_at.split('/')[2];
      dd = dd.substr(0, 2);
    }
  }

  $('#pagesetting_datapicker').val(yy + '/' + mm + '/' + dd);
  var tag = '';

  for (var i = 0; i < ppagetype.length; i++) {
    var oneobj = ppagetype[i];
    var name = oneobj.name;
    var id = oneobj.id;
    var basic = '';
    if (curlangname === 'english') basic = name;else basic = oneobj.english;
    var seleted = '';

    if (id === pitem.pagetypeId) {
      pagetype_default = id;
      seleted = 'selected="selected"';
    }

    tag += '<option value="' + id + '" ' + seleted + ' data-basic="' + basic + '">' + name + '</option>';
  }

  $('#pagesetting_pgtype').html(tag);
  $('#pagesetting_pgtype').change(function () {
    pagetype_default = parseInt($(this).val());
  });

  if (pitem.content !== undefined && pitem.content !== null && pitem.content !== '') {
    var edt0 = htmldecodejs(pitem.content);
    $('#editcont0').val(edt0);
    vueOBJ.TinyMCMcontent0 = edt0;
  } else vueOBJ.TinyMCMcontent0 = '';

  if (pitem.url_state == 0) $('#url_invisible').prop('checked', false);else $('#url_invisible').prop('checked', true);
  if (pitem.auth_state == 0) $('#author_invisible').prop('checked', false);else $('#author_invisible').prop('checked', true);
  if (pitem.type_state == 0) $('#type_invisible').prop('checked', false);else $('#type_invisible').prop('checked', true);
  if (pitem.date_state == 0) $('#time_invisible').prop('checked', false);else $('#time_invisible').prop('checked', true);
}

function refreshPagesettingType() {
  if (transedlang === null || transedlang === '') return;
  $('#pagesetting_pgtype').html('');

  if ($('span#' + transedlang).length > 0) {
    $('span#' + transedlang).children('span.page1_translate_span').addClass('active');
    var langname = $('span#' + transedlang).children('span.page1_translate_span').text();
    langname = langname.toLowerCase();

    if (langname === null && langname === '') {
      return;
    }

    $.ajax({
      url: 'admin.getContentTypeFromLang',
      type: 'POST',
      data: {
        langname: langname,
        basic: 'b'
      },
      async: false,
      success: function success(data) {
        var lists = data.lists;

        if (lists !== undefined && lists !== null && lists !== '' && lists instanceof Array) {
          var tags = '';

          for (var i = 0; i < lists.length; i++) {
            var obj = lists[i];
            var keys = Object.keys(obj);
            var id = obj[keys[0]];
            var lname = obj[keys[1]];
            var basic = '';
            if (langname === 'english') basic = lname;else basic = obj[keys[2]];
            var seleted = '';

            if (parseInt(pagetype_default) !== 0) {
              if (id === parseInt(pagetype_default)) seleted = 'selected="selected"';
            }

            if (lname !== null && lname !== '') tags += '<option value="' + id + '" ' + seleted + ' data-basic="' + basic + '">' + lname + '</option>';
          }

          $('#pagesetting_pgtype').html(tags);
          $('#pagesetting_pgtype').change(function () {
            pagetype_default = parseInt($(this).val());
          });
        }
      },
      error: function error(jqXHR, errdata, errorThrown) {
        console.log(errdata);
      }
    });
  }
}

function initLangOBJS() {
  for (var i = 0; i < langOBJS.length; i++) {
    langOBJS[i].pagename = '';
    langOBJS[i].langid = '';
    langOBJS[i].langname = '';
    langOBJS[i].title = '';
    langOBJS[i].contenttype = '';
    langOBJS[i].contenttype_invisible = 0;
    langOBJS[i].url = '';
    langOBJS[i].url_invisible = 0;
    langOBJS[i].author = '';
    langOBJS[i].author_invisible = 0;
    langOBJS[i].time = '';
    langOBJS[i].time_invisible = 0;
    langOBJS[i].edit = '';
    langOBJS[i].active = '';
    langOBJS[i].data_init = 0;
  }
}

function changelangOBJNewActive(activelangid, curlangname) {
  for (var i = 0; i < langOBJS.length; i++) {
    if (langOBJS[i].langid === activelangid) {
      if (langOBJS[i].data_init === 1) {
        $('#pagesetting_name').val(langOBJS[i].pagename);
        $('#pagesetting_title').val(langOBJS[i].title);
        $('#pagesetting_pgtype').val(langOBJS[i].contenttype);
        if (langOBJS[i].contenttype_invisible === 1) $('#type_invisible').prop('checked', true);
        $('#pagesetting_url').val(langOBJS[i].url);
        if (langOBJS[i].url_invisible === 1) $('#url_invisible').prop('checked', true);
        $('#pagesetting_author').val(langOBJS[i].author);
        if (langOBJS[i].author_invisible === 1) $('#author_invisible').prop('checked', true);
        $('#pagesetting_datapicker').val(langOBJS[i].time);
        if (langOBJS[i].time_invisible === 1) $('#time_invisible').prop('checked', true); //var edt0=htmldecodejs(pitem.content);

        $('#editcont0').val(langOBJS[i].edit);
        vueOBJ.TinyMCMcontent0 = langOBJS[i].edit;
      } else {
        $('#pagesetting_name').val(pagename_default);
        $('#pagesetting_url').val(pageurl_default);
        $('#pagesetting_title').val('');
        $('#pagesetting_author').val(vueOBJ.username);
        $('#editcont0').val('');
        vueOBJ.TinyMCMcontent0 = '';
      }

      break;
    }
  }
}

function changeLangOBJADDDEL(state, contrlId) {
  if (state === 'del') {
    for (var i = 0; i < langOBJS.length; i++) {
      if (langOBJS[i].langid === contrlId) {
        langOBJS.splice(i, 1);
      }
    }
  } else if (state === 'add') {
    for (var j = 0; j < stored_langs.length; j++) {
      var obj = stored_langs[j];
      var iso = obj.iso;
      var dialCode = obj.dialcode;
      var cname = obj.name;
      var status = obj.status;
      var dcont = iso + '-' + dialCode;
      var find = false;

      if (status === 'enable' && dcont === contrlId) {
        for (var i = 0; i < langOBJS.length; i++) {
          if (dcont === langOBJS[i].langid) {
            find = true;
            break;
          }
        }

        if (find === false) {
          var pobj = {
            pagename: pagename_default,
            langid: dcont,
            langname: cname.toLowerCase(),
            title: '',
            contenttype: pagetype_default,
            contenttype_invisible: 0,
            url: pageurl_default,
            url_invisible: 0,
            author: vueOBJ.username,
            author_invisible: 0,
            time: '',
            time_invisible: 0,
            edit: '',
            active: '',
            data_init: 0
          };
          langOBJS.push(pobj);
        }
      }
    }
  }
}

function changelangOBJActive(activelangid, prelangid) {
  for (var i = 0; i < langOBJS.length; i++) {
    if (langOBJS[i].langid === prelangid) {
      langOBJS[i].pagename = $('#pagesetting_name').val();
      langOBJS[i].title = $('#pagesetting_title').val();
      langOBJS[i].contenttype = $('#pagesetting_pgtype').val();
      langOBJS[i].contenttype_invisible = $('#type_invisible').is(':checked') ? 1 : 0;
      if ($('#pagesetting_url').val() !== langOBJS[i].url) $('#pagesetting_url').val(langOBJS[i].url);
      langOBJS[i].url = $('#pagesetting_url').val();
      langOBJS[i].url_invisible = $('#url_invisible').is(':checked') ? 1 : 0;
      langOBJS[i].author = $('#pagesetting_author').val();
      langOBJS[i].author_invisible = $('#author_invisible').is(':checked') ? 1 : 0;
      langOBJS[i].time = $('#pagesetting_datapicker').val();
      langOBJS[i].time_invisible = $('#time_invisible').is(':checked') ? 1 : 0;
      langOBJS[i].edit = vueOBJ.TinyMCMcontent0;
      langOBJS[i].active = '';
      langOBJS[i].data_init = 1;
      break;
    }
  }

  for (var i = 0; i < langOBJS.length; i++) {
    if (langOBJS[i].langid === activelangid) {
      langOBJS[i].active = 'active'; //langOBJS[i].langname = curlangname;

      if (langOBJS[i].data_init === 1) {
        $('#pagesetting_name').val(langOBJS[i].pagename);
        $('#pagesetting_title').val(langOBJS[i].title);
        $('#pagesetting_pgtype').val(langOBJS[i].contenttype);
        if (langOBJS[i].contenttype_invisible === 1) $('#type_invisible').prop('checked', true);
        $('#pagesetting_url').val(langOBJS[i].url);
        if (langOBJS[i].url_invisible === 1) $('#url_invisible').prop('checked', true);
        $('#pagesetting_author').val(langOBJS[i].author);
        if (langOBJS[i].author_invisible === 1) $('#author_invisible').prop('checked', true);
        $('#pagesetting_datapicker').val(langOBJS[i].time);
        if (langOBJS[i].time_invisible === 1) $('#time_invisible').prop('checked', true); //var edt0=htmldecodejs(pitem.content);

        $('#editcont0').val(langOBJS[i].edit);
        vueOBJ.TinyMCMcontent0 = langOBJS[i].edit;
      } else {
        $('#pagesetting_name').val(pagename_default);
        if (pageurl_default !== langOBJS[i].url) pageurl_default = langOBJS[i].url;
        $('#pagesetting_url').val(pageurl_default);
        $('#pagesetting_title').val('');
        $('#pagesetting_author').val(vueOBJ.username);
        $('#editcont0').val('');
        vueOBJ.TinyMCMcontent0 = '';
      }

      break;
    }
  }
}

function init_list_nav_cntTranslatelist() {
  $('span.page1_translate_span').click(function (e) {
    $('span.page1_translate_span').removeClass('active');
    $(this).addClass('active');
    var dcont = $(this).data('cont');

    if (dcont.split('-').length > 2) {
      var prelangid = transedlang;
      transedlang = dcont.split('-')[0] + '-' + dcont.split('-')[1];
      if (tabstatus === 2) // || tabstatus===3
        changelangOBJActive(transedlang, prelangid);
      refreshPagesettingType();
    }
  });
  $('span.span_langitem_controller').click(function (e) {
    var dcont = $(this).data('cont');
    if (dcont.split('-').length < 1) return;
    var iso = dcont.split('-')[0];
    var dialcode = dcont.split('-')[1];

    for (var i = 0; i < stored_langs.length; i++) {
      var objj = stored_langs[i];
      var j_iso = objj.iso;
      var j_dialcode = objj.dialcode;
      var tlng = j_iso + '-' + j_dialcode;

      if (iso === j_iso && dialcode === j_dialcode) {
        objj.status = 'disable';
        stored_langs[i] = objj;
      }
    }

    for (var ii = stored_langs.length - 1; ii > -1; ii--) {
      var objj = stored_langs[ii];
      var j_status = objj.status;
      var tlng = objj.iso + '-' + objj.dialcode;

      if (j_status === 'enable') {
        transedlang = tlng; //active that last language.

        break;
      }
    }

    if (tabstatus === 2) changeLangOBJADDDEL('del');
    var dis_id = iso + '-' + dialcode;
    $('#' + dis_id).remove(); //console.log(transedlang);

    $('span.page1_translate_span').removeClass('active');
    $('#' + transedlang + ' span.page1_translate_span').addClass('active');
    refreshPagesettingType();
  });
}

function createContentPage() {
  var burl = $.trim($('#wwpg_content_url_dlg').val());
  var burl_auto = $('#wwpg_content_url_auto_dlg'); //ckd

  var btime = $.trim($('#wwpg_content_dlg_datapicker').val());
  var btime_auto = $('#wwpg_content_time_auto_dlg'); //ckd

  var basicccontenttype = $('#wwpg_content_type_dlg').val();
  pagetype_default = parseInt(basicccontenttype);
  pagename_default = burl.split('/')[burl.split('/').length - 1];
  pageurl_default = burl;

  for (var ii = 0; ii < stored_langs.length; ii++) {
    stored_langs[ii].status = 'enable';
  }

  for (var i = langOBJS.length; i > 0; i--) {
    langOBJS.pop();
  }
  /* init values */


  $("#pagesetting_frm")[0].reset();
  $('#pagesetting_author').attr('readonly', false);
  $('#pagesetting_pgtype').attr('disabled', false);
  $('input[name="pgsetstate"]').val('add');
  $('input[name="pagesetting_author"]').val(vueOBJ.username);
  vueOBJ.TinyMCMcontent0 = '';
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
      if (transedlang !== null && transedlang !== '' && spanid == transedlang) active = 'active';
      var objj = {
        pagename: pagename_default !== '' ? pagename_default : '',
        langname: cname.toLowerCase(),
        langid: spanid,
        lagn_dialcode: dialCode,
        title: '',
        contenttype: pagetype_default,
        contenttype_invisible: 0,
        url: pageurl_default !== '' ? pageurl_default : '',
        url_invisible: 0,
        author: vueOBJ.username,
        author_invisible: 0,
        time: btime,
        time_invisible: 0,
        edit: '',
        active: active,
        data_init: 0
      };
      langOBJS.push(objj);
      tags += '<span id="' + spanid + '">';
      tags += '<span class="page1_translate_span ' + active + '" style="cursor: pointer;display: inline-block" data-cont="' + dcont + '">' + cname + '</span>';
      tags += '<span class="span_langitem_controller" data-cont="' + dcont + '">&nbsp;&nbsp;|&nbsp;&nbsp; × </span>';
      tags += '</span>';
    }
  }

  $('#translanglist').html(tags);
  initContentListTranslatelist();
  var tag = '';
  var sel = document.getElementById('wwpg_content_type_dlg');

  if (sel.options.length > 0) {
    var s_id = sel.options[sel.selectedIndex].value;

    for (var i = 0; i < sel.options.length; i++) {
      var text = sel.options[i].text;
      var id = sel.options[i].value;
      var basic = $(sel.options[i]).data('basic');
      var seleted = '';
      if (pagetype_default !== 0 && id === pagetype_default) seleted = 'selected="selected"';else if (id === s_id) {
        seleted = 'selected="selected"';
      }
      tag += '<option value="' + id + '" ' + seleted + ' data-basic="' + basic + '">' + text + '</option>';
    }
  }

  $('#pagesetting_pgtype').html(tag);
  $('#pagesetting_pgtype').change(function () {
    pagetype_default = parseInt($(this).val());
  });
  $('#pagesetting_datapicker').datepicker({
    dateFormat: 'yy/mm/dd'
  });
  $('#pagesetting_datapicker').val(btime);

  if ($(burl_auto).is(':checked')) {
    $('#url_invisible').attr('checked', true);
  }

  if ($(btime_auto).is(':checked')) {
    $('#time_invisible').attr('checked', true);
  }

  $('#pagesetting_url').val(pageurl_default); //.attr('disabled',true);

  if (pagename_default !== null && pagename_default !== '') {
    $('#pagesetting_name').val(pagename_default).attr('disabled', true);
  } else {
    pagename_default = createRandompageName();
    $('#pagesetting_name').val(pagename_default).attr('disabled', true);
  }

  $('input[id="url_invisible"]').click(function () {
    if ($(this).is(':checked')) {
      var sel = document.getElementById('pagesetting_pgtype');

      if (sel.options.length > 0) {
        var opobj = sel.options[sel.selectedIndex];
        var pgtype = $(opobj).data('basic');
        var url = '';
        pgtype = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.js_trim(pgtype);
        if (pgtype !== undefined && pgtype !== null && pgtype !== '') url += '/' + pgtype;
        pagename_default = createRandompageName();
        url += '/' + pagename_default;
        pageurl_default = url;
        $('#pagesetting_url').val(pageurl_default);
        $('#pagesetting_name').val(pagename_default);

        for (var i = 0; i < langOBJS.length; i++) {
          langOBJS[i].pagename = pagename_default;
          langOBJS[i].url = pageurl_default;
        }
      }
    } else {
      $('#pagesetting_url').val('');
      $('#pagesetting_name').val('');
      pagename_default = '';
      pageurl_default = '';

      for (var i = 0; i < langOBJS.length; i++) {
        langOBJS[i].pagename = pagename_default;
        langOBJS[i].url = pageurl_default;
      }
    }
  });
  /* for(var i=0;i<langOBJS.length;i++)
   {
       langOBJS[i].pagename = $('#pagesetting_name').val();
       langOBJS[i].title = $('#pagesetting_title').val();
       langOBJS[i].contenttype = $('#pagesetting_pgtype').val();
       langOBJS[i].contenttype_invisible = $('#type_invisible').is(':checked') ? 1: 0;
       langOBJS[i].url = $('#pagesetting_url').val();
       langOBJS[i].url_invisible = $('#url_invisible').is(':checked') ? 1: 0;
       langOBJS[i].author= $('#pagesetting_author').val();
       langOBJS[i].author_invisible=  $('#author_invisible').is(':checked') ? 1: 0;
       langOBJS[i].time= $('#pagesetting_datapicker').val();
       langOBJS[i].time_invisible= $('#time_invisible').is(':checked') ? 1: 0;
       langOBJS[i].edit= '';
   }*/
}

function gotocontentList() {
  pagename_default = '';
  pageurl_default = '';
  pagetype_default = 0;
  $('input[name="pgsetstate"]').val('add');
  $('#wwgpp_lang_list').val('');
  tabstatus = 0;
  transedlang = ''; //입부분을 삭제하면 선택한 언어에 대하여 리스트한다. ckd

  $('#publick_contaniner').css('display', 'none');
  $('#pageContAdd_btn_container').css('display', 'block');
  $('#pagesetting').removeClass('active');
  $('#wwpc_list').addClass('active');
  $('div[data-target="wwpc_list"]').addClass('page1_content_side_bar_seleted');
}

function setLanguagesList() {
  if (stored_langs !== '') {
    var tags = '';
    tags += '<option value="" style="font-weight: bold">···</option>';

    for (var j = 0; j < stored_langs.length; j++) {
      var obj = stored_langs[j];
      var iso = obj.iso;
      var dialCode = obj.dialcode;
      var cname = obj.name;
      var status = obj.status;
      var dcont = iso + '-' + dialCode + '-' + cname;
      var selected = "";
      if (iso + '-' + dialCode == transedlang) selected = " selected ";

      if (status == 'enable') {
        tags += '<option value="' + dcont + '" ' + selected + ' >' + cname + '</option>';
      }
    }

    $('#wwgpp_lang_list').html(tags); //list of lists

    $('#wwpg_content_basiclang_dlg').html(tags); //list of create content
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalPagesContent",
  components: {
    'editor0': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      pageid: 'webs-wesglobal-pages-content-fav',
      pgtxt_translation: '',
      pgtxt_save: '',
      pgtxt_preview: '',
      pgtxt_release: '',
      pgtxt_contenttype: '',
      pgtxt_select: '',
      pgtxt_aboutus: '',
      pgtxt_title: '',
      pgtxt_time: '',
      pgtxt_url: '',
      pgtxt_theeditor: '',
      pgtxt_content: '',
      pgtxt_page: '',
      pgtxt_filters: '',
      pgtxt_search: '',
      pgtxt_setupthe: '',
      pgtxt_setting: '',
      pgtxt_type: '',
      pgtxt_author: '',
      pgtxt_delete: '',
      pgtxt_name: '',
      pgtxt_create: '',
      pgtxt_dbsaved: '',
      pgtxt_releasesuccess: '',
      pgtxt_selectlanguagesave: '',
      pgtxt_selectlanguage: '',
      btntxt_cancel: '',
      pgtxt_wantdeleteitem: '',
      pgtxt_notpermission: '',
      pgtxt_language: '',
      pgtxt_basic: '',
      pgtxt_hide: '',
      pgtxt_status: '',
      pgtxt_auto: '',
      btntxt_savechange: '',
      pgtxt_fieldnonempty: '',
      pgtxt_includetxtstart: '',
      pgtxt_alreadyexistname: '',
      pgtxt_previewpage: '',
      btntxt_add: '',
      btntxt_edit: '',
      btntxt_delete: '',
      btntxt_change: '',
      TinyMCMcontent0: '',
      username: '',
      uname: ''
    };
  },
  computed: {
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
    cpgtxt_contenttype: function cpgtxt_contenttype() {
      return this.pgtxt_contenttype;
    },
    cpgtxt_page: function cpgtxt_page() {
      return this.pgtxt_page;
    },
    cpgtxt_select: function cpgtxt_select() {
      return this.pgtxt_select;
    },
    cpgtxt_aboutus: function cpgtxt_aboutus() {
      return this.pgtxt_aboutus;
    },
    cpgtxt_title: function cpgtxt_title() {
      return this.pgtxt_title;
    },
    cpgtxt_author: function cpgtxt_author() {
      return this.pgtxt_author;
    },
    cpgtxt_time: function cpgtxt_time() {
      return this.pgtxt_time;
    },
    cpgtxt_url: function cpgtxt_url() {
      return this.pgtxt_url;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
    },
    cpgtxt_delete: function cpgtxt_delete() {
      return this.pgtxt_delete;
    },
    cpgtxt_content: function cpgtxt_content() {
      return this.pgtxt_content;
    },
    cpgtxt_language: function cpgtxt_language() {
      return this.pgtxt_language;
    },
    cpgtxt_filters: function cpgtxt_filters() {
      return this.pgtxt_filters;
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
    cpgtxt_search: function cpgtxt_search() {
      return this.pgtxt_search;
    },
    cpgtxt_setupthe: function cpgtxt_setupthe() {
      return this.pgtxt_setupthe;
    },
    cpgtxt_setting: function cpgtxt_setting() {
      return this.pgtxt_setting;
    },
    cpgtxt_type: function cpgtxt_type() {
      return this.pgtxt_type;
    },
    cpgtxt_create: function cpgtxt_create() {
      return this.pgtxt_create;
    },
    cpgtxt_dbsaved: function cpgtxt_dbsaved() {
      return this.pgtxt_dbsaved;
    },
    cpgtxt_releasesuccess: function cpgtxt_releasesuccess() {
      return this.pgtxt_releasesuccess;
    },
    cbtntxt_cancel: function cbtntxt_cancel() {
      return this.btntxt_cancel;
    },
    cbtntxt_change: function cbtntxt_change() {
      return this.btntxt_change;
    },
    cpgtxt_basic: function cpgtxt_basic() {
      return this.pgtxt_basic;
    },
    cpgtxt_auto: function cpgtxt_auto() {
      return this.pgtxt_auto;
    },
    cpgtxt_hide: function cpgtxt_hide() {
      return this.pgtxt_hide;
    },
    cpgtxt_status: function cpgtxt_status() {
      return this.pgtxt_status;
    },
    cbtntxt_savechange: function cbtntxt_savechange() {
      return this.btntxt_savechange;
    },
    cpgtxt_previewpage: function cpgtxt_previewpage() {
      return this.pgtxt_previewpage;
    },
    contentchange: function contentchange() {
      //cckd
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
      return this.$store.state.contentchange;
    }
  },
  created: function created() {
    var userinfo = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.jsonparse(window.Laravel.userinfo);
    this.username = userinfo.username;
    this.uname = userinfo.name;
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    /* fav part*/
    vueOBJ = this;
    pgperm = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.getPagePermission(this.$store.state.permission, this.pageid);
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    pgtxt_selectlanguage = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguage');
    pgtxt_selectlanguagesave = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguagesave');
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
    getWWGStoredLang: function getWWGStoredLang() {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.getWWGStoredLang').then(function (response) {
        var msg = response.data.msg;

        if (msg == "ok") {
          if (response.data.langlist != '') {
            stored_langs = $.parseJSON(response.data.langlist);
            setLanguagesList();
            vueOBJ.initpage();
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    initpage: function initpage() {
      tabstatus = 0;
      pstart = 1;
      $('#type_invisible').attr('checked', false);
      $('#url_invisible').attr('checked', false);
      $('#author_invisible').attr('checked', false);
      $('#time_invisible').attr('checked', false);
      $('#type_invisible').val('');
      $('#url_invisible').val('');
      $('#author_invisible').val('');
      $('#time_invisible').val('');
      init_list_nav_cnt();
      getContentList();
      $('#pageContAdd_btn').click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (pgperm.create != 1) {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlert('pgtxt_notpermission');
          return;
        }

        if (tabstatus === 0) {
          $('#wwpg_content_url_dlg').val('').attr('disabled', true);
          $('#myCreateContentModal').modal('show');
          $('#wwpg_content_url_auto_dlg').prop('checked', false); //$('#wwpg_content_dlg_datapicker_icon').click(function (){

          $('#wwpg_content_dlg_datapicker').datepicker({
            dateFormat: 'yy/mm/dd'
          });
          var d = new Date();
          var yy = d.getFullYear();
          var mm = d.getMonth() + 1;
          var dd = d.getDate();
          $('#wwpg_content_dlg_datapicker').val(yy + '/' + mm + '/' + dd); //});

          $('#wwpg_content_time_auto_dlg').prop('checked', false);
          $('#wwpg_content_basiclang_dlg').val('');
          $('#wwpg_content_type_dlg').html('');
          $('input[id="wwpg_content_url_auto_dlg"]').click(function () {
            var ctdv = $('#wwpg_content_type_dlg').val(); //console.log(ctdv);

            if (ctdv === null || ctdv === '') {
              $(this).prop('checked', false);
              _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlert('please select content type!');
              return;
            }

            if ($(this).is(':checked')) {
              var sel = document.getElementById('wwpg_content_type_dlg');

              if (sel.options.length > 0) {
                var opobj = sel.options[sel.selectedIndex];
                var pgtype = $(opobj).data('basic');
                var url = '';
                pgtype = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.js_trim(pgtype);
                if (pgtype !== undefined && pgtype !== null && pgtype !== '') url += '/' + pgtype;
                var pg_default = createRandompageName();
                url += '/' + pg_default;
                $('#wwpg_content_url_dlg').val(url);
              }
            } else {
              $('#wwpg_content_url_dlg').val('');
            }
          });
        } else {//tabstatus!=1 and tabstatus !=0
        }
      });
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
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlert('pgtxt_notpermission');
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
    select_content_page_search: function select_content_page_search() {
      var objval = $('#wwpc_select_content_page_type').val();
      var pagetype = parseInt(objval);

      if (isNaN(pagetype)) {
        pagetype = 0;
      } else contentpagetype = pagetype;

      getSideContentPageData();
    },
    PagePreview: function PagePreview() {
      $("#wwpc_previewModalModalbody").html('');
      var url = $('#pagesetting_url').val();
      var iframeH = $(window).height() - 100;
      var lang = "";
      setTempLang();
      lang = transedlang.split("-")[0];
      url = '/' + lang + url;
      $("#wwpc_previewModalModalbody").html('<iframe src="' + url + '" style="border:none;width:100%; height: ' + iframeH + 'px;" title="preview"></iframe>');
      $("#wwpc_previewModal").modal('show');
    },
    wwgpp_search: function wwgpp_search() {
      pstart = 1;
      getContentList();
    },
    wwgpp_selected_lists_del: function wwgpp_selected_lists_del() {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.Confirm('pgtxt_wantdeleteitem', function (val) {
        if (val) {
          var ids = {};
          $('input[name="wwgpc_contentlist_ck"]').each(function (index, element) {
            if ($(element).is(':checked')) {
              var id = $(element).data('id');
              ids[index] = id;
              $.ajax({
                url: 'admin.wwgpc_deleteGroupList',
                type: 'POST',
                data: {
                  ids: ids
                },
                async: false,
                success: function success(data) {
                  if (data.msg == "ok") {
                    vueOBJ.wwgpp_search();
                  } else {
                    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden(data.msg);
                  }
                },
                error: function error(jqXHR, errdata, errorThrown) {
                  console.log(errdata);
                }
              });
            }
          });
        }
      });
    },
    wwgp_createNewContent: function wwgp_createNewContent() {
      pagetype_default = 0;
      var burl = $.trim($('#wwpg_content_url_dlg').val());
      var btime = $.trim($('#wwpg_content_dlg_datapicker').val());
      var basiclang = $('#wwpg_content_basiclang_dlg').val();
      var basicccontenttype = $('#wwpg_content_type_dlg').val();

      if (burl === '' || btime === '' || basiclang === '' || basicccontenttype === '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden('This fields must not empty.');
        return;
      }

      $('#myCreateContentModal').modal('hide');
      $("#pageContAdd_btn_container").css('display', 'none');
      $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
      $('.col-md-12.page_slider_content_list').removeClass('active');
      $('#pagesetting').addClass('active');
      $('#publick_contaniner').css('display', 'block');
      $('#translanglist .span_langitem_controller').css('display', 'block'); //$('.page1_translate_bar > .page1_translate_text, #translanglist').css('display','inline-block');

      $('.page1_translate_bar_right .adddisablelang').css('display', 'block');
      $('#datalist-container').css('display', 'block'); //$('#pagesetting_datapicker').attr('disabled', false);

      transedlang = basiclang.split('-')[0] + '-' + basiclang.split('-')[1];
      tabstatus = 2;
      createContentPage();
    },
    wwgpp_getCtype: function wwgpp_getCtype() {
      var transplit = $('#wwgpp_lang_list').val();

      if (transplit !== null && transplit !== '' && transplit.split('-').length > 2) {
        $("#wwgpp_list_contenttype").html('');
        var langname = transplit.split('-')[2];
        langname = langname.toLowerCase();
        $.ajax({
          url: 'admin.getContentTypeFromLang',
          type: 'POST',
          data: {
            langname: langname,
            basic: 'b'
          },
          async: false,
          success: function success(data) {
            var lists = data.lists;
            if (lists === undefined || lists === null || lists === '') return;
            var tags = '<option value="" selected="selected" style="font-weight: bold">···</option>';

            for (var i = 0; i < lists.length; i++) {
              var obj = lists[i];
              var keys = Object.keys(obj);
              var id = obj[keys[0]];
              var lname = obj[keys[1]];
              var basic = '';
              if (langname === 'english') basic = lname;else basic = obj[keys[2]];
              if (lname !== null && lname !== '') tags += '<option value="' + id + '" data-basic="' + basic + '">' + lname + '</option>';
            }

            $("#wwgpp_list_contenttype").html(tags);
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          }
        });
        this.wwgpp_search();
      } else {
        pstart = 1;
        getContentList();
      }
    },
    wwgpp_getCtype_basiclang_dlg: function wwgpp_getCtype_basiclang_dlg() {
      var transplit = $('#wwpg_content_basiclang_dlg').val();
      $("#wwpg_content_type_dlg").html('');

      if (transplit !== null && transplit !== '' && transplit.split('-').length > 2) {
        var langname = transplit.split('-')[2];
        langname = langname.toLowerCase();
        $.ajax({
          url: 'admin.getContentTypeFromLang',
          type: 'POST',
          data: {
            langname: langname,
            basic: 'b'
          },
          async: false,
          success: function success(data) {
            var lists = data.lists;
            if (lists === undefined || lists === null || lists === '') return;
            var tags = '';

            for (var i = 0; i < lists.length; i++) {
              var obj = lists[i];
              var keys = Object.keys(obj);
              var id = obj[keys[0]];
              var lname = obj[keys[1]];
              var basic = '';
              if (langname === 'english') basic = lname;else basic = obj[keys[2]];
              if (lname !== null && lname !== '') tags += '<option value="' + id + '" data-basic="' + basic + '">' + lname + '</option>';
            }

            $("#wwpg_content_type_dlg").html(tags);
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          }
        });
        this.wwgpp_search();
      }
    },
    Adddisablelang: function Adddisablelang() {
      var tags = '';
      $('#wwpc_disable_lang_add_body').html('');

      if (tabstatus === 2) {
        for (var i = 0; i < stored_langs.length; i++) {
          var obj = stored_langs[i];

          if (obj.status === 'disable') {
            var iso = obj.iso;
            var dialCode = obj.dialcode;
            var cname = obj.name;
            var dcont = iso + '-' + dialCode + '-' + cname;
            tags += '<div class="col-3 form-check form-check-inline">';
            tags += '<input class="form-check-input" type="checkbox" id="' + dcont + '" value="' + cname + '">';
            tags += '<label class="form-check-label" htmlFor="' + dcont + '">' + cname + '</label>';
            tags += '</div>';
          }
        }
      } else if (tabstatus === 3) {
        for (var i = 0; i < langOBJS.length; i++) {
          var obj = langOBJS[i];

          if (obj.status === 'disable') {
            var langid = obj.langid;
            var iso = langid.split('-')[0];
            var dialCode = obj.lagn_dialcode;
            var cname = obj.langname;
            var dcont = iso + '-' + dialCode + '-' + cname;
            tags += '<div class="col-3 form-check form-check-inline">';
            tags += '<input class="form-check-input" type="checkbox" id="' + dcont + '" value="' + cname + '">';
            tags += '<label class="form-check-label" htmlFor="' + dcont + '">' + cname + '</label>';
            tags += '</div>';
          }
        }
      }

      $('#wwpc_disable_lang_add_body').html(tags);
      $('#wwpc_AddTranslationModal').modal('show');
    },
    wwpc_addTrans_btn_event: function wwpc_addTrans_btn_event() {
      $('#wwpc_disable_lang_add_body').children().each(function (index, element) {
        var inputOBJ = $(element).find('.form-check-input');

        if ($(inputOBJ).is(':checked')) {
          var objid = $(inputOBJ).attr('id');
          var o_iso = objid.split('-')[0];
          var o_dial = objid.split('-')[1];

          var _iso_dial = o_iso + '-' + o_dial;

          var tag = '';

          if (tabstatus === 2) {
            for (var j = 0; j < stored_langs.length; j++) {
              var obj = stored_langs[j];
              var iso = obj.iso;
              var dialCode = obj.dialcode;
              var cname = obj.name;
              var dcont = iso + '-' + dialCode + '-' + cname;
              var spanid = iso + '-' + dialCode;

              if (_iso_dial === spanid) {
                obj.status = 'enable';
                stored_langs[j] = obj;
                tag = '<span id="' + spanid + '"><span class="page1_translate_span" style="cursor: pointer" data-cont="' + dcont + '">' + cname + '</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span class="span_langitem_controller" data-cont="' + dcont + '">×</span></span>';
                $('#translanglist').append(tag);
                break;
              }
            }

            changeLangOBJADDDEL('add', _iso_dial);
            initContentListTranslatelist();
          } else if (tabstatus === 3) {
            for (var j = 0; j < langOBJS.length; j++) {
              var cname = langOBJS[j].langname;
              cname = capitalizeFirstLetter(cname);
              var dcont = langOBJS[j].langid + '-' + langOBJS[j].langname;
              var spanid = langOBJS[j].langid;

              if (_iso_dial === spanid) {
                langOBJS[j].status = 'enable';
                tag = '<span id="' + spanid + '"><span class="page1_translate_span" style="cursor: pointer" data-cont="' + dcont + '">' + cname + '</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span class="span_langitem_controller" data-cont="' + dcont + '">×</span></span>';
                $('#translanglist').append(tag);
                break;
              }
            }

            ContentPageChangeTwoLanguageEventHandler();
          }
        }
      });
      $('#wwpc_AddTranslationModal').modal('hide');
    },
    wwpc_saveContentpageofOne: function wwpc_saveContentpageofOne() {
      if (tabstatus === 3) {
        this.wwpc_saveContentpageMuti_change();
      } else if (tabstatus === 2) {
        if (pgperm.write != 1) {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlert('pgtxt_notpermission');
          return;
        }

        if (transedlang === null || transedlang === '') {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden('pgtxt_selectlanguagesave');
          return;
        }

        $('input[name="pgsettranedLang"]').val(transedlang); //new page one

        var pgtxt_page = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_page');
        var pgtxt_name = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_name');
        var pgtxtfieldnonempty = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_fieldnonempty');
        var a_content = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_content');
        var a_type = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_type');

        if ($.trim($('#pagesetting_name').val()) === '') {
          var pgmsg = pgtxt_page + pgtxt_name + '  ' + pgtxtfieldnonempty;
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden(pgmsg);
          $('#pagesetting_name').focus();
          return;
        }

        var pgtype = $('#pagesetting_pgtype').val();

        if ($.trim(pgtype) === '') {
          var pgmsg = a_content + a_type + '  ' + pgtxtfieldnonempty;
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden(pgmsg);
          return;
        }

        var pgname = $.trim($('#pagesetting_name').val());

        if (pgname.indexOf('WESNode-') < 0 || pgname.indexOf('WESNode-') > 0) {
          var pgtxt_includetxtstart = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_includetxtstart');
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden(pgtxt_page + pgtxt_name + '  ' + pgtxt_includetxtstart + ' WESNode-');
          $('#pagesetting_name').focus();
          return;
        }

        if (checkpagename(pgname, 0)) {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden('pgtxt_alreadyexistname');
          $('#pagesetting_name').focus();
          return;
        }

        var a_url = $('#pagesetting_url').val();

        if ($.trim($('#pagesetting_url').val()) === '') {
          var pgmsg = 'URL ' + pgtxtfieldnonempty;
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden(pgmsg);
          $('#pagesetting_url').focus();
          return;
        }

        a_url = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.js_trim(a_url);
        a_url = encodeURIComponent(a_url);
        $('input[name="pgseturl"]').val(a_url);
        $('#editcont0').val(this.TinyMCMcontent0);
        if ($('#type_invisible').is(':checked')) $('#type_invisible').val('on');
        if ($('#url_invisible').is(':checked')) $('#url_invisible').val('on');
        if ($('#author_invisible').is(':checked')) $('#author_invisible').val('on');
        if ($('#time_invisible').is(':checked')) $('#time_invisible').val('on');
        var pgsetstate = 'add';

        for (var i = 0; i < langOBJS.length; i++) {
          if (langOBJS[i].langid === transedlang) {
            langOBJS[i].pagename = $('#pagesetting_name').val();
            langOBJS[i].title = $('#pagesetting_title').val();
            langOBJS[i].contenttype = $('#pagesetting_pgtype').val();
            langOBJS[i].contenttype_invisible = $('#type_invisible').is(':checked') ? 1 : 0;
            langOBJS[i].url = a_url;
            langOBJS[i].url_invisible = $('#url_invisible').is(':checked') ? 1 : 0;
            langOBJS[i].author = $('#pagesetting_author').val();
            langOBJS[i].author_invisible = $('#author_invisible').is(':checked') ? 1 : 0;
            langOBJS[i].time = $('#pagesetting_datapicker').val();
            langOBJS[i].time_invisible = $('#time_invisible').is(':checked') ? 1 : 0;
            langOBJS[i].edit = $('#editcont0').val();
          } else {
            langOBJS[i].pagename = $('#pagesetting_name').val();
            langOBJS[i].url = a_url;
            if (langOBJS[i].title === '') langOBJS[i].title = '';
            if (langOBJS[i].contenttype === '') langOBJS[i].contenttype = $('#pagesetting_pgtype').val();
            if (langOBJS[i].contenttype_invisible === 0) langOBJS[i].contenttype_invisible = 0;
            if (langOBJS[i].url_invisible === 0) langOBJS[i].url_invisible = 0;
            if (langOBJS[i].author === '') langOBJS[i].author = '';
            if (langOBJS[i].author_invisible === 0) langOBJS[i].author_invisible = 0;
            if (langOBJS[i].time === '') langOBJS[i].time = '';
            if (langOBJS[i].time_invisible === 0) langOBJS[i].time_invisible = 0;
            if (langOBJS[i].edit === '') langOBJS[i].edit = '';
          }
        }

        var postData = {
          allData: langOBJS,
          pgsetstate: pgsetstate
        };
        $.ajax({
          url: 'admin.addwwgpp_pagesetting',
          type: 'POST',
          dataType: 'json',
          data: postData,
          success: function success(data) {
            // data = JSON.parse(data);
            if (data.msg == "ok") {
              $('#pagesetting_url').val('');
              $('#pagesetting_name').val('');
              $('#type_invisible').attr('checked', false);
              $('#author_invisible').attr('checked', false);
              $('#url_invisible').attr('checked', false);
              $('#time_invisible').attr('checked', false);
              $('#type_invisible').val('');
              $('#author_invisible').val('');
              $('#url_invisible').val('');
              $('#time_invisible').val('');
              $("#pagesetting_frm")[0].reset();
              $('#pagesetting_datapicker').datepicker({
                dateFormat: 'yy/mm/dd'
              });
              var d = new Date();
              var yy = d.getFullYear();
              var mm = d.getMonth() + 1;
              var dd = d.getDate();
              $('#pagesetting_datapicker').val(yy + '/' + mm + '/' + dd);
              _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden('pgtxt_dbsaved');
              $('input[name="pgsettranedLang"]').val('');
              initLangOBJS();
              gotocontentList();
              getContentList();
            } else {
              _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden(data.msg);
            }
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          }
        });
      }
    },
    wwpc_saveContentpageMuti_change: function wwpc_saveContentpageMuti_change() {
      if (pgperm.write != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlert('pgtxt_notpermission');
        return;
      }
      /*  if($('input[name="pgsettranedLang"]').val()==='')
        {
            mjs_module.data.showAlertHidden('pgtxt_selectlanguagesave');
            return;
        }*/
      //new page one


      var pgtxt_page = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_page');
      var pgtxt_name = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_name');
      var pgtxtfieldnonempty = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_fieldnonempty');

      if ($.trim($('#pagesetting_name').val()) === '') {
        var pgmsg = pgtxt_page + pgtxt_name + '  ' + pgtxtfieldnonempty;
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden(pgmsg);
        $('#pagesetting_name').focus();
        return;
      }

      var pgname = $.trim($('#pagesetting_name').val());

      if (pgname.indexOf('WESNode-') < 0 || pgname.indexOf('WESNode-') > 0) {
        var pgtxt_includetxtstart = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_includetxtstart');
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden(pgtxt_page + pgtxt_name + '  ' + pgtxt_includetxtstart + ' WESNode-');
        $('#pagesetting_name').focus();
        return;
      }

      var a_url = $('#pagesetting_url').val();
      a_url = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.js_trim(a_url);

      if (a_url === '') {
        var pgmsg = 'URL ' + pgtxtfieldnonempty;
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden(pgmsg);
        $('#pagesetting_url').focus();
        return;
      }

      a_url = encodeURIComponent(a_url);
      $('#editcont0').val(this.TinyMCMcontent0);

      for (var i = 0; i < langOBJS.length; i++) {
        if (langOBJS[i].langid === transedlang) {
          langOBJS[i].pagename = $('#pagesetting_name').val();
          langOBJS[i].title = $('#pagesetting_title').val();
          langOBJS[i].contenttype = $('#pagesetting_pgtype').val();
          langOBJS[i].contenttype_invisible = $('#type_invisible').is(':checked') ? 1 : 0;
          langOBJS[i].url = a_url;
          langOBJS[i].url_invisible = $('#url_invisible').is(':checked') ? 1 : 0;
          langOBJS[i].author = $('#pagesetting_author').val();
          langOBJS[i].author_invisible = $('#author_invisible').is(':checked') ? 1 : 0;
          langOBJS[i].time = $('#pagesetting_datapicker').val();
          langOBJS[i].time_invisible = $('#time_invisible').is(':checked') ? 1 : 0;
          langOBJS[i].edit = $('#editcont0').val();
          langOBJS[i].data_init = 1;
        } else {
          if (langOBJS[i].pagename === '') langOBJS[i].pagename = $('#pagesetting_name').val();
          if (langOBJS[i].title === '') langOBJS[i].title = '-';
          if (langOBJS[i].contenttype === '') langOBJS[i].contenttype = $('#pagesetting_pgtype').val();
          if (langOBJS[i].contenttype_invisible === 0) langOBJS[i].contenttype_invisible = 0;
          if (langOBJS[i].url === '') langOBJS[i].url = a_url;
          if (langOBJS[i].url_invisible === 0) langOBJS[i].url_invisible = 0;
          if (langOBJS[i].author === '') langOBJS[i].author = '-';
          if (langOBJS[i].author_invisible === 0) langOBJS[i].author_invisible = 0;
          if (langOBJS[i].time === '') langOBJS[i].time = '';
          if (langOBJS[i].time_invisible === 0) langOBJS[i].time_invisible = 0;
          if (langOBJS[i].edit === '') langOBJS[i].edit = '';
        }
      }

      var postData = {
        allData: langOBJS
      };
      $.ajax({
        url: 'admin.addwwgpp_pagesettingMuti_change',
        type: 'POST',
        dataType: 'json',
        data: postData,
        success: function success(data) {
          // data = JSON.parse(data);
          if (data.msg == "ok") {
            $('#pagesetting_url').val('');
            $('#pagesetting_name').val('');
            $('#type_invisible').attr('checked', false);
            $('#author_invisible').attr('checked', false);
            $('#url_invisible').attr('checked', false);
            $('#time_invisible').attr('checked', false);
            $('#type_invisible').val('');
            $('#author_invisible').val('');
            $('#url_invisible').val('');
            $('#time_invisible').val('');
            $("#pagesetting_frm")[0].reset();
            $('#pagesetting_datapicker').datepicker({
              dateFormat: 'yy/mm/dd'
            });
            var d = new Date();
            var yy = d.getFullYear();
            var mm = d.getMonth() + 1;
            var dd = d.getDate();
            $('#pagesetting_datapicker').val(yy + '/' + mm + '/' + dd);
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden('pgtxt_dbsaved');
            $('input[name="pgsettranedLang"]').val('');
            transedlang = '';
            langOBJS.length = 0;
            gotocontentList();
            getContentList();
          } else {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.showAlertHidden(data.msg);
          }
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    },
    wwpc_gotoContentList: function wwpc_gotoContentList() {
      gotocontentList();
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page1_content_content_bottom svg{\n    color: #6b85e2;\n}\n.page_slider_content_list{\n    display: none;\n}\n.span_langitem_controller{\n    color: #1b78c7;\n    font-size: 15px;\n    cursor: pointer;\n    padding: 5px 5px 5px 0;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.page1_content_side_bar .page1_content_side_bar_text{\n    cursor: pointer;\n    height: auto;\n    float: left;\n}\n.page1_translate_span {\n    padding-left: 20px;\n}\n.input-group-append-my{\n    border-top-right-radius:1.25rem;border-bottom-right-radius:1.25rem;\n}\n.input-group-text-my{\n    background-color: #d6d6d6;border-top-right-radius:1.25rem;border-bottom-right-radius:1.25rem;\n}\n.form-control.page2_input:focus,.form-control.page2_input:hover{\n    background-color:#d6d6d6;\n}\n.table thead th{\n    text-transform:none;\n    font-size: 14px;\n}\n.table thead th.th-lp-20, .table tbody td.th-lp-20{\n    padding-left: 20px;\n}\n.table thead th.th-rp-20, .table tbody td.th-rp-20{\n    padding-right: 20px;\n}\n.content-table-row{\n    height: 45px;\n}\n.form-check-input.rect-group{\n    width: 16px;height: 16px; border: 1px solid #bbbbbb;\n    cursor: pointer;\n}\n.form-check-input.rect-group > div{\n    width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;\n}\n.form-check-input.rect-group.active > div{\n    width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;\n}\n#dlg-contenttype-lang-list div{\n    line-height:20px;\n}\n#dlg-contenttype-lang-list a{\n    text-decoration:underline !important;\n    padding: 3px;\n    cursor: pointer;\n    color:#b9b9b9;\n}\n#dlg-contenttype-lang-list a.enable{\n    color:rgba(0, 0, 0, 0.7);\n}\n#dlg-contenttype-lang-list a.active{\n    color:rgba(0, 0, 0, 1);\n    font-weight: bold;\n}\n.max-width-60{\n    max-width: 60px;\n}\n.max-width-120{\n    max-width: 120px;\n}\n.page1_translate_span.active {\n    color: #555659;\n    font-weight: bold;\n}\n.tox.tox-tinymce{\n    border-radius: 20px;\n    width: 100% !important;\n    height: 350px;/*150px*/\n    min-height: 350px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesChinaPagesContentList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=template&id=7a72f7c8&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=template&id=7a72f7c8& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticStyle: { width: "100%" } }, [
    _c("div", { staticStyle: { display: "none" } }, [
      _vm._v(_vm._s(_vm.contentchange))
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticStyle: { display: "none" }, attrs: { id: "publick_contaniner" } },
      [
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
                      staticClass: "page1_translate_div adddisablelang",
                      staticStyle: { cursor: "pointer" },
                      on: { click: _vm.Adddisablelang }
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
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "page1_translate_span_right" },
                        [_vm._v(_vm._s(_vm.cbtntxt_add))]
                      ),
                      _vm._v("  |   \n                        ")
                    ]
                  ),
                  _vm._v(" "),
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
                      _c(
                        "span",
                        { staticClass: "page1_translate_span_right" },
                        [_vm._v(_vm._s(_vm.cpgtxt_preview))]
                      )
                    ]
                  )
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
          attrs: { id: "wwpc_list" }
        },
        [
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c("div", { staticClass: "page1_content_content_title" }, [
              _vm._v(_vm._s(_vm.cpgtxt_filters))
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "page1_content_content page2_content_text",
                staticStyle: { padding: "1.5rem" }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-4 col-sm" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        {
                          staticStyle: { width: "auto", "padding-left": "15px" }
                        },
                        [_c("span", [_vm._v(_vm._s(_vm.cpgtxt_language))])]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c(
                          "div",
                          {
                            staticClass: "input-group",
                            staticStyle: { width: "75%" }
                          },
                          [
                            _c(
                              "select",
                              {
                                staticClass: "form-control page2_input",
                                attrs: {
                                  id: "wwgpp_lang_list",
                                  name: "wwgpp_lang_list"
                                },
                                on: { change: _vm.wwgpp_getCtype }
                              },
                              [
                                _c(
                                  "option",
                                  {
                                    staticStyle: { "font-weight": "bold" },
                                    attrs: { value: "", selected: "selected" }
                                  },
                                  [_vm._v("···")]
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6 col-sm" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        {
                          staticStyle: { width: "auto", "padding-left": "15px" }
                        },
                        [_c("span", [_vm._v(_vm._s(_vm.cpgtxt_search))])]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c(
                          "div",
                          {
                            staticClass: "input-group",
                            staticStyle: { width: "95%" }
                          },
                          [
                            _c(
                              "select",
                              {
                                staticClass: "form-control page2_input",
                                attrs: {
                                  id: "wwgpp_list_contenttype",
                                  name: "wwgpp_list_contenttype"
                                },
                                on: { change: _vm.wwgpp_search }
                              },
                              [
                                _c(
                                  "option",
                                  {
                                    staticStyle: { "font-weight": "bold" },
                                    attrs: { value: "", selected: "selected" }
                                  },
                                  [_vm._v("···")]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control page2_input",
                              attrs: {
                                type: "text",
                                id: "wwgpp_list_s_c",
                                name: "wwgpp_list_s_c",
                                placeholder: "",
                                "aria-label": "page content search",
                                "aria-describedby": "basic-addon1"
                              },
                              on: {
                                keyup: function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    $event.keyCode !== 13
                                  ) {
                                    return null
                                  }
                                  return _vm.wwgpp_search($event)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "input-group-append input-group-append-my cursor-pointer",
                                on: { click: _vm.wwgpp_search }
                              },
                              [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "input-group-text input-group-text-my",
                                    attrs: { id: "basic-addon1" }
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
                    ])
                  ])
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c(
              "div",
              {
                staticClass: "table-responsive",
                attrs: { id: "list_container" }
              },
              [
                _c(
                  "table",
                  {
                    staticClass: "table table-lg  no-footer",
                    staticStyle: { margin: "10px 0" },
                    attrs: {
                      id: "user-list",
                      role: "grid",
                      "aria-describedby": "user-list_info"
                    }
                  },
                  [
                    _c("thead", [
                      _c("tr", { attrs: { role: "row" } }, [
                        _c("th"),
                        _vm._v(" "),
                        _c("th", [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_page) +
                              " " +
                              _vm._s(_vm.cpgtxt_name)
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.cpgtxt_title))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.cpgtxt_contenttype))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.cpgtxt_author))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.cpgtxt_time))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.cpgtxt_url))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.cpgtxt_status))]),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticClass: "th-rp-20",
                            staticStyle: {
                              "text-align": "right",
                              cursor: "pointer"
                            },
                            on: { click: _vm.wwgpp_selected_lists_del }
                          },
                          [_vm._v(_vm._s(_vm.cpgtxt_delete))]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", { attrs: { id: "wwgpp_list_container" } })
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-3 col-sm-5" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticStyle: { width: "auto", "padding-left": "15px" } },
                  [_c("span", [_vm._v(_vm._s(_vm.cpgtxt_setupthe))])]
                ),
                _vm._v(" "),
                _vm._m(0)
              ])
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "col-md-9 col-sm-12",
              attrs: { id: "wwgpc_pagelist_nav" }
            })
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list",
          attrs: { id: "pagesetting" }
        },
        [
          _c(
            "form",
            {
              attrs: {
                method: "post",
                enctype: "multipart/form-data",
                name: "pagesetting_frm",
                id: "pagesetting_frm"
              }
            },
            [
              _c("input", {
                attrs: { type: "hidden", name: "pgsetstate", value: "add" }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "hidden", name: "pgsetname", value: "" }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "hidden", name: "pgsetid", value: "0/" }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "hidden", name: "pgseturl", value: "" }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "hidden", name: "pgsettranedLang", value: "" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "page1_content_content_bar" }, [
                _c("div", { staticClass: "page1_content_content_title" }, [
                  _vm._v(
                    _vm._s(_vm.cpgtxt_content) +
                      " " +
                      _vm._s(_vm.cpgtxt_setting)
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "page1_content_content page2_content_text",
                    staticStyle: { padding: "2.0rem 1.5rem" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "row",
                        staticStyle: { "padding-bottom": "1.5rem" }
                      },
                      [
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  width: "105px",
                                  "text-align": "center"
                                }
                              },
                              [
                                _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.cpgtxt_page) +
                                      " " +
                                      _vm._s(_vm.cpgtxt_name)
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(1)
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  width: "105px",
                                  "text-align": "center"
                                }
                              },
                              [_c("span", [_vm._v(_vm._s(_vm.cpgtxt_title))])]
                            ),
                            _vm._v(" "),
                            _vm._m(2)
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "row",
                        staticStyle: { "padding-bottom": "1.5rem" }
                      },
                      [
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  width: "105px",
                                  "text-align": "center"
                                }
                              },
                              [
                                _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.cpgtxt_content) +
                                      " " +
                                      _vm._s(_vm.cpgtxt_type)
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(3),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-2" }, [
                              _c(
                                "div",
                                { staticClass: "form-check form-check-inline" },
                                [
                                  _c("input", {
                                    staticClass: "form-check-input",
                                    attrs: {
                                      type: "checkbox",
                                      value: "",
                                      id: "type_invisible",
                                      name: "type_invisible"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    {
                                      staticClass: "form-check-label",
                                      attrs: { for: "type_invisible" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(_vm.cpgtxt_hide) +
                                          "\n                                            "
                                      )
                                    ]
                                  )
                                ]
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("div", { staticClass: "row" }, [
                            _vm._m(4),
                            _vm._v(" "),
                            _vm._m(5),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-2" }, [
                              _c(
                                "div",
                                { staticClass: "form-check form-check-inline" },
                                [
                                  _c("input", {
                                    staticClass: "form-check-input",
                                    attrs: {
                                      type: "checkbox",
                                      value: "",
                                      id: "url_invisible",
                                      name: "url_invisible"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    {
                                      staticClass: "form-check-label",
                                      attrs: { for: "url_invisible" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(_vm.cpgtxt_auto) +
                                          "\n                                            "
                                      )
                                    ]
                                  )
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
                        staticClass: "row",
                        staticStyle: { "padding-bottom": "1.5rem" }
                      },
                      [
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  width: "105px",
                                  "text-align": "center"
                                }
                              },
                              [_c("span", [_vm._v(_vm._s(_vm.cpgtxt_author))])]
                            ),
                            _vm._v(" "),
                            _vm._m(6),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-2" }, [
                              _c(
                                "div",
                                { staticClass: "form-check form-check-inline" },
                                [
                                  _c("input", {
                                    staticClass: "form-check-input",
                                    attrs: {
                                      type: "checkbox",
                                      value: "",
                                      name: "author_invisible",
                                      id: "author_invisible"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    {
                                      staticClass: "form-check-label",
                                      attrs: { for: "author_invisible" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(_vm.cpgtxt_hide) +
                                          "\n                                            "
                                      )
                                    ]
                                  )
                                ]
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  width: "105px",
                                  "text-align": "center"
                                }
                              },
                              [_c("span", [_vm._v(_vm._s(_vm.cpgtxt_time))])]
                            ),
                            _vm._v(" "),
                            _vm._m(7),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-2" }, [
                              _c(
                                "div",
                                { staticClass: "form-check form-check-inline" },
                                [
                                  _c("input", {
                                    staticClass: "form-check-input",
                                    attrs: {
                                      type: "checkbox",
                                      value: "",
                                      id: "time_invisible",
                                      name: "time_invisible"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    {
                                      staticClass: "form-check-label",
                                      attrs: { for: "time_invisible" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(_vm.cpgtxt_hide) +
                                          "\n                                            "
                                      )
                                    ]
                                  )
                                ]
                              )
                            ])
                          ])
                        ])
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex", staticStyle: { margin: "3rem 0" } },
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
                    on: { onClick: _vm.editorclick0, onBlur: _vm.editorblue0 },
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
              ),
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
                            return _vm.wwpc_saveContentpageofOne($event)
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
                            return _vm.wwpc_gotoContentList($event)
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
    _vm._m(8),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "myCreateContentModal", role: "dialog" }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered",
            staticStyle: { "max-width": "560px" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "div",
                  {
                    staticClass: "wes-theme-color",
                    staticStyle: { "font-size": "20px", "font-weight": "600" }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.cpgtxt_create) +
                        " " +
                        _vm._s(_vm.cpgtxt_content)
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
                _c("div", { staticClass: "container-fluid p-0 m-0" }, [
                  _c("div", { staticClass: "row m-2 mt-3" }, [
                    _c("label", { staticClass: "col-3 col-form-label" }, [
                      _vm._v(
                        "\n                                    " +
                          _vm._s(_vm.cpgtxt_url) +
                          "\n                                "
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(9),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-check",
                          staticStyle: {
                            "padding-left": "0.5rem",
                            "padding-top": "0.3rem"
                          }
                        },
                        [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: {
                              type: "checkbox",
                              value: "",
                              id: "wwpg_content_url_auto_dlg"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "form-check-label",
                              staticStyle: { "margin-top": "0.05rem" },
                              attrs: { for: "wwpg_content_url_auto_dlg" }
                            },
                            [
                              _vm._v(
                                "\n                                            " +
                                  _vm._s(_vm.cpgtxt_auto) +
                                  "\n                                        "
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row m-2 mt-3" }, [
                    _c("label", { staticClass: "col-3 col-form-label" }, [
                      _vm._v(
                        "\n                                    " +
                          _vm._s(_vm.cpgtxt_time) +
                          "\n                                "
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(10),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-check",
                          staticStyle: {
                            "padding-left": "0.5rem",
                            "padding-top": "0.3rem"
                          }
                        },
                        [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: {
                              type: "checkbox",
                              value: "",
                              id: "wwpg_content_time_auto_dlg"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "form-check-label",
                              staticStyle: { "margin-top": "0.05rem" },
                              attrs: { for: "wwpg_content_time_auto_dlg" }
                            },
                            [
                              _vm._v(
                                "\n                                            " +
                                  _vm._s(_vm.cpgtxt_hide) +
                                  "\n                                        "
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row m-2 mt-3" }, [
                    _c("label", { staticClass: "col-3 col-form-label" }, [
                      _vm._v(
                        "\n                                    " +
                          _vm._s(_vm.cpgtxt_basic) +
                          " " +
                          _vm._s(_vm.cpgtxt_language) +
                          "\n                                "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-8" }, [
                      _c(
                        "div",
                        {
                          staticClass: "input-group",
                          staticStyle: { width: "100%" }
                        },
                        [
                          _c(
                            "select",
                            {
                              staticClass: "form-control page2_input",
                              attrs: {
                                id: "wwpg_content_basiclang_dlg",
                                name: "wwpg_content_basiclang_dlg"
                              },
                              on: { change: _vm.wwgpp_getCtype_basiclang_dlg }
                            },
                            [
                              _c(
                                "option",
                                {
                                  staticStyle: { "font-weight": "bold" },
                                  attrs: { value: "" }
                                },
                                [_vm._v("···")]
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row m-2 mt-3" }, [
                    _c("label", { staticClass: "col-3 col-form-label" }, [
                      _vm._v(
                        "\n                                    " +
                          _vm._s(_vm.cpgtxt_contenttype) +
                          "\n                                "
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(11)
                  ])
                ])
              ]),
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
                      staticClass: "btn page1_custom_select_btn mb-sm-2",
                      staticStyle: {
                        height: "40px",
                        "border-radius": "20px",
                        padding: "0px 25px",
                        float: "right",
                        display: "block"
                      },
                      attrs: {
                        type: "button",
                        id: "wwgp_createNewContent_dlg_btn"
                      },
                      on: { click: _vm.wwgp_createNewContent }
                    },
                    [
                      _vm._v(
                        "\n                       +  " +
                          _vm._s(_vm.cpgtxt_create) +
                          "\n                    "
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "wwpc_AddTranslationModal", role: "dialog" }
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
                        _vm._s(_vm.cpgtxt_translation)
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
              _vm._m(12),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal-footer justify-content-center",
                  staticStyle: { height: "auto" }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-info-theme active adddlgbtn",
                      attrs: { type: "button" },
                      on: { click: _vm.wwpc_addTrans_btn_event }
                    },
                    [
                      _vm._v(
                        "\n                       + " +
                          _vm._s(_vm.cbtntxt_add) +
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
                        staticStyle: { width: "100%", "text-align": "center" }
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
    return _c("div", { staticClass: "col" }, [
      _c("div", { staticClass: "input-group", staticStyle: { width: "95%" } }, [
        _c(
          "select",
          {
            staticClass: "form-control page2_input",
            attrs: { id: "wwgpp_list_nav_cnt", name: "wwgpp_list_nav_cnt" }
          },
          [
            _c("option", { attrs: { value: "5", selected: "selected" } }, [
              _vm._v("5")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "10" } }, [_vm._v("10")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "15" } }, [_vm._v("15")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "20" } }, [_vm._v("20")])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-9" }, [
      _c("div", { staticClass: "input-group" }, [
        _c("input", {
          staticClass: "form-control page2_input",
          attrs: {
            type: "text",
            id: "pagesetting_name",
            name: "pagesetting_name",
            placeholder: "",
            "aria-label": "page setting name",
            "aria-describedby": "basic-addon1"
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-9" }, [
      _c("div", { staticClass: "input-group" }, [
        _c("input", {
          staticClass: "form-control page2_input",
          attrs: {
            type: "text",
            id: "pagesetting_title",
            name: "pagesetting_title",
            placeholder: "",
            "aria-label": "page title"
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-7" }, [
      _c("div", { staticClass: "input-group" }, [
        _c("select", {
          staticClass: "form-control page2_input",
          attrs: { id: "pagesetting_pgtype", name: "pagesetting_pgtype" }
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
      { staticStyle: { width: "105px", "text-align": "center" } },
      [_c("span", [_vm._v("URL")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-7" }, [
      _c("div", { staticClass: "input-group" }, [
        _c("input", {
          staticClass: "form-control page2_input",
          attrs: {
            type: "text",
            id: "pagesetting_url",
            name: "pagesetting_url",
            "data-url": "",
            placeholder: ""
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-7" }, [
      _c("div", { staticClass: "input-group" }, [
        _c("input", {
          staticClass: "form-control page2_input",
          attrs: {
            type: "text",
            id: "pagesetting_author",
            name: "pagesetting_author",
            "data-url": "",
            placeholder: ""
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-7" }, [
      _c("div", { staticClass: "input-group" }, [
        _c("input", {
          staticClass: "form-control page2_input",
          attrs: {
            type: "text",
            name: "pagesetting_datapicker",
            id: "pagesetting_datapicker",
            placeholder: ""
          }
        })
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-7" }, [
      _c("input", {
        staticClass: "form-control",
        staticStyle: {
          background: "rgb(234, 234, 234)",
          "border-radius": "20px"
        },
        attrs: {
          type: "text",
          name: "wwpg_content_url_dlg",
          id: "wwpg_content_url_dlg",
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
    return _c("div", { staticClass: "col-7" }, [
      _c(
        "div",
        { staticClass: "input-group", staticStyle: { width: "100%" } },
        [
          _c("input", {
            staticClass: "form-control page2_input",
            attrs: {
              type: "text",
              name: "wwpg_content_dlg_datapicker",
              id: "wwpg_content_dlg_datapicker"
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "input-group-append input-group-append-my",
              attrs: { id: "wwpg_content_dlg_datapicker_icon" }
            },
            [
              _c(
                "span",
                { staticClass: "input-group-text input-group-text-my" },
                [
                  _c("i", {
                    staticClass: "far fa-calendar-alt",
                    staticStyle: { "font-size": "18px" }
                  })
                ]
              )
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
    return _c("div", { staticClass: "col-8" }, [
      _c(
        "div",
        { staticClass: "input-group", staticStyle: { width: "100%" } },
        [
          _c(
            "select",
            {
              staticClass: "form-control page2_input",
              attrs: {
                id: "wwpg_content_type_dlg",
                name: "wwpg_content_type_dlg"
              }
            },
            [
              _c(
                "option",
                {
                  staticStyle: { "font-weight": "bold" },
                  attrs: { value: "" }
                },
                [_vm._v("···")]
              )
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
    return _c(
      "div",
      {
        staticClass: "modal-body",
        staticStyle: { padding: "5px 10px !important" }
      },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", {
            staticClass: "row m-10",
            staticStyle: { "line-height": "30px" },
            attrs: { id: "wwpc_disable_lang_add_body" }
          })
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue":
/*!*******************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesChinaPagesContentList_vue_vue_type_template_id_7a72f7c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesChinaPagesContentList.vue?vue&type=template&id=7a72f7c8& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=template&id=7a72f7c8&");
/* harmony import */ var _WebsWesChinaPagesContentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesChinaPagesContentList.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WebsWesChinaPagesContentList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesChinaPagesContentList.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WebsWesChinaPagesContentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsWesChinaPagesContentList_vue_vue_type_template_id_7a72f7c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsWesChinaPagesContentList_vue_vue_type_template_id_7a72f7c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesChinaPagesContentList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesChinaPagesContentList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=template&id=7a72f7c8&":
/*!**************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=template&id=7a72f7c8& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentList_vue_vue_type_template_id_7a72f7c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesChinaPagesContentList.vue?vue&type=template&id=7a72f7c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WesChina/WebsWesChinaPagesContentList.vue?vue&type=template&id=7a72f7c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentList_vue_vue_type_template_id_7a72f7c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaPagesContentList_vue_vue_type_template_id_7a72f7c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
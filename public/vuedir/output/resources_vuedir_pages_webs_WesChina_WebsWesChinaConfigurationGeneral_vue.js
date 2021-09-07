"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vuedir_pages_webs_WesChina_WebsWesChinaConfigurationGeneral_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/jsfunc/lang_module */ "./resources/vuedir/assets/jsfunc/lang_module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var logo_path = "/uploads/images/wesimg/logo/";
var pgtxt_please;
var pgtxt_select;
var pgtxt_language;
var pgtxt_translation;
var pgperm = {};
var img_capacitys;
var img_types;
var img_sizes;

function JsonDataSocialSetting(jsonstr, imgtypelist) {
  if (jsonstr != '') {
    var datas = $.parseJSON(jsonstr);

    if (datas.logoImg != '' && datas.logoImg != null) {
      //$('#wwga_logo_upload_preview').text('');
      $('#wwga_logo_upload_preview_temp').val(datas.logoImg);
      $('#wwga_logo_upload_preview').css('background-image', 'url("' + logo_path + datas.logoImg + '")');
    }

    if (datas.extralogoImg != '' && datas.extralogoImg != null) {
      //$('#wwga_extralogo_upload_preview').text('');
      $('#wwga_extralogo_upload_preview_temp').val(datas.extralogoImg);
      $('#wwga_extralogo_upload_preview').css('background-image', 'url("' + logo_path + datas.extralogoImg + '")');
    }

    if (datas.favicoImg != '' && datas.favicoImg != null) {
      //$('#wwga_slogan_upload_preview').text('');
      $('#wwga_favico_upload_preview_temp').val(datas.favicoImg);
      $('#wwga_favico_upload_preview').css('background-image', 'url("' + logo_path + datas.favicoImg + '")');
    }

    if (datas.sloganImg != '' && datas.sloganImg != null) {
      //$('#wwga_slogan_upload_preview').text('');
      $('#wwga_slogan_upload_preview_temp').val(datas.sloganImg);
      $('#wwga_slogan_upload_preview').css('background-image', 'url("' + logo_path + datas.sloganImg + '")');
    }

    if (datas.sitetitle != '') {
      $('#wwga_sitetitle_input').val(datas.sitetitle);
    }

    if (datas.domain != '') {
      $('#wwga_sitedomain_input').val(datas.domain);
    }

    if (datas.companydomain != '') {
      $('#wwga_companydomain_input').val(datas.companydomain);
    }
  } else {
    //$('#wwga_logo_upload_preview').text('');
    $('#wwga_logo_upload_preview_temp').val('');
    $('#wwga_logo_upload_preview').css('background-image', 'url("")'); //$('#wwga_extralogo_upload_preview').text('');

    $('#wwga_extralogo_upload_preview_temp').val('');
    $('#wwga_extralogo_upload_preview').css('background-image', 'url("")'); //$('#wwga_slogan_upload_preview').text('');

    $('#wwga_slogan_upload_preview_temp').val('');
    $('#wwga_slogan_upload_preview').css('background-image', 'url("")');
    $('#wwga_favico_upload_preview_temp').val('');
    $('#wwga_favico_upload_preview').css('background-image', 'url("")');
    $('#wwga_sitetitle_input').val('');
    $('#wwga_sitedomain_input').val('');
    $('#wwga_companydomain_input').val('');
  }
  /*
  //$('#wwga_logo_img_size').html('');
  $('#wwga_logo_img_style').html('');
   //$('#wwga_extralogo_img_size').html('');
  $('#wwga_extralogo_img_style').html('');
   //$('#wwga_favico_img_size').html('');
  $('#wwga_favico_img_style').html('');
   //$('#wwga_slogan_img_size').html('');
  $('#wwga_slogan_img_style').html('');
   if(imgtypelist!==undefined && imgtypelist !==null){
      var name_tags='';
      var size_tags='';
      img_capacitys = new Array();
      img_types = new Array();
      img_sizes = new Array();
       for(var i=0;i<imgtypelist.length;i++){
         var item = imgtypelist[i];
         var id = item.id;
         var name = item.name;
         //var size = item.size;
         //console.log(name); console.log(size);
         //size_tags +='<option value="'+id+'">'+size+'</option>';
         name_tags +='<option value="'+id+'">'+name+'</option>';
         var capacitys = id + ':' + item.capacity;
         img_capacitys.push(capacitys);
         var sizes = id + ':' + item.size;
         img_sizes.push(sizes);
          var imgtype = $.parseJSON(item.imgtype);
         var st = 0;
         var typestr = "";
         if(imgtype.jpg == 1)
         {
             typestr += 'jpg';
             st++;
         }
         if(imgtype.png == 1)
         {
             if(st > 0)
                 typestr += ',';
             typestr += 'png';
             st++;
         }
         if(imgtype.gif == 1)
         {
             if(st > 0)
                 typestr += ',';
             typestr += 'gif';
             st++;
         }
         if(imgtype.tag == 1)
         {
             if(st > 0)
                 typestr += ',';
             typestr += 'tag';
             st++;
         }
         var types = id + ':' + typestr;
         img_types.push(types);
      }
       $('#wwga_logo_img_style').html(name_tags);
      $('#wwga_logo_img_style').children('option').each(function (i, item) {
          var id = $(item).attr('value');
          if(id==datas.logstyle){
              $(item).attr('selected','selected');
              for(var i = 0; i < img_capacitys.length; i++){
                  var capacity = img_capacitys[i].split(':');
                  var type = img_types[i].split(':');
                  var size = img_sizes[i].split(':');
                  if(capacity[0] == id){
                      $('#wwga_logo_condition_capacity').text(capacity[1] + 'KB');
                      $('#wwga_logo_condition_type').text(type[1]);
                      $('#wwga_logo_img_size').val(size[1]);
                  }
              }
              return;
          }
      });
       $('#wwga_extralogo_img_style').html(name_tags);
      $('#wwga_extralogo_img_style').children('option').each(function (i, item) {
          var id = $(item).attr('value');
          if(id==datas.extrastyle){
              $(item).attr('selected','selected');
              for(var i = 0; i < img_capacitys.length; i++){
                  var capacity = img_capacitys[i].split(':');
                  var type = img_types[i].split(':');
                  var size = img_sizes[i].split(':');
                  if(capacity[0] == id){
                      $('#wwga_extralogo_condition_capacity').text(capacity[1] + 'KB');
                      $('#wwga_extralogo_condition_type').text(type[1]);
                      $('#wwga_extralogo_img_size').val(size[1]);
                  }
              }
              return;
          }
      });
       $('#wwga_favico_img_style').html(name_tags);
      $('#wwga_favico_img_style').children('option').each(function (i, item) {
          var id = $(item).attr('value');
          if(id==datas.favicostyle){
              $(item).attr('selected','selected');
              for(var i = 0; i < img_capacitys.length; i++){
                  var capacity = img_capacitys[i].split(':');
                  var type = img_types[i].split(':');
                  var size = img_sizes[i].split(':');
                  if(capacity[0] == id){
                      $('#wwga_favico_condition_capacity').text(capacity[1] + 'KB');
                      $('#wwga_favico_condition_type').text(type[1]);
                      $('#wwga_favico_img_size').val(size[1]);
                  }
              }
              return;
          }
      });
       $('#wwga_slogan_img_style').html(name_tags);
      $('#wwga_slogan_img_style').children('option').each(function (i, item) {
          var id = $(item).attr('value');
          if(id==datas.sloganstyle){
              $(item).attr('selected','selected');
              for(var i = 0; i < img_capacitys.length; i++){
                  var capacity = img_capacitys[i].split(':');
                  var type = img_types[i].split(':');
                  var size = img_sizes[i].split(':');
                  if(capacity[0] == id){
                      $('#wwga_slogan_condition_capacity').text(capacity[1] + 'KB');
                      $('#wwga_slogan_condition_type').text(type[1]);
                      $('#wwga_slogan_img_size').val(size[1]);
                  }
              }
              return;
          }
      });
  }
  */

}

function pageEvent() {
  pgtxt_please = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_please');
  pgtxt_select = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_select');
  pgtxt_language = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_language');
  pgtxt_translation = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_translation');
  $('#wwga_logo_editbtn').click(function () {
    if (pgperm.write != 1) {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
      return;
    }

    $('#wwga_logo_upload').val('');
    $('#wwga_logo_upload').trigger('click');
  });
  $("#wwga_logo_upload").change(function () {
    if (this.files && this.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#wwga_logo_upload_preview').text('');
        $('#wwga_logo_upload_preview').css('background-image', 'url("' + e.target.result + '")');
      };

      reader.readAsDataURL(this.files[0]); // convert to base64 string
    }
  });
  $('#wwga_extralogo_editbtn').click(function () {
    if (pgperm.write != 1) {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
      return;
    }

    $('#wwga_extralogo_upload').val('');
    $('#wwga_extralogo_upload').trigger('click');
  });
  $("#wwga_extralogo_upload").change(function () {
    if (this.files && this.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#wwga_extralogo_upload_preview').text('');
        $('#wwga_extralogo_upload_preview').css('background-image', 'url("' + e.target.result + '")');
      };

      reader.readAsDataURL(this.files[0]); // convert to base64 string
    }
  });
  $('#wwga_favico_editbtn').click(function () {
    if (pgperm.write != 1) {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
      return;
    }

    $('#wwga_favico_upload').val('');
    $('#wwga_favico_upload').trigger('click');
  });
  $("#wwga_favico_upload").change(function () {
    if (this.files && this.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#wwga_favico_upload_preview').text('');
        $('#wwga_favico_upload_preview').css('background-image', 'url("' + e.target.result + '")');
      };

      reader.readAsDataURL(this.files[0]); // convert to base64 string
    }
  });
  $('#wwga_slogan_editbtn').click(function () {
    if (pgperm.write != 1) {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_notpermission');
      return;
    }

    $('#wwga_slogan_upload').val('');
    $('#wwga_slogan_upload').trigger('click');
  });
  $("#wwga_slogan_upload").change(function () {
    if (this.files && this.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#wwga_slogan_upload_preview').text('');
        $('#wwga_slogan_upload_preview').css('background-image', 'url("' + e.target.result + '")'); // console.log(e.target);
      };

      reader.readAsDataURL(this.files[0]); // convert to base64 string
    }
  });
  /*
  $('select[id="wwga_logo_img_style"]').change(function () {
      for(var i = 0; i < img_capacitys.length; i++){
          var capacity = img_capacitys[i].split(':');
          var type = img_types[i].split(':');
          var size = img_sizes[i].split(':');
          if(capacity[0] == $(this).val()){
              $('#wwga_logo_img_size').val(size[1]);
              $('#wwga_logo_condition_capacity').text(capacity[1] + 'KB');
              $('#wwga_logo_condition_type').text(type[1]);
          }
      }
  });
  $('select[id="wwga_extralogo_img_style"]').change(function () {
      for(var i = 0; i < img_capacitys.length; i++){
          var capacity = img_capacitys[i].split(':');
          var type = img_types[i].split(':');
          var size = img_sizes[i].split(':');
          if(capacity[0] == $(this).val()){
              $('#wwga_extralogo_condition_capacity').text(capacity[1] + 'KB');
              $('#wwga_extralogo_condition_type').text(type[1]);
              $('#wwga_extralogo_img_size').val(size[1]);
          }
      }
  });
  $('select[id="wwga_favico_img_style"]').change(function () {
      for(var i = 0; i < img_capacitys.length; i++){
          var capacity = img_capacitys[i].split(':');
          var type = img_types[i].split(':');
          var size = img_sizes[i].split(':');
          if(capacity[0] == $(this).val()){
              $('#wwga_favico_condition_capacity').text(capacity[1] + 'KB');
              $('#wwga_favico_condition_type').text(type[1]);
              $('#wwga_favico_img_size').val(size[1]);
          }
      }
  });
  $('select[id="wwga_slogan_img_style"]').change(function () {
      for(var i = 0; i < img_capacitys.length; i++){
          var capacity = img_capacitys[i].split(':');
          var type = img_types[i].split(':');
          var size = img_sizes[i].split(':');
          if(capacity[0] == $(this).val()){
              $('#wwga_slogan_condition_capacity').text(capacity[1] + 'KB');
              $('#wwga_slogan_condition_type').text(type[1]);
              $('#wwga_slogan_img_size').val(size[1]);
          }
      }
  });
  */
}

function pageLoad() {
  $.ajax({
    url: 'admin.getConfigurationGeneral',
    type: 'POST',
    success: function success(data) {
      if (data.msg == "ok") {
        $('input[name="curid"]').val(data.id);
        JsonDataSocialSetting(data.lists, data.imgtypelist);
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert(data.msg);
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalConfigurationGeneral",
  data: function data() {
    return {
      pageid: 'webs-wesglobal-configuration-general-fav',
      mu_webs: '',
      musu_webs_weschina: '',
      mususu_webs_wesglobal_configuration: '',
      musususu_webs_wesglobal_configuration_general: '',
      pgtxt_head: '',
      pgtxt_foot: '',
      pgtxt_topheader: '',
      pgtxt_hide: '',
      pgtxt_location: '',
      pgtxt_logo: '',
      pgtxt_site: '',
      pgtxt_title: '',
      pgtxt_enter: '',
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
      pgtxt_domainname: '',
      pgtxt_please: '',
      pgtxt_select: '',
      pgtxt_extra: '',
      pgtxt_doesnt: '',
      pgtxt_work: '',
      pgtxt_index: '',
      pgtxt_page: '',
      btntxt_ok: '',
      btntxt_cancel: '',
      pgtxt_wantdeleteitem: '',
      pgtxt_notpermission: '',
      pgtxt_notification: '',
      btntxt_savechange: '',
      btntxt_upload: '',
      pgtxt_imgupcondition1: '',
      pgtxt_imgupcondition2: '',
      pgtxt_style: '',
      pgtxt_aleadydomain: '',
      pgtxt_errorlogo: '',
      pgtxt_errorextralogo: '',
      pgtxt_errorfavico: '',
      pgtxt_errorslogan: '',
      pgtxt_company: ''
    };
  },
  created: function created() {},
  beforeMount: function beforeMount() {},
  computed: {
    cmususu_webs_wesglobal_configuration: function cmususu_webs_wesglobal_configuration() {
      return this.mususu_webs_wesglobal_configuration;
    },
    cmusususu_webs_wesglobal_configuration_general: function cmusususu_webs_wesglobal_configuration_general() {
      return this.musususu_webs_wesglobal_configuration_general;
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
    cpgtxt_site: function cpgtxt_site() {
      return this.pgtxt_site;
    },
    cpgtxt_title: function cpgtxt_title() {
      return this.pgtxt_title;
    },
    cpgtxt_enter: function cpgtxt_enter() {
      return this.pgtxt_enter;
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
    cpgtxt_style: function cpgtxt_style() {
      return this.pgtxt_style;
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
    cpgtxt_please: function cpgtxt_please() {
      return this.pgtxt_please;
    },
    cpgtxt_select: function cpgtxt_select() {
      return this.pgtxt_select;
    },
    cpgtxt_extra: function cpgtxt_extra() {
      return this.pgtxt_extra;
    },
    cpgtxt_doesnt: function cpgtxt_doesnt() {
      return this.pgtxt_doesnt;
    },
    cpgtxt_work: function cpgtxt_work() {
      return this.pgtxt_work;
    },
    cpgtxt_index: function cpgtxt_index() {
      return this.pgtxt_index;
    },
    cpgtxt_page: function cpgtxt_page() {
      return this.pgtxt_page;
    },
    cpgtxt_domainname: function cpgtxt_domainname() {
      return this.pgtxt_domainname;
    },
    cbtntxt_savechange: function cbtntxt_savechange() {
      return this.btntxt_savechange;
    },
    cbtntxt_upload: function cbtntxt_upload() {
      return this.btntxt_upload;
    },
    cpgtxt_imgupcondition1: function cpgtxt_imgupcondition1() {
      return this.pgtxt_imgupcondition1;
    },
    cpgtxt_imgupcondition2: function cpgtxt_imgupcondition2() {
      return this.pgtxt_imgupcondition2;
    },
    cpgtxt_aleadydomain: function cpgtxt_aleadydomain() {
      return this.pgtxt_aleadydomain;
    },
    cpgtxt_errorlogo: function cpgtxt_errorlogo() {
      return this.pgtxt_errorlogo;
    },
    cpgtxt_errorextralogo: function cpgtxt_errorextralogo() {
      return this.pgtxt_errorextralogo;
    },
    cpgtxt_errorfavico: function cpgtxt_errorfavico() {
      return this.pgtxt_errorfavico;
    },
    cpgtxt_errorslogan: function cpgtxt_errorslogan() {
      return this.pgtxt_errorslogan;
    },
    cpgtxt_company: function cpgtxt_company() {
      return this.pgtxt_company;
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

    this.initpage(); //this.getWWGStoredLang();//no use
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
    initpage: function initpage() {
      pageLoad();
      pageEvent();
    },
    loaddata: function loaddata() {
      pageLoad();
    },
    wwgc_savechangeBtnEvent: function wwgc_savechangeBtnEvent() {
      if (pgperm.write != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlertHidden('pgtxt_notpermission');
        return;
      }

      var formData = new FormData($("#wwga_configgeneral_flw")[0]);
      formData.append('wwga_logo_condition_capacity', $('#wwga_logo_condition_capacity').text());
      formData.append('wwga_logo_condition_type', $('#wwga_logo_condition_type').text());
      formData.append('wwga_extralogo_condition_capacity', $('#wwga_extralogo_condition_capacity').text());
      formData.append('wwga_extralogo_condition_type', $('#wwga_extralogo_condition_type').text());
      formData.append('wwga_favico_condition_capacity', $('#wwga_favico_condition_capacity').text());
      formData.append('wwga_favico_condition_type', $('#wwga_favico_condition_type').text());
      formData.append('wwga_slogan_condition_capacity', $('#wwga_slogan_condition_capacity').text());
      formData.append('wwga_slogan_condition_type', $('#wwga_slogan_condition_type').text());
      $.ajax({
        url: 'admin.saveConfigurationGeneral',
        type: 'POST',
        data: formData,
        async: false,
        success: function success(data) {
          if (data.msg == "ok") {
            $('#wwga_logo_upload_preview_temp').val(data.logoImg);
            $('#wwga_extralogo_upload_preview_temp').val(data.extralogoImg);
            $('#wwga_slogan_upload_preview_temp').val(data.sloganImg);
            $('#wwga_favico_upload_preview_temp').val(data.favicoImg);
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlertHidden('pgtxt_dbsaved');
          } else if (data.msg == "err_img") {
            if (data.err === 'logo') _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_errorlogo');else if (data.err === 'extralogo') _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_errorextralogo');else if (data.err === 'favico') _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_errorfavico');else if (data.err === 'slogan') _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_errorslogan');
          } else if (data.msg == "err_domain") {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__.default.data.showAlert('pgtxt_aleadydomain');
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.sl-tab-container{\n    display: none;\n}\n.sl-tab-container.active{\n    display: block;\n}\n.ck.ck-editor {\n    width: 100%;\n}\n.tox.tox-tinymce{\n    border-radius: 20px;\n    width: 100% !important;\n    min-height: 350px !important;\n}\n.apper-top-lang{\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center\n}\n.apper-top-lang div{\n    line-height: 25px;\n    text-align: center;\n}\n.form-check-input.group{\n    width: 16px;height: 16px;border-radius: 16px; border: 1px solid #bbbbbb;\n    cursor: pointer;\n}\n.form-check-input.group > div{\n    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;\n}\n.form-check-input.group.active > div{\n    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;\n}\n#wwga_extralogo_upload_preview,\n#wwga_slogan_upload_preview,\n#wwga_logo_upload_preview,\n#wwga_favico_upload_preview\n{\n    background-repeat: no-repeat;\n    background-size:100% 100%;\n}\n\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaConfigurationGeneral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaConfigurationGeneral.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaConfigurationGeneral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaConfigurationGeneral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue":
/*!***********************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesChinaConfigurationGeneral_vue_vue_type_template_id_29e5acdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesChinaConfigurationGeneral.vue?vue&type=template&id=29e5acdb& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=template&id=29e5acdb&");
/* harmony import */ var _WebsWesChinaConfigurationGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesChinaConfigurationGeneral.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=script&lang=js&");
/* harmony import */ var _WebsWesChinaConfigurationGeneral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesChinaConfigurationGeneral.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _WebsWesChinaConfigurationGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _WebsWesChinaConfigurationGeneral_vue_vue_type_template_id_29e5acdb___WEBPACK_IMPORTED_MODULE_0__.render,
  _WebsWesChinaConfigurationGeneral_vue_vue_type_template_id_29e5acdb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaConfigurationGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaConfigurationGeneral.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaConfigurationGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaConfigurationGeneral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaConfigurationGeneral.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=style&index=0&lang=css&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaConfigurationGeneral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=template&id=29e5acdb&":
/*!******************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=template&id=29e5acdb& ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaConfigurationGeneral_vue_vue_type_template_id_29e5acdb___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaConfigurationGeneral_vue_vue_type_template_id_29e5acdb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesChinaConfigurationGeneral_vue_vue_type_template_id_29e5acdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebsWesChinaConfigurationGeneral.vue?vue&type=template&id=29e5acdb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=template&id=29e5acdb&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=template&id=29e5acdb&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vuedir/pages/webs/WesChina/WebsWesChinaConfigurationGeneral.vue?vue&type=template&id=29e5acdb& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
          _vm._v(_vm._s(_vm.cmusususu_webs_wesglobal_configuration_general))
        ]),
        _vm._v(" "),
        _c("span", { staticStyle: { color: "#656262" } }, [
          _vm._v("   |   \n                       "),
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
            "\n                             " +
              _vm._s(_vm.cmu_webs) +
              "   >> " +
              _vm._s(_vm.cmusu_webs_weschina) +
              "   >>  " +
              _vm._s(_vm.cmususu_webs_wesglobal_configuration) +
              "   >>  " +
              _vm._s(_vm.cmusususu_webs_wesglobal_configuration_general) +
              "\n                          "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "sl-tab-container active",
        staticStyle: { "margin-top": "20px" },
        attrs: { id: "GeneralContainer" }
      },
      [
        _c(
          "form",
          {
            attrs: {
              method: "post",
              enctype: "multipart/form-data",
              name: "wwga_configgeneral_flw",
              id: "wwga_configgeneral_flw"
            }
          },
          [
            _c("input", {
              attrs: { type: "hidden", name: "curid", id: "curid", value: "0" }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "wwga_logo_upload_preview_temp",
                id: "wwga_logo_upload_preview_temp",
                value: ""
              }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "wwga_extralogo_upload_preview_temp",
                id: "wwga_extralogo_upload_preview_temp",
                value: ""
              }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "wwga_slogan_upload_preview_temp",
                id: "wwga_slogan_upload_preview_temp",
                value: ""
              }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "wwga_favico_upload_preview_temp",
                id: "wwga_favico_upload_preview_temp",
                value: ""
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h6", { staticClass: "card-title m-b-30" }, [
                      _vm._v(
                        _vm._s(_vm.cpgtxt_site) + " " + _vm._s(_vm.cpgtxt_logo)
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-11 col-sm-11" }, [
                        _c("div", { staticClass: "container-fluid" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", {
                              staticClass: "col-md-2 col-sm-3 logimag",
                              staticStyle: {
                                "max-width": "110px",
                                height: "55px",
                                border: "1px solid #e1e1e1"
                              },
                              attrs: { id: "wwga_logo_upload_preview" }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-8 col-sm-8 offset-sm-1" },
                              [
                                _c("div", { staticClass: "row m-l-10" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-md-3 col-sm-6 justify-content-center btn btn-outline-light webglogappearbtn p-t-10 p-b-10 p-l-25 p-r-25",
                                      attrs: { id: "wwga_logo_editbtn" }
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.cbtntxt_upload))
                                      ])
                                    ]
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(2)
                          ])
                        ])
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
                      _vm._v(
                        _vm._s(_vm.cpgtxt_extra) + " " + _vm._s(_vm.cpgtxt_logo)
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-11 col-sm-11" }, [
                        _c("div", { staticClass: "container-fluid" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", {
                              staticClass: "col-md-2 col-sm-3 logimag",
                              staticStyle: {
                                "max-width": "110px",
                                height: "55px",
                                border: "1px solid #e1e1e1"
                              },
                              attrs: { id: "wwga_extralogo_upload_preview" }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-8 col-sm-8 offset-sm-1" },
                              [
                                _c("div", { staticClass: "row m-l-10" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-md-3 col-sm-6 justify-content-center btn btn-outline-light webglogappearbtn p-t-10 p-b-10 p-l-25 p-r-25",
                                      attrs: { id: "wwga_extralogo_editbtn" }
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.cbtntxt_upload))
                                      ])
                                    ]
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(4)
                          ])
                        ])
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
                      _vm._v("Fav Ico")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(5),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-11 col-sm-11" }, [
                        _c("div", { staticClass: "container-fluid" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", {
                              staticClass: "col-md-2 col-sm-3 logimag",
                              staticStyle: {
                                "max-width": "110px",
                                height: "55px",
                                border: "1px solid #e1e1e1"
                              },
                              attrs: { id: "wwga_favico_upload_preview" }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-8 col-sm-8 offset-sm-1" },
                              [
                                _c("div", { staticClass: "row m-l-10" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-md-3 col-sm-6 justify-content-center btn btn-outline-light webglogappearbtn p-t-10 p-b-10 p-l-25 p-r-25",
                                      attrs: { id: "wwga_favico_editbtn" }
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.cbtntxt_upload))
                                      ])
                                    ]
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(6)
                          ])
                        ])
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
                      _vm._v(
                        _vm._s(_vm.cpgtxt_site) + " " + _vm._s(_vm.cpgtxt_title)
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(7),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-11 col-sm-11" }, [
                        _c("div", { staticClass: "flex-container" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group m-b-0",
                              staticStyle: { width: "40%" }
                            },
                            [
                              _c("input", {
                                staticClass: "form-control w-75",
                                attrs: {
                                  type: "text",
                                  placeholder: [
                                    [_vm.cpgtxt_enter][_vm.cpgtxt_title]
                                  ],
                                  name: "wwga_sitetitle_input",
                                  id: "wwga_sitetitle_input"
                                }
                              })
                            ]
                          )
                        ])
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
                      _vm._v(_vm._s(_vm.cpgtxt_slogan))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(8),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-11 col-sm-11" }, [
                        _c("div", { staticClass: "container-fluid" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", {
                              staticClass: "col-md-2 col-sm-3 logimag",
                              staticStyle: {
                                "max-width": "110px",
                                height: "55px",
                                border: "1px solid #e1e1e1"
                              },
                              attrs: { id: "wwga_slogan_upload_preview" }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-8 col-sm-8 offset-sm-1" },
                              [
                                _c("div", { staticClass: "row m-l-10" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-md-3 col-sm-6 justify-content-center btn btn-outline-light webglogappearbtn p-t-10 p-b-10 p-l-25 p-r-25",
                                      attrs: { id: "wwga_slogan_editbtn" }
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.cbtntxt_upload))
                                      ])
                                    ]
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(9)
                          ])
                        ])
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
                      _vm._v(_vm._s(_vm.cpgtxt_domainname))
                    ]),
                    _vm._v(" "),
                    _vm._m(10)
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
                      _vm._v(
                        _vm._s(_vm.cpgtxt_company) +
                          " " +
                          _vm._s(_vm.cpgtxt_domainname)
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(11)
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "row justify-content-end",
                staticStyle: {
                  "padding-bottom": "1.5rem",
                  "padding-right": "1.8rem"
                }
              },
              [
                _c("div", { staticClass: "col-md-3 col-sm-5 text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-info-theme active",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.wwgc_savechangeBtnEvent($event)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.cbtntxt_savechange))]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _vm._m(12)
          ]
        )
      ]
    ),
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
                    _c("h4", { staticClass: "modal-title" }, [
                      _vm._v(_vm._s(_vm.cpgtxt_preview))
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
          id: "webs-wesglobal-configuration-general-fav",
          "data-status": "off",
          "data-page-info": "General_webs-wesglobal-configuration-general"
        }
      },
      [
        _vm._v("\n                           "),
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
    return _c("div", { staticClass: "col-md-1 col-sm-1" }, [
      _c("div", { staticClass: "form-group m-b-0" }, [
        _vm._v(
          "\n                                             \n                                        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-1", staticStyle: { display: "none" } },
      [
        _c("input", {
          attrs: {
            type: "file",
            name: "wwga_logo_upload",
            id: "wwga_logo_upload",
            value: ""
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1 col-sm-1" }, [
      _c("div", { staticClass: "form-group m-b-0" }, [
        _vm._v(
          "\n                                             \n                                        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-1", staticStyle: { display: "none" } },
      [
        _c("input", {
          attrs: {
            type: "file",
            name: "wwga_extralogo_upload",
            id: "wwga_extralogo_upload",
            value: ""
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1 col-sm-1" }, [
      _c("div", { staticClass: "form-group m-b-0" }, [
        _vm._v(
          "\n                                             \n                                        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-1", staticStyle: { display: "none" } },
      [
        _c("input", {
          attrs: {
            type: "file",
            name: "wwga_favico_upload",
            id: "wwga_favico_upload",
            value: ""
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1 col-sm-1" }, [
      _c("div", { staticClass: "form-group m-b-0" }, [
        _vm._v(
          "\n                                             \n                                        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1 col-sm-1" }, [
      _c("div", { staticClass: "form-group m-b-0" }, [
        _vm._v(
          "\n                                             \n                                        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-1", staticStyle: { display: "none" } },
      [
        _c("input", {
          attrs: {
            type: "file",
            name: "wwga_slogan_upload",
            id: "wwga_slogan_upload",
            value: ""
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-1 col-sm-1" }, [
        _c("div", { staticClass: "form-group m-b-0" }, [
          _vm._v(
            "\n                                             \n                                        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-11 col-sm-11" }, [
        _c("div", { staticClass: "flex-container" }, [
          _c(
            "div",
            { staticClass: "form-group m-b-0", staticStyle: { width: "40%" } },
            [
              _c("input", {
                staticClass: "form-control w-75",
                attrs: {
                  type: "text",
                  placeholder: "wes.com",
                  name: "wwga_sitedomain_input",
                  id: "wwga_sitedomain_input"
                }
              })
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-1 col-sm-1" }, [
        _c("div", { staticClass: "form-group m-b-0" }, [
          _vm._v(
            "\n                                             \n                                        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-11 col-sm-11" }, [
        _c("div", { staticClass: "flex-container" }, [
          _c(
            "div",
            { staticClass: "form-group m-b-0", staticStyle: { width: "40%" } },
            [
              _c("input", {
                staticClass: "form-control w-75",
                attrs: {
                  type: "text",
                  placeholder: "company.wes.com",
                  name: "wwga_companydomain_input",
                  id: "wwga_companydomain_input"
                }
              })
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", {
        staticClass: "col-md-12 empty-line",
        staticStyle: { height: "50px" }
      })
    ])
  }
]
render._withStripped = true



/***/ })

}]);
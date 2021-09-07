<template>
    <div style="width: 100%">
        <div style="display: none">{{contentchange}}</div>

        <div class="row" id="pageContAdd_btn_container">
            <div class="col-md-12 text-right" style="height: 50px;">
                <button type="button" class="btn page1_custom_select_btn mb-sm-2" id="pageContAdd_btn" style="height: 40px; border-radius: 20px; padding: 0 25px; float: right; display: block;">
                    <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);margin-right: 5px;" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="gg:add"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7z" fill="currentColor"></path></g></svg>
                    {{cbtntxt_add}}
                </button>
            </div>
        </div>

        <div class="row">
            <!--content type-->
            <div class="col-md-12 page_slider_content_list active"  id="wwpc_type">

                    <div class="page1_content_content_bar">
                        <div class="page1_content_content_title border-0">{{cpgtxt_list}}</div>
                            <div class="card-body p-0">
                                <div class="container-fluid p-0 p-b-10" id="pagetype-container">
                                    <!--  full by ajax -->
                                </div>

                            </div>
                    </div>

            </div>

        </div>

        <!-- empty line ckd -->
        <div class="row empty-line">
            <div class="col-md-12" style="padding: 30px 0;">&nbsp;</div>
        </div>

        <!--modal part-->
        <div class="modal fade" id="myAddContentTypeModal" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <!-- Modal content-->
                <div class="modal-content page-type-first-content" style="display:block;">
                    <div class="modal-header">
                        <div class="wes-theme-color paytype-add-letter" style="font-size: 20px; font-weight: 600;display: block">{{cbtntxt_add}} {{cpgtxt_content}} {{cpgtxt_type}}</div>
                        <div class="wes-theme-color paytype-up-letter" style="font-size: 20px; font-weight: 600;display: none">{{cbtntxt_change}} {{cpgtxt_content}} {{cpgtxt_type}}</div>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body pt-0">
                        <div class="row"  id="dlgErr" style="display: none">
                            <div class="col">
                                error;
                            </div>
                        </div>
                        <div class="page2_modal page2_content_text p-0">
                            <div class="container-fluid p-0 m-0">
                                <div class="row m-2" style="min-height: 80px;border:1px solid rgb(223, 221, 221);border-radius: 20px">
                                    <label class="col-3 col-form-label wes-theme-color" style="line-height:3.5rem">
                                        {{cpgtxt_translation}}
                                    </label>
                                    <div class="col-9 d-flex flex-wrap" id="dlg-contenttype-lang-list">
                                       <!--
                                        <div class="m-2" ><a class="color-disable">chinese</a></div>
                                        -->
                                    </div>
                                </div>
                                <div class="row m-2 mt-3">
                                    <label class="col-4 col-form-label">
                                        {{cpgtxt_content}} {{cpgtxt_type}}
                                    </label>
                                    <div class="col-8">
                                        <input type="text" class="form-control"  name="pagetype_add_name" id="pagetype_add_name" placeholder="" aria-label="content input" style="background: rgb(234, 234, 234); border-radius: 20px">
                                    </div>
                                </div>
                                <div class="row m-2 mt-3" id="pagetype_add_span_messagebox_container" style="display:none;">
                                    <div class="col-12">
                                        <div  style="margin-bottom: 0px; height: 28px; background-color: #ededed; line-height: 28px; border-radius: 20px; padding: 0 20px;">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-inline="false" data-icon="mi:circle-warning" class="iconify" style="font-size: 22px; transform: rotate(360deg);">
                                                <g fill="none">
                                                    <path d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z" fill="currentColor"></path>
                                                    <path d="M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z" fill="currentColor"></path>
                                                    <path d="M10.5 16.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z" fill="currentColor"></path>
                                                </g>
                                            </svg>
                                            <span id="pagetype_add_span_messagebox"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer" style="height: auto">
                        <button type="button" class="btn page1_custom_select_btn" id="addDlg_btn"  @click="addPageTypeToOne">
                            <span class="iconify" data-inline="false" data-icon="gg:add" style="font-size: 24px;"></span>
                            {{cbtntxt_nextstep}}
                        </button>
                    </div>
                </div>

                <div class="modal-content page-type-next-content" style="display: none;">
                    <div class="modal-header">
                        <div class="wes-theme-color" style="font-size: 20px; font-weight: 600;">{{cpgtxt_confirm}}</div>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body pt-0">
                        <input type="hidden" name="pagecontenttypechangeid" id="pagecontenttypechangeid" value="">
                       <div class="row"  id="dlgNextErr" style="display: none;padding: 5px 10px 5px 20px;">
                            error
                        </div>
                        <div class="page2_modal page2_content_text p-0">
                            <div class="container-fluid p-0 m-0">
                                <div class="row m-2" id="dlg-contenttype-next-lang-list">
                                   <!-- <div class="col-3 wes-theme-color">
                                        Chinese
                                    </div>
                                    <div class="col-9">
                                        Chinese
                                    </div>    -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer" style="height: auto;justify-content:center">
                        <button type="button" class="btn page1_custom_select_btn mr-2" id="addNextDlg_btn"  @click="addPageTypeToNextOne">
                           + {{cbtntxt_add}}
                        </button>
                        <button type="button" class="btn page1_custom_select_btn mr-2 " id="changeNextDlg_btn"  @click="changePageTypeToNextOne">
                            {{cbtntxt_change}}
                        </button>
                        <button type="button" class="btn page1_custom_select_btn" id="cancelNextDlg_btn"  @click="cancelPageTypeToNextOne">
                            {{cbtntxt_cancel}}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--end modal-->
    </div>
</template>
<style>
    .page1_content_content_bottom svg{
        color: #6b85e2;
    }
    .page_slider_content_list{
        display: none;
    }
    .span_langitem_controller{
        color: #1b78c7;
        font-size: 15px;
        cursor: pointer;
        padding: 5px 5px 5px 0;
    }
    .page_slider_content_list.active{
        display: block;
    }
    .page1_translate_span {
        padding-left: 20px;
    }
    #addDlg_btn{
        height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;
    }
    .table thead th{
        text-transform:none;
        font-size: 14px;
    }
    .table thead th.th-lp-20, .table tbody td.th-lp-20{
        padding-left: 20px;
    }
    .table thead th.th-rp-20, .table tbody td.th-rp-20{
        padding-right: 20px;
    }

    .content-table-row{
        height: 45px;
    }

    #dlgErr{
        color: #d41b11;
        text-align:center;
    }
    .form-check-input.rect-group{
        width: 16px;height: 16px; border: 1px solid #bbbbbb;
        cursor: pointer;
    }
    .form-check-input.rect-group > div{
        width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;
    }
    .form-check-input.rect-group.active > div{
        width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;
    }
    #dlg-contenttype-lang-list div{
        line-height:20px;
    }
    #dlg-contenttype-lang-list a{
        text-decoration:underline !important;
        padding: 3px;
        cursor: pointer;
        color:#b9b9b9;
    }
    #dlg-contenttype-lang-list a.enable{
        color:rgba(0, 0, 0, 0.7);
    }
    #dlg-contenttype-lang-list a.active{
        color:rgba(0, 0, 0, 1);
        font-weight: bold;
    }
    #dlg-contenttype-next-lang-list{
        padding:10px;
        min-height: 80px;
        border:1px solid rgb(223, 221, 221);
        border-radius: 5px
    }
    .max-width-60{
        max-width: 60px;
    }
    .max-width-120{
        max-width: 120px;
    }
    .page1_translate_span.active {
        color: #555659;
        font-weight: bold;
    }
</style>

<script>

    import lang_module from "../../../assets/jsfunc/lang_module";
    import axios from 'axios';
    import Editor from '@tinymce/tinymce-vue';
    import nav_module from "../../../assets/jsfunc/nav_module";
    import mjs_module from "../../../assets/jsfunc/mjs_module";

    var preview='';
    var vueOBJ=null;
    var transedlang='';//default;
    var pstart=1;
    var pnum = pstart;
    var numg = 5;
    var content_type = 0;
    var contentpagetype = 0;
    var psearchstring = '';
    var contenttypetypecheckboxid = '';
    var stored_langs='';
    var content_accounting_lang={};

    var pcnt=5;
    var firsttypeselectId = 0;
    var currentId = 0;
    var currentSidebarType = 0;
    var pgperm={};
    var langOBJS=[];

    var tabstatus=0;

    var pagename_default='';
    var pageurl_default='';
    var pagetype_default=0;


    function setTempLang()
    {
        if(transedlang !== null && transedlang !== '')
            return;
        for (var j = 0; j < stored_langs.length; j++)
        {
            var obj = stored_langs[j];
            var iso = obj.iso;
            var dialCode = obj.dialcode;
            var status = obj.status;
            var dcont=iso+'-'+dialCode;
            if(status=='enable'){
                transedlang = dcont;
                break;
            }
        }
    }

    function initContentTypeHeader() {
        $('#pagetype-container').html('');
        //console.log(stored_langs);
        var btntxt_delete = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
        var tags='<div class="row m-0 align-items-start contenttype-list-header" style="padding: 0 0 8px 0; border-bottom: 1px solid #d6d6d6;font-weight: bold; font-size: 14px;">';
        tags +='<div class="col" style="max-width: 60px;"></div>';
        for (var j = 0; j < stored_langs.length; j++)
        {
            var obj = stored_langs[j];
            var iso = obj.iso;
            var dialCode = obj.dialcode;
            var cname = obj.name;
            var status = obj.status;
            var dcont=iso+'-'+dialCode+'-'+cname.toLowerCase();
            if(status=='enable'){
                tags +='<div class="col">'+cname+'</div>';
            }
        }
        tags+='<div class="col cursor-pointer data-ajax" data-ajax="btntxt_delete" style="max-width: 120px;" id="pagecontenttype_all_delete">'+btntxt_delete+'</div>';
        tags+='</div>';
        $('#pagetype-container').append(tags);
        $('#pagecontenttype_all_delete').click(function () {
            var ids={};
           $('input[id^="wwgpcCheckbox_"]').each(function (index, element) {
                   if($(element).is(':checked')){
                       var idstr=$(element).attr('id');
                       var id=idstr.split('_')[1];
                       //console.log(id);
                       ids[index]=id;
                       $.ajax({
                           url: 'admin.changePageType',
                           type: 'POST',
                           data: {
                               cond:'muldelete',
                               id:ids,
                           },
                           async: false,
                           success: function (data) {
                               if(data.msg=="ok"){
                                   getContentTypeList();
                               }
                               else{
                                   mjs_module.data.showAlert(data.msg);
                               }
                           },
                           error: function (jqXHR, errdata, errorThrown) {
                               console.log(errdata);
                           }
                       });
                   }
           });
        });
    }
    //add ckd
    function getContentTypeList() {
        if(stored_langs == '' || !(stored_langs instanceof Array))
            return;
        initContentTypeHeader();
        $.ajax({
            url: 'admin.getContentTypeList',
            data:{
                langs:stored_langs
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if(data.msg === "ok")
                {
                    var list = data.list;
                    if(list!==null && list!=='' && list instanceof Array)
                    {
                        var btntxt_edit = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
                        var btntxt_change = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
                        var btntxt_delete = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
                        var tags='';
                        for (var j = 0; j < list.length; j++)
                        {
                            var obj = list[j];
                            var id = obj.id;
                            var itemcnt = obj.itemcnt;
                            if(j < list.length - 1)
                                tags +='<div class="row m-0 align-items-start" style="padding: 10px 0; border-bottom: 1px solid #d6d6d6;line-height:30px;">';
                            else
                                tags +='<div class="row m-0 align-items-start" style="padding: 10px 0; border-bottom: 0;line-height:30px;">';

                            tags+='<div class="col max-width-60 pagecontenttype-checkbox" data-idx="'+id+'">';
                            tags+='<div class="form-check form-check-inline">';
                            tags+='<input class="form-check-input" type="checkbox" id="wwgpcCheckbox_'+id+'" value="">';
                            tags+='</div>';
                            tags+='</div>';

                            var ddttaa='';

                            for (var jj = 0; jj < stored_langs.length; jj++){
                                var objj = stored_langs[jj];
                                var status = objj.status;
                                var iso = objj.iso;
                                if(status=='enable'){
                                    var cname = objj.name;
                                    cname = cname.toLowerCase();
                                    var v = obj[cname];
                                    ddttaa+=iso+'_'+cname+'_'+v+'-';
                                    tags+='<div class="col">'+v+'</div>';
                                }
                            }
                            var sustr = ddttaa.substr(0,ddttaa.length-1);
                            tags+='<div class="col max-width-120">';
                            tags+='<select class="my-border-radius-slt form-control float-right"  data-prop="'+sustr+'" id="contenttypecontroller_'+id+'">';
                            tags+='<option value="" class="data-ajax" data-ajax="btntxt_edit" selected>'+btntxt_edit+'</option>';
                            tags+='<option value="change" class="data-ajax" data-ajax="btntxt_change">'+btntxt_change+'</option>';
                            tags+='<option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
                            tags+='</select>';
                            tags+='</div>';

                            tags+='</div>';
                        }

                        $('#pagetype-container').append(tags);
                        $('select[id^="contenttypecontroller_"]').change(function () {
                            if(pgperm.write != 1){
                                mjs_module.data.showAlert('pgtxt_notpermission');
                                return;
                            }
                            var value = $(this).val();
                            var idstr = $(this).attr("id");
                            var del_id = idstr.split('_')[1];
                            $('input[id="pagecontenttypechangeid"]').val('');
                            if(value!=='' && value==='delete')
                            {
                                $.ajax({
                                    url: 'admin.changePageType',
                                    type: 'POST',
                                    data: {
                                        cond:value,
                                        id:del_id,
                                    },
                                    async: false,
                                    success: function (data) {
                                        if(data.msg=="ok"){
                                            getContentTypeList();
                                        }
                                        else{
                                            mjs_module.data.showAlert('Error Save from DB!');
                                        }
                                    },
                                    error: function (jqXHR, errdata, errorThrown) {
                                        console.log(errdata);
                                    }
                                });
                                $(this).val('');
                            }
                            else if(value!=='' && value==='change')
                            {
                                initContentTypeDlg(0);
                                $('#dlgErr').text('').css('display','none');

                                $('.paytype-add-letter').css('display','none');
                                $('.paytype-up-letter').css('display','block');

                                $('#addNextDlg_btn').css('display','none');
                                $('#changeNextDlg_btn').css('display','block');

                                $('#myAddContentTypeModal').modal('show');
                                var prop = $(this).data('prop');
                                changeContenttypeToDlg(del_id, prop);
                                $(this).val('');
                            }
                        });
                    }
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function getPageTypeList()
    {
       setTempLang();

        $.ajax({
            url: 'admin.getPageTypeList',
            data:{
                lang:transedlang
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if(data.msg=="ok")
                {
                    var list = data.list;
                    //console.log(list);
                    if(list!==null && list!=='' && list instanceof Array)
                    {
                       var btntxt_edit = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
                       var btntxt_change = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
                       var btntxt_delete = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
                            var tags='';
                            for (var j = 0; j < list.length; j++)
                            {
                                var obj = list[j];
                                var id = obj.id;
                                var itemcnt = obj.itemcnt;
                                var g_path = obj.g_path;
                                if(j < list.length - 1)
                                    tags +='<div class="row m-0 align-items-start" style="padding: 10px 0; border-bottom: 1px solid #d6d6d6;line-height:30px;">';
                                else
                                    tags +='<div class="row m-0 align-items-start" style="padding: 10px 0; border-bottom: 0;line-height:30px;">';

                                tags+='<div class="col max-width-60 pagecontenttype-checkbox" data-idx="'+id+'">';
                                    tags+='<div class="form-check form-check-inline">';
                                    tags+='<input class="form-check-input" type="checkbox" id="wwgpcCheckbox_'+id+'" value="">';
                                    tags+='</div>';
                                tags+='</div>';

                                var ddttaa='';

                                for (var jj = 0; jj < stored_langs.length; jj++){
                                    var objj = stored_langs[jj];
                                    var status = objj.status;
                                    var iso = objj.iso;
                                    if(status=='enable'){
                                        var cname = objj.name;
                                        cname = cname.toLowerCase();
                                        var v = obj[cname];
                                        ddttaa+=iso+'_'+cname+'_'+v+'-';
                                        tags+='<div class="col">'+v+'</div>';
                                    }
                                }
                                var sustr = ddttaa.substr(0,ddttaa.length-1);
                                tags+='<div class="col max-width-120">';
                                tags+='<select class="my-border-radius-slt form-control float-right"  data-prop="'+sustr+'" id="contenttypecontroller_'+id+'">';
                                tags+='<option value="" class="data-ajax" data-ajax="btntxt_edit" selected>'+btntxt_edit+'</option>';
                                tags+='<option value="change" class="data-ajax" data-ajax="btntxt_change">'+btntxt_change+'</option>';
                                tags+='<option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
                                tags+='</select>';
                                tags+='</div>';

                                tags+='</div>';
                            }

                        $('#pagetype-container').append(tags);
                        $('select[id^="contenttypecontroller_"]').change(function () {
                            var value = $(this).val();
                            var idstr = $(this).attr("id");
                            var del_id = idstr.split('_')[1];
                            $('input[id="pagecontenttypechangeid"]').val('');
                            if(value!=='' && value==='delete')
                            {
                                $.ajax({
                                    url: 'admin.changePageType',
                                    type: 'POST',
                                    data: {
                                        cond:value,
                                        id:del_id,
                                    },
                                    async: false,
                                    success: function (data) {
                                        if(data.msg=="ok"){
                                            getPageTypeList();
                                        }
                                        else{
                                            mjs_module.data.showAlert('Error Save from DB!');
                                        }
                                    },
                                    error: function (jqXHR, errdata, errorThrown) {
                                        console.log(errdata);
                                    }
                                });
                            }
                            else if(value!=='' && value==='change')
                            {
                                initContentTypeDlg(0);
                                $('#dlgErr').text('').css('display','none');

                                $('.paytype-add-letter').css('display','none');
                                $('.paytype-up-letter').css('display','block');

                                $('#addNextDlg_btn').css('display','none');
                                $('#changeNextDlg_btn').css('display','block');

                                $('#myAddContentTypeModal').modal('show');
                                var prop = $(this).data('prop');
                                changeContenttypeToDlg(del_id, prop);
                            }
                        });
                    }
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    //add ckd
    function initContentTypeDlg(n) {
      if(n == 0){
          content_accounting_lang={};
          $('#dlg-contenttype-lang-list').html('');
          $('#pagetype_add_name').val('');
          $('#pagetype_add_span_messagebox').html('');
          $('#pagetype_add_span_messagebox_container').css('display','none');
          $('.page-type-first-content').css('display','block');

          $('#dlg-contenttype-next-lang-list').html('');
          $('.page-type-next-content').css('display','none');
      }
      else if(n == 1)
      {
          $('#pagetype_add_name').val('');
          $('#pagetype_add_span_messagebox').html('');
          $('#pagetype_add_span_messagebox_container').css('display','none');
          $('.page-type-first-content').css('display','block');

          $('#dlg-contenttype-next-lang-list').html('');
          $('.page-type-next-content').css('display','none');
      }
    }
    //add ckd
    function changeContenttypeToDlg(sid, dvalue) {
      //console.log(dvalue);
      var splitstr = dvalue.split('-');
      if (splitstr instanceof Array)
      {
          $('input[id="pagecontenttypechangeid"]').val(sid);
          var tags='';
          var f_ac=0;
          for (var j = 0; j < splitstr.length; j++){
              var iso = splitstr[j].split('_')[0];
              var cname = splitstr[j].split('_')[1];
              var v =splitstr[j].split('_')[2];
              content_accounting_lang[cname]=v;
              var dcont=iso+'-'+cname.toLowerCase();
              var cls='';
              if(v!==undefined && v!==null && v!==''){
                  if(f_ac===0)
                  {
                      cls=' class="active" ';
                      $('#pagetype_add_name').val(v);
                      f_ac=1;
                  }
                  else
                      cls=' class="enable" ';
              }
              tags +='<div class="m-2"><a id="'+iso+'" '+cls+'  data-state="up" data-cont="'+dcont+'" data-name="'+cname.toLowerCase()+'">'+cname+'</a></div>';
          }
          $('#dlg-contenttype-lang-list').html(tags);
          dlg_contenttype_lang_list_a_click();
      }

    }
    //add ckd
    function addContenttypeToDlg(n) {
        var tags='';
        var f_ac=0;
        for (var j = 0; j < stored_langs.length; j++)
        {
            var obj = stored_langs[j];
            var iso = obj.iso;
            var dialCode = obj.dialcode;
            var cname = obj.name;
            var status = obj.status;
            var dcont=iso+'-'+cname.toLowerCase();
            if(status=='enable')
            {
                 if(n===0){
                    content_accounting_lang[cname.toLowerCase()]='';//add key lang
                    tags +='<div class="m-2"><a id="'+iso+'" data-state="add" data-cont="'+dcont+'" data-name="'+cname.toLowerCase()+'">'+cname+'</a></div>';
                 }
                else
                {
                    var cls='';
                    if(content_accounting_lang[cname.toLowerCase()]!==undefined && content_accounting_lang[cname.toLowerCase()]!==null && content_accounting_lang[cname.toLowerCase()]!==''){
                        if(f_ac===0)
                        {
                            cls=' class="active" ';
                            $('#pagetype_add_name').val(content_accounting_lang[cname.toLowerCase()]);
                            f_ac=1;
                        }
                        else
                            cls=' class="enable" ';
                    }
                    else
                        content_accounting_lang[cname.toLowerCase()]='';

                    tags +='<div class="m-2"><a id="'+iso+'" '+cls+' data-state="add" data-cont="'+dcont+'" data-name="'+cname.toLowerCase()+'">'+cname+'</a></div>';
                }
            }
        }
        $('#dlg-contenttype-lang-list').html(tags);
        dlg_contenttype_lang_list_a_click();
    }
    //add ckd
    function dlg_contenttype_lang_list_a_click(){
        $('#dlg-contenttype-lang-list a').click(function ()
        {
            var this_state = $(this).data('state');
            if(this_state==='up'){}
            else if(this_state==='add')
            {}

            var this_n = $(this).data('name');
            var this_id=$(this).attr('id');

            $('#dlg-contenttype-lang-list a').each(function (index, element) {
                var ele_n = $(element).data('name');
                var ele_id = $(element).attr('id');
                if(this_id!==ele_id)
                {
                    var input_n='';
                    if($(element).hasClass('active'))
                    {
                        $(element).removeClass('active');
                        input_n = $.trim($('#pagetype_add_name').val());
                        content_accounting_lang[ele_n]=input_n;
                        if(content_accounting_lang[ele_n]!=='')
                            $(element).addClass('enable');
                    }
                    else
                    {
                        if(content_accounting_lang[ele_n]!=='')
                            $(element).addClass('enable');
                    }
                }
            });

            if(content_accounting_lang[this_n]!=='')
            {
                $(this).removeClass('enable');
                $('#pagetype_add_name').val(content_accounting_lang[this_n]);
            }
            else
                $('#pagetype_add_name').val('');

            $(this).addClass('active');

        });
    }

    //add ckd
    function addContenttypeToNextDlg() {
        var keys = Object.keys(content_accounting_lang);
        $('#dlg-contenttype-next-lang-list').html('');
        if(keys.length < 1)
            return;

        var tag='';
        for (var i = 0; i < keys.length; i++) {
            var key=keys[i];
            var v = content_accounting_lang[key];
            tag+='<div class="col-3 wes-theme-color">';
            tag+= key;
            tag+='</div>';
            tag+='<div class="col-9">';
            tag+=v;
            tag+='</div>';
        }

        $('#dlg-contenttype-next-lang-list').html(tag);
    }

    export default {
        name: "WebsWesGlobalPagesContent",
        components: {
            'editor0': Editor
        },
        data(){
            return {
                pageid:'webs-wesglobal-pages-content-fav',
                pgtxt_translation:'',
                pgtxt_list:'',
                pgtxt_contenttype:'',
                pgtxt_select:'',
                pgtxt_content:'',
                pgtxt_type:'',
                pgtxt_delete:'',
                pgtxt_dbsaved:'',
                btntxt_nextstep:'',
                pgtxt_confirm:'',
                btntxt_cancel:'',
                pgtxt_notpermission:'',

                btntxt_add:'',
                btntxt_edit:'',
                btntxt_delete:'',
                btntxt_change:'',
                username:'',
                uname:'',
            }
        },
        computed: {
            cpgtxt_translation:function () {
                return this.pgtxt_translation
            },
            cpgtxt_list:function () {
                return this.pgtxt_list
            },
            cpgtxt_contenttype:function () {
                return this.pgtxt_contenttype
            },
            cpgtxt_select:function () {
                return this.pgtxt_select
            },
            cpgtxt_delete:function () {
                return this.pgtxt_delete
            },
            cpgtxt_content:function () {
                return this.pgtxt_content
            },
            cbtntxt_add:function () {
                return this.btntxt_add
            },
            cbtntxt_nextstep:function () {
                return this.btntxt_nextstep
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit
            },
            cbtntxt_delete:function () {
                return this.btntxt_delete
            },
            cpgtxt_type:function () {
                return this.pgtxt_type
            },
            cpgtxt_priority:function () {
                return this.pgtxt_priority
            },
            cpgtxt_dbsaved:function () {
                return this.pgtxt_dbsaved
            },
            cpgtxt_confirm:function () {
                return this.pgtxt_confirm
            },
            cbtntxt_cancel:function () {
                return this.btntxt_cancel
            },
            cbtntxt_change:function () {
                return this.btntxt_change
            },

            contentchange: function () {//cckd
                mjs_module.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });
                mjs_module.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                return this.$store.state.contentchange;
            },
        },
        created() {
            var userinfo = nav_module.data.jsonparse(window.Laravel.userinfo);
            this.username = userinfo.username;
            this.uname = userinfo.name;
        },
        beforeMount(){
        },
        mounted(){
            /* fav part*/
            vueOBJ=this;
            pgperm = nav_module.data.getPagePermission(this.$store.state.permission, this.pageid);
            $('#'+this.pageid).click(function(){
                mjs_module.data.addOnfavList(this, vueOBJ);
            });
            mjs_module.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            this.getWWGStoredLang();
            //setTimeout(this.initpage,500);
        },
        methods:{
           getSiteFaveritelist(list){
                if(list!=null && list!='')
                {
                    let imgsrc='/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src",imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }
            },
            getWWGStoredLang(){
                 axios.post('admin.getWWGStoredLang').then((response) => {
                    let msg = response.data.msg;
                    if(msg =="ok")
                    {
                        if(response.data.langlist!=''){
                            stored_langs = $.parseJSON(response.data.langlist);
                            vueOBJ.initpage();
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                })
            },
            initpage()
            {
                getContentTypeList();

                $('#pageContAdd_btn').click(function (e)
                {
                    e.preventDefault();
                    e.stopPropagation();
                    if(pgperm.create != 1){
                        mjs_module.data.showAlert('pgtxt_notpermission');
                        return;
                    }
                   initContentTypeDlg(0);
                   $('#dlgErr').text('').css('display','none');

                   $('.paytype-add-letter').css('display','block');
                   $('.paytype-up-letter').css('display','none');

                   $('#addNextDlg_btn').css('display','block');
                   $('#changeNextDlg_btn').css('display','none');

                   if(stored_langs!=='')
                   {
                       $('#myAddContentTypeModal').modal('show');
                       addContenttypeToDlg(0);
                   }
                   else
                   {
                       mjs_module.data.showAlert('You no have language. please Add language!');
                   }
                });

                $('#wwpc_side_content_type_add').click(function () {
                    if(pgperm.create != 1){
                        mjs_module.data.showAlertHidden('pgtxt_notpermission');
                        return;
                    }

                    $('#wwpc_content_type_dlgErr').text('').css('display','none');
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
                    if(pgperm.create != 1){
                        mjs_module.data.showAlert('pgtxt_notpermission');
                        return;
                    }
                    $('#wwpc_content_page_dlgErr').text('').css('display','none');
                    $('#wwpc_sel_content_page_type').val(firsttypeselectId);
                    $('#wwpc_mySideContentPageModal').modal('show');
                    getSideContentCountAccoringPageType(1, firsttypeselectId, 0);
                });

                $('#wwpc_sel_content_page_type').change(function () {
                    var typeid = $('#wwpc_sel_content_page_type').val();
                    getSideContentCountAccoringPageType(1, typeid, 0);
                });
            },
            addPageTypeToOne(){//add ckd
               var input_n = $.trim($('#pagetype_add_name').val());
               if(input_n !== ''){
                   var ele_n = $('#dlg-contenttype-lang-list a.active').data('name');
                   if(ele_n !== undefined)
                     content_accounting_lang[ele_n]=input_n;
               }
               else
               {
                   var ele_n = $('#dlg-contenttype-lang-list a.active').data('name');
                   if(ele_n !== undefined)
                     content_accounting_lang[ele_n]='';
               }
                var keys = Object.keys(content_accounting_lang);
                if(keys.length < 1) return;
                var msg='';
                var idx=0;
                for (var i = 0; i < keys.length; i++) {
                    var key=keys[i];
                    var v = content_accounting_lang[key];
                    if(v == '')
                    {
                        if(idx==0)
                            msg+='There is no content in <span style="color:#67a6d2">' + key + '</span>';
                        else
                            msg+=' and <span style="color:#67a6d2">' + key + '</span>';
                        idx++;
                    }
                }
                if(msg!=='')
                {
                    $('#pagetype_add_span_messagebox').html(msg);
                    $('#pagetype_add_span_messagebox_container').css('display','block');
                }
                else
                {
                    $('.page-type-first-content').css('display','none');
                    $('.page-type-next-content').css('display','block');
                    addContenttypeToNextDlg();
                }
            },
            changePageTypeToNextOne(){
                var cid=$('input[id="pagecontenttypechangeid"]').val();
               // console.log(cid);
                $.ajax({
                    url: 'admin.changePageType',
                    type: 'POST',
                    data: {
                        cond:'update',
                        id:cid,
                        upstr:content_accounting_lang
                    },
                    async: false,
                    success: function (data) {
                        if(data.msg=="ok")
                        {
                            $('#dlgNextErr').text('Success Update in DB!').css({'display':'block','color':'#16D414'});
                            setTimeout(function () {
                                $('#dlgNextErr').text('').css('display','none');
                                $("#myAddContentTypeModal").modal('hide');
                            },1000);
                           getContentTypeList();
                        }
                        else if(data.msg=="uperr"){
                            $('#dlgNextErr').text('Error Update from DB!').css({'display':'block','color':'#d41b11'});
                            setTimeout(function () {
                                $('#dlgNextErr').text('').css('display','none');
                            },3000);
                        }
                        else
                           {
                               $('#dlgNextErr').text(data.msg).css({'display':'block','color':'#d41b11'});
                               setTimeout(function () {
                                   $('#dlgNextErr').text('').css('display','none');
                               },3000);
                           }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            },
            addPageTypeToNextOne(){ //add insert to db
                $.ajax({
                    url: 'admin.addPageType',
                    type: 'POST',
                    data: {
                        contentdata:content_accounting_lang
                    },
                    async: false,
                    success: function (data) {
                        if(data.msg=="ok")
                        {
                            $('#dlgNextErr').text('Success Save in DB!').css({'display':'block','color':'#16D414'});
                            setTimeout(function () {
                                $('#dlgNextErr').text('').css('display','none');
                                $("#myAddContentTypeModal").modal('hide');
                            },1000);
                            getContentTypeList();

                        }
                        else if(data.msg=="du"){
                            $('#dlgNextErr').text('Exist same name in DB!').css({'display':'block','color':'#d41b11'});
                            setTimeout(function () {
                                $('#dlgNextErr').text('').css('display','none');
                            },3000);
                        }
                        else {
                            $('#dlgNextErr').text(data.msg).css({'display':'block','color':'#d41b11'});
                            setTimeout(function () {
                                $('#dlgNextErr').text('').css('display','none');
                            },3000);
                        }

                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            },
            cancelPageTypeToNextOne(){//return pre page
                initContentTypeDlg(1);
                addContenttypeToDlg(1);
            },

        }//method

    }
</script>

<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_webs_wesglobal_appearance_head}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_webs_weschina}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_appearance}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_webs_wesglobal_appearance_head}}
                          <a href="#" id="webs-wesglobal-appearance-head-fav" data-status="off" data-page-info="Head_webs-wesglobal-appearance-head">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="page1_translate_bar">
                    <div class="page1_translate_text">{{cpgtxt_translation}}</div>
                    <div class="page1_translate_bar_left" id="translanglist">
                        <!--translation langs-->
                    </div>
                    <div class="page1_translate_bar_right">
                        <span class="page1_translate_span_right cursor-pointer" id="wwga_save" @click="SavePageContent">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em"  style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:sharp-save-alt"><path d="M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67l2.59-2.58L17 11.5l-5 5l-5-5l1.41-1.41L11 12.67V3h2v9.67z" fill="currentColor"></path></svg>
                            {{cpgtxt_save}}
                        </span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <span class="page1_translate_span_right cursor-pointer" @click="PagePreview">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:outline-preview"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-7-8.5c1.84 0 3.48.96 4.34 2.5c-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" fill="currentColor"></path></svg>
                            {{cpgtxt_preview}}
                        </span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <span class="page1_translate_span_right cursor-pointer" @click="PageRelease">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:outline-new-releases"><path d="M23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68L23 12zm-4.51 2.11l.26 2.79l-2.74.62l-1.43 2.41L12 18.82l-2.58 1.11l-1.43-2.41l-2.74-.62l.26-2.8L3.66 12l1.85-2.12l-.26-2.78l2.74-.61l1.43-2.41L12 5.18l2.58-1.11l1.43 2.41l2.74.62l-.26 2.79L20.34 12l-1.85 2.11zM11 15h2v2h-2zm0-8h2v6h-2z" fill="currentColor"></path></svg>
                            {{cpgtxt_release}}
                        </span>&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="page1_alarm_bar" style="margin-bottom: 0">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="mi:circle-warning"><g fill="none"><path d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z" fill="currentColor"></path><path d="M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z" fill="currentColor"></path><path d="M10.5 16.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z" fill="currentColor"></path></g></svg>
                    <span>{{cpgtxt_nosavenoappear}}</span>
                </div>
            </div>
        </div>

        <div id="HeadContainer" class="sl-tab-container active" style="margin-top:20px;">
            <form method="post" enctype="multipart/form-data" name="wwga_head_flw" id="wwga_head_flw">
                <input type="hidden" name="wwgafrm"  value="head"/>
                <input type="hidden" name="tranedLang" id="tranedLang"  value=""/>

                <div class="row"><!--{{top Header}}-->
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title m-b-30">{{cpgtxt_topheader}}</h6>
                                <div class="row">
                                    <div class="col-md-1">
                                        <div class="form-group m-b-0" style="line-height:40px;">
                                            {{cpgtxt_hide}}
                                        </div>
                                    </div>
                                    <div class="col-md-11">

                                        <input type="hidden" name="wgtp_location_val" id="wgtp_location_val" value="on">
                                        <div class="form-check" style="margin: 10px 0;line-height: 24px;">
                                            <div class="form-check-input group "  name="wgtplocation" id="wgtplocation">
                                                <div></div>
                                            </div>
                                            <label class="form-check-label" for="wgtplocation">
                                                {{cpgtxt_location}}
                                            </label>
                                        </div>
                                        <input type="hidden" name="wgtp_header_val" id="wgtp_header_val" value="on">
                                        <div class="form-check" style="margin: 10px 0;line-height: 24px;">
                                            <div class="form-check-input group"  name="wgtptopheader" id="wgtptopheader">
                                                <div></div>
                                            </div>
                                            <label class="form-check-label" for="wgtptopheader">
                                                {{cpgtxt_topheader}}
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row"><!--{{Toolbar}}-->
                    <div class="col-md-12">

                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title m-b-30">{{cpgtxt_toolbar}}</h6>
                                <div class="row">
                                    <div class="col-md-1">
                                        <div class="form-group m-b-0" style="line-height:40px;">
                                            {{cpgtxt_hide}}
                                        </div>
                                    </div>
                                    <div class="col-md-11">
                                        <input type="hidden" name="wwga_calendar_val" id="wwga_calendar_val" value="on">
                                        <div class="form-check" style="margin: 10px 0;line-height: 24px;">
                                            <div class="form-check-input group "  name="wwga_calendar" id="wwga_calendar">
                                                <div></div>
                                            </div>
                                            <label class="form-check-label" for="wwga_calendar">
                                                {{cpgtxt_calendar}}
                                            </label>
                                        </div>
                                        <input type="hidden" name="wwga_toobar_val" id="wwga_toobar_val" value="on">
                                        <div class="form-check" style="margin: 10px 0;line-height: 24px;">
                                            <div class="form-check-input group"  name="wwga_toolbar" id="wwga_toolbar">
                                                <div></div>
                                            </div>
                                            <label class="form-check-label" for="wwga_toolbar">
                                                {{cpgtxt_toolbar}}
                                            </label>
                                        </div>
                                        <div class="form-check" style="margin: 10px 0;line-height: 24px;padding-left:0">
                                            <div id="webs-wesglobal-toolbar-btn" class="btn btn-outline-light webglogappearbtn">
                                                <span> + {{cbtntxt_add}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row"><!--{{Module}}-->
                    <div class="col-md-12">
                        <input type="hidden" name="wwga_module_val" value="">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title m-b-30">{{cpgtxt_module}}</h6>
                                <div class="row">
                                    <input type="hidden" name="wwga_modulelang_val" id="wwga_modulelang_val" value="on">
                                    <div class="col-md-1">
                                        <div class="form-group m-b-0" style="line-height:40px;">
                                            {{cpgtxt_hide}}
                                        </div>
                                    </div>
                                    <div class="col-md-11">
                                        <div class="form-check" style="margin: 10px 0;line-height: 24px;">
                                            <div class="form-check-input group"  name="wwga_modulelang" id="wwga_modulelang">
                                                <div></div>
                                            </div>
                                            <label class="form-check-label" for="wwga_modulelang">
                                                {{cpgtxt_language}}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
        <!--modal part-->
        <div class="modal fade" id="previewModal" role="dialog">
            <div class="modal-dialog modal-sm" style="min-width: 95%!important;">
                <div class="modal-content" style="border-radius:0">
                    <div class="modal-header" style="height: 25px;padding: 0 5px;">
                        <h4 class="modal-title">page preview</h4>
                        <button type="button" class="close" data-dismiss="modal" style="width: 18px; height: 18px;padding: 0;">&times;</button>
                    </div>
                    <div class="modal-body" id="previewModalModalbody" style="padding:0;">
                        <!-- <iframe src="/home" style="border:none;" title="preview"></iframe>-->
                    </div>
                </div>
            </div>
        </div>
        <!--end modal-->
    </div>
</template>
<style>
    .sl-tab-container{
        display: none;
    }
    .sl-tab-container.active{
        display: block;
    }
    .ck.ck-editor {
        width: 100%;
    }
    .tox.tox-tinymce{
        border-radius: 20px;
        width: 100% !important;
        min-height: 350px !important;
    }
    .apper-top-lang{
        align-items:center;
        justify-content: center
    }
    .apper-top-lang div{
        line-height: 25px;
        text-align: center;
    }
    .form-check-input.group{
        width: 16px;height: 16px;border-radius: 16px; border: 1px solid #bbbbbb;
        cursor: pointer;
    }
    .form-check-input.group > div{
        width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;
    }
    .form-check-input.group.active > div{
        width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;
    }
    #wwga_footbarleft_upload_preview, #wwga_footbarright_upload_preview{
        background-repeat: no-repeat;
        background-size:100% 100%;
    }

</style>

<script>
    import lang_module from "../../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../../assets/jsfunc/mjs_module";
    import Editor from '@tinymce/tinymce-vue';
    import nav_module from "../../../assets/jsfunc/nav_module";



    let vueOBJ=null;
    let  wwgfield='head';
    var pgperm={};

    export default {
        name: "WebsWesGlobalAppearanceHead",
        data(){
            return {
                pageid:'webs-wesglobal-appearance-head-fav',
                mu_webs:'',
                musu_webs_weschina:'',
                mususu_webs_wesglobal_appearance:'',
                musususu_webs_wesglobal_appearance_head:'',
                pgtxt_head:'',
                pgtxt_foot:'',
                pgtxt_topheader:'',
                pgtxt_hide:'',
                pgtxt_location:'',
                pgtxt_logo:'',
                btntxt_edit:'',
                pgtxt_slogan:'',
                pgtxt_bar:'',
                pgtxt_normal:'',
                pgtxt_css:'',
                pgtxt_content:'',
                pgtxt_image:'',
                pgtxt_link:'',
                pgtxt_center:'',
                pgtxt_right:'',
                pgtxt_font:'',
                pgtxt_size:'',
                pgtxt_toolbar:'',
                pgtxt_calendar:'',
                pgtxt_module:'',
                pgtxt_left:'',
                btntxt_add:'',
                pgtxt_language:'',
                pgtxt_translation:'',
                pgtxt_save:'',
                pgtxt_preview:'',
                pgtxt_release:'',
                pgtxt_nosavenoappear:'',
                btntxt_ok:'',
                btntxt_cancel:'',
                pgtxt_wantdeleteitem:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
            }
        },
        created() {
        },
        beforeMount(){
        },
        computed: {
            cmususu_webs_wesglobal_appearance:function () {
                return this.mususu_webs_wesglobal_appearance
            },
            cmusususu_webs_wesglobal_appearance_head:function () {
                return this.musususu_webs_wesglobal_appearance_head
            },
            cmu_webs:function () {
                return this.mu_webs
            },
            cmusu_webs_weschina:function () {
                return this.musu_webs_weschina
            },
            cpgtxt_head:function () {
                return this.pgtxt_head
            },
            cpgtxt_foot:function () {
                return this.pgtxt_foot
            },
            cpgtxt_topheader:function () {
                return this.pgtxt_topheader
            },
            cpgtxt_hide:function () {
                return this.pgtxt_hide
            },
            cpgtxt_location:function () {
                return this.pgtxt_location
            },
            cpgtxt_logo:function () {
                return this.pgtxt_logo
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit
            },
            cpgtxt_slogan:function () {
                return this.pgtxt_slogan
            },
            cpgtxt_bar:function () {
                return this.pgtxt_bar
            },
            cpgtxt_normal:function () {
                return this.pgtxt_normal
            },
            cpgtxt_css:function () {
                return this.pgtxt_css
            },
            cpgtxt_content:function () {
                return this.pgtxt_content
            },
            cpgtxt_image:function () {
                return this.pgtxt_image
            },
            cpgtxt_link:function () {
                return this.pgtxt_link
            },
            cpgtxt_center:function () {
                return this.pgtxt_center
            },
            cpgtxt_right:function () {
                return this.pgtxt_right
            },
            cpgtxt_left:function () {
                return this.pgtxt_left
            },
            cpgtxt_font:function () {
                return this.pgtxt_font
            },
            cpgtxt_size:function () {
                return this.pgtxt_size
            },
            cpgtxt_toolbar:function () {
                return this.pgtxt_toolbar
            },
            cpgtxt_calendar:function () {
                return this.pgtxt_calendar
            },
            cpgtxt_module:function () {
                return this.pgtxt_module
            },
            cbtntxt_add:function () {
                return this.btntxt_add
            },
            cpgtxt_language:function () {
                return this.pgtxt_language
            },
            cpgtxt_translation:function () {
                return this.pgtxt_translation
            },
            cpgtxt_save:function () {
                return this.pgtxt_save
            },
            cpgtxt_preview:function () {
                return this.pgtxt_preview
            },
            cpgtxt_release:function () {
                return this.pgtxt_release
            },
            cpgtxt_nosavenoappear:function(){
                return this.pgtxt_nosavenoappear
            },

            contentchange: function () {//cckd
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    //console.log(obj.hasOwnProperty(key));
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });
                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                return this.$store.state.contentchange;
            },
        },
        mounted(){
            /* fav part*/
            vueOBJ=this;
            pgperm = nav_module.data.getPagePermission(this.$store.state.permission, this.pageid);
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            this.initpage();
            this.getWWGStoredLang();

        },
        methods:{
            /* fav part */
            getSiteFaveritelist(list){
                if(list!=null && list!='')
                {
                    let imgsrc='/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src",imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }
            },  /*fav part*/
            getWWGStoredLang(){
                axios.post('admin.getWWGStoredLang').then((response) => {
                    let msg = response.data.msg;
                    if(msg =="ok")
                    {
                        var stored_langs = response.data.langlist;
                        if(stored_langs!==''){
                            stored_langs = $.parseJSON(stored_langs);
                            var tags='';
                            for (var j = 0; j < stored_langs.length; j++)
                            {
                                var obj = stored_langs[j];
                                // console.log(obj);
                                var iso = obj.iso;
                                var dialCode = obj.dialcode;
                                var cname = obj.name;
                                var status = obj.status;
                                var dcont=iso+'-'+dialCode+'-'+cname;
                                if(status=='enable')
                                    tags +='<span class="page1_translate_span" style="cursor: pointer" data-cont="'+dcont+'">'+cname+'</span>&nbsp;&nbsp;&nbsp;';
                            }
                            $('#translanglist').html(tags);

                            $('.page1_translate_span').click(function () {
                                $('.page1_translate_span').removeClass('active');
                                $(this).addClass('active');
                                var cont = $(this).attr('data-cont');
                                var len= cont.split('-').length;
                                if(len > 0){
                                    var sky = cont.split('-')[0]+'-'+cont.split('-')[1];
                                    $('#tranedLang').val(sky);
                                    vueOBJ.loaddata();
                                }
                            });
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                })
            },
            SavePageContent() {
                var formData='';
                var tlang = $('#tranedLang').val();

                if(pgperm.create != 1){
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }

                if(tlang==''){
                    myjs.data.showAlert('Please Select language of Content for save!');
                    return;
                }

                    formData = new FormData($("#wwga_head_flw")[0]);

                $.ajax({
                    url: 'admin.saveWebsWesChinaUpload',
                    type: 'POST',
                    data: formData,
                    async: false,
                    success: function (data) {
                        // data = JSON.parse(data);
                        if(data.msg=="ok")
                        {
                            myjs.data.showAlert('Sucess save in Database');
                        }
                        else
                        {
                            console.log(data.msg);
                            myjs.data.showAlert(data.msg);
                        }

                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    },
                    cache: false,
                    contentType: false,
                    processData: false
                });
            },
            PagePreview(){
                $("#previewModalModalbody").html('');
                var iframeH = $(window).height()-100;
                var lang = $('#tranedLang').val();
                if(lang=='' || lang==null)
                    lang = "en";
                else
                    lang = lang.split("-")[0];
                $("#previewModalModalbody").html('<iframe src="/'+lang+'/preview" style="border:none;width:100%; height: '+iframeH+'px;" title="preview"></iframe>');
                $("#previewModal").modal('show');
            },
            PageRelease(){

                if(pgperm.create != 1){
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }

                var tlang = $('#tranedLang').val();
                if(tlang=='')
                {
                    myjs.data.showAlert('Please Select language of Content for save!');
                    return;
                }
                $.ajax({
                    url: 'admin.websChinaFrontPageRelease',
                    type: 'POST',
                    data: {
                        trans:tlang,
                        part:"HeadFootBar",
                        tabstatus:'head'
                    },
                    success: function (data) {
                        if(data.msg=="ok"){
                            myjs.data.showAlert('Success Release Page');
                        }
                        else
                            myjs.data.showAlert(data.msg);
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    },
                });
            },
            initpage() {

                $("#wwga_modulelang").click(function () {
                    if($(this).hasClass('active')){
                        $(this).removeClass('active');
                        $('#wwga_modulelang_val').val('on');
                    }
                    else{
                        $(this).addClass('active');
                        $('#wwga_modulelang_val').val('off');
                    }
                });

                $("#wwga_calendar, #wwga_toolbar").click(function () {
                    if($(this).hasClass('active'))
                    {
                        var thisid=$(this).attr('id');
                        if(thisid == 'wwga_calendar'){
                            $('#wwga_calendar_val').val('on');
                        }
                        else if(thisid == 'wwga_toolbar'){
                            $('#wwga_toobar_val').val('on');
                        }

                        $(this).removeClass('active');
                    }
                    else
                    {
                        var thisid=$(this).attr('id');
                        if(thisid == 'wwga_calendar'){
                            $('#wwga_calendar_val').val('off');
                        }
                        else if(thisid == 'wwga_toolbar'){
                            $('#wwga_toobar_val').val('off');
                        }
                        $(this).addClass('active');
                    }
                });

                $("#wgtplocation, #wgtptopheader").click(function () {
                    if($(this).hasClass('active'))
                    {
                        var thisid=$(this).attr('id');
                        if(thisid == 'wgtplocation'){
                            $('#wgtp_location_val').val('on');
                        }
                       else if(thisid == 'wgtptopheader'){
                            $('#wgtp_header_val').val('on');
                        }
                        $(this).removeClass('active');
                    }
                    else
                    {
                        var thisid=$(this).attr('id');
                        if(thisid == 'wgtplocation'){
                            $('#wgtp_location_val').val('off');
                        }
                        else if(thisid == 'wgtptopheader'){
                            $('#wgtp_header_val').val('off');
                        }
                        $(this).addClass('active');
                    }
                });

                $('input[name="wwga_footbarleft"]').on( "click", function () {
                    var v = $(this).val();
                    //console.log(v);
                    if(v=='normal'){
                        $('.barleft_css_part').css('display','none');
                        $('.barleft_normal_part').css('display','block');
                    }
                    else if(v=='css'){
                        $('.barleft_css_part').css('display','block');
                        $('.barleft_normal_part').css('display','none');
                    }
                } );
                /*barcent*/
                $('input[name="wwga_footbar_cent"]').on( "click", function () {
                    var v = $(this).val();
                    //console.log(v);
                    if(v=='normal'){
                        $('.barcent_css_part').css('display','none');
                        $('.barcent_normal_part').css('display','block');
                    }
                    else if(v=='css'){
                        $('.barcent_css_part').css('display','block');
                        $('.barcent_normal_part').css('display','none');
                    }
                } );

               // this.loaddata();

            },
            loaddata()
            {
                var transedlang = $('#tranedLang').val();
                $.ajax({
                    url: 'admin.getWebsWesChinaUpload',
                    data: {
                        tedLang: transedlang,
                        wwgfield:wwgfield
                    },
                    type: 'POST',
                    success: function (data) {
                        var list = data.lists;
                        //console.log(list);
                        if(list!=='')
                        {

                                if (list.toplocation == 'off')
                                    $('#wgtplocation').addClass('active');
                                else
                                    $('#wgtplocation').removeClass('active');

                               $('#wgtp_location_val').val(list.toplocation);

                                if (list.topheader == 'off') {
                                    $('#wgtptopheader').addClass('active');
                                }
                                else
                                    $('#wgtptopheader').removeClass('active');

                                $('#wgtp_headbar_val').val(list.topheader);

                                if (list.toolcalc == 'off') {
                                    $('#wwga_calendar').addClass('active');
                                }
                                else
                                    $('#wwga_calendar').removeClass('active');

                                $('#wwga_calendar_val').val(list.toolcalc);

                                if (list.toolbar == 'off') {
                                    $('#wwga_toolbar').addClass('active');
                                }
                                else
                                    $('#wwga_toolbar').removeClass('active');

                                $('#wwga_toobar_val').val(list.toolbar);

                                if (list.modules == 'off') {
                                    $('#wwga_modulelang').addClass('active');
                                }
                                else
                                    $('#wwga_modulelang').removeClass('active');

                               $('#wwga_modulelang_val').val(list.modules);


                            if(transedlang!=null && transedlang!='')
                            {
                                $('.page1_alarm_bar').addClass('active');
                                $('.page1_alarm_bar span').text('Save  Appear');
                            }

                        }
                        else{
                            $('.page1_alarm_bar').removeClass('active');
                            $('.page1_alarm_bar span').text('No Save No Appear');
                        }

                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            }
        }//method

    }
</script>

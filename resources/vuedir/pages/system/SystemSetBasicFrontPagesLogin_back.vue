<template>
    <div style="width: 100%">
        <div style="display: none">{{contentchange}}</div>
        <div class="page1_content_side_bar" style="display: flex; margin-bottom: 20px;">
            <div class="page_login_tab">
                <div class="page1_content_side_bar_text page1_content_side_bar_seleted" data-target="sharinglogin">{{cpgtxt_sharinglogin}} {{cpgtxt_bar}}</div>
            </div>
            <div class="page_login_tab">
                <div id="ssb_frontpate_login_bar" class="page1_content_side_bar_text" data-target="instructions">{{cpgtxt_instructions}} {{cpgtxt_bar}}</div>
            </div>
            <div class="page_login_tab">
                <div class="page1_content_side_bar_text" data-target="advanced">{{cpgtxt_advanced}} {{cpgtxt_css}}</div>
            </div>
        </div>

        <div class="row">
            <!--sharinglogin-->
            <div class="col-md-12 page_front_content_list active" id="sharinglogin">
            </div>
            <!--instructions-->
            <div class="col-md-12 page_front_content_list" id="instructions">
                <div class="page1_content_content_bar">
                    <form method="post" enctype="multipart/form-data" name="instruct_frm" id="instruct_frm">
                        <input type="hidden" name="transLang" id="instruct_frm_transLang" value=""  >
                        <input type="hidden" name="login_instruction_content_val" id="login_instruction_content_val" value="en-1">
                        <div class="page1_content_content_title">{{cpgtxt_instructions}} {{cpgtxt_bar}}</div>
                        <div class="page1_content_content page2_content_text">
                            <div class="row page2_row">
                                <div class="col-md-3">
                                    <span>{{cpgtxt_content}}</span>
                                </div>
                                <div class="col-md-5">
                                    <textarea  placeholder="currently only china mobile phone number is supported" class="form-control border-input-text" name="login_instruction_content" id="login_instruction_content" style="min-height: 60px;" value=""></textarea>
                                </div>
                            </div>
                            <div class="row page2_row">
                                <div class="col-sm-3">
                                    <span>{{cpgtxt_maximumcharactersperline}}</span>
                                </div>
                                <div class="col-md-5">
                                    <input type="number" value="20"  class="form-control border-input-text" name="login_instruction_maxline" id="login_instruction_maxline">
                                </div>
                                <div class="col-md-3">
                                    {{cpgtxt_pleaseenter}} 20-50
                                </div>
                            </div>

                            <div class="row page2_row">
                                <div class="col-sm-3">
                                    <span>{{cpgtxt_maximumcharacterspernumber}}</span>
                                </div>
                                <div class="col-md-5">
                                    <input type="number" value="50"  class="form-control border-input-text" name="login_instruction_maxnum" id="login_instruction_maxnum">
                                </div>
                                <div class="col-md-3">
                                    {{cpgtxt_pleaseenter}} 50-100
                                </div>
                            </div>

                            <div class="row page2_row">
                                <div class="col-sm-3">
                                    <span>{{cpgtxt_fontcolour}}</span>
                                </div>
                                <div class="col-md-2">
                                    <input type="hidden" name="wwgp_instruction_font_color_val" id="wwgp_instruction_font_color_val" value="#000000">
                                    <div id="wwgp_instruction_font_colorpicker"  data-color="#000000" style="border: 1px solid #aaaaaa; width: 70px; height: 75%; cursor: pointer; background: rgb(227, 13, 13);"></div>

                                </div>
                                <div class="col-md-4">
                                    <div id="wwgp_instruction_font_color_value">#000000</div>
                                </div>
                            </div>

                            <div class="row page2_row">
                                <div class="col-sm-3">
                                    <span>{{cpgtxt_tab}}  {{cpgtxt_border}}  {{cpgtxt_color}}</span>
                                </div>
                                <div class="col-md-2">
                                    <input type="hidden" name="wwgp_instruction_border_color_val" id="wwgp_instruction_border_color_val" value="#000000">
                                    <div id="wwgp_instruction_border_colorpicker"  data-color="#000000" style="border: 1px solid #aaaaaa; width: 70px; height: 75%; cursor: pointer; background: rgb(227, 13, 13);"></div>
                                </div>
                                <div class="col-md-4">
                                    <div id="wwgp_instruction_border_color_value">#000000</div>
                                </div>
                            </div>

                            <div class="row page2_row">
                                <div class="col-sm-3">
                                    <span>{{cpgtxt_tab}}  {{cpgtxt_background}}</span>
                                </div>
                                <div class="col-md-2">
                                    <input type="hidden" name="wwgp_instruction_back_color_val" id="wwgp_instruction_back_color_val" value="#000000">
                                    <div id="wwgp_instruction_back_colorpicker"  data-color="#000000" style="border: 1px solid #aaaaaa; width: 70px; height: 75%;  cursor: pointer; background: rgb(227, 13, 13);"></div>
                                </div>
                                <div class="col-md-4">
                                    <div id="wwgp_instruction_back_color_value">#000000</div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
            <!--Advanced-->
            <div class="col-md-12 page_front_content_list" id="advanced">
                <div class="page1_content_content_bar">
                    <form method="post" enctype="multipart/form-data" name="advan_frm" id="advan_frm">
                        <input type="hidden" name="transLang" id="advan_frm_transLang" value=""  >
                        <div class="page1_content_content_title">{{cpgtxt_background}}</div>
                        <div class="page1_content_content">
                            <div class="row">
                                <div class="col-md-2">
                                    <span>{{cpgtxt_image}}</span>
                                </div>
                                <div class="col-md-3">
                                    <div style="display: none">
                                        <input type="hidden" name="advan_file_pre" id="advan_file_pre" value="">
                                        <input type="file" name="advan_file" id="advan_file" value="">
                                    </div>
                                    <img src="/images/icons/image_tp.png" style="width: 100px;" alt="" id="advan_file_preview" onerror="this.src ='/images/noimg.png';">
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn page1_custom_btn" id="advan_file_upbtn" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">
                                        {{cbtntxt_edit}}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div style="text-align: right; margin-bottom: 15px;">
            <div id="add_domainBtn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-30"  @click.stop="SavePageContent()">
                <span>{{ cbtntxt_savechange }}</span>
            </div>
        </div>

        <!--modal part-->
        <div class="modal fade" id="previewModal" role="dialog">
            <div class="modal-dialog modal-sm" style="min-width: 95%!important;">
                <div class="modal-content" style="border-radius:0">
                    <div class="modal-header" style="height: 25px;padding: 0 5px;">
                        <h4 class="modal-title" style="margin: 0px auto;">{{cpgtxt_previewpage}}</h4>
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
    .page1_content_content_bottom svg{
        color: #6b85e2;
    }
    .page_front_content_list{
        display: none;
    }
    .page_front_content_list.active{
        display: block;
    }
    .page1_content_side_bar .page1_content_side_bar_text{
        cursor: pointer;
        height: auto;
        float: left;
    }
    #addpic_btn{
        height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;
    }
    .page_login_tab{
        width: 150px;
    }
</style>

<script>
    import lang_module from "../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";
    import media_module from "../../assets/jsfunc/media_module";

    var preview='';
    var tabstatus=0;
    var vueOBJ=null;
    var wwgfield='sharinglogin';
    var pgtxt_selectlanguagesave = "";
    var pgperm={};

    function initSharinglogin() {

    }

    function  getSharingloginData() {
        return;

    }

    function initInstructions() {
        const wwgp_instruction_font_colorpicker = document.getElementById('wwgp_instruction_font_colorpicker');
        let pickercolor = new ColorPicker(wwgp_instruction_font_colorpicker, '#000000');
        wwgp_instruction_font_colorpicker.addEventListener('colorChange', function (event) {
            const color = event.detail.color.hexa;
            $('#wwgp_instruction_font_color_value').text(color);
            $('#wwgp_instruction_font_color_val').val(color);
        });

        const wwgp_instruction_border_colorpicker = document.getElementById('wwgp_instruction_border_colorpicker');
        let pickerborder = new ColorPicker(wwgp_instruction_border_colorpicker, '#000000');
        wwgp_instruction_border_colorpicker.addEventListener('colorChange', function (event) {
            const color = event.detail.color.hexa;
            $('#wwgp_instruction_border_color_value').text(color);
            $('#wwgp_instruction_border_color_val').val(color);
        });

        const wwgp_instruction_back_colorpicker = document.getElementById('wwgp_instruction_back_colorpicker');
        let pickerbk = new ColorPicker(wwgp_instruction_back_colorpicker, '#000000');
        wwgp_instruction_back_colorpicker.addEventListener('colorChange', function (event) {
            const color = event.detail.color.hexa;
            $('#wwgp_instruction_back_color_value').text(color);
            $('#wwgp_instruction_back_color_val').val(color);
        });


        $('textarea#login_instruction_content').on('keyup', function() {
            var lengthOfline = $(this).val().split(/\n/g).length;
            var maxline = $('#login_instruction_maxline').val();
            if(lengthOfline > 0)
            {
                var lines = $(this).val().split(/\n/g);
                for(var i=0; i< lengthOfline;i++)
                {
                    var line = lines[i];
                    //console.log(line);
                    var lengthOfTextLine = line.replace(/\s/g, '').length;
                    var maxline = $('#login_instruction_maxline').val();
                    if(lengthOfTextLine > maxline)
                    {
                        myjs.data.showAlert('Maximum Characters Per Line '+maxline+'.');
                        break;
                    }
                }
            }

            var lengthOfText = $(this).val().replace(/\s/g, '').length;
            var maxnum = $('#login_instruction_maxnum').val();
            if(lengthOfText > maxnum)
                myjs.data.showAlert('Maximum Characters Per Number '+maxnum+'.');

        });
    }

    function getInstructionsData() {
        $.ajax({
            url: 'admin.getwwgpLoginInstructData',
            type: 'POST',
            async: false,
            success: function (data) {
                if(data.msg=="ok"){
                    if(data.item!='')
                    {
                        var dt = data.item;
                        dt = $.parseJSON(dt);
                        var ct = decodeURIComponent(dt.help);
                        $('#login_instruction_content').val(ct);
                        $('#login_instruction_maxline').val(dt.maxline);
                        $('#login_instruction_maxnum').val(dt.maxnum);

                        $('#wwgp_instruction_font_color_val').val(dt.fontcolor);
                        $('#wwgp_instruction_font_color_value').text(dt.fontcolor);
                        $('#wwgp_instruction_font_colorpicker').css('background',dt.fontcolor);

                        $('#wwgp_instruction_border_color_value').text(dt.bordercolor);
                        $('#wwgp_instruction_border_color_val').val(dt.bordercolor);
                        $('#wwgp_instruction_border_colorpicker').css('background',dt.bordercolor);

                        $('#wwgp_instruction_back_color_value').text(dt.backcolor);
                        $('#wwgp_instruction_back_color_val').val(dt.backcolor);
                        $('#wwgp_instruction_back_colorpicker').css('background',dt.backcolor);
                    }
                }
                else
                    myjs.data.showAlert(data.msg);
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function initAdvan() {
        $('#advan_file_upbtn').click(function () {
            //$('#advan_file').trigger('click');
            $('.Media_directory_files').html("");
            $('#Media_Modal_Search_Text').val("");
            media_module.data.setImageTagID("advan_file_preview", "advan_file_pre");
            media_module.data.getDirectories('/');
            media_module.data.MediaSelectImageModal(vueOBJ);
            $('#MediaDirectoryModal').modal('show');
        });
    }

    function getAdvanData() {
        $.ajax({
            url: 'admin.getwwgpLoginAdvanData',
            type: 'POST',
            async: false,
            success: function (data) {
                if(data.msg=="ok")
                {
                    if(data.advan!='')
                    {
                        //$('#advan_file_preview').attr('src','/uploads/images/wesimg/'+data.advan);
                        $('#advan_file_preview').attr('src',data.advan);
                        $('#advan_file_pre').val(data.advan);
                    }
                    else{

                    }
                }
                else
                    myjs.data.showAlert(data.msg);
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    export default {
        data(){
            return {
                pageid:'system-setting-basic-fav',
                pgtxt_instructions:'',
                pgtxt_sharinglogin:'',
                pgtxt_advanced:'',
                pgtxt_css:'',
                pgtxt_bar:'',
                pgtxt_pleaseenter:'',
                pgtxt_font:'',
                pgtxt_content:'',
                pgtxt_background:'',
                btntxt_add:'',
                pgtxt_maximumcharactersperline:'',
                pgtxt_maximumcharacterspernumber:'',
                pgtxt_color:'',
                pgtxt_tab:'',
                pgtxt_border:'',
                pgtxt_index:'',
                pgtxt_login:'',
                pgtxt_page:'',
                pgtxt_fontcolour:'',
                pgtxt_image:'',
                pgtxt_media:'',
                btntxt_edit:'',
                btntxt_search:'',
                pgtxt_dbsaved:'',
                pgtxt_previewpage:'',
                pgtxt_releasesuccess:'',
                pgtxt_selectlanguagesave:'',
                btntxt_savechange:'',
            }
        },
        computed: {
            cpgtxt_sharinglogin:function () {
                return this.pgtxt_sharinglogin
            },
            cpgtxt_instructions:function () {
                return this.pgtxt_instructions
            },
            cpgtxt_advanced:function () {
                return this.pgtxt_advanced
            },
            cpgtxt_pleaseenter:function () {
                return this.pgtxt_pleaseenter
            },
            cpgtxt_font:function () {
                return this.pgtxt_font
            },
            cpgtxt_content:function () {
                return this.pgtxt_content
            },
            cpgtxt_background:function () {
                return this.pgtxt_background
            },
            cpgtxt_maximumcharactersperline  :function () {
                return this.pgtxt_maximumcharactersperline
            },
            cpgtxt_maximumcharacterspernumber:function () {
                return this.pgtxt_maximumcharacterspernumber
            },
            cpgtxt_color:function () {
                return this.pgtxt_color
            },
            cpgtxt_tab:function () {
                return this.pgtxt_tab
            },
            cpgtxt_border:function () {
                return this.pgtxt_border
            },
            cpgtxt_index:function () {
                return this.pgtxt_index
            },
            cpgtxt_login:function () {
                return this.pgtxt_login
            },
            cpgtxt_page:function () {
                return this.pgtxt_page
            },
            cpgtxt_bar:function () {
                return this.pgtxt_bar
            },
            cpgtxt_css:function () {
                return this.pgtxt_css
            },
            cpgtxt_fontcolour:function () {
                return this.pgtxt_fontcolour
            },
            cpgtxt_image:function () {
                return this.pgtxt_image
            },
            cpgtxt_media:function () {
                return this.pgtxt_media
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit
            },
            cbtntxt_search:function () {
                return this.btntxt_search
            },
            cpgtxt_dbsaved:function () {
                return this.pgtxt_dbsaved
            },
            cpgtxt_previewpage:function () {
                return this.pgtxt_previewpage
            },
            cpgtxt_releasesuccess:function () {
                return this.pgtxt_releasesuccess
            },
            cbtntxt_savechange:function () {
                return this.btntxt_savechange
            },

            contentchange: function () {//cckd
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });

                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                return this.$store.state.contentchange;
            },
        },
        mounted(){
            vueOBJ=this;
            pgperm = nav_module.data.getPagePermission(this.$store.state.permission, this.pageid);
            pgtxt_selectlanguagesave = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguagesave');
            this.initpage();
        },
        methods:{
            initpage() {
                this.sliderTabs();
                getSharingloginData();
            }//initpage
            ,
            sliderTabs()
            {
                $('.page1_content_side_bar div.page1_content_side_bar_text').click(function()
                {
                    $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
                    $(this).addClass('page1_content_side_bar_seleted');
                    var subid=$(this).attr('data-target');
                    $('.col-md-12.page_front_content_list').removeClass('active');
                    $('#'+subid).addClass('active');

                    $('.page1_alarm_bar span').text('No Save No Appear');
                    $('.page1_alarm_bar').removeClass('active');
                    $('.page1_translate_span').removeClass('active');

                    if(subid=='sharinglogin')
                    {
                        tabstatus=0;
                        wwgfield='sharinglogin';
                        getSharingloginData();
                    }
                    else if(subid=='instructions'){
                        tabstatus=1;
                        wwgfield='instructions';
                        getInstructionsData();
                    }
                    else if(subid=='advanced'){
                        tabstatus=2;
                        wwgfield='advanced';
                        getAdvanData();
                    }
                });
                initSharinglogin();
                initInstructions();
                initAdvan();
            },
            SavePageContent(){
                var pgtxt_dbsaved= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
                if(tabstatus==0)
                {

                }
                else if(tabstatus==1)
                {
                    var ct = $('#login_instruction_content').val();
                    ct = encodeURIComponent(ct);
                    $('#login_instruction_content_val').val(ct);
                    var  formData = new FormData($("#instruct_frm")[0]);
                    $.ajax({
                        url: 'admin.wwgploginInstruct',
                        type: 'POST',
                        data: formData,
                        async: false,
                        success: function (data) {
                            if(data.msg=="ok"){
                                myjs.data.showAlert(pgtxt_dbsaved);
                            }
                            else
                                myjs.data.showAlert(data.msg);
                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        },
                        cache: false,
                        contentType: false,
                        processData: false
                    });
                }
                else if(tabstatus==2)
                {
                    var formData = new FormData($("#advan_frm")[0]);
                    $.ajax({
                        url: 'admin.wwgploginAdvanupload',
                        type: 'POST',
                        data: formData,
                        async: false,
                        success: function (data) {
                            if(data.msg=="ok"){
                                myjs.data.showAlert(pgtxt_dbsaved);
                            }
                            else
                                myjs.data.showAlert(data.msg);
                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        },
                        cache: false,
                        contentType: false,
                        processData: false
                    });
                }
            },

        }//method


    }
</script>

<template>
   <div style="width: 100%;">
       <div style="display: none">{{contentchange}}</div>
       <div class="page_register_side_bar" style="display: flex; margin-bottom: 20px;">
           <div class="setbasic_registered_tab">
               <div class="page_register_side_bar_text page_register_side_bar_seleted" data-target="appearancebar">{{cpgtxt_appearance}}</div>
           </div>
           <div class="setbasic_registered_tab">
               <div class="page_register_side_bar_text" data-target="settingbar">{{cpgtxt_setting}}</div>
           </div>
       </div>
       <div class="row">
           <!--appearance-->
           <div class="col-md-12 page_register_content_list active" id="appearancebar">
               <form method="post" enctype="multipart/form-data" name="appearance_frm" id="appearance_frm">
                   <div class="page1_content_content_bar">
                       <input type="hidden" name="transLang" id="appearance_frm_transLang" value="">
                       <input type="hidden" name="registered_appearance_content_val" id="registered_appearance_content_val" value="en-1">
                       <div class="page1_content_content_title">{{cpgtxt_instructionbar}}</div>
                       <div class="page1_content_content page2_content_text">
                           <!--content-->
                           <div class="row page2_row">
                               <div class="col-md-3">
                                   <span>{{cpgtxt_content}}</span>
                               </div>
                               <div class="col-md-7">
                                   <input type="text" class="form-control border-input-text" name="ssr_appearance_content" id="ssr_appearance_content" placeholder="only teachers are allowed to register" value="" />
                               </div>
                           </div>
                           <!--maximum characters-->
                           <div class="row page2_row">
                               <div class="col-md-3">
                                   <span>{{cpgtxt_maximumcharacters}}</span>
                               </div>
                               <div class="col-md-4">
                                   <input type="number" value="20" class="form-control border-input-text" name="ssr_appearance_maxline" id="ssr_appearance_maxline">
                               </div>
                               <div class="col-md-5">
                                   {{cpgtxt_pleaseenter}} 0 - 100
                               </div>
                           </div>
                           <!--font colour-->
                           <div class="row page2_row">
                               <div class="col-md-3">
                                   <span>{{cpgtxt_fontcolour}}</span>
                               </div>
                               <div class="col-md-2">
                                   <input type="hidden" name="ssr_appearance_font_color_val" id="ssr_appearance_font_color_val" value="#000000">
                                   <div id="ssr_appearance_font_colorpicker" data-color="#000000" style="border: 1px solid #aaaaaa; width: 70px; height: 75%; border-radius: 10px; cursor: pointer; background-color: rgb(227, 13, 13);" />
                               </div>
                               <div class="col-md-5">
                                   <div id="ssr_appearance_font_color_value">#000000</div>
                               </div>
                           </div>
                           <!--tab border color-->
                           <div class="row page2_row">
                               <div class="col-md-3">
                                   <span>{{cpgtxt_tab}}  {{cpgtxt_border}}  {{cpgtxt_color}}</span>
                               </div>
                               <div class="col-md-2">
                                   <input type="hidden" name="ssr_appearance_border_color_val" id="ssr_appearance_border_color_val" value="#000000">
                                   <div id="ssr_appearance_border_colorpicker" data-color="#000000" style="border: 1px solid #aaaaaa; width: 70px; height: 75%; border-radius: 10px; cursor: pointer; background-color: rgb(227, 13, 13);" />
                               </div>
                               <div class="col-md-5">
                                   <div id="ssr_appearance_border_color_value">#000000</div>
                               </div>
                           </div>
                           <!--tab background-->
                           <div class="row page2_row">
                               <div class="col-md-3">
                                   <span>{{cpgtxt_tab}}  {{cpgtxt_background}}</span>
                               </div>
                               <div class="col-md-2">
                                   <input type="hidden" name="ssr_appearance_back_color_val" id="ssr_appearance_back_color_val" value="#000000">
                                   <div id="ssr_appearance_back_colorpicker" data-color="#000000" style="border: 1px solid #aaaaaa; width: 70px; height: 75%; border-radius: 10px; cursor: pointer; background-color: rgb(227, 13, 13);"></div>
                               </div>
                               <div class="col-md-4">
                                   <div id="ssr_appearance_back_color_value">#000000</div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="page1_content_content_bar">
                       <div class="page1_content_content_title">{{cpgtxt_advanced}} {{cpgtxt_css}}</div>
                       <div class="page1_content_content">
                           <div class="row">
                               <div class="col-md-2">
                                   <span>{{cpgtxt_image}}</span>
                               </div>
                               <div class="col-md-3">
                                   <div style="display: none">
                                       <input type="hidden" name="ssr_appearance_file_pre" id="ssr_appearance_file_pre" value="">
                                       <input type="file" name="ssr_appearance_file" id="ssr_appearance_file" value="">
                                   </div>
                                   <img src="/images/icons/image_tp.png" style="width: 100px;" alt="" id="ssr_appearance_file_preview" onerror="this.src ='/images/noimg.png';">
                               </div>
                               <div class="col-md-3">
                                   <button type="button" class="btn page1_custom_btn" id="ssr_appearance_file_upbtn" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">
                                       {{cbtntxt_edit}}
                                   </button>
                               </div>
                           </div>
                       </div>
                   </div>
               </form>
           </div>

           <!--setting-->
           <div class="col-md-12 page_register_content_list" id="settingbar">
               <form method="post" enctype="multipart/form-data" name="setting_frm" id="setting_frm">
                   <div class="page1_content_content_bar">
                       <input type="hidden" name="transLang" id="setting_frm_transLang" value="">
                       <input type="hidden" name="registered_setting_content_val" id="registered_setting_content_val" value="en-1">
                       <div class="page1_content_content_title">{{cpgtxt_link}}</div>
                       <div class="page1_content_content page2_content_text">
                           <div class="row page2_row">
                               <div class="col-md-3">
                                   <span>{{cpgtxt_content}}</span>
                               </div>
                               <div class="col-md-7">
                                   <textarea  placeholder="only teachers are allowed to register" class="form-control border-input-text" name="ssr_setting_content" id="ssr_setting_content" value=""></textarea>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="page1_content_content_bar">
                       <input type="hidden" name="ssr_setting_headbar_val" id="ssr_setting_headbar_val" value="">
                       <div class="page1_content_content_title">{{cpgtxt_sms}}</div>
                       <div class="page1_content_content page2_content_text">
                           <div class="row page2_row">
                               <div class="col-md-3">
                                   <span>{{cpgtxt_sua_Country}}</span>
                               </div>
                               <div class="col-md-9">
                                   <div id="ssr_setting_country_section" style="display: flex; align-content: flex-start">
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </form>
           </div>
       </div>

       <div style="text-align: right; margin-bottom: 15px;">
           <div id="add_domainBtn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-30"  @click.stop="SavePageContent()">
               <span>{{ cbtntxt_savechange }}</span>
           </div>
       </div>
   </div>
</template>
<style>
    .page_register_content_list{
        display: none;
    }
    .page_register_content_list.active{
        display: block;
    }
    .page_register_side_bar_text {
        height: 30px;
        line-height: 30px;
    }
    .page_register_side_bar_seleted {
        color: #d8be8f;
    }
    .page_register_side_bar .page_register_side_bar_text{
        cursor: pointer;
        float: left;
    }
    .page_register_side_bar {
        border: 1px solid #d6d6d6;
        border-radius: 20px;
        min-height: 40px;
        padding: 10px 20px;
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
    .setbasic_registered_tab{
        width: 120px;
    }
</style>
<script>
    import myjs from "../../assets/jsfunc/mjs_module";
    import axios from "axios";
    import Lang_module from "../../assets/jsfunc/lang_module";
    import media_module from "../../assets/jsfunc/media_module";

    var vueOBJ = null;
    var tabstatus = 0;
    var ssr_field = "appearance";
    var pgtxt_selectlanguage = "";
    var pgtxt_selectlanguagesave = "";
    var pgtxt_dbsaved = "";
    var pgperm={};

    function getappearanceData() {
        $.ajax({
            url: 'admin.ssrGetAppearance',
            type: 'POST',
            async: false,
            success: function (data) {
                if (data.msg === "ok") {
                    if (data.item != "") {
                        var dt = data.item;
                        if(dt != null && dt != "") {
                            dt = $.parseJSON(dt);
                            var ct = decodeURIComponent(dt.help);
                            $("#ssr_appearance_content").val(ct);
                            $("#ssr_appearance_maxline").val(dt.maxline);

                            $("#ssr_appearance_font_color_val").val(dt.fontcolor);
                            $("#ssr_appearance_font_color_value").text(dt.fontcolor);
                            $("#ssr_appearance_font_colorpicker").css("background", dt.fontcolor);

                            $("#ssr_appearance_border_color_val").val(dt.bordercolor);
                            $("#ssr_appearance_border_color_value").text(dt.bordercolor);
                            $("#ssr_appearance_border_colorpicker").css("background", dt.bordercolor);

                            $("#ssr_appearance_back_color_val").val(dt.backcolor);
                            $("#ssr_appearance_back_color_value").text(dt.backcolor);
                            $("#ssr_appearance_back_colorpicker").css("background", dt.backcolor);

                            if (dt.advancss != "") {
                                $("#ssr_appearance_file_preview").attr("src", dt.advancss);
                                $("#ssr_appearance_file_pre").val(dt.advancss);
                            }
                        }
                    }
                } else {
                    myjs.data.showAlert(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function initappearance() {
        const ssr_appearance_font_colorpicker = document.getElementById("ssr_appearance_font_colorpicker");
        let pickercolor = new ColorPicker(ssr_appearance_font_colorpicker, "#000000");
        ssr_appearance_font_colorpicker.addEventListener("colorChange", function (event) {
            const color = event.detail.color.hexa;
            $("#ssr_appearance_font_color_value").text(color);
            $("#ssr_appearance_font_color_val").val(color);
        });

        const ssr_appearance_border_colorpicker = document.getElementById("ssr_appearance_border_colorpicker");
        let pickerborder = new ColorPicker(ssr_appearance_border_colorpicker, "#000000");
        ssr_appearance_border_colorpicker.addEventListener("colorChange", function (event) {
            const color = event.detail.color.hexa;
            $("#ssr_appearance_border_color_value").text(color);
            $("#ssr_appearance_border_color_val").val(color);
        });

        const ssr_appearance_back_colorpicker = document.getElementById("ssr_appearance_back_colorpicker");
        let pickerbk = new ColorPicker(ssr_appearance_back_colorpicker, "#000000");
        ssr_appearance_back_colorpicker.addEventListener("colorChange", function (event) {
            const color = event.detail.color.hexa;
            $("#ssr_appearance_back_color_value").text(color);
            $("#ssr_appearance_back_color_val").val(color);
        });

        $("input#ssr_appearance_content").on("keyup", function () {
            var lengthOfText = $(this).val().replace(/\s/g, '').length;
            var maxnum = $("#ssr_appearance_maxline").val();
            if (lengthOfText > maxnum)
                myjs.data.showAlert("Maximum Characters Per Number " + maxnum + ".");
        });

        $("#ssr_appearance_file_upbtn").click(function () {
            $('.Media_directory_files').html("");
            $('#Media_Modal_Search_Text').val("");
            media_module.data.setImageTagID("ssr_appearance_file_preview", "ssr_appearance_file_pre");
            media_module.data.getDirectories('/');
            media_module.data.MediaSelectImageModal(vueOBJ);
            $('#MediaDirectoryModal').modal('show');

            //$("#ssr_appearance_file").trigger("click");
        });
        $("#ssr_appearance_file").change(function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $("#ssr_appearance_file_preview").attr("src", e.target.result);
                }
                reader.readAsDataURL(this.files[0]);
            }
        })
    }

    function getsettingData() {
        $.ajax({
            url: 'admin.ssrGetSetting',
            type: 'POST',
            async: false,
            success: function (data) {
                if (data.msg === "ok") {
                    if (data.sms != "") {
                        let lists = data.sms;
                        var tags = "";
                        var header_val = "";

                        Object.keys(lists).forEach(function (element) {
                            tags += "<div class='input-group w-25' style='line-height: 24px'>";
                            tags += "<div class='form-check' style='margin-top: 5px;'>";
                            tags += "<div id='" + lists[element].name + "' data-num='ssr_setting_country_check_" + lists[element].name + "' class='form-check-input rect-group'>";
                            tags += "<div></div>";
                            tags += "</div>";
                            tags += "<label class='form-check-label m-l-10'>" + lists[element].name + "</label>";
                            tags += "</div>";
                            tags += "</div>";
                        });

                        $("#ssr_setting_country_section").html(tags);

                        $("div[data-num^='ssr_setting_country_check_']").click(function () {
                            if ($(this).hasClass("active")) {
                                var thisid = $(this).attr("id");
                                var sval = $("#ssr_setting_headbar_val").val();

                                if (sval != "") {
                                    var sval_list = sval.split(":");
                                    var tmp_list = "";

                                    if (sval_list.length > 0)
                                    {
                                        for (var i = 0; i < sval_list.length; i ++)
                                        {
                                            var item = sval_list[i];
                                            if (item != thisid) {
                                                if (tmp_list === "") {
                                                    tmp_list = item;
                                                } else {
                                                    tmp_list += ":" + item;
                                                }
                                            }
                                        }
                                        $("#ssr_setting_headbar_val").val(tmp_list);
                                    }
                                } else {
                                    if (sval == thisid)
                                        $("#ssr_setting_headbar_val").val("");
                                }

                                $(this).removeClass("active");
                            } else {
                                var thisid = $(this).attr("id");
                                var sval = $("#ssr_setting_headbar_val").val();
                                if (sval == "") {
                                    sval = thisid;
                                } else {
                                    sval += ":"+thisid;
                                }
                                $("#ssr_setting_headbar_val").val(sval);
                                $(this).addClass("active");
                            }
                        });

                    }

                    if (data.item != "") {
                        var dt = data.item;
                        dt = $.parseJSON(dt);
                        var ct = decodeURIComponent(dt.help);
                        $("#ssr_setting_content").val(ct);

                        var countrylist = dt.sms;

                        if (countrylist == "" || countrylist == null) {

                        } else {
                            var sval_list = countrylist.split(":");

                            if (sval_list.length > 0)
                            {
                                for (var i = 0; i < sval_list.length; i ++)
                                {
                                    var item = sval_list[i];

                                    if (header_val == "")
                                        header_val = item;
                                    else
                                        header_val += ":"+item;

                                    item = "ssr_setting_country_check_" + item;

                                    $("div[data-num^='"+item+"']").addClass("active");
                                }

                                $("#ssr_setting_headbar_val").val(header_val);
                            }
                        }

                    }
                } else {
                    myjs.data.showAlert(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function initsetting() {

    }

    export default {
        data() {
            return {
                pageid:'system-setting-basic-fav',
                pgtxt_translation: '',
                pgtxt_save: '',
                pgtxt_preview: '',
                pgtxt_release: '',
                pgtxt_setting: '',
                pgtxt_appearance: '',
                pgtxt_content: '',
                pgtxt_maximumcharacters: '',
                pgtxt_pleaseenter: '',
                pgtxt_fontcolour: '',
                pgtxt_tab: '',
                pgtxt_border: '',
                pgtxt_color: '',
                pgtxt_background: '',
                pgtxt_advanced: '',
                pgtxt_css: '',
                pgtxt_image: '',
                btntxt_edit: '',
                pgtxt_link: '',
                pgtxt_sms: '',
                pgtxt_sua_Country: '',
                pgtxt_instructionbar: '',
                pgtxt_nosavenoappear: '',
                pgtxt_dbsaved:'',
                pgtxt_selectlanguage: '',
                pgtxt_selectlanguagesave: '',
                btntxt_savechange:'',
            }
        },
        computed: {
            title: function () {
                return this.$store.state.curMenu
            },
            cpgtxt_translation: function () {
                return this.pgtxt_translation;
            },
            cpgtxt_save: function () {
                return this.pgtxt_save;
            },
            cpgtxt_preview: function () {
                return this.pgtxt_preview;
            },
            cpgtxt_release: function () {
                return this.pgtxt_release;
            },
            cpgtxt_setting: function () {
                return this.pgtxt_setting;
            },
            cpgtxt_appearance: function () {
                return this.pgtxt_appearance;
            },
            cpgtxt_content: function () {
                return this.pgtxt_content;
            },
            cpgtxt_maximumcharacters: function () {
                return this.pgtxt_maximumcharacters;
            },
            cpgtxt_pleaseenter: function () {
                return this.pgtxt_pleaseenter;
            },
            cpgtxt_fontcolour: function () {
                return this.pgtxt_fontcolour;
            },
            cpgtxt_tab: function () {
                return this.pgtxt_tab;
            },
            cpgtxt_border: function () {
                return this.pgtxt_border;
            },
            cpgtxt_color: function () {
                return this.pgtxt_color;
            },
            cpgtxt_background: function () {
                return this.pgtxt_background;
            },
            cpgtxt_advanced: function () {
                return this.pgtxt_advanced;
            },
            cpgtxt_css: function () {
                return this.pgtxt_css;
            },
            cpgtxt_image: function () {
                return this.pgtxt_image;
            },
            cbtntxt_edit: function () {
                return this.btntxt_edit;
            },
            cpgtxt_link: function () {
                return this.pgtxt_link;
            },
            cpgtxt_sms: function () {
                return this.pgtxt_sms;
            },
            cpgtxt_sua_Country: function () {
                return this.pgtxt_sua_Country;
            },
            cpgtxt_instructionbar: function () {
                return this.pgtxt_instructionbar;
            },
            cpgtxt_nosavenoappear: function () {
                return this.pgtxt_nosavenoappear;
            },
            cpgtxt_dbsaved: function () {
                return this.pgtxt_dbsaved;
            },
            cbtntxt_savechange:function () {
                return this.btntxt_savechange
            },

            contentchange: function () {
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
                    if (obj.hasOwnProperty(key)) {
                        obj[key] = value;
                    }
                });
                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                return this.$store.state.contentchange;
            },
        },
        created() {

        },
        mounted() {
            vueOBJ = this;
            pgperm = nav_module.data.getPagePermission(this.$store.state.permission, this.pageid);
            pgtxt_selectlanguage = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguage');
            pgtxt_selectlanguagesave = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguagesave');
            pgtxt_dbsaved= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
            this.sliderTabs();
            getappearanceData();
        },
        methods: {
            getSiteFaveritelist(list){
                if(list!=null && list!='')
                {
                    let imgsrc='/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src",imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }

            },
            SavePageContent() {
                if (tabstatus == 0) {
                    var ct = $('#ssr_appearance_content').val();
                    ct = encodeURIComponent(ct);
                    $('#registered_appearance_content_val').val(ct);
                    var formData = new FormData($('#appearance_frm')[0]);
                    $.ajax({
                        url: 'admin.ssrRegisterAppearance',
                        type: 'POST',
                        data: formData,
                        async: false,
                        success: function (data) {
                            if (data.msg === "ok") {
                                myjs.data.showAlert(pgtxt_dbsaved);
                            } else {
                                myjs.data.showAlert(data.msg);
                            }
                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        },
                        cache: false,
                        contentType: false,
                        processData: false,
                    });
                } else if (tabstatus == 1) {
                    var ct = $('#ssr_setting_content').val();
                    ct = encodeURIComponent(ct);
                    $('#registered_setting_content_val').val(ct);

                    var formData = new FormData($('#setting_frm')[0]);
                    $.ajax({
                        url: 'admin.ssrRegisterSetting',
                        type: 'POST',
                        data: formData,
                        async: false,
                        success: function (data) {
                            if (data.msg === "ok") {
                                myjs.data.showAlert(pgtxt_dbsaved);
                            } else {
                                myjs.data.showAlert(data.msg);
                            }
                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        },
                        cache: false,
                        contentType: false,
                        processData: false,
                    });
                }
            },
            sliderTabs() {
                $('.page_register_side_bar div.page_register_side_bar_text').click(function () {
                    $('.page_register_side_bar div.page_register_side_bar_text').removeClass('page_register_side_bar_seleted');
                    $(this).addClass('page_register_side_bar_seleted');
                    var subid=$(this).attr('data-target');
                    $('.col-md-12.page_register_content_list').removeClass('active');
                    $('#'+subid).addClass('active');

                    $('.page1_alarm_bar span').text("No Save No Appear");
                    $(".page1_alarm_bar").removeClass("active");
                    $(".page1_translate_span").removeClass("active");

                    if (subid == 'appearancebar')
                    {
                        tabstatus = 0;
                        ssr_field = "appearance";
                        getappearanceData();
                    }
                    else if (subid == 'settingbar')
                    {
                        tabstatus = 1;
                        ssr_field = "setting";
                        getsettingData();
                    }
                });

                initappearance();
                initsetting();
            },
        }
    }
</script>

<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_webs_wesglobal_configuration_general}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_webs_weschina}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_configuration}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_webs_wesglobal_configuration_general}}
                          <a href="#" id="webs-wesglobal-configuration-general-fav" data-status="off" data-page-info="General_webs-wesglobal-configuration-general">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
            </div>
        </div>

        <div id="GeneralContainer" class="sl-tab-container active" style="margin-top:20px;">
            <form method="post" enctype="multipart/form-data" name="wwga_configgeneral_flw" id="wwga_configgeneral_flw">
                <input type="hidden" name="curid" id="curid"  value=0 />
                <input type="hidden" name="wwga_logo_upload_preview_temp" id="wwga_logo_upload_preview_temp"  value=""/>
                <input type="hidden" name="wwga_extralogo_upload_preview_temp" id="wwga_extralogo_upload_preview_temp"  value=""/>
                <input type="hidden" name="wwga_slogan_upload_preview_temp" id="wwga_slogan_upload_preview_temp"  value=""/>
                <input type="hidden" name="wwga_favico_upload_preview_temp" id="wwga_favico_upload_preview_temp"  value=""/>

                <div class="row"><!--{{site logo}}-->
                    <div class="col-md-12">

                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title m-b-30">{{cpgtxt_site}} {{cpgtxt_logo}}</h6>
                                <div class="row">
                                    <div class="col-md-1 col-sm-1">
                                        <div class="form-group m-b-0">
                                            &nbsp;
                                        </div>
                                    </div>
                                    <div class="col-md-11 col-sm-11">
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-md-2 col-sm-3 logimag"  id="wwga_logo_upload_preview" style="max-width: 110px;height: 55px; border: 1px solid #e1e1e1;"></div>
                                                <div class="col-md-8 col-sm-8 offset-sm-1">
                                                    <div class="row m-l-10">
                                                        <div id="wwga_logo_editbtn" class="col-md-3 col-sm-6 justify-content-center btn btn-outline-light webglogappearbtn p-t-10 p-b-10 p-l-25 p-r-25">
                                                            <span>{{cbtntxt_upload}}</span>
                                                        </div>
<!--                                                        <div class="col-md-12 col-sm-12 p-l-0 p-t-10">
                                                            <span><label style="color: red">*</label> {{ cpgtxt_imgupcondition1 }}
                                                                <span id="wwga_logo_condition_capacity"></span>
                                                                ( {{ cpgtxt_imgupcondition2 }}
                                                                <span id="wwga_logo_condition_type"></span>
                                                                )
                                                            </span>
                                                        </div>-->
                                                    </div>
                                                </div>
                                                <div class="col-1" style="display: none">
                                                    <input type="file" name="wwga_logo_upload" id="wwga_logo_upload" value=""/>
                                                </div>
                                            </div>
<!--                                            <div class="row align-items-center m-t-25">
                                                <div class="col-md-2 col-sm-3" style="max-width: 110px;">
                                                    <label> {{ cpgtxt_image }} {{cpgtxt_size}} </label>
                                                </div>
                                                <div class="col-md-3 col-sm-5 offset-sm-1">
                                                    <div class="input-group">
                                                        <input type="text" class="form-control border-input-text" name="wwga_logo_img_size" id="wwga_logo_img_size" readonly value=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row align-items-center m-t-25">
                                                <div class="col-md-2 col-sm-3" style="max-width: 110px;">
                                                    <label> {{ cpgtxt_image }} {{cpgtxt_style}} </label>
                                                </div>
                                                <div class="col-md-3 col-sm-5 offset-sm-1">
                                                    <div class="input-group">
                                                        <select id="wwga_logo_img_style" name="wwga_logo_img_style" class="form-control page2_input" @change="">
                                                            <option value="" style="font-weight: bold">&#45;&#45;</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>-->

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row"><!--{{extra logo}}-->
                    <div class="col-md-12">

                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title m-b-30">{{cpgtxt_extra}} {{cpgtxt_logo}}</h6>
                                <div class="row">
                                    <div class="col-md-1 col-sm-1">
                                        <div class="form-group m-b-0">
                                            &nbsp;
                                        </div>
                                    </div>
                                    <div class="col-md-11 col-sm-11">
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-md-2 col-sm-3 logimag"  id="wwga_extralogo_upload_preview" style="max-width: 110px;height: 55px; border: 1px solid #e1e1e1;"></div>
                                                <div class="col-md-8 col-sm-8 offset-sm-1">
                                                    <div class="row m-l-10">
                                                        <div id="wwga_extralogo_editbtn" class="col-md-3 col-sm-6 justify-content-center btn btn-outline-light webglogappearbtn p-t-10 p-b-10 p-l-25 p-r-25">
                                                            <span>{{cbtntxt_upload}}</span>
                                                        </div>
<!--                                                        <div class="col-md-12 col-sm-12 p-l-0 p-t-10">
                                                            <span><label style="color: red">*</label> {{ cpgtxt_imgupcondition1 }}
                                                                <span id="wwga_extralogo_condition_capacity"></span>
                                                                ( {{ cpgtxt_imgupcondition2 }}
                                                                <span id="wwga_extralogo_condition_type"></span>
                                                                )
                                                            </span>
                                                        </div>-->
                                                    </div>
                                                </div>
                                                <div class="col-1" style="display: none">
                                                    <input type="file" name="wwga_extralogo_upload" id="wwga_extralogo_upload" value=""/>
                                                </div>
                                            </div>
<!--                                            <div class="row align-items-center m-t-25">
                                                <div class="col-md-2 col-sm-3" style="max-width: 110px;">
                                                    <label> {{ cpgtxt_image }} {{cpgtxt_size}}</label>
                                                </div>
                                                <div class="col-md-3 col-sm-5 offset-sm-1">
                                                    <div class="input-group">
                                                        <input type="text" class="form-control border-input-text" name="wwga_extralogo_img_size" id="wwga_extralogo_img_size" readonly value=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row align-items-center m-t-25">
                                                <div class="col-md-2 col-sm-3" style="max-width: 110px;">
                                                    <label> {{ cpgtxt_image }} {{cpgtxt_style}}</label>
                                                </div>
                                                <div class="col-md-3 col-sm-5 offset-sm-1">
                                                    <div class="input-group">
                                                        <select id="wwga_extralogo_img_style" name="wwga_extralogo_img_style" class="form-control page2_input" @change="">
                                                            <option value="" style="font-weight: bold">&#45;&#45;</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>-->

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row"><!--{{favico}}-->
                    <div class="col-md-12">

                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title m-b-30">Fav Ico</h6>
                                <div class="row">
                                    <div class="col-md-1 col-sm-1">
                                        <div class="form-group m-b-0">
                                            &nbsp;
                                        </div>
                                    </div>
                                    <div class="col-md-11 col-sm-11">
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-md-2 col-sm-3 logimag"  id="wwga_favico_upload_preview" style="max-width: 110px;height: 55px; border: 1px solid #e1e1e1;"></div>
                                                <div class="col-md-8 col-sm-8 offset-sm-1">
                                                    <div class="row m-l-10">
                                                        <div id="wwga_favico_editbtn" class="col-md-3 col-sm-6 justify-content-center btn btn-outline-light webglogappearbtn p-t-10 p-b-10 p-l-25 p-r-25">
                                                            <span>{{cbtntxt_upload}}</span>
                                                        </div>
<!--                                                        <div class="col-md-12 col-sm-12 p-l-0 p-t-10">
                                                            <span><label style="color: red">*</label> {{ cpgtxt_imgupcondition1 }}
                                                                <span id="wwga_favico_condition_capacity"></span>
                                                                ( {{ cpgtxt_imgupcondition2 }}
                                                                <span id="wwga_favico_condition_type"></span>
                                                                )
                                                            </span>
                                                        </div>-->
                                                    </div>
                                                </div>
                                                <div class="col-1" style="display: none">
                                                    <input type="file" name="wwga_favico_upload" id="wwga_favico_upload" value=""/>
                                                </div>
                                            </div>
<!--                                            <div class="row align-items-center m-t-25">
                                                <div class="col-md-2 col-sm-3" style="max-width: 110px;">
                                                    <label> {{ cpgtxt_image }} {{cpgtxt_size}}</label>
                                                </div>
                                                <div class="col-md-3 col-sm-5 offset-sm-1">
                                                    <div class="input-group">
                                                        <input type="text" class="form-control border-input-text" name="wwga_favico_img_size" id="wwga_favico_img_size" readonly value=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row align-items-center m-t-25">
                                                <div class="col-md-2 col-sm-3" style="max-width: 110px;">
                                                    <label> {{ cpgtxt_image }} {{cpgtxt_style}} </label>
                                                </div>
                                                <div class="col-md-3 col-sm-5 offset-sm-1">
                                                    <div class="input-group">
                                                        <select id="wwga_favico_img_style" name="wwga_favico_img_style" class="form-control page2_input" @change="">
                                                            <option value="" style="font-weight: bold">&#45;&#45;</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>-->

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row"><!--{{site title}}-->
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title m-b-30">{{cpgtxt_site}} {{cpgtxt_title}}</h6>
                                <div class="row">
                                    <div class="col-md-1 col-sm-1">
                                        <div class="form-group m-b-0">
                                            &nbsp;
                                        </div>
                                    </div>
                                    <div class="col-md-11 col-sm-11">
                                        <div class="flex-container">
                                            <div class="form-group m-b-0" style="width: 40%;">
                                                <input class="form-control w-75"  type="text" :placeholder="[[cpgtxt_enter] [cpgtxt_title]]" name="wwga_sitetitle_input" id="wwga_sitetitle_input"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row"><!--{{slogan}}-->
                    <div class="col-md-12">

                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title m-b-30">{{cpgtxt_slogan}}</h6>
                                <div class="row">
                                    <div class="col-md-1 col-sm-1">
                                        <div class="form-group m-b-0">
                                            &nbsp;
                                        </div>
                                    </div>
                                    <div class="col-md-11 col-sm-11">
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-md-2 col-sm-3 logimag"  id="wwga_slogan_upload_preview" style="max-width: 110px;height: 55px; border: 1px solid #e1e1e1;"></div>
                                                <div class="col-md-8 col-sm-8 offset-sm-1">
                                                    <div class="row m-l-10">
                                                        <div id="wwga_slogan_editbtn" class="col-md-3 col-sm-6 justify-content-center btn btn-outline-light webglogappearbtn p-t-10 p-b-10 p-l-25 p-r-25">
                                                            <span>{{cbtntxt_upload}}</span>
                                                        </div>
<!--                                                        <div class="col-md-12 col-sm-12 p-l-0 p-t-10">
                                                            <span><label style="color: red">*</label> {{ cpgtxt_imgupcondition1 }}
                                                                <span id="wwga_slogan_condition_capacity"></span>
                                                                ( {{ cpgtxt_imgupcondition2 }}
                                                                <span id="wwga_slogan_condition_type"></span>
                                                                )
                                                            </span>
                                                        </div>-->
                                                    </div>
                                                </div>
                                                <div class="col-1" style="display: none">
                                                    <input type="file" name="wwga_slogan_upload" id="wwga_slogan_upload" value=""/>
                                                </div>
                                            </div>
<!--                                            <div class="row align-items-center m-t-25">
                                                <div class="col-md-2 col-sm-3" style="max-width: 110px;">
                                                    <label> {{ cpgtxt_image }} {{cpgtxt_size}} </label>
                                                </div>
                                                <div class="col-md-3 col-sm-5 offset-sm-1">
                                                    <div class="input-group">
                                                        <input type="text" class="form-control border-input-text" name="wwga_slogan_img_size" id="wwga_slogan_img_size" readonly value=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row align-items-center m-t-25">
                                                <div class="col-md-2 col-sm-3" style="max-width: 110px;">
                                                    <label> {{ cpgtxt_image }} {{cpgtxt_style}} </label>
                                                </div>
                                                <div class="col-md-3 col-sm-5 offset-sm-1">
                                                    <div class="input-group">
                                                        <select id="wwga_slogan_img_style" name="wwga_slogan_img_style" class="form-control page2_input" @change="">
                                                            <option value="" style="font-weight: bold">&#45;&#45;</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>-->

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row"><!--{{site index}}-->
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title m-b-30">{{cpgtxt_domainname}}</h6>
                                <div class="row">
                                    <div class="col-md-1 col-sm-1">
                                        <div class="form-group m-b-0">
                                            &nbsp;
                                        </div>
                                    </div>
                                    <div class="col-md-11 col-sm-11">
                                        <div class="flex-container">
                                            <div class="form-group m-b-0" style="width: 40%;">
                                                <input class="form-control w-75"  type="text" placeholder="wes.com" name="wwga_sitedomain_input" id="wwga_sitedomain_input"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row"><!--{{site index}}-->
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title m-b-30">{{cpgtxt_company}} {{cpgtxt_domainname}}</h6>
                                <div class="row">
                                    <div class="col-md-1 col-sm-1">
                                        <div class="form-group m-b-0">
                                            &nbsp;
                                        </div>
                                    </div>
                                    <div class="col-md-11 col-sm-11">
                                        <div class="flex-container">
                                            <div class="form-group m-b-0" style="width: 40%;">
                                                <input class="form-control w-75"  type="text" placeholder="company.wes.com" name="wwga_companydomain_input" id="wwga_companydomain_input"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

           <!--   save btn-->
                <div class="row justify-content-end" style="padding-bottom: 1.5rem; padding-right: 1.8rem">
                    <div class="col-md-3 col-sm-5 text-right">
                        <button type="button" class="btn btn-info-theme active" @click.stop="wwgc_savechangeBtnEvent">{{ cbtntxt_savechange }}</button>
                    </div>
                </div>

                <div class="row"><!--{{empty line}}-->
                    <div class="col-md-12 empty-line" style="height:50px;"></div>
                </div>
            </form>

        </div>

        <!--modal part-->
        <div class="modal fade" id="previewModal" role="dialog">
            <div class="modal-dialog modal-sm" style="min-width: 95%!important;">
                <div class="modal-content" style="border-radius:0">
                    <div class="modal-header" style="height: 25px;padding: 0 5px;">
                        <h4 class="modal-title">{{ cpgtxt_preview }}</h4>
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
    #wwga_extralogo_upload_preview,
    #wwga_slogan_upload_preview,
    #wwga_logo_upload_preview,
    #wwga_favico_upload_preview
    {
        background-repeat: no-repeat;
        background-size:100% 100%;
    }

</style>

<script>
    import lang_module from "../../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../../assets/jsfunc/mjs_module";
    import nav_module from "../../../assets/jsfunc/nav_module";



    let vueOBJ=null;
    var logo_path = "/uploads/images/wesimg/logo/";
    var pgtxt_please;
    var pgtxt_select;
    var pgtxt_language;
    var pgtxt_translation;
    var pgperm={};
    var img_capacitys;
    var img_types;
    var img_sizes;

    function JsonDataSocialSetting(jsonstr, imgtypelist){
        if (jsonstr != '')
        {
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

        }
        else
        {
            //$('#wwga_logo_upload_preview').text('');
            $('#wwga_logo_upload_preview_temp').val('');
            $('#wwga_logo_upload_preview').css('background-image', 'url("")');

            //$('#wwga_extralogo_upload_preview').text('');
            $('#wwga_extralogo_upload_preview_temp').val('');
            $('#wwga_extralogo_upload_preview').css('background-image', 'url("")');

            //$('#wwga_slogan_upload_preview').text('');
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
        pgtxt_please= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_please');
        pgtxt_select= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_select');
        pgtxt_language= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_language');
        pgtxt_translation= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_translation');

        $('#wwga_logo_editbtn').click(function () {
            if(pgperm.write != 1){
                myjs.data.showAlert('pgtxt_notpermission');
                return;
            }

            $('#wwga_logo_upload').val('');
            $('#wwga_logo_upload').trigger('click');
        });
        $("#wwga_logo_upload").change(function(){
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#wwga_logo_upload_preview').text('');
                    $('#wwga_logo_upload_preview').css('background-image', 'url("'+e.target.result+'")');
                }
                reader.readAsDataURL(this.files[0]); // convert to base64 string
            }
        });

        $('#wwga_extralogo_editbtn').click(function () {
            if(pgperm.write != 1){
                myjs.data.showAlert('pgtxt_notpermission');
                return;
            }

            $('#wwga_extralogo_upload').val('');
            $('#wwga_extralogo_upload').trigger('click');
        });
        $("#wwga_extralogo_upload").change(function(){
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#wwga_extralogo_upload_preview').text('');
                    $('#wwga_extralogo_upload_preview').css('background-image', 'url("'+e.target.result+'")');
                }
                reader.readAsDataURL(this.files[0]); // convert to base64 string
            }
        });

        $('#wwga_favico_editbtn').click(function () {
            if(pgperm.write != 1){
                myjs.data.showAlert('pgtxt_notpermission');
                return;
            }

            $('#wwga_favico_upload').val('');
            $('#wwga_favico_upload').trigger('click');
        });
        $("#wwga_favico_upload").change(function(){
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#wwga_favico_upload_preview').text('');
                    $('#wwga_favico_upload_preview').css('background-image', 'url("'+e.target.result+'")');
                }
                reader.readAsDataURL(this.files[0]); // convert to base64 string
            }
        });

        $('#wwga_slogan_editbtn').click(function () {
            if(pgperm.write != 1){
                myjs.data.showAlert('pgtxt_notpermission');
                return;
            }


            $('#wwga_slogan_upload').val('');
            $('#wwga_slogan_upload').trigger('click');
        });
        $("#wwga_slogan_upload").change(function(){
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#wwga_slogan_upload_preview').text('');
                    $('#wwga_slogan_upload_preview').css('background-image', 'url("'+e.target.result+'")');
                    // console.log(e.target);
                }
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
            success: function (data) {
                if(data.msg=="ok"){
                    $('input[name="curid"]').val(data.id);
                    JsonDataSocialSetting(data.lists,  data.imgtypelist);
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
        name: "WebsWesGlobalConfigurationGeneral",
        data(){
            return {
                pageid:'webs-wesglobal-configuration-general-fav',
                mu_webs:'',
                musu_webs_weschina:'',
                mususu_webs_wesglobal_configuration:'',
                musususu_webs_wesglobal_configuration_general:'',
                pgtxt_head:'',
                pgtxt_foot:'',
                pgtxt_topheader:'',
                pgtxt_hide:'',
                pgtxt_location:'',
                pgtxt_logo:'',
                pgtxt_site:'',
                pgtxt_title:'',
                pgtxt_enter:'',
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
                pgtxt_domainname:'',
                pgtxt_please:'',
                pgtxt_select:'',
                pgtxt_extra:'',
                pgtxt_doesnt:'',
                pgtxt_work:'',
                pgtxt_index:'',
                pgtxt_page:'',
                btntxt_ok:'',
                btntxt_cancel:'',
                pgtxt_wantdeleteitem:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
                btntxt_savechange:'',
                btntxt_upload:'',
                pgtxt_imgupcondition1:'',
                pgtxt_imgupcondition2:'',
                pgtxt_style:'',
                pgtxt_aleadydomain:'',
                pgtxt_errorlogo:'',
                pgtxt_errorextralogo:'',
                pgtxt_errorfavico:'',
                pgtxt_errorslogan:'',
                pgtxt_company:'',
            }
        },
        created() {
        },
        beforeMount(){
        },
        computed: {
            cmususu_webs_wesglobal_configuration:function () {
                return this.mususu_webs_wesglobal_configuration
            },
            cmusususu_webs_wesglobal_configuration_general:function () {
                return this.musususu_webs_wesglobal_configuration_general
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
            cpgtxt_site:function () {
                return this.pgtxt_site
            },
            cpgtxt_title:function () {
                return this.pgtxt_title
            },
            cpgtxt_enter:function () {
                return this.pgtxt_enter
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
            cpgtxt_style:function () {
                return this.pgtxt_style
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
            cpgtxt_please:function () {
                return this.pgtxt_please
            },
            cpgtxt_select:function () {
                return this.pgtxt_select
            },
            cpgtxt_extra:function () {
                return this.pgtxt_extra
            },
            cpgtxt_doesnt:function () {
                return this.pgtxt_doesnt
            },
            cpgtxt_work:function () {
                return this.pgtxt_work
            },
            cpgtxt_index:function () {
                return this.pgtxt_index
            },
            cpgtxt_page:function () {
                return this.pgtxt_page
            },
            cpgtxt_domainname:function () {
                return this.pgtxt_domainname
            },
            cbtntxt_savechange:function () {
                return this.btntxt_savechange
            },
            cbtntxt_upload:function () {
                return this.btntxt_upload
            },
            cpgtxt_imgupcondition1:function () {
                return this.pgtxt_imgupcondition1
            },
            cpgtxt_imgupcondition2:function () {
                return this.pgtxt_imgupcondition2
            },
            cpgtxt_aleadydomain:function () {
                return this.pgtxt_aleadydomain
            },
            cpgtxt_errorlogo:function () {
                return this.pgtxt_errorlogo
            },
            cpgtxt_errorextralogo:function () {
                return this.pgtxt_errorextralogo
            },
            cpgtxt_errorfavico:function () {
                return this.pgtxt_errorfavico
            },
            cpgtxt_errorslogan:function () {
                return this.pgtxt_errorslogan
            },
            cpgtxt_company:function () {
                return this.pgtxt_company
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
            /* fav part*/
            vueOBJ=this;
            pgperm = nav_module.data.getPagePermission(this.$store.state.permission, this.pageid);
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            this.initpage();
            //this.getWWGStoredLang();//no use

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
            initpage() {
                pageLoad();
                pageEvent();
            },
            loaddata()
            {
                pageLoad();
            },
            wwgc_savechangeBtnEvent(){
                if(pgperm.write != 1){
                    myjs.data.showAlertHidden('pgtxt_notpermission');
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
                    success: function (data) {
                        if(data.msg=="ok")
                        {
                            $('#wwga_logo_upload_preview_temp').val(data.logoImg);
                            $('#wwga_extralogo_upload_preview_temp').val(data.extralogoImg);
                            $('#wwga_slogan_upload_preview_temp').val(data.sloganImg);
                            $('#wwga_favico_upload_preview_temp').val(data.favicoImg);

                            myjs.data.showAlertHidden('pgtxt_dbsaved');
                        }
                        else if(data.msg=="err_img"){
                            if(data.err === 'logo')
                                myjs.data.showAlert('pgtxt_errorlogo');
                            else if(data.err === 'extralogo')
                                myjs.data.showAlert('pgtxt_errorextralogo');
                            else if(data.err === 'favico')
                                myjs.data.showAlert('pgtxt_errorfavico');
                            else if(data.err === 'slogan')
                                myjs.data.showAlert('pgtxt_errorslogan');
                        }
                        else if(data.msg=="err_domain"){
                            myjs.data.showAlert('pgtxt_aleadydomain');
                        }
                        else
                        {
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
        }//method

    }
</script>

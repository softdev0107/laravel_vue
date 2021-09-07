<template>
    <div style="width: 100%">
        <div style="display: none">{{contentchange}}</div>
        <div id="publick_contaniner" style="display: none">
            <div class="row">
                <div class="col-md-12">
                    <div class="page1_translate_bar">
                        <div class="page1_translate_text">{{cpgtxt_translation}}</div>
                        <div class="page1_translate_bar_left" id="translanglist" style="padding: 0">

                        </div>
                        <div class="page1_translate_bar_right" style="display: flex">
                            <div class="page1_translate_div adddisablelang" @click="Adddisablelang" style="cursor: pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-inline="false" data-icon="gg:add" class="iconify" style="font-size: 20px; transform: rotate(360deg);"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7z" fill="currentColor"></path></g></svg>
                                <span class="page1_translate_span_right">{{cbtntxt_add}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            </div>
                            <div class="page1_translate_div" @click="PagePreview" style="cursor: pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 20px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:outline-preview"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-7-8.5c1.84 0 3.48.96 4.34 2.5c-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" fill="currentColor"></path></svg>
                                <span class="page1_translate_span_right">{{cpgtxt_preview}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="pageContAdd_btn_container">
            <div class="col-md-12 text-right" style="height: 50px;">
                <button type="button" class="btn page1_custom_select_btn mb-sm-2" id="pageContAdd_btn" style="height: 40px; border-radius: 20px; padding: 0 25px; float: right; display: block;">
                    <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);margin-right: 5px;" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="gg:add"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7z" fill="currentColor"></path></g></svg>
                    {{cbtntxt_add}}
                </button>
            </div>
        </div>

        <div class="row">
            <!--list-->
            <div class="col-md-12 page_slider_content_list active" id="wwpc_list">
                <div class="page1_content_content_bar">
                    <div class="page1_content_content_title">{{cpgtxt_filters}}</div>
                    <div class="page1_content_content page2_content_text" style="padding:1.5rem">
                        <div class="row">

                            <div class="col-md-4 col-sm">
                                <div class="row">
                                    <div style="width: auto;padding-left: 15px">
                                        <span>{{cpgtxt_language}}</span>
                                    </div>
                                    <div class="col">
                                        <div class="input-group" style="width: 75%">
                                            <select id="wwgpp_lang_list" name="wwgpp_lang_list" class="form-control page2_input" @change="wwgpp_getCtype">
                                                <option value="" selected="selected" style="font-weight: bold">···</option>
                                            <!--    full by ajax -->
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm">
                                <div class="row">
                                    <div style="width: auto;padding-left: 15px">
                                        <span>{{cpgtxt_search}}</span>
                                    </div>
                                    <div class="col">
                                        <div class="input-group" style="width: 95%">
                                            <select id="wwgpp_list_contenttype" name="wwgpp_list_contenttype" class="form-control page2_input" @change="wwgpp_search">
                                                <option value="" selected="selected" style="font-weight: bold">···</option>
                                            <!-- full by ajax  -->
                                            </select>
                                            <input type="text" id="wwgpp_list_s_c" name="wwgpp_list_s_c" class="form-control page2_input" placeholder="" aria-label="page content search" aria-describedby="basic-addon1" @keyup.13="wwgpp_search">
                                            <div class="input-group-append input-group-append-my cursor-pointer" @click="wwgpp_search">
                                        <span class="input-group-text input-group-text-my" id="basic-addon1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search ">
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                            </svg>
                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="page1_content_content_bar">

                    <div class="table-responsive" id="list_container">

                        <table id="user-list" role="grid" aria-describedby="user-list_info" class="table table-lg  no-footer" style="margin:10px 0">
                            <thead>
                            <tr role="row">
                                <th></th>
                                <th>{{cpgtxt_page}} {{cpgtxt_name}}</th>
                                <th>{{cpgtxt_title}}</th>
                                <th>{{cpgtxt_contenttype}}</th>
                                <th>{{cpgtxt_author}}</th>
                                <th>{{cpgtxt_time}}</th>
                                <th>{{cpgtxt_url}}</th>
                                <th>{{cpgtxt_status}}</th>
                                <th class="th-rp-20" style="text-align: right; cursor: pointer" @click="wwgpp_selected_lists_del">{{cpgtxt_delete}}</th>
                            </tr>
                            </thead>
                            <tbody id="wwgpp_list_container">

                            </tbody>
                        </table>
                    </div>

                </div>

                <div class="row">
                    <div  class="col-md-3 col-sm-5">
                        <div class="row">
                            <div style="width: auto;padding-left: 15px">
                                <span>{{cpgtxt_setupthe}}</span>
                            </div>
                            <div class="col">
                                <div class="input-group" style="width: 95%">
                                    <select id="wwgpp_list_nav_cnt" name="wwgpp_list_nav_cnt" class="form-control page2_input">
                                        <option value="5" selected="selected">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="wwgpc_pagelist_nav" class="col-md-9 col-sm-12">

                    </div>
                </div>

        </div>

            <!--create and change of content-->
            <div class="col-md-12 page_slider_content_list"  id="pagesetting">
                <form method="post" enctype="multipart/form-data" name="pagesetting_frm" id="pagesetting_frm">
                    <input type="hidden" name="pgsetstate"  value="add"/>
                    <input type="hidden" name="pgsetname"  value=''/>
                    <input type="hidden" name="pgsetid"  value=0/>
                    <input type="hidden" name="pgseturl"  value=""/>
                    <input type="hidden" name="pgsettranedLang"  value=""/>

                    <div class="page1_content_content_bar">
                        <div class="page1_content_content_title">{{cpgtxt_content}} {{cpgtxt_setting}}</div>
                        <div class="page1_content_content page2_content_text" style="padding: 2.0rem 1.5rem">

                            <div class="row" style="padding-bottom: 1.5rem">
                                <div class="col-sm-6">
                                    <div class="row">
                                        <div style="width: 105px;text-align: center;">
                                            <span>{{cpgtxt_page}} {{cpgtxt_name}}</span>
                                        </div>
                                        <div class="col-9">
                                            <div class="input-group">
                                                <input type="text" id="pagesetting_name" name="pagesetting_name" class="form-control page2_input" placeholder="" aria-label="page setting name" aria-describedby="basic-addon1">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="row">
                                        <div style="width: 105px;text-align: center;">
                                            <span>{{cpgtxt_title}}</span>
                                        </div>
                                        <div class="col-9">
                                            <div class="input-group">
                                                <input type="text" id="pagesetting_title" name="pagesetting_title" class="form-control page2_input" placeholder="" aria-label="page title">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row" style="padding-bottom: 1.5rem">
                                <div class="col-sm-6">
                                    <div class="row">
                                        <div style="width: 105px;text-align: center;">
                                            <span>{{cpgtxt_content}} {{cpgtxt_type}}</span>
                                        </div>
                                        <div class="col-7">
                                            <div class="input-group">
                                                <select id="pagesetting_pgtype" name="pagesetting_pgtype" class="form-control page2_input">

                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value="" id="type_invisible" name="type_invisible">
                                                <label class="form-check-label" for="type_invisible">
                                                    {{cpgtxt_hide}}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="row">
                                        <div style="width: 105px;text-align: center;">
                                            <span>URL</span>
                                        </div>
                                        <div class="col-7">
                                            <div class="input-group">
                                                <input type="text" id="pagesetting_url" name="pagesetting_url" data-url=""  class="form-control page2_input" placeholder="">
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value="" id="url_invisible" name="url_invisible">
                                                <label class="form-check-label" for="url_invisible">
                                                    {{cpgtxt_auto}}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row" style="padding-bottom: 1.5rem">
                                <div class="col-sm-6">
                                    <div class="row">
                                        <div style="width: 105px;text-align: center;">
                                            <span>{{cpgtxt_author}}</span>
                                        </div>
                                        <div class="col-7">
                                            <div class="input-group">
                                                <input type="text" id="pagesetting_author" name="pagesetting_author" data-url=""  class="form-control page2_input" placeholder="">
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value="" name="author_invisible" id="author_invisible">
                                                <label class="form-check-label" for="author_invisible">
                                                    {{cpgtxt_hide}}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="row">
                                        <div style="width: 105px;text-align: center;">
                                            <span>{{cpgtxt_time}}</span>
                                        </div>
                                        <div class="col-7">
                                            <div class="input-group">
                                                <input type="text"  name="pagesetting_datapicker" id="pagesetting_datapicker" class="form-control page2_input" placeholder="">
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value="" id="time_invisible" name="time_invisible">
                                                <label class="form-check-label" for="time_invisible">
                                                    {{cpgtxt_hide}}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="d-flex" style="margin: 3rem 0">
                        <textarea name="editcont0" id="editcont0" value="" style="display: none"></textarea>
                        <editor0
                            api-key="vozqdhfpn1ddjlq31cj4d788tvxdfyyv5sl208xskz86xqoh"
                            cloud-channel="5-dev"
                            @onClick="editorclick0"
                            @onBlur="editorblue0"
                            :init="{
                                     id:'02',

                                    plugins: [
                                     'lists link image code table paste help wordcount '
                                    ],
                                    toolbar: 'undo redo | code table | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor | link image ',
                                   images_upload_handler:upload_handler0,
                                   init_instance_callback : edit_init_callback0
                                  }"
                            v-model="TinyMCMcontent0"/>
                    </div>

                    <div class="row justify-content-end" style="padding-bottom: 1.5rem;">
                        <div class="col-md-4 col-sm-4 text-right">
                            <button type="button" class="btn btn-info-theme active savebtn" @click.stop="wwpc_saveContentpageofOne">{{ cbtntxt_savechange }}</button>
                        </div>
                        <div class="col-md-2 col-sm-2">
                            <button type="button" class="btn btn-info-theme" @click.stop="wwpc_gotoContentList">
                                {{cbtntxt_cancel}}
                            </button>
                        </div>
                    </div>

                </form>
            </div>

        </div>

        <!-- empty line ckd -->
        <div class="row empty-line">
            <div class="col-md-12" style="padding: 30px 0;">&nbsp;</div>
        </div>

        <!--modal part-->
        <div class="modal fade" id="myCreateContentModal" role="dialog">
            <div class="modal-dialog modal-dialog-centered" style="max-width:560px;">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="wes-theme-color" style="font-size: 20px; font-weight: 600;">{{cpgtxt_create}} {{cpgtxt_content}}</div>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body pt-0">
                            <div class="container-fluid p-0 m-0">

                                <div class="row m-2 mt-3">
                                    <label class="col-3 col-form-label">
                                        {{ cpgtxt_url }}
                                    </label>
                                    <div class="col-7">
                                        <input type="text" class="form-control"  name="wwpg_content_url_dlg" id="wwpg_content_url_dlg" placeholder="" aria-label="content input" style="background: rgb(234, 234, 234); border-radius: 20px">
                                    </div>
                                    <div class="col-2">
                                        <div class="form-check" style="padding-left:0.5rem;padding-top: 0.3rem;">
                                            <input class="form-check-input" type="checkbox" value="" id="wwpg_content_url_auto_dlg">
                                            <label class="form-check-label" for="wwpg_content_url_auto_dlg" style="margin-top: 0.05rem">
                                                {{ cpgtxt_auto }}
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row m-2 mt-3">
                                    <label class="col-3 col-form-label">
                                        {{ cpgtxt_time }}
                                    </label>
                                    <div class="col-7">
                                        <div class="input-group" style="width: 100%">
                                            <input type="text" class="form-control page2_input" name="wwpg_content_dlg_datapicker" id="wwpg_content_dlg_datapicker">
                                            <div class="input-group-append input-group-append-my" id="wwpg_content_dlg_datapicker_icon">
                                            <span class="input-group-text input-group-text-my">
                                            <i class="far fa-calendar-alt" style="font-size: 18px;"></i>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="form-check" style="padding-left:0.5rem;padding-top: 0.3rem;">
                                            <input class="form-check-input" type="checkbox" value="" id="wwpg_content_time_auto_dlg">
                                            <label class="form-check-label" for="wwpg_content_time_auto_dlg" style="margin-top: 0.05rem">
                                                {{ cpgtxt_hide }}
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row m-2 mt-3">
                                    <label class="col-3 col-form-label">
                                        {{ cpgtxt_basic }} {{ cpgtxt_language }}
                                    </label>
                                    <div class="col-8">
                                        <div class="input-group" style="width: 100%;">
                                            <select id="wwpg_content_basiclang_dlg" name="wwpg_content_basiclang_dlg" class="form-control page2_input" @change="wwgpp_getCtype_basiclang_dlg">
                                                <option value="" style="font-weight: bold">···</option>
                                                <!--full ajax-->
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row m-2 mt-3">
                                    <label class="col-3 col-form-label">
                                        {{ cpgtxt_contenttype }}
                                    </label>
                                    <div class="col-8">
                                        <div class="input-group" style="width: 100%;">
                                            <select id="wwpg_content_type_dlg" name="wwpg_content_type_dlg" class="form-control page2_input">
                                                <option value="" style="font-weight: bold">···</option>
                                                <!--full ajax-->
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </div>
                    </div>
                    <div class="modal-footer" style="height: auto;justify-content:center">
                        <button type="button" id="wwgp_createNewContent_dlg_btn" class="btn page1_custom_select_btn mb-sm-2" style="height: 40px; border-radius: 20px; padding: 0px 25px; float: right; display: block;" @click="wwgp_createNewContent">
                           + &nbsp;{{cpgtxt_create}}
                        </button>
                    </div>
                </div>

            </div>
        </div>

        <div class="modal fade" id="wwpc_AddTranslationModal" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <!-- Modal content-->
                <div class="modal-content page-type-first-content" style="display:block;">
                    <div class="modal-header">
                        <div class="wes-theme-color paytype-add-letter" style="font-size: 20px; font-weight: 600;display: block">{{cbtntxt_add}} {{cpgtxt_translation}}</div>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" style="padding: 5px 10px !important">
                        <div class="container">
                              <div class="row m-10" style="line-height:30px" id="wwpc_disable_lang_add_body">

                                <!--
                                <div class="col-3 form-check form-check-inline">
                                      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                      <label class="form-check-label" for="inlineCheckbox1">japanes</label>
                                  </div>
                                  -->


                              </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center" style="height: auto">
                        <button type="button" class="btn btn-info-theme active adddlgbtn" @click="wwpc_addTrans_btn_event">
                           + {{cbtntxt_add}}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="wwpc_previewModal" role="dialog">
            <div class="modal-dialog modal-sm" style="min-width: 95%!important;">
                <div class="modal-content" style="border-radius:0">
                    <div class="modal-header" style="height: 25px;padding: 0 5px;">
                        <h4 class="modal-title" style="width: 100%; text-align: center;">{{ cpgtxt_previewpage }}</h4>
                        <button type="button" class="close" data-dismiss="modal" style="width: 18px; height: 18px;padding: 0;">&times;</button>
                    </div>
                    <div class="modal-body" id="wwpc_previewModalModalbody" style="padding:0;">
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
    .page1_content_side_bar .page1_content_side_bar_text{
        cursor: pointer;
        height: auto;
        float: left;
    }
    .page1_translate_span {
        padding-left: 20px;
    }
    .input-group-append-my{
        border-top-right-radius:1.25rem;border-bottom-right-radius:1.25rem;
    }
    .input-group-text-my{
        background-color: #d6d6d6;border-top-right-radius:1.25rem;border-bottom-right-radius:1.25rem;
    }
    .form-control.page2_input:focus,.form-control.page2_input:hover{
        background-color:#d6d6d6;
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
    .tox.tox-tinymce{
        border-radius: 20px;
        width: 100% !important;
        height: 350px;/*150px*/
        min-height: 350px !important;
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
    var contenttypetypecheckboxid = '';
    var pgtxt_selectlanguagesave = "";
    var pgtxt_selectlanguage = "";

    var pcnt=5;
    var pgperm={};
    var langOBJS=[];
    var stored_langs='';

    var tabstatus=0;

    var pagename_default='';
    var pageurl_default='';
    var pagetype_default=0;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function checkpagename(pgname, chid){
        var result=false;
        $.ajax({
            url: 'admin.wwpc_checkpagename',
            data:{
                pgname:pgname,
                id:chid
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if(data.msg==="ok")
                {
                    if(data.cnt > 0){
                        result=true;
                    }
                    else {
                        result=false;
                     }
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });

        return result;
    }

    function setTempLang(){
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

    function init_list_nav_cnt() {
        $('#wwgpp_list_nav_cnt').change(function () {
            var val=$(this).val();
            tabstatus=0;
            pstart=1;
            getContentList();
        });

        $('#pagesetting_url').keyup(function (e) {
            var change_url = $('#pagesetting_url').val();
            for(var i=0;i<langOBJS.length;i++)
            {
                langOBJS[i].url = change_url;
            }
        });
    }

    function initContentListTranslatelist()
    {
        $('span.page1_translate_span').unbind('click');
        $('span.page1_translate_span').click(function (e)
        {
            $('span.page1_translate_span').removeClass('active');
            $(this).addClass('active');
            var dcont=$(this).data('cont');
            if(dcont.split('-').length > 2)
            {
               var prelang = transedlang;
                transedlang=dcont.split('-')[0]+'-'+dcont.split('-')[1];
                if(tabstatus===2)// || tabstatus===3
                    changelangOBJActive(transedlang, prelang);

                refreshPagesettingType();
            }
        });

        $('span.span_langitem_controller').unbind('click');
        $('span.span_langitem_controller').click(function (e) {
            var dcont = $(this).data('cont');
            if(dcont.split('-').length < 1)
                return;
            var iso=dcont.split('-')[0];
            var dialcode=dcont.split('-')[1];
            var delid=iso+'-'+dialcode;
            for (var i = 0; i < stored_langs.length; i++) {
                var objj = stored_langs[i];
                var j_iso = objj.iso;
                var j_dialcode = objj.dialcode;
                if(iso===j_iso && dialcode === j_dialcode){
                    objj.status='disable';
                    stored_langs[i]=objj;
                }
            }

            if(tabstatus===2)
                changeLangOBJADDDEL('del', delid);

            $('#'+delid).remove();
            $('span.page1_translate_span').removeClass('active');

            var activelangname='';
            for (var ii = stored_langs.length-1; ii > -1; ii--)
            {
                var objj = stored_langs[ii];
                var j_status = objj.status;
                var tlng=objj.iso+'-'+objj.dialcode;
                if(j_status==='enable'){
                    transedlang = tlng;//active that last language.
                    activelangname = objj.name;
                    activelangname = activelangname.toLowerCase();
                    break;
                }
            }

            $('#'+transedlang+' span.page1_translate_span').addClass('active');

            if(tabstatus===2)// || tabstatus===3
                changelangOBJNewActive(transedlang, activelangname);

            refreshPagesettingType();

        });
    }

    function  getContentList(){
        var btntxt_delete= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
        var btntxt_edit= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
        var btntxt_change= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
        var pgctl_activie= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgctl_activie');
        var pgctl_block= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgctl_block');

        var scont = $.trim($('#wwgpp_list_s_c').val());
        var ctypeid=$('#wwgpp_list_contenttype').val();
        var pcnt = $('#wwgpp_list_nav_cnt').val();
        var transplit = $('#wwgpp_lang_list').val();
        var seachlang='';
        if(transplit!==null && transplit !=='' && transplit.split('-').length > 1){
            transedlang=transplit.split('-')[0]+'-'+transplit.split('-')[1];
            seachlang = transedlang;
        }

        $.ajax({
            url: 'admin.getContentList',
            data:{
                lang:seachlang,
                cont:scont,
                start:pstart,
                ctypeid:ctypeid,
                cnt:pcnt
            },
            type: 'POST',
            async: false,
            success: function (data) {
                var total=data.total;
                if(total<=0)
                {
                    $('#wwgpp_list_container').html('');
                    $('#wwgpc_pagelist_nav').html('');
                    return;
                }
                if(data.msg==="ok")
                {
                    var list = data.list;
                    pstart=data.start;
                    var totalpage=data.totalpage;
                    if (list instanceof Array)
                    {
                        var tags='';
                        for (var i = 0; i < list.length; i++)
                        {
                            var item = list[i];
                            var id = item.id;
                            var url ='-';
                            if(item.url!==null && item.url!=='')
                             url = decodeURIComponent(item.url);

                            var pagename='-';
                            if(item.pagename!==null && item.pagename!=='')
                                pagename = item.pagename;

                            var title='-';
                            if(item.title!==null && item.title!=='')
                                title = item.title;

                            var author='-';
                            if(item.author!==null && item.author!=='')
                                author = item.author;

                            var created_at='-';
                            if(item.created_at!==null && item.created_at!=='')
                                created_at = item.created_at;
                            var status='-';
                            if(item.status === 1)
                                status = pgctl_activie;
                            else
                                status = pgctl_block;


                            tags+='<tr role="row" class="odd" id="pglistitem_'+id+'">';
                            tags+='<td style="text-align:center">';
                            tags+='<input type="checkbox" name="wwgpc_contentlist_ck" data-id="'+id+'">';
                            tags+='</td>';
                            tags+='<td>';
                            tags+=pagename;
                            tags+='</td>';
                            tags+='<td>';
                            tags+=title;
                            tags+='</td>';
                            tags+='<td>'+item.contenttype+'</td>';
                            tags+='<td>'+ author +'</td>';
                            tags+='<td>'+ created_at +'</td>';
                            tags+='<td id="0">'+url+'</td>';
                            if(item.status === 1)
                                tags+='<td class="data-ajax" data-ajax="pgctl_activie">'+pgctl_activie+'</td>';
                            else
                                tags+='<td class="data-ajax" data-ajax="pgctl_block">'+pgctl_block+'</td>';
                            tags+='<td class="th-rp-20">';
                            tags+='<div class="form-group m-b-0">';
                            tags+='<select class="my-border-radius-slt form-control float-right" data-pagename="'+pagename+'" data-url="'+url+'" data-trans="'+item.trans+'" data-id="'+id+'" id="wwgpp_plist_ctrl_'+id+'" name="wwgpp_plist_ctrl_'+id+'">';
                            tags+='<option class="data-ajax" data-ajax="btntxt_edit" value="">'+btntxt_edit+'</option>';
                            tags+='<option class="data-ajax" data-ajax="btntxt_change" value="change">'+btntxt_change+'</option>';
                            tags+='<option class="data-ajax" data-ajax="pgctl_activie" value="active">'+pgctl_activie+'</option>';
                            tags+='<option class="data-ajax" data-ajax="pgctl_block" value="block">'+pgctl_block+'</option>';
                            tags+='<option class="data-ajax" data-ajax="btntxt_delete" value="del">'+btntxt_delete+'</option>';
                            tags+='</select>';
                            tags+='</div>';
                            tags+='</td>';
                            tags+='</tr>';
                        }

                        $('#wwgpp_list_container').html(tags);

                        var nav_tag='';
                        nav_tag+='<nav aria-label="..." class="mb-4">';
                        nav_tag+='<ul class="pagination pagination-rounded justify-content-center">';

                        var disble="";
                        if(pstart==1)
                            disble="disabled"

                        var prenum= parseInt(pstart) - 1;

                        nav_tag+='<li class="page-item  '+disble+' ">';
                        nav_tag+='<a class="page-link"  href="#"  data-num="sflunavnum_' + prenum + '" >';
                        nav_tag+='<i class="ti-angle-left"></i>';
                        nav_tag+='</a>';
                        nav_tag+='</li>';

                        //mjs_module.data.showAlert(totalpage);
                        pnum = pstart <= numg ? 1 : parseInt(pstart) - 1;
                        for(var idx = 0; idx < numg; idx++)
                        {
                            var actv="";
                            var aria_current='';
                            var spantag='';
                            var oid='';

                            if(pnum==pstart)
                            {
                                actv='active';
                                aria_current='aria-current="page"';
                                spantag='<span class="sr-only">(current)</span>';
                            }
                            else
                                oid="sflunavnum_" + pnum;

                            nav_tag+='<li class="page-item ' + actv + '"  ' + aria_current + '>';
                            nav_tag+='<a class="page-link"  data-num="' + oid + '"  href="#" >' + pnum + '  ' + spantag + '</a>';
                            nav_tag+='</li>';

                            if(pnum==totalpage) break;

                            pnum = pnum + 1;
                        }

                        var nextnum= parseInt(pstart) + 1;
                        var edisble="";
                        if(pstart==totalpage)
                            edisble="disabled"

                        nav_tag+='<li class="page-item '+edisble+' ">';
                        nav_tag+='<a class="page-link" data-lang="'+transedlang+'"  data-num="sflunavnum_' + nextnum + '" href="#">';
                        nav_tag+='<i class="ti-angle-right"></i>';
                        nav_tag+='</a>';
                        nav_tag+='</li>';
                        nav_tag+='</ul>';
                        nav_tag+='</nav>';

                        $('#wwgpc_pagelist_nav').html(nav_tag);

                        $('a[data-num^="sflunavnum_"]').click(function(){
                            var oid=$(this).attr("data-num");
                            pstart=oid.split('_')[1];
                            getContentList();
                        });


                        $('select[id^="wwgpp_plist_ctrl_"]').change(function(){
                            var value=$(this).val();
                            if(value=='') return;
                            var id=$(this).attr('data-id');
                            var lang=$(this).attr('data-trans');
                            var pagename=$(this).data('pagename');
                            var url=$(this).data('url');

                            if(value==='change')
                            {
                                if(pgperm.write != 1){
                                    mjs_module.data.showAlertHidden('pgtxt_notpermission');
                                    return;
                                }

                                if(pagename===undefined || pagename===null || pagename===''){
                                   mjs_module.data.showAlertHidden('Error pagename');
                                    return;
                                }

                                $.ajax({
                                    method: "POST",
                                    url: "admin.changePageSettingitem",
                                    data: {
                                        id: id
                                        , cond:value
                                        , lang:lang
                                        , pagename:pagename
                                        , url:url
                                    },
                                    success: function(response) {
                                        if(response.msg==="ok")
                                        {
                                            if(value==="change")
                                            {
                                                tabstatus=3;
                                                transedlang = lang;
                                                ContentPageChange(response.pagetype, response.curlang, response.items);
                                            }
                                            else{
                                                $('#pglistitem_'+id).remove();
                                            }
                                        }
                                        else {
                                            mjs_module.data.showAlertHidden('Error get one item from db!');
                                        }
                                    },
                                    error: function (jqXHR, errdata, errorThrown) {
                                        console.log(errdata);
                                    }
                                });
                            }
                            else if(value==='del')
                            {
                                if (pgperm.delete != 1) {
                                    mjs_module.data.showAlertHidden('pgtxt_notpermission');
                                    return;
                                }

                                mjs_module.data.Confirm('pgtxt_wantdeleteitem', function (val) {
                                    if (val) {
                                        $.ajax({
                                            method: "POST",
                                            url: "admin.changePageSettingitem",
                                            data: {
                                                id: id
                                                , cond:value
                                                , lang:lang
                                            },
                                            success: function(response) {
                                                if(response.msg==="ok")
                                                {
                                                    if(value==="change")
                                                    {
                                                        $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
                                                        $('.col-md-12.page_slider_content_list').removeClass('active');
                                                        $('#pagesetting').addClass('active');

                                                        $('#pageContAdd_btn_container').css('display','none');
                                                        $('#publick_contaniner').css('display','none');



                                                        $('input[name="pgsettranedLang"]').val(lang);
                                                        $('input[name="pgsetstate"]').val('change');
                                                        $('input[name="pgsetid"]').val(id);

                                                        tabstatus=3;
                                                        ContentPageChange(response.pagetype, response.curlang, response.items);
                                                    }
                                                    else{
                                                        $('#pglistitem_'+id).remove();
                                                    }
                                                }
                                                else {
                                                    mjs_module.data.showAlertHidden('Error get one item from db!');
                                                }
                                            },
                                            error: function (jqXHR, errdata, errorThrown) {
                                                console.log(errdata);
                                            }
                                        });
                                    }
                                });
                            }
                            else if(value==='active' || value==='block'){
                                if(pgperm.write != 1){
                                    mjs_module.data.showAlertHidden('pgtxt_notpermission');
                                    return;
                                }

                                if(pagename===undefined || pagename===null || pagename===''){
                                    mjs_module.data.showAlertHidden('Error pagename');
                                    return;
                                }

                                $.ajax({
                                    method: "POST",
                                    url: "admin.changePageSettingitem",
                                    data: {
                                        id: id
                                        , cond:value
                                        , lang:lang
                                    },
                                    success: function(response) {
                                        if(response.msg==="ok")
                                        {
                                            getContentList();
                                        }
                                        else {
                                            mjs_module.data.showAlertHidden('Error get one item from db!');
                                        }
                                    },
                                    error: function (jqXHR, errdata, errorThrown) {
                                        console.log(errdata);
                                    }
                                });
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

    function ContentPageChangeTwo(ppagetype, curlangname, pitem) {
        tabstatus = 3;
        var preitem=null;
        for (var j = 0; j < langOBJS.length; j++)
        {
            var item = langOBJS[j];
            if(pitem !==null && pitem!=='')
            {
              if(pitem.trans === item.langid && item.status ==='enable'){
                 item.active='active';
                langOBJS[j]=item;
                if(item.data_init===1)
                    preitem = item;
                break;
              }
            }
            else{
                 if(transedlang === item.langid && item.status ==='enable'){
                   item.active='active';
                  langOBJS[j]=item;
                  if(item.data_init===1)
                      preitem = item;
                  break;
                }
            }

        }

        if(preitem !==null)
        {
              if(preitem.pagename!==null && preitem.pagename!==''){
                  $('#pagesetting_name').val(preitem.pagename).attr('disabled', true);//read only, can't change
              }
              else
              {
                if(pagename_default!==null && pagename_default!=='')
                  $('#pagesetting_name').val(pagename_default).attr('disabled', true);//read only, can't change
                else
                  {
                   pagename_default = createRandompageName();
                  $('#pagesetting_name').val(pagename_default).attr('disabled', true);//read only, can't change
                }
              }

                $('#pagesetting_title').val(preitem.title);
                $('#pagesetting_author').val(preitem.author);
                $('input[name="pgsettranedLang"]').val(preitem.trans);
                $('input[name="pgsetstate"]').val('change');
               // $('input[name="pgsetid"]').val(pitem.id);

                $('#pagesetting_datapicker').datepicker({dateFormat: 'yy/mm/dd'});
                var d = new Date();
                var yy = d.getFullYear();
                var mm = d.getMonth()+1;
                var dd = d.getDate();

                if(preitem.time.split('-').length > 2){
                    yy=preitem.time.split('-')[0];
                    mm=preitem.time.split('-')[1];
                    dd=preitem.time.split('-')[2];
                    dd = dd.substr(0, 2);
                }
                else if(preitem.time.split('/').length > 2){
                    yy=preitem.time.split('/')[0];
                    mm=preitem.time.split('/')[1];
                    dd=preitem.time.split('/')[2];
                    dd = dd.substr(0, 2);
                }

                $('#pagesetting_datapicker').val(yy+'/'+mm+'/'+dd);

                var tag='';
                for (var i = 0; i < ppagetype.length; i++){
                    var oneobj = ppagetype[i];
                    var name = oneobj.name;
                    var id = oneobj.id;

                    var basic='';
                    if(curlangname ==='english')
                        basic = name;
                    else
                        basic = oneobj.english;

                    var seleted='';
                    if(parseInt(pagetype_default)!==0)
                    {
                      if(id===parseInt(pagetype_default))
                         seleted='selected="selected"';
                    }
                    else if(id===pitem.pagetypeId)
                    {
                        seleted='selected="selected"';
                    }
                    tag +='<option value="'+id+'" '+seleted+' data-basic="'+basic+'">'+name+'</option>';
                }
                $('#pagesetting_pgtype').html(tag);
                 $('#pagesetting_pgtype').change(function() {
                   pagetype_default = parseInt($(this).val());
                 });


              if(preitem.url!==undefined && preitem.url!==null && preitem.url!=='')
                {
                    var url = decodeURIComponent(preitem.url);
                    $('#pagesetting_url').val(url);//.attr('disabled', true);
                    $('#pagesetting_url').attr('data-url',url);
                }
                else
                {
                    $('#pagesetting_url').val('');//.attr('disabled', false);
                    $('#pagesetting_url').attr('data-url','');
                }

                if(preitem.edit!==undefined && preitem.edit!==null && preitem.edit!==''){
                    var edt0=htmldecodejs(preitem.edit);
                    $('#editcont0').val(edt0);
                    vueOBJ.TinyMCMcontent0 = edt0;
                }
                else
                    vueOBJ.TinyMCMcontent0='';

                if(preitem.url_invisible === 0)
                    $('#url_invisible').prop('checked', false);
                else
                    $('#url_invisible').prop('checked', true);

              /*  if(url!==null && url!==''){
                    $('#url_invisible').attr('disabled', true);
                }*/

                if(preitem.author_invisible === 0)
                    $('#author_invisible').prop('checked', false);
                else
                    $('#author_invisible').prop('checked', true);

                if(preitem.contenttype_invisible === 0)
                    $('#type_invisible').prop('checked', false);
                else
                    $('#type_invisible').prop('checked', true);

                if(preitem.time_invisible === 0)
                    $('#time_invisible').prop('checked', false);
                else
                    $('#time_invisible').prop('checked', true);
        }
        else
        {
            if(pitem !== undefined && pitem !==null && pitem !==''){
                if(pitem.pagename!==null && pitem.pagename!==''){
                    $('#pagesetting_name').val(pitem.pagename).attr('disabled', true);//read only, can't change
                }
                else
                {
                   if(pagename_default!==null && pagename_default!=='')
                    $('#pagesetting_name').val(pagename_default).attr('disabled', true);//read only, can't change
                    else{
                    pagename_default = createRandompageName();
                    $('#pagesetting_name').val(pagename_default).attr('disabled', true);//read only, can't change
                    }
                }

                $('#pagesetting_title').val(pitem.title);
                $('#pagesetting_author').val(pitem.author);
                $('input[name="pgsettranedLang"]').val(pitem.trans);
                $('input[name="pgsetstate"]').val('change');
                $('input[name="pgsetid"]').val(pitem.id);

                $('#pagesetting_datapicker').datepicker({dateFormat: 'yy/mm/dd'});
                var d = new Date();
                var yy = d.getFullYear();
                var mm = d.getMonth()+1;
                var dd = d.getDate();

                if(pitem.created_at !== null && pitem.created_at !== '') {
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

                var tag='';
                for (var i = 0; i < ppagetype.length; i++){
                    var oneobj = ppagetype[i];
                    var name = oneobj.name;
                    var id = oneobj.id;

                    var basic='';
                    if(curlangname ==='english')
                        basic = name;
                    else
                        basic = oneobj.english;

                    var seleted='';
                    if(parseInt(pagetype_default) !==0 && id===parseInt(pagetype_default))
                       seleted='selected="selected"';
                    else if(id===pitem.pagetypeId){
                        seleted='selected="selected"';
                    }
                    tag +='<option value="'+id+'" '+seleted+' data-basic="'+basic+'">'+name+'</option>';
                }
                $('#pagesetting_pgtype').html(tag);
                $('#pagesetting_pgtype').change(function() {
                   pagetype_default = parseInt($(this).val());
                 });

                if(pitem.url!==undefined && pitem.url!==null && pitem.url!=='')
                {
                    var url = decodeURIComponent(pitem.url);
                    for (var j = 0; j < langOBJS.length; j++)
                    {
                        var item = langOBJS[j];
                        if(pitem.trans === item.langid)
                        {
                            if(url !== item.url)
                                url = item.url;
                            break;
                        }
                    }

                    $('#pagesetting_url').val(url);//.attr('disabled', true);
                    $('#pagesetting_url').attr('data-url',url);
                }
                else
                {
                    $('#pagesetting_url').val('');//.attr('disabled', false);
                    $('#pagesetting_url').attr('data-url','');
                }

                if(pitem.content!==undefined && pitem.content!==null && pitem.content!==''){
                    var edt0=htmldecodejs(pitem.content);
                    vueOBJ.TinyMCMcontent0 = edt0;
                }
                else
                    vueOBJ.TinyMCMcontent0 = '';

                if(pitem.url_state == 0)
                    $('#url_invisible').prop('checked', false);
                else
                    $('#url_invisible').prop('checked', true);

               /* if(url!==null && url!==''){
                    $('#url_invisible').attr('disabled', true);
                }*/

                if(pitem.auth_state == 0)
                    $('#author_invisible').prop('checked', false);
                else
                    $('#author_invisible').prop('checked', true);

                if(pitem.type_state == 0)
                    $('#type_invisible').prop('checked', false);
                else
                    $('#type_invisible').prop('checked', true);

                if(pitem.date_state == 0)
                    $('#time_invisible').prop('checked', false);
                else
                    $('#time_invisible').prop('checked', true);

                    var dialCode = pitem.trans.split('-')[1];
            }
            else{

                if(pagename_default!=='')
                   $('#pagesetting_name').val(pagename_default).attr('disabled', true);
                else{
                  pagename_default = createRandompageName();
                  $('#pagesetting_name').val(pagename_default).attr('disabled', true);
                }

                $('#pagesetting_title').val('');
                $('#pagesetting_author').val(vueOBJ.username);
                $('input[name="pgsettranedLang"]').val('');
                $('input[name="pgsetstate"]').val('change');
                $('input[name="pgsetid"]').val('');

                $('#pagesetting_datapicker').datepicker({dateFormat: 'yy/mm/dd'});
                $('#pagesetting_url').val('');
                $('#pagesetting_url').attr('data-url','');
                vueOBJ.TinyMCMcontent0 = '';
                $('#url_invisible').prop('checked', false);
                $('#author_invisible').prop('checked', false);
                $('#type_invisible').prop('checked', false);
                $('#time_invisible').prop('checked', false);

                var tag='';
                $('#pagesetting_pgtype').html('');
                if(ppagetype !== undefined && ppagetype !==null && ppagetype !=='')
                    for (var i = 0; i < ppagetype.length; i++)
                    {
                        var oneobj = ppagetype[i];
                        var name = oneobj.name;
                        var id = oneobj.id;

                        var basic='';
                        if(curlangname ==='english')
                            basic = name;
                        else
                            basic = oneobj.english;

                        var seleted='';
                        if(parseInt(pagetype_default) !==0 && id===parseInt(pagetype_default))
                           seleted='selected="selected"';

                        tag +='<option value="'+id+'" '+seleted+' data-basic="'+basic+'">'+name+'</option>';
                    }

                $('#pagesetting_pgtype').html(tag);
                $('#pagesetting_pgtype').change(function() {
                   pagetype_default = parseInt($(this).val());
                 });

                if (pagename_default !== '')
                    $('#url_invisible').attr('checked', false);

                $('input[id="url_invisible"]').click(function() {
                    if ($(this).is(':checked')) {
                        var sel = document.getElementById('pagesetting_pgtype');
                        if (sel.options.length > 0) {
                            var opobj = sel.options[sel.selectedIndex];
                            var pgtype = $(opobj).data('basic');
                            var url = '';
                            pgtype = mjs_module.data.js_trim(pgtype);
                            if (pgtype !== undefined && pgtype !== null && pgtype !== '')
                                url += '/' + pgtype;

                            if (pagename_default !== '')
                                url += '/' + pagename_default;
                            else
                                url += '/WESNode-';

                            $('#pagesetting_url').val(url);
                        }
                    }
                    else
                    {
                        $('#pagesetting_url').val('');
                    }
                });

            }//pitem === null
        }
    }

    function savePreContentpageIntolangOBJ(preactiveLang){

        for(var i=0;i<langOBJS.length;i++)
        {
            if(langOBJS[i].langid === preactiveLang)
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
                langOBJS[i].edit= vueOBJ.TinyMCMcontent0;
                langOBJS[i].active='';
                langOBJS[i].data_init=1;
               // break;
            }
            else
              langOBJS[i].active='';
        }

    }

    function ContentPageChangeTwoLanguageEventHandler(){
        $('span.page1_translate_span').unbind('click');
        $('span.page1_translate_span').click(function (e)
        {
            if(tabstatus===3)
                savePreContentpageIntolangOBJ(transedlang);

            $('span.page1_translate_span').removeClass('active');
            $(this).addClass('active');
            var dcont=$(this).data('cont');
            if(dcont.split('-').length > 2){
                transedlang=dcont.split('-')[0]+'-'+dcont.split('-')[1];
                if(pagename_default!==null && pagename_default!==''){
                    $.ajax({
                        url: 'admin.getChangeContentASLang',
                        type: 'POST',
                        data: {
                            lang:transedlang,
                            pagename:pagename_default
                        },
                        async: true,
                        success: function (data) {
                            if(data.msg==='ok'){
                                ContentPageChangeTwo(data.pagetype, data.curlang, data.items);
                            }
                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        }
                    });

                }
                else
                    mjs_module.data.showAlertHidden('Error not pagename');
            }
        });
        $('span.span_langitem_controller').unbind('click');
        $('span.span_langitem_controller').click(function (e) {
            var dcont = $(this).data('cont');
            if(dcont.split('-').length < 2)
                return;

            var spanid=dcont.split('-')[0]+'-'+dcont.split('-')[1];

            $('#'+spanid).remove();

            var isrefresh=false;
            for (var i = 0; i < langOBJS.length; i++) {
                if(langOBJS[i].langid===spanid){
                    langOBJS[i].status ='disable';
                    if(langOBJS[i].active==='active'){
                        isrefresh = true;
                        langOBJS[i].active ='';
                    }

                }
            }

            if(isrefresh)
            {
                for (var ii = langOBJS.length-1; ii > -1; ii--)
                {
                    if(langOBJS[ii].status==='enable'){
                        transedlang = langOBJS[ii].langid;//active that last language.
                        break;
                    }
                }

                $('span.page1_translate_span').removeClass('active');
                $('#'+transedlang+' span.page1_translate_span').addClass('active');

                if(isrefresh && pagename_default!==null && pagename_default!=='')
                {
                    $.ajax({
                        url: 'admin.getChangeContentASLang',
                        type: 'POST',
                        data: {
                            lang:transedlang,
                            pagename:pagename_default
                        },
                        async: true,
                        success: function (data) {
                            if(data.msg==='ok'){
                                ContentPageChangeTwo(data.pagetype, data.curlang, data.items);
                            }
                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        }
                    });
                }
                else
                    mjs_module.data.showAlertHidden('Error not pagename');
            }

        });
    }

    function createRandompageName(){
        var d=new Date();
        //var ymd=mjs_module.data.convertNumToStr(d.getFullYear())+mjs_module.data.convertNumToStr((d.getMonth()+1))+mjs_module.data.convertNumToStr((d.getDate()));
        var month = d.getMonth()+1;
        if(month < 10)
            month = '0' + month;
        var day = d.getDate();
        if(day < 10)
            day = '0' + day;
        var ymd=d.getFullYear()+''+month+''+day;
        var hours = d.getHours();
        if(hours < 10)
            hours = '0' + hours;
        var min = d.getMinutes();
        if(min < 10)
            min = '0' + min;
        var sec = d.getSeconds();
        if(sec < 10)
            sec = '0' + sec;
        var hms = '-'+hours+''+min+''+sec;
        var rpagename='WESNode-' + ymd + hms;
        return rpagename;
    }

    function ContentPageChange(ppagetype, curlangname, pitem) {
        pagename_default = '';
        pagetype_default = 0;
        pageurl_default='';

        for(var ii=0;ii<stored_langs.length;ii++)
            stored_langs[ii].status='enable';

        $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
        $('.col-md-12.page_slider_content_list').removeClass('active');
        $('#pagesetting').addClass('active');

        $('#pageContAdd_btn_container').css('display','none');//none add btn;
        $('#publick_contaniner').css('display','block');
        $('#datalist-container').css('display','none');
        //$('.page1_translate_div.adddisablelang').css('display','none');//add language
        //$('.page1_translate_bar > .page1_translate_text, #translanglist').css('display','none');
       if(pitem.pagename!==null && pitem.pagename!==''){
           pagename_default=pitem.pagename;
           $('#pagesetting_name').val(pagename_default).attr('disabled', true);//read only, can't change
       }
       else
       {
           if(pagename_default!==null && pagename_default!=='')
              $('#pagesetting_name').val(pagename_default).attr('disabled', true);
           else{
              pagename_default=createRandompageName();
              $('#pagesetting_name').val(pagename_default).attr('disabled', true);
           }
       }

        $('#pagesetting_title').val(pitem.title);
        $('#pagesetting_author').val(pitem.author);
        $('input[name="pgsettranedLang"]').val(pitem.trans);
        $('input[name="pgsetstate"]').val('change');
        $('input[name="pgsetid"]').val(pitem.id);

        var url = decodeURIComponent(pitem.url);
        if(pitem.url!==undefined && pitem.url!==null && pitem.url!=='')
        {
            pageurl_default = url;
            $('#pagesetting_url').val(url);//.attr('disabled', true);
            $('#pagesetting_url').attr('data-url',url);
        }
        else
        {
            pageurl_default = '';
            $('#pagesetting_url').val('');//.attr('disabled', false);
            $('#pagesetting_url').attr('data-url','');
        }

        for (var i = langOBJS.length; i > 0; i--)
            langOBJS.pop();

        $('#translanglist').html('');
        var tags='';
        for (var j = 0; j < stored_langs.length; j++)
        {
            var obj = stored_langs[j];
            var iso = obj.iso;
            var dialCode = obj.dialcode;
            var cname = obj.name;
            var status = obj.status;
            var dcont=iso+'-'+dialCode+'-'+cname;
            var spanid=iso+'-'+dialCode;
            var active='';
            var find=false;
            if(pitem.trans == spanid)
                active='active';
            if(status==='enable')
            {
                tags +='<span id="'+spanid+'">';
                tags +='<span class="page1_translate_span '+active+'" style="cursor: pointer;display: inline-block" data-cont="'+dcont+'">'+cname+'</span>';
                tags +='<span class="span_langitem_controller" data-cont="'+dcont+'">&nbsp;&nbsp;|&nbsp;&nbsp; × </span>';
                tags +='</span>';
            }

            if(pitem.trans === spanid)
            {
                var obj={
                    pagename:pagename_default,
                    langname:cname.toLowerCase(),
                    langid:pitem.trans,
                    lagn_dialcode:dialCode,
                    title:pitem.title,
                    contenttype:pitem.pagetypeId,
                    contenttype_invisible:(pitem.type_state == 0) ? 0 : 1,
                    url:pageurl_default,
                    url_invisible:(pitem.url_state == 0) ? 0 : 1,
                    author:pitem.author,
                    author_invisible:(pitem.auth_state == 0) ? 0 : 1,
                    time:pitem.created_at,
                    time_invisible:(pitem.date_state == 0) ? 0 : 1,
                    edit:pitem.content,
                    active:active,
                    status:status,
                    data_init:1
                };
            }
            else
            {
                var obj={
                    pagename:pagename_default,
                    langname:cname.toLowerCase(),
                    langid:spanid,
                    lagn_dialcode:dialCode,
                    title:'',
                    contenttype:0,
                    contenttype_invisible: 0 ,
                    url:pageurl_default,
                    url_invisible: 0 ,
                    author:vueOBJ.username,
                    author_invisible: 0,
                    time:'',
                    time_invisible: 0 ,
                    edit:'',
                    active:active,
                    status:status,
                    data_init:0
                };
             }
            langOBJS.push(obj);
        }

        $('#translanglist').html(tags);

        ContentPageChangeTwoLanguageEventHandler();

        $('#pagesetting_datapicker').datepicker({dateFormat: 'yy/mm/dd'});

        var d = new Date();
        var yy = d.getFullYear();
        var mm = d.getMonth()+1;
        var dd = d.getDate();
        if(pitem.created_at !== null && pitem.created_at !== '') {
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

        $('#pagesetting_datapicker').val(yy+'/'+mm+'/'+dd);

        var tag='';
        for (var i = 0; i < ppagetype.length; i++){
            var oneobj = ppagetype[i];
            var name = oneobj.name;
            var id = oneobj.id;

            var basic='';
            if(curlangname ==='english')
                basic = name;
            else
                basic = oneobj.english;

            var seleted='';
            if(id===pitem.pagetypeId){
              pagetype_default = id;
                seleted='selected="selected"';
            }
            tag +='<option value="'+id+'" '+seleted+' data-basic="'+basic+'">'+name+'</option>';
        }
        $('#pagesetting_pgtype').html(tag);
        $('#pagesetting_pgtype').change(function() {
         pagetype_default = parseInt($(this).val());
        });

        if(pitem.content!==undefined && pitem.content!==null && pitem.content!==''){
            var edt0=htmldecodejs(pitem.content);
            $('#editcont0').val(edt0);
            vueOBJ.TinyMCMcontent0 = edt0;
        }
        else
            vueOBJ.TinyMCMcontent0 = '';

        if(pitem.url_state == 0)
            $('#url_invisible').prop('checked', false);
        else
            $('#url_invisible').prop('checked', true);

        if(pitem.auth_state == 0)
            $('#author_invisible').prop('checked', false);
        else
            $('#author_invisible').prop('checked', true);

        if(pitem.type_state == 0)
            $('#type_invisible').prop('checked', false);
        else
            $('#type_invisible').prop('checked', true);

        if(pitem.date_state == 0)
            $('#time_invisible').prop('checked', false);
        else
            $('#time_invisible').prop('checked', true);

    }

    function refreshPagesettingType(){
        if(transedlang === null || transedlang === '')
            return;
        $('#pagesetting_pgtype').html('');
        if($('span#'+transedlang).length > 0){
            $('span#'+transedlang).children('span.page1_translate_span').addClass('active');
            var langname = $('span#'+transedlang).children('span.page1_translate_span').text();
            langname = langname.toLowerCase();

            if(langname===null && langname==='')
            {
                return;
            }

            $.ajax({
                url: 'admin.getContentTypeFromLang',
                type: 'POST',
                data: {
                    langname:langname,
                    basic:'b'
                },
                async: false,
                success: function (data) {
                    var lists = data.lists;
                    if(lists!==undefined && lists!==null && lists!=='' && lists instanceof Array)
                    {
                        var tags='';
                        for(var i=0;i < lists.length;i++)
                        {
                            var obj=lists[i];
                            var keys = Object.keys(obj);
                            var id = obj[keys[0]];
                            var lname = obj[keys[1]];
                            var basic='';
                            if(langname==='english')
                                basic = lname;
                            else
                                basic = obj[keys[2]];

                            var seleted='';
                             if(parseInt(pagetype_default)!==0)
                              {
                                if(id===parseInt(pagetype_default))
                                   seleted='selected="selected"';
                              }

                            if(lname!==null && lname!=='')
                                tags+='<option value="'+id+'" '+seleted+' data-basic="'+basic+'">'+lname+'</option>';
                        }
                        $('#pagesetting_pgtype').html(tags);
                        $('#pagesetting_pgtype').change(function() {
                         pagetype_default = parseInt($(this).val());
                        });

                    }

                },
                error: function (jqXHR, errdata, errorThrown) {
                    console.log(errdata);
                }
            });
        }
    }

    function initLangOBJS(){
        for(var i=0;i<langOBJS.length;i++)
        {
            langOBJS[i].pagename = '';
            langOBJS[i].langid = '';
            langOBJS[i].langname = '';
            langOBJS[i].title = '';
            langOBJS[i].contenttype = '';
            langOBJS[i].contenttype_invisible =  0;
            langOBJS[i].url = '';
            langOBJS[i].url_invisible =  0;
            langOBJS[i].author= '';
            langOBJS[i].author_invisible=  0;
            langOBJS[i].time= '';
            langOBJS[i].time_invisible=  0;
            langOBJS[i].edit= '';
            langOBJS[i].active='';
            langOBJS[i].data_init=0;
        }
    }


    function changelangOBJNewActive(activelangid, curlangname){
        for(var i=0;i<langOBJS.length;i++)
        {
            if(langOBJS[i].langid === activelangid)
            {
                if(langOBJS[i].data_init===1)
                {
                    $('#pagesetting_name').val(langOBJS[i].pagename);
                    $('#pagesetting_title').val(langOBJS[i].title);
                    $('#pagesetting_pgtype').val(langOBJS[i].contenttype);

                    if(langOBJS[i].contenttype_invisible===1)
                        $('#type_invisible').prop('checked',true);

                    $('#pagesetting_url').val(langOBJS[i].url);
                    if(langOBJS[i].url_invisible===1)
                        $('#url_invisible').prop('checked',true);

                    $('#pagesetting_author').val(langOBJS[i].author);
                    if(langOBJS[i].author_invisible===1)
                        $('#author_invisible').prop('checked',true);

                    $('#pagesetting_datapicker').val(langOBJS[i].time);
                    if(langOBJS[i].time_invisible===1)
                        $('#time_invisible').prop('checked',true);
                    //var edt0=htmldecodejs(pitem.content);
                    $('#editcont0').val(langOBJS[i].edit);
                    vueOBJ.TinyMCMcontent0 = langOBJS[i].edit;
                }
                else
                {
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

    function changeLangOBJADDDEL(state, contrlId){
      if(state==='del')
      {
          for(var i=0;i<langOBJS.length;i++)
          {
              if(langOBJS[i].langid===contrlId)
              {
                  langOBJS.splice(i, 1);
              }
          }
      }
      else if(state==='add')
      {
              for(var j=0;j<stored_langs.length;j++)
              {
                  var obj = stored_langs[j];
                  var iso = obj.iso;
                  var dialCode = obj.dialcode;
                  var cname = obj.name;
                  var status = obj.status;
                  var dcont=iso+'-'+dialCode;
                  var find=false;
                  if(status==='enable' && dcont === contrlId)
                  {
                      for(var i=0;i<langOBJS.length;i++)
                      {
                          if(dcont === langOBJS[i].langid){
                              find=true;
                              break;
                          }

                      }

                      if(find===false)
                      {
                          var pobj={
                              pagename : pagename_default,
                              langid:dcont,
                              langname:cname.toLowerCase(),
                              title : '',
                              contenttype : pagetype_default,
                              contenttype_invisible :  0,
                              url : pageurl_default,
                              url_invisible : 0,
                              author : vueOBJ.username,
                              author_invisible :  0,
                              time : '',
                              time_invisible : 0,
                              edit : '',
                              active : '',
                              data_init:0
                          };
                          langOBJS.push(pobj);
                      }
                  }

              }
      }

    }

    function changelangOBJActive(activelangid, prelangid){
        for(var i=0;i<langOBJS.length;i++)
        {
            if(langOBJS[i].langid === prelangid)
            {
                langOBJS[i].pagename = $('#pagesetting_name').val();
                langOBJS[i].title = $('#pagesetting_title').val();
                langOBJS[i].contenttype = $('#pagesetting_pgtype').val();
                langOBJS[i].contenttype_invisible = $('#type_invisible').is(':checked') ? 1: 0;
                if($('#pagesetting_url').val() !== langOBJS[i].url)
                    $('#pagesetting_url').val(langOBJS[i].url);
                langOBJS[i].url = $('#pagesetting_url').val();
                langOBJS[i].url_invisible = $('#url_invisible').is(':checked') ? 1: 0;
                langOBJS[i].author= $('#pagesetting_author').val();
                langOBJS[i].author_invisible=  $('#author_invisible').is(':checked') ? 1: 0;
                langOBJS[i].time= $('#pagesetting_datapicker').val();
                langOBJS[i].time_invisible= $('#time_invisible').is(':checked') ? 1: 0;
                langOBJS[i].edit= vueOBJ.TinyMCMcontent0;
                langOBJS[i].active='';
                langOBJS[i].data_init=1;
                break;
            }
        }

        for(var i=0;i<langOBJS.length;i++)
        {
            if(langOBJS[i].langid === activelangid)
            {
                langOBJS[i].active='active';
                //langOBJS[i].langname = curlangname;
                if(langOBJS[i].data_init===1){
                    $('#pagesetting_name').val(langOBJS[i].pagename);
                    $('#pagesetting_title').val(langOBJS[i].title);
                    $('#pagesetting_pgtype').val(langOBJS[i].contenttype);

                    if(langOBJS[i].contenttype_invisible===1)
                        $('#type_invisible').prop('checked',true);

                    $('#pagesetting_url').val(langOBJS[i].url);
                    if(langOBJS[i].url_invisible===1)
                        $('#url_invisible').prop('checked',true);

                    $('#pagesetting_author').val(langOBJS[i].author);
                    if(langOBJS[i].author_invisible===1)
                        $('#author_invisible').prop('checked',true);

                    $('#pagesetting_datapicker').val(langOBJS[i].time);
                    if(langOBJS[i].time_invisible===1)
                        $('#time_invisible').prop('checked',true);
                    //var edt0=htmldecodejs(pitem.content);
                     $('#editcont0').val(langOBJS[i].edit);
                      vueOBJ.TinyMCMcontent0 = langOBJS[i].edit;
                }
                else
                {
                    $('#pagesetting_name').val(pagename_default);
                    if(pageurl_default !== langOBJS[i].url)
                        pageurl_default = langOBJS[i].url;
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

    function init_list_nav_cntTranslatelist(){
        $('span.page1_translate_span').click(function (e)
        {
            $('span.page1_translate_span').removeClass('active');
            $(this).addClass('active');
            var dcont=$(this).data('cont');
            if(dcont.split('-').length > 2){
                var prelangid=transedlang;
                transedlang=dcont.split('-')[0]+'-'+dcont.split('-')[1];
                if(tabstatus===2)// || tabstatus===3
                    changelangOBJActive(transedlang, prelangid);
                refreshPagesettingType();
            }
        });

        $('span.span_langitem_controller').click(function (e) {
            var dcont = $(this).data('cont');
            if(dcont.split('-').length < 1)
                return;

            var iso=dcont.split('-')[0];
            var dialcode=dcont.split('-')[1];

            for (var i = 0; i < stored_langs.length; i++) {
                var objj = stored_langs[i];
                var j_iso = objj.iso;
                var j_dialcode = objj.dialcode;
                var tlng=j_iso+'-'+j_dialcode;
                if(iso===j_iso && dialcode === j_dialcode){
                    objj.status='disable';
                    stored_langs[i]=objj;
                }
            }

            for (var ii = stored_langs.length-1; ii > -1; ii--)
            {
                var objj = stored_langs[ii];
                var j_status = objj.status;
                var tlng=objj.iso+'-'+objj.dialcode;
                if(j_status==='enable'){
                    transedlang = tlng;//active that last language.
                    break;
                }
            }

            if(tabstatus===2)
               changeLangOBJADDDEL('del');

            var dis_id=iso+'-'+dialcode;
            $('#'+dis_id).remove();

            //console.log(transedlang);

            $('span.page1_translate_span').removeClass('active');
            $('#'+transedlang+' span.page1_translate_span').addClass('active');

            refreshPagesettingType();
        });
    }

    function createContentPage() {
        var burl = $.trim($('#wwpg_content_url_dlg').val());
        var burl_auto = $('#wwpg_content_url_auto_dlg');//ckd
        var btime = $.trim($('#wwpg_content_dlg_datapicker').val());
        var btime_auto = $('#wwpg_content_time_auto_dlg');//ckd
        var basicccontenttype=$('#wwpg_content_type_dlg').val();
        pagetype_default = parseInt(basicccontenttype);
        pagename_default = burl.split('/')[burl.split('/').length-1];
        pageurl_default = burl;

        for(var ii=0;ii<stored_langs.length;ii++)
            stored_langs[ii].status='enable';

        for (var i = langOBJS.length; i > 0; i--)
            langOBJS.pop();

        /* init values */
        $("#pagesetting_frm")[0].reset();
        $('#pagesetting_author').attr('readonly', false);
        $('#pagesetting_pgtype').attr('disabled', false);
        $('input[name="pgsetstate"]').val('add');
        $('input[name="pagesetting_author"]').val(vueOBJ.username);
        vueOBJ.TinyMCMcontent0='';

        $('#translanglist').html('');
        var tags='';
        for (var j = 0; j < stored_langs.length; j++)
        {
            var obj = stored_langs[j];
            var iso = obj.iso;
            var dialCode = obj.dialcode;
            var cname = obj.name;
            var status = obj.status;
            var dcont=iso+'-'+dialCode+'-'+cname;
            var spanid=iso+'-'+dialCode;
            var active='';
            if(status==='enable')
            {
               if(transedlang !== null && transedlang !== '' && spanid == transedlang)
                    active='active';
               var objj={
                   pagename:(pagename_default!=='') ? pagename_default : '',
                   langname:cname.toLowerCase(),
                   langid:spanid,
                   lagn_dialcode:dialCode,
                   title:'',
                   contenttype:pagetype_default,
                   contenttype_invisible:0,
                   url:(pageurl_default!=='') ? pageurl_default: '',
                   url_invisible:0,
                   author:vueOBJ.username,
                   author_invisible:0,
                   time:btime,
                   time_invisible:0,
                   edit:'',
                   active:active,
                   data_init: 0
               };
                langOBJS.push(objj);

                tags +='<span id="'+spanid+'">';
                tags +=     '<span class="page1_translate_span '+active+'" style="cursor: pointer;display: inline-block" data-cont="'+dcont+'">'+cname+'</span>';
                tags +=     '<span class="span_langitem_controller" data-cont="'+dcont+'">&nbsp;&nbsp;|&nbsp;&nbsp; × </span>';
                tags +='</span>';
            }
        }

        $('#translanglist').html(tags);
        initContentListTranslatelist();

        var tag='';
        var sel = document.getElementById('wwpg_content_type_dlg');
        if(sel.options.length > 0)
        {
            var s_id= sel.options[sel.selectedIndex].value;

            for(var i=0; i < sel.options.length; i++){
                var text =  sel.options[i].text;
                var id= sel.options[i].value;
                var basic= $(sel.options[i]).data('basic');
                var seleted='';
                if(pagetype_default!==0 && id===pagetype_default)
                    seleted='selected="selected"';
                else if(id===s_id){
                    seleted='selected="selected"';
                }
                tag +='<option value="'+id+'" '+seleted+' data-basic="'+basic+'">'+text+'</option>';
            }
        }

        $('#pagesetting_pgtype').html(tag);
        $('#pagesetting_pgtype').change(function(){
            pagetype_default = parseInt($(this).val());
        });

        $('#pagesetting_datapicker').datepicker({dateFormat: 'yy/mm/dd'});
        $('#pagesetting_datapicker').val(btime);

        if($(burl_auto).is(':checked')){
            $('#url_invisible').attr('checked', true);
        }
        if($(btime_auto).is(':checked')){
            $('#time_invisible').attr('checked', true);
        }

        $('#pagesetting_url').val(pageurl_default);//.attr('disabled',true);

        if(pagename_default!==null && pagename_default!==''){
           $('#pagesetting_name').val(pagename_default).attr('disabled',true);
        }
        else
        {
            pagename_default = createRandompageName();
            $('#pagesetting_name').val(pagename_default).attr('disabled',true);
        }


        $('input[id="url_invisible"]').click(function() {
            if($(this).is(':checked'))
            {
                var sel = document.getElementById('pagesetting_pgtype');
                if(sel.options.length > 0)
                {
                    var opobj =  sel.options[sel.selectedIndex];
                    var pgtype = $(opobj).data('basic');
                    var url ='';
                    pgtype=mjs_module.data.js_trim(pgtype);
                    if(pgtype!==undefined && pgtype!==null && pgtype !=='')
                        url += '/'+pgtype;
                    pagename_default = createRandompageName();
                    url += '/'+pagename_default;
                    pageurl_default=url;
                    $('#pagesetting_url').val(pageurl_default);
                    $('#pagesetting_name').val(pagename_default);

                    for(var i=0;i<langOBJS.length;i++){
                        langOBJS[i].pagename = pagename_default;
                        langOBJS[i].url=pageurl_default;
                    }
                }

            }
            else{
                $('#pagesetting_url').val('');
                $('#pagesetting_name').val('');
                pagename_default='';
                pageurl_default='';
                for(var i=0;i<langOBJS.length;i++){
                    langOBJS[i].pagename = pagename_default;
                    langOBJS[i].url=pageurl_default;
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

   function  gotocontentList(){
       pagename_default='';
       pageurl_default='';
       pagetype_default=0;

       $('input[name="pgsetstate"]').val('add');
       $('#wwgpp_lang_list').val('');

       tabstatus=0;
       transedlang='';//입부분을 삭제하면 선택한 언어에 대하여 리스트한다. ckd
       $('#publick_contaniner').css('display', 'none');
       $('#pageContAdd_btn_container').css('display', 'block');
       $('#pagesetting').removeClass('active');
       $('#wwpc_list').addClass('active');
       $('div[data-target="wwpc_list"]').addClass('page1_content_side_bar_seleted');
   }

    function setLanguagesList(){
        if(stored_langs!=='')
        {
            var tags='';
            tags +='<option value="" style="font-weight: bold">···</option>';
            for (var j = 0; j < stored_langs.length; j++)
            {
                var obj = stored_langs[j];
                var iso = obj.iso;
                var dialCode = obj.dialcode;
                var cname = obj.name;
                var status = obj.status;
                var dcont=iso+'-'+dialCode+'-'+cname;
                var selected="";
                if((iso+'-'+dialCode) == transedlang)
                    selected=" selected ";
                if(status=='enable'){
                    tags +='<option value="'+dcont+'" '+selected+' >'+cname+'</option>';
                }

            }
            $('#wwgpp_lang_list').html(tags);//list of lists
            $('#wwpg_content_basiclang_dlg').html(tags);//list of create content

        }
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
                pgtxt_save:'',
                pgtxt_preview:'',
                pgtxt_release:'',
                pgtxt_contenttype:'',
                pgtxt_select:'',
                pgtxt_aboutus:'',
                pgtxt_title:'',
                pgtxt_time:'',
                pgtxt_url:'',
                pgtxt_theeditor:'',
                pgtxt_content:'',
                pgtxt_page:'',
                pgtxt_filters:'',
                pgtxt_search:'',
                pgtxt_setupthe:'',
                pgtxt_setting:'',
                pgtxt_type:'',
                pgtxt_author:'',
                pgtxt_delete:'',
                pgtxt_name:'',
		        pgtxt_create:'',
                pgtxt_dbsaved:'',
                pgtxt_releasesuccess:'',
                pgtxt_selectlanguagesave:'',
                pgtxt_selectlanguage:'',
                btntxt_cancel:'',
                pgtxt_wantdeleteitem:'',
                pgtxt_notpermission:'',
                pgtxt_language:'',
                pgtxt_basic:'',
                pgtxt_hide:'',
                pgtxt_status:'',
                pgtxt_auto:'',
                btntxt_savechange:'',
                pgtxt_fieldnonempty:'',
                pgtxt_includetxtstart:'',
                pgtxt_alreadyexistname:'',
                pgtxt_previewpage:'',

                btntxt_add:'',
                btntxt_edit:'',
                btntxt_delete:'',
                btntxt_change:'',
                TinyMCMcontent0: '',
                username:'',
                uname:'',
            }
        },
        computed: {
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
            cpgtxt_contenttype:function () {
                return this.pgtxt_contenttype
            },
            cpgtxt_page:function () {
                return this.pgtxt_page
            },
            cpgtxt_select:function () {
                return this.pgtxt_select
            },
            cpgtxt_aboutus:function () {
                return this.pgtxt_aboutus
            },
            cpgtxt_title:function () {
                return this.pgtxt_title
            },
            cpgtxt_author:function () {
                return this.pgtxt_author
            },
            cpgtxt_time:function () {
                return this.pgtxt_time
            },
            cpgtxt_url:function () {
                return this.pgtxt_url
            },
            cpgtxt_name:function () {
                return this.pgtxt_name
            },
            cpgtxt_delete:function () {
                return this.pgtxt_delete
            },
            cpgtxt_content:function () {
                return this.pgtxt_content
            },
            cpgtxt_language:function () {
                return this.pgtxt_language
            },
            cpgtxt_filters:function () {
                return this.pgtxt_filters
            },
            cbtntxt_add:function () {
                return this.btntxt_add
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit
            },
            cbtntxt_delete:function () {
                return this.btntxt_delete
            },
            cpgtxt_search:function () {
                return this.pgtxt_search
            },
            cpgtxt_setupthe:function () {
                return this.pgtxt_setupthe
            },
            cpgtxt_setting:function () {
                return this.pgtxt_setting
            },
            cpgtxt_type:function () {
                return this.pgtxt_type
            },
            cpgtxt_create:function () {
                return this.pgtxt_create
            },
            cpgtxt_dbsaved:function () {
                return this.pgtxt_dbsaved
            },
            cpgtxt_releasesuccess:function () {
                return this.pgtxt_releasesuccess
            },
            cbtntxt_cancel:function () {
                return this.btntxt_cancel
            },
            cbtntxt_change:function () {
                return this.btntxt_change
            },
            cpgtxt_basic:function () {
                return this.pgtxt_basic
            },
            cpgtxt_auto:function () {
                return this.pgtxt_auto
            },
            cpgtxt_hide:function () {
                return this.pgtxt_hide
            },
            cpgtxt_status:function () {
                return this.pgtxt_status
            },
            cbtntxt_savechange:function () {
                return this.btntxt_savechange
            },
            cpgtxt_previewpage:function () {
                return this.pgtxt_previewpage
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
            pgtxt_selectlanguage = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguage');
            pgtxt_selectlanguagesave = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguagesave');
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
            },
            getWWGStoredLang(){
                 axios.post('admin.getWWGStoredLang').then((response) => {
                    let msg = response.data.msg;
                    if(msg =="ok")
                    {
                        if(response.data.langlist!=''){
                            stored_langs = $.parseJSON(response.data.langlist);
                            setLanguagesList();
                            vueOBJ.initpage();
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                })
            },
            initpage()
            {
                tabstatus=0;
                pstart=1;

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

                $('#pageContAdd_btn').click(function (e)
                {
                    e.preventDefault();
                    e.stopPropagation();
                    if(pgperm.create != 1){
                        mjs_module.data.showAlert('pgtxt_notpermission');
                        return;
                    }

                   if(tabstatus===0)
                   {
                       $('#wwpg_content_url_dlg').val('').attr('disabled',true);
                       $('#myCreateContentModal').modal('show');
                       $('#wwpg_content_url_auto_dlg').prop('checked',false);
                       //$('#wwpg_content_dlg_datapicker_icon').click(function (){
                           $('#wwpg_content_dlg_datapicker').datepicker({dateFormat: 'yy/mm/dd'});
                           var d = new Date();
                           var yy = d.getFullYear();
                           var mm = d.getMonth()+1;
                           var dd = d.getDate();
                           $('#wwpg_content_dlg_datapicker').val(yy+'/'+mm+'/'+dd);
                       //});
                        $('#wwpg_content_time_auto_dlg').prop('checked',false);
                        $('#wwpg_content_basiclang_dlg').val('');
                        $('#wwpg_content_type_dlg').html('');

                       $('input[id="wwpg_content_url_auto_dlg"]').click(function() {
                           var ctdv = $('#wwpg_content_type_dlg').val();
                           //console.log(ctdv);
                           if(ctdv===null || ctdv===''){
                               $(this).prop('checked',false);
                               mjs_module.data.showAlert('please select content type!');
                               return;
                           }

                           if($(this).is(':checked'))
                           {
                               var sel = document.getElementById('wwpg_content_type_dlg');
                               if(sel.options.length > 0){
                                   var opobj =  sel.options[sel.selectedIndex];
                                   var pgtype = $(opobj).data('basic');
                                   var url ='';
                                   pgtype=mjs_module.data.js_trim(pgtype);
                                   if(pgtype!==undefined && pgtype!==null && pgtype !=='')
                                       url += '/'+pgtype;
                                   var pg_default = createRandompageName();
                                   url += '/'+pg_default;
                                   $('#wwpg_content_url_dlg').val(url);
                               }
                           }
                           else{
                               $('#wwpg_content_url_dlg').val('');
                           }
                       });
                   }
                   else{ //tabstatus!=1 and tabstatus !=0

                   }
                });

            },
            editorclick0(){
               //$('.tox.tox-tinymce').css('height','350px');
            },
            editorblue0(){
                //if(tabstatus!==3)
                // $('.tox.tox-tinymce').css('height','150px');
            },
            edit_init_callback0(){
                $('.tox-statusbar').css('display','none');
            },
            upload_handler0(blobInfo, success, failure, progress) {
                if(pgperm.write != 1){
                    mjs_module.data.showAlert('pgtxt_notpermission');
                    return;
                }
                var xhr, formData;
                xhr = new XMLHttpRequest();
                xhr.withCredentials = false;
                xhr.open('POST', 'admin.UpdateWWGBarCenterImg');
                xhr.upload.onprogress = function (e) {
                    progress(e.loaded / e.total * 100);
                };
                xhr.onload = function() {
                    var json;
                    if (xhr.status < 200 || xhr.status >= 300) {
                        failure('HTTP Error: ' + xhr.status);
                        return;
                    }
                    json = JSON.parse(xhr.responseText);

                    if (!json || typeof json.location != 'string') {
                        failure('Invalid JSON: ' + xhr.responseText);
                        return;
                    }
                    // $('#wwga_footbarleft_upload_preview_temp').val(json.filename);
                    success(json.location);
                };
                xhr.onerror = function () {
                    failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
                };
                formData = new FormData();
                formData.append('file', blobInfo.blob(), blobInfo.filename());
                xhr.send(formData);
            },
            select_content_page_search(){
                var objval=$('#wwpc_select_content_page_type').val();
                var pagetype=parseInt(objval);
                if (isNaN(pagetype)) {
                    pagetype=0;
                }
                else
                    contentpagetype = pagetype;

                getSideContentPageData();
            },
            PagePreview(){
                $("#wwpc_previewModalModalbody").html('');
                var url = $('#pagesetting_url').val();
                var iframeH = $(window).height()-100;
                var lang = "";
                setTempLang();
                lang = transedlang.split("-")[0];
                url = '/'+lang+url;
                $("#wwpc_previewModalModalbody").html('<iframe src="'+url+'" style="border:none;width:100%; height: '+iframeH+'px;" title="preview"></iframe>');
                $("#wwpc_previewModal").modal('show');
            },
            wwgpp_search(){
              pstart=1;
              getContentList();
            },
            wwgpp_selected_lists_del(){
                mjs_module.data.Confirm('pgtxt_wantdeleteitem',function (val) {
                    if(val){
                        var ids={};
                        $('input[name="wwgpc_contentlist_ck"]').each(function (index, element) {
                            if($(element).is(':checked')){
                                var id=$(element).data('id');
                                ids[index]=id;
                                $.ajax({
                                    url: 'admin.wwgpc_deleteGroupList',
                                    type: 'POST',
                                    data: {
                                        ids:ids,
                                    },
                                    async: false,
                                    success: function (data) {
                                        if(data.msg=="ok"){
                                            vueOBJ.wwgpp_search();
                                        }
                                        else{
                                            mjs_module.data.showAlertHidden(data.msg);
                                        }
                                    },
                                    error: function (jqXHR, errdata, errorThrown) {
                                        console.log(errdata);
                                    }
                                });
                            }
                        });
                    }
                });

            },
            wwgp_createNewContent(){
                pagetype_default=0;
                var burl = $.trim($('#wwpg_content_url_dlg').val());
                var btime = $.trim($('#wwpg_content_dlg_datapicker').val());
                var basiclang = $('#wwpg_content_basiclang_dlg').val();
                var basicccontenttype=$('#wwpg_content_type_dlg').val();

                if(burl==='' || btime === '' || basiclang === '' || basicccontenttype === '')
                {
                    mjs_module.data.showAlertHidden('This fields must not empty.');
                    return;
                }

                $('#myCreateContentModal').modal('hide');
                $("#pageContAdd_btn_container").css('display','none');

               $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
               $('.col-md-12.page_slider_content_list').removeClass('active');

               $('#pagesetting').addClass('active');

                $('#publick_contaniner').css('display','block');
                $('#translanglist .span_langitem_controller').css('display','block');
                //$('.page1_translate_bar > .page1_translate_text, #translanglist').css('display','inline-block');

                $('.page1_translate_bar_right .adddisablelang').css('display','block');
                $('#datalist-container').css('display','block');

               //$('#pagesetting_datapicker').attr('disabled', false);
                transedlang = basiclang.split('-')[0]+'-'+basiclang.split('-')[1];
                tabstatus = 2;
                createContentPage();
            },
            wwgpp_getCtype(){
                var transplit = $('#wwgpp_lang_list').val();
                if(transplit!==null && transplit !=='' && transplit.split('-').length > 2)
                {
                    $("#wwgpp_list_contenttype").html('');
                    var langname = transplit.split('-')[2];
                    langname = langname.toLowerCase();
                    $.ajax({
                        url: 'admin.getContentTypeFromLang',
                        type: 'POST',
                        data: {
                            langname:langname,
                            basic:'b'
                        },
                        async: false,
                        success: function (data) {
                           var lists = data.lists;
                           if(lists===undefined || lists===null || lists==='')
                               return;
                            var tags='<option value="" selected="selected" style="font-weight: bold">···</option>';
                            for(var i=0;i < lists.length;i++)
                            {
                               var obj=lists[i];
                               var keys = Object.keys(obj);
                               var id = obj[keys[0]];
                               var lname = obj[keys[1]];
                                var basic='';
                                if(langname==='english')
                                    basic = lname;
                                else
                                    basic = obj[keys[2]];
                              if(lname!==null && lname!=='')
                               tags+='<option value="'+id+'" data-basic="'+basic+'">'+lname+'</option>';
                           }

                          $("#wwgpp_list_contenttype").html(tags);
                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        }
                    });
                    this.wwgpp_search();
                }
                else{
                    pstart=1;
                    getContentList();
                }
            },
            wwgpp_getCtype_basiclang_dlg()
            {
                var transplit = $('#wwpg_content_basiclang_dlg').val();
                $("#wwpg_content_type_dlg").html('');
                if(transplit!==null && transplit !=='' && transplit.split('-').length > 2)
                {
                    var langname = transplit.split('-')[2];
                    langname = langname.toLowerCase();
                    $.ajax({
                        url: 'admin.getContentTypeFromLang',
                        type: 'POST',
                        data: {
                            langname:langname,
                            basic:'b'
                        },
                        async: false,
                        success: function (data) {
                            var lists = data.lists;
                            if(lists===undefined || lists===null || lists==='')
                                return;
                            var tags='';
                            for(var i=0;i < lists.length;i++)
                            {
                                var obj=lists[i];
                                var keys = Object.keys(obj);
                                var id = obj[keys[0]];
                                var lname = obj[keys[1]];
                                var basic='';
                                if(langname==='english')
                                    basic = lname;
                                else
                                    basic = obj[keys[2]];

                                if(lname!==null && lname!=='')
                                    tags+='<option value="'+id+'" data-basic="'+basic+'">'+lname+'</option>';
                            }

                            $("#wwpg_content_type_dlg").html(tags);
                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        }
                    });

                    this.wwgpp_search();
                }
            },
            Adddisablelang(){
                var tags='';
                $('#wwpc_disable_lang_add_body').html('');
                   if(tabstatus===2){
                       for(var i=0; i < stored_langs.length;i++)
                       {
                           var obj=stored_langs[i];
                           if(obj.status==='disable'){
                               var iso = obj.iso;
                               var dialCode = obj.dialcode;
                               var cname = obj.name;
                               var dcont=iso+'-'+dialCode+'-'+cname;
                               tags += '<div class="col-3 form-check form-check-inline">';
                               tags += '<input class="form-check-input" type="checkbox" id="'+dcont+'" value="'+cname+'">';
                               tags +=  '<label class="form-check-label" htmlFor="'+dcont+'">'+cname+'</label>';
                               tags += '</div>';
                           }
                       }
                   }
                   else if(tabstatus===3){
                       for(var i=0; i < langOBJS.length;i++)
                       {
                           var obj=langOBJS[i];
                           if(obj.status==='disable'){
                               var langid = obj.langid;
                               var iso = langid.split('-')[0];
                               var dialCode = obj.lagn_dialcode;
                               var cname = obj.langname;
                               var dcont=iso+'-'+dialCode+'-'+cname;
                               tags += '<div class="col-3 form-check form-check-inline">';
                               tags += '<input class="form-check-input" type="checkbox" id="'+dcont+'" value="'+cname+'">';
                               tags +=  '<label class="form-check-label" htmlFor="'+dcont+'">'+cname+'</label>';
                               tags += '</div>';
                           }
                       }
                   }

                $('#wwpc_disable_lang_add_body').html(tags);
                $('#wwpc_AddTranslationModal').modal('show');
            },

            wwpc_addTrans_btn_event(){
               $('#wwpc_disable_lang_add_body').children().each(function (index,element){
                   var inputOBJ=$(element).find('.form-check-input');
                   if($(inputOBJ).is(':checked')){
                       var objid=$(inputOBJ).attr('id');
                       var o_iso=objid.split('-')[0];
                       var o_dial=objid.split('-')[1];
                       var _iso_dial=o_iso+'-'+o_dial;
                       var tag='';
                       if(tabstatus===2)
                       {
                           for (var j = 0; j < stored_langs.length; j++)
                           {
                               var obj = stored_langs[j];
                               var iso = obj.iso;
                               var dialCode = obj.dialcode;
                               var cname = obj.name;
                               var dcont=iso+'-'+dialCode+'-'+cname;
                               var spanid=iso+'-'+dialCode;
                               if(_iso_dial===spanid)
                               {
                                   obj.status='enable';
                                   stored_langs[j]=obj;
                                   tag ='<span id="'+spanid+'"><span class="page1_translate_span" style="cursor: pointer" data-cont="'+dcont+'">'+cname+'</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span class="span_langitem_controller" data-cont="'+dcont+'">×</span></span>';
                                   $('#translanglist').append(tag);
                                   break;
                               }
                           }

                           changeLangOBJADDDEL('add', _iso_dial);
                           initContentListTranslatelist();
                       }
                       else if(tabstatus===3)
                       {
                           for (var j = 0; j < langOBJS.length; j++)
                           {
                               var cname = langOBJS[j].langname;
                               cname = capitalizeFirstLetter(cname);
                               var dcont=langOBJS[j].langid+'-'+langOBJS[j].langname;
                               var spanid=langOBJS[j].langid;
                               if(_iso_dial===spanid){
                                   langOBJS[j].status='enable';
                                   tag ='<span id="'+spanid+'"><span class="page1_translate_span" style="cursor: pointer" data-cont="'+dcont+'">'+cname+'</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span class="span_langitem_controller" data-cont="'+dcont+'">×</span></span>';
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
            wwpc_saveContentpageofOne(){
                if(tabstatus===3){
                    this.wwpc_saveContentpageMuti_change();
                }
                else if(tabstatus===2){
                    if(pgperm.write != 1){
                        mjs_module.data.showAlert('pgtxt_notpermission');
                        return;
                    }

                    if(transedlang===null || transedlang === '')
                    {
                        mjs_module.data.showAlertHidden('pgtxt_selectlanguagesave');
                        return;
                    }

                    $('input[name="pgsettranedLang"]').val(transedlang);

                    //new page one
                    var pgtxt_page = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents,'pgtxt_page');
                    var pgtxt_name = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents,'pgtxt_name');
                    var pgtxtfieldnonempty = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents,'pgtxt_fieldnonempty');

                    var a_content = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents,'pgtxt_content');
                    var a_type = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents,'pgtxt_type');


                    if($.trim($('#pagesetting_name').val())==='')
                    {
                         var pgmsg = pgtxt_page + pgtxt_name +'  '+ pgtxtfieldnonempty;
                        mjs_module.data.showAlertHidden(pgmsg);
                        $('#pagesetting_name').focus();
                        return;
                    }

                    var pgtype = $('#pagesetting_pgtype').val();
                    if($.trim(pgtype)==='')
                    {
                        var pgmsg = a_content + a_type +'  '+ pgtxtfieldnonempty;
                        mjs_module.data.showAlertHidden(pgmsg);
                        return;
                    }

                    var pgname = $.trim($('#pagesetting_name').val());
                    if(pgname.indexOf('WESNode-') < 0 || pgname.indexOf('WESNode-') > 0){
                        var pgtxt_includetxtstart = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents,'pgtxt_includetxtstart');
                        mjs_module.data.showAlertHidden(pgtxt_page + pgtxt_name +'  '+ pgtxt_includetxtstart + ' WESNode-');
                        $('#pagesetting_name').focus();
                        return;
                    }

                   if(checkpagename(pgname, 0))
                    {
                        mjs_module.data.showAlertHidden('pgtxt_alreadyexistname');
                        $('#pagesetting_name').focus();
                        return;
                    }

                    var a_url = $('#pagesetting_url').val();
                    if($.trim($('#pagesetting_url').val())==='')
                    {
                        var pgmsg = 'URL '+ pgtxtfieldnonempty;
                        mjs_module.data.showAlertHidden(pgmsg);
                        $('#pagesetting_url').focus();
                        return;
                    }

                    a_url = mjs_module.data.js_trim(a_url);
                    a_url = encodeURIComponent(a_url);

                    $('input[name="pgseturl"]').val(a_url);
                    $('#editcont0').val(this.TinyMCMcontent0);

                    if($('#type_invisible').is(':checked'))
                        $('#type_invisible').val('on');
                    if($('#url_invisible').is(':checked'))
                        $('#url_invisible').val('on');
                    if($('#author_invisible').is(':checked'))
                        $('#author_invisible').val('on');
                    if($('#time_invisible').is(':checked'))
                        $('#time_invisible').val('on');

                    var pgsetstate='add';

                    for(var i=0;i<langOBJS.length;i++)
                    {
                        if(langOBJS[i].langid === transedlang)
                        {
                            langOBJS[i].pagename = $('#pagesetting_name').val();
                            langOBJS[i].title = $('#pagesetting_title').val();
                            langOBJS[i].contenttype = $('#pagesetting_pgtype').val();
                            langOBJS[i].contenttype_invisible = $('#type_invisible').is(':checked') ? 1: 0;
                            langOBJS[i].url = a_url;
                            langOBJS[i].url_invisible = $('#url_invisible').is(':checked') ? 1: 0;
                            langOBJS[i].author= $('#pagesetting_author').val();
                            langOBJS[i].author_invisible=  $('#author_invisible').is(':checked') ? 1: 0;
                            langOBJS[i].time= $('#pagesetting_datapicker').val();
                            langOBJS[i].time_invisible= $('#time_invisible').is(':checked') ? 1: 0;
                            langOBJS[i].edit= $('#editcont0').val();
                        }
                        else
                        {
                                langOBJS[i].pagename = $('#pagesetting_name').val();
                                langOBJS[i].url = a_url;

                            if(langOBJS[i].title==='')
                                langOBJS[i].title = '';
                            if(langOBJS[i].contenttype==='')
                                langOBJS[i].contenttype = $('#pagesetting_pgtype').val();
                            if(langOBJS[i].contenttype_invisible===0)
                                langOBJS[i].contenttype_invisible = 0;

                            if(langOBJS[i].url_invisible===0)
                                langOBJS[i].url_invisible = 0;
                            if(langOBJS[i].author==='')
                                langOBJS[i].author = '';
                            if(langOBJS[i].author_invisible===0)
                                langOBJS[i].author_invisible = 0;
                            if(langOBJS[i].time==='')
                                langOBJS[i].time = '';
                            if(langOBJS[i].time_invisible===0)
                                langOBJS[i].time_invisible =  0;
                            if(langOBJS[i].edit==='')
                                langOBJS[i].edit = '';
                        }

                    }

                    var postData={
                        allData:langOBJS,
                        pgsetstate:pgsetstate
                    }

                    $.ajax({
                        url: 'admin.addwwgpp_pagesetting',
                        type: 'POST',
                        dataType: 'json',
                        data: postData,
                        success: function (data) {
                            // data = JSON.parse(data);
                            if(data.msg=="ok")
                            {
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
                                $('#pagesetting_datapicker').datepicker({dateFormat: 'yy/mm/dd'});
                                var d = new Date();
                                var yy = d.getFullYear();
                                var mm = d.getMonth()+1;
                                var dd = d.getDate();
                                $('#pagesetting_datapicker').val(yy+'/'+mm+'/'+dd);
                                mjs_module.data.showAlertHidden('pgtxt_dbsaved');

                                $('input[name="pgsettranedLang"]').val('');

                                initLangOBJS();
                                gotocontentList();
                                getContentList();
                            }
                            else
                            {
                                mjs_module.data.showAlertHidden(data.msg);
                            }

                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        }
                    });

                }
            },
            wwpc_saveContentpageMuti_change(){
                if(pgperm.write != 1){
                    mjs_module.data.showAlert('pgtxt_notpermission');
                    return;
                }

              /*  if($('input[name="pgsettranedLang"]').val()==='')
                {
                    mjs_module.data.showAlertHidden('pgtxt_selectlanguagesave');
                    return;
                }*/
                //new page one
                var pgtxt_page = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents,'pgtxt_page');
                var pgtxt_name = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents,'pgtxt_name');
                var pgtxtfieldnonempty = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents,'pgtxt_fieldnonempty');

                if($.trim($('#pagesetting_name').val())==='')
                {
                    var pgmsg = pgtxt_page + pgtxt_name +'  '+ pgtxtfieldnonempty;
                    mjs_module.data.showAlertHidden(pgmsg);
                    $('#pagesetting_name').focus();
                    return;
                }

                var pgname = $.trim($('#pagesetting_name').val());
                if(pgname.indexOf('WESNode-') < 0 || pgname.indexOf('WESNode-') > 0){
                    var pgtxt_includetxtstart = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents,'pgtxt_includetxtstart');
                    mjs_module.data.showAlertHidden(pgtxt_page + pgtxt_name +'  '+ pgtxt_includetxtstart + ' WESNode-');
                    $('#pagesetting_name').focus();
                    return;
                }

                var a_url = $('#pagesetting_url').val();
                a_url = mjs_module.data.js_trim(a_url);
                if(a_url==='')
                {
                    var pgmsg = 'URL '+ pgtxtfieldnonempty;
                    mjs_module.data.showAlertHidden(pgmsg);
                    $('#pagesetting_url').focus();
                    return;
                }

                a_url = encodeURIComponent(a_url);

                $('#editcont0').val(this.TinyMCMcontent0);

                for(var i=0;i<langOBJS.length;i++)
                {
                    if(langOBJS[i].langid === transedlang)
                    {
                        langOBJS[i].pagename = $('#pagesetting_name').val();
                        langOBJS[i].title = $('#pagesetting_title').val();
                        langOBJS[i].contenttype = $('#pagesetting_pgtype').val();
                        langOBJS[i].contenttype_invisible = $('#type_invisible').is(':checked') ? 1: 0;
                        langOBJS[i].url = a_url;
                        langOBJS[i].url_invisible = $('#url_invisible').is(':checked') ? 1: 0;
                        langOBJS[i].author= $('#pagesetting_author').val();
                        langOBJS[i].author_invisible=  $('#author_invisible').is(':checked') ? 1: 0;
                        langOBJS[i].time= $('#pagesetting_datapicker').val();
                        langOBJS[i].time_invisible= $('#time_invisible').is(':checked') ? 1: 0;
                        langOBJS[i].edit= $('#editcont0').val();
                        langOBJS[i].data_init = 1;
                    }
                    else
                    {
                        if(langOBJS[i].pagename==='')
                            langOBJS[i].pagename = $('#pagesetting_name').val();
                        if(langOBJS[i].title==='')
                            langOBJS[i].title = '-';
                        if(langOBJS[i].contenttype==='')
                            langOBJS[i].contenttype = $('#pagesetting_pgtype').val();
                        if(langOBJS[i].contenttype_invisible===0)
                            langOBJS[i].contenttype_invisible =  0;
                        if(langOBJS[i].url==='')
                            langOBJS[i].url = a_url;
                        if(langOBJS[i].url_invisible===0)
                            langOBJS[i].url_invisible = 0;
                        if(langOBJS[i].author==='')
                            langOBJS[i].author = '-';
                        if(langOBJS[i].author_invisible===0)
                            langOBJS[i].author_invisible = 0;
                        if(langOBJS[i].time==='')
                            langOBJS[i].time = '';
                        if(langOBJS[i].time_invisible===0)
                            langOBJS[i].time_invisible = 0;
                        if(langOBJS[i].edit==='')
                            langOBJS[i].edit = '';

                    }

                }

                var postData={
                    allData:langOBJS
                }

                $.ajax({
                    url: 'admin.addwwgpp_pagesettingMuti_change',
                    type: 'POST',
                    dataType: 'json',
                    data: postData,
                    success: function (data) {
                        // data = JSON.parse(data);
                        if(data.msg=="ok")
                        {
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
                            $('#pagesetting_datapicker').datepicker({dateFormat: 'yy/mm/dd'});
                            var d = new Date();
                            var yy = d.getFullYear();
                            var mm = d.getMonth()+1;
                            var dd = d.getDate();
                            $('#pagesetting_datapicker').val(yy+'/'+mm+'/'+dd);
                            mjs_module.data.showAlertHidden('pgtxt_dbsaved');

                            $('input[name="pgsettranedLang"]').val('');

                            transedlang='';
                            langOBJS.length = 0;
                            gotocontentList();
                            getContentList();
                        }
                        else
                        {
                            mjs_module.data.showAlertHidden(data.msg);
                        }

                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            },
            wwpc_gotoContentList(){
                gotocontentList();
            },

        }//method

    }
</script>

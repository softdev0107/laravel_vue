<template>
    <div style="width: 100%">
        <div style="display: none">{{contentchange}}</div>
        <div class="row">
            <div class="col-md-12">
                <div class="page1_translate_bar">
                    <div class="page1_translate_text">{{cpgtxt_translation}}</div>
                    <div class="page1_translate_bar_left" id="translanglist" style="padding: 0">

                    </div>
                    <div class="page1_translate_bar_right" style="display: flex">
                        <div class="page1_translate_div" @click="PagePreview" style="cursor: pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 20px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:outline-preview"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-7-8.5c1.84 0 3.48.96 4.34 2.5c-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" fill="currentColor"></path></svg>
                            <span class="page1_translate_span_right">{{cpgtxt_preview}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        </div>
                        <div class="page1_translate_div" @click="PageRelease" style="cursor: pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 20px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:outline-new-releases"><path d="M23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68L23 12zm-4.51 2.11l.26 2.79l-2.74.62l-1.43 2.41L12 18.82l-2.58 1.11l-1.43-2.41l-2.74-.62l.26-2.8L3.66 12l1.85-2.12l-.26-2.78l2.74-.61l1.43-2.41L12 5.18l2.58-1.11l1.43 2.41l2.74.62l-.26 2.79L20.34 12l-1.85 2.11zM11 15h2v2h-2zm0-8h2v6h-2z" fill="currentColor"></path></svg>
                            <span class="page1_translate_span_right">{{cpgtxt_release}}</span> &nbsp;&nbsp;
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <!--sidebar-->
            <div class="col-md-12 page_slider_content_list active" id="wwpc_sidebar">
                <div class="page1_content_content_bar">
                    <form method="post" enctype="multipart/form-data" name="wwpc_content_type_frm" id="wwpc_content_type_frm">
                        <input type="hidden" name="wfm" value="st">
                        <div class="page1_content_content_title">
                            &nbsp;&nbsp; &nbsp;&nbsp;{{cpgtxt_sidebar}} &nbsp;&nbsp;>&gt;&nbsp;{{cpgtxt_contenttype}}
                        </div>
                        <div class="page_content" style="padding: 25px 20px">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="col col-md-12">
                                        <div class="col-md-8">
                                            <div class="col content-type-checkbox-container" style="display: flex" id="wwpc_side_type_checkbox_container">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 text-right" style="padding-right: 0px;">
                                                <button type="button" class="btn page1_custom_select_btn mb-sm-2" id="wwpc_side_content_type_add" style="height: 40px; border-radius: 10px; padding: 0 35px; margin-right: 0px;" @click="">
                                                    {{cbtntxt_add}}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-responsive page1_content_content_bar">
                                        <table id="content-type" class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info" style="text-align: center">
                                            <thead>
                                            <tr role="row">
                                                <th style="font-size:14px;">{{cpgtxt_order}}</th>
                                                <th style="font-size:14px;">{{cpgtxt_mode}}</th>
                                                <th style="font-size:14px;">{{cpgtxt_title}}</th>
                                                <th style="font-size:14px;">{{cpgtxt_type}}</th>
                                                <th style="font-size:14px;">{{cpgtxt_slider}} {{cpgtxt_type}}</th>
                                                <th style="font-size:14px;">{{cpgtxt_number}}</th>
                                                <th style="text-align: center;font-size:14px;">{{cpgtxt_picture}} {{cpgtxt_mode}}</th>
                                                <th style="text-align: center;font-size:14px;">{{cpgtxt_operation}}</th>
                                            </tr>
                                            </thead>
                                            <tbody id="wwpc_content_type_list">
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="row" >
                                        <div class="col-md-12" id="wwpc_content_type_nav">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="page1_content_content_bar">
                    <form method="post" enctype="multipart/form-data" name="wwpc_content_page_frm" id="wwpc_content_page_frm" onkeydown="return event.key != 'Enter';">
                        <input type="hidden" name="wfm" value="st">
                        <div class="page1_content_content_title">
                            &nbsp;&nbsp; &nbsp;&nbsp;{{cpgtxt_sidebar}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cpgtxt_content}} {{cpgtxt_page}}
                        </div>
                        <div class="col page1_content_content_title" style="display: flex; padding-top: 0px; height: 75px; align-items: center;">
                            <div class="col-md-1" style="width: auto;padding-left: 15px">
                                <span>{{cpgtxt_type}}</span>
                            </div>
                            <div class="col-md-5">
                                <div class="input-group" style="width: 80%">
                                    <select id="wwpc_select_content_page_type" name="wwpc_select_content_page_type" class="form-control page2_input" @change="select_content_page_search()">

                                    </select>
                                </div>
                            </div>
                            <div class="col-md-1" style="width: auto;padding-left: 15px">
                                <span>{{cpgtxt_title}}</span>
                            </div>
                            <div class="col-md-5">
                                <div class="input-group" style="width: 80%">
                                    <input type="text" id="wwpc_search_content_page" class="form-control page2_input" placeholder="" aria-label="page content search" >
                                    <div class="input-group-append input-group-append-my cursor-pointer" @click="wwpc_contentpage_search_btn">
                                        <span class="input-group-text input-group-text-my" id="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search ">
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="page_content" style="padding: 25px 20px">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="col col-md-12">
                                        <div class="row">
                                            <div class="col-md-12 text-right" style="padding-right: 0px;">
                                                <button type="button" class="btn page1_custom_select_btn mb-sm-2" id="wwpc_side_content_page_add" style="height: 40px; border-radius: 10px; padding: 0 35px; margin-right: 0px;" @click="">
                                                    {{cbtntxt_add}}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-responsive page1_content_content_bar">
                                        <table id="wwpc_content_page" class="table table-lg  no-footer" role="grid" style="text-align: center">
                                            <thead>
                                            <tr role="row">
                                                <th style="font-size:14px;">{{cpgtxt_order}}</th>
                                                <th style="font-size:14px;">{{cpgtxt_mode}}</th>
                                                <th style="font-size:14px;">{{cpgtxt_title}}</th>
                                                <th style="font-size:14px;">{{cpgtxt_type}}</th>
                                                <th style="font-size:14px;">{{cpgtxt_number}}</th>
                                                <th style="text-align: center;font-size:14px;">{{cpgtxt_picture}} {{cpgtxt_mode}}</th>
                                                <th style="text-align: center;font-size:14px;">{{cpgtxt_operation}}</th>
                                            </tr>
                                            </thead>
                                            <tbody id="wwpc_content_page_list">

                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="row" >
                                        <div class="col-md-12" id="wwpc_content_page_nav">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- empty line ckd -->
        <div class="row empty-line">
            <div class="col-md-12" style="padding: 30px 0;">&nbsp;</div>
        </div>

        <!--modal part-->
        <div class="modal fade" id="wwpc_mySideContentTypeModal" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <div style="color: #5c6bc0; font-size: 20px; font-weight: 600;">{{cpgtxt_create}}</div>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="row"  id="wwpc_content_type_dlgErr" style="display: none">
                            <div class="col">
                                error;
                            </div>
                        </div>
                        <div class=" ">
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{cpgtxt_mode}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_sel_content_type_mode" name="wwpc_sel_content_type_mode" style="" >
                                        <option value="0" selected="selected">{{cpgtxt_list}}</option>
                                        <option value="1" >{{cpgtxt_picture}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div style="width: 80px;">
                                        <span>{{cpgtxt_title}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="padding-bottom: 5px;">
                                    <input type="text" placeholder="" value="" autocomplete="off" class="page2_input" name="wwpc_input_content_type_title" id="wwpc_input_content_type_title" style="background-color: #ededed; border-radius: 12px;">
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{cpgtxt_type}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_sel_slider_type" name="wwpc_sel_slider_type" style="" >
                                    </select>
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{cpgtxt_number}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_sel_content_type_number" name="wwpc_sel_content_type_number" style="" >
                                        <option value="1" selected="selected">1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                        <option value="4" >4</option>
                                        <option value="5" >5</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{cpgtxt_order}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_sel_content_type_order" name="wwpc_sel_content_type_order" style="" >

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center" style="height: auto">
                        <div class="row modal-dialog-row">
                            <button type="button" class="btn page1_custom_select_btn justify-content-center" style="width: 100px;" id="wwpc_content_type_addDlg_btn"  @click="addSideContentTypeOne">
                                <span class="iconify" data-inline="false" data-icon="gg:add" style="font-size: 24px;"></span>
                                {{cbtntxt_add}}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="wwpc_myEditSideContentTypeModal" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <div style="color: #5c6bc0; font-size: 20px; font-weight: 600;">{{cbtntxt_edit}}</div>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="row"  id="wwpc_edit_content_type_dlgErr" style="display: none">
                            <div class="col">
                                error;
                            </div>
                        </div>
                        <div class=" ">
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{cpgtxt_mode}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_edit_sel_content_type_mode" name="wwpc_sel_content_type_mode" style="" >
                                        <option  value="0" selected="selected">{{cpgtxt_list}}</option>
                                        <option  value="1" >{{cpgtxt_picture}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div style="width: 80px;">
                                        <span>{{cpgtxt_title}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="padding-bottom: 5px;">
                                    <input type="text" placeholder="" value="" autocomplete="off" class="page2_input" name="wwpc_edit_input_content_type_title" id="wwpc_edit_input_content_type_title" style="background-color: #ededed; border-radius: 12px;">
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{cpgtxt_type}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_edit_sel_content_type_type" name="wwpc_edit_sel_content_type_type" style="" >

                                    </select>
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{cpgtxt_number}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_edit_sel_content_type_number" name="wwpc_sel_content_type_number" style="" >
                                        <option value="1" selected="selected">1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                        <option value="4" >4</option>
                                        <option value="5" >5</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{cpgtxt_order}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_edit_sel_content_type_order" name="wwpc_edit_sel_content_type_order" style="" >

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center" style="height: auto">
                        <div class="row modal-dialog-row">
                            <button type="button" class="btn page1_custom_select_btn justify-content-center" style="width: 100px;" id="wwpc_edit_content_type_addDlg_btn"  @click="editSideContentDataOne">
                                <span class="iconify" data-inline="false" data-icon="gg:add" style="font-size: 24px;"></span>
                                {{cbtntxt_edit}}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="modal fade" id="wwpc_mySideContentPageModal" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <div style="color: #5c6bc0; font-size: 20px; font-weight: 600;">{{cpgtxt_create}}</div>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="row"  id="wwpc_content_page_dlgErr" style="display: none">
                            <div class="col">
                                error;
                            </div>
                        </div>
                        <div class=" ">
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{ cpgtxt_mode }}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_sel_content_page_mode" name="wwpc_sel_content_page_mode" style="" >
                                        <option value="0" selected="selected">{{ cpgtxt_list }}</option>
                                        <option value="1" >{{ cpgtxt_picture }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div style="width: 80px;">
                                        <span>{{ cpgtxt_title }}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="padding-bottom: 5px;">
                                    <input type="text" placeholder="" value="" autocomplete="off" class="page2_input" name="wwpc_input_content_page_title" id="wwpc_input_content_page_title" style="background-color: #ededed; border-radius: 12px;">
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{ cpgtxt_type }}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_sel_content_page_type" name="wwpc_sel_content_page_type" style="" >
                                    </select>
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{ cpgtxt_number }}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_sel_content_page_number" name="wwpc_sel_content_page_number" style="" >
                                        <option value="1" selected="selected">1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                        <option value="4" >4</option>
                                        <option value="5" >5</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{ cpgtxt_order }}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_sel_content_page_order" name="wwpc_sel_content_page_order" style="" >
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center" style="height: auto">
                        <div class="row modal-dialog-row">
                            <button type="button" class="btn page1_custom_select_btn justify-content-center" style="width: 100px;" id="wwpc_content_page_addDlg_btn"  @click="addSideContentPageOne">
                                <span class="iconify" data-inline="false" data-icon="gg:add" style="font-size: 24px;"></span>
                                {{cbtntxt_add}}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="modal fade" id="wwpc_previewModal" role="dialog">
            <div class="modal-dialog modal-sm" style="min-width: 95%!important;">
                <div class="modal-content" style="border-radius:0">
                    <div class="modal-header" style="height: 25px;padding: 0 5px;">
                        <h4 class="modal-title" style="color: #242424;font-size: 15px;margin: 0 auto">{{cpgtxt_previewpage}}</h4>
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
    .modal-dialog-row{
        padding-top: 5px;
        padding-bottom: 5px;
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
    var pgtxt_selectlanguagesave = "";
    var pgtxt_selectlanguage = "";
    var stored_langs='';
    var content_accounting_lang={};

    var pcnt=5;
    var firsttypeselectId = 0;
    var currentId = 0;
    var currentSidebarType = 0;
    var pgperm={};
    var langOBJS=[];

    var tabstatus = 5;

    var pagename_default='';
    var pageurl_default='';
    var pagetype_default=0;


    function setTempLang() {
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
    function initSideBarTranslatelist() {
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
            var active=''
            if(status==='enable'){
                if(transedlang !==null && transedlang !=='' && transedlang === spanid)
                {
                    active='active';
                }
                tags +='<span id="'+spanid+'">';
                tags +='<span class="page1_translate_span '+active+'" style="cursor: pointer;display: inline-block" data-cont="'+dcont+'">'+cname+'</span>';
                if(j < stored_langs.length-1)
                    tags +='&nbsp;&nbsp;|&nbsp;&nbsp;';
                tags +='</span>';
            }
        }

        $('#translanglist').html(tags);

        $('#translanglist').children().each(function (index, element){
            if(transedlang === null || transedlang === ''){
                //console.log($(element).attr('id'));
                var cid=$(element).attr('id');
                transedlang = cid;
                $('#'+cid+' span.page1_translate_span').addClass('active');
                return;
            }
        });


        $('span.page1_translate_span').click(function (e) {
            $('span.page1_translate_span').removeClass('active');
            $(this).addClass('active');
            var dcont=$(this).data('cont');
            if(dcont.split('-').length > 1){
                transedlang = dcont.split('-')[0]+'-'+dcont.split('-')[1];
                getSideContentTypeData();
                getSideContentPageData();
                getSidePageTypeList();
            }
        });
    }
    function initSideBar() {
        psearchstring = '';
        $('#wwgpp_f_s_c').text('Current Number : ...');
        $('#wwgpp_f_s').change(function () {
            var val=$(this).val();
            if(val!==null){
              if(val.split('_').length > 1){
                  var num=val.split('_')[1];
                  $('#wwgpp_f_s_c').text('Current Number : '+num);
              }
              else
                  $('#wwgpp_f_s_c').text('Current Number : 1');
            }
        });

        $('#wwpc_search_content_page').on('input',function (e) {
            var val=$(this).val();
            if(val!==null){
                psearchstring = val.trim();
                getSideContentPageData();
            }
        });
    }
    function initContentTypeCheckboxes() {
        var checkboxes = document.getElementsByClassName("content-type-checkbox");
        if (checkboxes !=null && checkboxes.length > 0) {
            for (var i = 0; i < checkboxes.length; i++) {
                var checkbox = checkboxes[i];
                if (checkbox.id != contenttypetypecheckboxid)
                    checkbox.classList.remove('active');
            }
        }
        content_type = 0;
    }
    function initContentPageSelectbox(list) {
        var sel_content_page_tags = '';
        sel_content_page_tags+='<option value="0">All</option>';
        if (list instanceof Array)
        {
            for (var i = 0; i < list.length; i++){
                var item = list[i];
                var name = item.name;
                var id = item.id;
                sel_content_page_tags+='<option value="'+id+'">'+name+'</option>';
            }
        }
        $('#wwpc_select_content_page_type').html(sel_content_page_tags);
    }
    function initDialogSelectbox(list) {
        var add_type_dialog_tags = '';
        var add_page_dialog_tags = '';
        var edit_dialog_tags = '';
        if (list instanceof Array)
        {
            for (var i = 0; i < list.length; i++){
                var item = list[i];
                var name = item.name;
                var id = item.id;
                add_type_dialog_tags+='<option value="'+id+'">'+name+'</option>';
                add_page_dialog_tags+='<option value="'+id+'">'+name+'</option>';
                edit_dialog_tags+='<option value="'+id+'">'+name+'</option>';
            }
        }
        $('#wwpc_sel_slider_type').html(add_type_dialog_tags);
        $('#wwpc_sel_content_page_type').html(add_page_dialog_tags);
        $('#wwpc_edit_sel_content_type_type').html(edit_dialog_tags);
    }
    function getSideContentTypeData(){
        var pgtxt_list= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_list');
        var pgtxt_picture= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_picture');
        var btntxt_delete= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
        var btntxt_edit= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
        var pgtxt_operation= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_operation');
        var trans = 'en-1';
        setTempLang();
        trans = transedlang;

        let postData={
            trans:trans,
            start: pstart,
            cnt:pcnt,
            contenttype:content_type
        };
        axios.post('admin.getSideContentTypeData', postData)
            .then((response) => {
                var status = response.data.msg;
                if(status=="ok")
                {
                    var total=response.data.total;
                    if(total<=0){
                        $('#wwpc_content_type_list').html('');
                        $('#wwpc_content_type_nav').html('');

                        //$('.page1_alarm_bar span').text('No Save No Appear');
                        //$('.page1_alarm_bar').removeClass('active');
                       // $('.page1_translate_span').removeClass('active');

                        return;
                    }
                    pstart=response.data.start;
                    var totalpage=response.data.totalpage;
                    var contentList = response.data.list;
                    var tags='';
                    for(var i = 0; i < contentList.length; i++)
                    {
                        var content = contentList[i];
                        tags+='<tr role="row" class="odd content-table-row">';
                        var order = i+1;
                        tags+='<td>'+order+'</td>';
                        var mode;
                        if (content.mode == 0)
                            mode = pgtxt_list;
                        else
                            mode = pgtxt_picture;

                        var sidetype;
                        if (content.sidebar_type == 0)
                            sidetype = 'content type';
                        else
                            sidetype = 'content page';

                        tags+='<td>'+mode+'</td>';
                        tags+='<td>'+content.title+'</td>';
                        tags+='<td>'+content.name+'</td>';
                        tags+='<td>'+sidetype+'</td>';
                        tags+='<td>'+content.number+'</td>';
                        var picture_mode = '';
                        if (content.picture_mode == 0)
                            picture_mode = pgtxt_list;
                        else
                            picture_mode = pgtxt_picture;
                        tags+='<td>'+picture_mode+'</td>';
                        tags+='<td>';
                        tags+='<div class="form-group m-b-0">';
                        tags+='<select class="my-border-radius-slt form-control float-right" data-sidetype="'+content.sidebar_type+'" id="wwpc_contenttype_status_'+content.id+'" name="wwpc_contenttype_status_'+content.id+'">';
                        tags+='<option class="data-ajax" data-ajax="pgtxt_operation" value="operation">'+pgtxt_operation+'</option>';
                        tags+='<option class="data-ajax" data-ajax="btntxt_edit" value="edit">'+btntxt_edit+'</option>';
                        tags+='<option class="data-ajax" data-ajax="btntxt_delete" value="delete">'+btntxt_delete+'</option>';
                        tags+='</select>';
                        tags+='</div>';
                        tags+='</td>';
                        tags+='</tr>';
                    }
                    $('#wwpc_content_type_list').html(tags);

                    var nav_tag='';
                    nav_tag+='<nav aria-label="..." class="mb-4">';
                    nav_tag+='<ul class="pagination pagination-rounded justify-content-center">';

                    var disble="";
                    if(pstart==1)
                        disble="disabled"

                    var prenum= parseInt(pstart) - 1;

                    nav_tag+='<li class="page-item  '+disble+' ">';
                    nav_tag+='<a class="page-link" href="#"  id="wwpc_ctypenavnum_' + prenum + '" >';
                    nav_tag+='<i class="ti-angle-left"></i>';
                    nav_tag+='</a>';
                    nav_tag+='</li>';

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
                            oid="wwpc_ctypenavnum_" + pnum;

                        nav_tag+='<li class="page-item ' + actv + '"  ' + aria_current + '>';
                        nav_tag+='<a class="page-link" id="' + oid + '"  href="#" >' + pnum + '  ' + spantag + '</a>';
                        nav_tag+='</li>';

                        if(pnum==totalpage) break;

                        pnum = pnum + 1;
                    }

                    var nextnum= parseInt(pstart) + 1;

                    var edisble="";
                    if(pstart==totalpage)
                        edisble="disabled"

                    nav_tag+='<li class="page-item '+edisble+' ">';
                    nav_tag+='<a class="page-link" id="wwpc_ctypenavnum_' + nextnum + '" href="#">';
                    nav_tag+='<i class="ti-angle-right"></i>';
                    nav_tag+='</a>';
                    nav_tag+='</li>';

                    nav_tag+='</ul>';
                    nav_tag+='</nav>';

                    $('#wwpc_content_type_nav').html(nav_tag);

                    /* events { */
                    $('a[id^="wwpc_ctypenavnum_"]').click(function(){
                        var oid=$(this).attr("id");
                        pstart=oid.split('_')[2];
                        getSideContentTypeData();
                    });

                    $('select[id^="wwpc_contenttype_status_"]').change(function(){
                        if(pgperm.write != 1){
                            mjs_module.data.showAlert('pgtxt_notpermission');
                            return;
                        }
                        var tid=$(this).attr("id");
                        var sidetype=$(this).data("sidetype");
                        var t_id=tid.split("_")[3];
                        var value=$(this).val();
                        if (value == 'edit'){
                            showEditSideContentTypeDialog(sidetype, t_id);
                        }
                        else if (value == 'delete')
                        {
                            mjs_module.data.Confirm('pgtxt_wantdeleteitem',function (val) {
                                if(val){
                                    deleteSideContentData(t_id, 0);
                                }
                            });
                        }
                    });
                }
                else
                {
                    $('#wwpc_content_type_list').html('');
                    $('#wwpc_content_type_nav').html('');
                    // return;
                }
            }).catch(function (error) {
            console.log(error);
        });
    }
    function getSidePageTypeList() {
        var trans = 'en-1';
            setTempLang();
            trans = transedlang;
        $.ajax({
            url: 'admin.getPageTypeList',
            data:{
                lang:trans
            },
            type: 'POST',
            async: false,
            success: function (data) {
                $('#wwpc_side_type_checkbox_container').html('');
                if(data.msg=="ok")
                {
                    var list = data.list;
                    var tags = '';
                    if(list!==null)
                    {
                        if (list instanceof Array)
                        {
                            for (var i = 0; i < list.length; i++){
                                var item = list[i];
                                var name = item.name;
                                var id = item.id;
                                if (i == 0)
                                    firsttypeselectId = id;
                                tags+='<div class="input-group mb-3">';
                                tags+='<div class="form-check" style="line-height: 24px;">';
                                tags+='<div class="form-check-input rect-group content-type-checkbox" id="wwpc_content_type_checkbox_'+id+'">';
                                tags+='<div></div>';
                                tags+='</div>';
                                tags+='<label class="form-check-label m-l-10">'+name+'</label>';
                                tags+='</div>';
                                tags+='</div>';
                            }
                        }
                        $('#wwpc_side_type_checkbox_container').html(tags);

                        initContentPageSelectbox(list);
                        initDialogSelectbox(list);

                        $('div[id^="wwpc_content_type_checkbox_"]').click(function(){
                            var oid=$(this).attr("id");
                            contenttypetypecheckboxid = oid;
                            initContentTypeCheckboxes();
                            if ($(this).hasClass('active')) {
                                $(this).removeClass('active');
                            } else {
                                $(this).addClass('active');
                                content_type=oid.split('_')[4];
                            }
                            getSideContentTypeData();
                        });
                    }
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function showEditSideContentTypeDialog(sidebarType, selectedId){
        // sidebarType = 0: content type, 1: content page
        // selectedId: id of selected row
        if(transedlang===''){
            //mjs_module.data.showAlert(pgtxt_selectlanguage);
            //return;
            setTempLang();
        }
        else
        {
            currentId = selectedId;
            currentSidebarType = sidebarType;
            getSideContentDataFromId(selectedId);
            $('#wwpc_edit_content_type_dlgErr').text('').css('display','none');
            $('#wwpc_myEditSideContentTypeModal').modal('show');
        }
    }
    function getSideContentCountAccoringPageType(sidetype, pagetypeid, add_edit_flag) {
        // sidtype = 0: content_type, 1: content page
        // pagetypeid: pagetype_id
        // add_edit_flag  0: add, 1: edit
        var trans = 'en-1';
        setTempLang();
            trans = transedlang;
        let postData = {
            lang: trans,
            sidetype: sidetype,
            pagetypeid: pagetypeid
        };
        axios.post('admin.getSideContentCountAccoringPageType', postData)
            .then((response) => {
                var status = response.data.msg;
                if(status=="ok") {
                    if (add_edit_flag == 0) {
                        if (sidetype == 0)
                        {
                            $('#wwpc_sel_content_type_order').html('');
                            var tags='';
                            var availablecount =  response.data.cnt + 2;
                            for(var i = 1; i < availablecount; i++)
                            {
                                tags+='<option value="'+i+'">'+i+'</option>';
                            }
                            $('#wwpc_sel_content_type_order').html(tags);
                        }
                        else
                        {
                            $('#wwpc_sel_content_page_order').html('');
                            var tags='';
                            var availablecount =  response.data.cnt + 2;
                            for(var i = 1; i < availablecount; i++)
                            {
                                tags+='<option value="'+i+'">'+i+'</option>';
                            }
                            $('#wwpc_sel_content_page_order').html(tags);
                        }
                    }
                    else {
                        $('#wwpc_edit_sel_content_type_order').html('');
                        var tags='';
                        var availablecount =  response.data.cnt + 1;
                        for(var i = 1; i < availablecount; i++)
                        {
                            tags+='<option value="'+i+'">'+i+'</option>';
                        }
                        if(response.data.cnt == 0)
                            tags+='<option value="1">1</option>';
                        $('#wwpc_edit_sel_content_type_order').html(tags);
                    }
                }
                else{
                    mjs_module.data.showAlert(response.data.msg);
                }
            }).catch(function (error) {
            console.log(error);
        });
    }
    function getSideContentDataFromId(selectedId) {
        let postData = {
            id: selectedId
        };
        axios.post('admin.getSideContentDataFromId', postData)
            .then((response) => {
                var status = response.data.msg;
                if(status=="ok") {
                    var contentList = response.data.list;
                    var mode = contentList.mode;
                    var sidetype = contentList.sidebar_type;
                    var title = contentList.title;
                    var number = contentList.number;
                    var order_no = contentList.order_no;
                    var picture_mode = contentList.picture_mode;
                    var type = contentList.pagetype_id;
                    $('#wwpc_edit_input_content_type_title').val(title);
                    $('#wwpc_edit_sel_content_type_mode').val(mode);
                    $('#wwpc_edit_sel_content_type_type').val(type);
                    $('#wwpc_edit_sel_content_type_number').val(number);
                    $('#wwpc_edit_sel_content_type_order').val(order_no);
                    getSideContentCountAccoringPageType(sidetype, type, 1);
                }
            }).catch(function (error) {
            console.log(error);
        });
    }
    function deleteSideContentData(contentId, pageType) {
        var trans = 'en-1';
        setTempLang();
            trans = transedlang;
        let postData = {
            id: contentId,
            lang:trans
        };
        axios.post('admin.deleteSideContentData', postData)
            .then((response) => {
                var status = response.data.msg;
                if(status=="ok") {
                    mjs_module.data.showAlert("Remove success");
                    if (pageType == 0) {
                        getSideContentTypeData();
                    }
                    else if (pageType == 1) {
                        getSideContentPageData();
                    }
                }
                else{
                    mjs_module.data.showAlert("Remove failed");
                }
            }).catch(function (error) {
            console.log(error);
        });
    }
    function getSideContentPageData() {
        var pgtxt_list= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_list');
        var pgtxt_picture= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_picture');
        var btntxt_delete= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
        var btntxt_edit= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
        var pgtxt_operation= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_operation');
        var trans = 'en-1';
        setTempLang();
        trans = transedlang;

        let postData = {
            trans:trans,
            start: pstart,
            cnt:pcnt,
            pagetypeid:contentpagetype,
            tstring:psearchstring
        };
        axios.post('admin.getSideContentPageData', postData)
            .then((response) => {
                var status = response.data.msg;
                if(status=="ok")
                {
                    var total=response.data.total;
                    if(total<=0){
                        $('#wwpc_content_page_list').html('');
                        $('#wwpc_content_page_nav').html('');
                        return;
                    }
                    pstart=response.data.start;
                    var totalpage=response.data.totalpage;
                    var contentList = response.data.list;
                    var tags='';
                    for(var i = 0; i < contentList.length; i++)
                    {
                        var content = contentList[i];
                        tags+='<tr role="row" class="odd">';
                        var order = i+1;
                        tags+='<td>'+order+'</td>';
                        var mode = '';
                        if (content.mode == 0)
                            mode = pgtxt_list;
                        else
                            mode = pgtxt_picture;
                        tags+='<td>'+mode+'</td>';
                        tags+='<td>'+content.title+'</td>';
                        tags+='<td>'+content.name+'</td>';
                        tags+='<td>'+content.number+'</td>';
                        var picture_mode = '';
                        if (content.picture_mode == 0)
                            picture_mode = pgtxt_list;
                        else
                            picture_mode = pgtxt_picture;
                        tags+='<td>'+picture_mode+'</td>';
                        tags+='<td>';
                        tags+='<div class="form-group m-b-0">';
                        tags+='<select class="my-border-radius-slt form-control float-right" id="wwpc_contentpage_status_'+content.id+'" name="wwpc_contentpage_status_'+content.id+'">';
                        tags+='<option class="data-ajax" data-ajax="pgtxt_operation" value="operation">'+pgtxt_operation+'</option>';
                        tags+='<option class="data-ajax" data-ajax="btntxt_edit" value="edit">'+btntxt_edit+'</option>';
                        tags+='<option class="data-ajax" data-ajax="btntxt_delete" value="delete">'+btntxt_delete+'</option>';
                        tags+='</select>';
                        tags+='</div>';
                        tags+='</td>';
                        tags+='</tr>';
                    }
                    $('#wwpc_content_page_list').html(tags);

                    var nav_tag='';
                    nav_tag+='<nav aria-label="..." class="mb-4">';
                    nav_tag+='<ul class="pagination pagination-rounded justify-content-center">';

                    var disble="";
                    if(pstart==1)
                        disble="disabled"

                    var prenum= parseInt(pstart) - 1;

                    nav_tag+='<li class="page-item  '+disble+' ">';
                    nav_tag+='<a class="page-link" href="#"  id="wwpc_cpagenavnum_' + prenum + '" >';
                    nav_tag+='<i class="ti-angle-left"></i>';
                    nav_tag+='</a>';
                    nav_tag+='</li>';

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
                            oid="wwpc_cpagenavnum_" + pnum;

                        nav_tag+='<li class="page-item ' + actv + '"  ' + aria_current + '>';
                        nav_tag+='<a class="page-link" id="' + oid + '"  href="#" >' + pnum + '  ' + spantag + '</a>';
                        nav_tag+='</li>';

                        if(pnum==totalpage) break;

                        pnum = pnum + 1;
                    }

                    var nextnum= parseInt(pstart) + 1;

                    var edisble="";
                    if(pstart==totalpage)
                        edisble="disabled"

                    nav_tag+='<li class="page-item '+edisble+' ">';
                    nav_tag+='<a class="page-link" id="wwpc_cpagenavnum_' + nextnum + '" href="#">';
                    nav_tag+='<i class="ti-angle-right"></i>';
                    nav_tag+='</a>';
                    nav_tag+='</li>';

                    nav_tag+='</ul>';
                    nav_tag+='</nav>';

                    $('#wwpc_content_page_nav').html(nav_tag);

                    /* events { */
                    $('a[id^="wwpc_cpagenavnum_"]').click(function(){
                        var oid=$(this).attr("id");
                        pstart=oid.split('_')[2];
                        getSideContentPageData();
                    });

                    $('select[id^="wwpc_contentpage_status_"]').change(function(){
                        if(pgperm.write != 1){
                            mjs_module.data.showAlert('pgtxt_notpermission');
                            return;
                        }
                        var tid=$(this).attr("id");
                        var t_id=tid.split("_")[3];
                        var value=$(this).val();
                        if (value == 'edit'){
                            showEditSideContentTypeDialog(1, t_id);
                        }
                        else if (value == 'delete') {
                            if(confirm('Really remove? ')==false)
                                return;
                            deleteSideContentData(t_id, 1);
                        }
                    });
                }
                else {
                    $('#wwpc_content_page_list').html('');
                    $('#wwpc_content_page_nav').html('');
                }
            }).catch(function (error) {
            console.log(error);
        });
    }
    function getPageTypeList() {
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


    export default {
        name: "WebsWesGlobalPagesContent",
        components: {
            'editor0': Editor
        },
        data(){
            return {
                pageid:'webs-wesglobal-pages-content-fav',
                pgtxt_translation:'',
                pgtxt_preview:'',
                pgtxt_release:'',
                pgtxt_nosavenoappear:'',
                pgtxt_list:'',
                pgtxt_contenttype:'',
                pgtxt_sidebar:'',
                pgtxt_slider:'',
                pgtxt_order:'',
                pgtxt_mode:'',
                pgtxt_picture:'',
                pgtxt_select:'',
                pgtxt_operation:'',
                pgtxt_title:'',
                pgtxt_content:'',
                pgtxt_page:'',
                pgtxt_number:'',
                pgtxt_type:'',
		        pgtxt_create:'',
                pgtxt_previewpage:'',
                pgtxt_releasesuccess:'',
                pgtxt_selectlanguagesave:'',
                pgtxt_selectlanguage:'',
                pgtxt_wantdeleteitem:'',
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
            cpgtxt_preview:function () {
                return this.pgtxt_preview
            },
            cpgtxt_release:function () {
                return this.pgtxt_release
            },
            cpgtxt_list:function () {
                return this.pgtxt_list
            },
            cpgtxt_contenttype:function () {
                return this.pgtxt_contenttype
            },
            cpgtxt_page:function () {
                return this.pgtxt_page
            },
            cpgtxt_sidebar:function () {
                return this.pgtxt_sidebar
            },
            cpgtxt_slider:function () {
                return this.pgtxt_slider
            },
            cpgtxt_order:function () {
                return this.pgtxt_order
            },
            cpgtxt_mode:function () {
                return this.pgtxt_mode
            },
            cpgtxt_picture:function () {
                return this.pgtxt_picture
            },
            cpgtxt_select:function () {
                return this.pgtxt_select
            },
            cpgtxt_operation:function () {
                return this.pgtxt_operation
            },
            cpgtxt_title:function () {
                return this.pgtxt_title
            },
            cpgtxt_content:function () {
                return this.pgtxt_content
            },
            cpgtxt_number:function () {
                return this.pgtxt_number
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
            cpgtxt_type:function () {
                return this.pgtxt_type
            },
            cpgtxt_create:function () {
                return this.pgtxt_create
            },
            cpgtxt_previewpage:function () {
                return this.pgtxt_previewpage
            },
            cpgtxt_releasesuccess:function () {
                return this.pgtxt_releasesuccess
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
            pgtxt_selectlanguage = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguage');
            pgtxt_selectlanguagesave = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguagesave');
            this.getWWGStoredLang();
        },
        methods:{
            /* fav part */
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
                initSideBarTranslatelist();
                getSideContentTypeData();
                getSideContentPageData();
                getSidePageTypeList();

                $('#wwpc_side_content_type_add').click(function () {
                    if(pgperm.create != 1){
                        mjs_module.data.showAlertHidden('pgtxt_notpermission');
                        return;
                    }
                    else
                    {
                        $('#wwpc_content_type_dlgErr').text('').css('display','none');
                        $('#wwpc_sel_slider_type').val(firsttypeselectId);
                        $('#wwpc_mySideContentTypeModal').modal('show');
                        getSideContentCountAccoringPageType(0, firsttypeselectId, 0);
                    }
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
                    if(transedlang===''){
                        //mjs_module.data.showAlert(pgtxt_selectlanguage);
                        //return;
                       // setTempLang();
                    }
                    else
                    {
                        $('#wwpc_content_page_dlgErr').text('').css('display','none');
                        $('#wwpc_sel_content_page_type').val(firsttypeselectId);
                        $('#wwpc_mySideContentPageModal').modal('show');
                        getSideContentCountAccoringPageType(1, firsttypeselectId, 0);
                    }
                });

                $('#wwpc_sel_content_page_type').change(function () {
                    var typeid = $('#wwpc_sel_content_page_type').val();
                    getSideContentCountAccoringPageType(1, typeid, 0);
                });
            },
            PagePreview(){
                $("#wwpc_previewModalModalbody").html('');
                var iframeH = $(window).height()-100;
                var lang = "";
                setTempLang();
                lang = transedlang.split("-")[0];
                $("#wwpc_previewModalModalbody").html('<iframe src="/'+lang+'/preview" style="border:none;width:100%; height: '+iframeH+'px;" title="preview"></iframe>');
                $("#wwpc_previewModal").modal('show');
            },
            PageRelease(){
                if(pgperm.write != 1){
                    mjs_module.data.showAlert('pgtxt_notpermission');
                    return;
                }

                var pgtxt_releasesuccess= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_releasesuccess');
                var pgtxt_release= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_release');

                mjs_module.data.Confirm(pgtxt_release,function (val) {
                    if(val){
                        $.ajax({
                            url: 'admin.wwpContentRelease',
                            type: 'POST',
                            data: {
                                trans:transedlang,
                                tabstatus:tabstatus,
                                release:1
                            },
                            success: function (data) {
                                if(data.msg=="ok"){
                                    mjs_module.data.showAlert(pgtxt_releasesuccess);
                                }
                                else
                                    mjs_module.data.showAlert(data.msg);
                            },
                            error: function (jqXHR, errdata, errorThrown) {
                                console.log(errdata);
                            },
                        });
                    }
                    else{
                        $.ajax({
                            url: 'admin.wwpContentRelease',
                            type: 'POST',
                            data: {
                                trans:transedlang,
                                tabstatus:tabstatus,
                                release:0
                            },
                            success: function (data) {

                            },
                            error: function (jqXHR, errdata, errorThrown) {
                                console.log(errdata);
                            },
                        });
                    }
                });

            },
            addSideContentTypeOne(){
                setTempLang();
                if(transedlang===''){
                    mjs_module.data.showAlert(pgtxt_selectlanguage);
                    $("#wwpc_mySideContentTypeModal").modal('hide');
                    return;
                }
                var typeId = -1;
                var mode = $('#wwpc_sel_content_type_mode').val();
                var title = $.trim($('#wwpc_input_content_type_title').val());
                if (title == null || title ==''){
                    mjs_module.data.showAlert('Please Input Title!');
                    return;
                }
                var pagetypeid = $('#wwpc_sel_slider_type').val();
                var number = $('#wwpc_sel_content_type_number').val();
                var order = $('#wwpc_sel_content_type_order').val();
                $.ajax({
                    url: 'admin.addSideContentTypeData',
                    type: 'POST',
                    data: {
                        id: typeId,
                        trans: transedlang,
                        mode:mode,
                        title:title,
                        pagetypeid:pagetypeid,
                        sidetype:0,
                        number:number,
                        order:order
                    },
                    async: false,
                    success: function (data) {
                        if(data.msg=="ok"){
                            $('#wwpc_content_type_dlgErr').text('Success Save in DB!').css({'display':'block','color':'#0BC334'});
                            setTimeout(function () {
                                $("#wwpc_mySideContentTypeModal").modal('hide');
                            },1000);

                            getSideContentTypeData();
                        }
                        else
                            $('#wwpc_content_type_dlgErr').text('Error insert in DB!').css({'display':'block','color':'#d41b11'});
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            },
            editSideContentDataOne(){
                setTempLang();
                if(transedlang===''){
                    mjs_module.data.showAlert(pgtxt_selectlanguage);
                    $("#wwpc_myEditSideContentTypeModal").modal('hide');
                    return;
                }
                var typeId = currentId;
                var mode = $('#wwpc_edit_sel_content_type_mode').val();
                var title = $.trim($('#wwpc_edit_input_content_type_title').val());
                if (title == null || title ==''){
                    mjs_module.data.showAlert('Please Input Title!');
                    return;
                }
                var type = $('#wwpc_edit_sel_content_type_type').val();
                var number = $('#wwpc_edit_sel_content_type_number').val();
                var order = $('#wwpc_edit_sel_content_type_order').val();
                var sidebartype = currentSidebarType;

                $.ajax({
                    url: 'admin.editSideContentData',
                    type: 'POST',
                    data: {
                        id: typeId,
                        sidetype: sidebartype,
                        mode:mode,
                        title:title,
                        type:type,
                        number:number,
                        order:order
                    },
                    async: false,
                    success: function (data) {
                        if(data.msg=="ok"){
                            $('#wwpc_edit_content_type_dlgErr').text('Success Save in DB!').css({'display':'block','color':'#0BC334'});
                            setTimeout(function () {
                                $("#wwpc_myEditSideContentTypeModal").modal('hide');
                            },1000);
                            if (sidebartype == 0)
                                getSideContentTypeData();
                            else
                                getSideContentPageData();
                        }
                        else
                            $('#wwpc_edit_content_type_dlgErr').text('Error insert in DB!').css({'display':'block','color':'#d41b11'});
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            },
            addSideContentPageOne()
            {
                setTempLang();
                if(transedlang===''){
                    mjs_module.data.showAlert(pgtxt_selectlanguage);
                    $("#wwpc_mySideContentPageModal").modal('hide');
                    return;
                }
                var pageId = -1;
                var mode = $('#wwpc_sel_content_page_mode').val();
                var title = $.trim($('#wwpc_input_content_page_title').val());
                var type = $('#wwpc_sel_content_page_type').val();
                var number = $('#wwpc_sel_content_page_number').val();
                var order = $('#wwpc_sel_content_page_order').val();

                $.ajax({
                    url: 'admin.addSideContentPageData',
                    type: 'POST',
                    data: {
                        id: pageId,
                        trans: transedlang,
                        mode:mode,
                        title:title,
                        type:type,
                        number:number,
                        order:order
                    },
                    async: false,
                    success: function (data) {
                        if(data.msg=="ok"){
                            $('#wwpc_content_page_dlgErr').text('Success Save in DB!').css({'display':'block','color':'#0BC334'});
                            setTimeout(function () {
                                $("#wwpc_mySideContentPageModal").modal('hide');
                            },1000);

                            getSideContentPageData();
                        }
                        else
                            $('#wwpc_content_page_dlgErr').text(data.msg).css('display','block');
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            },
            wwpc_contentpage_search_btn(){
                //console.log('click');
                var val = $('#wwpc_search_content_page').val();
                if(val!==null){
                    psearchstring = val.trim();
                    getSideContentPageData();
                }
            },

        }//method

    }
</script>

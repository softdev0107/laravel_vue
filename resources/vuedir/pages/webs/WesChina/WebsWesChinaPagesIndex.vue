<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_webs_wesglobal_pages_index}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_webs_weschina}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_pages}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_webs_wesglobal_pages_index}}
                          <a href="#" id="webs-wesglobal-pages-index-fav" data-status="off" data-page-info="Index_webs-wesglobal-pages-index">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
            </div>
        </div>

        <div class="row" data-device="device-area-container">

        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="page1_translate_bar">
                    <div class="page1_translate_text">{{cpgtxt_translation}}</div>
                    <div class="page1_translate_bar_left" id="translanglist">

                    </div>
                    <div class="page1_translate_bar_right">
                        <span class="page1_translate_span_right cursor-pointer" id="wwgm_save" @click="SavePageContent">
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
                <div class="page1_alarm_bar">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="mi:circle-warning"><g fill="none"><path d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z" fill="currentColor"></path><path d="M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z" fill="currentColor"></path><path d="M10.5 16.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z" fill="currentColor"></path></g></svg>
                    <span>{{cpgtxt_nosavenoappear}}</span>
                </div>
            </div>
        </div>

        <div class="page1_content_side_bar" style="display: flex; margin-bottom: 20px;">
            <div class="page_index_tab" style="width: 70px;">
                <div class="page1_content_side_bar_text page1_content_side_bar_seleted" data-target="sliderbar">{{cpgtxt_slider}}</div>
            </div>
            <div class="page_index_tab">
                <div class="page1_content_side_bar_text" data-target="teacherbar">{{cpgtxt_teacher}} {{cpgtxt_bar}}</div>
            </div>
            <div class="page_index_tab">
                <div class="page1_content_side_bar_text" data-target="studentbar">{{cpgtxt_student}} {{cpgtxt_bar}}</div>
            </div>
            <div class="page_index_tab">
                <div class="page1_content_side_bar_text" data-target="advancedbar">{{cpgtxt_advanced}} {{cpgtxt_css}}</div>
            </div>

        </div>

        <div class="row">
            <!--slider-->
            <div class="col-md-12 page_slider_content_list active" id="sliderbar">
                <div class="page1_content_content_bar">
                    <div class="page1_content_content_title">{{cpgtxt_basicstring}}</div>
                    <div class="page1_content_content page2_content_text">
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_image}} {{cpgtxt_size}}</span>
                            </div>
                            <div class="col-md-3">
                                <span id="image_size">527*300px</span>
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_navigation}}</span>
                            </div>
                            <div class="col-md-3">
                                <select class="form-control w-75 page2_select" id="slider_navication">
                                    <option value="1">{{cpgctl_dots}}</option>
                                    <option value="0">{{cpgctl_blocked}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_playingtime}}</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" value="10" class="page2_input" id="slider_playtime">
                            </div>
                            <div class="col-md-4">
                                <span>{{cpgtxt_pleaseenter}} 1-20 {{cpgtxt_seconds}}</span>
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_slidingtime}}</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" value="2" class="page2_input" id="slider_sliding_time">
                            </div>
                            <div class="col-md-4">
                                <span>{{cpgtxt_pleaseenter}} 1-10 {{cpgtxt_seconds}}</span>
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_style}}</span>
                            </div>
                            <div class="col-md-3">
                                <select class="form-control w-75 page2_select" id="slider_sliding_dir">
                                    <option value="1">{{cpgctl_fromrighttoleft}}</option>
                                    <option value="2">{{cpgctl_fromlefttoright}}</option>
                                    <option value="0">{{cpgctl_blocked}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_slider}} {{cpgtxt_image}}</span>
                            </div>
                            <div class="col-md-2">
                                <span id="selected_image_name" style="color: #5c6bc0; font-size: 16px;"></span>
                            </div>
                            <div class="col-md-3">
                                <button type="button" class="btn page1_custom_btn" id="slider_image_upbtn" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">
                                    {{cbtntxt_edit}}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page1_content_content_bar">
                    <div class="page1_content_content_title">{{cpgtxt_picture}}</div>
                    <form method="post" enctype="multipart/form-data" name="slider_img_panel_frm" id="slider_img_panel_frm">
                        <input type="hidden" name="sliderUploadId" id="sliderUploadId" value="">
                        <input type="hidden" name="transLang" id="slider_img_panel_frm_transLang" value="">
                        <input type="hidden" name="oldfilename" id="oldfilename" value="">
                        <input type="hidden" name="selCondition" id="selCondition" value="">
                        <input type="hidden" name="filesize" id="filesize" value="">
                        <input type="hidden" name="fileformat" id="fileformat" value="">
                        <input type="hidden" name="filecapacity" id="filecapacity" value="">
                    <div class="container-fluid p-0" id="picture-container">
<!--                        <div class="page1_content_content page2_content_text">
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>Name</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" value="Picture" class="page2_input">
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>Image</span>
                            </div>
                            <div class="col-md-3">
                                <img src="/images/icons/image_tp.png" style="width: 100px;" alt="" onerror="this.src ='/images/noimg.png';">
                            </div>
                            <div class="col-md-2">
                                <button type="button" class="btn page1_custom_btn" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">
                                    Edit
                                </button>
                            </div>
                            <div class="col-md-2">
                            <button type="button" class="btn page1_custom_btn" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">
                                Delete
                            </button>
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>Link</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" value="Picture Link" class="page2_input">
                            </div>
                        </div>
                     </div>-->
                    </div>
                    </form>
<!--                    <div class="page1_content_content_bottom cursor-pointer" id="id_myAddPicModal" data-toggle="modal" data-target="#myAddPicModal">-->
                    <div class="page1_content_content_bottom cursor-pointer" id="id_myAddPicModal" @click="picmodalAddBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="gg:add"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7z" fill="currentColor"></path></g></svg>
                        {{cbtntxt_add}}
                    </div>

                </div>
            </div>

            <!--Teacher bar-->
            <div class="col-md-12 page_slider_content_list"  id="teacherbar">
                <div class="page1_content_content_bar">
                    <form method="post" enctype="multipart/form-data" name="teach_frm" id="teach_frm">
                        <input type="hidden" name="wfm" value="tc">
                        <input type="hidden" name="transLang" id="teach_frm_transLang" value=""  >
                    <div class="page1_content_content_title">{{cpgtxt_teacher}} {{cpgtxt_bar}}</div>
                    <div class="page1_content_content page2_content_text">
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_font}} {{cpgtxt_title}}1</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" placeholder="Font Title" class="page2_input" name="teach_font1_tit" id="teach_font1_tit" value="">
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_icon}}</span>
                            </div>
                            <div class="col-md-3">
                               <div style="display: none">
                               <input type="hidden" name="teach_file_1_pre" id="teach_file_1_pre" value="">
                               <input type="file" name="teach_file_1" id="teach_file_1" value="">
                               </div>
                                <img src="/images/icons/image_tp.png" style="width: 100px;" alt="" id="teach_file_1_preview" onerror="this.src ='/images/noimg.png';">
                            </div>
                            <div class="col-md-3">
                                <button type="button" class="btn page1_custom_btn" id="teach_file_1_upbtn" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">
                                    {{cbtntxt_edit}}
                                </button>
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_font}} {{cpgtxt_content}}1</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" placeholder="Font Content" value="" class="page2_input" name="teach_font1_cont" id="teach_font1_cont">
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_link}}</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text"  placeholder="Link" value="" class="page2_input" name="teach_font1_link" id="teach_font1_link">
                            </div>
                        </div>
                    </div>
                    <div class="page1_content_content page2_content_text page3_content_content_bottom">
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_font}} {{cpgtxt_title}}2</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" placeholder="Font Title" value="" class="page2_input" name="teach_font2_tit" id="teach_font2_tit">
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_icon}}</span>
                            </div>
                            <div class="col-md-3">
                                <div style="display: none">
                                    <input type="hidden" name="teach_file_2_pre" id="teach_file_2_pre" value="">
                                    <input type="file" name="teach_file_2" id="teach_file_2" value="">
                                </div>
                                <img src="/images/icons/image_tp.png" style="width: 100px;" alt="" id="teach_file_2_preview" onerror="this.src ='/images/noimg.png';">
                            </div>
                            <div class="col-md-3">
                                <button type="button" id="teach_file_2_upbtn" class="btn page1_custom_btn" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">
                                    {{cbtntxt_edit}}
                                </button>
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_font}} {{cpgtxt_content}}2</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" placeholder="Font Content" value="" class="page2_input" name="teach_font2_cont" id="teach_font2_cont">
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_link}}</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text"  placeholder="Link" value="" class="page2_input" name="teach_font2_link" id="teach_font2_link">
                            </div>
                        </div>
                    </div>
                    <div class="page1_content_content page2_content_text page3_content_content_bottom">
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_font}} {{cpgtxt_title}}3</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" value=""  placeholder="Font Title" class="page2_input" name="teach_font3_tit" id="teach_font3_tit">
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_icon}}</span>
                            </div>
                            <div class="col-md-3">
                                <div style="display: none">
                                    <input type="hidden" name="teach_file_3_pre" id="teach_file_3_pre" value="">
                                    <input type="file" name="teach_file_3" id="teach_file_3" value="">
                                </div>
                                <img src="/images/icons/image_tp.png" style="width: 100px;" alt="" id="teach_file_3_preview" onerror="this.src ='/images/noimg.png';">
                            </div>
                            <div class="col-md-3">
                                <button type="button" id="teach_file_3_upbtn" class="btn page1_custom_btn" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">
                                    {{cbtntxt_edit}}
                                </button>
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_font}} {{cpgtxt_content}}3</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" value="" placeholder="Font Content" class="page2_input" name="teach_font3_cont" id="teach_font3_cont">
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_link}}</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" value="" placeholder="Link" class="page2_input" name="teach_font3_link" id="teach_font3_link">
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>

            <!--studentbar-->
            <div class="col-md-12 page_slider_content_list" id="studentbar">
                <div class="page1_content_content_bar">
                    <form method="post" enctype="multipart/form-data" name="stud_frm" id="stud_frm">
                        <input type="hidden" name="transLang" id="stud_frm_transLang" value=""  >
                        <input type="hidden" name="wfm" value="st">
                    <div class="page1_content_content_title">{{cpgtxt_student}} {{cpgtxt_bar}}</div>
                    <div class="page1_content_content page2_content_text">
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_font}} {{cpgtxt_title}}1</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" placeholder="Font Title" class="page2_input" name="stud_font1_tit" id="stud_font1_tit" value="">
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_icon}}</span>
                            </div>
                            <div class="col-md-3">
                                <div style="display: none">
                                    <input type="hidden" name="stud_file_1_pre" id="stud_file_1_pre" value="">
                                    <input type="file" name="stud_file_1" id="stud_file_1" value="">
                                </div>
                                <img src="/images/icons/image_tp.png" style="width: 100px;" alt="" id="stud_file_1_preview" onerror="this.src ='/images/noimg.png';">
                            </div>
                            <div class="col-md-3">
                                <button type="button" class="btn page1_custom_btn" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;" id="stud_file_1_upbtn">
                                    {{cbtntxt_edit}}
                                </button>
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_font}} {{cpgtxt_content}}1</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" value="" placeholder="Font Content" class="page2_input" name="stud_font1_cont" id="stud_font1_cont">
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_link}}</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" value=""  placeholder="Link" class="page2_input" name="stud_font1_link" id="stud_font1_link">
                            </div>
                        </div>
                    </div>
                    <div class="page1_content_content page2_content_text page3_content_content_bottom">
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_font}} {{cpgtxt_title}}2</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" placeholder="Font Title" value="" class="page2_input" name="stud_font2_tit" id="stud_font2_tit">
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_icon}}</span>
                            </div>
                            <div class="col-md-3">
                                <div style="display: none">
                                    <input type="hidden" name="stud_file_2_pre" id="stud_file_2_pre" value="">
                                    <input type="file" name="stud_file_2" id="stud_file_2" value="">
                                </div>
                                <img src="/images/icons/image_tp.png" style="width: 100px;" alt="" id="stud_file_2_preview" onerror="this.src ='/images/noimg.png';">
                            </div>
                            <div class="col-md-3">
                                <button type="button" class="btn page1_custom_btn" id="stud_file_2_upbtn" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_font}} Content2</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" value="" placeholder="Font Content"  class="page2_input" name="stud_font2_cont" id="stud_font2_cont">
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>Link</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" value=""  placeholder="Link" class="page2_input" name="stud_font2_link" id="stud_font2_link">
                            </div>
                        </div>
                    </div>
                    <div class="page1_content_content page2_content_text page3_content_content_bottom">
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_font}} {{cpgtxt_title}}3</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" value="" class="page2_input" placeholder="Font Title" name="stud_font3_tit" id="stud_font3_tit">
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_icon}}</span>
                            </div>
                            <div class="col-md-3">
                                <div style="display: none">
                                    <input type="hidden" name="stud_file_3_pre" id="stud_file_3_pre" value="">
                                    <input type="file" name="stud_file_3" id="stud_file_3" value="">
                                </div>
                                <img src="/images/icons/image_tp.png" style="width: 100px;" alt="" id="stud_file_3_preview" onerror="this.src ='/images/noimg.png';">
                            </div>
                            <div class="col-md-3">
                                <button type="button" class="btn page1_custom_btn" id="stud_file_3_upbtn" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">
                                    {{cbtntxt_edit}}
                                </button>
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_font}} {{cpgtxt_content}}3</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" value="" placeholder="Font Content" class="page2_input" name="stud_font3_cont" id="stud_font3_cont">
                            </div>
                        </div>
                        <div class="row page2_row">
                            <div class="col-md-2">
                                <span>{{cpgtxt_link}}</span>
                            </div>
                            <div class="col-md-3">
                                <input type="text" value=""  placeholder="Link" class="page2_input" name="stud_font3_link" id="stud_font3_link">
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>

            <!--Advanced css-->
            <div class="col-md-12 page_slider_content_list" id="advancedbar">
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

            <!-- empty line ckd -->
            <div class="row empty-line">
                <div class="col-md-12" style="padding: 30px 0;">&nbsp;</div>
            </div>

        </div>

        <!--modal part-->
        <div class="modal fade" id="myAddPicModal" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <div style="color: #5c6bc0; font-size: 20px; font-weight: 600;">{{cpgtxt_createpicture}}</div>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form method="post" enctype="multipart/form-data" name="slider_img_frm" id="slider_img_frm">
                            <input type="hidden" name="transLang" id="slider_img_transLang" value=""  >
                            <div class="page2_modal page2_content_text">
                            <div class="row page2_row">
                                <div class="col-md-2">
                                    <span>{{cpgtxt_name}}</span>
                                </div>
                                <div class="col-md-10">
                                    <input type="text" placeholder="Picture Name" value="" class="page2_input" name="pic_name" id="pic_name">
                                </div>
                            </div>
                            <div class="row page2_row">
                                <div class="col-md-2">
                                    <span>{{cpgtxt_image}}</span>
                                </div>
                                <div class="col-md-3">
                                    <div style="display: none">
                                        <input type="file" name="new_image_file_dlg" id="new_image_file_dlg">
                                    </div>
                                    <img src="/images/icons/image_tp.png" style="width: 100px;" alt="" id="new_image_file_dlg_preview" onerror="this.src ='/images/noimg.png';">
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn page1_custom_btn" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;" @click="getsliderimgfromfile">
                                        {{cbtntxt_edit}}
                                    </button>
                                </div>
                            </div>
                            <div class="row page2_row">
                                <div class="col-md-2">
                                    <span>{{cpgtxt_link}}</span>
                                </div>
                                <div class="col-md-10">
                                    <input type="text" placeholder="Picture Link" value="" class="page2_input" name="pic_link" id="pic_link">
                                </div>
                            </div>
                        </div>
                       </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn page1_custom_select_btn" id="addpic_btn" @click="addpicmodalclose">
                            <span class="iconify" data-inline="false" data-icon="gg:add" style="font-size: 24px;"></span>
                            {{cbtntxt_add}}
                        </button>
                    </div>
                </div>

            </div>
        </div>
        <!--end modal-->
        <!--slider image modal part-->
        <div class="modal fade" id="sliderModal">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">{{ cpgtxt_character }} {{ cpgtxt_set }}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="sliderModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                        <div class="panel" id="tab4" style="display: block;">
                            <form id="slider-image-form">
                                <div class="row" style="padding: 10px;">
                                    <div class="col-md-12">
                                        <div class="table-responsive" style="max-height: 300px; overflow-y: auto; min-height: 100px;">
                                            <table id="slider-image-table" role="grid" aria-describedby="slider-image_info" class="table table-lg  no-footer">
                                                <tbody id="sliderimage_dlg_list">

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="bottom" style="text-align: center; padding-top: 0px;">
                                            <button type="button" class="btn btn-info" style="background:#5c6bc0 !important;border-color: #5c6bc0 !important;border-radius:1.8rem !important;padding: 10px 20px;" @click.stop="slider_image_add()">{{ cbtntxt_savechanges }}</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        <!--end slider image modal-->
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
     #addpic_btn{
         height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;
     }
    .page_index_tab{
        width: 100px;
    }
    /* device stayle area */
    .page1_device_span {
        text-decoration: underline;
    }
    .page1_device_span.active{
        color: #252628;
        font-weight: bold;
    }
    .span_deviceitemDel_controller {
        color: #252628;
        font-size: 15px;
        cursor: pointer;
        padding: 5px 5px 5px 0;
    }
    .device-dlg-item-chk{
        width: 15px;
        height: 15px;
        background-color: #9e9ea2;
        padding: 3px;
        cursor: pointer;
    }
    .device-dlg-item-chk.active{
        background-color: #231eb7;
    }
    .device_span_add_btn_area{
        display: none;
    }
    .device_span_add_btn_area.active{
        display: inline-block;
    }
    .device_span_change_btn_area{
        display: none;
    }
    .device_span_change_btn_area.active{
        display: inline-block;
    }
</style>

<script>
    import lang_module from "../../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../../assets/jsfunc/mjs_module";
    import nav_module from "../../../assets/jsfunc/nav_module";
    import DevCls from "../../../assets/jsfunc/device_area";

    var preview='';
    var tabstatus=0;
    var vueOBJ=null;
    var wwgfield='sliderbar';
    var transedlang='';
    var pgperm={};
    var Device_Area=null;
    var selected_image_name = "";
    var selected_image_size = "";
    var selected_id = "";

    function InitFirstLang(){
        $('.page1_translate_span').removeClass('active');
        var flag=true;
        $('.page1_translate_span').each(function (index,item) {
            if(flag){
                $(this).addClass('active');
                var cont = $(this).attr('data-cont');
                var len= cont.split('-').length;
                if(len > 0){
                    var sky = cont.split('-')[0]+'-'+cont.split('-')[1];
                    transedlang = sky;
                    flag=false;
                }
            }
        });
    }

    function sliderPanelInit(jslists) {

        $('#picture-container').html('');

        if (jslists == '') return;
        var lists = $.parseJSON(jslists);
        var isarray = false;
        if (lists instanceof Array) {
            isarray = true;
        }
        var tags = '';
        var pgtxt_Name = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_name');
        var pgtxt_Image= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_image');
        var btntxt_Edit= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
        var btntxt_Delete= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
        var pgtxt_Link= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_link');
        var pgtxt_error= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_error');
        var pgtxt_size= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_size');
        var pgtxt_format= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_format');
        var pgtxt_capacity= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_capacity');

        if (isarray)
        {

            for (var i = 0; i < lists.length; i++) {
                var item = lists[i];
                var fname = item.fname;
                var link = item.link;
                var name = item.name;
                var id = 'id_' + i;
                var border = '';
                if (i > 0)
                    border = ' style="border-top: 1px solid #dbd7d7;"';

                tags += '<div class="page1_content_content page2_content_text" ' + border + '>';
                tags += '<div class="row page2_row">';
                tags += ' <div class="col-md-2">';
                tags += '<span class="data-ajax" data-ajax="pgtxt_name">'+pgtxt_Name+'</span>';
                tags += ' </div>';
                tags += '<div class="col-md-3">';
                tags += ' <input type="text" name="pic_name_'+id+'" id="pic_name_'+id+'"  value="' + name + '" class="page2_input">';
                tags += ' </div>';
                tags += '<div class="col-md-3">';
                tags += ' <span class="data-ajax" id="sizeerror_'+id+'" data-ajax="pgtxt_error,pgtxt_size" style="color: red; display: none;">'+pgtxt_error+' '+pgtxt_size+'</span>';
                tags += ' <span class="data-ajax" id="formaterror_'+id+'" data-ajax="pgtxt_error,pgtxt_format" style="color: red; display: none;">'+pgtxt_error+' '+pgtxt_format+'</span>';
                tags += ' <span class="data-ajax" id="capacityerror_'+id+'" data-ajax="pgtxt_error,pgtxt_capacity" style="color: red; display: none;">'+pgtxt_error+' '+pgtxt_capacity+'</span>';
                tags += ' </div>';
                tags += ' </div>';
                tags += '<div class="row page2_row">';
                tags += ' <div class="col-md-2">';
                tags += ' <span class="data-ajax" data-ajax="pgtxt_image">'+pgtxt_Image+'</span>';
                tags += ' </div>';
                tags += ' <div class="col-md-3">';
                tags += ' <div style="display: none">';
                tags += ' <input type="file" name="new_image_file_' + id + '" id="'+id+'">';
                tags += ' </div>';
                tags += ' <img src="/uploads/images/wesimg/' + fname + '" style="width: 100px;" id="preview_' + id + '" onerror="this.src =\'/images/noimg.png\';">';
                tags += ' </div>';
                tags += ' <div class="col-md-2">';
                tags += ' <button type="button" class="btn page1_custom_btn panelEditBtn data-ajax"  data-ajax="btntxt_edit" data-fname="' + fname + '" data-name="' + name + '" data-link="' + link + '" data-id="' + id + '" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;min-width: 90px;">';
                tags += btntxt_Edit;
                tags += ' </button>';
                tags += ' </div>';
                tags += ' <div class="col-md-2">';
                tags += ' <button type="button" class="btn page1_custom_btn panelDelBtn data-ajax" data-ajax="btntxt_delete" data-fname="' + fname + '" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;min-width: 90px;">';
                tags += btntxt_Delete;
                tags += ' </button>';
                tags += ' </div>';
                tags += ' </div>';
                tags += '<div class="row page2_row">';
                tags += ' <div class="col-md-2">';
                tags += ' <span class="data-ajax" data-ajax="pgtxt_link">'+pgtxt_Link+'</span>';
                tags += ' </div>';
                tags += ' <div class="col-md-3">';
                tags += ' <input type="text" value="' + link + '" name="pic_link_'+id+'" id="pic_link_'+id+'"  class="page2_input">';
                tags += ' </div>';
                tags += '</div>';
                tags += '</div>';
            }
         }
        else
        {
            var fname = lists.fname;
            var link = lists.link;
            var name = lists.name;
            var id = 'id_0';
            var border = '';
            tags += '<div class="page1_content_content page2_content_text" ' + border + '>';
            tags += '<div class="row page2_row">';
            tags += ' <div class="col-md-2">';
            tags += '<span class="data-ajax" data-ajax="pgtxt_name">'+pgtxt_Name+'</span>';
            tags += ' </div>';
            tags += '<div class="col-md-3">';
            tags += ' <input type="text" name="pic_name_'+id+'" id="pic_name_'+id+'" value="' + name + '" class="page2_input">';
            tags += ' </div>';
            tags += '<div class="col-md-3">';
            tags += ' <span class="data-ajax" id="sizeerror_'+id+'" data-ajax="pgtxt_error,pgtxt_size" style="color: red; display: none;">'+pgtxt_error+' '+pgtxt_size+'</span>';
            tags += ' <span class="data-ajax" id="formaterror_'+id+'" data-ajax="pgtxt_error,pgtxt_format" style="color: red; display: none;">'+pgtxt_error+' '+pgtxt_format+'</span>';
            tags += ' <span class="data-ajax" id="capacityerror_'+id+'" data-ajax="pgtxt_error,pgtxt_capacity" style="color: red; display: none;">'+pgtxt_error+' '+pgtxt_capacity+'</span>';
            tags += ' </div>';
            tags += ' </div>';
            tags += '<div class="row page2_row">';
            tags += ' <div class="col-md-2">';
            tags += ' <span class="data-ajax" data-ajax="pgtxt_image">'+pgtxt_Image+'</span>';
            tags += ' </div>';
            tags += ' <div class="col-md-3">';
            tags += ' <div style="display: none">';
            tags += ' <input type="file" name="new_image_file_' + id + '" id="'+id+'">';
            tags += ' </div>';
            tags += ' <img src="/uploads/images/wesimg/' + fname + '" style="width: 100px;" id="preview_' + id + '" onerror="this.src =\'/images/noimg.png\';">';
            tags += ' </div>';
            tags += ' <div class="col-md-2">';
            tags += ' <button type="button" class="btn page1_custom_btn panelEditBtn data-ajax"  data-ajax="btntxt_edit" data-fname="' + fname + '" data-name="' + name + '" data-link="' + link + '" data-id="' + id + '" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">';
            tags += btntxt_Edit;
            tags += ' </button>';
            tags += ' </div>';
            tags += ' <div class="col-md-2">';
            tags += ' <button type="button" class="btn page1_custom_btn panelDelBtn data-ajax" data-ajax="btntxt_delete" data-fname="' + fname + '" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">';
            tags += btntxt_Delete;
            tags += ' </button>';
            tags += ' </div>';
            tags += ' </div>';
            tags += '<div class="row page2_row">';
            tags += ' <div class="col-md-2">';
            tags += ' <span class="data-ajax" data-ajax="pgtxt_link">'+pgtxt_Link+'</span>';
            tags += ' </div>';
            tags += ' <div class="col-md-3">';
            tags += ' <input type="text" value="' + link + '"  name="pic_link_'+id+'" id="pic_link_'+id+'"   class="page2_input">';
            tags += ' </div>';
            tags += '</div>';
            tags += '</div>';
        }

      $('#picture-container').html(tags);

       $('input[name^="new_image_file_"]').change(function(){
           if(pgperm.write != 1){
               myjs.data.showAlert('pgtxt_notpermission');
               return;
           }
           var deviceval = Device_Area.getSelectedDevice();
           if(deviceval==null || deviceval == "")
           {
               myjs.data.showAlert('pgtxt_plsselectdevicetype');
               return;
           }

         /*  if(deviceval.length > 1){
               var tmp =[];
               for(var i=0;i<deviceval.length;i++)
                   tmp.push(deviceval.charAt(i));
               deviceval = tmp.join(",");
           }*/

            var idstr = $(this).attr('id');
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    if(preview!=''){
                        $('#'+preview).attr('src', e.target.result);
                        preview='';
                        $('#slider_img_panel_frm_transLang').val(transedlang);
                        var formData = new FormData($("#slider_img_panel_frm")[0]);
                        formData.append('device',deviceval);

                        $.ajax({
                            url: 'admin.wwgpChangesliderupload',
                            type: 'POST',
                            data: formData,
                            async: false,
                            success: function (data) {
                                if(data.msg=="ok"){
                                    $('#sizeerror_'+idstr).css("display","none");
                                    $('#capacityerror_'+idstr).css("display","none");
                                    $('#formaterror_'+idstr).css("display","none");
                                    if(data.list=='')
                                        $('#picture-container').html('');
                                    else
                                        sliderPanelInit(data.list);
                                }
                                else if(data.msg=="size"){
                                    $('#sizeerror_'+idstr).css("display","block");
                                }
                                else if(data.msg=="capacity"){
                                    $('#capacityerror_'+idstr).css("display","block");
                                }
                                else if(data.msg=="format"){
                                    $('#formaterror_'+idstr).css("display","block");
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
                }
                reader.readAsDataURL(this.files[0]); // convert to base64 string
            }
        });

      $('.panelEditBtn').click(function () {
          if(pgperm.write != 1){
              myjs.data.showAlert('pgtxt_notpermission');
              return;
          }
          var deviceval = Device_Area.getSelectedDevice();
          if(deviceval==null || deviceval == "")
          {
              myjs.data.showAlert('pgtxt_plsselectdevicetype');
              return;
          }
         /* if(deviceval.length > 1){
              var tmp =[];
              for(var i=0;i<deviceval.length;i++)
                  tmp.push(deviceval.charAt(i));
              deviceval = tmp.join(",");
          }*/

          if(transedlang=='')
          {
              myjs.data.showAlert('pgtxt_selectlanguagesave');
              return;
          }
          if(selected_image_name == '')
          {
              myjs.data.showAlert('pgtxt_plsselectsliderimageset');
              return;
          }
            var oldname = $(this).attr('data-fname');
            var name = $(this).attr('data-name');
            var link = $(this).attr('data-link');
            var id = $(this).attr('data-id');
             preview='preview_'+id;
             $('#oldfilename').val(oldname);
             $('#sliderUploadId').val(id);
             $('#'+id).trigger('click');

      });
        $('.panelDelBtn').click(function () {
            if(pgperm.delete != 1){
                myjs.data.showAlert('pgtxt_notpermission');
                return;
            }
            var oldname = $(this).attr('data-fname');
            if(oldname=='')return;

            var deviceval = Device_Area.getSelectedDevice();
            if(deviceval==null || deviceval == "")
            {
                myjs.data.showAlert('pgtxt_plsselectdevicetype');
                return;
            }

           /* if(deviceval.length > 1){
                var tmp =[];
                for(var i=0;i<deviceval.length;i++)
                    tmp.push(deviceval.charAt(i));
                deviceval = tmp.join(",");
            }*/

            if(transedlang=='')
            {
                myjs.data.showAlert('Please Select translate language!');
                return;
            }
            $.ajax({
                url: 'admin.delwwgpsliderlist',
                type: 'POST',
                data: {
                    tansLang:transedlang,
                    device:deviceval,
                    delname:oldname
                },
                async: false,
                success: function (data) {
                    if(data.msg=="ok"){
                        if(data.list=='')
                            $('#picture-container').html('');
                        else
                          sliderPanelInit(data.list);
                    }
                    else
                        myjs.data.showAlert(data.msg);

                },
                error: function (jqXHR, errdata, errorThrown) {
                    console.log(errdata);
                }
            });
        });

    }

    function sliderStatusInit(jsonstr){
     if (jsonstr == ''){
         $('#slider_navication').val(1);
         $('#slider_playtime').val(1);
         $('#slider_sliding_time').val(3000);
         $('#slider_sliding_dir').val(1);
     }
     else{
         var status = $.parseJSON(jsonstr);
         $('#slider_navication').val(status.n);
         $('#slider_playtime').val(status.p);
         $('#slider_sliding_time').val(status.t);
         $('#slider_sliding_dir').val(status.d);
     }
 }

    function  getSliderList() {
        if(transedlang=='')
        {
            return;
        }
        var deviceval = Device_Area.getSelectedDevice();
        if(deviceval==null || deviceval == "")
        {
            return;
        }

        $.ajax({
            url: 'admin.getwwgpsliderlist',
            type: 'POST',
            data: {
                tansLang: transedlang,
                wwgfield:wwgfield,
                device:deviceval
            },
            async: false,
            success: function (data) {
                if(data.msg=="ok"){
                    sliderPanelInit(data.list);
                    sliderStatusInit(data.sliderstatus);

                    if(data.condition != null && data.condition != "")
                    {
                        selected_image_size = data.condition.size;
                        selected_image_name = data.condition.name;

                        $('#filesize').val(selected_image_size);
                        var capacity = data.condition.capacity === null ? "" : data.condition.capacity + '(KB)';
                        var imgtype = data.condition.imgtype === null ? "" : data.condition.imgtype;
                        if (imgtype !== "") {
                            imgtype = nav_module.data.jsonparse_one(imgtype);
                            imgtype = imgtype.replace("{", "");
                            imgtype = imgtype.replace("}", "");
                            var types = imgtype.split(",");
                            var real_imgtype = "";
                            var index = 0;
                            for (var k = 0; k < types.length; k++) {
                                var type = types[k];
                                var real_types = type.split(":");
                                if (real_types.length > 1) {
                                    if (real_types[1] == 1) {
                                        if (index == 0)
                                            real_imgtype += real_types[0];
                                        else
                                            real_imgtype += " / " + real_types[0];
                                        index++;
                                    }
                                }

                                imgtype = real_imgtype;
                            }
                        }
                        $('#fileformat').val(imgtype);
                        $('#filecapacity').val(capacity);

                        $('#image_size').text(selected_image_size + 'px');
                        $('#selected_image_name').text(selected_image_name);
                    }
                    else{
                        selected_image_size = "";
                        selected_image_name = "";
                        $('#filesize').val('');
                        $('#fileformat').val('');
                        $('#filecapacity').val('');
                        $('#image_size').text('');
                        $('#selected_image_name').text('');
                    }
                    if(transedlang!=null && transedlang!='')
                    {
                        if(data.list!='' && data.list.length > 0){
                            $('.page1_alarm_bar').addClass('active');
                            $('.page1_alarm_bar span').text('Save  Appear');
                        }
                        else
                        {
                            $('.page1_alarm_bar').removeClass('active');
                            $('.page1_alarm_bar span').text('No Save No Appear');
                        }
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

    function initTeacher() {
        $('#slider_image_upbtn').click(function () {
            if(pgperm.write != 1){
                myjs.data.showAlert('pgtxt_notpermission');
                return;
            }

            let postData = {
                start: 1,
                cnt:10,// han 2020-10-21
                filter: 0,// han 2020-10-21
            };
            var pgtxt_name= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_name');
            var pgtxt_size= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_size');
            var pgtxt_capacity= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_capacity');
            var pgtxt_format= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_format');
            var tag="";
            tag+='<tr role="row" class="odd">';
            tag+=    '<td style="width:200px;" class="data-ajax" data-ajax="pgtxt_name">'+pgtxt_name+'</td>';
            tag+=    '<td style="width:150px" class="data-ajax" data-ajax="pgtxt_size">'+pgtxt_size+'</td>';
            tag+=    '<td style="width:100px" class="data-ajax" data-ajax="pgtxt_capacity">'+pgtxt_capacity+'</td>';
            tag+=    '<td style="width:150px" class="data-ajax" data-ajax="pgtxt_format">'+pgtxt_format+'</td>';
            tag+='</tr>';
            axios.post('admin.getSiteLogoStylelist', postData)
                .then((response) => {
                    let msg = response.data.msg;
                    var total=response.data.total;
                    if(total<=0){
                        $('#sitelogoimglists').html('');
                        return;
                    }
                    if(msg =="ok")
                    {
                        var logolists =  response.data.list;
                        $('#sliderimage_dlg_list').html('');
                        for(var i=0;i<logolists.length;i++)
                        {
                            var list = logolists[i];
                            var id = list.id;
                            var name = list.name;
                            var size = list.size;
                            var style = list.style;
                            var capacity= list.capacity===null ? "" : list.capacity + '(KB)';
                            var imgtype= list.imgtype === null ? "" : list.imgtype;
                            if(imgtype!=="") {
                                imgtype = nav_module.data.jsonparse_one(imgtype);
                                imgtype = imgtype.replace("{", "");
                                imgtype = imgtype.replace("}", "");
                                var types = imgtype.split(",");
                                var real_imgtype = "";
                                var index = 0;
                                for(var k = 0; k < types.length; k++){
                                    var type = types[k];
                                    var real_types = type.split(":");
                                    if(real_types.length > 1){
                                        if(real_types[1] == 1){
                                            if(index == 0)
                                                real_imgtype += real_types[0];
                                            else
                                                real_imgtype += " / " + real_types[0];
                                            index++;
                                        }
                                    }

                                    imgtype = real_imgtype;
                                }
                            }
                            var cls='';
                            if(i<logolists.length -1)
                                cls='bot';
                            var alldate=name+'-'+size+'-'+style;

                            tag+='<tr role="row" class="odd '+cls+'" data-name="'+name+'" data-size="'+size+'" data-format="'+imgtype+'" data-capacity="'+capacity+'" style="cursor: pointer;" id="slider_'+ id +'">';
                            tag+=    '<td style="width:200px;">'+name+'</td>';
                            tag+=    '<td style="width:150px">'+size+'</td>';
                            tag+=    '<td style="width:100px">'+capacity+'</td>';
                            tag+=    '<td style="width:150px">'+imgtype+'</td>';
                            tag+='</tr>';
                        }
                        $('#sliderimage_dlg_list').html(tag);

                        var temp_id = "";
                        $('tr[id^="slider_"]').click(function () {
                            var idstr = $(this).attr('id');
                            var id = idstr.split('_')[1];
                            $('#slider_' + temp_id + '').css("color","black");
                            $(this).css("color","cornflowerblue");
                            selected_image_name = $(this).data("name");
                            selected_image_size = $(this).data("size");
                            $('#selCondition').val(id);
                            $('#filesize').val($(this).data("size"));
                            $('#fileformat').val($(this).data("format"));
                            $('#filecapacity').val($(this).data("capacity"));
                            temp_id = id;
                            selected_id = id;
                            //myjs.data.showAlert(imagename);
                        });
                    }
                    else
                    {
                        console.log(response.data.message);
                    }
                }).catch(function (error) {
                console.log(error);
            })

            $("#sliderModal").modal('show');
        });

        $('#teach_file_1_upbtn').click(function () {
                $('#teach_file_1').trigger('click');
        });
        $('#teach_file_2_upbtn').click(function () {
                $('#teach_file_2').trigger('click');
        });
        $('#teach_file_3_upbtn').click(function () {
                $('#teach_file_3').trigger('click');
        });

        $('#teach_file_1').change(function(){
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#teach_file_1_preview').attr('src', e.target.result);
                }
                reader.readAsDataURL(this.files[0]);
            }
        });
        $('#teach_file_2').change(function(){
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#teach_file_2_preview').attr('src', e.target.result);
                }
                reader.readAsDataURL(this.files[0]);
            }
        });
        $('#teach_file_3').change(function(){
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                   $('#teach_file_3_preview').attr('src', e.target.result);
                }
                reader.readAsDataURL(this.files[0]);
            }
        });
    }

    function initStudent() {
        $('#stud_file_1_upbtn').click(function () {
                $('#stud_file_1').trigger('click');
        });
        $('#stud_file_2_upbtn').click(function () {
                $('#stud_file_2').trigger('click');
        });
        $('#stud_file_3_upbtn').click(function () {
                $('#stud_file_3').trigger('click');
        });
        $('#stud_file_1').change(function(){
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                   $('#stud_file_1_preview').attr('src', e.target.result);
                }
                reader.readAsDataURL(this.files[0]);
            }
        });
        $('#stud_file_2').change(function(){
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                   $('#stud_file_2_preview').attr('src', e.target.result);
                }
                reader.readAsDataURL(this.files[0]);
            }
        });
        $('#stud_file_3').change(function(){
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                   $('#stud_file_3_preview').attr('src', e.target.result);
                }
                reader.readAsDataURL(this.files[0]);
            }
        });
    }

    function getTeacherData()
    {
        if(transedlang=='')
        {
            return;
        }
        var deviceval = Device_Area.getSelectedDevice();
        if(deviceval==null || deviceval == "")
        {
            return;
        }

        $.ajax({
            url: 'admin.getwwgpTeachData',
            data:{
                transLang:transedlang,
                device:deviceval
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if(data.msg=="ok"){
                   // console.log(data.list+": null");
                    if(data.list!=='' && data.list.length > 0)
                    {
                        var dt = data.list;
                        dt = $.parseJSON(dt);
                        var t_1=dt.t1;
                        $('#teach_font1_tit').val(t_1.title);
                        $('#teach_font1_cont').val(t_1.cont);
                        $('#teach_font1_link').val(t_1.link);

                        if(t_1.img != null && t_1.img !=''){
                            $('#teach_file_1_preview').attr('src','/uploads/images/wesimg/'+t_1.img);
                            $('#teach_file_1_pre').val(t_1.img);
                        }

                        var t_2=dt.t2;
                        $('#teach_font2_tit').val(t_2.title);
                        $('#teach_font2_cont').val(t_2.cont);
                        $('#teach_font2_link').val(t_2.link);

                        if(t_2.img != null && t_2.img !=''){
                            $('#teach_file_2_preview').attr('src','/uploads/images/wesimg/'+t_2.img);
                            $('#teach_file_2_pre').val(t_2.img);
                        }


                        var t_3=dt.t3;
                        $('#teach_font3_tit').val(t_3.title);
                        $('#teach_font3_cont').val(t_3.cont);
                        $('#teach_font3_link').val(t_3.link);

                        if(t_3.img != null && t_3.img !=''){
                            $('#teach_file_3_preview').attr('src','/uploads/images/wesimg/'+t_3.img);
                            $('#teach_file_3_pre').val(t_3.img);
                        }

                    }
                    else {
                        $('#teach_font1_tit').val('');
                        $('#teach_font1_cont').val('');
                        $('#teach_font1_link').val('');
                        $('#teach_file_1_preview').attr('src','');
                        $('#teach_file_1_pre').val('');

                        $('#teach_font2_tit').val('');
                        $('#teach_font2_cont').val('');
                        $('#teach_font2_link').val('');
                        $('#teach_file_2_preview').attr('src','');
                        $('#teach_file_2_pre').val('');

                        $('#teach_font3_tit').val('');
                        $('#teach_font3_cont').val('');
                        $('#teach_font3_link').val('');
                        $('#teach_file_3_preview').attr('src','');
                        $('#teach_file_3_pre').val('');
                    }

                    if(data.list!='' && data.list.length > 0){
                        $('.page1_alarm_bar').addClass('active');
                        $('.page1_alarm_bar span').text('Save  Appear');
                    }
                    else
                    {
                        $('.page1_alarm_bar').removeClass('active');
                        $('.page1_alarm_bar span').text('No Save No Appear');
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

    function getStudentData() {
        if(transedlang=='')
        {
            return;
        }
        var deviceval = Device_Area.getSelectedDevice();
        if(deviceval==null || deviceval == "")
        {
            return;
        }


        $.ajax({
            url: 'admin.getwwgpStudData',
            data:{
                transLang:transedlang,
                device:deviceval
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if(data.msg=="ok"){
                    if(data.list!='')
                    {
                        var dt = data.list;
                        dt = $.parseJSON(dt);
                        var t_1=dt.t1;
                        $('#stud_font1_tit').val(t_1.title);
                        $('#stud_font1_cont').val(t_1.cont);
                        $('#stud_font1_link').val(t_1.link);

                        if(t_1.img != null && t_1.img !=''){
                            $('#stud_file_1_preview').attr('src','/uploads/images/wesimg/'+t_1.img);
                            $('#stud_file_1_pre').val(t_1.img);
                        }


                        var t_2=dt.t2;
                        $('#stud_font2_tit').val(t_2.title);
                        $('#stud_font2_cont').val(t_2.cont);
                        $('#stud_font2_link').val(t_2.link);

                        if(t_2.img != null && t_2.img !=''){
                            $('#stud_file_2_preview').attr('src','/uploads/images/wesimg/'+t_2.img);
                            $('#stud_file_2_pre').val(t_2.img);
                        }


                        var t_3=dt.t3;
                        $('#stud_font3_tit').val(t_3.title);
                        $('#stud_font3_cont').val(t_3.cont);
                        $('#stud_font3_link').val(t_3.link);

                        if(t_3.img != null && t_3.img !=''){
                            $('#stud_file_3_preview').attr('src','/uploads/images/wesimg/'+t_3.img);
                            $('#stud_file_3_pre').val(t_3.img);
                        }

                    }
                    else{
                        $('#stud_font1_tit').val('');
                        $('#stud_font1_cont').val('');
                        $('#stud_font1_link').val('');
                        $('#stud_file_1_preview').attr('src','');
                        $('#stud_file_1_pre').val('');

                        $('#stud_font2_tit').val('');
                        $('#stud_font2_cont').val('');
                        $('#stud_font2_link').val('');
                        $('#stud_file_2_preview').attr('src','');
                        $('#stud_file_2_pre').val('');

                        $('#stud_font3_tit').val('');
                        $('#stud_font3_cont').val('');
                        $('#stud_font3_link').val('');
                        $('#stud_file_3_preview').attr('src','');
                        $('#stud_file_3_pre').val('');
                    }

                    if(data.list!='' && data.list.length > 0){
                        $('.page1_alarm_bar').addClass('active');
                        $('.page1_alarm_bar span').text('Save  Appear');
                    }
                    else
                    {
                        $('.page1_alarm_bar').removeClass('active');
                        $('.page1_alarm_bar span').text('No Save No Appear');
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
            $('#advan_file').trigger('click');
        });
        $('#advan_file').change(function(){
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#advan_file_preview').attr('src', e.target.result);
                }
                reader.readAsDataURL(this.files[0]);
            }
        });
    }


    function getAdvanData()
    {
        if(transedlang=='')
        {
            return;
        }
        var deviceval = Device_Area.getSelectedDevice();
        if(deviceval==null || deviceval == "")
        {
            return;
        }

        $.ajax({
            url: 'admin.getAdvanData',
            data:{
                transLang:transedlang,
                device:deviceval
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if(data.msg=="ok")
                {
                    if(data.advan!='')
                    {
                        $('#advan_file_preview').attr('src','/uploads/images/wesimg/'+data.advan);
                        $('#advan_file_pre').val(data.advan);
                    }
                    else{
                        $('#advan_file_preview').attr('src','');
                        $('#advan_file_pre').val('');
                    }

                    if(data.advan!='' && data.advan.length > 0){
                        $('.page1_alarm_bar').addClass('active');
                        $('.page1_alarm_bar span').text('Save  Appear');
                    }
                    else
                    {
                        $('.page1_alarm_bar').removeClass('active');
                        $('.page1_alarm_bar span').text('No Save No Appear');
                    }

                }
                else
                {
                    myjs.data.showAlert(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    export default {
        name: "WebsWesGlobalPagesIndex",
       /* components: {
            CKEditor
        },*/
        data(){
            return {
                pageid:'webs-wesglobal-pages-index-fav',
                mu_webs:'',
                musu_webs_weschina:'',
                mususu_webs_wesglobal_pages:'',
                musususu_webs_wesglobal_pages_index:'',
                pgtxt_translation:'',
                pgtxt_save:'',
                pgtxt_preview:'',
                pgtxt_release:'',
                pgtxt_korean:'',
                pgtxt_chinese:'',
                pgtxt_english:'',
                pgtxt_nosavenoappear:'',
                pgtxt_slider:'',
                pgtxt_teacher:'',
                pgtxt_student:'',
                pgtxt_advanced:'',
                pgtxt_basicstring:'',
                pgtxt_css:'',
                pgtxt_bar:'',
                pgtxt_image:'',
                pgtxt_size:'',
                pgtxt_navigation:'',
                pgctl_dots:'',
                pgctl_blocked:'',
                pgtxt_pleaseenter:'',
                pgtxt_seconds:'',
                pgctl_fromrighttoleft:'',
                pgctl_fromlefttoright:'',
                pgtxt_picture:'',
                pgtxt_character:'',
                pgtxt_set:'',
                btntxt_edit:'',
                btntxt_savechanges:'',
                pgtxt_icon:'',
                pgtxt_font:'',
                pgtxt_title:'',
                pgtxt_link:'',
                pgtxt_content:'',
                pgtxt_background:'',
                pgtxt_slidingtime:'',
                pgtxt_createpicture:'',
                pgtxt_name:'',
                pgtxt_style:'',
                pgtxt_playingtime:'',
                btntxt_add:'',
                pgtxt_index:'',
                pgtxt_login:'',
                pgtxt_page:'',
                pgtxt_capacity:'',
                pgtxt_format:'',
                pgtxt_error:'',
                pgtxt_dbsaved:'',
                pgtxt_previewpage:'',
                pgtxt_releasesuccess:'',
                btntxt_ok:'',
                btntxt_cancel:'',
                pgtxt_wantdeleteitem:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
                pgtxt_plsselectdevicetype:'',
                pgtxt_selectlanguagesave:'',
                pgtxt_plsselectsliderimageset:'',
                pgtxt_adaptative:'',
                pgtxt_changedevice:'',
                pgtxt_adddevice:'',
                pgtxt_alldevices:'',
                pgtxt_shouldonedevice:'',
                pgtxt_devicepagedeleteconfirm:'',

            }
        },
        created() {
        },
        beforeMount(){
        },
        computed: {
            cmususu_webs_wesglobal_pages:function () {
                return this.mususu_webs_wesglobal_pages
            },
            cmusususu_webs_wesglobal_pages_index:function () {
                return this.musususu_webs_wesglobal_pages_index
            },
            cmu_webs:function () {
                return this.mu_webs
            },
            cmusu_webs_weschina:function () {
                return this.musu_webs_weschina
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
            cpgtxt_korean:function () {
                return this.pgtxt_korean
            },
            cpgtxt_chinese:function () {
                return this.pgtxt_chinese
            },
            cpgtxt_english:function () {
                return this.pgtxt_english
            },
            cpgtxt_basicstring:function () {
                return this.pgtxt_basicstring
            },
            cpgtxt_nosavenoappear:function () {
                return this.pgtxt_nosavenoappear
            },
            cpgtxt_slider:function () {
                return this.pgtxt_slider
            },
            cpgtxt_teacher:function () {
                return this.pgtxt_teacher
            },
            cpgtxt_student:function () {
                return this.pgtxt_student
            },
            cpgtxt_advanced:function () {
                return this.pgtxt_advanced
            },
            cpgtxt_css:function () {
                return this.pgtxt_css
            },
            cpgtxt_bar:function () {
                return this.pgtxt_bar
            },
            cpgtxt_playingtime:function () {
                return this.pgtxt_playingtime
            },
            cpgtxt_size:function () {
                return this.pgtxt_size
            },
            cpgtxt_navigation:function () {
                return this.pgtxt_navigation
            },
            cpgctl_dots:function () {
                return this.pgctl_dots
            },
            cpgctl_blocked:function () {
                return this.pgctl_blocked
            },
            cpgtxt_pleaseenter:function () {
                return this.pgtxt_pleaseenter
            },
            cpgtxt_seconds:function () {
                return this.pgtxt_seconds
            },
            cpgctl_fromrighttoleft:function () {
                return this.pgctl_fromrighttoleft
            },
            cpgctl_fromlefttoright:function () {
                return this.pgctl_fromlefttoright
            },
            cpgtxt_picture:function () {
                return this.pgtxt_picture
            },
            cpgtxt_character:function () {
                return this.pgtxt_character
            },
            cpgtxt_set:function () {
                return this.pgtxt_set
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit
            },
            cbtntxt_savechanges:function () {
                return this.btntxt_savechanges
            },
            cpgtxt_icon:function () {
                return this.pgtxt_icon
            },
            cpgtxt_font:function () {
                return this.pgtxt_font
            },
            cpgtxt_title:function () {
                return this.pgtxt_title
            },
            cpgtxt_link:function () {
                return this.pgtxt_link
            },
            cpgtxt_content:function () {
                return this.pgtxt_content
            },
            cpgtxt_background:function () {
                return this.pgtxt_background
            },
            cpgtxt_image:function () {
                return this.pgtxt_image
            },
            cpgtxt_createpicture:function () {
                return this.pgtxt_createpicture
            },
            cpgtxt_name:function () {
                return this.pgtxt_name
            },
            cpgtxt_style:function () {
                return this.pgtxt_style
            },
            cpgtxt_slidingtime:function () {
                return this.pgtxt_slidingtime
            },
            cbtntxt_add:function () {
                return this.btntxt_add
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
            cpgtxt_capacity:function(){
                return this.pgtxt_capacity
            },
            cpgtxt_format:function(){
                return this.pgtxt_format
            },
            cpgtxt_error:function () {
                return this.pgtxt_error
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
            /* fav part*/
            pgperm = nav_module.data.getPagePermission(this.$store.state.permission, this.pageid);
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            Device_Area = new DevCls.data.deviceCLS(vueOBJ, pgperm, tabstatus, this.pageid);
            //Device_Area.generateTag();
            this.getWWGStoredLang();
            this.initpage();
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
                axios.post('admin.getWWGStoredLang').then(function(response){
                    let msg = response.data.msg;
                    if(msg =="ok")
                    {
                        if(response.data.langlist!=''){
                           var stored_langs = $.parseJSON(response.data.langlist);
                            Device_Area.initPageLangs(stored_langs);//add ckd
                            var tags='';
                            var flag=false;
                            for (var j = 0; j < stored_langs.length; j++)
                            {
                                var active="";
                                var obj = stored_langs[j];
                                var iso = obj.iso;
                                var dialCode = obj.dialcode;
                                var cname = obj.name;
                                var status = obj.status;
                                var dcont=iso+'-'+dialCode+'-'+cname;
                                if(status=='enable')
                                {
                                    if(!flag){
                                        active="active";
                                        transedlang = iso+'-'+dialCode;
                                        flag=true;
                                    }
                                    tags +='<span class="page1_translate_span '+active+'" style="cursor: pointer" data-cont="'+dcont+'">'+cname+'</span>&nbsp;&nbsp;&nbsp;';
                                }
                            }
                            $('#translanglist').html(tags);

                            $('.page1_translate_span').click(function () {
                                $('.page1_translate_span').removeClass('active');
                                $(this).addClass('active');
                                var cont = $(this).attr('data-cont');
                                var len= cont.split('-').length;
                                if(len > 0){
                                    var sky = cont.split('-')[0]+'-'+cont.split('-')[1];
                                     transedlang = sky;
                                    $('.page1_alarm_bar').removeClass('active');
                                    $('.page1_alarm_bar span').text('No Save No Appear');

                                    if(wwgfield=='sliderbar')
                                        getSliderList();
                                    else if(wwgfield=='teacherbar')
                                        getTeacherData();
                                    else if(wwgfield=='studentbar')
                                        getStudentData();
                                    else if(wwgfield=='advancedbar')
                                        getAdvanData();
                                }
                            });
                        }

                    }
                }).catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                    vueOBJ.PageInitByDevice_Area();
                });

            },
            initpage() {
                this.sliderTabs();
            }//initpage
            ,loaddata(){
            },
            sliderTabs()
            {
                $('.page1_content_side_bar div.page1_content_side_bar_text').click(function()
                {
                    $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
                    $(this).addClass('page1_content_side_bar_seleted');
                    var subid=$(this).attr('data-target');
                    $('.col-md-12.page_slider_content_list').removeClass('active');
                    $('#'+subid).addClass('active');

                    $('.page1_alarm_bar span').text('No Save No Appear');
                    $('.page1_alarm_bar').removeClass('active');

                    if(transedlang==null || transedlang=="")
                       InitFirstLang();

                    if(subid=='sliderbar')
                    {
                        tabstatus=0;
                        wwgfield = 'sliderbar';
                        getSliderList();
                    }
                    else if(subid=='teacherbar'){
                        tabstatus=1;
                        wwgfield = 'teacherbar';
                        getTeacherData();
                    }
                    else if(subid=='studentbar'){
                        tabstatus=2;
                        wwgfield = 'studentbar';
                        getStudentData();
                    }
                    else if(subid=='advancedbar'){
                        tabstatus=3;
                        wwgfield = 'advancedbar';
                        getAdvanData();
                    }

                    Device_Area.setPageOBJTabStatue(tabstatus);
                });

                initTeacher();
                initStudent();
                initAdvan();

                $('#new_image_file_dlg').change(function(){
                    if (this.files && this.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                           $('#new_image_file_dlg_preview').attr('src', e.target.result);
                        }
                        reader.readAsDataURL(this.files[0]); // convert to base64 string
                    }
                });
            },
            picmodalAddBtn(){
                var deviceval = Device_Area.getSelectedDevice();
                if(deviceval==null || deviceval == "")
                {
                    myjs.data.showAlert('pgtxt_plsselectdevicetype');
                    return;
                }

                if(transedlang=='')
                {
                    myjs.data.showAlert('pgtxt_selectlanguagesave');
                    return;
                }

                if(selected_image_name == '')
                {
                    myjs.data.showAlert('pgtxt_plsselectsliderimageset');
                    return;
                }
                $("#myAddPicModal").modal('show');
            },
            addpicmodalclose(){
                var deviceval = Device_Area.getSelectedDevice();
                if(deviceval==null || deviceval == "")
                {
                    myjs.data.showAlert('pgtxt_plsselectdevicetype');
                    return;
                }
                /*if(deviceval.length > 1){
                    var tmp =[];
                    for(var i=0;i<deviceval.length;i++)
                        tmp.push(deviceval.charAt(i));
                    deviceval = tmp.join(",");
                }*/
                if(transedlang=='')
                {
                    $("#myAddPicModal").modal('hide');
                    myjs.data.showAlert('pgtxt_selectlanguagesave');
                    return;
                }

                var file =$('#new_image_file_dlg').val();
                if(file==null || file==''){
                    $("#myAddPicModal").modal('hide');
                    return;
                }

                $('#slider_img_transLang').val(transedlang);
                var formData = new FormData($("#slider_img_frm")[0]);
                formData.append('device', deviceval);
                $.ajax({
                    url: 'admin.wwgpsliderupload',
                    type: 'POST',
                    data: formData,
                    async: false,
                    success: function (data) {
                        if(data.msg=="ok"){
                            $('#new_image_file_dlg').val('');
                            $('#new_image_file_dlg_preview').attr('src', '/images/icons/image_tp.png');
                            $('#pic_name').val('');
                            $('#pic_link').val('');

                            sliderPanelInit(data.list);
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
                $("#myAddPicModal").modal('hide');
            },
            getsliderimgfromfile(){
                $('#new_image_file_dlg').trigger('click');
            },
            SavePageContent(){
                if(pgperm.write != 1){
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }
                if(transedlang=='')
                {
                    myjs.data.showAlert('pgtxt_selectlanguagesave');
                    return;
                }
                var deviceval = Device_Area.getSelectedDevice();
                //var deviceval = Device_Area.getPageDevices();
                if(deviceval==null || deviceval == "" || deviceval.split(",").length == 0)
                {
                    myjs.data.showAlert('pgtxt_plsselectdevicetype');
                    return;
                }


                var pgtxt_dbsaved= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
                if(tabstatus==0)
                {
                    var snav= $('#slider_navication').val();
                    var sptime=  $('#slider_playtime').val();
                    var stime=  $('#slider_sliding_time').val();
                    var sdir=  $('#slider_sliding_dir').val();
                    var cond=  $('#selCondition').val();

                    var pagesliders = [];
                    $('#picture-container button.panelEditBtn').each(function () {
                         var fname = $(this).data('fname');
                         var name  =$(this).data('name');
                         var link  =$(this).data('link');
                            var obj={
                                fname:fname,
                                name:name,
                                link:link
                            };
                          pagesliders.push(obj);
                        }
                    );

                    //console.log(pagesliders);
                    $.ajax({
                        url: 'admin.wwgpSliderStatus',
                        type: 'POST',
                        data: {
                            snav:snav,
                            sptime:sptime,
                            stime:stime,
                            sdir:sdir,
                            tansLang:transedlang,
                            wwgfield:wwgfield,
                            device:deviceval,
                            cond:cond,
                            pageslider:pagesliders
                        },
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
                        }
                    });
                }
                else if(tabstatus==1 || tabstatus==2)
                {
                    var formData ='';
                    if(tabstatus==1){
                        $("#teach_frm_transLang").val(transedlang);
                        formData = new FormData($("#teach_frm")[0]);
                        formData.append('device', deviceval);
                    }
                    else{
                        $("#stud_frm_transLang").val(transedlang);
                        formData = new FormData($("#stud_frm")[0]);
                        formData.append('device', deviceval);
                    }
                    $.ajax({
                        url: 'admin.wwgpTSupload',
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
                else if(tabstatus==3)
                {
                    $("#advan_frm_transLang").val(transedlang);
                    var formData = new FormData($("#advan_frm")[0]);
                    formData.append('device', deviceval);
                    $.ajax({
                        url: 'admin.wwgpAdvanupload',
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

            }//save
            ,PagePreview(){
                $("#previewModalModalbody").html('');
                var iframeH = $(window).height()-100;
                var lang = "";
                if(transedlang=='')
                    lang = "en";
                else
                    lang = transedlang.split("-")[0];
                $("#previewModalModalbody").html('<iframe src="/'+lang+'/preview" style="border:none;width:100%; height: '+iframeH+'px;" title="preview"></iframe>');
                $("#previewModal").modal('show');
            },
            PageRelease(){
                if(pgperm.write != 1){
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }
                if(transedlang=='')
                {
                    myjs.data.showAlert('pgtxt_selectlanguagesave');
                    return;
                }

                //var deviceval = Device_Area.getPageDevices();
                var deviceval = Device_Area.getSelectedDevice();
                if(deviceval==null || deviceval == "" || deviceval.split(",").length == 0)
                {
                    myjs.data.showAlert('pgtxt_plsselectdevicetype');
                    return;
                }

                var pgtxt_releasesuccess= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_releasesuccess');
                var pgtxt_release= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_release');

                myjs.data.Confirm('pgtxt_release',function (val) {
                    if(val){
                        $.ajax({
                            url: 'admin.websGlobalFrontPageRelease',
                            type: 'POST',
                            data: {
                                trans:transedlang,
                                part:"index",
                                tabstatus:tabstatus,
                                release:1,
                                device:deviceval
                            },
                            success: function (data) {
                                if(data.msg=="ok"){
                                    myjs.data.showAlert(pgtxt_releasesuccess);
                                }
                                else
                                    myjs.data.showAlert(data.msg);
                            },
                            error: function (jqXHR, errdata, errorThrown) {
                                console.log(errdata);
                            },
                        });
                    }
                    else{
                        $.ajax({
                            url: 'admin.websGlobalFrontPageRelease',
                            type: 'POST',
                            data: {
                                trans:transedlang,
                                part:"index",
                                tabstatus:tabstatus,
                                release:0,
                                device:deviceval
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
            slider_image_add(){
                if(selected_id != "")
                {
                    $.ajax({
                        url: 'admin.setSiteLogoStyleState',
                        type: 'POST',
                        data: {
                            id:selected_id
                        },
                        async: true,
                        success: function (data) {
                            if(data.msg=="ok"){
                                $('#sliderimage_dlg_list').html('');
                                $("#sliderModal").modal('hide');
                                $('#image_size').text(selected_image_size+'px');
                                $('#selected_image_name').text(selected_image_name);
                            }
                            else
                                myjs.data.showAlert(data.msg);
                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        }
                    });
                }
            },
            deleteListByDevice(key,pgename){
                myjs.data.Confirm('pgtxt_devicepagedeleteconfirm?',function (val) {
                    if(val){
                      /*  var tmp =[];
                        for(var i=0;i<param.length;i++)
                            tmp.push(param.charAt(i));
                       var deviceval = tmp.join(",");*/
                        $.ajax({
                            url: 'admin.deletefrontpageStatesByDevice',
                            type: 'POST',
                            data: {
                                device:key,
                                pagename:pgename
                            },
                            async: true,
                            success: function (data) {
                                if(data.msg=="ok"){
                                    $('#picture-container').html('');
                                    $("#slider_img_panel_frm")[0].reset();
                                    if(device!=null)
                                      Device_Area.devicePageDelete(key);//call device_area.
                                }
                                else
                                    myjs.data.showAlert(data.msg);
                            },
                            error: function (jqXHR, errdata, errorThrown) {
                                console.log(errdata);
                            }
                        });
                    }
                });
            },//no call, no use
            PageInitByDevice_Area(){
              if(transedlang==null || transedlang=="")
                  InitFirstLang();
               if(tabstatus==0)
                {
                    wwgfield = 'sliderbar';
                    getSliderList();
                }
                else if(tabstatus==1){
                    wwgfield = 'teacherbar';
                    getTeacherData();
                }
                else if(tabstatus==2){
                    wwgfield = 'studentbar';
                    getStudentData();
                }
                else if(tabstatus==3){
                    wwgfield = 'advancedbar';
                    getAdvanData();
                }
            },

        }//method


    }
</script>

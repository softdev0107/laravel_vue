<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_users_org_applicants}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_users}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_users_org}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_users_org_china}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_users_org_applicants}}
                          <a href="#" id="users-organization-china-applicants-fav" data-status="off" data-page-info="Applicants_users-organization-china-applicants">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
            </div>
        </div>

        <div class="row" id="applyuser_list" style="display: block;">
            <div class="col-md-12" style="margin-bottom: 30px;">
                <div class="page1_content_content_bar">
                    <div class="page1_content_content_title" style="padding: 0px; border: 0px; display: flex; height: auto;">
                        <div class="col-md-12" style="padding: 0px;">
                            <div style="flex-grow: 1; margin-left:15px; font-size: 1rem;">{{cpgtxt_filters}}</div>
                            <div class="page2_content_text" style="padding: 20px 30px;">
                                <div class="row mb-3">
                                    <div class="col-auto" style="width: 90px;">
                                        <span>{{cpgtxt_startdate}}</span>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="input-group" style="width: 100%">
                                            <input type="text" class="form-control page2_input" name="startdate_datapicker" id="startdate_datapicker" autocomplete="off">
                                            <div class="input-group-append input-group-append-my" id="startdate_datapicker_icon">
                                                <span class="input-group-text input-group-text-my" id="datapicker_start">
                                                    <i class="far fa-calendar-alt" style="font-size: 18px;"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto" style="width: 90px;">
                                        <span>{{cpgtxt_enddate}}</span>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="input-group" style="width: 100%">
                                            <input type="text" class="form-control page2_input" name="enddate_datapicker" id="enddate_datapicker" autocomplete="off">
                                            <div class="input-group-append input-group-append-my" id="enddate_datapicker_icon">
                                                <span class="input-group-text input-group-text-my" id="datapicker_end">
                                                    <i class="far fa-calendar-alt" style="font-size: 18px;"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-auto" style="width: 90px;">
                                        <span>{{cpgtxt_sua_State}}</span>
                                    </div>
                                    <div class="col-md-3">
                                        <select class="form-control w-75 page2_select" id="uoa_state_sel" name="uoa_state_sel">
                                            <option value="0">{{cpgtxt_all}}</option>
                                            <option value="1">{{cpgtxt_pending}}</option>
                                            <!--<option value="2">{{cpgtxt_approval}}</option>-->
                                            <option value="3">{{cpgtxt_failed}}</option>
                                        </select>
                                    </div>
                                    <div class="col-auto" style="width: 90px;">
                                        <span>{{cpgtxt_search}}</span>
                                    </div>
                                    <div class="col-md-5" style="display: flex;">
                                        <div style="width: 100%;">
                                            <input type="text" class="form-control" id="uoa_search_cont" name="uoa_search_cont" style="height: calc(1.5em + .75rem + 6px); padding-left:160px;">
                                            <span class="btn" id="uoa_search_btn" style="padding: 5px; right: 20px; margin-top: -32px; position: absolute;"><i class="ti-search"></i></span>
                                        </div>

                                        <div  style="display: flex;flex-direction: row;width: 150px;position: absolute; border-right: 1px solid #fff;">
                                            <select class="form-control w-100 select-noneborder-rightcolor" id="uoa_search_items" name="uoa_search_items" style="border-bottom: 0px;" >
                                                <option value="0">{{cpgtxt_contacts}}</option>
<!--                                                <option value="1">{{cpgtxt_email}}</option>
                                                <option value="2">{{cpgtxt_mobile}}</option>-->
                                                <option value="3">{{cpgtxt_area}}</option>
                                                <option value="4">{{cpgtxt_organization}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-12 page_slider_content_list active" id="uoa_list">
                <div class="page1_content_content_bar">
                    <div class="page1_content_content_title" style="padding: 0px; border: 0px;">
                        <div class="col-md-12" style="display: flex; flex-direction: row; align-items: center; padding: 0px;">
                            <div style="flex-grow: 1; margin-left:15px; font-size: 1rem;">{{cpgtxt_list}}</div>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <table class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                            <thead>
                            <tr role="row" style="border-bottom: 1px solid #e4e2e2;">
                                <th style="border: 0; width: 100px;">{{cpgtxt_organization}}</th>
                                <th style="border: 0; width: 80px;"></th>
                                <th style="border: 0;">{{cpgtxt_area}}</th>
                                <!--<th style="border: 0;">{{cpgtxt_contacts}}</th>
                                <th style="border: 0;">{{cpgtxt_email}}</th>
                                <th style="border: 0;">{{cpgtxt_mobile}}</th>-->
                                <th style="border: 0;">{{cpgtxt_date}}</th>
                                <th style="border: 0;">{{cpgtxt_sua_State}}</th>
                                <th style="border: 0;">{{cpgtxt_system_esuser}}</th>
                                <th style="border: 0; text-align: right; padding-right: 40px;">{{cpgtxt_option}}</th>
                            </tr>
                            </thead>
                            <tbody id="user_content_lists">

                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 text-center" >
                        <div id="ssmu_page_nav" style="width: 100%;">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" id="applyuser_edit" style="display: none;">
            <div class="col-md-12" style="margin-bottom: 30px;">
                <div class="page1_content_content_bar">
                    <div class="page1_content_content_title" style="padding: 0px; border: 0px; display: flex; height: auto;">
                        <div class="col-md-12" style="padding: 0px;">
                            <div style="flex-grow: 1; margin-left:15px; font-size: 1rem; display: flex;">{{cpgtxt_setting}}
                                <p id="ssmu_alert" style="display: none; padding:5px 10px; height: 35px; border-radius:20px; width: auto; opacity: 0.8; margin-left: 120px; margin-top: 10px;">SMS alram area.</p>
                            </div>
                            <input type="hidden" id="edit_country_code" name="country_code" value=""/>
                            <input type="hidden" id="edit_country_name" name="country_name" value=""/>
                            <div class="page2_content_text" style="padding: 20px 30px; color: #656262;">
                                <div class="row mb-3">
                                    <div class="col-auto" style="width: 185px;">
                                        <span>{{cpgtxt_contacts}}</span>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="page2_input" name="applyuser_edit_contact" id="applyuser_edit_contact"></div>
                                    </div>
                                    <div class="col-auto" style="width: 100px;">
                                        <span>{{cpgtxt_email}}</span>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="page2_input" name="applyuser_edit_email" id="applyuser_edit_email"></div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-auto" style="width: 185px;">
                                        <span>{{cpgtxt_mobile}}</span>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="input-group " id="applyuser_edit_mobile">
                                            <div class="input-group-text dropdown-toggle" id="mobileDropdownBtn" aria-expanded="false" style="">
                                                <div class="iti__flag iti__cn" style="margin-right:8px"></div>
                                                <div class="iti__selected-dial-code" style="font-size: 13px;"></div>
                                                <div name="u_mobile_phone" id="u_mobile_phone"></div>
                                                <div style="width: 30%; float: right;">
                                                    <span class="input-group-text" id="u_mobile_country">'+country_name+'</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto" style="width: 100px;">
                                        <span>{{cpgtxt_organization}}</span>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="page2_input" name="applyuser_edit_organization" id="applyuser_edit_organization"></div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-auto" style="width: 185px;">
                                        <span>{{cpgtxt_businessnumber}}</span>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="page2_input" name="applyuser_edit_businessnumber" id="applyuser_edit_businessnumber"></div>
                                    </div>
                                    <div class="col-auto" style="width: 100px;">
                                        <span>{{cpgtxt_date}}</span>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="page2_input" name="applyuser_edit_datepicker" id="applyuser_edit_datepicker"></div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-auto" style="width: 185px;">
                                        <span>{{cpgtxt_businesslicense}}</span>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="input-group" style="width: 100%" id="applyuser_edit_upload_image">
                                            <input type="text" class="form-control page2_input" readonly name="applyuser_edit_businesslicense" id="applyuser_edit_businesslicense">
                                            <div>
                                                <svg t="1613981101588" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3390" width="20" height="20">
                                                    <path d="M800 97H224c-70.03 0-127 56.97-127 127v576c0 70.03 56.97 127 127 127h160.08c17.12 0 31-13.88 31-31s-13.88-31-31-31H224c-35.84 0-65-29.16-65-65V224c0-35.84 29.16-65 65-65h576c35.84 0 65 29.16 65 65v159.68c0 17.12 13.88 31 31 31s31-13.88 31-31V224c0-70.03-56.97-127-127-127z" p-id="3391"></path>
                                                    <path d="M796.92 751.37c28.93-38.52 44.58-85.13 44.58-134.16 0-59.83-23.3-116.08-65.61-158.39-42.31-42.31-98.56-65.61-158.39-65.61-59.83 0-116.08 23.3-158.39 65.61-42.31 42.31-65.61 98.56-65.61 158.39s23.3 116.08 65.61 158.39c42.31 42.31 98.56 65.61 158.39 65.61 49.03 0 95.65-15.66 134.17-44.58l91.63 91.8c6.25 6.26 14.45 9.39 22.65 9.39 8.18 0 16.36-3.12 22.61-9.35 12.51-12.49 12.53-32.75 0.04-45.25l-91.68-91.85z m-65.45-21.87c-0.27 0.26-0.55 0.51-0.82 0.78-0.29 0.29-0.56 0.58-0.84 0.88-62.45 61.57-163.34 61.31-225.45-0.8-30.22-30.22-46.86-70.4-46.86-113.14s16.64-82.92 46.86-113.14c31.2-31.2 72.16-46.79 113.14-46.79 40.97 0 81.95 15.6 113.14 46.79 30.22 30.22 46.86 70.4 46.86 113.14 0 42.33-16.34 82.16-46.03 112.28z" p-id="3392"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto" style="width: 100px;">
                                        <span>{{cpgtxt_sua_State}}</span>
                                    </div>
                                    <div class="col-md-4">
                                        <select class="form-control w-75 page2_select" id="applyuser_edit_state_sel" name="applyuser_edit_state_sel">
                                            <option value="1">{{cpgtxt_pending}}</option>
                                            <option value="2">{{cpgtxt_approval}}</option>
                                            <option value="3">{{cpgtxt_failed}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-auto" style="width: 185px;">
                                        <span>{{cpgtxt_remark}}</span>
                                    </div>
                                    <div class="col-md-9">
                                        <textarea name="applyuser_edit_remark" id="applyuser_edit_remark" value="" style="padding: 0 10px;"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-end" style="padding-bottom: 1.5rem;">
                    <div class="col-md-4 col-sm-4 text-right">
                        <button type="button" class="btn btn-info-theme active savebtn" @click.stop="saveApplyUserBtn">{{ cbtntxt_savechange }}</button>
                    </div>
                    <div class="col-md-2 col-sm-2">
                        <button type="button" class="btn btn-info-theme" @click.stop="gotoApplyUserList">
                            {{cbtntxt_cancel}}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!--start modal-->
        <div class="modal fade" id="businessLisenceModal">
            <div class="modal-dialog modal-dialog-centered modal-sm applicant" style="min-width: 500px!important; text-align: center;">
                <div class="modal-body" id="businessLisenceModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                    <div class="row">
                        <div style="display:flex; margin: 0 auto; background-color: #ffffff; border-radius: 20px; padding: 5px 20px;">
                            <h6 class="modal-title" id="Modal_Title">{{cpgtxt_businessnumber}} : </h6>
                            <div name="modal_businessLisence" id="modal_businessLisence" style="font-size: 15px;"></div>
                        </div>
                        <div class="col-12 mt-3">
                            <img src="" id="businessLisenceImage" onerror="this.src ='/images/noimg.png';">
                        </div>
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
    .input-group-append-my span{
        border-top-right-radius:1.25rem;
        border-bottom-right-radius:1.25rem;
        background-color: #d6d6d6;
    }
    #applyuser_edit_businesslicense{
        border-top-right-radius:1.25rem;
        border-bottom-right-radius:1.25rem;
        background-color: #d6d6d6;
    }
    #applyuser_edit_upload_image div{
        position: absolute;
        cursor: pointer;
        width: 96%;
        z-index: 100;
        text-align: right;
        margin-top: -2px;
    }

    #u_mobile_phone {
        font-size: 14px;
        margin: 0 20px;
    }
    #mobileDropdownBtn{
        width: 100%;
        background-color:#d6d6d6;
        border-right: 0;
        height: 36px;
        border-radius: 20px;
    }
    .dropdown-toggle::after{
        display: none;
    }
    #u_mobile_country{
        background-color:#d6d6d6;
        border-left: 1px solid #fff;
        font-size: 13px;
    }
    #applyuser_edit_remark{
        height: 50px;
        width: 100%;
        border-radius: 20px;
    }
    #businessLisenceImage{
        max-width: 100%;
    }
    @media (min-width: 576px){
        .modal-dialog.modal-dialog-centered.modal-sm.applicant{
            max-width: 80%;
        }
    }

</style>

<script>
    import lang_module from "../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";
    import media_module from "../../assets/jsfunc/media_module";
    import mjs_module from "../../assets/jsfunc/mjs_module";

    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var preview='';
    var tabstatus=0;
    var vueOBJ=null;
    var pstart = 1;
    var pnum = pstart;
    var pcnt=5;
    var numg = 5;
    var pgperm={};
    var edit_id;


    function pageNavigation(totalpage) {
        var nav_tag='';
        nav_tag+='<nav aria-label="..." class="mb-4">';
        nav_tag+='<ul class="pagination pagination-rounded justify-content-center">';

        var disble="";
        if(pstart==1)
            disble="disabled"

        var prenum= parseInt(pstart) - 1;

        nav_tag+='<li class="page-item  '+disble+' ">';
        nav_tag+='<a class="page-link" href="#"  id="ssmunavnum_' + prenum + '" >';
        nav_tag+='<i class="ti-angle-left"></i>';
        nav_tag+='</a>';
        nav_tag+='</li>';

        var pnum = pstart <= numg ? 1 : parseInt(pstart) - 1;

        for(var idx = 0; idx < numg; idx++)
        {
            var actv="";
            var aria_current='';
            var spantag='';
            var oid='';

            if(pnum == pstart)
            {
                actv='active';
                aria_current='aria-current="page"';
                spantag='<span class="sr-only">(current)</span>';
            }
            else
                oid="ssmunavnum_" + pnum;

            nav_tag+='<li class="page-item ' + actv + '"  ' + aria_current + '>';
            nav_tag+='<a class="page-link" id="' + oid + '"  href="#" >' + pnum + '  ' + spantag + '</a>';
            nav_tag+='</li>';

            if(pnum == totalpage) break;

            pnum = pnum + 1;
        }

        var nextnum= parseInt(pstart) + 1;

        var edisble="";
        if(pstart == totalpage)
            edisble="disabled"

        nav_tag+='<li class="page-item '+edisble+' ">';
        nav_tag+='<a class="page-link" id="ssmunavnum_' + nextnum + '" href="#">';
        nav_tag+='<i class="ti-angle-right"></i>';
        nav_tag+='</a>';
        nav_tag+='</li>';

        nav_tag+='</ul>';
        nav_tag+='</nav>';

        $('#ssmu_page_nav').html(nav_tag);

        /* events { */
        $('a[id^="ssmunavnum_"]').click(function(){
            var oid = $(this).attr("id");
            pstart = oid.split('_')[1];
            getApplyUsersList();
        });
    }

    function initSearchContent(){
        $('#startdate_datapicker').val('');
        $('#enddate_datapicker').val('');
        $('#uoa_state_sel').val(0);
        $('#uoa_search_items').val(0);
        $('#uoa_search_cont').val('');
    }

    function showApplyList(lists){
        var pgtxt_pending= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_pending');
        var pgtxt_approval= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_approval');
        var pgtxt_failed= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_failed');
        var btntxt_edit= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
        var btntxt_change= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
        var btntxt_delete= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');

        $('#user_content_lists').html('');
        if(lists != null && lists != ''){
            var tags = '';
            for (var i = 0; i < lists.length; i++)
            {
                var item = lists[i];
                var id = item.id;
                var country_name = item.country_name;
                var admin_user = item.admin_user;
                var organization = item.organization;
                var date = item.created_at;

                tags+='<tr role="row" class="odd">';
                tags+='<td>'+organization+'</td>';
                if(admin_user == '')
                    tags+='<td style="color: red; font-size: 11px;">New</td>';
                else
                    tags+='<td></td>';
                tags+='<td>'+country_name+'</td>';
                tags+='<td>'+date+'</td>';
                if(item.ustate == 1)
                    tags+='<td class="data-ajax" data-ajax="pgtxt_pending">'+pgtxt_pending+'</td>';
                else if(item.ustate == 3)
                    tags+='<td class="data-ajax" data-ajax="pgtxt_failed">'+pgtxt_failed+'</td>';
                if(admin_user == '')
                    tags+='<td>-</td>';
                else
                    tags+='<td>'+admin_user+'</td>';
                tags += '   <td>';
                tags += '       <div class="form-group m-b-0">';
                tags += '           <select class="my-border-radius-slt form-control float-right" id="applyuser_edit_btn-'+id+'" name="applyuser_edit_btn-'+id+'">';
                tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit" >'+btntxt_edit+'</option>';
                tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change" >'+btntxt_change+'</option>';
                tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete" >'+btntxt_delete+'</option>';
                tags += '           </select>';
                tags += '       </div>';
                tags += '   </td>';
                tags+='</tr>';
            }

            $('#user_content_lists').html(tags);

            $('select[id^="applyuser_edit_btn-"]').click(function(){
                if(pgperm.write != 1){
                    myjs.data.showAlertHidden('pgtxt_notpermission');
                    return;
                }
                var id = $(this).attr('id');
                edit_id = id.split('-')[1];

                var sel_val = $(this).val();
                if (sel_val == "change") {
                    $('#applyuser_list').css('display', 'none');
                    $('#applyuser_edit').css('display', 'block');
                    editApplyUsersInfo();
                }
                else if (sel_val == "delete")
                {
                    if(pgperm.delete != 1){
                        myjs.data.showAlertHidden('pgtxt_notpermission');
                        return;
                    }
                    myjs.data.Confirm('pgtxt_wantdeleteitem',function (val) {
                        if(val){
                            deleteApplyUsersInfo();
                        }
                    });
                }

            });
        }
    }

    function getApplyUsersList(){
        var s_date = $('#startdate_datapicker').val();
        var e_date = $('#enddate_datapicker').val();
        var state = $('#uoa_state_sel').val();
        var search_item = $('#uoa_search_items').val();
        var search_cont = $('#uoa_search_cont').val();
        $.ajax({
            method: "POST",
            url: "admin.getApplyChinaUserInfoList",
            data: {
                pstart:pstart,
                pcnt:pcnt,
                s_date:s_date,
                e_date:e_date,
                state:state,
                search_item:search_item,
                search_cont:search_cont
            },
            success: function(data) {
                if(data.msg==="ok")
                {
                    var lists = data.lists;
                    showApplyList(lists);

                    pstart = data.pstart;
                    var total = data.total;
                    if(total <= 0){
                        console.log(total);
                        $('#ssmu_page_nav').html('');
                        return;
                    }
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);

                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function editApplyUsersInfo(){
        $('#applyuser_edit_contact').text('');
        $('#applyuser_edit_email').text('');
        $('#u_mobile_phone').text('');
        $('.iti__selected-dial-code').text('');
        $('#u_mobile_country').val('');
        $('#applyuser_edit_organization').text('');
        $('#applyuser_edit_businessnumber').text('');
        $('#applyuser_edit_businesslicense').val('');
        $('#applyuser_edit_state_sel').val('');
        $('#applyuser_edit_datepicker').text('');
        $('#applyuser_edit_remark').val('');

        $.ajax({
            method: "POST",
            url: "admin.editApplyUsersInfo",
            data: {
                id: edit_id,
                userid:userid,
                pstart:pstart
            },
            success: function(data) {
                if(data.msg==="ok")
                {
                    var lists = data.lists;
                    if(lists != null && lists != ''){
                        $('#applyuser_edit_contact').text(lists.uname);
                        $('#applyuser_edit_email').text(lists.uemail);
                        $('#u_mobile_phone').text(lists.umobile);
                        var code = '+' + lists.country_code;
                        $('.iti__selected-dial-code').text(code);
                        $('#u_mobile_country').val(lists.country_name);
                        $('#applyuser_edit_organization').text(lists.organization);
                        $('#applyuser_edit_businessnumber').text(lists.license_number);
                        $('#applyuser_edit_businesslicense').val(lists.license_img.replace('/uploads/images/users/', ''));
                        $('#applyuser_edit_state_sel').val(lists.ustate);
                        var datetime = lists.created_at.split(' ')[0];
                        var date = datetime.split('-')[0] + '/' + datetime.split('-')[1] + '/' + datetime.split('-')[2];
                        $('#applyuser_edit_datepicker').text(date);
                        $('#applyuser_edit_remark').val(lists.remark);

                        showMobileCountry(lists.country_code, lists.country_name);
                    }
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function deleteApplyUsersInfo(){
        var s_date = $('#startdate_datapicker').val();
        var e_date = $('#enddate_datapicker').val();
        var state = $('#uoa_state_sel').val();
        var search_item = $('#uoa_search_items').val();
        var search_cont = $('#uoa_search_cont').val();

        $.ajax({
            method: "POST",
            url: "admin.deleteApplyChinaUsersInfo",
            data: {
                id: edit_id,
                pstart:pstart,
                pcnt:pcnt,
                s_date:s_date,
                e_date:e_date,
                state:state,
                search_item:search_item,
                search_cont:search_cont
            },
            success: function(data) {
                if(data.msg==="ok")
                {
                    var lists = data.lists;
                    showApplyList(lists);

                    pstart = data.pstart;
                    var total = data.total;
                    if(total <= 0){
                        $('#ssmu_page_nav').html('');
                        return;
                    }
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);

                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function showMobileCountry(code, country_name){
        $('#edit_country_code').val(code);
        $('#edit_country_name').val(country_name);

        code = '+' + code;
        $('.iti__selected-dial-code').text(code);
        $('#u_mobile_country').text(country_name);
    }

    function initPage(){
        $('#startdate_datapicker').datepicker({
            regional:'en',
            changeMonth: true,
            changeYear: true,
            dateFormat: 'yy/mm/dd'
        });
        $('#enddate_datapicker').datepicker({
            regional:'en',
            changeMonth: true,
            changeYear: true,
            dateFormat: 'yy/mm/dd'
        });


        $('#uoa_search_btn').click(function (){
            getApplyUsersList();
        });

        $('#uoa_state_sel').click(function (){
            getApplyUsersList();
        });

        $('#applyuser_edit_upload_image').click(function (){
            $('#businessLisenceImage').attr('src', '/uploads/images/users/' + $('#applyuser_edit_businesslicense').val());
            $('#modal_businessLisence').text($('#applyuser_edit_businessnumber').text());
            $('#businessLisenceModal').modal('show');
        });
    }

    function show_fade_alert(text, n){
        $('#ssmu_alert').text(text).css({"background":"#000000", "color":"#ffffff"});

        $("#ssmu_alert").fadeIn(800, function(){
            setTimeout(function () {
                $("#ssmu_alert").fadeOut(1000);
                getApplyUsersList();
                $('#applyuser_list').css('display', 'block');
                $('#applyuser_edit').css('display', 'none');
            },3000);
        });
    }

    export default {
        name: "UsersOrgChinaApplicants",
        data(){
            return {
                pageid:'users-organization-china-applicants-fav',
                mu_users:'',
                musu_users_org:'',
                mususu_users_org_china:'',
                musususu_users_org_applicants:'',
                btntxt_edit:'',
                pgtxt_list:'',
                btntxt_savechange:'',
                btntxt_cancel:'',
                pgtxt_filters:'',
                pgtxt_startdate:'',
                pgtxt_enddate:'',
                pgtxt_sua_State:'',
                pgtxt_search:'',
                pgtxt_all:'',
                pgtxt_pending:'',
                pgtxt_approval:'',
                pgtxt_failed:'',
                pgtxt_contacts:'',
                pgtxt_email:'',
                pgtxt_mobile:'',
                pgtxt_area:'',
                pgtxt_organization:'',
                pgtxt_option:'',
                pgtxt_date:'',
                pgtxt_businessnumber:'',
                pgtxt_businesslicense:'',
                pgtxt_remark:'',
                pgtxt_setting:'',
                pgtxt_system_esuser:'',
            }
        },
        computed: {
            cmu_users:function () {
                return this.mu_users;
            },
            cmusu_users_org:function () {
                return this.musu_users_org;
            },
            cmususu_users_org_china:function () {
                return this.mususu_users_org_china;
            },
            cmusususu_users_org_applicants:function () {
                return this.musususu_users_org_applicants;
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit;
            },
            cpgtxt_list:function () {
                return this.pgtxt_list;
            },
            cbtntxt_savechange:function () {
                return this.btntxt_savechange;
            },
            cbtntxt_cancel:function () {
                return this.btntxt_cancel;
            },
            cpgtxt_filters:function () {
                return this.pgtxt_filters;
            },
            cpgtxt_startdate:function () {
                return this.pgtxt_startdate;
            },
            cpgtxt_enddate:function () {
                return this.pgtxt_enddate;
            },
            cpgtxt_sua_State:function () {
                return this.pgtxt_sua_State;
            },
            cpgtxt_search:function () {
                return this.pgtxt_search;
            },
            cpgtxt_all:function () {
                return this.pgtxt_all;
            },
            cpgtxt_pending:function () {
                return this.pgtxt_pending;
            },
            cpgtxt_approval:function () {
                return this.pgtxt_approval;
            },
            cpgtxt_failed:function () {
                return this.pgtxt_failed;
            },
            cpgtxt_contacts:function () {
                return this.pgtxt_contacts;
            },
            cpgtxt_email:function () {
                return this.pgtxt_email;
            },
            cpgtxt_mobile:function () {
                return this.pgtxt_mobile;
            },
            cpgtxt_area:function () {
                return this.pgtxt_area;
            },
            cpgtxt_organization:function () {
                return this.pgtxt_organization;
            },
            cpgtxt_option:function () {
                return this.pgtxt_option;
            },
            cpgtxt_date:function () {
                return this.pgtxt_date;
            },
            cpgtxt_businessnumber:function () {
                return this.pgtxt_businessnumber;
            },
            cpgtxt_businesslicense:function () {
                return this.pgtxt_businesslicense;
            },
            cpgtxt_remark:function () {
                return this.pgtxt_remark;
            },
            cpgtxt_setting:function () {
                return this.pgtxt_setting;
            },
            cpgtxt_system_esuser:function () {
                return this.pgtxt_system_esuser;
            },


            contentchange: function () {
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });

                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                return this.$store.state.contentchange;
            },
        },
        created() {
        },
        beforeMount(){
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
            initpage() {
                initPage();
                getApplyUsersList();
            },
            saveApplyUserBtn(){
                var email = $('#applyuser_edit_email').text();
                var state = $('#applyuser_edit_state_sel').val();
                var remark = $('#applyuser_edit_remark').val();

                $.ajax({
                    method: "POST",
                    url: "admin.saveApplyUsersInfo",
                    data: {
                        id: edit_id,
                        state: state,
                        remark: remark
                    },
                    success: function(data) {
                        if(data.msg==="act"){
                            $('#applyuser_list').css('display', 'block');
                            $('#applyuser_edit').css('display', 'none');
                            return;
                        }
                        if(data.msg==="ok")
                        {
                            edit_id = 0;
                            var email_str = encodeURIComponent(email);
                            let postData ={
                                emails: email_str,
                                title:data.title,
                                mailcont:data.mailcont
                            };
                            //current is window.location.hostname  : wes.local.com
                            var hostname = window.location.hostname;
                            var flag = hostname.indexOf('waaup.org');
                            var svurl = "admin.InvokeMail";

                            if(flag < 0)
                                svurl = 'https://www.waaup.org/admin.InvokeMail';
                            axios.post(svurl, postData)
                                .then((response) => {
                                    var type = response.data.status;
                                    if(type=="ok") {
                                        show_fade_alert('Success: send mail-' + email,1);
                                    }
                                    else
                                    {
                                        show_fade_alert('Error: send mail-' + email,0);
                                    }
                                }).catch(function (error) {
                                console.log(error);
                            })
                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            },
            gotoApplyUserList(){
                edit_id = 0;
                getApplyUsersList();
                $('#applyuser_list').css('display', 'block');
                $('#applyuser_edit').css('display', 'none');
            },
        }//method


    }
</script>

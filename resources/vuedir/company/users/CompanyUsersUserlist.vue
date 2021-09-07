<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusu_company_users_userlist}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_users}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_company_users_userlist}}
                          <a href="#" id="company-users-userlist-fav" data-status="off" data-page-info="User List_company-users-userlist">
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
                                        <span>{{cpgtxt_search}}</span>
                                    </div>
                                    <div class="col-md-5" style="display: flex;">
                                        <div style="width: 100%;">
                                            <input type="text" class="form-control" id="uoa_search_cont" name="uoa_search_cont" style="height: calc(1.5em + .75rem + 6px); padding-left:160px;">
                                            <span class="btn" id="uoa_search_btn" style="padding: 5px; right: 20px; margin-top: -32px; position: absolute;"><i class="ti-search"></i></span>
                                        </div>

                                        <div  style="display: flex;flex-direction: row;width: 150px;position: absolute; border-right: 1px solid #fff;">
                                            <select class="form-control w-100 select-noneborder-rightcolor" id="uoa_search_items" name="uoa_search_items" style="border-bottom: 0px;" >
                                                <option value="0">{{cpgtxt_username}}</option>
                                                <option value="1">{{cpgtxt_email}}</option>
                                                <option value="2">{{cpgtxt_mobile}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-12" id="CompanyUserAddLayout">
                <div class="card border-0 m-b-10 text-right">
                    <div>
                        <div class="btn btn-outline-light dash-my-btn-0 active p-l-r-30" @click.stop="addCompanyUser_Btn">
                            <span> {{cbtntxt_add}} </span>
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
                                <th style="border: 0; width: 100px;">{{cpgtxt_username}}</th>
                                <th style="border: 0;">{{cpgtxt_email}}</th>
                                <th style="border: 0;">{{cpgtxt_mobile}}</th>
                                <th style="border: 0;">{{cpgtxt_sua_State}}</th>
                                <th style="border: 0;">{{cpgtxt_time}}</th>
                                <th style="border: 0; text-align: right; padding-right: 40px;">{{cpgtxt_option}}</th>
                            </tr>
                            </thead>
                            <tbody id="user_content_lists">

                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2 col-sm-3" style="margin-bottom: 10px;">
                        <div class="row">
                            <div style="width: auto;padding-left: 15px">
                                <span>{{cpgtxt_setupthe}}</span>
                            </div>
                            <div class="col">
                                <div class="input-group" style="width: 95%">
                                    <select id="user_list_nav_cnt" name="user_list_nav_cnt" class="form-control page2_input">
                                        <option value="5" selected="selected">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="ssmu_page_nav" class="col-md-9 col-sm-12">

                    </div>
                </div>
            </div>
        </div>

        <!--start modal-->
        <div class="modal fade" id="addCompanyUserModal">
            <div class="modal-dialog modal-dialog-centered modal-sm applicant" style="width: 500px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="Modal_Title">{{cpgtxt_adduser}}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="AddCompanyUserModalbody" style="padding: 0px 0rem 2rem">
                        <div class="col-md-12" style="margin-top: 20px;">
                            <div class="row mb-3">
                                <div class="col-auto" style="width: 100px; text-align: center; line-height: 40px;">
                                    <span>{{cpgtxt_search}}</span>
                                </div>
                                <div class="col-md-9" style="display: flex;">
                                    <div style="width: 100%;">
                                        <input type="text" class="form-control" id="modal_search_cont" name="modal_search_cont" style="height: calc(1.5em + .75rem + 6px); padding-left:160px;">
                                        <span class="btn" id="modal_search_btn" style="padding: 5px; right: 20px; margin-top: -32px; position: absolute;"><i class="ti-search"></i></span>
                                    </div>

                                    <div style="display: flex;flex-direction: row;width: 150px;position: absolute; border-right: 1px solid #fff;">
                                        <select class="form-control w-100 select-noneborder-rightcolor" id="modal_search_items" name="uoa_search_items" style="border-bottom: 0px;" >
                                            <option value="0">{{cpgtxt_username}}</option>
                                            <option value="1">{{cpgtxt_email}}</option>
                                            <option value="2">{{cpgtxt_mobile}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3" id="modal_search_userinfo" style="border-top: 1px solid #c5c4c4;">
                                <div class="d-flex col-md-12" style="margin-top: 20px;">
                                    <div class="col-md-3" style="color: #000">{{cpgtxt_username}}</div>
                                    <div class="col-md-9" id="modal_username"></div>
                                </div>
                                <div class="d-flex col-md-12" style="margin-top: 20px;">
                                    <div class="col-md-3" style="color: #000">{{cpgtxt_email}}</div>
                                    <div class="col-md-5" id="modal_email"></div>
                                    <div class="col-md-4">
                                        <p id="sendemail_alert" style="display: none; padding:2px 10px; height: 25px; border-radius:20px; width: auto; opacity: 0.5; margin-bottom: 0px;">SMS alram area.</p>
                                    </div>
                                </div>
                                <div class="d-flex col-md-12" style="margin-top: 20px;">
                                    <div class="col-md-3" style="color: #000">{{cpgtxt_mobile}}</div>
                                    <div class="col-md-9" id="modal_mobile"></div>
                                </div>
                                <div class="d-flex col-md-12" style="margin-top: 20px;">
                                    <div class="col-md-3" style="color: #000">{{cpgtxt_area}}</div>
                                    <div class="col-md-9" id="modal_area"></div>
                                </div>
                            </div>
                            <div class="row mb-3" id="modal_search_error" style="border-top: 1px solid #c5c4c4;">
                                <div class="col-md-12" style="margin-top: 20px;">
                                    <div style="color: #000; text-align: center;">{{cpgtxt_nousersendlinkforregist}}</div>
                                </div>
                            </div>
                            <div class="row mb-3" id="modal_send_buttons">
                                <div class="d-flex col-md-12" style="margin-top: 20px;">
                                    <div class="col-md-6" style="text-align: center;">
                                        <div class="btn btn-outline-light dash-my-btn-0 active p-l-r-30" @click.stop="sendInvitation_Btn">
                                            <span> {{cbtntxt_send}} {{cpgtxt_invitation}}</span>
                                        </div>
                                    </div>
                                    <div class="col-md-6" style="text-align: center;">
                                        <div class="btn btn-outline-light dash-my-btn-0 active p-l-r-30" @click.stop="sendSMS_Btn">
                                            <span> {{cbtntxt_send}} {{cpgtxt_sms}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

    @media (min-width: 576px){
        .modal-dialog.modal-dialog-centered.modal-sm.applicant{
            max-width: 80%;
        }
    }

</style>

<script>
    import axios from 'axios'
    import nav_company from "../../assets/jsfunc/nav_company";
    import myjs from "../../assets/jsfunc/mjs_module";

    var useraccount = nav_company.data.jsonparse(window.Laravel.useraccount);
    var status = nav_company.data.jsonparse(window.Laravel.status);
    var userid = atob(useraccount.uid);

    var preview='';
    var tabstatus=0;
    var vueOBJ=null;
    var pstart = 1;
    var pnum = pstart;
    var pcnt=5;
    var numg = 5;
    var edit_id;
    var send_email = '';
    var send_mobile = '';
    var send_ccode = '';
    var send_cname = '';
    var host = '';


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
            getCompanyUsersList();
        });
    }
    function initSearchContent(){
        $('#uoa_search_items').val(0);
        $('#uoa_search_cont').val('');
    }
    function showCompanyUserList(lists){
        var pgtxt_pending= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_pending');
        var pgtxt_succeed= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_succeed');
        var btntxt_edit= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
        var btntxt_change= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
        var btntxt_disable= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_disable');
        var btntxt_active= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_active');

        $('#user_content_lists').html('');
        if(lists != null && lists != ''){
            var tags = '';
            for (var i = 0; i < lists.length; i++)
            {
                var item = lists[i];
                var id = item.id;
                var uname = item.uname;
                var uemail = item.uemail;
                var umobile = item.umobile;
                var datetime = item.created_at;

                tags+='<tr role="row" class="odd">';
                tags+='<td>'+uname+'</td>';
                tags+='<td>'+uemail+'</td>';
                tags+='<td>'+umobile+'</td>';
                if(item.ustate == 1)
                    tags+='<td class="data-ajax" data-ajax="pgtxt_pending">'+pgtxt_pending+'</td>';
                else if(item.ustate == 2)
                    tags+='<td class="data-ajax" data-ajax="pgtxt_failed">'+pgtxt_succeed+'</td>';
                tags+='<td>'+datetime+'</td>';
                tags += '   <td>';
                tags += '       <div class="form-group m-b-0">';
                tags += '           <select class="my-border-radius-slt form-control float-right" id="companyuser_edit_btn-'+id+'" name="companyuser_edit_btn-'+id+'">';
                tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit" >'+btntxt_edit+'</option>';
                tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change" >'+btntxt_change+'</option>';
                tags += '               <option value="diable" class="data-ajax" data-ajax="btntxt_delete" >'+btntxt_disable+'</option>';
                tags += '               <option value="active" class="data-ajax" data-ajax="btntxt_active" >'+btntxt_active+'</option>';
                tags += '           </select>';
                tags += '       </div>';
                tags += '   </td>';
                tags+='</tr>';
            }

            $('#user_content_lists').html(tags);

            $('select[id^="companyuser_edit_btn-"]').click(function(){
                var id = $(this).attr('id');
                edit_id = id.split('-')[1];

                var sel_val = $(this).val();
                if (sel_val == "change") {

                }
                else if (sel_val == "diable")
                {

                }
                else if (sel_val == "active")
                {

                }

            });
        }
    }
    function getCompanyUsersList(){
        var search_item = $('#uoa_search_items').val();
        var search_cont = $('#uoa_search_cont').val();
        $.ajax({
            method: "POST",
            url: "/company.getCompanyUserList",
            data: {
                pstart:pstart,
                pcnt:pcnt,
                search_item:search_item,
                search_cont:search_cont
            },
            success: function(data) {
                if(data.msg==="ok")
                {
                    var lists = data.lists;
                    showCompanyUserList(lists);

                    host = data.host;
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
    function searchApplyUserInfo(){
        var search_item = $('#modal_search_items').val();
        var search_cont = $('#modal_search_cont').val();
        $.ajax({
            method: "POST",
            url: "/company.searchApplyUserInfo",
            data: {
                search_item:search_item,
                search_cont:search_cont
            },
            success: function(data) {
                if(data.msg==="ok")
                {
                    var lists = data.userinfo;
                    send_email = '';
                    send_mobile = '';
                    send_ccode = '';
                    send_cname = '';
                    if(lists != null && lists != ''){
                        $('#modal_username').text(lists.uname);
                        send_email = lists.uemail;
                        send_mobile = lists.umobile;
                        send_ccode = lists.country_code;
                        send_cname = lists.country_name;
                        $('#modal_email').text(send_email);
                        $('#modal_mobile').text(send_mobile);
                        $('#modal_area').text(send_cname);
                        $('#modal_search_userinfo').css('display', 'block');
                        $('#modal_search_error').css('display', 'none');
                    }
                    else {
                        $('#modal_search_userinfo').css('display', 'none');
                        $('#modal_search_error').css('display', 'block');
                    }
                    $('#modal_send_buttons').css('display', 'block');
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
    function PageEventFunc(){
        $('#uoa_search_btn').click(function (){
            getCompanyUsersList();
        });
        $('#modal_search_btn').click(function (){
            searchApplyUserInfo();
        });
        $('#user_list_nav_cnt').change(function () {
            pstart = 1;
            pcnt = $(this).val();
            getCompanyUsersList();
        });
    }
    function show_fade_alert(text, n){
        if (n == 1)
            $('#sendemail_alert').text(text).css({"background":"#26a00a", "color":"#ffffff"});
        else
            $('#sendemail_alert').text(text).css({"background":"#a70a0a", "color":"#ffffff"});

        $("#sendemail_alert").fadeIn(800, function(){
            setTimeout(function () {
                $("#sendemail_alert").fadeOut(1000);
            },2000);
        });
    }



    export default {
        name: "CompanyUsersUserlist",
        data(){
            return {
                pageid:'company-users-userlist-fav',
                mu_users:'',
                musu_company_users_userlist:'',
                btntxt_edit:'',
                pgtxt_list:'',
                btntxt_savechange:'',
                btntxt_cancel:'',
                pgtxt_filters:'',
                pgtxt_sua_State:'',
                pgtxt_search:'',
                pgtxt_all:'',
                pgtxt_email:'',
                pgtxt_mobile:'',
                pgtxt_option:'',
                pgtxt_username:'',
                pgtxt_time:'',
                pgtxt_pending:'',
                btntxt_add:'',
                pgtxt_adduser:'',
                pgtxt_area:'',
                pgtxt_nousersendlinkforregist:'',
                btntxt_send:'',
                pgtxt_invitation:'',
                pgtxt_sms:'',
                pgtxt_successtosendemail:'',
                pgtxt_failedtosendemail:'',
                pgtxt_setupthe:'',
            }
        },
        computed: {
            cmu_users:function () {
                return this.mu_users;
            },
            cmusu_company_users_userlist:function () {
                return this.musu_company_users_userlist;
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
            cpgtxt_sua_State:function () {
                return this.pgtxt_sua_State;
            },
            cpgtxt_search:function () {
                return this.pgtxt_search;
            },
            cpgtxt_email:function () {
                return this.pgtxt_email;
            },
            cpgtxt_mobile:function () {
                return this.pgtxt_mobile;
            },
            cpgtxt_option:function () {
                return this.pgtxt_option;
            },
            cpgtxt_username:function () {
                return this.pgtxt_username;
            },
            cpgtxt_time:function () {
                return this.pgtxt_time;
            },
            cpgtxt_pending:function () {
                return this.pgtxt_pending;
            },
            cbtntxt_add:function () {
                return this.btntxt_add;
            },
            cpgtxt_adduser:function () {
                return this.pgtxt_adduser;
            },
            cpgtxt_area:function () {
                return this.pgtxt_area;
            },
            cpgtxt_nousersendlinkforregist:function () {
                return this.pgtxt_nousersendlinkforregist;
            },
            cbtntxt_send:function () {
                return this.btntxt_send;
            },
            cpgtxt_invitation:function () {
                return this.pgtxt_invitation;
            },
            cpgtxt_sms:function () {
                return this.pgtxt_sms;
            },
            cpgtxt_successtosendemail:function () {
                return this.pgtxt_successtosendemail;
            },
            cpgtxt_failedtosendemail:function () {
                return this.pgtxt_failedtosendemail;
            },
            cpgtxt_setupthe:function () {
                return this.pgtxt_setupthe
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
                PageEventFunc();
                getCompanyUsersList();
            },
            addCompanyUser_Btn(){
                $('#modal_search_items').val('0');
                $('#modal_search_cont').val('');
                $('#modal_search_userinfo').css('display', 'none');
                $('#modal_search_error').css('display', 'none');
                $('#modal_send_buttons').css('display', 'none');

                $('#addCompanyUserModal').modal('show');
            },
            sendInvitation_Btn(){
                var b_send = false;
                var email = send_email;
                if(email != '' && email != null)
                    b_send = true;
                else{
                    if($('#modal_search_cont').val() != null && $('#modal_search_cont').val() != ''){
                        email = $('#modal_search_cont').val();
                        var e_arr = email.split("@");
                        if(e_arr.length > 1) {
                            b_send = true;
                        }
                    }
                }
                if(b_send){
                    var email_str = encodeURIComponent(email);
                    var title = 'Add Company User';
                    var mailcont = '<p>If you have a wes account,please click</p>\n';
                    mailcont += '<a href="'+host+'/addUser"><p>'+host+'/addUser</p></a>\n';
                    mailcont += '<p>If you haven’t a wes account,please click</p>\n';
                    mailcont += '<a href="'+host+'/register"><p>'+host+'/register</p></a>\n';
                    let postData ={
                        emails: email_str,
                        title:title,
                        mailcont:mailcont
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
                                show_fade_alert(this.cpgtxt_successtosendemail,1);
                            }
                            else
                            {
                                show_fade_alert(this.cpgtxt_failedtosendemail,0);
                            }
                        }).catch(function (error) {
                        console.log(error);
                    })
                }
            },
            sendSMS_Btn(){

            },
        }//method


    }
</script>

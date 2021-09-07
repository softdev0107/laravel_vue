<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_users_org_ouser}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_users}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_users_org}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_users_org_china}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_users_org_ouser}}
                          <a href="#" id="users-organization-china-ouser-fav" data-status="off" data-page-info="User_users-organization-china-ouser">
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
                                                <option value="0">ID</option>
                                                <option value="1">{{cpgtxt_organization}}</option>
                                                <option value="2">{{cpgtxt_username}}</option>
                                                <option value="3">{{cpgtxt_email}}</option>
                                                <option value="4">{{cpgtxt_mobile}}</option>
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
                                <th style="border: 0;">ID</th>
                                <th style="border: 0;">{{cpgtxt_organization}}</th>
                                <th style="border: 0;">{{cpgtxt_username}}</th>
                                <th style="border: 0;">{{cpgtxt_email}}</th>
                                <th style="border: 0;">{{cpgtxt_mobile}}</th>
                                <th style="border: 0;">{{cpgtxt_status}}</th>
                                <th style="border: 0; text-align: right; padding-right: 20px;">{{cpgtxt_operation}}</th>
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
                                    <select id="ouser_list_nav_cnt" name="ouser_list_nav_cnt" class="form-control page2_input">
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

</style>

<script>
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";
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
        $('#uoa_search_items').val(0);
        $('#uoa_search_cont').val('');
    }
    function showUserList(lists){
        $('#user_content_lists').html('');
        if(lists == null && lists == ''){
            return;
        }
        var btntxt_edit= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
        var btntxt_activate= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_activate');
        var btntxt_inactivate= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_inactivate');
        var pgctl_block= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgctl_block');
        var btntxt_delete= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');

        var tags = '';
        for (var i = 0; i < lists.length; i++)
        {
            var uid = '';
            var item = lists[i];
            var id = item.id;
            var uname = item.uname;
            var uemail = item.uemail;
            var umobile = item.umobile;
            var country_code = item.country_code;
            var organization = item.organization;
            if(id < 10)
                uid = '00000' + id;
            else if(id < 100)
                uid = '0000' + id;
            else if(id < 1000)
                uid = '000' + id;
            else if(id < 10000)
                uid = '00' + id;
            else if(id < 100000)
                uid = '0' + id;
            else
                uid = id;
            tags +='<tr role="row" class="odd">';
            tags +='    <td>'+uid+'</td>';
            tags +='    <td>'+organization+'</td>';
            tags +='    <td>'+uname+'</td>';
            tags +='    <td>'+uemail+'</td>';
            tags +='    <td>+'+country_code+' '+umobile+'</td>';
            if(parseInt(item.status) == 1)
                tags +='    <td class="data-ajax" data-ajax="btntxt_activate">'+btntxt_activate+'</td>';
            else if(parseInt(item.status) == 2)
                tags +='    <td class="data-ajax" data-ajax="btntxt_inactivate">'+btntxt_inactivate+'</td>';
            else if(parseInt(item.status) == 3)
                tags +='    <td class="data-ajax" data-ajax="pgctl_block">'+pgctl_block+'</td>';
            else
                tags +='    <td class="data-ajax" data-ajax="btntxt_activate">'+btntxt_activate+'</td>';
            tags += '   <td>';
            tags += '       <div class="form-group m-b-0">';
            tags += '           <select class="my-border-radius-slt form-control float-right" id="user_edit_btn-'+id+'" name="user_edit_btn-'+id+'">';
            tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';
            tags += '               <option value="1" class="data-ajax" data-ajax="pgtxt_activate">'+btntxt_activate+'</option>';
            tags += '               <option value="2" class="data-ajax" data-ajax="pgtxt_inactivate">'+btntxt_inactivate+'</option>';
            tags += '               <option value="3" class="data-ajax" data-ajax="pgctl_block">'+pgctl_block+'</option>';
            tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
            tags += '           </select>';
            tags += '       </div>';
            tags += '   </td>';
            tags+='</tr>';
        }

        $('#user_content_lists').html(tags);

        $('select[id^="user_edit_btn-"]').click(function(){
            if(pgperm.write != 1){
                myjs.data.showAlertHidden('pgtxt_notpermission');
                return;
            }
            var id = $(this).attr('id');
            edit_id = id.split('-')[1];

            var sel_val = $(this).val();
            if (sel_val == "delete")
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
            else {
                if(sel_val != "")
                    changeApplyUsersInfo(sel_val);
            }

        });
    }

    function getApplyUsersList(){
        var search_item = $('#uoa_search_items').val();
        var search_cont = $('#uoa_search_cont').val();
        $.ajax({
            method: "POST",
            url: "admin.getChinaOUserInfoList",
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
                    showUserList(lists);
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
    function initPage(){
        $('#uoa_search_btn').click(function (){
            getApplyUsersList();
        });
        $('#ouser_list_nav_cnt').change(function () {
            pstart = 1;
            pcnt = $(this).val();
            getApplyUsersList();
        });
    }
    function deleteApplyUsersInfo(){
        var search_item = $('#uoa_search_items').val();
        var search_cont = $('#uoa_search_cont').val();
        $.ajax({
            method: "POST",
            url: "admin.deleteChinaOUserInfoList",
            data: {
                edit_id: edit_id,
                pstart:pstart,
                pcnt:pcnt,
                search_item:search_item,
                search_cont:search_cont
            },
            success: function(data) {
                if(data.msg==="ok")
                {
                    var lists = data.lists;
                    showUserList(lists);
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
    function changeApplyUsersInfo(status){
        var search_item = $('#uoa_search_items').val();
        var search_cont = $('#uoa_search_cont').val();
        $.ajax({
            method: "POST",
            url: "admin.changeChinaOUserInfoList",
            data: {
                edit_id: edit_id,
                status:status,
                pstart:pstart,
                pcnt:pcnt,
                search_item:search_item,
                search_cont:search_cont
            },
            success: function(data) {
                if(data.msg==="ok")
                {
                    var lists = data.lists;
                    showUserList(lists);
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


    export default {
        name: "UsersOrgChinaUser",
        data(){
            return {
                pageid:'users-organization-china-ouser-fav',
                mu_users:'',
                musu_users_org:'',
                mususu_users_org_china:'',
                musususu_users_org_ouser:'',
                btntxt_edit:'',
                pgtxt_list:'',
                pgtxt_filters:'',
                pgtxt_search:'',
                pgtxt_username:'',
                pgtxt_email:'',
                pgtxt_mobile:'',
                pgtxt_organization:'',
                pgtxt_setupthe:'',
                pgtxt_operation:'',
                pgtxt_status:'',
                btntxt_activate:'',
                btntxt_inactivate:'',
                pgctl_block:'',
                btntxt_delete:'',
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
            cmusususu_users_org_ouser:function () {
                return this.musususu_users_org_ouser;
            },
            cpgtxt_list:function () {
                return this.pgtxt_list;
            },
            cpgtxt_filters:function () {
                return this.pgtxt_filters;
            },
            cpgtxt_search:function () {
                return this.pgtxt_search;
            },
            cpgtxt_username:function () {
                return this.pgtxt_username;
            },
            cpgtxt_email:function () {
                return this.pgtxt_email;
            },
            cpgtxt_mobile:function () {
                return this.pgtxt_mobile;
            },
            cpgtxt_organization:function () {
                return this.pgtxt_organization;
            },
            cpgtxt_setupthe:function () {
                return this.pgtxt_setupthe
            },
            cpgtxt_operation:function () {
                return this.pgtxt_operation
            },
            cpgtxt_status:function () {
                return this.pgtxt_status
            },
            cbtntxt_activate:function () {
                return this.btntxt_activate
            },
            cbtntxt_inactivate:function () {
                return this.btntxt_inactivate
            },
            cpgctl_block:function () {
                return this.pgctl_block
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit
            },
            cbtntxt_delete:function () {
                return this.btntxt_delete
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
        }//method


    }
</script>

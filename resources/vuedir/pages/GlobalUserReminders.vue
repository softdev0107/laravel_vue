<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{ cpgtxt_notifications }}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{ cpgtxt_notifications }}&nbsp;&nbsp;
                    <a href="#" id="global-user-reminders-fav" data-status="off" data-page-info="Reminders_global-user-reminders">
                    <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                    </a>
                </span>
            </div>
        </div>

        <div class="row m-t-15">
            <div class="col-md-12">
                <div class="tab-content" id="global-user-profile-tabContent">
                    <div class="col-md-12 page_slider_content_list active" id="uoa_list">
                        <div class="page1_content_content_bar">
                            <div class="page1_content_content_title" style="padding: 0px; border: 0px;">
                                <div class="col-md-12" style="display: flex; flex-direction: row; align-items: center; padding: 0px;">
                                    <div style="flex-grow: 1; margin-left:15px; font-size: 1rem;">{{cmusususu_users_org_applicants}}</div>
                                    <div style="margin-right: 30px; text-align: right; color: #696a6b; text-decoration: underline; font-size: 0.7rem; cursor: pointer;" @click.stop="SetSubSubSubMenuChange('Applicants','users-organization-global-applicants')">
                                        {{cpgtxt_more}}>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <table class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                                    <thead>
                                    <tr role="row" style="border-bottom: 1px solid #e4e2e2;">
                                        <th style="border: 0; width: 150px;">{{cpgtxt_organization}}</th>
                                        <th style="border: 0; width: 150px;"></th>
                                        <th style="border: 0; width: 250px;">{{cpgtxt_area}}</th>
                                        <th style="border: 0;">{{cpgtxt_time}}</th>
                                        <th style="border: 0;"></th>
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
            </div>
        </div>
    </div>
</template>

<script>
    import myjs from "../assets/jsfunc/mjs_module";
    import axios from "axios";
    import nav_module from "../assets/jsfunc/nav_module";
    import moment from "moment";
    import mjs_module from "../assets/jsfunc/mjs_module";

    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var vueOBJ=null;
    var pstart = 1;
    var pnum = pstart;
    var pcnt=5;
    var numg = 5;

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
    function showApplyList(lists){

        if(lists != null && lists != ''){
            $('#user_content_lists').html('');
            var tags = '';
            for (var i = 0; i < lists.length; i++)
            {
                var item = lists[i];
                var admin_id = item.admin_id;
                var organization = item.organization;

                tags+='<tr role="row" class="odd">';
                tags+='<td>'+organization+'</td>';
                if(admin_id == 0)
                    tags+='<td style="color: red; font-size: 11px;">New</td>';
                else
                    tags+='<td></td>';
                tags+='<td>'+item.country_name+'</td>';
                tags+='<td>'+item.created_at+'</td>';
                tags+='<td></td>';
                tags+='</tr>';
            }

            $('#user_content_lists').html(tags);
        }
    }

    function getApplyUsersList(){
        $.ajax({
            method: "POST",
            url: "admin.getRemindUserList",
            data: {
                pstart:pstart,
                pcnt:pcnt,
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

    export default {
        data() {
            return {
                pageid: 'global-user-reminders-fav',
                musususu_users_org_applicants:'',
                pgtxt_reminders:'',
                pgtxt_organization:'',
                pgtxt_more:'',
                pgtxt_notifications:'',
                pgtxt_area:'',
                pgtxt_time:'',
            }
        },
        computed: {
            // 계산된 getter
            cpgtxt_reminders:function () {
                return this.pgtxt_reminders;
            },
            cpgtxt_notifications:function () {
                return this.pgtxt_notifications;
            },
            cmusususu_users_org_applicants:function () {
                return this.musususu_users_org_applicants;
            },
            cpgtxt_organization:function () {
                return this.pgtxt_organization;
            },
            cpgtxt_more:function () {
                return this.pgtxt_more;
            },
            cpgtxt_area:function () {
                return this.pgtxt_area;
            },

            cpgtxt_time:function () {
                return this.pgtxt_time;
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
        created() {
            this.userinfo = nav_module.data.jsonparse(window.Laravel.userinfo);
            this.userid = this.userinfo.id;
        },
        mounted() {
            /* fav part*/
            vueOBJ=this;
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            this.initpage();
        },
        methods: {
            initpage() {
                getApplyUsersList();
            },
            SetSubSubSubMenuChange:function (selectedMenu,pid) {
                var dname = $("#" + pid + " span.thisname").text();
                var ppp = dname + "|" + pid;
                nav_module.data.subsubsubmenuChange(pid);
                this.$store.dispatch('SetSubMenuChange', ppp);
            },
        }
    }
</script>

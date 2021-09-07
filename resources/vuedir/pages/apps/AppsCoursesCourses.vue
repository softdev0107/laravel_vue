<template>
        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title">
                    <h3>{{cmususu_apps_courses_courses}}</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; {{cmu_apps}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_apps_courses}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_apps_courses_courses}}
                          <a href="#" id="apps-courses-courses-fav" data-status="off" data-page-info="Courses_apps-courses-courses">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
                </div>
            </div>


        </div>
</template>
<style>

</style>
<script>
    import myjs from "../../assets/jsfunc/mjs_module";
    import axios from "axios";
    import nav_module from "../../assets/jsfunc/nav_module";

    var vueOBJ;
    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var tabstatus = 0;
    var btntxt_edit = "";
    var btntxt_change = "";
    var btntxt_delete = "";
    var pgtxt_department = "";
    var pgtxt_position = "";
    var pgtxt_superior = "";
    var pgtxt_name = "";
    var btntxt_add = "";

    var pstart = 1;
    var pnum = pstart;
    var pcnt=5;
    var numg = 5;
    var is_edit = false;
    var group_user_ids = new Array();
    var group_user_names = new Array();
    var checked_del_items = new Array();
    var group_id = 0;
    var pgperm={};

    String.prototype.trim = function() {
        var trimmed = this.replace(/^\s+|\s+$/g, '%|%');
        return trimmed;
    };
    String.prototype.ltrim = function() {
        var trimmed = this.replace(/^\s+/g, '%|%');
        return trimmed;
    };
    String.prototype.rtrim = function() {
        var trimmed = this.replace(/\s+$/g, '%|%');
        return trimmed;
    };

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
            if(tabstatus == 0) {
                showRolesDepartmentList();
            }else if(tabstatus == 1) {
                showRolesPositionList();
            }else if(tabstatus == 2) {

            }
        });
    }

    export default {
        data(){
            return {
                pageid: 'apps-courses-courses-fav',
                mu_apps: '',
                musu_apps_courses:'',
                mususu_apps_courses_courses:'',
                btntxt_roles:'',
                btntxt_add:'',
                btntxt_edit:'',
                btntxt_change:'',
                btntxt_delete:'',
                pgtxt_department:'',
                pgtxt_position:'',
                pgtxt_group:'',
                pgtxt_list:'',
                pgtxt_name:'',
                pgtxt_number:'',
                pgtxt_delete:'',
                pgtxt_superior:'',
                pgtxt_colleagues:'',
                pgtxt_suserlist:'',
                pgtxt_all:'',
                btntxt_ok:'',
                btntxt_cancel:'',
                pgtxt_wantdeleteitem:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
            }
        },
        computed: {
            // 계산된 getter
            title: function () {
                return this.$store.state.curMenu
            },
            cmu_apps:function () {
                return this.mu_apps;
            },
            cmusu_apps_courses:function () {
                return this.musu_apps_courses;
            },
            cmususu_apps_courses_courses:function () {
                return this.mususu_apps_courses_courses;
            },
            cbtntxt_roles:function () {
                return this.btntxt_roles;
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit;
            },
            cbtntxt_change:function () {
                return this.btntxt_change;
            },
            cbtntxt_delete:function () {
                return this.btntxt_delete;
            },
            cbtntxt_add:function () {
                return this.btntxt_add;
            },
            cpgtxt_department:function () {
                return this.pgtxt_department;
            },
            cpgtxt_position:function () {
                return this.pgtxt_position;
            },
            cpgtxt_group:function () {
                return this.pgtxt_group;
            },
            cpgtxt_list:function () {
                return this.pgtxt_list;
            },
            cpgtxt_name:function () {
                return this.pgtxt_name;
            },
            cpgtxt_number:function () {
                return this.pgtxt_number;
            },
            cpgtxt_delete:function () {
                return this.pgtxt_delete;
            },
            cpgtxt_superior:function () {
                return this.pgtxt_superior;
            },
            cpgtxt_colleagues:function () {
                return this.pgtxt_colleagues;
            },
            cpgtxt_suserlist:function () {
                return this.pgtxt_suserlist;
            },
            cpgtxt_all:function () {
                return this.pgtxt_all;
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

        },
        mounted() {
            /* fav part*/
            vueOBJ=this;
            pgperm = nav_module.data.getPagePermission(this.$store.state.permission, this.pageid);
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            this.sliderTabs();
            this.initPage();
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
            initPage(){
                btntxt_add = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_add');
                btntxt_edit = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
                btntxt_change = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
                btntxt_delete = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
                pgtxt_department = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_department');
                pgtxt_position = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_position');
                pgtxt_superior = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_superior');
                pgtxt_name = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_name');
                is_edit = false;
            },
            sliderTabs() {
                $('.page1_content_side_bar div.page1_content_side_bar_text').click(function () {
                    pstart = 1;
                    pnum = pstart;
                    $('#ssmu_page_nav').html('');
                    is_edit = false;
                    $('#item_id').val('');
                    checked_del_items = new Array();

                    $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
                    $(this).addClass('page1_content_side_bar_seleted');
                    var subid=$(this).attr('data-target');
                    $('.page_roles_content_list').removeClass('active');
                    $('#'+subid).addClass('active');


                });
            },


        }
    }
</script>

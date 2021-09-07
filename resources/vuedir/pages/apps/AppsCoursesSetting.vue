<template>
        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title">
                    <h3>{{cmususu_apps_courses_setting}}</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; {{cmu_apps}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_apps_courses}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_apps_courses_setting}}
                          <a href="#" id="apps-courses-setting-fav" data-status="off" data-page-info="Setting_apps-courses-setting">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
                </div>
            </div>

            <div class="page1_content_side_bar" style="display: flex; margin-bottom: 20px;">
                <div class="apps_courses_setting_tab">
                    <div class="page1_content_side_bar_text page1_content_side_bar_seleted" data-target="category">{{cpgtxt_category}}</div>
                </div>
                <div class="apps_courses_setting_tab">
                    <div class="page1_content_side_bar_text" data-target="classsize">{{cpgtxt_classsize}}</div>
                </div>
                <div class="apps_courses_setting_tab">
                    <div class="page1_content_side_bar_text" data-target="language">{{cpgtxt_language}}</div>
                </div>
                <div class="apps_courses_setting_tab" style="width: 120px;">
                    <div class="page1_content_side_bar_text" data-target="courseform">{{cpgtxt_courseform}}</div>
                </div>
                <div class="apps_courses_setting_tab" style="width: 170px;">
                    <div class="page1_content_side_bar_text" data-target="coursecombination">{{cpgtxt_coursecombination}}</div>
                </div>
                <div class="apps_courses_setting_tab">
                    <div class="page1_content_side_bar_text" data-target="age">{{cpgtxt_age}}</div>
                </div>
                <div class="apps_courses_setting_tab">
                    <div class="page1_content_side_bar_text" data-target="limits">{{cpgtxt_limits}}</div>
                </div>
                <div class="apps_courses_setting_tab">
                    <div class="page1_content_side_bar_text" data-target="length">{{cpgtxt_length}}</div>
                </div>
                <div class="apps_courses_setting_tab">
                    <div class="page1_content_side_bar_text" data-target="region">{{cpgtxt_region}}</div>
                </div>
                <div class="apps_courses_setting_tab">
                    <div class="page1_content_side_bar_text" data-target="studentlevel">{{cpgtxt_student}} {{cpgtxt_level}}</div>
                </div>
            </div>
            <component :is="CoursesComponentitem"></component>
        </div>
</template>
<style>
    .page_roles_content_list{
        display: none;
    }
    .page_roles_content_list.active{
        display: block;
    }
    .page1_content_side_bar_text{
        cursor: pointer;
        float: left;
    }
    .apps_courses_setting_tab{
        width: 100px;
    }
</style>
<script>
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";

    var vueOBJ;
    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var pgperm={};
    export default {
        data(){
            return {
                pageid: 'apps-courses-setting-fav',
                mu_apps: '',
                musu_apps_courses:'',
                mususu_apps_courses_setting:'',
                pgtxt_category:'',
                pgtxt_classsize:'',
                pgtxt_language:'',
                pgtxt_courseform:'',
                pgtxt_coursecombination:'',
                pgtxt_age:'',
                pgtxt_limits:'',
                pgtxt_length:'',
                pgtxt_region:'',
                pgtxt_student:'',
                pgtxt_level:'',
                ptabstatus:0,
            }
        },
        components: { // 여기서 동적으로 로딩한다
                'AppsCoursesSettingCategory': () => import('../../pages/apps/AppsCoursesSettingCategory'),
                'AppsCoursesSettingClassSize': () => import('../../pages/apps/AppsCoursesSettingClassSize'),
                'AppsCoursesSettingLanguage': () => import('../../pages/apps/AppsCoursesSettingLanguage'),
                'AppsCoursesSettingCourseForm': () => import('../../pages/apps/AppsCoursesSettingCourseForm'),
                'AppsCoursesSettingCourseCombination': () => import('../../pages/apps/AppsCoursesSettingCourseCombination'),
                'AppsCoursesSettingAge': () => import('../../pages/apps/AppsCoursesSettingAge'),
                'AppsCoursesSettingLimits': () => import('../../pages/apps/AppsCoursesSettingLimits'),
                'AppsCoursesSettingLength': () => import('../../pages/apps/AppsCoursesSettingLength'),
                'AppsCoursesSettingRegion': () => import('../../pages/apps/AppsCoursesSettingRegion'),
                'AppsCoursesSettingStudentlevel': () => import('../../pages/apps/AppsCoursesSettingStudentlevel'),
             },
        computed: {
            CoursesComponentitem(){
               // console.log(this.ptabstatus);
                switch (this.ptabstatus) {
                    case 0:
                        return 'AppsCoursesSettingCategory'
                    case 1:
                        return 'AppsCoursesSettingClassSize'
                    case 2:
                        return 'AppsCoursesSettingLanguage'
                    case 3:
                        return 'AppsCoursesSettingCourseForm'
                    case 4:
                        return 'AppsCoursesSettingCourseCombination'
                    case 5:
                        return 'AppsCoursesSettingAge'
                    case 6:
                        return 'AppsCoursesSettingLimits'
                    case 7:
                        return 'AppsCoursesSettingLength'
                    case 8:
                        return 'AppsCoursesSettingRegion'
                    case 9:
                        return 'AppsCoursesSettingStudentlevel'
                    default:
                        return 'AppsCoursesSettingCategory'
                }
            },
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
            cmususu_apps_courses_setting:function () {
                return this.mususu_apps_courses_setting;
            },
            cpgtxt_category:function () {
                return this.pgtxt_category;
            },
            cpgtxt_classsize:function () {
                return this.pgtxt_classsize;
            },
            cpgtxt_language:function () {
                return this.pgtxt_language;
            },
            cpgtxt_courseform:function () {
                return this.pgtxt_courseform;
            },
            cpgtxt_coursecombination:function () {
                return this.pgtxt_coursecombination;
            },
            cpgtxt_age:function () {
                return this.pgtxt_age;
            },
            cpgtxt_limits:function () {
                return this.pgtxt_limits;
            },
            cpgtxt_length:function () {
                return this.pgtxt_length;
            },
            cpgtxt_region:function () {
                return this.pgtxt_region;
            },
            cpgtxt_student:function () {
                return this.pgtxt_student;
            },
            cpgtxt_level:function () {
                return this.pgtxt_level;
            },
            contentchange: function () {//cckd
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });
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
            sliderTabs() {
                $('.page1_content_side_bar div.page1_content_side_bar_text').click(function () {
                    $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
                    $(this).addClass('page1_content_side_bar_seleted');
                    var subid=$(this).attr('data-target');
                    $('.page_roles_content_list').removeClass('active');
                    $('#'+subid).addClass('active');
                    //console.log(subid);
                    if (subid == 'category')
                        vueOBJ.ptabstatus=0;
                    else if (subid == 'classsize')
                        vueOBJ.ptabstatus=1;
                    else if (subid == 'language')
                        vueOBJ.ptabstatus=2;
                    else if (subid == 'courseform')
                        vueOBJ.ptabstatus=3;
                    else if (subid == 'coursecombination')
                        vueOBJ.ptabstatus=4;
                    else if (subid == 'age')
                        vueOBJ.ptabstatus=5;
                    else if (subid == 'limits')
                        vueOBJ.ptabstatus=6;
                    else if (subid == 'length')
                        vueOBJ.ptabstatus=7;
                    else if (subid == 'region')
                        vueOBJ.ptabstatus=8;
                    else if (subid == 'studentlevel')
                        vueOBJ.ptabstatus=9;
                    else
                        vueOBJ.ptabstatus=0;
                });
            },
        }
    }
</script>

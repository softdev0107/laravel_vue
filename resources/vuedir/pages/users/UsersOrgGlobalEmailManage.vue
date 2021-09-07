<template>
        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title">
                    <h3>{{cmusususu_users_org_emailmanage}}</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; {{cmu_users}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_users_org}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_users_org_global}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_users_org_emailmanage}}
                          <a href="#" id="users-organization-global-emailmanage-fav" data-status="off" data-page-info="Email Manager_users-organization-global-emailmanage">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
                </div>
            </div>

            <div class="page1_content_side_bar" style="display: flex; margin-bottom: 20px;">
                <div class="apps_courses_setting_tab">
                    <div class="page1_content_side_bar_text page1_content_side_bar_seleted" data-target="applyapproval">{{cpgtxt_applyapproval}}</div>
                </div>
                <div class="apps_courses_setting_tab">
                    <div class="page1_content_side_bar_text" data-target="applyfailed">{{cpgtxt_applyfailed}}</div>
                </div>
            </div>
            <component :is="EmailMangerComponentitem"></component>
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
        width: 120px;
    }
</style>
<script>
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";

    var vueOBJ;
    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var pgperm={};
    export default {
        name: "UsersOrgGlobalEmailManage",
        data(){
            return {
                pageid: 'users-organization-global-emailmanage-fav',
                mu_users: '',
                musu_users_org:'',
                mususu_users_org_global:'',
                musususu_users_org_emailmanage:'',
                pgtxt_applyapproval:'',
                pgtxt_applyfailed:'',
                ptabstatus:0,
            }
        },
        components: { // 여기서 동적으로 로딩한다
                'UsersOrgGlobalEmailManageApproval': () => import('../../pages/users/UsersOrgGlobalEmailManageApproval'),
                'UsersOrgGlobalEmailManageFailed': () => import('../../pages/users/UsersOrgGlobalEmailManageFailed'),
             },
        computed: {
            EmailMangerComponentitem(){
               // console.log(this.ptabstatus);
                switch (this.ptabstatus) {
                    case 0:
                        return 'UsersOrgGlobalEmailManageApproval'
                    case 1:
                        return 'UsersOrgGlobalEmailManageFailed'
                }
            },
            // 계산된 getter
            title: function () {
                return this.$store.state.curMenu
            },
            cmu_users:function () {
                return this.mu_users;
            },
            cmusu_users_org:function () {
                return this.musu_users_org;
            },
            cmususu_users_org_global:function () {
                return this.mususu_users_org_global;
            },
            cmusususu_users_org_emailmanage:function () {
                return this.musususu_users_org_emailmanage;
            },
            cpgtxt_applyapproval:function () {
                return this.pgtxt_applyapproval;
            },
            cpgtxt_applyfailed:function () {
                return this.pgtxt_applyfailed;
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
                    if (subid == 'applyapproval')
                        vueOBJ.ptabstatus=0;
                    else if (subid == 'applyfailed')
                        vueOBJ.ptabstatus=1;
                });
            },
        }
    }
</script>

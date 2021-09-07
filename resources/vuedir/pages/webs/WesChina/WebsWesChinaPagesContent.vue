<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_webs_wesglobal_pages_content}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_webs_weschina}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_pages}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_webs_wesglobal_pages_content}}
                      <a href="#" id="webs-wesglobal-pages-content-fav" data-status="off" data-page-info="Content_webs-wesglobal-pages-content">
                    &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                      </a>
                </span>
            </div>
        </div>

        <div class="page1_content_side_bar" style="display: flex; margin-bottom: 20px;">
            <div class="global_page_content_tab" style="width: 60px;">
                <div class="page1_content_side_bar_text page1_content_side_bar_seleted" data-target="wwpc_list">{{cpgtxt_list}}</div>
            </div>
            <div class="global_page_content_tab">
                <div class="page1_content_side_bar_text" data-target="wwpc_type">{{cpgtxt_contenttype}}</div>
            </div>
            <div class="global_page_content_tab">
                <div class="page1_content_side_bar_text" data-target="wwpc_sidebar">{{cpgtxt_sidebar}}</div>
            </div>
        </div>
        <div style="display: block;">
            <component :is="PageComponentItem"></component>
        </div>

    </div>
</template>
<style>
    .page1_content_content_bottom svg{
        color: #6b85e2;
    }
    .page1_content_side_bar .page1_content_side_bar_text{
        cursor: pointer;
        height: auto;
        float: left;
    }
    .global_page_content_tab{
        width: 100px;
    }

</style>

<script>

    import nav_module from "../../../assets/jsfunc/nav_module";
    import mjs_module from "../../../assets/jsfunc/mjs_module";

    var vueOBJ = null;

    export default {
        name: "WebsWesGlobalPagesContent",
        components: {
            'WebsWesGlobalPagesContentList': () => import('../../../pages/webs/WesChina/WebsWesChinaPagesContentList'),
            'WebsWesGlobalPagesContentType': () => import('../../../pages/webs/WesChina/WebsWesChinaPagesContentType'),
            'WebsWesGlobalPagesContentSidebar': () => import('../../../pages/webs/WesChina/WebsWesChinaPagesContentSidebar'),
        },
        data(){
            return {
                pageid:'webs-wesglobal-pages-content-fav',
                mu_webs:'',
                musu_webs_weschina:'',
                mususu_webs_wesglobal_pages:'',
                musususu_webs_wesglobal_pages_page:'',
                musususu_webs_wesglobal_pages_content:'',
                pgtxt_list:'',
                pgtxt_contenttype:'',
                pgtxt_sidebar:'',
                ptabstatus:0,
            }
        },
        computed: {
            PageComponentItem(){
                switch (this.ptabstatus) {
                    case 0:
                        return 'WebsWesGlobalPagesContentList'
                    case 1:
                        return 'WebsWesGlobalPagesContentType'
                    case 2:
                        return 'WebsWesGlobalPagesContentSidebar'
                }
            },

            cmususu_webs_wesglobal_pages:function () {
                return this.mususu_webs_wesglobal_pages
            },
            cmusususu_webs_wesglobal_pages_page:function () {
                return this.musususu_webs_wesglobal_pages_page
            },
            cmusususu_webs_wesglobal_pages_content:function () {
                return this.musususu_webs_wesglobal_pages_content
            },
            cmu_webs:function () {
                return this.mu_webs
            },
            cmusu_webs_weschina:function () {
                return this.musu_webs_weschina
            },
            cpgtxt_list:function () {
                return this.pgtxt_list
            },
            cpgtxt_contenttype:function () {
                return this.pgtxt_contenttype
            },
            cpgtxt_sidebar:function () {
                return this.pgtxt_sidebar
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
            vueOBJ = this;
            $('#'+this.pageid).click(function(){
                mjs_module.data.addOnfavList(this, vueOBJ);
            });
            mjs_module.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            this.sliderTabs();
        },
        methods:{
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
                    var subid = $(this).attr('data-target');

                    $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('active');
                    $('#' + subid).addClass('active');

                    if (subid == 'wwpc_list') {
                        $('#publick_contaniner').css('display', 'none');
                        $('#pageContAdd_btn_container').css('display', 'block');
                        $('#pagesetting').removeClass('active');
                        $('#wwpc_list').addClass('active');
                        $('div[data-target="wwpc_list"]').addClass('page1_content_side_bar_seleted');
                        vueOBJ.ptabstatus = 0;
                    } else if (subid == 'wwpc_type') {
                        vueOBJ.ptabstatus = 1;
                    } else if (subid == 'wwpc_sidebar') {
                        vueOBJ.ptabstatus = 2;
                    }

                });
            },


        }//method

    }
</script>

<template>

        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title">
                    <h3>{{cmusususu_webs_wesglobal_configuration_filemanager}}</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                        <svg width="15px" height="18px" viewBox="0 0 15 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Outlined" transform="translate(-510.000000, -1483.000000)"><g id="Content" transform="translate(100.000000, 1428.000000)"><g id="Outlined-/-Content-/-file_copy" transform="translate(408.000000, 54.000000)"><g><polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon><path d="M16,1 L4,1 C2.9,1 2,1.9 2,3 L2,17 L4,17 L4,3 L16,3 L16,1 Z M15,5 L8,5 C6.9,5 6.01,5.9 6.01,7 L6,21 C6,22.1 6.89,23 7.99,23 L19,23 C20.1,23 21,22.1 21,21 L21,11 L15,5 Z M8,21 L8,7 L14,7 L14,12 L19,12 L19,21 L8,21 Z" id="🔹-Icon-Color" fill="#1D1D1D"></path></g></g></g></g></g></svg>
                        &nbsp;&nbsp;&nbsp;{{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_webs_weschina}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_configuration}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_webs_wesglobal_configuration_filemanager}}
                       <a href="#" id="webs-wesglobal-configuration-filemanager-fav" data-status="off" data-page-info="Filemanager_webs-wesglobal-configuration-filemanager">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card p-t-20 p-b-20 p-l-20 p-r-20 min-vh-60">
                        <div>
                            <div  class="btn btn-outline-light  dash-my-btn">
                                <i class="ti-calendar mr-2 text-muted"></i>
                                <span>This is file manager</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


</template>
<script>
    import lang_module from "../../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../../assets/jsfunc/mjs_module";
    import nav_module from "../../../assets/jsfunc/nav_module";
    var vueOBJ=null;
    var pgperm={};
    export default {
        data(){
            return {
                pageid:'webs-wesglobal-configuration-filemanager-fav',
                mu_webs:'',
                musu_webs_weschina:'',
                mususu_webs_wesglobal_configuration:'',
                musususu_webs_wesglobal_configuration_filemanager:'',
                btntxt_ok:'',
                btntxt_cancel:'',
                pgtxt_wantdeleteitem:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
            }
        },
        created(){

        },
        computed: {
            // 계산된 getter
            title: function () {
                // `this` 는 vm 인스턴스를 가리킵니다.
                return this.$store.state.curMenu
            },

            cmu_webs:function () {
                return this.mu_webs
            },
            cmusu_webs_weschina:function () {
                return this.musu_webs_weschina
            },
            cmususu_webs_wesglobal_configuration:function () {
                return this.mususu_webs_wesglobal_configuration
            },
            cmusususu_webs_wesglobal_configuration_filemanager: function () {
                return this.musususu_webs_wesglobal_configuration_filemanager;
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
        beforeMount() {
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
        },
        methods: {
            /* fav part */
            getSiteFaveritelist(list){
                if(list!=null && list!='')
                {
                    let imgsrc='/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src",imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }
            },  /*fav part*/

        }

    }
</script>

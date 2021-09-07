<template>
        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title">
                    <h3>{{cmusu_company_setting_account}}</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp; {{cmu_setting}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_company_setting_account}}
                          <a href="#" id="company-setting-account-fav" data-status="off" data-page-info="Account_company-setting-account">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
                </div>
            </div>
            <div class="row" style="height: 100%">
                <div class="col-md-12 page_slider_content_list active"  id="dash">
                    <div class="card" style="height: 85%;">
                        <div class="card-body">
                            <h6 class="card-title m-b-20">ID :
                                <label id="csa_id"></label>
                            </h6>
                        </div>
                        <div class="col-md-12">
                            <div class="col-md-10">
                                <div style="margin-bottom: 20px;">
                                    <div class="col-md-4" style="margin-top: 8px;">{{cpgtxt_username}}</div>
                                    <div class="col-md-8" style="margin-top: 8px;">
                                        <input type="text" class="form-control border-input-text" id="csa_username" name="csa_username">
                                    </div>
                                </div>
                                <div style="margin-bottom: 20px;">
                                    <div class="col-md-4" style="margin-top: 8px;">{{cpgtxt_email}}</div>
                                    <div class="col-md-8" style="margin-top: 8px; display: flex;">
                                        <input type="text" class="form-control border-input-text" id="csa_email" name="csa_email">
                                        <span class="csa_change_txt">{{cbtntxt_change}} {{cpgtxt_email}}</span>
                                    </div>
                                </div>
                                <div style="margin-bottom: 20px;">
                                    <div class="col-md-4" style="margin-top: 8px;">{{cpgtxt_mobile}}</div>
                                    <div class="col-md-8" style="margin-top: 8px; display: flex;">
                                        <input type="text" class="form-control border-input-text" id="csa_mobile" name="csa_mobile">
                                        <span class="csa_change_txt">{{cbtntxt_change}} {{cpgtxt_mobile}}</span>
                                    </div>
                                </div>
                                <div style="margin-bottom: 20px;">
                                    <div class="col-md-4" style="margin-top: 8px;">{{cpgtxt_password}}</div>
                                    <div class="col-md-8" style="margin-top: 8px;">
                                        <input type="password" class="form-control border-input-text" id="csa_password" name="csa_password">
                                    </div>
                                </div>
                                <div style="margin-bottom: 20px;">
                                    <div class="col-md-4" style="margin-top: 8px;">{{cpgtxt_confirm}} {{cpgtxt_password}}</div>
                                    <div class="col-md-8" style="margin-top: 8px;">
                                        <input type="password" class="form-control border-input-text" id="csa_confirmpassword" name="csa_confirmpassword">
                                    </div>
                                </div>

                                <div style="text-align: right; margin-bottom: 20px;">
                                    <div class="col-md-8" style="margin-top: 30px;">
                                        <div id="add_domainBtn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-30"  @click.stop="SaveSettingAccount()">
                                            <span>{{ cbtntxt_save }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="ModalChangeAccount" data-keyboard="false" data-backdrop="static">
                <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                    <div class="modal-content">
                        <div class="modal-body" id="ChangeAccountModalBody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                            <div class="panel" id="tab4">
                                <div class="row" style="padding-bottom: 20px;">
                                    <div class="col-md-12" style="margin-top: 20px;">
                                        <div>
                                            <div class="col-md-4">
                                                <label style="margin-top: 8px; color:#666;">{{cpgtxt_username}}</label>
                                            </div>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" id="modal_user_name" name="modal_user_name">
                                            </div>
                                            <div class="col-md-12">
                                                <label class="error_text" id="error_user_name">{{cpgtxt_changeusername}}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12" style="margin-top: 20px;">
                                        <div>
                                            <div class="col-md-12" style="display: flex;">
                                                <label style="margin-top: 8px; color:#666; margin-right: 10px;">{{cpgtxt_password}}</label>
                                                <div id="pwd_check" style="line-height: 32px; display: none;">
                                                    <svg t="1618377574117" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1122" width="16" height="16"><path d="M811.24864 372.41344a35.83488 35.83488 0 0 0-50.68288 0l-286.01344 286.00832-170.15808-170.15808a35.83488 35.83488 0 0 0-50.68288 0 35.83488 35.83488 0 0 0 0 50.68288l195.49696 195.49696 0.00512 0.00512a35.83488 35.83488 0 0 0 50.68288 0l311.35232-311.35232a35.83488 35.83488 0 0 0 0-50.68288z" fill="#07bd23" p-id="1123"></path><path d="M512 133.12c208.91648 0 378.88 169.96352 378.88 378.88s-169.96352 378.88-378.88 378.88-378.88-169.96352-378.88-378.88 169.96352-378.88 378.88-378.88m0-71.68c-248.83712 0-450.56 201.72288-450.56 450.56s201.72288 450.56 450.56 450.56 450.56-201.72288 450.56-450.56-201.72288-450.56-450.56-450.56z" fill="#07bd23" p-id="1124"></path></svg>
                                                </div>
                                                <div id="pwd_warning_txt" style="line-height: 32px; width:100%; text-align: right; font-size: 1.3vh; display: block;"></div>
                                            </div>

                                            <div class="col-md-12">
                                                <input type="password" class="form-control" id="modal_user_pwd" name="modal_user_pwd">
                                            </div>
                                            <div class="row" style="padding-top: 5px; padding-right: 10px;">
                                                <div class="col-md-12" style="padding: 0 30px;">
                                                    <div id="passwordworings1" style="padding:0;margin:0; width:28px;background:#a9a7a7; height: 6px;float: right;border-radius: 5px;"></div>
                                                    <div id="passwordworings2" style="padding:0;margin-right:2px; width:28px;background:#bfbebe; height: 6px;float: right;border-radius: 5px;"></div>
                                                    <div id="passwordworings3" style="padding:0;margin-right:2px; width:28px;background:#e2e1e1; height: 6px;float: right;border-radius: 5px;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12" style="margin-top: 10px;">
                                        <div>
                                            <div class="col-md-4">
                                                <label style="margin-top: 8px; color:#666;">{{cpgtxt_confirm}} {{cpgtxt_password}}</label>
                                            </div>
                                            <div class="col-md-12">
                                                <input type="password" class="form-control" id="modal_user_confpwd" name="modal_user_confpwd">
                                            </div>
                                            <div class="col-md-12">
                                                <label class="error_text" id="error_password">{{cpgtxt_inconsistentpwd}}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" style="margin-top: 25px;">
                                    <div class="col-md-12 text-center">
                                        <div id="ssfe-model-add" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="ChanageCompanyAccountModalBtn()">
                                            <span>{{cbtntxt_save}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
</template>
<style>
    .table.table-lg td {
        padding: 0.7rem 0.75rem;
    }
    .page_slider_content_list{
        display: none;
    }
    .page_slider_content_list.active{
        display: block;
    }
    .csa_change_txt{
        width: 10rem;
        text-align: right;
        line-height: 35px;
        color: blue;
        cursor: pointer;
        text-decoration: underline;
    }
    .error_text{
        position: absolute;
        width: 93%;
        text-align: right;
        color: red;
        display: none;
    }

</style>
<script>
    import nav_company from "../../assets/jsfunc/nav_company";
    import myjs from "../../assets/jsfunc/mjs_module";

    var useraccount = nav_company.data.jsonparse(window.Laravel.useraccount);
    var status = nav_company.data.jsonparse(window.Laravel.status);
    var userid = atob(useraccount.uid);
    var userpwd = atob(useraccount.password);

    var pwd_min = 0;
    var pwd_max = 0;
    var pwd_letter = 0;
    var pwd_upper_lower = 0;
    var pwd_digital = 0;
    var pwd_special = 0;
    var pwd_color = '#ffffff';
    var pwd_warning = '';
    var pwd_warinig_color = '#ffffff';
    var pwd_state = false;
    let vueOBJ=null;

    function setUserAccountPage(){
        $('#csa_id').text(userid);
        $('#csa_username').val(atob(useraccount.uname));
        $('#csa_email').val(atob(useraccount.uemail));
        $('#csa_mobile').val(atob(useraccount.umobile));
        $('#csa_password').val(userpwd);
        $('#csa_confirmpassword').val(userpwd);

        var password = '';
        $("#modal_user_pwd").on("keyup", function (e){
            var is_letter = false;
            var is_upper = false;
            var is_number = false;
            var is_special = false;
            pwd_state = false;
            password = $("#modal_user_pwd").val();
            var len = password.length;
            if(pwd_letter == 0 && pwd_upper_lower == 0 && pwd_digital == 0 && pwd_special == 0){
                showPasswordEnterState(0);
                return;
            }
            if(len >= pwd_min && len <= pwd_max)
            {
                var pwd_arr = Array.from(password);
                for(var i = 0; i < password.length; i++){
                    var code = pwd_arr[i];
                    if(pwd_letter == 1){
                        if(code.match(/^[A-Z]$/) != null || code.match(/^[a-z]$/) != null)
                            is_letter = true;
                    }
                    else
                        is_letter = true;
                    if(pwd_upper_lower == 1){
                        if(code.match(/^[A-Z]$/) != null)
                            is_upper = true;
                    }
                    else
                        is_upper = true;
                    if(pwd_digital == 1){
                        if(code.match(/^\d{1,}$/) != null)
                            is_number = true;
                    }
                    else
                        is_number = true;
                    if(pwd_special == 1){
                        var check_spc = /[~!@#$%^&*()_+|<>?:{}]/;
                        is_special = check_spc.test(password);
                    }
                    else
                        is_special = true;
                }

                if(is_letter && is_upper && is_number && is_special) {
                    showPasswordEnterState(1);
                    pwd_state = true;
                }
                else{
                    showPasswordEnterState(0);
                    pwd_state = false;
                }
            }
            else {
                showPasswordEnterState(0);
                pwd_state = false;
            }
        });

        $("#modal_user_confpwd").on("keyup", function (e){
            $('#error_password').css('display', 'none');
        });
        $("#modal_user_name").on("keyup", function (e){
            $('#error_user_name').css('display', 'none');
        });

        if(status == 0)
            $('#ModalChangeAccount').modal('show');
    }
    function showPasswordEnterState(val){
        if(val == 1){
            $('#passwordworings1').css('background', pwd_color);
            $('#pwd_warning_txt').css('display', 'none');
            $('#pwd_check').css('display', 'block');
        }
        else{
            $('#passwordworings1').css('background','#a9a7a7');
            $('#pwd_warning_txt').css('display', 'block');
            $('#pwd_check').css('display', 'none');
        }
    }
    function getSystemSettingPassword() {
        $.ajax({
            method: "POST",
            url: "/company.getSystemSettingPassword",
            statusCode: {
                404: function() {
                    alramMSG("page not found");
                    return false;
                }
            },
            success: function(response) {
                let msg = response.msg;

                if (msg === "ok") {
                    let setpwd = response.setpwd;

                    pwd_min = setpwd.format1_val;
                    pwd_max = setpwd.format2_val;
                    pwd_letter = setpwd.style_letter;
                    pwd_upper_lower = setpwd.style_upper_lower;
                    pwd_digital = setpwd.style_digital;
                    pwd_special = setpwd.style_special;
                    pwd_color = setpwd.colour_val;
                    pwd_warning = setpwd.warning_text;
                    pwd_warinig_color = setpwd.warning_colour_val;
                    $('#pwd_warning_txt').text('*'+pwd_warning);
                    $('#pwd_warning_txt').css('color', pwd_warinig_color);
                    $('#pwd_warning_txt').css('display', 'none');
                    $('#pwd_check').css('display', 'none');
                } else {
                    console.log(response.data.message);
                }
            }
        });
    }

    export default {
        name: "CompanySettingAccount",
        data(){
           return {
               pageid:'company-setting-account-fav',
               mu_setting:'',
               musu_company_setting_account:'',
               btntxt_change:'',
               btntxt_save:'',
               pgtxt_username:'',
               pgtxt_email:'',
               pgtxt_mobile:'',
               pgtxt_password:'',
               pgtxt_confirm:'',
               pgtxt_changeusername:'',
               pgtxt_inconsistentpwd:'',
               pgtxt_enteremail:'',
               pgtxt_entername:'',
               pgtxt_entermobile:'',
               pgtxt_enterpassword:'',
            }
        },
        computed: {
            // 계산된 getter
            title: function () {
                return this.$store.state.curMenu
            },
            cmu_setting:function () {
                return this.mu_setting
            },
            cmusu_company_setting_account:function () {
                return this.musu_company_setting_account
            },
            cpgtxt_username:function () {
                return this.pgtxt_username
            },
            cpgtxt_email:function () {
                return this.pgtxt_email
            },
            cpgtxt_mobile:function () {
                return this.pgtxt_mobile
            },
            cpgtxt_password:function () {
                return this.pgtxt_password
            },
            cpgtxt_confirm:function () {
                return this.pgtxt_confirm
            },
            cbtntxt_save:function () {
                return this.btntxt_save
            },
            cbtntxt_change:function () {
                return this.btntxt_change
            },
            cpgtxt_changeusername:function () {
                return this.pgtxt_changeusername
            },
            cpgtxt_inconsistentpwd:function () {
                return this.pgtxt_inconsistentpwd
            },


            contentchange: function () {//cckd
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    //console.log(obj.hasOwnProperty(key));
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });
                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                return this.$store.state.contentchange;
            },
        },
        watch: {
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
            initpage(){
                getSystemSettingPassword();
                setUserAccountPage();
            },
            SaveSettingAccount(){
                var pgtxt_dbsaved= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
                var username = $('#csa_username').val();
                var email = $('#csa_email').val();
                var mobile = $('#csa_mobile').val();
                var password = $('#csa_password').val();
                var confpwd = $('#csa_confirmpassword').val();
                if(username == null || username == '') {
                    myjs.data.showAlert('pgtxt_entername');
                    return;
                }
                if(email == null || email == '') {
                    myjs.data.showAlert('pgtxt_enteremail');
                    return;
                }
                if(mobile == null || mobile == '') {
                    myjs.data.showAlert('pgtxt_entermobile');
                    return;
                }
                if(password == null || password == '') {
                    myjs.data.showAlert('pgtxt_enterpassword');
                    return;
                }
                if(password != confpwd) {
                    myjs.data.showAlert('pgtxt_inconsistentpwd');
                    return;
                }

                $.ajax({
                    url: '/company.saveUserAccountInfo',
                    type: 'POST',
                    data: {
                        userid:userid,
                        username:username,
                        email:email,
                        mobile:mobile,
                        password:password
                    },
                    async: false,
                    success: function (data) {
                        if(data.msg=="ok"){

                            myjs.data.showAlert(pgtxt_dbsaved);
                        }
                        else if(data.msg=="dup"){
                            myjs.data.showAlert('pgtxt_changeusername');
                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    },
                });
            },
            ChanageCompanyAccountModalBtn(){
                var username = $('#modal_user_name').val();
                var password = $('#modal_user_pwd').val();
                var confpwd = $('#modal_user_confpwd').val();
                if(!pwd_state)
                    return;
                if(password != confpwd){
                    $('#error_password').css('display', 'block');
                    return;
                }
                $.ajax({
                    url: '/company.setCompanyUserPassword',
                    type: 'POST',
                    data: {
                        userid:userid,
                        username:username,
                        password:password
                    },
                    async: false,
                    success: function (data) {
                        if(data.msg=="ok"){
                            $('#csa_username').val(username);
                            $('#csa_password').val(password);
                            $('#csa_confirmpassword').val(password);
                            $('#ModalChangeAccount').modal('hide');
                        }
                        else if(data.msg=="dup"){
                            $('#error_user_name').css('display', 'block');
                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    },
                });
            }


        }//method

    }
</script>

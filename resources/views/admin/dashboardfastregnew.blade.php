<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="/wes-logo.ico">
    <link rel="stylesheet" href="/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="/fonts/fontawesome-all.min.css">
    <link rel="stylesheet" href="/fonts/ionicons.min.css">
    <link rel="stylesheet" href="/c_js/css/intlTelInput.css">
    <link rel="stylesheet" href="/css/studentmanagement.css">
    <link rel="stylesheet" href="/css/p_login_frm.css">
<!-- jQuery library -->
    <script src="/js/jquery/3.4.1/jquery-3.4.1.min.js"></script>
    <!-- Latest compiled JavaScript -->
    <script src="/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="/js/common.js"></script>
    <title>FastRegister-WAAUP</title>
    <style>
        #p_login_frm_1{
            padding: 20px 10px; border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            border-radius: 12px;
        }
        #p_login_frm_1 .p_login_step_sub{
            padding: 8px 5px;
            height: auto;
            display: inline-table;
            width: 100%;
            text-align: center;
            color: rgb(5, 90, 218);
            font-size: 20px;
            font-weight: 600;
        }
        #p_login_frm_1 input{
            background-color: rgb(255, 255, 255);
            border: 1px solid rgb(206, 212, 218);
            width: 100%;
            border-radius: 5px;
            height: 35px;
        }
        #p_login_frm_1 .input-group.mb-3{
            margin-bottom:0!important;
        }
        .dropdown-item{
            padding-left: 0;
            padding-right: 0;
        }
        .fastLangDropdownList{
            margin-right: -5px;
            position: absolute;
            min-width: auto;
            display: none;
        }
        .fastLangDropdownList show{
            display: block;
        }
        .dropdown-menu .dropdown-item{
            padding: 5px 5px !important;
        }
        .iti__flag-box, .iti__country-name{
            margin-right:0px;
        }
    </style>

</head>
<body  style="width:100%;height:100%;padding:0;margin:0">
<?php
   $backimg = property_exists($pageinfo, 'backimg') ? 'background-image: url('.$pageinfo->backimg.')' : '';
   $fastreg_sumbit_color= property_exists($pageinfo, 'fontcolor') ? ' color:'.$pageinfo->fontcolor.';' : ' color:#ffffff;';
   $fastreg_sumbit_bgcolor= property_exists($pageinfo, 'themecolor') ? ' background-color:'.$pageinfo->themecolor.';' : ' background-color:#104f8e;';
   $p_login_frm_1_bgcolor= property_exists($pageinfo, 'backcolor') ? ' background-color:'.$pageinfo->backcolor.';' : ' background-color:#ffffff;';
   $fastregister_title_color= property_exists($pageinfo, 'themecolor') ? ' color:'.$pageinfo->themecolor.';' : ' color:#104f8e;';
   $logocontainerLine= property_exists($pageinfo, 'themecolor') ? ' border-right:2px solid '.$pageinfo->themecolor.';' : ' border-right:2px solid #104f8e;';
   $fast_logo= property_exists($pageinfo, 'logoimg') ? 'src="'.$pageinfo->logoimg.'"' : '';
   $tiptxt= property_exists($pageinfo, 'tiptxt') ? $pageinfo->tiptxt : '';
?>
    <div class="page-container  page-contqainer-logbk" id="page-container-logbk-reg" style="height: 100vh; <?php echo $backimg; ?>"  >
        <div class="row no-gutters" id="fastregister_content">
            <div class="container  mycontainer">
                <div class="contact-clean" style="margin-top: calc(100vh/2 - 45vh);">
                    <!-- three step start -->
                    <div class="content_wrap_frm" id="person_reg_1" style="display: block">
                        <form method="post" enctype="multipart/form-data" name="p_login_frm_1" id="p_login_frm_1" style="text-align: center; <?php echo $p_login_frm_1_bgcolor; ?>">
                            {{ csrf_field() }}
                            <div style="position: relative; margin: 0 20px;">
                                <div class="d-inline-flex">
                                    <h4 class="card-title text-center font-weight-bolder wesg_login_title" id="fastregister_title" style="<?php echo $fastregister_title_color; ?>">{{$frontContents['frtxt_fastreg']}}</h4>
                                    <div class="logocontainerLine" id="logocontainerLine" style="height: 30px; margin: 0 10px; <?php echo $logocontainerLine; ?> "></div>
                                    <img id="fast_logo" style="height: 30px;" <?php echo $fast_logo; ?> >
                                </div>
                                <div style="position: absolute; right: 0px; top: 0px;">
                                    <div id="fastreg-selected-country" style="cursor: pointer;">
                                        <div class="iti__flag-box">
                                            <div class="iti__flag iti__{{$ciso}}"></div>
                                        </div>
                                    </div>

                                    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in fastLangDropdownList" id="fastLangDropdownList">
                                        @if($langlist!=null && $langlist!='')
                                            @foreach($langlist as $lang)
                                                <a class="dropdown-item" id="scEnabledLangs_{{$lang->iso}}" href="/{{$lang->iso}}/fastreg/{{$token}}">
                                                    <div class="iti__flag-box">
                                                        <div class="iti__flag iti__{{$lang->iso}}"></div>
                                                    </div>
                                                </a>
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                            </div>
                            {{--content start--}}
                            <div style="margin: 10px 10px 0px; padding-bottom: 10px; text-align: left;">

                                <div class="row" style="padding: 10px;">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label style="margin-top: 8px; color: rgb(102, 102, 102); width: 100px;" id="fast_email">{{$frontContents['frtxt_email']}}</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group mb-3">
                                            <input type="email" placeholder="" aria-label="email" id="email" name="email" aria-describedby="basic-addon2" class="form-control" style="width: 300px;">
                                        </div>
                                    </div>
                                </div>

                                <div class="row" style="padding: 10px;">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label style="margin-top: 8px; color: rgb(102, 102, 102); width: 100px;" id="fast_username">{{$frontContents['frtxt_username']}}</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group mb-3">
                                            <input type="text" placeholder="" aria-label="username" id="username" name="username" aria-describedby="basic-addon2" class="form-control">
                                        </div>
                                    </div>
                                </div>

                                <div class="row" style="padding: 10px;">
                                    <div class="col-md-12">
                                        <div class="form-group"><label style="margin-top: 8px; color: rgb(102, 102, 102); width: 100px;" id="fast_name">{{$frontContents['frtxt_name']}}</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group mb-3">
                                            <input type="text" placeholder="" aria-label="name" id="name" name="name" aria-describedby="basic-addon2" class="form-control">
                                        </div>
                                    </div>
                                </div>

                                <div class="row" style="padding: 10px 10px 0 10px;">
                                    <div class="col-md-12">
                                        <div class="form-group" style="display: flex;">
                                            <div><label style="margin-top: 8px; color: rgb(102, 102, 102); width: 70px;" id="fast_password">{{$frontContents['frtxt_password']}}</label></div>
                                            <div id="pwd_check" style="line-height: 32px; display: none;">
                                                <svg t="1618377574117" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1122" width="16" height="16"><path d="M811.24864 372.41344a35.83488 35.83488 0 0 0-50.68288 0l-286.01344 286.00832-170.15808-170.15808a35.83488 35.83488 0 0 0-50.68288 0 35.83488 35.83488 0 0 0 0 50.68288l195.49696 195.49696 0.00512 0.00512a35.83488 35.83488 0 0 0 50.68288 0l311.35232-311.35232a35.83488 35.83488 0 0 0 0-50.68288z" fill="#07bd23" p-id="1123"></path><path d="M512 133.12c208.91648 0 378.88 169.96352 378.88 378.88s-169.96352 378.88-378.88 378.88-378.88-169.96352-378.88-378.88 169.96352-378.88 378.88-378.88m0-71.68c-248.83712 0-450.56 201.72288-450.56 450.56s201.72288 450.56 450.56 450.56 450.56-201.72288 450.56-450.56-201.72288-450.56-450.56-450.56z" fill="#07bd23" p-id="1124"></path></svg>
                                            </div>
                                            <div id="pwd_warning_txt" style="line-height: 32px; width:100%; text-align: right; font-size: 1.3vh; display: none;">

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-md-12">
                                        <div class="input-group mb-3">
                                            <input type="password" placeholder="" aria-label="pwd1" id="pwd1" name="pwd1" aria-describedby="basic-addon2" class="form-control">
                                        </div>
                                    </div>
                                 </div>
                                <div class="row" style="padding: 0px;">
                                    <div class="col-md-12" style="padding: 0 30px;">
                                        <div id="passwordworings1" style="padding:0;margin:0; width:28px;background:#a9a7a7; height: 6px;float: right;border-radius: 5px;"></div>
                                        <div id="passwordworings2" style="padding:0;margin-right:2px; width:28px;background:#bfbebe; height: 6px;float: right;border-radius: 5px;"></div>
                                        <div id="passwordworings3" style="padding:0;margin-right:2px; width:28px;background:#e2e1e1; height: 6px;float: right;border-radius: 5px;"></div>
                                    </div>
                                </div>

                                <div class="row" style="padding: 10px;">
                                    <div class="col-md-12">
                                        <div class="form-group" style="display: flex;">
                                            <div>
                                                <label style="margin-top: 8px; color: rgb(102, 102, 102); width: 120px;" id="fast_confirmpassword">{{$frontContents['frtxt_confirmpassword']}}</label>
                                            </div>
                                            <div id="pwd2_warning_txt" style="line-height: 32px; width:100%; text-align: right; font-size: 1.3vh; display: none;">
                                                *{{$frontContents['frtxt_passworddifferent']}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group mb-3">
                                            <input type="password" placeholder="" aria-label="pwd2" id="pwd2" name="pwd2" aria-describedby="basic-addon2" class="form-control">
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="form-group" style="text-align: center;padding: 0 13px;">
                                <button type="button" id="fastreg_sumbit" class="btn btn-primary" style="width: 150px; border: none; border-radius: 5px; font-size: 1rem;<?php echo $fastreg_sumbit_color.$fastreg_sumbit_bgcolor; ?>">{{$frontContents['frtxt_register']}}</button>
                            </div>

                            <div style="text-align: right; padding-right: 25px;" class="fastreg-tip-container">
                                <i style='font-size: 18px;color: #aaa; cursor: pointer;' class='far fastreghelpicon'>&#xf059;</i>
                            </div>

                        </form>

                    </div>
                    <!-- end -->
                </div>
            </div>

        </div>
    </div>

    <!-- The Modal start-->
    <div class="modal fade" id="myAlertModal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title" style="color: #055ada">通知</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body" id="myAlertModalbody">
                    Modal body..
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" style="background-color: #055ada">关闭</button>
                </div>

            </div>
        </div>
    </div>
    <!-- The Modal end-->
    <script>
        /*==  part upload of photo end ==*/

        var fastreg='{{$fastreg}}';
        var ciso = '{{$ciso}}'
        var show_lang = false;
        var fast_token = '{{$token}}';
        var tiptxt = '{{$tiptxt}}';

        var username_maxLength = 0;
        var username_minLength = 0;
        var name_maxLength = 0;
        var name_minLength = 0;
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

        if(tiptxt!='')
        {
            tiptxt = decodeURIComponent(tiptxt);
        }

        function selectLanguage() {
            $('input').click(function () {
                $('#fastLangDropdownList').removeClass('show');
                show_lang = false;
            });

            $('#fastreg-selected-country').click(function () {
                if(!show_lang) {
                    $('.fastLangDropdownList').addClass('show');
                    show_lang = true;
                }
                else{
                    $('.fastLangDropdownList').removeClass('show');
                    show_lang = false;
                }
            });
        }

        function getDefaultItemList() {
            $.ajax({
                method: "POST",
                url: "/admin.getDefaultItemList",
                statusCode: {
                    404: function() {
                        alramMSG("page not found");
                        return false;
                    }
                },
                success: function(response) {
                    let msg = response.msg;

                    if (msg === "ok") {
                        let lists = response.list;
                        let setpwd = response.setpwd;
                        if(lists.length <= 0)
                            return;
                        for(var i = 0; i < lists.length; i++) {
                            var elem = lists[i];

                            var username_length = elem.val_3.split("-");
                            var minValue = username_length[0];
                            var maxValue = username_length[1];
                            username_maxLength = parseInt(maxValue);
                            username_minLength = parseInt(minValue);

                            var name_length = elem.val_4.split("-");
                            var minValue = name_length[0];
                            var maxValue = name_length[1];
                            name_maxLength = parseInt(maxValue);
                            name_minLength = parseInt(minValue);
                        }
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

        $(document).ready(function (){

            selectLanguage();
            getDefaultItemList();

            var docH = $(document).height();
            var password = '';

            $("#pwd1").on("keyup", function (e){
                var is_letter = false;
                var is_upper = false;
                var is_number = false;
                var is_special = false;
                pwd_state = false;
                password = $("#pwd1").val();
                var len = password.length;
                if(pwd_letter == 0 && pwd_upper_lower == 0 && pwd_digital == 0 && pwd_special == 0){
                    showPasswordEnterState(0);
                    return;
                }
                if(len >= pwd_min && len <= pwd_max)
                {
                    var pwd_arr = Array.from(password);
                    for(var i = 0; i < password.length; i++){
                        code = pwd_arr[i];
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

            $('#fastreg_sumbit').click(function (){
                var email = $.trim($("#email").val());
                var username = $.trim($("#username").val());
                var name = $.trim($("#name").val());
                var pwd1 = $.trim($("#pwd1").val());
                var pwd2 = $.trim($("#pwd2").val());

                if(email=="")
                {
                    alramMSG("This email must not empty.");
                    return false;
                }

                if(username=="")
                {
                    alramMSG("This username must not empty.");
                    return false;
                }

                if(name=="")
                {
                    alramMSG("This name have must not empty.");
                    return false;
                }

                if(pwd1=="" || pwd2=="")
                {
                    alramMSG('This password1 and password2 must not empty.');
                    return false;
                }

                /*if(pwd1!==pwd2){
                    alramMSG('Must equal password1 and password2');
                    return false;
                }*/

                if (username.length < username_minLength || username.length > username_maxLength) {
                    alramMSG("The length of Username must be between " + username_minLength + " and " + username_maxLength);
                    return;
                }

                if (name.length < name_minLength || name.length > name_maxLength) {
                    alramMSG("The length of Name must be between " + name_minLength + " and " + name_maxLength);
                    return;
                }
                if(!pwd_state)
                    return;
                var pwdConfirm = $("#pwd2").val();
                if(pwdConfirm != password){
                    $('#pwd2_warning_txt').css('display', 'block');
                    $('#pwd2_warning_txt').css('color', pwd_warinig_color);
                    return;
                }
                else
                    $('#pwd2_warning_txt').css('display', 'none');

                var frm = document.getElementById("p_login_frm_1");
                var CSRF_TOKEN = frm._token.value;
                $.ajax({
                    method: "POST",
                    url: "/user.fastreg",
                    data: {_token: CSRF_TOKEN
                        , fast_token:fast_token
                        , name:name
                        , username: username
                        , qualify:''
                        , contact:''
                        , contactmethod:''
                        , contactaddr:''
                        , email:email
                        , password:pwd1
                        , phonenumEmail:''
                        , uploaddoc:''
                        , photo:''
                        , partwho:2
                    },
                    statusCode: {
                        404: function() {
                            alramMSG("page not found");
                            return false;
                        }
                    },
                    success: function(response) {
                        console.log(response.status);
                        if(response.status=="dup")
                        {
                            alramMSG("A user with the same ID or email already exists. Please enter another ID or email.");
                            return false;
                        }
                        else if(response.status=="ok")
                        {
                            alramMSG("Success Register.");
                            setTimeout(function () {
                                window.location.href="/login";
                            },5000);
                        }
                        else //response.status=="dberr"
                        {
                            alramMSG("Error To write into Database.");
                            return false;
                        }
                    }
                });

            });

            $('.fastreghelpicon').mouseenter(function () {
                if(tiptxt=='')return;
                $('.fastregTip').remove();
                var tag = '<div class="fastregTip" style="background-color: rgb(250, 255, 189); text-align: left; border-radius: 5px; border: 1px solid #b1afaf">';
                tag += '<pre style="margin:5px; font-size: 14px; color: #b1afaf;">'+tiptxt+'</pre></div>';
                $('.fastreg-tip-container').append(tag);
                $('.fastregTip').css({'position':'relative','left':'5%','top':'10px'});
            });

            $('.fastreghelpicon').mouseleave(function () {
                $('.fastregTip').remove();
            });


        });
    </script>

</body>
</html>

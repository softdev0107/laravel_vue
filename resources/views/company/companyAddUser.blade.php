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
    <title>Add CompanyUser</title>
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
            border-radius: 20px;
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
   $add_sumbit_color= property_exists($pageinfo, 'fontcolor') ? ' color:'.$pageinfo->fontcolor.';' : ' color:#ffffff;';
   $add_sumbit_bgcolor= property_exists($pageinfo, 'themecolor') ? ' background-color:'.$pageinfo->themecolor.';' : ' background-color:#104f8e;';
   $p_login_frm_1_bgcolor= property_exists($pageinfo, 'backcolor') ? ' background-color:'.$pageinfo->backcolor.';' : ' background-color:#ffffff;';
   $add_title_color= property_exists($pageinfo, 'themecolor') ? ' color:'.$pageinfo->themecolor.';' : ' color:#104f8e;';
?>
    <div class="page-container  page-contqainer-logbk" id="page-container-logbk-reg" style="height: 100vh; <?php echo $backimg; ?>"  >
        <div class="row no-gutters" id="fastregister_content">
            <div class="container  mycontainer">
                <div class="contact-clean" style="margin-top: calc(100vh/2 - 35vh);">
                    <!-- three step start -->
                    <div class="content_wrap_frm" id="person_reg_1" style="display: block">
                        <form method="post" enctype="multipart/form-data" name="p_login_frm_1" id="p_login_frm_1" style="text-align: center; <?php echo $p_login_frm_1_bgcolor; ?>">
                            {{ csrf_field() }}
                            <div style="position: relative; margin: 0 20px;">
                                <div class="d-inline-flex">
                                    <h4 class="card-title text-center font-weight-bolder wesg_login_title" id="fastregister_title" style="<?php echo $add_title_color; ?>">{{$frontContents['frtxt_adduser']}}</h4>
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
                                                <a class="dropdown-item" id="scEnabledLangs_{{$lang->iso}}" href="/{{$lang->iso}}/addUser">
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
                                            <label style="margin-top: 8px; color: rgb(102, 102, 102); width: 100px;" id="company_account">{{$frontContents['frtxt_account']}}</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group mb-3">
                                            <input type="text" placeholder="{{$frontContents['frtxt_username']}} / {{$frontContents['frtxt_email']}} / {{$frontContents['frtxt_mobile']}}" aria-label="username" id="username" name="username" aria-describedby="basic-addon2" class="form-control">
                                        </div>
                                    </div>
                                </div>

                                <div class="row" style="padding: 10px 10px 0 10px;">
                                    <div class="col-md-12">
                                        <div class="form-group" style="display: flex;">
                                            <div><label style="margin-top: 8px; color: rgb(102, 102, 102); width: 70px;" id="fast_password">{{$frontContents['frtxt_password']}}</label></div>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-md-12">
                                        <div class="input-group mb-3">
                                            <input type="password" placeholder="" aria-label="pwd1" id="pwd1" name="pwd1" aria-describedby="basic-addon2" class="form-control">
                                        </div>
                                    </div>
                                 </div>

                            </div>

                            <div class="form-group" style="text-align: center;padding: 0 13px;">
                                <button type="button" id="fastreg_sumbit" class="btn btn-primary" style="width: 140px; border: none; border-radius: 20px; font-size: 1rem;<?php echo $add_sumbit_color.$add_sumbit_bgcolor; ?>">+ {{$frontContents['frtxt_add']}}</button>
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

        var ciso = '{{$ciso}}'
        var show_lang = false;

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

        $(document).ready(function (){

            selectLanguage();

            var docH = $(document).height();
            var password = '';

            $('#fastreg_sumbit').click(function (){
                var username = $.trim($("#username").val());
                var pwd1 = $.trim($("#pwd1").val());

                if(username=="")
                {
                    alramMSG("This username must not empty.");
                    return false;
                }

                if(pwd1=="")
                {
                    alramMSG('This password1 and password2 must not empty.');
                    return false;
                }
                var frm = document.getElementById("p_login_frm_1");
                var CSRF_TOKEN = frm._token.value;
                $.ajax({
                    method: "POST",
                    url: "/company.setAddUser",
                    data: {_token: CSRF_TOKEN
                        , username: username
                        , password:pwd1
                    },
                    statusCode: {
                        404: function() {
                            alramMSG("page not found");
                            return false;
                        }
                    },
                    success: function(response) {
                        if(response.status=="ok")
                        {
                            alramMSG("Success Add User.");
                            /*setTimeout(function () {
                                window.location.href="/login";
                            },5000);*/
                        }
                        else
                        {
                            alramMSG("Error To write into Database.");
                            return false;
                        }
                    }
                });

            });

        });
    </script>

</body>
</html>

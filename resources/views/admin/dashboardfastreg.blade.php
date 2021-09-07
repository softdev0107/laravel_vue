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
    <link rel="stylesheet" href="/css/studentmanagement.css">
    <link rel="stylesheet" href="/css/p_login_frm.css">
<!-- jQuery library -->
    <script src="/js/jquery/3.4.1/jquery-3.4.1.min.js"></script>
    <!-- Popper JS -->
    <script src="/js/popper.min.js"></script>
    <!-- Latest compiled JavaScript -->
    <script src="/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="/js/common.js"></script>
    <title>学校管理-WES</title>
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
            border-radius: 17px;
            height: 35px;
        }
        #p_login_frm_1 .input-group.mb-3{
            margin-bottom:0!important;
        }
    </style>

</head>
<body  style="width:100%;height:100%;padding:0;margin:0">
    <div class="page-container  page-contqainer-logbk" id="page-container-logbk-reg">
        <script>
            var ww=document.documentElement.clientWidth;
            //var ww=window.innerWidth;
            var wh=document.documentElement.clientHeight;
            //alert(wh);
            document.getElementById('page-container-logbk-reg').style.height=""+wh+"px";
        </script>
        <!-- start part -->
        <div class="row no-gutters">
            <div class="container  mycontainer">
                <div class="contact-clean">
                    <!-- three step start -->
                    <div class="content_wrap_frm" id="person_reg_1" style="display: block">
                        <form  method="post" enctype="multipart/form-data" name="p_login_frm_1" id="p_login_frm_1">
                            {{ csrf_field() }}
                            <div class="form-group">
                                <div class="p_login_step_sub" style="padding: 8px 5px;height: auto;display: inline-table;width: 100%">
                                    快速注册
                                </div>
                            </div>
                            {{--content start--}}
                            <div style="background-color: rgb(249, 251, 250); margin: 10px 10px 0px; padding-bottom: 10px;">

                                <div class="row" style="padding: 10px;">
                                    <div class="col-md-1">
                                        <div class="form-group">
                                            <label style="margin-top: 8px; color: rgb(102, 102, 102); width: 100px;">Email</label>
                                        </div>
                                    </div>
                                    <div class="col-md-11" style="padding-left: 62px;">
                                        <div class="input-group mb-3">
                                            <input type="email" placeholder="" aria-label="email" id="email" name="email" aria-describedby="basic-addon2" class="form-control" style="background-color: rgb(255, 255, 255); border: 1px solid rgb(206, 212, 218); width: 300px;">
                                        </div>
                                    </div>
                                </div>

                                <div class="row" style="padding: 10px;">
                                    <div class="col-md-1">
                                        <div class="form-group">
                                            <label style="margin-top: 8px; color: rgb(102, 102, 102); width: 100px;">User name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-11" style="padding-left: 62px;">
                                        <div class="input-group mb-3">
                                            <input type="text" placeholder="" aria-label="username" id="username" name="username" aria-describedby="basic-addon2" class="form-control" style="background-color: rgb(255, 255, 255); border: 1px solid rgb(206, 212, 218); width: 300px;">
                                        </div>
                                    </div>
                                </div>

                                <div class="row" style="padding: 10px;">
                                    <div class="col-md-1">
                                        <div class="form-group"><label style="margin-top: 8px; color: rgb(102, 102, 102); width: 100px;">Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-11" style="padding-left: 62px;">
                                        <div class="input-group mb-3">
                                            <input type="text" placeholder="" aria-label="name" id="name" name="name" aria-describedby="basic-addon2" class="form-control" style="background-color: rgb(255, 255, 255); border: 1px solid rgb(206, 212, 218); width: 300px;">
                                        </div>
                                    </div>
                                </div>

                                <div class="row" style="padding: 10px 10px 0 10px;">
                                    <div class="col-md-1">
                                        <div class="form-group">
                                            <label style="margin-top: 8px; color: rgb(102, 102, 102); width: 100px;">Password</label>
                                        </div>
                                    </div>
                                    <div class="col-xl-11 col-md-11" style="padding-left: 62px;">
                                        <div class="input-group mb-3">
                                            <input type="password" placeholder="" aria-label="pwd1" id="pwd1" name="pwd1" aria-describedby="basic-addon2" class="form-control" style="background-color: rgb(255, 255, 255); border: 1px solid rgb(206, 212, 218); width: 300px;">
                                        </div>
                                    </div>
                                 </div>
                                <div class="row" style="padding: 0px;">
                                    <div class="col-md-12" style="padding: 0 30px;">
                                        <div id="passwordworings" style="padding:0;margin:0; width:28px;background:#bfbebe; height: 6px;float: right;border-radius: 5px;"></div>
                                    </div>
                                </div>

                                <div class="row" style="padding: 10px;">
                                    <div class="col-md-1">
                                        <div class="form-group">
                                            <label style="margin-top: 8px; color: rgb(102, 102, 102); width: 100px;">Confirm password</label>
                                        </div>
                                    </div>
                                    <div class="col-md-11" style="padding-left: 62px;">
                                        <div class="input-group mb-3">
                                            <input type="password" placeholder="" aria-label="pwd2" id="pwd2" name="pwd2" aria-describedby="basic-addon2" class="form-control" style="background-color: rgb(255, 255, 255); border: 1px solid rgb(206, 212, 218); width: 300px;">
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="form-group" style="text-align: center;padding: 0 13px;">
                                <button class="btn btn-primary p_login_next_bg_btn" style="margin-top:0;text-transform:none" id="person_reg_next_1" type="button">Register<!--注册--></button>
                            </div>

                            <div style="text-align: right">
{{--                                <input id="person_content" style="border: 2px solid #aaaaaa;" value="Only teachers are allowed to register">--}}
                                <span id="person_content" style="border: 2px solid #aaaaaa;"></span>
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
                    <h4 class="modal-title">通知</h4>
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

        function deletefasttoken()
        {
           // alert(fastreg);
            $.ajax({
                method: "POST",
                url: "/admin.deletefasttoken",
                data: {
                    fastreg:fastreg
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
                        console.log(response.status);
                    }
                    else //response.status=="dberr"
                    {
                        console.log("Error  in Database.");
                    }
                }
            });
        }

        function getappearanceData() {
            $.ajax({
                method: "POST",
                url: "/admin.ssrGetAppearance",
                data: {
                    transLang: "en-1"
                },
                success: function (response) {
                    if (response.msg == "ok") {
                        if(response.item != null && response.item != "") {
                            var dt = $.parseJSON(response.item);
                            var ct = decodeURIComponent(dt.help);
                            $("#person_content").text(ct.substring(0, dt.maxline));
                            $("#person_content").css("color", dt.fontcolor);
                            $("#person_content").css("border-color", dt.bordercolor);
                            $("#person_content").css("background", dt.backcolor);
                            $("#page-container-logbk-reg").css("background-image", "url(/uploads/images/wesimg/" + dt.advancss + ")");
                        }
                    } else {
                        console.log("Error in DB");
                    }
                },
                error: function (jqXHR, errdata, errorThrown) {
                    console.log(errdata);
                }
            });
        }

        if(fastreg!=undefined && fastreg!=null && fastreg != "")
           deletefasttoken();

        $(document).ready(function (){
            getappearanceData();

            var docH = $(document).height();

            $("#pwd1").on("keyup", function (){
                var pwdstr=$("#pwd1").val();
                var len=pwdstr.length;
                if(len<1)
                {
                    $('#passwordworings').css('background','#bfbebe');
                }
                else if(len<3)
                {
                    $('#passwordworings').css('background','#f14e5c');
                }
                else if(len<6)
                {
                    $('#passwordworings').css('background','#f8ac16');
                }
                else
                {
                    $('#passwordworings').css('background','#1647f8');
                }
            });

            $('#person_reg_next_1').click(function (){
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

                if(pwd1!==pwd2){
                    alramMSG('Must equal password1 and password2');
                    return false;
                }

                var frm = document.getElementById("p_login_frm_1");
                var CSRF_TOKEN = frm._token.value;
                $.ajax({
                    method: "POST",
                    url: "/user.fastreg",
                    data: {_token: CSRF_TOKEN
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
                        if(response.status=="dup")
                        {
                            alramMSG("A user with the same ID or email already exists.\n" +
                                "Please enter another ID or email.");
                            return false;
                        }
                        else if(response.status=="ok")
                        {
                            alramMSG("Success Register.");
                            setTimeout(function () {
                                window.location.href="/home";
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

        });
    </script>

</body>
</html>

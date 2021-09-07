<!doctype html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <link rel="icon" href="<?php echo e($favico); ?>">
    <link rel="stylesheet" href="/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo e(asset('/fonts/fontawesome-all.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('/fonts/ionicons.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('/c_js/css/intlTelInput.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('/css/app.css')); ?>">
    <!-- jQuery library -->
    <script type="text/javascript" type="text/javascript" src="<?php echo e(asset('/js/jquery/3.4.1/jquery-3.4.1.min.js')); ?>"></script>
    <!-- Latest compiled JavaScript -->
    <script type="text/javascript" type="text/javascript" src="<?php echo e(asset('/bootstrap/4.4.1/js/bootstrap.bundle.min.js')); ?>"></script>
    <script type="text/javascript" src="<?php echo e(asset('/js/common.js')); ?>"></script>

    <title>LOGIN-WES</title>
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
    </style>

</head>
<body  style="width:100%;height:100%;padding:0;margin:0">
    <div class="page-container  page-contqainer-logbk" id="page-container-logbk-reg">
    <?php
        if($background==null || $background=='')
            $loginbk = 'wesbk.png';
        else
            $loginbk = $background;

    ?>
        <!-- content-center -->
        <div style="flex-direction: column; background: url('<?php echo e($loginbk); ?>'); position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px; justify-content: center; background-size:cover; background-repeat: no-repeat; align-items: center; display: flex;">
            <div class="d-flex flex-column" id="login_container">
                <div class="card h-100 border-0">
                    <div class="card-body wesg_login_body" style="background-color: <?php echo e($backcolor); ?>; text-align: center;">
                         <div class="d-inline-flex">
                             <h4 class="card-title text-center font-weight-bolder wesg_login_title" style="color: <?php echo e($themecolor); ?>"><?php echo e($frtxt['frtxt_login']); ?></h4>
                         <?php
                         if($logo != null && $logo != ''){
                         ?>
                             <div class="logocontainerLine" style="border-right: 2px solid <?php echo e($themecolor); ?>; height: 30px; margin: 0 10px;"></div>
                             <img src="<?php echo e($logo); ?>" style="height: 30px;">
                         <?php
                         }
                         ?>
                         </div>
                        <form action="admin.temp" enctype="multipart/form-data" method="post" class=""  name="wesg_login_frm" id="wesg_login_frm" style="text-align: left;">
                             <div class="form-group wesg_login_uname">
                                 <label for="userinfo" style="font-weight: bold"><?php echo e($frtxt['frtxt_account']); ?></label>
                                 <input type="text" class="form-control loginfctrl" name="userinfo" id="userinfo" placeholder="<?php echo e($frtxt['frtxt_username']); ?> | <?php echo e($frtxt['frtxt_mobile']); ?> | <?php echo e($frtxt['frtxt_email']); ?>"  >
                                 <div class="valid-feedback"><?php echo e($frtxt['frtxt_valid']); ?>.</div>
                                 <div class="invalid-feedback"><?php echo e($frtxt['frtxt_please']); ?>.</div>
                             </div>
                             <div class="form-group wesg_login_pwd">
                                 <label for="tpwd" style="font-weight: bold"><?php echo e($frtxt['frtxt_password']); ?></label>
                                 <input type="password" class="form-control loginfctrl" name="tpwd" id="tpwd" placeholder="<?php echo e($frtxt['frtxt_enter']); ?> <?php echo e($frtxt['frtxt_pwd']); ?>" autocomplete="on" >
                                 <div class="valid-feedback"><?php echo e($frtxt['frtxt_valid']); ?>.</div>
                                 <div class="invalid-feedback"><?php echo e($frtxt['frtxt_please']); ?>.</div>
                             </div>
                             <div class="form-group d-flex flex-row wesg-login-btns" style="align-items:center;margin-bottom:0.5rem">
                                 <div class="col-md-7 text-right">
                                     <button type="button" class="btn btn-primary" id="dashboardLogin_btn" style="width: 100px; color: <?php echo e($fontcolor); ?>; border: none; background-color: <?php echo e($themecolor); ?>"><?php echo e($frtxt['frtxt_login']); ?></button>
                                 </div>
                                 <div class="wesg-retpwd-btn" style="margin-top: 20px; font-weight: bold;">
                                     <a href="#" style="color:<?php echo e($themecolor); ?>; text-decoration: underline;"><?php echo e($frtxt['frtxt_forget']); ?> <?php echo e($frtxt['frtxt_password']); ?> >></a>
                                 </div>
                             </div>
                             <div style="text-align: right" class="wes-instruction-container">
                                 <i style='font-size: 18px;color: #aaa;cursor: pointer;' class='far weshelpicon'>&#xf059;</i>

                             </div>
                        </form>
                    </div>
                </div>
            </div>
            <form action="/admin.dashboard" enctype="multipart/form-data" id="adminlogin_frm" name="adminlogin_frm" method="post" style="width:100%;height:1px;">
                <?php echo e(csrf_field()); ?>

                <input type="hidden" class="form-control" id="email"  name="email" value="">
                <input type="hidden" class="form-control" id="pwd"  name="pwd" value="">
            </form>
        </div>
    </div>
    <script type="text/javascript">
        $(document).ready(function(){
            var themecolor = '<?php echo e($themecolor); ?>';
            var fontcolor = '<?php echo e($fontcolor); ?>';
            var tiptxt = '<?php echo e($tiptxt); ?>';
            if(tiptxt!='')
            {
                tiptxt = decodeURIComponent(tiptxt);
            }

            $('#dashboardLogin_btn').click(function (event) {
                event.preventDefault();
                event.stopPropagation();
                var userinfo = $.trim($("#userinfo").val());
                var pwd = $.trim($("#tpwd").val());

                if(userinfo=="" || pwd==""){
                    $("#wesg_login_frm").addClass('needs-validation');
                    return false;
                }

                $.ajax({
                    url: '/userValidCheck',
                    method: 'POST',
                    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),'userinfo':userinfo,'pwd':pwd},
                    async: true,
                    success: function (data) {
                        if(data.msg=="ok")
                        {
                            $("#email").val(userinfo);
                            $("#pwd").val(pwd);
                            $("#adminlogin_frm").submit();
                        }
                        else
                        {
                            alert("invalid admin info. please again.");
                            return false;
                        }

                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        alert(errdata);
						console.log(jqXHR.statusText);
                        return false;
                    }
                });

            });

            $('.weshelpicon').mouseenter(function () {
                if(tiptxt=='')return;
                $('.instructionToolTip').remove();
                var tag = '<div class="instructionToolTip" style="background-color: rgb(250, 255, 189); text-align: left; border-radius: 5px; border: 1px solid '+themecolor+'">';
                tag += '<pre style="margin:5px; font-size: 14px; color: '+themecolor+';">'+tiptxt+'</pre></div>';
                $('.wes-instruction-container').append(tag);
                $('.instructionToolTip').css({'position':'relative','left':'5%','top':'10px'});
            });

            $('.weshelpicon').mouseleave(function () {
                $('.instructionToolTip').remove();
            });

        });
    </script>


</body>
</html>
<?php /**PATH D:\xampp\htdocs\wes\resources\views/wes/wesGloabalLoginNew.blade.php ENDPATH**/ ?>
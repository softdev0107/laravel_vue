@extends('layouts.home_layout')
@section('content')
    <?php
        if($loginpagebackground==null || $loginpagebackground=='')
            $loginbk = 'wesbk.png';
        else
            $loginbk = $loginpagebackground;

    $instruction ='';
    if($loginpageinstruction==null || $loginpagebackground=='')
        $instruction = json_decode($loginpageinstruction);

    ?>
    <section class="section-main" style="background: url('{{$loginbk}}'); background-size: cover; background-repeat: no-repeat; position: relative; height: calc(100vh - 10.8vh/*120px*/ - 27vh);">
        <!-- content-center -->
        <div style="flex-direction: column; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px; justify-content: center; align-items: center; display: flex;">
                 <div class="d-flex flex-column" id="login_container">

                             <div class="card h-100 border-0">
                                 <div class="card-body wesg_login_body">
                                     <h4 class="card-title text-center font-weight-bolder wesg_login_title">{{$frtxt['frtxt_login']}}</h4>
                                     <form action="admin.temp" enctype="multipart/form-data" method="post" class=""  name="wesg_login_frm" id="wesg_login_frm">
                                         <div class="form-group wesg_login_uname">
                                             <label for="userinfo" style="font-weight: bold">{{$frtxt['frtxt_account']}}</label>
                                             <input type="text" class="form-control loginfctrl" name="userinfo" id="userinfo" placeholder="{{$frtxt['frtxt_username']}} | {{$frtxt['frtxt_mobile']}} | {{$frtxt['frtxt_email']}}"  >
                                             <div class="valid-feedback">{{$frtxt['frtxt_valid']}}.</div>
                                             <div class="invalid-feedback">{{$frtxt['frtxt_please']}}.</div>
                                         </div>
                                         <div class="form-group wesg_login_pwd">
                                             <label for="tpwd" style="font-weight: bold">{{$frtxt['frtxt_password']}}</label>
                                             <input type="password" class="form-control loginfctrl" name="tpwd" id="tpwd" placeholder="{{$frtxt['frtxt_enter']}} {{$frtxt['frtxt_pwd']}}" autocomplete="on" >
                                             <div class="valid-feedback">{{$frtxt['frtxt_valid']}}.</div>
                                             <div class="invalid-feedback">{{$frtxt['frtxt_please']}}.</div>
                                         </div>
                                         <div class="form-group d-flex flex-row wesg-login-btns" style="align-items:center;margin-bottom:0.5rem">
                                             <div>
                                                 <a href="#" style="color:#2e4b94;"><< {{$frtxt['frtxt_registered']}}</a>
                                             </div>
                                             <div class="wesg-submit-btn">
                                                 <button type="submit" class="btn btn-primary">{{$frtxt['frtxt_login']}}</button>
                                             </div>
                                             <div class="wesg-retpwd-btn">
                                                 <a href="#" style="color:#af6067;text-decoration: underline;">{{$frtxt['frtxt_retrieve']}} {{$frtxt['frtxt_password']}}</a>
                                             </div>
                                         </div>
                                         <div style="text-align: right" class="wes-instruction-container">
                                             <i style='font-size: 18px;color: #aaa;cursor: pointer' class='far weshelpicon'>&#xf059;</i>
                                             {{--<div class="tooltip">
                                                 <i style='font-size: 18px;color: #aaa;cursor: pointer' class='far weshelpicon'>&#xf059;</i>
                                                 <span class="tooltiptext" style=" text-align:justify;">
                                                     Tooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip
                                                     textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip textTooltip
                                                     textTooltip textTooltip textTooltip textTooltip textTooltip text
                                                 </span>
                                             </div>--}}
                                         </div>
                                     </form>
                                 </div>
                             </div>
                </div>
            {{--<form action="admin.userinfopage" enctype="multipart/form-data" id="adminlogin_frm" name="adminlogin_frm" method="post" style="width:100%;height:1px;">--}}
            <form action="/admin.dashboard" enctype="multipart/form-data" id="adminlogin_frm" name="adminlogin_frm" method="post" style="width:100%;height:1px;">
                {{ csrf_field() }}
                <input type="hidden" class="form-control" id="email"  name="email" value="">
                <input type="hidden" class="form-control" id="pwd"  name="pwd" value="">
            </form>
        </div>
    </section>
    <script type="text/javascript">
        $(document).ready(function(){
            var instruction = '{{$loginpageinstruction}}';
            var backcolor='';
            var bordercolor='';
            var fontcolor='';
            var help='';
            if(instruction!='')
            {
                instruction = htmldecodejs(instruction);
                instruction = $.parseJSON(instruction);

                backcolor='background:'+instruction.backcolor+';';
                bordercolor='border:1px solid; border-color:'+instruction.bordercolor+';';
                fontcolor='color:'+instruction.fontcolor+';';
                help = decodeURIComponent(instruction.help);
            }
            else
            {
                backcolor='background: #ffffff;';
                bordercolor='border:1px solid #d6d6d6;';
                fontcolor='font-color: #00000099;';
            }
           /* //console.log(instruction);
            window.addEventListener('load', function() {
                // Get the forms we want to add validation styles to
                var forms = document.getElementsByClassName('needs-validation');
                // Loop over them and prevent submission
                var validation = Array.prototype.filter.call(forms, function(form) {
                    form.addEventListener('submit', function(event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                            console.log('ok');
                        }
                        else{
                            console.log('no');
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);*/

            $('#wesg_login_frm').submit(function (event) {
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
                    async: false,
                    success: function (data) {
                        if(data.msg=="ok")
                        {/*
                            if(data.approve!="ys")
                            {
                                alramMSG("you have not admin permision!");
                                return false;
                            }
                            else*/
                            {
                                $("#email").val(userinfo);
                                $("#pwd").val(pwd);
                                $("#adminlogin_frm").submit();
                            }
                        }
                        else
                        {
                            alramMSG("invalid admin info. please again.");
                            return false;
                        }

                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        alert('Error ajax');
                        return false;
                    },
                    cache: false,
                    contentType: false,
                    processData: false
                });

            });

            $('.weshelpicon').mouseenter(function () {
                if(help=='')return;
                $('.instructionToolTip').remove();
                var tag = '<div class="instructionToolTip" style="'+backcolor + bordercolor + '"><pre style="margin:0;font-size: 14px; '+fontcolor+'">'+help+'</pre></div>';
                $('.wes-instruction-container').append(tag);
                $('.instructionToolTip').css({'position':'relative','left':'5%','top':'10px'});
            });

            $('.weshelpicon').mouseleave(function () {
                $('.instructionToolTip').remove();
            });

        });
    </script>
@endsection

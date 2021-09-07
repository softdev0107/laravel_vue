@extends('layouts.home_layout')
@section('content')
    <section class="section-main">

    <?php
        $maxline = "";
        $fontcolor = "#000000";
        $bordercolor = "#000000";
        $backcolor = "#ffffff";
        $help = "";
        $advancss = "";
        if($orgHelper != null && $orgHelper != ''){
            $orgset = json_decode($orgHelper);
            $maxline = $orgset->maxline;
            $fontcolor = $orgset->fontcolor;
            $bordercolor = $orgset->bordercolor;
            $backcolor = $orgset->backcolor;
            $help = $orgset->help;
            $advancss = 'background:url(/uploads/images/wesimg/'.$orgset->advancss.')';;
        }


    ?>

        <!-- content-center -->
        <div class="section-main-div">
            <div class="reg_container" id="user_register_ui">
                <div class="card h-100 border-0">
                    <div class="card-body wesg_reg_body">
                        <div class="wesg_reg_formcontainer">
                        <form enctype="multipart/form-data" method="post" class="" name="register_user" id="register_user">
                            {{ csrf_field() }}
                            <input type="hidden" id="country_code" name="country_code" value="86"/>
                            <input type="hidden" id="country_name" name="country_name" value="China"/>
                            <ul class="nav nav-tabs" style="margin-bottom: 0.15rem; border-bottom: 0px;">
                                <li class="nav-item active" id="li-left-p" style="width: 100%!important;border-bottom: 0px">
                                    <a class="nav-link" data-toggle="tab" id="t_org" href="#c_org">{{$frtxt['frtxt_corporate']}} / {{$frtxt['frtxt_institution']}} {{$frtxt['frtxt_application']}}</a>
                                </li>
                            </ul>
                            <div id="c_org" class="tab_container active">
                                <div class="c_org_sub active" id="c_org_m">
                                    <div class="form-group" >
                                        <label class="register_set" id="label_u_person" for="u_person">*{{$frtxt['frtxt_mainperson']}}:</label>
                                        <input type="text" class="form-control regctrl" name="u_person" id="u_person" placeholder="">
<!--                                        <div class="invalid-feedback">{{$frtxt['frtxt_please']}}.</div>
                                        <div class="invalid-feedback text-right feedback-u_person">{{$frtxt['frtxt_please']}}.</div>-->
                                    </div>
                                    <div class="form-group">
                                        <label class="register_set" id="label_u_email" for="u_email">*{{$frtxt['frtxt_email']}}:</label>
                                        <input type="text" class="form-control regctrl" name="u_email" id="u_email" placeholder="">
<!--                                        <div class="invalid-feedback">{{$frtxt['frtxt_please']}}.</div>
                                        <div class="invalid-feedback text-right feedback-u_email">{{$frtxt['frtxt_please']}}.</div>-->
                                    </div>

                                    <div class="form-group">
                                        <label class="register_set" id="label_u_mobile" for="u_mobile">*{{$frtxt['frtxt_mobile']}}:</label>
                                        <label class="register_set" id="label_u_country">{{$frtxt['frtxt_country']}}/{{$frtxt['frtxt_region']}}</label>
                                        <div class="input-group">
                                            <div class="input-group-text dropdown-toggle" id="mobileDropdownBtn" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="">
                                                <div class="iti__flag iti__cn" style="margin-right:8px"></div>
                                                <div class="iti__selected-dial-code" style="font-size: 13px;">+86</div>
                                            </div>
                                            <div id="mobileDropdownList" aria-labelledby="mobileDropdown" class="dropdown-menu dropdown-menu-right p-0">
                                            <?php
                                                for ($i = 0; $i < count($mobileCountry); $i++){
                                                    $country_name = $mobileCountry[$i][0];
                                                    $country_code = $mobileCountry[$i][1];
                                                    $number_code = $mobileCountry[$i][2]
                                            ?>
                                                <div class="input-group-text u_mobile_drop_item border-b" id="tel_<?php echo $country_code.'-'.$number_code.'-'.$country_name; ?>" title="<?php echo $country_name; ?>" style="color: #212529;padding:.375rem .75rem">
                                                     <div class="iti__flag iti__<?php echo $country_code; ?>" style="margin-right:8px"></div>
                                                     <div class="iti__selected-dial-code" style="font-size: 13px;">+<?php echo $number_code; ?></div>
                                                </div>
                                            <?php
                                                }
                                            ?>
                                            </div>
                                            <input type="tel" class="form-control regctrl" name="u_mobile" id="u_mobile" aria-label="user mobile">
                                            <span class="input-group-text register_set" id="u_mobile_txt" style="justify-content: flex-end;">China</span>
                                        </div>
                                    </div>

                                    <div class="form-group" style="position: relative;">
                                        <label class="register_set" id="label_u_name" for="u_name" style="margin-bottom: 5px;">*{{$frtxt['frtxt_organization']}} {{$frtxt['frtxt_name']}}:</label>
                                        <input type="text" class="form-control regctrl" name="u_name" id="u_name" placeholder="">
<!--                                        <div class="invalid-feedback">{{$frtxt['frtxt_please']}}.</div>
                                        <div class="invalid-feedback text-right  feedback-u_name">{{$frtxt['frtxt_please']}}.</div>-->
                                    </div>
                                    <div class="form-group">
                                        <label class="register_set" id="label_license_img" for="license_img">*{{$frtxt['frtxt_business']}} {{$frtxt['frtxt_license']}}:</label>
                                        <div style="display: none;">
                                            <input type="file" class="form-control regctrl" name="license_img" id="license_img">
                                        </div>
                                        <div id="license_img_upload" style="cursor: pointer;">
                                            <input type="text" class="form-control regctrl" name="license_img_path" id="license_img_path" readonly placeholder="{{$frtxt['frtxt_uploadpic']}}" style="font-size: 12px; cursor: pointer;">
                                            <i class="fa fa-upload" style="float:right; margin-top: -2.2vh; margin-right: 1.4vh;"></i>
                                        </div>
                                        <label class="register_set" id="label_license_img_des" for="license_num" style="float: right; margin-top: 3px;">{{$frtxt['frtxt_uploadpic']}}</label>
<!--                                        <div class="invalid-feedback text-right feedback-license_img_path">{{$frtxt['frtxt_please']}}.</div>-->
                                    </div>
                                    <div class="form-group">
                                        <label class="register_set" id="label_license_num" for="license_num">*{{$frtxt['frtxt_business']}} {{$frtxt['frtxt_license']}} {{$frtxt['frtxt_number']}}:</label>
                                        <input type="text" class="form-control regctrl" name="license_num" id="license_num" placeholder="{{$frtxt['frtxt_matchlicensepic']}}" style="font-size: 12px;">
                                        <label class="register_set" id="label_license_num_des" for="license_num" style="float: right; margin-top: 3px;">{{$frtxt['frtxt_needidentified']}}</label>
<!--                                        <div class="valid-feedback">{{$frtxt['frtxt_valid']}}.</div>
                                        <div class="invalid-feedback text-right feedback-license_num">{{$frtxt['frtxt_please']}}.</div>-->
                                    </div>
                                    <div class="form-group d-flex flex-row wesg-reg-btns" style="justify-content:left; margin-top: 3.5vh;">
                                        <div style="font-weight: bold; font-size: 1.3vh;" class="wes-instruction-container">
                                            <a href="#" style="color:#2e4b94;" class="weshelpicon">{{$frtxt['frtxt_notices']}} >>></a>
                                        </div>
                                        <div class="wesg-submit-btn">
                                            <button type="button" class="btn btn-primary" id="submit_register">{{$frtxt['frtxt_submit']}}</button>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="reg_container" id="user_register_fail" style="width: 500px; height: 250px; display: none;">
                <div class="card h-100 border-0">
                    <div class="card-body wesg_reg_body" style="padding: 3vh 4vw; margin: auto;">
                        <div style="font-weight: bold; font-size: 20px; color: #2e4b94; line-height: 25px; text-align: center; margin-top: 50px;">{{$frtxt['frtxt_userregfail']}}</div>
                        <div class="wesg-submit-btn" style="margin-left: 0px; text-align: center; line-height: 120px;">
                            <button type="button" class="btn btn-primary submit_back" id="fail_back">{{$frtxt['frtxt_back']}}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="reg_container" id="user_register_success" style="width: 500px; height: 300px; display: none;">
                <div class="card h-100 border-0">
                    <div class="card-body wesg_reg_body" style="padding: 3vh 4vw; margin: auto;">
                        <div style="font-weight: bold; font-size: 20px; color: #2e4b94; line-height: 25px; text-align: center; margin-top: 30px;">{{$frtxt['frtxt_userregsuccess']}}</div>
                        <div style="text-align: center; margin-top: 30px;">
                            <img src="/images/successful_check.png" style="width: 60px;">
                        </div>
                        <div class="wesg-submit-btn" style="margin-left: 0px; text-align: center; line-height: 80px;">
                            <button type="button" class="btn btn-primary submit_back" id="success_back">{{$frtxt['frtxt_back']}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <style>
        .wesg_reg_formcontainer .form-group{
            margin-bottom: 0.6vh !important;
        }
        #user_register_ui{
            width: 500px;
            height: 50vh;
            display: block;
            max-width: 500px;
            max-height: 500px;
            min-height: 320px;
            border-radius: 10px;
            background: transparent;
        }
        #label_u_country{
            float:right;
            font-size: 1.3vh;
        }
        #u_person,
        #u_email,
        #u_mobile,
        #u_mobile_txt,
        #u_name,
        #license_img_path,
        #license_num,
        #mobileDropdownBtn
        {
            height: 2.7vh;
        }
        #u_mobile_txt,
        #license_img_path,
        #license_num
        {
            font-size: 1.3vh;
        }
        #label_u_person,
        #label_u_email,
        #label_u_mobile,
        #label_u_name,
        #label_license_img,
        #label_license_num
        {
            font-size: 1.3vh;
            margin-bottom: 0.3vh!important;
        }
        #label_license_img_des,
        #label_license_num_des
        {
            font-size: 1.1vh;
        }
        #submit_register{
            font-size: 1.5vh;
            height: 3.7vh;
            line-height: 1.5vh;
        }
        .register_set {
            max-lines: {{$maxline}};
            color:{{$fontcolor}};
        }
        .form-control regctrl{
            border-color: {{$bordercolor}};
            background-color:{{$backcolor}};
        }
        .card-body wesg_reg_body{
            background-color:{{$backcolor}};
        }
        .section-main{
            {{$advancss}};
        }
    </style>
    <script type="text/javascript">
        var please = "{{$frtxt['frtxt_please']}}";
        var onlystudent = "{{$frtxt['frtxt_onlystudent']}}";
        var ciso = "{{$ciso}}";

        function invalidfeedbackMsg(clsobj, msg){
            $('.feedback-'+clsobj).addClass('d-block');
            if(msg!=='')
                $('.feedback-'+clsobj).text(msg);
            setTimeout(function () {
                $('.feedback-'+clsobj).removeClass('d-block');
                $('.feedback-'+clsobj).text(please);
            },2000);
        }

        function WesResisterCheck(url, params){
            var rt='';
            $.ajax({
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                url: url,
                type: 'POST',
                data: params,
                async:false,
                dataType: 'json',
                success: function(data, textStatus, jqXHR)
                {
                    rt=data.status;
                },
                error: function(jqXHR, textStatus, errorThrown)
                {
                    rt=textStatus;
                }
            });

            return rt;
        }

        function changeCountryRegion(){
            var country = $('#u_mobile_txt').text();
            $.ajax({
                method: "POST",
                url: "/admin.getTranslateCountry",
                data: {
                    trans_str:country,
                    iso:ciso
                },
                statusCode: {
                    404: function() {
                        return false;
                    }
                },
                success: function(response) {
                    if(response.msg=="ok")
                    {
                        $('#u_mobile_txt').text(response.location);
                    }
                }
            });
        }

        var code = '{{$frtxt['frtxt_registered']}}';
        $(document).ready(function(){
            $('#submit_register').click(function () {
                var u_person =  $.trim($('#u_person').val());
                var u_mobile =  $.trim($('#u_mobile').val());
                var u_name =  $.trim($('#u_name').val());
                var license_num =  $.trim($('#license_num').val());
                var license_img_path =  $.trim($('#license_img_path').val());
                if(u_person.length < 1){
                    invalidfeedbackMsg('u_person','');
                    return;
                }
                if(u_mobile.length < 1){
                    invalidfeedbackMsg('u_mobile','');
                    return;
                }
                if(u_name.length < 1){
                    invalidfeedbackMsg('u_name','');
                    return;
                }
                if(license_img_path.length < 1){
                    invalidfeedbackMsg('license_img_path','');
                    return;
                }
                if(license_num.length < 1){
                    invalidfeedbackMsg('license_num','');
                    return;
                }

                var formData = new FormData($("#register_user")[0]);
                $.ajax({
                    url: '/wesRegisterUser',
                    type: 'POST',
                    data: formData,
                    async: false,
                    success: function (data) {
                        if(data.msg=="ok"){
                            $('#user_register_ui').css('display', 'none');
                            $('#user_register_success').css('display', 'block');
                        }
                        else if(data.msg=="overlap"){
                            $('#user_register_ui').css('display', 'none');
                            $('#user_register_fail').css('display', 'block');
                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    },
                    cache: false,
                    contentType: false,
                    processData: false
                });
            });

            var backcolor='';
            var bordercolor='';
            var fontcolor='';
            var help = '{{$help}}';
            backcolor='background: #ffffff;';
            bordercolor='border:1px solid #d6d6d6;';
            fontcolor='font-color: #00000099;';

            $('.weshelpicon').mouseenter(function () {
                if(help=='')return;
                help = decodeURIComponent(help);
                $('.instructionToolTip').remove();
                var tag = '<div class="instructionToolTip" style="'+backcolor + bordercolor + '"><pre style="margin:0;font-size: 14px; '+fontcolor+'">'+help+'</pre></div>';
                $('.wes-instruction-container').append(tag);
                $('.instructionToolTip').css({'position':'absolute','left':'15%','top':'90%'});
            });

            $('.weshelpicon').mouseleave(function () {
                $('.instructionToolTip').remove();
            });

            $('.u_mobile_drop_item').click(function (){
                var id = $(this).attr("id");
                var sp_id = id.split("-");
                $('#country_code').val(sp_id[1]);
                $('#country_name').val(sp_id[2]);

                var um_val = $(this).html();
                var txt = $(this).attr('title');
                $('#mobileDropdownBtn').html(um_val);
                $('#u_mobile_txt').text(txt);
                changeCountryRegion();
            });

            $('#license_img_upload').click(function (){
                $("#license_img").trigger('click');
            });
            $("#license_img").change(function () {
                if (this.files && this.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                    };
                    $('#license_img_path').val(this.files[0].name);
                    reader.readAsDataURL(this.files[0]);
                }
            });

            $('.submit_back').click(function (){
                $('#register_user')[0].reset();
                $('#user_register_ui').css('display', 'block');
                $('#user_register_success').css('display', 'none');
                $('#user_register_fail').css('display', 'none');
            });

            changeCountryRegion();
        });
    </script>
@endsection

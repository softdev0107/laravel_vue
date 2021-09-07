<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{ cpgtxt_profile }}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{ cpgtxt_profile }}&nbsp;&nbsp;
                    <a href="#" id="company-user-profile-fav" data-status="off" data-page-info="Profile_company-user-profile">
                    <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/someone.png';">
                    </a>
                </span>
            </div>
        </div>

        <div class="row m-t-15">
            <div class="col-md-12">
                <div class="nav nav-pills nav-fill m-b-20" id="company-user-profile-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-item nav-link active m-r-15" style="flex: 0.02 1 auto;border: 1px solid #e6e6e6;border-radius:1.2rem" id="company-user-profile-general-tab" data-toggle="pill" href="#company-user-profile-general" role="tab" aria-controls="company-user-profile-general" aria-selected="true">
                        <svg t="1599124664697" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23124" width="17" height="17">
                            <path d="M512.3 63.1C264.5 63.1 63.6 264 63.6 511.8c0 137.4 61.7 260.3 159 342.6 2.5 2.9 5.6 5.4 9 7.4 76.9 61.7 174.5 98.7 280.8 98.7 106.3 0 203.9-36.9 280.8-98.7 3.4-2 6.4-4.5 9-7.4 97.2-82.3 159-205.3 159-342.6-0.1-247.8-201-448.7-448.9-448.7z m0 822.7c-81 0-155.9-25.7-217.1-69.4l1.4-3.8c33-90.7 119.2-151.1 215.7-151.1 95.4 0 183.6 51.9 211 134.3L730 816c-61.2 43.9-136.4 69.8-217.7 69.8zM400.2 474.4c0-62 50.2-112.2 112.2-112.2s112.2 50.2 112.2 112.2-50.2 112.2-112.2 112.2-112.2-50.2-112.2-112.2z m390.4 287.3c-27.3-71.3-84.4-121.9-151.4-149.8 37-34.2 60.2-83.1 60.2-137.4 0-103.3-83.7-187-187-187s-187 83.7-187 187c0 55.2 23.9 104.8 62 139-66 29.7-120.4 82.5-151.5 150.2-60.6-66.5-97.5-154.8-97.5-251.8 0-206.5 167.4-373.9 373.9-373.9s373.9 167.4 373.9 373.9c0.1 96-36.1 183.5-95.6 249.8z" p-id="23125"></path>
                        </svg>
                        <span class="m-l-10">{{cbtntxt_general}}</span>
                    </a>
                    <a class="nav-item nav-link m-r-15" style="flex: 0.02 1 auto;border: 1px solid #e6e6e6;border-radius:1.2rem" id="company-user-profile-senior-tab" data-toggle="pill" href="#company-user-profile-senior" role="tab" aria-controls="company-user-profile-senior" aria-selected="false">
                        <svg t="1599124713464" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23895" width="17" height="17">
                            <path d="M627.2 328.533333C597.333333 298.666667 554.666667 281.6 512 281.6c-89.6 0-162.133333 72.533333-162.133333 162.133333 0 89.6 72.533333 162.133333 162.133333 162.133334s162.133333-72.533333 162.133333-162.133334c0-42.666667-17.066667-85.333333-46.933333-115.2z" p-id="23896"></path>
                            <path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 977.066667C256 977.066667 46.933333 768 46.933333 512S256 46.933333 512 46.933333 977.066667 256 977.066667 512 768 977.066667 512 977.066667z" p-id="23897"></path>
                            <path d="M725.333333 584.533333c34.133333-46.933333 51.2-110.933333 42.666667-174.933333-12.8-115.2-110.933333-209.066667-226.133333-221.866667C384 170.666667 256 294.4 256 443.733333c0 51.2 17.066667 102.4 42.666667 140.8l-93.866667 162.133334h128l64 110.933333 93.866667-162.133333h42.666666l93.866667 162.133333 64-110.933333h128L725.333333 584.533333z m-59.733333 119.466667l-38.4 64-72.533333-119.466667c-29.866667 8.533333-59.733333 8.533333-89.6 0l-68.266667 123.733334-38.4-64H281.6l72.533333-123.733334c-21.333333-25.6-38.4-55.466667-46.933333-89.6-34.133333-153.6 98.133333-285.866667 251.733333-251.733333 76.8 17.066667 140.8 81.066667 157.866667 157.866667 17.066667 72.533333-4.266667 140.8-46.933333 187.733333l72.533333 123.733333-76.8-8.533333z" p-id="23898"></path>
                        </svg>
                        <span class="m-l-10">{{cbtntxt_senior}}</span>
                    </a>
                    <a class="nav-item nav-link m-r-15" style="flex: 0.02 1 auto;border: 1px solid #e6e6e6;border-radius:1.2rem" id="company-user-profile-infomation-tab" data-toggle="pill" href="#company-user-profile-infomation" role="tab" aria-controls="company-user-profile-infomation" aria-selected="false">
                        <svg t="1599124753113" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24641" width="17" height="17">
                            <path d="M512 64a448 448 0 1 0 0.0512 896.0512A448 448 0 0 0 512 64z m0 820.0192a372.0704 372.0704 0 0 1 0-744.0384 372.0704 372.0704 0 0 1 0 744.0384z" p-id="24642"></path><path d="M464.0256 336.0256a48.0256 48.0256 0 1 0 96 0 48.0256 48.0256 0 0 0-96.0512 0zM536.0128 448H487.936a8.0384 8.0384 0 0 0-7.9872 7.9872v272.0256c0 4.4032 3.584 7.9872 7.9872 7.9872h48.0256c4.4032 0 7.9872-3.584 7.9872-7.9872V455.9872a8.0384 8.0384 0 0 0-7.9872-7.9872z" p-id="24643"></path>
                        </svg>
                        <span class="m-l-10">{{cbtntxt_infomation}}</span>
                    </a>
                </div>

                <div class="tab-content" id="company-user-profile-tabContent">
                    <div class="tab-pane fade show active" id="company-user-profile-general" role="tabpanel" aria-labelledby="company-user-profile-general-tab">
                        <div class="row">
                            <div class="col-md-12">
                                <form id="company-user-profile-form" name="company-user-profile-form" enctype="multipart/form-data" method="post">
                                    <div class="card" >
                                        <input type="hidden" id="company-user-profile-id" name="company-user-profile-id" :value="this.userid">
                                        <!-- img id="company-user-profile-background" :src="backgroundImg" style="position: absolute;left:0;top:0; z-index: 0" :width="getBackgroundMaxSize()" :height="getBackgroundMaxSize()" // han 2020-11-11 -->
                                        <table class="table table-borderless mb-0 text-center" role="grid">
                                            <tbody>
                                            <tr>
                                                <th class="p-10" rowspan="2" style="width: 15%">
                                                    <div class="mt-3">
                                                        <!-- <img :src="getPhotopath()" style="border-radius: 15px" width="105px" height="105px"/>-->
                                                        <img id="company-user-profile-photo" :src="photoImg" style="border-radius: 15px; max-width: 150px; max-height: 150px;" :width="getPhotoWidth()" :height="getPhotoHeight()"  onerror="this.src ='/images/noimg.png';"/>
                                                    </div>
                                                    <div style="display: none">
                                                        <input type="file" name="company-user-profile-photo-edit" id="company-user-profile-photo-edit" value="">
                                                    </div>
                                                    <div id="company-user-profile-photo-editbtn" class="btn btn-outline-light mt-4 dash-my-btn-0 active">
                                                        <span>{{cbtntxt_edit}}</span>
                                                    </div>
                                                    <div class="mt-2">
                                                        <div style="display: none">
                                                            <input type="file" name="company-user-profile-background-edit" id="company-user-profile-background-edit" value="">
                                                        </div>
                                                        <a id="company-user-profile-background-editbtn" href="#" style="text-decoration: underline;color: #a7a7ed;">{{cpgtxt_sua_edit}} {{cpgtxt_background}}</a>

                                                    </div>
                                                    <div class="mt-2" style="color: #7c87c1;">
                                                        <span>ID : </span>
                                                        <label id="company-user-id"></label>
                                                    </div>
                                                </th>
                                                <td class="p-l-r-50">
                                                    <div class="form-group text-left" style="display: flex;">
                                                        <label style="margin-top: 8px; color:#666;">{{ cpgtxt_username }}</label>
                                                        <label class="duplicate-error" id="error-username">{{ cpgtxt_usernameexists }}</label>
                                                    </div>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" style="background-color: #fff;border: 1px solid #ced4da;"  placeholder="" aria-label="company-user-profile-username" id="company-user-profile-username" name="company-user-profile-username" aria-describedby="basic-addon2" value="" :maxlength="getUsernameMaxLength()">
                                                    </div>
                                                </td>
                                                <td class="p-l-r-50 ">
                                                    <div class="form-group text-left">
                                                        <label style="margin-top: 8px; color:#666;">{{ cpgtxt_name }}</label>
                                                    </div>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" style="background-color: #fff;border: 1px solid #ced4da;"  placeholder="" aria-label="company-user-profile-name" id="company-user-profile-name" name="company-user-profile-name" aria-describedby="basic-addon2" value="" :maxlength="getNameMaxLength()">
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-l-r-50 " style="vertical-align: top">
                                                    <div class="form-group text-left" style="display: flex;">
                                                        <label style="margin-top: 8px; color:#666;">{{ cpgtxt_email }}</label>
                                                        <label class="duplicate-error" id="error-email">{{ cpgtxt_emailexists }}</label>
                                                    </div>
                                                    <div class="input-group">
                                                        <input type="email" class="form-control" style="background-color: #fff;border: 1px solid #ced4da;"  placeholder="" aria-label="company-user-profile-email" id="company-user-profile-email" name="company-user-profile-email" aria-describedby="basic-addon2" value="">
                                                    </div>
                                                    <div class="form-group text-left" v-if="emailError">
                                                        <label style="color: rgb(221, 144, 29); margin-top: 8px;">*This is an invalid email address</label>
                                                    </div>
                                                </td>
                                                <td class="p-l-r-50 " style="vertical-align: top">
                                                    <div class="form-group text-left" style="display: flex;">
                                                        <label style="margin-top: 8px; color:#666;">{{ cpgtxt_tel }}</label>
                                                        <label class="duplicate-error" id="error-tel">{{ cpgtxt_telexists }}</label>
                                                    </div>
                                                    <div class="input-group">
                                                        <input type="tel" class="form-control" style="background-color: #fff;border: 1px solid #ced4da;"  placeholder="" aria-label="company-user-profile-tel" id="company-user-profile-tel" name="company-user-profile-tel" aria-describedby="basic-addon2" value="" >
                                                    </div>
                                                    <div class="form-group text-left" v-if="mobileError">
                                                        <label style="color: rgb(221, 144, 29); margin-top: 8px;">*This is an invalid mobile</label>
                                                    </div>
                                                </td>
                                                <input type="hidden" id="company-user-profile-tel-data" name="company-user-profile-tel-data" value="">
                                                <input type="hidden" id="company-user-profile-country-name" name="company-user-profile-country-name" value="">
                                                <input type="hidden" id="company-user-profile-country-data" name="company-user-profile-country-data" value="">
                                            </tr>
                                            <tr>
                                                <td class="p-10 text-right" colspan="3">
                                                    <span style="font-weight: bold; color: #a7a7ed">
                                                        {{getCreateddate()}}
                                                    </span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>

                            <div class="col-md-12">
                                <div class="card border-0 m-b-10 text-center">
                                    <div>
                                        <div id="company-user-profile-save-btn" class="btn btn-outline-light dash-my-btn-0 active">
                                            <span> {{cbtntxt_sua_SaveChange}} </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="company-user-profile-senior" role="tabpanel" aria-labelledby="company-user-profile-senior-tab">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card" style="padding: 40px 20px;">
                                    <div class="form-group text-left mb-0">
                                        <h6 class="card-title m-b-20">{{ cbtntxt_change }} {{ cpgtxt_password }}</h6>
                                    </div>
                                    <input type="hidden" id="company-user-profile-senior-id" name="company-user-profile-senior-id" :value="this.userid">
                                    <div class="d-flex col-md-12" style="margin-bottom: 15px;">
                                        <div class="col-md-2" style="margin-top: 10px;">
                                            <div class="form-group text-left mb-0">
                                                <label style="color:#666;">{{ cpgtxt_notice }}</label>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="input-group">
                                                <input type="text" class="form-control" style=""  placeholder="" id="company-user-profile-senior-notice" readonly>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex col-md-12" id="company-user-profile-senior-old-password" style="margin-bottom: 15px;">
                                        <div class="col-md-2" style="margin-top: 10px;">
                                            <div class="form-group text-left mb-0">
                                                <label style="color:#666;">{{ cpgtxt_current }}</label>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="input-group">
                                                <input type="password" class="form-control" style="background-color: #fff; border: 1px solid #ced4da;" aria-label="company-user-profile-senior-old-password-txt" id="company-user-profile-senior-old-password-txt" name="company-user-profile-senior-old-password-txt" aria-describedby="company-user-profile-senior-old-password-txt">
                                            </div>
                                        </div>
                                        <div class="col-md-4" style="margin-top: 10px;">
                                            <div class="form-group text-left mb-0">
                                                <label id="current-password-text" style="color:#ed3839; display:none;">{{cpgtxt_enterpassword}}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex col-md-12" id="company-user-profile-senior-new-password" style="margin-bottom: 15px;">
                                        <div class="col-md-2" style="margin-top: 10px;">
                                            <div class="form-group text-left mb-0">
                                                <label style="color:#666;">{{cpgtxt_sua_NewPassword}}</label>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="input-group">
                                                <input type="password" class="form-control" style="background-color: #fff; border: 1px solid #ced4da;" aria-label="company-user-profile-senior-new-password-txt" id="company-user-profile-senior-new-password-txt" name="company-user-profile-senior-new-password-txt" aria-describedby="company-user-profile-senior-new-password-txt">
                                            </div>
                                        </div>
                                        <div class="col-md-4" style="margin-top: 10px;">
                                            <div class="form-group text-left mb-0">
                                                <label id="password-condition-text" style="color:#ed3839; display:none;">{{cpgtxt_doesntpwdrules}}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex col-md-12" id="company-user-profile-senior-confirm-password">
                                        <div class="col-md-2" style="margin-top: 10px;">
                                            <div class="form-group text-left mb-0">
                                                <label style="color:#666;">{{cpgtxt_confirm}} {{cpgtxt_password}}</label>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="input-group">
                                                <input type="password" class="form-control" style="background-color: #fff; border: 1px solid #ced4da;" aria-label="company-user-profile-senior-confirm-password-txt" id="company-user-profile-senior-confirm-password-txt" name="company-user-profile-senior-confirm-password-txt" aria-describedby="company-user-profile-senior-confirm-password-txt">
                                            </div>
                                        </div>
                                        <div class="col-md-4" style="margin-top: 10px;">
                                            <div class="form-group text-left mb-0">
                                                <label id="confirm-condition-text" style="color:#ed3839; display:none;">{{cpgtxt_differentpasswords}}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex col-md-12">
                                        <div class="col-md-2" style="margin-top: 30px;"></div>
                                        <div class="col-md-6" style="margin-top: 30px;">
                                            <div class="form-group text-left mb-0">
                                                <label id="password-verify-text" style="color:#ed3839;">{{cpgtxt_verifychangepassword}}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <div class="card border-0 m-b-10 text-center">
                                    <div>
                                        <div id="company-user-profile-senior-save-changes" class="btn btn-outline-light dash-my-btn-0 active" @click.stop="updateProfilePassword()">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                                            </svg>
                                            <span> {{cbtntxt_sua_SaveChange}} </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="company-user-profile-infomation" role="tabpanel" aria-labelledby="company-user-profile-infomation-tab">
                        <div>Information Tab</div>
                    </div>
                </div>
            </div>
        </div>
        <form action="/company.login" enctype="multipart/form-data" id="companyprofile_frm" method="get" target="_top">
            <input type="hidden" class="form-control" id="email"  name="email" value="">
            <input type="hidden" class="form-control" id="pwd"  name="pwd" value="">
            <input type="hidden" class="form-control" id="profile_page"  name="profile_page" value="profile">
        </form>

        <div class="modal fade" id="ModalProfileValidation" data-keyboard="false" data-backdrop="static">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 400px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="ModalProfileValidationTitle">{{cpgtxt_validation}}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="ModalProfileValidationBody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                        <div class="panel" id="tab4">
                            <div class="row" id="profile_validation_first" style="padding-bottom: 20px;">
                                <div class="col-md-12" style="margin-top: 20px;">
                                    <div class="d-flex flex-wrap">
                                        <div class="col-md-8">{{cpgtxt_sendvalidationcodeto}}</div>
                                    </div>
                                </div>
                                <div class="col-md-12" style="margin-top: 10px;">
                                    <div class="d-flex flex-wrap">
                                        <div class="col-md-6">
                                            <div class="ProfileValidationSelector" id="EmailValidation_Check">
                                                <div style="text-align: center;">
                                                    <label class="ProfileValidationSelectorTitle">{{cpgtxt_email}}</label>
                                                </div>
                                                <div class="ProfileValidationCheckIconBG" id="EmailValidation_BG">
                                                </div>
                                                <div class="ProfileValidationCheckIcon" id="EmailValidation_Icon">
                                                    <img src="/images/validation_icon.png" style="width:100%;height:100%">
                                                </div>
                                            </div>
                                            <div style="text-align: center;">
                                                <label id="validation_email_address"></label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="ProfileValidationSelector" id="MobileValidation_Check">
                                                <div style="text-align: center;">
                                                    <label class="ProfileValidationSelectorTitle">{{cpgtxt_mobile}}</label>
                                                </div>
                                                <div class="ProfileValidationCheckIconBG" id="MobileValidation_BG">
                                                </div>
                                                <div class="ProfileValidationCheckIcon" id="MobileValidation_Icon">
                                                    <img src="/images/validation_icon.png" style="width:100%;height:100%">
                                                </div>
                                            </div>
                                            <div style="text-align: center;">
                                                <label id="validation_mobile_number"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" id="profile_validation_second" style="padding-bottom: 20px;">
                                <div class="col-md-12" style="margin-top: 20px;">
                                    <div class="d-flex flex-wrap">
                                        <div class="col-md-8" id="type_email">{{cpgtxt_typeincode}} {{cpgtxt_email}}</div>
                                        <div class="col-md-8" id="type_mobile">{{cpgtxt_typeincode}} {{cpgtxt_mobile}}</div>
                                    </div>
                                </div>
                                <div class="col-md-12" style="margin-top: 10px;">
                                    <div class="d-flex flex-wrap">
                                        <div class="col-md-12" style="display: flex;">
                                            <input type="tel" class="form-control regctrl" name="validation_code" id="validation_code" aria-label="validation code">
                                            <span class="input-group-text" id="resend_code_counder">
                                                <div id="sendcode_countdown">
                                                    <label id="counter_label" style="margin-bottom: 0px; margin-right: 5px;">120</label>
                                                    {{cpgtxt_secresendcode}}
                                                </div>
                                                <div id="sendcode_button">
                                                    {{cpgtxt_resendcode}}
                                                </div>
                                            </span>
                                        </div>
                                        <div class="col-md-12" id="wrong_code" style="display:none; color: red; text-align: right; font-size: 12px;">{{cpgtxt_wrongcode}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <div id="ssfe-model-add" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="modal_next_page()">
                                        <span>+ {{cbtntxt_next}}</span>
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
    #validation_code{
        width: 50%;
        background-color: #ffffff;
        border: 1px solid #ededed;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }
    #resend_code_counder{
        width: 50%;
        background-color: #ffffff;
        border: 1px solid #ededed;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        font-size: 12px;
        height: 36px;
    }
    #sendcode_button{
        width: 100%;
        height: 100%;
        cursor: pointer;
        text-align: center;
        line-height: 25px;
        color:#5c6bc0;
    }
    .duplicate-error{
        margin-top: 8px;
        margin-left: 30px;
        color:red;
        display: none;
    }
</style>
<script>
    import myjs from "../assets/jsfunc/mjs_module";
    import axios from "axios";
    import nav_module from "../assets/jsfunc/nav_module";
    import moment from "moment";

    var vueOBJ=null;
    var mobileList = [];
    var emailList = [];
    var pgperm={};
    var sel_kind = 1;
    var page_index = 1;
    var counter_time;
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
    var veryfication_code;
    var tabIndex = 1;
    var password = '';


    function showPasswordEnterState(val){
        if(val == 1){
            $('#password-condition-text').css('display', 'block');
        }
        else{
            $('#password-condition-text').css('display', 'none');
        }
    }
    function pageEvent(){
        $('#company-user-profile-save-btn').click(function () {
            tabIndex = 1;
            vueOBJ.updateUserinfo();
        });

        $("#company-user-profile-senior-new-password-txt").on("keyup", function (e){
            var is_letter = false;
            var is_upper = false;
            var is_number = false;
            var is_special = false;
            pwd_state = false;
            password = $("#company-user-profile-senior-new-password-txt").val();
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
    }
    function EncodeEmailAndMobile(){
        var mod_email = '';
        var conv_emails = vueOBJ.getEmail().split("@");
        var arr_emails = Array.from(conv_emails[0]);
        var cnt = 0;
        for(var i = 0; i < arr_emails.length; i++){
            if(i < 2){
                mod_email += arr_emails[i];
            }
            else{
                if(cnt < 4)
                    mod_email += '*';
                cnt++;
            }
        }
        mod_email += '@' + conv_emails[1];
        $("#validation_email_address").text(mod_email);

        var mod_mobile = '';
        //var conv_mobile = $('#company-user-profile-tel').val();
        var conv_mobile = vueOBJ.getPhonenumber();
        var arr_mobiles = Array.from(conv_mobile);

        for(var i = 0; i < arr_mobiles.length; i++){
            if(i < 3)
                mod_mobile += arr_mobiles[i];
            else if(i >= arr_mobiles.length - 3)
                mod_mobile += arr_mobiles[i];
            else{
                mod_mobile += '*';
            }
        }
        $("#validation_mobile_number").text(mod_mobile);
    }

    function next_modal(){
        if(page_index == 1){
            $('#profile_validation_first').css('display', 'block');
            $('#profile_validation_second').css('display', 'none');
        }
        else{
            if(sel_kind == 1){
                $('#type_email').css('display', 'block');
                $('#type_mobile').css('display', 'none');
            }
            else{
                $('#type_email').css('display', 'none');
                $('#type_mobile').css('display', 'block');
            }
            generateValidationCode();
            $('#profile_validation_first').css('display', 'none');
            $('#profile_validation_second').css('display', 'block');

            counter_time = setInterval(counterTimer, 1000);
        }
    }

    function counterTimer(){
        var time = $('#counter_label').text();
        var inTime = parseInt(time);
        if(inTime == 0){
            StopTimer();
        }
        else {
            $('#counter_label').text(inTime - 1);
        }
    }
    function StopTimer() {
        $('#sendcode_countdown').css('display', 'none');
        $('#sendcode_button').css('display', 'block');
        veryfication_code = '';
        clearInterval(counter_time);
    }
    function generateValidationCode(){
        $.ajax({
            url: 'admin.GeneralValidationCode',
            type: 'POST',
            async: false,
            success: function (data) {
                if(data.msg=="ok") {
                    veryfication_code = parseInt(data.code) - 12281982;
                    if(sel_kind == 1)
                        sendEmailValidationCode(data.code);
                    else
                        sendMobileValidationCode(data.code);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function sendEmailValidationCode(content){
        //var email = $('#company-user-profile-email').val();
        var email = vueOBJ.getEmail();
        var email_str = encodeURIComponent(email);

        let postData ={
            emails: email_str,
            mailcont:content,
            title:'Wes-Profile Validation Code'
        };
        //current is window.location.hostname  : wes.local.com
        var hostname = window.location.hostname;
        var flag = hostname.indexOf('waaup.org');
        var svurl = "admin.ProfileMail";

        /*if(flag < 0)
            svurl = 'https://www.waaup.org/admin.ProfileMail';*/
        axios.post(svurl, postData)
            .then((response) => {
                var type = response.data.status;
                if(type=="ok") {
                }
            }).catch(function (error) {
            console.log(error);
        })
    }
    function sendMobileValidationCode(content){
        //var phnum = $('#company-user-profile-tel').val();
        var phnum = vueOBJ.getPhonenumber();
        var countrycode = $('.iti__selected-dial-code').html();
        countrycode = countrycode.replace("+", "");
        var patt = /^\d+$/;

        if(phnum.match(patt)) {
            let postData = {
                phone: countrycode+phnum,
                fastreg:content,
                title:'Wes-Profile Validation Code'
            };
            var svurl = 'admin.ProfileSMS';
            var hostname = window.location.hostname;
            var flag = hostname.indexOf('waaup.org');
            /*if(flag < 0)
                svurl = 'https://www.waaup.org/admin.ProfileSMS';*/
            axios.post(svurl, postData)
                .then((response) => {
                    var type = response.data.status;
                    if(type=="ok")
                    {
                    }

                }).catch(function (error) {
                console.log(error);
            })
        }
    }

    function setModal(){
        sel_kind = 1;
        page_index = 1;
        $('#EmailValidation_BG').css('display', 'block');
        $('#EmailValidation_Icon').css('display', 'block');
        $('#MobileValidation_BG').css('display', 'none');
        $('#MobileValidation_Icon').css('display', 'none');

        $('#EmailValidation_Check').click(function () {
            $('#EmailValidation_BG').css('display', 'block');
            $('#EmailValidation_Icon').css('display', 'block');
            $('#MobileValidation_BG').css('display', 'none');
            $('#MobileValidation_Icon').css('display', 'none');
            sel_kind = 1;
        });
        $('#MobileValidation_Check').click(function () {
            if(vueOBJ.getPhonenumber() != null && vueOBJ.getPhonenumber() != '') {
                $('#EmailValidation_BG').css('display', 'none');
                $('#EmailValidation_Icon').css('display', 'none');
                $('#MobileValidation_BG').css('display', 'block');
                $('#MobileValidation_Icon').css('display', 'block');
                sel_kind = 2;
            }
        });

        $("#ModalProfileValidation").on('hide.bs.modal', function () {
            StopTimer();
            $('#counter_label').text('120');
            $('#validation_code').val('');
        });

        $('#sendcode_button').click(function () {
            generateValidationCode();
            $('#sendcode_countdown').css('display', 'block');
            $('#sendcode_button').css('display', 'none');

            $('#counter_label').text('120');
            $('#validation_code').val('');
            counter_time = setInterval(counterTimer, 1000);
        });
    }

    function saveProfileInfo(){
        var formData = new FormData($('#company-user-profile-form')[0]);

        $.ajax({
            url: '/company.updateCompanyUserinfo',
            type: 'POST',
            data: formData,
            async: false,
            success: function (data) {
                if (data.msg === "ok") {
                    StopTimer();
                    $('#ModalProfileValidation').modal('hide');

                    myjs.data.showAlert('pgtxt_sucesssaveddata');
                    localStorage.clear();
                    $('#email').val(vueOBJ.getEmail());
                    $('#pwd').val(vueOBJ.getPassword());
                    $('#companyprofile_frm').submit();
                }
                else {
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            },
            cache: false,
            contentType: false,
            processData: false
        });
    }
    function savePasswordInfo(){
        let usrid = $.trim($('#company-user-profile-senior-id').val());
        let oldpwd = $.trim($('#company-user-profile-senior-old-password-txt').val());
        let newpwd = $.trim($('#company-user-profile-senior-new-password-txt').val());

        let postData = {
            id: usrid,
            oldpwd: oldpwd,
            newpwd: newpwd
        };

        axios.post('/company.updateCompanyUserPassword', postData)
            .then((response) => {
                let msg = response.data.msg;

                if (msg === "ok") {
                    myjs.data.showAlert('pgtxt_sucesssaveddata');
                    $('#company-user-profile-senior-old-password-txt').val('');
                    $('#company-user-profile-senior-new-password-txt').val('');
                    $('#company-user-profile-senior-confirm-password-txt').val('');

                    $('#password-condition-text').css('display', 'none');
                    $('#confirm-condition-text').css('display', 'none');
                    $('#current-password-text').css('display', 'none');

                } else {
                    myjs.data.showAlert(response.data.message);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    export default {
        data() {
            return {
                pageid: 'company-user-profile-fav',
                btntxt_general: '',
                btntxt_senior: '',
                btntxt_infomation: '',
                pgtxt_sua_Security: '',
                pgtxt_sua_BirthDate: '',
                pgtxt_sua_Phone:'',
                pgtxt_sua_Website:'',
                pgtxt_sua_Languages:'',
                pgtxt_sua_Gender:'',
                pgtxt_sua_Male:'',
                pgtxt_sua_Female:'',
                pgtxt_sua_Other:'',
                pgtxt_sua_AddressLine:'',
                pgtxt_sua_PostCode:'',
                pgtxt_sua_City:'',
                pgtxt_sua_State:'',
                pgtxt_sua_Country:'',
                btntxt_sua_SaveChange:'',
                btntxt_edit:'',
                pgtxt_sua_edit:'',
                pgtxt_background:'',
                pgtxt_validation:'',
                pgtxt_email:'',
                pgtxt_tel:'',
                pgtxt_mobile:'',
                pgtxt_sendvalidationcodeto:'',
                btntxt_next:'',
                pgtxt_typeincode:'',
                pgtxt_secresendcode:'',
                pgtxt_wrongcode:'',
                pgtxt_resendcode:'',
                pgtxt_dontregnewuser:'',
                pgtxt_profile:'',
                pgtxt_username:'',
                pgtxt_name:'',
                pgtxt_usernameexists:'',
                pgtxt_emailexists:'',
                pgtxt_telexists:'',
                pgtxt_current:'',
                pgtxt_notice:'',
                pgtxt_sua_NewPassword:'',
                pgtxt_confirm:'',
                pgtxt_password:'',
                btntxt_change:'',
                pgtxt_verifychangepassword:'',
                pgtxt_passedverification:'',
                pgtxt_doesntpwdrules:'',
                pgtxt_differentpasswords:'',
                pgtxt_enterpassword:'',

                userinfo: '',
                username_maxLength: '',
                username_minLength: '',
                name_maxLength: '',
                name_minLength: '',
                photosize_width: '',
                photosize_height: '',
                background_width: '',
                background_height: '',

                photoImg: '',
                backgroundImg: '',
                userid: '',

                mobileError: '',
                mobileLength: '',
                emailError: '',
            }
        },
        computed: {
            // 계산된 getter
            cbtntxt_general: function () {
                return this.btntxt_general;
            },
            cbtntxt_senior: function () {
                return this.btntxt_senior;
            },
            cbtntxt_infomation: function () {
                return this.btntxt_infomation;
            },
            cpgtxt_sua_Security: function () {
                return this.pgtxt_sua_Security;
            },
            cpgtxt_sua_BirthDate: function () {
                return this.pgtxt_sua_BirthDate;
            },
            cpgtxt_sua_Phone: function () {
                return this.pgtxt_sua_Phone;
            },
            cpgtxt_sua_Website: function () {
                return this.pgtxt_sua_Website;
            },
            cpgtxt_sua_Languages: function () {
                return this.pgtxt_sua_Languages;
            },
            cpgtxt_sua_Gender: function () {
                return this.pgtxt_sua_Gender;
            },
            cpgtxt_sua_Male: function () {
                return this.pgtxt_sua_Male;
            },
            cpgtxt_sua_Female: function () {
                return this.pgtxt_sua_Female;
            },
            cpgtxt_sua_Other: function () {
                return this.pgtxt_sua_Other;
            },
            cpgtxt_sua_AddressLine: function () {
                return this.pgtxt_sua_AddressLine;
            },
            cpgtxt_sua_PostCode: function () {
                return this.pgtxt_sua_PostCode;
            },
            cpgtxt_sua_City: function () {
                return this.pgtxt_sua_City;
            },
            cpgtxt_sua_State: function () {
                return this.pgtxt_sua_State;
            },
            cpgtxt_sua_Country: function () {
                return this.pgtxt_sua_Country;
            },
            cbtntxt_sua_SaveChange: function () {
                return this.btntxt_sua_SaveChange;
            },
            cbtntxt_edit: function () {
                return this.btntxt_edit;
            },
            cpgtxt_sua_edit: function () {
                return this.pgtxt_sua_edit;
            },
            cpgtxt_background: function () {
                return this.pgtxt_background;
            },
            cpgtxt_validation: function () {
                return this.pgtxt_validation;
            },
            cpgtxt_email: function () {
                return this.pgtxt_email;
            },
            cpgtxt_tel: function () {
                return this.pgtxt_tel;
            },
            cpgtxt_mobile: function () {
                return this.pgtxt_mobile;
            },
            cpgtxt_sendvalidationcodeto: function () {
                return this.pgtxt_sendvalidationcodeto;
            },
            cbtntxt_next: function () {
                return this.btntxt_next;
            },
            cpgtxt_typeincode: function () {
                return this.pgtxt_typeincode;
            },
            cpgtxt_secresendcode: function () {
                return this.pgtxt_secresendcode;
            },
            cpgtxt_wrongcode: function () {
                return this.pgtxt_wrongcode;
            },
            cpgtxt_resendcode: function () {
                return this.pgtxt_resendcode;
            },
            cpgtxt_profile: function () {
                return this.pgtxt_profile;
            },
            cpgtxt_username: function () {
                return this.pgtxt_username;
            },
            cpgtxt_name: function () {
                return this.pgtxt_name;
            },
            cpgtxt_usernameexists: function () {
                return this.pgtxt_usernameexists;
            },
            cpgtxt_emailexists: function () {
                return this.pgtxt_emailexists;
            },
            cpgtxt_telexists: function () {
                return this.pgtxt_telexists;
            },
            cpgtxt_current: function () {
                return this.pgtxt_current;
            },
            cpgtxt_notice: function () {
                return this.pgtxt_notice
            },
            cpgtxt_sua_NewPassword: function () {
                return this.pgtxt_sua_NewPassword
            },
            cpgtxt_password: function () {
                return this.pgtxt_password
            },
            cpgtxt_confirm: function () {
                return this.pgtxt_confirm
            },
            cbtntxt_change: function () {
                return this.btntxt_change
            },
            cpgtxt_verifychangepassword: function () {
                return this.pgtxt_verifychangepassword
            },
            cpgtxt_passedverification: function () {
                return this.pgtxt_passedverification
            },
            cpgtxt_doesntpwdrules: function () {
                return this.pgtxt_doesntpwdrules
            },
            cpgtxt_differentpasswords: function () {
                return this.pgtxt_differentpasswords
            },
            cpgtxt_enterpassword: function () {
                return this.pgtxt_enterpassword
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
        created() {

            this.userinfo = nav_module.data.jsonparse(window.Laravel.useraccount);

            if (this.userinfo.photo != "")
                this.photoImg = '/uploads/images/'+this.userinfo.photo;
            else
                this.photoImg = "/uploads/images/someone.png";

            if (this.userinfo.background != "")
                this.backgroundImg = '/uploads/images/' + this.userinfo.background;
            else
                this.backgroundImg = "";

            this.userid = atob(this.userinfo.uid);
        },
        mounted() {
            /* fav part*/
            vueOBJ=this;
            this.initpage();
        },
        methods: {
            /* fav part */
            getSiteFaveritelist(list){
                if(list!=null && list!='')
                {
                    let imgsrc= '/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src",imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }
            },
            /*fav part*/
            getUsername() {
                var name = atob(this.userinfo.name);
                return name;
                //return username.slice(0, this.getUsernameMaxLength());
            },
            getName() {
                var uname = atob(this.userinfo.uname);
                return uname;
                //return name.slice(0, this.getNameMaxLength());
            },
            getEmail() {
                return atob(this.userinfo.uemail);
            },
            getPassword() {
                return this.userinfo.password;
            },
            getCountryCode() {
                return this.userinfo.country_code;
            },
            getCountryName() {
                return this.userinfo.country_name;
            },
            getPhonenumber() {
                if(this.userinfo.umobile != null && this.userinfo.umobile != "")
                    return atob(this.userinfo.umobile);
                else
                    return "";
            },
            getCreateddate() {
                var date = 'Joind Since ' + moment(String(this.userinfo.created_at)).format("YYYY.MM.DD");
                return date;
            },
            getUsernameMaxLength() {
                return this.username_maxLength;
            },
            getUsernameMinLength() {
                return this.username_minLength;
            },
            getNameMaxLength() {
                return this.name_maxLength;
            },
            getNameMinLength() {
                return this.name_minLength;
            },
            getPhotoWidth() {
                return this.photosize_width;
            },
            getPhotoHeight() {
                return this.photosize_height;
            },
            getBackgroundWidth() {
                return this.background_width;
            },
            getBackgroundHeight() {
                return this.background_height;
            },
            getMobileMaxLength() {
                return this.mobileLength;
            },
            initpage() {
                vueOBJ.getProfileItemList();
                vueOBJ.getPasswordItemList();
                pageEvent();
                $('#company-user-profile-photo-editbtn').click(function () {
                    $('#company-user-profile-photo-edit').val('');
                    $('#company-user-profile-photo-edit').trigger('click');
                });
                $('#company-user-profile-photo-edit').change(function () {
                    if (this.files && this.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            vueOBJ.photoImg = e.target.result;
                        }
                        //vueOBJ.photoImg = this.files[0];
                        reader.readAsDataURL(this.files[0]);
                    }
                });
                $('#company-user-profile-background-editbtn').click(function () {
                    $('#company-user-profile-background-edit').val('');
                    $('#company-user-profile-background-edit').trigger('click');
                });
                $('#company-user-profile-background-edit').change(function () {
                    if (this.files && this.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            vueOBJ.backgroundImg = e.target.result;
                        }

                        reader.readAsDataURL(this.files[0]);
                    }
                });

                var username = this.getUsername();
                var name = this.getName();
                var email = this.getEmail();

                $("#company-user-id").text(this.userid);
                $("#company-user-profile-username").val(username);
                $("#company-user-profile-name").val(name);
                $("#company-user-profile-email").val(email);
            },
            configureTelInput() {
                var input = document.querySelector("#company-user-profile-tel");
                var nIndex = 0;
                var countries = [];

                for (var key in mobileList) {
                    countries.push(mobileList[key].countrycode);
                }

                window.intlTelInput(input, {
                    onlyCountries: countries,
                    separateDialCode: true
                });

                input.addEventListener("countrychange", function () {
                    var input = document.querySelector("#company-user-profile-tel");
                    var iti = window.intlTelInputGlobals.getInstance(input);
                    $("#company-user-profile-tel-data").val(iti.getSelectedCountryData()['dialCode']);
                    $("#company-user-profile-country-data").val(iti.getSelectedCountryData()['iso2']);
                    $("#company-user-profile-country-name").val(iti.getSelectedCountryData()['name']);
                });

                var iti = window.intlTelInputGlobals.getInstance(input);
                var countryData = window.intlTelInputGlobals.getCountryData();
                var dialcode = this.getCountryCode();
                var countryname = this.getCountryName();
                for (nIndex = 0; nIndex < countryData.length; nIndex ++) {
                    for (var key in mobileList) {
                        if (dialcode == countryData[nIndex].dialCode) {
                            iti.setCountry(countryData[nIndex].iso2)
                            break;
                        }
                    }
                }

                for (var key in mobileList) {
                    if (dialcode == mobileList[key].dialcode) {
                        vueOBJ.mobileLength = parseInt(mobileList[key].characters);
                    }
                }

                var phone = this.getPhonenumber();
                if($("#company-user-profile-tel-data").val() == null || $("#company-user-profile-tel-data").val() == '') {
                    var iti = window.intlTelInputGlobals.getInstance(input);
                    $("#company-user-profile-tel-data").val(iti.getSelectedCountryData()['dialCode']);
                    $("#company-user-profile-country-data").val(iti.getSelectedCountryData()['iso2']);
                    $("#company-user-profile-country-name").val(iti.getSelectedCountryData()['name']);
                }
                $("#company-user-profile-tel").val(phone);
            },
            checkMobileValid(mobile) {
                vueOBJ.mobileError = "";

                if (mobile.length < 1)
                    return false;

                var input = document.querySelector("#company-user-profile-tel");
                var iti = window.intlTelInputGlobals.getInstance(input);
                var cur_dialcode = iti.getSelectedCountryData()['dialCode']

                var bfound = null;
                for(var i = 0; i < mobileList.length; i++){
                    if(mobileList[i].characters == mobile.length && mobileList[i].dialcode == cur_dialcode)
                    {
                        bfound = 1;
                        break;
                    }
                }

                if (bfound != null) {
                    return true;
                }

                return false;
            },
            checkEmailValid(email) {
                vueOBJ.emailError = "";

                if (email.length < 1)
                    return false;

                var emailAddress = email.split("@")[1];

                if (emailAddress == null)
                    return false;
                var bfound = emailList.find(function (elem) {
                    return elem.name == emailAddress;
                })

                if (bfound != null) {
                    return true;
                }

                return false;
            },
            updateUserinfo() {
                var username = $.trim($('#company-user-profile-username').val());
                var name = $.trim($('#company-user-profile-name').val());
                var email = $.trim($('#company-user-profile-email').val());
                var mobile = $.trim($('#company-user-profile-tel').val());

                if (username === '' || name === '' || email === '') {
                    myjs.data.showAlert("you must empty this fields.");
                    return;
                }

                if (username.length < vueOBJ.getUsernameMinLength() || username.length > vueOBJ.getUsernameMaxLength()) {
                    myjs.data.showAlert("The length of Username must be between " + vueOBJ.getUsernameMinLength() + " and " + vueOBJ.getUsernameMaxLength());
                    return;
                }

                if (name.length < vueOBJ.getNameMinLength() || name.length > vueOBJ.getNameMaxLength()) {
                    myjs.data.showAlert("The length of Name must be between " + vueOBJ.getNameMinLength() + " and " + vueOBJ.getNameMaxLength());
                    return;
                }

                if (vueOBJ.checkEmailValid(email) == false) {
                    vueOBJ.emailError = "Email Format is Error";
                    return;
                }

                if (vueOBJ.checkMobileValid(mobile) == false) {
                    vueOBJ.mobileError = "Mobile Format is Error";
                    return;
                }

                var formData = new FormData($('#company-user-profile-form')[0]);
                formData.append('p_width', vueOBJ.getPhotoWidth());
                formData.append('p_height', vueOBJ.getPhotoHeight());
                formData.append('b_width', vueOBJ.getBackgroundWidth());
                formData.append('b_height', vueOBJ.getBackgroundHeight());

                $.ajax({
                    url: '/company.checkProfileNameEmailPhone',
                    type: 'POST',
                    data: formData,
                    async: false,
                    success: function (data) {
                        if (data.msg === "ok") {
                            $("#error-username").css('display', 'none');
                            $("#error-email").css('display', 'none');
                            $("#error-tel").css('display', 'none');

                            $('#sendcode_countdown').css('display', 'block');
                            $('#sendcode_button').css('display', 'none');
                            $('#ModalProfileValidation').modal('show');
                            page_index = 1;
                            EncodeEmailAndMobile();
                            setModal();
                            next_modal();
                        }
                        else if(data.msg === "psize"){
                            myjs.data.showAlert("The profile icon cannot be greater than " + vueOBJ.getPhotoWidth() + " * " + vueOBJ.getPhotoHeight());
                        }
                        else if(data.msg === "bsize"){
                            myjs.data.showAlert("The background image cannot be greater than " + vueOBJ.getBackgroundWidth() + " * " + vueOBJ.getBackgroundHeight());
                        }
                        else if(data.msg === "dup"){
                            if(data.dup1 == 1){
                                $("#error-username").css('display', 'block');
                            }
                            if(data.dup2 == 1){
                                $("#error-email").css('display', 'block');
                            }
                            if(data.dup3 == 1){
                                $("#error-tel").css('display', 'block');
                            }
                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    },
                    cache: false,
                    contentType: false,
                    processData: false
                });
            },
            getUserinfo() {

            },
            getProfileItemList() {
                $.ajax({
                    url: '/company.getCompanyUserCondition',
                    type: 'POST',
                    async: false,
                    success: function (data) {
                        if (data.msg === "ok") {
                            let lists = data.list;
                            if(lists.length <= 0)
                                return;
                            for(var i = 0; i < lists.length; i++) {
                                var elem = lists[i];
                                var photo_size = elem.val_1;
                                photo_size = photo_size.split("*");
                                vueOBJ.photosize_width = parseInt(photo_size[0]);
                                vueOBJ.photosize_height = parseInt(photo_size[1]);

                                var background_size = elem.val_2;
                                background_size = background_size.split("*");
                                vueOBJ.background_width = parseInt(background_size[0]);
                                vueOBJ.background_height = parseInt(background_size[1]);

                                var username_length = elem.val_3.split("-");
                                var minValue = username_length[0];
                                var maxValue = username_length[1];
                                vueOBJ.username_maxLength = parseInt(maxValue);
                                vueOBJ.username_minLength = parseInt(minValue);

                                var name_length = elem.val_4.split("-");
                                var minValue = name_length[0];
                                var maxValue = name_length[1];
                                vueOBJ.name_maxLength = parseInt(maxValue);
                                vueOBJ.name_minLength = parseInt(minValue);
                            }
                            let setmobile = data.setmobile;
                            mobileList = [];
                            Object.keys(setmobile).forEach(function (elem) {
                                if (setmobile[elem].check == "1") {
                                    mobileList.push(setmobile[elem]);
                                }
                            })
                            let setemail = data.setemail;
                            emailList = [];
                            Object.keys(setemail).forEach(function (elem) {
                                if (setemail[elem].check == "1") {
                                    emailList.push(setemail[elem]);
                                }
                            })

                            vueOBJ.configureTelInput();
                        } else {
                            console.log(data.message);
                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            },
            updateProfilePassword() {
                tabIndex = 2;
                let oldpwd = $.trim($('#company-user-profile-senior-old-password-txt').val());
                let newpwd = $.trim($('#company-user-profile-senior-new-password-txt').val());
                let renewpwd = $.trim($('#company-user-profile-senior-confirm-password-txt').val());

                if (oldpwd === "") {
                    $('#current-password-text').css('display', 'block');
                    return;
                }
                else
                    $('#current-password-text').css('display', 'none');
                if (newpwd === "") {
                    $('#password-condition-text').css('display', 'block');
                    return;
                }
                else
                    $('#password-condition-text').css('display', 'none');
                if (newpwd !== renewpwd) {
                    $('#confirm-condition-text').css('display', 'block');
                    return;
                }
                else
                    $('#confirm-condition-text').css('display', 'none');
                if(!pwd_state)
                    return;

                $('#sendcode_countdown').css('display', 'block');
                $('#sendcode_button').css('display', 'none');
                $('#ModalProfileValidation').modal('show');
                EncodeEmailAndMobile();
                setModal();
                next_modal();
            },
            getMobieItemList() {
                $.ajax({
                    url: 'admin.getSystemSecurityMobileItem',
                    data: {
                        start: 1,
                        cnt: -1,
                        filter: 0,
                    },
                    type: 'POST',
                    async: false,
                    success: function (data) {
                        if (data.msg === "ok") {
                            let lists = data.list;
                            mobileList = [];
                            Object.keys(lists).forEach(function (elem) {
                                if (lists[elem].check == "1") {
                                    mobileList.push(lists[elem]);
                                }
                            })
                        } else {
                            console.log(data.message);
                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            },
            getEmailItemList() {
                let postData = {

                };

                axios.post('admin.getSUSEmailItem', postData)
                    .then((response) => {
                        let msg = response.data.msg;

                        if (msg == "ok") {
                            let lists = response.data.list;
                            var lstIndex = 0;

                            Object.keys(lists).forEach(function (elem) {
                                if (lists[elem].check == "1") {
                                    emailList[lstIndex] = lists[elem];
                                    lstIndex ++;
                                }
                            })
                        } else {
                            console.log(response.data.message);
                        }
                    })
                .catch(function (error) {
                    console.log(error);
                })
            },
            getPasswordItemList(){
                $.ajax({
                    method: "POST",
                    url: "/company.getPasswordCondition",
                    statusCode: {
                        404: function() {
                            alramMSG("page not found");
                            return false;
                        }
                    },
                    success: function(response) {
                        let msg = response.msg;
                        $('#company-user-profile-senior-notice').val(response.notice);

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
                        } else {
                            console.log(response.data.message);
                        }
                    }
                });
            },
            modal_next_page(){
                if(page_index == 1) {
                    page_index = 2;
                    next_modal();
                }
                else{
                    var input_code = $('#validation_code').val();

                    if(veryfication_code != input_code || veryfication_code == null || veryfication_code == ''){
                        $('#wrong_code').css('display', 'block');
                        setTimeout(function () {
                            $('#wrong_code').css('display','none');
                            $('#validation_code').val('')
                        },5000);
                        return;
                    }

                    if(tabIndex == 1) {
                        saveProfileInfo();
                    }
                    else if(tabIndex == 2) {
                        $('#ModalProfileValidation').modal('hide');
                        savePasswordInfo();
                    }
                }
            }
        }
    }
</script>

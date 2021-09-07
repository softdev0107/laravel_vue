<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BaseController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*
Route::get('/', function () {
    return view('welcome');
});
*/

/*****  Start common part  *****/
Route::post('compareCKCode','CommonController@compareCKcode');
Route::any('sendverificode','CommonController@sendSMSByAjax');
Route::any('otherURLSendverificode','CommonController@OtherURLSMSByAjax');
Route::any('sendverificodeTomail','CommonController@sendMailByAjax');
Route::post('doc.uploads', 'CommonController@docUploadPost');
Route::post('doc.deleteByUrl','CommonController@tempDocDelete');
Route::post('images.uploads', 'CommonController@imagesUploadPost')->name('images.uploads');
Route::post('images.deleteByUrl','CommonController@tempimgDelete');
/*****  End common part  *****/
Route::get('testdashboard','AdminController@testDashboard');

/****** Dashboard part  Start ******/
/*no use*/
/*Route::get('/wesadminpage', function () {
    return view('admin.adminLogin');
});

Route::get('/admin.dashboard/fastreg={token}', function ($token) {
    return view('admin.dashboardfastreg')->with('fastreg',$token);
})->where('token', '[A-Za-z0-9]+');
*/
/* for test */
Route::get('/wesadminpageT', function () {/*no use*/
    return view('admin.adminLoginT');
});


Route::get('/clear-cache', function() {
    //'cache:clear', 'optimize', 'route:cache', 'route:clear', 'view:clear', 'config:cache'
    //Artisan::call('cache:clear');
    Artisan::call('optimize:clear');
    return "ok";
});


Route::post('/userValidCheck', 'AdminController@userValidCheck');

Route::post('admin.userinfopage', 'AdminController@userinfopage');
Route::post('admin.approve', 'AdminController@adminapprove');
Route::post('admin.cancel', 'AdminController@admincancel');
Route::post('admin.delete', 'AdminController@admindelete');

Route::post('admin.dashboard','AdminController@adminDashboard');
Route::get('admin.dashboard', function () {
    return redirect('/login');
});
Route::get('admin.dashboard#', function () {
    return redirect('/login');
});


Route::get('adminsignout','AdminController@adminsignout');

Route::post('admin.getDashUserData','AdminController@getDashUserData');

Route::post('savefasttoken','AdminController@savefasttoken');
Route::post('getfasttoken','AdminController@getfasttoken');
Route::post('/admin.deletefasttoken','AdminController@deletefasttoken');
Route::post('admin.getServerBrowserLanguage', 'AdminController@getServerBrowserLanguage');

/* called from waaup site */
Route::post('admin.svurlfromSMS', 'CommonController@sendSMSByOtherSite');
Route::post('admin.InvokeSMS','CommonController@sendSMSByInvoke');
Route::post('admin.ProfileSMS','CommonController@sendSMSByProfile');
Route::post('admin.ProfileSMS/{iso}','CommonController@sendSMSByProfile');
Route::post('admin.InvokeMail','CommonController@sendMailByInvoke');
Route::post('admin.ssmu.getsmsmailcont', 'AdminController@getSSMUSmsMailcont');
Route::post('admin.ssmu.setSmsMailCont','AdminController@setSSMUSmsMailCont');
Route::post('admin.ssmu.getDashUserListByEmail','AdminController@getDashUserListByEmail');
Route::post('admin.ssmu.setSSMUUserStatusChange', 'AdminController@setSSMUUserStatusChange');
Route::post('admin.ssmu.setSSMUUserStatusAllChange', 'AdminController@setSSMUUserStatusAllChange');
Route::post('admin.sslang_getStoredLang','DashboardController@getStoredLang');
Route::post('admin.wwlang_getStoredLang','DashWesGlobalController@getWWStoredLang');
Route::post('admin.sslang_saveLang','DashboardController@sslangSaveLang');
Route::post('admin.sslang_saveStatusChange','DashboardController@sslang_saveStatusChange');
Route::post('admin.sc_getEnableLangList','DashboardController@sc_getEnableLangList');
Route::post('admin.stf_getfootstyle', 'DashboardController@stf_getFootStyle');
Route::post('admin.stf_savefootstyle', 'DashboardController@stf_savefootstyle');
Route::post('admin.logimgdata.upload', 'DashboardController@logoimgDataPost');
Route::post('admin.getSiteLogoFiles', 'DashboardController@getSiteLogoFiles');
Route::post('admin.savelogoimgstyle','DashboardController@savelogoimgstyle');
Route::post('admin.getSiteLogoStylelist', 'DashboardController@getSiteLogoStylelist');
Route::post('admin.chageSiteLogoStylelist', 'DashboardController@chageSiteLogoStylelist');
Route::post('admin.chageSiteFootMaxTxt', 'DashboardController@chageSiteFootMaxTxt');
Route::post('admin.getSFEmailList', 'DashboardController@getSFEmailList');
Route::post('admin.savesitefieldemail', 'DashboardController@savesitefieldemail');
Route::post('admin.deleteSiteEmaillist', 'DashboardController@deleteSiteEmaillist');
Route::post('admin.getSiteNumlist','DashboardController@getSiteNumlist');
Route::post('admin.deleteSiteNumber', 'DashboardController@deleteSiteNumber');
Route::post('admin.savesitefieldnumber', 'DashboardController@savesitefieldnumber');
Route::post('admin.updatesitefieldnumber', 'DashboardController@updatesitefieldnumber');// han 2020-10-17
Route::post('admin.getSiteMobileList', 'DashboardController@getSiteMobileList');
Route::post('admin.deletesitemobile', 'DashboardController@deletesitemobile');
Route::post('admin.savesitefieldmobile', 'DashboardController@savesitefieldmobile');
Route::post('admin.SeletedChangeLogImgInfo', 'DashboardController@SeletedChangeLogImgInfo');
Route::post('admin.setSiteFaveritelist', 'DashboardController@setSiteFaveritelist');
Route::post('admin.getSiteFaveritelist', 'DashboardController@getSiteFaveritelist');
Route::post('admin.delSiteFaveritelist', 'DashboardController@delSiteFaveritelist');
Route::post('admin.getsslangbyiso', 'DashboardController@getsslangbyiso');
Route::post('admin.deletesslangbyiso', 'DashboardController@deletesslangbyiso');
Route::post('admin.changesslangbyiso', 'DashboardController@changesslangbyiso');

Route::post('admin.getSiteContentsBylocale', 'DashboardController@getSiteContentsBylocale');
Route::post('admin.getSiteContentsBylocalekey', 'DashboardController@getSiteContentsBylocalekey');
Route::post('admin.addTranslatedLangs', 'DashboardController@addTranslatedLangs');
Route::post('admin.WebsWesGlobalUpload', 'DashboardController@WebsWesGlobalUpload');
Route::post('admin.UpdateWWGBarCenterImg', 'DashboardController@UpdateWWGBarCenterImg');
Route::post('admin.getWebsWesGlobalUpload', 'DashboardController@getWebsWesGlobalUpload');
Route::post('admin.frontAddMenu', 'DashboardController@frontAddMenu');
Route::post('admin.frontGetMenu', 'DashboardController@frontGetMenu');
Route::post('admin.frontChangeMenu', 'DashboardController@frontChangeMenu');
Route::post('admin.WebsWesGlobalMenuUpload', 'DashboardController@WebsWesGlobalMenuUpload');
Route::post('admin.RomovefootMenu', 'DashboardController@RomovefootMenu');
Route::post('admin.wwgpsliderupload', 'DashboardController@wwgpsliderupload');
Route::post('admin.getwwgpsliderlist', 'DashboardController@getwwgpsliderlist');
Route::post('admin.delwwgpsliderlist', 'DashboardController@delwwgpsliderlist');
Route::post('admin.wwgpChangesliderupload', 'DashboardController@wwgpChangesliderupload');
Route::post('admin.wwgpSliderStatus', 'DashboardController@wwgpSliderStatus');
Route::post('admin.wwgpTSupload', 'DashboardController@wwgpTSupload');
Route::post('admin.getwwgpTeachData','DashboardController@getwwgpTeachData');
Route::post('admin.getwwgpStudData', 'DashboardController@getwwgpStudData');
Route::post('admin.wwgpAdvanupload', 'DashboardController@wwgpAdvanupload');
Route::post('admin.getAdvanData', 'DashboardController@getAdvanData');
Route::post('admin.setSiteLogoStyleState', 'DashboardController@setSiteLogoStyleState');
Route::post('admin.deletefrontpageStatesByDevice','DashboardController@deletefrontpageStatesByDevice');

Route::post('admin.saveEachPageDevices','DashboardController@saveEachPageDevices');
Route::post('admin.getEachPageDevices','DashboardController@getEachPageDevices');




Route::post('admin.wwgLang_SaveLang', 'DashboardController@wwgLang_SaveLang');
Route::post('admin.wwglang_saveStatusChange', 'DashboardController@wwglang_saveStatusChange');
Route::post('admin.getWWGStoredLang', 'DashboardController@getWWGStoredLang');
Route::post('admin.getWWGFrontStoredLang', 'DashboardController@getWWGFrontStoredLang');
Route::post('admin.getSystemStoredLang','DashboardController@getSystemStoredLang');
Route::post('admin.GeneralValidationCode','DashboardController@GeneralValidationCode');

Route::post('admin.wwgploginInstruct', 'DashboardController@wwgploginInstruct');
Route::post('admin.wwgploginAdvanupload', 'DashboardController@wwgploginAdvanupload');
Route::post('admin.getwwgpLoginAdvanData', 'DashboardController@getwwgpLoginAdvanData');
Route::post('admin.getwwgpLoginInstructData', 'DashboardController@getwwgpLoginInstructData');
Route::post('admin.wwgploginRelease', 'DashboardController@wwgploginRelease');
Route::post('admin.wwgpRegisterOrg', 'DashboardWebsController@wwgpRegisterOrg');
Route::post('admin.wwgpGetRegisterOrg', 'DashboardWebsController@wwgpGetRegisterOrg');
Route::post('admin.wwgpRegisterInd', 'DashboardWebsController@wwgpRegisterInd');
Route::post('admin.wwgpGetRegisterInd', 'DashboardWebsController@wwgpGetRegisterInd');
Route::post('admin.wwgpRegisterStd', 'DashboardWebsController@wwgpRegisterStd');
Route::post('admin.wwgpGetRegisterStd', 'DashboardWebsController@wwgpGetRegisterStd');
Route::post('admin.wwgpRegisterRelease', 'DashboardWebsController@wwgpRegisterRelease');
Route::post('admin.getContentList','DashboardWebsController@getContentList');
Route::post('admin.wwgpc_deleteGroupList','DashboardWebsController@wwgpc_deleteGroupList');

// DashWesGlobalController /////////////////////////////////////////////////////////////////////////////////////////////
Route::post('admin.setWebsiteThemeColor', 'DashWesGlobalController@setWebsiteThemeColor');
Route::post('admin.getLogoImageStyle', 'DashWesGlobalController@getLogoImageStyle');
Route::post('admin.setSocialSettingDetailIcon', 'DashWesGlobalController@setSocialSettingDetailIcon');
Route::post('admin.deleteSocialSettingIcon', 'DashWesGlobalController@deleteSocialSettingIcon');
Route::post('admin.getSocialSettingPage', 'DashWesGlobalController@getSocialSettingPage');
Route::post('admin.saveSocialSettingPage', 'DashWesGlobalController@saveSocialSettingPage');
Route::post('admin.chooseIconImageUpload', 'DashWesGlobalController@chooseIconImageUpload');
Route::post('admin.saveConfigurationGeneral', 'DashWesGlobalController@saveConfigurationGeneral');
Route::post('admin.getConfigurationGeneral', 'DashWesGlobalController@getConfigurationGeneral');
Route::post('admin.getWesTranslation', 'DashWesGlobalController@getWesTranslation');
Route::post('admin.changeWesTranslation', 'DashWesGlobalController@changeWesTranslation');
Route::post('admin.wwpc_checkpagename', 'DashboardWebsController@wwpc_checkpagename');
Route::post('admin.websGlobalFrontPageRelease', 'DashWesGlobalController@websGlobalFrontPageRelease');
Route::post('admin.getSideContentTypeData', 'DashWesGlobalController@getSideContentTypeData');
Route::post('admin.addSideContentTypeData', 'DashWesGlobalController@addSideContentTypeData');
Route::post('admin.editSideContentData', 'DashWesGlobalController@editSideContentData');
Route::post('admin.getSideContentPageData', 'DashWesGlobalController@getSideContentPageData');
Route::post('admin.addSideContentPageData', 'DashWesGlobalController@addSideContentPageData');
Route::post('admin.deleteSideContentData', 'DashWesGlobalController@deleteSideContentData');
Route::post('admin.getSideContentCountAccoringPageType', 'DashWesGlobalController@getSideContentCountAccoringPageType');
Route::post('admin.getSideContentDataFromId', 'DashWesGlobalController@getSideContentDataFromId');
Route::post('admin.wwpContentRelease', 'DashWesGlobalController@wwpContentRelease');
Route::post('admin.getWWCFrontPageList', 'DashWesGlobalController@getWWCFrontPageList');
Route::post('admin.saveWWCFrontPageList', 'DashWesGlobalController@saveWWCFrontPageList');
Route::post('admin.setSystemSettingBasic', 'DashSystemSettingController@setSystemSettingBasic');
Route::post('admin.getSystemSettingBasic', 'DashSystemSettingController@getSystemSettingBasic');
Route::post('admin.getSystemSettingBasicLogin', 'DashSystemSettingController@getSystemSettingBasicLogin');
Route::post('admin.setSystemSettingBasicLogin', 'DashSystemSettingController@setSystemSettingBasicLogin');
Route::post('admin.getSystemSettingBasicRegister', 'DashSystemSettingController@getSystemSettingBasicRegister');
Route::post('admin.setSystemSettingBasicRegister', 'DashSystemSettingController@setSystemSettingBasicRegister');
Route::post('admin.getContentTypeFromLang', 'DashWesGlobalController@getContentTypeFromLang');
Route::post('admin.getwwgpConstructionData', 'DashWesGlobalController@getwwgpConstructionData');
Route::post('admin.wwgpConstructionUpload', 'DashWesGlobalController@wwgpConstructionUpload');
Route::post('admin.wwgpConstructionRelease', 'DashWesGlobalController@wwgpConstructionRelease');
Route::post('admin.wwmfGetContentType', 'DashWesGlobalController@wwmfGetContentType');


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DashSystemController ////////////////////////////////////////////////////////////////////////////////////////////////
Route::post('admin.addSystemSecurityMobileItem', 'DashSystemController@addSystemSecurityMobileItem');
Route::post('admin.getSystemSettinMobileItem', 'DashSystemController@getSystemSettinMobileItem');
Route::post('admin.getSystemSecurityMobileItem', 'DashSystemController@getSystemSecurityMobileItem');
Route::post('admin.delSystemSecurityMobileItem', 'DashSystemController@delSystemSecurityMobileItem');
Route::post('admin.updateSystemSecurityMobileItem', 'DashSystemController@updateSystemSecurityMobileItem');
Route::post('admin.getSystemSettingMobileItem', 'DashSystemController@getSystemSettingMobileItem');
Route::post('admin.getSystemThemeColor', 'DashSystemController@getSystemThemeColor');
Route::post('admin.addSystemThemeColor', 'DashSystemController@addSystemThemeColor');
Route::post('admin.delSystemThemeColor', 'DashSystemController@delSystemThemeColor');
Route::post('admin.setSystemThemeColor', 'DashSystemController@setSystemThemeColor');
Route::post('admin.setWebsiteThemeColor', 'DashSystemController@setWebsiteThemeColor');
Route::post('admin.getSystemUserAccountAllData', 'DashSystemController@getSystemUserAccountAllData');
Route::post('admin.getSystemSettingField', 'DashSystemController@getSystemSettingField');
Route::post('admin.setSystemUserAccountBaseData', 'DashSystemController@setSystemUserAccountBaseData');
Route::post('admin.setSystemUserAccountAddData', 'DashSystemController@setSystemUserAccountAddData');
Route::post('admin.editSystemUserAccountAddData', 'DashSystemController@editSystemUserAccountAddData');
Route::post('admin.deleteSystemUserAccountAddData', 'DashSystemController@deleteSystemUserAccountAddData');

Route::post('admin.getSUPRolesDepartmentList', 'DashSystemSettingController@getSUPRolesDepartmentList');
Route::post('admin.getSUPRAllMenuList', 'DashSystemSettingController@getSUPRAllMenuList');
Route::post('admin.getSUPRolePermissionData', 'DashSystemSettingController@getSUPRolePermissionData');
Route::post('admin.saveSUPRolePermissionData', 'DashSystemSettingController@saveSUPRolePermissionData');
Route::post('admin.getSUPRolesPositionList', 'DashSystemSettingController@getSUPRolesPositionList');
Route::post('admin.getSUPRolesGroupList', 'DashSystemSettingController@getSUPRolesGroupList');
Route::post('admin.deleteSeveralSUPRolePermissionData', 'DashSystemSettingController@deleteSeveralSUPRolePermissionData');
Route::post('admin.getSUPUUserInfoList', 'DashSystemSettingController@getSUPUUserInfoList');
Route::post('admin.getSUPUserPermissionData', 'DashSystemSettingController@getSUPUserPermissionData');
Route::post('admin.getSUPUDialogUserInfoList', 'DashSystemSettingController@getSUPUDialogUserInfoList');
Route::post('admin.getSUPUSubRoleType', 'DashSystemSettingController@getSUPUSubRoleType');
Route::post('admin.saveSUPUserPermissionData', 'DashSystemSettingController@saveSUPUserPermissionData');
Route::post('admin.deleteSeveralSUPUserPermissionData', 'DashSystemSettingController@deleteSeveralSUPUserPermissionData');

Route::post('admin.getSUMRolesDepartmentList', 'DashSystemController@getSUMRolesDepartmentList');
Route::post('admin.getSUMRolesDepartment', 'DashSystemController@getSUMRolesDepartment');
Route::post('admin.addSUMRolesDepartment', 'DashSystemController@addSUMRolesDepartment');
Route::post('admin.editSUMRolesDepartment', 'DashSystemController@editSUMRolesDepartment');
Route::post('admin.deleteSUMRolesDepartment', 'DashSystemController@deleteSUMRolesDepartment');
Route::post('admin.getSUMRolesPositionList', 'DashSystemController@getSUMRolesPositionList');
Route::post('admin.addSUMRolesPosition', 'DashSystemController@addSUMRolesPosition');
Route::post('admin.deleteSUMRolesPosition', 'DashSystemController@deleteSUMRolesPosition');
Route::post('admin.editSUMRolesPosition', 'DashSystemController@editSUMRolesPosition');
Route::post('admin.getUserInfoList', 'DashSystemController@getUserInfoList');
Route::post('admin.getSubRoleType', 'DashSystemController@getSubRoleType');
Route::post('admin.addSUMRolesGroup', 'DashSystemController@addSUMRolesGroup');
Route::post('admin.getSUMRolesGroup', 'DashSystemController@getSUMRolesGroup');
Route::post('admin.editSUMRolesGroup', 'DashSystemController@editSUMRolesGroup');
Route::post('admin.deleteSUMRolesGroup', 'DashSystemController@deleteSUMRolesGroup');
Route::post('admin.showGroupUserInfo', 'DashSystemController@showGroupUserInfo');
Route::post('admin.allDeleteSUMRolesChecked', 'DashSystemController@allDeleteSUMRolesChecked');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DashAppsController ////////////////////////////////////////////////////////////////////////////////////////////////
Route::post('admin.getAWAThemeColor', 'DashAppsController@getAWAThemeColor');
Route::post('admin.addAWAThemeColor', 'DashAppsController@addAWAThemeColor');
Route::post('admin.delAWAThemeColor', 'DashAppsController@delAWAThemeColor');
Route::post('admin.getAWAThemeBoxedList', 'DashAppsController@getAWAThemeBoxedList');
Route::post('admin.addAWAThemeBoxedList', 'DashAppsController@addAWAThemeBoxedList');
Route::post('admin.editAWAThemeBoxedList', 'DashAppsController@editAWAThemeBoxedList');
Route::post('admin.deleteAWAThemeBoxedList', 'DashAppsController@deleteAWAThemeBoxedList');
Route::post('admin.allDeleteAWAThemeBoxed', 'DashAppsController@allDeleteAWAThemeBoxed');
Route::post('admin.addAWAHeadCategory', 'DashAppsController@addAWAHeadCategory');
Route::post('admin.getAWACategoryList', 'DashAppsController@getAWACategoryList');
Route::post('admin.setAWAHeadBackground', 'DashAppsController@setAWAHeadBackground');
Route::post('admin.saveAWAHeadCategory', 'DashAppsController@saveAWAHeadCategory');
Route::post('admin.deleteAWAHeadCategory', 'DashAppsController@deleteAWAHeadCategory');
Route::post('admin.setAWAHeadTopheaderContentList', 'DashAppsController@setAWAHeadTopheaderContentList');
Route::post('admin.getAWAHeadTopheaderContentList', 'DashAppsController@getAWAHeadTopheaderContentList');
Route::post('admin.editAWAHeadTopheaderContentList', 'DashAppsController@editAWAHeadTopheaderContentList');
Route::post('admin.showAWAHeadTopheaderContentItem', 'DashAppsController@showAWAHeadTopheaderContentItem');
Route::post('admin.deleteAWAHeadTopheaderContentList', 'DashAppsController@deleteAWAHeadTopheaderContentList');
Route::post('admin.allDeleteAWATopheaderChecked', 'DashAppsController@allDeleteAWATopheaderChecked');
Route::post('admin.setAWAHeadHeadheaderContentList', 'DashAppsController@setAWAHeadHeadheaderContentList');
Route::post('admin.getAWAHeadHeadheaderContentList', 'DashAppsController@getAWAHeadHeadheaderContentList');
Route::post('admin.editAWAHeadHeadheaderContentList', 'DashAppsController@editAWAHeadHeadheaderContentList');
Route::post('admin.showAWAHeadHeadheaderContentItem', 'DashAppsController@showAWAHeadHeadheaderContentItem');
Route::post('admin.deleteAWAHeadHeadheaderContentList', 'DashAppsController@deleteAWAHeadHeadheaderContentList');
Route::post('admin.allDeleteAWAHeadheaderChecked', 'DashAppsController@allDeleteAWAHeadheaderChecked');
Route::post('admin.getAWAHeadSubheaderContentList', 'DashAppsController@getAWAHeadSubheaderContentList');
Route::post('admin.setAWAHeadSubheaderContentList', 'DashAppsController@setAWAHeadSubheaderContentList');
Route::post('admin.editAWAHeadSubheaderContentList', 'DashAppsController@editAWAHeadSubheaderContentList');
Route::post('admin.showAWAHeadSubheaderContentItem', 'DashAppsController@showAWAHeadSubheaderContentItem');
Route::post('admin.deleteAWAHeadSubheaderContentList', 'DashAppsController@deleteAWAHeadSubheaderContentList');
Route::post('admin.allDeleteAWASubheaderChecked', 'DashAppsController@allDeleteAWASubheaderChecked');

Route::post('admin.getAWTSliderImageList', 'DashAppsController@getAWTSliderImageList');
Route::post('admin.addAWTSliderImageList', 'DashAppsController@addAWTSliderImageList');
Route::post('admin.editAWTSliderImageList', 'DashAppsController@editAWTSliderImageList');
Route::post('admin.deleteAWTSliderImageList', 'DashAppsController@deleteAWTSliderImageList');
Route::post('admin.allDeleteAWAToolsSliderImage', 'DashAppsController@allDeleteAWAToolsSliderImage');

/* awcs part start*/
Route::post('admin.getAWCSCategoryList', 'DashAppsController@getAWCSCategoryList');
Route::post('admin.addAWCSCategoryList', 'DashAppsController@addAWCSCategoryList');
Route::post('admin.editAWCSCategoryList', 'DashAppsController@editAWCSCategoryList');
Route::post('admin.deleteAWCSCategoryList', 'DashAppsController@deleteAWCSCategoryList');
Route::post('admin.allDeleteAWCSCategoryList', 'DashAppsController@allDeleteAWCSCategoryList');

Route::post('admin.addAWCSClassSizeList','DashAppsController@addAWCSClassSizeList');
Route::post('admin.getAWCSClassSizeList','DashAppsController@getAWCSClassSizeList');
Route::post('admin.editAWCSClassSizeList','DashAppsController@editAWCSClassSizeList');
Route::post('admin.deleteAWCSClassSizeList','DashAppsController@deleteAWCSClassSizeList');
Route::post('admin.allDeleteAWCSClassSizeList','DashAppsController@allDeleteAWCSClassSizeList');

Route::post('admin.addAWCSLanguageList','DashAppsController@addAWCSLanguageList');
Route::post('admin.getAWCSLanguageList','DashAppsController@getAWCSLanguageList');
Route::post('admin.editAWCSLanguageList','DashAppsController@editAWCSLanguageList');
Route::post('admin.deleteAWCSLanguageList','DashAppsController@deleteAWCSLanguageList');
Route::post('admin.allDeleteAWCSLanguageList','DashAppsController@allDeleteAWCSLanguageList');

Route::post('admin.addAWCSCourseFormList','DashAppsController@addAWCSCourseFormList');
Route::post('admin.getAWCSCourseFormList','DashAppsController@getAWCSCourseFormList');
Route::post('admin.editAWCSCourseFormList','DashAppsController@editAWCSCourseFormList');
Route::post('admin.deleteAWCSCourseFormList','DashAppsController@deleteAWCSCourseFormList');
Route::post('admin.allDeleteAWCSCourseFormList','DashAppsController@allDeleteAWCSCourseFormList');

Route::post('admin.addAWCSCombinationList','DashAppsController@addAWCSCombinationList');
Route::post('admin.getAWCSCombinationList','DashAppsController@getAWCSCombinationList');
Route::post('admin.editAWCSCombinationList','DashAppsController@editAWCSCombinationList');
Route::post('admin.deleteAWCSCombinationList','DashAppsController@deleteAWCSCombinationList');
Route::post('admin.allDeleteAWCSCombinationList','DashAppsController@allDeleteAWCSCombinationList');

Route::post('admin.addAWCSAgeList','DashAppsController@addAWCSAgeList');
Route::post('admin.getAWCSAgeList','DashAppsController@getAWCSAgeList');
Route::post('admin.editAWCSAgeList','DashAppsController@editAWCSAgeList');
Route::post('admin.deleteAWCSAgeList','DashAppsController@deleteAWCSAgeList');
Route::post('admin.allDeleteAWCSAgeList','DashAppsController@allDeleteAWCSAgeList');

Route::post('admin.addAWCSLimitsList','DashAppsController@addAWCSLimitsList');
Route::post('admin.getAWCSLimitsList','DashAppsController@getAWCSLimitsList');
Route::post('admin.editAWCSLimitsList','DashAppsController@editAWCSLimitsList');
Route::post('admin.deleteAWCSLimitsList','DashAppsController@deleteAWCSLimitsList');
Route::post('admin.allDeleteAWCSLimitsList','DashAppsController@allDeleteAWCSLimitsList');

Route::post('admin.addAWCSLengthList','DashAppsController@addAWCSLengthList');
Route::post('admin.getAWCSLengthList','DashAppsController@getAWCSLengthList');
Route::post('admin.editAWCSLengthList','DashAppsController@editAWCSLengthList');
Route::post('admin.deleteAWCSLengthList','DashAppsController@deleteAWCSLengthList');
Route::post('admin.allDeleteAWCSLengthList','DashAppsController@allDeleteAWCSLengthList');

Route::post('admin.addAWCSRegionList','DashAppsController@addAWCSRegionList');
Route::post('admin.getAWCSRegionList','DashAppsController@getAWCSRegionList');
Route::post('admin.editAWCSRegionList','DashAppsController@editAWCSRegionList');
Route::post('admin.deleteAWCSRegionList','DashAppsController@deleteAWCSRegionList');
Route::post('admin.allDeleteAWCSRegionList','DashAppsController@allDeleteAWCSRegionList');

Route::post('admin.addAWCSStudentLevelList','DashAppsController@addAWCSStudentLevelList');
Route::post('admin.getAWCSStudentLevelList','DashAppsController@getAWCSStudentLevelList');
Route::post('admin.editAWCSStudentLevelList','DashAppsController@editAWCSStudentLevelList');
Route::post('admin.deleteAWCSStudentLevelList','DashAppsController@deleteAWCSStudentLevelList');
Route::post('admin.allDeleteAWCSStudentLevelList','DashAppsController@allDeleteAWCSStudentLevelList');
/* awcs part end*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///DashAppsModuleController ////////////////////////////////////////////////////////////////////////////////////////////
Route::post('admin.saveAWMLanguage', 'DashAppsModuleController@saveAWMLanguage');
Route::post('admin.getAWMLanguage', 'DashAppsModuleController@getAWMLanguage');
Route::post('admin.saveAWMLanguageChanges', 'DashAppsModuleController@saveAWMLanguageChanges');
Route::post('admin.deleteSeveralAWMLanguages', 'DashAppsModuleController@deleteSeveralAWMLanguages');
Route::post('admin.getAWMListData', 'DashAppsModuleController@getAWMListData');
Route::post('admin.saveAWMListData', 'DashAppsModuleController@saveAWMListData');
Route::post('admin.deleteAWMListData', 'DashAppsModuleController@deleteAWMListData');
Route::post('admin.deleteSeveralAWMListLanguages', 'DashAppsModuleController@deleteSeveralAWMListLanguages');
Route::post('admin.getAppModuleLanguageStyleList', 'DashAppsModuleController@getAppModuleLanguageStyleList');
//Route::post('admin.getSystemLogoStyleList', 'DashAppsModuleController@getSystemLogoStyleList');
Route::post('admin.getAWMListDataFromId', 'DashAppsModuleController@getAWMListDataFromId');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Route::post('admin.getContentTypeList', 'DashboardWebsController@getContentTypeList');
Route::post('admin.getPageTypeList', 'DashboardWebsController@getPageTypeList');
Route::post('admin.addPageType','DashboardWebsController@addPageType');
Route::post('admin.changePageType','DashboardWebsController@changePageType');
Route::post('admin.addNumInPageType','DashboardWebsController@addNumInPageType');
Route::post('admin.addwwgpp_pagesetting','DashboardWebsController@addwwgpp_pagesetting');
Route::post('admin.getChangeContentASLang', 'DashboardWebsController@getChangeContentASLang');
Route::post('admin.wwpc_checkpagename_pytype_lang', 'DashboardWebsController@wwpc_checkpagename_pytype_lang');
Route::post('admin.addwwgpp_pagesetting_change','DashboardWebsController@addwwgpp_pagesetting_change');
Route::post('admin.addwwgpp_pagesettingMuti_change','DashboardWebsController@addwwgpp_pagesettingMuti_change');
Route::post('admin.getPageSettingList','DashboardWebsController@getPageSettingList');
Route::post('admin.changePageSettingitem', 'DashboardWebsController@changePageSettingitem');

/* relation folder and file */
Route::post('admin.getHostDirectories', 'DashboardWebsController@getHostDirectories');
Route::post('admin.makeHostDirectory', 'DashboardWebsController@makeHostDirectory');
Route::post('admin.renameHostDirectory', 'DashboardWebsController@renameHostDirectory');
Route::post('admin.deleteHostObj','DashboardWebsController@deleteHostObj');
Route::post('admin.changeHostObj','DashboardWebsController@changeHostObj');
Route::post('admin.deleteAllHostObj', 'DashboardWebsController@deleteAllHostObj');
Route::post('admin.wwgMediaUpload', 'DashboardWebsController@wwgMediaUpload');
Route::post('admin.searchAllHostObj', 'DashboardWebsController@searchAllHostObj');

/****** End Dashboard part ******/

Route::get('/lang', function () {
    return view('admin.insertLang');
});
//Route::any('/lang/{scont}', 'DashboardController@addlangTest');
Route::post('admin.getDLangStr_type', 'DashboardController@getDLangStr_type');
Route::post('admin.getDLangStr_key', 'DashboardController@getDLangStr_key');
Route::post('admin.getDLangStr_link', 'DashboardController@getDLangStr_link');
Route::post('admin.getDLangStr_cont', 'DashboardController@getDLangStr_cont');

Route::post('admin.InsertLangTemp', 'DashboardController@InsertLangTemp');
Route::post('admin.UpdateLangTemp', 'DashboardController@UpdateLangTemp');
Route::post('admin.deleteLangTemp', 'DashboardController@deleteLangTemp');

//Route::any('/frontlang', 'DashboardController@addfrontlangTest');
Route::get('/frontlang', function () {
    return view('admin.insertFrontLang');
});
//Route::any('/frontlang/{scont}', 'DashboardController@addfrontlangTest');
Route::post('admin.getFLangStr_type', 'DashboardController@getFLangStr_type');
Route::post('admin.getFLangStr_key', 'DashboardController@getFLangStr_key');
Route::post('admin.getFLangStr_link', 'DashboardController@getFLangStr_link');
Route::post('admin.getFLangStr_cont', 'DashboardController@getFLangStr_cont');

Route::post('admin.InsertfrontLangTemp', 'DashboardController@InsertfrontLangTemp');
Route::post('admin.UpdatefrontLangTemp', 'DashboardController@UpdatefrontLangTemp');
Route::post('admin.deletefrontLangTemp', 'DashboardController@deletefrontLangTemp');

Route::post('admin.getUserinfo', 'DashboardController@getUserinfo');
Route::post('admin.updateUserinfo', 'DashboardController@updateUserinfo');
Route::post('admin.updateUserPassword', 'DashboardController@updateUserPassword');


Route::post('admin.getDefaultItemList', 'DashboardController@getDefaultItemList');
Route::post('admin.getGlobalUserProfileList', 'DashboardController@getGlobalUserProfileList');
Route::post('admin.ProfileMail','CommonController@sendMailByProfile');
Route::post('admin.checkProfileNameEmailPhone','DashboardController@checkProfileNameEmailPhone');

Route::post('admin.insertSUSEmailItem', 'DashboardController@insertSUSEmailItem');
Route::post('admin.getSUSEmailItem', 'DashboardController@getSUSEmailItem');
Route::post('admin.deleteSUSEmailItem', 'DashboardController@deleteSUSEmailItem');
Route::post('admin.updateSUSEmailItem', 'DashboardController@updateSUSEmailItem');

Route::post('admin.insertSUSPasswordItem', 'DashboardController@insertSUSPasswordItem');
Route::post('admin.getSUSPasswordItem', 'DashboardController@getSUSPasswordItem');
Route::post('admin.deleteSUSPasswordItem', 'DashboardController@deleteSUSPasswordItem');
Route::post('admin.updateSUSPasswordItem', 'DashboardController@updateSUSPasswordItem');


Route::post('admin.insertTextStyle', 'DashboardController@insertTextStyle');// han 2020-11-03
Route::post('admin.getTextStyleList', 'DashboardController@getTextStyleList');// han 2020-11-03
Route::post('admin.deleteSiteText', 'DashboardController@deleteSiteText');// han 2020-11-03

Route::post('admin.ssrGetSetting', 'DashboardController@ssrGetSetting');
Route::post('admin.ssrRegisterSetting', 'DashboardController@ssrRegisterSetting');
Route::post('admin.ssrRegisterAppearance', 'DashboardController@ssrRegisterAppearance');
Route::post('admin.ssrGetAppearance', 'DashboardController@ssrGetAppearance');

///UserRegController ///////////////////////////////////////////////////////////////////////////////////////////////////
Route::post('admin.getApplyUserInfoList', 'UserRegController@getApplyUserInfoList');
Route::post('admin.getApplyChinaUserInfoList', 'UserRegController@getApplyChinaUserInfoList');
Route::post('admin.editApplyUsersInfo', 'UserRegController@editApplyUsersInfo');
Route::post('admin.deleteApplyUsersInfo', 'UserRegController@deleteApplyUsersInfo');
Route::post('admin.deleteApplyChinaUsersInfo', 'UserRegController@deleteApplyChinaUsersInfo');
Route::post('admin.saveApplyUsersInfo', 'UserRegController@saveApplyUsersInfo');
Route::post('admin.getRemindUserList', 'UserRegController@getRemindUserList');
Route::post('admin.getOUserInfoList', 'UserRegController@getOUserInfoList');
Route::post('admin.getChinaOUserInfoList', 'UserRegController@getChinaOUserInfoList');
Route::post('admin.deleteChinaOUserInfoList', 'UserRegController@deleteChinaOUserInfoList');
Route::post('admin.changeChinaOUserInfoList', 'UserRegController@changeChinaOUserInfoList');
Route::post('admin.getEmailManageApprovalList', 'UserRegController@getEmailManageApprovalList');
Route::post('admin.setEmailManageApprovalState', 'UserRegController@setEmailManageApprovalState');
Route::post('admin.editEmailManageApprovalList', 'UserRegController@editEmailManageApprovalList');
Route::post('admin.saveEmailManageApprovalList', 'UserRegController@saveEmailManageApprovalList');
Route::post('admin.deleteEmailManageApprovalList', 'UserRegController@deleteEmailManageApprovalList');
Route::post('admin.getEmailManageFailedList', 'UserRegController@getEmailManageFailedList');
Route::post('admin.setEmailManageFailedState', 'UserRegController@setEmailManageFailedState');
Route::post('admin.editEmailManageFailedList', 'UserRegController@editEmailManageFailedList');
Route::post('admin.saveEmailManageFailedList', 'UserRegController@saveEmailManageFailedList');
Route::post('admin.deleteEmailManageFailedList', 'UserRegController@deleteEmailManageFailedList');
Route::post('admin.getUOPPasswordItem', 'UserRegController@getUOPPasswordItem');
Route::post('admin.insertUOPPasswordItem', 'UserRegController@insertUOPPasswordItem');
Route::post('admin.updateUOPPasswordItem', 'UserRegController@updateUOPPasswordItem');
Route::post('admin.getUsersOrgAccountAllData', 'UserRegController@getUsersOrgAccountAllData');
Route::post('admin.deleteUsersOrgAccountAddData', 'UserRegController@deleteUsersOrgAccountAddData');
Route::post('admin.setUsersOrgAccountBaseData', 'UserRegController@setUsersOrgAccountBaseData');
Route::post('admin.setUsersOrgAccountAddData', 'UserRegController@setUsersOrgAccountAddData');
Route::post('admin.editUsersOrgAccountAddData', 'UserRegController@editUsersOrgAccountAddData');


///DashWesChinaController///////////////////////////////////////////////////////////////////////////////////////////////
Route::post('admin.getWebsWesChinaUpload', 'DashWesChinaController@getWebsWesChinaUpload');
Route::post('admin.websChinaFrontPageRelease', 'DashWesChinaController@websChinaFrontPageRelease');
Route::post('admin.saveWebsWesChinaUpload', 'DashWesChinaController@saveWebsWesChinaUpload');
Route::post('admin.updateWWChinaBarCenterImg', 'DashWesChinaController@updateWWChinaBarCenterImg');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// StreamController///////////////////////////
Route::post('admin.getStreamList','StreamController@getStreamList');
///


//translate country name and city name
Route::post('/admin.getTranslateString', 'HomeController@getTranslateString');

/****** Start Wes Global Front part ******/

Route::get('/admin.dashboard/{token}', 'AdminController@fastregister');
Route::get('/{iso}/fastreg/{token}', 'AdminController@fastregisterwithlang');
Route::post('/user.fastreg','AdminController@fastregisterSave');

Route::get('/', 'HomeController@index');
Route::get('/home', 'HomeController@index');
Route::get('/{iso}/home', 'HomeController@index');
Route::get('/login', 'HomeController@login');
Route::get('/{iso}/login', 'HomeController@login');
Route::get('/regStudent','StudentController@index');
Route::get('/{iso}/regStudent','StudentController@index');
//Route::get('/regTeacher','TeacherController@index');
//Route::get('/{iso}/regTeacher','TeacherController@index');
Route::get('/regTeacher','UserRegController@index');
Route::get('/{iso}/regTeacher','UserRegController@index');
Route::post('/wesRegisterUser','UserRegController@wesRegisterUser');
Route::post('/admin.getTranslateCountry', 'UserRegController@getTranslateCountry');


Route::get('/{iso}/preview', 'PreviewController@index');
Route::get('/{iso}/preview/login', 'PreviewController@login');
Route::get('/{iso}/preview/construction', 'PreviewController@viewConstruction');
Route::get('/{iso}/page/construction', 'PreviewController@viewConstruction');
Route::get('/page/construction', 'PreviewController@viewConstruction');
Route::get('/{iso}/preview/userRegister', 'PreviewController@userRegister');


include "company.php";

Route::get('/{iso}', function($iso)
{
    $requestURL = $_SERVER['REQUEST_URI'];
    $ext = pathinfo($requestURL, PATHINFO_EXTENSION);
    if($ext!=='')
        exit(1);
    $pos = BaseController::isCountryISO($iso);
    if ($pos !== false)
    {
        try{
            $refurl = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : "";
        }catch (ErrorHandler $errorHandler){
            $refurl="";
        }
        if($refurl==="")
        {
            session()->put('ulang', strtolower($iso));
            return redirect('/');
        }
        else
        {
            $parse_url =  parse_url($refurl);

            if($parse_url['path']==="/"){
                session()->put('ulang', strtolower($iso));
                return redirect('/');
            }
            else
            {
                $path_arr=explode('/', $parse_url['path']);
                $retpath=array();
                foreach ($path_arr as $p){
                    $pos = BaseController::isCountryISO($p);
                    if ($pos === false){
                        array_push($retpath , $p);
                    }
                }
                $comma_separated = implode('/', $retpath);
                return redirect('/'.$iso.$comma_separated);
            }
        }
    }
    else
    {
        return redirect('/');
    }
    exit();
});

/* call when no page */
Route::get('/page/404', 'HomeController@notFoundPage');
/*
Route::fallback(function () {
    return redirect('/page/404');
});*/

/*  if have no route call down function */
Route::fallback(function () {
     $request = Illuminate\Http\Request::createFromGlobals();
    return \App\Http\Controllers\HomeController::CPageTemple($request);
});

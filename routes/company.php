<?php

Route::get('/company.login', 'HomeController@companylogin');
Route::post('/company.userValidCheck','Company\DashboardController@userValidCheck');
Route::get('/company.dashboard','Company\DashboardController@companyDashboard');
Route::post('/company.dashboard','Company\DashboardController@companyDashboard');
Route::post('/company.getCompanyUserCondition', 'Company\DashboardController@getCompanyUserCondition');
Route::post('/company.checkProfileNameEmailPhone', 'Company\DashboardController@checkProfileNameEmailPhone');
Route::post('/company.updateCompanyUserinfo', 'Company\DashboardController@updateCompanyUserinfo');
Route::post('/company.getSystemSettingPassword','Company\DashboardController@getSystemSettingPassword');
Route::post('/company.setCompanyUserPassword','Company\DashboardController@setCompanyUserPassword');
Route::post('/company.saveUserAccountInfo','Company\DashboardController@saveUserAccountInfo');
Route::post('/company.updateCompanyUserPassword', 'Company\DashboardController@updateCompanyUserPassword');

Route::get('/company.userdashboard','Company\DashboardController@companyDashboard');
Route::post('/company.userdashboard','Company\DashboardController@companyDashboard');

Route::post('/company.getCompanyUserList','Company\UsersController@getCompanyUserList');
Route::post('/company.searchApplyUserInfo','Company\UsersController@searchApplyUserInfo');
Route::post('/company.getPasswordCondition','Company\UsersController@getPasswordCondition');

Route::get('/addUser', 'HomeController@addCompanyUser');
Route::get('/{iso}/addUser','HomeController@addCompanyUser');
Route::get('/register', 'HomeController@regCompanyUser');
Route::get('/{iso}/register','HomeController@regCompanyUser');
Route::post('/company.userRegisterSMS','CommonController@userRegisterSMS');
Route::post('/{iso}/company.userRegisterSMS','CommonController@userRegisterSMS');
Route::post('company.GeneralValidationCode/{iso}','DashboardController@GeneralValidationCode');
Route::post('/company.setRegisterUser','Company\UsersController@setRegisterUser');
Route::post('/{iso}/company.setRegisterUser','Company\UsersController@setRegisterUser');
Route::post('/company.setAddUser','Company\UsersController@setAddUser');
Route::post('/{iso}/company.setAddUser','Company\UsersController@setAddUser');


?>

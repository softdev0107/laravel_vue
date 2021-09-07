<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class DashboardController extends BaseController
{
    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    public function index()
    {
        return redirect("/");
    }

    public function userValidCheck(Request $request)
    {
        $userinfo = $request->header("userinfo");
        $pwd = $request->header("pwd");
        $password = base64_encode($pwd);
        $sql = "SELECT * FROM users_apply_userinfo ";
        $sql .= "WHERE (uname='".$userinfo."' OR uemail='".$userinfo."' OR umobile='".$userinfo."') ";
        $sql .= "AND password = '".$password."'";
        $row = DB::select( DB::raw($sql) );

        if(count($row) > 0)
        {
            return \Response::json([
                'msg' => 'ok'
            ]);
        }
        else{
            return \Response::json([
                'msg' => 'error'
            ]);
        }
        exit();
    }

    public function getCompanyUserCondition(Request $request) {
        $rows = DB::table('usersorgaccount')->get()->first();
        $setpwd = '';

        $security_rows = DB::table('systemsusersecurity')->orderByDesc('id')->get()->first();
        if($security_rows != null && $security_rows != '') {
            if($security_rows->password != null && $security_rows->password != '') {
                $pwds = json_decode($security_rows->password);
                foreach ($pwds as $pwd) {
                    if ($pwd->check == 1) {
                        $setpwd = $pwd;
                        break;
                    }
                }
            }
            if($security_rows->mobile != null && $security_rows->mobile != '') {
                $mobiles = json_decode($security_rows->mobile);
                foreach ($mobiles as $k => $v) {
                    $setmobile[] = array(
                        'name' => isset($v->name) ? $v->name : "",
                        'characters' => isset($v->characters) ? $v->characters : "",
                        'countrycode' => isset($v->countrycode) ? $v->countrycode : "",
                        'dialcode' => isset($v->dialcode) ? $v->dialcode : "",
                        'check' => isset($v->check) ? $v->check : "",
                    );
                }
            }
            if($security_rows->email != null && $security_rows->email != '') {
                $emails = json_decode($security_rows->email);
                foreach ($emails as $k => $v) {
                    $setemail[] = array(
                        'name' => $v->name,
                        "fsize" => $v->fsize,
                        "fheight" => $v->fheight,
                        "characters" => $v->characters,
                        'check' => $v->check,
                    );
                }
            }
        }

        if ($rows === null || $rows === "") {
            return \Response::json([
                "msg" => "err",
                "message" => "db does not exist"
            ]);
        } else {
            $general_data = $rows->general;
            $lists = json_decode($general_data);

            return \Response::json([
                "msg" => "ok",
                "list" => $lists,
                "setpwd" => $setpwd,
                "setmobile" => $setmobile,
                "setemail" => $setemail
            ]);
        }

        exit();

    }

    public function companyDashboard(Request $request)
    {
        $userid = $request->get('userLink');
        $user_id = substr($userid, 32);
        $id = base64_decode ($user_id);
        $urow = DB::table('users_apply_userinfo')->where('id', $id)->get()->first();
        if($userid == null || $userid == '')
        {
            $email = $request->email;
            $pwd = base64_encode($request->pwd);
            $sql = "SELECT * FROM users_apply_userinfo ";
            $sql .= "WHERE (uname='".$email."' OR uemail='".$email."' OR umobile='".$email."') ";
            $sql .= "AND password = '".$pwd."'";
            $rows = DB::select( DB::raw($sql) );
            if($rows != null && $rows != ''){
                $urow = $rows[0];
                $user_id = base64_encode($urow->id);
            }
        }
        $pagecontents = array();
        if($urow === null)
        {
            return;
            exit(1);
        }
        $userinfo['uid'] = $user_id;
        $userinfo['uname'] = base64_encode($urow->contactname);
        $userinfo['name'] = base64_encode($urow->uname);
        $userinfo['password'] = $urow->password;
        $userinfo['uemail'] = base64_encode($urow->uemail);
        $userinfo['umobile'] = base64_encode($urow->umobile);
        $userinfo['country_code'] = $urow->country_code;
        $userinfo['country_name'] = $urow->country_name;
        $userinfo['photo'] = $urow->photo;
        $userinfo['background'] = $urow->background;
        $userinfo['created_at'] = $urow->created_at;
        $useraccount = json_encode($userinfo);
        $status = $urow->uactive;
        if($status != 0 && $userid != null){
            return redirect('/company.login');
        }

        $serverlocale = App::getLocale();
        $rows = DB::table('weslangs')->where('status','enable')->get();
        $langlist = $rows;

        /*logfile info*/
        $rowflw=null;//ckd
        $rowflw = DB::table('sitelogoinfo')
            ->where('site_logtype','flw')->get()->first();

        $logflw_name = "logo_flw.png";
        $logflw_size = "74*22";
        $logflw_style = "flower";

        if($rowflw!= null)
        {
            $logflw_name = $rowflw->site_logname;
            $logflw_size = $rowflw->site_logsize;
            $logflw_style = $rowflw->site_logstyle;
        }

        $rowstar=null;//ckd
        $rowstar = DB::table('sitelogoinfo')
            ->where('site_logtype','star')->get()->first();

        $logstar_name = "logo_star.png";
        $logstar_size = "36*32";
        $logstar_style = "style(star)";

        if($rowstar!= null)
        {
            $logstar_name = $rowstar->site_logname;
            $logstar_size = $rowstar->site_logsize;
            $logstar_style = $rowstar->site_logstyle;
        }

        $logoinfo['logflw_name']=$logflw_name;
        $logoinfo['logflw_size']=$logflw_size;
        $logoinfo['logflw_style']=$logflw_style;
        $logoinfo['logstar_name']=$logstar_name;
        $logoinfo['logstar_size']=$logstar_size;
        $logoinfo['logstar_style']=$logstar_style;

        $logoinfo = json_encode($logoinfo);
        /*========================================*/

        $favorites = null;
        $style_path = "/css/wes.css";
        $title = 'CompanyDashboard';

        if($this->userCompanyDomainPage())
            return view('company.userdashboard',compact('langlist', 'serverlocale', 'logoinfo', 'favorites', 'style_path', 'title', 'useraccount', 'status'));

        return view('company.dashboard',compact('langlist', 'serverlocale', 'logoinfo', 'favorites', 'style_path', 'title', 'useraccount', 'status'));
    }
    private function userCompanyDomainPage(){
        $host = $this->getHost();
        //$host = str_replace('www.', '', $host);

        $row = DB::table('webwesglobal_appea')
            ->select(DB::raw('trans, configgenereal'))
            ->get()->first();
        $company_domain = '';
        if($row !== null)
        {
            if($row->configgenereal !== null && $row->configgenereal !== ''){
                $general = json_decode($row->configgenereal);
                if (isset($general->companydomain)){
                    $company_domain = $general->companydomain;
                }
            }
        }

        $contactname = str_replace('.'.$company_domain, '', $host);
        $row = DB::table('users_apply_userinfo')
            ->where('contactname', $contactname)
            ->get();
        if(count($row)){
            return true;
        }

        return false;
    }
    public function getSystemSettingPassword(Request $request) {
        $row_pwd = DB::table('systemsusersecurity')->select(['password'])->get()->first();
        $setpwd = '';
        if($row_pwd != null && $row_pwd != '') {
            $pwds = json_decode($row_pwd->password);
            foreach ($pwds as $pwd) {
                if ($pwd->check == 1) {
                    $setpwd = $pwd;
                    break;
                }
            }
            return \Response::json([
                "msg" => "ok",
                "setpwd" => $setpwd
            ]);
        }

        exit();
    }

    public function setCompanyUserPassword(Request $request) {
        $userid = $request->post('userid');
        $username = $request->post('username');
        $password = base64_encode($request->post('password'));

        $sql = "SELECT * FROM users_apply_userinfo ";
        $sql .= "WHERE id <> ".$userid." ";
        $sql .= "AND contactname = '".$username."'";
        $row = DB::select( DB::raw($sql) );

        if($row != null && $row != ''){
            return \Response::json([
                "msg" => "dup"
            ]);
        }
        $success = DB::table('users_apply_userinfo')
            ->where('id', $userid)
            ->update([
                'contactname' => $username,
                'password' => $password,
                'uactive' => 1
            ]);

        $row = DB::table('webwesglobal_appea')
            ->select(DB::raw('trans, configgenereal'))
            ->get()->first();

        $root_path = $_SERVER["DOCUMENT_ROOT"];
        $root_path = str_replace('public', '', $root_path);
        $root_path = $root_path.'app/Http/Controllers';
        include_once($root_path."/ApacheDomainName.php");

        $company_domain = '';
        if($row !== null)
        {
            if($row->configgenereal !== null && $row->configgenereal !== ''){
                $general = json_decode($row->configgenereal);
                if (isset($general->companydomain)){
                    $company_domain = $general->companydomain;
                }
            }
        }
        if($company_domain != ''){
            $rows = DB::table('users_apply_userinfo')
                ->select(DB::raw('contactname'))
                ->orderBy('id','asc')
                ->get();
            $domain_names = array();
            foreach ($rows as $row){
                if($row->contactname != null && $row->contactname != ''){
                    $user_domain = $row->contactname.'.'.$company_domain;
                    array_push($domain_names, $user_domain);
                }
            }
            SetCompanyUserDomainNameCommand($domain_names);
        }

        if ($success) {
            return \Response::json([
                "msg" => "ok"
            ]);
        }

        exit();

    }

    public function saveUserAccountInfo(Request $request) {
        $userid = $request->post('userid');
        $username = $request->post('username');
        $email = $request->post('email');
        $mobile = $request->post('mobile');
        $password = base64_encode($request->post('password'));

        $sql = "SELECT * FROM users_apply_userinfo ";
        $sql .= "WHERE id <> ".$userid." ";
        $sql .= "AND contactname = '".$username."'";
        $row = DB::select( DB::raw($sql) );

        if($row != null && $row != ''){
            return \Response::json([
                "msg" => "dup"
            ]);
        }
        $success = DB::table('users_apply_userinfo')
            ->where('id', $userid)
            ->update([
                'contactname' => $username,
                'uemail' => $email,
                'umobile' => $mobile,
                'password' => $password,
                'uactive' => 1
            ]);

        $row = DB::table('webwesglobal_appea')
            ->select(DB::raw('trans, configgenereal'))
            ->get()->first();

        $root_path = $_SERVER["DOCUMENT_ROOT"];
        $root_path = str_replace('public', '', $root_path);
        $root_path = $root_path.'app/Http/Controllers';
        include_once($root_path."/ApacheDomainName.php");

        $company_domain = '';
        if($row !== null)
        {
            if($row->configgenereal !== null && $row->configgenereal !== ''){
                $general = json_decode($row->configgenereal);
                if (isset($general->companydomain)){
                    $company_domain = $general->companydomain;
                }
            }
        }
        if($company_domain != ''){
            $rows = DB::table('users_apply_userinfo')
                ->select(DB::raw('contactname'))
                ->orderBy('id','asc')
                ->get();
            $domain_names = array();
            foreach ($rows as $row){
                if($row->contactname != null && $row->contactname != ''){
                    $user_domain = $row->contactname.'.'.$company_domain;
                    array_push($domain_names, $user_domain);
                }
            }
            SetCompanyUserDomainNameCommand($domain_names);
        }

        if ($success) {
            return \Response::json([
                "msg" => "ok"
            ]);
        }

        exit();
    }

    public function checkProfileNameEmailPhone(Request $request) {
        $userid = $request->post('company-user-profile-id');
        $username = $request->post('company-user-profile-username');
        $email = $request->post('company-user-profile-email');
        $mobile = $request->post('company-user-profile-tel');

        $p_width = $request->post('p_width');
        $p_height = $request->post('p_height');
        $b_width = $request->post('b_width');
        $b_height = $request->post('b_height');

        $profileImg = $request->file('company-user-profile-photo-edit');
        if($profileImg != null && $profileImg != '') {
            $profileImg_data = getimagesize($_FILES['company-user-profile-photo-edit']['tmp_name']);
            $pwidth = $profileImg_data[0];
            $pheight = $profileImg_data[1];
            if($p_width < $pwidth || $p_height < $pheight){
                return \Response::json([
                    'msg' => 'psize'
                ]);
            }
        }
        $profileBackgroundImg = $request->file('company-user-profile-background-edit');
        if($profileBackgroundImg != null && $profileBackgroundImg != '') {
            $profileBackgroundImg_data = getimagesize($_FILES['company-user-profile-background-edit']['tmp_name']);
            $bwidth = $profileBackgroundImg_data[0];
            $bheight = $profileBackgroundImg_data[1];
            if($b_width < $bwidth || $b_height < $bheight){
                return \Response::json([
                    'msg' => 'bsize'
                ]);
            }
        }

        $row1 = DB::table('users_apply_userinfo')
            ->whereRaw('id <> '.$userid)
            ->where('contactname', $username)->get()->first();
        $dup1 = 0;
        if ($row1 !== null && $row1 !== "") {
            $dup1 = 1;
        }
        $row2 = DB::table('users_apply_userinfo')
            ->whereRaw('id <> '.$userid)
            ->where('uemail', $email)->get()->first();
        $dup2 = 0;
        if ($row2 !== null && $row2 !== "") {
            $dup2 = 1;
        }
        $row3 = DB::table('users_apply_userinfo')
            ->whereRaw('id <> '.$userid)
            ->where('umobile', $mobile)->get()->first();
        $dup3 = 0;
        if ($row3 !== null && $row3 !== "") {
            $dup3 = 1;
        }

        if ($dup1 !== 0 || $dup2 !== 0 || $dup3 !== 0){
            return \Response::json([
                "msg" => "dup",
                "dup1" => $dup1,
                "dup2" => $dup2,
                "dup3" => $dup3,
            ]);
        }
        else{
            return \Response::json([
                "msg" => "ok"
            ]);
        }

        exit();

    }

    public function updateCompanyUserinfo(Request $request) {
        $userid = $request->post('company-user-profile-id');
        $newusername = $request->post('company-user-profile-username');
        $newname = $request->post('company-user-profile-name');
        $newemail = $request->post('company-user-profile-email');
        $newmobile = $request->post('company-user-profile-tel');
        $newcountrycode = $request->post('company-user-profile-tel-data');
        $newcountrykey = $request->post('company-user-profile-country-data');
        $newcountryname = $request->post('company-user-profile-country-name');
        $cname = explode("(", $newcountryname);
        $newcountryname = trim($cname[0]);
        $profileImg = $request->file('company-user-profile-photo-edit');
        $profileBackgroundImg = $request->file('company-user-profile-background-edit');

        $photofilename = "";
        $photoBackgroundFilename = "";

        try {
            if ($request->exists("company-user-profile-photo-edit")) {
                if (file_exists($_FILES['company-user-profile-photo-edit']['tmp_name'])) {
                    $photoImgPath = 'uploads/images/';
                    $photofilename = time().'-'.$profileImg->getClientOriginalName();
                    $profileImg->move(public_path().'/'.$photoImgPath, $photofilename);
                } else {
                    $photofilename = "";
                }
            }

            if ($request->exists("company-user-profile-background-edit")) {
                if (file_exists($_FILES['company-user-profile-background-edit']['tmp_name'])) {
                    $photoBackgroundImgPath = 'uploads/images';
                    $photoBackgroundFilename = time().'-'.$profileBackgroundImg->getClientOriginalName();
                    $profileBackgroundImg->move(public_path().'/'.$photoBackgroundImgPath, $photoBackgroundFilename);
                } else {
                    $photoBackgroundFilename = "";
                }
            }

            $success = DB::table('users_apply_userinfo')
                ->where('id', $userid)
                ->update([
                    'uname' => $newusername,
                    'contactname' => $newname,
                    'uemail' => $newemail,
                    'umobile' => $newmobile,
                    'country_code' => $newcountrycode,
                    'country_name' => $newcountryname,
                    'country_key' => $newcountrykey,
                    'photo' => $photofilename,
                    'background' => $photoBackgroundFilename
                ]);

            return \Response::json([
                'msg' => 'ok'
            ]);
        }
        catch (\Exception $e)
        {
            return \Response::json([
                'msg' => $e
            ]);
        }
    }

    public function updateCompanyUserPassword(Request $request) {
        $userid = $request->post('id');
        $oldpwd = base64_encode($request->post('oldpwd'));
        $newpwd = base64_encode($request->post('newpwd'));

        $success = DB::table('users_apply_userinfo')
            ->where('id', $userid)
            ->where('password', $oldpwd)
            ->update([
                'password' => $newpwd
            ]);

        return \Response::json([
            'msg' => 'ok'
        ]);
    }

}

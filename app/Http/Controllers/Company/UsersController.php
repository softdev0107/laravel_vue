<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class UsersController extends BaseController
{
    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    public function index()
    {
        return redirect("/");
    }

    private function companyUserList($pstart, $pcnt, $search_item, $search_cont, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $field = 'uname';
        $sql = "SELECT * FROM ".'users_company'." ";
        $sql .= "WHERE ustate > 0 ";
        if($search_item == 0)
            $field = 'uname';
        else if($search_item == 1)
            $field = 'uemail';
        else if($search_item == 2)
            $field = 'umobile';
        if($search_cont != '' && $search_cont != null) {
            $sql .= "AND ".$field." like '%".$search_cont."%' ";
        }

        $sql .= "ORDER BY id DESC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::select( DB::raw($sql) );
        return $rows;
    }

    public function getCompanyUserList(Request $request){
        $pstart  = intval($request->post('pstart'));
        $pcnt    = intval($request->post('pcnt'));
        $search_item = $request->post('search_item');
        $search_cont = $request->post('search_cont');

        $rows = $this->companyUserList($pstart, $pcnt, $search_item, $search_cont, 0);
        $total = count($this->companyUserList($pstart, $pcnt, $search_item, $search_cont, 1));
        $totalpage = 0;
        if($total != 0)
            $totalpage = ceil($total / $pcnt);

        $host = $_SERVER['HTTP_ORIGIN'];

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart,
            'host' => $host
        ]);
    }

    public function searchApplyUserInfo(Request $request){
        $search_item = $request->post('search_item');
        $search_cont = $request->post('search_cont');

        $field = 'uname';
        $sql = "SELECT * FROM ".'users_company'." ";
        $sql .= "WHERE ustate > 0 ";
        if($search_item == 0)
            $field = 'uname';
        else if($search_item == 1)
            $field = 'uemail';
        else if($search_item == 2)
            $field = 'umobile';

        $row = DB::table('users_apply_userinfo')->where($field, $search_cont)->get()->first();

        return \Response::json([
            'msg'  =>  'ok',
            'userinfo' => $row
        ]);
    }

    public function getPasswordCondition(Request $request) {
        $row_pwd = DB::table('users_profilesetting')->select(['password'])->get()->first();
        $row_not = DB::table('users_profilesetting')->select(['notice'])->get()->first();
        $setpwd = '';
        if($row_pwd != null && $row_pwd != '') {
            $pwds = json_decode($row_pwd->password);
            foreach ($pwds as $pwd) {
                if ($pwd->check == 1) {
                    $setpwd = $pwd;
                    break;
                }
            }
        }
        return \Response::json([
            "msg" => "ok",
            "setpwd" => $setpwd,
            "notice" => $row_not->notice
        ]);

        exit();
    }

    public function setRegisterUser(Request $request, $lang=null) {
        $username = $request->post('username');
        $password = $request->post('password');
        $email = $request->post('email');
        $mobile = $request->post('mobile');
        $ccode = $request->post('ccode');
        $cname = $request->post('cname');

        $row = DB::table('users_company')->where('uname', $username)->get();
        if(count($row) > 0){
            return \Response::json([
                "status" => "dup"
            ]);
        }
        else {
            $success = DB::table("users_company")->insertGetId([
                'uname' => $username,
                'password' => $password,
                'uemail' => $email,
                'umobile' => $mobile,
                'country_code' => $ccode,
                'country_name' => $cname,
                'ustate' => 1,
                'uactive' => 1
            ]);
            if ($success > 0) {
                return \Response::json([
                    "status" => "ok"
                ]);
            }
        }
        exit();
    }

    public function setAddUser(Request $request, $lang=null) {
        $username = $request->post('username');
        $password = $request->post('password');

        $row = DB::table('users_company')
            ->where('uname', $username)
            ->where('password', $password)
            ->get()->first();
        if($row != null && $row != ''){
            $success = DB::table('users_company')
                ->where('uname', $username)
                ->update([
                    'ustate' => 2
                ]);

            if ($success > 0) {
                return \Response::json([
                    "status" => "ok"
                ]);
            }
        }
        exit();
    }

}

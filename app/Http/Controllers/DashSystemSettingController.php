<?php

namespace App\Http\Controllers;

use App\Models\UserModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class DashSystemSettingController extends BaseController
{
    /**
     * @var array|string|null
     */

    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    //---------------     system Setting Basic part    --------------------------
    //ok
    public function getSystemSettingBasic(Request $request){
        $userid = $request->post('userid');
        $domain = '';
        $dashboard = '';
        $slogan = '';
        $row = DB::table('site_basic_setting')
            ->get()->first();

        if($row!==null){
            $domain = $row->domain;
            $dashboard = $row->dashboard;
            $slogan = $row->slogan;
        }
        return \Response::json([
            "msg" => "ok",
            "domain" => $domain,
            "dashboard" => $dashboard,
            "slogan" => $slogan
        ]);
        exit();
    }
    //ok
    public function setSystemSettingBasic(Request $request){
        $userid = $request->post('userid');
        $domain = $request->post('domain');
        $dashboard = $request->post('dashboard');
        $slogan = $request->post('slogan');

     /*
     if ( isset( $_SERVER ) ) {
            $agent = $_SERVER['HTTP_USER_AGENT'];
        }
        else {
            global $HTTP_SERVER_VARS;
            if ( isset( $HTTP_SERVER_VARS ) ) {
                $agent = $HTTP_SERVER_VARS['HTTP_USER_AGENT'];
            }
            else {
                global $HTTP_USER_AGENT;
                $agent = $HTTP_USER_AGENT;
            }
        }
     */
        $c_os='NOWIN';
        if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
            $c_os = 'WIN';
        }

        if($c_os==='WIN'){
            DB::table('site_basic_setting')
                ->update(
                    [
                        'domain' => $domain,
                        'dashboard' => $dashboard,
                        'slogan' => $slogan
                    ]
                );

            return \Response::json([
                "msg" => "ok"
            ]);
        }
        else
        {
            include_once("ApacheDomainName.php");

            $row = DB::table('webwesglobal_appea')
                ->select(DB::raw('trans, configgenereal'))
                ->where('g_path', $this->g_path)
                ->get()->first();
            $front_domain = '';
            if($row !== null)
            {
                if($row->configgenereal !== null && $row->configgenereal !== ''){
                    $general = json_decode($row->configgenereal);
                    if (isset($general->domain)){
                        $front_domain = $general->domain;
                    }
                }
            }
            if($domain == $front_domain){
                return \Response::json([
                    'msg'  =>  'err_domain'
                ]);
            }
            $ip_server = $_SERVER['SERVER_ADDR'];
            $dret = SetDashDomainNameCommand($domain, $ip_server);
            if($dret > 0)
            {
                DB::table('site_basic_setting')
                    ->update(
                        [
                            'domain' => $domain,
                            'dashboard' => $dashboard,
                            'slogan' => $slogan
                        ]
                    );

                return \Response::json([
                    "msg" => "ok"
                ]);
            }
            else
            {
                return \Response::json([
                    "msg" => "err"
                ]);
            }
        }

        exit();
    }

    /*permission role part*/

    private function getDepartmentPageList($userid, $pstart, $pcnt){
        $pfrom = (intval($pstart) - 1) * $pcnt;
        $querystr = "SELECT id as fid, userid, name as fname, d_id as did, permissions as permissions, ";
        $querystr .= "(SELECT name FROM systemusermanagedepartment WHERE id=did) AS d_name, ";
        $querystr .= "(SELECT count(id) FROM systemusermanageposition WHERE d_id=fid) AS position, ";
        $querystr .= "(SELECT count(id) FROM userinfo WHERE department=fid) AS number ";
        $querystr .= "FROM systemusermanagedepartment ";
        $querystr .= "where userid = ".$userid." ";
        $querystr .= "order by id asc ";
        $querystr .= "limit ".$pcnt." offset ".$pfrom;
        $rows = DB::select( DB::raw($querystr) );
        return $rows;
    }

    private function getAllListCount($tablename, $userid){
        $rows = DB::table($tablename)
            ->where('userid', $userid)
            ->get();
        return count($rows);
    }

    public function getSUPRAllMenuList(Request $request){
        $rows = $this->menu_array;
        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
        ]);
        exit();
    }

    public function saveSUPRolePermissionData(Request $request){
        $id = $request->post('id');
        $roletype = $request->post('roletype');
        $permissions = $request->post('permissions');
        //$permissions = json_encode($permissions);

        $tablename = '';
        if ($roletype == 0){
            $tablename = 'systemusermanagedepartment';
        }
        elseif ($roletype == 1) {
            $tablename = 'systemusermanageposition';
        }
        elseif ($roletype == 2) {
            $tablename = 'systemusermanagegroup';
        }
        if ($tablename == '') {
            return \Response::json([
                "msg" => "err"
            ]);
            exit();
        }

        $cnt = DB::table($tablename)->where('id', $id)->doesntExist();
        if(!$cnt){
            $sucess =  DB::table($tablename)
                ->updateOrInsert(
                    ['id' => $id],
                    [
                        'permissions' => $permissions,
                    ]
                );
        }
        if ($sucess) {
            return \Response::json([
                "msg" => "ok",
            ]);
            exit();
        }
        else {
            return \Response::json([
                "msg" => "err",
            ]);
            exit();
        }
    }


    public function getSUPRolesDepartmentList(Request $request){
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $rows = $this->getDepartmentPageList($userid, $pstart, $pcnt);
        $total = $this->getAllListCount('systemusermanagedepartment', $userid);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);
        exit();
    }

    public function getSUPRolePermissionData(Request $request){
        $id = $request->post('id');
        $roletype = $request->post('roletype');

        $tablename = '';
        if ($roletype == 0){
            $tablename = 'systemusermanagedepartment';
        }
        elseif ($roletype == 1) {
            $tablename = 'systemusermanageposition';
        }
        elseif ($roletype == 2) {
            $tablename = 'systemusermanagegroup';
        }
        if ($tablename == '') {
            return \Response::json([
                "msg" => "err"
            ]);
            exit();
        }
        $row = DB::table($tablename)->where('id', $id)->get()->first();
        $permissions = $row->permissions;
        $name = $row->name;

        return \Response::json([
            "msg" => "ok",
            "name" => $name,
            "lists" => $permissions
        ]);
        exit();
    }



    public function getSUPRolesPositionList(Request $request){
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $rows = $this->getPositionPageList($userid, $pstart, $pcnt);

        $total = $this->getAllListCount('systemusermanageposition', $userid);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);
        exit();
    }

    private function getPositionPageList($userid, $pstart, $pcnt){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $querystr = "SELECT id as fid, userid, name as fname, d_id as did, permissions as permissions, ";
        $querystr .= "(SELECT name FROM systemusermanagedepartment WHERE id=did) AS d_name, ";
        $querystr .= "(SELECT count(id) FROM userinfo WHERE position=fid) AS number ";
        $querystr .= "FROM systemusermanageposition ";
        $querystr .= "where userid = ".$userid." ";
        $querystr .= "order by id asc ";
        $querystr .= "limit ".$pcnt." offset ".$pfrom;

        //$rows = DB::connection($this->waaupdb)->select( DB::connection($this->waaupdb)->raw($querystr) );
        $rows = DB::select( DB::raw($querystr) );
        return $rows;
    }

    public function getSUPRolesGroupList(Request $request){
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $rows = $this->getGroupPageList($userid, $pstart, $pcnt);
        $department_numbers = array();
        $position_numbers = array();
        $group_numbers = array();
        foreach ($rows as $row){
            array_push($department_numbers, $this->getDepartmentNumber($row->fid));
            array_push($position_numbers, $this->getPositionNumber($row->fid));
            array_push($group_numbers, $this->getGroupUserNumber($row->fid));
        }
        $total = $this->getAllListCount('systemusermanagegroup', $userid);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            "d_numbers" => $department_numbers,
            "p_numbers" => $position_numbers,
            "g_numbers" => $group_numbers,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);
        exit();
    }


    private function getGroupPageList($userid, $pstart, $pcnt){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $sql = "SELECT id as fid, userid, name as fname, user_names, user_ids, permissions ";
        $sql .= "FROM systemusermanagegroup ";
        $sql .= "where userid = ".$userid." ";
        $sql .= "order by id asc ";
        $sql .= "limit ".$pcnt." offset ".$pfrom;
        $rows = DB::select( DB::raw($sql) );
        return $rows;
    }


    private function getDepartmentNumber($gid){
        $sql = "SELECT count(department) as number ";
        $sql .= "FROM userinfo ";
        $sql .= "where rgroup = ".$gid." ";
        $sql .= "GROUP BY department";
        $rows = DB::select( DB::raw($sql) );
        $number = "";
        if($rows != null)
            $number = $rows[0]->number;
        return $number;
    }

    private function getPositionNumber($gid){
        $sql = "SELECT count(position) as number ";
        $sql .= "FROM userinfo ";
        $sql .= "where rgroup = ".$gid." ";
        $sql .= "GROUP BY position";
        $rows = DB::select( DB::raw($sql) );
        $number = "";
        if($rows != null)
            $number = $rows[0]->number;
        return $number;
    }

    private function getGroupUserNumber($gid){
        $sql = "SELECT id, rgroup FROM userinfo WHERE rgroup IS NOT NULL AND rgroup != ''";
        $number = array();
        $rows = DB::select( DB::raw($sql) );
        if($rows != null) {
            foreach ($rows as $row) {
                $g_uids = json_decode($row->rgroup);
                foreach ($g_uids as $g_uid) {
                    if ($g_uid == $gid) {
                        array_push($number, $row->id);
                        break;
                    }
                }
            }
        }
        return count($number);
    }

    public function getSUPUUserInfoList(Request $request){
        $type = $request->post('type');
        $subtype = $request->post('subtype');
        $search = $request->post('search');
        $start  = $request->post('start');
        $cnt    = $request->post('cnt');
        $start_from = ($start-1) * $cnt;
        $field = "department";
        if($type == 2)
            $field = "position";
        $rows = null;
        if($subtype == 0){
            $sql = "SELECT id, name, department, position, permission, ";
            $sql .= "(SELECT name FROM systemusermanagedepartment WHERE id=department) AS d_name, ";
            $sql .= "(SELECT name FROM systemusermanageposition WHERE id=position) AS p_name ";
            $sql .= "FROM userinfo ";
            $sql .= "WHERE manager <> 4 ";
            if ($search != null && $search != "") {
                $sql .= "AND name like '%".$search."%' ";
            }
            $sql .= "order by name asc ";
            $totalrows = DB::select(DB::raw($sql));
            $limsql = $sql.'LIMIT '.$start_from.', '.$cnt.'';
            $rows = DB::select(DB::raw($limsql));
        }
        else {
            if ($search != null && $search != "") {
                $sql = "SELECT id, name, department, position, permission, ";
                $sql .= "(SELECT name FROM systemusermanagedepartment WHERE id=department) AS d_name, ";
                $sql .= "(SELECT name FROM systemusermanageposition WHERE id=position) AS p_name ";
                $sql .= "FROM userinfo  ";
                $sql .= "WHERE manager <> 4 ";
                $sql .= "AND name like '%".$search."%' ";
                $sql .= "order by name asc ";
                $totalrows = DB::select(DB::raw($sql));
                $limsql = $sql.'LIMIT '.$start_from.', '.$cnt.'';
                $rows = DB::select(DB::raw($limsql));
            } else {
                $sql = "SELECT id, name, department, position, permission, ";
                $sql .= "(SELECT name FROM systemusermanagedepartment WHERE id=department) AS d_name, ";
                $sql .= "(SELECT name FROM systemusermanageposition WHERE id=position) AS p_name ";
                $sql .= "FROM userinfo  ";
                $sql .= "WHERE manager <> 4 ";
                if ($type != 0) {
                    $sql .= "AND ".$field."=".$subtype." ";
                }
                $sql .= "order by name asc ";
                $totalrows = DB::select(DB::raw($sql));
                $limsql = $sql.'LIMIT '.$start_from.', '.$cnt.'';
                $rows = DB::select(DB::raw($limsql));
            }
        }
        $total = count($totalrows);
        $totalpage = ceil($total / $cnt);
        return \Response::json([
            'status'   =>  'ok',
            'total'    =>  $total,
            'start'    =>  $start,
            'totalpage'    =>  $totalpage,
            'userlist' =>  $rows
        ]);
        exit();
    }


    public function getSUPUserPermissionData(Request $request){
        $id = $request->post('id');
        $user_table = 'userinfo';
        $row = DB::table($user_table)->where('id', $id)->get()->first();
        $name = $row->username;
        $permissions = $row->permission;

        return \Response::json([
            "msg" => "ok",
            "lists" => $permissions,
            "name" => $name
        ]);
        exit();
    }


    public function getSUPUDialogUserInfoList(Request $request){
        $type = $request->post('type');
        $subtype = $request->post('subtype');
        $search = $request->post('search');
        $field = "department";
        if($type == 2)
            $field = "position";
        $rows = null;
        if($subtype == 0){
            $sql = "SELECT id, name, department, position,";
            $sql .= "(SELECT name FROM systemusermanagedepartment WHERE id=department) AS d_name, ";
            $sql .= "(SELECT name FROM systemusermanageposition WHERE id=position) AS p_name ";
            $sql .= "FROM userinfo ";
            if ($search != null && $search != "") {
                $sql .= "where name like '%".$search."%' ";
            }
            $sql .= "order by name asc ";
            $rows = DB::select(DB::raw($sql));
        }
        else {
            if ($search != null && $search != "") {
                $sql = "SELECT id, name, department, position,";
                $sql .= "(SELECT name FROM systemusermanagedepartment WHERE id=department) AS d_name, ";
                $sql .= "(SELECT name FROM systemusermanageposition WHERE id=position) AS p_name ";
                $sql .= "FROM userinfo ";
                $sql .= "where name like '%".$search."%' ";
                $sql .= "order by name asc ";
                $rows = DB::select(DB::raw($sql));
            } else {
                $sql = "SELECT id, name, department, position,";
                $sql .= "(SELECT name FROM systemusermanagedepartment WHERE id=department) AS d_name, ";
                $sql .= "(SELECT name FROM systemusermanageposition WHERE id=position) AS p_name ";
                $sql .= "FROM userinfo ";
                if ($type != 0) {
                    $sql .= "where ".$field."=".$subtype." ";
                }
                $sql .= "order by name asc ";
                $rows = DB::select(DB::raw($sql));
            }
        }

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows
        ]);
        exit();
    }

    public function getSUPUSubRoleType(Request $request){
        $userid = $request->post('userid');
        $type = $request->post('type');
        $table = "systemusermanagedepartment";
        if($type == 2)
            $table = "systemusermanageposition";

        $rows = DB::table($table)->where("userid", $userid)->orderBy('id')->get();
        if($rows == null)
            $rows = "";

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows
        ]);
        exit();
    }

    public function saveSUPUserPermissionData(Request $request){
        $id = $request->post('id');
        $permissions = $request->post('permissions');
        //$permissions = json_decode($permissions);
        $tablename = 'userinfo';
        $sucess = DB::table($tablename)
            ->where('id', $id)
            ->update(['permission' => $permissions]);
        if ($sucess) {
            return \Response::json([
                "msg" => "ok",
            ]);
            exit();
        }
        else {
            return \Response::json([
                "msg" => "err",
            ]);
            exit();
        }
    }


    public function deleteSeveralSUPUserPermissionData(Request $request){
        $ids = $request->post('ids');
        $permissions = $request->post('permissions');
        $updated_at = date("Y-m-d h:i:s", time());
        $tablename = 'userinfo';
        try {
            if(count($ids) > 0) {
                foreach ($ids as $id) {
                    $cnt = DB::table($tablename)->where('id', $id)->doesntExist();
                    if(!$cnt){
                        $sucess =  DB::table($tablename)
                            ->updateOrInsert(
                                ['id' => $id],
                                [
                                    'permission' => $permissions,
                                ]
                            );
                    }
                }
            }
            if ($sucess) {
                return \Response::json([
                    'msg'  =>  "ok"
                ]);
            }
            else {
                return \Response::json([
                    'msg'  =>  "err"
                ]);
            }

        } catch (Exception $e) {
            return \Response::json([
                'msg'  =>  "err"
            ]);
        }
    }
    public function deleteSeveralSUPRolePermissionData(Request $request){
        $ids = $request->post('ids');
        $roletype = $request->post('roletype');
        $permissions = $request->post('permissions');
        $updated_at = date("Y-m-d h:i:s", time());

        $tablename = '';
        if ($roletype == 0){
            $tablename = 'systemusermanagedepartment';
        }
        elseif ($roletype == 1) {
            $tablename = 'systemusermanageposition';
        }
        elseif ($roletype == 2) {
            $tablename = 'systemusermanagegroup';
        }
        if ($tablename == '') {
            return \Response::json([
                "msg" => "err"
            ]);
            exit();
        }
        try {
            if(count($ids) > 0) {
                foreach ($ids as $id) {
                    $cnt = DB::table($tablename)->where('id', $id)->doesntExist();
                    if(!$cnt){
                        $sucess =  DB::table($tablename)
                            ->updateOrInsert(
                                ['id' => $id],
                                [
                                    'permissions' => $permissions,
                                ]
                            );
                    }
                }
            }
            if ($sucess) {
                return \Response::json([
                    'msg'  =>  "ok"
                ]);
            }
            else {
                return \Response::json([
                    'msg'  =>  "err"
                ]);
            }

        } catch (Exception $e) {
            return \Response::json([
                'msg'  =>  "err"
            ]);
        }

    }

    public function getSystemSettingBasicLogin(Request $request){
        $row = DB::table('site_basic_setting')->get()->first();
        if($row != null){
            $pageinfo = '';
            if($row->login != null && $row->login != "")
                $pageinfo = $row->login;
            return \Response::json([
                "pageinfo" => $pageinfo
            ]);
        }
        else{
            return \Response::json([
                "pageinfo" => ''
            ]);
        }
    }

    public function setSystemSettingBasicLogin(Request $request){
        $background_img= trim($request->post('ssb_frontpage_back_pre'));
        $logo_img= trim($request->post('ssb_frontpage_logo_pre'));
        $tip_txt= trim($request->post('ssb_frontpage_login_tip_val'));
        $font_color= trim($request->post('ssb_frontpage_login_font_color_val'));
        $theme_color= trim($request->post('ssb_frontpage_login_theme_color_val'));
        $back_color= trim($request->post('ssb_frontpage_login_back_color_val'));
        $dbstr= array(
            'backimg' => $background_img,
            'logoimg' => $logo_img,
            'tiptxt' => $tip_txt,
            'fontcolor' => $font_color,
            'themecolor' => $theme_color,
            'backcolor' => $back_color
        );
        $strjson =json_encode($dbstr);

        $sucess = -1;
        $sucess = DB::table('site_basic_setting')
            ->update(['login' => $strjson]);
        if($sucess > -1)
        {
            return \Response::json([
                'msg'  =>  'ok'
            ]);
        }
        else{
            return \Response::json([
                'msg'  =>  'err'
            ]);
        }
        exit();
    }

    public function getSystemSettingBasicRegister(Request $request){
        $row = DB::table('site_basic_setting')->get()->first();
        if($row != null){
            $pageinfo = '';
            if($row->register != null && $row->register != "")
                $pageinfo = $row->register;
            return \Response::json([
                "pageinfo" => $pageinfo
            ]);
        }
        else{
            return \Response::json([
                "pageinfo" => ''
            ]);
        }
    }

    public function setSystemSettingBasicRegister(Request $request){
        $background_img= trim($request->post('ssb_frontpage_regback_pre'));
        $logo_img= trim($request->post('ssb_frontpage_reglogo_pre'));
        $tip_txt= trim($request->post('ssb_frontpage_register_tip_val'));
        $font_color= trim($request->post('ssb_frontpage_register_font_color_val'));
        $theme_color= trim($request->post('ssb_frontpage_register_theme_color_val'));
        $back_color= trim($request->post('ssb_frontpage_register_back_color_val'));
        $dbstr= array(
            'backimg' => $background_img,
            'logoimg' => $logo_img,
            'tiptxt' => $tip_txt,
            'fontcolor' => $font_color,
            'themecolor' => $theme_color,
            'backcolor' => $back_color
        );
        $strjson =json_encode($dbstr);

        $sucess = -1;
        $sucess = DB::table('site_basic_setting')
            ->update(['register' => $strjson]);
        if($sucess > -1)
        {
            return \Response::json([
                'msg'  =>  'ok'
            ]);
        }
        else{
            return \Response::json([
                'msg'  =>  'err'
            ]);
        }
        exit();
    }

}//class

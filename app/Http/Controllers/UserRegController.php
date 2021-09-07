<?php

namespace App\Http\Controllers;

use App\Models\UserModel;
use Google\Type\Date;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use JoggApp\GoogleTranslate\GoogleTranslateClient;

class UserRegController extends BaseController
{
    public function index(Request $request, $lang=null)
    {
        $ciso = $this->compareSavedLang($lang);

        $pagecontents = collect([]);
        $frontContens = $this->FrontPageContent($ciso);
        $pagecontents->put('frtxt', $frontContens);
        $pagecontents->put('curMU', 'users');
        $pagecontents->put('ciso', $ciso);
        $temp =  $this->getHeadersData($ciso);

        $items = $temp->all();
        foreach ($items as $key => $value) {
            $pagecontents->put($key, $value);
        }

        $temp2 =  $this->getFootData($ciso);
        $items2 = $temp2->all();
        foreach ($items2 as $key => $value) {
            $pagecontents->put($key, $value);
        }

        /*help part*/
        /*organ*/
        $row =null;
        $row = DB::table('wesglobalpageregister')
            ->whereRaw('trans like "'.$ciso.'%" and g_path="'.$this->g_path.'" and type="org" and is_register = 1 ')->get()->first();
        $rowt = DB::table('wesglobalpageregister')
            ->whereRaw('type="org" and g_path="'.$this->g_path.'" and is_register = 1 ')->get()->first();
        if($row===null)
        {
            $row = $rowt;
        }

        if($row!==null)
        {
            $pagecontents->put('orgHelper', $row->content);
        }
        else
        {
            $pagecontents->put('orgHelper', '');
        }
        /* individual */
        $row1 =null;
        $row1 = DB::table('wesglobalpageregister')
            ->whereRaw('trans like "'.$ciso.'%" and g_path="'.$this->g_path.'" and type="ind" and is_register = 1 ')->get()->first();
        $rowt1 = DB::table('wesglobalpageregister')
            ->whereRaw('type="ind" and g_path="'.$this->g_path.'" and is_register = 1 ')->get()->first();
        if($row1===null)
        {
            $row1 = $rowt1;
        }

        if($row1!==null)
        {
            $pagecontents->put('indHelper', $row1->content);
        }
        else
        {
            $pagecontents->put('indHelper', '');
        }

        $pagecontents->put('mobileCountry', $this->countryMobiles);

        return view('wes.wesGlobalRegUsers')->with($pagecontents->toArray());
    }

    public function getTranslateCountry(Request $request){
        $iso=$request->post('iso');
        $trans_str =  $request->post('trans_str');

        $giso='en';
        if($iso=='us')
            $giso='en';
        else if($iso=='kr')
            $giso='ko';
        else if($iso=='jp')
            $giso='ja';
        else if($iso=='cn')
            $giso='zh';
        else
            $giso=$iso;

        try{
            $config['default_target_translation']= $giso;
            $config['api_key']='AIzaSyDiZHLEFfLEkexBLxV-3C9Q3al1Klj_9oU';
            $translateClient = new GoogleTranslateClient($config);
        } catch(\Exception $e){
            $config['default_target_translation']='en';
            $config['api_key']='AIzaSyDiZHLEFfLEkexBLxV-3C9Q3al1Klj_9oU';
            $translateClient = new GoogleTranslateClient($config);
        }
        try {
            $transed = $translateClient->translate($trans_str, $giso);
            $text = $transed['text'];
        } catch (\Exception $e) {
            $str_cont = $trans_str;
            $google_enable=false;
        }

        return \Response::json([
            'msg'   =>  'ok',
            'location' =>  $text
        ]);

        exit();
    }

    public function wesRegisterUser(Request $request){
        $u_person = $request->post('u_person');
        $u_email = $request->post('u_email');
        $country_code = $request->post('country_code');
        $country_name = $request->post('country_name');
        $u_mobile = $request->post('u_mobile');
        $u_name = $request->post('u_name');
        $license_num = $request->post('license_num');

        $license_img = $request->file('license_img');
        $filename='';
        $destinationPath = 'uploads/images/users/';
        if(!file_exists($_FILES['license_img']['tmp_name'])){

        }
        else{
            if($license_img != null) {
                $filename = time().'-'.$license_img->getClientOriginalName();
                if ( !is_dir( public_path().'/'.$destinationPath ) ) {
                    mkdir( public_path().'/'.$destinationPath ,0777, true);
                    shell_exec('sudo chmod -R 777 '.$_SERVER["DOCUMENT_ROOT"].public_path().'/'.$destinationPath);
                }
                $license_img->move(public_path().'/'.$destinationPath, $filename);
                $filename = '/'.$destinationPath.$filename;
            }
        }
        $row =null;
        $sql = "SELECT * FROM users_apply_userinfo ";
        $sql .= "WHERE ((country_code = '".$country_code."' ";
        $sql .= "AND umobile = '".$u_mobile."') ";
        $sql .= "OR uemail = '".$u_email."' OR license_number = '".$license_num."') ";
        $sql .= "AND ustate <> 3";
        $row = DB::select( DB::raw($sql) );

        if($row!==null && count($row) > 0){
            return \Response::json([
                'msg'  =>  'overlap'
            ]);
        }
        else {
            $sucess =  DB::table('users_apply_userinfo')->insertGetId(
                [
                    'uname' => $u_person,
                    'uemail' => $u_email,
                    'umobile' => $u_mobile,
                    'country_code' => $country_code,
                    'country_name' => $country_name,
                    'organization' => $u_name,
                    'license_number' => $license_num,
                    'license_img' => $filename,
                    'ustate' => 1
                ]
            );
        }
        if ($sucess) {
            return \Response::json([
                'msg'  =>  'ok',
            ]);
        }

        exit();
    }

    private function applyUserList($local, $pstart, $pcnt, $s_date, $e_date, $state, $search_item, $search_cont, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $field = 'uname';
        $sql = "SELECT * FROM ".'users_apply_userinfo'." ";
        $sql .= "WHERE ustate <> 2 ";
        if($local == 'g')
            $sql .= "AND country_code <> '86' ";
        else
            $sql .= "AND country_code = '86' ";

        if($search_item == 0)
            $field = 'uname';
        else if($search_item == 1)
            $field = 'uemail';
        else if($search_item == 2)
            $field = 'umobile';
        else if($search_item == 3)
            $field = 'country_name';
        else if($search_item == 4)
            $field = 'organization';
        if($search_cont != '' && $search_cont != null) {
            $sql .= "AND ".$field." like '%".$search_cont."%' ";
        }
        if($state > 0){
            $sql .= "AND ustate =".$state." ";
        }
        if($s_date != null && $s_date != ""){
            if($e_date == null || $e_date == ""){
                $e_date = @date("Y/m/d");
            }
            $sql .= "AND ( created_at >= '".$s_date."' AND created_at <= '".$e_date."' ) ";
        }

        $sql .= "ORDER BY id DESC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::select( DB::raw($sql) );

        $appli_lists = array();
        foreach ($rows as $row){
            $contents = collect([]);
            $contents->put('id', $row->id);
            $contents->put('uname', $row->uname);
            $contents->put('country_name', $row->country_name);
            $contents->put('organization', $row->organization);
            $contents->put('created_at', $row->created_at);
            $contents->put('ustate', $row->ustate);
            if($row->admin_id != null && $row->admin_id != 0 && $row->admin_id != ''){
                $admin_row = DB::table('userinfo')
                    ->select(DB::raw('name'))
                    ->get()->first();
                $contents->put('admin_user', $admin_row->name);
            }
            else
                $contents->put('admin_user', '');

            array_push($appli_lists, $contents);
        }
        return $appli_lists;
    }
    public function getApplyUserInfoList(Request $request){
        $pstart  = intval($request->post('pstart'));
        $pcnt    = intval($request->post('pcnt'));
        $s_date = $request->post('s_date');
        $e_date = $request->post('e_date');
        $state = $request->post('state');
        $search_item = $request->post('search_item');
        $search_cont = $request->post('search_cont');

        $rows = $this->applyUserList('g', $pstart, $pcnt, $s_date, $e_date, $state, $search_item, $search_cont, 0);
        $total = count($this->applyUserList('g', $pstart, $pcnt, $s_date, $e_date, $state, $search_item, $search_cont, 1));
        $totalpage = 0;
        if($total != 0)
            $totalpage = ceil($total / $pcnt);

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart
        ]);
    }
    public function getApplyChinaUserInfoList(Request $request){
        $pstart  = intval($request->post('pstart'));
        $pcnt    = intval($request->post('pcnt'));
        $s_date = $request->post('s_date');
        $e_date = $request->post('e_date');
        $state = $request->post('state');
        $search_item = $request->post('search_item');
        $search_cont = $request->post('search_cont');

        $rows = $this->applyUserList('c', $pstart, $pcnt, $s_date, $e_date, $state, $search_item, $search_cont, 0);
        $total = count($this->applyUserList('c', $pstart, $pcnt, $s_date, $e_date, $state, $search_item, $search_cont, 1));
        $totalpage = 0;
        if($total != 0)
            $totalpage = ceil($total / $pcnt);

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart
        ]);
    }
    public function getRemindUserList(Request $request){
        $pstart  = intval($request->post('pstart'));
        $pcnt    = intval($request->post('pcnt'));
        $pfrom = (intval($pstart) - 1) * $pcnt;
        $sql = "SELECT * FROM ".'users_apply_userinfo'." ";
        $sql .= "WHERE ustate <> 2 AND (admin_id = 0 OR admin_id IS NULL)";
        $sql .= "ORDER BY id DESC ";
        $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;
        $rows = DB::select( DB::raw($sql) );

        $sql = "SELECT * FROM ".'users_apply_userinfo'." ";
        $sql .= "WHERE ustate <> 2 AND (admin_id = 0 OR admin_id IS NULL)";
        $sql .= "ORDER BY id DESC ";
        $total = count(DB::select( DB::raw($sql)));
        $totalpage = 0;
        if($total != 0)
            $totalpage = ceil($total / $pcnt);

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart
        ]);
    }
    public function editApplyUsersInfo(Request $request){
        $id = $request->post('id');
        $userid = $request->post('userid');
        $pstart  = intval($request->post('pstart'));
        $rows = DB::table('users_apply_userinfo')->where('id', $id)->get()->first();
        DB::table('users_apply_userinfo')->where('id', $id)->update(['admin_id'=>$userid]);
        return \Response::json([
            'msg'  =>  'ok',
            'pstart' => $pstart,
            'lists' => $rows
        ]);
    }
    private function createApplicantUrl($id){
        $conv_id = md5($id).base64_encode($id);
        $url = $_SERVER['HTTP_HOST'].'/company.dashboard?userLink='.$conv_id;
        return $url;
    }
    public function saveApplyUsersInfo(Request $request){
        $id = $request->post('id');
        $state = $request->post('state');
        $remark = $request->post('remark');

        if($state < 2){
            return \Response::json([
                'msg' => 'error'
            ]);
        }
        $mail_url = '';
        $mail_status = 2;
        if($state == 2) {
            $mail_status = 1;
            $mail_url = $this->createApplicantUrl($id);
        }
        else if($state == 3)
            $mail_status = 2;

        $row = DB::table('users_apply_userinfo')->where('id', $id)->get()->first();
        if($row !== null && $row !== ''){
            if($row->uactive == 1){
                return \Response::json([
                    'msg' => 'act'
                ]);
            }
        }

        $sql = "SELECT title, keyword, content FROM users_emailmanage ";
        $sql .= "WHERE mail_status= ".$mail_status." AND state= 1 ";
        $sql .= "ORDER BY id DESC ";
        $rows = DB::select( DB::raw($sql) );
        $mailcont = '';
        $title = '';
        if($rows != null && count($rows) > 0 && $rows != '') {
            $mailcont = str_replace('[['.$rows[0]->keyword.']]', $remark, $rows[0]->content);
            $title = $rows[0]->title;
        }
        $mailcont .= $mail_url;

        DB::table('users_apply_userinfo')
            ->Where('id', $id)
            ->update([
                'ustate' => $state,
                'remark' => $remark
            ]);

        return \Response::json([
            'msg' => 'ok',
            'mailcont' => $mailcont,
            'title' => $title
        ]);
    }
    public function deleteApplyUsersInfo(Request $request){
        $id = $request->post('id');
        $pstart  = intval($request->post('pstart'));
        $pcnt    = intval($request->post('pcnt'));
        $s_date = $request->post('s_date');
        $e_date = $request->post('e_date');
        $state = $request->post('state');
        $search_item = $request->post('search_item');
        $search_cont = $request->post('search_cont');

        DB::table('users_apply_userinfo')->where('id', $id)->delete();

        $rows = $this->applyUserList('g', $pstart, $pcnt, $s_date, $e_date, $state, $search_item, $search_cont, 0);
        $total = count($this->applyUserList('g', $pstart, $pcnt, $s_date, $e_date, $state, $search_item, $search_cont, 1));
        $totalpage = 0;
        if($total != 0)
            $totalpage = ceil($total / $pcnt);

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart
        ]);
    }
    public function deleteApplyChinaUsersInfo(Request $request){
        $id = $request->post('id');
        $pstart  = intval($request->post('pstart'));
        $pcnt    = intval($request->post('pcnt'));
        $s_date = $request->post('s_date');
        $e_date = $request->post('e_date');
        $state = $request->post('state');
        $search_item = $request->post('search_item');
        $search_cont = $request->post('search_cont');

        DB::table('users_apply_userinfo')->where('id', $id)->delete();

        $rows = $this->applyUserList('c', $pstart, $pcnt, $s_date, $e_date, $state, $search_item, $search_cont, 0);
        $total = count($this->applyUserList('c', $pstart, $pcnt, $s_date, $e_date, $state, $search_item, $search_cont, 1));
        $totalpage = 0;
        if($total != 0)
            $totalpage = ceil($total / $pcnt);

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart
        ]);
    }

    private function oUserList($local, $pstart, $pcnt, $search_item, $search_cont, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $field = 'id';
        $sql = "SELECT * FROM users_apply_userinfo ";
        $sql .= "WHERE ustate = 2 ";
        if($local == 'g')
            $sql .= "AND country_code <> '86' ";
        else
            $sql .= "AND country_code = '86' ";

        if($search_item == 0)
            $field = 'id';
        else if($search_item == 1)
            $field = 'organization';
        else if($search_item == 2)
            $field = 'uname';
        else if($search_item == 3)
            $field = 'uemail';
        else if($search_item == 4)
            $field = 'umobile';
        if($search_cont != '' && $search_cont != null) {
            if($search_item == 0)
                $sql .= "AND ".$field."=".intval($search_cont)." ";
            else
                $sql .= "AND ".$field." like '%".$search_cont."%' ";
        }

        $sql .= "ORDER BY id ASC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::select( DB::raw($sql) );
        return $rows;
    }
    public function getOUserInfoList(Request $request){
        $pstart  = intval($request->post('pstart'));
        $pcnt    = intval($request->post('pcnt'));
        $search_item = $request->post('search_item');
        $search_cont = $request->post('search_cont');

        $rows = $this->oUserList('g', $pstart, $pcnt, $search_item, $search_cont, 0);
        $total = count($this->oUserList('g', $pstart, $pcnt, $search_item, $search_cont, 1));
        $totalpage = 0;
        if($total != 0)
            $totalpage = ceil($total / $pcnt);

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart
        ]);
    }
    public function getChinaOUserInfoList(Request $request){
        $pstart  = intval($request->post('pstart'));
        $pcnt    = intval($request->post('pcnt'));
        $search_item = $request->post('search_item');
        $search_cont = $request->post('search_cont');

        $rows = $this->oUserList('c', $pstart, $pcnt, $search_item, $search_cont, 0);
        $total = count($this->oUserList('c', $pstart, $pcnt, $search_item, $search_cont, 1));
        $totalpage = 0;
        if($total != 0)
            $totalpage = ceil($total / $pcnt);

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart
        ]);
    }
    public function deleteChinaOUserInfoList(Request $request){
        $edit_id  = intval($request->post('edit_id'));
        $pstart  = intval($request->post('pstart'));
        $pcnt    = intval($request->post('pcnt'));
        $search_item = $request->post('search_item');
        $search_cont = $request->post('search_cont');

        DB::table('users_apply_userinfo')->where("id", $edit_id)->delete();

        $rows = $this->oUserList('c', $pstart, $pcnt, $search_item, $search_cont, 0);
        $total = count($this->oUserList('c', $pstart, $pcnt, $search_item, $search_cont, 1));
        $totalpage = 0;
        if($total != 0)
            $totalpage = ceil($total / $pcnt);

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart
        ]);
    }
    public function changeChinaOUserInfoList(Request $request){
        $edit_id  = intval($request->post('edit_id'));
        $status  = intval($request->post('status'));
        $pstart  = intval($request->post('pstart'));
        $pcnt    = intval($request->post('pcnt'));
        $search_item = $request->post('search_item');
        $search_cont = $request->post('search_cont');

        DB::table('users_apply_userinfo')->where('id', $edit_id)->update(['status'=>$status]);

        $rows = $this->oUserList('c', $pstart, $pcnt, $search_item, $search_cont, 0);
        $total = count($this->oUserList('c', $pstart, $pcnt, $search_item, $search_cont, 1));
        $totalpage = 0;
        if($total != 0)
            $totalpage = ceil($total / $pcnt);

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart
        ]);
    }

    private function emailManageList($pstart, $pcnt, $mail_status, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $field = 'id';
        $sql = "SELECT * FROM users_emailmanage ";
        $sql .= "WHERE mail_status= ".$mail_status." ";
        $sql .= "ORDER BY id DESC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::select( DB::raw($sql) );
        return $rows;
    }
    public function getEmailManageApprovalList(Request $request){
        $pstart  = intval($request->post('pstart'));
        $pcnt    = intval($request->post('pcnt'));

        $rows = $this->emailManageList($pstart, $pcnt, 1, 0);
        $total = count($this->emailManageList($pstart, $pcnt, 1, 1));
        $totalpage = 0;
        if($total != 0)
            $totalpage = ceil($total / $pcnt);

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart
        ]);
    }
    public function setEmailManageApprovalState(Request $request){
        $pstart = intval($request->post('pstart'));
        $pcnt = intval($request->post('pcnt'));
        $edit_id = $request->post('id');

        DB::table('users_emailmanage')->where('mail_status', '1')->update(['state' => 0]);
        $sucess = DB::table('users_emailmanage')
            ->Where('id', $edit_id)
            ->update([
                'state' => 1
            ]);

        $rows = $this->emailManageList($pstart, $pcnt, 1, 0);
        $total = count($this->emailManageList($pstart, $pcnt, 1, 1));
        $totalpage = 0;
        if($total != 0)
            $totalpage = ceil($total / $pcnt);

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart
        ]);
    }
    public function editEmailManageApprovalList(Request $request){
        $pstart  = intval($request->post('pstart'));
        $pcnt    = intval($request->post('pcnt'));
        $title    = $request->post('emailmanage_edit_title');
        $editcont0    = $request->post('editcont0');
        $edit_id    = $request->post('edit_id');

        $sucess = DB::table('users_emailmanage')
            ->Where('id', $edit_id)
            ->update([
                'title' => $title,
                'content' => $editcont0
            ]);

        $rows = $this->emailManageList($pstart, $pcnt, 1, 0);
        $total = count($this->emailManageList($pstart, $pcnt, 1, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart
        ]);
    }
    public function saveEmailManageApprovalList(Request $request){
        $pstart  = intval($request->post('pstart'));
        $pcnt    = intval($request->post('pcnt'));
        $title    = $request->post('emailmanage_edit_title');
        $editcont0    = $request->post('editcont0');

        $sucess =  DB::table('users_emailmanage')->insertGetId(
            [
                'title' => $title,
                'content' => $editcont0,
                'state' => 0,
                'mail_status' => 1
            ]
        );

        $rows = $this->emailManageList($pstart, $pcnt, 1, 0);
        $total = count($this->emailManageList($pstart, $pcnt, 1, 1));
        $totalpage = 0;
        if($total != 0)
            $totalpage = ceil($total / $pcnt);

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart
        ]);
    }
    public function deleteEmailManageApprovalList(Request $request){
        $pstart = intval($request->post('pstart'));
        $pcnt = intval($request->post('pcnt'));
        $del_id = $request->post('del_id');

        $sucess = DB::table('users_emailmanage')->where('id', $del_id)->delete();

        $rows = $this->emailManageList($pstart, $pcnt, 1, 0);
        $total = count($this->emailManageList($pstart, $pcnt, 1, 1));
        $totalpage = 0;
        if($total != 0)
            $totalpage = ceil($total / $pcnt);

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart
        ]);
    }

    public function getEmailManageFailedList(Request $request){
        $pstart  = intval($request->post('pstart'));
        $pcnt    = intval($request->post('pcnt'));

        $rows = $this->emailManageList($pstart, $pcnt, 2, 0);
        $total = count($this->emailManageList($pstart, $pcnt, 2, 1));
        $totalpage = 0;
        if($total != 0)
            $totalpage = ceil($total / $pcnt);

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart
        ]);
    }
    public function setEmailManageFailedState(Request $request){
        $pstart = intval($request->post('pstart'));
        $pcnt = intval($request->post('pcnt'));
        $edit_id = $request->post('id');

        DB::table('users_emailmanage')->where('mail_status', '2')->update(['state' => 0]);
        $sucess = DB::table('users_emailmanage')
            ->Where('id', $edit_id)
            ->update([
                'state' => 1
            ]);

        $rows = $this->emailManageList($pstart, $pcnt, 2, 0);
        $total = count($this->emailManageList($pstart, $pcnt, 2, 1));
        $totalpage = 0;
        if($total != 0)
            $totalpage = ceil($total / $pcnt);

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart
        ]);
    }
    public function editEmailManageFailedList(Request $request){
        $pstart  = intval($request->post('pstart'));
        $pcnt    = intval($request->post('pcnt'));
        $title    = $request->post('emailmanage_edit_title');
        $keyword    = $request->post('emailmanage_edit_keyword');
        $keyword = str_replace('[[', '', $keyword);
        $keyword = str_replace(']]', '', $keyword);
        $editcont0    = $request->post('editcont0');
        $edit_id    = $request->post('edit_id');

        $sucess = DB::table('users_emailmanage')
            ->Where('id', $edit_id)
            ->update([
                'title' => $title,
                'keyword' => $keyword,
                'content' => $editcont0
            ]);

        $rows = $this->emailManageList($pstart, $pcnt, 2, 0);
        $total = count($this->emailManageList($pstart, $pcnt, 2, 1));
        $totalpage = 0;
        if($total != 0)
            $totalpage = ceil($total / $pcnt);

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart
        ]);
    }
    public function saveEmailManageFailedList(Request $request){
        $pstart  = intval($request->post('pstart'));
        $pcnt    = intval($request->post('pcnt'));
        $title    = $request->post('emailmanage_edit_title');
        $keyword    = $request->post('emailmanage_edit_keyword');
        $keyword = str_replace('[[', '', $keyword);
        $keyword = str_replace(']]', '', $keyword);
        $editcont0    = $request->post('editcont0');

        $sucess =  DB::table('users_emailmanage')->insertGetId(
            [
                'title' => $title,
                'keyword' => $keyword,
                'content' => $editcont0,
                'state' => 0,
                'mail_status' => 2
            ]
        );

        $rows = $this->emailManageList($pstart, $pcnt, 2, 0);
        $total = count($this->emailManageList($pstart, $pcnt, 2, 1));
        $totalpage = 0;
        if($total != 0)
            $totalpage = ceil($total / $pcnt);

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart
        ]);
    }
    public function deleteEmailManageFailedList(Request $request){
        $pstart = intval($request->post('pstart'));
        $pcnt = intval($request->post('pcnt'));
        $del_id = $request->post('del_id');

        $sucess = DB::table('users_emailmanage')->where('id', $del_id)->delete();

        $rows = $this->emailManageList($pstart, $pcnt, 2, 0);
        $total = count($this->emailManageList($pstart, $pcnt, 2, 1));
        $totalpage = 0;
        if($total != 0)
            $totalpage = ceil($total / $pcnt);

        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $rows,
            'total' => $total,
            'totalpage' => $totalpage,
            'pstart' => $pstart
        ]);
    }
    public function getUOPPasswordItem(Request $request) {
        $password_type = $request->post('password_type');

        $rows = DB::table('users_profilesetting')->orderByDesc('id')->get()->first();

        if ($rows===null || $rows->password === null || $rows->password === '') {
            $pwd_data = '{"Strong":{"name":"Strong","format1_opt":"0","format1_val":"8","format2_opt":"3","format2_val":"8","style_letter":"1","style_digital":"0","style_special":"1","style_upper_lower":"1","colour_val":"#a2de9f","warning_text":"Please Enter A Password Of 8-12 Characters","warning_colour_val":"#e82b5c","check":"1"},"Medium":{"name":"Medium","format1_opt":"0","format1_val":"8","format2_opt":"3","format2_val":"12","style_letter":"1","style_digital":"0","style_special":"0","style_upper_lower":"0","colour_val":"#a2de9f","warning_text":"Please Enter A Password Of 8-12 Characters","warning_colour_val":"#e82b5c","check":"0"},"Weak":{"name":"Weak","format1_opt":"0","format1_val":"8","format2_opt":"3","format2_val":"12","style_letter":"1","style_digital":"0","style_special":"0","style_upper_lower":"0","colour_val":"#a2de9f","warning_text":"Please Enter A Password Of 8-12 Characters","warning_colour_val":"#e82b5c","check":"0"}}';
            DB::table('users_profilesetting')->insertGetId(
                ['password' => $pwd_data]
            );
            $rows = DB::table('users_profilesetting')->orderByDesc('id')->get()->first();
        }

        $lists = json_decode($rows->password);
        $notice = $rows->notice;

        $arr_res = array();
        foreach ($lists as $k => $v) {
            $arr_res[] = array(
                "name" => $v->name,
                "format1_opt" => $v->format1_opt,
                "format1_val" => $v->format1_val,
                "format2_opt" => $v->format2_opt,
                "format2_val" => $v->format2_val,
                "style_letter" => $v->style_letter,
                "style_digital" => $v->style_digital,
                "style_special" => $v->style_special,
                "style_upper_lower" => $v->style_upper_lower,//hnh 2020-10-23
                "colour_val" => $v->colour_val,
                "warning_text" => $v->warning_text,
                "warning_colour_val" => $v->warning_colour_val,
                "check" => $v->check,
            );
        }

        return \Response::json([
            'msg' => 'ok',
            'list' => $arr_res,
            'notice' => $notice
        ]);
    }
    public function insertUOPPasswordItem(Request $request) {
        $password_type = $request->post('password_type');
        $org_name = $request->post('org_name');
        $name = $request->post('name');
        $format1_opt = $request->post('format1_opt');
        $format1_val = $request->post('format1_val');
        $format2_opt = $request->post('format2_opt');
        $format2_val = $request->post('format2_val');
        $style_letter = $request->post('style_letter');
        $style_digital = $request->post('style_digital');
        $style_special = $request->post('style_special');
        $style_upper_lower = $request->post('style_upper_lower');//hnh 2020-10-23
        $colour_val = $request->post('colour_val');
        $warning_text = $request->post('warning_text');
        $warning_colour_val = $request->post('warning_colour_val');
        $check = $request->post('check');

        $rows = DB::table('users_profilesetting')->orderByDesc('id')->get()->first();

        $arr_data = array(
            $name => array(
                "name" => $name,
                "format1_opt" => $format1_opt,
                "format1_val" => $format1_val,
                "format2_opt" => $format2_opt,
                "format2_val" => $format2_val,
                "style_letter" => $style_letter,
                "style_digital" => $style_digital,
                "style_special" => $style_special,
                "style_upper_lower" => $style_upper_lower,//hnh 2020-10-23
                "colour_val" => $colour_val,
                "warning_text" => $warning_text,
                "warning_colour_val" => $warning_colour_val,
                "check" => $check
            )
        );

//        if ($password_type == "strong") {
        if ($rows===null || $rows->password == null || $rows->password == "") {
            $arr_data = json_encode($arr_data);
            $rt = DB::table('users_profilesetting')->where('id', $rows->id)->update(['password'=>$arr_data]);

            return \Response::json([
                'msg' => 'ok'
            ]);
        } else {
            $lists = json_decode($rows->password);

            $arr_res = array();
            foreach ($lists as $k => $v) {
                if ($org_name != '' && $org_name === $k) {
                    $arr_res[$name] = array(
                        "name" => $name,
                        "format1_opt" => $format1_opt,
                        "format1_val" => $format1_val,
                        "format2_opt" => $format2_opt,
                        "format2_val" => $format2_val,
                        "style_letter" => $style_letter,
                        "style_digital" => $style_digital,
                        "style_special" => $style_special,
                        "style_upper_lower" => $style_upper_lower,//hnh 2020-10-23
                        "colour_val" => $colour_val,
                        "warning_text" => $warning_text,
                        "warning_colour_val" => $warning_colour_val,
                        "check" => $check
                    );
                } else {
                    $arr_res[$k] = array(
                        "name" => $v->name,
                        "format1_opt" => $v->format1_opt,
                        "format1_val" => $v->format1_val,
                        "format2_opt" => $v->format2_opt,
                        "format2_val" => $v->format2_val,
                        "style_letter" => $v->style_letter,
                        "style_digital" => $v->style_digital,
                        "style_special" => $v->style_special,
                        "style_upper_lower" => $v->style_upper_lower,//hnh 2020-10-23
                        "colour_val" => $v->colour_val,
                        "warning_text" => $v->warning_text,
                        "warning_colour_val" => $v->warning_colour_val,
                        "check" => $v->check
                    );
                }
            }

            if ($org_name === '' || $org_name === null) {
                $arr_res[$name] = array(
                    "name" => $name,
                    "format1_opt" => $format1_opt,
                    "format1_val" => $format1_val,
                    "format2_opt" => $format2_opt,
                    "format2_val" => $format2_val,
                    "style_letter" => $style_letter,
                    "style_digital" => $style_digital,
                    "style_special" => $style_special,
                    "style_upper_lower" => $style_upper_lower,//hnh 2020-10-23
                    "colour_val" => $colour_val,
                    "warning_text" => $warning_text,
                    "warning_colour_val" => $warning_colour_val,
                    "check" => $check
                );
            }

            $arr_res = json_encode($arr_res);

            $rt = DB::table('users_profilesetting')->where('id', $rows->id)
                ->update(['password'=>$arr_res]);

            return \Response::json([
                'msg' => 'ok'
            ]);
        }
    }
    public function updateUOPPasswordItem(Request $request) {
        $data = $request->post('data');
        $notice = $request->post('notice');

        $rows = DB::table('users_profilesetting')->orderByDesc('id')->get()->first();

        if ($data != null) {
            $lists = json_decode($rows->password);

            $arr_res = array();
            foreach ($lists as $k => $v) {
                $arr_res[$k] = array(
                    "name" => $v->name,
                    "format1_opt" => $v->format1_opt,
                    "format1_val" => $v->format1_val,
                    "format2_opt" => $v->format2_opt,
                    "format2_val" => $v->format2_val,
                    "style_letter" => $v->style_letter,
                    "style_digital" => $v->style_digital,
                    "style_special" => $v->style_special,
                    "style_upper_lower" => $v->style_upper_lower,//hnh 2020-10-23
                    "colour_val" => $v->colour_val,
                    "warning_text" => $v->warning_text,
                    "warning_colour_val" => $v->warning_colour_val,
                    "check" => "0",
                );
            }

            foreach ($data as $list) {
                $name = "";
                $check = "";
                foreach ($list as $k => $v) {
                    if ($k === "name")
                        $name = $v;
                    else if ($k === "check")
                        $check = $v;
                }

                foreach ($arr_res as $key => $value) {
                    if ($key == $name) {
                        $arr_res[$key]['check'] = $check;
                    }
                }
            }

            $arr_res = json_encode($arr_res);

            $rt = DB::table('users_profilesetting')->where('id', $rows->id)
                ->update(['password'=>$arr_res, 'notice' => $notice]);
        }
        else
        {
            $lists = json_decode($rows->password);

            $arr_res = array();
            foreach ($lists as $k => $v) {
                $arr_res[$k] = array(
                    "name" => $v->name,
                    "format1_opt" => $v->format1_opt,
                    "format1_val" => $v->format1_val,
                    "format2_opt" => $v->format2_opt,
                    "format2_val" => $v->format2_val,
                    "style_letter" => $v->style_letter,
                    "style_digital" => $v->style_digital,
                    "style_special" => $v->style_special,
                    "style_upper_lower" => $v->style_upper_lower,//hnh 2020-10-23
                    "colour_val" => $v->colour_val,
                    "warning_text" => $v->warning_text,
                    "warning_colour_val" => $v->warning_colour_val,
                    "check" => "0",
                );
            }

            $arr_res = json_encode($arr_res);

            $rt = DB::table('users_profilesetting')->where('id', $rows->id)->update(['password'=>$arr_res]);
        }

        return \Response::json([
            'msg' => 'ok',
        ]);
    }

    public function getUsersOrgAccountAllData(Request $request)
    {
        $userid = $request->post('userid');
        $tabIndex = $request->post('tabIndex');
        $baseData = "";
        $addData = "";
        if($tabIndex == 1) {
            $rows = DB::table('usersorgaccount')
                ->select(DB::raw('general, general_add'))
                ->get()->first();
            if($rows != null) {
                $baseData = $rows->general;
                $addData = $rows->general_add;
            }
        }
        if($tabIndex == 2) {
            $rows = DB::table('usersorgaccount')
                ->select(DB::raw('information, information_add'))
                ->get()->first();
            if($rows != null) {
                $baseData = $rows->information;
                $addData = $rows->information_add;
            }
        }

        return \Response::json([
            'msg' => 'ok',
            'baseData' => $baseData,
            'addData' => $addData,
        ]);

        exit();
    }

    public function deleteUsersOrgAccountAddData(Request $request) {
        $userid = $request->post('userid');
        $tabIndex = $request->post('tabIndex');
        $index = $request->post('delIndex');

        $rows = DB::table('usersorgaccount')->get()->first();

        $lists = array();
        $addData = "";
        if($tabIndex == 1) {
            $dbdata = json_decode($rows->general_add);
            if($dbdata != null && $dbdata != "")
            {
                $i = 0;
                foreach($dbdata as $data){
                    $info1 = ["index"=>$i, "settingfield"=>$data->settingfield, "id"=>$data->id, "name"=>$data->name, "itemdata"=>$data->itemdata];
                    if($data->index != $index) {
                        array_push($lists, $info1);
                        $i++;
                    }
                }
            }
            if(count($lists) == 0)
                $lists = "";
            else
                $lists = json_encode($lists);
            $res = DB::table('usersorgaccount')->update(['general_add' => $lists]);
            $rows = DB::table('usersorgaccount')
                ->select(DB::raw('general_add'))
                ->get()->first();
            $addData = $rows->general_add;
        }
        if($tabIndex == 2) {
            $dbdata = json_decode($rows->information_add);
            if($dbdata != null && $dbdata != "")
            {
                $i = 0;
                foreach($dbdata as $data){
                    $info1 = ["index"=>$i, "settingfield"=>$data->settingfield, "id"=>$data->id, "name"=>$data->name, "itemdata"=>$data->itemdata];
                    if($data->index != $index) {
                        array_push($lists, $info1);
                        $i++;
                    }
                }
            }
            if(count($lists) == 0)
                $lists = "";
            else
                $lists = json_encode($lists);
            $res = DB::table('usersorgaccount')->update(['information_add' => $lists]);
            $rows = DB::table('usersorgaccount')
                ->select(DB::raw('information_add'))
                ->get()->first();
            $addData = $rows->information_add;
        }
        if($tabIndex == 3) {
            $dbdata = json_decode($rows->senior_add);
            if($dbdata != null && $dbdata != "")
            {
                $i = 0;
                foreach($dbdata as $data){
                    $info1 = ["index"=>$i, "settingfield"=>$data->settingfield, "id"=>$data->id, "name"=>$data->name, "itemdata"=>$data->itemdata];
                    if($data->index != $index) {
                        array_push($lists, $info1);
                        $i++;
                    }
                }
            }
            if(count($lists) == 0)
                $lists = "";
            else
                $lists = json_encode($lists);
            $res = DB::table('usersorgaccount')->update(['senior_add' => $lists]);
            $rows = DB::table('usersorgaccount')
                ->select(DB::raw('senior_add'))
                ->get()->first();
            $addData = $rows->senior_add;
        }

        return \Response::json([
            "msg" => "ok",
            "addData" => $addData
        ]);
        exit();
    }
    public function setUsersOrgAccountBaseData(Request $request) {
        $userid = $request->post('user_id');
        $tab_index = $request->post('tab_index');
        $base_item1_id = $request->post('base_item1_id');
        $base_item1_val = $request->post('base_item1_val');
        $base_item2_id = $request->post('base_item2_id');
        $base_item2_val = $request->post('base_item2_val');
        $base_item3_id = $request->post('base_item3_id');
        $base_item3_val = $request->post('base_item3_val');
        $base_item4_id = $request->post('base_item4_id');
        $base_item4_val = $request->post('base_item4_val');

        $lists = array();
        $info = [
            "id_1" => $base_item1_id,
            "val_1" => $base_item1_val,
            "id_2" => $base_item2_id,
            "val_2" => $base_item2_val,
            "id_3" => $base_item3_id,
            "val_3" => $base_item3_val,
            "id_4" => $base_item4_id,
            "val_4" => $base_item4_val
        ];
        array_push($lists, $info);
        $lists = json_encode($lists);

        $data = DB::table('usersorgaccount')
            //->where('userid', '1')
            ->get()->first();

        if($data != null) {
            if($tab_index == 1)
                $res = DB::table('usersorgaccount')
                    //->where('userid', '1')
                    ->update(['general'=>$lists]);
            if($tab_index == 2)
                $res = DB::table('usersorgaccount')
                    //->where('userid', '1')
                    ->update(['information'=>$lists]);
            if($tab_index == 3)
                $res = DB::table('usersorgaccount')
                    //->where('userid', '1')
                    ->update(['senior'=>$lists]);
        }else{
            if($tab_index == 1)
                $res = DB::table('usersorgaccount')->insertGetId(
                    ['general' => $lists]
                );
            if($tab_index == 2)
                $res = DB::table('usersorgaccount')->insertGetId(
                    ['information' => $lists]
                );
            if($tab_index == 3)
                $res = DB::table('usersorgaccount')->insertGetId(
                    ['senior' => $lists]
                );
        }
        if ($res) {
            return \Response::json([
                "msg" => "ok"
            ]);

        } else {
            return \Response::json([
                "msg" => "err",
                "message" => "db does not exist"
            ]);
        }

        exit();
    }

    public function setUsersOrgAccountAddData(Request $request) {
        $userid = $request->post('userid');
        $tabIndex = $request->post('tabIndex');
        $index = $request->post('add_index');
        $id = $request->post('id');
        $name = $request->post('name');
        $itemdata = $request->post('itemdata');
        $settingfield = $request->post('settingfield');

        $rows = DB::table('usersorgaccount')->get()->first();
        $info = [
            "index" => $index,
            "settingfield" => $settingfield,
            "id" => $id,
            "name" => $name,
            "itemdata" => $itemdata
        ];
        $lists = array();
        $addData = "";
        if($rows != null) {
            $dbdata = array();
            if($tabIndex == 1) {
                $dbdata = json_decode($rows->general_add);
                if($dbdata != null && $dbdata != "")
                {
                    foreach($dbdata as $data){
                        $info1 = ["index"=>$data->index, "settingfield"=>$data->settingfield, "id"=>$data->id, "name"=>$data->name, "itemdata"=>$data->itemdata];
                        array_push($lists, $info1);
                    }
                }
                array_push($lists, $info);
                $lists = json_encode($lists);
                $res = DB::table('usersorgaccount')->update(['general_add' => $lists]);
                $rows = DB::table('usersorgaccount')
                    ->select(DB::raw('general_add'))
                    ->get()->first();
                $addData = $rows->general_add;
            }
            if($tabIndex == 2) {
                $dbdata = json_decode($rows->information_add);
                if($dbdata != null && $dbdata != "")
                {
                    foreach($dbdata as $data){
                        $info1 = ["index"=>$data->index, "settingfield"=>$data->settingfield, "id"=>$data->id, "name"=>$data->name, "itemdata"=>$data->itemdata];
                        array_push($lists, $info1);
                    }
                }
                array_push($lists, $info);
                $lists = json_encode($lists);
                $res = DB::table('usersorgaccount')->update(['information_add' => $lists]);
                $rows = DB::table('usersorgaccount')
                    ->select(DB::raw('information_add'))
                    ->get()->first();
                $addData = $rows->information_add;
            }
            if($tabIndex == 3) {
                $dbdata = json_decode($rows->senior_add);
                if($dbdata != null && $dbdata != "")
                {
                    foreach($dbdata as $data){
                        $info1 = ["index"=>$data->index, "settingfield"=>$data->settingfield, "id"=>$data->id, "name"=>$data->name, "itemdata"=>$data->itemdata];
                        array_push($lists, $info1);
                    }
                }
                array_push($lists, $info);
                $lists = json_encode($lists);
                $res = DB::table('usersorgaccount')->update(['senior_add' => $lists]);
                $rows = DB::table('usersorgaccount')
                    ->select(DB::raw('senior_add'))
                    ->get()->first();
                $addData = $rows->senior_add;
            }
        }else{
            array_push($lists, $info);
            $lists = json_encode($lists);
            if($tabIndex == 1) {
                $res = DB::table('usersorgaccount')->insertGetId(
                    ['userid' => $userid, 'general_add' => $lists]
                );
                $rows = DB::table('usersorgaccount')
                    ->select(DB::raw('general_add'))
                    ->get()->first();
                $addData = $rows->senior_add;
            }
            if($tabIndex == 2) {
                $res = DB::table('usersorgaccount')->insertGetId(
                    ['userid' => $userid, 'information_add' => $lists]
                );
                $rows = DB::table('usersorgaccount')
                    ->select(DB::raw('information_add'))
                    ->get()->first();
                $addData = $rows->senior_add;
            }
            if($tabIndex == 3) {
                $res = DB::table('usersorgaccount')->insertGetId(
                    ['userid' => $userid, 'senior_add' => $lists]
                );
                $rows = DB::table('usersorgaccount')
                    ->select(DB::raw('senior_add'))
                    ->get()->first();
                $addData = $rows->senior_add;
            }
        }

        return \Response::json([
            "msg" => "ok",
            "addData" => $addData
        ]);
        exit();
    }
    public function editUsersOrgAccountAddData(Request $request) {
        $userid = $request->post('userid');
        $tabIndex = $request->post('tabIndex');
        $index = $request->post('editIndex');
        $id = $request->post('id');
        $name = $request->post('name');
        $itemdata = $request->post('itemdata');
        $settingfield = $request->post('settingfield');

        $rows = DB::table('usersorgaccount')->get()->first();
        $info = [
            "index" => $index,
            "settingfield" => $settingfield,
            "id" => $id,
            "name" => $name,
            "itemdata" => $itemdata
        ];
        $lists = array();
        $addData = "";
        if($tabIndex == 1) {
            $dbdata = json_decode($rows->general_add);
            if($dbdata != null && $dbdata != "")
            {
                foreach($dbdata as $data){
                    $info1 = ["index"=>$data->index, "settingfield"=>$data->settingfield, "id"=>$data->id, "name"=>$data->name, "itemdata"=>$data->itemdata];
                    if($data->index == $index)
                        array_push($lists, $info);
                    else
                        array_push($lists, $info1);
                }
            }
            $lists = json_encode($lists);
            $res = DB::table('usersorgaccount')->update(['general_add' => $lists]);
            $rows = DB::table('usersorgaccount')
                ->select(DB::raw('general_add'))
                ->get()->first();
            $addData = $rows->general_add;
        }
        if($tabIndex == 2) {
            $dbdata = json_decode($rows->information_add);
            if($dbdata != null && $dbdata != "")
            {
                foreach($dbdata as $data){
                    $info1 = ["index"=>$data->index, "settingfield"=>$data->settingfield, "id"=>$data->id, "name"=>$data->name, "itemdata"=>$data->itemdata];
                    if($data->index == $index)
                        array_push($lists, $info);
                    else
                        array_push($lists, $info1);
                }
            }
            $lists = json_encode($lists);
            $res = DB::table('usersorgaccount')->update(['information_add' => $lists]);
            $rows = DB::table('usersorgaccount')
                ->select(DB::raw('information_add'))
                ->get()->first();
            $addData = $rows->information_add;
        }
        if($tabIndex == 3) {
            $dbdata = json_decode($rows->senior_add);
            if($dbdata != null && $dbdata != "")
            {
                foreach($dbdata as $data){
                    $info1 = ["index"=>$data->index, "settingfield"=>$data->settingfield, "id"=>$data->id, "name"=>$data->name, "itemdata"=>$data->itemdata];
                    if($data->index == $index)
                        array_push($lists, $info);
                    else
                        array_push($lists, $info1);
                }
            }
            $lists = json_encode($lists);
            $res = DB::table('usersorgaccount')->update(['senior_add' => $lists]);
            $rows = DB::table('usersorgaccount')
                ->select(DB::raw('senior_add'))
                ->get()->first();
            $addData = $rows->senior_add;
        }

        return \Response::json([
            "msg" => "ok",
            "addData" => $addData
        ]);
        exit();
    }



}

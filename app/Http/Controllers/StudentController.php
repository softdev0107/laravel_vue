<?php

namespace App\Http\Controllers;

use App\Models\UserModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StudentController extends BaseController
{
    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    public function index(Request $request, $lang=null)
    {
        $ciso = $this->compareSavedLang($lang);

        $pagecontents = collect([]);
        $frontContens = $this->FrontPageContent($ciso);
        $pagecontents->put('frtxt', $frontContens);
        $pagecontents->put('curMU', 'stud');

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
        $row =null;
        $row = DB::table('wesglobalpageregister')
            ->whereRaw('trans like "'.$ciso.'%" and g_path like "'.$this->g_path.'" and type="std"')->get()->first();
        $rowt = DB::table('wesglobalpageregister')
            ->whereRaw('type = "std" and g_path = "'.$this->g_path.'"')->get()->first();
        if($row===null)
        {
            $row = $rowt;
        }

        if($row!==null)
        {
            $pagecontents->put('stdHelper', $row->content);
        }
        else
        {
            $pagecontents->put('stdHelper', '');
        }

        return view('wes.wesGlobalRegStudent')->with($pagecontents->toArray());
    }

    public function wesSRegCheck(Request $request)
    {
        $recvType = $request->post('regtype');
        if($recvType==='m')
        {
            $phone = $request->post('phone');
            $pwd = $request->post('pwd');
            $incode = $request->post('incode');
            $recvcode = $request->post('recvcode');
            $incode = str_replace (' ', '', $incode);
            $incode = str_replace ('-', '', $incode);
            $incode = str_replace ('(', '', $incode);
            $incode = str_replace (')', '', $incode);
            $incode = str_replace ('[', '', $incode);
            $incode = str_replace (']', '', $incode);
            $incode = str_replace ('{', '', $incode);
            $incode = str_replace ('}', '', $incode);

            $recvcode = substr($recvcode, 4);
            $recvcode = substr($recvcode, 0, strlen($recvcode) - 4);
            $recvcode = intval($recvcode) - 1971;
            $incode = intval($incode);
            if ($recvcode !== $incode)
            {
                return \Response::json([
                    'status'  =>  'errcode'
                ]);
                exit();
            }

            $userMD = new UserModel;
            $user = $userMD->findUserByPhone($phone);
            if($user !== null)
            {
                return \Response::json([
                    'status'  =>  "duser"
                ]);
                exit();
            }
            $createtime = date("Y-m-d h:i:s", time());
            $data = array(
                'password'        => $pwd,
                'phone'           => $phone,
                'area'            => 3,
                'created_at'      => $createtime
            );
            $result =  $userMD->ResisterUserByPhone($data);
            if($result['id'] > 0)
            {
                $userinfo = array(
                    'id'              => $result['id'],
                    'name'            => '',
                    'email'           => '',
                    'phone'           => $phone,
                    'area'            => 3,
                    'password'        => $result['password']
                );
                session()->put('userinfo', $userinfo);

                return \Response::json([
                    'status'  =>  "regok"
                ]);
                exit();
            }
        }
        else if($recvType==='e')
        {
            $email = $request->post('email');
            $pwd = $request->post('pwd');

            $userMD = new UserModel;
            $user = $userMD->findUserByMail($email);
            if($user != null)
            {
                return \Response::json([
                    'status'  =>  "duser"
                ]);
                exit();
            }

            $createtime = date("Y-m-d h:i:s", time());
            $data = array(
                'email'            => $email,
                'password'        => $pwd,
                'area'            => 3,
                'created_at'      => $createtime
            );
            $result =  $userMD->ResisterUserByMail($data);
            if($result['id'] > 0)
            {
                $userinfo = array(
                    'id'              => $result['id'],
                    'name'            => '',
                    'email'           => $result['email'],
                    'phone'           =>'',
                    'area'            => 3,
                    'password'        => $result['password']
                );
                session()->put('userinfo', $userinfo);
                return \Response::json([
                    'status'  =>  "regok"
                ]);
                exit();
            }

        }

        exit();

    }


}//class

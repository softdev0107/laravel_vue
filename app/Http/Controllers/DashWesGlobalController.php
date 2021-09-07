<?php

namespace App\Http\Controllers;

use Faker\Guesser\Name;
use Faker\Provider\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use App\Models\UserModel;
use Illuminate\Support\Facades\Schema;
use JoggApp\GoogleTranslate\GoogleTranslateClient;
use PhpParser\Node\Expr\Array_;
use League\Flysystem\Filesystem;
use League\Flysystem\Sftp\SftpAdapter;

class DashWesGlobalController extends BaseController
{
    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    private $iconPath = '/uploads/images/wesimg/icons/';
    private $logPath = '/uploads/images/wesimg/logo/';

    private function FileUploadFunc($file, $upPath){
        $filename = time().'-'.$file->getClientOriginalName();
        $file->move(public_path().$upPath, $filename);

        return $filename;
    }

    private function overwriteFileUploadFunc($file, $oldfilename, $upPath){
        if($file != null) {
            $filename = time() . '-' . $file->getClientOriginalName();
            $file->move(public_path() . $upPath, $filename);

            if (!empty($oldfilename) && $oldfilename != "") {
                if (file_exists(public_path() . $upPath . $oldfilename))
                    @unlink(public_path() . $upPath . $oldfilename);
            }
        }
        else{
            $filename = $oldfilename;
        }

        return $filename;
    }

    public function setSocialSettingDetailIcon(Request $request)
    {
        $sel_id = $request->post('chooseIconId');
        $iconfile = $request->file('uploadicon_'.$sel_id);
        $iconpre = $request->post('uploadiconpre_'.$sel_id);
        $hoverfile = $request->file('file-detailhover');
        $hoverpre = $request->post('hfile_'.$sel_id);

        if($iconfile != null)
            $iconpath = $this->FileUploadFunc($iconfile, $this->iconPath);
        else{
            if($iconpre != null && $iconpre != "")
                $iconpath = $iconpre;
            else
                $iconpath = "";
        }
        if($hoverfile != null)
            $hoverpath = $this->FileUploadFunc($hoverfile, $this->iconPath);
        else{
            if($hoverpre != null && $hoverpre != "")
                $hoverpath = $hoverpre;
            else
                $hoverpath = "";
        }

        return \Response::json([
            'msg'  =>  "ok",
            'id' => $sel_id,
            'icon_name' => $iconpath,
            'hover_name' => $hoverpath
        ]);

        exit();
    }

    public function chooseIconImageUpload(Request $request)
    {
        $sel_id = $request->post('chooseIconId');
        $i_cond = $request->post('icon_cond');
        $icon_style = DB::table('sitelogoimgstyle')->where('g_path', $this->g_path)->where('id', $i_cond)->get()->first();
        $h_cond = $request->post('hover_cond');
        $hover_style = DB::table('sitelogoimgstyle')->where('g_path', $this->g_path)->where('id', $h_cond)->get()->first();
        $condId = $request->post('condId');
        if($condId == 1)
        {
            $size = $icon_style->size;
            $fort = $icon_style->imgtype;
            $capa = $icon_style->capacity;
            $file = $request->file('uploadicon_'.$sel_id);
            $data = getimagesize($_FILES['uploadicon_'.$sel_id]['tmp_name']);
        }
        else{
            $size = $hover_style->size;
            $fort = $hover_style->imgtype;
            $capa = $hover_style->capacity;
            $file = $request->file('file-detailhover');
            $data = getimagesize($_FILES['file-detailhover']['tmp_name']);
        }
        $capa = (int)$capa * 1000;


        $width = $data[0];
        $height = $data[1];
        $format = $file->getClientMimeType();
        $capacity = $file->getSize();

        $filesize = explode("*", $size);
        $arr = explode("/", $format);
        $fileformat = str_replace("e", "", $arr[1]);
        if(count($filesize) > 1) {
            if ($width > $filesize[0] || $height > $filesize[1])
                return \Response::json([
                    'msg' => 'size'
                ]);
        }
        if($capa != null && $capa != '') {
            if ($capacity > $capa)
                return \Response::json([
                    'msg' => 'capacity',
                ]);
        }
        if($fort != null && $fort != '') {
            if (strpos($fort, $fileformat) !== false){

            }
            else{
                return \Response::json([
                    'msg' => 'format'
                ]);
            }
        }

        $filename = $this->FileUploadFunc($file, $this->iconPath);

        return \Response::json([
            'msg'  =>  "ok",
            "fname"=>$filename
        ]);

    }

    public function deleteSocialSettingIcon(Request $request)
    {
        $ifile = $request->post('ifile');
        $hfile = $request->post('hfile');

        if($ifile != "" && $ifile != null)
            @unlink(public_path().$this->iconPath.$ifile );
        if($hfile != "" && $hfile != null)
            @unlink(public_path().$this->iconPath.$hfile );

        return \Response::json([
            'msg'  =>  "ok",
        ]);

        exit();
    }

    public function getLogoImageStyle(Request $request)
    {
        $icon_id = $request->post('i_cond');
        $icon_style = DB::table('sitelogoimgstyle')->where('g_path', $this->g_path)->where('id', $icon_id)->get()->first();

        $hover_id = $request->post('h_cond');
        $hover_style = DB::table('sitelogoimgstyle')->where('g_path', $this->g_path)->where('id', $hover_id)->get()->first();

        if($icon_style == null && empty($icon_style))
            $icon_style = "";
        if($hover_style == null && empty($hover_style))
            $hover_style = "";

        return \Response::json([
            'msg'  =>  "ok",
            'iconStyle' => $icon_style,
            'hoverStyle' => $hover_style
        ]);

        exit();
    }

    public function getSocialSettingPage(Request $request){
        $tranedLang = $request->post('tansLang');

        $row=null;
        if($tranedLang===null || $tranedLang === '')
        {
            $row = DB::table('webwesglobal_appea')
                ->select(DB::raw('trans, socialsetting'))
                ->where('g_path', $this->g_path)
                ->get()->first();
        }else{
            $row = DB::table('webwesglobal_appea')
                ->select(DB::raw('trans, socialsetting'))
                ->whereRaw('trans like "'.$tranedLang.'%"')
                ->where('g_path', $this->g_path)
                ->get()->first();
        }

        $instrjson='';
        if($row!==null)
            $instrjson = $row->socialsetting;
        if($instrjson == null)
            $instrjson = '';
        return \Response::json([
            'msg'  =>  'ok',
            'list' => $instrjson
        ]);

        exit();
    }

    public function saveSocialSettingPage(Request $request){
        $tranedLang = $request->post('transedlang');
        $i_cond = $request->post('icon_cond');
        $h_cond = $request->post('hover_cond');
        $i_img1 = $request->post('ifile_1');
        if($i_img1 == null)
            $i_img1 = "";
        $i_img2 = $request->post('ifile_2');
        if($i_img2 == null)
            $i_img2 = "";
        $i_img3 = $request->post('ifile_3');
        if($i_img3 == null)
            $i_img3 = "";
        $i_img4 = $request->post('ifile_4');
        if($i_img4 == null)
            $i_img4 = "";
        $i_img5 = $request->post('ifile_5');
        if($i_img5 == null)
            $i_img5 = "";
        $i_img6 = $request->post('ifile_6');
        if($i_img6 == null)
            $i_img6 = "";
        $i_img7 = $request->post('ifile_7');
        if($i_img7 == null)
            $i_img7 = "";
        $i_img8 = $request->post('ifile_8');
        if($i_img8 == null)
            $i_img8 = "";
        $h_img1 = $request->post('hfile_1');
        if($h_img1 == null)
            $h_img1 = "";
        $h_img2 = $request->post('hfile_2');
        if($h_img2 == null)
            $h_img2 = "";
        $h_img3 = $request->post('hfile_3');
        if($h_img3 == null)
            $h_img3 = "";
        $h_img4 = $request->post('hfile_4');
        if($h_img4 == null)
            $h_img4 = "";
        $h_img5 = $request->post('hfile_5');
        if($h_img5 == null)
            $h_img5 = "";
        $h_img6 = $request->post('hfile_6');
        if($h_img6 == null)
            $h_img6 = "";
        $h_img7 = $request->post('hfile_7');
        if($h_img7 == null)
            $h_img7 = "";
        $h_img8 = $request->post('hfile_8');
        if($h_img8 == null)
            $h_img8 = "";
        $i_link1 = $request->post('ilink_1');
        if($i_link1 == null)
            $i_link1 = "";
        $i_link2 = $request->post('ilink_2');
        if($i_link2 == null)
            $i_link2 = "";
        $i_link3 = $request->post('ilink_3');
        if($i_link3 == null)
            $i_link3 = "";
        $i_link4 = $request->post('ilink_4');
        if($i_link4 == null)
            $i_link4 = "";
        $i_link5 = $request->post('ilink_5');
        if($i_link5 == null)
            $i_link5 = "";
        $i_link6 = $request->post('ilink_6');
        if($i_link6 == null)
            $i_link6 = "";
        $i_link7 = $request->post('ilink_7');
        if($i_link7 == null)
            $i_link7 = "";
        $i_link8 = $request->post('ilink_8');
        if($i_link8 == null)
            $i_link8 = "";
        $h_link1 = $request->post('hlink_1');
        if($h_link1 == null)
            $h_link1 = "";
        $h_link2 = $request->post('hlink_2');
        if($h_link2 == null)
            $h_link2 = "";
        $h_link3 = $request->post('hlink_3');
        if($h_link3 == null)
            $h_link3 = "";
        $h_link4 = $request->post('hlink_4');
        if($h_link4 == null)
            $h_link4 = "";
        $h_link5 = $request->post('hlink_5');
        if($h_link5 == null)
            $h_link5 = "";
        $h_link6 = $request->post('hlink_6');
        if($h_link6 == null)
            $h_link6 = "";
        $h_link7 = $request->post('hlink_7');
        if($h_link7 == null)
            $h_link7 = "";
        $h_link8 = $request->post('hlink_8');
        if($h_link8 == null)
            $h_link8 = "";

        $dbstr=array(
            'i_cond'  => $i_cond,
            'h_cond'  => $h_cond,
            'i_img1'  => $i_img1,
            'i_link1' => $i_link1,
            'h_img1'  => $h_img1,
            'h_link1' => $h_link1,
            'i_img2'  => $i_img2,
            'i_link2' => $i_link2,
            'h_img2'  => $h_img2,
            'h_link2' => $h_link2,
            'i_img3'  => $i_img3,
            'i_link3' => $i_link3,
            'h_img3'  => $h_img3,
            'h_link3' => $h_link3,
            'i_img4'  => $i_img4,
            'i_link4' => $i_link4,
            'h_img4'  => $h_img4,
            'h_link4' => $h_link4,
            'i_img5'  => $i_img5,
            'i_link5' => $i_link5,
            'h_img5'  => $h_img5,
            'h_link5' => $h_link5,
            'i_img6'  => $i_img6,
            'i_link6' => $i_link6,
            'h_img6'  => $h_img6,
            'h_link6' => $h_link6,
            'i_img7'  => $i_img7,
            'i_link7' => $i_link7,
            'h_img7'  => $h_img7,
            'h_link7' => $h_link7,
            'i_img8'  => $i_img8,
            'i_link8' => $i_link8,
            'h_img8'  => $h_img8,
            'h_link8' => $h_link8
        );
        $strjson =json_encode($dbstr);

        $row=null;
        if($tranedLang===null || $tranedLang === '')
        {
            $row = DB::table('webwesglobal_appea')
                ->select(DB::raw('trans, socialsetting'))
                ->where('g_path', $this->g_path)
                ->get()->first();
        }else{
            $row = DB::table('webwesglobal_appea')
                ->select(DB::raw('trans, socialsetting'))
                ->where('trans',$tranedLang)
                ->where('g_path', $this->g_path)
                ->get()->first();
        }

        $sucess = -1;
        if($row!==null){
            $sucess = DB::table('webwesglobal_appea')
                ->Where('trans', $tranedLang)
                ->where('g_path', $this->g_path)
                ->update(['socialsetting' => $strjson, 'is_socialsetting' => 0]);
        }
        else{
            $sucess =  DB::table('webwesglobal_appea')->insertGetId(
                [
                    'trans' => $tranedLang,
                    'socialsetting' => $strjson,
                    'is_socialsetting' => 0,
                    'g_path'=>$this->g_path
                ]
            );
        }

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

    public function saveConfigurationGeneral(Request $request){
        //$tranedLang = $request->post('transedlang');
        $curid = $request->post('curid');
        $curid = intval($curid);

        $logofile = $request->file('wwga_logo_upload');
        $logopre = $request->post('wwga_logo_upload_preview_temp');
        $extralogofile = $request->file('wwga_extralogo_upload');
        $extralogopre = $request->post('wwga_extralogo_upload_preview_temp');
        $favicofile = $request->file('wwga_favico_upload');
        $favicopre = $request->post('wwga_favico_upload_preview_temp');
        $sloganfile = $request->file('wwga_slogan_upload');
        $sloganpre = $request->post('wwga_slogan_upload_preview_temp');
        $siteTitle = $request->post('wwga_sitetitle_input');
        $domain = $request->post('wwga_sitedomain_input');
        $companydomain = $request->post('wwga_companydomain_input');

        $logoImg = $this->overwriteFileUploadFunc($logofile, $logopre, $this->logPath);
        $extralogoImg = $this->overwriteFileUploadFunc($extralogofile, $extralogopre, $this->logPath);
        $sloganImg = $this->overwriteFileUploadFunc($sloganfile, $sloganpre, $this->logPath);
        $favicoImg = $this->overwriteFileUploadFunc($favicofile, $favicopre, $this->logPath);

        if($siteTitle == null)
            $siteTitle = "";

        include_once("ApacheDomainName.php");

        $dbstr=array(
            'logoImg'  => $logoImg,
            'extralogoImg'  => $extralogoImg,
            'favicoImg' => $favicoImg,
            'sloganImg'  => $sloganImg,
            'sitetitle'  => $siteTitle,
            'domain' => $domain,
            'companydomain' => $companydomain
        );

        $strjson =json_encode($dbstr);

        if($domain !== null && $domain !== ''){
            $row = DB::table('site_basic_setting')
                ->get()->first();
            $dash_domain = '';
            $ip_server = $_SERVER['SERVER_ADDR'];
            if($row!==null){
                $dash_domain = $row->domain;
            }
            if($dash_domain == $domain){
                return \Response::json([
                    'msg'  =>  'err_domain'
                ]);
            }
            else
            {
                $c_os='NOWIN';
                if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
                    $c_os = 'WIN';
                }

                if($c_os!=='WIN')
                    SetFrontDomainNameCommand($domain, $ip_server);
            }
        }
        if($companydomain !== null && $companydomain !== ''){
            $ip_server = $_SERVER['SERVER_ADDR'];
            $c_os='NOWIN';
            if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
                $c_os = 'WIN';
            }

            if($c_os!=='WIN') {
                SetCompanyDomainNameCommand($companydomain);
            }
        }

        $row=null;
        if($curid===null || $curid === 0)
        {
            $row = DB::table('webwesglobal_appea')
                ->select(DB::raw('id, configgenereal'))
                //->where('g_path', $this->g_path)
                ->orderBy('id','asc')
                ->get()->first();
        }else{
            $row = DB::table('webwesglobal_appea')
                ->select(DB::raw('id, configgenereal'))
                ->where('id',$curid)
                //->where('g_path', $this->g_path)
                ->get()->first();
        }

        $sucess = -1;

        if($row!==null){
            $sucess = DB::table('webwesglobal_appea')
                //->Where('trans', $tranedLang)
                //->where('g_path', $this->g_path)
                ->update(['configgenereal' => $strjson, 'is_configgenereal' => 1]);
        }
        else
        {
            $sucess =  DB::table('webwesglobal_appea')->insertGetId(
                [
                    //'g_path'=>$this->g_path,
                    'trans' =>'',
                    'configgenereal' => $strjson,
                    'is_configgenereal' => 1

                ]
            );
        }

        if($sucess > -1)
        {
            return \Response::json([
                'msg'  =>  'ok',
                'logoImg' => $logoImg,
                'extralogoImg' => $extralogoImg,
                'sloganImg' => $sloganImg,
                'favicoImg' => $favicoImg
            ]);
        }
        else{
            return \Response::json([
                'msg'  =>  'err'
            ]);
        }

        exit();
    }

    public function getConfigurationGeneral(Request $request)
    {
      //  $tranedLang = $request->post('transedlang');
        $row=null;
       // if($tranedLang===null || $tranedLang === '')
        {
            $row = DB::table('webwesglobal_appea')
                ->select(DB::raw('id, configgenereal'))
                ->where('g_path', $this->g_path)
                ->orderBy('id', 'asc')
                ->get()->first();
        }
        /*  else
        {
            $row = DB::table('webwesglobal_appea')
                ->select(DB::raw('trans, configgenereal'))
                ->where('g_path', $this->g_path)
                ->where('trans',$tranedLang)
                ->get()->first();
        }*/

        $instrjson='';
        $id=0;
        if($row!==null){
            $instrjson = $row->configgenereal;
            $id=$row->id;
        }
        if($instrjson == null)
            $instrjson = '';

        $imgtypelist = DB::table('sitelogoimgstyle')
            ->select(DB::raw('id, name, size, style, capacity, imgtype, state '))
            ->where('g_path', $this->g_path)
            ->orderBy('id', 'asc')
            ->get();

        return \Response::json([
            'msg'  =>  'ok',
            'id'=>$id,
            'lists' => $instrjson,
            'imgtypelist'=>$imgtypelist
        ]);

        exit();
    }

    public function getWWStoredLang(){
        $rows = DB::table('webwesglobal_lang')->get();
        $cnt = count($rows);
        if($rows!== null && $cnt > 0)
        {
            return \Response::json([
                'msg'  =>  "ok",
                'cnt' =>$cnt,
                'langlist' => $rows
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "empty",
                'cnt' => 0,
                'langlist' => ''
            ]);
        }

        exit();
    }

    public function getWesTranslation(Request $request){
        $iso=$request->post('iso');
        $org_iso=$request->post('orgiso');
        $searchcont  = $request->post('searchcont');
        $cnt    = $request->post('cnt');
        $start  = $request->post('start');
        $start_from = ($start-1) * $cnt;

        $where =" iso ='".$org_iso."'";
        if($searchcont!=null && $searchcont!=''){
            $where .=' and str_cont like "%'.$searchcont.'%" ';
        }
        $lists = DB::table('wesfront_lang')->whereRaw($where)->orderBy('id')->offset($start_from)->limit($cnt)->get();
        $rows =   DB::table('wesfront_lang')->whereRaw($where)->get();
        $total = count($rows);
        $totalpage = ceil($total / $cnt);
        if($total > 0)
        {
            $collection = collect();
            if($iso !=null)
            {
                foreach($lists as $list)
                {
                    $str_type = $list->str_type;
                    $str_key = $list->str_key;
                    $row = DB::table('wesfront_lang')
                        ->where('iso',$iso)
                        ->where('str_type',$str_type)
                        ->where('str_key',$str_key)->get()->first();
                    $list->tid=0;
                    $list->tcont='';
                    $list->tiso= $iso;
                    if($row!=null){
                        $list->tid=$row->id;
                        $list->tcont=$row->str_cont;
                        $list->tiso=$iso;
                    }
                    $collection[] =$list;
                }
            }
            else
            {
                foreach($lists as $list)
                {
                    $list->tid=$list->id;
                    $list->tcont=$list->str_cont;
                    $list->tiso=$iso;
                    $collection[] =$list;
                }
            }

            return \Response::json([
                'msg'   =>  'ok',
                'total'    =>  $total,
                'start'    =>  $start,
                'iso'    =>  $iso,
                'totalpage'    =>  $totalpage,
                'list' =>  $collection
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "err",
                'total'    =>  $total,
                'iso'    =>  $iso,
                'message' => 'empty data in database'
            ]);
        }

        exit();
    }

    public function changeWesTranslation(Request $request){
        $iso=$request->post('iso');
        $str_key=$request->post('str_key');
        $str_type  = $request->post('str_type');
        $str_cont    = $request->post('str_cont');
        $value    = $request->post('value');
        $str_fname    = $request->post('str_fname');

        $createtime = date("Y-m-d h:i:s", time());
        $iid=0;
        if($value=='change')
        {
            try{

                DB::table('wesfront_lang')
                    ->Where('str_type', $str_type)
                    ->Where('str_key', $str_key)
                    ->Where('iso', $iso)
                    ->update([
                        'str_cont' => $str_cont
                        , 'updated_at' => $createtime
                    ]);
                $iid=1;


            }
            catch(\Exception $e){}
        }
        else //add
        {
            $iid =  DB::table('wesfront_lang')->insertGetId(
                [
                    'str_type' => $str_type
                    , 'str_key' => $str_key
                    , 'str_cont' => $str_cont
                    , 'iso' => $iso
                    , 'created_at' => $createtime
                ]
            );
        }


        if($iid > 0){
            return \Response::json([
                'msg'  =>  "ok"
                , 'iso' => $iso
                , 'status' =>$value
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "err"
                , 'iso' => $iso
                , 'status' =>$value
                ,'message' => "Error insert in db"
            ]);
        }
        exit();
    }

    public function websGlobalFrontPageRelease(Request $request)
    {
        $trans = $request->post('trans');
        $part = $request->post('part');
        $tabstatus = $request->post('tabstatus');
        $state_sql = "";
        $device = $request->post('device');
        $device = rtrim($device,",");
        $deviceArray = explode(",", $device);


        if($part == "index"){
            switch ($tabstatus)
            {
                case 0:
                    $state_sql = "is_pageslider = 1";
                    break;
                case 1:
                    $state_sql = "is_teacher = 1";
                    break;
                case 2:
                    $state_sql = "is_student = 1";
                    break;
                case 3:
                    $state_sql = "is_background = 1";
                    break;
            }
        }
        if($part == "mainmenu"){
            $state_sql = "is_mainmenu = 1";
        }
        if($part == "footmenu"){
            $state_sql = "is_footmenu = 1";
        }
        if($part == "HeadFootBar"){
            switch ($tabstatus)
            {
                case 'head':
                    $state_sql = "is_head = 1";
                    break;
                case 'foot':
                    $state_sql = "is_foot = 1";
                    break;
            }
        }
        if($part == "configgeneral"){
            $state_sql = "is_configgenereal = 1";
        }
        if($part == "socialsetting"){
            $state_sql = "is_socialsetting = 1";
        }

        try{
            if($device!==null && $device !== '' && is_array($deviceArray)){
                for($i=0; $i < count($deviceArray); $i++){
                    $where='';
                    $where.=' and device = "'.$deviceArray[$i].'"';
                    $dbstate = DB::statement("UPDATE webwesglobal_appea SET ".$state_sql." where trans ='".$trans."'".$where);
                }
            }
            else{
                $where='';
                if($device!==null && $device !== ''){
                    $where.=' and device = "'.$device.'"';
                }
                $dbstate = DB::statement("UPDATE webwesglobal_appea SET ".$state_sql." where trans ='".$trans."'".$where);
            }
           // $dbstate = DB::statement("UPDATE webwesglobal_appea SET ".$state_sql." where trans ='".$trans."'");
        }
        catch(\Exception $e){}

        if($dbstate) {
            return \Response::json([
                'msg' => "ok",
            ]);
        }
        else {
            return \Response::json([
                'msg' => "update error",
            ]);
        }

        exit();
    }

    public function wwmfGetContentType(Request $request){
        $lang = $request->post('lang');
        $query ='SELECT id, '.$lang.' as field ';
        $query.='FROM wes_pagetype ';
        $query.='ORDER BY id ASC';
        $type_row = DB::select($query);

        if($type_row!==null && count($type_row) > 0){
            return \Response::json([
                'msg'   =>  'ok',
                'list' =>  $type_row
            ]);
        }
    }

    public function getSideContentTypeData(Request $request)
    {
        $trans  = $request->trans;
        $start  = $request->start;
        $cnt    = $request->cnt;
        $pagetype_id   = $request->contenttype;
        $start_from = ($start-1) * $cnt;

        if($trans===null || empty($trans))
            die('Have to Setting language');

        $iso = explode('-',$trans);
        $lang_row = DB::table('webwesglobal_lang')
            ->select(DB::raw('name'))
            ->where([
                ['iso', $iso[0]],
                ['status', 'enable'],
                ['g_path', $this->g_path]
            ])->get()->first();

        $query='';
        $query.='Select a.*, p.'.strtolower($lang_row->name).' as name ';
        $query.='FROM tb_pagecontent_sidebar as a ';
        $query.='LEFT JOIN wes_pagetype as p ';
        $query.='ON a.pagetype_id = p.id ';
        $where = ' where 1 ';
        if ($pagetype_id > 0) {
            $where.='AND a.pagetype_id  = '.$pagetype_id.' ';
        }
        $where.=' AND a.trans = "'.$trans.'" AND a.sidebar_type = 0 ';
        $query.=$where;
        $query.='ORDER BY a.order_no asc LIMIT '.$start_from.', '.$cnt.'';
        $rows = DB::select($query);

        $query1='';
        $query1.='Select COUNT(a.id) AS cnt  ';
        $query1.='FROM tb_pagecontent_sidebar as a ';
        $query1.='LEFT JOIN wes_pagetype as p ';
        $query1.='ON a.pagetype_id = p.id ';
        $where1 = ' where 1 ';
        if ($pagetype_id > 0) {
            $where1.='AND a.pagetype_id  = '.$pagetype_id.' ';
        }
        $where1.='AND a.trans = "'.$trans.'" AND a.sidebar_type = 0 ';
        $query1.=$where1;
        $total = DB::select($query1)[0]->cnt;
        $totalpage = ceil($total / $cnt);

        if($rows!==null && count($rows) > 0){
            return \Response::json([
                'msg'   =>  'ok',
                'total'    =>  $total,
                'start'    =>  $start,
                'totalpage'    =>  $totalpage,
                'list' =>  $rows
            ]);
        }
        else{
            return \Response::json([
                'msg'   =>  'err'
            ]);
        }

        exit();
    }

    public function addSideContentTypeData_pre(Request $request)
    {
        $id = $request->id;
        $trans  = $request->trans;
        $mode  = $request->mode;
        $title  = $request->title;
        $type  = $request->type;
        $number  = $request->number;
        $order =  $request->order;
        $created_at = date("Y-m-d h:i:s", time());
        $updated_at = date("Y-m-d h:i:s", time());

        $query='';
        $query.='Select a.* ';
        $query.='FROM tb_pagecontent_sidebar as a ';
        $query.='WHERE a.sidebar_type = 0 ';
        $query.='AND a.pagetype_id  = '.$type.' ';
        $query.='AND a.order_no >= '.$order.' ';

        $fixrows = DB::select($query);
        $fixcount = count($fixrows);

        if ($fixcount > 0) {
            foreach ($fixrows as $k => $v) {
                $order_no = $v->order_no;
                $id = $v->id;
                $cnt = DB::table('tb_pagecontent_sidebar')->where('sidebar_type', 0)->where('pagetype_id', $type)->doesntExist();

                if(!$cnt){

                    $sucess =  DB::table('tb_pagecontent_sidebar')
                        ->updateOrInsert(
                            ['id' => $id],
                            [
                                'order_no' => $order_no + 1,
                                'updated_at' => $updated_at
                            ]
                        );
                }
            }
        }

        $sucess =  DB::table('tb_pagecontent_sidebar')->insertGetId(
            [
                'sidebar_type' => 0,
                'trans' => $trans,
                'mode' => $mode,
                'title' => $title,
                'type' => $mode,
                'number' => $number,
                'order_no' => $order,
                'pagetype_id' => $type,
                'created_at' => $created_at,
                'updated_at' => $updated_at
            ]
        );

        if($sucess)
        {
            return \Response::json([
                'msg'  =>  'ok'
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  'err'
            ]);
        }

        exit();
    }
    public function addSideContentTypeData(Request $request)
    {
        $id = $request->id;
        $trans  = $request->trans;
        $mode  = $request->mode;
        $title  = $request->title;
        $sidetype=$request->sidetype;
        $pagetypeid  = $request->pagetypeid;
        $number  = $request->number;
        $order =  $request->order;
        $created_at = date("Y-m-d h:i:s", time());
        $updated_at = date("Y-m-d h:i:s", time());

        $query='';
        $query.='Select a.* ';
        $query.='FROM tb_pagecontent_sidebar as a ';
        $query.='WHERE a.sidebar_type = '.$sidetype.' ' ;
        $query.='AND a.pagetype_id  = '.$pagetypeid.' ';
        $query.='AND a.order_no >= '.$order.' ';

        $fixrows = DB::select($query);
        $fixcount = count($fixrows);

        if ($fixcount > 0) {
            foreach ($fixrows as $k => $v) {
                $order_no = $v->order_no;
                $id = $v->id;
                $cnt = DB::table('tb_pagecontent_sidebar')->where('sidebar_type', $sidetype)
                    ->where('pagetype_id', $pagetypeid)->doesntExist();

                if(!$cnt){
                    $sucess =  DB::table('tb_pagecontent_sidebar')
                        ->updateOrInsert(
                            ['id' => $id],
                            [
                                'order_no' => $order_no + 1,
                                'updated_at' => $updated_at
                            ]
                        );
                }
            }
        }

        $sucess =  DB::table('tb_pagecontent_sidebar')->insertGetId(
            [
                'sidebar_type' => $sidetype,
                'trans' => $trans,
                'mode' => $mode,
                'title' => $title,
                'type' => $mode,
                'number' => $number,
                'order_no' => $order,
                'pagetype_id' => $pagetypeid,
                'created_at' => $created_at,
                'updated_at' => $updated_at
            ]
        );

        if($sucess)
        {
            return \Response::json([
                'msg'  =>  'ok'
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  'err'
            ]);
        }

        exit();
    }

    public function editSideContentData(Request $request)
    {
        $id = $request->id;
        $sidebar_type = $request->sidetype;
        $mode  = $request->mode;
        $title  = $request->title;
        $type  = $request->type;
        $number  = $request->number;
        $order =  $request->order;
        $updated_at = date("Y-m-d h:i:s", time());

        $cnt = DB::table('tb_pagecontent_sidebar')->where('id', $id)->doesntExist();
        if(!$cnt){
            $row = DB::table('tb_pagecontent_sidebar')->where('id', $id)->get()->first();
            $old_order = $row ->order_no;
            $change_another = false;
            $biger_than_old = false;
            if ($order > $old_order) {
                $change_another = true;
                $biger_than_old = true;
            }
            else if ($order < $old_order){
                $change_another = true;
                $biger_than_old = false;
            }

            if ($change_another) {
                $query='';
                $query.='Select a.* ';
                $query.='FROM tb_pagecontent_sidebar as a ';
                $query.='WHERE a.sidebar_type = '. $sidebar_type. ' ';
                $query.='AND a.pagetype_id  = '.$type.' ';
                if ($biger_than_old) {
                    $query.='AND a.order_no > '.$old_order.' ';
                    $query.='AND a.order_no <= '.$order.' ';
                }
                else {
                    $query.='AND a.order_no < '.$old_order.' ';
                    $query.='AND a.order_no >= '.$order.' ';
                }

                $fixrows = DB::select($query);
                $fixcount = count($fixrows);
                if ($fixcount > 0) {
                    foreach ($fixrows as $k => $v) {
                        $order_no = $v->order_no;
                        if ($biger_than_old)
                            $new_order = $order_no - 1;
                        else
                            $new_order = $order_no + 1;
                        $tid = $v->id;
                        $cnt = DB::table('tb_pagecontent_sidebar')
                            ->where('sidebar_type', $sidebar_type)
                            ->where('pagetype_id', $type)->doesntExist();
                        if(!$cnt){
                            $sucess =  DB::table('tb_pagecontent_sidebar')
                                ->updateOrInsert(
                                    ['id' => $tid],
                                    [
                                        'order_no' => $new_order,
                                        'updated_at' => $updated_at
                                    ]
                                );
                        }
                    }
                }
            }
            $sucess =  DB::table('tb_pagecontent_sidebar')
                ->updateOrInsert(
                    ['id' => $id],
                    [
                        'sidebar_type' => $sidebar_type,
                        'mode' => $mode,
                        'title' => $title,
                        'type' => $mode,
                        'number' => $number,
                        'order_no' => $order,
                        'pagetype_id' => $type,
                        'updated_at' => $updated_at
                    ]
                );
        }

        if($sucess)
        {
            return \Response::json([
                'msg'  =>  'ok'
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  'err'
            ]);
        }
        exit();
    }

    public function getSideContentPageData(Request $request)//ckd
    {
        $trans  = $request->trans;
        $start  = $request->start;
        $cnt    = $request->cnt;
        $pagetypeid  = $request->pagetypeid;
        $start_from = ($start-1) * $cnt;
        $tstring = $request->tstring;

        if($trans===null || empty($trans))
            die('Have to Setting language');

        $iso = explode('-',$trans);
        $row = DB::table('webwesglobal_lang')
            ->select(DB::raw('name'))
            ->where([
                ['iso', $iso[0]],
                ['status', 'enable'],
                ['g_path', $this->g_path]
            ])->get()->first();

        $langcolumn=', "" as name ';
        if($row!==null)
            $langcolumn = ', p.'.strtolower($row->name).' as name ';

        $query='';
        $query.='Select a.* '.$langcolumn;
        $query.='FROM tb_pagecontent_sidebar as a ';
        $query.='LEFT JOIN wes_pagetype as p ';
        $query.='ON a.pagetype_id = p.id ';
        $query.='WHERE a.sidebar_type = 1 ';
        $query.='AND a.trans = "'.$trans.'" ';
        if ($pagetypeid > 0)
            $query.='AND a.pagetype_id  = '.$pagetypeid.' ';
        if ($tstring !==null && $tstring !=='')
            $query.='AND a.title LIKE "%'.$tstring.'%" ';
        $query.='ORDER BY a.order_no asc LIMIT '.$start_from.', '.$cnt.'';
        $rows = DB::select($query);

        $query1='';
        $query1.='Select a.id ';
        $query1.='FROM tb_pagecontent_sidebar as a ';
        $query1.='LEFT JOIN wes_pagetype as p ';
        $query1.='ON a.pagetype_id = p.id ';
        $query1.='WHERE a.sidebar_type = 1 ';
        $query1.='AND a.trans = "'.$trans.'" ';
        if ($pagetypeid > 0)
            $query1.='AND a.pagetype_id  = '.$pagetypeid.' ';
        if ($tstring !==null && $tstring !=='')
            $query1.='AND a.title LIKE "%'.$tstring.'%" ';
        $query1.='ORDER BY a.order_no asc';
        $cntrows = DB::select($query1);

        $total = count($cntrows);
        $totalpage = ceil($total / $cnt);

        if($rows!==null && count($rows) > 0){
            return \Response::json([
                'msg'   =>  'ok',
                'total'    =>  $total,
                'start'    =>  $start,
                'totalpage'    =>  $totalpage,
                'list' =>  $rows
            ]);
        }
        else{
            return \Response::json([
                'msg'   =>  'err'
            ]);
        }

        exit();
    }

    public function addSideContentPageData(Request $request)
    {
        $id = $request->id;
        $trans  = $request->trans;
        $mode  = $request->mode;
        $title  = $request->title;
        $type  = $request->type;
        $number  = $request->number;
        $order =  $request->order;
        $created_at = date("Y-m-d h:i:s", time());
        $updated_at = date("Y-m-d h:i:s", time());

        $query='';
        $query.='Select a.* ';
        $query.='FROM tb_pagecontent_sidebar as a ';
        $query.='WHERE a.sidebar_type = 1 ';
        $query.='AND a.pagetype_id  = '.$type.' ';
        $query.='AND a.order_no >= '.$order.' ';

        $fixrows = DB::select($query);
        $fixcount = count($fixrows);
        if ($fixcount > 0) {
            foreach ($fixrows as $k => $v) {
                $order_no = $v->order_no;
                $id = $v->id;
                $cnt = DB::table('tb_pagecontent_sidebar')
                    ->where('sidebar_type', 1)
                    ->where('pagetype_id', $type)->doesntExist();
                if(!$cnt){
                    $sucess =  DB::table('tb_pagecontent_sidebar')
                        ->updateOrInsert(
                            ['id' => $id],
                            [
                                'order_no' => $order_no + 1,
                                'updated_at' => $updated_at
                            ]
                        );
                }
            }
        }

        $sucess =  DB::table('tb_pagecontent_sidebar')->insertGetId(
            [
                'sidebar_type' => 1,
                'trans' => $trans,
                'mode' => $mode,
                'title' => $title,
                'type' => $mode,
                'number' => $number,
                'order_no' => $order,
                'pagetype_id' => $type,
                'created_at' => $created_at,
                'updated_at' => $updated_at
            ]
        );

        if($sucess)
        {
            return \Response::json([
                'msg'  =>  'ok'
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  'err'
            ]);
        }

        exit();
    }

    public function deleteSideContentData(Request $request)
    {
        $id = $request->id;
        $lang = $request->lang;
        $updated_at = date("Y-m-d h:i:s", time());
        $msg='ok';
        try{
            $row = DB::table('tb_pagecontent_sidebar')->where('id', $id)->get()->first();
            $sidetype = $row ->sidebar_type;
            $order_no = $row ->order_no;
            $pagetype_id = $row ->pagetype_id;

            $query='';
            $query.='Select a.* ';
            $query.='FROM tb_pagecontent_sidebar as a ';
            $query.='WHERE a.trans = "'.$lang.'" ';
            $query.='AND a.sidebar_type  = '.$sidetype.' ';
            $query.='AND a.pagetype_id  = '.$pagetype_id.' ';
            $query.='AND a.order_no >= '.$order_no.' ';

            $fixrows = DB::select($query);
            $fixcount = count($fixrows);
            if ($fixcount > 0) {
                foreach ($fixrows as $k => $v) {
                    $order_no = $v->order_no;
                    $tid = $v->id;
                    $cnt = DB::table('tb_pagecontent_sidebar')
                        ->where('sidebar_type', $sidetype)
                        ->where('pagetype_id', $pagetype_id)->doesntExist();
                    if(!$cnt){
                        $sucess =  DB::table('tb_pagecontent_sidebar')
                            ->where('trans', $lang)
                            ->updateOrInsert(
                                ['id' => $tid],
                                [
                                    'order_no' => $order_no - 1,
                                    'updated_at' => $updated_at
                                ]
                            );
                    }
                }
            }

            DB::table('tb_pagecontent_sidebar')
                ->delete($id);
        }
        catch(\Exception $e){
            $msg='err';
        }
        return \Response::json([
            'msg'   =>  $msg
        ]);

        exit();
    }

    public function getSideContentCountAccoringPageType(Request $request)
    {
        $lang = $request->lang;
        $sidetype  = $request->sidetype;
        $pagetype = $request->pagetypeid;

        if($lang===null || empty($lang))
            die('Have to Setting language');

        $iso = explode('-',$lang);
        $langrow = DB::table('webwesglobal_lang')
            ->select(DB::raw('name'))
            ->where([
                ['iso', $iso[0]],
                ['status', 'enable'],
                ['g_path', $this->g_path]
            ])->get()->first();

        $query='';
        $query.='Select a.*, p.'.strtolower($langrow->name).' as name ';
        $query.='FROM tb_pagecontent_sidebar as a ';
        $query.='LEFT JOIN wes_pagetype as p ';
        $query.='ON a.pagetype_id = p.id ';
        $query.='WHERE a.trans = "'.$lang.'" ';
        $query.='AND a.sidebar_type = '.$sidetype. ' ';
        if ($pagetype > 0)
            $query.='AND a.pagetype_id  = '.$pagetype.' ';
        $rows = DB::select($query);
        $cnt = count($rows);

        if($cnt!==null){
            return \Response::json([
                'msg'   =>  'ok',
                'cnt'    =>  $cnt,
            ]);
        }
        else{
            return \Response::json([
                'msg'   =>  'err',
            ]);
        }

        exit();
    }

    public function getSideContentDataFromId(Request $request)
    {
        $id  = $request->id;
        $row = DB::table('tb_pagecontent_sidebar')->where('id', $id)->get()->first();


        if($row!==null){
            return \Response::json([
                'msg'   =>  'ok',
                'list' =>  $row
            ]);
        }
        else{
            return \Response::json([
                'msg'   =>  'err',
            ]);
        }

        exit();
    }

    public  function wwpContentRelease(Request $request){
        $trans = $request->post('trans');
        $tabstatus = $request->post('tabstatus');
        $release = $request->post('release');

        $table = "";
        $field = "";
        if($tabstatus == 0 || $tabstatus == 3)
        {
            $table = "wes_pagecontent";
            $field = "is_contentlist";
        }
        else if($tabstatus == 1)
        {
            //add ckd
            $table = "wes_pagetype";
            $field = "is_contenttype";
            return \Response::json([
                'msg'  =>  'ok'
            ]);
            exit();
        }
        else if($tabstatus == 5)
        {
            $table = "tb_pagecontent_sidebar";
            $field = "is_sidebar";
        }

        $row = DB::table($table)
            ->Where([
                ['trans' , $trans],
                ['g_path', $this->g_path]
            ])->get()->first();

        $sucess = -1;
        if($row!==null)
        {
            $sucess = DB::table($table)
                ->Where([
                    ['trans' , $trans],
                    ['g_path', $this->g_path]
                ])
                ->update([$field => $release]);
        }
        else
        {
            $sucess =  DB::table('wesglobalpageregister')->insertGetId(
                [
                    'trans' => $trans,
                    'g_path'=>$this->g_path,
                    $field => $release
                ]
            );
        }
        if($sucess > -1)
        {
            return \Response::json([
                'msg'  =>  'ok'
            ]);
        }
    }

    public function getContentTypeFromLang(Request $request){

        $langname = $request->post('langname');
        if($langname==null || $langname ==''){
            return \Response::json([
                'lists'  =>  array()
            ]);

            exit();
        }

        $basic = $request->post('basic');

        if($basic !== null && $basic !== '')
        {
            $hascolumn = Schema::hasColumn('wes_pagetype','english');
            if($hascolumn)
            {

                $query='select id, '.$langname.', english from wes_pagetype where g_path="'.$this->g_path.'"';
                $rows = DB::select( DB::raw($query) );
                /*
                $rows = DB::table('wes_pagetype')
                    ->select(DB::raw('id, '.$langname.', english'))
                    ->where('g_path', $this->g_path)
                    ->get();*/

                return \Response::json([
                    'lists'  =>  $rows
                ]);

                exit();
            }
        }

        $query='select id, '.$langname.', "" as english from wes_pagetype where g_path="'.$this->g_path.'"';
        $rows = DB::select( DB::raw($query) );
        /*
        $rows = DB::table('wes_pagetype')
            ->select(DB::raw('id, '.$langname.', "" as english'))
            ->where('g_path', $this->g_path)
            ->get();*/

        return \Response::json([
            'lists'  =>  $rows
        ]);
    }
    //---------------     configuration front page part    --------------------------
    private function getPagesValue($idx, $rows){
        $fields = [['f1'=>'index', 'f2'=>'i_date', 'f3'=>'i_user'],
            ['f1'=>'login', 'f2'=>'l_date', 'f3'=>'l_user'],
            ['f1'=>'register', 'f2'=>'r_date', 'f3'=>'r_user'],
            ['f1'=>'construction', 'f2'=>'c_date', 'f3'=>'c_user'],
            ['f1'=>'fourpage', 'f2'=>'f_date', 'f3'=>'f_user'],
            ['f1'=>'threepage', 'f2'=>'t_date', 'f3'=>'t_user'],
            ['f1'=>'comingback', 'f2'=>'b_date', 'f3'=>'b_user'],
        ];
        $info = ['index'=>'', 'date'=>'','name'=>''];
        foreach ($rows as $row){
            $field1 = $fields[$idx]['f1'];
            $field2 = $fields[$idx]['f2'];
            $field3 = $fields[$idx]['f3'];
            if ($row->$field1 != null && $row->$field1 != ''){
                $info = [
                    'index'=>$row->$field1,
                    'date'=>$row->$field2,
                    'name'=>$row->$field3
                ];
                break;
            }
        }
        return $info;
    }
    public function getWWCFrontPageList(Request $request){
        $userid = $request->post('userid');
        $trans= $request->post('trans');

        $infos = array();
        try{
            $rows = DB::table('wes_global_config_frontpage')->where('userid', $userid)->get();
                for ($i = 0; $i < 7; $i++){
                    $info = $this->getPagesValue($i, $rows);
                    array_push($infos, $info);
                }
            return \Response::json([
                "msg" => "ok",
                "lists" => $infos
            ]);
        }catch (Exception $e) {
            return \Response::json([
                'msg'  =>  "err"
            ]);
        }

        exit();
    }

    public function saveWWCFrontPageList(Request $request){
        $user_name = $request->post('user_name');
        $content_list = $request->post('content_list');
        $table_name = 'wes_global_config_frontpage';
        $updated_at = date("Y-m-d h:i:s", time());
        $fields = [['f1'=>'index', 'f2'=>'i_date', 'f3'=>'i_user'],
            ['f1'=>'login', 'f2'=>'l_date', 'f3'=>'l_user'],
            ['f1'=>'register', 'f2'=>'r_date', 'f3'=>'r_user'],
            ['f1'=>'construction', 'f2'=>'c_date', 'f3'=>'c_user'],
            ['f1'=>'fourpage', 'f2'=>'f_date', 'f3'=>'f_user'],
            ['f1'=>'threepage', 'f2'=>'t_date', 'f3'=>'t_user'],
            ['f1'=>'comingback', 'f2'=>'b_date', 'f3'=>'b_user'],
        ];
        $success = false;
        try{
            if ($content_list != null) {
                foreach ($content_list as $content) {
                    $changed = $content['changed'];
                    if ($changed == '1') {
                        $id = $content['id'];
                        $field1 = $fields[$id]['f1'];
                        $field2 = $fields[$id]['f2'];
                        $field3 = $fields[$id]['f3'];
                        $page_title = $content['page_title'];
                        if ($page_title == '')
                        {
                            $rows1 = DB::table($table_name)->get();
                            foreach ($rows1 as $row1) {
                                $tid1 = $row1 ->id;
                                $success =  DB::table($table_name)
                                    ->updateOrInsert(
                                        ['id' => $tid1],
                                        [
                                            $field1 => '',
                                            $field2 => $updated_at,
                                            $field3 => '',
                                        ]
                                    );
                            }
                        }

                        $exist = DB::table($table_name)->where('title', $page_title)->doesntExist();
                        if (!$exist) {
                            $rows = DB::table($table_name)->get();
                            foreach ($rows as $row) {
                                $tid = $row ->id;
                                $dsuccess =  DB::table($table_name)
                                    ->updateOrInsert(
                                        ['id' => $tid],
                                        [
                                            $field1 => '',
                                            $field2 => $updated_at,
                                            $field3 => '',
                                        ]
                                    );
                            }
                            $success =  DB::table($table_name)
                                ->updateOrInsert(
                                    ['title' => $page_title],
                                    [
                                        $field1 => $page_title,
                                        $field2 => $updated_at,
                                        $field3 => $user_name,
                                    ]
                                );
                        }
                    }
                }
            }
            if ($success) {
                return \Response::json([
                    "msg" => 'ok',
                ]);
            }
            else {
                return \Response::json([
                    "msg" => 'nochange',
                ]);
            }
        }catch (Exception $e) {
            return \Response::json([
                'msg'  =>  "err"
            ]);
        }

        exit();
    }

    public function getwwgpConstructionData(Request $request){

        $tranedLang = $request->post('transLang');
        $row =null;
        if($tranedLang===null || $tranedLang === '')
        {
            $row = DB::table('wesglobalpage_construction')
                ->select(DB::raw('trans, background'))
                ->get()->first();
        }else{
            $row = DB::table('wesglobalpage_construction')
                ->select(DB::raw('trans, background'))
                ->Where([
                    ['trans', $tranedLang]
                ])->get()->first();
        }

        $advan='';
        if($row!==null && $row->background!==null && !empty($row->background)){
            $advan=$row->background;
        }
        return \Response::json([
            'msg'  =>  'ok',
            'advan' => $advan
        ]);

        exit();
    }
    public  function wwgpConstructionUpload(Request $request)
    {
        $trans = $request->post('transLang');
        $file_pre = $request->post('advan_file_pre');

        $where=' 1 ';
        if(isset($trans) && !empty($trans))
            $where.=' and trans = "'.$trans.'" ';

        $row = DB::table('wesglobalpage_construction')
            ->whereRaw($where)->get()->first();

        $sucess = -1;
        if($row!=null){
            $sucess = DB::table('wesglobalpage_construction')
                ->Where('id', $row->id)
                ->update(['background' => $file_pre, 'status' => 0]);
        }
        else{
            $sucess =  DB::table('wesglobalpage_construction')->insertGetId(
                [
                    'trans' => $trans,
                    'background' => $file_pre,
                    'status' => 0
                ]
            );
        }

        if($sucess > -1){
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
    public  function wwgpConstructionRelease(Request $request)
    {
        $trans = $request->post('trans');
        $release = $request->post('release');

        $sucess = DB::table('wesglobalpage_construction')
            ->Where('trans', $trans)
            ->update(['status' => $release]);

        if($sucess > -1){
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

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use JoggApp\GoogleTranslate\GoogleTranslateClient;


class HomeController extends BaseController
{

    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    public function getPath(){
        return $this->g_path;
    }

    public function  get_seeder_cont()
    {
        $rows =DB::table('wesfront_lang')
            ->where('iso', 'en')->get();

        $langtxt='['.PHP_EOL;
        $rowcnt=count($rows);
        foreach ($rows as $row){
            if($rowcnt < 2)
                $comma='';
            else
                $comma=',';

            $langtxt.='[';
            $langtxt.='"str_type" => "'.$row->str_type.'"';
            $langtxt.=', "str_key" => "'.$row->str_key.'"';
            $langtxt.=', "str_cont" => "'.$row->str_cont.'"';
            $langtxt.=', "str_link" => "'.$row->str_link.'"';
            $langtxt.=', "iso" => "en"';
            $langtxt.=', "g_path" => "remote"';
            $langtxt.=']'.$comma.PHP_EOL;
            --$rowcnt;
        }
        $langtxt.=']';

        $path = $_SERVER['DOCUMENT_ROOT']."/frontlang.txt";
        $wfile = @fopen($path, "w") or die("Unable to open file!");
        @fwrite($wfile, $langtxt);
        @fclose($wfile);
    }

    public function index(Request $request, $lang=null)
    {
        if(!$this->selectDomainFrontPage()){
            if($this->userCompanyDomainPage())
                return $this->companyUserlogin($request);
            if($this->selectCompanyDomainPage()){
                return $this->companylogin($request);
            }
            return $this->login($request);
        }

        $ciso = $this->compareSavedLang($lang);
        $pagecontents = collect([]);
        $frontContens = $this->FrontPageContent($ciso);
        $pagecontents->put('frtxt', $frontContens);
        $pagecontents->put('ciso', $ciso);
       // $pagecontents->put("IMGURL",  '');
        $temp =  $this->getHeadersData($ciso);

        $items = $temp->all();
        foreach ($items as $key => $value) {
            $pagecontents->put($key, $value);
        }

        $temp1 = $this->sliderData($ciso);
        $items1 = $temp1->all();
        foreach ($items1 as $key => $value) {
            $pagecontents->put($key, $value);
        }

        $temp2 =  $this->getFootData($ciso);
        $items2 = $temp2->all();
        foreach ($items2 as $key => $value) {
            $pagecontents->put($key, $value);
        }
        $pagecontents->put('curMU', 'home');

        $commonctrl = new CommonController;
        $curdevice = $commonctrl->currentDeviceInfo();
        if($curdevice == 'M')
            return view('home_mobile')->with($pagecontents->toArray());
        else
            return view('home')->with($pagecontents->toArray());
    }

    public function sliderData($ciso=null)
    {
        $pagecontents = collect([]);
        $row1 =null;
        $row2 =null;
        $row3 =null;
        $row4 =null;

        $commonctrl = new CommonController;
        $curdevice = $commonctrl->currentDeviceInfo();

        $device = DB::table('wes_page_devices')
            ->select(DB::raw('device'))
            ->whereRaw('device like "%'.$curdevice.'%" and pagename="webs-wesglobal-pages-index-fav"')->get()->first();

        if(isset($device) && !empty($device->device))
           $deviceSql=" and device= '".$device->device."' ";
        else
           $deviceSql="";

        $row1  =   DB::table('webwesglobal_appea')
            ->select(DB::raw('pageslider, sliderstatus'))
            ->whereRaw('trans like "'.$ciso.'%" and is_pageslider=1 and g_path="'.$this->g_path.'" '.$deviceSql)->get()->first();
        $row2  =   DB::table('webwesglobal_appea')
            ->select(DB::raw('teacher'))
            ->whereRaw('trans like "'.$ciso.'%" and is_teacher=1 and g_path="'.$this->g_path.'" '.$deviceSql)->get()->first();
        $row3  =   DB::table('webwesglobal_appea')
            ->select(DB::raw('student'))
            ->whereRaw('trans like "'.$ciso.'%" and is_student=1 and g_path="'.$this->g_path.'" '.$deviceSql)->get()->first();
        $row4  =   DB::table('webwesglobal_appea')
            ->select(DB::raw('background'))
            ->whereRaw('trans like "'.$ciso.'%" and is_background=1 and g_path="'.$this->g_path.'" '.$deviceSql)->get()->first();
        /* center part of main page slider */
        if($row1 !==null && !empty($row1->pageslider))
        {
            $pagecontents->put('pageslider',$row1->pageslider);
        }
        else
            $pagecontents->put('pageslider','');

        if($row1 !==null && !empty($row1->sliderstatus))
        {
            $pagecontents->put('sliderstatus',$row1->sliderstatus);
        }
        else
            $pagecontents->put('sliderstatus','');

        if($row2 !==null && !empty($row2->teacher))
        {
            $pagecontents->put('teacher',$row2->teacher);
        }
        else
            $pagecontents->put('teacher','');

        if($row3 !==null && !empty($row3->student))
        {
            $pagecontents->put('student',$row3->student);
        }
        else
            $pagecontents->put('student','');

        if($row4 !==null && !empty($row4->background))
        {
            $pagecontents->put('pgbk',$row4->background);
        }
        else
            $pagecontents->put('pgbk','');

        /*$pagecontents->put('USER_AGENT', strtolower(isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : 'NO SET'));
        $pagecontents->put('OPERAMINI_PHONE_UA',isset($_SERVER['HTTP_X_OPERAMINI_PHONE_UA']) ? $_SERVER['HTTP_X_OPERAMINI_PHONE_UA'] : 'no set');
        $pagecontents->put('DEVICE_STOCK_UA',isset($_SERVER['HTTP_DEVICE_STOCK_UA']) ? $_SERVER['HTTP_DEVICE_STOCK_UA'] : 'no set');

        if (preg_match('/(tablet|ipad|playbook)|(android(?!.*(mobi|opera mini)))/i', strtolower($_SERVER['HTTP_USER_AGENT']))) {
            $pagecontents->put('USER_AGENT_TWO', 'tablet');
        }
        else
            $pagecontents->put('USER_AGENT_TWO', 'no set');*/

        return $pagecontents;
    }

    private function selectDomainFrontPage(){
        $host = $this->getHost();
        //$host = str_replace('www.', '', $host);

        $row = DB::table('webwesglobal_appea')
            ->select(DB::raw('trans, configgenereal'))
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

        if($front_domain!==null && $front_domain !== ''){
            $pos_domain = str_contains($host, $front_domain);
            $pos_host = str_contains($front_domain, $host);
            if($pos_domain || $pos_host)
                return true;
            else
                return false;
        }

        return false;
    }
    private function selectCompanyDomainPage(){
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

        if($company_domain!==null && $company_domain !== ''){
            $pos_domain = str_contains($host, $company_domain);
            $pos_host = str_contains($company_domain, $host);
            if($pos_domain || $pos_host)
                return true;
            else
                return false;
        }

        return false;
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

    public function login(Request $request, $lang=null)
    {
        $ciso = $this->compareSavedLang($lang);
        $pagecontents = collect([]);
        $frontContens = $this->FrontPageContent($ciso);
        $pagecontents->put('frtxt', $frontContens);
        $pagecontents->put('ciso', $ciso);

        /* getHeadersData 이함수에 있으나 리용하지 않으므로 여기로 끌어냄 {*/
        $rowfavico = DB::table('sitelogoinfo')->where('site_logtype','fav')
            ->where('g_path', $this->g_path)->get()->first();
        $favico = "waaup-logo.ico";
        if($rowfavico!== null)
        {
            $favico = '/images/'.$rowfavico->site_logname;
        }
        $pagecontents->put('favico', $favico);
        /*} getHeadersData 이함수에 있으나 리용하지 않으므로 여기로 끌어냄 */

        $row = null;
        $row = DB::table('site_basic_setting')->get()->first();

        if($row !== null && $row->login !== null && $row->login !== '')
        {
            $logininfo = json_decode($row->login);
            $pagecontents->put('background', $logininfo->backimg);
            $pagecontents->put('logo', $logininfo->logoimg);
            $pagecontents->put('tiptxt', $logininfo->tiptxt);
            $pagecontents->put('fontcolor', $logininfo->fontcolor);
            $pagecontents->put('themecolor', $logininfo->themecolor);
            $pagecontents->put('backcolor', $logininfo->backcolor);
        }
        else
        {
            $pagecontents->put('background', '');
            $pagecontents->put('logo', '');
            $pagecontents->put('tiptxt', '');
            $pagecontents->put('fontcolor', '#ffffff');
            $pagecontents->put('themecolor', '#104f8e');
            $pagecontents->put('backcolor', '#ffffff');
        }

        $pagecontents->put('curMU', 'login');
        //return view('wes.wesGloabalLogin')->with($pagecontents->toArray());
        return view('wes.wesGloabalLoginNew')->with($pagecontents->toArray());
    }

    public function companylogin(Request $request, $lang=null)
    {
        $ciso = $this->compareSavedLang($lang);
        $pagecontents = collect([]);
        $frontContens = $this->FrontPageContent($ciso);
        $pagecontents->put('frtxt', $frontContens);
        $pagecontents->put('ciso', $ciso);

        /* getHeadersData 이함수에 있으나 리용하지 않으므로 여기로 끌어냄 {*/
        $rowfavico = DB::table('sitelogoinfo')->where('site_logtype','fav')
            ->where('g_path', $this->g_path)->get()->first();
        $favico = "waaup-logo.ico";
        if($rowfavico!== null)
        {
            $favico = '/images/'.$rowfavico->site_logname;
        }
        $pagecontents->put('favico', $favico);
        /*} getHeadersData 이함수에 있으나 리용하지 않으므로 여기로 끌어냄 */

        $row = null;
        $row = DB::table('site_basic_setting')->get()->first();

        if($row !== null && $row->login !== null && $row->login !== '')
        {
            $logininfo = json_decode($row->login);
            $pagecontents->put('background', $logininfo->backimg);
            $pagecontents->put('logo', $logininfo->logoimg);
            $pagecontents->put('tiptxt', $logininfo->tiptxt);
            $pagecontents->put('fontcolor', $logininfo->fontcolor);
            $pagecontents->put('themecolor', $logininfo->themecolor);
            $pagecontents->put('backcolor', $logininfo->backcolor);
        }
        else
        {
            $pagecontents->put('background', '');
            $pagecontents->put('logo', '');
            $pagecontents->put('tiptxt', '');
            $pagecontents->put('fontcolor', '#ffffff');
            $pagecontents->put('themecolor', '#104f8e');
            $pagecontents->put('backcolor', '#ffffff');
        }

        $pagecontents->put('curMU', 'login');
        //return view('wes.wesGloabalLogin')->with($pagecontents->toArray());
        return view('company.companyLogin')->with($pagecontents->toArray());
    }

    public function companyUserlogin(Request $request, $lang=null)
    {
        $ciso = $this->compareSavedLang($lang);
        $pagecontents = collect([]);
        $frontContens = $this->FrontPageContent($ciso);
        $pagecontents->put('frtxt', $frontContens);
        $pagecontents->put('ciso', $ciso);

        /* getHeadersData 이함수에 있으나 리용하지 않으므로 여기로 끌어냄 {*/
        $rowfavico = DB::table('sitelogoinfo')->where('site_logtype','fav')
            ->where('g_path', $this->g_path)->get()->first();
        $favico = "waaup-logo.ico";
        if($rowfavico!== null)
        {
            $favico = '/images/'.$rowfavico->site_logname;
        }
        $pagecontents->put('favico', $favico);
        /*} getHeadersData 이함수에 있으나 리용하지 않으므로 여기로 끌어냄 */

        $row = null;
        $row = DB::table('site_basic_setting')->get()->first();

        if($row !== null && $row->login !== null && $row->login !== '')
        {
            $logininfo = json_decode($row->login);
            $pagecontents->put('background', $logininfo->backimg);
            $pagecontents->put('logo', $logininfo->logoimg);
            $pagecontents->put('tiptxt', $logininfo->tiptxt);
            $pagecontents->put('fontcolor', $logininfo->fontcolor);
            $pagecontents->put('themecolor', $logininfo->themecolor);
            $pagecontents->put('backcolor', $logininfo->backcolor);
        }
        else
        {
            $pagecontents->put('background', '');
            $pagecontents->put('logo', '');
            $pagecontents->put('tiptxt', '');
            $pagecontents->put('fontcolor', '#ffffff');
            $pagecontents->put('themecolor', '#104f8e');
            $pagecontents->put('backcolor', '#ffffff');
        }

        $pagecontents->put('curMU', 'login');
        //return view('wes.wesGloabalLogin')->with($pagecontents->toArray());
        return view('company.companyUserLogin')->with($pagecontents->toArray());
    }

    public function addCompanyUser(Request $request, $lang=null)
    {
        $langlist = DB::table('weslangs')->where('status','enable')->get();
        $ciso = $this->compareSavedLang($lang);
        $frontContents = $this->FrontPageContent($ciso);

        $row = DB::table("site_basic_setting")
            ->select(DB::raw("register"))->get()->first();
        $pageinfo = '';
        if ($row !== null) {
            $pageinfo = json_decode($row->register);

        }

        return view('company.companyAddUser', compact('ciso', 'langlist', 'frontContents', 'pageinfo'));
    }

    public function regCompanyUser(Request $request, $lang=null){
        $langlist = DB::table('weslangs')->where('status','enable')->get();
        $ciso = $this->compareSavedLang($lang);
        $frontContents = $this->FrontPageContent($ciso);

        $row = DB::table("site_basic_setting")
            ->select(DB::raw("register"))->get()->first();
        $pageinfo = '';
        if ($row !== null) {
            $pageinfo = json_decode($row->register);
        }
        $mobileCountry = $this->countryMobiles;


        return view('company.companyRegUser', compact('ciso', 'langlist', 'frontContents', 'pageinfo', 'mobileCountry'));
    }

    public static  function CPageTemple(Request $request)
    {
        $pathinfo = $request->getPathInfo();
        $ext = pathinfo($pathinfo, PATHINFO_EXTENSION);
        if($ext!=='')//if existing *.xx
            exit();
            //throw  new \InvalidArgumentException('Invalid order argument');

        $HomeController = new self($request);

        $segments = explode('/', $pathinfo);
        $_iso = $segments[1];
        $valid_ling = self::isCountryISO($_iso);
        $ciso=null;
        if(!$valid_ling)
        {
            $urlstring = $pathinfo;
            $ciso = session()->get('ulang');
        }
        else
        {
            $ciso =  $_iso;
            $urlstring = '';
            $iMax = count($segments);
            for($i=1+1; $i < $iMax; $i++){
                $urlstring .='/'.$segments[$i];
            }
        }

        $ciso = $HomeController->compareSavedLang($ciso);//en, ko, ch..

        $pagecontents = collect([]);
        $pagecontents->put('ciso', $ciso);
        $pagecontents->put('curMU', '');

        $temp =  $HomeController->getHeadersData($ciso);
        $items = $temp->all();
        foreach ($items as $key => $value) {
            $pagecontents->put($key, $value);
        }

        $temp2 =  $HomeController->getFootData($ciso);
        $items2 = $temp2->all();
        foreach ($items2 as $key => $value) {
            $pagecontents->put($key, $value);
        }

        $frontContens = $HomeController->FrontPageContent($ciso);
        $pagecontents->put('frtxt', $frontContens);

        $DashController = new DashboardController($request);
        $favicon = $DashController->getDashboardFavicon();
        $pagecontents->put('favicon', $favicon);

        $g_path = $HomeController->getPath();
        $url = urlencode($urlstring);

        $urlwhere=' and (url like "%'.$url.'%"  or url like "%'.$urlstring.'%")  ';
        $row = DB::table('wes_pagecontent')
            ->whereRaw('trans like "'.$ciso.'%"  and  g_path = "'.$g_path.'"  and status="1" '.$urlwhere.'')->get()->first();
        if($row === null)
        {
            return view('wes.notFoundPage')->with($pagecontents->toArray());
            exit(1);
        }
        if($row->status === 0)
        {
            return view('wes.notFoundPage')->with($pagecontents->toArray());
            exit(1);
        }

        $pagecontents->put('pagename', $row->pagename);
        $pagecontents->put('title', $row->title);
        $pagecontents->put('author', $row->author);

        $lang_row = DB::table('webwesglobal_lang')
            ->where([
                ['iso', $ciso],
                ['status', 'enable'],
                ['g_path', $g_path]
            ])->get()->first();
        if($lang_row!==null){
            $transname = strtolower($lang_row->name);
            $pagetype = DB::table('wes_pagetype')->select([''.$transname.''])
                ->whereRaw('g_path like "'.$g_path.'" and id = '.$row->pagetypeId.'')
                ->get()->first();
            $pagetype = $pagetype->$transname;
        }
        else{
            $pagetype='not know';
        }

        /* get slider equal by pagetypeid */
        $slidesql = 'Select * FROM tb_pagecontent_sidebar ';
        $slidesql.= ' WHERE pagetype_id='.$row->pagetypeId.' and trans like "'.$ciso.'%"  and  g_path like "'.$g_path.'" ORDER BY order_no ASC LIMIT 0, 5';
        $sliderows = DB::select($slidesql);
        $pagecontents->put('sliders', $sliderows);

        $slidecontsql = 'Select * FROM wes_pagecontent ';
        $slidecontsql.= ' WHERE pagetypeId='.$row->pagetypeId.' and trans like "'.$ciso.'%" and  g_path like "'.$g_path.'" ';
        $slidecontsql.= ' and status="1" and  url <> "'.$url.'" ';
        $silderpages = DB::select($slidecontsql);
        $pagecontents->put('silderpages', $silderpages);


        $date = $row->created_at;
        if($row->updated_at != null)
            $date = $row->updated_at;
        $date = explode(" ", $date);


        $pagecontents->put('created_at', $date[0]);
        $pagecontents->put('pagetype', $pagetype);
        $pagecontents->put('auth_state', $row->auth_state);
        $pagecontents->put('type_state', $row->type_state);
        $pagecontents->put('date_state', $row->date_state);
        $pagecontents->put('pagecontent', $row->content);

        return view('wes.wesPageTemple')->with($pagecontents->toArray());
    }

    public  function wesPageTemple(Request $request, $lang=null)
    {
        $pathinfo = $request->getPathInfo();
        $ext = pathinfo($pathinfo, PATHINFO_EXTENSION);
        if($ext!=='')
            throw  new \InvalidArgumentException('Invalid order argument');

        if($lang=='favicon.ico')
            exit(1);

        $ciso = $this->compareSavedLang($lang);
        $pagecontents = collect([]);
        $pagecontents->put('ciso', $ciso);
        $pagecontents->put('curMU', '');

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
        $frontContens = $this->FrontPageContent($ciso);
        $pagecontents->put('frtxt', $frontContens);

        if(isset($ciso) && !empty($ciso))
        $pathinfo = str_replace(['/'.$ciso], '', $pathinfo);

        $url = urlencode($pathinfo);
        $urlwhere=' and url like "%'.$url.'%" ';
        $row = DB::table('wes_pagecontent')
            ->whereRaw('trans like "'.$ciso.'%"  and  g_path like "'.$this->g_path.'"  and status="1" '.$urlwhere.'')->get()->first();
        if($row === null)
        {
            return view('wes.notFoundPage')->with($pagecontents->toArray());
            exit(1);
        }

        $pagecontents->put('title', $row->title);
        $pagecontents->put('author', $row->author);

        $pagetype = DB::table('wes_pagetype')
            ->whereRaw('trans like "'.$ciso.'%"  and  g_path like "'.$this->g_path.'" and id = '.$row->pagetypeId.'')->get()->first();

        /* get slider equal by pagetypeid */
        $slidesql = 'Select * FROM tb_pagecontent_sidebar ';
        $slidesql.= ' WHERE pagetype_id='.$row->pagetypeId.' and trans like "'.$ciso.'%"  and  g_path like "'.$this->g_path.'" ORDER BY order_no ASC LIMIT 0, 5';
        $sliderows = DB::select($slidesql);
        $pagecontents->put('sliders', $sliderows);

        $slidecontsql = 'Select * FROM wes_pagecontent ';
        $slidecontsql.= ' WHERE pagetypeId='.$row->pagetypeId.' and trans like "'.$ciso.'%" and  g_path like "'.$this->g_path.'" ';
        $slidecontsql.= ' and status="1" and  url <> "'.$url.'" ';
        $silderpages = DB::select($slidecontsql);
        $pagecontents->put('silderpages', $silderpages);

        $date = $row->created_at;
        if($row->updated_at != null)
            $date = $row->updated_at;
        $date = explode(" ", $date);
        $pagecontents->put('created_at', $date[0]);
        $pagecontents->put('pagetype', $pagetype->name);
        $pagecontents->put('auth_state', $row->auth_state);
        $pagecontents->put('type_state', $row->type_state);
        $pagecontents->put('date_state', $row->date_state);
        $pagecontents->put('pagecontent', $row->content);

        return view('wes.wesPageTemple')->with($pagecontents->toArray());
    }

    public function notFoundPage(Request $request, $lang=null)
    {
        $pathinfo = $request->getPathInfo();
        $ext = pathinfo($pathinfo, PATHINFO_EXTENSION);
        if($ext!=='')
            throw  new \InvalidArgumentException('Invalid order argument  '.$ext);

        if($lang=='favicon.ico')
            throw  new \InvalidArgumentException('Invalid order argument  '.$lang);

        $ciso = $this->compareSavedLang($lang);
        $pagecontents = collect([]);
        $pagecontents->put('ciso', $ciso);
        $pagecontents->put('curMU', '');

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
        //$frontContens = $this->FrontPageContent($ciso);
        //$pagecontents->put('frtxt', $frontContens);
        return view('wes.notFoundPage')->with($pagecontents->toArray());
    }

}

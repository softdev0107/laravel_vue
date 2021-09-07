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

class DashWesChinaController extends BaseController
{
    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    private $iconPath = '/uploads/images/wesimg/icons/';
    private $logPath = '/uploads/images/wesimg/logo/';

    public function getWebsWesChinaUpload(Request $request)
    {
        $tranedLang = $request->post('tedLang');
        $field = $request->post('wwgfield');
        $device = $request->post('device');
        $row=null;
        if($field==='head')
        {

            $where = 'g_path = "'.$this->g_path.'"';
            if($device!==null && $device !== '')
            {
                $where.=' and device = "'.$device.'"';
            }
            if($tranedLang!==null && $tranedLang !== '')
            {
                $where.=' and trans = "'.$tranedLang.'"';
            }

            $row = DB::table('webweschina_appea')
                ->select(DB::raw('device, trans, head'))
                ->whereRaw($where)->get()->first();

        }
        else if($field==='foot')
        {
            $where = 'g_path = "'.$this->g_path.'"';
            if($device!==null && $device !== '')
            {
                $where.=' and device = "'.$device.'"';
            }
            if($tranedLang!==null && $tranedLang !== '')
            {
                $where.=' and trans = "'.$tranedLang.'"';
            }

            $row = DB::table('webweschina_appea')
                ->select(DB::raw('device, trans, foot'))
                ->whereRaw($where)->get()->first();

        }
        $pagecontents = collect([]);
        if ($row !== null && !empty($row))
        {
            if($field==='head')
            {
                $head = json_decode($row->head);
                if (isset($head)) {
                    $pagecontents->put('toplocation', $head->toplocation);
                    $pagecontents->put('topheader', $head->topheader);
                    $pagecontents->put('toolcalc', $head->toolcalc);
                    $pagecontents->put('toolbar', $head->toolbar);
                    $pagecontents->put('modules', $head->modules);
                } else {
                    $pagecontents='';
                }
            }
            else if($field==='foot') {
                $foot = json_decode($row->foot);
                if (isset($foot))
                {
                    $pagecontents->put('barleft', $foot->barleft);//css
                    $pagecontents->put('barleftfontcolor', $foot->barleftfontcolor);
                    $pagecontents->put('barleftfontsize', $foot->barleftfontsize);
                    $pagecontents->put('barleftfontcont', trim($foot->barleftfontcont));
                    $pagecontents->put('barleftimg', $foot->barleftimg == null ? '' : $foot->barleftimg);
                    $pagecontents->put('barleftfontlink', empty($foot->barleftfontlink) ? '#' : $foot->barleftfontlink);

                    $pagecontents->put('barcent', $foot->barcent);//css
                    $pagecontents->put('barcentfontcolor', $foot->barcentfontcolor);
                    $pagecontents->put('barcentfontsize', $foot->barcentfontsize);
                    $pagecontents->put('barcentfontcont', trim($foot->barcentfontcont));
                    $pagecontents->put('barcentimg', $foot->barcentimg == null ? '' : $foot->barcentimg);
                    $pagecontents->put('barcentfontlink', empty($foot->barcentfontlink) ? '#' : $foot->barcentfontlink);

                    $pagecontents->put('edit0', trim($foot->edit0));
                    $pagecontents->put('edit1', trim($foot->edit1));
                    $pagecontents->put('edit2', trim($foot->edit2));

                    $pagecontents->put('barright', $foot->barright);//css
                    $pagecontents->put('barrightfontcolor', $foot->barrightfontcolor);
                    $pagecontents->put('barrightfontsize', $foot->barrightfontsize);
                    $pagecontents->put('barrightfontcont', trim($foot->barrightfontcont));
                    $pagecontents->put('barrightimg', $foot->barrightimg == null ? '' : $foot->barrightimg);
                    $pagecontents->put('barrightfontlink', empty($foot->barrightfontlink) ? '#' : $foot->barrightfontlink);
                } else {
                    $pagecontents='';
                }
            }
        }
        else{
            $pagecontents='';
        }
        return \Response::json([
            'lists'  =>  $pagecontents
        ]);
        exit();
    }

    public function websChinaFrontPageRelease(Request $request)
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
                    $state_sql = "is_pageslider = 0";
                    break;
                case 1:
                    $state_sql = "is_teacher = 0";
                    break;
                case 2:
                    $state_sql = "is_student = 0";
                    break;
                case 3:
                    $state_sql = "is_background = 0";
                    break;
            }
        }
        if($part == "mainmenu"){
            $state_sql = "is_mainmenu = 0";
        }
        if($part == "footmenu"){
            $state_sql = "is_footmenu = 0";
        }
        if($part == "HeadFootBar"){
            switch ($tabstatus)
            {
                case 'head':
                    $state_sql = "is_head = 0";
                    break;
                case 'foot':
                    $state_sql = "is_foot = 0";
                    break;
            }
        }
        if($part == "configgeneral"){
            $state_sql = "is_configgenereal = 0";
        }
        if($part == "socialsetting"){
            $state_sql = "is_socialsetting = 0";
        }

        try{
            if($device!==null && $device !== '' && is_array($deviceArray)){
                for($i=0; $i < count($deviceArray); $i++){
                    $where='';
                    $where.=' and device = "'.$deviceArray[$i].'"';
                    $dbstate = DB::statement("UPDATE webweschina_appea SET ".$state_sql." where trans ='".$trans."'".$where);
                }
            }
            else{
                $where='';
                if($device!==null && $device !== ''){
                    $where.=' and device = "'.$device.'"';
                }
                $dbstate = DB::statement("UPDATE webweschina_appea SET ".$state_sql." where trans ='".$trans."'".$where);
            }
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

    public  function saveWebsWesChinaUpload(Request $request){
        $wwgafrm = $request->post('wwgafrm');
        $tranedLang = $request->post('tranedLang');
        $device = $request->post('device');

        reset($_FILES);
        $temp = current($_FILES);

        if($wwgafrm=='head')
        {
            $wgtp_location_val = $request->post('wgtp_location_val');
            $wgtp_header_val=$request->post('wgtp_header_val');
            $wwga_calendar_val = $request->post('wwga_calendar_val');
            $wwga_toobar_val=$request->post('wwga_toobar_val');
            $wwga_module_val=$request->post('wwga_modulelang_val');

            try {

                $where = 'g_path = "'.$this->g_path.'"';
                if($device!==null && $device !== '')
                {
                    $where.=' and device = "'.$device.'"';
                }
                if($tranedLang!==null && $tranedLang !== '')
                {
                    $where.=' and trans = "'.$tranedLang.'"';
                }

                $row = DB::table('webweschina_appea')
                    ->whereRaw($where)->get()->first();



                //$mid = DB::table('webweschina_appea')->max('id');
                $mid = ($row === null) ? 0 : $row->id;
                $head=array(
                    'toplocation' =>$wgtp_location_val,
                    'topheader' =>$wgtp_header_val,
                    'toolcalc'=>$wwga_calendar_val,
                    'toolbar'=>$wwga_toobar_val,
                    'modules'=>$wwga_module_val
                );
                $head = json_encode($head);
                if($mid!==null && $mid > 0)
                {
                    $sucess =  DB::table('webweschina_appea')
                        ->Where('id', $mid)
                        ->update(['head' => $head, 'is_head' => 1]);
                }
                else
                {
                    $sucess =  DB::table('webweschina_appea')->insertGetId(
                        [
                            'device' => $device,
                            'trans' => $tranedLang,
                            'head' => $head,
                            'is_head' => 1,
                            'g_path'=>$this->g_path
                        ]
                    );
                }
                return \Response::json([
                    'msg'  =>  'ok'
                ]);
            }
            catch (\Exception $e)
            {
                return \Response::json([
                    'msg' => $e
                ]);
            }
        }
        else  if($wwgafrm=='foot')
        {
            $wwga_footbarleft = $request->post('wwga_footbarleft');
            $wwga_footbarleftcolorpicker_val=$request->post('wwga_footbarleftcolorpicker_val');
            $wwga_footbarleft_fontsize_s=$request->post('wwga_footbarleft_fontsize_s');
            $wwga_footbarleft_fontcont=trim($request->post('wwga_footbarleft_fontcont'));
            $wwga_footbarleft_imglink=trim($request->post('wwga_footbarleft_imglink'));
            $wwga_footbarleft_upload_preview_temp=$request->post('wwga_footbarleft_upload_preview_temp');

            $wwga_footbar_cent=trim($request->post('wwga_footbar_cent'));
            $wwga_footbarcentcolorpicker_val=$request->post('wwga_footbarcentcolorpicker_val');
            $wwga_footbarcent_fontsize_s=$request->post('wwga_footbarcent_fontsize_s');
            $wwga_footbarcent_fontcont=trim($request->post('wwga_footbarcent_fontcont'));
            $wwga_footbarcent_imglink=trim($request->post('wwga_footbarcent_imglink'));
            $wwga_footbarcent_upload_preview_temp=$request->post('wwga_footbarcent_upload_preview_temp');

            $wwga_footbarright=trim($request->post('wwga_footbarright'));
            $wwga_footbarrightcolorpicker_val=$request->post('wwga_footbarrightcolorpicker_val');
            $wwga_footbarright_fontsize_s=$request->post('wwga_footbarright_fontsize_s');
            $wwga_footbarright_fontcont=trim($request->post('wwga_footbarright_fontcont'));
            $wwga_footbarright_imglink=trim($request->post('wwga_footbarright_imglink'));
            $wwga_footbarright_upload_preview_temp=$request->post('wwga_footbarright_upload_preview_temp');

            $editor0 = $request->post('editcont0');
            $editor1 = $request->post('editcont1');
            $editor2 = $request->post('editcont2');

            if($editor0!=null && $editor0 != '')
                $editor0 = htmlentities($editor0);//html_entity_decode
            if($editor1!=null && $editor1 != '')
                $editor1 = htmlentities($editor1);//html_entity_decode
            if($editor2!=null && $editor2 != '')
                $editor2 = htmlentities($editor2);//html_entity_decode

            $wwga_footbarleft_upload = $request->file('wwga_footbarleft_upload');
            $wwga_footbarcent_upload = $request->file('wwga_footbarcent_upload');
            $wwga_footbarright_upload = $request->file('wwga_footbarright_upload');
            try {
                if(!file_exists($_FILES['wwga_footbarleft_upload']['tmp_name'])){

                    if(!empty($wwga_footbarleft_upload_preview_temp))
                        $filename0=$wwga_footbarleft_upload_preview_temp;
                    else
                        $filename0='';
                }
                else
                {
                    $destinationPath0 = 'uploads/images/wesimg/';
                    $filename0 = time().'-'.$wwga_footbarleft_upload->getClientOriginalName();

                    $wwga_footbarleft_upload->move(public_path().'/'.$destinationPath0, $filename0);
                    if(!empty($wwga_footbarleft_upload_preview_temp))
                        @unlink(public_path().'/'.$destinationPath0.$wwga_footbarleft_upload_preview_temp);
                }

                if(!file_exists($_FILES['wwga_footbarcent_upload']['tmp_name'])){

                    if(!empty($wwga_footbarcent_upload_preview_temp))
                        $filename1=$wwga_footbarcent_upload_preview_temp;
                    else
                        $filename1='';
                }
                else{
                    $destinationPath1 = 'uploads/images/wesimg/';
                    $filename1 = time().'-'.$wwga_footbarcent_upload->getClientOriginalName();

                    $wwga_footbarcent_upload->move(public_path().'/'.$destinationPath1, $filename1);
                    if(!empty($wwga_footbarcent_upload_preview_temp))
                        @unlink(public_path().'/'.$destinationPath1.$wwga_footbarcent_upload_preview_temp);

                }

                if(!file_exists($_FILES['wwga_footbarright_upload']['tmp_name'])){
                    if(!empty($wwga_footbarright_upload_preview_temp))
                        $filename2=$wwga_footbarright_upload_preview_temp;
                    else
                        $filename2='';
                }
                else{
                    $destinationPath2 = 'uploads/images/wesimg/';
                    $filename2 = time().'-'.$wwga_footbarright_upload->getClientOriginalName();

                    $wwga_footbarright_upload->move(public_path().'/'.$destinationPath2, $filename2);
                    if(!empty($wwga_footbarright_upload_preview_temp))
                        @unlink(public_path().'/'.$destinationPath2.$wwga_footbarright_upload_preview_temp);
                }

                $where = 'g_path = "'.$this->g_path.'"';
                if($device!==null && $device !== '')
                {
                    $where.=' and device = "'.$device.'"';
                }
                if($tranedLang!==null && $tranedLang !== '')
                {
                    $where.=' and trans = "'.$tranedLang.'"';
                }

                $row = DB::table('webweschina_appea')
                    ->whereRaw($where)->get()->first();

                $mid = ($row === null) ? 0 : $row->id;
                $foot=array(
                    'barleft' =>$wwga_footbarleft,
                    'barleftfontcolor' =>$wwga_footbarleftcolorpicker_val,
                    'barleftfontsize' =>$wwga_footbarleft_fontsize_s,
                    'barleftfontcont'=>$wwga_footbarleft_fontcont,
                    'barleftimg'=>$filename0,
                    'barleftfontlink'=>$wwga_footbarleft_imglink,
                    'edit0' =>$editor0,

                    'barcent'=>$wwga_footbar_cent,
                    'barcentfontcolor' =>$wwga_footbarcentcolorpicker_val,
                    'barcentfontsize' =>$wwga_footbarcent_fontsize_s,
                    'barcentfontcont'=>$wwga_footbarcent_fontcont,
                    'barcentimg'=>$filename1,
                    'barcentfontlink'=>$wwga_footbarcent_imglink,
                    'edit1' =>$editor1,

                    'barright'=>$wwga_footbarright,
                    'barrightfontcolor'=>$wwga_footbarrightcolorpicker_val,
                    'barrightfontsize'=>$wwga_footbarright_fontsize_s,
                    'barrightfontcont'=>$wwga_footbarright_fontcont,
                    'barrightimg'=>$filename2,
                    'barrightfontlink'=>$wwga_footbarright_imglink,
                    'edit2' =>$editor2,
                );

                $foot = json_encode($foot);
                if($mid!==null && $mid > 0)
                {
                    $sucess =  DB::table('webweschina_appea')
                        ->Where('id', $mid)
                        ->update(['foot' => $foot, 'is_foot' => 1]);
                }
                else
                {
                    $sucess =  DB::table('webweschina_appea')->insertGetId(
                        [
                            'device' => $device,
                            'trans' => $tranedLang,
                            'foot' => $foot,
                            'is_foot' => 1,
                            'g_path'=>$this->g_path
                        ]
                    );
                }
                return \Response::json([
                    'msg'  =>  'ok'
                ]);
            }
            catch (\Exception $e)
            {
                return \Response::json([
                    'msg' => $e
                ]);
            }
        }
        exit();
    }

    public  function updateWWChinaBarCenterImg(Request $request){
        reset($_FILES);
        $temp = current($_FILES);
        if (is_uploaded_file($temp['tmp_name'])) {
            if (preg_match("/([^\w\s\d\-_~,;:\[\]\(\).])|([\.]{2,})/", $temp['name'])) {
                //header("HTTP/1.1 400 Invalid file name,Bad request");
                return \Response::json([
                    'msg'=>'HTTP/1.1 400 Invalid file name,Bad request',
                    'filename' =>'',
                    'location' => ''
                ]);
            }

            // Validating File extensions
            if (! in_array(strtolower(pathinfo($temp['name'], PATHINFO_EXTENSION)), array(
                "gif",
                "jpg",
                "jpeg",
                "png"
            ))) {
                // header("HTTP/1.1 400 Not an Image");
                return \Response::json([
                    'msg'=>'HTTP/1.1 400 Not an Image',
                    'filename' =>'',
                    'location' => ''
                ]);
            }

            $destinationPath = 'uploads/images/wesimg/';
            $fileName =  time().'-'.$temp['name'];
            $pathName = $destinationPath.$fileName;

            /*  if($this->g_path!=="local")
              {
                  $this->filesystem->write('/'.$pathName, file_get_contents($temp['tmp_name']));//ckd
              }
              else*/
            {
                move_uploaded_file($temp['tmp_name'], $pathName);
            }

            // Return JSON response with the uploaded file path.
            return json_encode(array(
                'msg'=>'ok',
                'filename' =>$fileName,
                'location' => $pathName
            ));
        }

        return \Response::json([
            'msg'=>'Error can not know',
            'filename' =>'',
            'location' => ''
        ]);

        exit();
    }


}

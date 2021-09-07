<?php

namespace App\Http\Controllers;

use Faker\Guesser\Name;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use App\Models\UserModel;
use JoggApp\GoogleTranslate\GoogleTranslateClient;
use PhpParser\Node\Expr\Array_;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class DashboardWebsController extends BaseController
{
    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    public function renameHostDirectory(Request $request){
        $path = $request->post('path');
        $orgdirname = $request->post('orgname');
        $newdirname = $request->post('newname');
        $result = Storage::disk('local')->move($path.$orgdirname, $path.$newdirname);
        $ret1 = Storage::disk('thumbfolder')->move($path.$orgdirname, $path.$newdirname);
        if($result && $ret1)
        {
            return \Response::json([
                'msg'   =>  'ok'
            ]);
        }
        else
        {
            return \Response::json([
                'msg'   =>  'err'
            ]);
        }
        exit();
    }

    public function makeHostDirectory(Request $request){
        $path = $request->post('path');
        $foldername = $request->post('foldername');
        $result = Storage::disk('local')->makeDirectory($path.$foldername);
        $thumbfolder = Storage::disk('thumbfolder')->makeDirectory($path.$foldername);
       if($result && $thumbfolder)
       {
           return \Response::json([
               'msg'   =>  'ok'
           ]);
       }
       else
       {
           return \Response::json([
               'msg'   =>  'err'
           ]);
       }
       exit();
    }

    public function searchAllHostObj(Request $request){
        $path = $request->post('path');
        $scont = $request->post('scont');
        $param = $request->post('param');

        $dirs = Storage::disk('local')->allDirectories($path);
        $rdirs=array();
        if($param == 1)
            array_push($rdirs,"[..]");
        if(count($dirs) > 0)
        {
            foreach ($dirs as $dir)
            {
                $dirname = pathinfo($dir, PATHINFO_DIRNAME);
                $basename = pathinfo($dir, PATHINFO_BASENAME);
                if(strpos($basename, $scont) !== false) {
                    $a="/".$dirname."&&".$basename;
                    array_push($rdirs, $a);
                }
            }
        }

        $files = Storage::disk('local')->allFiles($path);
        $rfiles=array();
        $thumbs = array();
        if(count($files) > 0)
        {
            foreach ($files as $file)
            {
                $dirname = pathinfo($file, PATHINFO_DIRNAME);
                $basename = pathinfo($file, PATHINFO_BASENAME);
                if(strpos($basename, $scont) !== false){
                    $a="/".$dirname."&&".$basename;
                    array_push($rfiles, $a);
                }
                $type = $this->searchFileType($file);
                array_push($thumbs, $type);
            }
        }

        return \Response::json([
            'msg' => 'ok',
            'dirs' => $rdirs,
            'files'=> $rfiles,
            'thumb'=> $thumbs
        ]);
    }

    public function getHostDirectories(Request $request){
        $topDir = array();
        $path = $request->post('path');
        $param = $request->post('param');
        $arrDir = explode("/", $path);
        $dirs = Storage::disk('local')->directories($path);
        if(count($arrDir) > 2 && intval($param) === 1){
            array_push($topDir,"[..]");
            for($i = 0; $i < count($dirs); $i++){
                array_push($topDir,$dirs[$i]);
            }
            $dirs = $topDir;
        }
        $files = Storage::disk('local')->files($path);
        $thumbs = array();
        $fileUrl = array();
        foreach($files as $file){
            $type = $this->searchFileType($file);
            array_push($thumbs, $type);
            $url = Storage::url($file);
            array_push($fileUrl, $url);
        }
            return \Response::json([
                'dirs' => $dirs,
                'files'=> $files,
                'thumb'=> $thumbs,
                'fileUrl'=>$fileUrl
            ]);

        exit(1);
    }

    private function setCopyfoldername($despath, $srcpath){
        $path = rtrim($despath, '/');
        $is_sub = false;
        if($path != $srcpath){
            $despath = $path.$srcpath;
            $is_sub = true;
        }
        $exists  = Storage::disk('local')->exists($despath);
        if($exists) {
            $folder = $srcpath."-Copy";
            if($is_sub) {
                $folder = $path.$srcpath."-Copy";
            }
            $despath = $folder.'/';
            return $this->setCopyfoldername($despath, $folder);
        }
        else
            return $despath;
    }
    private function setCopyfilename($path, $file, $ext){
        $exists  = Storage::disk('local')->exists($path.$file);
        $fname = $file;
        if($exists) {
            $fname = str_replace('.'.$ext, '', $file);
            $fname = $fname."-Copy".".".$ext;
            return $this->setCopyfilename($path, $fname, $ext);
        }
        else
            return $fname;
    }

    public function changeHostObj(Request $request){
        $srccmd = $request->post('srccmd');
        $srcpath = $request->post('srcpath');
        $descmd = $request->post('descmd');
        $despath = $request->post('despath');

        $ret=false;
        $ret1 = true;
        $msg="ok";
        try{
            if($srccmd==='copy' && $descmd==='paste')
            {
                $ext = pathinfo($srcpath, PATHINFO_EXTENSION);
                if($ext!=='')//it is file
                {
                    $filename = pathinfo($srcpath, PATHINFO_FILENAME);
                    $filename = $filename.".".$ext;

                    $despath = rtrim($despath, '/');
                    $despath = $despath.'/';

                    $filename = $this->setCopyfilename($despath, $filename, $ext);
                    $ret = Storage::disk('local')->copy($srcpath, $despath.$filename);

                    $filetype = $this->searchFileType($filename);
                    if($filetype[1] == "image") {
                        $ret1 = Storage::disk('thumbfolder')->copy($srcpath, $despath.$filename);
                    }
                }
                else // it is dir.
                {
                    $dirname = pathinfo($srcpath, PATHINFO_DIRNAME);
                    $despath = rtrim($despath, '/');
                    $despath = $despath.'/';

                    $folder = $this->setCopyfoldername($despath, $srcpath);
                    $dirs = Storage::disk('local')->allDirectories($srcpath);

                    if(count($dirs) > 0){
                        foreach ($dirs as $dir)
                        {
                            $sdirname = ltrim($srcpath,"/");
                            $tdir=str_replace($sdirname,"",$dir);
                            $tdir = $folder.$tdir;
                            $ret = Storage::disk('local')->makeDirectory($tdir);
                            $ret1 = Storage::disk('thumbfolder')->makeDirectory($tdir);
                        }
                    }
                    else
                    {
                        $tpath=str_replace($dirname,"", $folder);
                        $tpath = ltrim($tpath, '/');
                        $ret = Storage::disk('local')->makeDirectory($tpath);
                        $ret1 = Storage::disk('thumbfolder')->makeDirectory($tpath);
                    }
                    $files = Storage::disk('local')->allFiles($srcpath);
                    foreach ($files as $file){
                        $sdirname = ltrim($srcpath,"/");
                        $tfile=str_replace($sdirname,"",$file);
                        $tfile = $folder.$tfile;
                        $ret = Storage::disk('local')->copy("/".$file, $tfile);

                        $filetype = $this->searchFileType($tfile);
                        if($filetype[1] == "image") {
                            $ret1 = Storage::disk('thumbfolder')->copy("/".$file, $tfile);
                        }
                    }
                }
            }
            else if($srccmd==='cut' && $descmd==='paste')
            {

                $ext = pathinfo($srcpath, PATHINFO_EXTENSION);
                if($ext!=='')//it is file
                {
                    $filename = pathinfo($srcpath, PATHINFO_FILENAME);
                    $filename = $filename.".".$ext;

                    $despath = rtrim($despath, '/');
                    $despath = $despath.'/';

                    $filename = $this->setCopyfilename($despath, $filename, $ext);
                    $ret = Storage::disk('local')->move($srcpath, $despath.$filename);

                    $filetype = $this->searchFileType($filename);
                    if($filetype[1] == "image") {
                        $ret1 = Storage::disk('thumbfolder')->copy($srcpath, $despath.$filename);
                    }
                }
                else // it is dir.
                {
                    $dirname = pathinfo($srcpath, PATHINFO_DIRNAME);
                    $despath = rtrim($despath, '/');
                    $despath = $despath.'/';

                    $folder = $this->setCopyfoldername($despath, $srcpath);
                    $dirs = Storage::disk('local')->allDirectories($srcpath);

                    if(count($dirs) > 0){
                        foreach ($dirs as $dir)
                        {
                            $sdirname = ltrim($srcpath,"/");
                            $tdir=str_replace($sdirname,"",$dir);
                            $tdir = $folder.$tdir;
                            $ret = Storage::disk('local')->makeDirectory($tdir);
                            $ret1 = Storage::disk('thumbfolder')->makeDirectory($tdir);
                        }
                    }
                    else
                    {
                        $tmppath=str_replace($dirname,"", $folder);
                        $tmppath = ltrim($tmppath, '/');
                        $ret = Storage::disk('local')->makeDirectory($tmppath);
                        $ret1 = Storage::disk('thumbfolder')->makeDirectory($tmppath);
                    }

                    $files = Storage::disk('local')->allFiles($srcpath);
                    foreach ($files as $file){
                        $sdirname = ltrim($srcpath,"/");
                        $tfile=str_replace($sdirname,"",$file);
                        $tfile = $folder.$tfile;
                        $ret = Storage::disk('local')->copy("/".$file, $tfile);

                        $filetype = $this->searchFileType($tfile);
                        if($filetype[1] == "image") {
                            $ret1 = Storage::disk('thumbfolder')->copy("/".$file, $tfile);
                        }
                    }

                    $ret = Storage::disk('local')->deleteDirectory($srcpath);
                    $ret1 = Storage::disk('thumbfolder')->deleteDirectory($srcpath);
                }

            }

        }
        catch (FileException $exception){
            $msg="err";
        }

        if(!$ret || !$ret1)
            $msg='err';

        return \Response::json([
            'msg' => $msg
        ]);

        exit();
    }

    public function deleteHostObj(Request $request){
        $fpath = $request->post('fpath');

        $ext = pathinfo($fpath, PATHINFO_EXTENSION);

        if($ext!=='') {
            $ret = Storage::disk('local')->delete($fpath);
            $ret1 = Storage::disk('thumbfolder')->delete($fpath);
        }
        else {
            $ret = Storage::disk('local')->deleteDirectory($fpath);
            $ret1 = Storage::disk('thumbfolder')->deleteDirectory($fpath);
        }

        $msg='ok';

        if(!$ret)
            $msg='err';

        return \Response::json([
            'msg' => $msg
        ]);

        exit();
    }

    public function deleteAllHostObj(Request $request){
        $objlist = $request->post('objlist');
        $ret1 = true;
        foreach ($objlist as $item)
        {
            $ext = pathinfo($item, PATHINFO_EXTENSION);
            try
            {
                if($ext!=='') {
                    $ret = Storage::disk('local')->delete($item);
                    $filetype = $this->searchFileType($item);
                    if($filetype[1] == "image")
                        $ret1 = Storage::disk('thumbfolder')->delete($item);
                    //if($filetype[1] == "video")
                    //    $ret1 = Storage::disk('thumbfolder')->delete($item.".png");

                }
                else {
                    $ret = Storage::disk('local')->deleteDirectory($item);
                    $ret1 = Storage::disk('thumbfolder')->deleteDirectory($item);
                }
            }
            catch (FileException $exception){

            }
        }

        $msg='ok';

        if(!$ret || !$ret1)
            $msg='err';

        return \Response::json([
            'msg' => $msg
        ]);

        exit();
    }

    private function searchFileType($file){
        $exes = explode(".", $file);
        $thumbfile = "";
        $res = array();
        $exe = $exes[count($exes) - 1];
        $filename = $exes[0];
        for($k = 1; $k < count($exes) - 1; $k++){
            $filename .=  ".".$exes[$k];
        }
        switch ($exe)
        {
            case "pdf":
                $thumbfile = "/thumbnail/document/Pdf.png";
                $filetype = "doc";
                break;
            case "doc":
                $thumbfile = "/thumbnail/document/WordLogo.png";
                $filetype = "doc";
                break;
            case "docx":
                $thumbfile = "/thumbnail/document/WordLogo.png";
                $filetype = "doc";
                break;
            case "xls":
                $thumbfile = "/thumbnail/document/ExcelLogo.png";
                $filetype = "doc";
                break;
            case "xlsx":
                $thumbfile = "/thumbnail/document/ExcelLogo.png";
                $filetype = "doc";
                break;
            case "ppt":
                $thumbfile = "/thumbnail/document/PowerPnt.png";
                $filetype = "doc";
                break;
            case "pptx":
                $thumbfile = "/thumbnail/document/PowerPnt.png";
                $filetype = "doc";
                break;
            case "mdb":
                $thumbfile = "/thumbnail/document/AccessLogo.png";
                $filetype = "doc";
                break;
            case "accdb":
                $thumbfile = "/thumbnail/document/AccessLogo.png";
                $filetype = "doc";
                break;
            case "gzip":
                $thumbfile = "/thumbnail/document/Zip.png";
                $filetype = "doc";
                break;
            case "zip":
                $thumbfile = "/thumbnail/document/Zip.png";
                $filetype = "doc";
                break;
            case "rar":
                $thumbfile = "/thumbnail/document/Zip.png";
                $filetype = "doc";
                break;
            case "htm":
                $thumbfile = "/thumbnail/document/Internet.png";
                $filetype = "doc";
                break;
            case "html":
                $thumbfile = "/thumbnail/document/Internet.png";
                $filetype = "doc";
                break;
            case "mp3":
                $thumbfile = "/thumbnail/document/Audio.png";
                $filetype = "doc";
                break;
            case "wav":
                $thumbfile = "/thumbnail/document/Audio.png";
                $filetype = "doc";
                break;
            case "m4a":
                $thumbfile = "/thumbnail/document/Audio.png";
                $filetype = "doc";
                break;
            case "jpg":
                $thumbfile = "/thumbnail/folder/".$filename.".jpg";
                $filetype = "image";
                break;
            case "jpeg":
                $thumbfile = "/thumbnail/folder/".$filename.".jpeg";
                $filetype = "image";
                break;
            case "png":
                $thumbfile = "/thumbnail/folder/".$filename.".png";
                $filetype = "image";
                break;
            case "gif":
                $thumbfile = "/thumbnail/folder/".$filename.".gif";
                $filetype = "image";
                break;
            case "mp4":
                //$thumbfile = "/thumbnail/folder/".$file.".png";
                //$filetype = "video";
                $thumbfile = "/thumbnail/document/Video.png";
                $filetype = "doc";
                break;
            case "avi":
                //$thumbfile = "/thumbnail/folder/".$file.".png";
                //$filetype = "video";
                $thumbfile = "/thumbnail/document/Video.png";
                $filetype = "doc";
                break;
            default:
                $thumbfile = "/thumbnail/document/File.png";
                $filetype = "doc";
                break;
        }

        array_push($res, $thumbfile);
        array_push($res, $filetype);

        return $res;
    }

    function resize_crop_image($max_width, $max_height, $source_file, $dst_dir, $quality = 80){
        $imgsize = getimagesize($source_file);
        $width = $imgsize[0];
        $height = $imgsize[1];
        $mime = $imgsize['mime'];

        switch($mime){
            case 'image/gif':
                $image_create = "imagecreatefromgif";
                break;

            case 'image/png':
                $image_create = "imagecreatefrompng";
                break;

            case 'image/jpeg':
                $image_create = "imagecreatefromjpeg";
                break;
            case 'image/jpg':
                $image_create = "imagecreatefromjpeg";
                break;

            default:
                return false;
                break;
        }

        $dst_img = imagecreatetruecolor($max_width, $max_height);
        $src_img = $image_create($source_file);

        $width_new = $height * $max_width / $max_height;
        $height_new = $width * $max_height / $max_width;
        //if the new width is greater than the actual width of the image, then the height is too large and the rest cut off, or vice versa
        if($width_new > $width){
            //cut point by height
            $h_point = (($height - $height_new) / 2);
            //copy image
            imagecopyresampled($dst_img, $src_img, 0, 0, 0, $h_point, $max_width, $max_height, $width, $height_new);
        }else{
            //cut point by width
            $w_point = (($width - $width_new) / 2);
            imagecopyresampled($dst_img, $src_img, 0, 0, $w_point, 0, $max_width, $max_height, $width_new, $height);
        }

        if(strpos(strtolower($dst_dir), ".jpg"))
            imagejpeg($dst_img, $dst_dir);
        else if(strpos(strtolower($dst_dir), ".jpeg"))
            imagejpeg($dst_img, $dst_dir);
        else if(strpos(strtolower($dst_dir), ".png"))
            imagepng($dst_img, $dst_dir);
        else if(strpos(strtolower($dst_dir), ".gif"))
            imagegif($dst_img, $dst_dir);
        //$image($dst_img, $dst_dir, $quality);

        if($dst_img)imagedestroy($dst_img);
        if($src_img)imagedestroy($src_img);

        return $dst_img;
    }

    public function wwgMediaUpload(Request $request){
        $files = $request->file('upfiles');
        $uppath= $request->post('uppath');

        $result=false;
        $msg="ok";
        $fcnt = count($files);
        if($fcnt > 0)
        {
            foreach ($files as $file)
            {
                $filename = $file->getClientOriginalName();
                try{
                    $uppath = rtrim($uppath, "/");
                    $result = $file->storeAs($uppath, $filename);
                    $filetype = $this->searchFileType($result);
                    if($filetype[1] == "image") {
                       $themimg = $this->resize_crop_image(63, 54, $file, public_path().$filetype[0]);
                       // $ret1 = $file->storeAs($filetype[0], $themimg);
                    }
                    if($filetype[1] == "video") {

                    }

                }catch (FileException $e){
                    $result = false;
                }
            }
        }

       /*
            $file = $validation['file'];
            $fileName = 'profile-'.time().'.'.$file->getClientOriginalExtension();

            // Save the file
            $s3 = Storage::disk('s3');
            $filePath = '/uploads/media/'.$fileName;
            $s3->put($filePath, file_get_contents($file), 'public');
        * */

        if(!$result){
            $msg="err";
        }
        return \Response::json([
            'msg'   =>  $msg
        ]);

        exit(1);
    }

    //add ckd
    public function getContentTypeList(Request $request){
        $langs = $request->post('langs');
        $langarray=array();
        array_push($langarray, 'id');
        array_push($langarray, 'item_cnt');
        foreach ($langs as $row){
            array_push($langarray, strtolower($row['name']));
        }

        $rows = DB::table('wes_pagetype')
            ->select($langarray)
            ->where('g_path', $this->g_path)->get();

        if($rows!==null && count($rows) > 0)
        {
            return \Response::json([
                'msg'   =>  'ok'
                ,'list' => $rows
            ]);
        }
        else
        {
            return \Response::json([
                'msg'   =>  'err'
                ,'list' => ''
            ]);
        }

        exit();
    }

    //add ckd
    public function getPageTypeList(Request $request)
    {
        $lang = $request->post('lang');
        if($lang===null || empty($lang))
            die('Have to Setting language');

        $iso = explode('-',$lang);
        $row = DB::table('webwesglobal_lang')
            ->select(DB::raw('name'))
            ->where([
                ['iso', $iso[0]],
                ['status', 'enable'],
                ['g_path', $this->g_path]
            ])->get()->first();

        $langcolumn=', "" as name ';
        if($row!==null)
            $langcolumn = ', '.strtolower($row->name).' as name';

        $rows = DB::table('wes_pagetype')
            ->select(DB::raw('id '.$langcolumn.''))
            ->where('g_path', $this->g_path)->get();
        if($rows!==null && count($rows) > 0)
        {
            return \Response::json([
                'msg'   =>  'ok'
                ,'list' => $rows
            ]);
        }
        else
        {
            return \Response::json([
                'msg'   =>  'ok'
                ,'list' => ''
            ]);
        }

        exit();
    }

    public function addPageType(Request $request)
    {
        $contentdata = $request->post('contentdata');
        $where=' 1 and g_path = "'.$this->g_path.'" ';
        $addarray=array();
        $addarray['g_path']=$this->g_path;
        if(is_array($contentdata)){
            $where.=' and (';
            $j=0;
            foreach ($contentdata as $key => $value) {
                if($j===0)
                $where.= ' '.$key.' = "'.$value.'" ';
                else
                    $where.=' or '.$key.' = "'.$value.'" ';
                $addarray[$key]=$value;
                $j++;
            }
            $where.=')';
        }
        else
        {
            return \Response::json([
                'msg'   =>  'Wrong posted Data.'
            ]);
            exit();
        }

        $row = DB::table('wes_pagetype')
            ->whereRaw($where)->get()->first();

        if($row!==null){
            return \Response::json([
                'msg'   =>  'du'
            ]);
        }
        else
        {
            $iid =  DB::table('wes_pagetype')->insertGetId($addarray);
            if($iid > 0)
                $msg="ok";
            else
                $msg="Error Insert in DB!";

            return \Response::json([
                'msg'   =>  $msg
                ,'id' => $iid
            ]);
        }
        exit();
    }
    //add ckd
    public function changePageType(Request $request){
        $id = $request->post('id');
        $cond = $request->post('cond');
        $sucess=-1;
        if($cond==='update'){
            $upstr = $request->post('upstr');
            $addarray=array();
            if(is_array($upstr))
            {
                foreach ($upstr as $key => $value) {
                    $addarray[$key]=$value;
                }

                $sucess = DB::table('wes_pagetype')->where('id', $id)->update($addarray);
                if($sucess > -1){
                    return \Response::json([
                        'msg'   =>  'ok'
                    ]);
                }
                else{
                    return \Response::json([
                        'msg'   =>  'uperr'
                    ]);
                }
            }
            else
            {
                return \Response::json([
                    'msg'   =>  'Wrong posted Data.'
                ]);
            }

        }
        else if($cond==='delete')
        {

            $sucess = DB::table('wes_pagetype')->where('id', $id)->delete();
                      DB::table('tb_pagecontent_sidebar')->where('pagetype_id', $id)->delete();
            if($sucess > -1){
                return \Response::json([
                    'msg'   =>  'ok'
                ]);
            }
            else{
                return \Response::json([
                    'msg'   =>  'err'
                ]);
            }
        }
        else if($cond==='muldelete')
        {
            if(is_array($id)){
                $addarray=array();
                foreach ($id as $key => $value) {
                    array_push($addarray,$value);
                }

                $sucess = DB::table('wes_pagetype')->whereIn('id', $addarray)->delete();
                DB::table('tb_pagecontent_sidebar')->whereIn('pagetype_id', $addarray)->delete();

                if($sucess > -1)
                {
                    return \Response::json([
                        'msg'   =>  'ok'
                    ]);
                }
                else{
                    return \Response::json([
                        'msg'   =>  'Error Delete in DB'
                    ]);
                }
            }
            else
            {
                return \Response::json([
                    'msg'   =>  'Wrong posted Data.'
                ]);
            }
        }
    }

    public  function addNumInPageType(Request $request){
        $lang = $request->post('lang');
        $num = $request->post('num');
        $id = $request->post('id');
        $sucess=-1;
        $sucess = DB::table('wes_pagetype')->where('id', $id)->update(['item_cnt' => $num]);
        if($sucess > -1){
            return \Response::json([
                'msg'   =>  'ok'
            ]);
        }
        else
         {
            return \Response::json([
                'msg'   =>  'err'
            ]);
        }
    }

    public function wwpc_checkpagename_pytype_lang(Request $request){
        $pgname = $request->post('pgname');
        $pytype = $request->post('pytype');
        $lang = $request->post('lang');
        $rows = DB::table('wes_pagecontent')
            ->select(DB::raw('pagename'))
            ->Where('trans', $lang)
            ->Where('pagetypeId', $pytype)
            ->Where('pagename',  $pgname)
            ->Where('g_path',  $this->g_path)
            ->get();
       $cnt=0;
       if($rows!==null)
           $cnt=count($rows);
           return \Response::json([
               'msg'  =>  "ok",
               'cnt'  => $cnt
           ]);
   }

    public function wwpc_checkpagename(Request $request){
        $pgname = $request->post('pgname');
        $id = $request->post('id');
        if(intval($id)==0){
            $rows = DB::table('wes_pagecontent')
                ->select(DB::raw('pagename'))
                ->Where('pagename', $pgname)
                ->Where('g_path', $this->g_path)
                ->get();
        }
        else
        {
            $rows = DB::table('wes_pagecontent')
                ->select(DB::raw('pagename'))
                ->Where('pagename', '=' , $pgname)
                ->Where('id','<>' , $id)
                ->Where('g_path', $this->g_path)
                ->get();
        }

        $cnt=0;
        if($rows!==null)
            $cnt=count($rows);

        return \Response::json([
            'msg'  =>  "ok",
            'cnt'  => $cnt
        ]);
    }

   public function getChangeContentASLang(Request $request){

       $lang = $request->post('lang');
       $pagename = $request->post('pagename');

       $row =DB::table('wes_pagecontent')
           ->where('trans', $lang)
           ->where('pagename', $pagename)
           ->get()->first();
       if($row==null)
       {
           $iso = explode('-', $lang);
           $row='';
       }
       else
       {
           $iso = explode('-', $row->trans);
       }
       $rowl = DB::table('webwesglobal_lang')
           ->select(DB::raw('name'))
           ->where([
               ['dialcode', $iso[1]],
               ['status', 'enable'],
               ['g_path', $this->g_path]
           ])->get()->first();

       $langcolumn=', "" as name, english ';
       $_column = '';
       if($rowl!==null){
           $_column = strtolower($rowl->name);
           $langcolumn = ', '.$_column.' as name, english ';
       }

       $pgtypes = DB::table('wes_pagetype')
           ->select(DB::raw('id '.$langcolumn.''))
           ->where('g_path', $this->g_path)->get();

       return \Response::json([
           'msg'   =>  'ok',
           'lang'    =>  $lang,
           'curlang' =>$_column,
           'pagetype' => $pgtypes,
           'items' =>  $row
       ]);

   }

    public function addwwgpp_pagesetting(Request $request){

        $allData = $request->post('allData');
        $pgsetstate = $request->post('pgsetstate');

        if(is_array($allData))
        {
            $ary_in=array();
            foreach ($allData as $item)
            {
                foreach ($item as $key => $value)
                {
                  switch ($key){
                      case "pagename":
                          $pagename = $value;
                          break;
                      case "langname":
                          $langname = $value;
                          break;
                      case "langid":
                          $trans = $value;
                          break;
                      case "lang_dialcode":
                          $lang_dialcode = $value;
                          break;
                      case "title":
                          $title = $value;
                          break;
                      case "contenttype":
                          $pagetypeId = $value;
                          $shstate = $value;
                          break;
                      case "contenttype_invisible":
                          $type_state = $value;
                          break;
                      case "url":
                          $url = $value;
                          break;
                      case "url_invisible":
                          $url_state = $value;
                          break;
                      case "author":
                          $author = $value;
                          break;
                      case "author_invisible":
                          $auth_state = $value;
                          break;
                      case "time":
                          $time = $value;
                          break;
                      case "time_invisible":
                          $time_invisible = $value;
                          break;
                      case "edit":
                          $content = $value;
                          break;
                      case "active":
                          $active = $value;
                          break;
                  }

                }

                $ary_item=array(
                    'trans' =>$trans,
                    'pagetypeId' =>$pagetypeId,
                    'pagename' =>$pagename,
                    'title' =>$title,
                    'author' =>$author,
                    'url' =>$url,
                    'priority' => 0,
                    'shstate' =>$shstate,
                    'content' =>$content,
                    'auth_state' =>$auth_state,
                    'type_state' =>$type_state,
                    'date_state' =>$time_invisible,
                    'url_state' =>$url_state,
                    'created_at' => $time, //@date("Y-m-d h:i:s", time()),
                    'is_contentlist' =>1,
                    'g_path' =>$this->g_path,
                );

                array_push($ary_in, $ary_item);
            }

           $msg='ok';
          if($pgsetstate==='add')
          {
              $iid =  DB::table('wes_pagecontent')->insert($ary_in);
          }

         if($iid===false)
             $msg='err';

         return \Response::json([
            'msg'  =>  $msg
            ]);

        }

        exit();
    }

    public function addwwgpp_pagesettingMuti_change(Request $request){

        $allData = $request->post('allData');

        if(is_array($allData))
        {
            $ary_in=array();
            foreach ($allData as $item)
            {
                foreach ($item as $key => $value)
                {
                    switch ($key){
                        case "pagename":
                            $pagename = $value;
                            break;
                        case "langname":
                            $langname = $value;
                            break;
                        case "langid":
                            $trans = $value;
                            break;
                        case "lang_dialcode":
                            $lang_dialcode = $value;
                            break;
                        case "title":
                            $title = $value;
                            break;
                        case "contenttype":
                            $pagetypeId = $value;
                            $shstate = $value;
                            break;
                        case "contenttype_invisible":
                            $type_state = $value;
                            break;
                        case "url":
                            $url = $value;
                            break;
                        case "url_invisible":
                            $url_state = $value;
                            break;
                        case "author":
                            $author = $value;
                            break;
                        case "author_invisible":
                            $auth_state = $value;
                            break;
                        case "time":
                            $time = $value;
                            break;
                        case "time_invisible":
                            $time_invisible = $value;
                            break;
                        case "edit":
                            $content = $value;
                            break;
                        case "active":
                            $active = $value;
                        case "status":
                            $status = $value;
                        case "data_init":
                            $data_init = $value;
                            break;
                    }

                }

                if($status!=='enable'){
                    $attatch = DB::table('wes_pagecontent')
                        ->where([
                                ['trans', $trans],
                                ['pagename', $pagename],
                                ['g_path', $this->g_path]
                            ])->delete();
                }
                else
                {
                   if(intval($data_init)===1)
                   {
                       $attatch =  DB::table('wes_pagecontent')
                           ->updateOrInsert(
                               ['trans' => $trans, 'pagename' => $pagename, 'g_path' => $this->g_path],
                               [
                                   'pagetypeId' =>$pagetypeId,
                                   'title' =>$title,
                                   'author' =>$author,
                                   'url' =>$url,
                                   'priority' => 0,
                                   'shstate' =>$shstate,
                                   'content' =>$content,
                                   'auth_state' =>$auth_state,
                                   'type_state' =>$type_state,
                                   'date_state' =>$time_invisible,
                                   'url_state' =>$url_state,
                                   'created_at'=> $time,
                                   'updated_at' => @date("Y-m-d h:i:s", time()),
                                   'is_contentlist' =>1
                               ]
                           );
                   }
                   else{
                       $attatch =  DB::table('wes_pagecontent')
                           ->updateOrInsert(
                               ['trans' => $trans, 'pagename' => $pagename, 'g_path' => $this->g_path],
                               [
                                   'url' =>$url,
                                   'updated_at' => @date("Y-m-d h:i:s", time())
                               ]
                           );
                   }

                }

            }

            $msg='ok';
            if(!$attatch)
                $msg='err';

            return \Response::json([
                'msg'  =>  $msg
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

    public function addwwgpp_pagesetting_change(Request $request){

        $translang = $request->post('pgsettranedLang');
        $url = $request->post('pgseturl');
        $state = $request->post('pgsetstate');
        $oldid = $request->post('pgsetid');

        $pgname = $request->post('pgsetname');
        $title = $request->post('pagesetting_title');
        $pgtype = $request->post('pagesetting_pgtype');
        $type_in = $request->post('type_invisible');

        //$pagesetting_url = $request->post('pagesetting_url');
        $url_in = $request->post('url_invisible');

        $author = $request->post('pagesetting_author');
        $author_in = $request->post('author_invisible');

        $datapicker = $request->post('pagesetting_datapicker');
        $time_in = $request->post('time_invisible');

        //$allData = $request->post('allData');

        //$swhi = $request->post('pagesetting_swhi');

        if($author_in == "on")
            $author_in = 1;
        else
            $author_in = 0;

        if($type_in == "on")
            $type_in = 1;
        else
            $type_in = 0;

        if($time_in == "on")
            $time_in = 1;
        else
            $time_in = 0;

        if($url_in == "on")
            $url_in = 1;
        else
            $url_in = 0;

        $editor0 = $request->post('editcont0');
        if($editor0!==null && $editor0 !== '')
            $editor0 =  htmlentities($editor0);//html_entity_decode($editor0);

        if($state==='change')
        {
            $uptime= @date("Y-m-d h:i:s", time());
            $iid=0;
            try{
                DB::table('wes_pagecontent')
                    ->Where('id', $oldid)
                    ->update([
                        'trans' => $translang
                        , 'pagetypeId' => intval($pgtype)
                        , 'pagename' => $pgname
                        , 'title' => $title
                        , 'author' => $author
                        , 'url' => $url
                        , 'priority' => 0
                        , 'shstate' => '1'
                        , 'content' => $editor0
                        , 'created_at' => $datapicker
                        , 'updated_at' => $uptime
                        , 'auth_state' => $author_in
                        , 'type_state' => $type_in
                        , 'date_state' => $time_in
                        , 'url_state' => $url_in
                    ]);
                $iid=1;
            }
            catch(\Exception $e){}
        }
        else
        {
            $iid =  DB::table('wes_pagecontent')->insertGetId(
                [
                    'trans' => $translang
                    , 'pagetypeId' => intval($pgtype)
                    , 'pagename' => $pgname
                    , 'title' => $title
                    , 'author' => $author
                    , 'url' => $url
                    , 'priority' => 0
                    , 'shstate' => '1'
                    , 'content' => $editor0
                    , 'created_at' => $datapicker
                    , 'auth_state' => $author_in
                    , 'type_state' => $type_in
                    , 'date_state' => $time_in
                    , 'url_state' => $url_in
                    , 'g_path'=>$this->g_path
                ]
            );
        }

        if($iid > 0){
            return \Response::json([
                'msg'  =>  "ok"
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "Error Insert in database"
            ]);
        }

        exit();

    }
    //add ckd
    public function getContentList(Request $request){
        $langsplit = $request->post('lang');
        $searchcont = $request->post('cont');
        $start  = intval($request->post('start'));
        $cnt    = intval($request->post('cnt'));
        $start_from = ($start-1) * $cnt;
        $ctypeid = $request->post('ctypeid');

        $where =' where a.g_path="'.$this->g_path.'" ';
        $lang='';
        if($langsplit!==null && $langsplit !==''){
            $lang_explode = explode('-',$langsplit);
            $lang = $lang_explode[0].'-'.$lang_explode[1];
            //$langcolmun = strtolower($lang_explode[2]);
            $where .=' and a.trans = "'.$lang.'" ';
        }
        if($ctypeid!==null && $ctypeid !=='')
            $where .=' and a.pagetypeId = "'.intval($ctypeid).'" ';

        if($searchcont!==null && $searchcont!=='')
        {
            $where .=' and  a.title like "%'.$searchcont.'%"  ';
           /* $where .=' and ( a.content like "%'.$searchcont.'%" or a.title like "%'.$searchcont.'%"  ';
            $where .=' or a.author like "%'.$searchcont.'%" or a.url like "%'.$searchcont.'%" ) ';*/
        }

        $query='';
        $query.='SELECT a.*, ';
        $query.='LOWER(b.name) AS colmun, "" AS contenttype ';
        $query.='FROM 	wes_pagecontent AS a ';
        $query.='JOIN webwesglobal_lang AS b ';
        $query.='ON SUBSTRING_INDEX(a.trans, "-", -1) = b.dialcode ';
        $query.=$where.' ORDER BY a.id DESC LIMIT '.$start_from.', '.$cnt.'';
        $rows = DB::select($query);

        foreach ($rows as $row){
            $colmun = $row->colmun;
            $pageid=$row->pagetypeId;
            $subrow = DB::table('wes_pagetype')
                ->select(DB::raw(''.$colmun.' as conttype'))
                ->where('id',$pageid)->get()->first();
            if($subrow != null && $subrow != ''){
                $row->contenttype=$subrow->conttype;
            }
        }

        $query1='';
        $query1.='SELECT a.id FROM wes_pagecontent as a';
        $query1.=$where.' ORDER BY a.id DESC ';
        $cntrows = DB::select($query1);

        $total = count($cntrows);
        $totalpage = ceil($total / $cnt);

        if($rows!==null && count($rows) > 0){
            return \Response::json([
                'msg'   =>  'ok',
                'total'    =>  $total,
                'start'    =>  $start,
                'lang'    =>  $lang,
                'totalpage'    =>  $totalpage,
                'list' =>  $rows
            ]);
        }
        else{
            return \Response::json([
                'msg'   =>  'err',
                'total'    =>  $total,
                'start'    =>  $start,
                'lang'    =>  $lang,
                'totalpage'    =>  $totalpage,
                'list' =>  ''
            ]);
        }

        exit();
    }

    public function wwgpc_deleteGroupList(Request $request){
        $ids =$request->post('ids');
        if(is_array($ids)){
            $addarray=array();
            foreach ($ids as $key => $value) {
                array_push($addarray,$value);
            }

            $sucess = DB::table('wes_pagecontent')->whereIn('id', $addarray)->delete();

            if($sucess > -1)
            {
                return \Response::json([
                    'msg'   =>  'ok'
                ]);
            }
            else{
                return \Response::json([
                    'msg'   =>  'Error Delete in DB'
                ]);
            }
        }
        else
        {
            return \Response::json([
                'msg'   =>  'Wrong posted Data.'
            ]);
        }
    }

 public function getContentList_org(Request $request){
        $lang = $request->post('lang');
        $searchcont = $request->post('cont');
        $ctypeid = $request->post('ctypeid');
        $start  = intval($request->post('start'));
        $cnt    = intval($request->post('cnt'));
        $start_from = ($start-1) * $cnt;

        $iso = explode('-',$lang);
        $row = DB::table('webwesglobal_lang')
            ->select(DB::raw('name'))
            ->where([
                ['iso', $iso[0]],
                ['status', 'enable'],
                ['g_path', $this->g_path]
            ])->get()->first();

        $langcolumn=' "" as name ';
        if($row!==null){
            $langname = strtolower($row->name);
            $langcolumn=' b.'.$langname.' as name ';
        }

        $where =' where a.trans = "'.$lang.'"  and a.g_path="'.$this->g_path.'" ';
        if($searchcont!==null && $searchcont!==''){
            $where .=' and ( a.content like "%'.$searchcont.'%" or a.title like "%'.$searchcont.'%"  ';
            $where .=' or a.author like "%'.$searchcont.'%" or a.url like "%'.$searchcont.'%" ) ';
        }
        $query='';
        $query.='SELECT a.*, '.$langcolumn.' FROM wes_pagecontent AS a';
        $query.=' INNER JOIN wes_pagetype AS b';
        $query.=' ON a.pagetypeId = b.id ';
        $query.=$where.' ORDER BY a.priority asc LIMIT '.$start_from.', '.$cnt.'';
        $rows = DB::select($query);


        $query1='';
        $query1.='SELECT a.id FROM wes_pagecontent AS a';
        $query1.=' INNER JOIN wes_pagetype AS b';
        $query1.=' ON a.pagetypeId = b.id ';
        $query1.=$where.' ORDER BY a.id DESC ';
        $cntrows = DB::select($query1);

        $total = count($cntrows);
        $totalpage = ceil($total / $cnt);

        if($rows!==null && count($rows) > 0){
            return \Response::json([
                'msg'   =>  'ok',
                'total'    =>  $total,
                'start'    =>  $start,
                'lang'    =>  $lang,
                'totalpage'    =>  $totalpage,
                'list' =>  $rows
            ]);
        }
        else{
            return \Response::json([
                'msg'   =>  'err',
                'total'    =>  $total,
                'start'    =>  $start,
                'lang'    =>  $lang,
                'totalpage'    =>  $totalpage,
                'list' =>  ''
            ]);
        }

        exit();
    }

    public function changePageSettingitem_org(Request $request){
        $lang = $request->post('lang');
        $cond = $request->post('cond');
        $id  = intval($request->post('id'));
        $pagename  = $request->post('pagename');
        $url  = $request->post('url');
        if($cond==='change')
        {
            $rows =DB::table('wes_pagecontent')
                ->where('pagename', $pagename)->get();
            $jj=0;
            foreach($rows as $row){
                $iso = explode('-',$row->trans);
                $rowl = DB::table('webwesglobal_lang')
                    ->select(DB::raw('name'))
                    ->where([
                        ['dialcode', $iso[1]]//, ['status', 'enable'], ['g_path', $this->g_path]
                    ])->get()->first();
                $_column = ', '.$rowl->name.' as name, english ';
                $pgtype_rows = DB::table('wes_pagetype')
                    ->select(DB::raw('id '.$_column.''))->get();//->where('g_path', $this->g_path)
                $rows[$row->trans]=$pgtype_rows;
            }

            if($rows!==null){
                return \Response::json([
                    'msg'   =>  'ok',
                    'items' =>  $rows
                ]);
            }
            else{
                return \Response::json([
                    'msg'   =>  'err',
                    'items' =>  ''
                ]);
            }
        }
        else if($cond==='del'){
            $ret=1;
            try{
                DB::table('wes_pagecontent')->where('id', $id)->delete();
            }
            catch (\Exception $e)
            {
                $ret=0;
            }

              if($ret > 0){
                  return \Response::json([
                      'msg'   =>  'ok'
                  ]);
              }
              else{
                  return \Response::json([
                      'msg'   =>  'err'
                  ]);
              }

        }

        exit();
    }
    public function changePageSettingitem(Request $request){
        $lang = $request->post('lang');
        $cond = $request->post('cond');
        $id  = intval($request->post('id'));
        $pagename  = intval($request->post('pagename'));
        $url  = intval($request->post('url'));
        if($cond==='change')
        {
            $row =DB::table('wes_pagecontent')
                ->where('id', $id)->get()->first();

            $iso = explode('-',$row->trans);
            $rowl = DB::table('webwesglobal_lang')
                ->select(DB::raw('name'))
                ->where([
                    ['dialcode', $iso[1]] //,['status', 'enable'],['g_path', $this->g_path]
                ])->get()->first();

            $langcolumn=', "" as name, english ';
            $cur_column = '';
            if($rowl!==null){
                $cur_column = strtolower($rowl->name);
                $langcolumn = ', '.$cur_column.' as name, english ';
            }
            $pgtypes = DB::table('wes_pagetype')
                ->select(DB::raw('id '.$langcolumn.''))
                ->where('g_path', $this->g_path)->get();
            if($row!==null){
                return \Response::json([
                    'msg'   =>  'ok',
                    'lang'    =>  $lang,
                    'curlang' =>$cur_column,
                    'pagetype' => $pgtypes,
                    'items' =>  $row
                ]);
            }
            else{
                return \Response::json([
                    'msg'   =>  'err',
                    'pagetype' => '',
                    'lang'    =>  $lang,
                    'curlang' => '',
                    'items' =>  ''
                ]);
            }
        }
        else if($cond==='del'){
            $ret=1;
            try{
                DB::table('wes_pagecontent')->where('id', $id)->delete();
            }
            catch (\Exception $e)
            {
                $ret=0;
            }

            if($ret > 0){
                return \Response::json([
                    'msg'   =>  'ok'
                ]);
            }
            else{
                return \Response::json([
                    'msg'   =>  'err'
                ]);
            }
        }
        else if($cond==='active' || $cond==='block'){
            if($cond === 'active')
                $status = 1;
            else
                $status = 0;
            $sucess = DB::table('wes_pagecontent')
                ->Where('id' , $id)
                ->update(['status' => $status]);
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
        }

        exit();
    }

/* wes global page register part */
    public function wwgpRegisterOrg(Request $request)
    {
        $trans = trim($request->post('transLang'));
        $register_org_content= trim($request->post('register_organization_content_val'));
        $register_org_maxline= trim($request->post('register_organization_maxline'));
        $wwgp_org_font_color_val= trim($request->post('wwgp_organization_font_color_val'));
        $wwgp_org_border_color_val= trim($request->post('wwgp_organization_border_color_val'));
        $wwgp_org_back_color_val= trim($request->post('wwgp_organization_back_color_val'));
        $register_org_content = utf8_decode($register_org_content);

        $destinationPath = 'uploads/images/wesimg/';
        $file_pre = $request->post('organization_file_pre');
        $file = $request->file('organization_file');
        $filename='';
        if(!file_exists($_FILES['organization_file']['tmp_name']) && !empty($file_pre)){
            $filename=$file_pre;
        }
        else{
            $filename = time().'-'.$file->getClientOriginalName();

		/*	if($this->g_path!=="local")
			{
			   $this->filesystem->write('/'.$destinationPath.$filename, file_get_contents($file));//ckd
			   if(!empty($file_pre) && $this->filesystem->has('/'.$destinationPath.$file_pre))
				$this->filesystem->delete('/'.$destinationPath.$file_pre);
			}
			else*/
			{
			  $file->move(public_path().'/'.$destinationPath, $filename);//ckd
			   if(!empty($file_pre))
				@unlink(public_path().'/'.$destinationPath.$file_pre);
			}

        }

        $dbstr= array(
            'maxline' => $register_org_maxline,
            'fontcolor' => $wwgp_org_font_color_val,
            'bordercolor' => $wwgp_org_border_color_val,
            'backcolor' => $wwgp_org_back_color_val,
            'help' => $register_org_content,
            'advancss' =>$filename
        );
        $strjson =json_encode($dbstr);
        $row = DB::table('wesglobalpageregister')
            ->Where([
                ['trans' , $trans],
                ['type' , 'org']
            ])->get()->first();

        $sucess = -1;
        if($row!==null)
        {
            $sucess = DB::table('wesglobalpageregister')
                ->Where([
                    ['trans' , $trans],
                    ['type' , 'org']
                ])
                ->update(['content' => $strjson, 'is_register' => 0]);
        }
        else
        {
            $sucess =  DB::table('wesglobalpageregister')->insertGetId(
                [
                    'trans' => $trans,
                    'type'=>'org',
                    'content' => $strjson,
                    'is_register' => 0,
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

    public function wwgpGetRegisterOrg(Request $request){
        $transLang = $request->post('transLang');
        $row=null;
        if($transLang===null || $transLang === '')
        {
            $row = DB::table('wesglobalpageregister')
                ->select(DB::raw('content'))
                ->where('type','org')
                ->where('g_path', $this->g_path)
                ->get()->first();
        }
        else
        {
            $row = DB::table('wesglobalpageregister')
                ->select(DB::raw('content'))
                ->where([
                ['trans' , $transLang],
                ['type' , 'org'],
                ['g_path', $this->g_path]
            ])->get()->first();
        }

        if($row!==null){
            $content = $row->content;
        }
        else
            $content='';

        return \Response::json([
            'msg'  =>  'ok',
            'item' => $content
        ]);

        exit();
    }

    public function wwgpRegisterInd(Request $request)
    {
        $trans = trim($request->post('transLang'));
        $register_ind_content= trim($request->post('register_individual_content_val'));
        $register_ind_maxline= trim($request->post('register_individual_maxline'));
        $wwgp_ind_font_color_val= trim($request->post('wwgp_individual_font_color_val'));
        $wwgp_ind_border_color_val= trim($request->post('wwgp_individual_border_color_val'));
        $wwgp_ind_back_color_val= trim($request->post('wwgp_individual_back_color_val'));
        $register_ind_content = utf8_decode($register_ind_content);

        $destinationPath = 'uploads/images/wesimg/';
        $file_pre = $request->post('individual_file_pre');
        $file = $request->file('individual_file');
        $filename='';
        if(!file_exists($_FILES['individual_file']['tmp_name']) && !empty($file_pre)){
            $filename=$file_pre;
        }
        else{
            $filename = time().'-'.$file->getClientOriginalName();

 /*          if($this->g_path!=="local")
			{
			   $this->filesystem->write('/'.$destinationPath.$filename, file_get_contents($file));//ckd
			   if(!empty($file_pre) && $this->filesystem->has('/'.$destinationPath.$file_pre))
				$this->filesystem->delete('/'.$destinationPath.$file_pre);
			}
			else*/
			{
			  $file->move(public_path().'/'.$destinationPath, $filename);//ckd

			   if(!empty($file_pre))
				@unlink(public_path().'/'.$destinationPath.$file_pre);
			}

        }

        $dbstr= array(
            'maxline' => $register_ind_maxline,
            'fontcolor' => $wwgp_ind_font_color_val,
            'bordercolor' => $wwgp_ind_border_color_val,
            'backcolor' => $wwgp_ind_back_color_val,
            'help' => $register_ind_content,
            'advancss' =>$filename
        );
        $strjson =json_encode($dbstr);
        $row = DB::table('wesglobalpageregister')
            ->Where([
                ['trans' , $trans],
                ['type' , 'ind']
            ])->get()->first();

        $sucess = -1;
        if($row!==null)
        {
            $sucess = DB::table('wesglobalpageregister')
                ->Where([
                    ['trans' , $trans],
                    ['type' , 'ind']
                ])
                ->update(['content' => $strjson, 'is_register' => 0]);
        }
        else
        {
            $sucess =  DB::table('wesglobalpageregister')->insertGetId(
                [
                    'trans' => $trans,
                    'type'=>'ind',
                    'content' => $strjson,
                    'is_register' => 0,
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

    public function wwgpGetRegisterInd(Request $request){
        $transLang = $request->post('transLang');
        $row=null;
        if($transLang===null || $transLang === '')
        {
            $row = DB::table('wesglobalpageregister')
                ->select(DB::raw('content'))
                ->where('type','ind')
                ->where('g_path', $this->g_path)
                ->get()->first();
        }
        else
        {
            $row = DB::table('wesglobalpageregister')
                ->select(DB::raw('content'))
                ->where([
                    ['trans' , $transLang],
                    ['type' , 'ind'],
                    ['g_path', $this->g_path]
                ])->get()->first();
        }

        if($row!==null){
            $content = $row->content;
        }
        else
            $content='';

        return \Response::json([
            'msg'  =>  'ok',
            'item' => $content
        ]);

        exit();
    }


    public  function wwgpRegisterStd(Request $request)
    {
        $trans = $request->post('transLang');
        $destinationPath = 'uploads/images/wesimg/';
        $file_pre = $request->post('studentregistration_file_pre');
        $file = $request->file('studentregistration_file');
        $filename='';
        if(!file_exists($_FILES['studentregistration_file']['tmp_name']) && !empty($file_pre)){
            $filename=$file_pre;
        }
        else{
            $filename = time().'-'.$file->getClientOriginalName();
/*
			if($this->g_path!=="local")
			{
				$this->filesystem->write('/'.$destinationPath.$filename, file_get_contents($file));//ckd
				if(!empty($file_pre) && $this->filesystem->has('/'.$destinationPath.$file_pre))
					$this->filesystem->delete('/'.$destinationPath.$file_pre);
			}
			else*/
			{
				$file->move(public_path().'/'.$destinationPath, $filename);//ckd
				if(!empty($file_pre))
					@unlink(public_path().'/'.$destinationPath.$file_pre);
			}

        }

        $row = DB::table('wesglobalpageregister')
            ->Where([
            ['trans' , $trans],
            ['type' , 'std']
        ])->get()->first();

        $sucess = -1;
        if($row!==null){
            $sucess = DB::table('wesglobalpageregister')
                ->Where([
                    ['trans' , $trans],
                    ['type' , 'std']
                ])
                ->update(['content' => $filename, 'is_register' => 0]);
        }
        else{
            $sucess =  DB::table('wesglobalpageregister')->insertGetId(
                [
                    'trans' => $trans,
                    'type' => 'std',
                    'content' => $filename,
                    'is_register' => 0,
                    'g_path'=>$this->g_path
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

    public function wwgpGetRegisterStd(Request $request){

        $tranedLang = $request->post('transLang');
        $row =null;
        if($tranedLang===null || $tranedLang === '')
        {
            $row = DB::table('wesglobalpageregister')
                ->select(DB::raw('trans, content'))
                ->where('type','std')
                ->where('g_path', $this->g_path)
                ->get()->first();
        }else{
            $row = DB::table('wesglobalpageregister')
                ->select(DB::raw('trans, content'))
                ->where([
                    ['trans' , $tranedLang],
                    ['type' , 'std'],
                    ['g_path', $this->g_path]
                ])
                ->get()->first();
        }

        $content='';
        if($row!==null && $row->content!==null && !empty($row->content)){
            $content=$row->content;
        }
        return \Response::json([
            'msg'  =>  'ok',
            'content' => $content
        ]);

        exit();
    }

    public function wwgpRegisterRelease(Request $request)
    {
        $trans = trim($request->post('trans'));
        $tabstatus = trim($request->post('tabstatus'));
        $release = trim($request->post('release'));

        $where = "";
        $type = "";
        if($tabstatus == 0)
            $type = "org";
        else if($tabstatus == 1)
            $type = "ind";
        else if($tabstatus == 2)
            $type = "std";
        $where = "trans='".$trans."' and type='".$type."' and g_path='".$this->g_path."'";
        $row = DB::table('wesglobalpageregister')
            ->whereRaw($where)->get()->first();

        $sucess = -1;
        if($row!==null)
        {
            $sucess = DB::table('wesglobalpageregister')
                ->whereRaw($where)->update(['is_register' => $release]);
        }
        else
        {
            $sucess =  DB::table('wesglobalpageregister')->insertGetId(
                [
                    'trans' => $trans,
                    'type'=>$type,
                    'g_path'=>$this->g_path,
                    'is_register' => $release
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

}//class

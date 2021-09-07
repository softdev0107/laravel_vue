<?php

namespace App\Http\Controllers;

use Exception;
use Faker\Guesser\Name;
use Faker\Provider\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Artisan;
use App\Models\UserModel;
use JoggApp\GoogleTranslate\GoogleTranslateClient;
use PhpParser\Node\Expr\Array_;
use League\Flysystem\Filesystem;
use League\Flysystem\Sftp\SftpAdapter;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DashboardController extends BaseController
{
    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    public function getStoredLang(Request $request)
    {
        $rows = DB::table('weslangs')->get();
        $cnt = count($rows);
        if($rows!== null && $cnt > 0)
        {
            $addlist=array();
            for($i=0;$i<$cnt;$i++){
                $row = $rows[$i];
                $iso=$row->iso;
                $dialcode=$row->dialcode;
                $status=$row->status;
                $name=$row->name;
                $one=$iso.'-'.$dialcode.'-'.$name.'-'.$status;
                array_push($addlist, $one);
            }

            return \Response::json([
                'msg'  =>  "ok",
                'cnt' =>$cnt,
                'langlist' => $addlist
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

    public function sslangSaveLang(Request $request)
    {
        $langlist=$request->langlist;
        if(is_array($langlist))
        {
            $cnt=0;
            $addlist=array();
            for($i=0;$i<count($langlist);$i++)
            {
                $one = $langlist[$i];
                $objarry=explode("-",$one);
                $iso=$objarry[0];
                $dialcode=$objarry[1];
                $name=$objarry[2];
                $row = DB::table('weslangs')->where([
                    ['iso', '=', $iso],
                    ['dialcode', '=', $dialcode]
                ])->get();
                $id=0;
                if(count($row) < 1){
                    $id = DB::table('weslangs')->insertGetId(
                        ['iso' => $iso, 'dialcode' => $dialcode, 'name'=>$name]
                    );
                }
                if($id > 0){
                    array_push($addlist, $one."-");
                    $cnt++;
                }
            }

            return \Response::json([
                'msg'  =>  "ok",
                'cnt' =>  $cnt,
                'addlist' =>$addlist
            ]);

        }

        return \Response::json([
            'msg'  =>  "err"
        ]);

        exit();
    }

    //DB::delete('delete from student where id = ?',[$id]);
    //$users = DB::select('select * from student');

    public function sslang_saveStatusChange(Request $request){
        $iso=$request->iso;
        $dialcode=$request->dialcode;
        $status=$request->status;
        $affed=-1;

        if($status=="delete")
        {
            try {
                $affed = DB::table('weslangs')->where([
                    ['iso', '=', $iso],
                    ['dialcode', '=', $dialcode]
                ])->delete();

                $affed = DB::table('sitetranslatecont')->where([
                    ['iso', '=', $iso],
                ])->delete();

            }
            catch (exception $e){
                $affed=-1;
            }
        }
        else
        {
            $affed = DB::table('weslangs')->where([
                ['iso', '=', $iso],
                ['dialcode', '=', $dialcode]
            ])->update(['status' => $status]);

            $querystr1=" SELECT id, str_type, str_key, str_cont,str_link, iso ";
            $querystr1.=" FROM sitetranslatecont ";
            $querystr1.="  WHERE iso='".$iso."'";
            $rows1 = DB::select( DB::raw($querystr1) );

            $rcnt = count($rows1);

            if($status=='enable' && $rcnt < 1)
            {
                $querystr=" SELECT  IFNULL(b.id, a.id) as id, ";
                $querystr.=" IFNULL(b.str_type, a.str_type) AS str_type, ";
                $querystr.=" IFNULL(b.str_key, a.str_key) AS str_key, ";
                $querystr.="  a.str_cont as str_cont,";
                $querystr.=" IFNULL(b.str_cont, '') AS iso_cont,";
                $querystr.=" IFNULL(a.str_link, b.str_link) AS str_link,";
                $querystr.=" IFNULL(b.iso, 'en') AS iso";
                $querystr.=" from";
                $querystr.=" (SELECT id, str_type, str_key, str_cont,str_link, iso";
                $querystr.="  FROM sitetranslatecont";
                $querystr.="  WHERE iso='en') AS a";
                $querystr.=" LEFT JOIN";
                $querystr.=" (SELECT id, str_type, str_key, str_cont,str_link, iso";
                $querystr.=" FROM sitetranslatecont";
                $querystr.="  WHERE iso='".$iso."') AS b";
                $querystr.=" ON a.str_key = b.str_key AND a.str_type = b.str_type";
                $rows = DB::select( DB::raw($querystr) );

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
                $translateClient=null;
                try{
                    $config['default_target_translation']= $giso;
                    $config['api_key']='AIzaSyDiZHLEFfLEkexBLxV-3C9Q3al1Klj_9oU';
                    $translateClient = new GoogleTranslateClient($config);
                } catch(\Exception $e){
                    $config['default_target_translation']='en';
                    $config['api_key']='AIzaSyDiZHLEFfLEkexBLxV-3C9Q3al1Klj_9oU';
                    $translateClient = new GoogleTranslateClient($config);
                }
                $google_enable=true;
                /**/
                if($translateClient!=null)
                {
                    $fortranslangs = array();
                    $templang = array();
                    $cnt = 0;
                    foreach ($rows as $row)
                    {
                        $cont = $row->str_cont;
                        array_push($templang, $cont);
                        if ($cnt > 30)
                        {
                            try{
                                $transed = $translateClient->translateBatch($templang, $giso);
                                if (count($transed) > 0)
                                {
                                    foreach ($transed as $t){
                                        array_push($fortranslangs, $t);
                                    }
                                    $cnt = 0;
                                    $templang = array();
                                    sleep(2);
                                }
                                else
                                    $cnt = 0;
                            }
                            catch(\Exception $e)
                            {
                                $google_enable=false;
                            }

                        } else
                            $cnt++;
                    }

                    if($google_enable===true){
                        for ($i = 0; $i < count($rows); $i++) {
                            $row = $rows[$i];
                            $str_cont = $row->str_cont;
                            foreach ($fortranslangs as $ttlangs)
                            {
                                $input = $ttlangs['input'];
                                $text = $ttlangs['text'];
                                if ($input == $str_cont) {
                                    $row->str_cont = $text;
                                    $rows[$i] = $row;
                                    break;
                                }
                            }

                        }

                        $insertrows = array();
                        foreach ($rows as $row) {
                            $str_cont = $row->str_cont;
                            $str_type = $row->str_type;
                            $str_key = $row->str_key;
                            $str_link = $row->str_link;
                            $itemarray = array();
                            $itemarray['str_type'] = $str_type;
                            $itemarray['str_key'] = $str_key;
                            $itemarray['str_cont'] = $str_cont;
                            $itemarray['str_link'] = $str_link;
                            $itemarray['iso'] = $iso;
                            $createtime = date("Y-m-d h:i:s", time());
                            $itemarray['created_at'] = $createtime;
                            array_push($insertrows, $itemarray);
                        }
                        if (count($insertrows) > 0)
                            $rt = DB::table('sitetranslatecont')->insert($insertrows);
                    }
                }//if google error to microsoft (free)

                if($translateClient===null || $google_enable===false)
                {
                    $commonctrl = new CommonController;
                    $fortranslangs = array();
                    $templang = array();
                    $cnt = 0;
                    foreach ($rows as $row)
                    {
                        $cont = $row->str_cont;
                        array_push($templang, array ('Text' =>$cont));
                        if ($cnt > 30)
                        {
                            $transed = $commonctrl->Translate($giso, $templang);
                            $transed = json_decode($transed);
                            if (count($transed) > 0)
                            {
                                foreach ($transed as $tt)
                                {
                                    foreach ($tt as $t)
                                    {
                                      array_push($fortranslangs,$t);
                                    }
                                }

                                $cnt = 0;
                                $templang = array();
                                sleep(2);
                            }
                            else
                                $cnt = 0;
                        } else
                            $cnt++;
                    }

                    for($i=0;$i<count($fortranslangs);$i++)
                    {
                        $ttt = $fortranslangs[$i];
                        $text = $ttt[0]->text;
                        $row = $rows[$i];
                        $row->str_cont = $text;
                        $rows[$i] = $row;
                    }

                    $insertrows = array();
                    foreach ($rows as $row)
                    {
                        $str_cont = $row->str_cont;
                        $str_type = $row->str_type;
                        $str_key = $row->str_key;
                        $str_link = $row->str_link;
                        $itemarray = array();
                        $itemarray['str_type'] = $str_type;
                        $itemarray['str_key'] = $str_key;
                        $itemarray['str_cont'] = $str_cont;
                        $itemarray['str_link'] = $str_link;
                        $itemarray['iso'] = $iso;
                        $createtime = date("Y-m-d h:i:s", time());
                        $itemarray['created_at'] = $createtime;
                        array_push($insertrows, $itemarray);
                    }

                    if (count($insertrows) > 0)
                        $rt = DB::table('sitetranslatecont')->insert($insertrows);

                }
                /**/
            }

        }


        if($affed > -1)
        {
            return \Response::json([
                'msg'  =>  "ok"
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "Error update in database"
            ]);
        }


        exit();

    }

    public function sc_getEnableLangList(Request $request){
        $locale = App::getLocale();
        $rows = DB::table('weslangs')
            ->where('status','enable')->get();
        $cnt = count($rows);
        if($rows!= null && $cnt > 0)
        {

            return \Response::json([
                'msg'  =>  "ok",
                'cnt' =>$cnt,
                'locale'=>$locale,
                'langlist' => $rows
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "ok",
                'cnt' =>$cnt,
                'locale'=>$locale,
                'langlist' => array()
            ]);
        }

        exit();
    }

    public function stf_getFootStyle(Request $request)
    {
        $row = DB::table('footstylecont')
            ->where('g_path', $this->g_path)
            ->get()->first();
        if($row!== null && !empty($row))
        {

            return \Response::json([
                'msg'  =>  "ok",
                'list' => $row
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "Empty data in database;",
                'list' => ''
            ]);
        }

        exit();
    }

    public function stf_savefootstyle(Request $request){
        $leftclr=$request->leftclr;
        $leftsize=$request->leftsize;
        if(empty($request->leftcont))
            $leftcont='';
        else
            $leftcont=$request->leftcont;

        $centclr=$request->centclr;
        $centsize=$request->centsize;
        if(empty($request->centcont))
            $centcont='';
        else
            $centcont=$request->centcont;

        $rightclr=$request->rightclr;
        $rightsize=$request->rightsize;

        if(empty($request->rightcont))
            $rightcont='';
        else
            $rightcont=$request->rightcont;

        $createtime = date("Y-m-d h:i:s", time());

        $cnt = DB::table('footstylecont')->where('g_path', $this->g_path)->count();
        if($cnt>0)
        {
            try{
                $affected = DB::table('footstylecont')
                    ->Where('id', 1)
                    ->update([
                    'leftcont' => $leftcont
                    , 'leftclr' => $leftclr
                    , 'leftsize' => $leftsize

                    , 'centcont' => $centcont
                    , 'centclr' => $centclr
                    , 'centsize' => $centsize

                    , 'rightcont' => $rightcont
                    , 'rightclr' => $rightclr
                    , 'rightsize' => $rightsize
                ]);

                return \Response::json([
                    'msg'  =>  "ok"
                ]);

            }
            catch(\Exception $e)
            {
                return \Response::json([
                    'msg'  =>  "Error update in database"
                ]);
            }

        }
        else{
            $iid =  DB::table('footstylecont')->insertGetId(
                [   'leftcont' => $leftcont
                    , 'leftclr' => $leftclr
                    , 'leftsize' => $leftsize

                    , 'centcont' => $centcont
                    , 'centclr' => $centclr
                    , 'centsize' => $centsize

                    , 'rightcont' => $rightcont
                    , 'rightclr' => $rightclr
                    , 'rightsize' => $rightsize
                    , 'created_at' => $createtime
                    , 'g_path'  =>$this->g_path
                ]
            );

            if($iid > 0){
                return \Response::json([
                    'msg'  =>  "ok"
                ]);
            }
            else
            {
                return \Response::json([
                    'msg'  =>  "Error update in database"
                ]);
            }

        }


        exit();
    }

    public function getSiteLogoFiles(Request $request)
    {
        $svr =$request->srv;
        if(empty($svr))
            $svr='hk';

        $rowflw = DB::table('sitelogoinfo')->where('site_logtype','flw')
            ->where('g_path', $this->g_path)->get()->first();

        if($rowflw!= null)
        {
            $logflw_name = $rowflw->site_logname;
            $logflw_size = $rowflw->site_logsize;
            $logflw_style = $rowflw->site_logstyle;
        }
        else
        {
            $logflw_name = "logo_flw.png";
            $logflw_size = "74*22";
            $logflw_style = "style(flower)";
        }

        $rowstar = DB::table('sitelogoinfo')
            ->where([
                ['site_logtype','star'],
                ['g_path',$this->g_path],
            ])->get()->first();

        if($rowstar!= null)
        {
            $logstar_name = $rowstar->site_logname;
            $logstar_size = $rowstar->site_logsize;
            $logstar_style = $rowstar->site_logstyle;
        }
        else
        {
            $logstar_name = "logo_star.png";
            $logstar_size = "36*32";
            $logstar_style = "style(star)";
        }

        $rowfavico = DB::table('sitelogoinfo')
            ->where([
                ['site_logtype','fav'],
                ['g_path',$this->g_path],
            ])
            ->get()->first();

        if($rowfavico!= null)
        {
            $favico_name = $rowfavico->site_logname;
            $favico_size = $rowfavico->site_logsize;
            $favico_style = $rowfavico->site_logstyle;
        }
        else
        {
            $favico_name = "logo_star.png";
            $favico_size = "36*32";
            $favico_style = "style(favicon)";
        }

        $alllogstyles = DB::table('sitelogoimgstyle')
            ->where('g_path', $this->g_path)->get();


        return \Response::json([
            'msg'     => 'ok',
            'logflw_name'    => $logflw_name,
            'logflw_size'    => $logflw_size,
            'logflw_style'   => $logflw_style,
            'logstar_name'   => $logstar_name,
            'logstar_size'   => $logstar_size,
            'logstar_style'  => $logstar_style,
            'favico_name'    => $favico_name,
            'favico_size'    => $favico_size,
            'favico_style'   => $favico_style,
            'stylelists'     => $alllogstyles
        ]);

        exit();

    }

    public function SeletedChangeLogImgInfo(Request $request){
        $frmno = $request->post('frm_no');
        $server =  $request->post('server');

        $createtime = date("Y-m-d h:i:s", time());

        if(intval($frmno) == 1)
        {

            $size = $request->post('logosize');
            $style =  $request->post('logostyle');

            $id =  DB::table('sitelogoinfo')
                ->where([
                    ['site_logtype','flw'],
                    ['g_path',$this->g_path],
                ])
                ->update(
                    [
                        'site_logsize' => $size
                        , 'site_logstyle' => $style
                        , 'updated_at' => $createtime
                    ]
                );

            return \Response::json([
                'msg'     => 'ok',
                'size'    => $size,
                'style'   => $style,
                'dbid'    =>  $id,
                'message' => ''
            ]);

            exit();
        }
        else if(intval($frmno) == 2)
        {

            $size = $request->post('logosize');
            $style =  $request->post('logostyle');

            $id =  DB::table('sitelogoinfo')
                ->where([
                    ['site_logtype','star'],
                    ['g_path',$this->g_path],
                ])
                ->update(
                    [
                        'site_logsize' => $size
                        , 'site_logstyle' => $style
                        , 'updated_at' => $createtime
                    ]
                );

            return \Response::json([
                'msg'     => 'ok',
                'size'    => $size,
                'style'   => $style,
                'server' => $server,
                'dbid'    =>  $id,
                'message' => ''
            ]);

            exit();

        }
        else if(intval($frmno) == 3)
        {

            $size = $request->post('logosize');
            $style =  $request->post('logostyle');

            $id =  DB::table('sitelogoinfo')
                ->where([
                    ['site_logtype','fav'],
                    ['g_path',$this->g_path],
                ])->update(
                    [
                        'site_logsize' => $size
                        , 'site_logstyle' => $style
                        , 'updated_at' => $createtime
                    ]
                );

            return \Response::json([
                'msg'     => 'ok',
                'size'    => $size,
                'style'   => $style,
                'server' => $server,
                'dbid'    =>  $id,
                'message' => ''
            ]);

            exit();

        }
    }

    public function logoimgDataPost(Request $request)
    {
        $frmno = $request->post('stl_frm_no');
        $image="";
        $size="";
        $style="";
        $createtime = date("Y-m-d h:i:s", time());
        $server =  $request->post('server');
        if(intval($frmno) == 1)
        {

            $validator = \Validator::make($request->all(), [
                'uploadflw' => 'max:1024|mimes:jpeg,png,jpg',
            ]);

            if ($validator->fails()) {
                return \Response::json([
                    'msg'  =>  'err',
                    'message' =>  'File must be smaller than 1024KB and in jpg or png format.'
                ]);

                exit();
            }

            $file = $request->file('uploadflw');
            $destinationPath = 'images/';
            $filename = time().'-'.$file->getClientOriginalName();

			 /*if($this->g_path!=="local")
                {
                    $this->filesystem->write('/'.$destinationPath.$filename, file_get_contents($file));//ckd

                }
                else*/
                {
					$file->move(public_path().'/'.$destinationPath, $filename);
				}

            $size = $request->post('stl_flw_sz_slt');
            $style =  $request->post('stl_flw_st_slt');

            $row = DB::table('sitelogoinfo')
                ->select(DB::raw('site_logname'))
                ->where([['site_logtype', 'flw'],['g_path', $this->g_path]])
                ->get()->first();
            if($row!==null && $row->site_logname)
               @unlink(public_path().'/'.$destinationPath.$row->site_logname);


            $id =  DB::table('sitelogoinfo')
                ->updateOrInsert(
                    ['site_logtype' => 'flw', 'g_path' => $this->g_path],
                    [
                        'site_logname' => $filename
                        , 'site_logsize' => $size
                        , 'site_logstyle' => $style
                        , 'created_at' => $createtime
                        , 'g_path'=>$this->g_path
                    ]
                );

            return \Response::json([
                'msg'     => 'ok',
                'filename'=> $filename,
                'size'    => $size,
                'style'   => $style,
                'dbid'    =>  $id,
                'message' => ''
            ]);

            exit();
        }
        else if(intval($frmno) == 2)
        {
            $validator = \Validator::make($request->all(), [
                'uploadstar' => 'max:1024|mimes:jpeg,png,jpg',
            ]);

            if ($validator->fails()) {
                return \Response::json([
                    'msg'  =>  'err',
                    'message' =>  'File must be smaller than 1024KB and in jpg or png format.'
                ]);

                exit();
            }

            $file = $request->file('uploadstar');
            $destinationPath = 'images/';
            $filename = time().'-'.$file->getClientOriginalName();
		  /*if($this->g_path!=="local")
			{
				$this->filesystem->write('/'.$destinationPath.$filename, file_get_contents($file));//ckd

			}
			else*/
			    {
				$file->move(public_path().'/'.$destinationPath, $filename);
			}


            $size = $request->post('stl_star_sz_slt');
            $style =  $request->post('stl_star_st_slt');

            $row = DB::table('sitelogoinfo')
                ->select(DB::raw('site_logname'))
                ->where([['site_logtype', 'star'],['g_path', $this->g_path]])
                ->get()->first();
            if($row!==null && $row->site_logname)
                @unlink(public_path().'/'.$destinationPath.$row->site_logname);

            $id =  DB::table('sitelogoinfo')
                ->updateOrInsert(
                    ['site_logtype' => 'star', 'g_path' => $this->g_path],
                    [
                        'site_logname' => $filename
                        , 'site_logsize' => $size
                        , 'site_logstyle' => $style
                        , 'created_at' => $createtime
                        , 'g_path'=>$this->g_path
                    ]
                );

            return \Response::json([
                'msg'     => 'ok',
                'filename'=> $filename,
                'size'    => $size,
                'style'   => $style,
                'server' => $server,
                'dbid'    =>  $id,
                'message' => ''
            ]);

            exit();

        }
        else if(intval($frmno) == 3)
        {
            $validator = \Validator::make($request->all(), [
                'uploadstar' => 'max:1024|mimes:jpeg,png,jpg',
            ]);

            if ($validator->fails()) {
                return \Response::json([
                    'msg'  =>  'err',
                    'message' =>  'File must be smaller than 1024KB and in jpg or png format.'
                ]);

                exit();
            }

            $file = $request->file('uploadfavico');
            $destinationPath = 'images/';
            $filename = time().'-'.$file->getClientOriginalName();
            /*if($this->g_path!=="local")
              {
                  $this->filesystem->write('/'.$destinationPath.$filename, file_get_contents($file));//ckd

              }
              else*/
            {
                $file->move(public_path().'/'.$destinationPath, $filename);
            }


            $size = $request->post('stl_favico_sz_slt');
            $style =  $request->post('stl_favico_st_slt');

            $row = DB::table('sitelogoinfo')
                ->select(DB::raw('site_logname'))
                ->where([['site_logtype', 'fav'],['g_path', $this->g_path]])
                ->get()->first();
            if($row!==null && $row->site_logname)
                @unlink(public_path().'/'.$destinationPath.$row->site_logname);

            $id =  DB::table('sitelogoinfo')
                ->updateOrInsert(
                    ['site_logtype' => 'fav', 'g_path' => $this->g_path],
                    [
                        'site_logname' => $filename
                        , 'site_logsize' => $size
                        , 'site_logstyle' => $style
                        , 'created_at' => $createtime
                        , 'g_path'=>$this->g_path
                    ]
                );

            return \Response::json([
                'msg'     => 'ok',
                'filename'=> $filename,
                'size'    => $size,
                'style'   => $style,
                'server' => $server,
                'dbid'    =>  $id,
                'message' => ''
            ]);

            exit();

        }

        return \Response::json([
            'msg' => 'err',
            'message' => 'Not know err. server problem'
        ]);

        exit();

    }

// han 2020-10-21 start
    public function getSiteLogoStylelist(Request $request){

        $start  = $request->post('start');
        $cnt    = $request->post('cnt');
        $filter = $request->post('filter');
        $start_from = ($start-1) * $cnt;

        if ($filter === 1)
        {
            $lists = DB::table('sitelogoimgstyle')
                ->where('g_path', $this->g_path)
                ->orderByDesc('id')
                ->offset($start_from)->limit($cnt)->get();

            $rows = DB::table('sitelogoimgstyle')
                ->where('g_path', $this->g_path)->get();

            $total = count($rows);
            $totalpage = ceil($total / $cnt);

            if ($total > 0) {
                return \Response::json([
                    'msg' => 'ok',
                    'total' => $total,
                    'start' => $start,
                    'totalpage' => $totalpage,
                    'list' => $lists
                ]);
            } else {
                return \Response::json([
                    'msg' => "err",
                    'total' => $total,
                    'message' => 'empty data in database'
                ]);
            }
        } else if ($filter === 0) {
            $lists = DB::table('sitelogoimgstyle')
                ->where('g_path', $this->g_path)->orderByDesc('id')->get();

            if (count($lists) > 0) {
                return \Response::json([
                    'msg' => 'ok',
                    'list' => $lists
                ]);
            } else {
                return \Response::json([
                    'msg' => 'err',
                    'message' => 'empty data in database'
                ]);
            }
        }
        exit();
    }
// han 2020-10-21 end



    public function savelogoimgstyle(Request $request)
    {
        $name=$request->post('name');
        $size=$request->post('size');
        $style=$request->post('style');
        $etypee=$request->post('etype');
        $cid=$request->post('cid');

        $capacity=$request->post('capacity');
        $jpg=$request->post('jpg');
        $png=$request->post('png');
        $gif=$request->post('gif');
        $tga=$request->post('tga');

        $imgtype=array(
            "jpg"=>$jpg,
            "png"=>$png,
            "gif"=>$gif,
            "tga"=>$tga
        );
        $imgjson= json_encode($imgtype);

        $createtime = date("Y-m-d h:i:s", time());
        $iid=0;
        if($etypee=='change' && $cid > 0){

            try{
                DB::table('sitelogoimgstyle')
                    ->Where('id', $cid)
                    ->update([
                    'name' => strtolower($name)
                    , 'size' => $size
                    , 'style' => $style
                    , 'capacity'=>$capacity
                    , 'imgtype'=>$imgjson
                    , 'updated_at' => $createtime
                ]);
                $iid=1;
            }
            catch(\Exception $e){}
        }
        else
        {
            $iid =  DB::table('sitelogoimgstyle')->insertGetId(
                [   'name' => strtolower($name)
                    , 'size' => $size
                    , 'style' => $style
                    , 'capacity'=>$capacity
                    , 'imgtype'=>$imgjson
                    , 'created_at' => $createtime
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
                'msg'  =>  "err",
                'message' => "Error insert in db"
            ]);
        }

        exit();
    }

    public function savesitefieldemail(Request $request)
    {
        $userid=$request->post('userid');
        $email=$request->post('email');
        $etypee=$request->post('etype');
        $cid=$request->post('cid');

        $createtime = date("Y-m-d h:i:s", time());
        $iid=0;
        $userMD = new UserModel;

        if($etypee=='change' && $cid > 0)
        {
            $email = $userMD->changeEmailSecurity($email, true);
            try{

                DB::table('sitefieldemail')->Where('id', $cid)->update([
                    'userid' => $userid
                    , 'email' => $email
                    , 'updated_at' => $createtime
                ]);
                $iid=1;
            }
            catch(\Exception $e){}
        }
        else
        {

            $email = $userMD->changeEmailSecurity($email, true);
            $rows =  DB::table('sitefieldemail')->Where('email', $email)->get();
            $cnt = count($rows);
            if($cnt > 0)
            {
                return \Response::json([
                    'msg'  =>  "duplicate"
                ]);

                exit();
            }
            $iid =  DB::table('sitefieldemail')->insertGetId(
                [   'userid' => $userid
                    , 'email' => $email
                    , 'created_at' => $createtime
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
                'msg'  =>  "err",
                'message' => "Error insert in db"
            ]);
        }

        exit();
    }

    public function deleteSiteEmaillist(Request $request){
        $id=$request->post('id');
        $value=$request->post('value');
        $ret=1;
        try{
            DB::table('sitefieldemail')->where('id', $id)->delete();
        }
        catch (\Exception $e)
        {
            $ret=0;
        }

        if ($ret)
        {
            return \Response::json([
                'msg' => 'ok'
            ]);
        }
        else
        {
            return \Response::json([
                'msg' => 'error: database controll'
            ]);
        }

        exit();
    }

    public function chageSiteLogoStylelist(Request $request){

        $id=$request->post('id');
        $value=$request->post('value');

        if($value=='delete')
        {
            $ret=1;
            try{
                DB::table('sitelogoimgstyle')
                    ->where('id', $id)
                    ->delete();
            }
            catch (\Exception $e)
            {
                $ret=0;
            }

            if ($ret)
            {
                return \Response::json([
                    'msg' => 'ok'
                ]);
            }
            else
            {
                return \Response::json([
                    'msg' => 'error: database controll'
                ]);
            }

        }

        exit();

    }

    public function chageSiteFootMaxTxt(Request $request){
        $value=$request->post('value');
        $mxval = intval($value);

        $createtime = date("Y-m-d h:i:s", time());

        $cnt = DB::table('footstylecont')->where('g_path', $this->g_path)->count();
        if($cnt>0)
        {
            try{
                $affected = DB::table('footstylecont')
                    ->where('g_path', $this->g_path)
                    ->update([
                    'leftmaxtext' => $mxval
                    , 'centmaxtext' => $mxval
                    , 'rightmaxtext' => $mxval
                ]);

                return \Response::json([
                    'msg'  =>  "ok"
                ]);

            }
            catch(\Exception $e)
            {
                return \Response::json([
                    'msg'  =>  "Error update in database"
                ]);
            }

        }
        else{
            $iid =  DB::table('footstylecont')->insertGetId(
                [   'leftmaxtext' => $mxval
                    , 'centmaxtext' => $mxval
                    , 'rightmaxtext' => $mxval
                    , 'created_at' => $createtime
                    , 'g_path'=>$this->g_path
                ]
            );

            if($iid > 0){
                return \Response::json([
                    'msg'  =>  "ok"
                ]);
            }
            else
            {
                return \Response::json([
                    'msg'  =>  "Error update in database"
                ]);
            }

        }

        exit();

    }


    public function getSFEmailList(Request $request)
    {
        $start  = $request->post('start');
        $cnt    = $request->post('cnt');
        $start_from = ($start-1) * $cnt;

        $userMD = new UserModel;

        $lists = DB::table('sitefieldemail')->orderByDesc('id')->offset($start_from)->limit($cnt)->get();

        for($i=0; $i < count($lists); $i++)
        {
            $row = $lists[$i];
            $email = $row->email;
            $row->email = $userMD->changeEmailSecurity($email, false);
            $lists[$i] =$row;
        }

        $rows =   DB::table('sitefieldemail')->get();
        $total = count($rows);
        $totalpage = ceil($total / $cnt);

        if($total > 0)
        {
            return \Response::json([
                'msg'   =>  'ok',
                'total'    =>  $total,
                'start'    =>  $start,
                'totalpage'    =>  $totalpage,
                'list' =>  $lists
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "err",
                'total'    =>  $total,
                'message' => 'empty data in database'
            ]);
        }

        exit();
    }
// han 2020-10-17 start
    public function getSiteNumlist(Request $request)
    {
        $filter = $request->post('filter');
        $start  = $request->post('start');
        $cnt    = $request->post('cnt');

        if ($filter === 1) {
            $start_from = ($start - 1) * $cnt;

            $lists = DB::table('sitefieldnumber')->orderByDesc('id')->offset($start_from)->limit($cnt)->get();

            $rows = DB::table('sitefieldnumber')->get();
            $total = $rows;
            $totalpage = ceil(count($total) / $cnt);

            if (count($total) > 0) {
                return \Response::json([
                    'msg' => 'ok',
                    'total' => $total,
                    'start' => $start,
                    'totalpage' => $totalpage,
                    'list' => $lists
                ]);
            } else {
                return \Response::json([
                    'msg' => "err",
                    'total' => $total,
                    'message' => 'empty data in database'
                ]);
            }
        } else if ($filter === 0) {
            $lists = DB::table('sitefieldnumber')->orderByDesc('id')->get();

            if (count($lists) > 0) {
                return \Response::json([
                    'msg' => 'ok',
                    'list' => $lists
                ]);
            } else {
                return \Response::json([
                    'msg' => 'err',
                    'message' => 'empty data in database'
                ]);
            }
        }
        exit();
    }
// han 2020-10-17 end
    public function deleteSiteNumber(Request $request){
        $id=$request->post('id');
        $value=$request->post('value');
        $ret=1;
        try{
            DB::table('sitefieldnumber')->where('id', $id)->delete();
        }
        catch (\Exception $e)
        {
            $ret=0;
        }

        if ($ret)
        {
            return \Response::json([
                'msg' => 'ok'
            ]);
        }
        else
        {
            return \Response::json([
                'msg' => 'error: database controll'
            ]);
        }

        exit();
    }

    public function savesitefieldnumber(Request $request){

        $fname=$request->post('fname');
	    $fnumber=$request->post('fnumber');
        $fsize=$request->post('fsize');
        $lineheight=$request->post('lineheight');
        $fwstyle=$request->post('fwstyle');
        $etypee=$request->post('etype');
        $cid=$request->post('cid');

        $createtime = date("Y-m-d h:i:s", time());
        $iid=0;

        if($etypee=='change' && $cid > 0)
        {

            try{

                DB::table('sitefieldnumber')->Where('id', $cid)->update([
                    'fname' => $fname
		            , 'fnumber' => $fnumber
                    , 'fontsize' => $fsize
                    , 'flineheight' => $lineheight
                    , 'fweightstyle' => $fwstyle
                    , 'updated_at' => $createtime
                ]);
                $iid=1;
            }
            catch(\Exception $e){}
        }
        else
        {

            $iid =  DB::table('sitefieldnumber')->insertGetId(
                [
                    'fname' => $fname
		            , 'fnumber' => $fnumber
                    , 'fontsize' => $fsize
                    , 'flineheight' => $lineheight
                    , 'fweightstyle' => $fwstyle
                    , 'created_at' => $createtime
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
                'msg'  =>  "err",
                'message' => "Error insert in db"
            ]);
        }

        exit();
    }
// han 2020-10-17 start
    public function updatesitefieldnumber(Request $request) {
        $fname = $request->post('fname');
        $fnumber = $request->post('fnumber');

        $iid = 0;
        try {

            DB::table('sitefieldnumber')
                ->where('fname', strtolower($fname))
                ->update(['fnumber'=>strtolower($fnumber)]);

            $iid=1;
        } catch (\Exception $e){

        }

        if ($iid > 0) {
            return \Response::json([
                'msg' => "ok"
            ]);
        }
        else
        {
            return \Response::json([
                'msg' => 'err',
                'message' => 'Error update in db'
            ]);
        }
    }
// han 2020-10-17 end
    /* new */
    public function setSiteFaveritelist(Request $request){
        $linkid=$request->post('linkid');
        $pagename=$request->post('pagename');
        $pagemenu=$request->post('pagemenu');
        $createtime = date("Y-m-d h:i:s", time());

        $id =  DB::table('sitefaveritepage')
            ->updateOrInsert(
                ['linkid' => $linkid],
                [
                    'pagename' => $pagename
                    , 'pagemenu' => $pagemenu
                    , 'created_at' => $createtime
                ]
            );

        return \Response::json([
            'msg'  =>  "ok",
            'id' => $id
        ]);
    }

    public function getDashboardFavicon()
    {
        $favico = DB::table('sitelogoinfo')
            ->Where([
                ['site_logtype', 'fav'],
                ['g_path', $this->g_path]
            ])->get()->first();
        $icon = "";
        if($favico === null || !isset($favico))
            $icon='/wes-logo.ico';
        else
            $icon = '/images/'.$favico->site_logname;
        return $icon;
    }

    /* favor */
    public function getSiteFaveritelists($userinfo_id)
    {
        $lists = DB::table('sitefaveritepage')
            ->Where([
                ['userinfo_id', $userinfo_id],
                ['g_path', $this->g_path]
            ])->get();
        if($lists === null || !isset($lists))
            $lists='';
        return $lists;
    }

    public function getSiteFaveritelist(Request $request){

        $linkid=$request->post('linkid');
        if(empty($linkid))
        {
            $lists = DB::table('sitefaveritepage')
                ->where('g_path', $this->g_path)->get();
            if($lists === null || !isset($lists))
                $lists='';
            return \Response::json([
                'msg'  =>  "ok",
                'list' => $lists
            ]);
        }
        else
        {
            $list = DB::table('sitefaveritepage')
                ->Where([
                    ['linkid', $linkid],
                    ['g_path', $this->g_path]
                ])->get()->first();
            if($list === null || !isset($list))
                $list='';
            return \Response::json([
                'msg'  =>  "ok",
                'list' => $list
            ]);
        }

        exit();
    }

    public function delSiteFaveritelist(Request $request){
        $linkid=$request->post('linkid');
        $ret=1;
        try{
            DB::table('sitefaveritepage')
                ->Where([
                    ['linkid', $linkid],
                    ['g_path', $this->g_path]
                ])->delete();
        }
        catch (\Exception $e)
        {
            $ret=0;
        }
        return \Response::json([
            'msg'  =>  "ok",
            'message' => $ret
        ]);

        exit();
    }

    //lang part
    public function getsslangbyiso(Request $request){
        $iso=$request->post('iso');
        $org_iso=$request->post('orgiso');
        $searchcont  = $request->post('searchcont');
        $cnt    = $request->post('cnt');
        $start  = $request->post('start');
        $start_from = ($start-1) * $cnt;

        $where =" iso = '".$org_iso."'";
        if($searchcont!=null && $searchcont!=''){
            $where .=' and str_cont like "%'.$searchcont.'%" ';
        }
        $lists = DB::table('sitetranslatecont')->whereRaw($where)->orderBy('id')->offset($start_from)->limit($cnt)->get();
        $rows =   DB::table('sitetranslatecont')->whereRaw($where)->get();
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
                    $row = DB::table('sitetranslatecont')
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

    public function deletesslangbyiso(Request $request){
        $iso=$request->post('iso');
        $str_type=$request->post('str_type');
        $str_key  = $request->post('str_key');
        $ret=1;
        try{
            DB::table('sitetranslatecont')
              ->Where([
                ['str_type', $str_type],
                ['str_key', $str_key],
                ['iso', $iso]
            ])->delete();
        }
        catch (\Exception $e)
        {
            $ret=0;
        }
        if ($ret)
        {
            return \Response::json([
                'msg' => 'ok',
                'iso'    =>  $iso
            ]);
        }
        else
        {
            return \Response::json([
                'msg' => 'error: database controll',
                'iso'    =>  $iso
            ]);
        }
        exit();
    }

    public function changesslangbyiso(Request $request){
        $iso=$request->post('iso');
        $str_key=$request->post('str_key');
        $str_type  = $request->post('str_type');
        $str_cont    = $request->post('str_cont');
        $value    = $request->post('value');
        $str_fname    = $request->post('str_fname');

        $createtime = date("Y-m-d h:i:s", time());
        $iid=0;
        if($value=='change' && $iso != '' && $iso != null)
        {
            try{

                DB::table('sitetranslatecont')
                    ->Where([
                        ['str_type', $str_type],
                        ['str_key', $str_key],
                        ['iso', $iso]
                    ])->update([
                        'str_cont' => $str_cont
                        , 'updated_at' => $createtime
                    ]);
                $iid=1;


            }
            catch(\Exception $e){}
        }
        else //add
        {
            $iid =  DB::table('sitetranslatecont')->insertGetId(
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


    public function getSiteContentsBylocalekey(Request $request){

        $iso=$request->post('iso');
        $field =  $request->post('field');
        $field = isset($field) ? $field : '';

        /*$curlang = DB::table('weslangs')->where([
            ['iso', '=', $iso]
        ])->get()->first();
        if($curlang==null || empty($curlang))
            $localeiso='1';
        else
            $localeiso = $curlang->dialcode;*/

        $subsql='';
        if(empty($field))
            $subsql='';
        else
        {
            $qstr =  $request->post('qstr');
            $subsql=' and '.$field.' LIKE "'.$qstr.'%" ';
        }

        $querystr=" SELECT  IFNULL(b.id, a.id) as id, ";
        $querystr.=" IFNULL(b.str_type, a.str_type) AS str_type, ";
        $querystr.=" IFNULL(b.str_key, a.str_key) AS str_key, ";
        $querystr.=" IFNULL(a.str_cont, '') AS str_cont, ";
        $querystr.=" IFNULL(b.str_cont, '') AS iso_cont, ";
        $querystr.=" IFNULL(b.str_link, a.str_link) AS str_link, ";
        $querystr.=" IFNULL(b.iso, 'en') AS iso";
        $querystr.=" FROM";
        $querystr.=" (SELECT id, str_type, str_key, str_cont,str_link, iso";
        $querystr.=" FROM sitetranslatecont";
        $querystr.=" WHERE iso='en' ".$subsql.") AS a";
        $querystr.=" LEFT JOIN";
        $querystr.=" (SELECT id, str_type, str_key, str_cont,str_link, iso";
        $querystr.=" FROM sitetranslatecont";
        $querystr.=" WHERE iso='".$iso."') AS b";
        $querystr.=" ON a.str_key = b.str_key AND a.str_type = b.str_type";
        $rows = DB::select( DB::raw($querystr) );
        $returnarray=array();

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
        $translateClient=null;
        $createtime = date("Y-m-d h:i:s", time());
        try{
            $config['default_target_translation']= $giso;
            $config['api_key']='AIzaSyDiZHLEFfLEkexBLxV-3C9Q3al1Klj_9oU';
            $translateClient = new GoogleTranslateClient($config);
        } catch(\Exception $e){
            $config['default_target_translation']='en';
            $config['api_key']='AIzaSyDiZHLEFfLEkexBLxV-3C9Q3al1Klj_9oU';
            $translateClient = new GoogleTranslateClient($config);
        }
        $google_enable=true;
        for($i=0;$i < count($rows); $i++)
        {
            $row = $rows[$i];
            $str_type=$row->str_type;
            $str_key=$row->str_key;
            $str_link = $row->str_link;
            $contentKey = $str_type.'_'.$str_key;
            $iso_cont =$row->iso_cont;
            $defstr_cont = $row->str_cont;

            if($translateClient!==null)
            {

                if (empty($iso_cont))
                {
                    try {
                        $transed = $translateClient->translate($defstr_cont, $giso);
                        $text = $transed['text'];
                        if (empty($text))
                            $str_cont = $defstr_cont;
                        else
                        {
                            $str_cont = $text;
                            $iid = DB::table('sitetranslatecont')->insertGetId(
                                [
                                    'str_type' => $str_type
                                    , 'str_key' => $str_key
                                    , 'str_cont' => $str_cont
                                    , 'str_link' => $str_link
                                    , 'iso' => $iso
                                    , 'created_at' => $createtime
                                ]
                            );
                        }

                    } catch (\Exception $e) {
                        $str_cont = $defstr_cont;
                        $google_enable=false;
                    }
                }
                else
                    $str_cont = $row->iso_cont;
            }

            if($translateClient===null || $google_enable===false)
            {
                $commonctrl = new CommonController;
                $templang=array();
                array_push($templang, array ('Text' =>$defstr_cont));
                if (empty($iso_cont))
                {
                    $transed = $commonctrl->Translate($giso, $templang);
                    if (empty($transed)){
                        $str_cont = $defstr_cont;
                    }
                    else
                    {
                        $transed = json_decode($transed);
                        foreach ($transed as $tt)
                        {
                            foreach ($tt as $t)
                            {
                                $str_cont = $t[0]->text;
                                break;
                            }
                            break;
                        }

                        $iid = DB::table('sitetranslatecont')->insertGetId(
                            [
                                'str_type' => $str_type
                                , 'str_key' => $str_key
                                , 'str_cont' => $str_cont
                                , 'str_link' => $str_link
                                , 'iso' => $iso
                                , 'created_at' => $createtime
                            ]
                        );
                    }

                }
                else
                    $str_cont = $row->iso_cont;
            }

            $returnarray[$contentKey]=$str_cont;
        }
        $returnarray = json_encode($returnarray);
        return \Response::json([
            'msg'   =>  'ok',
            'list' =>  $returnarray
        ]);

        exit();
    }

    public function addTranslatedLangs(Request $request){
        $langstrs = $request->post('strs');
        $iso = $request->post('iso');
        $curlang = DB::table('weslangs')->where([
            ['iso', '=', $iso]
        ])->get()->first();
        $localeiso = $curlang->dialcode;
        $arrays=array();
        foreach ($langstrs as $key => $value){
            $mustr=explode('_',$key);
            $str_type="";
            $str_key="";
            for($i=0;$i<count($mustr);$i++){
                if($i==0)
                    $str_type = $mustr[$i];
                else
                    $str_key .= $mustr[$i].'_';
            }
            $str_key = rtrim($str_key,'_');
            $itemarray=array();
            $itemarray['str_type']=$str_type;
            $itemarray['str_key']=$str_key;
            $itemarray['str_cont']=$value;
            $itemarray['str_link']='';
            $itemarray['iso']=$localeiso;
            $createtime = date("Y-m-d h:i:s", time());
            $itemarray['created_at']=$createtime;

            $row = DB::table('sitetranslatecont')
                ->Where([
                    ['iso', $localeiso],
                    ['str_type', $str_type],
                    ['str_key', $str_key]
                ])->get()->first();

            if($row==null || empty($row))
            {
                array_push($arrays, $itemarray);
            }
        }
        /* foreach ($arr_str as $list)
         {
             if(empty($list)) continue;
             $keystr=explode(':',$list);
             $mustr=explode('_',$keystr[0]);
             $str_cont=$keystr[1];
             $str_type="";
             $str_key="";
             for($i=0;$i<count($mustr);$i++){
                 if($i==0)
                  $str_type = $mustr[$i];
                 else
                  $str_key .= $mustr[$i].'_';
             }
             $str_key = rtrim($str_key,'_');
             $itemarray=array();
             $itemarray['str_type']=$str_type;
             $itemarray['str_key']=$str_key;
             $itemarray['str_cont']=$str_cont;
             $itemarray['str_link']='';
             $itemarray['iso']=$localeiso;
             $createtime = date("Y-m-d h:i:s", time());
             $itemarray['created_at']=$createtime;
             array_push($arrays, $itemarray);
         }
 */
        $rt = DB::table('sitetranslatecont')->insert($arrays);
        $msg='err';
        if($rt){
            $msg='ok';
        }
        return \Response::json([
            'msg'   =>  $msg
        ]);
    }

    public function getSiteContentsBylocale(Request $request){

        $iso=$request->post('iso');
        $field =  $request->post('field');
        $field = isset($field) ? $field : '';

        $curlang = DB::table('weslangs')->where([
            ['iso', '=', $iso]
        ])->get()->first();
        $localeiso = $curlang->dialcode;

        $subsql='';
        if(empty($field))
            $subsql='';
        else
        {
            $qstr =  $request->post('qstr');
            $subsql=' and '.$field.' like "'.$qstr.'%" ';
        }

        $querystr=" SELECT  IFNULL(b.id, a.id) as id, ";
        $querystr.=" IFNULL(b.str_type, a.str_type) AS str_type, ";
        $querystr.=" IFNULL(b.str_key, a.str_key) AS str_key, ";
        $querystr.=" IFNULL(b.str_cont, a.str_cont) AS str_cont ,";
        $querystr.=" IFNULL(a.str_link, '') AS str_link,";
        $querystr.=" IFNULL(b.iso, '1') AS iso";
        $querystr.=" from";
        $querystr.=" (SELECT id, str_type, str_key, str_cont,str_link, iso";
        $querystr.="  FROM sitetranslatecont";
        $querystr.="  WHERE iso='1' ".$subsql.") AS a";
        $querystr.=" LEFT JOIN";
        $querystr.=" (SELECT id, str_type, str_key, str_cont,str_link, iso";
        $querystr.=" FROM sitetranslatecont";
        $querystr.="  WHERE iso='".$localeiso."') AS b";
        $querystr.=" ON a.str_key = b.str_key AND a.str_type = b.str_type";

        $rows = DB::select( DB::raw($querystr) );
        /*
                $rows = DB::table('sitetranslatecont')->where('iso','1')->get();
                $rowcnt=count($rows);
                if(!empty($localeiso))
                {
                    for($i=0; $i<$rowcnt; $i++)
                    {
                        $row = $rows[$i];
                        $str_type = $row->str_type;
                        $str_key = $row->str_key;
                        $row_locale = DB::table('sitetranslatecont')
                            ->where('iso',$localeiso)
                            ->where('str_type',$str_type)
                            ->where('str_key',$str_key)->get()->first();
                        if($row_locale!=null){
                            $row->str_cont=$row_locale->str_cont;
                            $row->iso = $localeiso;
                        }

                        $rows[$i]=$row;
                    }
                }
        */
        return \Response::json([
            'msg'   =>  'ok',
            'list' =>  $rows
        ]);

        exit();
    }

    /* tiny editor */
    public  function UpdateWWGBarCenterImg(Request $request){
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

    /* pre ckeditor */
    public  function UpdateWWGBarCenterImg_(Request $request){
        $file = $request->file('upload');
        try {
            if($file !==null){
                $destinationPath = 'uploads/images/wesimg/';
                $filename = time().'-'.$file->getClientOriginalName();

				/*if($this->g_path!=="local")
				{
					$this->filesystem->write('/'.$destinationPath.$filename, file_get_contents($file));//ckd
				}
				else*/
				{
					$file->move(public_path().'/'.$destinationPath, $filename);
				}

                $imageUrl = $destinationPath.$filename;

                return \Response::json([
                    'url' => $imageUrl,
                    'imgname' => $filename
                ]);
            }
        }
        catch (\Exception $e)
        {
            return \Response::json([
                'url' => '',
                'imgname' => ''
            ]);
        }

        return \Response::json([
            'url' => '',
            'imgname' => ''
        ]);

        exit();

    }
    public function setSiteLogoStyleState(Request $request){

        $id =  $request->post('id');

        DB::table('sitelogoimgstyle')
            ->where('g_path', $this->g_path)
            ->update(
                [
                    'state' => 'off'
                ]
            );

        DB::table('sitelogoimgstyle')
            ->Where('id', $id)->update([
                    'state' => 'on'
                ]);
        return \Response::json([
            'msg'   =>  'ok'
        ]);

        exit();
    }

    public function getWebsWesGlobalUpload(Request $request)
    {
        $tranedLang = $request->post('tedLang');
        $field = $request->post('wwgfield');
        $device = $request->post('device');
        /*$iso_dialcode = explode('-',$tranedLang);
        $row = DB::table('webwesglobal_lang')
            ->where([
                'iso',$iso_dialcode[0],
                'dialcode',$iso_dialcode[1]
                ])
            ->get()->first();*/
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

            $row = DB::table('webwesglobal_appea')
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

            $row = DB::table('webwesglobal_appea')
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

    public  function WebsWesGlobalUpload(Request $request){
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

                $row = DB::table('webwesglobal_appea')
                    ->whereRaw($where)->get()->first();



                //$mid = DB::table('webwesglobal_appea')->max('id');
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
                    $sucess =  DB::table('webwesglobal_appea')
                        ->Where('id', $mid)
                        ->update(['head' => $head, 'is_head' => 0]);
                }
                else
                {
                    $sucess =  DB::table('webwesglobal_appea')->insertGetId(
                        [
                            'device' => $device,
                            'trans' => $tranedLang,
                            'head' => $head,
                            'is_head' => 0,
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

					/*if($this->g_path!=="local")
                    {
                        $this->filesystem->write('/'.$destinationPath0.$filename0, file_get_contents($wwga_footbarleft_upload));//ckd
                        if(!empty($wwga_footbarleft_upload_preview_temp)&& $this->filesystem->has('/'.$destinationPath0.$wwga_footbarleft_upload_preview_temp))
                            $this->filesystem->delete('/'.$destinationPath0.$wwga_footbarleft_upload_preview_temp);

                    }
                    else*/
                        {
                        $wwga_footbarleft_upload->move(public_path().'/'.$destinationPath0, $filename0);
                        if(!empty($wwga_footbarleft_upload_preview_temp))
                          @unlink(public_path().'/'.$destinationPath0.$wwga_footbarleft_upload_preview_temp);
                    }
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

					/*if($this->g_path!=="local")
                    {
                        $this->filesystem->write('/'.$destinationPath1.$filename1, file_get_contents($wwga_footbarcent_upload));//ckd
                        if(!empty($wwga_footbarcent_upload_preview_temp)&& $this->filesystem->has('/'.$destinationPath1.$wwga_footbarcent_upload_preview_temp))
                            $this->filesystem->delete('/'.$destinationPath1.$wwga_footbarcent_upload_preview_temp);

                    }
                    else*/
                        {
                         $wwga_footbarcent_upload->move(public_path().'/'.$destinationPath1, $filename1);
                        if(!empty($wwga_footbarcent_upload_preview_temp))
                          @unlink(public_path().'/'.$destinationPath1.$wwga_footbarcent_upload_preview_temp);
                    }

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
					/*if($this->g_path!=="local")
                    {
                        $this->filesystem->write('/'.$destinationPath2.$filename2, file_get_contents($wwga_footbarright_upload));//ckd
                        if(!empty($wwga_footbarright_upload_preview_temp)&& $this->filesystem->has('/'.$destinationPath2.$wwga_footbarright_upload_preview_temp))
                            $this->filesystem->delete('/'.$destinationPath2.$wwga_footbarright_upload_preview_temp);

                    }
                    else*/
                        {
                         $wwga_footbarright_upload->move(public_path().'/'.$destinationPath2, $filename2);
                        if(!empty($wwga_footbarright_upload_preview_temp))
                          @unlink(public_path().'/'.$destinationPath2.$wwga_footbarright_upload_preview_temp);
                    }

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

                $row = DB::table('webwesglobal_appea')
                    ->whereRaw($where)->get()->first();


                /*$mid = DB::table('webwesglobal_appea')->max('id');*/
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
                    $sucess =  DB::table('webwesglobal_appea')
                        ->Where('id', $mid)
                        ->update(['foot' => $foot, 'is_foot' => 0]);
                }
                else
                {
                    $sucess =  DB::table('webwesglobal_appea')->insertGetId(
                        [
                            'device' => $device,
                            'trans' => $tranedLang,
                            'foot' => $foot,
                            'is_foot' => 0,
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

    public  function WebsWesGlobalMenuUpload(Request $request){

        $tansLang = $request->post('tranedLang');
        $field=$request->post('wwgafrm');
        $device = $request->post('device');

        $wwgm_footbarleft = $request->post('wwgm_footbarleft');
        $wwgm_footbarleftcolorpicker_val=$request->post('wwgm_footbarleftcolorpicker_val');
        $fontlefttitle = $request->post('wwgm_footbarleft_fonttitle');
        $wwgm_footbarleft_fontsize_s=$request->post('wwgm_footbarleft_fontsize_s');
        $wwgm_fontleftcont=$request->post('wwgm_fontleftcont');
        $wwgm_fontleftlink=$request->post('wwgm_fontleftlink');
        $wwgm_createdate0=$request->post('wwgm_createdate0');
        $editor0 = $request->post('editcont0');
        if($editor0!==null && $editor0 !== '')
            $editor0 = htmlentities($editor0);//html_entity_decode

        $wwgm_footbar_cent = $request->post('wwgm_footbar_cent');
        $wwgm_footbarcentcolorpicker_val=$request->post('wwgm_footbarcentcolorpicker_val');
        $fontcenttitle = $request->post('wwgm_footbarcent_fonttitle');
        $wwgm_footbarcent_fontsize_s=$request->post('wwgm_footbarcent_fontsize_s');
        $wwgm_fontcentcont=$request->post('wwgm_fontcentcont');
        $wwgm_fontcentlink=$request->post('wwgm_fontcentlink');
        $wwgm_createdate1=$request->post('wwgm_createdate1');

        $editor1 = $request->post('editcont1');
        if($editor1!==null && $editor1 !== '')
            $editor1 = htmlentities($editor1);//html_entity_decode


        $wwgm_footbar_right = $request->post('wwgm_footbar_right');
        $wwgm_footbarrightcolorpicker_val=$request->post('wwgm_footbarrightcolorpicker_val');
        $fontrighttitle = $request->post('wwgm_footbarright_fonttitle');
        $wwgm_footbarright_fontsize_s=$request->post('wwgm_footbarright_fontsize_s');
        /*$wwgm_fontrightcont=$request->post('wwgm_fontrightcont');
        $wwgm_fontrightlink=$request->post('wwgm_fontrightlink');*/
        $wwgm_footbarright_contenttype_s=$request->post('wwgm_footbarright_contenttype_s');
        $wwgm_footbarright_orderby_s=$request->post('wwgm_footbarright_orderby_s');
        $wwgm_footbarright_number_i=$request->post('wwgm_footbarright_number_i');

        $editor2 = $request->post('editcont2');
        if($editor2!==null && $editor2 !== '')
            $editor2 = htmlentities($editor2);//html_entity_decode


        $wwgm_footbarleft_upload_preview_temp=$request->post('wwgm_footbarleft_upload_preview_temp');
        $wwgm_footbarcent_upload_preview_temp=$request->post('wwgm_footbarcent_upload_preview_temp');
        $wwgm_footbarright_upload_preview_temp=$request->post('wwgm_footbarright_upload_preview_temp');
        //$wwgm_news=$request->post('wwgm_news');

        $wwgm_footbarleft_upload = $request->file('wwgm_footbarleft_upload');
        $wwgm_footbarcent_upload = $request->file('wwgm_footbarcent_upload');
        $wwgm_footbarright_upload = $request->file('wwgm_footbarright_upload');
        try {
            $filename0='';
            if(!file_exists($_FILES['wwgm_footbarleft_upload']['tmp_name'])){
                if($wwgm_footbarleft_upload_preview_temp!=null && !empty($wwgm_footbarleft_upload_preview_temp))
                    $filename0=$wwgm_footbarleft_upload_preview_temp;
                else
                    $filename0='';
            }
            else{
                $destinationPath0 = 'uploads/images/wesimg/';
                $filename0 = time().'-'.$wwgm_footbarleft_upload->getClientOriginalName();

                $wwgm_footbarleft_upload->move(public_path().'/'.$destinationPath0, $filename0);
                if(!empty($wwgm_footbarleft_upload_preview_temp))
                    @unlink(public_path().'/'.$destinationPath0.$wwgm_footbarleft_upload_preview_temp);
            }

            $fontcontlinks0='';
            if($wwgm_fontleftcont!=null && !empty($wwgm_fontleftcont))
            {
                foreach( $wwgm_fontleftcont as $key => $n ) {
                    $linkval ='';
                    if($wwgm_fontleftlink[$key]!=null && !empty($wwgm_fontleftlink[$key])){
                        $linkval =$wwgm_fontleftlink[$key];
                    }
                    $dateval ='';
                    if($wwgm_createdate0[$key]!=null && !empty($wwgm_createdate0[$key])){
                        $dateval =$wwgm_createdate0[$key];
                    }
                    $fontcontlinks0.=$n.':'.$linkval.':'.$dateval.',';
                }

                $fontcontlinks0 = rtrim($fontcontlinks0,',');
            }

            $filename1='';
            if(!file_exists($_FILES['wwgm_footbarcent_upload']['tmp_name'])){
                if($wwgm_footbarcent_upload_preview_temp!=null && !empty($wwgm_footbarcent_upload_preview_temp))
                    $filename1=$wwgm_footbarcent_upload_preview_temp;
                else
                    $filename1='';
            }
            else{
                $destinationPath1 = 'uploads/images/wesimg/';
                $filename1 = time().'-'.$wwgm_footbarcent_upload->getClientOriginalName();
                $wwgm_footbarcent_upload->move(public_path().'/'.$destinationPath1, $filename1);
                if(!empty($wwgm_footbarcent_upload_preview_temp))
                    @unlink(public_path().'/'.$destinationPath1.$wwgm_footbarcent_upload_preview_temp);
            }

            $fontcontlinks1='';
            if($wwgm_fontcentcont!=null && !empty($wwgm_fontcentcont))
            {
                foreach( $wwgm_fontcentcont as $key => $n ) {
                    $linkval ='';
                    if($wwgm_fontcentcont[$key]!=null && !empty($wwgm_fontcentlink[$key])){
                        $linkval =$wwgm_fontcentlink[$key];
                    }
                    $dateval ='';
                    if($wwgm_createdate1[$key]!=null && !empty($wwgm_createdate1[$key])){
                        $dateval =$wwgm_createdate1[$key];
                    }
                    $fontcontlinks1.=$n.':'.$linkval.':'.$dateval.',';
                }

                $fontcontlinks1 = rtrim($fontcontlinks1,',');
            }

            $filename2='';
            if(!file_exists($_FILES['wwgm_footbarright_upload']['tmp_name'])){
                if($wwgm_footbarright_upload_preview_temp!=null && !empty($wwgm_footbarright_upload_preview_temp))
                    $filename2=$wwgm_footbarright_upload_preview_temp;
                else
                    $filename2='';
            }
            else{
                $destinationPath2 = 'uploads/images/wesimg/';
                $filename2 = time().'-'.$wwgm_footbarright_upload->getClientOriginalName();
                $wwgm_footbarright_upload->move(public_path().'/'.$destinationPath2, $filename2);
                if(!empty($wwgm_footbarright_upload_preview_temp))
                    @unlink(public_path().'/'.$destinationPath2.$wwgm_footbarright_upload_preview_temp);
            }

            $where = 'g_path = "'.$this->g_path.'"';
            /*if($device!==null && $device !== '')
            {
                $where.=' and device = "'.$device.'"';
            }*/
            if($tansLang!==null && $tansLang !== '')
            {
                $where.=' and trans = "'.$tansLang.'"';
            }

            $row = DB::table('webwesglobal_appea')
                ->select(DB::raw('id, footmenu'))
                ->whereRaw($where)->get()->first();



            if($row===null)
                $mid=0;
            else
                $mid=1;
           /* $mid = DB::table('webwesglobal_appea')->max('id');*/
            $menu2contlinks = "";
            if($wwgm_footbarright_number_i == null || $wwgm_footbarright_number_i == 0 || $wwgm_footbarright_number_i > 4)
                $wwgm_footbarright_number_i = 4;
            $query ='SELECT * FROM wes_pagecontent ';
            $query.='WHERE pagetypeId='.$wwgm_footbarright_contenttype_s.' AND trans="'.$tansLang.'" ';
            $query.='ORDER BY id '.$wwgm_footbarright_orderby_s.' ';
            $query.='LIMIT 0, '.$wwgm_footbarright_number_i.'';
            $content3 = DB::select($query);

            if(count($content3) > 0){
                for($i = 0; $i < count($content3); $i++){
                    if($i == count($content3) - 1)
                        $menu2contlinks.=$content3[$i]->title.':'.$content3[$i]->url.'';
                    else
                        $menu2contlinks.=$content3[$i]->title.':'.$content3[$i]->url.',';
                }
            }

            $foot=array(
                'menu0style' =>$wwgm_footbarleft,
                'menu0fontcolor' =>$wwgm_footbarleftcolorpicker_val,
                'menu0fonttitle' =>$fontlefttitle,
                'menu0fontsize' =>$wwgm_footbarleft_fontsize_s,
                'menu0contlinks'=>$fontcontlinks0,
                'menu0icon'=>$filename0,
                'edit0' =>$editor0,

                'menu1style'=>$wwgm_footbar_cent,
                'menu1fontcolor' =>$wwgm_footbarcentcolorpicker_val,
                'menu1fonttitle' =>$fontcenttitle,
                'menu1fontsize' =>$wwgm_footbarcent_fontsize_s,
                'menu1contlinks'=>$fontcontlinks1,
                'menu1icon'=>$filename1,
                'edit1' =>$editor1,

                'menu2style' => $wwgm_footbar_right,
                'menu2fontcolor' => $wwgm_footbarrightcolorpicker_val,
                'menu2fonttitle' => $fontrighttitle,
                'menu2fontsize' => $wwgm_footbarright_fontsize_s,
                'menu2contlinks'=>$menu2contlinks,
                'menu2icon'=>$filename2,
                'menu2number'=>$wwgm_footbarright_number_i,
                'edit2' =>$editor2,
            );

            $foot = json_encode($foot);
            if($mid!==null && $mid > 0)
            {
                $sucess =  DB::table('webwesglobal_appea')
                    ->Where('trans', $tansLang)
                    ->update(['footmenu' => $foot, 'is_footmenu' => 0]);
            }
            else
            {
                $sucess =  DB::table('webwesglobal_appea')->insertGetId(
                    [
                        'device' => $device,
                        'trans' => $tansLang,
                        'footmenu' => $foot,
                        'is_footmenu' => 0,
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
        exit();
    }

    public function frontAddMenu(Request $request)
    {
        $tansLang = $request->post('tranedLang');
        $field=$request->post('wwgafrm');
        $cont = $request->post('cont');
        $link=$request->post('link');
        $device = $request->post('device');

        $row=null;

        $where = 'g_path = "'.$this->g_path.'"';
        /*if($device!==null && $device !== '')
        {
            $where.=' and device = "'.$device.'"';
        }*/
        if($tansLang!==null && $tansLang !== '')
        {
            $where.=' and trans = "'.$tansLang.'"';
        }

        $row = DB::table('webwesglobal_appea')
            ->select(DB::raw('id, mainmenu'))
            ->whereRaw($where)->get()->first();

        if($row===null || empty($row))
        {
            $fmenu=array();
            if($cont!=null && $cont!=''){
                $cnt = count($cont);
                for($i=0;$i< $cnt;$i++){
                    $fmenu[$cont[$i]]=$link[$i];
                }
                $fmenu = json_encode($fmenu);
            }
            else{
                $fmenu='';
            }
            $idx =  DB::table('webwesglobal_appea')->insertGetId(
                [
                    'device' => $device,
                    'trans' => $tansLang,
                    'mainmenu' => $fmenu,
                    'is_mainmenu' => 0,
                    'g_path'=>$this->g_path
                ]
            );
            if($idx>0)
            {
                return \Response::json([
                    'msg'  =>  'ok'
                ]);
            }
            else
            {
                return \Response::json([
                    'msg'  =>  'err insert'
                ]);
            }
        }
        else
        {
            $fmenu=array();
            if($cont!=null && $cont!='')
            {
                $cnt = count($cont);
                for($i=0;$i< $cnt;$i++){
                    $fmenu[$cont[$i]]=$link[$i];
                }
                $fmenu = json_encode($fmenu);
            }
            else{
                $fmenu='';
            }

            $rt =  DB::table('webwesglobal_appea')
                ->Where('trans', $tansLang)->update(['mainmenu' => $fmenu, 'is_mainmenu'=>0]);

            return \Response::json([
                'msg'  =>  'ok'
            ]);

        }

        exit();
    }

    public function frontGetMenu(Request $request){

        $tranedLang = $request->post('transedlang');
        $field = $request->post('wwgfield');
        $device = $request->post('device');

        $row=null;
        $where = 'g_path = "'.$this->g_path.'"';
        if($device!==null && $device !== '')
        {
            $where.=' and device = "'.$device.'"';
        }
        if($tranedLang!==null && $tranedLang !== '')
        {
            $where.=' and trans = "'.$tranedLang.'"';
        }

        if($field==='mainmenu')
        {
            $row = DB::table('webwesglobal_appea')
                ->select(DB::raw('id, trans, mainmenu'))
                ->whereRaw($where)->get()->first();

        }
        else if($field==='footmenu')
        {
            $row = DB::table('webwesglobal_appea')
                ->select(DB::raw('id, trans, footmenu'))
                ->whereRaw($where)->get()->first();

        }
       /* $rows = DB::table('webwesglobal_appea')
            ->orderByDesc('id')->get()->first();*/
        if($row === null)
        {
            return \Response::json([
                'msg'  =>  'ok',
                'list' => '',
                'field' => $field,
                'trans'=> $tranedLang
            ]);
        }
        else
        {
            if($field==='mainmenu')
            {
                if(empty($row->mainmenu))
                    $menu='';
                else{
                    $menu = json_decode($row->mainmenu);
                }
            }
            else if($field==='footmenu'){

                if(empty($row->footmenu))
                    $menu='';
                else{
                    $menu = json_decode($row->footmenu);
                }
            }
            $trans = $row->trans;
            return \Response::json([
                'msg'  =>  'ok',
                'list' => $menu,
                'field' => $field,
                'trans'=> $tranedLang
            ]);
        }

        exit();

    }

    public function frontChangeMenu(Request $request){
        $condi = $request->post('condi');
        $cont = $request->post('cont');
        $link=$request->post('link');
        $oldcont=$request->post('oldcont');
        $oldlink=$request->post('oldlink');
        $tranedLang = $request->post('tedLang');
        $field = $request->post('wwgfield');
        $device = $request->post('device');

        /* $rows = DB::table('webwesglobal_appea')
             ->orderByDesc('id')->get()->first();*/
        $rows=null;
        $where = 'g_path = "'.$this->g_path.'"';
        if($device!==null && $device !== '')
        {
            $where.=' and device = "'.$device.'"';
        }
        if($tranedLang!==null && $tranedLang !== '')
        {
            $where.=' and trans = "'.$tranedLang.'"';
        }

        if($field==='mainmenu')
        {
            $row = DB::table('webwesglobal_appea')
                ->select(DB::raw('id, mainmenu'))
                ->whereRaw($where)->get()->first();
        }
        else if($field==='footmenu')
        {
            $row = DB::table('webwesglobal_appea')
                ->select(DB::raw('id, footmenu'))
                ->whereRaw($where)->get()->first();
        }

        if($cont!==null && !empty($cont))
        {
            if($condi==='change')
            {
                $mainmenu = json_decode($rows->mainmenu);
                $array=array();
                foreach($mainmenu as $key => $value) {
                    if($key!=$oldcont)
                        $array[$key] = $value;
                }
                $array[$cont]=$link;
                $fmenu = json_encode($array);
                $rt =  DB::table('webwesglobal_appea')
                    ->Where('id', $row->id)
                    ->update(['mainmenu' => $fmenu]);
            }
            else //remove
            {
                $mainmenu = json_decode($rows->mainmenu);
                $array=array();
                foreach($mainmenu as $key => $value) {
                    if($key!=$oldcont)
                        $array[$key] = $value;
                }
                $fmenu = json_encode($array);
                $rt =  DB::table('webwesglobal_appea')
                    ->Where('id', $row->id)
                    ->update(['mainmenu' => $fmenu]);
            }

        }//if($cont!=null)

        return \Response::json([
            'msg'   =>  'ok'
        ]);

        exit();
    }

    public function RomovefootMenu(Request $request){
        $condi = $request->post('condi');
        $cont = $request->post('cont');
        $device = $request->post('device');
        $transLang = $request->post('transLang');

        $device = $request->post('device');

        $where = 'g_path = "'.$this->g_path.'"';
        if($device!==null && $device !== '')
        {
            $where.=' and device = "'.$device.'"';
        }
        if($transLang!==null && $transLang !== '')
        {
            $where.=' and trans = "'.$transLang.'"';
        }

        $row = DB::table('webwesglobal_appea')
            ->whereRaw($where)->get()->first();

        $fontcontlinks='';

        if($cont!==null && !empty($cont))
        {
            if($condi==='remove')
            {
                $mainmenu = json_decode($row->footmenu);
                $fmenu = $mainmenu->menu1contlinks;

                if(!empty($fmenu)){
                    $clinkarray=explode(',',$fmenu);
                    foreach($clinkarray as $value) {
                        $key = explode(':', $value)[0];
                        $v =explode(':', $value)[1];
                        if($key!=$cont)
                            $fontcontlinks.=$key.':'.$v.',';
                    }
                }

                $fontcontlinks = rtrim($fontcontlinks,',');

                $foot=array(
                    'menu1style' =>$mainmenu->menu1style,
                    'menu1fontcolor' =>$mainmenu->menu1fontcolor,
                    'menu1fonttitle' =>$mainmenu->menu1fonttitle,
                    'menu1fontsize' =>$mainmenu->menu1fontsize,
                    'menu1contlinks'=>$fontcontlinks,
                    'menu1icon'=>$mainmenu->menu1icon,
                    'menu2style'=>$mainmenu->menu2style,
                    'edit' =>$mainmenu->edit,
                    'news' => $mainmenu->news
                );

                $rt =  DB::table('webwesglobal_appea')
                    ->Where('id', $row->id)
                    ->update(['footmenu' => $foot]);
            }

        }//if($cont!=null)

        return \Response::json([
            'msg'   =>  'ok',
            'menulists' => $fontcontlinks
        ]);

        exit();
    }

    public  function delwwgpsliderlist(Request $request){

        $tranedLang = $request->post('tansLang');
        $fname = $request->post('delname');
        $path = 'uploads/images/wesimg/'.$fname;
        $instrjson='';

        $device = $request->post('device');
        $device = rtrim($device,",");
        $deviceArray = explode(",", $device);
        if($device!==null && $device !== '' && is_array($deviceArray)){
            $instrjson='';
            for($i=0; $i < count($deviceArray); $i++){
                $row =null;
                $where = 'g_path = "'.$this->g_path.'"';
                $where.=' and device = "'.$deviceArray[$i].'"';
                if($tranedLang!==null && $tranedLang !== '')
                {
                    $where.=' and trans = "'.$tranedLang.'"';
                }

                $row = DB::table('webwesglobal_appea')
                    ->select(DB::raw('id, trans, pageslider'))
                    ->whereRaw($where)->get()->first();

                if($row!==null && $row->pageslider !==null)
                {
                    $filters = json_decode($row->pageslider);
                    if (is_array($filters) === false)
                    {
                        $filters = array($filters);
                    }
                    $newadd=array();
                    foreach ($filters as $item)
                    {
                        $iname = $item->fname;
                        if($iname != $fname){
                            array_push($newadd,$item);
                        }
                    }

                    $count = count($newadd);
                    if($count > 0)
                        $instrjson = json_encode($newadd);
                    else
                        $instrjson='';
                    $sucess = DB::table('webwesglobal_appea')
                        ->Where('id', $row->id)->update(['pageslider' => $instrjson]);
                    if($sucess)
                    {
                        if(file_exists($path))
                            @unlink($path);
                    }

                }
            }

            return \Response::json([
                'msg'  =>  'ok',
                'list' => $instrjson
            ]);

        }
        else
        {

            $row =null;
            $where = 'g_path = "'.$this->g_path.'"';
            if($device!==null && $device !== '')
            {
                $where.=' and device = "'.$device.'"';
            }
            if($tranedLang!==null && $tranedLang !== '')
            {
                $where.=' and trans = "'.$tranedLang.'"';
            }

            $row = DB::table('webwesglobal_appea')
                ->select(DB::raw('id, trans, pageslider'))
                ->whereRaw($where)->get()->first();

            if($row!==null && $row->pageslider !==null)
            {
                $filters = json_decode($row->pageslider);
                if (is_array($filters) === false)
                {
                    $filters = array($filters);
                }
                $newadd=array();
                foreach ($filters as $item)
                {
                    $iname = $item->fname;
                    if($iname != $fname){
                        array_push($newadd,$item);
                    }
                }

                $count = count($newadd);
                if($count > 0)
                    $instrjson = json_encode($newadd);
                else
                    $instrjson='';
                $sucess = DB::table('webwesglobal_appea')
                    ->Where('id', $row->id)->update(['pageslider' => $instrjson]);
                if($sucess)
                {
                    if(file_exists($path))
                        @unlink($path);
                }

                return \Response::json([
                    'msg'  =>  'ok',
                    'list' => $instrjson
                ]);

            }
            else{
                return \Response::json([
                    'msg'  =>  'ok',
                    'list' => $instrjson
                ]);
            }
        }
        exit();
    }

    public  function getwwgpsliderlist(Request $request){
        $tranedLang = $request->post('tansLang');
        $field = $request->post('wwgfield');
        $device = $request->post('device');

        $row=null;
        $where = 'g_path = "'.$this->g_path.'"';
        if($device!==null && $device !== '')
        {
            $where.=' and device = "'.$device.'"';
        }
        if($tranedLang!==null && $tranedLang !== '')
        {
            $where.=' and trans = "'.$tranedLang.'"';
        }

        $row = DB::table('webwesglobal_appea')
                ->select(DB::raw('trans, pageslider, sliderstatus'))
                ->whereRaw($where)->get()->first();

        $instrjson='';
        $sliderstatus='';
        if($row!==null && $row->pageslider !==null)
                $instrjson = $row->pageslider;

        if($row!=null && $row->sliderstatus !=null)
            $sliderstatus = $row->sliderstatus;
        $status = json_decode($sliderstatus);

        $condrow = "";
        if(isset($status->cond)) {
            $condrow = DB::table('sitelogoimgstyle')
                ->where('id', $status->cond)
                ->get()->first();
        }
        return \Response::json([
            'msg'  =>  'ok',
            'list' => $instrjson,
            'sliderstatus'=>$sliderstatus,
            'condition'=>$condrow
        ]);

        exit();
    }

   public function getAdvanData(Request $request){

       $tranedLang = $request->post('transLang');
       $device = $request->post('device');

       $row =null;
       $where = 'g_path = "'.$this->g_path.'"';
       if($device!==null && $device !== '')
       {
           $where.=' and device = "'.$device.'"';
       }
       if($tranedLang!==null && $tranedLang !== '')
       {
           $where.=' and trans = "'.$tranedLang.'"';
       }

       $row = DB::table('webwesglobal_appea')
           ->select(DB::raw('id, trans, background'))
           ->whereRaw($where)->get()->first();

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

    public function wwgpAdvanupload(Request $request){
        $tranedLang = $request->post('transLang');
        $destinationPath = 'uploads/images/wesimg/';
        $file_pre = $request->post('advan_file_pre');
        $file = $request->file('advan_file');

        $device = $request->post('device');
        $device = rtrim($device,",");
        $deviceArray = explode(",", $device);

        $filename='';
        if(!file_exists($_FILES['advan_file']['tmp_name']) && !empty($file1_pre)){
            $filename=$file_pre;
        }
        else{
            if($file != null) {
                $filename = time().'-'.$file->getClientOriginalName();
                /*if($this->g_path!=="local")
                    {
                        $this->filesystem->write('/'.$destinationPath.$filename, file_get_contents($file));//ckd
                        if(!empty($file_pre) && $this->filesystem->has('/'.$destinationPath.$file_pre))
                            $this->filesystem->delete('/'.$destinationPath.$file_pre);
                    }
                    else*/
                {
                    $file->move(public_path().'/'.$destinationPath, $filename);//ckd
                    if (!empty($file_pre)) {
                        if (file_exists(public_path().'/'.$destinationPath.$file_pre))
                            @unlink(public_path().'/'.$destinationPath.$file_pre);
                    }
                }
            }
            else{
                $filename = $file_pre;
            }
        }

        if($device!==null && $device !== '' && is_array($deviceArray)){
            for($i=0; $i < count($deviceArray); $i++){
                $row =null;
                $where = 'g_path = "'.$this->g_path.'"';
                $where.=' and device = "'.$deviceArray[$i].'"';
                if($tranedLang!==null && $tranedLang !== '')
                {
                    $where.=' and trans = "'.$tranedLang.'"';
                }

                $row = DB::table('webwesglobal_appea')
                    ->select(DB::raw('id, trans, background'))
                    ->whereRaw($where)->get()->first();

                if($row!==null){
                    $sucess = DB::table('webwesglobal_appea')
                        ->Where('id', $row->id)->update(['background' => $filename, 'is_background' => 0]);
                }
                else {
                    $sucess =  DB::table('webwesglobal_appea')->insertGetId(
                        [
                            'device' => $deviceArray[$i],
                            'trans' => $tranedLang,
                            'background' => $filename,
                            'is_background' => 0,
                            'g_path'=>$this->g_path
                        ]
                    );
                }
            }
        }
        else
        {
            $row =null;
            $where = 'g_path = "'.$this->g_path.'"';
            if($device!==null && $device !== '')
            {
                $where.=' and device = "'.$device.'"';
            }
            if($tranedLang!==null && $tranedLang !== '')
            {
                $where.=' and trans = "'.$tranedLang.'"';
            }

            $row = DB::table('webwesglobal_appea')
                ->select(DB::raw('id, trans, background'))
                ->whereRaw($where)->get()->first();

            if($row!==null){
                $sucess = DB::table('webwesglobal_appea')
                    ->Where('id', $row->id)->update(['background' => $filename, 'is_background' => 0]);
            }
            else {
                $sucess =  DB::table('webwesglobal_appea')->insertGetId(
                    [
                        'device' => $device,
                        'trans' => $tranedLang,
                        'background' => $filename,
                        'is_background' => 0,
                        'g_path'=>$this->g_path
                    ]
                );
            }
        }


        return \Response::json([
            'msg'  =>  'ok'
        ]);

        exit();

    }

    public function wwglang_saveStatusChange(Request $request){
        $iso=$request->iso;
        $dialcode=$request->dialcode;
        $status=$request->status;

        $row =  DB::table('webwesglobal_lang')->where([
            ['iso', '=', $iso],
            ['dialcode', '=', $dialcode]
            //,['g_path','=', $this->g_path]
        ])->get()->first();

        if($status==="delete")
        {
           if($row!==null && !empty($row))
           {
               DB::table('webwesglobal_lang')->where('id', $row->id)->delete();
               $column = strtolower($row->name);
               $hascolumn = Schema::hasColumn('wes_pagetype',$column);
               if($hascolumn)
               {
                   Schema::table('wes_pagetype', function (Blueprint $table) use ($column) {
                       $table->dropcolumn($column);
                   });
               }

           }

        }
        else
        {
            if($row!==null && !empty($row))
            {
                DB::table('webwesglobal_lang')->where('id', $row->id)->update(['status' => $status]);
                $column = strtolower($row->name);
                if($status==='enable')
                {
                    $hascolumn = Schema::hasColumn('wes_pagetype',$column);
                    if(!$hascolumn)
                    {
                        Schema::table('wes_pagetype', function($table) use ($column)
                        {
                            $table->string($column);
                        });
                        Artisan::call('migrate');
                    }
                }
                else //disable
                {
                    $hascolumn = Schema::hasColumn('wes_pagetype',$column);
                    if($hascolumn)
                    {
                        Schema::table('wes_pagetype', function (Blueprint $table) use ($column) {
                            $table->dropcolumn($column);
                        });
                        Artisan::call('migrate');
                    }
                }
            }
        }

        return \Response::json([
            'msg'  =>  "ok"
        ]);
    }

    public function getWWGFrontStoredLang(Request $request){
        $rows = DB::table('webwesglobal_lang')
            ->select(DB::raw('iso, dialcode, name, status'))
            //->where('g_path', $this->g_path)
            ->get();
        if($rows!==null){
            $list = json_encode($rows);
            return \Response::json([
                'msg'  =>  "ok",
                'langlist' => $list
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "err",
                'langlist' => ''
            ]);
        }
        exit();
    }

    public function getWWGStoredLang(Request $request){
        $rows = DB::table('webwesglobal_lang')
            ->select(DB::raw('iso, dialcode, name, status'))
            ->where('status','enable')
            //->where('g_path', $this->g_path)
            ->get();
        if($rows!==null){
            $list = json_encode($rows);
            return \Response::json([
                'msg'  =>  "ok",
                'langlist' => $list
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "err",
                'langlist' => ''
            ]);
        }
        exit();
    }
    public function getSystemStoredLang(Request $request){
        $rows = DB::table('weslangs')
            ->select(DB::raw('iso, dialcode, name, status'))
            ->where('status','enable')
            ->get();
        if($rows!==null){
            $list = json_encode($rows);
            return \Response::json([
                'msg'  =>  "ok",
                'langlist' => $list
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "err",
                'langlist' => ''
            ]);
        }
        exit();
    }


    public function wwgLang_SaveLang(Request $request)
    {
        $langlist=$request->langlist;
        if(is_array($langlist))
        {
            $rows = DB::table('webwesglobal_lang')
                //->where('g_path', $this->g_path)
                ->get();
            $addlist=array();
            if($rows!==null)
            {
                for($i=0;$i<count($langlist);$i++)
                {
                    $one = $langlist[$i];
                    $objarry=explode("-",$one);
                    $iso=$objarry[0];
                    $dialcode=$objarry[1];
                    $name=$objarry[2];
                    $equobj=false;
                    foreach ($rows as $item)
                    {
                        $piso = $item->iso;
                        $pdialcode = $item->dialcode;
                        $pname = $item->name;
                        $pstatus = $item->status;
                        if($iso == $piso && $dialcode == $pdialcode)
                        {
                            $equobj=true;
                            break;
                        }
                    }
                 if(!$equobj)
                 {
                     $item = array(
                         "iso" => $iso,
                         "dialcode" => $dialcode,
                         "name" => $name,
                         "status" => 'enable'
                     //,  "g_path"=>$this->g_path
                     );
                     array_push($addlist, $item);
                 }

                }

                DB::table('webwesglobal_lang')
                    //->where('g_path', $this->g_path)
                    ->insert($addlist);
            }
            else
            {
                for($i=0;$i<count($langlist);$i++)
                {
                    $one = $langlist[$i];
                    $objarry=explode("-",$one);
                    $iso=$objarry[0];
                    $dialcode=$objarry[1];
                    $name=$objarry[2];
                    $item =array(
                        "iso" =>$iso,
                        "dialcode" =>$dialcode,
                        "name" =>$name,
                        "status"=>'enable'
                        //,"g_path"=>$this->g_path
                    );
                    array_push($addlist, $item);
                }

                DB::table('webwesglobal_lang')
                    //->where('g_path', $this->g_path)
                    ->insert($addlist);
            }

            $rows = DB::table('webwesglobal_lang')
                //->where('g_path', $this->g_path)
                ->get();
            $cnt = count($rows);

            foreach ($rows as $row)
            {
                $column = strtolower($row->name);
                $status = strtolower($row->status);
                if($status==='enable'){
                    $hascolumn = Schema::hasColumn('wes_pagetype',$column);
                    if(!$hascolumn){
                        Schema::table('wes_pagetype', function($table) use ($column)
                        {
                            $table->string($column);
                        });
                    }
                }
            }
            Artisan::call('migrate');

            $addlist = json_encode($rows);

            return \Response::json([
                'msg'  =>  "ok",
                'cnt' =>$cnt,
                'addlist' =>$addlist
            ]);
        }
        else{
            return \Response::json([
                'msg'  =>  "err",
                'cnt' =>  0,
                'addlist' =>''
            ]);
        }

        exit();
    }

    public function wwgpTSupload(Request $request){
        $wfm = $request->post('wfm');
        $transLang = $request->post('transLang');
        $device = $request->post('device');
        $device = rtrim($device,",");
        $deviceArray = explode(",", $device);

        if($wfm==='tc')
        {
            $teach_tit1 = $request->post('teach_font1_tit');
            $teach_tit2 = $request->post('teach_font2_tit');
            $teach_tit3 = $request->post('teach_font3_tit');

            $destinationPath = 'uploads/images/wesimg/';

            $file1_pre = $request->post('teach_file_1_pre');
            $file1 = $request->file('teach_file_1');
            $filename1='';
            if(!file_exists($_FILES['teach_file_1']['tmp_name']) && !empty($file1_pre)){
                $filename1=$file1_pre;
            }
            else{
                if($file1 != null && $file1 != '') {
                    $filename1 = time().'-'.$file1->getClientOriginalName();
                    $file1->move(public_path().'/'.$destinationPath, $filename1);//ckd
                    if (!empty($file1_pre)) {
                        if (file_exists(public_path().'/'.$destinationPath.$file1_pre))
                            @unlink(public_path().'/'.$destinationPath.$file1_pre);
                    }
                }

            }

            $file2_pre = $request->post('teach_file_2_pre');
            $file2 = $request->file('teach_file_2');
            $filename2='';
            if(!file_exists($_FILES['teach_file_2']['tmp_name']) && !empty($file2_pre)){
                $filename2=$file2_pre;
            }
            else{
                if($file2 != null && $file2 != ''){
                    $filename2 = time().'-'.$file2->getClientOriginalName();
                    $file2->move(public_path().'/'.$destinationPath, $filename2);//ckd
                    if(!empty($file2_pre)){
                        if(file_exists(public_path().'/'.$destinationPath.$file2_pre))
                            @unlink(public_path().'/'.$destinationPath.$file2_pre);
                    }
                }
            }

            $file3_pre = $request->post('teach_file_3_pre');
            $file3 = $request->file('teach_file_3');
            $filename3='';
            if(!file_exists($_FILES['teach_file_3']['tmp_name']) && !empty($file3_pre)){
                $filename3=$file3_pre;
            }
            else{
                if($file3 != null && $file3 != ''){
                    $filename3 = time().'-'.$file3->getClientOriginalName();
                    $file3->move(public_path().'/'.$destinationPath, $filename3);//ckd

                    if(!empty($file3_pre)){
                        if(file_exists(public_path().'/'.$destinationPath.$file3_pre))
                            @unlink(public_path().'/'.$destinationPath.$file3_pre);
                    }
                }
            }

            $teach_cont1 = $request->post('teach_font1_cont');
            $teach_cont2 = $request->post('teach_font2_cont');
            $teach_cont3 = $request->post('teach_font3_cont');

            $teach_cont1 = trim($teach_cont1);
            if(empty($teach_cont1))
                $teach_cont1='temp';

            $teach_cont2 = trim($teach_cont2);
            if(empty($teach_cont2))
                $teach_cont2='temp';

            $teach_cont3 = trim($teach_cont3);
            if(empty($teach_cont3))
                $teach_cont3='temp';

            $teach_link1 = trim($request->post('teach_font1_link'));
            $teach_link2 = trim($request->post('teach_font2_link'));
            $teach_link3 = trim($request->post('teach_font3_link'));

            $teachstr=array(
                "t1" => array(
                    "title"=>$teach_tit1,
                    "img"=>$filename1,
                    "cont"=>$teach_cont1,
                    "link"=>$teach_link1
                ),
                "t2" => array(
                    "title"=>$teach_tit2,
                    "img"=>$filename2,
                    "cont"=>$teach_cont2,
                    "link"=>$teach_link2
                ),
                "t3" => array(
                    "title"=>$teach_tit3,
                    "img"=>$filename3,
                    "cont"=>$teach_cont3,
                    "link"=>$teach_link3
                )
            );

            $instrjson = json_encode($teachstr);

            if($device!==null && $device !== '' && is_array($deviceArray)){
                $sucess = count($deviceArray);
                for($i=0; $i < count($deviceArray); $i++)
                {
                    $row=null;
                    $where = 'g_path = "'.$this->g_path.'"';
                    if($transLang!==null && $transLang !== '')
                    {
                        $where.=' and trans = "'.$transLang.'"';
                    }

                    $where.=' and device = "'.$deviceArray[$i].'"';
                    $row = DB::table('webwesglobal_appea')
                        ->select(DB::raw('id, trans, teacher'))
                        ->whereRaw($where)->get()->first();

                    if($row!==null){
                        $sucess = DB::table('webwesglobal_appea')
                            ->Where('id', $row->id)
                            ->update(['teacher' => $instrjson, 'is_teacher' => 0]);
                    }
                    else {
                        $sucess =  DB::table('webwesglobal_appea')->insertGetId(
                            [
                                'device' => $deviceArray[$i],
                                'trans' => $transLang,
                                'teacher' => $instrjson,
                                'is_teacher' => 0,
                                'g_path'=>$this->g_path
                            ]
                        );
                    }
                }
            }
            else
            {
                $row=null;
                $where = 'g_path = "'.$this->g_path.'"';
                if($device!==null && $device !== '')
                {
                    $where.=' and device = "'.$device.'"';
                }
                if($transLang!==null && $transLang !== '')
                {
                    $where.=' and trans = "'.$transLang.'"';
                }

                $row = DB::table('webwesglobal_appea')
                    ->select(DB::raw('id, trans, teacher'))
                    ->whereRaw($where)->get()->first();

                if($row!==null){
                    $sucess = DB::table('webwesglobal_appea')
                        ->Where('id', $row->id)
                        ->update(['teacher' => $instrjson, 'is_teacher' => 0]);
                }
                else {
                    $sucess =  DB::table('webwesglobal_appea')->insertGetId(
                        [
                            'device' => $device,
                            'trans' => $transLang,
                            'teacher' => $instrjson,
                            'is_teacher' => 0,
                            'g_path'=>$this->g_path
                        ]
                    );
                }
            }


            return \Response::json([
                'msg'  =>  'ok'
            ]);

            exit();

        }
        else if($wfm==='st')
        {
            $stud_tit1 = trim($request->post('stud_font1_tit'));
            $stud_tit2 = trim($request->post('stud_font2_tit'));
            $stud_tit3 = trim($request->post('stud_font3_tit'));

            $destinationPath = 'uploads/images/wesimg/';

            $file1_pre = $request->post('stud_file_1_pre');
            $file1 = $request->file('stud_file_1');
            $filename1='';
            if(!file_exists($_FILES['stud_file_1']['tmp_name']) && !empty($file1_pre)){
                $filename1=$file1_pre;
            }
            else{
                if($file1 != null && $file1 != ''){
                    $filename1 = time().'-'.$file1->getClientOriginalName();
                    $file1->move(public_path().'/'.$destinationPath, $filename1);
                    if(!empty($file1_pre)){
                        if(file_exists(public_path().'/'.$destinationPath.$file1_pre))
                            @unlink(public_path().'/'.$destinationPath.$file1_pre);
                    }
                }
            }

            $file2_pre = $request->post('stud_file_2_pre');
            $file2 = $request->file('stud_file_2');
            $filename2='';
            if(!file_exists($_FILES['stud_file_2']['tmp_name']) && !empty($file2_pre)){
                $filename2=$file2_pre;
            }
            else{
                if($file2 != null && $file2 != ''){
                    $filename2 = time().'-'.$file2->getClientOriginalName();
                    $file2->move(public_path().'/'.$destinationPath, $filename2);
                    if(!empty($file2_pre)){
                        if(file_exists(public_path().'/'.$destinationPath.$file2_pre))
                            @unlink(public_path().'/'.$destinationPath.$file2_pre);
                    }
                }
            }

            $file3_pre = $request->post('stud_file_3_pre');
            $file3 = $request->file('stud_file_3');
            $filename3='';
            if(!file_exists($_FILES['stud_file_3']['tmp_name']) && !empty($file3_pre)){
                $filename3=$file3_pre;
            }
            else{
                if($file3 != null && $file3 != ''){
                    $filename3 = time().'-'.$file3->getClientOriginalName();
                    $file3->move(public_path().'/'.$destinationPath, $filename3);//ckd
                    if(!empty($file3_pre)){
                        if(file_exists(public_path().'/'.$destinationPath.$file3_pre))
                            @unlink(public_path().'/'.$destinationPath.$file3_pre);
                    }
                }
            }

            $stud_cont1 = $request->post('stud_font1_cont');
            $stud_cont2 = $request->post('stud_font2_cont');
            $stud_cont3 = $request->post('stud_font3_cont');

            $stud_cont1 = trim($stud_cont1);
            if(empty($stud_cont1))
                $stud_cont1='temp';

            $stud_cont2 = trim($stud_cont2);
            if(empty($stud_cont2))
                $stud_cont2='temp';

            $stud_cont3 = trim($stud_cont3);
            if(empty($stud_cont3))
                $stud_cont3='temp';

            $stud_link1 = trim($request->post('stud_font1_link'));
            $stud_link2 = trim($request->post('stud_font2_link'));
            $stud_link3 = trim($request->post('stud_font3_link'));

            $studstr=array(
                "t1" => array(
                    "title"=>$stud_tit1,
                    "img"=>$filename1,
                    "cont"=>$stud_cont1,
                    "link"=>$stud_link1
                ),
                "t2" => array(
                    "title"=>$stud_tit2,
                    "img"=>$filename2,
                    "cont"=>$stud_cont2,
                    "link"=>$stud_link2
                ),
                "t3" => array(
                    "title"=>$stud_tit3,
                    "img"=>$filename3,
                    "cont"=>$stud_cont3,
                    "link"=>$stud_link3
                )
            );

            $instrjson = json_encode($studstr);

            if($device!==null && $device !== '' && is_array($deviceArray)){
                for($i=0; $i < count($deviceArray); $i++){
                    $row =null;
                    $where = 'g_path = "'.$this->g_path.'"';
                    $where.=' and device = "'.$deviceArray[$i].'"';
                    if($transLang!==null && $transLang !== '')
                    {
                        $where.=' and trans = "'.$transLang.'"';
                    }

                    $row = DB::table('webwesglobal_appea')
                        ->select(DB::raw('id, trans, student'))
                        ->whereRaw($where)->get()->first();

                    if($row!==null){
                        $sucess = DB::table('webwesglobal_appea')
                            ->Where('id', $row->id)->update(['student' => $instrjson, 'is_student' => 0]);
                    }
                    else {
                        $sucess =  DB::table('webwesglobal_appea')->insertGetId(
                            [
                                'device' => $deviceArray[$i],
                                'trans' => $transLang,
                                'student' => $instrjson,
                                'is_student' => 0,
                                'g_path'=>$this->g_path
                            ]
                        );
                    }
                }//for
            }
            else
            {
                $row =null;
                $where = 'g_path = "'.$this->g_path.'"';
                if($device!==null && $device !== '')
                {
                    $where.=' and device = "'.$device.'"';
                }
                if($transLang!==null && $transLang !== '')
                {
                    $where.=' and trans = "'.$transLang.'"';
                }

                $row = DB::table('webwesglobal_appea')
                    ->select(DB::raw('id, trans, student'))
                    ->whereRaw($where)->get()->first();

                if($row!==null){
                    $sucess = DB::table('webwesglobal_appea')
                        ->Where('id', $row->id)->update(['student' => $instrjson, 'is_student' => 0]);
                }
                else {
                    $sucess =  DB::table('webwesglobal_appea')->insertGetId(
                        [
                            'device' => $device,
                            'trans' => $transLang,
                            'student' => $instrjson,
                            'is_student' => 0,
                            'g_path'=>$this->g_path
                        ]
                    );
                }
            }

            return \Response::json([
                'msg'  =>  'ok'
            ]);

            exit();

        }

        exit();

    }

    public function deletefrontpageStatesByDevice(Request $request){
        $device = $request->post('device');
        $pagename = $request->post('pagename');
        $tabstate =$request->post("tabstatus");
        $flag="ok";
        try{
                if($device!==null && $device !== '' && $pagename!==null && $pagename !== '')
                {
                    DB::table('wes_page_devices')->whereRaw("device = '".$device."'  and pagename = '".$pagename."' ")->delete();
                    $tabstate = intval($tabstate);
                   // DB::table('webwesglobal_appea')->whereRaw("device = '".$device."'")->delete();
                        $where='device = "'.$device.'"';
                        $rows = DB::table('webwesglobal_appea')
                            ->select(DB::raw('id, pageslider,  teacher, student, background'))
                            ->whereRaw($where)->get();
                        $destinationPath = 'uploads/images/wesimg/';
                        foreach ($rows as $row)
                        {
                            $id = $row->id;
                            if(!empty($row->pageslider))
                            {
                                $filters = json_decode($row->pageslider);
                                if (is_array($filters) === false)
                                {
                                    $filters = array($filters);
                                }
                                foreach ($filters as $item)
                                {
                                    $iname = $item->fname;
                                    if(file_exists(public_path().'/'.$destinationPath.$iname))
                                        @unlink(public_path().'/'.$destinationPath.$iname);
                                }
                            }

                            if(!empty($row->teacher))
                            {
                                $teacher = $row->teacher;
                                $teacher = json_decode($teacher);
                                $t1= $teacher->t1;
                                $t2= $teacher->t2;
                                $t3= $teacher->t3;
                                if(!empty($t1->img)){
                                    if(file_exists(public_path().'/'.$destinationPath.$t1->img))
                                        @unlink(public_path().'/'.$destinationPath.$t1->img);
                                }
                                if(!empty($t2->img)){
                                    if(file_exists(public_path().'/'.$destinationPath.$t2->img))
                                        @unlink(public_path().'/'.$destinationPath.$t2->img);
                                }
                                if(!empty($t3->img)){
                                    if(file_exists(public_path().'/'.$destinationPath.$t3->img))
                                        @unlink(public_path().'/'.$destinationPath.$t3->img);
                                }
                            }

                            if(!empty($row->student))
                            {
                                $student = $row->student;
                                $student = json_decode($student);
                                $t1= $student->t1;
                                $t2= $student->t2;
                                $t3= $student->t3;
                                if(!empty($t1->img)){
                                    if(file_exists(public_path().'/'.$destinationPath.$t1->img))
                                        @unlink(public_path().'/'.$destinationPath.$t1->img);
                                }
                                if(!empty($t2->img)){
                                    if(file_exists(public_path().'/'.$destinationPath.$t2->img))
                                        @unlink(public_path().'/'.$destinationPath.$t2->img);
                                }
                                if(!empty($t3->img)){
                                    if(file_exists(public_path().'/'.$destinationPath.$t3->img))
                                        @unlink(public_path().'/'.$destinationPath.$t3->img);
                                }
                            }

                            if(!empty($row->background)){
                                $background = $row->background;
                                if(file_exists(public_path().'/'.$destinationPath.$background))
                                    @unlink(public_path().'/'.$destinationPath.$background);
                            }
                        }

                        DB::table('webwesglobal_appea')
                        ->Where('device', $device)->update([
                                'pageslider' => '', 'sliderstatus'=>'', 'is_pageslider'=>0,
                                'teacher' => '', 'is_teacher'=>0,
                                'student' => '', 'is_student'=>0,
                                'background' => '', 'is_background'=>0
                                ]);
                }

        }
        catch (Exception $e){
            $flag="err";
        }
        return \Response::json([
            "msg" => $flag
        ]);
        exit();
    }

    public function saveEachPageDevices(Request $request){
        $pagedevices = $request->post('pagedevices');
        $pageLangs = $request->post('pageLangs');
        $pagename = $request->post('pagename');
        $pagedevices = json_decode($pagedevices);
        $pageLangs = json_decode($pageLangs);

        $devicelists = explode(",", $pagedevices);
        $sucess=1;
        try{
            DB::transaction(function () use ($devicelists, $pagename, $pageLangs)
            {
                DB::table('wes_page_devices')->whereRaw("pagename = '".$pagename."' ")->delete();

                foreach($devicelists as $item){
                    $sucess =  DB::table('wes_page_devices')->insertGetId(
                        [
                            'device' => $item,
                            'pagename' => $pagename
                        ]
                    );
                    foreach($pageLangs as $lang){
                        $tans = $lang->iso.'-'.$lang->dialcode;

                        $cnt1 = DB::table('webwesglobal_appea')->where([
                            ['device', $item],
                            ['trans', $tans]
                        ])->count();

                        if($cnt1 <= 0){
                            $sucess1 =  DB::table('webwesglobal_appea')->insertGetId(
                                [
                                    'device' => $item,
                                    'trans' => $tans
                                ]
                            );
                        }

                    }

                    usleep(100000);
                }
            });

        }catch(Exception $e){
            $sucess=0;
        }

        if($sucess > 0)
            $msg='ok';
        else
            $msg='err';

        return \Response::json([
            "msg" => $msg
        ]);
        exit();
    }

    public function getEachPageDevices(Request $request){
        $pagename = $request->post('pagename');
        $rows = DB::table('wes_page_devices')->select('device')->where('pagename', $pagename)->get();
        if(isset($rows)){
            $arry = array();
            foreach($rows as $row){
                array_push($arry, $row->device);
            }
            $devices = implode(",", $arry);
        }
        else
            $devices='';
        return \Response::json([
            "msg" => "ok",
            "pagedevices"=>$devices
        ]);

        exit();
    }

    public function getwwgpTeachData(Request $request){
        $transLang = $request->post('transLang');
        $device = $request->post('device');

        $row=null;
        $where = 'g_path = "'.$this->g_path.'"';
        if($device!==null && $device !== '')
        {
            $where.=' and device = "'.$device.'"';
        }
        if($transLang!==null && $transLang !== '')
        {
            $where.=' and trans = "'.$transLang.'"';
        }

        $row = DB::table('webwesglobal_appea')
            ->select(DB::raw('id, trans, teacher'))
            ->whereRaw($where)->get()->first();

        $teacher='';
        if($row!==null && $row->teacher !==null)
            $teacher = $row->teacher;

         return \Response::json([
             'msg'  =>  'ok',
             'list' => $teacher
         ]);
        exit();
    }

    public function getwwgpStudData(Request $request){
        $transLang = $request->post('transLang');
        $device = $request->post('device');

        $row=null;
        $where = 'g_path = "'.$this->g_path.'"';
        if($device!==null && $device !== '')
        {
            $where.=' and device = "'.$device.'"';
        }
        if($transLang!==null && $transLang !== '')
        {
            $where.=' and trans = "'.$transLang.'"';
        }

        $row = DB::table('webwesglobal_appea')
            ->select(DB::raw('id, trans, student'))
            ->whereRaw($where)->get()->first();

        $student='';
        if($row!=null && $row->student !=null)
            $student = $row->student;
         return \Response::json([
             'msg'  =>  'ok',
             'list' => $student
         ]);
        exit();
    }

    public  function wwgpChangesliderupload(Request $request){
        $id = $request->post('sliderUploadId');
        $oldfilename = $request->post('oldfilename');
        $transLang = $request->post('transLang');
        $device = $request->post('device');
        $size = $request->post('filesize');
        $fort = $request->post('fileformat');
        $capa = $request->post('filecapacity');
        $capa = (int)$capa * 1000;

        $name='pic_name_'.$id;
        $link='pic_link_'.$id;
        $pic_name = trim($request->post($name));
        $pic_link= trim($request->post($link));

        $file = $request->file('new_image_file_'.$id);
        $destinationPath = 'uploads/images/wesimg/';
        $filename = time().'-'.$file->getClientOriginalName();

        $data = getimagesize($_FILES['new_image_file_'.$id]['tmp_name']);
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
		/*if($this->g_path!=="local")
		{
			$this->filesystem->write('/'.$destinationPath.$filename, file_get_contents($file));//ckd
			if(!empty($oldfilename) && $this->filesystem->has('/'.$destinationPath.$oldfilename))
				$this->filesystem->delete('/'.$destinationPath.$oldfilename);
		}
		else*/
		{
			 $file->move(public_path().'/'.$destinationPath, $filename);//ckd

			 if(!empty($oldfilename)){
			   if(file_exists(public_path().'/'.$destinationPath.$oldfilename))
				@unlink(public_path().'/'.$destinationPath.$oldfilename);
			 }
		}

        $instr=array(
            "fname"=>$filename,
            "name"=>$pic_name,
            "link"=>$pic_link
        );

        $device = rtrim($device,",");
        $deviceArray = explode(",", $device);
        if($device!==null && $device !== '' && is_array($deviceArray)){
            $instrjson='';
            for($i=0; $i < count($deviceArray); $i++)
            {
                $row=null;
                $where = 'g_path = "'.$this->g_path.'"';
                $where.=' and device = "'.$deviceArray[$i].'"';
                if($transLang!==null && $transLang !== '')
                {
                    $where.=' and trans = "'.$transLang.'"';
                }

                $row = DB::table('webwesglobal_appea')
                    ->select(DB::raw('id, trans, pageslider'))
                    ->whereRaw($where)->get()->first();
                if($row!==null && $row->pageslider !==null)
                {
                    $filters = json_decode($row->pageslider);
                    if (is_array($filters) === false)
                    {
                        $filters = array($filters);
                    }
                    $newadd=array();
                    foreach ($filters as $item)
                    {
                        $iname = $item->fname;
                        if($iname != $oldfilename){
                            array_push($newadd,$item);
                        }
                        else{
                            array_push($newadd,$instr);
                        }
                    }
                    //array_push($newadd,$instr);
                    $count = count($newadd);
                    if($count > 0)
                        $instrjson = json_encode($newadd);
                    else
                        $instrjson='';
                    $sucess = DB::table('webwesglobal_appea')
                        ->Where('id',$row->id)->update(['pageslider' => $instrjson]);
                }
            }//for

            return \Response::json([
                'msg'  =>  'ok',
                'list' => $instrjson
            ]);
        }
        else
        {
            $row=null;
            $where = 'g_path = "'.$this->g_path.'"';
            if($device!==null && $device !== '')
            {
                $where.=' and device = "'.$device.'"';
            }
            if($transLang!==null && $transLang !== '')
            {
                $where.=' and trans = "'.$transLang.'"';
            }

            $row = DB::table('webwesglobal_appea')
                ->select(DB::raw('id, trans, pageslider'))
                ->whereRaw($where)->get()->first();

            if($row!==null && $row->pageslider !==null)
            {
                $filters = json_decode($row->pageslider);
                if (is_array($filters) === false)
                {
                    $filters = array($filters);
                }
                $newadd=array();
                foreach ($filters as $item)
                {
                    $iname = $item->fname;
                    if($iname != $oldfilename){
                        array_push($newadd,$item);
                    }
                    else{
                        array_push($newadd,$instr);
                    }
                }
                //array_push($newadd,$instr);
                $count = count($newadd);
                if($count > 0)
                    $instrjson = json_encode($newadd);
                else
                    $instrjson='';
                $sucess = DB::table('webwesglobal_appea')
                    ->Where('id',$row->id)->update(['pageslider' => $instrjson]);

                return \Response::json([
                    'msg'  =>  'ok',
                    'list' => $instrjson
                ]);

            }
            else{
                return \Response::json([
                    'msg'  =>  'err',
                    'list' => ''
                ]);
            }
        }

        exit();
    }

    public  function wwgpsliderupload(Request $request){
        $pic_name = trim($request->post('pic_name'));
        $pic_link= trim($request->post('pic_link'));
        $file = $request->file('new_image_file_dlg');
        $transLang= $request->post('transLang');
        $device= $request->post('device');
        try {
            $filename='';
            $destinationPath = 'uploads/images/wesimg/';
            $filename = time().'-'.$file->getClientOriginalName();

		/*	if($this->g_path!=="local")
			{
				$this->filesystem->write('/'.$destinationPath.$filename, file_get_contents($file));//ckd
			}
			else*/
			{
				$file->move(public_path().'/'.$destinationPath, $filename);
			}

            $instr=array(
                "fname"=>$filename,
                "name"=>$pic_name,
                "link"=>$pic_link
            );

            $device = rtrim($device,",");
            $deviceArray = explode(",", $device);
            if($device!==null && $device !== '' && is_array($deviceArray)){
                $instrjson="";
                for($i=0; $i < count($deviceArray); $i++){
                    $row=null;
                    $where = 'g_path = "'.$this->g_path.'"';
                    $where.=' and device = "'.$deviceArray[$i].'"';
                    if($transLang!==null && $transLang !== '')
                    {
                        $where.=' and trans = "'.$transLang.'"';
                    }

                    $row = DB::table('webwesglobal_appea')
                        ->select(DB::raw('id, trans, pageslider'))
                        ->whereRaw($where)->get()->first();

                    if($row != null)
                    {
                        if($row->pageslider != null)
                        {
                            $filters = json_decode($row->pageslider);
                            if (is_array($filters) === false)
                                $filters = array($filters);
                            array_push($filters, $instr);
                            $instrjson = json_encode($filters);
                        }
                        else
                        {
                            $instrjson = json_encode($instr);
                        }

                        $sucess = DB::table('webwesglobal_appea')
                            ->Where('id', $row->id)->update(['pageslider' => $instrjson]);
                    }
                    else
                    {
                        $instrjson =json_encode($instr);
                        $sucess =  DB::table('webwesglobal_appea')->insertGetId(
                            [
                                'device' => $device,
                                'trans' => $transLang,
                                'pageslider' => $instrjson,
                                'g_path'=>$this->g_path
                            ]
                        );
                    }

                }
                return \Response::json([
                    'msg'  =>  'ok',
                    'list' => $instrjson
                ]);
            }
            else{
                $row=null;
                $where = 'g_path = "'.$this->g_path.'"';
                if($device!==null && $device !== '')
                {
                    $where.=' and device = "'.$device.'"';
                }
                if($transLang!==null && $transLang !== '')
                {
                    $where.=' and trans = "'.$transLang.'"';
                }

                $row = DB::table('webwesglobal_appea')
                    ->select(DB::raw('id, trans, pageslider'))
                    ->whereRaw($where)->get()->first();

                if($row != null)
                {
                    if($row->pageslider != null)
                    {
                        $filters = json_decode($row->pageslider);
                        if (is_array($filters) === false)
                            $filters = array($filters);
                        array_push($filters, $instr);
                        $instrjson = json_encode($filters);
                    }
                    else
                    {
                        $instrjson = json_encode($instr);
                    }

                    $sucess = DB::table('webwesglobal_appea')
                        ->Where('id', $row->id)->update(['pageslider' => $instrjson]);
                }
                else
                {
                    $instrjson =json_encode($instr);
                    $sucess =  DB::table('webwesglobal_appea')->insertGetId(
                        [
                            'device' => $device,
                            'trans' => $transLang,
                            'pageslider' => $instrjson,
                            'g_path'=>$this->g_path
                        ]
                    );
                }
                if($sucess){
                    return \Response::json([
                        'msg'  =>  'ok',
                        'list' => $instrjson
                    ]);
                }
                else{
                    return \Response::json([
                        'msg'  =>  'err'
                    ]);
                }
            }

        }
        catch (\Exception $e)
        {
            return \Response::json([
                'msg' => $e
            ]);
        }
        exit();
    }

    public function wwgpSliderStatus(Request $request){
        $snav = trim($request->post('snav'));
        $sptime= trim($request->post('sptime'));
        $stime= trim($request->post('stime'));
        $sdir= trim($request->post('sdir'));
        $tranedLang = $request->post('tansLang');
        $field = $request->post('wwgfield');

        $device = $request->post('device');
        $device = rtrim($device,",");
        $deviceArray = explode(",", $device);

        $cond = $request->post('cond');
        $pageslider = $request->post('pageslider');
        $dbstr=array(
            'n' => $snav,
            'p' => $sptime,
            't' => $stime,
            'd' => $sdir,
            'cond' => $cond
        );
        $strjson =json_encode($dbstr);
        $pageslider = empty($pageslider) ? '' : $pageslider;
        if($pageslider!="")
            $pageslider = json_encode($pageslider);

        if($device!==null && $device !== '' && is_array($deviceArray))
        {
            $sucess = count($deviceArray);
            for($i=0; $i < count($deviceArray); $i++)
            {
                $row=null;
                $where = 'g_path = "'.$this->g_path.'"';
                if($tranedLang!==null && $tranedLang !== '')
                {
                    $where.=' and trans = "'.$tranedLang.'"';
                }

                $where.=' and device = "'.$deviceArray[$i].'"';
                $row = DB::table('webwesglobal_appea')
                    ->select(DB::raw('id, trans, sliderstatus'))
                    ->whereRaw($where)->get()->first();
                if($row!==null)
                {
                    $sss = DB::table('webwesglobal_appea')
                        ->Where('id', $row->id)
                        ->update(['pageslider'=>$pageslider, 'sliderstatus' => $strjson, 'is_pageslider' => 0]);
                    $sucess--;
                }
                else
                {
                    $sss =  DB::table('webwesglobal_appea')->insertGetId(
                        [
                            'device' => $deviceArray[$i],
                            'trans' => $tranedLang,
                            'pageslider'=> $pageslider,
                            'sliderstatus' => $strjson,
                            'is_pageslider' => 0,
                            'g_path'=>$this->g_path
                        ]
                    );
                    $sucess--;
                }
                usleep(100000);
            }

        }
        else
        {
            $row=null;
            $where = 'g_path = "'.$this->g_path.'"';
            if($device!==null && $device !== '')
            {
                $where.=' and device = "'.$device.'"';
            }
            if($tranedLang!==null && $tranedLang !== '')
            {
                $where.=' and trans = "'.$tranedLang.'"';
            }

            $row = DB::table('webwesglobal_appea')
                ->select(DB::raw('id, trans, sliderstatus'))
                ->whereRaw($where)->get()->first();

            $sucess = -1;
            if($row!==null)
            {
                $sucess = DB::table('webwesglobal_appea')
                    ->Where('id', $row->id)
                    ->update(['pageslider'=>$pageslider, 'sliderstatus' => $strjson, 'is_pageslider' => 0]);
            }
            else
            {
                $sucess =  DB::table('webwesglobal_appea')->insertGetId(
                    [
                        'device' => $device,
                        'trans' => $tranedLang,
                        'pageslider'=> $pageslider,
                        'sliderstatus' => $strjson,
                        'is_pageslider' => 0,
                        'g_path'=>$this->g_path
                    ]
                );
            }
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

    public function wwgploginInstruct(Request $request)
    {
        $trans = trim($request->post('transLang'));
        $login_instruction_content= trim($request->post('login_instruction_content_val'));
        $login_instruction_maxline= trim($request->post('login_instruction_maxline'));
        $login_instruction_maxnum= trim($request->post('login_instruction_maxnum'));
        $wwgp_instruction_font_color_val= trim($request->post('wwgp_instruction_font_color_val'));
        $wwgp_instruction_border_color_val= trim($request->post('wwgp_instruction_border_color_val'));
        $wwgp_instruction_back_color_val= trim($request->post('wwgp_instruction_back_color_val'));
        $login_instruction_content = utf8_decode($login_instruction_content);
        $dbstr= array(
            'maxline' => $login_instruction_maxline,
            'maxnum' => $login_instruction_maxnum,
            'fontcolor' => $wwgp_instruction_font_color_val,
            'bordercolor' => $wwgp_instruction_border_color_val,
            'backcolor' => $wwgp_instruction_back_color_val,
            'help' => $login_instruction_content
        );
        $strjson =json_encode($dbstr);
        $where=' 1 ';
        if(isset($trans) && !empty($trans))
            $where.=' and trans = "'.$trans.'" ';
        $where.=' and g_path = "'.$this->g_path.'" ';

        $row = DB::table('wesglobalpagelogin')
            ->whereRaw($where)->get()->first();
            //->Where('trans', $trans)->where('g_path', $this->g_path)->get()->first();

        $sucess = -1;
        if($row!==null){
            $sucess = DB::table('wesglobalpagelogin')
                ->Where('id', $row->id)
                ->update(['instruction' => $strjson]);
        }
        else
        {
            $sucess =  DB::table('wesglobalpagelogin')->insertGetId(
                [
                    'trans' => $trans,
                    'instruction' => $strjson,
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

    public function getwwgpLoginInstructData(Request $request){
        $transLang = $request->post('transLang');
        $row=null;
        if($transLang===null || $transLang === '')
        {
            $row = DB::table('wesglobalpagelogin')
                ->select(DB::raw('trans, instruction'))
                ->where('g_path', $this->g_path)
                ->get()->first();
        }
        else
        {
            $row = DB::table('wesglobalpagelogin')
                ->select(DB::raw('trans, instruction'))
                ->Where([
                    ['trans', $transLang],
                    ['g_path', $this->g_path]
                ])->get()->first();
        }

        if($row!==null){
            $instruction = $row->instruction;
        }
        else
            $instruction='';

        return \Response::json([
            'msg'  =>  'ok',
            'item' => $instruction
        ]);

        exit();
    }

    public function getwwgpLoginAdvanData(Request $request){

        $tranedLang = $request->post('transLang');
      /*  $row = DB::table('wesglobalpagelogin')
            ->orderByDesc('id')->get()->first();*/
        $row =null;
        if($tranedLang===null || $tranedLang === '')
        {
            $row = DB::table('wesglobalpagelogin')
                ->select(DB::raw('trans, background'))
                ->where('g_path', $this->g_path)
                ->get()->first();
        }else{
            $row = DB::table('wesglobalpagelogin')
                ->select(DB::raw('trans, background'))
                ->Where([
                    ['trans', $tranedLang],
                    ['g_path', $this->g_path]
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

    public  function wwgploginAdvanupload(Request $request)
    {
        $trans = $request->post('transLang');
        $destinationPath = 'uploads/images/wesimg/';
        $file_pre = $request->post('advan_file_pre');
        /*$file = $request->file('advan_file');
        $filename='';
        if(!file_exists($_FILES['advan_file']['tmp_name']) && !empty($file_pre)){
            $filename=$file_pre;
        }
        else{
            $filename = time().'-'.$file->getClientOriginalName();
            $file->move(public_path().'/'.$destinationPath, $filename);//ckd
            if(!empty($file_pre))
                @unlink(public_path().'/'.$destinationPath.$file_pre);
        }*/

        $where=' 1 ';
        if(isset($trans) && !empty($trans))
            $where.=' and trans = "'.$trans.'" ';
        $where.=' and g_path = "'.$this->g_path.'" ';

        $row = DB::table('wesglobalpagelogin')
             ->whereRaw($where)->get()->first();
            //->Where('trans', $trans)->where('g_path', $this->g_path)->get()->first();

        $sucess = -1;
        if($row!=null){
            $sucess = DB::table('wesglobalpagelogin')
                ->Where('id', $row->id)
                ->update(['background' => $file_pre]);
        }
        else{
            $sucess =  DB::table('wesglobalpagelogin')->insertGetId(
                [
                    'trans' => $trans,
                    'background' => $file_pre,
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
    public function wwgploginRelease(Request $request)
    {
        $trans = trim($request->post('trans'));
        $tabstatus = trim($request->post('tabstatus'));
        $release = trim($request->post('release'));

        $where = "trans='".$trans."' ";
        $row = DB::table('wesglobalpagelogin')
            ->whereRaw($where)->get()->first();

        $sucess = -1;
        if($row!==null)
        {
            if($tabstatus == 0)
                $sucess = DB::table('wesglobalpagelogin')->whereRaw($where)->update(['is_sharing' => $release]);
            else if($tabstatus == 1)
                $sucess = DB::table('wesglobalpagelogin')->whereRaw($where)->update(['is_instruction' => $release]);
            else if($tabstatus == 2)
                $sucess = DB::table('wesglobalpagelogin')->whereRaw($where)->update(['is_background' => $release]);
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


    /* start insert lang part*/
    public function getDLangStr_type(Request $request){
        $str_type = DB::table('sitetranslatecont')
            ->select(DB::raw('str_type'))
            ->where('iso', '=', 'en')
            ->where('str_type', '<>', null)
            ->groupBy('str_type')
            ->get();

        return \Response::json([
            'msg'   =>  'ok',
            'str_type' => $str_type
        ]);
    }
    public function getDLangStr_key(Request $request){
        $str_key = DB::table('sitetranslatecont')
            ->select(DB::raw('str_key'))
            ->where('iso', '=', 'en')
            ->where('str_key', '<>', null)
            ->groupBy('str_key')
            ->get();
        return \Response::json([
            'msg'   =>  'ok',
            'str_key' => $str_key
        ]);
    }
    public function getDLangStr_link(Request $request){
        $str_link = DB::table('sitetranslatecont')
            ->select(DB::raw('str_link'))
            ->where('iso', '=', 'en')
            ->where('str_link', '<>', null)
            ->groupBy('str_link')
            ->get();
        return \Response::json([
            'msg'   =>  'ok',
            'str_link' => $str_link
        ]);
    }
    public function getDLangStr_cont(Request $request){
        $scont = $request->post('scont');
        $where = 'iso = "en" and str_cont IS NOT NUll';
        if($scont!==null && !empty($scont))
            $where .=' and str_cont like "%'.$scont.'%"';
        $str_cont = DB::table('sitetranslatecont')
            ->select(DB::raw('id, str_type, str_key, str_link, str_cont'))
            ->whereRaw($where)
            ->orderBy('str_cont')
            ->get();

        return \Response::json([
            'msg'   =>  'ok',
            'str_cont' => $str_cont
        ]);
    }

    public function addlangTest(Request $request, $scont=null){
        $where = 'iso = "en" and str_cont IS NOT NUll';
        if($scont!==null && !empty($scont))
            $where .=' and str_cont like "%'.$scont.'%"';

        $str_type = DB::table('sitetranslatecont')
            ->select(DB::raw('str_type'))
            ->where('iso', '=', 'en')
            ->where('str_type', '<>', null)
            ->groupBy('str_type')
            ->get();
        $str_key = DB::table('sitetranslatecont')
            ->select(DB::raw('str_key'))
            ->where('iso', '=', 'en')
            ->where('str_key', '<>', null)
            ->groupBy('str_key')
            ->get();
        $str_link = DB::table('sitetranslatecont')
            ->select(DB::raw('str_link'))
            ->where('iso', '=', 'en')
            ->where('str_link', '<>', null)
            ->groupBy('str_link')
            ->get();
        $str_cont = DB::table('sitetranslatecont')
            ->select(DB::raw('id, str_type, str_key, str_link, str_cont'))
            ->whereRaw($where)
            ->orderBy('str_cont')
            ->get();

        return view('admin.insertLang',compact('str_type','str_key', 'str_link', 'str_cont'));
    }
    public function InsertLangTemp(Request $request){
        $str_type=$request->post('str_type');
        $str_key=$request->post('str_key');
        $str_cont=$request->post('str_cont');
        $str_link=$request->post('str_link');
        $iso=$request->post('iso');
        $row = DB::table('sitetranslatecont')
            ->where('iso',$iso)
            ->where('str_type',$str_type)
            ->where('str_key',$str_key)->get()->first();
        $msg="du";
        $createtime = date("Y-m-d h:i:s", time());
        $iid=-1;
        if($row==null || empty($row))
        {
            $iid =  DB::table('sitetranslatecont')->insertGetId(
                [
                    'str_type' => $str_type
                    , 'str_key' => $str_key
                    , 'str_cont' => $str_cont
                    , 'str_link' => $str_link
                    , 'iso' => $iso
                    , 'created_at' => $createtime
                ]
            );

            if($iid > 0)
                $msg="ok";
            else
                $msg="err";
        }

        return \Response::json([
            'msg'   =>  $msg,
            'id' => $iid,
            'row' =>$row
        ]);

        exit();

    }
    public function UpdateLangTemp(Request $request){
        $str_type=trim($request->post('str_type'));
        $str_key=trim($request->post('str_key'));
        $str_cont=trim($request->post('str_cont'));
        $str_link=trim($request->post('str_link'));
        $iso=$request->post('iso');
        $id=$request->post('id');

        $createtime = date("Y-m-d h:i:s", time());
        $iid=0;
        try{
            $row = DB::table('sitetranslatecont')
                ->select(DB::raw('id, str_type, str_key, str_link, str_cont'))
                ->Where('id', $id)
                ->get()->first();;
            $pre_str_type=$row->str_type;
            $pre_str_key=$row->str_key;
            $pre_str_link=$row->str_link;
            $where = 'id <> '.$id.' and str_type="'.$pre_str_type.'" and str_key="'.$pre_str_key.'"';
            if(isset($pre_str_link))
                $where .=' and str_link="'.$pre_str_link.'"';
            DB::table('sitetranslatecont')
                ->whereRaw($where)
                ->delete();

            DB::table('sitetranslatecont')
                ->Where('id', $id)
                ->update([
                    'str_type' => $str_type
                    , 'str_key' => $str_key
                    , 'str_cont' => $str_cont
                    , 'str_link' => isset($str_link) ? $str_link:''
                    , 'iso' => $iso
                    , 'updated_at' => $createtime
                ]);
            $iid=1;
        }
        catch(\Exception $e){}

        if($iid==1){
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
    public function deleteLangTemp(Request $request){
        $id=$request->post('id');
        $msg='ok';
        try{
            $row = DB::table('sitetranslatecont')
                ->select(DB::raw('id, str_type, str_key, str_link, str_cont'))
                ->Where('id', $id)
                ->get()->first();
            $pre_str_type=$row->str_type;
            $pre_str_key=$row->str_key;
            $pre_str_link=$row->str_link;
            $where = 'id <> '.$id.' and str_type="'.$pre_str_type.'" and str_key="'.$pre_str_key.'"';
            if(isset($pre_str_link))
                $where .=' and str_link="'.$pre_str_link.'"';
            DB::table('sitetranslatecont')
                ->whereRaw($where)
                ->delete();

            DB::table('sitetranslatecont')
                ->delete($id);

        }
        catch(\Exception $e){
            $msg='err';
        }
        return \Response::json([
            'msg'   =>  $msg
        ]);
    }

    /* start insert lang part*/
    public function getFLangStr_type(Request $request){
        $str_type = DB::table('wesfront_lang')
            ->select(DB::raw('str_type'))
            ->where('iso', '=', 'en')
            ->where('str_type', '<>', null)
            ->groupBy('str_type')
            ->get();

        return \Response::json([
            'msg'   =>  'ok',
            'str_type' => $str_type
        ]);
    }
    public function getFLangStr_key(Request $request){
        $str_key = DB::table('wesfront_lang')
            ->select(DB::raw('str_key'))
            ->where('iso', '=', 'en')
            ->where('str_key', '<>', null)
            ->groupBy('str_key')
            ->get();
        return \Response::json([
            'msg'   =>  'ok',
            'str_key' => $str_key
        ]);
    }
    public function getFLangStr_link(Request $request){
        $str_link = DB::table('wesfront_lang')
            ->select(DB::raw('str_link'))
            ->where('iso', '=', 'en')
            ->where('str_link', '<>', null)
            ->groupBy('str_link')
            ->get();
        return \Response::json([
            'msg'   =>  'ok',
            'str_link' => $str_link
        ]);
    }
    public function getFLangStr_cont(Request $request){
        $scont = $request->post('scont');
        $where = 'iso = "en" and str_cont IS NOT NUll';
        if($scont!==null && !empty($scont))
            $where .=' and str_cont like "%'.$scont.'%"';
        $str_cont = DB::table('wesfront_lang')
            ->select(DB::raw('id, str_type, str_key, str_link, str_cont'))
            ->whereRaw($where)
            ->orderBy('str_cont')
            ->get();

        return \Response::json([
            'msg'   =>  'ok',
            'str_cont' => $str_cont
        ]);
    }
    public function addfrontlangTest(Request $request, $scont=null){
        $where = 'iso = "en" and str_cont IS NOT NUll';
        if($scont!==null && !empty($scont))
            $where .=' and str_cont like "%'.$scont.'%"';
        else
        {
            $param = $request->post('scont');
        }
        if($scont===null && isset($param))
            $where .=' and str_cont like "%'.$param.'%"';

        $str_type = DB::table('wesfront_lang')
            ->select(DB::raw('str_type'))
            ->where('iso', '=', 'en')
            ->where('str_type', '<>', null)
            ->groupBy('str_type')
            ->get();
        $str_key = DB::table('wesfront_lang')
            ->select(DB::raw('str_key'))
            ->where('iso', '=', 'en')
            ->where('str_key', '<>', null)
            ->groupBy('str_key')
            ->get();
        $str_link = DB::table('wesfront_lang')
            ->select(DB::raw('str_link'))
            ->where('iso', '=', 'en')
            ->where('str_link', '<>', null)
            ->groupBy('str_link')
            ->get();
        $str_cont = DB::table('wesfront_lang')
            ->select(DB::raw('id, str_type, str_key, str_link, str_cont'))
            ->whereRaw($where)
            ->orderBy('str_cont')
            ->get();

        return view('admin.insertFrontLang',compact('str_type','str_key', 'str_link', 'str_cont'));
    }
    public function InsertfrontLangTemp(Request $request){
        $str_type=$request->post('str_type');
        $str_key=$request->post('str_key');
        $str_cont=$request->post('str_cont');
        $str_link=$request->post('str_link');
        $iso=$request->post('iso');
        $row = DB::table('wesfront_lang')
            ->where('iso',$iso)
            ->where('str_type',$str_type)
            ->where('str_key',$str_key)->get()->first();
        $msg="du";
        $createtime = date("Y-m-d h:i:s", time());
        $iid=-1;
        if($row==null || empty($row))
        {
            $iid =  DB::table('wesfront_lang')->insertGetId(
                [
                    'str_type' => $str_type
                    , 'str_key' => $str_key
                    , 'str_cont' => $str_cont
                    , 'str_link' => $str_link
                    , 'iso' => $iso
                    , 'created_at' => $createtime
                ]
            );

            if($iid > 0)
                $msg="ok";
            else
                $msg="err";
        }

        return \Response::json([
            'msg'   =>  $msg,
            'id' => $iid,
            'row' =>$row
        ]);

        exit();

    }
    public function UpdatefrontLangTemp(Request $request){
        $str_type=trim($request->post('str_type'));
        $str_key=trim($request->post('str_key'));
        $str_cont=trim($request->post('str_cont'));
        $str_link=trim($request->post('str_link'));
        $iso=$request->post('iso');
        $id=$request->post('id');

        $createtime = date("Y-m-d h:i:s", time());
        $iid=0;
        try{
            $row = DB::table('wesfront_lang')
                ->select(DB::raw('id, str_type, str_key, str_link, str_cont'))
                ->Where('id', $id)
                ->get()->first();;
            $pre_str_type=$row->str_type;
            $pre_str_key=$row->str_key;
            $pre_str_link=$row->str_link;
            $where = 'id <> '.$id.' and str_type="'.$pre_str_type.'" and str_key="'.$pre_str_key.'"';
            if(isset($pre_str_link))
                $where .=' and str_link="'.$pre_str_link.'"';
            DB::table('wesfront_lang')
                ->whereRaw($where)
                ->delete();

            DB::table('wesfront_lang')
                ->Where('id', $id)
                ->update([
                    'str_type' => $str_type
                    , 'str_key' => $str_key
                    , 'str_cont' => $str_cont
                    , 'str_link' => isset($str_link) ? $str_link:''
                    , 'iso' => $iso
                    , 'updated_at' => $createtime
                ]);
            $iid=1;
        }
        catch(\Exception $e){}

        if($iid==1){
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
    public function deletefrontLangTemp(Request $request){
        $id=$request->post('id');
        $msg='ok';
        try{
            $row = DB::table('wesfront_lang')
                ->select(DB::raw('id, str_type, str_key, str_link, str_cont'))
                ->Where('id', $id)
                ->get()->first();
            $pre_str_type=$row->str_type;
            $pre_str_key=$row->str_key;
            $pre_str_link=$row->str_link;
            $where = 'id <> '.$id.' and str_type="'.$pre_str_type.'" and str_key="'.$pre_str_key.'"';
            if(isset($pre_str_link))
                $where .=' and str_link="'.$pre_str_link.'"';
            DB::table('wesfront_lang')
                ->whereRaw($where)
                ->delete();

            DB::table('wesfront_lang')
                ->delete($id);

        }
        catch(\Exception $e){
            $msg='err';
        }
        return \Response::json([
            'msg'   =>  $msg
        ]);
    }

    /* end insertlang part*/


    public function updateUserinfo(Request $request) {

        $userMD = new UserModel;

        $userid = $request->post('global-user-profile-id');
        $newusername = $request->post('global-user-profile-username');
        $newname = $request->post('global-user-profile-name');
        $newemail = $request->post('global-user-profile-email');
        $newmobile = $request->post('global-user-profile-tel');
        $newcountrycode = $request->post('global-user-profile-tel-data');
        $newcountryname = $request->post('global-user-profile-country-data');
        $profileImg = $request->file('global-user-profile-photo-edit');
        $profileBackgroundImg = $request->file('global-user-profile-background-edit');

        $photofilename = "";
        $photoBackgroundFilename = "";

        try {
            if ($request->exists("global-user-profile-photo-edit")) {
                if (file_exists($_FILES['global-user-profile-photo-edit']['tmp_name'])) {
                    $photoImgPath = 'uploads/images/';
                    $photofilename = time().'-'.$profileImg->getClientOriginalName();
					$profileImg->move(public_path().'/'.$photoImgPath, $photofilename);
                } else {
                    $photofilename = "";
                }
            }

            if ($request->exists("global-user-profile-background-edit")) {
                if (file_exists($_FILES['global-user-profile-background-edit']['tmp_name'])) {
                    $photoBackgroundImgPath = 'uploads/images';
                    $photoBackgroundFilename = time().'-'.$profileBackgroundImg->getClientOriginalName();
					$profileBackgroundImg->move(public_path().'/'.$photoBackgroundImgPath, $photoBackgroundFilename);
                } else {
                    $photoBackgroundFilename = "";
                }
            }

            if ($userMD->updateUserinfo($userid, $newusername, $newname, $newemail, $newmobile, $newcountrycode, $newcountryname, $photofilename, $photoBackgroundFilename) == false) {
                return \Response::json([
                    'msg' => 'err'
                ]);
            } else {
                return \Response::json([
                    'msg' => 'ok'
                ]);
            }
        }
        catch (\Exception $e)
        {
            return \Response::json([
                'msg' => $e
            ]);
        }
    }

    public function updateUserPassword(Request $request) {
        $userid = $request->post('id');
        $oldpwd = $request->post('oldpwd');
        $newpwd = $request->post('newpwd');

        $userMD = new UserModel;

        if ($userMD->updateUserPassword($userid, $oldpwd, $newpwd) == false) {
            return \Response::json([
                'msg' => 'err',
                'message' => 'password is incorrect'
            ]);
        } else {
            return \Response::json([
                'msg' => 'ok'
            ]);
        }
    }

    public function getDefaultItemList(Request $request) {
        $userid = $request->post('userid');
        $rows = DB::table('systemuseraccount')
            //->where('userid', $userid)
            ->get()->first();
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
                "setpwd" => $setpwd
            ]);
        }

        exit();

    }

    public function getGlobalUserProfileList(Request $request) {
        $userid = $request->post('userid');
        $rows = DB::table('systemuseraccount')
            //->where('userid', $userid)
            ->get()->first();
        $setpwd = '';
        $setmobile = array();
        $setemail = array();

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

    public function checkProfileNameEmailPhone(Request $request) {
        $userid = $request->post('global-user-profile-id');
        $username = $request->post('global-user-profile-username');
        $email = $request->post('global-user-profile-email');
        $mobile = $request->post('global-user-profile-tel');

        $p_width = $request->post('p_width');
        $p_height = $request->post('p_height');
        $b_width = $request->post('b_width');
        $b_height = $request->post('b_height');

        $profileImg = $request->file('global-user-profile-photo-edit');
        if($profileImg != null && $profileImg != '') {
            $profileImg_data = getimagesize($_FILES['global-user-profile-photo-edit']['tmp_name']);
            $pwidth = $profileImg_data[0];
            $pheight = $profileImg_data[1];
            if($p_width < $pwidth || $p_height < $pheight){
                return \Response::json([
                    'msg' => 'psize'
                ]);
            }
        }
        $profileBackgroundImg = $request->file('global-user-profile-background-edit');
        if($profileBackgroundImg != null && $profileBackgroundImg != '') {
            $profileBackgroundImg_data = getimagesize($_FILES['global-user-profile-background-edit']['tmp_name']);
            $bwidth = $profileBackgroundImg_data[0];
            $bheight = $profileBackgroundImg_data[1];
            if($b_width < $bwidth || $b_height < $bheight){
                return \Response::json([
                    'msg' => 'bsize'
                ]);
            }
        }

        $row1 = DB::table('userinfo')
            ->whereRaw('id <> '.$userid)
            ->where('username', $username)->get()->first();
        $dup1 = 0;
        if ($row1 !== null && $row1 !== "") {
            $dup1 = 1;
        }
        $userMD = new UserModel;
        $row2 = $userMD->checkUserinfoEmail($email, $userid);
        $dup2 = 0;
        if ($row2 !== null && $row2 !== "") {
            $dup2 = 1;
        }
        $row3 = DB::table('userinfo')
            ->whereRaw('id <> '.$userid)
            ->where('phone', $mobile)->get()->first();
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

    public function insertSUSEmailItem(Request $request) {
        $org_name = $request->post('org_name');
        $name = $request->post('name');
        $fsize = $request->post('fsize');
        $fheight = $request->post('fheight');
        $characters = $request->post('characters');
        $check = $request->post('check');

        $rows = DB::table('systemsusersecurity')->orderByDesc('id')->get()->first();

        $arr_data = array(
            $name => array(
                "name" => $name,
                "fsize" => $fsize,
                "fheight" => $fheight,
                "characters" => $characters,
                "check" => $check
            )
        );

        if ($rows===null || $rows->email == null || $rows->email == "") {
            $arr_data = json_encode($arr_data);
            $rt = DB::table('systemsusersecurity')->where('id', $rows->id)
                ->update(['email'=>$arr_data]);

            return \Response::json([
                'msg' => 'ok'
            ]);
        } else {
            $lists = json_decode($rows->email);

            $arr_res = array();
            foreach ($lists as $k => $v) {
                if ($org_name != '' && $org_name === $k) {
                    $arr_res[$name] = array(
                        "name" => $name,
                        "fsize" => $fsize,
                        "fheight" => $fheight,
                        "characters" => $characters,
                        "check" => $check
                    );
                } else {
                    $arr_res[$k] = array(
                        "name" => $v->name,
                        "fsize" => $v->fsize,
                        "fheight" => $v->fheight,
                        "characters" => $v->characters,
                        "check" => $v->check
                    );
                }
            }

            if ($org_name === '' || $org_name === null) {
                $arr_res[$name] = array(
                    "name" => $name,
                    "fsize" => $fsize,
                    "fheight" => $fheight,
                    "characters" => $characters,
                    "check" => $check
                );
            }

            $arr_res = json_encode($arr_res);

            $rt = DB::table('systemsusersecurity')->where('id', $rows->id)
                ->update(['email'=>$arr_res]);

            return \Response::json([
                'msg' => 'ok'
            ]);
        }
    }

    public function getSUSEmailItem(Request $request) {
        $rows = DB::table('systemsusersecurity')->orderByDesc('id')->get()->first();

        if ($rows === null || $rows->email === null || $rows->email === '') {
            return \Response::json([
                'msg' => 'ok',
                'list' => '',
            ]);
        } else {
            $lists = json_decode($rows->email);

            $arr_res = array();
            foreach ($lists as $k => $v) {
                $arr_res[] = array(
                    'name' => $v->name,
                    "fsize" => $v->fsize,
                    "fheight" => $v->fheight,
                    "characters" => $v->characters,
                    'check' => $v->check,
                );
            }

            return \Response::json([
                'msg' => 'ok',
                'list' => $arr_res
            ]);
        }
    }

    public function deleteSUSEmailItem(Request $request) {
        $name = $request->post('name');

        $rows = DB::table('systemsusersecurity')->orderByDesc('id')->get()->first();

        if ($rows===null || $rows->email === null || $rows->email === '') {
            return \Response::json([
                'msg' => 'error',
                'message' => 'no email data'
            ]);
        } else {
            $lists = json_decode($rows->email);

            $arr_res = array();
            foreach ($lists as $k => $v) {
                if ($k != $name) {
                    $arr_res[$k] = array(
                        "name" => $v->name,
                        "fsize" => $v->fsize,
                        "fheight" => $v->fheight,
                        "characters" => $v->characters,
                        "check" => $v->check,
                    );
                }
            }

            $arr_res = json_encode($arr_res);

            $rt = DB::table('systemsusersecurity')->where('id', $rows->id)
                ->update(['email'=>$arr_res]);

            return \Response::json([
                'msg' => 'ok',
            ]);
        }
    }

    public function updateSUSEmailItem(Request $request) {
        $data = $request->post('data');

        $rows = DB::table('systemsusersecurity')->orderByDesc('id')->get()->first();

        if ($rows===null || $rows->email === null || $rows->email === '') {
            return \Response::json([
                'msg' => 'error',
                'message' => 'no email data'
            ]);
        } else if ($data != null) {
            $lists = json_decode($rows->email);

            $arr_res = array();
            foreach ($lists as $k => $v) {
                $arr_res[$k] = array(
                    'name' => $v->name,
                    "fsize" => $v->fsize,
                    "fheight" => $v->fheight,
                    "characters" => $v->characters,
                    'check' => "0",
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

            $rt = DB::table('systemsusersecurity')->where('id', $rows->id)->update(['email'=>$arr_res]);

            return \Response::json([
                'msg' => 'ok',
            ]);
        } else if ($data == null) {
            $lists = json_decode($rows->email);

            $arr_res = array();
            foreach ($lists as $k => $v) {
                $arr_res[$k] = array(
                    'name' => $v->name,
                    "fsize" => $v->fsize,
                    "fheight" => $v->fheight,
                    "characters" => $v->characters,
                    'check' => "0",
                );
            }

            $arr_res = json_encode($arr_res);

            $rt = DB::table('systemsusersecurity')->where('id', $rows->id)->update(['email'=>$arr_res]);

            return \Response::json([
                'msg' => 'ok',
            ]);
        }
    }

    public function insertSUSPasswordItem(Request $request) {
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

        $rows = DB::table('systemsusersecurity')->orderByDesc('id')->get()->first();

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
                $rt = DB::table('systemsusersecurity')->where('id', $rows->id)->update(['password'=>$arr_data]);

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

                $rt = DB::table('systemsusersecurity')->where('id', $rows->id)
                    ->update(['password'=>$arr_res]);

                return \Response::json([
                    'msg' => 'ok'
                ]);
            }
    }

    public function getSUSPasswordItem(Request $request) {
        $password_type = $request->post('password_type');

        $rows = DB::table('systemsusersecurity')->orderByDesc('id')->get()->first();

        if ($rows===null || $rows->password === null || $rows->password === '') {
            $pwd_data = '{"Strong":{"name":"Strong","format1_opt":"0","format1_val":"8","format2_opt":"3","format2_val":"8","style_letter":"1","style_digital":"0","style_special":"1","style_upper_lower":"1","colour_val":"#a2de9f","warning_text":"Please Enter A Password Of 8-12 Characters","warning_colour_val":"#e82b5c","check":"1"},"Medium":{"name":"Medium","format1_opt":"0","format1_val":"8","format2_opt":"3","format2_val":"12","style_letter":"1","style_digital":"0","style_special":"0","style_upper_lower":"0","colour_val":"#a2de9f","warning_text":"Please Enter A Password Of 8-12 Characters","warning_colour_val":"#e82b5c","check":"0"},"Weak":{"name":"Weak","format1_opt":"0","format1_val":"8","format2_opt":"3","format2_val":"12","style_letter":"1","style_digital":"0","style_special":"0","style_upper_lower":"0","colour_val":"#a2de9f","warning_text":"Please Enter A Password Of 8-12 Characters","warning_colour_val":"#e82b5c","check":"0"}}';
            DB::table('systemsusersecurity')->insertGetId(
                ['password' => $pwd_data]
            );
            $rows = DB::table('systemsusersecurity')->orderByDesc('id')->get()->first();
        }
        $lists = json_decode($rows->password);

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
            'list' => $arr_res
        ]);
    }

    public function deleteSUSPasswordItem(Request $request) {
        $password_type = $request->post('password_type');
        $name = $request->post('name');

        $rows = DB::table('systemsusersecurity')->orderByDesc('id')->get()->first();

        if ($password_type == "strong") {
            if ($rows===null || $rows->strong === null || $rows->strong === '') {
                return \Response::json([
                    'msg' => 'error',
                    'message' => 'no password strong data'
                ]);
            } else {
                $lists = json_decode($rows->strong);

                $arr_res = array();
                foreach ($lists as $k => $v) {
                    if ($k != $name) {
                        $arr_res[$k] = array(
                            "name" => $v->name,
                            "format1_opt" => $v->format1_opt,
                            "format1_val" => $v->format1_val,
                            "format2_opt" => $v->format2_opt,
                            "format2_val" => $v->format2_val,
                            "style_letter" => $v->style_letter,
                            "style_digital" => $v->style_digital,
                            "style_special" => $v->style_special,
                            "colour_val" => $v->colour_val,
                            "warning_text" => $v->warning_text,
                            "warning_colour_val" => $v->warning_colour_val,
                            "check" => $v->check,
                        );
                    }
                }

                $arr_res = json_encode($arr_res);

                $rt = DB::table('systemsusersecurity')->where('id', $rows->id)
                    ->update(['strong' => $arr_res]);

                return \Response::json([
                    'msg' => 'ok',
                ]);
            }
        } else if ($password_type == "medium") {
            if ($rows===null || $rows->medium === null || $rows->medium === '') {
                return \Response::json([
                    'msg' => 'error',
                    'message' => 'no password strong data'
                ]);
            } else {
                $lists = json_decode($rows->medium);

                $arr_res = array();
                foreach ($lists as $k => $v) {
                    if ($k != $name) {
                        $arr_res[$k] = array(
                            "name" => $v->name,
                            "format1_opt" => $v->format1_opt,
                            "format1_val" => $v->format1_val,
                            "format2_opt" => $v->format2_opt,
                            "format2_val" => $v->format2_val,
                            "style_letter" => $v->style_letter,
                            "style_digital" => $v->style_digital,
                            "style_special" => $v->style_special,
                            "colour_val" => $v->colour_val,
                            "warning_text" => $v->warning_text,
                            "warning_colour_val" => $v->warning_colour_val,
                            "check" => $v->check,
                        );
                    }
                }

                $arr_res = json_encode($arr_res);

                $rt = DB::table('systemsusersecurity')->where('id', $rows->id)
                    ->update(['medium' => $arr_res]);

                return \Response::json([
                    'msg' => 'ok',
                ]);
            }
        } else if ($password_type == "low") {
            if ($rows===null || $rows->low === null || $rows->low === '') {
                return \Response::json([
                    'msg' => 'error',
                    'message' => 'no password strong data'
                ]);
            } else {
                $lists = json_decode($rows->low);

                $arr_res = array();
                foreach ($lists as $k => $v) {
                    if ($k != $name) {
                        $arr_res[$k] = array(
                            "name" => $v->name,
                            "format1_opt" => $v->format1_opt,
                            "format1_val" => $v->format1_val,
                            "format2_opt" => $v->format2_opt,
                            "format2_val" => $v->format2_val,
                            "style_letter" => $v->style_letter,
                            "style_digital" => $v->style_digital,
                            "style_special" => $v->style_special,
                            "colour_val" => $v->colour_val,
                            "warning_text" => $v->warning_text,
                            "warning_colour_val" => $v->warning_colour_val,
                            "check" => $v->check,
                        );
                    }
                }

                $arr_res = json_encode($arr_res);

                $rt = DB::table('systemsusersecurity')->where('id', $rows->id)
                    ->update(['low' => $arr_res]);

                return \Response::json([
                    'msg' => 'ok',
                ]);
            }
        }
    }

    public function updateSUSPasswordItem(Request $request) {
//        $strong_data = $request->post('strong_data');
//        $medium_data = $request->post('medium_data');
//        $low_data = $request->post('low_data');
        $data = $request->post('data');

        $rows = DB::table('systemsusersecurity')->orderByDesc('id')->get()->first();

        if ($rows===null || $rows->password === null || $rows->password === '') {
            return \Response::json([
                "msg" => "error",
                "message" => "no password data"
            ]);
        }

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

            $rt = DB::table('systemsusersecurity')->where('id', $rows->id)
                ->update(['password'=>$arr_res]);
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

            $rt = DB::table('systemsusersecurity')->where('id', $rows->id)->update(['password'=>$arr_res]);
        }

        return \Response::json([
            'msg' => 'ok',
        ]);
    }

    public function insertTextStyle(Request $request)
    {
        $cid = $request->post('cid');
        $name = $request->post('name');
        $min_limit = $request->post('min_limit');
        $max_limit = $request->post('max_limit');
        $alphabet_option = $request->post('alphabet_option');
        $upper_lower_option = $request->post('upper_lower_option');
        $number_option = $request->post('number_option');
        $special_option = $request->post('special_option');
        $style_name = $request->post('style_name');
        $createtime = date("Y-m-d h:i:s", time());

        $iid = 0;

        if ($cid > 0) {
            // change exist
            try {
                DB::table('sitefieldtext')->where('id', $cid)->update([
                    "name" => $name,
                    "minvalue" => $min_limit,
                    "maxvalue" => $max_limit,
                    "style_alpha" => $alphabet_option,
                    "style_num" => $number_option,
                    "style_upper_lower" => $upper_lower_option,
                    "style_special" => $special_option,
                    "style_title" => $style_name,
                    "updated_at" => $createtime
                ]);

                $iid = 1;
            } catch (\Exception $e) {}
        } else {
            // insert new
            $iid = DB::table('sitefieldtext')->insertGetId(
                [
                    "name" => $name,
                    "minvalue" => $min_limit,
                    "maxvalue" => $max_limit,
                    "style_alpha" => $alphabet_option,
                    "style_num" => $number_option,
                    "style_upper_lower" => $upper_lower_option,
                    "style_special" => $special_option,
                    "style_title" => $style_name,
                    "created_at" => $createtime
                ]
            );
        }

        if ($iid > 0) {
            return \Response::json([
                "msg" => "ok"
            ]);
        } else {
            return \Response::json([
                "msg" => "err",
                "message" => "Error insert in db"
            ]);
        }

        exit();
    }

    public function getTextStyleList(Request $request)
    {
        $start = $request->post('start');
        $cnt = $request->post('cnt');
        $filter = $request->post('filter');
        $start_from = ($start-1) * $cnt;

        if ($filter == 1) {
            $lists = DB::table('sitefieldtext')
                ->orderByDesc('id')->offset($start_from)->limit($cnt)->get();
            $rows = DB::table('sitefieldtext')->get();
            $total = count($rows);
            $totalpage = ceil($total / $cnt);

            if ($total > 0) {
                return \Response::json([
                    "msg" => "ok",
                    "total" => $total,
                    "start" => $start,
                    "totalpage" => $totalpage,
                    "list" => $lists
                ]);
            } else {
                return \Response::json([
                    "msg" => "err",
                    "total" => $total,
                    "message" => "empty data in database"
                ]);
            }
        } else if ($filter == 0) {
            $lists = DB::table('sitefieldtext')
                ->orderByDesc('id')->get();

            if (count($lists) > 0) {
                return \Response::json([
                    'msg' => 'ok',
                    'list' => $lists
                ]);
            } else {
                return \Response::json([
                    'msg' => 'err',
                    'message' => 'empty data in database'
                ]);
            }
        }

        exit();
    }

    public function deleteSiteText(Request $request)
    {
        $id = $request->post('id');
        $ret = 1;

        try {
            DB::table('sitefieldtext')->where('id', $id)->delete();
        } catch (\Exception $e) {
            $ret = 0;
        }

        if ($ret) {
            return \Response::json([
                "msg" => "ok"
            ]);
        } else {
            return \Response::json([
                "msg" => "err",
                "message" => "error: id does not exist"
            ]);
        }

        exit();
    }

    public function ssrRegisterAppearance(Request $request)
    {
        $trans = trim($request->post('transLang'));
        $appearance_content = trim($request->post('registered_appearance_content_val'));
        $appearance_maxline = trim($request->post('ssr_appearance_maxline'));
        $ssr_font_color_val = trim($request->post('ssr_appearance_font_color_val'));
        $ssr_border_color_val = trim($request->post('ssr_appearance_border_color_val'));
        $ssr_back_color_val = trim($request->post('ssr_appearance_back_color_val'));
        $appearance_content = utf8_decode($appearance_content);

        $destinationPath = "uploads/images/wesimg/";
        $file_pre = $request->post("ssr_appearance_file_pre");
        $file = $request->file("ssr_appearance_file");
        $filename = "";

        if (!file_exists($_FILES["ssr_appearance_file"]["tmp_name"]) || !empty($file_pre)) {
            $filename = $file_pre;
        } else {
            $filename = time().'-'.$file->getClientOriginalName();

		/*	if($this->g_path!=="local")
			{
			  $this->filesystem->write('/'.$destinationPath.$filename, file_get_contents($file));//ckd
			  if(!empty($file_pre) && $this->filesystem->has('/'.$destinationPath.$file_pre))
				$this->filesystem->delete('/'.$destinationPath.$file_pre);
			}
			else*/
			{
			   $file->move(public_path().'/'.$destinationPath, $filename);
			  if(!empty($file_pre))
				@unlink(public_path().'/'.$destinationPath.$file_pre);
			}

        }

        $dbstr = array(
            "maxline" => $appearance_maxline,
            "fontcolor" => $ssr_font_color_val,
            "bordercolor" => $ssr_border_color_val,
            "backcolor" => $ssr_back_color_val,
            "help" => $appearance_content,
            "advancss" => $filename
        );
        $strjson = json_encode($dbstr);
        $where = ' 1 ';
        if(isset($trans) && !empty($trans))
            $where .=' and trans="'.$trans.'" ';
        $where .=' and type="appearance" and g_path="'.$this->g_path.'" ';

        $row = DB::table("systemsuserregistered")->whereRaw($where)->get()->first();
            /*->Where([
                ['trans', $trans],
                ['type', 'appearance'],
                ['g_path', $this->g_path]
            ])->get()->first();*/

        $success = -1;
        if ($row !== null) {
            $success = DB::table("systemsuserregistered")
                ->Where([
                    ['id', $row->id]
                ])->update(['content' => $strjson]);
        } else {
            $success = DB::table('systemsuserregistered')->insertGetId([
                'trans' => $trans,
                'type' => 'appearance',
                'content' => $strjson,
                'g_path'=>$this->g_path
            ]);
        }

        if ($success > -1) {
            return \Response::json([
                "msg" => "ok"
            ]);
        } else {
            return \Response::json([
                "msg" => "err"
            ]);
        }

        exit();
    }

    public function ssrGetAppearance(Request $request)
    {
        $transLang = $request->post('transLang');
        $row = null;

        /*if ($transLang === null || $transLang === "") {
            $row = DB::table("systemsuserregistered")
                ->select(DB::raw("content"))
                ->where([
                    ['type', 'appearance'],
                    ['g_path', $this->g_path]
                ])->get()->first();
        }
        else
        {
            $row = DB::table("systemsuserregistered")
                ->select(DB::raw("content"))
                ->where([
                    ['trans', $transLang],
                    ['type', 'appearance'],
                    ['g_path', $this->g_path]
                ])->get()->first();
        }

        if ($row !== null) {
            $content = $row->content;
        } else {
            $content = "";
        }

        return \Response::json([
            "msg" => "ok",
            "item" => $content
        ]);*/
        $row = DB::table("site_basic_setting")
            ->select(DB::raw("register"))
            ->get()->first();

        if ($row !== null) {
            $content = $row->register;
        } else {
            $content = "";
        }

        return \Response::json([
            "msg" => "ok",
            "pageinfo" => $content
        ]);

        exit();
    }

    public function ssrRegisterSetting(Request $request)
    {
        $trans = trim($request->post("transLang"));
        $setting_content = trim($request->post("registered_setting_content_val"));
        $setting_sms = trim($request->post("ssr_setting_headbar_val"));

        $dbstr = array(
            "help" => $setting_content,
            "sms" => $setting_sms
        );
        $strjson = json_encode($dbstr);
        $where =' 1 ';
        if(isset($trans) && !empty($trans))
            $where .=' and trans= "'.$trans.'" ';
        $where .=' and type= "setting" and g_path = "'.$this->g_path.'" ';
        $row = DB::table("systemsuserregistered")
               ->whereRaw($where)->get()->first();
          /*  ->Where([
                ['trans', $trans],
                ['type', 'setting'],
                ['g_path', $this->g_path]
            ])->get()->first();*/

        $success = -1;
        if ($row != null)
        {
            $success = DB::table("systemsuserregistered")
                ->Where([
                    ['id', $row->id]
                ])
                ->update(['content' => $strjson]);
        } else {
            $success = DB::table("systemsuserregistered")->insertGetId(
                [
                    "trans" => $trans,
                    "type" => "setting",
                    "content" => $strjson,
                    "g_path"=>$this->g_path
                ]
            );
        }

        if ($success > -1) {
            return \Response::json([
                "msg" => "ok"
            ]);
        } else {
            return \Response::json([
                "msg" => "err"
            ]);
        }

        exit();
    }

    public function ssrGetSetting(Request $request)
    {
        $transLang = $request->post('transLang');
        $row = null;

        $rows = DB::table("systemsusersecurity")->orderByDesc("id")->get()->first();
        $mobile = "";

        if ($rows===null || $rows->mobile === null || $rows->mobile === "") {
            $mobile = "";
        } else {
            $lists = json_decode($rows->mobile);

            $arr_res = array();
            foreach ($lists as $k => $v) {
                $arr_res[] = array(
                    "name" => $v->name,
                    "characters" => $v->characters,
                    "countrycode" => $v->countrycode,
                    "check" => 0,
                );
            }

            $mobile = $arr_res;
        }

        if ($transLang === null || $transLang === "") {
            $row = DB::table("systemsuserregistered")
                ->select(DB::raw("content"))
                ->where([
                    ['type', 'setting'],
                    ['g_path', $this->g_path]
                ])->get()->first();
        } else {
            $row = DB::table("systemsuserregistered")
                ->select(DB::raw("content"))
                ->where([
                    ['trans', $transLang],
                    ['type', 'setting'],
                    ['g_path', $this->g_path]
                ])->get()->first();
        }

        if ($row !== null) {
            $content = $row->content;
        } else {
            $content = "";
        }

        return \Response::json([
            "msg" => "ok",
            "item" => $content,
            "sms" => $mobile
        ]);

        exit();
    }

    public function savesitefieldmobile(Request $request) {
        $name = $request->post("name");
        $countryname = $request->post("countryname");
        $countryiso = $request->post("countryiso");
        $characters = $request->post("characters");
        $dialcode = $request->post("dialcode");
        $etypee = $request->post("etype");
        $cid = $request->post("cid");

        $createtime = date("Y-m-d h:i:s", time());
        $iid = 0;

        if ($etypee == "change" && $cid > 0) {
            try {
                DB::table("sitefieldmobile")->Where("id", $cid)->update([
                    'name' => strtolower($name),
                    'countryname' => $countryname,
                    'countryiso' => $countryiso,
                    'characters' => $characters,
                    'dialcode' => $dialcode,
                    'updated_at' => $createtime,
                ]);
                $iid=1;
            }
            catch (\Exception $e) {}
        } else {
            $iid = DB::table("sitefieldmobile")->insertGetId([
                'name' => strtolower($name),
                'countryname' => $countryname,
                'countryiso' => $countryiso,
                'characters' => $characters,
                'dialcode' => $dialcode,
                'created_at' => $createtime
            ]);
        }

        if ($iid > 0) {
            return \Response::json([
                "msg" => "ok"
            ]);
        } else {
            return \Response::json([
                "msg" => "err",
                "message" => "Error insert in db"
            ]);
        }

        exit();
    }

    public function getSiteMobileList(Request $request)
    {
        $filter = $request->post("filter");
        $start = $request->post("start");
        $cnt = $request->post("cnt");

        if ($filter == 1) {
            $start_from = ($start - 1) * $cnt;

            $lists = DB::table("sitefieldmobile")
                ->orderByDesc("id")->offset($start_from)->limit($cnt)->get();
            $rows = DB::table("sitefieldmobile")->get();
            $total = $rows;
            $totalpage = ceil(count($total) / $cnt);

            if (count($total) > 0) {
                return \Response::json([
                    "msg" => "ok",
                    "total" => $total,
                    "start" => $start,
                    "totalpage" => $totalpage,
                    "list" => $lists
                ]);
            } else {
                return \Response::json([
                    "msg" => "err",
                    "total" => $total,
                    "message" => "empty data in db"
                ]);
            }
        } else if ($filter == 0) {
            $lists = DB::table("sitefieldmobile")
                ->orderByDesc("id")->get();

            if (count($lists) > 0) {
                return \Response::json([
                    "msg" => "ok",
                    "list" => $lists
                ]);
            } else {
                return \Response::json([
                    "msg" => "err",
                    "message" => "empty data in db"
                ]);
            }
        }

        exit();
    }

    public function deletesitemobile(Request $request)
    {
        $id = $request->post("id");
        $value = $request->post("value");
        $ret = 1;

        try {
            DB::table("sitefieldmobile")->where("id", $id)->delete();
        } catch (\Exception $e) {
            $ret = 0;
        }

        if ($ret) {
            return \Response::json([
                "msg" => "ok"
            ]);
        } else {
            return \Response::json([
                "msg" => "error: database control"
            ]);
        }

        exit();
    }

    public function getSystemSettingBasicInfo($userid)
    {
        $row = DB::table('site_basic_setting')
            ->where('userid', $userid)
            ->get()->first();
        if($row === null)
        {
            $createtime = date("Y-m-d h:i:s", time());
            $domain = $this->getHost();
            $dashboard = 'WES ADMIN DASHBOARD';
            $slogan = 'WES ADMIN DASHBOARD';
            DB::table('site_basic_setting')
                ->insertGetId(
                    [
                        'userid' => $userid,
                        'domain' => $domain,
                        'dashboard' => $dashboard,
                        'slogan' => $slogan,
                        'created_at'=>$createtime
                    ]
                );
            $row = DB::table('site_basic_setting')
                ->where('userid', $userid)
                ->get()->first();
        }
        return $row;
    }

    public function GeneralValidationCode(Request $request, $lang=null){
        $userid = $request->post("userid");

        $datetime = @date("Y-m-d H:i:s");
        $timestamp = strtotime($datetime);
        $f_str = substr($timestamp, 0, 6);
        $s_str = substr($timestamp, strlen($timestamp) - 6, 6);

        $code = intval($f_str) + intval($s_str);
        $code = intval($code) + 12281982;

        return \Response::json([
            "msg" => "ok",
            "code" => $code
        ]);
    }

}//class

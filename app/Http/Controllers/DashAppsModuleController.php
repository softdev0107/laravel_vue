<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use function Stringy\create;

class DashAppsModuleController extends BaseController
{
    /**
     * @var array|string|null
     */
    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    protected $tb_modulelanguage = "appmodulelanguage";
    protected $tb_modulelanguagelist = "appmodulelanguagelist";

    public function saveAWMLanguage(Request $request)
    {
        $langlist=$request->langlist;

        $created_at = date("Y-m-d h:i:s", time());
        $updated_at = date("Y-m-d h:i:s", time());

        if(is_array($langlist))
        {
            $rows = DB::table($this->tb_modulelanguage)
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
                            "created_at" => $created_at,
                            "updated_at" => $updated_at,
                            "status" => 'disable'
                        );
                        array_push($addlist, $item);
                    }
                }

                DB::table($this->tb_modulelanguage)
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
                        "created_at" => $created_at,
                        "updated_at" => $updated_at,
                        "status"=>'disable'
                    );
                    array_push($addlist, $item);
                }

                DB::table($this->tb_modulelanguage)
                    ->insert($addlist);
            }

            $rows = DB::table($this->tb_modulelanguage)
                ->get();
            $cnt = count($rows);
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

    public function getAWMLanguage(Request $request){
        $start  = $request->start;
        $cnt    = $request->cnt;

        $start_from = ($start-1) * $cnt;
        $rows = DB::table($this->tb_modulelanguage)
            ->select(DB::raw('id, iso, dialcode, name, status'))
            ->offset($start_from)->limit($cnt)
            ->get();
        $totalrows = DB::table($this->tb_modulelanguage)
            ->select(DB::raw('id, iso, dialcode, name, status'))
            ->get();
        $total = count($totalrows);
        $totalpage = ceil($total / $cnt);
        if($rows!==null){
            return \Response::json([
                'msg' => 'ok',
                'lists' => $rows,
                'prelists' => $totalrows,
                'pstart' => $start,
                'total' => $total,
                'totalpage' => $totalpage,
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

    public function saveAWMLanguageChanges(Request $request){
        $id=$request->id;
        $status=$request->status;

        $updated_at = date("Y-m-d h:i:s", time());
        if($status==="delete")
        {
            $row = DB::table($this->tb_modulelanguage)->where('id', $id)->get()->first();
            $countryname = $row ->name;
            $listrows = DB::table($this->tb_modulelanguagelist)->get();
            if (count($listrows) > 0) {
                foreach($listrows as $list)
                {
                    $to_update = false;
                    $languagenames = $list->languagenames;
                    $searchname = $countryname.',';
                    $searchname1 =','.$countryname;
                    $tid = $list->id;
                    if (str_contains($languagenames, $searchname)) {
                        $languagenames = str_replace($searchname, '', $languagenames) ;
                        $to_update = true;
                    }
                    if (str_contains($languagenames, $searchname1)) {
                        $languagenames = str_replace($searchname1, '', $languagenames) ;
                        $to_update = true;
                    }
                    if (str_contains($languagenames, $countryname)) {
                        $languagenames = str_replace($countryname, '', $languagenames) ;
                        $to_update = true;
                    }
                    if ($to_update) {
                        $success = DB::table($this->tb_modulelanguagelist)
                            ->where('id',$tid)
                            ->update(['languagenames' => $languagenames,
                                'updated_at' => $updated_at
                            ]);
                    }
                }
            }
            $success = DB::table($this->tb_modulelanguage)->where(
                'id', $id
            )->delete();
        }
        else
        {
            $success = DB::table($this->tb_modulelanguage)
                ->where('id',$id)
                ->update(['status' => $status,
                    'updated_at' => $updated_at
                ]);
        }

        if ($success) {
            return \Response::json([
                'msg'  =>  "ok"
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "err"
            ]);

        }
    }

    public function deleteSeveralAWMLanguages(Request $request){
        $ids = $request->post('ids');

        $updated_at = date("Y-m-d h:i:s", time());
        try {
            if(count($ids) > 0) {
                foreach ($ids as $id) {
                    $row = DB::table($this->tb_modulelanguage)->where('id', $id)->get()->first();
                    $countryname = $row ->name;
                    $listrows = DB::table($this->tb_modulelanguagelist)->get();
                    if (count($listrows) > 0) {
                        foreach($listrows as $list)
                        {
                            $to_update = false;
                            $languagenames = $list->languagenames;
                            $searchname = $countryname.',';
                            $searchname1 =','.$countryname;
                            $tid = $list->id;
                            if (str_contains($languagenames, $searchname)) {
                                $languagenames = str_replace($searchname, '', $languagenames) ;
                                $to_update = true;
                            }
                            if (str_contains($languagenames, $searchname1)) {
                                $languagenames = str_replace($searchname1, '', $languagenames) ;
                                $to_update = true;
                            }
                            if (str_contains($languagenames, $countryname)) {
                                $languagenames = str_replace($countryname, '', $languagenames) ;
                                $to_update = true;
                            }
                            if ($to_update) {
                                $success = DB::table($this->tb_modulelanguagelist)
                                    ->where('id',$tid)
                                    ->update(['languagenames' => $languagenames,
                                        'updated_at' => $updated_at
                                    ]);
                            }
                        }
                    }
                    DB::table($this->tb_modulelanguage)->whereRaw("id = ".$id)->delete();
                }
            }
            return \Response::json([
                'msg'  =>  "ok"
            ]);

        } catch (Exception $e) {
            return \Response::json([
                'msg'  =>  "err"
            ]);
        }

    }
    public function getAWMListData(Request $request){
        $start  = $request->start;
        $cnt    = $request->cnt;

        $start_from = ($start-1) * $cnt;

        $rows = DB::table($this->tb_modulelanguagelist)
            ->select(DB::raw('id, name, languagenames, style'))
            ->offset($start_from)->limit($cnt)
            ->get();

        $totalrows = DB::table($this->tb_modulelanguagelist)
            ->select(DB::raw('id, name, languagenames, style '))
            ->get();
        $total = count($totalrows);
        $totalpage = ceil($total / $cnt);
        if($rows!==null){
            return \Response::json([
                "msg" => "ok",
                "lists" => $rows,
                'pstart' => $start,
                'total' => $total,
                'totalpage' => $totalpage,
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

    public function getAWMListDataFromId(Request $request){
        $id=$request->id;

        $rows = DB::table($this->tb_modulelanguagelist)->where('id', $id)->get()->first();
        if($rows!==null){
            return \Response::json([
                "msg" => "ok",
                "list" => $rows,
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "err",
                'lists' => ''
            ]);
        }
        exit();
    }

    public function saveAWMListData(Request $request)
    {
        $name = $request->name;
        $id = $request->id;
        $style = $request->style;
        $languagenames = $request->languagenames;
        $icon_name = $request->icon_name;
        $icon_style = $request->icon_style;
        $icon_size = $request->icon_size;
        $icon_capacity = $request->icon_capacity;
        $text_color = $request->text_color;
        $text_fontsize = $request->text_fontsize;
        $text_name = $request->text_name;
        $created_at = date("Y-m-d h:i:s", time());
        $updated_at = date("Y-m-d h:i:s", time());

        if ($id == '0') {
            $cnt = DB::table($this->tb_modulelanguagelist)
                ->where('name', $name)->doesntExist();
            if($cnt){
                if ($style == '0') {
                    $sucess =  DB::table($this->tb_modulelanguagelist)
                        ->insert(
                            [
                                'name' => $name,
                                'style' => $style,
                                'languagenames' => $languagenames,
                                'icon_name' => $icon_name,
                                'icon_size' => $icon_size,
                                'icon_style' => $icon_style,
                                'icon_capacity' => $icon_capacity,
                                'created_at' => $created_at,
                                'updated_at' => $updated_at
                            ]);
                }
                if ($style == '1') {
                    $sucess =  DB::table($this->tb_modulelanguagelist)
                        ->insert(
                            [
                                'name' => $name,
                                'style' => $style,
                                'languagenames' => $languagenames,
                                'text_name' => $text_name,
                                'text_fontsize' => $text_fontsize,
                                'text_color' => $text_color,
                                'created_at' => $created_at,
                                'updated_at' => $updated_at
                            ]);
                }
                if ($style == '2') {
                    $sucess =  DB::table($this->tb_modulelanguagelist)
                        ->insert(
                            [
                                'name' => $name,
                                'style' => $style,
                                'languagenames' => $languagenames,
                                'icon_name' => $icon_name,
                                'icon_size' => $icon_size,
                                'icon_style' => $icon_style,
                                'icon_capacity' => $icon_capacity,
                                'text_name' => $text_name,
                                'text_color' => $text_color,
                                'text_fontsize' => $text_fontsize,
                                'created_at' => $created_at,
                                'updated_at' => $updated_at
                            ]);
                }
                if ($sucess) {
                    return \Response::json([
                        'msg'  =>  'ok',
                    ]);
                }
                else {
                    return \Response::json([
                        'msg'  =>  'err',
                    ]);
                }
            }
            else{
                return \Response::json([
                    'msg'  =>  'du',
                ]);
            }
        }
        else {
            if ($style == '0') {
                $sucess1 =  DB::table($this->tb_modulelanguagelist)->where('id', $id)
                    ->update(
                        [
                            'name' => $name,
                            'style' => $style,
                            'languagenames' => $languagenames,
                            'icon_name' => $icon_name,
                            'icon_size' => $icon_size,
                            'icon_style' => $icon_style,
                            'icon_capacity' => $icon_capacity,
                            'updated_at' => $updated_at
                        ]);
            }
            if ($style == '1') {
                $sucess1 =  DB::table($this->tb_modulelanguagelist)->where('id',$id)
                    ->update(
                        [
                            'name' => $name,
                            'style' => $style,
                            'languagenames' => $languagenames,
                            'text_name' => $text_name,
                            'text_fontsize' => $text_fontsize,
                            'text_color' => $text_color,
                            'updated_at' => $updated_at
                        ]);
            }
            if ($style == '2') {
                $sucess1 =  DB::table($this->tb_modulelanguagelist)->where('id', $id)
                    ->update(
                        [
                            'name' => $name,
                            'style' => $style,
                            'languagenames' => $languagenames,
                            'icon_name' => $icon_name,
                            'icon_size' => $icon_size,
                            'icon_style' => $icon_style,
                            'icon_capacity' => $icon_capacity,
                            'text_name' => $text_name,
                            'text_color' => $text_color,
                            'text_fontsize' => $text_fontsize,
                            'updated_at' => $updated_at
                        ]);
            }
            if ($sucess1) {
                return \Response::json([
                    'msg'  =>  'ok',
                ]);
            }
            else {
                return \Response::json([
                    'msg'  =>  'err',
                ]);
            }
        }

       exit();
    }

    public function deleteAWMListData(Request $request)
    {
        $id=$request->id;

        $sucess = DB::table($this->tb_modulelanguagelist)
            ->where('id', $id)->delete();

        if ($sucess) {
            return \Response::json([
                'msg'  =>  'ok',
            ]);
            exit();
        }
        else{
            return \Response::json([
                'msg'  =>  'err',
            ]);
            exit();
        }
    }

    public function deleteSeveralAWMListLanguages(Request $request){
        $ids = $request->post('ids');

        try {
            if(count($ids) > 0) {
                foreach ($ids as $id) {
                    DB::table($this->tb_modulelanguagelist)->whereRaw("id = ".$id)->delete();
                }
            }
            return \Response::json([
                'msg'  =>  "ok"
            ]);

        } catch (Exception $e) {
            return \Response::json([
                'msg'  =>  "err"
            ]);
        }
    }

    public function getAppModuleLanguageStyleList(Request $request)
    {
        $text_lists = DB::table('sitefieldtext')
            ->orderByDesc('id')->get();
        $icon_lists = DB::table('sitelogoimgstyle')
            ->orderByDesc('id')->get();

        if (count($text_lists) > 0 && count($icon_lists) > 0) {
            return \Response::json([
                'msg' => 'ok',
                'textlist' => $text_lists,
                'iconlist' => $icon_lists
            ]);
        } else {
            return \Response::json([
                'msg' => 'err',
                'message' => 'empty data in database'
            ]);
        }

        exit();
    }

}

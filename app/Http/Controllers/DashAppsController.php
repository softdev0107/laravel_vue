<?php

namespace App\Http\Controllers;

use App\Models\UserModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class DashAppsController extends BaseController
{
    /**
     * @var array|string|null
     */

    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    public function addAWAHeadCategory(Request $request)
    {
        $userid = $request->post('userid');
        $sc_id = (int)$request->post('sc_id') + 1;
        $category_name = $request->post('category_name');
        $tabstatus = $request->post('tabstatus');
        $field1 = "";
        $field2 = "";

        if($tabstatus == 0){
            $field1 = "topheadercategory";
            $field2 = "topheadercategory_id";
        }
        else if($tabstatus == 1){
            $field1 = "headheadercategory";
            $field2 = "headheadercategory_id";
        }
        else if($tabstatus == 2){
            $field1 = "subheadercategory";
            $field2 = "subheadercategory_id";
        }


        $rows = DB::table('appheadcategory')->where("userid", $userid)->get()->first();

        $lists = array();
        $info = ["scid"=>$sc_id, "scname"=>$category_name];

        if($rows == null){
            array_push($lists, $info);
            $lists = json_encode($lists);
            $res = DB::table('appheadcategory')->insertGetId(
                ['userid' => $userid, $field1 => $lists, $field2=>$sc_id]
            );
        }
        else{
            if($tabstatus == 0){
                $lists = json_decode($rows->topheadercategory);
            }
            else if($tabstatus == 1){
                $lists = json_decode($rows->headheadercategory);
            }
            else if($tabstatus == 2){
                $lists = json_decode($rows->subheadercategory);
            }

            if($lists == null || $lists == '')
                $lists = array();

            array_push($lists, $info);
            $lists = json_encode($lists);
            $res = DB::table('appheadcategory')
                ->where('userid', $userid)
                ->update([$field1 => $lists, $field2=>$sc_id]);
        }

        $rows = DB::table('appheadcategory')->where("userid", $userid)->get()->first();
        if($tabstatus == 0){
            $lists = json_decode($rows->topheadercategory);
            $sc_id = $rows->topheadercategory_id;
        }
        else if($tabstatus == 1){
            $lists = json_decode($rows->headheadercategory);
            $sc_id = $rows->headheadercategory_id;
        }
        else if($tabstatus == 2){
            $lists = json_decode($rows->subheadercategory);
            $sc_id = $rows->subheadercategory_id;
        }

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "scid" => $sc_id
        ]);

        exit();
    }
    public function getAWACategoryList(Request $request)
    {
        $userid = $request->post('userid');
        $sc_id = $request->post('sc_id');
        $tabstatus = $request->post('tabstatus');

        $rows = DB::table('appheadcategory')->where("userid", $userid)->get()->first();
        $lists = array();
        $selimg = 0;
        if($rows != null) {
            if($tabstatus == 0){
                $lists = json_decode($rows->topheadercategory);
                $sc_id = $rows->topheadercategory_id;
                $selimg = $rows->topheaderbackground;
            }
            else if($tabstatus == 1){
                $lists = json_decode($rows->headheadercategory);
                $sc_id = $rows->headheadercategory_id;
                $selimg = $rows->headheaderbackground;
            }
            else if($tabstatus == 2){
                $lists = json_decode($rows->subheadercategory);
                $sc_id = $rows->subheadercategory_id;
                $selimg = $rows->subheaderbackground;
            }
        }

        $texts = DB::table("sitefieldtext")->orderBy("id")->get();
        $images = DB::table("sitelogoimgstyle")->orderBy("id")->get();

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "scid" => $sc_id,
            "selimg" => $selimg,
            "texts" => $texts,
            "images" => $images
        ]);

        exit();
    }
    public function setAWAHeadBackground(Request $request)
    {
        $userid = $request->post('userid');
        $imgstyle_id = $request->post('imgstyle_id');
        $tabstatus = $request->post('tabstatus');
        $field = "";

        if($tabstatus == 0){
            $field = "topheaderbackground";
        }
        else if($tabstatus == 1){
            $field = "headheaderbackground";
        }
        else if($tabstatus == 2){
            $field = "subheaderbackground";
        }

        $rows = DB::table('appheadcategory')->where("userid", $userid)->get()->first();

        if($rows == null){
            $res = DB::table('appheadcategory')->insertGetId(
                ['userid' => $userid, $field=>$imgstyle_id]
            );
        }
        else{
            $res = DB::table('appheadcategory')
                ->where('userid', $userid)
                ->update([$field => $imgstyle_id]);
        }

        $rows = DB::table("sitelogoimgstyle")->where("id", $imgstyle_id)->get()->first();
        if($rows) {
            return \Response::json([
                "msg" => "ok",
                "lists" => $rows
            ]);
        }
        exit();
    }
    public function saveAWAHeadCategory(Request $request)
    {
        $sc_id = $request->post('sc_id');
        $userid = $request->post('userid');
        $sc_name = $request->post('sc_name');
        $tabstatus = $request->post('tabstatus');
        $field = "";

        if($tabstatus == 0){
            $field = "topheadercategory";
        }
        else if($tabstatus == 1){
            $field = "headheadercategory";
        }
        else if($tabstatus == 2){
            $field = "subheadercategory";
        }

        $data = array();
        $rows = DB::table('appheadcategory')->where("userid", $userid)->get()->first();
        $lists = array();
        if($tabstatus == 0){
            $lists = json_decode($rows->topheadercategory);
        }
        else if($tabstatus == 1){
            $lists = json_decode($rows->headheadercategory);
        }
        else if($tabstatus == 2){
            $lists = json_decode($rows->subheadercategory);
        }
        foreach ($lists as $list){
            $info = ["scid"=>$list->scid, "scname"=>$list->scname];
            if($list->scid == $sc_id){
                $info = ["scid"=>$sc_id, "scname"=>$sc_name];
            }
            array_push($data, $info);
        }

        $lists = json_encode($data);
        $res = DB::table('appheadcategory')
            ->where('userid', $userid)
            ->update([$field => $lists]);

        $rows = DB::table('appheadcategory')->where("userid", $userid)->get()->first();
        if($tabstatus == 0){
            $lists = json_decode($rows->topheadercategory);
            $sc_id = $rows->topheadercategory_id;
        }
        else if($tabstatus == 1){
            $lists = json_decode($rows->headheadercategory);
            $sc_id = $rows->headheadercategory_id;
        }
        else if($tabstatus == 2){
            $lists = json_decode($rows->subheadercategory);
            $sc_id = $rows->subheadercategory_id;
        }

        if($res) {
            return \Response::json([
                "msg" => "ok",
                "lists" => $lists,
                "scid" => $sc_id
            ]);
        }
        exit();
    }
    public function deleteAWAHeadCategory(Request $request)
    {
        $sc_id = $request->post('sc_id');
        $userid = $request->post('userid');
        $tabstatus = $request->post('tabstatus');
        $field = "";

        if($tabstatus == 0){
            $field = "topheadercategory";
        }
        else if($tabstatus == 1){
            $field = "headheadercategory";
        }
        else if($tabstatus == 2){
            $field = "subheadercategory";
        }
        $data = array();
        $rows = DB::table('appheadcategory')->where("userid", $userid)->get()->first();
        $lists = array();
        if($tabstatus == 0){
            $lists = json_decode($rows->topheadercategory);
        }
        else if($tabstatus == 1){
            $lists = json_decode($rows->headheadercategory);
        }
        else if($tabstatus == 2){
            $lists = json_decode($rows->subheadercategory);
        }

        foreach ($lists as $list){
            if($list->scid != $sc_id){
                $info = ["scid"=>$list->scid, "scname"=>$list->scname];
                array_push($data, $info);
            }
        }

        $lists = json_encode($data);
        $res = DB::table('appheadcategory')
            ->where('userid', $userid)
            ->update([$field => $lists]);

        $rows = DB::table('appheadcategory')->where("userid", $userid)->get()->first();
        if($tabstatus == 0){
            $lists = json_decode($rows->topheadercategory);
            $sc_id = $rows->topheadercategory_id;
        }
        else if($tabstatus == 1){
            $lists = json_decode($rows->headheadercategory);
            $sc_id = $rows->headheadercategory_id;
        }
        else if($tabstatus == 2){
            $lists = json_decode($rows->subheadercategory);
            $sc_id = $rows->subheadercategory_id;
        }

        if($res) {
            return \Response::json([
                "msg" => "ok",
                "lists" => $lists,
                "scid" => $sc_id
            ]);
        }
        exit();
    }
    private function getTopheaderCategoryList($userid, $rows){
        $crows = DB::table('appheadcategory')->where("userid", $userid)->get()->first();
        $clists = array();
        if($crows != null && $crows != "")
            $clists = json_decode($crows->topheadercategory);
        $category_list = array();
        foreach ($rows as $row){
            foreach ($clists as $clist){
                if($row->scid == $clist->scid){
                    array_push($category_list, $clist->scname);
                    continue;
                }
            }
        }
        return $category_list;
    }
    private function getTopheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $sql = "SELECT * FROM ".'apptopheadcontent'." ";
        $sql .= "WHERE userid=".$userid." ";
        if($search_id > 0 && $search_txt != null && $search_txt != ""){
            $sql .= "AND scid=".$search_id." AND name like '%".$search_txt."%' ";
        }
        if($search_id == 0 && $search_txt != null && $search_txt != ""){
            $sql .= "AND name like '%".$search_txt."%' ";
        }
        if($search_id > 0 && ($search_txt == null || $search_txt == "")){
            $sql .= "AND scid =".$search_id." ";
        }
        $sql .= "ORDER BY id ASC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::select( DB::raw($sql) );
        return $rows;
    }
    public function getAWAHeadTopheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $rows = $this->getTopheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getTopheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getTopheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function setAWAHeadTopheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        $modal_content_name = $request->post('modal_content_name');
        $modal_category_id = $request->post('modal_category_id');
        $modal_left_bar = json_encode($request->post('modal_left_bar'));
        $modal_left_bar_num = json_encode($request->post('modal_left_bar_num'));
        $modal_right_bar = json_encode($request->post('modal_right_bar'));
        $modal_right_bar_num = json_encode($request->post('modal_right_bar_num'));
        $modal_fixed_check = $request->post('modal_fixed_check');
        $modal_bgcolor_check = $request->post('modal_bgcolor_check');
        $modal_padding = $request->post('modal_padding');
        $modal_text_id = $request->post('modal_text_id');
        $modal_text_size = $request->post('modal_text_size');
        $modal_text_color = $request->post('modal_text_color');
        $modal_background_image = $request->post('modal_background_image');
        $modal_background_color = $request->post('modal_background_color');
        $modal_background_size = $request->post('modal_background_size');
        $modal_background_capacity = $request->post('modal_background_capacity');

        $res = DB::table('apptopheadcontent')
	            ->insertGetId([
		    'userid' => $userid,
                    'name'=>$modal_content_name,
                    'scid'=>$modal_category_id,
                    'leftbar'=>$modal_left_bar,
                    'leftbar_num'=>$modal_left_bar_num,
                    'rightbar'=>$modal_right_bar,
                    'rightbar_num'=>$modal_right_bar_num,
                    'fixed'=>$modal_fixed_check,
                    'padding'=>$modal_padding,
                    'text'=>$modal_text_id,
                    'text_size'=>$modal_text_size,
                    'text_color'=>$modal_text_color,
                    'bg_img'=>$modal_background_image,
                    'bg_color'=>$modal_background_color,
                    'bg_size'=>$modal_background_size,
                    'bg_capacity'=>$modal_background_capacity,
                    'bg_color_check'=>$modal_bgcolor_check]
            );

        $rows = $this->getTopheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getTopheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getTopheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function editAWAHeadTopheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $editid = $request->post('editid');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        $modal_content_name = $request->post('modal_content_name');
        $modal_category_id = $request->post('modal_category_id');
        $modal_left_bar = json_encode($request->post('modal_left_bar'));
        $modal_left_bar_num = json_encode($request->post('modal_left_bar_num'));
        $modal_right_bar = json_encode($request->post('modal_right_bar'));
        $modal_right_bar_num = json_encode($request->post('modal_right_bar_num'));
        $modal_fixed_check = $request->post('modal_fixed_check');
        $modal_bgcolor_check = $request->post('modal_bgcolor_check');
        $modal_padding = $request->post('modal_padding');
        $modal_text_id = $request->post('modal_text_id');
        $modal_text_size = $request->post('modal_text_size');
        $modal_text_color = $request->post('modal_text_color');
        $modal_background_image = $request->post('modal_background_image');
        $modal_background_color = $request->post('modal_background_color');
        //$modal_background_size = $request->post('modal_background_size';
        //$modal_background_capacity = $request->post('modal_background_capacity');

        $res = DB::table('apptopheadcontent')
            ->where('userid', $userid)
            ->where('id', $editid)
            ->update([
                    'name'=>$modal_content_name,
                    'scid'=>$modal_category_id,
                    'leftbar'=>$modal_left_bar,
                    'leftbar_num'=>$modal_left_bar_num,
                    'rightbar'=>$modal_right_bar,
                    'rightbar_num'=>$modal_right_bar_num,
                    'fixed'=>$modal_fixed_check,
                    'padding'=>$modal_padding,
                    'text'=>$modal_text_id,
                    'text_size'=>$modal_text_size,
                    'text_color'=>$modal_text_color,
                    'bg_img'=>$modal_background_image,
                    'bg_color'=>$modal_background_color,
                    'bg_color_check'=>$modal_bgcolor_check]
            );

        $rows = $this->getTopheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getTopheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getTopheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function showAWAHeadTopheaderContentItem(Request $request)
    {
        $userid = $request->post('userid');
        $id = $request->post('id');

        $rows = DB::table('apptopheadcontent')
            ->where("userid", $userid)
            ->where("id", $id)
            ->get()->first();
        if($rows == null)
            $rows = "";

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows
        ]);

        exit();
    }
    public function deleteAWAHeadTopheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $id = $request->post('id');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        DB::table('apptopheadcontent')->whereRaw("id = ".$id)->delete();

        $rows = $this->getTopheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getTopheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getTopheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function allDeleteAWATopheaderChecked(Request $request)
    {
        $userid = $request->post('userid');
        $ids = $request->post('ids');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        if(count($ids) > 0) {
            foreach ($ids as $id) {
                DB::table('apptopheadcontent')->whereRaw("id = ".$id)->delete();
            }
        }

        $rows = $this->getTopheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getTopheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getTopheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }

    private function getHeadheaderCategoryList($userid, $rows){
        $crows = DB::table('appheadcategory')->where("userid", $userid)->get()->first();
        $clists = array();
        if($crows != null && $crows != "")
            $clists = json_decode($crows->headheadercategory);
        $category_list = array();
        foreach ($rows as $row){
            foreach ($clists as $clist){
                if($row->scid == $clist->scid){
                    array_push($category_list, $clist->scname);
                    continue;
                }
            }
        }
        return $category_list;
    }
    private function getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $sql = "SELECT * FROM ".'appheadheadcontent'." ";
        $sql .= "WHERE userid=".$userid." ";
        if($search_id > 0 && $search_txt != null && $search_txt != ""){
            $sql .= "AND scid=".$search_id." AND name like '%".$search_txt."%' ";
        }
        if($search_id == 0 && $search_txt != null && $search_txt != ""){
            $sql .= "AND name like '%".$search_txt."%' ";
        }
        if($search_id > 0 && ($search_txt == null || $search_txt == "")){
            $sql .= "AND scid =".$search_id." ";
        }
        $sql .= "ORDER BY id ASC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::select( DB::raw($sql) );
        return $rows;
    }
    public function getAWAHeadHeadheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $rows = $this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getHeadheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function setAWAHeadHeadheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        $modal_content_name = $request->post('modal_content_name');
        $modal_category_id = $request->post('modal_category_id');
        $modal_left_bar = json_encode($request->post('modal_left_bar'));
        $modal_left_bar_num = json_encode($request->post('modal_left_bar_num'));
        $modal_middle_bar = json_encode($request->post('modal_middle_bar'));
        $modal_middle_bar_num = json_encode($request->post('modal_middle_bar_num'));
        $modal_right_bar = json_encode($request->post('modal_right_bar'));
        $modal_right_bar_num = json_encode($request->post('modal_right_bar_num'));
        $modal_fixed_check = $request->post('modal_fixed_check');
        $modal_bgcolor_check = $request->post('modal_bgcolor_check');
        $modal_padding = $request->post('modal_padding');
        $modal_text_id = $request->post('modal_text_id');
        $modal_text_size = $request->post('modal_text_size');
        $modal_text_color = $request->post('modal_text_color');
        $modal_background_image = $request->post('modal_background_image');
        $modal_background_color = $request->post('modal_background_color');
        $modal_left_bg = $request->post('modal_left_bg');
        $modal_left_color = $request->post('modal_left_color');
        $modal_left_check = $request->post('modal_left_check');
        $modal_middle_bg = $request->post('modal_middle_bg');
        $modal_middle_color = $request->post('modal_middle_color');
        $modal_middle_check = $request->post('modal_middle_check');
        $modal_right_bg = $request->post('modal_right_bg');
        $modal_right_color = $request->post('modal_right_color');
        $modal_right_check = $request->post('modal_right_check');
        $modal_background_size = $request->post('modal_background_size');
        $modal_background_capacity = $request->post('modal_background_capacity');
        $res = DB::table('appheadheadcontent')
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$modal_content_name,
                    'scid'=>$modal_category_id,
                    'leftbar'=>$modal_left_bar,
                    'leftbar_num'=>$modal_left_bar_num,
                    'middlebar'=>$modal_middle_bar,
                    'middlebar_num'=>$modal_middle_bar_num,
                    'rightbar'=>$modal_right_bar,
                    'rightbar_num'=>$modal_right_bar_num,
                    'fixed'=>$modal_fixed_check,
                    'padding'=>$modal_padding,
                    'text'=>$modal_text_id,
                    'text_size'=>$modal_text_size,
                    'text_color'=>$modal_text_color,
                    'bg_img'=>$modal_background_image,
                    'bg_size'=>$modal_background_size,
                    'bg_capacity'=>$modal_background_capacity,
                    'bg_color'=>$modal_background_color,
                    'bg_color_check'=>$modal_bgcolor_check,
                    'left_bg'=>$modal_left_bg,
                    'left_color'=>$modal_left_color,
                    'left_check'=>$modal_left_check,
                    'middle_bg'=>$modal_middle_bg,
                    'middle_color'=>$modal_middle_color,
                    'middle_check'=>$modal_middle_check,
                    'right_bg'=>$modal_right_bg,
                    'right_color'=>$modal_right_color,
                    'right_check'=>$modal_right_check]
            );

        $rows = $this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getHeadheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function editAWAHeadHeadheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $editid = $request->post('editid');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        $modal_content_name = $request->post('modal_content_name');
        $modal_category_id = $request->post('modal_category_id');
        $modal_left_bar = json_encode($request->post('modal_left_bar'));
        $modal_left_bar_num = json_encode($request->post('modal_left_bar_num'));
        $modal_middle_bar = json_encode($request->post('modal_middle_bar'));
        $modal_middle_bar_num = json_encode($request->post('modal_middle_bar_num'));
        $modal_right_bar = json_encode($request->post('modal_right_bar'));
        $modal_right_bar_num = json_encode($request->post('modal_right_bar_num'));
        $modal_fixed_check = $request->post('modal_fixed_check');
        $modal_bgcolor_check = $request->post('modal_bgcolor_check');
        $modal_padding = $request->post('modal_padding');
        $modal_text_id = $request->post('modal_text_id');
        $modal_text_size = $request->post('modal_text_size');
        $modal_text_color = $request->post('modal_text_color');
        $modal_background_image = $request->post('modal_background_image');
        $modal_background_color = $request->post('modal_background_color');
        $modal_left_bg = $request->post('modal_left_bg');
        $modal_left_color = $request->post('modal_left_color');
        $modal_left_check = $request->post('modal_left_check');
        $modal_middle_bg = $request->post('modal_middle_bg');
        $modal_middle_color = $request->post('modal_middle_color');
        $modal_middle_check = $request->post('modal_middle_check');
        $modal_right_bg = $request->post('modal_right_bg');
        $modal_right_color = $request->post('modal_right_color');
        $modal_right_check = $request->post('modal_right_check');
        $modal_background_size = $request->post('modal_background_size');
        $modal_background_capacity = $request->post('modal_background_capacity');

        $res = DB::table('appheadheadcontent')
            ->where('userid', $userid)
            ->where('id', $editid)
            ->update([
                    'name'=>$modal_content_name,
                    'scid'=>$modal_category_id,
                    'leftbar'=>$modal_left_bar,
                    'leftbar_num'=>$modal_left_bar_num,
                    'middlebar'=>$modal_middle_bar,
                    'middlebar_num'=>$modal_middle_bar_num,
                    'rightbar'=>$modal_right_bar,
                    'rightbar_num'=>$modal_right_bar_num,
                    'fixed'=>$modal_fixed_check,
                    'padding'=>$modal_padding,
                    'text'=>$modal_text_id,
                    'text_size'=>$modal_text_size,
                    'text_color'=>$modal_text_color,
                    'bg_img'=>$modal_background_image,
                    'bg_size'=>$modal_background_size,
                    'bg_capacity'=>$modal_background_capacity,
                    'bg_color'=>$modal_background_color,
                    'bg_color_check'=>$modal_bgcolor_check,
                    'left_bg'=>$modal_left_bg,
                    'left_color'=>$modal_left_color,
                    'left_check'=>$modal_left_check,
                    'middle_bg'=>$modal_middle_bg,
                    'middle_color'=>$modal_middle_color,
                    'middle_check'=>$modal_middle_check,
                    'right_bg'=>$modal_right_bg,
                    'right_color'=>$modal_right_color,
                    'right_check'=>$modal_right_check]
            );

        $rows = $this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getHeadheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function showAWAHeadHeadheaderContentItem(Request $request)
    {
        $userid = $request->post('userid');
        $id = $request->post('id');

        $rows = DB::table('appheadheadcontent')
            ->where("userid", $userid)
            ->where("id", $id)
            ->get()->first();
        if($rows == null)
            $rows = "";

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows
        ]);

        exit();
    }
    public function deleteAWAHeadHeadheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $id = $request->post('id');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        DB::table('appheadheadcontent')->whereRaw("id = ".$id)->delete();

        $rows = $this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getHeadheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function allDeleteAWAHeadheaderChecked(Request $request)
    {
        $userid = $request->post('userid');
        $ids = $request->post('ids');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        if(count($ids) > 0) {
            foreach ($ids as $id) {
                DB::table('appheadheadcontent')->whereRaw("id = ".$id)->delete();
            }
        }

        $rows = $this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getHeadheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }

    private function getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $sql = "SELECT * FROM appsubheadcontent ";
        $sql .= "WHERE userid=".$userid." ";
        if($search_id > 0 && $search_txt != null && $search_txt != ""){
            $sql .= "AND scid=".$search_id." AND name like '%".$search_txt."%' ";
        }
        if($search_id == 0 && $search_txt != null && $search_txt != ""){
            $sql .= "AND name like '%".$search_txt."%' ";
        }
        if($search_id > 0 && ($search_txt == null || $search_txt == "")){
            $sql .= "AND scid =".$search_id." ";
        }
        $sql .= "ORDER BY id ASC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::select( DB::raw($sql) );
        return $rows;
    }
    private function getSubheaderCategoryList($userid, $rows){
        $crows = DB::table('appheadcategory')->where("userid", $userid)->get()->first();
        $clists = array();
        if($crows != null && $crows != "")
            $clists = json_decode($crows->subheadercategory);
        $category_list = array();
        foreach ($rows as $row){
            foreach ($clists as $clist){
                if($row->scid == $clist->scid){
                    array_push($category_list, $clist->scname);
                    continue;
                }
            }
        }
        return $category_list;
    }
    public function getAWAHeadSubheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $rows = $this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getSubheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function setAWAHeadSubheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        $modal_content_name = $request->post('modal_content_name');
        $modal_category_id = $request->post('modal_category_id');
        $modal_style = $request->post('modal_style');
        $modal_breadcrumbs_hide_check = $request->post('modal_breadcrumbs_hide_check');
        $modal_title_hide_check = $request->post('modal_title_hide_check');
        $hide_check = $modal_breadcrumbs_hide_check.":".$modal_title_hide_check;
        $modal_fixed_check = $request->post('modal_fixed_check');
        $modal_bgcolor_check = $request->post('modal_bgcolor_check');
        $modal_padding = $request->post('modal_padding');
        $modal_pagetitle_id = $request->post('modal_pagetitle_id');
        $modal_pagetitle_size = $request->post('modal_pagetitle_size');
        $modal_pagetitle_color = $request->post('modal_pagetitle_color');
        $modal_breadcrumbs_id = $request->post('modal_breadcrumbs_id');
        $modal_breadcrumbs_size = $request->post('modal_breadcrumbs_size');
        $modal_breadcrumbs_color = $request->post('modal_breadcrumbs_color');
        $modal_background_image = $request->post('modal_background_image');
        $modal_background_color = $request->post('modal_background_color');
        $modal_background_size = $request->post('modal_background_size');
        $modal_background_capacity = $request->post('modal_background_capacity');

        $res = DB::table('appsubheadcontent')
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$modal_content_name,
                    'scid'=>$modal_category_id,
                    'style'=>$modal_style,
                    'hide'=>$hide_check,
                    'fixed'=>$modal_fixed_check,
                    'padding'=>$modal_padding,
                    'pagetitle'=>$modal_pagetitle_id,
                    'pagetitle_size'=>$modal_pagetitle_size,
                    'pagetitle_color'=>$modal_pagetitle_color,
                    'breadcrumbs'=>$modal_breadcrumbs_id,
                    'breadcrumbs_size'=>$modal_breadcrumbs_size,
                    'breadcrumbs_color'=>$modal_breadcrumbs_color,
                    'bg_img'=>$modal_background_image,
                    'bg_color'=>$modal_background_color,
                    'bg_size'=>$modal_background_size,
                    'bg_capacity'=>$modal_background_capacity,
                    'bg_color_check'=>$modal_bgcolor_check]
        );


        $rows = $this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getSubheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }

    public function editAWAHeadSubheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $editid = $request->post('editid');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        $modal_content_name = $request->post('modal_content_name');
        $modal_category_id = $request->post('modal_category_id');
        $modal_style = $request->post('modal_style');
        $modal_breadcrumbs_hide_check = $request->post('modal_breadcrumbs_hide_check');
        $modal_title_hide_check = $request->post('modal_title_hide_check');
        $hide_check = $modal_breadcrumbs_hide_check.":".$modal_title_hide_check;
        $modal_fixed_check = $request->post('modal_fixed_check');
        $modal_bgcolor_check = $request->post('modal_bgcolor_check');
        $modal_padding = $request->post('modal_padding');
        $modal_pagetitle_id = $request->post('modal_pagetitle_id');
        $modal_pagetitle_size = $request->post('modal_pagetitle_size');
        $modal_pagetitle_color = $request->post('modal_pagetitle_color');
        $modal_breadcrumbs_id = $request->post('modal_breadcrumbs_id');
        $modal_breadcrumbs_size = $request->post('modal_breadcrumbs_size');
        $modal_breadcrumbs_color = $request->post('modal_breadcrumbs_color');
        $modal_background_image = $request->post('modal_background_image');
        $modal_background_color = $request->post('modal_background_color');
        $modal_background_size = $request->post('modal_background_size');
        $modal_background_capacity = $request->post('modal_background_capacity');

        $res = DB::table('appsubheadcontent')
            ->where('userid', $userid)
            ->where('id', $editid)
            ->update([
                    'name'=>$modal_content_name,
                    'scid'=>$modal_category_id,
                    'style'=>$modal_style,
                    'hide'=>$hide_check,
                    'fixed'=>$modal_fixed_check,
                    'padding'=>$modal_padding,
                    'pagetitle'=>$modal_pagetitle_id,
                    'pagetitle_size'=>$modal_pagetitle_size,
                    'pagetitle_color'=>$modal_pagetitle_color,
                    'breadcrumbs'=>$modal_breadcrumbs_id,
                    'breadcrumbs_size'=>$modal_breadcrumbs_size,
                    'breadcrumbs_color'=>$modal_breadcrumbs_color,
                    'bg_img'=>$modal_background_image,
                    'bg_color'=>$modal_background_color,
                    'bg_size'=>$modal_background_size,
                    'bg_capacity'=>$modal_background_capacity,
                    'bg_color_check'=>$modal_bgcolor_check]
            );


        $rows = $this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getSubheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }

    public function showAWAHeadSubheaderContentItem(Request $request)
    {
        $userid = $request->post('userid');
        $id = $request->post('id');

        $rows = DB::table('appsubheadcontent')
            ->where("userid", $userid)
            ->where("id", $id)
            ->get()->first();
        if($rows == null)
            $rows = "";

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows
        ]);

        exit();
    }

    public function deleteAWAHeadSubheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $id = $request->post('id');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        DB::table('appsubheadcontent')->whereRaw("id = ".$id)->delete();

        $rows = $this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getSubheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }

    public function allDeleteAWASubheaderChecked(Request $request)
    {
        $userid = $request->post('userid');
        $ids = $request->post('ids');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        if(count($ids) > 0) {
            foreach ($ids as $id) {
                DB::table('appsubheadcontent')->whereRaw("id = ".$id)->delete();
            }
        }

        $rows = $this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getSubheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }

    private function getBoxedList($userid, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $sql = "SELECT * FROM ".'appboxed'." ";
        $sql .= "WHERE userid=".$userid." ";
        $sql .= "ORDER BY id ASC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::select( DB::raw($sql) );
        return $rows;
    }
    public function addAWAThemeBoxedList(Request $request)
    {
        $userid = $request->post('userid');
        $name = $request->post('name');
        $padding = $request->post('padding');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('appboxed')
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$name,
                    'padding'=>$padding]
            );

        $lists = $this->getBoxedList($userid, $pstart, $pcnt, 0);
        $total = count($this->getBoxedList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function getAWAThemeBoxedList(Request $request)
    {
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $lists = $this->getBoxedList($userid, $pstart, $pcnt, 0);
        $total = count($this->getBoxedList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function editAWAThemeBoxedList(Request $request)
    {
        $userid = $request->post('userid');
        $editid = $request->post('editid');
        $name = $request->post('name');
        $padding = $request->post('padding');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('appboxed')
            ->where('userid', $userid)
            ->where('id', $editid)
            ->update([
                    'name'=>$name,
                    'padding'=>$padding]
            );

        $lists = $this->getBoxedList($userid, $pstart, $pcnt, 0);
        $total = count($this->getBoxedList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function deleteAWAThemeBoxedList(Request $request)
    {
        $userid = $request->post('userid');
        $deleteid = $request->post('deleteid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('appboxed')
            ->where('userid', $userid)
            ->where('id', $deleteid)
            ->delete();

        $lists = $this->getBoxedList($userid, $pstart, $pcnt, 0);
        $total = count($this->getBoxedList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function allDeleteAWAThemeBoxed(Request $request)
    {
        $userid = $request->post('userid');
        $ids = $request->post('ids');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        foreach ($ids as $id) {
            $res = DB::table('appboxed')
                ->where('userid', $userid)
                ->where('id', $id)
                ->delete();
        }
        $lists = $this->getBoxedList($userid, $pstart, $pcnt, 0);
        $total = count($this->getBoxedList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }

    private function getImageSliderList($userid, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $sql = "SELECT * FROM appimageslider ";
        $sql .= "WHERE userid=".$userid." ";
        $sql .= "ORDER BY id ASC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::select( DB::raw($sql) );
        return $rows;
    }
    public function getAWTSliderImageList(Request $request)
    {
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $lists = $this->getImageSliderList($userid, $pstart, $pcnt, 0);
        $total = count($this->getImageSliderList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $images = DB::table("sitelogoimgstyle")->orderBy("id")->get();

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'images' => $images
        ]);

        exit();
    }

    public function addAWTSliderImageList(Request $request)
    {
        $userid = $request->post('userid');
        $name = $request->post('name');
        $size = $request->post('size');
        $imgid = $request->post('imgid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('appimageslider')
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$name,
                    'size'=>$size,
                    'imgid'=>$imgid]
            );

        $lists = $this->getImageSliderList($userid, $pstart, $pcnt, 0);
        $total = count($this->getImageSliderList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function editAWTSliderImageList(Request $request)
    {
        $userid = $request->post('userid');
        $editid = $request->post('editid');
        $name = $request->post('name');
        $size = $request->post('size');
        $imgid = $request->post('imgid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('appimageslider')
            ->where('userid', $userid)
            ->where('id', $editid)
            ->update([
                    'name'=>$name,
                    'size'=>$size,
                    'imgid'=>$imgid]
            );

        $lists = $this->getImageSliderList($userid, $pstart, $pcnt, 0);
        $total = count($this->getImageSliderList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function deleteAWTSliderImageList(Request $request)
    {
        $userid = $request->post('userid');
        $editid = $request->post('editid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('appimageslider')
            ->where('userid', $userid)
            ->where('id', $editid)
            ->delete();

        $lists = $this->getImageSliderList($userid, $pstart, $pcnt, 0);
        $total = count($this->getImageSliderList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function allDeleteAWAToolsSliderImage(Request $request)
    {
        $userid = $request->post('userid');
        $ids = $request->post('ids');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        foreach ($ids as $id){
            $res = DB::table('appimageslider')
                ->where('userid', $userid)
                ->where('id', $id)
                ->delete();
        }

        $lists = $this->getImageSliderList($userid, $pstart, $pcnt, 0);
        $total = count($this->getImageSliderList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }

    /*start Category part*/
    private function getAWCSettingCategory($userid, $pstart, $pcnt, $all){
    $pfrom = (intval($pstart) - 1) * $pcnt;

    $sql = "SELECT id as fid, userid, name as fname, c_id as cid,";
    $sql .= "(SELECT name FROM apps_course_setting_category WHERE id=cid) AS cname ";
    $sql .= "FROM apps_course_setting_category ";
    $sql .= "WHERE userid=".$userid." ";
    $sql .= "ORDER BY id ASC ";
    if($all == 0)
        $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

    $rows = DB::select( DB::raw($sql) );
    return $rows;
}
    public function getAWCSCategoryList(Request $request)
    {
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $lists = $this->getAWCSettingCategory($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingCategory($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function addAWCSCategoryList(Request $request)
    {
        $userid = $request->post('userid');
        $name = $request->post('name');
        $c_id = $request->post('c_id');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_category')
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$name,
                    'c_id'=>$c_id]
            );

        $lists = $this->getAWCSettingCategory($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingCategory($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function editAWCSCategoryList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $name = $request->post('name');
        $c_id = $request->post('c_id');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_category')
            ->where('userid', $userid)
            ->where('id', $editid)
            ->update([
                    'name'=>$name,
                    'c_id'=>$c_id]
            );

        $lists = $this->getAWCSettingCategory($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingCategory($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function deleteAWCSCategoryList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_category')
            ->where('userid', $userid)
            ->where('id', $editid)
            ->delete();

        $lists = $this->getAWCSettingCategory($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingCategory($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function allDeleteAWCSCategoryList(Request $request)
    {
        $ids = $request->post('ids');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        foreach ($ids as $id) {
            $res = DB::table('apps_course_setting_category')
                ->where('userid', $userid)
                ->where('id', $id)
                ->delete();
        }

        $lists = $this->getAWCSettingCategory($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingCategory($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    /*end Category part*/

    /*start classsize part */
    private function getAWCSettingClassSize($userid, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;
        $sql = "SELECT id, userid, name, min, max ";
        $sql .= "FROM apps_course_setting_classsize ";
        // $sql .= "WHERE userid=".$userid." ";
        $sql .= "ORDER BY id DESC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::select( DB::raw($sql) );
        return $rows;
    }
    public function addAWCSClassSizeList(Request $request)
    {
        $userid = $request->post('userid');
        $name = $request->post('name');
        $min = $request->post('min');
        $max = $request->post('max');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $id = DB::table('apps_course_setting_classsize')
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$name,
                    'min'=>$min,
                    'max'=>$max
                ]
            );

        $lists = $this->getAWCSettingClassSize($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingClassSize($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);
        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function getAWCSClassSizeList(Request $request)
    {
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $lists = $this->getAWCSettingClassSize($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingClassSize($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function editAWCSClassSizeList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $name = $request->post('name');
        $min = $request->post('min');
        $max = $request->post('max');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_classsize')
            ->where('id', $editid)
            ->update(
                [
                    'name'=>$name,
                    'min'=>$min,
                    'max'=>$max
                ]
            );

        $lists = $this->getAWCSettingClassSize($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingClassSize($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function deleteAWCSClassSizeList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_classsize')
            ->where('id', $editid)
            ->delete();

        $lists = $this->getAWCSettingClassSize($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingClassSize($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function allDeleteAWCSClassSizeList(Request $request)
    {
        $ids = $request->post('ids');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        foreach ($ids as $id) {
            $res = DB::table('apps_course_setting_classsize')
                //->where('userid', $userid)
                ->where('id', $id)
                ->delete();
        }

        $lists = $this->getAWCSettingClassSize($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingClassSize($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    /* end classsize part */

    /*start language part */
    private function getAWCSettingLanguage($userid, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;
        $sql = "SELECT id, userid, name, describes ";
        $sql .= "FROM apps_course_setting_language ";
        // $sql .= "WHERE userid=".$userid." ";
        $sql .= "ORDER BY id DESC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::select( DB::raw($sql) );
        return $rows;
    }
    public function addAWCSLanguageList(Request $request)
    {
        $userid = $request->post('userid');
        $name = $request->post('name');
        $describe = $request->post('describe');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $id = DB::table('apps_course_setting_language')
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$name,
                    'describes'=>$describe
                ]
            );

        $lists = $this->getAWCSettingLanguage($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingLanguage($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);
        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function getAWCSLanguageList(Request $request)
    {
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $lists = $this->getAWCSettingLanguage($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingLanguage($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function editAWCSLanguageList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $name = $request->post('name');
        $describe = $request->post('describe');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_language')
            ->where('id', $editid)
            ->update(
                [
                    'name'=>$name,
                    'describes'=>$describe
                ]
            );

        $lists = $this->getAWCSettingLanguage($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingLanguage($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function deleteAWCSLanguageList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_language')
            ->where('id', $editid)
            ->delete();

        $lists = $this->getAWCSettingLanguage($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingLanguage($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function allDeleteAWCSLanguageList(Request $request)
    {
        $ids = $request->post('ids');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        foreach ($ids as $id) {
            $res = DB::table('apps_course_setting_language')
                //->where('userid', $userid)
                ->where('id', $id)
                ->delete();
        }

        $lists = $this->getAWCSettingLanguage($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingLanguage($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    /* end language part */

    /*start CourseForm part */
    private function getAWCSettingCourseForm($userid, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;
        $sql = "SELECT id, userid, name, describes ";
        $sql .= "FROM apps_course_setting_courseform ";
        // $sql .= "WHERE userid=".$userid." ";
        $sql .= "ORDER BY id DESC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::select( DB::raw($sql) );
        return $rows;
    }
    public function addAWCSCourseFormList(Request $request)
    {
        $userid = $request->post('userid');
        $name = $request->post('name');
        $describe = $request->post('describe');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $id = DB::table('apps_course_setting_courseform')
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$name,
                    'describes'=>$describe
                ]
            );

        $lists = $this->getAWCSettingCourseForm($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingCourseForm($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);
        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function getAWCSCourseFormList(Request $request)
    {
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $lists = $this->getAWCSettingCourseForm($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingCourseForm($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function editAWCSCourseFormList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $name = $request->post('name');
        $describe = $request->post('describe');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_courseform')
            ->where('id', $editid)
            ->update(
                [
                    'name'=>$name,
                    'describes'=>$describe
                ]
            );

        $lists = $this->getAWCSettingCourseForm($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingCourseForm($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function deleteAWCSCourseFormList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_courseform')
            ->where('id', $editid)
            ->delete();

        $lists = $this->getAWCSettingCourseForm($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingCourseForm($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function allDeleteAWCSCourseFormList(Request $request)
    {
        $ids = $request->post('ids');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        foreach ($ids as $id) {
            $res = DB::table('apps_course_setting_courseform')
                //->where('userid', $userid)
                ->where('id', $id)
                ->delete();
        }

        $lists = $this->getAWCSettingCourseForm($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingCourseForm($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    /* end CourseForm part */

    /*start CourseCombination part */
    private function getAWCSettingCombination($userid, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;
        $sql = "SELECT id, userid, name, describes ";
        $sql .= "FROM apps_course_setting_coursecombination ";
        // $sql .= "WHERE userid=".$userid." ";
        $sql .= "ORDER BY id DESC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::select( DB::raw($sql) );
        return $rows;
    }
    public function addAWCSCombinationList(Request $request)
    {
        $userid = $request->post('userid');
        $name = $request->post('name');
        $describe = $request->post('describe');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $id = DB::table('apps_course_setting_coursecombination')
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$name,
                    'describes'=>$describe
                ]
            );

        $lists = $this->getAWCSettingCombination($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingCombination($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);
        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function getAWCSCombinationList(Request $request)
    {
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $lists = $this->getAWCSettingCombination($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingCombination($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function editAWCSCombinationList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $name = $request->post('name');
        $describe = $request->post('describe');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_coursecombination')
            ->where('id', $editid)
            ->update(
                [
                    'name'=>$name,
                    'describes'=>$describe
                ]
            );

        $lists = $this->getAWCSettingCombination($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingCombination($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function deleteAWCSCombinationList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_coursecombination')
            ->where('id', $editid)
            ->delete();

        $lists = $this->getAWCSettingCombination($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingCombination($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function allDeleteAWCSCombinationList(Request $request)
    {
        $ids = $request->post('ids');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        foreach ($ids as $id) {
            $res = DB::table('apps_course_setting_coursecombination')
                //->where('userid', $userid)
                ->where('id', $id)
                ->delete();
        }

        $lists = $this->getAWCSettingCombination($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingCombination($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    /* end coursecombination part */

    /*start age part*/
    private function getAWCSettingAge($userid, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;
        $sql = "SELECT id, userid, name, min, max ";
        $sql .= "FROM apps_course_setting_age ";
        // $sql .= "WHERE userid=".$userid." ";
        $sql .= "ORDER BY id DESC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::select( DB::raw($sql) );
        return $rows;
    }
    public function addAWCSAgeList(Request $request)
    {
        $userid = $request->post('userid');
        $name = $request->post('name');
        $min = $request->post('min');
        $max = $request->post('max');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $id = DB::table('apps_course_setting_age')
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$name,
                    'min'=>$min,
                    'max'=>$max
                ]
            );

        $lists = $this->getAWCSettingAge($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingAge($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);
        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function getAWCSAgeList(Request $request)
    {
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $lists = $this->getAWCSettingAge($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingAge($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function editAWCSAgeList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $name = $request->post('name');
        $min = $request->post('min');
        $max = $request->post('max');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_age')
            ->where('id', $editid)
            ->update(
                [
                    'name'=>$name,
                    'min'=>$min,
                    'max'=>$max
                ]
            );

        $lists = $this->getAWCSettingAge($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingAge($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function deleteAWCSAgeList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_age')
            ->where('id', $editid)
            ->delete();

        $lists = $this->getAWCSettingAge($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingAge($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function allDeleteAWCSAgeList(Request $request)
    {
        $ids = $request->post('ids');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        foreach ($ids as $id) {
            $res = DB::table('apps_course_setting_age')
                //->where('userid', $userid)
                ->where('id', $id)
                ->delete();
        }

        $lists = $this->getAWCSettingAge($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingAge($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    /*end age part*/

    /*start limits part */
    private function getAWCSettingLimits($userid, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;
        $sql = "SELECT id, userid, name, describes ";
        $sql .= "FROM apps_course_setting_limits ";
        // $sql .= "WHERE userid=".$userid." ";
        $sql .= "ORDER BY id DESC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::select( DB::raw($sql) );
        return $rows;
    }
    public function addAWCSLimitsList(Request $request)
    {
        $userid = $request->post('userid');
        $name = $request->post('name');
        $describe = $request->post('describe');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $id = DB::table('apps_course_setting_limits')
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$name,
                    'describes'=>$describe
                ]
            );

        $lists = $this->getAWCSettingLimits($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingLimits($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);
        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function getAWCSLimitsList(Request $request)
    {
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $lists = $this->getAWCSettingLimits($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingLimits($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function editAWCSLimitsList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $name = $request->post('name');
        $describe = $request->post('describe');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_limits')
            ->where('id', $editid)
            ->update(
                [
                    'name'=>$name,
                    'describes'=>$describe
                ]
            );

        $lists = $this->getAWCSettingLimits($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingLimits($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function deleteAWCSLimitsList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_limits')
            ->where('id', $editid)
            ->delete();

        $lists = $this->getAWCSettingLimits($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingLimits($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function allDeleteAWCSLimitsList(Request $request)
    {
        $ids = $request->post('ids');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        foreach ($ids as $id) {
            $res = DB::table('apps_course_setting_limits')
                //->where('userid', $userid)
                ->where('id', $id)
                ->delete();
        }

        $lists = $this->getAWCSettingLimits($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingLimits($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    /* end limits part */

    /*start Length part */
    private function getAWCSettingLength($userid, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;
        $sql = "SELECT id, userid, name, describes ";
        $sql .= "FROM apps_course_setting_length ";
        // $sql .= "WHERE userid=".$userid." ";
        $sql .= "ORDER BY id DESC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::select( DB::raw($sql) );
        return $rows;
    }
    public function addAWCSLengthList(Request $request)
    {
        $userid = $request->post('userid');
        $name = $request->post('name');
        $describe = $request->post('describe');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $id = DB::table('apps_course_setting_length')
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$name,
                    'describes'=>$describe
                ]
            );

        $lists = $this->getAWCSettingLength($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingLength($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);
        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function getAWCSLengthList(Request $request)
    {
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $lists = $this->getAWCSettingLength($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingLength($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function editAWCSLengthList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $name = $request->post('name');
        $describe = $request->post('describe');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_length')
            ->where('id', $editid)
            ->update(
                [
                    'name'=>$name,
                    'describes'=>$describe
                ]
            );

        $lists = $this->getAWCSettingLength($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingLength($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function deleteAWCSLengthList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_length')
            ->where('id', $editid)
            ->delete();

        $lists = $this->getAWCSettingLength($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingLength($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function allDeleteAWCSLengthList(Request $request)
    {
        $ids = $request->post('ids');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        foreach ($ids as $id) {
            $res = DB::table('apps_course_setting_length')
                //->where('userid', $userid)
                ->where('id', $id)
                ->delete();
        }
        $lists = $this->getAWCSettingLength($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingLength($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);
        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);
        exit();
    }
    /* end Length part */

    /*start Region part */
    private function getAWCSettingRegion($userid, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;
        $sql = "SELECT id, userid, name, describes ";
        $sql .= "FROM apps_course_setting_region ";
        // $sql .= "WHERE userid=".$userid." ";
        $sql .= "ORDER BY id DESC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::select( DB::raw($sql) );
        return $rows;
    }
    public function addAWCSRegionList(Request $request)
    {
        $userid = $request->post('userid');
        $name = $request->post('name');
        $describe = $request->post('describe');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $id = DB::table('apps_course_setting_region')
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$name,
                    'describes'=>$describe
                ]
            );

        $lists = $this->getAWCSettingRegion($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingRegion($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);
        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function getAWCSRegionList(Request $request)
    {
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $lists = $this->getAWCSettingRegion($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingRegion($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function editAWCSRegionList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $name = $request->post('name');
        $describe = $request->post('describe');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_region')
            ->where('id', $editid)
            ->update(
                [
                    'name'=>$name,
                    'describes'=>$describe
                ]
            );

        $lists = $this->getAWCSettingRegion($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingRegion($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function deleteAWCSRegionList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_region')
            ->where('id', $editid)
            ->delete();

        $lists = $this->getAWCSettingRegion($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingRegion($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function allDeleteAWCSRegionList(Request $request)
    {
        $ids = $request->post('ids');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        foreach ($ids as $id) {
            $res = DB::table('apps_course_setting_region')
                //->where('userid', $userid)
                ->where('id', $id)
                ->delete();
        }
        $lists = $this->getAWCSettingRegion($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingRegion($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);
        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);
        exit();
    }
    /* end Region part */

    /*start Region part */
    private function getAWCSettingStudentLevel($userid, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;
        $sql = "SELECT id, userid, name, describes ";
        $sql .= "FROM apps_course_setting_studentlevel ";
        // $sql .= "WHERE userid=".$userid." ";
        $sql .= "ORDER BY id DESC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::select( DB::raw($sql) );
        return $rows;
    }
    public function addAWCSStudentLevelList(Request $request)
    {
        $userid = $request->post('userid');
        $name = $request->post('name');
        $describe = $request->post('describe');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $id = DB::table('apps_course_setting_studentlevel')
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$name,
                    'describes'=>$describe
                ]
            );

        $lists = $this->getAWCSettingStudentLevel($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingStudentLevel($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);
        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function getAWCSStudentLevelList(Request $request)
    {
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $lists = $this->getAWCSettingStudentLevel($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingStudentLevel($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function editAWCSStudentLevelList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $name = $request->post('name');
        $describe = $request->post('describe');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_studentlevel')
            ->where('id', $editid)
            ->update(
                [
                    'name'=>$name,
                    'describes'=>$describe
                ]
            );

        $lists = $this->getAWCSettingStudentLevel($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingStudentLevel($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function deleteAWCSStudentLevelList(Request $request)
    {
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::table('apps_course_setting_studentlevel')
            ->where('id', $editid)
            ->delete();

        $lists = $this->getAWCSettingStudentLevel($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingStudentLevel($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function allDeleteAWCSStudentLevelList(Request $request)
    {
        $ids = $request->post('ids');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        foreach ($ids as $id) {
            $res = DB::table('apps_course_setting_studentlevel')
                //->where('userid', $userid)
                ->where('id', $id)
                ->delete();
        }
        $lists = $this->getAWCSettingStudentLevel($userid, $pstart, $pcnt, 0);
        $totallist = $this->getAWCSettingStudentLevel($userid, $pstart, $pcnt, 1);
        $total = count($totallist);
        $totalpage = ceil($total / $pcnt);
        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "totallist" => $totallist,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);
        exit();
    }
    /* end Region part */
}

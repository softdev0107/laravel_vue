<template>
    <div style="width:100%;">
        <div style="display: none">{{contentchange}}</div>
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 m-b-10 text-right">
                    <div>
                        <div class="btn btn-outline-light dash-my-btn-0 active p-l-r-30" @click.stop="addAWC_SettingStudentLevel_Btn">
                            <span> {{cbtntxt_add}} </span>
                        </div>
                    </div>
                </div>
            </div>

            <!--language start-->
            <div class="col-md-12 page_roles_content_list active" id="studentlevel">
                <div class="card">
                    <div class="col-md-4" style="margin:20px 0px 0px 20px">
                        <h6 class="card-title m-b-20">{{cpgtxt_list}}</h6>
                    </div>
                    <div>
                        <div class="table-responsive">
                            <table id="sum-department-list" class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                                <thead>
                                <tr role="row">
                                    <th style="width:40px!important"></th>
                                    <th>{{cpgtxt_name}}</th>
                                    <th>{{cpgtxt_describe}}</th>
                                    <th style="text-align:right; padding-right: 40px;">
                                        <div class="awcs_studentlevel_all_delete" style="cursor: pointer;color: #1e598d;">{{cpgtxt_delete}}</div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody id="awcs_studentlevel_tbody">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!--category end-->
        </div>
        <div class="row" >
            <div class="col-md-12" id="ssmu_page_nav">

            </div>
        </div>
        <!--age Modal start-->
        <div class="modal fade" id="ModalAWCSettingDescribe">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="ModalAWCSettingTitle">{{cbtntxt_add}} {{cpgtxt_student}} {{cpgtxt_level}}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="ModalAWCSettingbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                        <div class="panel" id="tab4">
                            <form id="ssfe-email-frm">
                                <div class="row" style="padding-bottom: 20px;">
                                    <div class="col-md-12" style="margin-top: 20px;">
                                        <div class="d-flex flex-wrap">
                                            <div class="col-md-4">
                                                <label style="margin-top: 8px; color:#666;">{{cpgtxt_name}}</label>
                                            </div>
                                            <div class="col-md-8">
                                                <input type="text" class="form-control" id="AWCSettingName_Input_item" name="AWCSettingName_Input_item">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-12" style="margin-top: 20px;">
                                        <div class="d-flex flex-wrap">
                                            <div class="col-md-4">
                                                <label style="margin-top: 8px; color:#666;">{{cpgtxt_describe}}</label>
                                            </div>
                                            <div class="col-md-8">
                                                <input type="text" class="form-control" id="AWCSettingDescribe_Input_item" name="AWCSettingDescribe_Input_item">
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-md-12 text-center">
                                        <div id="ssfe-studentlevel-model-add" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addStudentLevelModalBtn">
                                            <span>+ {{cbtntxt_add}}</span>
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" id="ssfe-id" value=""/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--category Modal end-->
    </div>
</template>
<script>
    import myjs from "../../assets/jsfunc/mjs_module";
    import axios from "axios";
    import nav_module from "../../assets/jsfunc/nav_module";

    var vueOBJ;
    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var btntxt_edit = "";
    var btntxt_change = "";
    var btntxt_delete = "";
    var pgtxt_department = "";
    var pgtxt_position = "";
    var pgtxt_superior = "";
    var pgtxt_name = "";
    var btntxt_add = "";
    var pgtxt_wantdeleteitem = "";

    var pstart = 1;
    var pnum = pstart;
    var pcnt=5;
    var numg = 5;
    var is_edit = false;
    var edit_id = 0;
    var checked_del_items = new Array();
    var pgperm={};

    function pageNavigation(totalpage) {
        var nav_tag='';
        nav_tag+='<nav aria-label="..." class="mb-4">';
        nav_tag+='<ul class="pagination pagination-rounded justify-content-center">';

        var disble="";
        if(pstart==1)
            disble="disabled"

        var prenum= parseInt(pstart) - 1;

        nav_tag+='<li class="page-item  '+disble+' ">';
        nav_tag+='<a class="page-link" href="#"  id="ssmunavnum_' + prenum + '" >';
        nav_tag+='<i class="ti-angle-left"></i>';
        nav_tag+='</a>';
        nav_tag+='</li>';

        var pnum = pstart <= numg ? 1 : parseInt(pstart) - 1;

        for(var idx = 0; idx < numg; idx++)
        {
            var actv="";
            var aria_current='';
            var spantag='';
            var oid='';

            if(pnum == pstart)
            {
                actv='active';
                aria_current='aria-current="page"';
                spantag='<span class="sr-only">(current)</span>';
            }
            else
                oid="ssmunavnum_" + pnum;

            nav_tag+='<li class="page-item ' + actv + '"  ' + aria_current + '>';
            nav_tag+='<a class="page-link" id="' + oid + '"  href="#" >' + pnum + '  ' + spantag + '</a>';
            nav_tag+='</li>';

            if(pnum == totalpage) break;

            pnum = pnum + 1;
        }

        var nextnum= parseInt(pstart) + 1;

        var edisble="";
        if(pstart == totalpage)
            edisble="disabled"

        nav_tag+='<li class="page-item '+edisble+' ">';
        nav_tag+='<a class="page-link" id="ssmunavnum_' + nextnum + '" href="#">';
        nav_tag+='<i class="ti-angle-right"></i>';
        nav_tag+='</a>';
        nav_tag+='</li>';

        nav_tag+='</ul>';
        nav_tag+='</nav>';

        $('#ssmu_page_nav').html(nav_tag);

        /* events { */
        $('a[id^="ssmunavnum_"]').click(function(){
            var oid = $(this).attr("id");
            pstart = oid.split('_')[1];
            getAWCSStudentLevelList();

        });
    }
    /// language /////////////////////////////////////////////////////////////////////////////////////////////////////
    function StudentLevelList(lists) {
        $('#awcs_studentlevel_tbody').html('');
        var tags = '';
        for(var i = 0; i < lists.length; i++) {
            var id = lists[i].id;
            var name = lists[i].name;
            var describe = lists[i].describes;
            var uid = lists[i].userid;
            tags += '<tr class="awcs_studentlevel_item-' + id + '" data-id="' + id + '" data-name="' + name + '" data-describe="' + describe + '">';
            tags += '   <td>';
            tags += '   <div class="form-check form-check-inline">';
            tags += '       <input class="form-check-input" type="checkbox" id="cgCheckbox_'+id+'" value="">';
            tags += '   </div>';
            tags += '   </td>';
            tags += '   <td>' + name + '</td>';
            tags += '   <td>' + describe + '</td>';
            tags += '   <td>';
            tags += '       <div class="form-group m-b-0">';
            tags += '           <select class="my-border-radius-slt form-control float-right" id="awcs_studentlevel_table-'+id+'" name="awcs_studentlevel_table-'+id+'">';
            tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit" >'+btntxt_edit+'</option>';
            tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change" >'+btntxt_change+'</option>';
            tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete" >'+btntxt_delete+'</option>';
            tags += '           </select>';
            tags += '       </div>';
            tags += '   </td>';
            tags += '</tr>';
        }
        $('#awcs_studentlevel_tbody').html(tags);

        $('input[id^="cgCheckbox_"]').change(function() {
            var id = $(this).attr("id");
            var del_id = id.split('_')[1];
            if ($(this).is(':checked')) {
                checked_del_items.push(del_id);
            }
            else{
                const idx = checked_del_items.indexOf(del_id);
                if (idx > -1)
                    checked_del_items.splice(idx, 1);
            }

        });

        $('select[id^="awcs_studentlevel_table-"]').change(function(){
            var id = $(this).attr("id");
            edit_id = id.split('-')[1];
            var sel_val = $(this).val();
            if (sel_val == "change") {
                if(pgperm.write != 1){
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }
                var id = $('.awcs_studentlevel_item-'+edit_id).data("id");
                var name = $('.awcs_studentlevel_item-'+edit_id).data("name");
                var describe = $('.awcs_studentlevel_item-'+edit_id).data("describe");
                var max = $('.awcs_studentlevel_item-'+edit_id).data("max");
                $('#AWCSettingName_Input_item').val(name);
                $('#AWCSettingDescribe_Input_item').val(describe);
                is_edit = true;
                $('#ModalAWCSettingDescribe').modal('show');
            }
            else if (sel_val == "delete")
            {

                if(pgperm.delete != 1){
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }

                myjs.data.Confirm('pgtxt_wantdeleteitem',function (val) {
                    if(val){
                        deleteAWCSStudentLevelList();
                    }
                });
            }
            $(this).val('');
        });

    }
    function getAWCSStudentLevelList() {
        $.ajax({
            url: 'admin.getAWCSStudentLevelList',
            data: {
                userid: userid,
                pstart: pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var totallist = data.totallist;
                    var total = data.total;
                    if (lists != "" && lists != null) {
                        StudentLevelList(lists);
                    }
                    else {
                        $('#awcs_studentlevel_tbody').html('');
                    }
                    if(total <= 0){
                        $('#ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function addAWCSStudentLevelList() {
        var name = $('#AWCSettingName_Input_item').val();
        var describe = $('#AWCSettingDescribe_Input_item').val();
        name = $.trim(name);
        describe = $.trim(describe);

        $.ajax({
            url: 'admin.addAWCSStudentLevelList',
            data: {
                userid: userid,
                name:name,
                describe:describe,
                pstart: pstart,
                pcnt:pcnt
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var totallist = data.totallist;
                    var total = data.total;
                    if(lists != null && lists != '') {
                        StudentLevelList(lists);
                    }
                    else
                        $('#awcs_studentlevel_tbody').html('');
                    if(total <= 0){
                        $('#ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                    $('#ModalAWCSettingDescribe').modal('hide');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function editAWCSStudentLevelList() {
        var name = $('#AWCSettingName_Input_item').val();
        var describe = $('#AWCSettingDescribe_Input_item').val();
        $.ajax({
            url: 'admin.editAWCSStudentLevelList',
            data: {
                edit_id:edit_id,
                userid: userid,
                name:name,
                describe:describe,
                pstart: pstart,
                pcnt:pcnt
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var totallist = data.totallist;
                    var total = data.total;
                    if(lists != null && lists != '') {
                        StudentLevelList(lists);
                    }
                    else
                        $('#awcs_studentlevel_tbody').html('');
                    if(total <= 0){
                        $('#ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                    $('#ModalAWCSettingDescribe').modal('hide');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function deleteAWCSStudentLevelList() {
        if(edit_id < 1){
            myjs.data.showAlert('no select');return;
        }
        $.ajax({
            url: 'admin.deleteAWCSStudentLevelList',
            data: {
                edit_id:edit_id,
                userid: userid,
                pstart: pstart,
                pcnt:pcnt
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var totallist = data.totallist;
                    var total = data.total;
                    if(lists != null && lists != '') {
                        StudentLevelList(lists);
                    }
                    else {
                        $('#awcs_studentlevel_tbody').html('');
                    }
                    if(total <= 0){
                        $('#ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                    $('#ModalAWCSettingDescribe').modal('hide');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function allDeleteAWCSStudentLevelList() {
        $('.awcs_studentlevel_all_delete').click(function () {
            if(pgperm.delete != 1){
                myjs.data.showAlert('pgtxt_notpermission');
                return;
            }
            if(checked_del_items.length > 0)
            {
                var dis=0;
                if (window.confirm(pgtxt_wantdeleteitem))
                    dis=1;

                if(dis < 1)return;

                $.ajax({
                    url: 'admin.allDeleteAWCSStudentLevelList',
                    data: {
                        ids:checked_del_items,
                        userid: userid,
                        pstart: pstart,
                        pcnt:pcnt
                    },
                    type: 'POST',
                    async: false,
                    success: function (data) {
                        if (data.msg === "ok") {
                            var lists = data.lists;
                            var totallist = data.totallist;
                            var total = data.total;
                            if(lists != null && lists != '') {
                                StudentLevelList(lists);
                            }
                            else {
                                $('#awcs_studentlevel_tbody').html('');
                            }
                            if(total <= 0){
                                $('#ssmu_page_nav').html('');
                                return;
                            }
                            pstart = data.pstart;
                            var totalpage = data.totalpage;
                            pageNavigation(totalpage);
                            $('#ModalAWCSettingDescribe').modal('hide');
                        } else {
                            console.log(data.msg);
                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            }
        });

    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    export default {
        data(){
            return {
                pageid: 'apps-courses-setting-fav',
                musu_apps_courses:'',
                btntxt_roles:'',
                btntxt_add:'',
                btntxt_edit:'',
                btntxt_change:'',
                btntxt_delete:'',
                pgtxt_list:'',
                pgtxt_name:'',
                pgtxt_number:'',
                pgtxt_delete:'',
                pgtxt_superior:'',
                pgtxt_colleagues:'',
                pgtxt_suserlist:'',
                pgtxt_all:'',
                pgtxt_describe:'',
                btntxt_ok:'',
                btntxt_cancel:'',
                pgtxt_wantdeleteitem:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
            }
        },
        computed: {
            // 계산된 getter
            cbtntxt_roles:function () {
                return this.btntxt_roles;
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit;
            },
            cbtntxt_change:function () {
                return this.btntxt_change;
            },
            cbtntxt_delete:function () {
                return this.btntxt_delete;
            },
            cbtntxt_add:function () {
                return this.btntxt_add;
            },
            cpgtxt_list:function () {
                return this.pgtxt_list;
            },
            cpgtxt_name:function () {
                return this.pgtxt_name;
            },
            cpgtxt_number:function () {
                return this.pgtxt_number;
            },
            cpgtxt_delete:function () {
                return this.pgtxt_delete;
            },
            cpgtxt_superior:function () {
                return this.pgtxt_superior;
            },
            cpgtxt_colleagues:function () {
                return this.pgtxt_colleagues;
            },
            cpgtxt_suserlist:function () {
                return this.pgtxt_suserlist;
            },
            cpgtxt_all:function () {
                return this.pgtxt_all;
            },
            cmusu_apps_courses:function () {
                return this.musu_apps_courses;
            },
            cpgtxt_describe:function () {
                return this.pgtxt_describe;
            },
            cpgtxt_student:function () {
                return this.pgtxt_student;
            },
            cpgtxt_level:function () {
                return this.pgtxt_level;
            },

            contentchange: function () {//cckd
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });
                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                return this.$store.state.contentchange;
            },
        },
        created() {

        },
        mounted() {
            vueOBJ=this;
            pgperm = nav_module.data.getPagePermission(this.$store.state.permission, this.pageid);

            this.initPage();
        },
        methods: {
            initPage(){
                btntxt_add = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_add');
                btntxt_edit = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
                btntxt_change = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
                btntxt_delete = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
                pgtxt_department = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_department');
                pgtxt_position = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_position');
                pgtxt_superior = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_superior');
                pgtxt_name = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_name');
                pgtxt_wantdeleteitem = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_wantdeleteitem');
                is_edit = false;
                $("#ModalAWCSettingDescribe").on('hide.bs.modal', function () {
                    $('select[id^="awcs_studentlevel_table-"]').val('');
                });
                getAWCSStudentLevelList();
                allDeleteAWCSStudentLevelList();
            },
            addAWC_SettingStudentLevel_Btn(){
                if(pgperm.create != 1){
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }
                is_edit = false;
                edit_id = 0;
                $('#AWCSettingName_Input_item').val('');
                $('#ModalAWCSettingDescribe').modal('show');
            },
            addStudentLevelModalBtn(){
                var item_name = $('#AWCSettingName_Input_item').val();
                item_name = $.trim(item_name);
                if(item_name != null && item_name != "")
                {
                    if (is_edit)
                    {
                        editAWCSStudentLevelList();
                    }
                    else
                    {
                        addAWCSStudentLevelList();
                    }

                }
                else
                {
                    myjs.data.showAlert('Name have to not empty!');
                }
            },
        }
    }
</script>

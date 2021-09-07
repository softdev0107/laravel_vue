<template>
    <div style="width:100%;">
        <div style="display: none">{{contentchange}}</div>
        <div class="row">
            <div class="col-md-12" id="EmailManageAddLayout">
                <div class="card border-0 m-b-10 text-right">
                    <div>
                        <div class="btn btn-outline-light dash-my-btn-0 active p-l-r-30" @click.stop="addEmailManageFailed_Btn">
                            <span> {{cbtntxt_add}} </span>
                        </div>
                    </div>
                </div>
            </div>

            <!--age start-->
            <div class="col-md-12 page_roles_content_list active" id="applyapproval">
                <div class="card">
                    <div class="col-md-4" style="margin:20px 0px 0px 10px">
                        <h6 class="card-title m-b-20">{{cpgtxt_list}}</h6>
                    </div>
                    <div>
                        <div class="table-responsive">
                            <table id="sum-department-list" class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                                <thead>
                                <tr role="row">
                                    <th style="width:40px!important"></th>
                                    <th>{{cpgtxt_title}}</th>
                                    <th>{{cpgtxt_date}}</th>
                                    <th>{{cpgtxt_sua_State}}</th>
                                    <th style="text-align:right; padding-right: 40px;">{{cpgtxt_option}}</th>
                                </tr>
                                </thead>
                                <tbody id="uo_emailnamge_tbody">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 page_roles_content_list active" id="edit_emailmanage">
                <form method="post" enctype="multipart/form-data" name="emailmanage_frm" id="emailmanage_frm">
                    <div class="card">
                        <div class="col-md-4" style="margin:20px 0px 0px 10px">
                            <h6 class="card-title m-b-20">{{cpgtxt_setting}}</h6>
                        </div>
                        <div class="col-md-12">
                            <div class="d-flex">
                                <div class="col-md-6 col-sm-6" style="line-height: 40px; display: flex;">
                                    <div class="col-md-2 col-sm-2" style="line-height: 40px;">
                                        <span>{{cpgtxt_title}}</span>
                                    </div>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" id="emailmanage_edit_title" name="emailmanage_edit_title">
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6" style="line-height: 40px; display: flex;">
                                    <div class="col-md-3 col-sm-3" style="line-height: 40px;">
                                        <span>{{cpgtxt_keywords}}</span>
                                    </div>
                                    <div class="col-md-8">
                                        <input type="text" class="form-control" id="emailmanage_edit_keyword" name="emailmanage_edit_keyword">
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex" style="margin: 2rem 0">
                                <textarea name="editcont0" id="editcont0" value="" style="display: none"></textarea>
                                <editor0
                                    api-key="vozqdhfpn1ddjlq31cj4d788tvxdfyyv5sl208xskz86xqoh"
                                    cloud-channel="5-dev"
                                    @onClick="editorclick0"
                                    @onBlur="editorblue0"
                                    :init="{
                                     id:'02',

                                    plugins: [
                                     'lists link image code table paste help wordcount '
                                    ],
                                    toolbar: 'undo redo | code table | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor | link image ',
                                   images_upload_handler:upload_handler0,
                                   init_instance_callback : edit_init_callback0
                                  }"
                                    v-model="TinyMCMcontent0"/>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-end" style="padding-bottom: 1.5rem;">
                        <div class="col-md-4 col-sm-4 text-right">
                            <button type="button" class="btn btn-info-theme active savebtn" @click.stop="SaveEmailManageContent">{{ cbtntxt_savechange }}</button>
                        </div>
                        <div class="col-md-2 col-sm-2">
                            <button type="button" class="btn btn-info-theme" @click.stop="GotoEmailManagelist">
                                {{cbtntxt_cancel}}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <!--category end-->
        </div>
        <div class="row" >
            <div class="col-md-12" id="ssmu_page_nav">

            </div>
        </div>

    </div>
</template>

<style>
    .tox.tox-tinymce{
        border-radius: 20px;
        width: 95% !important;
        height: 300px;
        min-height: 300px !important;
        margin-left: 40px;
    }
</style>
<script>
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";
    import Editor from "@tinymce/tinymce-vue";

    var vueOBJ;
    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var btntxt_edit = "";
    var btntxt_change = "";
    var btntxt_delete = "";
    var btntxt_add = "";
    var pgtxt_wantdeleteitem = "";
    var pgtxt_default = "";

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
                getEmailManageFailedList();

        });
    }

    /// category /////////////////////////////////////////////////////////////////////////////////////////////////////
    function initEmailManagerPage(status){
        if(!is_edit)
            pstart = 1;
        if(status == 0){
            $('#applyapproval').css('display', 'block');
            $('#edit_emailmanage').css('display', 'none');
            $('#EmailManageAddLayout').css('display', 'block');
            $('#ssmu_page_nav').css('display', 'block');
        }
        else{
            $('#applyapproval').css('display', 'none');
            $('#edit_emailmanage').css('display', 'block');
            $('#EmailManageAddLayout').css('display', 'none');
            $('#ssmu_page_nav').css('display', 'none');
        }
    }
    function emailManageList(lists) {
        $('#uo_emailnamge_tbody').html('');
        var tags = '';
        for(var i = 0; i < lists.length; i++) {
            var id = lists[i].id;
            var title = lists[i].title;
            var keyword = lists[i].keyword;
            var content = lists[i].content;
            var date = lists[i].created_at;
            var split_date = date.split(' ');
            var dates = split_date[0].split('-');
            date = parseInt(dates[0]) + ' / ' + parseInt(dates[1]) + ' / ' + parseInt(dates[2]);
            var state = lists[i].state;

            tags += '<tr class="uoe_applyapproval_item-' + id + '" data-id="' + id + '" data-title="' + title + '" data-cont="' + content + '" data-key="' + keyword + '">';
            tags += '   <td></td>';
            tags += '   <td>' + title + '</td>';
            tags += '   <td>' + date + '</td>';
            if(state == 0)
                tags += '   <td>-</td>';
            else
                tags += '   <td class="data-ajax" data-ajax="pgtxt_default">' + pgtxt_default + '</td>';
            tags += '   <td>';
            tags += '       <div class="form-group m-b-0">';
            tags += '           <select class="my-border-radius-slt form-control float-right" id="uoe_applyapproval_table-'+id+'" name="uoe_applyapproval_table-'+id+'">';
            tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit" >'+btntxt_edit+'</option>';
            tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change" >'+btntxt_change+'</option>';
            tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete" >'+btntxt_delete+'</option>';
            tags += '               <option value="default" class="data-ajax" data-ajax="pgtxt_default" >'+pgtxt_default+'</option>';
            tags += '           </select>';
            tags += '       </div>';
            tags += '   </td>';
            tags += '</tr>';
        }
        $('#uo_emailnamge_tbody').html(tags);

        $('select[id^="uoe_applyapproval_table-"]').change(function(){
            var id = $(this).attr("id");
            edit_id = id.split('-')[1];
            var sel_val = $(this).val();
            if (sel_val == "change") {
                if(pgperm.write != 1){
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }

                var id = $('.uoe_applyapproval_item-'+edit_id).data("id");
                var title = $('.uoe_applyapproval_item-'+edit_id).data("title");
                var cont = $('.uoe_applyapproval_item-'+edit_id).data("cont");
                var keyword = $('.uoe_applyapproval_item-'+edit_id).data("key");
                $('#emailmanage_edit_title').val(title);
                $('#emailmanage_edit_keyword').val('[['+keyword+']]');
                var edt0 = htmldecodejs(cont);
                vueOBJ.TinyMCMcontent0 = edt0;
                is_edit = true;
                initEmailManagerPage(1);
            }
            else if (sel_val == "delete")
            {
                if(pgperm.delete != 1){
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }

                myjs.data.Confirm('pgtxt_wantdeleteitem',function (val) {
                    if(val){
                        deleteEmailManageFailedList();
                    }
                });
            }
            else if (sel_val == "default")
            {
                if(pgperm.write != 1){
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }
                setEmailManageFailedState();
            }
            $(this).val('');
        });

    }
    function getEmailManageFailedList() {
        $.ajax({
            url: 'admin.getEmailManageFailedList',
            data: {
                pstart: pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var total = data.total;
                    if (lists != "" && lists != null) {
                        emailManageList(lists);
                    }
                    else {
                        $('#uo_emailnamge_tbody').html('');
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
    function setEmailManageFailedState() {
        $.ajax({
            url: 'admin.setEmailManageFailedState',
            data: {
                id:edit_id,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var total = data.total;
                    if (lists != "" && lists != null) {
                        emailManageList(lists);
                    }
                    else {
                        $('#uo_emailnamge_tbody').html('');
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
    function editEmailManageFailedList() {
        var title = $('#emailmanage_edit_title').val();
        if(title == '' || title == null)
            return;
        var keyword = $('#emailmanage_edit_keyword').val();
        if(keyword == '' || keyword == null)
            return;
        $('#editcont0').val(vueOBJ.TinyMCMcontent0);
        var formData = new FormData($("#emailmanage_frm")[0]);
        formData.append('pstart', pstart);
        formData.append('pcnt', pcnt);
        formData.append('edit_id', edit_id);
        $.ajax({
            url: 'admin.editEmailManageFailedList',
            data: formData,
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var total = data.total;
                    if (lists != "" && lists != null) {
                        emailManageList(lists);
                    }
                    else {
                        $('#uo_emailnamge_tbody').html('');
                    }
                    if(total <= 0){
                        $('#ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);

                    initEmailManagerPage(0);
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            },
            cache: false,
            contentType: false,
            processData: false
        });
    }

    function saveEmailManageFailedList() {
        var title = $('#emailmanage_edit_title').val();
        if(title == '' || title == null)
            return;
        var keyword = $('#emailmanage_edit_keyword').val();
        if(keyword == '' || keyword == null)
            return;
        $('#editcont0').val(vueOBJ.TinyMCMcontent0);
        var formData = new FormData($("#emailmanage_frm")[0]);
        formData.append('pstart', pstart);
        formData.append('pcnt', pcnt);
        $.ajax({
            url: 'admin.saveEmailManageFailedList',
            data: formData,
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var total = data.total;
                    if (lists != "" && lists != null) {
                        emailManageList(lists);
                    }
                    else {
                        $('#uo_emailnamge_tbody').html('');
                    }
                    if(total <= 0){
                        $('#ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);

                    initEmailManagerPage(0);
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            },
            cache: false,
            contentType: false,
            processData: false
        });
    }

    function deleteEmailManageFailedList() {
        if(edit_id < 1){
            myjs.data.showAlert('no select');return;
        }
        $.ajax({
            url: 'admin.deleteEmailManageFailedList',
            data: {
                del_id:edit_id,
                pstart: pstart,
                pcnt:pcnt
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var total = data.total;
                    if(lists != null && lists != '') {
                        emailManageList(lists);
                    }
                    else {
                        $('#uo_emailnamge_tbody').html('');
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

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    export default {
        name: "UsersOrgGlobalEmailManageFailed",
        components: {
            'editor0': Editor
        },
        data(){
            return {
                pageid: 'users-organization-global-emailmanage-fav',
                btntxt_roles:'',
                btntxt_add:'',
                btntxt_edit:'',
                btntxt_change:'',
                btntxt_delete:'',
                btntxt_cancel:'',
                btntxt_savechange:'',
                pgtxt_list:'',
                pgtxt_title:'',
                pgtxt_keywords:'',
                pgtxt_date:'',
                pgtxt_setting:'',
                pgtxt_sua_State:'',
                pgtxt_option:'',
                pgtxt_default:'',
                pgtxt_wantdeleteitem:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
                TinyMCMcontent0: '',
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
            cbtntxt_cancel:function () {
                return this.btntxt_cancel;
            },
            cbtntxt_savechange:function () {
                return this.btntxt_savechange;
            },
            cpgtxt_list:function () {
                return this.pgtxt_list;
            },
            cpgtxt_title:function () {
                return this.pgtxt_title;
            },
            cpgtxt_keywords:function () {
                return this.pgtxt_keywords;
            },
            cpgtxt_date:function () {
                return this.pgtxt_date;
            },
            cpgtxt_setting:function () {
                return this.pgtxt_setting;
            },
            cpgtxt_sua_State:function () {
                return this.pgtxt_sua_State;
            },
            cpgtxt_option:function () {
                return this.pgtxt_option;
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
                pgtxt_wantdeleteitem = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_wantdeleteitem');
                pgtxt_default = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_default');
                is_edit = false;
                getEmailManageFailedList();
                initEmailManagerPage(0);
            },
            editorclick0(){
                //$('.tox.tox-tinymce').css('height','350px');
            },
            editorblue0(){
                //if(tabstatus!==3)
                // $('.tox.tox-tinymce').css('height','150px');
            },
            edit_init_callback0(){
                $('.tox-statusbar').css('display','none');
            },
            upload_handler0(blobInfo, success, failure, progress) {
                if(pgperm.write != 1){
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }
                var xhr, formData;
                xhr = new XMLHttpRequest();
                xhr.withCredentials = false;
                xhr.open('POST', 'admin.UpdateWWGBarCenterImg');
                xhr.upload.onprogress = function (e) {
                    progress(e.loaded / e.total * 100);
                };
                xhr.onload = function() {
                    var json;
                    if (xhr.status < 200 || xhr.status >= 300) {
                        failure('HTTP Error: ' + xhr.status);
                        return;
                    }
                    json = JSON.parse(xhr.responseText);

                    if (!json || typeof json.location != 'string') {
                        failure('Invalid JSON: ' + xhr.responseText);
                        return;
                    }
                    // $('#wwga_footbarleft_upload_preview_temp').val(json.filename);
                    success(json.location);
                };
                xhr.onerror = function () {
                    failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
                };
                formData = new FormData();
                formData.append('file', blobInfo.blob(), blobInfo.filename());
                xhr.send(formData);
            },
            addEmailManageFailed_Btn(){
                if(pgperm.create != 1){
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }
                is_edit = false;
                vueOBJ.TinyMCMcontent0 = '';
                $('#editcont0').val('');
                $('#emailmanage_edit_title').val('');
                initEmailManagerPage(1);
            },
            SaveEmailManageContent(){
                if(!is_edit)
                    saveEmailManageFailedList();
                else
                    editEmailManageFailedList();
            },
            GotoEmailManagelist(){
                initEmailManagerPage(0);
            },
        }
    }
</script>

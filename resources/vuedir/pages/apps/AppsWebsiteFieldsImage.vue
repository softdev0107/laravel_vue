<template>
        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title">
                    <h3>{{cmusususu_apps_website_fields_image}}</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp; {{cmu_apps}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_apps_website}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_apps_website_fields}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_apps_website_fields_image}}
                          <a href="#" id="apps-website-fields-image-fav"  data-status="off" data-page-info="Image_apps-website-fields-image">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
                </div>
            </div>

            <div id="SSFContainer_1" class="sf-tab-container active" style="margin-top:20px;">
                <div class="row"><!--{{templang}}-->
                    <div class="col-md-12">
                        <div class="card border-0 m-b-10 text-right">
                            <div>
                                <div id="system-field-img-btn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-30"  @click.stop="ShowSSFImgDLG()">
                                    <span>+ {{ cbtntxt_add }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12"  style="padding-top:10px;">
                        <div class="card" style="padding: 3px 20px;margin-bottom:1rem">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="table-responsive">
                                        <table role="grid" aria-describedby="user-list_info" class="table table-lg  no-footer m-b-0">
                                            <tbody>
                                           <tr role="row" class="odd">
                                                <td style="width:25%">{{cpgtxt_name}}</td>
                                                <td style="width:15%">{{cpgtxt_size}}</td>
                                                <td style="width:20%">{{cpgtxt_style}}</td>
                                                <td style="width:15%">{{cpgtxt_capacity}}</td>
                                                <td style="width:15%">{{cpgtxt_format}}</td>
                                                <td style="text-align:end;">{{cpgtxt_operation}}</td>
                                            </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--/title part-->

                    <div class="col-md-12"  style="padding-top:10px;">
                        <div class="card">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="table-responsive">

                                            <table role="grid" aria-describedby="user-list_info" class="table table-lg  no-footer" style="margin-top:1rem">
                                                <tbody id="sitelogoimglists">


                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div id="ssmu_page_nav" class="col-md-12">

                    </div>
                </div><!--/nav page-->

            </div><!--/SSFContainer_1 image-->

            <!-- modal dlg -->
            <div class="modal fade" id="myAlertImgAddModal">
                <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">{{cpgtxt_createimage}}</h4>
                            <p id="sfi_alert" style="display: none;padding:5px 10px;border-radius:20px;">Create image area.</p>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body" id="myAlertModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                            <div class="panel" id="tab1">
                                <form id="ssfi-img-add-frm">
                                    <div class="row" style="padding-bottom: 10px;">
                                        <div class="col-md-12">
                                            <div class="form-group m-b-0" style="padding: 1px 0px 0px 0px; font-family: SimHei;"><!--添加员工到部门 WES 及 组--></div>
                                        </div>
                                            <div style="margin: 10px 10px 0px 10px;">
                                                <div class="row" style="padding: 10px">
                                                    <div class="col-md-1">
                                                        <div class="form-group">
                                                            <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_name}}</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-11" style="padding-left: 62px;">
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control" style="width: 300px;"  placeholder="" aria-label="ssfi-name" id="ssfi-name" aria-describedby="basic-addon2">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-1">
                                                        <div class="form-group">
                                                            <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_width}}</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-11" style="padding-left: 62px;">
                                                        <div class="input-group mb-3" style="align-items:center;">
                                                            <div style="width:85%;">
                                                            <input type="number" class="form-control" style="width: 100%;"  placeholder="" aria-label="ssfi-width" id="ssfi-width" aria-describedby="basic-addon2" min="1">
                                                            </div>
                                                            <div class="p-l-10">{{cpgtxt_pixels}}</div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-1">
                                                        <div class="form-group">
                                                            <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_height}}</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-11" style="padding-left: 62px;">
                                                        <div class="input-group mb-3" style="align-items:center;">
                                                            <div style="width:85%;">
                                                            <input type="number" class="form-control" style="width:100%;"  placeholder="" aria-label="ssfi-height" id="ssfi-height" aria-describedby="basic-addon2" min="1">
                                                            </div>
                                                            <div class="p-l-10">{{cpgtxt_pixels}}</div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-1">
                                                        <div class="form-group">
                                                            <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_style}}</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-11" style="padding-left: 62px;">
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control" style="width: 300px;"  placeholder="" aria-label="ssfi-style" id="ssfi-style" aria-describedby="basic-addon2">
                                                        </div>
                                                    </div>

                                                    <div class="col-md-1">
                                                        <div class="form-group">
                                                            <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_capacity}}</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-11" style="padding-left: 62px;">
                                                        <div class="input-group mb-3">
                                                            <div style="width:85%;">
                                                            <input type="text" class="form-control" style="width: 300px;"  placeholder="" aria-label="ssfi-style" id="ssfi-capacity" aria-describedby="basic-addon2">
                                                            </div>
                                                            <div class="p-l-10">KB</div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-1">
                                                        <div class="form-group">
                                                            <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_format}}</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-11 d-flex justify-content-md-start" style="padding-left: 62px;">
                                                            <div class="custom-control custom-checkbox m-r-45">
                                                                <input type="checkbox" class="custom-control-input" id="img-jpg">
                                                                <label class="custom-control-label" for="img-jpg">Jpg</label>
                                                            </div>
                                                            <div class="custom-control custom-checkbox  m-r-45">
                                                                <input type="checkbox" class="custom-control-input" id="img-png">
                                                                <label class="custom-control-label" for="img-png">Png</label>
                                                            </div>
                                                            <div class="custom-control custom-checkbox  m-r-45">
                                                                <input type="checkbox" class="custom-control-input" id="img-gif">
                                                                <label class="custom-control-label" for="img-gif">Gif</label>
                                                            </div>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="img-tga">
                                                                <label class="custom-control-label" for="img-tga">Tga</label>
                                                            </div>
                                                    </div>


                                                </div>
                                            </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 text-center">
                                            <div id="ssfi-model-add" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="ssf_model_img_add()">
                                                <span>+ Add</span>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" id="ssfi-id" value=""/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div><!--/content-->
</template>
<style>
.table .odd td{
 border:0;
}
.table tr.odd.bot{
    border-bottom: 1px solid #e6e6e6;
}
.sf-tab-container{
    display: none;
}
.sf-tab-container.active{
    display: block;
}
</style>
<script>
    import axios from "axios";

    import mjs_module from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";


    var pstart=1;
    var pnum = pstart;
    var pcnt=5;
    var numg = 5;

    var pstart1=1;
    var pnum1 = pstart1;
    var pcnt1=5;
    var numg1 = 5;

    var pstart_n=1;
    var pnum_n = pstart_n;
    var pcnt_n=5;
    var numg_n = 5;
    var pgperm={};
    var vueOBJ=null;
    var names_arr = new Array();
    var is_change = false;

    function showSSFIMGDlg()
    {
        if(is_change)
            $('#ssfi-name').attr('readonly', true);
        else
            $('#ssfi-name').attr('readonly', false);
        $("#myAlertImgAddModal").modal('show');
        var dh = Math.max($(document).height(), $(document.body).height());

        $('#ssfi-width').on("keyup", function () {
            var len = $("#ssfi-width").val();
            if(parseInt(len) < 1 || len == null || len == '')
                $("#ssfi-width").val('1');
        });
        $('#ssfi-height').on("keyup", function () {
            var len = $("#ssfi-height").val();
            if(parseInt(len) < 1 || len == null || len == '')
                $("#ssfi-height").val('1');
        });
        $('#ssfi-capacity').on("keyup", function () {
            var len = $("#ssfi-capacity").val();
            if(parseInt(len) < 1 || len == null || len == '')
                $("#ssfi-capacity").val('1');
        });
    }


    export default {
        data(){
            return {
                pageid:'apps-website-fields-image-fav',
                mu_apps:'',
                musu_apps_website:'',
                mususu_apps_website_fields:'',
                musususu_apps_website_fields_image:'',
                btntxt_img:'',
                btntxt_text:'',
                btntxt_number:'',
                pgtxt_number:'',
                btntxt_email:'',
                btntxt_date:'',
                pgtxt_name:'',
                pgtxt_font:'',
                pgtxt_size:'',
                pgtxt_style:'',
                pgtxt_capacity:'',
                pgtxt_format:'',
                pgtxt_operation:'',
                btntxt_add:'',
                pgtxt_email:'',
                pgtxt_ssf_footerlimit:'',
                pgtxt_ssf_limit:'',
                btntxt_savechange:'',
                pgtxt_image:'',
                pgtxt_line:'',
                pgtxt_weight:'',
                pgtxt_createimage:'',
                pgtxt_createemail:'',
                pgtxt_width:'',
                pgtxt_height:'',
                pgtxt_pixels:'',
                pgtxt_createnumber:'',
                btntxt_change:'',
                btntxt_edit:'',
                btntxt_delete:'',
                btntxt_ok:'',
                btntxt_cancel:'',
                pgtxt_wantdeleteitem:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
            }
        },
        computed: {
            // 계산된 getter
            title: function () {
                return this.$store.state.curMenu
            },
            cmu_apps: function () {
                return this.mu_apps
            },
            cmusu_apps_website: function () {
                return this.musu_apps_website
            },
            cmususu_apps_website_fields: function () {
                return this.mususu_apps_website_fields
            },
            cmusususu_apps_website_fields_image: function () {
                return this.musususu_apps_website_fields_image
            },
            cbtntxt_img: function () {
                return this.btntxt_img
            },
            cbtntxt_text:function(){
                return this.btntxt_text
            },
            cbtntxt_number:function(){
                return this.btntxt_number
            },
            cbtntxt_email:function(){
                return this.btntxt_email
            },
            cbtntxt_date:function(){
                return this.btntxt_date
            },
            cbtntxt_add:function(){
                return this.btntxt_add
            },
            cpgtxt_name:function(){
                return this.pgtxt_name
            },
            cpgtxt_font:function(){
                return this.pgtxt_font
            },
            cpgtxt_width:function(){
                return this.pgtxt_width
            },
            cpgtxt_height:function(){
                return this.pgtxt_height
            },
            cpgtxt_pixels:function(){
                return this.pgtxt_pixels
            },
            cpgtxt_size:function(){
                return this.pgtxt_size
            },
            cpgtxt_style:function(){
                return this.pgtxt_style
            },
            cpgtxt_line: function () {
                return this.pgtxt_line
            },
            cpgtxt_createnumber: function () {
                return this.pgtxt_createnumber
            },
            cpgtxt_capacity:function(){
                return this.pgtxt_capacity
            },
            cpgtxt_format:function(){
                return this.pgtxt_format
            },
            cpgtxt_operation:function(){
                return this.pgtxt_operation
            },
            cpgtxt_ssf_footerlimit:function(){
                return this.pgtxt_ssf_footerlimit
            },
            cpgtxt_ssf_limit:function(){
                return this.pgtxt_ssf_limit
            },
            cbtntxt_savechange:function(){
                return this.btntxt_savechange
            },
            cpgtxt_weight:function(){
                return this.pgtxt_weight
            },
            cpgtxt_email:function(){
                return this.pgtxt_email
            },
            cpgtxt_createimage:function(){
                return this.pgtxt_createimage
            },
            cpgtxt_createemail:function(){
                return this.pgtxt_createemail
            },
            cpgtxt_number:function(){
                return this.pgtxt_number
            },
            cbtntxt_change:function(){
                return this.btntxt_change
            },
            cpgtxt_image:function(){
                return this.pgtxt_image
            },
            cbtntxt_edit:function(){
                return this.btntxt_edit
            },
            cbtntxt_delete:function(){
                return this.btntxt_delete
            },

            contentchange: function () {
                mjs_module.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    // console.log(obj.hasOwnProperty(key));
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });
                mjs_module.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                return this.$store.state.contentchange;
            }
        },
        created() {

        },
        beforeMount() {
        },
        mounted() {
            /* fav part*/
            vueOBJ=this;
            pgperm = nav_module.data.getPagePermission(this.$store.state.permission, this.pageid);
            $('#'+this.pageid).click(function(){
                mjs_module.data.addOnfavList(this, vueOBJ);
            });
            mjs_module.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            this.getSiteLogoStylelist();
        },
        methods: {
            /* fav part */
            getSiteFaveritelist(list){
                if(list!=null && list!='')
                {
                    let imgsrc='/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src",imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }

            },
            /*fav part*/
            ShowSSFImgDLG() {
                if(pgperm.create != 1){
                    mjs_module.data.showAlert('pgtxt_notpermission');
                    return;
                }

                var _createimage = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_createimage');
                var _add = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_add');

                $('#myAlertImgAddModal .modal-title').text(_createimage);
                $('#myAlertImgAddModal #ssfi-name').val('');
                $('#myAlertImgAddModal #ssfi-width').val('');
                $('#myAlertImgAddModal #ssfi-height').val('');
                $('#myAlertImgAddModal #ssfi-style').val('');
                $('#myAlertImgAddModal #ssfi-id').val('');
                $('#myAlertImgAddModal #ssfi-model-add span').text('+ '+_add);
                $('#myAlertImgAddModal #ssfi-capacity').val('');
                $('#myAlertImgAddModal #img-jpg').prop('checked',false);
                $('#myAlertImgAddModal #img-png').prop('checked',false);
                $('#myAlertImgAddModal #img-gif').prop('checked',false);
                $('#myAlertImgAddModal #img-tga').prop('checked',false);
                is_change = false;
                showSSFIMGDlg();
           },
            ssf_model_img_add(){
                var vueOBJ=this;
                var name = $.trim($('#ssfi-name').val());
                var same_name = false;
                if(!is_change) {
                    for (var i = 0; i < names_arr.length; i++) {
                        if (name == names_arr[i]) {
                            $("#myAlertImgAddModal").modal('hide');
                            mjs_module.data.showAlert("pgtxt_existsname");
                            same_name = true;
                            break;
                        }
                    }
                }
                if(same_name)
                    return;
                var w = $.trim($('#ssfi-width').val());
                var h = $.trim($('#ssfi-height').val());
                var style=$.trim($('#ssfi-style').val());
                var capacity=$.trim($('#ssfi-capacity').val());
                var i_jpg=0;
                var i_png=0;
                var i_gif=0;
                var i_tga=0;
                if($("#img-jpg").is(':checked'))
                    i_jpg=1;
                if($("#img-png").is(':checked'))
                    i_png=1;
                if($("#img-gif").is(':checked'))
                    i_gif=1;
                if($("#img-tga").is(':checked'))
                    i_tga=1;

                if(name == '' || w == '' || h == '' || style == '' || capacity == '')
                {
                    mjs_module.data.showAlert("you must empty this fields.");
                }
                else
                {
                    var id = $('#myAlertImgAddModal #ssfi-id').val();
                    var etype='save';
                    if(id != '' && parseInt(id) > 0){
                        etype='change';
                    }

                    var size=w+'*'+h;
                    let postData = {
                        name:name,
                        size:size,
                        style:style,
                        etype:etype,
                        cid:parseInt(id),
                        capacity:capacity,
                        jpg:i_jpg,
                        png:i_png,
                        gif:i_gif,
                        tga:i_tga
                    };
                    axios.post('admin.savelogoimgstyle', postData)
                        .then((response) => {
                            let msg = response.data.msg;
                            if(msg =="ok")
                            {
                                $('#ssfi-name').val('');
                                $('#ssfi-width').val('');
                                $('#ssfi-height').val('');
                                $('#ssfi-style').val('');
                                $('#ssfi-id').val('');
                                $('#ssfi-capacity').val('');
                                $("#img-jpg").prop('checked',false);
                                $("#img-png").prop('checked',false);
                                $("#img-gif").prop('checked',false);
                                $("#img-tga").prop('checked',false);

                                vueOBJ.getSiteLogoStylelist();

                                $("#myAlertImgAddModal").modal('hide');

                            }
                            else
                            {
                                console.log(response.data.message);
                            }
                        }).catch(function (error) {
                        console.log(error);
                    })
                }

            },
            getSiteLogoStylelist()
            {
                var vueOBJ=this;
                let postData = {
                    start: pstart,
                    cnt:pcnt,// han 2020-10-21
                    filter: 1,// han 2020-10-21
                };
               axios.post('admin.getSiteLogoStylelist', postData)
                    .then((response) => {
                        let msg = response.data.msg;
                        var total=response.data.total;
                        if(total<=0){
                            $('#sitelogoimglists').html('');
                            $('#ssmu_page_nav').html('');
                            return;
                        }
                        if(msg =="ok")
                        {
                            names_arr = new Array();
                            pstart=response.data.start;
                            var totalpage=response.data.totalpage;
                            var logolists =  response.data.list;
                           //console.log(logolists);
                            var tag="";
                            $('#sitelogoimglists').html('');
                            var btntxt_change= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
                            var btntxt_edit= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
                            var btntxt_delete= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
                           for(var i=0;i<logolists.length;i++)
                           {
                               var list = logolists[i];
                               var id = list.id;
                               var name = list.name;
                               names_arr.push(name);
                               var size = list.size;
                               var style = list.style;
                               var capacity= list.capacity===null ? "" : list.capacity;// + '(KB)';
                               var imgtype= list.imgtype === null ? "" : list.imgtype;
                                if(imgtype!=="") {
                                    imgtype = nav_module.data.jsonparse_one(imgtype);
                                    imgtype = imgtype.replace("{", "");
                                    imgtype = imgtype.replace("}", "");
                                    var types = imgtype.split(",");
                                    var real_imgtype = "";
                                    var index = 0;
                                    for(var k = 0; k < types.length; k++){
                                        var type = types[k];
                                        var real_types = type.split(":");
                                        if(real_types.length > 1){
                                            if(real_types[1] == 1){
                                                if(index == 0)
                                                    real_imgtype += real_types[0];
                                                else
                                                    real_imgtype += " / " + real_types[0];
                                                index++;
                                            }
                                        }

                                        imgtype = real_imgtype;
                                    }
                                }
                               var cls='';
                               if(i<logolists.length -1)
                                   cls='bot';
                               var alldate=name+'-'+size+'-'+style;


                               tag+='<tr role="row" class="odd '+cls+'">';
                               tag+=    '<td style="width:25%; padding-left:30px">'+name+'</td>';
                               tag+=    '<td style="width:15%">'+size+'</td>';
                               tag+=    '<td style="width:20%">'+style+'</td>';
                               tag+=    '<td style="width:15%">'+capacity+'</td>';
                               tag+=    '<td style="width:15%">'+imgtype+'</td>';
                               tag+=    '<td style="padding-right:20px">';
                               tag+=        '<div class="form-group m-b-0">';
                               tag+=            '<select class="my-border-radius-slt form-control float-right" data-cont="'+alldate+'" data-capacity="'+capacity+'" data-imgtype="'+imgtype+'" id="ssflogoselect_'+id+'" name="ssflogoslect">';
                               tag+=                '<option value="" class="data-ajax" data-ajax="btntxt_edit" >'+btntxt_edit+'</option>';
                               tag+=                '<option value="change" class="data-ajax" data-ajax="btntxt_change" >'+btntxt_change+'</option>';
                               tag+=                '<option value="delete" class="data-ajax" data-ajax="btntxt_delete" >'+btntxt_delete+'</option>';
                               tag+=            '</select>';
                               tag+=        '</div>';
                               tag+=    '</td>';
                               tag+='</tr>';
                           }

                            $('#sitelogoimglists').html(tag);

                            var nav_tag='';
                            nav_tag+='<nav aria-label="..." class="mb-4">';
                            nav_tag+='<ul class="pagination pagination-rounded justify-content-center">';

                            var disble="";
                            if(pstart==1)
                                disble="disabled"

                            var prenum= parseInt(pstart) - 1;

                            nav_tag+='<li class="page-item  '+disble+' ">';
                            nav_tag+='<a class="page-link" href="#"  data-num="ssmunavnum_' + prenum + '" >';
                            nav_tag+='<i class="ti-angle-left"></i>';
                            nav_tag+='</a>';
                            nav_tag+='</li>';

                            pnum = pstart <= numg ? 1 : parseInt(pstart) - 1;

                            for(var idx = 0; idx < numg; idx++)
                            {

                                var actv="";
                                var aria_current='';
                                var spantag='';
                                var oid='';

                                if(pnum==pstart)
                                {
                                    actv='active';
                                    aria_current='aria-current="page"';
                                    spantag='<span class="sr-only">(current)</span>';
                                }
                                else
                                    oid="ssmunavnum_" + pnum;

                                nav_tag+='<li class="page-item ' + actv + '"  ' + aria_current + '>';
                                nav_tag+='<a class="page-link" data-num="' + oid + '"  href="#" >' + pnum + '  ' + spantag + '</a>';
                                nav_tag+='</li>';

                                if(pnum==totalpage) break;

                                pnum = pnum + 1;

                            }

                            var nextnum= parseInt(pstart) + 1;
                            var edisble="";
                            if(pstart==totalpage)
                                edisble="disabled"

                            nav_tag+='<li class="page-item '+edisble+' ">';
                            nav_tag+='<a class="page-link" data-num="ssmunavnum_' + nextnum + '" href="#">';
                            nav_tag+='<i class="ti-angle-right"></i>';
                            nav_tag+='</a>';
                            nav_tag+='</li>';

                            nav_tag+='</ul>';
                            nav_tag+='</nav>';

                            $('#ssmu_page_nav').html(nav_tag);

                            /* events { */
                           $('a[data-num^="ssmunavnum_"]').click(function(){
                                var oid=$(this).attr("data-num");
                                pstart=oid.split('_')[1];
                               vueOBJ.getSiteLogoStylelist();
                            });

                           $('select[id^="ssflogoselect_"]').change(function(){
                                var tid=$(this).attr("id");
                                var t_id=tid.split("_")[1];
                                var value=$(this).val();
                                if(value!='')
                                {
                                    if(value=='change')
                                    {
                                        is_change = true;
                                        if(pgperm.write!==1){
                                            mjs_module.data.showAlert('pgtxt_notpermission');
                                            return;
                                        }

                                        var alldate = $(this).attr("data-cont");
                                        var name=alldate.split('-')[0];
                                        var size=alldate.split('-')[1];
                                        var style=alldate.split('-')[2];

                                        var w=size.split('*')[0];
                                        var h=size.split('*')[1];

                                        var capacity = $(this).data("capacity");
                                        var imgtype = $(this).data("imgtype");
                                        var jpg=0;
                                        var png=0;
                                        var gif=0;
                                        var tga=0;
                                        if(imgtype!==""){
                                            var arry = imgtype.split("/");
                                            for(var i=0;i<arry.length; i++)
                                            {
                                               var item = arry[i].replace(/\s/g, '')
                                                if(item==="jpg")
                                                    jpg = 1;
                                                else if(item==="png")
                                                    png = 1;
                                                else if(item==="gif")
                                                    gif = 1;
                                                else if(item==="tga")
                                                    tga = 1;

                                            }
                                        }

                                       var _change= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
                                       var _img = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_image');
                                        $('#myAlertImgAddModal .modal-title').text(_change + ' ' + _img);
                                        $('#myAlertImgAddModal #ssfi-name').val(name);
                                        $('#myAlertImgAddModal #ssfi-width').val(w);
                                        $('#myAlertImgAddModal #ssfi-height').val(h);
                                        $('#myAlertImgAddModal #ssfi-style').val(style);
                                        $('#myAlertImgAddModal #ssfi-id').val(t_id);
                                        $('#myAlertImgAddModal #ssfi-model-add span').text(_change);

                                        $('#myAlertImgAddModal #ssfi-capacity').val(capacity);

                                        if(jpg > 0)
                                            $("#myAlertImgAddModal #img-jpg").prop('checked',true);
                                        else
                                            $("#myAlertImgAddModal #img-jpg").prop('checked',false);
                                        if(png > 0)
                                            $("#myAlertImgAddModal #img-png").prop('checked',true);
                                        else
                                            $("#myAlertImgAddModal #img-png").prop('checked',false);
                                        if(gif > 0)
                                            $("#myAlertImgAddModal #img-gif").prop('checked',true);
                                        else
                                            $("#myAlertImgAddModal #img-gif").prop('checked',false);
                                        if(tga > 0)
                                            $("#myAlertImgAddModal #img-tga").prop('checked',true);
                                        else
                                            $("#myAlertImgAddModal #img-tga").prop('checked',false);

                                         showSSFIMGDlg();
                                    }
                                    else
                                    {
                                        if(pgperm.delete!==1){
                                            mjs_module.data.showAlert('pgtxt_notpermission');
                                            return;
                                        }

                                        mjs_module.data.Confirm('pgtxt_wantdeleteitem',function (val) {
                                           if(val){
                                             vueOBJ.chageSiteLogoStylelist(t_id,value, vueOBJ);
                                           }
                                        });
                                    }
                                }
                               $(this).val('');
                            });
                            /* } events */

                        }
                        else
                        {
                            console.log(response.data.message);
                        }
                    }).catch(function (error) {
                    console.log(error);
                })
            },
            chageSiteLogoStylelist(id,value, vueOBJ){
                let postData = {
                    id: id,
                    value:value
                };
                axios.post('admin.chageSiteLogoStylelist', postData)
                    .then((response) => {
                        let msg = response.data.msg;
                        if(msg =="ok"){
                            vueOBJ.getSiteLogoStylelist();
                        }
                        else
                        {
                            console.log(response.data.msg);
                        }
                    }).catch(function (error) {
                    console.log(error);
                })
            }
        }/*end method*/
    }
</script>

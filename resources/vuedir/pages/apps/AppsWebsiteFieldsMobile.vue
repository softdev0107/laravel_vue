<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_apps_website_fields_mobile}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-phone" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                            <path fill-rule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp; {{cmu_apps}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_apps_website}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_apps_website_fields}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_apps_website_fields_mobile}}
                          <a href="#" id="apps-website-fields-mobile-fav"  data-status="off" data-page-info="Mobile_apps-website-fields-mobile">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                </span>
            </div>
        </div>

        <div id="SSFContainer_Mobile" class="sf-tab-container active" style="margin-top: 20px;">
            <div class="row">
                <div class="col-md-12">
                    <div class="card border-0 m-b-10 text-right">
                        <div>
                            <div id="apps-website-mobile-btn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-30" @click.stop="showSSFMobileDLG()" >
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
                                    <table role="grid" aria-describedby="mobile-list_info" class="table table-lg  no-footer m-b-0">
                                        <tbody>
                                        <tr role="row" class="odd">
                                            <td style="width:25%" class="text-left">{{cpgtxt_name}}</td>
                                            <td style="width:30%" class="text-center">{{cpgtxt_sua_Country}}</td>
                                            <td style="width:30%" class="text-center">{{cpgtxt_characters}}</td>
                                            <td style="text-align:end;">{{cpgtxt_operation}}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12"  style="padding-top:10px;">
                    <div class="card">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table role="grid" aria-describedby="user-list_info" class="table table-lg  no-footer" style="margin-top:1rem">
                                        <tbody id="sitefieldmobilelists">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div id="sfn_mobile_nav" class="col-md-12">

                </div>
            </div>
        </div>

        <div class="modal fade" id="myAlertMobileAddModal">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title"><span>{{cpgtxt_createmobile}}</span></h4>
                        <p id="sfn_alert" style="display: none;padding:5px 10px;border-radius:20px;">Create Mobile area.</p>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="myAlertMumModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                        <div class="panel" id="tab3">
                            <form id="ssfi-mobile-add-frm">
                                <div class="row" style="padding-bottom: 10px;">
                                    <div class="col-md-12">
                                        <div class="form-group m-b-0" style="padding: 1px 0px 0px 0px; font-family: SimHei;"><!--添加员工到部门 WES 及 组--></div>
                                    </div>
                                    <div style="margin: 10px 10px 0px 10px;">
                                        <div class="row" style="padding: 10px">
                                            <!--name-->
                                            <div class="col-md-1">
                                                <div class="form-group">
                                                    <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_name}}</label>
                                                </div>
                                            </div>
                                            <div class="col-md-11" style="padding-left: 62px;">
                                                <div class="input-group mb-3">
                                                    <input type="text" class="form-control" placeholder="" aria-label="ssfn-mobile-name" id="ssfn-mobile-name" aria-describedby="basic-addon2">
                                                </div>
                                            </div>
                                            <!--country-->
                                            <div class="col-md-1">
                                                <div class="form-group">
                                                    <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_sua_Country}}</label>
                                                </div>
                                            </div>
                                            <div class="col-md-11" style="padding-left: 62px;">
                                                <div class="input-group mb-3">
                                                    <input type="tel" class="form-control"  placeholder="" aria-label="ssfn-mobile-country" id="ssfn-mobile-country" aria-describedby="basic-addon2">
                                                </div>
                                            </div>
                                            <!--characters-->
                                            <div class="col-md-1">
                                                <div class="form-group">
                                                    <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_characters}}</label>
                                                </div>
                                            </div>
                                            <div class="col-md-11" style="padding-left: 62px;">
                                                <div class="input-group mb-3">
                                                    <input type="number" class="form-control" placeholder="" aria-label="ssfn-mobile-characters" id="ssfn-mobile-characters" aria-describedby="basic-addon2" min="1">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 text-center">
                                        <div id="ssfn-model-add" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="ssf_model_mobile_add()">
                                            <span>+ {{cbtntxt_add}}</span>
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" id="ssfn-mobile-id" value=""/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    @import "../../assets/css/flag.min.css";

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


    var vueOBJ = null;
    var pstart = 1;
    var pnum = pstart;
    var pcnt = 5;
    var numg = 5;
    var pgperm={};
    var countrys_arr = new Array();
    var names_arr = new Array();
    var is_change = false;

    function showSSFMobileDlg() {
        if(is_change)
            $('#ssfn-mobile-name').attr('readonly', true);
        else
            $('#ssfn-mobile-name').attr('readonly', false);
        $("#myAlertMobileAddModal").modal("show");
        $('#ssfn-mobile-characters').on("keyup", function () {
            var len = $("#ssfn-mobile-characters").val();
            if(parseInt(len) < 1 || len == null || len == '')
                $("#ssfn-mobile-characters").val('1');
        });
    }

    function setinputTel() {
        var input = document.querySelector("#ssfn-mobile-country");
        window.intlTelInput(input, {
            preferredCountries: ['cn'],
            separateDialCode: true,
        });
    }

    export default {
        data () {
            return {
                pageid: 'apps-website-fields-mobile-fav',
                musususu_apps_website_fields_mobile: '',
                mu_apps: '',
                musu_apps_website: '',
                mususu_apps_website_fields: '',
                pgtxt_name: '',
                pgtxt_sua_Country: '',
                pgtxt_characters: '',
                pgtxt_operation: '',
                btntxt_add: '',
                pgtxt_mobile: '',
                btntxt_ok:'',
                btntxt_cancel:'',
                pgtxt_wantdeleteitem:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
                pgtxt_createmobile:'',
            }
        },
        computed: {
            cmusususu_apps_website_fields_mobile: function () {
                return this.musususu_apps_website_fields_mobile;
            },
            cmu_apps: function () {
                return this.mu_apps;
            },
            cmusu_apps_website: function () {
                return this.musu_apps_website;
            },
            cmususu_apps_website_fields: function () {
                return this.mususu_apps_website_fields;
            },
            cpgtxt_name: function () {
                return this.pgtxt_name;
            },
            cpgtxt_sua_Country: function () {
                return this.pgtxt_sua_Country;
            },
            cpgtxt_characters: function () {
                return this.pgtxt_characters;
            },
            cpgtxt_operation: function () {
                return this.pgtxt_operation;
            },
            cbtntxt_add: function () {
                return this.btntxt_add;
            },
            cpgtxt_mobile: function () {
                return this.pgtxt_mobile;
            },
            cpgtxt_createmobile: function () {
                return this.pgtxt_createmobile;
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
        mounted() {
            /* fav part*/
            vueOBJ=this;
            pgperm = nav_module.data.getPagePermission(this.$store.state.permission, this.pageid);
            $('#'+this.pageid).click(function(){
                mjs_module.data.addOnfavList(this, vueOBJ);
            });
            mjs_module.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            this.getSFMobileList();
            setinputTel();
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
            /* fav part */
            showSSFMobileDLG() {
                if(pgperm.create != 1){
                    mjs_module.data.showAlert('pgtxt_notpermission');
                    return;
                }

                var createmobile = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_createmobile');
                var title_span = '<span class="data-ajax" data-ajax="pgtxt_createmobile">'+createmobile+'</span>';
                $("#myAlertMobileAddModal .modal-title").html(title_span);
                $("#myAlertMobileAddModal #ssfn-mobile-name").val("");
                $("#myAlertMobileAddModal #ssfn-mobile-country").val("");
                $("#myAlertMobileAddModal #ssfn-mobile-characters").val("");
                $("#myAlertMobileAddModal #ssfn-mobile-id").val("");
                is_change = false;
                showSSFMobileDlg();
            },
            getSFMobileList() {
                let postData = {
                    start: pstart,
                    cnt: pcnt,
                    filter: 1
                };
                axios.post('admin.getSiteMobileList', postData)
                    .then((response) => {
                        let msg = response.data.msg;
                        var total = response.data.total;

                        if (total <= 0) {
                            $("#sitefieldmobilelists").html("");
                            $("#sfn_mobile_nav").html("");
                            return;
                        }

                        if (msg == "ok" && total.length > 0) {
                            pstart = response.data.start;
                            var totalpage = response.data.totalpage;
                            var logolists = response.data.list;
                            var tag = "";
                            var btntxt_change= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
                            var btntxt_edit= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
                            var btntxt_delete= mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');

                            names_arr = new Array();
                            countrys_arr = new Array();
                            for(var i = 0; i < total.length; i++)
                            {
                                var list = total[i];
                                var name = list.name;
                                var countryiso = list.countryiso;
                                names_arr.push(name);
                                countrys_arr.push(countryiso);
                            }

                            for (var i = 0; i < logolists.length; i++) {
                                var list = logolists[i];
                                var id = list.id;
                                var name = list.name;
                                var countryname = list.countryname;
                                var countryiso = list.countryiso;
                                var characters = list.characters;

                                var cls = "";
                                if (i < logolists.length - 1)
                                    cls = "bot";
                                var alldate=name+"-"+countryname+"-"+countryiso+"-"+characters;

                                tag += "<tr role='row' class='odd " + cls + "'>";
                                tag += "<td style='width: 25%; padding-left: 30px;' class='text-left'>" + name + "</td>";
                                // tag += "<td style='width: 30%;'>" + countryname + "</td>";
                                tag += "<td style='width: 30%;' class='text-center'><i class='" + countryiso + "  flag" + "'></i></td>";
                                tag += "<td style='width: 30%;' class='text-center'>" + characters +"</td>";
                                tag += "<td style='padding-right: 20px;'>";
                                tag += "<div class='form-group m-b-0'>";
                                tag += "<select class='my-border-radius-slt form-control float-right' data-cont='" + alldate + "' id='ssfmobileselect_" + id + "' name='ssfmobileselect'>";
                                tag += "<option value='' class='data-ajax' data-ajax='btntxt_edit'>"+btntxt_edit+"</option>";
                                tag += "<option value='change' class='data-ajax' data-ajax='btntxt_change'>"+btntxt_change+"</option>";
                                tag += "<option value='delete' class='data-ajax' data-ajax='btntxt_delete'>"+btntxt_delete+"</option>";
                                tag += "</select>";
                                tag += "</div>";
                                tag += "</td>";
                                tag += "</tr>";

                                $("#sitefieldmobilelists").html(tag);

                                var nav_tag = "";
                                nav_tag += "<nav aria-label='...' class='mb-4'>";
                                nav_tag += "<ul class='pagination pagination-rounded justify-content-center'>";

                                var disble = "";
                                if (pstart == 1)
                                    disble = "disabled";

                                var prenum = parseInt(pstart) - 1;

                                nav_tag += "<li class='page-item  " + disble + "'>";
                                nav_tag += "<a class='page-link' href='#' data-num='ssmunavmobile_" + prenum + "'>";
                                nav_tag += "<i class='ti-angle-left'></i>";
                                nav_tag += "</a>";
                                nav_tag += "</li>";

                                pnum = pstart <= numg ? 1 : parseInt(pstart) - 1;

                                for (var idx = 0; idx < numg; idx ++) {
                                    var actv = "";
                                    var aria_current = "";
                                    var spantag = "";
                                    var oid = "";

                                    if (pnum == pstart) {
                                        actv = "active";
                                        aria_current = "aria-current='page'";
                                        spantag = "<span class='sr-only'>(current)</span>";
                                    } else {
                                        oid = "ssmunavmobile_" + pnum;
                                    }

                                    nav_tag += "<li class='page-item " + actv + "'  " + aria_current + ">";
                                    nav_tag += "<a class='page-link' data-num='" + oid + "' href='#'>" + pnum + "  " + spantag + "</a>";
                                    nav_tag += "</li>";

                                    if (pnum == totalpage) break;

                                    pnum += 1;
                                }

                                var nextnum = parseInt(pstart) + 1;
                                var edisble = "";
                                if (pstart == totalpage)
                                    edisble = "disabled";

                                nav_tag += "<li class='page-item " + edisble + "'>";
                                nav_tag += "<a class='page-link' data-num='ssmunavmobile_" + nextnum + "' href='#'>";
                                nav_tag += "<i class='ti-angle-right'></i>";
                                nav_tag += "</a>";
                                nav_tag += "</li>";
                                nav_tag += "</ul>";
                                nav_tag += "</nav>";

                                $("#sfn_mobile_nav").html(nav_tag);

                                $("select[id^='ssfmobileselect_']").change(function () {

                                    var tid = $(this).attr("id");
                                    var t_id = tid.split("_")[1];
                                    var value = $(this).val();
                                    if (value != "") {
                                        if (value == "change") {
                                            if(pgperm.write != 1){
                                                mjs_module.data.showAlert('pgtxt_notpermission');
                                                return;
                                            }
                                            is_change = true;
                                            var alldate = $(this).attr("data-cont");
                                            // name+"-"+countryname+"-"+countryiso+"-"+characters;
                                            var name = alldate.split("-")[0];
                                            var countryname = alldate.split("-")[1];
                                            var countryiso = alldate.split("-")[2];
                                            var characters = alldate.split("-")[3];

                                            var changemobile = mjs_module.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_changemobile');
                                            var title_span = '<span class="data-ajax" data-ajax="pgtxt_changemobile">'+changemobile+'</span>';
                                            $("#myAlertMobileAddModal .modal-title").html(title_span);
                                            $("#myAlertMobileAddModal #ssfn-mobile-name").val(name);
                                            // $("#myAlertMobileAddModal #ssfn-mobile-country").val(countrycode);
                                            var input = document.querySelector("#ssfn-mobile-country");
                                            var iti = window.intlTelInputGlobals.getInstance(input);
                                            iti.setCountry(countryiso);
                                            $("#myAlertMobileAddModal #ssfn-mobile-characters").val(characters);
                                            $('#myAlertMobileAddModal #ssfn-mobile-id').val(t_id);

                                            showSSFMobileDlg();
                                        } else {

                                            if(pgperm.delete != 1){
                                                mjs_module.data.showAlert('pgtxt_notpermission');
                                                return;
                                            }

                                            mjs_module.data.Confirm('pgtxt_wantdeleteitem',function (val) {
                                                if(val){
                                                    vueOBJ.deleteSiteMobile(t_id, value, vueOBJ);
                                                }
                                            });
                                        }
                                    }
                                    $(this).val('');
                                });
                            }
                        } else {
                            console.log(response.data.message);
                        }
                    })
                .catch(function (error) {
                    console.log(error);
                });
            },
            ssf_model_mobile_add() {
                var name = $.trim($('#ssfn-mobile-name').val());
                var characters = $.trim($('#ssfn-mobile-characters').val());
                var input = document.querySelector("#ssfn-mobile-country");
                var iti = window.intlTelInputGlobals.getInstance(input);
                var countryData = iti.getSelectedCountryData();
                var countryiso = countryData["iso2"];
                var countryname = countryData["name"];
                var dialcode = countryData["dialCode"];

                if (name == "" || characters == "") {
                    $("#myAlertMobileAddModal").modal('hide');
                    mjs_module.data.showAlert("you must empty this fields");
                } else {
                    var id = $("#myAlertMobileAddModal #ssfn-mobile-id").val();

                    var etype = "save";
                    if (id != "" && parseInt(id) > 0) {
                        etype = "change";
                    }
                    var same_name = false;
                    if(!is_change) {
                        for (var i = 0; i < names_arr.length; i++) {
                            if (name == names_arr[i]) {
                                $("#myAlertMobileAddModal").modal('hide');
                                mjs_module.data.showAlert("pgtxt_existsname");
                                same_name = true;
                                break;
                            }
                        }
                        if(!same_name) {
                            for (var j = 0; j < countrys_arr.length; j++) {
                                if (countryiso == countrys_arr[j]) {
                                    $("#myAlertMobileAddModal").modal('hide');
                                    mjs_module.data.showAlert("pgtxt_existscountry");
                                    same_name = true;
                                    break;
                                }
                            }
                        }
                    }
                    if (same_name)
                        return;


                    let postData = {
                        name: name,
                        countryname: countryname,
                        countryiso: countryiso,
                        characters: characters,
                        dialcode: dialcode,
                        etype: etype,
                        cid: parseInt(id)
                    };
                    axios.post("admin.savesitefieldmobile", postData)
                        .then((response) => {
                            let msg = response.data.msg;

                            if (msg == "ok")
                            {
                                $("#ssfn-mobile-name").val("");
                                $("#ssfn-mobile-characters").val("");
                                $("#myAlertMobileAddModal #ssfn-mobile-id").val("");

                                vueOBJ.getSFMobileList();

                                $("#myAlertMobileAddModal").modal("hide");
                            } else {
                                console.log(response.data.message);
                            }
                        })
                    .catch(function (error) {
                        console.log(error);
                    })
                }
            },
            deleteSiteMobile(id, value, vueOBJ) {
                let postData = {
                    id: id,
                    value: value
                };
                axios.post('admin.deletesitemobile', postData)
                    .then((response) => {
                        let msg = response.data.msg;
                        if (msg == "ok") {
                            vueOBJ.getSFMobileList();
                        } else {
                            console.log(response.data.msg);
                        }
                    })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }/*end method*/
    }
</script>

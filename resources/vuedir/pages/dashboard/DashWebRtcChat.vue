<template>
        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title">
                    <h3>WES CHAT</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; {{cmu_dash}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;WES CHAT
                          <a href="#" id="dashboard-chat-fav"  data-status="off" data-page-info="dashboard-chat">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card p-t-20 p-b-20 p-l-20 p-r-20 min-vh-60">
                        <div class="container p-0">
                            <div class="row videocontainer">
                                <div class="col-12 text-center p-2" style="background-color: antiquewhite;">
                                    Alibaba Cloud Live Video Stream
                                </div>
                                <div class="col-6 mt-3 mb-3" style="min-height:300px;">
                                    <video id="video" class="m-auto" controls muted style="width : 100%; height : 100%;" />
                                </div>
                                <div class="col-6 pl-0 mt-3 mb-3" style="min-height:300px;">
                                    <video id="rvideo" class="m-auto" controls muted style="width : 100%; height : 100%;" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6 mt-3 mb-3">
                                    <label for="pushurl">Push Url</label>
                                    <input type="text" class="form-control" name="pushurl" id="pushurl" value="artc://in.waaup.online/waaup/test" placeholder="artc://in.waaup.online/waaup/test" />
                                </div>
                                <div class="col-6 pl-0 mt-3 mb-3">
                                    <label for="pullurl">Pull Url</label>
                                    <input type="text" class="form-control" name="pullurl" id="pullurl" value="artc://live.waaup.online/waaup/test" placeholder="artc://live.waaup.online/waaup/test" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6 mt-3 mb-3">
                                    <label for="streamConfig">Type of Stream</label>
                                    <select class="form-control" id="streamConfig">
                                        <option value="none">Only audio</option>
                                        <option value="camera" selected>audio + camera</option>
                                        <option value="screen">audio + shard stream</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6 mt-3 mb-3">
                                    <div class="button-group d-flex">
                                        <button  class="btn btn-primary mr-3" type="button" id="createStreamButton">Create Stream</button>
                                        <button  class="btn btn-primary mr-3" type="button" id="removeStreamButton">Remove Stream</button>
                                        <button  class="btn btn-primary mr-3" type="button" id="pushButton">Push Start</button>
                                        <button  class="btn btn-primary mr-3" type="button" id="stopButton">Push Stop</button>
                                    </div>
                                </div>
                                <div class="col-6 pl-0 mt-3 mb-3">
                                    <div class="button-group d-flex">
                                        <button  class="btn btn-primary mr-3" type="button" id="isSupportButton">Supportive testing</button>
                                        <button  class="btn btn-primary mr-3" type="button" id="pullstart">pull start</button>
                                        <button  class="btn btn-primary mr-3" type="button" id="pullstop">pull stop</button>
                                    </div>
                                </div>
                            </div>
                            <div class="toast-wrap">
                                <span class="toast-msg"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<style>
[type=button] {
    background-color: #d49a07;
    color: white;
    display: block;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
[type=button]:disabled {
    background-color: rgba(59, 59, 59, 0.3);
    border-color: rgba(118, 118, 118, 0.3);
}
.toast-wrap{
    opacity: 0;
    position: fixed;
    top: 15%;
    color: #fff;
    width: 100%;
    text-align: center;
}
.toast-msg{
    font-size: 16px;
    background-color: #5f80ef;
    padding: 10px 20px;
    border-radius: 5px;
}
.toastAnimate{
    animation: toastKF 10s;
}
@keyframes toastKF{
    0% {opacity: 0;}
    25% {opacity: 1; z-index: 9999}
    50% {opacity: 1; z-index: 9999}
    75% {opacity: 1; z-index: 9999}
    100% {opacity: 0; z-index: 0}
}
</style>
<script>
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";
    import "aliyun-webrtc-sdk";
    import axios from "axios";
    var vueOBJ=null;
    var pgperm={};

    var video = null;
    var rvideo = null;
    var pushUrl = null;
    var streamConfigSelect = null;
    var createStream = null;
    var removeStream = null;
    var pushButton = null;
    var stopButton = null;

    var isSupportButton = null;
    var pullUrl = null;
    var pullstart = null;
    var pullstop = null;
    let localStream = null;

    const aliWebrtc = AliRtcEngine;

    function getStreamConfig() {
        let streamConfig = {audio: true}
        if(streamConfigSelect.value === 'camera') {
            streamConfig.video = true
        }else if(streamConfigSelect.value === 'screen') {
            streamConfig.screen = true
        }
        return streamConfig
    }

    function toast(msg){
        setTimeout(function(){
            document.getElementsByClassName('toast-wrap')[0].getElementsByClassName('toast-msg')[0].innerHTML=msg;
            var toastTag = document.getElementsByClassName('toast-wrap')[0];
            toastTag.className = toastTag.className.replace('toastAnimate','');
            setTimeout(function(){
                toastTag.className = toastTag.className + ' toastAnimate';
            }, 100);
        },500);
    }

    function initChatControllers(){
        video = document.getElementById("video");
        rvideo = document.getElementById("rvideo");
        pushUrl = document.getElementById("pushurl");
        streamConfigSelect = document.getElementById("streamConfig")
        createStream = document.getElementById("createStreamButton");
        removeStream = document.getElementById("removeStreamButton");
        pushButton = document.getElementById("pushButton");
        stopButton = document.getElementById("stopButton");

        isSupportButton = document.getElementById("isSupportButton");
        pullUrl = document.getElementById("pullurl");
        pullstart = document.getElementById("pullstart");
        pullstop = document.getElementById("pullstop");
    }

    function AddChatEvents(){
        aliWebrtc.on('onPublisher',(publisher) =>{
            //远程发布者userId
            console.log(publisher.userId);
            //远程发布名字
            console.log(publisher.displayName);
            //远程流内容，streamConfigs是数组。
            console.log(publisher.streamConfigs);
        });

        aliWebrtc.startPreview(
            video    // html中的video元素
        ).then(()=>{
            //预览成功
        }).catch((error) => {
            // 预览失败
        });
    }

    export default {
        data(){
            return {
                pageid:'dashboard-chat-fav',
                mu_dash:'',
                musu_dash_chat:''
            }
        },
	created() {

        },
        computed: {
            // 계산된 getter
            title: function () {
                return this.$store.state.curMenu
            },
            cmu_dash: function () {
                return this.mu_dash
            },
            cmusu_dash_chat: function () {
                return this.musu_dash_chat
            },

            contentchange: function () {//cckd
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    //console.log(obj.hasOwnProperty(key));
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });
                return this.$store.state.contentchange;
            },

        },
        mounted() {
            vueOBJ=this;
            /*
            pgperm = nav_module.data.getPagePermission(this.$store.state.permission, this.pageid);
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            */
            initChatControllers();
            AddChatEvents();
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

            }
        }
    }
</script>

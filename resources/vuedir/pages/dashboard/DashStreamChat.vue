<template>
        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title">
                    <h3>WES Live Video Stream</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; {{cmu_dash}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;WES Live Video Stream
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
                                    <label for="pushurl">Push Stream Name</label>
                                    <input type="text" class="form-control" name="pushurl" id="pushurl"  placeholder="test" />
                                </div>
                                <div class="col-6 pl-0 mt-3 mb-3">
                                    <label for="pullurl">Pull Stream Name</label>
<!--                                    <input type="text" class="form-control" name="pullurl" id="pullurl" placeholder="test" />-->
                                    <select class="form-control" name="pullurl" id="pullurl">
                                        <option value="">--select--</option>
                                    </select>

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
                                <div class="col-6 pl-0 mt-3 mb-3" style="display: flex; align-items: center;justify-content: center;">
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
    width: 70%;
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
    import "../../assets/jsfunc/aliyun-rts-sdk";
    //import "aliyun-rts-sdk";
    import axios from "axios";
    var vueOBJ=null;
    var pgperm={};

    var video = null;
    var rvideo = null;
    var pushUrlPre = 'artc://in.waaup.online/waaup/';
    var pushUrl = null;
    var streamConfigSelect = null;
    var createStream = null;
    var removeStream = null;
    var pushButton = null;
    var stopButton = null;

    var isSupportButton = null;
    var pullUrlPre = 'artc://live.waaup.online/waaup/';
    var pullUrl = null;
    var pullstart = null;
    var pullstop = null;
    let localStream = null;

    const aliRts = AliRTS.createClient();

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
        aliRts.on('onError', (err)=>{
            if(err.errorCode === 10201){
                toast("Autoplay failed")
            }
        });

        $(createStream).on('click', function() {
            let streamConfig = getStreamConfig();
            AliRTS.createStream(streamConfig).then((stream) => {
                localStream = stream;
                if(localStream.videoTrack) {
                    localStream.play(video)
                }
                createStream.disabled = true;
                removeStream.disabled = false;
                toast('Successfully created local stream ');
            }).catch((err)=> {
                toast('Failed to create local stream ' + JSON.stringify(err));
                console.log('Failed to create local stream ' + JSON.stringify(err));
            })
        })


        $(removeStream).on('click', function() {
            if(localStream) {
                localStream.stop();
                video.srcObject = null;
                createStream.disabled = false;
                removeStream.disabled = true;
                toast('Local stream removed successfully ');
            }
        })


        $(pushButton).on('click',function() {
            if(!localStream){
                toast('Please create a local stream first ')
                return
            }
            pushUrl.value = myjs.data.js_trim(pushUrl.value);
            if(!pushUrl.value || pushUrl.value==""){
                toast('Please enter the streaming name ')
                return
            }

            var streamname = pushUrlPre + pushUrl.value;
            aliRts.publish(streamname, localStream).then(() => {
                pushButton.disabled = true;
                stopButton.disabled = false;
                toast('Push Stream Success.');
            }).catch((err) => {
                toast('Push Stream fail : ' + JSON.stringify(err));
                console.log('Push Stream fail : ' + JSON.stringify(err));
            })
        })


        $(stopButton).on('click', () => {
            aliRts.unpublish();
            pushButton.disabled = false;
            stopButton.disabled = true;
            toast('Stop Streaming')
        })

        /* part of subscribe*/
        $(isSupportButton).on('click',()=>{
            aliRts.isSupport({
                isReceiveVideo: pullUrl.value.indexOf('subvideo=no') === -1
            }).then(re => {
                console.log(re);
                toast("Current environment support " + (pullUrl.value.indexOf('subvideo=no') === -1 ? 'Audio and video' : 'Pure audio') + "model")
            }).catch(err => {
                toast(err.message)
            })
        })

        $(pullstart).on('click',function() {

            $(pullstop).bind("click");

            pullUrl.value = myjs.data.js_trim(pullUrl.value);
            if(!pullUrl.value|| pullUrl.value==""){
                toast('Please select the streaming name ')
                return
            }
            var streamname = pullUrlPre + pullUrl.value;
            aliRts.subscribe(streamname).then((remoteStream) => {
                let media = rvideo;
                remoteStream.play(media);
                pullstart.disabled = true;
                pullstop.disabled = false;
            })
        })

        $(pullstop).on('click', () => {
            aliRts.unsubscribe();
            pullstart.disabled = false;
            pullstop.disabled = true;
        })
    }

   function streamChange()
    {
       /* aliRts.unsubscribe();
        pullstart.disabled = false;
        pullstop.disabled = true;
        pullUrl.value = myjs.data.js_trim(pullUrl.value);
        if(!pullUrl.value|| pullUrl.value==""){
            toast('Please select the streaming name ')
            return
        }

        setTimeout(function() {
            var streamname = pullUrlPre + pullUrl.value;
            aliRts.subscribe(streamname).then((remoteStream) => {
                let media = rvideo;
                remoteStream.play(media);
                pullstart.disabled = true;
                pullstop.disabled = false;
            })
        },1000);*/

        $(pullstop).bind("click");

    }

    export default {
        data(){
            return {
                pageid:'dashboard-chat-fav',
                mu_dash:'',
                musu_dash_chat:'',
                streamlist:[],
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

            this.getStreamList();
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
            getStreamList(){
                $.ajax({
                    method: "POST",
                    url: "admin.getStreamList",
                    success: function(data) {
                        if(data.msg=="ok")
                        {
                            var lists = data.lists;
                            var TotalNum=lists.TotalNum;
                            var TotalPage=lists.TotalPage;
                            var PageNum=lists.PageNum;
                            var PageSize=lists.PageSize;
                            var LiveStreamOnlineInfo=lists.OnlineInfo.LiveStreamOnlineInfo;
                            this.streamlist = LiveStreamOnlineInfo;
                            if(this.streamlist.length > 0) {
                                pullUrl.innerHTML = '';

                                for (var i = 0; i < this.streamlist.length; i++) {
                                    const option = document.createElement('option');
                                    option.value = this.streamlist[i].StreamName;
                                    option.text = this.streamlist[i].StreamName;
                                    pullUrl.appendChild(option);
                                }

                                pullUrl.selectedIndex = 0;
                                pullUrl.onchange = streamChange;
                            }

                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            }
        }
    }
</script>

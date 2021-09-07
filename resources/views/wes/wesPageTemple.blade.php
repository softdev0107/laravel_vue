@extends('layouts.template_layout')
@section('content')
    <style>
        .top_arrow_btn{
            position: absolute;
            width: 30px;
            height: 30px;
            background-color: #5c6bc0;
            cursor: pointer;
            line-height: 26px;
            text-align: center;
            display: block;
            z-index: 9999;
        }
    </style>
    <section class="section-main" style="background: white;">
        <div style="flex-direction: column; justify-content: center; align-items: center; display: flex;">
            <div class="row no-gutters" style="background-color: white; width: 100%; height: 100%">
                <div class="container" style="padding-top: 20px;padding-bottom: 20px;">
                    <div class="row no-gutters  no-gutters flex-row justify-content-between h-100">
                        <div class="col-lg-10 col-sm-7 h-100" id="pgtempcontent" style="overflow-x: auto;">
                            <p style="width: 100%; text-align: center; font-size: 20px; font-weight: bold;"><?php echo $title; ?></p>
                            <p style="width: 100%; text-align: center; font-size: 15px;">
                                <?php
                                if($auth_state == 0){
                                ?>
                                    <span>{{$frtxt['frtxt_author']}} : </span><span><?php echo $author; ?></span>&nbsp;&nbsp;&nbsp;
                                <?php
                                }
                                if($type_state == 0){
                                ?>
                                    <span>{{$frtxt['frtxt_type']}} : </span><span><?php echo $pagetype; ?></span>&nbsp;&nbsp;&nbsp;
                                <?php
                                }
                                if($date_state == 0){
                                ?>
                                <span><?php echo $created_at; ?></span></p>
                                <?php
                                }
                                ?>
                            <?php
                             $cont = html_entity_decode($pagecontent);
                             $cont = str_ireplace('/uploads/images','uploads/images', $cont);
                             $cont = str_ireplace('uploads/images','/uploads/images', $cont);
                              echo html_entity_decode($cont);
                            ?>
                        </div>
                        <div class="col-lg-2 col-sm-5 h-100" id="wes-front-template-slider-area" style="padding-left: 90px;">
{{-- service part --}}
                            @if(count($silderpages) > 0)
                                <div class="temple_menu">
                                    <aside class="widget widget_text student-txt-area">
                                        <h4 class="student-txt-h4" style="font-size: 16px; font-weight: bold; color: #3859ad; margin-bottom: 1.8vh/*20px*/">
                                            {{$pagetype}}
                                        </h4>
                                        <div class="textwidget" id="sbmuservice">
                                            <ul style="list-style: none outside; margin: 0; padding: 0;">
                                                <?php
                                                $i=1;
                                                ?>
                                                @foreach ($silderpages as $page)
                                                <li style="margin-bottom: 0.9vh/*10px*/">
                                                    <a href="{{urldecode($page->url)}}" style=" font-size:14px;  color:#545454;">{{$i}}. {{$page->title}}</a>
                                                </li>
                                                    <?php
                                                        $i++;
                                                    ?>
                                                @endforeach
                                            </ul>
                                        </div>
                                    </aside>
                                </div>
                            @endif
{{-- advertising part--}}
                           {{-- <div class="temple_advertt" style="margin-top:2rem">
                                <aside class="widget widget_text student-txt-area">
                                    <h4 class="student-txt-h4" style="font-size: 16px; font-weight: bold; color: #3859ad; margin-bottom: 0">
                                        advertising
                                    </h4>
                                    <div class="textwidget">
                                        <div class="advert-grid-container">
                                            <div class="advert-grid-item">
                                                <img src="/uploads/images/wesimg/facebook.png" style="width: 100%; height: 100%;" onerror="this.src ='/images/noimg.png';">
                                            </div>
                                            <div class="advert-grid-item">
                                                <img src="/uploads/images/wesimg/twitter.png" style="width: 100%; height: 100%;" onerror="this.src ='/images/noimg.png';">
                                            </div>
                                            <div class="advert-grid-item">
                                                <img src="/uploads/images/wesimg/wechat.png" style="width: 100%; height: 100%;" onerror="this.src ='/images/noimg.png';">
                                            </div>
                                            <div class="advert-grid-item">
                                                <img src="/uploads/images/wesimg/facebook.png" style="width: 100%; height: 100%;" onerror="this.src ='/images/noimg.png';">
                                            </div>
                                            <div class="advert-grid-item">
                                            </div>
                                            <div class="advert-grid-item">
                                                <img src="/uploads/images/wesimg/facebook.png" style="width: 100%; height: 100%;" onerror="this.src ='/images/noimg.png';">
                                            </div>
                                            <div class="advert-grid-item">
                                                <img src="/uploads/images/wesimg/facebook.png" style="width: 100%; height: 100%;" onerror="this.src ='/images/noimg.png';">
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>--}}
                            {{-- related part --}}
                            <div class="temple_relate" style="margin-top:2rem">
                                <aside class="widget widget_text student-txt-area">
                                    <h4 class="student-txt-h4" style="font-size: 16px; font-weight: bold; color: #3859ad; margin-bottom: 1.8vh/*20px*/">
                                        Related
                                    </h4>
                                    <div class="textwidget" id="sbmuservice">
                                        <ul style="list-style: none outside; margin: 0; padding: 0;">
                                            <li style="margin-bottom: 0.9vh/*10px*/">
                                                <a class="wesfootlist1 md-opjjpmhoiojifppkkcdabiobhakljdgm_doc" href="/Service/ourserviece" style=" font-size:14px;  color:#545454;" data-cont="/Service/ourserviece">1. our serviece</a>
                                            </li>
                                            <li style="margin-bottom: 0.9vh/*10px*/">
                                                 <a class="wesfootlist1 md-opjjpmhoiojifppkkcdabiobhakljdgm_doc" href="/Service/ourfurture" style=" font-size:14px;  color:#545454;" data-cont="/Service/ourfurture">2. our furture</a>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>

                         </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="top_arrow_btn">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 261.808 261.808" style="enable-background:new 0 0 261.808 261.808; width: 15px; height: 15px;" xml:space="preserve">
                <g><path style="fill:#ffffff;" d="M260.485,160.384L135.686,19.409c-2.42-2.73-6.331-2.736-8.757-0.011L1.33,160.389
                c-2.426,2.73-1.441,4.928,2.203,4.928h79.144v72.546c0,3.644,2.953,6.587,6.592,6.587h83.267c3.639,0,6.592-2.948,6.592-6.587
                v-72.546h79.138C261.91,165.317,262.906,163.114,260.485,160.384z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
        </div>
    </section>


    <script>

        $(document).ready(function() {

            function offset_left(){
                var area_obj = $("#wes-front-template-slider-area").offset();
                return area_obj.left;
            }
            function realtime_top(){
                var header = document.getElementById("myheader");
                var header_off = header.offsetTop+10;
                var sticky = false;
                if (window.pageYOffset > header_off)
                    sticky = true;

                var headerTopBar_h = $("#headerTopBar").outerHeight();
                var headerTopBarArea_h = $("#headerTopBarArea").outerHeight();
                //var foottopH = $('section.section-foot').outerHeight() + 80;
                var arrowtop = Number($(window).scrollTop() + $(window).height()) - (headerTopBar_h + headerTopBarArea_h + 60);
                if(sticky)
                    arrowtop = Number($(window).scrollTop() + $(window).height()) - (headerTopBar_h + headerTopBarArea_h + 5);

                return arrowtop;
            }

            var section_height = $(".section-main").height();
            var content_height = $("#pgtempcontent").height();
            if(section_height > content_height){
                $(".section-main").attr('style', 'background: white; height:calc(100vh - 10.8vh/*120px*/ - 27vh);');
            }
            else{
                $(".section-main").attr('style', 'background: white; height:auto !important;');
            }
            var foottopH = $('section.section-foot').outerHeight() + 80;
            var footofftop = $('section.section-foot').offset().top;
            var btn_top = realtime_top();
            if(footofftop < $(window).height())
                btn_top = footofftop - 145;
            else if(btn_top > ($(document).height() - foottopH))
                btn_top = footofftop - 145;
           /* console.log(Number($(window).scrollTop() + $(window).height()));
            console.log($(document).height());
            console.log(btn_top);
            console.log(footofftop);*/
            $('.top_arrow_btn').css({left: Number(offset_left() + 45) +'px', top :btn_top +'px'});

           /* if(Number($(window).scrollTop()) > 10){
                $('html,body').animate({scrollTop: 0});
            }*/

            $('.top_arrow_btn').click(function (e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: $("#page-container-logbk-reg").offset().top
                }, 500);
            });


            $(window).scroll(function() {
                var btn_top = realtime_top();
                var foottopH = $('section.section-foot').outerHeight() + 80;
               if(btn_top < ($(document).height() - foottopH)) {
                    $('.top_arrow_btn').css({top : btn_top +'px'});
                }
            });

            $( window ).resize(function()
            {
                var foottopH = $('section.section-foot').outerHeight() + 80;
                var footofftop = $('section.section-foot').offset().top;
                if(footofftop < $(window).height()){
                    var btn_top  = footofftop - 145;
                    $('.top_arrow_btn').css({left: Number(offset_left() + 45) +'px',top : btn_top +'px'});
                }
                else
                {
                    $('.top_arrow_btn').css({left: Number(offset_left() + 45) +'px'});
                    var btn_top = realtime_top();
                    if(btn_top < ($(document).height() - foottopH)) {
                        $('.top_arrow_btn').css({top : btn_top +'px'});
                    }
                }

            });

        });

    </script>
@endsection

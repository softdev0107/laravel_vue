<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="/uploads/images/wesimg/logo/{{$favicoImg}}">
    <link rel="stylesheet" href="{{asset('/mobile/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('/fonts/fontawesome-all.min.css')}}">
    <link rel="stylesheet" href="{{asset('/fonts/ionicons.min.css')}}">
    <link rel="stylesheet" href="{{asset('/mobile/css/wes-mobile.css')}}">
    <title>{{$sitetitle}}</title>
</head>

<body id="page-top">
<!-- start nav bar -->
<nav class="navbar navbar-light navbar-expand-lg fixed-top nav-theme-gradient-color text-uppercase" id="mainNav">
    <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <div class="row">
                <div class="col-auto">
                    @if(!empty($logoImg))
                        <img class="img-fluid" src="/uploads/images/wesimg/logo/{{$logoImg}}" alt="logo" id="logostar" class="logo star" style="width: 33px;height: 33px;" onerror="this.src ='/images/noimg.png';">
                    @endif
                </div>
                @if(!empty($logoImg) && !empty($extralogoImg))
                <div class="col ls_vline"></div>
                @endif
                <div class="col-auto">
                    @if(!empty($extralogoImg))
                      <img class="img-fluid" src="/uploads/images/wesimg/logo/{{$extralogoImg}}" alt="logo" id="logoflw" class="logo flw" style="width: 67px;height: 33px;" onerror="this.src ='/images/noimg.png';">
                    @endif
                </div>
                <div class="col">
                    &nbsp;&nbsp;
                </div>
            </div>
        </a>
        <button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" style="background: #3353a1!important;padding: 0;font-size: 100%;">
            <i class="fa fa-bars" style="/*font-size: 100%;*/"></i></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="nav navbar-nav ml-auto">
                <?php
                $i=0;
                ?>
                    @foreach ($topmenus as $mu)
                        <?php
                        $menusp=explode(':', $mu);
                        $menu=$menusp[0];
                        $link= urldecode($menusp[1]);
                        $marginleft='';
                        $active='';
                        $pos = false;
                        if(!empty($link) && !empty($curMU))
                            $pos = strpos($link, $curMU);

                        if($curMU!='' && $pos !== false)
                            $active='active';
                        ?>
                        <li class="nav-item mx-0 mx-lg-1" role="presentation">
                            <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger {{$active}}" data-idx="{{$i}}" data-cont="{{$link}}" title="{{$menu}}" href="/{{$link}}">{{$menu}}</a>
                        </li>
                    <?php
                    $i++;
                    ?>
            @endforeach
          </ul>
        </div>
    </div>
</nav>
<!-- end nav bar -->
<!-- star top bar -->
<section id="nav-top" class="fixed-top">
    <div class="d-flex align-items-center justify-content-between nav-top-container bg-theme-color pr-1">
        <div class="col-auto pr-1" style="color: white; width: 40px;">
            <i class="fas fa-map-marker-alt" aria-hidden="true" @if($toplocation==='off')style="display: none"@endif></i>
        </div>
        <div class="col-auto white-color pl-0" id="topcountrycity" style="padding-left: 5px !important; @if($toplocation==='off') display:none; @endif">
            {{$countrycity}}
        </div>
        <div class="col">
        </div>
        <div class="col-auto">
            <ul class="nav navbar-nav ml-auto">
                <li class="nav-item dropdown lanug-dropdown">
                    @if($ciso!=null && $ciso!='')
                        @foreach($langs as $lang)
                            @if($lang->iso == $ciso)
                                <a class="dropdown-toggle nav-link lang-dropdown-a" data-toggle="dropdown" aria-expanded="false" href="#">{{$lang->name}}</a>
                            @endif
                        @endforeach
                    @endif
                        <?php
                        $Length = 0;
                        ?>
                    <div class="dropdown-menu" role="menu" id="langDropdownList">
                        @if($langs!=null && $langs!='')
                            <?php
                            $fontSize = 14;
                            ?>
                                @foreach($langs as $lang)
                                    <?php
                                    $textLength = imagefontwidth($fontSize) * strlen($lang->name);
                                    if($Length < $textLength)
                                        $Length = $textLength;
                                    $idstr=$lang->iso.'-'.$lang->dialcode.'-'.$lang->name;
                                    ?>
                        <a class="dropdown-item" id="scEnabledLangs_{{$idstr}}" role="presentation" href="/{{$lang->iso}}">{{$lang->name}}</a>
                                @endforeach
                        @endif
                    </div>
                        <input type="hidden" id="textlen" value="<?php echo $Length; ?>">
                </li>
            </ul>
        </div>
    </div>
</section>
<!-- end top bar -->

@yield('content')

<!-- start service -->
<section id="serviceList" class="bg-theme-color-1 text-white mb-0">
    <!--start news-->
    @if($footmenus!=='')
        <div class="container" id="sbmuNews">
            @if($menu2style === 'normal')
                <h6 class="text-uppercase text-white" style="margin-bottom: 1.1rem">
                    {{$menu2fonttitle}}
                </h6>
                <div class="row d-flex flex-wrap justify-content-left">
                    <?php
                    $servicelist = array();
                    $fontclr='';
                    $fontsize='';
                    ?>
                    @if($menu2contlinks !=='')
                        <?php
                        $servicelist = explode(',',$menu2contlinks);
                        $fontclr=' color:'.$menu2fontcolor.';';
                        $fontsize=' font-size:'.$menu2fontsize.'px;';
                        ?>
                        @foreach ($servicelist as $mu)
                            <?php
                            $menusp=explode(':', $mu);
                            $menu=$menusp[0];
                            if(!empty($menusp[1]))
                                $link=urldecode($menusp[1]);
                            else
                                $link='#';
                            ?>
                            <div class="col-auto">
                                <a class="lead a_underline" href="{{$link}}" data-cont="{{$link}}">{{$menu}}</a>
                            </div>
                        @endforeach
                    @endif
                </div>
            @else
                <script type="text/javascript">
                var tag = '{{ $edit2 }}';
                 $('#sbmuNews').html(htmldecodejs(tag));
            </script>
            @endif
            <div class="row border-bottom-line">&nbsp;</div>
        </div>
    @endif
<!--start about-->
    @if($footmenus!=='')
        <div class="container pt-4" id="sbmuaboutus">
            @if($menu1style === 'normal')
                <h6 class="text-uppercase text-white" style="margin-bottom: 1.1rem">
                    {{$menu1fonttitle}}
                </h6>
                <div class="row d-flex flex-wrap justify-content-left">
                    <?php
                    $servicelist = array();
                    $fontclr='';
                    $fontsize='';
                    ?>
                    @if($menu1contlinks !=='')
                        <?php
                        $servicelist = explode(',',$menu1contlinks);
                        $fontclr=' color:'.$menu1fontcolor.';';
                        $fontsize=' font-size:'.$menu1fontsize.'px;';
                        ?>
                        @foreach ($servicelist as $mu)
                            <?php
                            $menusp=explode(':', $mu);
                            $menu=$menusp[0];
                            if(!empty($menusp[1]))
                                $link=urldecode($menusp[1]);
                            else
                                $link='#';
                            ?>
                            <div class="col-auto">
                                <a class="lead a_underline" href="{{$link}}" data-cont="{{$link}}">{{$menu}}</a>
                            </div>
                        @endforeach
                    @endif
                </div>
            @else
                <script type="text/javascript">
                var tag = '{{ $edit1 }}';
                 $('#sbmuaboutus').html(htmldecodejs(tag));
            </script>
            @endif
            <div class="row border-bottom-line">&nbsp;</div>
        </div>
    @endif
<!-- start service -->
    @if($footmenus!=='')
        <div class="container pt-4" id="sbmuservice">
            @if($menu0style === 'normal')
                <h6 class="text-uppercase text-white" style="margin-bottom: 1.1rem">
                    {{$menu0fonttitle}}
                </h6>
                <div class="row d-flex flex-wrap justify-content-left">
                    <?php
                    $servicelist = array();
                    $fontclr='';
                    $fontsize='';
                    ?>
                    @if($menu1contlinks !=='')
                        <?php
                        $servicelist = explode(',',$menu0contlinks);
                        $fontclr=' color:'.$menu0fontcolor.';';
                        $fontsize=' font-size:'.$menu0fontsize.'px;';
                        ?>
                        @foreach ($servicelist as $mu)
                            <?php
                            $menusp=explode(':', $mu);
                            $menu=$menusp[0];
                            if(!empty($menusp[1]))
                                $link=urldecode($menusp[1]);
                            else
                                $link='#';
                            ?>
                            <div class="col-auto">
                                <a class="lead a_underline" href="{{$link}}" data-cont="{{$link}}">{{$menu}}</a>
                            </div>
                        @endforeach
                    @endif
                </div>
            @else
                <script type="text/javascript">
                var tag = '{{ $edit0 }}';
                 $('#sbmuservice').html(htmldecodejs(tag));
            </script>
            @endif
            <div class="row border-bottom-line">&nbsp;</div>
        </div>
@endif
<!-- start social -->
    <div class="container pt-4">
        <h6 class="text-uppercase text-white" style="margin-bottom: 1.1rem">{{$frtxt['frtxt_socialmedia']}}</h6>
        <div class="row d-flex flex-wrap justify-content-left">
            <?php
            $icon_path = "/uploads/images/wesimg/icons/";
            if(isset($socialsetting))
                $instrjson = json_decode($socialsetting);
            else
                $instrjson = '';

            $imgidx=1;
            $g_idx=0;
            ?>

            @if($instrjson !=='' && $instrjson !==null)
                @foreach ($instrjson as $key => $item)
                    <?php
                    $i_imgpos = strpos($key, 'i_img');
                    $i_linkpos = strpos($key, 'i_link');
                    $h_imgpos = strpos($key, 'h_img');
                    $h_linkpos = strpos($key, 'h_link');
                    $i_img="";
                    $i_link="";
                    $h_img="";
                    $h_link="";
                    if($i_imgpos !==false)
                    {
                        $i_img = isset($item) ? $item : "";
                        $g_idx++;
                    }
                    if($i_linkpos !==false)
                    {
                        $i_link = isset($item) ? $item : "";
                        $g_idx++;
                    }
                    if($h_imgpos !==false)
                    {
                        $h_img = isset($item) ? $item : "";
                        $g_idx++;
                    }
                    if($h_linkpos !==false)
                    {
                        $h_link = isset($item) ? $item : "";
                        $g_idx++;
                    }
                    ?>
                    @if($i_img !== "")
                        <div class="col-auto" style="margin-bottom: 0.5rem">
                            <a href="{{$i_link}}" class="lead social_org_img active"  id="social-org_{{$imgidx}}" data-idx="{{$imgidx}}" data-link="{{$i_link}}" target="_blank">
                                <img class="img-fluid social-img" src="{{$icon_path}}{{$i_img}}" id="social-iimg_{{$imgidx}}">
                            </a>
                            @if($h_img !== "")
                                <a href="#" class="lead social_hover_img"  id="social-hover_{{$imgidx}}" data-idx="{{$imgidx}}" data-link="{{$i_link}}" target="_blank">
                                    <img class="img-fluid social-img" src="{{$icon_path}}{{$h_img}}" id="social-himg_{{$imgidx}}">
                                </a>
                            @endif
                        </div>
                    @endif
                    <?php
                    $imgidx++;
                    $g_idx = 0;
                    ?>
                @endforeach
            @endif

        </div>
        {{--  <div class="row border-bottom-line">&nbsp;</div>--}}
    </div>
    <!-- end social-->
</section>

{{--start foot bar --}}
<div class="bg-theme-color-1 py-4 text-left text-white">
    <div class="container">
        @if($footbar!=='')
            @if(!empty($barcentfontcont))
              <small>
                  {{ $barcentfontcont }} &nbsp;
                  @if(!empty($barrightfontcont))
                      {{ $barrightfontcont }}
                  @endif
              </small>
            @endif
        @endif
    </div>
</div>
{{-- end foot bar --}}

{{-- start scroll arrow --}}
<div class="d-lg-none scroll-to-top position-fixed rounded">
    <a class="d-block js-scroll-trigger text-center text-white rounded" href="#page-top">
        <i class="fa fa-chevron-up"></i>
    </a>
</div>
{{-- end scroll arrow --}}

<script src="{{asset('/js/jquery/3.4.1/jquery-3.4.1.min.js')}}"></script>
<script src="{{asset('/mobile/js/bootstrap.min.js')}}"></script>
<script src="{{asset('/mobile/js/jquery.easing.min.js')}}"></script>
<script src="{{asset('/mobile/js/wes_m_anitop.min.js')}}"></script>

<script type="text/javascript">
    $(document).ready(function () {
        function success(position) {
            $('#topcountrycity').text(position.coords.latitude + ',' + position.coords.longitude);
        }

        function error(err) {
            console.log(err);
        }

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success, error);
            } else {
                alert('Geolocation is not supported by this browser.');
            }
        }


        function SocialEnvent(){
            $('a.social_org_img').on('mouseover', function () {
                var idx= $(this).data('idx');
                $('#social-hover_'+idx).addClass('active');
            });

            $('a.social_org_img').on('mouseleave', function () {
                var idx= $(this).data('idx');
                $('#social-hover_'+idx).removeClass('active');
            });

            $('a.social_org_img').click(function () {
                var link = $(this).attr('data-link');
                link = link.replace('http', '');
                window.location.href = 'http://'+link;
            });

            $('#topcountrycity').on('mouseover', function () {
                $('#location_desc').css('display', 'block');
            });

            $('#topcountrycity').on('mouseleave', function () {
                $('#location_desc').css('display', 'none');
            });
        }

        SocialEnvent();

        var toplocation = '{{$toplocation}}';
        if (toplocation === 'on') {
            $.ajax({
                url: "https://geolocation-db.com/jsonp/7733a990-ebd4-11ea-b9a6-2955706ddbf3",
                jsonpCallback: "callback",
                dataType: "jsonp",
                async: true,
                success: function (location) {
                    if (location !== undefined && location !== null && location !== '') {
                        //$('#topcountrycity').text(location.country_name + ',' + location.state);
                        var locationname = location.country_name + ',' + location.state;
                        if(location.country_name == 'Not found' || location.state == 'Not found')
                        {
                            locationname = 'Unknown';
                        }
                        var ciso = '{{$ciso}}';
                        $.ajax({
                            method: "POST",
                            url: "/admin.getTranslateString",
                            data: {
                                trans_str:locationname,
                                iso:ciso
                            },
                            statusCode: {
                                404: function() {
                                    return false;
                                }
                            },
                            success: function(response) {
                                if(response.msg=="ok")
                                {
                                    $('#topcountrycity').text(response.location);
                                }
                                else //response.status=="dberr"
                                {
                                    alert('Error  in Database.');
                                }
                            }
                        });
                    }
                    else
                        getLocation();
                },
                error: function error(jqXHR, errdata, errorThrown) {
                    console.log(errdata);
                }
            });
        }

    });

    var curmu='{{$curMU}}';
    function ShowBackground() {
        //$('.home_mark_slider_img').hide(2000);
        $('.home_mark_slider_img').fadeOut(2000);
    }
    /*
    if(curmu!==undefined && curmu!==null && curmu!=='' && curmu==='home'){
                var myVar = setTimeout(ShowBackground, 500);
    }
    */
    window.addEventListener("load", event => {
        var image = document.querySelector('img');
        var load = image.complete;
        if(load){
            if(curmu!==undefined && curmu!==null && curmu!=='' && curmu==='home'){
                var myVar = setTimeout(ShowBackground, 200);
            }
        }
    });
</script>
</body>

</html>

<!-- resources/views/layouts/home_layout.blade.php -->
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="/uploads/images/wesimg/logo/{{$favicoImg}}">
    <link rel="stylesheet" href="{{asset('/bootstrap/4.4.1/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('/fonts/fontawesome-all.min.css')}}">
    <link rel="stylesheet" href="{{asset('/fonts/ionicons.min.css')}}">

    <link rel="stylesheet" href="{{asset('/c_js/css/intlTelInput.css')}}">
    <link rel="stylesheet" href="{{asset('/css/app.css')}}">

  <!-- jQuery library -->
    <script type="text/javascript" src="{{asset('/js/jquery/3.4.1/jquery-3.4.1.min.js')}}"></script>
    <!-- Latest compiled JavaScript -->
    <script type="text/javascript" type="text/javascript" src="{{asset('/bootstrap/4.4.1/js/bootstrap.bundle.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('/js/common.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/wes-default.js')}}"></script>

    <title>{{$sitetitle}}</title>
    <style>
        .iti__flag.only-text{
            background-image:none;
            background-color:white;
            color: #2e4b94;
            font-weight: bold;
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
        }
        .social-grid.grid-item{
            position: relative;
        }
        .social-grid.grid-item img{
            cursor: pointer;
        }
        .social-grid.grid-item .social_org_img{
            display: none;
        }
        .social-grid.grid-item .social_org_img.active{
            display: block;
        }
        .social-grid.grid-item .social_hover_img{
            position: absolute;
            display: none;
            left: 2px;
            top:-30px;
        }
        .social-grid.grid-item .social_hover_img.active{
            position: absolute;
            left: -2px;
            top: -35px;
            display: block;
            box-shadow: 1px 1px 3px 3px #aaaaaa;
            border-radius: 2px;
            padding: 3px;
            z-index: 999;
            background:white;
        }
        .home_mark_slider_img{
            width: 100%;
            /*height: calc(100% - 11%);*/
            height:100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 999;
            text-align: center;
            background-color: white;
        }
        .home_mark_slider_img_svg_container{
            width: 100%;
            margin-top: calc(100vh/2 - 20vh);
        }

        #social_site_link{
            grid-template-columns: auto auto auto auto;
        }

    </style>
</head>

<body style="min-width: 1250px;">
{{-- bk marker --}}
<?php
 $bkdis="none";
 if(isset($curMU) && !empty($curMU) && $curMU==='home')
    $bkdis="block";
?>
<div class="home_mark_slider_img" style="display:{{$bkdis}}">
    <div class="home_mark_slider_img_svg_container">
        <svg version="1.1" id="svg_mask_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width="210px" height="122px" viewBox="0 0 210 122" enable-background="new 0 0 210 122" xml:space="preserve" fill="#2e4b94">
            <path  d="M34.683,17.008c-0.425,0.701-0.405,1.662-1.147,3.082c-0.233,0.658-0.346,1.691-0.939,2.9
                c-0.127,0.191-0.298,0.285-0.51,0.285c0.021,0-1.604-0.377-3.672-1.129c-2.067-0.752-3.77-1.129-5.105-1.129
                c-3.902,0-5.854,1.719-5.854,5.152c0,1.91,1.367,3.574,4.104,4.996c4.603,2.396,7.147,3.775,7.635,4.135
                c2.736,2.186,4.104,5.133,4.104,8.846c0,4.752-1.877,8.492-5.631,11.229c-3.372,2.461-7.519,3.689-12.439,3.689
                c-2.29,0-4.022-0.252-4.191-0.762c-0.085-0.807,0.024-1.984-0.271-3.531c-0.171-0.637-0.235-1.592-0.595-2.865
                c-0.064-0.189-0.096-0.369-0.096-0.539c0-0.297,0.159-0.445,0.478-0.445c0.509,0,1.288,0.053,2.338,0.158
                c1.05,0.107,1.84,0.16,2.37,0.16c6.574,0,9.862-2.121,9.862-6.361c0-2.08-1.326-3.885-3.978-5.41
                c-4.835-2.756-7.306-4.189-7.412-4.295c-2.672-2.164-4.008-5.068-4.008-8.717c0-3.943,1.293-7.105,3.881-9.48
                c2.524-2.291,5.79-3.436,9.799-3.436c1.696,0,3.646,0.275,5.854,0.826c2.396,0.615,3.898,1.357,5.106,2.229
                C34.471,16.68,34.576,16.818,34.683,17.008z"/>
            <path   d="M57.572,52.574c0,0.469-0.044,1.104-0.129,1.91c-0.105,0.996-0.169,1.645-0.189,1.939
                c-0.022,0.383-0.054,0.615-0.096,0.703c-0.085,0.146-0.286,0.295-0.604,0.443c-1.739,0.828-4.476,1.242-8.208,1.242
                c-4.963,0-7.444-2.248-7.444-6.746c0-1.803,0.042-4.512,0.127-8.127c0.085-3.617-0.274-6.326-0.274-8.129
                c0-0.869-0.435-1.336-1.305-1.4c-0.784,0-1.156-0.01-1.92-0.031c-0.446-0.107-0.669-0.975-0.669-2.609
                c0-0.613,0.043-1.262,0.128-1.939c0.063-0.51,0.402-0.818,1.018-0.924c0.53,0,1.05-0.01,1.56-0.031
                c0.975-0.041,1.463-0.477,1.463-1.305c0-0.848-0.026-1.424-0.079-3.162c-0.054-1.738-0.08-2.123-0.08-2.992
                c0-1.549,0.297-2.324,0.892-2.324c0.19,0,2.184,0.328,5.979,0.988c0.488,0.063,0.732,0.295,0.732,0.699
                c0,0.932-0.068,1.412-0.207,3.279c-0.138,1.865-0.207,2.547-0.207,3.48c0,0.615,0.287,0.922,0.859,0.922h7.636
                c0.359,0,0.54,0.127,0.54,0.383c0,0.254-0.037,0.662-0.111,1.225s-0.11,0.98-0.11,1.256c0,0.318,0.01,0.807,0.031,1.463
                c0.021,0.658,0.032,1.146,0.032,1.465c0,0.402-0.298,0.604-0.892,0.604c-0.848,0-2.131-0.059-3.849-0.174
                c-1.719-0.117-2.901-0.176-3.75-0.176c-0.169,0-0.297,0.604-0.381,1.814c-0.106,1.506-0.26,3.615-0.26,6.33v4.74
                c0,1.824,0.17,3.096,0.51,3.818c0.509,1.102,1.559,1.654,3.148,1.654c0.657,0,1.623-0.146,2.896-0.432s2.216-0.43,2.831-0.43
                C57.443,52.002,57.572,52.193,57.572,52.574z"/>
            <path   d="M91.58,29.877c0,1.547-0.063,3.584-0.191,6.713c-0.127,3.129-0.19,5.477-0.19,7.047
                c0,1.547,0.048,3.865,0.143,6.949c0.096,3.088,0.144,5.404,0.144,6.953c0,0.426-0.202,0.701-0.604,0.828
                c-0.17,0.043-2.322,0.063-6.458,0.063c-0.254,0-0.409-0.094-0.461-1.684c-0.054-1.592-0.176-1.885-0.366-1.885
                c-0.106,0-0.266,0.096-0.478,0.287c-3.543,3.074-7.042,3.408-10.498,3.408c-4.688,0-7.783-1.697-9.29-5.092
                c-0.934-2.098-1.399-5.873-1.399-11.322c0-4.922,0.393-9.088,1.178-12.506c0.19-0.826,0.54-1.238,1.049-1.238
                c0.615,0,1.538,0.313,2.768,0.332c1.23,0.021,2.153-0.27,2.769-0.27c0.424,0,0.637,0.234,0.637,0.701
                c0,0.826-0.139,2.205-0.414,4.137c-0.298,2.055-0.457,3.508-0.478,4.357c-0.063,1.271-0.096,2.672-0.096,4.199
                c0,3.711,0.266,6.203,0.796,7.475c0.912,2.291,2.938,3.438,6.076,3.438c1.336,0,2.916-0.658,4.74-1.973
                c1.93-1.379,2.927-2.705,2.991-3.977c0.105-1.592,0.158-6.889,0.158-16.498c0-1.039,0.435-1.557,1.305-1.557l5.249-0.303
                C91.272,28.461,91.58,29.135,91.58,29.877z"/>
            <path   d="M128.141,14.25c0,2.736,0.078,6.635-0.165,12.096c-0.244,5.461-0.064,9.549-0.064,12.264
                c0,8.379,0.18,14.721,0.54,19.025l0.032,0.412c0.021,0.213-0.266,0.352-0.858,0.414c-0.404,0.041-0.977,0.041-1.719,0
                c-0.892-0.063-1.305-0.094-1.24-0.094c-0.318,0-0.785,0.031-1.399,0.094c-0.616,0.064-1.082,0.096-1.4,0.096
                c-0.297,0-0.473-0.736-0.525-2.211c-0.053-1.473-0.133-2.221-0.238-2.244c-0.127,0.066-0.286,0.201-0.477,0.414
                c-2.907,3.139-6.247,4.709-10.021,4.709c-4.284,0-7.805-1.633-10.563-4.898c-2.608-3.074-3.913-6.789-3.913-11.135
                c0-4.518,1.315-8.314,3.945-11.389c2.757-3.227,6.05-4.535,10.483-4.535c2.672,0,5.307,0.482,7.3,2.053
                c0.912,0.785,1.914,1.58,2.805,2.385c0.17-0.063,0.154-0.211,0.154-0.445V20.953c0-0.699-0.032-1.76-0.095-3.182
                c-0.064-1.42-0.096-2.191-0.096-2.912c0-0.508,0.169-0.764,0.509-0.764c0.784,0,1.75,0.031,3.299-0.105
                c1.547-0.139,2.302-0.508,3.065-0.508C127.859,13.482,128.141,13.805,128.141,14.25z M120.688,43c0-2.545-0.684-4.381-2.253-6.311
                c-1.676-2.059-4.056-3.289-6.536-3.289c-2.609,0-4.562,0.818-6.258,2.855c-1.612,1.908-2.418,4.199-2.418,6.871
                c0,2.545,0.838,4.762,2.513,6.648c1.719,1.994,3.839,2.992,6.363,2.992c2.545,0,4.645-1.008,6.299-3.021
                C119.926,47.857,120.688,45.609,120.688,43z"/>
            <path   d="M177.476,42.936c0,4.434-1.453,8.219-4.357,11.357c-2.971,3.246-6.649,4.867-11.039,4.867
                c-4.412,0-8.103-1.611-11.071-4.834c-2.907-3.117-4.359-6.893-4.359-11.326c0-4.432,1.452-8.209,4.359-11.324
                c2.989-3.182,6.68-4.773,11.071-4.773c4.368,0,8.037,1.592,11.006,4.773C176.013,34.771,177.476,38.525,177.476,42.936z M170.763,43
                c0-2.588-0.794-4.793-2.385-6.617c-1.654-1.93-3.755-2.895-6.299-2.895c-2.545,0-4.656,0.953-6.332,2.861
                c-1.591,1.846-2.386,4.063-2.386,6.65c0,2.545,0.807,4.75,2.418,6.617c1.696,1.973,3.796,2.957,6.3,2.957
                c2.523,0,4.623-0.984,6.299-2.957C169.969,47.75,170.763,45.545,170.763,43z"/>
            <g>
                <path   d="M80.679,98.559c0,0.244-0.193,0.59-0.579,1.037c-3.968,4.598-8.881,6.896-14.739,6.896
                    c-6.104,0-10.986-2.229-14.648-6.684c-3.418-4.148-5.127-9.336-5.127-15.563c0-6.225,1.74-11.432,5.219-15.623
                    c3.703-4.516,8.595-6.775,14.678-6.775c6.165,0,10.935,2.086,14.313,6.256c0.325,0.426,0.488,0.783,0.488,1.068
                    c0,0.346-0.54,1.367-1.617,3.066c-1.078,1.699-1.73,2.549-1.953,2.549c-0.265,0-0.885-0.498-1.861-1.496
                    c-1.2-1.221-2.33-2.137-3.388-2.746c-1.75-0.998-3.683-1.496-5.798-1.496c-4.028,0-7.161,1.535-9.399,4.607
                    c-1.993,2.746-2.99,6.207-2.99,10.377s0.986,7.66,2.96,10.467c2.237,3.154,5.361,4.73,9.369,4.73c1.993,0,3.915-0.498,5.767-1.496
                    c1.221-0.652,2.462-1.576,3.724-2.775c1.058-0.998,1.638-1.496,1.738-1.496c0.123,0,0.794,0.807,2.016,2.426
                    C80.068,97.504,80.679,98.396,80.679,98.559z"/>
                <g>
                    <path   d="M108.083,99.584c-1.309-0.443-2.47-1.254-3.479-2.428c-1.547-1.791-2.319-3.906-2.319-6.35
                    c0-2.48,0.763-4.605,2.289-6.377c1.605-1.832,3.631-2.748,6.072-2.748c2.44,0,4.455,0.928,6.042,2.779
                    c1.526,1.75,2.288,3.865,2.288,6.346c0,2.443-0.762,4.559-2.288,6.35c-0.133,0.156-0.27,0.303-0.408,0.445
                    c2.678-0.668,5.494-1.348,8.423-1.908c0.475-1.543,0.713-3.191,0.713-4.947c0-4.23-1.404-7.832-4.211-10.803
                    c-2.849-3.051-6.368-4.578-10.559-4.578c-4.211,0-7.751,1.527-10.62,4.578c-2.786,2.99-4.181,6.613-4.181,10.863
                    c0,3.67,1.038,6.865,3.111,9.596C101.59,100.717,104.659,100.311,108.083,99.584z"/>
                    <path   d="M136.867,94.453c-0.147-1.24-0.223-2.82-0.223-4.744c0-1.465,0.03-2.807,0.092-4.029
                    c0.02-0.813,0.173-2.205,0.458-4.18c0.264-1.85,0.396-3.174,0.396-3.967c0-0.447-0.204-0.672-0.61-0.672
                    c-0.59,0-1.476-0.01-2.654-0.029c-1.181-0.02-2.065-0.031-2.655-0.031c-0.488,0-0.824,0.396-1.007,1.189
                    c-0.753,3.277-1.13,7.273-1.13,11.994c0,1.832,0.056,3.467,0.165,4.906c0.04-0.006,0.08-0.01,0.12-0.016
                    C132.095,94.59,134.447,94.459,136.867,94.453z"/>
                    <path   d="M157.608,91.418c0-1.506,0.062-3.758,0.184-6.76c0.123-2.998,0.184-5.242,0.184-6.729
                    c0-0.713-0.295-1.068-0.886-1.068h-5.035c-0.834,0-1.251,0.5-1.251,1.496c0,9.217-0.051,14.586-0.152,16.111
                    c-0.017,0.328-0.1,0.658-0.244,0.992c2.384,0.324,4.817,0.715,7.296,1.15C157.641,94.377,157.608,92.645,157.608,91.418z"/>
                    <path   d="M193.021,99.211c-0.132-3.467-0.197-7.67-0.197-12.615c0-2.602,0.117-6.525,0.352-11.762
                    c0.233-5.24,0.351-9.172,0.351-11.797c0-0.426-0.173-0.641-0.519-0.641c-0.732,0-1.842,0.066-3.326,0.199
                    c-1.485,0.133-2.604,0.199-3.357,0.199c-0.326,0-0.488,0.242-0.488,0.73c0,0.693,0.031,1.721,0.092,3.082
                    c0.061,1.363,0.092,2.381,0.092,3.053v9.889c0,0.223-0.082,0.365-0.244,0.424c-0.854-0.77-1.72-1.535-2.594-2.287
                    c-1.913-1.506-4.15-2.258-6.714-2.258c-4.252,0-7.7,1.547-10.345,4.639c-2.523,2.949-3.784,6.59-3.784,10.926
                    c0,2.453,0.438,4.693,1.305,6.725c3.256,0.639,6.581,1.328,9.97,2.035C181.751,101.447,188.398,100.543,193.021,99.211z
                     M171.555,97.307c-1.607-1.811-2.411-3.936-2.411-6.379c0-2.563,0.773-4.758,2.32-6.588c1.626-1.955,3.691-2.932,6.194-2.932
                    c2.38,0,4.374,0.988,5.981,2.961c1.504,1.852,2.258,3.996,2.258,6.438c0,2.502-0.732,4.66-2.197,6.471
                    c-1.587,1.934-3.602,2.898-6.042,2.898C175.236,100.176,173.202,99.221,171.555,97.307z"/>
                    <path   d="M84.51,87.494"/>
                </g>
                <path   d="M91.023,83.178c0-5.432,0.225-11.932,0.672-19.498l0.03-0.398c0.02-0.324-0.153-0.486-0.52-0.486
                    c-0.365,0-0.926,0.029-1.677,0.09c-0.754,0.061-1.323,0.094-1.71,0.094c-0.366,0-0.915-0.033-1.647-0.094s-1.282-0.09-1.648-0.09
                    c-0.427,0-0.641,0.203-0.641,0.607c0,2.178,0.107,5.471,0.32,9.873c0.214,4.406,0.32,7.705,0.32,9.902
                    c0,1.162,0.014,5.869-0.009,6.834c-0.022,0.961-0.987,14.041,10.135,18.32c11.122,4.277,22.049-4.697,39.806-5.738
                    c17.755-1.039,23.896,5.666,41.769,6.508c17.874,0.842,24.052-10.41,24.052-10.41s-10.332,7.064-26.662,3.66
                    c-16.329-3.4-31.213-6.445-43.794-4.873c-12.582,1.572-23.502,6.439-30.93,5.52c-7.428-0.926-7.909-10.852-7.904-11.688
                    S91.023,84.809,91.023,83.178z"/>
            </g>
            <path   d="M138.171,27.572c0.873,0,5.861-4.48,5.861-9.096c0-3.609-2.508-5.957-5.861-5.957
                c-3.354,0-5.861,2.348-5.861,5.957C132.31,22.689,137.298,27.572,138.171,27.572z"/>
            <g>
                <path   d="M138.171,31.445c-1.206,0-3.154-2.393-3.154-2.393s-0.991-1.111-1.03-0.113
                    c0,1.652,0.123,4.135,0.366,7.443c0.244,3.309,0.366,5.791,0.366,7.445c0,1.484-0.037,3.695-0.111,6.633s-0.111,5.137-0.111,6.6
                    c0,0.871,0.223,1.307,0.668,1.307h6.203c0.382,0,0.573-0.223,0.573-0.67c0-1.527-0.031-3.832-0.096-6.918
                    c-0.063-3.086-0.096-5.402-0.096-6.951c0-1.654,0.101-4.131,0.303-7.43c0.201-3.297,0.303-5.764,0.303-7.396
                    c-0.233-1.096-1.03,0.051-1.03,0.051S139.376,31.445,138.171,31.445z"/>
            </g>
    </svg>
    </div>
    <div style="width: 100%;margin-top: 2rem">
        <img src="/images/ball.gif">
    </div>
</div>
<div class="page-container" id="page-container-logbk-reg">

    <section>
        <div class="no-gutters top-row" id="headerTopBar" style="height: 4.5vh/*50px*/; @if($topheader==='off') display:none; @endif">
            <div class="d-flex flex-row" id="headerTopBarArea">
                <div class="d-flex align-items-center">
                    <!--class="material-icons">edit_location</i-->
                    <i class="fas fa-map-marker-alt" aria-hidden="true" @if($toplocation==='off')style="display: none"@endif></i>
                </div>
                <div id="topcountrycity" style="padding-left: 5px; @if($toplocation==='off') display:none; @endif">
                    {{$countrycity}}
                </div>
                <div class="mr-auto">
                    <span id="location_desc" style="display: none; margin-left: 30px;">{{$frtxt['frtxt_locationdescript']}}</span>
                </div>
                <div class="d-flex align-items-center" style="cursor:pointer">
                    {{--  <i class="fas fa-chevron-up"></i>--}}
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="row no-gutters header-row" id="myheader" style="height: 6.3vh/*70px*/">
            <div class="mycontainer nav-mycontainer">
                <a href="/home" class="navigation-logo">
                    <div class="d-flex flex-row logocontainer">
                        <div>
                            @if(!empty($logoImg))
                                <img src="/uploads/images/wesimg/logo/{{$logoImg}}" alt="logo" id="logostar" class="logo star" style="/*width: 40px;*/ height: 3.6vh/*40px*/;" onerror="this.src ='/images/noimg.png';">
                            @endif
                        </div>
                        @if(!empty($logoImg) && !empty($extralogoImg))
                            <div class="logocontainerLine" style="border-right: 1px solid white; height: 3.6vh/*40px*/; margin: 0 10px;">
                            </div>
                        @endif
                        <div>
                            @if(!empty($extralogoImg))
                                <img src="/uploads/images/wesimg/logo/{{$extralogoImg}}" alt="logo" id="logoflw" class="logo flw" style="width: 7.2vh/*80px*/; height: 3.6vh/*40px*/;" onerror="this.src ='/images/noimg.png';">
                            @endif
                            @if(!empty($slogantxt))
                                <span style="color: white; margin-left: 15px;">{{$slogantxt}}</span>
                            @endif
                        </div>
                    </div>
                </a>

                <button data-toggle="collapse" class="navbar-toggler navbar-toggler-right" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="sr-only">Toggle navigation</span> <span class="fas fa-bars" style="color:white"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto" style="height: 3.6vh/*40px*/">
                        @if($toolcalc!=='off')
                            <li class="nav-item pr-0">
                                <a class="nav-link nav-link-a" href="#" style="padding: 0px">
                                    <svg t="1600751643806" style="fill: white" class="icon" viewBox="0 0 1138 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5583" width="20" height="20"><path d="M398.222222 174.545465 739.555556 174.545465 739.555556 89.212132 398.222222 89.212132 398.222222 174.545465 398.222222 174.545465ZM910.222222 174.545465 995.795627 174.545465C1018.98314 174.545465 1038.222222 194.374827 1038.222222 219.684636L1038.222222 879.305273C1038.222222 904.491861 1018.787669 924.444444 995.344498 924.444444L142.43328 924.444444C118.944313 924.444444 99.555556 904.566158 99.555556 879.305273L99.555556 219.684636C99.555556 194.387285 118.866148 174.545465 142.562532 174.545465L229.503488 174.545465 229.503488 89.212132 142.562532 89.212132C71.211748 89.212132 14.222222 147.769515 14.222222 219.684636L14.222222 879.305273C14.222222 951.224832 71.333262 1009.777778 142.43328 1009.777778L995.344498 1009.777778C1066.425628 1009.777778 1123.555556 951.125049 1123.555556 879.305273L1123.555556 219.684636C1123.555556 147.813945 1066.69824 89.212132 995.795627 89.212132L910.222222 89.212132 910.222222 174.545465ZM270.222222 42.410439C270.222222 18.987804 289.160476 0 312.888889 0 336.453063 0 355.555556 18.983652 355.555556 42.410439L355.555556 221.554005C355.555556 244.97664 336.617301 263.964444 312.888889 263.964444 289.324715 263.964444 270.222222 244.980793 270.222222 221.554005L270.222222 42.410439ZM782.222222 42.377216C782.222222 18.9729 801.160476 0 824.888889 0 848.453063 0 867.555556 18.968804 867.555556 42.377216L867.555556 221.38038C867.555556 244.78464 848.617301 263.757596 824.888889 263.757596 801.324715 263.757596 782.222222 244.788793 782.222222 221.38038L782.222222 42.377216ZM270.222222 438.303004C270.222222 414.738887 289.42006 395.636338 313.180956 395.636338L824.596821 395.636338C848.322276 395.636338 867.555556 414.574592 867.555556 438.303004 867.555556 461.867179 848.357717 480.969671 824.596821 480.969671L313.180956 480.969671C289.455502 480.969671 270.222222 462.031474 270.222222 438.303004ZM270.222222 658.10102C270.222222 634.536846 289.42006 615.434354 313.180956 615.434354L824.596821 615.434354C848.322276 615.434354 867.555556 634.372551 867.555556 658.10102 867.555556 681.665138 848.357717 700.767687 824.596821 700.767687L313.180956 700.767687C289.455502 700.767687 270.222222 681.829433 270.222222 658.10102Z" p-id="5584"></path></svg>
                                </a>
                            </li>
                        @endif
                        @if($toolbar!=='off')
                            <li class="nav-item pr-0">
                                <a class="nav-link nav-link-a" href="#" style="padding: 0px">
                                    <svg t="1600751734287" style="fill: white" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10651" width="20" height="20"><path style="fill: white" d="M832 64H192c-70.7 0-128.1 69.2-128 154.4v463.4c0 85.3 57.3 154.5 128 154.5h261.9l149.4 108c11.2 10.3 24.6 15.6 38.1 15.6 9.4 0 18.9-2.5 27.8-7.8 21.5-12.8 34.9-38.9 34.9-67.9v-48H832c70.6 0 128-69.2 128-154.5V218.5C960 133.2 902.7 64 832 64z m68.2 617.9c0 51.4-31.2 94.8-68.2 94.8H644.4v107.7c0 6.3-1.7 10.9-3.2 13.6l-2.8-2-149.5-108-15.7-11.3H192c-37 0-68.2-43.4-68.2-94.8V218.3c0-30.3 10.5-58.2 28.8-76.6 8.2-8.2 21.7-18 39.4-18h640c37 0 68.2 43.4 68.2 94.8v463.4zM696.9 402.3c-27.6 0-49.9 22.3-49.9 49.9 0 27.6 22.3 49.9 49.9 49.9 27.6 0 49.9-22.3 49.9-49.9 0-27.6-22.3-49.9-49.9-49.9z m-184.9 0c-27.6 0-49.9 22.3-49.9 49.9 0 27.6 22.3 49.9 49.9 49.9s49.9-22.3 49.9-49.9c0-27.6-22.3-49.9-49.9-49.9z m-179.8 0c-27.6 0-49.9 22.3-49.9 49.9 0 27.6 22.3 49.9 49.9 49.9 27.6 0 49.9-22.3 49.9-49.9 0.1-27.6-22.2-49.9-49.9-49.9z" fill="#666666" p-id="10652"></path></svg>
                                </a>
                            </li>
                        @endif

                        @if($toolcalc==='on' || $toolbar==='on')
                            <li class="nav-item">
                                <div class="logocontainerLine" style="border-right: 1px solid white; height: 3.6vh/*40px*/">   </div>
                            </li>
                        @endif
                        <?php
                        $i=0;
                        ?>
                    <!-- group of menu -->
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

                            $h_link = explode(':', $link);
                            if (str_contains($h_link[0], 'http')){
                                $str = $h_link[0].'://';
                                $link = str_replace($str, '', $link);
                            }
                            $is_link = explode('.', $link);
                            $target = '';
                            if(count($is_link) <= 1){
                                $link = "/".$link;
                            }
                            else{
                                $link = "//".$link;
                                $target = 'target="_blank"';
                            }


                            if($curMU!='' && $pos !== false)
                                $active='active';
                            ?>
                            <li class="nav-item">
                                <a class="nav-link nav-link-a wesheadmenu {{$active}}" {{$target}} style="font-size: 15px;padding: 0px" data-idx="{{$i}}" data-cont="{{$link}}" title="{{$menu}}" href="{{$link}}">{{$menu}}</a>
                            </li>
                        <?php
                        $i++;
                        ?>
                    @endforeach

                    <!-- language options-->
                        <li id="LangContainer" class="nav-item dropdown" style="padding-right: 0px; @if($modules==='off') display:none; @endif">
                            <?php
                            $i=0;
                            ?>
                            <div id="langDropdownBtn" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="cursor: pointer; padding: 0 0;" class="nav-link dropdown-toggle">
                                @if($ciso!=null && $ciso!='')
                                    <div class="iti__flag-box only-text">
                                        <div class="iti__flag only-text iti__{{$ciso}}">{{$ciso}}</div>
                                    </div>
                                @endif
                            </div>
                            <?php
                              $Length = 0;
                             ?>
                            <div id="langDropdownList" aria-labelledby="SClangDropdown" class="dropdown-menu dropdown-menu-right shadow animated&amp;#45;&amp;#45;grow-in" style="min-width: 8rem;width: auto;">
                                <img src="/images/wes_lang_arrow.png" id="show_lang_arrow" style="position: absolute; top: -0.4rem; left: 35px;">
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
                                        <a class="dropdown-item" id="scEnabledLangs_{{$idstr}}" title="{{$lang->name}}" style="color: #212529;padding: 5px 15px;text-align:left" href="/{{$lang->iso}}">
                                            <span class="iti__country-name" style="background: #3f6ad2; color: white; text-transform:uppercase;border: 1px solid transparent; border-radius: 20px; padding: 5px 3px; font-size: 12px">{{$lang->iso}}</span>
                                            <span class="iti__country-name" title="{{$lang->name}}" style="font-size: 15px">{{$lang->name}}</span>
                                        </a>
                                    @endforeach
                                @endif
                            </div>
                            <input type="hidden" id="textlen" value="<?php echo $Length; ?>">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    @yield('content')

    <footer id="footerSection" style="min-width: 1250px;">
        <div class="row no-gutters" id="footlists" style="background-color: white; height: 22vh">
            <div class="container" style="min-width: 1140px;">
                <div class="row no-gutters" style="display: flex; flex-direction: row; justify-content: space-between">
                    <!-- Service -->
                    <div>
                        <aside class="widget widget_text student-txt-area" >
                            <h4 class="student-txt-h4" style="font-size: 16px; font-weight: bold; color: #3859ad; margin-bottom: 1.8vh/*20px*/">
                                @if($footmenus!=='')
                                    @if($menu0style === 'normal')
                                        {{$menu0fonttitle}}
                                    @endif
                                @endif
                            </h4>
                            <div class="textwidget" id="sbmuservice">
                                @if($footmenus!=='')
                                    @if($menu0style === 'normal')
                                        <?php
                                        $servicelist = array();
                                        $fontclr='';
                                        $fontsize='';
                                        ?>
                                        @if($menu0contlinks !=='')
                                            <?php
                                            $servicelist = explode(',',$menu0contlinks);
                                            $fontclr=' color:'.$menu0fontcolor.';';
                                            $fontsize=' font-size:'.$menu0fontsize.'px;';
                                            ?>
                                            <ul style="list-style: none outside; margin: 0; padding: 0;">
                                                @foreach ($servicelist as $mu)
                                                    <?php
                                                    $menusp=explode(':', $mu);
                                                    $menu=$menusp[0];
                                                    if(!empty($menusp[1]))
                                                        $link=urldecode($menusp[1]);
                                                    else
                                                        $link='#';
                                                    ?>
                                                    <li style="margin-bottom: 0.9vh/*10px*/">
                                                        <i style="margin-right: 7px;{{$fontsize}} {{$fontclr}}" class="far fa-arrow-alt-circle-right"></i>
                                                        <a class="wesfootlist1" href="{{$link}}" style="{{$fontsize}} {{$fontclr}}" data-cont="{{$link}}">{{$menu}}</a>
                                                    </li>
                                                @endforeach
                                            </ul>
                                        @endif
                                    @else
                                        <script type="text/javascript">
                                            var tag = '{{ $edit0 }}';
                                            // document.getElementById("app_foot_center").innerHTML=htmldecodejs(tag);
                                            $('#sbmuservice').html(htmldecodejs(tag));
                                        </script>
                                    @endif
                                @endif
                            </div>
                        </aside>
                    </div>
                    <!-- About US part-->
                    <div>
                        <aside class="widget widget_text student-txt-area">
                            <h4 class="student-txt-h4" style="font-size: 16px; font-weight: bold; color: #3859ad; margin-bottom: 1.8vh/*20px*/">
                                @if($footmenus!=='')
                                    @if($menu1style === 'normal')
                                        {{$menu1fonttitle}}
                                    @endif
                                @endif
                            </h4>
                            <div class="textwidget" id="sbmuaboutus">
                                @if($footmenus!=='')
                                    @if($menu1style === 'normal')
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
                                            <ul style="list-style: none outside; margin: 0; padding: 0;">
                                                @foreach ($servicelist as $mu)
                                                    <?php
                                                    $menusp=explode(':', $mu);
                                                    $menu=$menusp[0];
                                                    if(!empty($menusp[1]))
                                                        $link=urldecode($menusp[1]);
                                                    else
                                                        $link='#';
                                                    ?>
                                                    <li style="margin-bottom: 0.9vh/*10px*/">
                                                        <i style="margin-right: 7px;{{$fontsize}} {{$fontclr}}" class="far fa-arrow-alt-circle-right"></i>
                                                        <a class="wesfootlist1" href="{{$link}}" style="{{$fontsize}} {{$fontclr}}" data-cont="{{$link}}">{{$menu}}</a>
                                                    </li>
                                                @endforeach
                                            </ul>
                                        @endif
                                    @else
                                        <script type="text/javascript">
                                            var tag = '{{ $edit1 }}';
                                            // document.getElementById("app_foot_center").innerHTML=htmldecodejs(tag);
                                            $('#sbmuaboutus').html(htmldecodejs(tag));
                                        </script>
                                    @endif
                                @endif
                            </div>
                        </aside>
                    </div>
                    <!-- NEWS -->
                    <div>
                        <aside class="widget widget_text student-txt-area" >
                            <h4 class="student-txt-h4" style="font-size: 16px; font-weight: bold; color: #3859ad; margin-bottom: 1.8vh/*20px*/">
                                @if($footmenus!=='')
                                    @if($menu2style === 'normal')
                                        {{$menu2fonttitle}}
                                    @endif
                                @endif
                            </h4>
                            <div class="textwidget" id="sbmuNews">
                                @if($footmenus!=='')
                                    @if($menu2style === 'normal')
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
                                            <ul style="list-style: none outside; margin: 0; padding: 0;">
                                                @foreach ($servicelist as $mu)
                                                    <?php
                                                    $menusp=explode(':', $mu);
                                                    $menu=$menusp[0];
                                                    if(!empty($menusp[1]))
                                                        $link=urldecode($menusp[1]);
                                                    else
                                                        $link='#';
                                                    ?>
                                                    <li style="margin-bottom: 0.9vh/*10px*/">
                                                        <i style="{{$fontsize}} {{$fontclr}}" class="far fa-arrow-alt-circle-right"></i>
                                                        <a class="wesfootlist1" href="{{$link}}" style="{{$fontsize}} {{$fontclr}}" data-cont="{{$link}}">{{$menu}}</a>
                                                    </li>
                                                @endforeach
                                            </ul>
                                        @endif
                                    @else
                                        <script type="text/javascript">
                                            var tag = '{{ $edit2 }}';
                                            // document.getElementById("app_foot_center").innerHTML=htmldecodejs(tag);
                                            $('#sbmuNews').html(htmldecodejs(tag));
                                        </script>
                                    @endif
                                @endif
                            </div>
                        </aside>
                    </div>
                    <!-- Social -->
                    <div>
                        <aside class="widget widget_text student-txt-area" style="display: flex; justify-content: center">
                            <div class="grid-container" id="social_site_link">
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

                                        @if($g_idx == 4)
                                            @if($i_img !== "")
                                                <div class="social-grid grid-item">
                                                    <a href="{{$i_link}}" class="social_org_img active" id="social-org_{{$imgidx}}" data-idx="{{$imgidx}}" data-link="{{$i_link}}" target="_blank">
                                                        <img src="{{$icon_path}}{{$i_img}}" id="social-iimg_{{$imgidx}}" style="width: 25px; height: 25px">
                                                    </a>
                                                    @if($h_img !== "")
                                                        <a href="#" class="social_hover_img" id="social-hover_{{$imgidx}}" data-idx="{{$imgidx}}" data-link="{{$i_link}}" target="_blank">
                                                            <img src="{{$icon_path}}{{$h_img}}" id="social-himg_{{$imgidx}}" style="width: 25px; height: 25px">
                                                        </a>
                                                    @endif
                                                </div>
                                            @endif
                                            <?php
                                            $imgidx++;
                                            $g_idx = 0;
                                            ?>
                                        @endif
                                    @endforeach
                                @endif
                            </div>
                        </aside>
                    </div>

                </div>
            </div>
        </div>

        <div class="row no-gutters" style="background-color: white; border-top: 1px solid #e2dede; height: 5vh; bottom: 0; top: 0; align-items: center">
            <div class="container" style="min-width: 1140px;">
                <div class="myflex-container no-gutters flex-row justify-content-between">
                    <div id="app_foot_left">
                        @if($footbar!=='' && $footbar!==null)
                            @if($barleft==='normal')
                                <?php
                                $color = '';
                                $fontsize= '';
                                ?>
                                @if(!empty($barleftfontcolor))
                                    <?php
                                    $color = 'color:'.$barleftfontcolor.'; ';
                                    ?>
                                @else
                                    <?php
                                    $color = 'color:#aaaaaa; ';
                                    ?>
                                @endif
                                @if(!empty($barleftfontsize))
                                    <?php
                                    $fontsize = 'font-size:'.$barleftfontsize.'px; ';
                                    ?>
                                @else
                                    <?php
                                    $fontsize = 'font-size:14px; ';
                                    ?>
                                @endif
                                <a href="{{$barleftfontlink}}" style="{{$color.$fontsize}}">
                                    @if(!empty($barleftfontcont))
                                        {{ $barleftfontcont }}
                                    @endif
                                </a>
                            @else
                                <script type="text/javascript">
                                    var tag = '{{ $footedit0 }}';
                                    if(tag!==null && tag!=='')
                                        $('#app_foot_left').html(htmldecodejs(tag));
                                </script>
                            @endif
                        @endif
                    </div>
                    {{-- bar center content --}}
                    <div id="app_foot_center">
                        @if($footbar!=='')
                            @if($barcent==='normal')
                                <?php
                                $color = '';
                                $fontsize= '';
                                ?>
                                @if(!empty($barcentfontcolor))
                                    <?php
                                    $color = 'color:'.$barcentfontcolor.'; ';
                                    ?>
                                @else
                                    <?php
                                    $color = 'color:#aaaaaa; ';
                                    ?>
                                @endif

                                @if(!empty($barcentfontsize))
                                    <?php
                                    $fontsize = 'font-size:'.$barcentfontsize.'px; ';
                                    ?>
                                @else
                                    <?php
                                    $fontsize = 'font-size:14px; ';
                                    ?>
                                @endif
                                <a href="{{$barcentfontlink}}" style="{{$color.$fontsize}}">
                                    @if(!empty($barcentfontcont))
                                        {{ $barcentfontcont }}
                                    @endif
                                </a>
                            @else
                                <script>
                                    var tag = '{{ $footedit1 }}';
                                    // document.getElementById("app_foot_center").innerHTML=htmldecodejs(tag);
                                    if(tag!==null && tag!=='')
                                        $('#app_foot_center').html(htmldecodejs(tag));
                                </script>
                            @endif
                        @endif
                    </div>
                    <!-- bar right content -->
                    <div id="app_foot_right">
                        @if($footbar!=='')
                            @if($barright==='normal')
                                <?php
                                $color1 = '';
                                $fontsize1='';
                                ?>
                                @if(!empty($barrightfontcolor))
                                    <?php
                                    $color1 = 'color:'.$barrightfontcolor.'; ';
                                    ?>
                                @else
                                    <?php
                                    $color1 = 'color:#aaaaaa; ';
                                    ?>
                                @endif
                                @if(!empty($barrightfontsize))
                                    <?php
                                    $fontsize1 = 'font-size:'.$barrightfontsize.'px; ';
                                    ?>
                                @else
                                    <?php
                                    $fontsize1 = 'font-size:14px; ';
                                    ?>
                                @endif
                                <a href="{{$barrightfontlink}}" style="{{$color1.$fontsize1}}">
                                    @if(!empty($barrightfontcont))
                                        {{ $barrightfontcont }}
                                    @endif
                                </a>
                            @else
                                <script>
                                    var tag = '{{ $footedit2 }}';
                                    // document.getElementById("app_foot_center").innerHTML=htmldecodejs(tag);
                                    if(tag!==null && tag!=='')
                                        $('#app_foot_right').html(htmldecodejs(tag));
                                </script>
                            @endif
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </footer>

</div>
<!-- The Modal start-->
<div class="modal fade" id="myAlertModal" style="top:160px;">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">通知</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body" id="myAlertModalbody">
                Modal body..
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" style="background-color: #055ada">关闭</button>
            </div>

        </div>
    </div>
</div>

<!-- The Modal end-->
<script type="text/javascript">
    $(document).ready(function () {
        var samplepx = 63;
        var icon_path = "/uploads/images/wesimg/icons/";
        var pospx = samplepx - parseInt($('#textlen').val());
        $('#langDropdownList').css('margin-left', pospx+'px');
        var lang_arrow = 35;
        lang_arrow = lang_arrow - pospx;
        $('#show_lang_arrow').css('left', lang_arrow+'px');

        function success(position) {
            //console.log(position.coords.latitude)
            //console.log(position.coords.longitude)
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

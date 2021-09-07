<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{$title}}</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta http-equiv="Expires" content="Mon, 06 Jan 2020 00:00:01 GMT">
    <meta http-equiv="Expires" content="-1">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">

    <link id="dashboard_icon" rel="icon" href="/wes-logo.ico">
    <link rel="stylesheet" href="{{asset('/bootstrap/4.4.1/css/bootstrap.min.css')}}">{{-- 4.4.1 --}}
    <link rel="stylesheet" href="{{asset('vuedir/css/bundle.css')}}">

    <link rel="stylesheet" href="{{asset('c_js/css/intlTelInput.css')}}">
    <link rel="stylesheet" href="{{asset('css/color_pickr_min.css')}}">
    <link rel="stylesheet" href="{{asset('css/jquery-ui.css')}}">
    <link rel="stylesheet" href="{{asset('css/all.min.css')}}" >
    <link rel="stylesheet" href="{{$style_path}}">

    {{--<script src="https://cdn.ckeditor.com/ckeditor5/22.0.0/inline/ckeditor.js"></script>--}}
    {{--<script src="{{asset('js/ckediter.js')}}" type="text/javascript"></script>--}}

    <script type="text/javascript">
        window.Laravel = {
            csrfToken: '{{  csrf_token() }}',
            langlist:'{{$langlist}}',
            serverlocale:'{{$serverlocale}}',
            logoinfo:'{{$logoinfo}}',
            favorites:'{{$favorites}}',
            useraccount:'{{$useraccount}}',
            status:'{{$status}}'
        }
    </script>
    {{--<script  src="vuedir/js/vue.js"> </script>--}}
</head>
<body>
<div id="app">
</div>
<script type="text/javascript" src="{{asset('/js/jquery/3.4.1/jquery-3.4.1.min.js')}}"></script>
<script type="text/javascript" src="{{asset('/bootstrap/4.4.1/js/bootstrap.bundle.min.js')}}"></script>{{-- 4.4.1 --}}
<script src="{{asset('js/jquery-ui.js')}}"></script>
<script src="{{asset('js/dragScroll.js')}}"></script>
<script src="{{asset('js/jquery.mousewheel.js')}}"></script>
<script src="{{asset('js/jquery.autocomplete.min.js')}}"></script>
<script src="{{asset('js/color_pickr_min.js')}}"></script>
<script src="{{asset('js/common.js')}}"></script>
{{--<script src='https://kit.fontawesome.com/a076d05399.js'></script>--}}
<script src="{{asset('js/app.min.js')}}"></script>
<script src="{{asset('c_js/js/intlTelInput.js')}}" type="text/javascript"></script>

</body>
<script src="{{asset(mix('vuedir/main.js'))}}"></script>
</html>

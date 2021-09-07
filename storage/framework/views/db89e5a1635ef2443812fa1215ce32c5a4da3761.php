<!doctype html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo e($title); ?></title>
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

    <meta http-equiv="Expires" content="Mon, 06 Jan 2020 00:00:01 GMT">
    <meta http-equiv="Expires" content="-1">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">

    <link id="dashboard_icon" rel="icon" href="<?php echo e($favicon); ?>">

    <link rel="stylesheet" href="<?php echo e(asset('/bootstrap/4.4.1/css/bootstrap.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('/fonts/fontawesome-all.min.css')); ?>">
	<link rel="stylesheet" href="<?php echo e(asset('vuedir/css/bundle.css')); ?>">

    <link rel="stylesheet" href="<?php echo e(asset('c_js/css/intlTelInput.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('css/color_pickr_min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('css/jquery-ui.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('css/all.min.css')); ?>" >
    <link rel="stylesheet" href="<?php echo e($style_path); ?>">

    
    

    <script type="text/javascript">
        window.Laravel = {
            csrfToken: '<?php echo e(csrf_token()); ?>',
            userinfo: '<?php echo e($userinfo); ?>',
            langlist:'<?php echo e($langlist); ?>',
            serverlocale:'<?php echo e($serverlocale); ?>',
            logoinfo:'<?php echo e($logoinfo); ?>',
            favorites:'<?php echo e($favorites); ?>',
            g_path:'<?php echo e($g_path); ?>',
            theme:'<?php echo e($theme); ?>',
            userpermissions:'<?php echo e($userpermissions); ?>'
        }
    </script>
    
</head>
<body>
<div id="app">
</div>
<script type="text/javascript" src="<?php echo e(asset('/js/jquery/3.4.1/jquery-3.4.1.min.js')); ?>"></script>
<script type="text/javascript" src="<?php echo e(asset('/bootstrap/4.4.1/js/bootstrap.bundle.min.js')); ?>"></script>

<script src="<?php echo e(asset('js/jquery-ui.js')); ?>"></script>
<script src="<?php echo e(asset('js/dragScroll.js')); ?>"></script>

<script src="<?php echo e(asset('js/jquery.mousewheel.js')); ?>"></script>

<script src="<?php echo e(asset('js/jquery.autocomplete.min.js')); ?>"></script>
<script src="<?php echo e(asset('js/color_pickr_min.js')); ?>"></script>
<script src="<?php echo e(asset('js/common.js')); ?>"></script>
<script src="<?php echo e(asset('js/app.min.js')); ?>"></script>
<script src="<?php echo e(asset('c_js/js/intlTelInput.js')); ?>" type="text/javascript"></script>

</body>
<script src="<?php echo e(asset(mix('vuedir/main.js'))); ?>"></script>
</html>
<?php /**PATH D:\xampp\htdocs\wes\resources\views/admin/dashboard.blade.php ENDPATH**/ ?>
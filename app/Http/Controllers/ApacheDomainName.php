<?php
header('Access-Control-Allow-Origin: *');

use Symfony\Component\Process\Process;

function SetDashDomainNameCommand($domain_name, $ip_server){
    //======= Linux ==========//
    shell_exec('sudo chmod -R 777 /etc/nginx/conf.d');

    $filename = "/etc/nginx/conf.d/default.conf";

    //$domain_name = str_replace('www.', '', $domain_name);
    if($domain_name != '') {
        $subs = explode('.', $domain_name);
        $sub_domain = $domain_name;
        if(count($subs) > 1){
            $del_sub = $subs[0].'.';
            $sub_domain = str_replace($del_sub, '', $domain_name);
        }
        $txt = 'server {'.PHP_EOL;
        $txt .= '    server_name '.$sub_domain.' '.$ip_server.';'.PHP_EOL;
        $txt .= '    listen 80;'.PHP_EOL;
        $txt .= '    listen 443 ssl;'.PHP_EOL;
        $txt .= '    rewrite (.*) https://'.$domain_name.'$1 last;'.PHP_EOL;
        $txt .= '    ssl_certificate /etc/nginx/cert/'.$domain_name.'.pem;'.PHP_EOL;
        $txt .= '    ssl_certificate_key /etc/nginx/cert/'.$domain_name.'.key;'.PHP_EOL;
        $txt .= '}'.PHP_EOL;
        $txt .= ''.PHP_EOL;
        $txt .= 'server {'.PHP_EOL;
        $txt .= '    server_name '.$domain_name.' '.$ip_server.';'.PHP_EOL;
        $txt .= '    listen 80;'.PHP_EOL;
        $txt .= '    return 301 https://$server_name$request_uri;'.PHP_EOL;
        $txt .= '}'.PHP_EOL;
        $txt .= ''.PHP_EOL;
        $txt .= '# HTTPS server'.PHP_EOL;
        $txt .= 'server {'.PHP_EOL;
        $txt .= '    server_name  '.$domain_name.' '.$ip_server.';'.PHP_EOL;
        $txt .= '    listen 443 ssl http2;'.PHP_EOL;
        $txt .= '    ssl_certificate /etc/nginx/cert/'.$domain_name.'.pem;'.PHP_EOL;
        $txt .= '    ssl_certificate_key /etc/nginx/cert/'.$domain_name.'.key;'.PHP_EOL;
        $txt .= '    access_log /var/log/nginx/'.$domain_name.'-443-access.log combined;'.PHP_EOL;
        $txt .= '    error_log /var/log/nginx/'.$domain_name.'-443-error.log;'.PHP_EOL;
        $txt .= '    client_max_body_size 200m;'.PHP_EOL;
        $txt .= '    error_page 497 301 https://$http_host$request_uri;'.PHP_EOL;
        $txt .= '    index index.html;'.PHP_EOL;
        $txt .= '    location / {'.PHP_EOL;
        $txt .= '        root   /var/www/html/wes/current/public;'.PHP_EOL;
        $txt .= '        index  index.php index.html index.htm;'.PHP_EOL;
        $txt .= '        try_files $uri $uri/ /index.php$is_args$args;'.PHP_EOL;
        $txt .= '    }'.PHP_EOL;
        $txt .= '    error_page   500 502 503 504  /50x.html;'.PHP_EOL;
        $txt .= '    location = /50x.html {'.PHP_EOL;
        $txt .= '        root   /usr/share/nginx/html;'.PHP_EOL;
        $txt .= '    }'.PHP_EOL;
        $txt .= '    location ~ \.php$ {'.PHP_EOL;
        $txt .= '        root   /var/www/html/wes/current/public;'.PHP_EOL;
        $txt .= '        fastcgi_pass   127.0.0.1:9000;'.PHP_EOL;
        $txt .= '        fastcgi_index  index.php;'.PHP_EOL;
        $txt .= '        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;'.PHP_EOL;
        $txt .= '        include        fastcgi_params;'.PHP_EOL;
        $txt .= '    }'.PHP_EOL;
        $txt .= '}'.PHP_EOL;
        $txt .= ''.PHP_EOL;
        $txt .= ''.PHP_EOL;

    }

    $fp = @fopen($filename, "w") or die("Unable to open file!");
    @fwrite($fp, $txt);
    @fclose($fp);

    shell_exec('sudo /etc/init.d/nginx reload');
    sleep(1);

    return true;
}

function SetFrontDomainNameCommand($front_domain, $ip_server){
    //======= Linux ==========//
    shell_exec('sudo chmod -R 777 /etc/nginx/conf.d');

    $filename = "/etc/nginx/conf.d/waaup.org.conf";

    $txt = '';
    if($front_domain != ''){
        //$front_domain = str_replace('www.', '', $front_domain);
        $subs = explode('.', $front_domain);
        $sub_domain = $front_domain;
        if(count($subs) > 1){
            $del_sub = $subs[0].'.';
            $sub_domain = str_replace($del_sub, '', $front_domain);
        }
        $txt = 'server {'.PHP_EOL;
        $txt .= '    server_name '.$sub_domain.' '.$ip_server.';'.PHP_EOL;
        $txt .= '    listen 80;'.PHP_EOL;
        $txt .= '    listen 443 ssl;'.PHP_EOL;
        $txt .= '    rewrite (.*) https://'.$front_domain.'$1 last;'.PHP_EOL;
        $txt .= '    ssl_certificate /etc/nginx/cert/'.$front_domain.'.pem;'.PHP_EOL;
        $txt .= '    ssl_certificate_key /etc/nginx/cert/'.$front_domain.'.key;'.PHP_EOL;
        $txt .= '}'.PHP_EOL;
        $txt .= ''.PHP_EOL;
        $txt .= 'server {'.PHP_EOL;
        $txt .= '    server_name '.$front_domain.' '.$ip_server.';'.PHP_EOL;
        $txt .= '    listen 80;'.PHP_EOL;
        $txt .= '    return 301 https://$server_name$request_uri;'.PHP_EOL;
        $txt .= '}'.PHP_EOL;
        $txt .= ''.PHP_EOL;
        $txt .= 'server {'.PHP_EOL;
        $txt .= '    listen 443 ssl http2;'.PHP_EOL;
        $txt .= '    server_name  '.$front_domain.' '.$ip_server.';'.PHP_EOL;
        $txt .= '    ssl_certificate /etc/nginx/cert/'.$front_domain.'.pem;'.PHP_EOL;
        $txt .= '    ssl_certificate_key /etc/nginx/cert/'.$front_domain.'.key;'.PHP_EOL;
        $txt .= '    error_page 497 301 https://$http_host$request_uri;'.PHP_EOL;
        $txt .= '    location / {'.PHP_EOL;
        $txt .= '        root   /var/www/html/wes/current/public;'.PHP_EOL;
        $txt .= '        index  index.php index.html index.htm;'.PHP_EOL;
        $txt .= '        try_files $uri $uri/ /index.php$is_args$args;'.PHP_EOL;
        $txt .= '    }'.PHP_EOL;
        $txt .= '    error_page   500 502 503 504  /50x.html;'.PHP_EOL;
        $txt .= '    location = /50x.html {'.PHP_EOL;
        $txt .= '        root   /usr/share/nginx/html;'.PHP_EOL;
        $txt .= '    }'.PHP_EOL;
        $txt .= '    location ~ \.php$ {'.PHP_EOL;
        $txt .= '        root   /var/www/html/wes/current/public;'.PHP_EOL;
        $txt .= '        fastcgi_pass   127.0.0.1:9000;'.PHP_EOL;
        $txt .= '        fastcgi_index  index.php;'.PHP_EOL;
        $txt .= '        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;'.PHP_EOL;
        $txt .= '        include        fastcgi_params;'.PHP_EOL;
        $txt .= '    }'.PHP_EOL;
        $txt .= '}'.PHP_EOL;
        $txt .= ''.PHP_EOL;
        $txt .= ''.PHP_EOL;

    }

    $fp = @fopen($filename, "w") or die("Unable to open file!");
    @fwrite($fp, $txt);
    @fclose($fp);

    shell_exec('sudo /etc/init.d/nginx reload');
    sleep(1);

    return true;
}

function SetCompanyDomainNameCommand($comp_domain){
    //======= Linux ==========//
    shell_exec('sudo chmod -R 777 /etc/nginx/conf.d');

    $filename = "/etc/nginx/conf.d/company.conf";

    $txt = '';
    if($comp_domain != ''){
        $txt = 'server {'.PHP_EOL;
        $txt .= '    server_name '.$comp_domain.';'.PHP_EOL;
        $txt .= '    listen 80; '.PHP_EOL;
        $txt .= '    return 301 https://$server_name$request_uri; '.PHP_EOL;
        $txt .= '}'.PHP_EOL;
        $txt .= 'server {'.PHP_EOL;
        $txt .= '    listen 443 ssl http2; '.PHP_EOL;
        $txt .= '    server_name  '.$comp_domain.'; '.PHP_EOL;
        $txt .= '    ssl_certificate /etc/nginx/cert/'.$comp_domain.'.pem; '.PHP_EOL;
        $txt .= '    ssl_certificate_key /etc/nginx/cert/'.$comp_domain.'.key; '.PHP_EOL;
        $txt .= '    error_page 497 301 https://$http_host$request_uri;'.PHP_EOL;
        $txt .= '    location / {'.PHP_EOL;
        $txt .= '        root   /var/www/html/wes/current/public;'.PHP_EOL;
        $txt .= '        index  index.php index.html index.htm;'.PHP_EOL;
        $txt .= '        try_files $uri $uri/ /index.php$is_args$args;'.PHP_EOL;
        $txt .= '    }'.PHP_EOL;
        $txt .= '    error_page   500 502 503 504  /50x.html;'.PHP_EOL;
        $txt .= '    location = /50x.html {'.PHP_EOL;
        $txt .= '        root   /usr/share/nginx/html;'.PHP_EOL;
        $txt .= '    }'.PHP_EOL;
        $txt .= '    location ~ \.php$ {'.PHP_EOL;
        $txt .= '        root   /var/www/html/wes/current/public;'.PHP_EOL;
        $txt .= '        fastcgi_pass   127.0.0.1:9000;'.PHP_EOL;
        $txt .= '        fastcgi_index  index.php;'.PHP_EOL;
        $txt .= '        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;'.PHP_EOL;
        $txt .= '        include        fastcgi_params;'.PHP_EOL;
        $txt .= '    }'.PHP_EOL;
        $txt .= '}'.PHP_EOL;

        $fp = @fopen($filename, "w") or die("Unable to open file!");
        @fwrite($fp, $txt);
        @fclose($fp);
    }


    shell_exec('sudo /etc/init.d/nginx reload');
    sleep(1);

    return true;
}

function SetCompanyUserDomainNameCommand($comp_domain){
    //======= Linux ==========//
    shell_exec('sudo chmod -R 777 /etc/nginx/conf.d');

    $filename = "/etc/nginx/conf.d/companyuser.conf";

    $txt = '';
    if(count($comp_domain) > 0){
        $txt = 'server {'.PHP_EOL;
        foreach ($comp_domain as $domain) {
            $txt .= '    server_name '.$domain.';'.PHP_EOL;
        }
        $txt .= '    listen 80; '.PHP_EOL;
        $txt .= '    access_log /var/log/nginx/companyuser.waaup.online-443-access.log combined; '.PHP_EOL;
        $txt .= '    access_log /var/log/nginx/companyuser.waaup.online-443-error.log; '.PHP_EOL;
        $txt .= '    error_page 497 301 https://$http_host$request_uri;'.PHP_EOL;
        $txt .= '    location / {'.PHP_EOL;
        $txt .= '        root   /var/www/html/wes/current/public;'.PHP_EOL;
        $txt .= '        index  index.php index.html index.htm;'.PHP_EOL;
        $txt .= '        try_files $uri $uri/ /index.php$is_args$args;'.PHP_EOL;
        $txt .= '    }'.PHP_EOL;
        $txt .= '    error_page   500 502 503 504  /50x.html;'.PHP_EOL;
        $txt .= '    location = /50x.html {'.PHP_EOL;
        $txt .= '        root   /usr/share/nginx/html;'.PHP_EOL;
        $txt .= '    }'.PHP_EOL;
        $txt .= '    location ~ \.php$ {'.PHP_EOL;
        $txt .= '        root   /var/www/html/wes/current/public;'.PHP_EOL;
        $txt .= '        fastcgi_pass   127.0.0.1:9000;'.PHP_EOL;
        $txt .= '        fastcgi_index  index.php;'.PHP_EOL;
        $txt .= '        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;'.PHP_EOL;
        $txt .= '        include        fastcgi_params;'.PHP_EOL;
        $txt .= '    }'.PHP_EOL;
        $txt .= '}'.PHP_EOL;

        $fp = @fopen($filename, "w") or die("Unable to open file!");
        @fwrite($fp, $txt);
        @fclose($fp);
    }


    shell_exec('sudo /etc/init.d/nginx reload');
    sleep(1);

    return true;
}
?>

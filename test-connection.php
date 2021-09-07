<?php
require_once './vendor/autoload.php';

use AlibabaCloud\Client\AlibabaCloud;
use AlibabaCloud\Client\Exception\ClientException;
use AlibabaCloud\Client\Exception\ServerException;
use Symfony\Component\Dotenv\Dotenv;

AlibabaCloud::accessKeyClient('LTAI5tHcZxgDUAQ4mhakjYQd', 'JW1UJlgtvk9IPV6pD8luw4Hovutwzn')->regionId('cn-shanghai')->asDefaultClient();

    $result = AlibabaCloud::rpc()
                          ->product('live')
                          ->version('2016-11-01')
                          ->action('DescribeLiveDomainBpsData')
                          ->method('POST')
                          ->request();

    print_r($result->toArray());

?>

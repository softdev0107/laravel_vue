<?php
// Download：https://github.com/aliyun/openapi-sdk-php
// Usage：https://github.com/aliyun/openapi-sdk-php/blob/master/README.md
require_once './vendor/autoload.php';

use AlibabaCloud\Client\AlibabaCloud;
use AlibabaCloud\Client\Exception\ClientException;
use AlibabaCloud\Client\Exception\ServerException;
use Symfony\Component\Dotenv\Dotenv;

AlibabaCloud::accessKeyClient('LTAI5tHcZxgDUAQ4mhakjYQd', 'JW1UJlgtvk9IPV6pD8luw4Hovutwzn')
                        ->regionId('ap-southeast-1')
                        ->asDefaultClient();

try {
    $result = AlibabaCloud::rpc()
                          ->product('live')
                          ->scheme('https') // https | http
                          ->version('2016-11-01')
                          ->action('DescribeLiveStreamsOnlineList')
                          ->method('POST')
                          ->host('live.aliyuncs.com')
                          ->options([
                                        'query' => [
                                          'RegionId' => "ap-southeast-1",
                                          'DomainName' => "in.waaup.online",
                                          'AppName' => "waaup",
                                          'StreamName' => "test",
                                        ],
                                    ])
                          ->request();
    print_r($result->toArray());
} catch (ClientException $e) {
    echo $e->getErrorMessage() . PHP_EOL;
} catch (ServerException $e) {
    echo $e->getErrorMessage() . PHP_EOL;
}
?>

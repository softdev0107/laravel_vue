<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use JoggApp\GoogleTranslate\GoogleTranslateClient;

use AlibabaCloud\Client\AlibabaCloud;
use AlibabaCloud\Client\Exception\ClientException;
use AlibabaCloud\Client\Exception\ServerException;

class StreamController extends BaseController
{

    public function __construct(Request $request)
    {
        parent::__construct($request);

        AlibabaCloud::accessKeyClient('LTAI5tHcZxgDUAQ4mhakjYQd', 'JW1UJlgtvk9IPV6pD8luw4Hovutwzn')
            ->regionId('ap-southeast-1')
            ->asDefaultClient();
    }

    public function getStreamList(Request $request){
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
                        //'StreamName' => "test",
                    ],
                ])
                ->request();
            return \Response::json([
                'msg'   =>  'ok',
                'lists' =>$result->toArray()
            ]);
        } catch (ClientException $e) {
            echo $e->getErrorMessage() . PHP_EOL;
        } catch (ServerException $e) {
            echo $e->getErrorMessage() . PHP_EOL;
        }

        return \Response::json([
            'msg'   =>  'err',
            'lists' =>[]
        ]);
    }



}

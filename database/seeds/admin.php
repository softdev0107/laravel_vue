<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class admin extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(DB::table('userinfo')->get()->count() == 0){
            DB::table('userinfo')->insert(
                [
                    ["name" => "wes",
                        "username" => "mateodev",
                        "email" => "r5jCgmCg5DwypMzdGoxvlTPZaxNVWQ==",
                        "password" => "tZjXkn/1s3k=",
                        "phone" => "12345678900",
                        "countrycode" => "86",
                        "permit" => 1,
                        "manager" => 4,
                        "remark" => ""]
                ]
            );
        }
    }
}

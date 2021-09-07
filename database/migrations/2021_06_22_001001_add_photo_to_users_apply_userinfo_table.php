<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPhotoToUsersApplyUserinfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasColumn('users_apply_userinfo', 'photo')==false) {
            Schema::table('users_apply_userinfo', function (Blueprint $table) {
                $table->string("photo", 512)->nullable();
            });
        }
        if (Schema::hasColumn('users_apply_userinfo', 'country_key')==false) {
            Schema::table('users_apply_userinfo', function (Blueprint $table) {
                $table->string("country_key")->nullable();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users_apply_userinfo', function (Blueprint $table) {
            //
        });
    }
}

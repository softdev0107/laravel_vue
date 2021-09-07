<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPasswordToUsersApplyUserinfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasColumn('users_apply_userinfo', 'password')==false) {
            Schema::table('users_apply_userinfo', function (Blueprint $table) {
                $table->string('password', 512)->nullable();
            });
        }
        if (Schema::hasColumn('users_apply_userinfo', 'active')==false) {
            Schema::table('users_apply_userinfo', function (Blueprint $table) {
                $table->tinyInteger("uactive")->default(0);
            });
        }
        if (Schema::hasColumn('users_apply_userinfo', 'contactname')==false) {
            Schema::table('users_apply_userinfo', function (Blueprint $table) {
                $table->string("contactname")->nullable();
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

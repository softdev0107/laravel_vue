<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersApplyUserinfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('users_apply_userinfo')==false)
        Schema::create('users_apply_userinfo', function (Blueprint $table) {
            $table->id();
            $table->integer("userid")->default(1);
            $table->integer("admin_id")->nullable();
            $table->string("uname")->nullable();
            $table->string("contactname")->nullable();
            $table->string('password', 512)->nullable();
            $table->string("uemail")->nullable();
            $table->string("umobile")->nullable();
            $table->string("country_code")->nullable();
            $table->string("country_name")->nullable();
            $table->string("country_key")->nullable();
            $table->string("organization")->nullable();
            $table->string("license_number")->nullable();
            $table->string("license_img")->nullable();
            $table->string("photo", 512)->nullable();
            $table->string("background", 512)->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->tinyInteger("ustate")->default(0);
            $table->tinyInteger("uactive")->default(0);
            $table->text("remark")->nullable();
            $table->tinyInteger("status")->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_apply_userinfo');
    }
}

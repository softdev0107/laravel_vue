<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSiteBasicSettingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('site_basic_setting')==false)
        Schema::create('site_basic_setting', function (Blueprint $table) {
            $table->id();
            $table->integer("userid")->nullable();
            $table->string("domain")->nullable();
            $table->string("dashboard")->nullable();
            $table->string("slogan")->nullable();
            $table->text("login")->nullable();
            $table->text("register")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('site_basic_setting');
    }
}

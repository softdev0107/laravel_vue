<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitelogoinfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('sitelogoinfo')==false)
        Schema::create('sitelogoinfo', function (Blueprint $table) {
            $table->id();
            $table->string('site_logtype',100)->nullable();//flow,star..
            $table->string('site_logname',1024)->nullable();//1555_xxx_.png
            $table->string('site_logsize',255)->nullable();//36*32
            $table->string('site_logstyle',255)->nullable();//flow
            $table->string('server',255)->nullable();//flow
            $table->timestamps();
            $table->string('g_path')->default('remote');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sitelogoinfo');
    }
}

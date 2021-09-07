<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitelogoimgstyleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('sitelogoimgstyle')==false)
        Schema::create('sitelogoimgstyle', function (Blueprint $table) {
            $table->id();
            $table->string('name',255)->nullable();
            $table->string('size',100)->nullable();
            $table->string('style',255)->nullable();
            $table->string('capacity',50)->nullable();
            $table->string('imgtype',50)->nullable();
            $table->timestamps();
            $table->string('g_path')->default('remote');
            $table->string('state',50)->default('off');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sitelogoimgstyle');
    }
}

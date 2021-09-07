<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWebwesGlobalAppeaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('webwesglobal_appea')==false)
			Schema::create('webwesglobal_appea', function (Blueprint $table) {
				$table->id();
                $table->string('device',50)->index()->nullable();
                $table->string('trans',50)->index()->default('');
				$table->text('head')->nullable();
				$table->integer('is_head')->default(0);
				$table->text('foot')->nullable();
                $table->integer('is_foot')->default(0);
                $table->text('mainmenu')->nullable();
                $table->integer('is_mainmenu')->default(0);
                $table->text('footmenu')->nullable();
                $table->integer('is_footmenu')->default(0);
                $table->text('pageslider')->nullable();
                $table->integer('is_pageslider')->default(0);
                $table->string('sliderstatus',250)->nullable();
                $table->string('teacher',2048)->nullable();
                $table->integer('is_teacher')->default(0);
                $table->string('student',2048)->nullable();
                $table->integer('is_student')->default(0);
                $table->string('background',1024)->nullable();
                $table->integer('is_background')->default(0);
                $table->string('lang',2048)->nullable();
                $table->text('socialsetting')->nullable();
                $table->integer('is_socialsetting')->default(0);
                $table->text('configgenereal')->nullable();
                $table->integer('is_configgenereal')->default(0);
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
        Schema::dropIfExists('webwesglobal_appea');
    }
}

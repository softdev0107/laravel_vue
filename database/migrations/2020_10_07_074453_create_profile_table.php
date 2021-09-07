<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfileTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('profile')==false)
            Schema::create('profile', function (Blueprint $table) {
                $table->id();
                $table->integer('uid')->unsigned()->nullable();// han 2020-10-21
                $table->text('Text')->nullable();
                $table->text('Number')->nullable();
                $table->text('Email')->nullable();
                $table->text('Date')->nullable();
                $table->timestamps();
                $table->text('Default')->nullable();// han 2020-10-21
                $table->text('Senior')->nullable();
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
        Schema::dropIfExists('profile');
    }
}

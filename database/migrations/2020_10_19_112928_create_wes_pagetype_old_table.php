<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWesPagetypeOldTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('wes_pagetype')==false)
            Schema::create('wes_pagetype', function (Blueprint $table) {
                $table->id();
                $table->string('trans',50)->nullable();
                $table->string('name',255)->nullable();
                $table->integer('item_cnt')->default(0);
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
        Schema::dropIfExists('wes_pagetype');
    }
}

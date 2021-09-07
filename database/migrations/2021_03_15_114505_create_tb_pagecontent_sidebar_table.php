<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbPagecontentSidebarTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('tb_pagecontent_sidebar')==false)
        Schema::create('tb_pagecontent_sidebar', function (Blueprint $table) {
            $table->id();
            $table->string("trans", 50)->nullable();
            $table->tinyInteger("sidebar_type")->default(0);
            $table->tinyInteger("mode")->default(0);
            $table->longText("title")->nullable();
            $table->tinyInteger("type")->default(0);
            $table->integer("number")->default(0);
            $table->integer("order_no")->default(1);
            $table->tinyInteger("picture_mode")->default(0);
            $table->integer("pagetype_id")->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
            $table->tinyInteger("is_sidebar")->default(0);
            $table->string("g_path", 50)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_pagecontent_sidebar');
    }
}

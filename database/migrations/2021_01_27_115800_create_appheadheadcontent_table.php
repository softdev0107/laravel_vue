<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppheadheadcontentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('appheadheadcontent')==false)
            Schema::create('appheadheadcontent', function (Blueprint $table) {
                $table->id();
                $table->integer("userid")->nullable();
                $table->string("name")->nullable();
                $table->integer("scid")->nullable();
                $table->string("leftbar", 250)->nullable();
                $table->string("leftbar_num", 250)->nullable();
                $table->string("left_bg")->nullable();
                $table->string("left_color",250)->nullable();
                $table->integer("left_check")->nullable();
                $table->string("middlebar")->nullable();
                $table->string("middlebar_num")->nullable();
                $table->string("middle_bg")->nullable();
                $table->string("middle_color")->nullable();
                $table->integer("middle_check")->nullable();
                $table->string("rightbar")->nullable();
                $table->string("rightbar_num")->nullable();
                $table->string("right_bg")->nullable();
                $table->string("right_color")->nullable();
                $table->integer("right_check")->nullable();
                $table->integer("fixed")->nullable();
                $table->string("padding")->nullable();
                $table->integer("text")->nullable();
                $table->string("text_size")->nullable();
                $table->string("text_color")->nullable();
                $table->string("bg_img")->nullable();
                $table->string("bg_color")->nullable();
                $table->string("bg_size")->nullable();
                $table->string("bg_capacity")->nullable();
                $table->integer("bg_color_check")->nullable();
                $table->timestamps();
                // $table->string('g_path')->default('remote');
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appheadheadcontent');
    }
}

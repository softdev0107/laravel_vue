<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppsubheadcontentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('appsubheadcontent')==false)
            Schema::create('appsubheadcontent', function (Blueprint $table) {
                $table->id();
                $table->integer("userid")->nullable();
                $table->string("name")->nullable();
                $table->integer("scid")->nullable();
                $table->string("style", 250)->nullable();
                $table->string("hide", 250)->nullable();
                $table->integer("fixed")->nullable();
                $table->string("padding",250)->nullable();
                $table->integer("pagetitle")->nullable();
                $table->string("pagetitle_size")->nullable();
                $table->string("pagetitle_color")->nullable();
                $table->integer("breadcrumbs")->nullable();
                $table->string("breadcrumbs_size")->nullable();
                $table->string("breadcrumbs_color")->nullable();
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
        Schema::dropIfExists('appsubheadcontent');
    }
}

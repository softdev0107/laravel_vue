<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppheadcategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('appheadcategory')==false)
        Schema::create('appheadcategory', function (Blueprint $table) {
            $table->id();
            $table->integer("userid")->nullable();
            $table->text("subheadercategory")->nullable();
            $table->integer("subheadercategory_id")->nullable();
            $table->integer("subheaderbackground")->nullable();
            $table->timestamps();
            //$table->string('g_path')->default('remote');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appheadcategory');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppimagesliderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('appimageslider')==false)
        Schema::create('appimageslider', function (Blueprint $table) {
            $table->id();
            $table->integer("userid")->nullable();
            $table->string("name")->nullable();
            $table->text("size")->nullable();
            $table->integer("imgid")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appimageslider');
    }
}

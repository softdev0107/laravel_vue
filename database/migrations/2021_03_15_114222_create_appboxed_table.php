<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppboxedTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('appboxed')==false)
        Schema::create('appboxed', function (Blueprint $table) {
            $table->id();
            $table->integer("userid")->nullable();
            $table->string("name")->nullable();
            $table->string("padding", 500)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appboxed');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppthemecolorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('appthemecolor')==false)
        Schema::create('appthemecolor', function (Blueprint $table) {
            $table->id();
            $table->integer("user_id")->nullable();
            $table->text("color_info")->nullable();
            $table->string("sel_color", 50)->nullable();
            $table->integer("b_id")->nullable();
            $table->integer("f_id")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appthemecolor');
    }
}

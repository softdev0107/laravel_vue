<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWesglobalpageloginTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('wesglobalpagelogin')==false)
            Schema::create('wesglobalpagelogin', function (Blueprint $table) {
                $table->id();
                $table->string('trans',50)->nullable();
                $table->text('sharing')->nullable();
                $table->tinyInteger('is_sharing')->default(0);
                $table->text('instruction')->nullable();
                $table->tinyInteger('is_instruction')->default(0);
                $table->string('background',1024)->nullable();
                $table->tinyInteger('is_background')->default(0);
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
        Schema::dropIfExists('wesglobalpagelogin');
    }
}

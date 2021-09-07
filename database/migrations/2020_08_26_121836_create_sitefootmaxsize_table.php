<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitefootmaxsizeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('sitefootmaxsize')==false)
        Schema::create('sitefootmaxsize', function (Blueprint $table) {
            $table->id();
            $table->string('fontname',255)->nullable();
            $table->string('fontnum',50)->nullable();
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
        Schema::dropIfExists('sitefootmaxsize');
    }
}

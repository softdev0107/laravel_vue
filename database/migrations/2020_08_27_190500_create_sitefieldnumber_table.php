<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitefieldnumberTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('sitefieldnumber')==false)
        Schema::create('sitefieldnumber', function (Blueprint $table) {
            $table->id();
            $table->string('fname', 100)->nullable();
            $table->integer('fnumber')->default(0);
            $table->integer('fontsize')->default(0);
            $table->integer('flineheight')->default(0);
            $table->string('fweightstyle',255)->nullable();
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
        Schema::dropIfExists('sitefieldnumber');
    }
}

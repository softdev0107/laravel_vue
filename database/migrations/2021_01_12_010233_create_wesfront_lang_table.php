<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWesfrontLangTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('wesfront_lang')==false)
        Schema::create('wesfront_lang', function (Blueprint $table) {
            $table->id();
            $table->string("str_type")->index()->nullable();
            $table->string("str_key", 1024)->index()->nullable();
            $table->text("str_cont")->nullable();
            $table->string("str_link")->nullable();
            $table->string("iso", 10)->index()->nullable();
            $table->string('g_path')->default('remote');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wesfront_lang');
    }
}

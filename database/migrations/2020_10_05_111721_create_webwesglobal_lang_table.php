<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWebwesglobalLangTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('webwesglobal_lang')==false)
            Schema::create('webwesglobal_lang', function (Blueprint $table) {
                $table->id();
                $table->string('iso', 50)->nullable();
                $table->string('dialcode', 50)->nullable();
                $table->string('name', 100)->nullable();
                $table->string('status', 50)->nullable();
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
        Schema::dropIfExists('webwesglobal_lang');
    }
}

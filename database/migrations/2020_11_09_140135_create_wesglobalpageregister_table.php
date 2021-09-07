<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWesglobalpageregisterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('wesglobalpageregister')==false)
            Schema::create('wesglobalpageregister', function (Blueprint $table) {
                $table->id();
                $table->string('trans', 50)->nullable();
                $table->string('type', 50)->nullable();
                $table->text('content')->nullable();
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
        Schema::dropIfExists('wesglobalpageregister');
    }
}

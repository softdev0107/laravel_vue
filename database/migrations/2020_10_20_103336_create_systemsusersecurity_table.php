<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSystemsusersecurityTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('systemsusersecurity')==false)
            Schema::create('systemsusersecurity', function (Blueprint $table) {
                $table->id();
                $table->text('strong')->nullable();
                $table->text('medium')->nullable();
                $table->text('low')->nullable();
                $table->text('password')->nullable();
                $table->text('email')->nullable();
                $table->text('mobile')->nullable();
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
        Schema::dropIfExists('systemsusersecurity');
    }
}

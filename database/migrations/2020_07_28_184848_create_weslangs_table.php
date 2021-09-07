<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWeslangsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        if (Schema::hasTable('weslangs')==false)
            Schema::create('weslangs', function (Blueprint $table) {
                $table->id();
                $table->string('status',25)->nullable();
                $table->string('iso',10)->index()->nullable();
                $table->string('dialcode',10)->index()->nullable();
                $table->string('name',100)->index()->nullable();
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
        Schema::dropIfExists('weslangs');
    }
}

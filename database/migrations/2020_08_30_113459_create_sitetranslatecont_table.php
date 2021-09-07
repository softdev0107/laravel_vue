<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitetranslatecontTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('sitetranslatecont')==false)
         Schema::create('sitetranslatecont', function (Blueprint $table) {
            $table->id();
            $table->string('str_type',128)->index('str_type')->nullable();
            $table->string('str_key',1024)->index('str_key')->nullable();
            $table->text('str_cont')->nullable();
            $table->string('str_link',255)->nullable();
            $table->string('iso',10)->index('iso')->nullable();
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
        Schema::dropIfExists('sitetranslatecont');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWesFastUrlTempTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('wes_fast_url_temp')==false)
            Schema::create('wes_fast_url_temp', function (Blueprint $table) {
                $table->id();
                $table->string('email',250)->nullable();
                $table->string('address',500)->nullable();
                $table->smallInteger('status')->default(0);
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
        Schema::dropIfExists('wes_fast_url_temp');
    }
}

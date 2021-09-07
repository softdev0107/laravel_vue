<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWesglobalpageConstructionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('wesglobalpage_construction')==false)
        Schema::create('wesglobalpage_construction', function (Blueprint $table) {
            $table->id();
            $table->string("trans")->nullable();
            $table->string("background")->nullable();
            $table->tinyInteger("status")->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wesglobalpage_construction');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitefieldemailTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('sitelogoimgstyle')==false)
        Schema::create('sitelogoimgstyle', function (Blueprint $table) {
            $table->id();
            $table->string('userid', 255)->nullable();
            $table->string('email',1024)->nullable();
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
        Schema::dropIfExists('sitefieldemail');
    }
}

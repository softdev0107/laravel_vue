<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitefieldmobileTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('sitefieldmobile')==false)
            Schema::create('sitefieldmobile', function (Blueprint $table) {
                $table->id();
                $table->string("name", 50)->nullable();
                $table->string("countryname", 50)->nullable();
                $table->string("countryiso", 50)->nullable();
                $table->string("characters", 50)->nullable();
				$table->integer("dialcode")->default(0);
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
        Schema::dropIfExists('sitefieldmobile');
    }
}

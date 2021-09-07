<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFootstylecontTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('footstylecont')==false)
			Schema::create('footstylecont', function (Blueprint $table) {
				$table->id();
				$table->string('leftcont', 1024)->nullable();
				$table->string('leftclr', 50)->nullable();
				$table->string('leftsize', 50)->nullable();
				$table->integer('leftmaxtext')->default(30);
				$table->string('centcont', 1024)->nullable();
				$table->string('centclr', 50)->nullable();
				$table->string('centsize', 50)->nullable();
				$table->integer('centmaxtext')->default(30);
				$table->string('rightcont', 1024)->nullable();
				$table->string('rightclr', 50)->nullable();
				$table->string('rightsize', 50)->nullable();
				$table->integer('rightmaxtext')->default(30);
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
        Schema::dropIfExists('footstylecont');
    }
}

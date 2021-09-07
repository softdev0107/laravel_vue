<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppmodulelanguageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('appmodulelanguage')==false)
        Schema::create('appmodulelanguage', function (Blueprint $table) {
            $table->id();
            $table->string("iso", 50)->nullable();
            $table->string("dialcode", 50)->nullable();
            $table->string("name", 100)->nullable();
            $table->string("status", 50)->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
            $table->string("g_path", 50)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appmodulelanguage');
    }
}

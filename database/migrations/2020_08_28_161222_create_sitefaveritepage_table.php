<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitefaveritepageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('sitefaveritepage')==false)
            Schema::create('sitefaveritepage', function (Blueprint $table) {
                $table->id();
                $table->string('linkid')->nullable();
                $table->string('pagename')->nullable();
                $table->string('pagemenu')->nullable();
                $table->timestamps();
                $table->string('g_path')->default('remote');
                $table->integer('userinfo_id')->default(1);
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sitefaveritepage');
    }
}

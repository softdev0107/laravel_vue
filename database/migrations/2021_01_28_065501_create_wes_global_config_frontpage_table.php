<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWesGlobalConfigFrontpageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('wes_global_config_frontpage')==false)
            Schema::create('wes_global_config_frontpage', function (Blueprint $table) {
                $table->id();
                $table->integer("userid")->nullable();
                $table->string("title")->nullable();
                $table->string("url")->nullable();
                $table->string("type", 250)->nullable();
                $table->text("content")->nullable();
                $table->string("index")->nullable();
                $table->timestamp("i_date")->nullable();
                $table->string("i_user")->nullable();
                $table->string("login")->nullable();
                $table->timestamp("l_date")->nullable();
                $table->string("l_user")->nullable();
                $table->string("register")->nullable();
                $table->timestamp("r_date")->nullable();
                $table->string("r_user")->nullable();
                $table->string("construction")->nullable();
                $table->timestamp("c_date")->nullable();
                $table->string("c_user")->nullable();
                $table->string("fourpage")->nullable();
                $table->timestamp("f_date")->nullable();
                $table->string("f_user")->nullable();
                $table->string("threepage")->nullable();
                $table->timestamp("t_date")->nullable();
                $table->string("t_user")->nullable();
                $table->string("comingback")->nullable();
                $table->timestamp("b_date")->nullable();
                $table->string("b_user")->nullable();
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
        Schema::dropIfExists('wes_global_config_frontpage');
    }
}

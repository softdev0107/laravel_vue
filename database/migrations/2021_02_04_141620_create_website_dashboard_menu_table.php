<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWebsiteDashboardMenuTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('website_dashboard_menu')==false)
        Schema::create('website_dashboard_menu', function (Blueprint $table) {
            $table->id();
            $table->integer('c_id')->nullable();
            $table->string("name")->nullable();
            $table->integer("p_id")->nullable();
            $table->integer("level")->nullable();
            $table->integer("have_page")->default(0);
            $table->integer("f_id")->default(0);
            $table->string("sort")->nullable();
            $table->string("g_path",50)->default('remote');
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
        Schema::dropIfExists('website_dashboard_menu');
    }
}

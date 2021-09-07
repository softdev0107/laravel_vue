<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppsCourseSettingCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('apps_course_setting_category')==false)
            Schema::create('apps_course_setting_category', function (Blueprint $table) {
                $table->id();
                $table->integer("userid")->nullable();
                $table->string("name")->nullable();
                $table->integer("c_id")->default(0);
                $table->string('g_path')->default('remote');
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
        Schema::dropIfExists('apps_course_setting_category');
    }
}

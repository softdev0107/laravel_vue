<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppsCourseSettingCoursecombinationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('apps_course_setting_coursecombination')==false)
            Schema::create('apps_course_setting_coursecombination', function (Blueprint $table) {
                $table->id();
                $table->integer("userid")->nullable();
                $table->string("name")->nullable();
                $table->string("describes")->nullable();
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
        Schema::dropIfExists('apps_course_setting_coursecombination');
    }
}

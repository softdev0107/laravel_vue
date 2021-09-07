<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSystemusermanagegroupTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('systemusermanagegroup')==false)
        Schema::create('systemusermanagegroup', function (Blueprint $table) {
            $table->id();
            $table->integer("userid")->nullable();
            $table->string("name")->nullable();
            $table->text("user_names")->nullable();
            $table->text("user_ids")->nullable();
            $table->text('permissions')->nullable();
            $table->timestamps();
           // $table->string('g_path')->default('remote');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('systemusermanagegroup');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersEmailmanageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('users_emailmanage')==false)
        Schema::create('users_emailmanage', function (Blueprint $table) {
            $table->id();
            $table->integer("userid")->default(1);
            $table->string("title")->nullable();
            $table->string("keyword")->nullable();
            $table->text("content")->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->tinyInteger("state")->default(0);
            $table->tinyInteger("mail_status")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_emailmanage');
    }
}

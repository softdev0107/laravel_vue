<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersCompanyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('users_company')==false) {
            Schema::create('users_company', function (Blueprint $table) {
                $table->id();
                $table->string('uname')->index()->nullable();
                $table->string('password', 512)->nullable();
                $table->string('uemail')->nullable();
                $table->string('umobile')->nullable();
                $table->string('country_code')->nullable();
                $table->string('country_name')->nullable();
                $table->timestamp('created_at')->useCurrent();
                $table->tinyInteger('ustate')->default('0');
                $table->tinyInteger('uactive')->default('0');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_company');
    }
}

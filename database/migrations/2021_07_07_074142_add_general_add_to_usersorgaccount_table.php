<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddGeneralAddToUsersorgaccountTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasColumn('usersorgaccount', 'general_add')==false) {
            Schema::table('usersorgaccount', function (Blueprint $table) {
                $table->text("general_add")->nullable();
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
        Schema::table('usersorgaccount', function (Blueprint $table) {
            //
        });
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNoticeToUsersProfilesettingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasColumn('users_profilesetting', 'notice')==false) {
            Schema::table('users_profilesetting', function (Blueprint $table) {
                $table->string("notice", 512)->nullable();
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
        Schema::table('users_profilesetting', function (Blueprint $table) {
            //
        });
    }
}

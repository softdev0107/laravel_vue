<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDeviceToWebwesglobalAppeaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasColumn('webwesglobal_appea', 'device')==false)
        Schema::table('webwesglobal_appea', function (Blueprint $table) {
            $table->string('device', 50)->index()->nullable()->after('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('webwesglobal_appea', function (Blueprint $table) {
            //$table->dropColumn('device');
        });
    }
}

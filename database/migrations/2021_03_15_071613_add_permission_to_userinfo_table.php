<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPermissionToUserinfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('userinfo', function (Blueprint $table) {
            if (!Schema::hasColumn('userinfo', 'permission'))
                $table->text('permission')->nullable()->after('rgroup');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('userinfo', function (Blueprint $table) {
            if (Schema::hasColumn('userinfo', 'permission'))
               $table->dropColumn('permission');
        });
    }
}

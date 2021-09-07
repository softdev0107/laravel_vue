<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeContentType extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
	    Schema::table('wes_pagecontent', function (Blueprint $table) {
		    DB::statement("ALTER TABLE wes_pagecontent CHANGE COLUMN content content mediumtext");
            //
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('wes_pagecontent', function (Blueprint $table) {
            //
        });
    }
}

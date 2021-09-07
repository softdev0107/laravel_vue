<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWesPagecontentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('wes_pagecontent')==false) {
            Schema::create('wes_pagecontent', function (Blueprint $table) {
                $table->id();
                $table->string('trans', 50)->nullable();
                $table->integer('pagetypeId')->default(0);
                $table->string('pagename', 1024)->nullable();
                $table->string('title', 1024)->nullable()->collate('utf8_general_ci');
                $table->string('author', 512)->nullable()->collate('utf8_general_ci');
                $table->string('url', 1024)->nullable();
                $table->integer('priority')->default(0);
                $table->string('shstate', 10)->default('1');
                $table->text('content')->nullable()->collate('utf8_general_ci');
                $table->integer('auth_state')->default(0);
                $table->integer('type_state')->default(0);
                $table->integer('date_state')->default(0);
                $table->integer('url_state')->default(0);
                $table->timestamps();
                $table->integer('is_contentlist')->default(0);
                $table->integer('status')->default(0);
                $table->string('g_path')->default('remote');
            });
        }
        else{
            Schema::table('wes_pagecontent', function (Blueprint $table) {
                if (!Schema::hasColumn('wes_pagecontent', 'status')) {
                    $table->integer('status')->default(1);
                }
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
        Schema::dropIfExists('wes_pagecontent');
    }
}

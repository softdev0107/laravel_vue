<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSmsAndmailContTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('smsandmailcont')==false)
            Schema::create('smsandmailcont', function (Blueprint $table) {
                $table->id();
                $table->string('sms_cont',1024)->nullable();
                $table->text('mail_cont')->nullable();
                $table->timestamps();
                $table->string('g_path')->default('remote');
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('smsandmailcont');
    }
}

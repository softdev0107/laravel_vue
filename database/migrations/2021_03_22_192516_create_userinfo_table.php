<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserinfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
 */
    public function up()
    {
        if (Schema::hasTable('userinfo')==false){
            Schema::create('userinfo', function (Blueprint $table) {
                $table->id();
                $table->string('name')->nullable();
                $table->string('username')->nullable();
                $table->string('qualify', 512)->nullable();
                $table->string('email', 512)->unique()->nullable();
                $table->string('password', 512)->nullable();
                $table->string('phone', 50)->nullable();
				$table->integer('countrycode')->default(0);
                $table->string('countryname', 50)->default('en');
                $table->string('phonenumEmail', 512)->nullable();
                $table->string('contact', 512)->nullable();
                $table->string('contactmethod', 512)->nullable();
                $table->string('contactaddr', 1024)->nullable();
                $table->string('photo', 512)->nullable();
                $table->string('background', 512)->nullable();
                $table->string('langcode', 20)->nullable();
                $table->string('uploaddoc', 512)->nullable();
                $table->string('code', 50)->nullable();
                $table->string('qrcode', '1024')->nullable();
                $table->integer('permit')->default(0);
                $table->integer('status')->default(0);
                $table->integer('olpermit')->default(0);
                $table->integer('area')->default(2);//선생 1, 학생2
                $table->integer('manager')->default(0);
                $table->text('remark')->nullable();
                $table->rememberToken();
                $table->softDeletes();
                $table->timestamps();
                $table->integer('department')->default(0);
                $table->integer('position')->default(0);
                $table->text('rgroup')->nullable();
                $table->text('permission')->nullable();
                $table->string('g_path')->default('remote');
            });
        }
        else{
            Schema::table('userinfo', function (Blueprint $table) {
                if (!Schema::hasColumn('userinfo', 'permission')) {
                  $table->text('permission')->nullable();
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
        Schema::dropIfExists('userinfo');
    }
}

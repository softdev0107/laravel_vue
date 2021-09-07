<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class frontlang extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    protected $table = 'wesfront_lang';
    public function run()
    {
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "search", "str_cont" => "Search", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "terms", "str_cont" => "Terms", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "more", "str_cont" => "More", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "for", "str_cont" => "For", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "courses", "str_cont" => "Courses", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "login", "str_cont" => "Login", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "account", "str_cont" => "Account", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "password", "str_cont" => "Password", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "registered", "str_cont" => "Registered", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "retrieve", "str_cont" => "Retrieve", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "organization", "str_cont" => "Organization", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "individual", "str_cont" => "Individual", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "mobile", "str_cont" => "Mobile", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "verification", "str_cont" => "Verification", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "code", "str_cont" => "Code", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "send", "str_cont" => "Send", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "confirm", "str_cont" => "Confirm", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "pwd", "str_cont" => "password", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "enter", "str_cont" => "Enter", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "student", "str_cont" => "Student", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "registration", "str_cont" => "Registration", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "registered", "str_cont" => "Registered", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "reg", "str_cont" => "registered", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "email", "str_cont" => "Email", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "nophonenum", "str_cont" => "Mobile number is not correct", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "noemailtype", "str_cont" => "It is not correct type of email", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "phoneregd", "str_cont" => "phone number was registered", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "vercodeno", "str_cont" => "verification code is not correct!", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "pwdsame", "str_cont" => "password have to same", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "epvercode", "str_cont" => "Empty verification code!", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "verify", "str_cont" => "verification", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "empty", "str_cont" => "Empty", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "please", "str_cont" => "Please fill out this field", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "valid", "str_cont" => "Valid", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "onlystudent", "str_cont" => "Only Student are allowed to register.", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "sendvercode", "str_cont" => "Send verify Code, show your phone!", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "success", "str_cont" => "Success", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "errors", "str_cont" => "ERRORS", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "mailregd", "str_cont" => "mail was registered", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "username", "str_cont" => "Username", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "type", "str_cont" => "Type", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "author", "str_cont" => "Author", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "forget", "str_cont" => "Forget", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "onlysupport", "str_cont" => "Only support Chinese mobile phones", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "name", "str_cont" => "Name", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "confirmpassword", "str_cont" => "Confirm password", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "fastreg", "str_cont" => "Fast register", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "register", "str_cont" => "Register", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "corporate", "str_cont" => "Corporate", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "institution", "str_cont" => "Institution", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "application", "str_cont" => "Application", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "mainperson", "str_cont" => "Main Contact Person", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "business", "str_cont" => "Business", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "license", "str_cont" => "License", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "number", "str_cont" => "Number", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "country", "str_cont" => "Country", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "region", "str_cont" => "Region", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "uploadpic", "str_cont" => "Upload pic", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "matchlicensepic", "str_cont" => "Must match business license picture", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "needidentified", "str_cont" => "Need to be identified with business license", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "notices", "str_cont" => "Notices", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "submit", "str_cont" => "Submit", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "userregfail", "str_cont" => "Your membership to WES is pending approval. Don't repeat submission.", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "back", "str_cont" => "Back", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "userregsuccess", "str_cont" => "Thank you for your successful submission. Once approved, an email confirmation will be sent shortly.", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "locationdescript", "str_cont" => "Based on your ID address", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "loginincorrect", "str_cont" => "User name or password is incorrect.", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "passworddifferent", "str_cont" => "Password different.", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "socialmedia", "str_cont" => "Social Media", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "adduser", "str_cont" => "Add User", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "reguser", "str_cont" => "Register User", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "add", "str_cont" => "Add", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "validationcode", "str_cont" => "Validation Code", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
    }

}

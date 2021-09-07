<template>
    <div class="navigation">
        <div style="display: none">{{defaultlang}}</div>
        <div style="display: none">{{contentchange}}</div>
        <div class="navigation-header">
            <a class="navigation-logo" href="#" @click.stop="SetMenuChange('company_dashboard')">
                <img class="logo star"  src="/images/logo_star.png" alt="logo" id="logostar" onerror="this.src ='/images/noimg.png';">
                <img class="logo flw"   src="/images/logo_flw.png" alt="logo" id="logoflw" onerror="this.src ='/images/noimg.png';">
                <img class="small-logo star" src="/images/logo_star.png" alt="small logo" id="logostar_s" onerror="this.src ='/images/noimg.png';">
            </a>
           <!-- <a href="#" class="small-navigation-toggler" @click.stop="navigationtoggle"></a>-->
            <a href="#" class="small-navigation-toggler"></a>
            <a href="#" class="btn btn-danger mobile-navigation-toggler">
                <i class="ti-close"></i>
            </a>
        </div>

        <div class="navigation-menu-wrapper">

            <!-- start main menu -->
            <div class="navigation-menu-tab" style="overflow: hidden;outline: none;cursor: grab;touch-action: none;">
                <ul>
                    <li>
                        <a href="#" id="company_dashboard" data-menu-target="#company_dashboard_ul" class="active" @click.stop="SetMenuChange('company_dashboard')" >
                                <span class="menu-tab-icon">
                                    <svg t="1599119626249" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10940" width="200" height="200">
                                        <path  d="M864.512 768.83200001c6.144-23.808 10.176-48.448 11.456-73.92l-89.984 2.17599999-1.152-45.56799999 90.56-2.24000001c-6.4-82.304-40.064-156.8-92.032-214.784l-63.36 64.96-32.64-31.808 63.552-65.152c-61.44-53.44-140.864-86.528-228.032-89.088l2.944 90.048L480.256 404.928 477.312 314.624C395.64800001 322.368 321.92 357.184 265.024 409.856l63.68 61.184L297.152 503.936 233.53599999 442.816C184.128 501.568 152.704 576 148.224 657.728l86.656-0.704 0.32 45.568-86.656 0.704c1.536 22.528 5.312 44.416 10.816 65.536L65.28 768.832c-6.016-29.44-9.216-59.968-9.216-91.136 0-251.83999999 204.096-455.936 455.936-455.936s455.936 204.096 455.936 455.936c0 31.232-3.2 61.696-9.216 91.136L864.512 768.83200001 864.512 768.83200001zM876.672 678.4c0-0.192 0.064-0.448 0.064-0.704 0-0.768-0.128-1.536-0.128-2.304L876.672 678.4 876.672 678.4zM398.016 666.304c0-56.00000001 44.928-101.37599999 100.672-102.4l116.8-163.968L581.504 603.83999999c13.376 17.344 21.696 38.784 21.696 62.46400001 0 56.64000001-45.95199999 102.592-102.592 102.592C443.968 768.832 398.016 722.88 398.016 666.304L398.016 666.304zM500.608 723.264c31.424 0 56.96000001-25.472 56.96-56.96 0-31.48800001-25.472-57.024-56.96000001-57.024-31.48800001 0-57.024 25.472-57.02399999 57.024C443.648 697.728 469.12 723.264 500.608 723.264L500.608 723.264zM500.608 723.264" fill="#bfbfbf" p-id="10941"></path></svg>
                                </span>
                            <span class="thisname m-font m-d-f">{{ cmu_dash }}</span>
                        </a>
                        <div class="hidden_menu_area"></div>
                    </li>
                    <li>
                        <a href="#" id="company_webs" data-menu-target="#company_webs_ul"  @click.stop="SetMenuChange('company_webs')">
                                <span class="menu-tab-icon my-tab-icon-webs">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 293.941 293.941" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 293.941 293.941">
                                      <g>
                                        <path d="m281.813,12.042c-18.184-18.184-55.301-15.696-99.239,6.943-12.164-3.463-24.327-5.203-36.49-5.203-71.345,0-130.509,59.164-130.509,130.509 0,11.798 1.705,23.579 4.977,35.376-24.101,46.757-27.041,83.509-8.457,102.093 6.96,8.701 19.141,12.181 33.062,12.181 17.923,0 40.562-7.883 66.211-21.716l-.087,.835h1.74c0,0 0.435-0.4 0.974-0.783 10.702,2.68 21.386,4.263 32.088,4.263 71.345,0 130.509-59.164 130.509-130.509 0-10.163-1.496-20.325-3.915-30.487 24.78-47.436 27.929-84.709 9.136-103.502zm-12.181,10.44c10.441,10.441 8.701,36.543-5.22,67.865-12.181-27.842-34.802-50.463-62.644-62.644 31.321-13.921 55.684-15.661 67.864-5.221zm-123.549,6.961c8.596,0 17.193,1.479 25.806,3.846 1.375,2.018 2.923,3.567 5.516,4.855 36.543,10.441 66.124,40.023 76.565,76.565 0.087,0.174 0.191,0.348 0.278,0.54-15.504,25.441-35.829,52.412-61.182,77.766-25.371,25.371-52.36,45.713-77.835,61.235-0.191-0.105-0.278-0.226-0.47-0.331-36.334-10.388-65.742-39.692-76.339-75.939 0.261-1.236 0.296-2.576-0.226-4.107-3.48-10.441-5.22-20.882-5.22-31.322 1.42109e-14-62.644 50.463-113.108 113.107-113.108zm-123.548,240.137c-10.441-10.441-8.701-36.543 5.22-67.865 13.921,27.842 34.802,48.723 62.644,62.644-31.322,13.921-57.423,15.662-67.864,5.221zm123.548-10.441c-3.445,0-6.891,0-10.336,0 23.091-15.4 45.974-33.88 67.761-55.684 21.473-21.473 40.754-43.973 55.684-66.699 0,3.098 0,6.195 0,9.275-0.001,62.644-50.464,113.108-113.109,113.108z"/>
                                      </g>
                                    </svg>
                                </span>
                            <span class="thisname m-font m-w-f">{{ cmu_webs }}</span>
                        </a>
                        <div class="hidden_menu_area"></div>
                    </li>
                    <li>
                        <a href="#" id="company_users" data-menu-target="#company_users_ul"  @click.stop="SetMenuChange('company_users')">
                                <span class="menu-tab-icon">
                                  <svg t="1599121827987" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="40007" width="20" height="20"><path d="M317.220571 535.186286a167.716571 167.716571 0 0 1-62.025142-130.486857A166.912 166.912 0 0 1 421.522286 237.129143a166.912 166.912 0 0 1 166.326857 167.570286 167.716571 167.716571 0 0 1-62.025143 130.486857 277.942857 277.942857 0 0 1 171.154286 256.877714 282.185143 282.185143 0 0 1-1.974857 33.060571h-59.830858a220.964571 220.964571 0 0 0 2.486858-33.060571 216.941714 216.941714 0 0 0-216.064-217.746286A216.941714 216.941714 0 0 0 205.531429 792.064a221.184 221.184 0 0 0 2.486857 33.060571H148.187429A282.624 282.624 0 0 1 146.285714 792.064a277.942857 277.942857 0 0 1 171.081143-256.877714z m104.301715-22.747429a107.373714 107.373714 0 0 0 107.008-107.812571 107.373714 107.373714 0 0 0-107.008-107.812572A107.373714 107.373714 0 0 0 314.514286 404.626286a107.373714 107.373714 0 0 0 107.008 107.812571z m193.316571-292.571428a166.912 166.912 0 0 1 166.253714 167.497142 167.789714 167.789714 0 0 1-61.952 130.56 277.942857 277.942857 0 0 1 171.008 257.097143 281.965714 281.965714 0 0 1-1.901714 33.060572h-59.830857a221.696 221.696 0 0 0 2.486857-33.060572 216.868571 216.868571 0 0 0-215.990857-217.746285h0.731429a30.939429 30.939429 0 0 1-30.939429-30.939429 30.939429 30.939429 0 0 1 30.939429-30.939429h-0.731429a107.373714 107.373714 0 0 0 106.861714-108.032A107.373714 107.373714 0 0 0 614.838857 279.552a82.870857 82.870857 0 0 0-14.628571 1.462857 26.477714 26.477714 0 0 1-30.72-21.357714V257.682286a33.572571 33.572571 0 0 1 29.257143-36.571429 129.536 129.536 0 0 1 16.457142-1.243428z m0 0" p-id="40008"></path></svg>
                                </span>
                            <span class="thisname m-font m-u-f">{{ cmu_users }}</span>
                        </a>
                        <div class="hidden_menu_area"></div>
                    </li>
                    <li>
                        <a href="#" id="company_setting" data-menu-target="#company_setting_ul" @click.stop="SetMenuChange('company_setting')">
                                <span class="menu-tab-icon">
                                 <svg t="1599123357788" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9692" width="17" height="17"><path d="M281.6 512c-56.32 0-102.4 46.08-102.4 102.4s46.08 102.4 102.4 102.4S384 670.72 384 614.4 337.92 512 281.6 512z m0 153.6c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2 51.2 23.04 51.2 51.2-23.04 51.2-51.2 51.2z" p-id="9693"></path><path d="M870.4 51.2H153.6c-56.32 0-102.4 46.08-102.4 102.4v716.8c0 56.32 46.08 102.4 102.4 102.4h716.8c56.32 0 102.4-46.08 102.4-102.4V153.6c0-56.32-46.08-102.4-102.4-102.4z m51.2 819.2c0 28.16-23.04 51.2-51.2 51.2H153.6c-28.16 0-51.2-23.04-51.2-51.2V153.6c0-28.16 23.04-51.2 51.2-51.2h716.8c28.16 0 51.2 23.04 51.2 51.2v716.8z" p-id="9694"></path><path d="M512 256c-56.32 0-102.4 46.08-102.4 102.4S455.68 460.8 512 460.8s102.4-46.08 102.4-102.4S568.32 256 512 256z m0 153.6c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2 51.2 23.04 51.2 51.2-23.04 51.2-51.2 51.2z m230.4 204.8c-56.32 0-102.4 46.08-102.4 102.4s46.08 102.4 102.4 102.4 102.4-46.08 102.4-102.4-46.08-102.4-102.4-102.4z m0 153.6c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2 51.2 23.04 51.2 51.2-23.04 51.2-51.2 51.2z" p-id="9695"></path><path d="M512 256c7.68 0 17.92 2.56 25.6 2.56V179.2c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v79.36c7.68 0 17.92-2.56 25.6-2.56z m0 204.8c-7.68 0-17.92-2.56-25.6-2.56V844.8c0 15.36 10.24 25.6 25.6 25.6s25.6-10.24 25.6-25.6V458.24c-7.68 0-17.92 2.56-25.6 2.56z m230.4 153.6c7.68 0 17.92 2.56 25.6 2.56V179.2c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v437.76c7.68 0 17.92-2.56 25.6-2.56z m0 204.8c-7.68 0-17.92-2.56-25.6-2.56v28.16c0 15.36 10.24 25.6 25.6 25.6s25.6-10.24 25.6-25.6v-28.16c-7.68 0-17.92 2.56-25.6 2.56zM281.6 512c7.68 0 17.92 2.56 25.6 2.56V179.2c0-15.36-10.24-25.6-25.6-25.6S256 163.84 256 179.2v335.36c7.68 0 17.92-2.56 25.6-2.56z m0 204.8c-7.68 0-17.92-2.56-25.6-2.56V844.8c0 15.36 10.24 25.6 25.6 25.6s25.6-10.24 25.6-25.6V714.24c-7.68 0-17.92 2.56-25.6 2.56z" p-id="9696"></path></svg>
                                </span>
                            <span class="thisname m-font m-s-f">{{ cmu_setting }}</span>
                        </a>
                        <div class="hidden_menu_area"></div>
                    </li>
                </ul>
            </div>
           <!-- end main menu -->

        <!-- start submenu of main menu -->
            <div class="navigation-menu-body" style="overflow: hidden; outline: none;">
                <!-- start  submenu of dashboard main menu -->
                <ul id="company_dashboard_ul" style="display: block">
                    <li class="navigation-divider" id="dashboard-title">{{ cmu_dash }}</li>
                </ul>
                <!-- end  submenu of dashboard main menus -->

                <!-- start  submenu of webs main menu -->
                <ul id="company_webs_ul">
                    <li class="navigation-divider">{{ cmu_webs }}</li>
                </ul>
                <!-- end  submenu of webs main menu -->

                <!-- start  submenu of users main menu -->
                <ul id="company_users_ul">
                    <li class="navigation-divider">{{ cmu_users }}</li>
                    <li>
                        <a  href="#" id="company-users-userlist" @click.stop="SetSubMenuChange('User List','company-users-userlist')">
                            <svg t="1615182678689" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7691" width="16" height="16"><path d="M752.426667 330.666667c0-135.253333-110.08-245.333333-245.333334-245.333334s-245.333333 110.08-245.333333 245.333334c0 77.013333 35.626667 145.706667 91.306667 190.72C205.866667 582.186667 101.973333 727.04 101.76 896c0 23.466667 19.2 42.666667 42.666667 42.666667s42.666667-19.2 42.666666-42.666667c0-176.426667 143.573333-320 320-320 135.466667 0 245.333333-110.08 245.333334-245.333333zM507.093333 170.666667c88.32 0 160 71.68 160 160s-71.68 160-160 160-160-71.68-160-160S418.986667 170.666667 507.093333 170.666667zM640 618.24c0 23.466667 19.2 42.666667 42.666667 42.666667h196.906666c23.466667 0 42.666667-19.2 42.666667-42.666667s-19.2-42.666667-42.666667-42.666667H682.666667c-23.466667 0-42.666667 19.2-42.666667 42.666667zM879.573333 714.453333H682.666667c-23.466667 0-42.666667 19.2-42.666667 42.666667s19.2 42.666667 42.666667 42.666667h196.906666c23.466667 0 42.666667-19.2 42.666667-42.666667s-19.2-42.666667-42.666667-42.666667zM879.573333 853.333333H682.666667c-23.466667 0-42.666667 19.2-42.666667 42.666667s19.2 42.666667 42.666667 42.666667h196.906666c23.466667 0 42.666667-19.2 42.666667-42.666667s-19.2-42.666667-42.666667-42.666667z" p-id="7692"></path></svg>
                            <span class="thisname m-l-10">{{ cmusu_company_users_userlist }}</span>
                        </a>
                    </li>
                </ul>
                <!-- end  submenu of users main menu -->

                <!-- start  submenu of system main menu -->
                <ul id="company_setting_ul">
                    <li class="navigation-divider" id="setting-title">{{ cmu_setting }}</li>
                    <li>
                        <a  href="#" id="company-setting-account" @click.stop="SetSubMenuChange('Account','company-setting-account')">
                            <svg id="Flat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><path d="M225.939,72.833c-.03173-.0586-.05664-.11914-.09033-.17749-.02636-.04663-.0581-.08814-.08593-.134a15.98749,15.98749,0,0,0-5.88965-5.78295l-84-47.47828a16.08654,16.08654,0,0,0-15.7461,0l-84,47.47852a15.99434,15.99434,0,0,0-5.96093,5.8999c-.01465.02588-.03223.04907-.04688.0752-.02588.0459-.04443.09375-.06934.13989A15.98459,15.98459,0,0,0,28,80.66772v94.6648a16.02531,16.02531,0,0,0,8.127,13.92871l84,47.478a15.97377,15.97377,0,0,0,7.30078,2.041c.16309.01172.32422.02808.48975.02979.02832.00049.05615.00049.08447.00049.22119,0,.43946-.01514.65625-.033a15.97571,15.97571,0,0,0,7.21485-2.03833l84-47.478A16.02531,16.02531,0,0,0,228,175.33252V80.66772A15.985,15.985,0,0,0,225.939,72.833ZM128,33.18945l75.813,42.85083L129.0166,118.81055,52.3291,75.96Zm8.13037,185.02564.8833-85.54663L212,89.79v85.54248Z"/></svg>
                            <span class="thisname m-l-10">{{ cmusu_company_setting_account }}</span>
                        </a>
                    </li>
                    <li>
                        <a  href="#" id="company-setting-information" @click.stop="SetSubMenuChange('Information','company-setting-information')">
                            <svg id="Flat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><path d="M225.939,72.833c-.03173-.0586-.05664-.11914-.09033-.17749-.02636-.04663-.0581-.08814-.08593-.134a15.98749,15.98749,0,0,0-5.88965-5.78295l-84-47.47828a16.08654,16.08654,0,0,0-15.7461,0l-84,47.47852a15.99434,15.99434,0,0,0-5.96093,5.8999c-.01465.02588-.03223.04907-.04688.0752-.02588.0459-.04443.09375-.06934.13989A15.98459,15.98459,0,0,0,28,80.66772v94.6648a16.02531,16.02531,0,0,0,8.127,13.92871l84,47.478a15.97377,15.97377,0,0,0,7.30078,2.041c.16309.01172.32422.02808.48975.02979.02832.00049.05615.00049.08447.00049.22119,0,.43946-.01514.65625-.033a15.97571,15.97571,0,0,0,7.21485-2.03833l84-47.478A16.02531,16.02531,0,0,0,228,175.33252V80.66772A15.985,15.985,0,0,0,225.939,72.833ZM128,33.18945l75.813,42.85083L129.0166,118.81055,52.3291,75.96Zm8.13037,185.02564.8833-85.54663L212,89.79v85.54248Z"/></svg>
                            <span class="thisname m-l-10">{{ cmusu_company_setting_information }}</span>
                        </a>
                    </li>
                </ul>
                <!-- end  submenu of system main menu -->
            </div>
         <!-- end body of main menu -->
        </div>
    </div>
</template>
<style>
    .navigation .navigation-menu-tab ul li a .menu-tab-icon.my-tab-icon-webs{
        padding:10px 0;
    }
  body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .menu-tab-icon.my-tab-icon-webs{
      /*  padding:9px 0;*/
        padding:10px 0;
    }
    body.small-navigation:not(.horizontal-navigation) .navigation:hover .navigation-menu-tab ul li a .menu-tab-icon.my-tab-icon-webs{
        padding:10px 0;
    }
    body.small-navigation:not(.horizontal-navigation) .navigation:hover .navigation-menu-tab ul li a .menu-tab-icon.my-tab-icon-webs{
        padding:10px 0;
    }
</style>
<script>

    import nav_company from "../assets/jsfunc/nav_company";
    import myjs_md from "../assets/jsfunc/mjs_module";
    var seletedMenuId="company_dashboard";
    var vueOBJ=null;

    function windowlocationurlchange(){
       var urlstr=window.location.href;
       if(urlstr.indexOf('fastreg=') > -1){
           var urlstr_a = urlstr.split('fastreg');
           window.location.href=urlstr_a[0];
       }
    }

    var clicked = false, clickY;
    var updateScrollPos = function(e) {
       // $('html').css('cursor', 'grabbing');
        $(".navigation-menu-tab").scrollTop($(".navigation-menu-tab").scrollTop() + (clickY - e.pageY));
    }

    var enter=false;
  export default {
      name: "NavigationCompo",
      data() {
          return {
              logoinfo: '',
              favorites: [],

              mu_dash: '',
              mu_users: '',
              mu_webs: '',
              mu_setting: '',

              musu_company_setting_account: '',
              musu_company_setting_information: '',
              musu_company_users_userlist: '',
          }
      },
      computed: {
          cmu_dash: function () {
              return this.mu_dash;
          },
          cmu_webs: function () {
              return this.mu_webs;
          },
          cmu_setting: function () {
              return this.mu_setting;
          },
          cmu_users: function () {
              return this.mu_users;
          },
          cmusu_company_setting_account: function () {
              return this.musu_company_setting_account;
          },
          cmusu_company_setting_information: function () {
              return this.musu_company_setting_information;
          },
          cmusu_company_users_userlist: function () {
              return this.musu_company_users_userlist;
          },



          defaultlang: function () {//cckd
              return this.$store.state.defaultlang;
          },
          contentchange: function () {//cckd
              // this.setPGSiteChacters();//cckd
              myjs_md.data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
                  if (obj.hasOwnProperty(key)) {
                      obj[key] = value;
                  }
              });
              // this.mu_dash = this.$store.state.sitecontents['mu_dash'];
              return this.$store.state.contentchange;
          },
      },
      created() {
          this.favorites = nav_company.data.jsonparse(window.Laravel.favorites);
          /*  if(window.location.hostname.indexOf('.cn') > -1)
          {
               this.logoinfo = nav_company.data.jsonparse(window.Laravel.cnlogoinfo);
          }
          else
	      */
          {
              this.logoinfo = nav_company.data.jsonparse(window.Laravel.logoinfo);
          }
      },
      beforeMount() {
      },
      mounted() {
          vueOBJ=this;
          myjs_md.data.InitfavList(this.favorites, this);
          var status = window.Laravel.status;

          if(parseInt(status) === 0)
          {
              this.SetMenuChange('company_setting');
              this.SetSubMenuChange('Account','company-setting-account');
          }
          this.setSiteLogoFiles();
          $(".navigation-menu-tab").mousewheel(function (event, delta) {
              this.scrollTop -= (delta * 30);
              event.preventDefault();
          });

          var firstclick = true;
          $(document).on('click', 'body:not(.small-navigation) .navigation .navigation-header a.small-navigation-toggler', function () {
              $('.hidden_menu_area').css('display', 'block');
              $('span.thisname.m-font').css('display', 'none');
              if (firstclick) {
                  nav_company.data.wideControllerNavBarfirst();
                  firstclick = false;
              }
          });
          $(document).on('click', 'body.small-navigation:not(.horizontal-navigation) .navigation .navigation-header a.small-navigation-toggler', function () {
              $('.hidden_menu_area').css('display', 'none');
              $('span.thisname.m-font').css('display', 'block');
              nav_company.data.wideControllerNavBarsecond();
          });


          $(document).on('mouseenter', 'body.small-navigation:not(.horizontal-navigation) .navigation a[data-menu-target]', function () {
              enter = true;
              $('.navigation a[data-menu-target]').removeClass('active');
              $('.hidden_menu_area').css('display', 'block');
              $('.thisname.m-font').css('display', 'none');
              var $this = $(this);
              var mname = $this.attr("data-menu-target");
              mname = mname.replace('#', '');
              nav_company.data.menuChange(mname);
              nav_company.data.wideControllerNavBar();
          });

          $(document).on('mouseenter', 'body.small-navigation:not(.horizontal-navigation) .navigation .navigation-header', function () {
              enter = true;
              $('.navigation a[data-menu-target]').removeClass('active');
              $('.hidden_menu_area').css('display', 'block');
              $('.thisname.m-font').css('display', 'none');

              var mname = $('#' + seletedMenuId).attr("data-menu-target");
              mname = mname.replace('#', '');
              nav_company.data.menuChange(mname);
              nav_company.data.wideControllerNavBar();
          });

          $(document).on('mouseleave', 'body.small-navigation:not(.horizontal-navigation) .navigation a[data-menu-target]', function () {
              enter = false;
          });
          $(document).on('mouseleave', 'body.small-navigation:not(.horizontal-navigation) .navigation .navigation-header', function () {
              enter = false;
          });


          /*mouseover part*/
          $(document).on('mouseover', 'body.small-navigation:not(.horizontal-navigation) .header.d-print-none', function (e) {

              var right = $('body.small-navigation:not(.horizontal-navigation) .navigation').outerWidth(true);
              if (right < 370) return;
              $('.navigation a[data-menu-target]').removeClass('active');
              $('.hidden_menu_area').css('display', 'block');
              $('.thisname.m-font').css('display', 'none');

              var mname = $('#' + seletedMenuId).attr("data-menu-target");
              mname = mname.replace('#', '');
              nav_company.data.menuChange(mname);
              nav_company.data.shrinkControllerNavBar();
          });
          //var aa=0;
          $(document).on('mouseover', 'body.small-navigation:not(.horizontal-navigation) .content-wrapper', function (e) {

              if (enter) return;

              var right = $('body.small-navigation:not(.horizontal-navigation) .navigation').offset().left + $('body.small-navigation:not(.horizontal-navigation) .navigation').outerWidth(true);
              //aa++;
              var x = e.pageX;//

              if (right < 370) return;
              var y = e.pageY;//
              var offset = $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul').offset();
              var left = offset.left;
              var top = offset.top;
              var height = $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul').outerHeight(true);
              var bottom = top + height;
              var flag = 0;
              if (x < left)
                  flag = 1;
              if (x > (right - 5))
                  flag = 1;
              if (y < 0)
                  flag = 1;
              if (y > bottom)
                  flag = 1;

              if (flag == 1) {
                  $('.navigation a[data-menu-target]').removeClass('active');
                  $('.hidden_menu_area').css('display', 'block');
                  $('.thisname.m-font').css('display', 'none');

                  var mname = $('#' + seletedMenuId).attr("data-menu-target");
                  mname = mname.replace('#', '');
                  nav_company.data.menuChange(mname);
                  nav_company.data.shrinkControllerNavBar();
              }
          });
      },
      methods: {
          setSiteLogoFiles() {
              if (this.logoinfo == '') return;
              var logflw_name = this.logoinfo.logflw_name;
              var logflw_size = this.logoinfo.logflw_size;
              var logflw_style = this.logoinfo.logflw_style;
              var fiw = "74";
              var fih = "22";
              if (logflw_size != null && logflw_size.indexOf('*') > -1) {
                  fiw = logflw_size.split('*')[0];
                  fih = logflw_size.split('*')[1];
              }

              var logstar_name = this.logoinfo.logstar_name;
              var logstar_size = this.logoinfo.logstar_size;
              var logstar_style = this.logoinfo.logstar_style;

              var siw = "36";
              var sih = "32";
              if (logstar_size != null && logstar_size.indexOf('*') > -1) {
                  siw = logstar_size.split('*')[0];
                  sih = logstar_size.split('*')[1];
              }

              $('#logoflw').attr('src', '/images/' + logflw_name);
              $('#logoflw').css({'width': fiw + 'px', 'height': fih + 'px'});

              $('#logostar').attr('src', '/images/' + logstar_name);
              $('#logostar').css({'width': siw + 'px', 'height': sih + 'px'});
              $('#logostar_s').attr('src', '/images/' + logstar_name);
              $('#logostar_s').css({'width': siw + 'px', 'height': sih + 'px'});
          },
          SetMenuChange(pid) {
              //seletedMenuId = $("a[data-menu-target='#" + pid + "_ul']").attr("id");
              var dname = $("a[data-menu-target='#" + pid + "_ul'] span.thisname").text();
              var pidVal = pid + '_ul';
              nav_company.data.menuChange(pidVal);
              this.$store.dispatch('SetMenuChange', dname);
          },
          SetSubMenuChange(selectedMenu, pid) {
              /* 머리부의 account을 눌렀다가 새롭게 들어올떄 필요함. */
              let m_mu = pid.split('-')[0];
              //seletedMenuId = $("a[data-menu-target='#" + m_mu + "_ul']").attr("id");
              //nav_company.data.menuChange(m_mu);
              /**/
              let aaa = nav_company.data.exstingChildMenu(pid, '');
              if (aaa.childcnt < 1)//더이상 자식메뉴가 없다면 내용이 보여야 한다.
              {
                  var dname = $("#" + pid + " span.thisname").text();
                  var ppp = dname + "|" + pid;
                  nav_company.data.submenuChange(pid);
                  this.$store.dispatch('SetSubMenuChange', ppp);
              } else {
                  nav_company.data.submenuDropdown(pid, 1);
              }
          },
          SetSubSubMenuChange(selectedMenu, pid) {
              /* 머리부의 account을 눌렀다가 새롭게 들어올떄 필요함. */
              let m_mu = pid.split('-')[0];
              let s_mu = pid.split('-')[1];
              //seletedMenuId = $("a[data-menu-target='#" + m_mu + "_ul']").attr("id");
              //nav_company.data.menuChange(m_mu);
             let aaa = nav_company.data.exstingChildMenu(pid, '');
              if (aaa.childcnt < 1) {
                  var dname = $("#" + pid + " span.thisname").text();
                  var ppp = dname + "|" + pid;
                  nav_company.data.subsubmenuChange(pid);
                  this.$store.dispatch('SetSubMenuChange', ppp);
              } else {
                  nav_company.data.submenuDropdown(pid, 2);
              }
          },
          SetSubSubSubMenuChange(selectedMenu, pid) {
              /* 머리부의 account 눌렀다가 새롭게 들어올떄 필요함. */
              var dname = $("#" + pid + " span.thisname").text();
              var ppp = dname + "|" + pid;
              nav_company.data.subsubsubmenuChange(pid);
              this.$store.dispatch('SetSubMenuChange', ppp);
          },
          SetSubSubSubSubMenuChange(selectedMenu, pid) {
              /* 머리부의 account 눌렀다가 새롭게 들어올떄 필요함. */
              let m_mu = pid.split('-')[0];
              let s_mu = pid.split('-')[1];
              let ss_mu = pid.split('-')[2];
              let sss_mu = pid.split('-')[3];
          },
          navigationtoggle(event) {
          }
      }//method

  }

</script>

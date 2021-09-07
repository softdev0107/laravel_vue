let menuList=[
    {menu:'Dashboard', id:'dashboard', tk:'mu_dash', submenus:[
            {menu:'Analytics',id:'dashboard-analytics', tk:'musu_dash_analy', submenus:[]},
            {menu:'Studio cloud',id:'dashboard-studiocloud', tk:'musu_dash_stud', submenus:[]},
            {menu:'User',id:'dashboard-user', tk:'musu_dash_user', submenus:[]}
        ]},
    {menu:'Apps', id:'apps',tk:'mu_apps', submenus:[
        {menu:'Website', id:'apps-website', tk:'musu_apps_website', submenus:[
            {menu:'Fields', id:'apps-website-fields', tk:'mususu_apps_website_fields', submenus:[
                    {menu:'Image', id:'apps-website-fields-image', tk:'musususu_apps_website_fields_image', submenus:[]},
                    {menu:'Text', id:'apps-website-fields-text', tk:'musususu_apps_website_fields_text', submenus:[]},
                    {menu:'Number', id:'apps-website-fields-number', tk:'musususu_apps_website_fields_number', submenus:[]},
                    {menu:'Mobile', id:'apps-website-fields-mobile', tk:'musususu_apps_website_fields_mobile', submenus:[]},
                    {menu:'Email', id:'apps-website-fields-email', tk:'musususu_apps_website_fields_email', submenus:[]},
                    {menu:'Date', id:'apps-website-fields-date', tk:'musususu_apps_website_fields_date', submenus:[]},
                ]},
            {menu:'Appearance', id:'apps-website-appearance', tk:'mususu_apps_website_appear', submenus:[
                {menu:'Theme', id:'apps-website-appearance-theme', tk:'musususu_apps_website_appear_theme', submenus:[]},
                {menu:'Head', id:'apps-website-appearance-head', tk:'musususu_apps_website_appear_head', submenus:[]},
            ]},
            {menu:'Module', id:'apps-website-module', tk:'mususu_apps_website_module', submenus:[
                {menu:'Web language', id:'apps-website-module-weblanguage', tk:'musususu_apps_website_module_weblanguage', submenus:[]},
            ]},
            {menu:'Tools', id:'apps-website-tools', tk:'mususu_apps_website_tools', submenus:[
                {menu:'Slider', id:'apps-website-tools-slider', tk:'musususu_apps_website_tools_slider', submenus:[]},
                {menu:'Menu', id:'apps-website-tools-menu', tk:'musususu_apps_website_tools_menu', submenus:[]},
                {menu:'View', id:'apps-website-tools-view', tk:'musususu_apps_website_tools_view', submenus:[]},
            ]},
            {menu:'Template', id:'apps-website-template', tk:'mususu_apps_website_temp', submenus:[]},
        ]},
        {menu:'Affairs', id:'apps-affairs', tk:'musu_apps_affa', submenus:[
            {menu:'Management', id:'apps-affairs-management', tk:'mususu_apps_affa_manage', submenus:[]},
        ]},
        {menu:'Courses', id:'apps-courses', tk:'musu_apps_courses', submenus:[
            {menu:'Courses', id:'apps-courses-courses', tk:'mususu_apps_courses_courses', submenus:[]},
            {menu:'Setting', id:'apps-courses-setting', tk:'mususu_apps_courses_setting', submenus:[]},
        ]},
        {menu:'Class room', id:'apps-classroom', tk:'musu_apps_classroom', submenus:[]}
    ]},
    {menu:'Users', id:'users', tk:'mu_users', submenus:[
            {menu:'Organization', id:'users-organization', tk:'musu_users_org', submenus:[
                {menu:'Account', id:'users-organization-account', tk:'mususu_users_org_account', submenus:[]},
                {menu:'Global', id:'users-organization-global', tk:'mususu_users_org_global', submenus:[
                    {menu:'Applicants', id:'users-organization-global-applicants', tk:'musususu_users_org_applicants', submenus:[]},
                    {menu:'User', id:'users-organization-global-ouser', tk:'musususu_users_org_ouser', submenus:[]},
                    {menu:'Profile Setting', id:'users-organization-global-profilesetting', tk:'musususu_users_org_profilesetting', submenus:[]},
                    {menu:'Email Manage', id:'users-organization-global-emailmanage', tk:'musususu_users_org_emailmanage', submenus:[]},
                ]},
                {menu:'China', id:'users-organization-china', tk:'mususu_users_org_china', submenus:[
                    {menu:'Applicants', id:'users-organization-china-applicants', tk:'musususu_users_org_applicants', submenus:[]},
                    {menu:'User', id:'users-organization-china-ouser', tk:'musususu_users_org_ouser', submenus:[]},
                ]},
            ]},
            {menu:'Individual', id:'users-individual', tk:'musu_users_ind', submenus:[]}
        ]},
    {menu:'Webs',id:'webs', tk:'mu_webs', submenus:[
            {menu:'Wes China', id:'webs-weschina', tk:'musu_webs_weschina', submenus:[
                    {menu:'Media', id:'webs-weschina-media', tk:'mususu_webs_weschina_media', submenus:[
                            {menu:'Theme', id:'webs-weschina-media-video', tk:'musususu_webs_weschina_media_video', submenus:[]},
                            {menu:'Head', id:'webs-weschina-media-image', tk:'musususu_webs_weschina_media_image', submenus:[]},
                            {menu:'Foot', id:'webs-weschina-media-audio', tk:'musususu_webs_weschina_media_image', submenus:[]}
                        ]},
                    {menu:'Appearance', id:'webs-weschina-appearance', tk:'mususu_webs_weschina_appearance', submenus:[
                            {menu:'Theme', id:'webs-weschina-appearance-theme', tk:'musususu_webs_weschina_appearance_theme', submenus:[]},
                            {menu:'Head', id:'webs-weschina-appearance-head', tk:'musususu_webs_weschina_appearance_head', submenus:[]},
                            {menu:'Foot', id:'webs-weschina-appearance-foot', tk:'musususu_webs_weschina_appearance_foot', submenus:[]}
                        ]},
                    {menu:'Menus', id:'webs-weschina-menus', tk:'mususu_webs_weschina_menus', submenus:[
                            {menu:'Main menu', id:'webs-weschina-menus-mainmenu', tk:'musususu_webs_weschina_menus_main', submenus:[]},
                            {menu:'Foot menu', id:'webs-weschina-menus-footmenu', tk:'musususu_webs_weschina_menus_foot', submenus:[]}
                        ]},
                    {menu:'Pages', id:'webs-weschina-pages', tk:'mususu_webs_weschina_pages', submenus:[
                            {menu:'Index', id:'webs-weschina-pages-index', tk:'musususu_webs_weschina_pages_index', submenus:[]},
                            {menu:'Construction', id:'webs-weschina-pages-construction', tk:'musususu_webs_weschina_pages_construction', submenus:[]},
                            {menu:'404', id:'webs-weschina-pages-404', tk:'musususu_webs_weschina_pages_nopage', submenus:[]},
                            {menu:'Register', id:'webs-weschina-pages-register', tk:'musususu_webs_weschina_pages_register', submenus:[]},
                            {menu:'Login', id:'webs-weschina-pages-login', tk:'musususu_webs_weschina_pages_login', submenus:[]},
                            {menu:'Content', id:'webs-weschina-pages-content', tk:'musususu_webs_weschina_pages_content', submenus:[]},
                            {menu:'Course', id:'webs-weschina-pages-course', tk:'musususu_webs_weschina_pages_course', submenus:[]},
                        ]},
                    {menu:'Modules', id:'webs-weschina-modules', tk:'mususu_webs_weschina_modules', submenus:[]},
                    {menu:'Tools', id:'webs-weschina-tools', tk:'mususu_webs_weschina_tools', submenus:[]},
                    {menu:'Social', id:'webs-weschina-social', tk:'mususu_webs_weschina_social', submenus:[
                            {menu:'Setting', id:'webs-weschina-social-setting', tk:'musususu_webs_weschina_social_setting', submenus:[]}
                        ]},
                    {menu:'Configuration', id:'webs-weschina-configuration', tk:'mususu_webs_weschina_configuration', submenus:[
                            {menu:'Language', id:'webs-weschina-configuration-language', tk:'musususu_webs_weschina_configuration_language', submenus:[]},
                            {menu:'General', id:'webs-weschina-configuration-general', tk:'musususu_webs_weschina_configuration_general', submenus:[]},
                            {menu:'Translation', id:'webs-weschina-configuration-translation', tk:'musususu_system_setting_language_trans', submenus:[]},
                            {menu:'Front pages', id:'webs-weschina-configuration-frontpages', tk:'musususu_webs_weschina_configuration_frontpages', submenus:[]},
                            {menu:'File Manager', id:'webs-weschina-configuration-filemanager', tk:'musususu_webs_weschina_configuration_filemanager', submenus:[]}
                        ]},
                ]},
            {menu:'Wes Global', id:'webs-wesglobal', tk:'musu_webs_wesglobal', submenus:[
                    {menu:'Media', id:'webs-wesglobal-media', tk:'mususu_webs_wesglobal_media', submenus:[
                            {menu:'Theme', id:'webs-wesglobal-media-video', tk:'musususu_webs_wesglobal_media_video', submenus:[]},
                            {menu:'Head', id:'webs-wesglobal-media-image', tk:'musususu_webs_wesglobal_media_image', submenus:[]},
                            {menu:'Foot', id:'webs-wesglobal-media-audio', tk:'musususu_webs_wesglobal_media_image', submenus:[]}
                        ]},
                    {menu:'Appearance', id:'webs-wesglobal-appearance', tk:'mususu_webs_wesglobal_appearance', submenus:[
					        {menu:'Theme', id:'webs-wesglobal-appearance-theme', tk:'musususu_webs_wesglobal_appearance_theme', submenus:[]},
                            {menu:'Head', id:'webs-wesglobal-appearance-head', tk:'musususu_webs_wesglobal_appearance_head', submenus:[]},
                            {menu:'Foot', id:'webs-wesglobal-appearance-foot', tk:'musususu_webs_wesglobal_appearance_foot', submenus:[]}
                        ]},
                    {menu:'Menus', id:'webs-wesglobal-menus', tk:'mususu_webs_wesglobal_menus', submenus:[
                            {menu:'Main menu', id:'webs-wesglobal-menus-mainmenu', tk:'musususu_webs_wesglobal_menus_main', submenus:[]},
                            {menu:'Foot menu', id:'webs-wesglobal-menus-footmenu', tk:'musususu_webs_wesglobal_menus_foot', submenus:[]}
                        ]},
                    {menu:'Pages', id:'webs-wesglobal-pages', tk:'mususu_webs_wesglobal_pages', submenus:[
                            {menu:'Index', id:'webs-wesglobal-pages-index', tk:'musususu_webs_wesglobal_pages_index', submenus:[]},
                            {menu:'Construction', id:'webs-wesglobal-pages-construction', tk:'musususu_webs_wesglobal_pages_construction', submenus:[]},
                            {menu:'404', id:'webs-wesglobal-pages-404', tk:'musususu_webs_wesglobal_pages_nopage', submenus:[]},
                            {menu:'Register', id:'webs-wesglobal-pages-register', tk:'musususu_webs_wesglobal_pages_register', submenus:[]},
                            {menu:'Login', id:'webs-wesglobal-pages-login', tk:'musususu_webs_wesglobal_pages_login', submenus:[]},
                            {menu:'Content', id:'webs-wesglobal-pages-content', tk:'musususu_webs_wesglobal_pages_content', submenus:[]},
                            {menu:'Course', id:'webs-wesglobal-pages-course', tk:'musususu_webs_wesglobal_pages_course', submenus:[]},
                        ]},
                    {menu:'Modules', id:'webs-wesglobal-modules', tk:'mususu_webs_wesglobal_modules', submenus:[]},
                    {menu:'Tools', id:'webs-wesglobal-tools', tk:'mususu_webs_wesglobal_tools', submenus:[]},
                    {menu:'Social', id:'webs-wesglobal-social', tk:'mususu_webs_wesglobal_social', submenus:[
                            {menu:'Setting', id:'webs-wesglobal-social-setting', tk:'musususu_webs_wesglobal_social_setting', submenus:[]}
                        ]},
                    {menu:'Configuration', id:'webs-wesglobal-configuration', tk:'mususu_webs_wesglobal_configuration', submenus:[
                            {menu:'Language', id:'webs-wesglobal-configuration-language', tk:'musususu_webs_wesglobal_configuration_language', submenus:[]},
                            {menu:'General', id:'webs-wesglobal-configuration-general', tk:'musususu_webs_wesglobal_configuration_general', submenus:[]},
                            {menu:'Translation', id:'webs-wesglobal-configuration-translation', tk:'musususu_system_setting_language_trans', submenus:[]},
                            {menu:'Front pages', id:'webs-wesglobal-configuration-frontpages', tk:'musususu_webs_wesglobal_configuration_frontpages', submenus:[]},
                            {menu:'File Manager', id:'webs-wesglobal-configuration-filemanager', tk:'musususu_webs_wesglobal_configuration_filemanager', submenus:[]}
                        ]},
                ]}
        ]},
    {menu:'Others', id:'others', tk:'mu_others', submenus:[
            {menu:'Email Templates', id:'others-emailtemplates', tk:'musu_others_emailtemp', submenus:[
                    {menu:'Basic', id:'others-emailtemplates-basic', tk:'mususu_others_emailtemp_basic', submenus:[]},
                    {menu:'Alert', id:'others-emailtemplates-alert', tk:'mususu_others_emailtemp_alert', submenus:[]},
                    {menu:'Billing', id:'others-emailtemplates-billing', tk:'mususu_others_emailtemp_bill', submenus:[]},
                ]},
            {menu:'Menu Level', id:'others-menulevel', tk:'musu_others_mulevel', submenus:[]}
        ]},
    {menu:'System',id:'system',  tk:'mu_system', submenus:[
            {menu:'Setting', id:'system-setting', tk:'musu_system_set', submenus:[
                    {menu:'Basic', id:'system-setting-basic', tk:'mususu_system_set_basic', submenus:[]},
                    {menu:'Language', id:'system-setting-language', tk:'mususu_system_set_lang', submenus:[
                            {menu:'Language', id:'system-setting-language-language', tk:'musususu_system_setting_language_lang', submenus:[]},
                            {menu:'Translation', id:'system-setting-language-translation', tk:'musususu_system_setting_language_trans', submenus:[]}
                        ]},
                ]},
            {menu:'Theme', id:'system-theme', tk:'musu_system_theme', submenus:[
                    {menu:'Color', id:'system-theme-color', tk:'mususu_system_theme_color', submenus:[]},
                    {menu:'Foot', id:'system-theme-foot', tk:'mususu_system_theme_foot', submenus:[]},
                    {menu:'Logo', id:'system-theme-logo', tk:'mususu_system_theme_logo', submenus:[]},
                ]},
            {menu:'Es User', id:'system-esuser', tk:'musu_system_esuser', submenus:[
                {menu:'Registered', id:'system-esuser-registered', tk:'mususu_system_suser_registered', submenus: []},
                {menu:'Account', id:'system-esuser-account', tk:'mususu_system_suser_account', submenus:[]},
                {menu:'Management', id:'system-esuser-management', tk:'mususu_system_suser_manage', submenus:[
                    {menu:'Users', id:'system-esuser-management-users', tk:'musususu_system_suser_manage_users', submenus:[]},
                    {menu:'Roles', id:'system-esuser-management-roles', tk:'musususu_system_suser_manage_roles', submenus:[]},
                ]},
                {menu:'Security', id:'system-esuser-security', tk:'mususu_system_suser_security', submenus:[]},
                {menu:'Permissions', id:'system-esuser-permissions', tk:'musususu_system_suser_manage_perm', submenus:[
                    {menu:'Roles', id:'system-esuser-permissions-roles', tk:'musususu_system_suser_permissions_role', submenus:[]},
                    {menu:'Users', id:'system-esuser-permissions-users', tk:'musususu_system_suser_permissions_user', submenus:[]},
                ]},
            ]},
            {menu:'EDW', id:'system-edw', tk:'musu_system_edw', submenus:[]},
        ]},

];


function submenuDropdown(pid, depth) {
    let m_mu=pid.split('-')[0];
    let s_mu=pid.split('-')[1];
    if(depth==1)
    {
       // console.log("m_mu="+m_mu+"  s_mu="+s_mu);
        $('ul#'+m_mu+'_ul a[id^="' + m_mu +'-"]').attr('class','');
        $('ul#'+m_mu+'_ul a[id^="' + m_mu +'-"]  > i').removeClass('rotate-in');
        $('ul#'+m_mu+'_ul ul[id^="' + m_mu +'-"]').hide(500);

        if ($('ul[id="' + pid + '-container"]').is(":visible"))
        {
            $('a#'+pid).attr('class','active');
            $('a#' + pid + ' > i').removeClass('rotate-in');
            $('ul[id="' + pid +'-container"]').hide(500);
            $('ul[id="' + pid +'-container"] a').removeClass('active');
        }
        else
        {
            $('a#'+pid).attr('class','active');
            $('a#'+pid+' > i').addClass('rotate-in');
            $('ul[id="' + pid +'-container"]').show(500);
            $('ul[id="' + pid +'-container"] a').removeClass('active');
        }

    }
    else
    if(depth==2)
     {
            let ss_mu=pid.split('-')[2];
            let ms_id=m_mu + "-" + s_mu;
            let mss_id=m_mu + "-" + s_mu + "-" + ss_mu;
            $('ul[id="' + ms_id +'-container"] a[id^="' + ms_id +'-"]').attr('class','');
            $('ul[id="' + ms_id +'-container"] a[id^="' + ms_id +'-"]  > i').removeClass('rotate-in');
            $('ul[id="' + ms_id +'-container"] ul[id^="' + ms_id +'-"]').hide(500);

            if ($('ul[id="' + pid + '-container"]').is(":visible"))
            {
                $('a#'+ms_id).attr('class','active');
                $('a#'+pid).attr('class','active');
                $('a#' + pid + ' > i').removeClass('rotate-in');
                $('ul[id="' + pid +'-container"]').hide(500);
                $('ul[id="' + pid +'-container"] a').removeClass('active');
            }
            else
            {
                $('a#'+ms_id).attr('class','active');
                $('a#'+pid).attr('class','active');

                $('a#'+pid+' > i').addClass('rotate-in');
                $('ul[id="' + pid +'-container"]').show(500);
            }

     }
    else if(depth==3)
    {
        let ss_mu=pid.split('-')[2];
        let sss_mu=pid.split('-')[3];

        let ms_id=m_mu + "-" + s_mu;
        let mss_id=m_mu + "-" + s_mu + "-" + ss_mu;
        let msss_id=m_mu + "-" + s_mu + "-" + ss_mu + "-" + sss_mu;
        $('ul[id="' + mss_id +'-container"] a[id^="' + mss_id +'-"]').attr('class','');
        $('ul[id="' + mss_id +'-container"] a[id^="' + mss_id +'-"]  > i').removeClass('rotate-in');
        $('ul[id="' + mss_id +'-container"] ul[id^="' + mss_id +'-"]').hide(500);

        //system-suser-management-users
        $('a#'+ms_id).attr('class','active');
        $('a#'+mss_id).attr('class','active');
        $('a#'+pid).attr('class','active');
        //$('a#'+pid+' > i').addClass('rotate-in');
        //$('ul[id="' + pid +'-container"]').show(500);
    }

}

function  menuChange(strval)
{
    //$('a').attr('data-menu-target')
    $("a[data-menu-target!='#"+strval+"']").removeClass('active');
    $("a[data-menu-target='#"+strval+"']").addClass('active');
    $(".navigation-menu-body > ul[id!='"+strval+"']").css('display','none');
    $(".navigation-menu-body > ul[id='"+strval+"']").css('display','block');
    //$(".navigation-menu-body > ul[id='"+strval+"'] > li:nth-child(2) > a").addClass('active');
}

function submenuChange(pid, chindcnt) {
    let m_mu=pid.split('-')[0];
    let s_mu=pid.split('-')[1];
    $('a[id^="'+m_mu+'-"]').attr('class','');
    $('a[id^="'+m_mu+'-"] > i').removeClass('rotate-in');
    $('ul[id^="'+m_mu+'-"]').hide(500);
    $("a#"+pid).attr('class','active');
}

function subsubmenuChange(pid, chindcnt) {
   // console.log(pid);
    var m_mu=pid.split('-')[0];
    var s_mu=pid.split('-')[1];
    var container_ul = m_mu+'-'+s_mu+'-container';
    $("ul#"+container_ul+" li a ").attr('class','');
    $("a#"+pid).attr('class','active');
    var dli = $("a#"+pid).attr('data-list');

    if(dli==undefined){
        $("ul#"+container_ul+" li > a > i").removeClass('rotate-in');
        $("ul#"+container_ul+" li > ul ").hide(500);
    }
}
function subsubsubmenuChange(pid, chindcnt) {
    // console.log(pid);webs-wesglobal-media-video
    var m_mu=pid.split('-')[0];
    var s_mu=pid.split('-')[1];
    var ss_mu=pid.split('-')[2];
    var group_id=m_mu+'-'+s_mu+'-'+ss_mu;
    $('a[id^="' + group_id +'-"]').attr('class','');
    $('#'+pid).attr('class','active');
}
/* ex:system-suser; */
function exstingChildMenu(pid, plist) {
    let result={childcnt:0,fid:0};
    let mulist=(plist!=='') ? plist : menuList;
    for (let i = 0; i < mulist.length; i++)
    {
        let menuobj = mulist[i];
        let menu = menuobj.menu;
        let id = menuobj.id;
        if(pid===id)
        {
            result.childcnt=menuobj.submenus.length;
            result.fid=1;
            break;
        }
        else
        {
            if(menuobj.submenus.length > 0){
               let tresult = exstingChildMenu(pid, menuobj.submenus);
                result.childcnt = tresult.childcnt;
                result.fid=tresult.fid;
                if(result.fid===1)
                    break;
            }
        }
    }

    return result;
}

function exstingChildMenu_org(pid, depth) {
    if(depth ==0)
        return {smenu:0,ssmenu:0};

    let mcnt=pid.split('-').length;
    let _mus=pid.split('-');
    let sNum=0;
    let ssNum=0;

    // let result={'smenu':sNum,'ssmenu':ssNum};
    for (let i = 0; i < menuList.length; i++)
    {
        let menuobj = menuList[i];
        let ms=menuobj.menu;
        ms = ms.toLowerCase();
        ms = ms.replace(/ /g,"");
        if(ms==_mus[0])//dashborad,apps,users,webs,others,system
        {
            let num = menuobj.submenus.length;
            //alert(num);
            for(let j = 0; j < num; j++)
            {
                let submenuobj = menuobj.submenus[j];
                let mss=submenuobj.menu;
                mss = mss.toLowerCase();
                mss = mss.replace(/ /g,"");
                if(mcnt > 0 && mss==_mus[1]) //suser
                {
                    sNum = submenuobj.submenus.length;
                    if(depth ==1)
                        break;
                    else
                    {
                        for(let k = 0; k <sNum; k++)
                        {
                            let msss=submenuobj.submenus[k].menu;//profile,page,management
                            msss = msss.toLowerCase();
                            msss = msss.replace(/ /g,"");
                            if(mcnt > 1 && msss == _mus[2])
                            {
                                let sssmenulen=submenuobj.submenus[k].submenus.length;
                                ssNum = sssmenulen;
                                if(depth ==2)
                                    break;
                                else
                                {
                                    for(let m = 0; m <sssmenulen; m++)
                                    {
                                        let mssss=submenuobj.submenus[k].submenus[m].menu;//Users,Roles,Permissions
                                        mssss = mssss.toLowerCase();
                                        mssss = mssss.replace(/ /g,"");

                                        if(mcnt > 2 && mssss == _mus[3])
                                        {
                                            let ssssmenulen=submenuobj.submenus[k].submenus[m].submenus.length;
                                            ssNum = ssssmenulen;
                                            if(depth ==3)
                                                break;
                                            else
                                            {
                                                for(let mm = 0; mm <ssssmenulen; mm++)
                                                {
                                                    let msssss=submenuobj.submenus[k].submenus[m].submenus[mm].menu;//Users,Roles,Permissions
                                                    msssss = msssss.toLowerCase();
                                                    msssss = msssss.replace(/ /g,"");
                                                    if(mcnt > 3 && msssss == _mus[4]){
                                                        let sssssmenulen=submenuobj.submenus[k].submenus[m].submenus[mm].submenus.length;
                                                    }
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        }
                    }


                }
            }

            break;
        }
    }

    let result={smenu:sNum,ssmenu:ssNum};
    return result;
}
var c=0;
var wideControllerNavBar =  function(){
    $('body.small-navigation:not(.horizontal-navigation) .navigation').css({'width':'370px','background-color':'white'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-header .small-navigation-toggler').css({'display':'block'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab').css({'width':'50px','margin-right':'30px'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body').css({'display':'flex','background-color':'white','overflow':'hidden'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a').css({'display':'flex'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a > span, body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a .sub-menu-arrow').css(
        {
            'display': 'inherit !important'
        });
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .menu-tab-icon').css({'width':'65%','padding':'5px 0'});

    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a span:not(.nav-link-icon):not(.badge)').css({'display':'block'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .thisname.m-line img').css({'width':'20px','height':'2px'});

}

var wideControllerNavBarsecond =  function(){
    //var aaa =$('body').attr('class');
    //console.log("bodyclass" + aaa);
    $('body:not(.small-navigation) .navigation').css({'width':'400px','background-color':'white'});
    $('body:not(.small-navigation) .navigation .navigation-header .small-navigation-toggler').css({'display':'block'});
    $('body:not(.small-navigation) .navigation .navigation-menu-tab').css({'width':'90px','margin-right':'30px'});
    $('body:not(.small-navigation) .navigation .navigation-menu-body').css({'display':'flex','background-color':'white','overflow':'hidden'});
    $('body:not(.small-navigation) .navigation .navigation-menu-body ul li a').css({'display':'flex'});
    $('body:not(.small-navigation) .navigation .navigation-menu-body ul li a > span, body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a .sub-menu-arrow').css(
        {
            'display': 'inherit !important'
        });
    $('body:not(.small-navigation) .navigation .navigation-menu-tab ul li a .menu-tab-icon').css({'width':'50%','padding':'11px 0'});

    $('body:not(.small-navigation) .navigation .navigation-menu-body ul li a span:not(.nav-link-icon):not(.badge)').css({'display':'block'});
    $('body:not(.small-navigation) .navigation .navigation-menu-tab ul li a .thisname.m-line img').css({'width':'24px','height':'4px'});
}

var wideControllerNavBarfirst =  function(){
    $('body.small-navigation:not(.horizontal-navigation) .navigation').css({'width':'400px','background-color':'white'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-header .small-navigation-toggler').css({'display':'block'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab').css({'margin-right':'30px'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body').css({'display':'flex','background-color':'white','overflow':'hidden'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a').css({'display':'flex'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a > span, body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a .sub-menu-arrow').css(
        {
            'display': 'inherit !important'
        });
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .menu-tab-icon').css({'width':'50%','padding':'11px 0'});

    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a span:not(.nav-link-icon):not(.badge)').css({'display':'block'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .thisname.m-line img').css({'width':'24px','height':'4px'});

}

var wideControllerNavBar_pre =  function(){
    $('body.small-navigation:not(.horizontal-navigation) .navigation').css({'width':'400px','background-color':'white'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-header .small-navigation-toggler').css({'display':'block'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab').css({'margin-right':'30px'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body').css({'display':'flex','background-color':'white','overflow':'hidden'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a').css({'display':'flex'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a > span, body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a .sub-menu-arrow').css(
        {
            'display': 'inherit !important'
        });
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .menu-tab-icon').css({'width':'50%','padding':'11px 0'});

    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a span:not(.nav-link-icon):not(.badge)').css({'display':'block'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .thisname.m-line img').css({'width':'24px','height':'4px'});

}


var shrinkControllerNavBar = function(){
    $('body.small-navigation:not(.horizontal-navigation) .navigation').css({'width':'80px','background-color':'white'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-header .small-navigation-toggler').css({'display':'none'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab').css({'margin-right':'0px'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body').css({'display':'none','background-color':'white','overflow':'hidden'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a').css({'display':'flex'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a > span, body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a .sub-menu-arrow').css(
        {
            'display': 'inherit !important'
        });
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .menu-tab-icon').css({'width':'65%','padding':'5px 0'});

    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a span:not(.nav-link-icon):not(.badge)').css({'display':'none'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .thisname.m-line img').css({'width':'20px','height':'2px'});
}


var jsonparse =function(str){
    if(str == undefined)
        return '';
    var pos = str.indexOf('&quot;');
    if(pos < 0) return str;
    var searchRegExp = /&quot;/gi;
    var replaceWith = '"';
    var rstr = str.replace(searchRegExp,replaceWith);
    rstr = JSON.parse(rstr);
    return rstr;
}

var jsonparse_one =function(str){
    var pos = str.indexOf('"');
    if(pos < 0) return str;
    var searchRegExp = /"/gi;
    var replaceWith = '';
    var rstr = str.replace(searchRegExp,replaceWith);
    return rstr;
}


function callAllmenu(lists, _temp_list, plevel, pid)
{
    for(var i = 0; i < lists.length; i++)
    {
        var obj = lists[i];
        var name = obj.menu;
        var level = plevel + 1;
        var id = 0;
        if(pid===0)
            id = ''+(i+1)+'';
        else
            id = pid+'-'+(i+1);

        var p_id=''+pid+'';
        var tran_key=obj.tk;
        var childcnt = obj.submenus.length;
        var have_page = childcnt > 0 ? 0: 1;
        var rid=obj.id;
        var item = {
            menu_id: id, read: 0, write: 0,
            create: 0, delete: 0, p_id: p_id,
            have_page: have_page, level:level,
            name: name, id:rid, tran_key: tran_key
        };

        _temp_list.push(item);
        //console.log(item);

        if(childcnt > 0){
            callAllmenu(obj.submenus, _temp_list, level, id);
        }

    }//level 1 for
}

var getDashboardMenuList = function ()
{
    var _temp_list = new Array();
    callAllmenu(menuList, _temp_list, 0, 0);
    return _temp_list;
}

var getPagePermission = function (permissionlist, pageid)
{
    var pgobj={
        read:0,
        write:0,
        create:0,
        delete:0
    };

    var manager = jsonparse(window.Laravel.userinfo).manager;
    manager = manager.toLowerCase();
    if(manager === "administrater"){
        pgobj.read=1;
        pgobj.write=1;
        pgobj.create=1
        pgobj.delete=1;

        return pgobj;
    }

    if(pageid===undefined || pageid===null || pageid === '')
        return pgobj;

   var tpageid = pageid.replace("-fav","");
   for(var i=0; i < permissionlist.length; i++){
       var obj = permissionlist[i];
       if(obj.id==tpageid)
       {
           pgobj.read=obj.read;
           pgobj.write=obj.write;
           pgobj.create=obj.create
           pgobj.delete=obj.delete;
       }
   }

   return pgobj;
}


export default {
    data:{
        menuChange,
        submenuChange,
        subsubmenuChange,
        subsubsubmenuChange,
        exstingChildMenu,
        submenuDropdown,
        wideControllerNavBar,
        wideControllerNavBarfirst,
        wideControllerNavBarsecond,
        shrinkControllerNavBar,
        jsonparse,
		jsonparse_one,
        getDashboardMenuList,
        getPagePermission
    }
}

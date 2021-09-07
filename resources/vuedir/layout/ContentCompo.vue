<template>
    <div class="content-body">
        <transition name="componentfade" mode="out-in">
            <component :is="BodyComponent"></component>
        </transition>
        <FooterCompo/>
    </div>
</template>
<style>

    .componentfade-enter-active{
         transition: opacity .3s ease;
     }
    .componentfade-leave-active {
        transition: opacity .7s ease;
    }
    .componentfade-enter, .componentfade-leave-to {
        opacity: 0;
    }

   /* 1
   .componentfade-enter-active, .componentfade-leave-active {
        transition: opacity .5s ease-in-out;
    }
    .componentfade-enter{
        opacity: 0;
    }
    .componentfade-enter-to {
        opacity: 1;
    }
    .componentfade-leave {
        opacity: 1;
    }
    .componentfade-leave-to {
        opacity: 0;
    }*/

    /* 2
    .componentfade-enter-active,
    .zoom-fade-leave-active {
        transition: transform 0.35s, opacity 0.28s ease-in-out;
    }

    .componentfade-enter {
        opacity: 0;
    }

    [dir] .componentfade-enter {
        transform: scale(0.97);
    }

    .componentfade-leave-to {
        opacity: 0;
    }

    [dir] .componentfade-leave-to {
        transform: scale(1.03);
    }*/

</style>
<script>
    import FooterCompo from '../layout/FooterCompo.vue'

    export default {
        data(){
            return{
               // routerTransition : 'zoom-fade' || 'none',
            }
        },
        components: { // 여기서 동적으로 로딩한다
            'GlobalUserProfile': () => import('../pages/GlobalUserProfile'),
            'GlobalUserReminders': () => import('../pages/GlobalUserReminders'),
            'FastRegisterLink': () => import('../pages/FastRegisterLink'),

            'DashAnalytics': () => import('../pages/dashboard/DashAnalytics'),
            'DashStudiocloud': () => import('../pages/dashboard/DashStudiocloud'),
            'DashUser': () => import('../pages/dashboard/DashUser'),
            'DashStreamChat': () => import('../pages/dashboard/DashStreamChat'),

            //'SystemFields': () => import('../pages/system/SystemFields'),
            'AppsWebsiteFieldsImage': () => import('../pages/apps/AppsWebsiteFieldsImage'),
            'AppsWebsiteFieldsText': () => import('../pages/apps/AppsWebsiteFieldsText'),
            'AppsWebsiteFieldsNumber': () => import('../pages/apps/AppsWebsiteFieldsNumber'),
            'AppsWebsiteFieldsEmail': () => import('../pages/apps/AppsWebsiteFieldsEmail'),
            'AppsWebsiteFieldsDate': () => import('../pages/apps/AppsWebsiteFieldsDate'),
            'AppsWebsiteFieldsMobile': () => import('../pages/apps/AppsWebsiteFieldsMobile'),
	        'AppsWebsiteAppearanceTheme': () => import('../pages/apps/AppsWebsiteAppearanceTheme'),
	        'AppsWebsiteAppearanceHead': () => import('../pages/apps/AppsWebsiteAppearanceHead'),
            'AppsWebsiteModuleWeblanguage': () => import('../pages/apps/AppsWebsiteModuleWeblanguage'),
            'AppsWebsiteToolsSlider': () => import('../pages/apps/AppsWebsiteToolsSlider'),
            'AppsWebsiteToolsMenu': () => import('../pages/apps/AppsWebsiteToolsMenu'),
            'AppsWebsiteToolsView': () => import('../pages/apps/AppsWebsiteToolsView'),
            'AppsCoursesCourses': () => import('../pages/apps/AppsCoursesCourses'),
            'AppsCoursesSetting': () => import('../pages/apps/AppsCoursesSetting'),

            'UsersOrgAccount': () => import('../pages/users/UsersOrgAccount'),
            'UsersOrgGlobalApplicants': () => import('../pages/users/UsersOrgGlobalApplicants'),
            'UsersOrgGlobalUser': () => import('../pages/users/UsersOrgGlobalUser'),
            'UsersOrgGlobalProfileSetting': () => import('../pages/users/UsersOrgGlobalProfileSetting'),
            'UsersOrgGlobalEmailManage': () => import('../pages/users/UsersOrgGlobalEmailManage'),
            'UsersOrgChinaApplicants': () => import('../pages/users/UsersOrgChinaApplicants'),
            'UsersOrgChinaUser': () => import('../pages/users/UsersOrgChinaUser'),

            'SystemUserAccount': () => import('../pages/system/SystemUserAccount'),
            'SystemSuserManagementUsers': () => import('../pages/system/SystemSuserManagementUsers'),
            'SystemSuserManagementRoles': () => import('../pages/system/SystemSuserManagementRoles'),
            'SystemSuserPermissionsRoles': () => import('../pages/system/SystemSuserPermissionsRoles'),
            'SystemSuserPermissionsUsers': () => import('../pages/system/SystemSuserPermissionsUsers'),
           /* 'SystemLanguage': () => import('../pages/system/SystemLanguage'),*/

            'SystemSetBasic': () => import('../pages/system/SystemSetBasic'),
            'SystemSetLanguage': () => import('../pages/system/SystemSetLanguage'),
            'SystemSetTranslation': () => import('../pages/system/SystemSetTranslation'),
            'SystemThemeColor': () => import('../pages/system/SystemThemeColor'),
            'SystemThemeFoot': () => import('../pages/system/SystemThemeFoot'),
            'SystemThemeLogo': () => import('../pages/system/SystemThemeLogo'),
            'SystemUserSecurity': () => import('../pages/system/SystemUserSecurity'),
            'SystemUserRegistered': () => import('../pages/system/SystemUserRegistered'),
            'SystemEdw': () => import('../pages/system/SystemEdw'),// han 2020-11-11

            /*'WebsWesGlobalAppearance': () => import('../pages/WebsWesGlobalAppearance'),*/

            'WebsWesChinaMediaVideo': () => import('../pages/webs/WesChina/WebsWesChinaMediaVideo'),
            'WebsWesChinaMediaImage': () => import('../pages/webs/WesChina/WebsWesChinaMediaImage'),
            'WebsWesChinaMediaAudio': () => import('../pages/webs/WesChina/WebsWesChinaMediaAudio'),
            'WebsWesChinaAppearanceTheme': () => import('../pages/webs/WesChina/WebsWesChinaAppearanceTheme'),
            'WebsWesChinaAppearanceHead': () => import('../pages/webs/WesChina/WebsWesChinaAppearanceHead'),
            'WebsWesChinaAppearanceFoot': () => import('../pages/webs/WesChina/WebsWesChinaAppearanceFoot'),
            'WEBSWesChinaMenusMain': () => import('../pages/webs/WesChina/WebsWesChinaMenusMain'),
            'WEBSWesChinaMenusFoot': () => import('../pages/webs/WesChina/WebsWesChinaMenusFoot'),
            'WebsWesChinaPagesIndex': () => import('../pages/webs/WesChina/WebsWesChinaPagesIndex'),
            'WebsWesChinaPagesConstruction': () => import('../pages/webs/WesChina/WebsWesChinaPagesConstruction'),
            'WebsWesChinaPagesRegister': () => import('../pages/webs/WesChina/WebsWesChinaPagesRegister'),
            'WebsWesChinaPagesLogin': () => import('../pages/webs/WesChina/WebsWesChinaPagesLogin'),
            'WebsWesChinaPagesNoPage': () => import('../pages/webs/WesChina/WebsWesChinaPagesNoPage'),
            'WebsWesChinaPagesContent': () => import('../pages/webs/WesChina/WebsWesChinaPagesContent'),
            'WebsWesChinaPagesCourse': () => import('../pages/webs/WesChina/WebsWesChinaPagesCourse'),
            'WebsWesChinaSocialSetting': () => import('../pages/webs/WesChina/WebsWesChinaSocialSetting'),
            'WebsWesChinaConfigurationLanguage': () => import('../pages/webs/WesChina/WebsWesChinaConfigurationLanguage'),
            'WebsWesChinaConfigurationGeneral': () => import('../pages/webs/WesChina/WebsWesChinaConfigurationGeneral'),
            'WebsWesChinaConfigurationTranslation': () => import('../pages/webs/WesChina/WebsWesChinaConfigurationTranslation'),
            'WebsWesChinaConfigurationFrontpages': () => import('../pages/webs/WesChina/WebsWesChinaConfigurationFrontpages'),
            'WebsWesChinaConfigurationFilemanager': () => import('../pages/webs/WesChina/WebsWesChinaConfigurationFilemanager'),

            //'WebsWesGlobalMedia': () => import('../pages/webs/WebsWesGlobalMedia'),
            'WebsWesGlobalMediaVideo': () => import('../pages/webs/WesGlobal/WebsWesGlobalMediaVideo'),
            'WebsWesGlobalMediaImage': () => import('../pages/webs/WesGlobal/WebsWesGlobalMediaImage'),
            'WebsWesGlobalMediaAudio': () => import('../pages/webs/WesGlobal/WebsWesGlobalMediaAudio'),
            'WebsWesGlobalAppearanceTheme': () => import('../pages/webs/WesGlobal/WebsWesGlobalAppearanceTheme'),
            'WebsWesGlobalAppearanceHead': () => import('../pages/webs/WesGlobal/WebsWesGlobalAppearanceHead'),
            'WebsWesGlobalAppearanceFoot': () => import('../pages/webs/WesGlobal/WebsWesGlobalAppearanceFoot'),
            'WEBSWesGlobalMenusMain': () => import('../pages/webs/WesGlobal/WebsWesGlobalMenusMain'),
            'WEBSWesGlobalMenusFoot': () => import('../pages/webs/WesGlobal/WebsWesGlobalMenusFoot'),
            'WebsWesGlobalPagesIndex': () => import('../pages/webs/WesGlobal/WebsWesGlobalPagesIndex'),
            'WebsWesGlobalPagesConstruction': () => import('../pages/webs/WesGlobal/WebsWesGlobalPagesConstruction'),
            'WebsWesGlobalPagesRegister': () => import('../pages/webs/WesGlobal/WebsWesGlobalPagesRegister'),
            'WebsWesGlobalPagesLogin': () => import('../pages/webs/WesGlobal/WebsWesGlobalPagesLogin'),
            'WebsWesGlobalPagesNoPage': () => import('../pages/webs/WesGlobal/WebsWesGlobalPagesNoPage'),
            'WebsWesGlobalPagesContent': () => import('../pages/webs/WesGlobal/WebsWesGlobalPagesContent'),
            'WebsWesGlobalPagesCourse': () => import('../pages/webs/WesGlobal/WebsWesGlobalPagesCourse'),
            'WebsWesGlobalSocialSetting': () => import('../pages/webs/WesGlobal/WebsWesGlobalSocialSetting'),
            'WebsWesGlobalConfigurationLanguage': () => import('../pages/webs/WesGlobal/WebsWesGlobalConfigurationLanguage'),
            'WebsWesGlobalConfigurationGeneral': () => import('../pages/webs/WesGlobal/WebsWesGlobalConfigurationGeneral'),
            'WebsWesGlobalConfigurationTranslation': () => import('../pages/webs/WesGlobal/WebsWesGlobalConfigurationTranslation'),
            'WebsWesGlobalConfigurationFrontpages': () => import('../pages/webs/WesGlobal/WebsWesGlobalConfigurationFrontpages'),
            'WebsWesGlobalConfigurationFilemanager': () => import('../pages/webs/WesGlobal/WebsWesGlobalConfigurationFilemanager'),

            FooterCompo,
        },
        created() {
        },
        mounted() {
        },
        updated() {
        },
        computed: {
            BodyComponent() {
                switch (this.$store.state.subMenu) {

                    case 'dashboard-analytics':
                        return 'DashAnalytics'
                    case 'dashboard-studiocloud':
                        return 'DashStudiocloud'
                    case 'dashboard-user':
                        return 'DashUser'
                    case 'dashboard-streamchat':
                        return 'DashStreamChat'

                    case 'apps-website-fields-image':
                        return 'AppsWebsiteFieldsImage'
                    case 'apps-website-fields-text':
                        return 'AppsWebsiteFieldsText'
                    case 'apps-website-fields-number':
                        return 'AppsWebsiteFieldsNumber'
                    case 'apps-website-fields-email':
                        return 'AppsWebsiteFieldsEmail'
                    case 'apps-website-fields-date':
                        return 'AppsWebsiteFieldsDate'
                    case 'apps-website-fields-mobile':
                        return 'AppsWebsiteFieldsMobile'

                    case 'users-organization-account':
                        return 'UsersOrgAccount'
                    case 'users-organization-global-applicants':
                        return 'UsersOrgGlobalApplicants'
                    case 'users-organization-global-ouser':
                        return 'UsersOrgGlobalUser'
                    case 'users-organization-global-profilesetting':
                        return 'UsersOrgGlobalProfileSetting'
                    case 'users-organization-global-emailmanage':
                        return 'UsersOrgGlobalEmailManage'
                    case 'users-organization-china-applicants':
                        return 'UsersOrgChinaApplicants'
                    case 'users-organization-china-ouser':
                        return 'UsersOrgChinaUser'

                    case 'apps-website-appearance-theme':
                        return 'AppsWebsiteAppearanceTheme'
                    case 'apps-website-appearance-head':
                        return 'AppsWebsiteAppearanceHead'
                    case 'apps-website-module-weblanguage':
                        return 'AppsWebsiteModuleWeblanguage'
                    case 'apps-website-tools-slider':
                        return 'AppsWebsiteToolsSlider'
                    case 'apps-website-tools-menu':
                        return 'AppsWebsiteToolsMenu'
                    case 'apps-website-tools-view':
                        return 'AppsWebsiteToolsView'
                    case 'apps-courses-courses':
                        return 'AppsCoursesCourses'
                    case 'apps-courses-setting':
                        return 'AppsCoursesSetting'

                    case 'webs-china':
                        return 'WebsChina'
                    case 'webs-global':
                        return 'WebsGlobal'

                    case "webs-weschina-media-video":
                        return 'WebsWesChinaMediaVideo'
                    case "webs-weschina-media-image":
                        return 'WebsWesChinaMediaImage'
                    case "webs-weschina-media-audio":
                        return 'WebsWesChinaMediaAudio'
                    case "webs-weschina-appearance-theme":
                        return 'WebsWesChinaAppearanceTheme'
                    case "webs-weschina-appearance-head":
                        return 'WebsWesChinaAppearanceHead'
                    case "webs-weschina-appearance-foot":
                        return 'WebsWesChinaAppearanceFoot'
                    case 'webs-weschina-menus-mainmenu':
                        return 'WebsWesChinaMenusMain'
                    case 'webs-weschina-menus-footmenu':
                        return 'WebsWesChinaMenusFoot'
                    case 'webs-weschina-pages-index':
                        return 'WebsWesChinaPagesIndex'
                    case 'webs-weschina-pages-construction':
                        return 'WebsWesChinaPagesConstruction'
                    case 'webs-weschina-pages-register':
                        return 'WebsWesChinaPagesRegister'
                    case 'webs-weschina-pages-login':
                        return 'WebsWesChinaPagesLogin'
                    case 'webs-weschina-pages-404':
                        return 'WebsWesChinaPagesNoPage'
                    case 'webs-weschina-pages-content':
                        return 'WebsWesChinaPagesContent'
                    case 'webs-weschina-pages-course':
                        return 'WebsWesChinaPagesCourse'
                    case 'webs-weschina-social-setting':
                        return 'WebsWesChinaSocialSetting'
                    case 'webs-weschina-configuration-language':
                        return 'WebsWesChinaConfigurationLanguage'
                    case 'webs-weschina-configuration-general':
                        return 'WebsWesChinaConfigurationGeneral'
                    case 'webs-weschina-configuration-translation':
                        return 'WebsWesChinaConfigurationTranslation'
                    case 'webs-weschina-configuration-frontpages':
                        return 'WebsWesChinaConfigurationFrontpages'
                    case 'webs-weschina-configuration-filemanager':
                        return 'WebsWesChinaConfigurationFilemanager'

                    case "webs-wesglobal-media-video":
                        return 'WebsWesGlobalMediaVideo'
                    case "webs-wesglobal-media-image":
                        return 'WebsWesGlobalMediaImage'
                    case "webs-wesglobal-media-audio":
                        return 'WebsWesGlobalMediaAudio'
                    case "webs-wesglobal-appearance-theme":
                        return 'WebsWesGlobalAppearanceTheme'
                    case "webs-wesglobal-appearance-head":
                        return 'WebsWesGlobalAppearanceHead'
                    case "webs-wesglobal-appearance-foot":
                        return 'WebsWesGlobalAppearanceFoot'
                    case 'webs-wesglobal-menus-mainmenu':
                        return 'WEBSWesGlobalMenusMain'
                    case 'webs-wesglobal-menus-footmenu':
                        return 'WEBSWesGlobalMenusFoot'
                    case 'webs-wesglobal-pages-index':
                        return 'WebsWesGlobalPagesIndex'
                    case 'webs-wesglobal-pages-construction':
                        return 'WebsWesGlobalPagesConstruction'
                    case 'webs-wesglobal-pages-register':
                        return 'WebsWesGlobalPagesRegister'
                    case 'webs-wesglobal-pages-login':
                        return 'WebsWesGlobalPagesLogin'
                    case 'webs-wesglobal-pages-404':
                        return 'WebsWesGlobalPagesNoPage'
                    case 'webs-wesglobal-pages-content':
                        return 'WebsWesGlobalPagesContent'
                    case 'webs-wesglobal-pages-course':
                        return 'WebsWesGlobalPagesCourse'
                    case 'webs-wesglobal-social-setting':
                        return 'WebsWesGlobalSocialSetting'
                    case 'webs-wesglobal-configuration-language':
                        return 'WebsWesGlobalConfigurationLanguage'
                    case 'webs-wesglobal-configuration-general':
                        return 'WebsWesGlobalConfigurationGeneral'
                    case 'webs-wesglobal-configuration-translation':
                        return 'WebsWesGlobalConfigurationTranslation'
                    case 'webs-wesglobal-configuration-frontpages':
                        return 'WebsWesGlobalConfigurationFrontpages'
                    case 'webs-wesglobal-configuration-filemanager':
                        return 'WebsWesGlobalConfigurationFilemanager'

                    case 'system-setting-basic':
                        return 'SystemSetBasic'
                    case 'system-setting-language-language':
                        return 'SystemSetLanguage'
                    case 'system-setting-language-translation':
                        return 'SystemSetTranslation'

                    case 'system-theme-color':
                        return 'SystemThemeColor'
                    case 'system-theme-foot':
                        return 'SystemThemeFoot'
                    case 'system-theme-logo':
                        return 'SystemThemeLogo'
                    case 'system-esuser-registered':
                        return 'SystemUserRegistered'
                    case 'system-esuser-account':
                        return 'SystemUserAccount'
                    case "system-esuser-management-users":
                        return 'SystemSuserManagementUsers'
                    case "system-esuser-management-roles":
                        return 'SystemSuserManagementRoles'
                    case 'system-esuser-security':
                        return 'SystemUserSecurity'
                    case "system-esuser-permissions-users":
                        return 'SystemSuserPermissionsUsers'
                    case "system-esuser-permissions-roles":
                        return 'SystemSuserPermissionsRoles'
                    case 'system-edw':
                        return 'SystemEdw'

                    case 'global-user-profile':
                        return 'GlobalUserProfile'
                    case 'global-user-reminders':
                        return 'GlobalUserReminders'
                    /* case 'fast-register-link':
                                 return 'FastRegisterLink'*/
                    default:
                        return 'DashAnalytics'
                }
            }
        },
        methods: {}
    }
</script>


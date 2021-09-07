<template>
    <div class="content-body">
        <transition name="componentfade" mode="out-in">
            <component :is="BodyComponent"></component>
        </transition>
        <CompanyFooterCompo/>
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

</style>
<script>
    import CompanyFooterCompo from '../layout/CompanyFooterCompo.vue'

    export default {
        data(){
            return{
               // routerTransition : 'zoom-fade' || 'none',
            }
        },
        components: { // 여기서 동적으로 로딩한다
            'CompanyUserProfile': () => import('../company/CompanyUserProfile'),
            'CompanySettingAccount': () => import('../company/setting/CompanySettingAccount'),
            'CompanyUsersUserlist': () => import('../company/users/CompanyUsersUserlist'),

            CompanyFooterCompo,
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
                    case 'company-user-profile':
                        return 'CompanyUserProfile'
                    case 'company-setting-account':
                        return 'CompanySettingAccount'
                    case 'company-users-userlist':
                        return 'CompanyUsersUserlist'
                }
            }
        },
        methods: {}
    }
</script>


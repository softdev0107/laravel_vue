<template>
  <div class="layout-wrapper">
    <SearchCompo />
    <div class="content-wrapper">
        <component :is="NavComponent"></component>
        <component :is="ContComponent"></component>
    </div>
  </div>
</template>

<script>
    import nav_module from "../assets/jsfunc/nav_module";
    import lang_module from "../assets/jsfunc/lang_module.js";
    import axios from "axios";
    import myjs from "../assets/jsfunc/mjs_module";
    import SearchCompo from "../layout/SearchCompo.vue";
    import NavigationCompo from "../layout/NavigationCompo.vue";
    import ContentCompo from "./ContentCompo.vue";

    var vueOBJ = null;
    export default {
        beforeCreate() {
        },
        created() {
            vueOBJ =this;
            var locale =lang_module.data.getLang();//cckd
            locale = lang_module.data.getShurtLang(locale);
            this.$store.dispatch('DefaultLang',locale);
            myjs.data.getSiteContentsBylocalekey(this, locale);

            var user_permission = nav_module.data.jsonparse(window.Laravel.userpermissions);
            this.$store.dispatch('SetPermission', user_permission);
        },
        beforeMount() {},
        mounted() {},
        components: {
            SearchCompo,
        },
        computed: {
            NavComponent() {
                return NavigationCompo
            },
            ContComponent() {
                return ContentCompo
            }
        },
    };
</script>

<template>
  <div class="layout-wrapper">
    <CompanySearchCompo />
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
    import CompanySearchCompo from "../layout/CompanySearchCompo.vue";
    import CompanyNavigationCompo from "../layout/CompanyNavigationCompo.vue";
    import CompanyContentCompo from "../layout/CompanyContentCompo.vue";

    var vueOBJ = null;
    export default {
        beforeCreate() {
        },
        created() {
            vueOBJ =this;
            var locale =lang_module.data.getLang();
            locale = lang_module.data.getShurtLang(locale);
            this.$store.dispatch('DefaultLang',locale);
            myjs.data.getSiteContentsBylocalekey(this, locale);
        },
        beforeMount() {},
        mounted() {},
        components: {
            CompanySearchCompo,
        },
        computed: {
            NavComponent() {
                return CompanyNavigationCompo
            },
            ContComponent() {
                return CompanyContentCompo
            }
        },
    };
</script>

import Vue from 'vue'
import VueRouter from 'vue-router'

/* Pages */
import VIndex from "../pages/VIndex.vue";
import VLogin from "../pages/VLogin.vue";
/* Pages */

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {path: '/', component: VIndex},
        {path: '/login', component: VLogin}

    ]
});
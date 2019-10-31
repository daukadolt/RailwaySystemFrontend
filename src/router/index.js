import Vue from 'vue'
import VueRouter from 'vue-router'

/* Pages */
import Index from "../pages/Index.vue";
import PassengerLogin from "../pages/PassengerLogin.vue";
/* Pages */

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {path: '/', component: Index},
        {path: '/login', component: PassengerLogin}

    ]
});
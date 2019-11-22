import Vue from 'vue'
import VueRouter from 'vue-router'

/* Pages */
import Index from "../pages/Index.vue";
import PassengerLogin from "../pages/PassengerLogin.vue";
import PassengerAccount from "../pages/PassengerAccount.vue";
import ManagerAccount from "../pages/ManagerAccount.vue";
import AgentAccount from "../pages/AgentAccount.vue";
import BookingPage from "../pages/BookingPage.vue";
import EmployeeLogin from "../pages/EmployeeLogin.vue";
import StationEmployees from "../pages/StationEmployees.vue";
import EmployeeInformation from "../pages/EmployeeInformation.vue";
import TicketOrder from "../pages/TicketOrder.vue";
/* Pages */

/* Middleware */
import log from "../middleware/log"
import passengerAuth from "../middleware/passengerAuth"
/* Middleware */

/* Store */
import store from "../store"
/* Store */


Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/', component: Index, meta: {middleware: log}},
        {path: '/login', component: PassengerLogin},
        {path: '/account', component: PassengerAccount, meta: {middleware: passengerAuth}},
        {path: '/manager_account', component: ManagerAccount},
        {path: '/booking', component: BookingPage},
        {path: '/emp_login', component: EmployeeLogin},
        {path: '/agent_account', component: AgentAccount},
        {path: '/station_employees', component: StationEmployees},
        {path: '/emp_info' , component: EmployeeInformation},
        {path: '/buyticket', component: TicketOrder},
    ]
});

function nextFactory(context, middleware, index) {
    const subsequentMiddleware = middleware[index];

    if(!subsequentMiddleware) return context.next;

    return(...parameters) => {
        context.next(...parameters);
        const nextMiddleware = nextFactory(context, middleware, index + 1);
        subsequentMiddleware({ ...context, next: nextMiddleware });
    }
}

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware];
        const context = {
            from,
            next,
            router,
            to,
            store
        };
        const nextMiddleware = nextFactory(context, middleware, 1);
        return middleware[0]({ ...context, next: nextMiddleware });
    }
    return next();
});
export default router;
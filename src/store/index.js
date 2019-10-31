import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        cities: null,
        routesList: null
    },
    mutations: {
        setCities(state, cities) {
            state.cities = cities;
        },
        setRoutesList(state, routesList) {
            state.routesList = routesList;
        }
    }
})
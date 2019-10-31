import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        cities: [],
        currentCity: "",
        currentCityRoutesList: [],
        routesList: []
    },
    mutations: {
        setCities(state, cities) {
            state.cities = cities;
        },
        setCurrentCity(state, city) {
            state.currentCity = city;
        },
        setCurrentCityRoutesList(state, routesList) {
            state.currentCityRoutesList = routesList;
        },
        setRoutesList(state, routesList) {
            state.routesList = routesList;
        }
    }
})
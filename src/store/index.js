import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        cities: [],
        currentCity: "",
        currentCityRoutesList: [],
        routesList: [],
        passenger: null
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
        },
        setPassenger(state, passenger) {
            state.passenger = passenger;
        }
    },
    getters: {
        isAuthenticated(store) {
            return store.passenger !== null;
        },
        getFullName(store) {
            return store.passenger !== null ? `${store.passenger.firstName} ${store.passenger.lastName}` : '';
        }
    }
});


export default store;
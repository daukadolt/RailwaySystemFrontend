import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        cities: [],
        currentCity: null,
        currentCityRoutesList: [],
        routesList: [],
        passenger: null,
        employee: null
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
        },
        setEmployee(state, employee) {
            state.employee = employee;
        }
    },
    getters: {
        currentCitySelected(store) {
            return store.currentCity !== null;
        },
        isAuthenticated(store) {
            return store.passenger !== null;
        },
        getFullName(store) {
            return store.passenger !== null ? `${store.passenger.firstName} ${store.passenger.lastName}` : '';
        },
        getEmail(store) {
            return store.passenger !== null ? store.passenger.email : '';
        },
        isEmployeeAuthenticated(store) {
            return store.employee !== null;
        },
        isEmployeeManager(store) {
            return store.employee !== null ? store.employee.isManager : false;
        },
        isEmployeeAgent(store) {
            return store.employee !== null ? store.employee.isAgent : false;
        }
    }
});


export default store;
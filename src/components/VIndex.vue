<template>
    <div>
        <div class="bg">
            <VNavbar/>
            <Popup v-on:currentCitySelected="currentCitySelected"/>
            <VFromToSearch v-on:routesReceived="routesReceived"/>
            <keep-alive>
                <VMainPageTableAndMap v-if="displayMainPageTableAndMap" :current-city-routes-list="currentCityRoutesList"/>
                <VFromToTable v-if="displayFromToTable"/>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import VNavbar from "./VNavbar.vue";
import VFromToSearch from "./VFromToSearch.vue";
import VMainPageTableAndMap from "./VMainPageTableAndMap.vue";
import Popup from "./Popup.vue";
import VFromToTable from "./VFromToTable.vue";
import { repositoryFactory } from "../api/repositoryFactory";
const citiesRepository = repositoryFactory.get("cities");

export default {
    name: "VIndex",
    data: function() {
        return {
            currentTableComponent: 'VFromToSearch',
            displayFromToTable: false,
            displayMainPageTableAndMap: true,
            currentCityRoutesList: [],
            fromToRoutesList: []
        }
    },
    components: {
        VNavbar,
        VFromToSearch,
        VMainPageTableAndMap,
        VFromToTable,
        Popup
    },
    mounted: function(){
    },
    computed: {
        currentTableComputed: function() {
            return this.currentTableComponent
        }
    },
    methods: {
        routesReceived(routes) {
            this.displayFromToTable = true;
            this.displayMainPageTableAndMap = false;
            this.$store.commit('setRoutesList', routes);
        },
        currentCitySelected(currentCity) {
            citiesRepository.getCityArrivalDepartures(currentCity.localityId)
                .then(response => {
                    this.$store.commit("setCurrentCityRoutesList", response.data);
                    this.$store.commit("currentCitySelected", currentCity);
                    this.currentCityRoutesList = response.data;
                    this.displayFromToTable = false;
                    this.displayMainPageTableAndMap = true;
                });
        }
    }
}
</script>

<style scoped>
</style>
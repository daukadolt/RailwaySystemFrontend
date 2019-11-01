<template>
    <div>
        <div class="bg">
            <Popup v-on:currentCitySelected="currentCitySelected" v-if="!this.$store.getters.currentCitySelected"/>
            <VFromToSearch v-on:routesReceived="routesReceived"/>
            <keep-alive>
                <VMainPageTableAndMap v-if="displayMainPageTableAndMap" :current-city-routes-list="currentCityRoutesList"/>
                <VFromToTable v-if="displayFromToTable" :from-to-routes-list="fromToRoutesList"/>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import VFromToSearch from "../components/VFromToSearch.vue";
import VMainPageTableAndMap from "../components/VMainPageTableAndMap.vue";
import Popup from "../components/Popup.vue";
import VFromToTable from "../components/VFromToTable.vue";
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
            this.fromToRoutesList = routes;
            this.$store.commit('setRoutesList', routes);
        },
        currentCitySelected(currentCity) {
            citiesRepository.getCityArrivalDepartures(currentCity.localityId)
                .then(response => {
                    this.$store.commit("setCurrentCityRoutesList", response.data);
                    this.$store.commit("setCurrentCity", currentCity);
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
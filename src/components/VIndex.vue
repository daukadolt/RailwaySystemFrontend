<template>
    <div>
        <div class="bg">
            <VNavbar/>
            <VFromToSearch v-on:routesReceived="routesReceived"/>
            <keep-alive>
                <VMainPageTableAndMap v-if="displayMainPageTableAndMap"/>
                <VFromToTable v-if="displayFromToTable"/>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import VNavbar from "./VNavbar.vue";
import VFromToSearch from "./VFromToSearch.vue";
import VMainPageTableAndMap from "./VMainPageTableAndMap.vue";
import VFromToTable from "./VFromToTable.vue";
import { repositoryFactory } from "../api/repositoryFactory";
const citiesRepository = repositoryFactory.get("cities");

export default {
    name: "VIndex",
    data: function() {
        return {
            currentTableComponent: 'VFromToSearch',
            displayFromToTable: false,
            displayMainPageTableAndMap: true
        }
    },
    components: {
        VNavbar,
        VFromToSearch,
        VMainPageTableAndMap,
        VFromToTable
    },
    mounted: function(){
        citiesRepository.get()
        .then(response => {
            this.$store.commit('setCities', response.data)
        })
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
    }
}
</script>

<style scoped>
</style>
<template>
    <div>
        <form @submit.prevent="searchFromTo">
            <autocompleteCities :items="this.$store.state.cities" v-model="fromCity"/>
            <autocompleteCities :items="this.$store.state.cities" v-model="toCity"/>
            <input type="date" v-model="date" required>
            <button type="submit">Search</button>
        </form>
    </div>
</template>

<script>
import { repositoryFactory } from "../api/repositoryFactory";
import autocompleteCities from "../customTags/autocompleteCities";

export default {
    name: "VFromToSearch",
    components: {
        autocompleteCities
    },
    data: function() {
        return {
            fromCity: '',
            toCity: '',
            date: new Date(),
        }
    },
    methods: {
        searchFromTo: function() {
            repositoryFactory.get("routes")
            .getRoute(this.fromCity, this.toCity, this.date)
            .then(response => this.$emit("routesReceived", response.data))
        }
    }
}
</script>
<template>
    <div>
        <form @submit.prevent="searchFromTo">
            <input type="text" placeholder="from city" v-model="fromCity">
            <input type="text" placeholder="to city" v-model="toCity">
            <button type="submit">Search</button>
        </form>
        {{ info }}
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "VFromToSearch",
    data: function() {
        return {
            fromCity: '',
            toCity: '',
            info: null
        }
    },
    methods: {
        searchFromTo: function() {
            axios
            .get(`http://localhost:8084/dynamictodolist_war_exploded/api/routes?from=${this.fromCity}&to=${this.toCity}&date_to='2019-11-18'`)
            .then(response => this.info = response)
        }
    }
}
</script>
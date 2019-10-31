<template>
   
    <div class="form-inline"> 
        <div class="text">Search the routes</div>
        <form @submit.prevent="searchFromTo">
            <autocompleteCities :items="this.$store.state.cities" v-model="fromCity"/>
            <autocompleteCities :items="this.$store.state.cities" v-model="toCity"/>
            <input type="date" v-model="date" required>
            <button type="submit" class="btn">Search</button>
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
<style scoped>
    .text{
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        font-size: 50px;
    }
    .form-inline{
        display: inline-block;
    }
    .input-box {
        width: 150px;
        height: 34px;
        
        padding: 6px 3px;
        margin-right: 10px;
        font-size: 14px;
        color: #555;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    .btn {
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 4px;
    }
</style>
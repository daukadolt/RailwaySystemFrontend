<template>
   
    <div class="container" > 
        <div class="text" >Search the routes</div>
        <form @submit.prevent="searchFromTo" class="form-inline"> 
            <div>From</div>
            <autocompleteCities :items="this.$store.state.cities" v-model="fromCity"/>
            <div>To</div>
            <autocompleteCities :items="this.$store.state.cities" v-model="toCity"/>
            <div style="margin-right:10px">Date</div>
            <input type="date" v-model="date" class="date" required>
            <button class="btn">Search</button>
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
    .container{
        width: 60%;
        margin-bottom: 20px;
        margin-top:20px;
        background-color: rgba(99, 142, 182, 0.7);
        border-radius: 20px;
    }
    .text{
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        font-size: 50px;
        color: white;
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
        background-color: white;
        border-radius: 4px;
        margin:10px;
    }
    .btn:hover{
        columns: white;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
    .form-inline{
      display: block ruby;
        flex-flow: row wrap;
     align-items: center;  
        
    }
</style>
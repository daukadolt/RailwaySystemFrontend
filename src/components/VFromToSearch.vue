<template>
   
    <div class="container" > 
        <div class="text" >SEARCH THE ROUTES</div>
        <form @submit.prevent="searchFromTo" class="form-inline"> 
            <div>FROM</div>
            <autocompleteCities :items="this.$store.state.cities" v-model="fromCity" style="display:grid"/>
            <div>TO</div>
            <autocompleteCities :items="this.$store.state.cities" v-model="toCity" style="display:grid"/>
            <div style="margin-right:10px">DATE</div>
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
   .auto{
       display: inline;
       position: relative;
   }
    .container{
        width: 60%;
        margin-bottom: 20px;
        margin-top:40px;
        background: linear-gradient(to bottom right, rgb(96, 117, 175), #1f295e);
        border-radius: 20px;
        font-family: "Lucida Bright", Monaco, monospace;
        color: white;
        -webkit-box-shadow: -1px 6px 12px 0px rgba(50, 50, 50, 1);
        -moz-box-shadow:    -1px 6px 12px 0px rgba(50, 50, 50, 1);
        box-shadow:         -1px 6px 12px 0px rgba(50, 50, 50, 1);
        padding-bottom: 15px;
    }
    .text{
        font-family: "Lucida Bright", Monaco, monospace;
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
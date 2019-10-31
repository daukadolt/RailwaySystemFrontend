<template>
   
    <div class="form-inline"> 
        <div class="text">Search the routes</div>
        <form @submit.prevent="searchFromTo">
            <input type="text" placeholder="From City" v-model="fromCity" class="input-box">
            <input type="text" placeholder="To City" v-model="toCity" class="input-box">
            <button type="submit" class="btn" >Search</button>
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
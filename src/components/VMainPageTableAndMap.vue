<template>
<div>
<VMovingTrain/>
<div class="tableFrom">
    <!--[ { "routeId": 2, "routeName": "Aлматы - Павлодар", "startDate": "2019-10-18", "stationId": 3, "stationName": "Скриптонит", "arrDate": "2019-10-20 20:00:00" } ]-->
    <table>
        <tr>
            <th>#</th>
            <th>Route name</th>
            <th>Arrival station</th>
            <th>Arrival date</th>
        </tr>
        <tr v-for="(routeInstance, i) in currentCityRoutesList" :key="i">
            <td>{{i+1}}</td>
            <td>{{routeInstance.routeName}}</td>
            <td>{{routeInstance.stationName}}</td>
            <td>{{routeInstance.arrDate}}</td>
        </tr>
    </table>
</div>
</div>
</template>

<script>
import VMovingTrain from "./VMovingTrain.vue";
    export default {
        name: "VMainPageTableAndMap",
        props: ["currentCityRoutesList"],
        components: VMovingTrain,
        data() {
            return {}
        }
    }

</script>

<style scoped>
    table {
        font-family: arial, sans-serif;
        display: inline;
        border-collapse: collapse;
        background-color: transparent;
        padding:8px;
       
        -webkit-box-shadow: -1px 6px 12px 0px rgba(50, 50, 50, 1);
        -moz-box-shadow:    -1px 6px 12px 0px rgba(50, 50, 50, 1);
        box-shadow:         -1px 6px 12px 0px rgba(50, 50, 50, 1);
    }

    td {
        margin-top:40px;
        border: 1px solid #dddddd;
        padding: 8px;
        background-color: white;
 
    }

    tr {
        background-color:transparent;
        padding:8px;
    }
    th{
        padding:8px;
        background-color: rgb(146, 166, 223);

        
    }
    th:first-child{
        background-color: rgb(146, 166, 223);
        border-top-left-radius: 10px;
    }
    th:last-child{
        background-color: rgb(146, 166, 223);
        border-top-right-radius: 10px;
    }
    
    .btn{
        border:10px;
        border-color: white;
        background-color: white;
    }
    .btn:hover{
        columns: white;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
</style>
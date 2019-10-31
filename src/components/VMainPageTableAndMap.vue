<template>
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
</template>

<script>

    export default {
        name: "VMainPageTableAndMap",
        props: ["currentCityRoutesList"],
        data() {
            return {}
        }
    }

</script>

<style scoped>
    table {
        font-family: arial, sans-serif;
        display: inline;        
    }

    td, th {
        margin-top:40px;
        border: 1px solid #dddddd;
        padding: 8px;
    }

    tr:nth-child(odd) {
        background-color:#fff ;
    }
    tr:nth-child(even) {
        background-color:rgb(158, 155, 155) ;
    }
</style>
<template>
    <div>
        <table>
            <tr>
                <th>#</th>
                <th>Route name</th>
                <th>From</th>
                <th>Departure Date</th>
                <th>To</th>
                <th>Arrival Date</th>
                <th v-if="this.$store.getters.isAuthenticated">Order</th>
            </tr>
            <tr v-for="(routeInstance, i) in fromToRoutesList" :key="i">
                <td>{{routeInstance.routeId}}</td>
                <td>{{routeInstance.routeName}}</td>
                <td>{{routeInstance.from.name}}</td>
                <td>{{routeInstance.depDate}}</td>
                <td>{{routeInstance.to.name}}</td>
                <td>{{routeInstance.arrDate}}</td>
                <td v-if="userAuthenticated"><router-link :to="{path: 'booking', query:
                {
                date: routeInstance.startDate,
                from: routeInstance.from.id,
                to: routeInstance.to.id,
                routeId: routeInstance.routeId,
                trainId: routeInstance.trainId
                }
                }"><button class="btn-order">Order</button></router-link></td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "VFromToTable",
        props: ["fromToRoutesList"],
        data() {
            return {
                userAuthenticated: this.$store.getters.isAuthenticated
            }
        }
    }
</script>

<style scoped>
    table {
        font-family: arial, sans-serif;
        display: inline;
        border-collapse: collapse;
        background-color: transparent;
    }

    td{
        margin-top:40px;
        border: 1px solid #dddddd;
        padding: 8px;
        background-color: white;
    }

    tr {
        background-color:transparent;
    }
    th{
        background-color: rgb(146, 166, 223);
        color: white;
        padding:8px;
    }
    th:first-child{
        background-color: rgb(146, 166, 223);
        border-top-left-radius: 10px;
    }
    th:last-child{
        background-color: rgb(146, 166, 223);
        border-top-right-radius: 10px;
    }
    .btn-order{
        border-color: white;
        background-color: white;
    }
    .btn-order:hover{
        columns: white;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
</style>
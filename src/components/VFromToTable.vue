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
                startDate: routeInstance.startDate,
                depDate: routeInstance.depDate,
                arrDate: routeInstance.arrDate,
                routeId: routeInstance.routeId
                }
                }"><button>Order</button></router-link></td>
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
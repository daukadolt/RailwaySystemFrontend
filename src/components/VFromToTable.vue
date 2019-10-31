<template>
    <div>
        <ul>
            <li v-for="(routeInstance, i) in routesList" :key="i">{{routeInstance}}</li>
        </ul>
        <table>
            <tr>
                <th>#</th>
                <th>Route name</th>
                <th>From</th>
                <th>Departure Date</th>
                <th>To</th>
                <th>Arrival Date</th>
            </tr>
            <tr v-for="(routeInstance, i) in routesList" :key="i">
                <td>{{routeInstance.routeId}}</td>
                <td>{{routeInstance.routeName}}</td>
                <td>{{routeInstance.from.name}}</td>
                <td>{{routeInstance.depDate}}</td>
                <td>{{routeInstance.to.name}}</td>
                <td>{{routeInstance.arrDate}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "VFromToTable",
        data() {
            return {
                routesList: this.$store.state.routesList
            }
        }
    }
</script>
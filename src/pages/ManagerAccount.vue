<template>
    <div>
        <div id="tabs" class="container">

            <div class="tabs">
                <a v-on:click="activetab='2'" v-bind:class="[ activetab === '2' ? 'active' : '' ]">Stations</a>
                <a v-on:click="activetab='5'" v-bind:class="[ activetab === '5' ? 'active' : '' ]">Create Routes</a>
                <a v-on:click="activetab='6'" v-bind:class="[ activetab === '6' ? 'active' : '' ]">Cancel Routes</a>
            </div>

            <div v-if="activetab ==='2'" class="tabcontent">
                <div class="tableFrom">
                    <table class="travel" id='Stations'>
                        <tr>
                            <th>Station ID</th>
                        </tr>
                        <tr v-for="(station, i) in stationList" :key="i">
                        <td>
                            <router-link :to="{path: 'station_employees', query: {stationId: station.id}}"><button>Station {{station}}</button></router-link>
                            <!--router-link :to="{path: 'routeName', query: {routeId: employee.employeeId}}"--><!---/router-link--->
                        </td>
                        </tr>
                    </table>
                </div>
            </div>
                



            <div v-if="activetab ==='5'" class="tabcontent">
                {{ newRouteData }}
                <form @submit.prevent="createRoute">
                    <div class="tableFrom">
                        <table class="travel" id='createRoute'>
                            <tr>
                                <td>Route Name</td>
                                <td><input placeholder="from-to" v-model="newRouteData.routeName" required></td>
                            </tr>
                            <tr>
                                <td>Number of carriages</td>
                                <td><input placeholder="carriage number" v-model="newRouteData.carNum" required></td>
                            </tr>
                            <tr>
                                <td>Number of seats</td>
                                <td><input placeholder="seat number" v-model="newRouteData.seatNum" required></td>
                            </tr>
                            <tr v-for="(startDate, index) in newRouteData.dates" class="daukastuff" :key="'A,'+index">
                                <td>dates when will take place</td>
                                <td><input type="date" v-model="newRouteData.dates[index]" required> <button @click="addNewStartDate">Add new Date</button>
                                </td>
                            </tr>
                            <tr>
                                <td>start time</td>
                                <td><input id="appt-time" type="time" step="2" v-model="newRouteData.startTime" required></td>
                            </tr>
                            <tr style="background-color: white">
                                <td>last station</td>
                                <td><input placeholder="last station id" v-model="newRouteData.LastStation" required></td>
                            </tr>
                            <span v-for="(station, index) in newRouteData.stations" :key="index" style="display:box; margin-left=30%"> 
                               <tr>
                                    <td rowspan="2">Station #{{index+1}}</td>
                                    <td><input placeholder="station id" v-model="newRouteData.stations[index].stationId" required></td>
                                </tr>
                            <tr>
                            <td style="background-color:#888"><input id="appt-time" type="time" step="2" v-model="newRouteData.stations[index].duration" required>   <button @click="addNewStation">Add new station</button>
                            </td>
                            </tr>
                            </span>
                        </table>
                           
                        </div>
                         <button type="submit" name="submit" class="btn btn-default">Submit</button>
                    </form>
                </div>
                <div v-if="activetab ==='6'" class="tabcontent">
                    {{cancelRouteData}}
                    
                    <form @submit.prevent="CancelRoute">
                        <div class="tableFrom">
                            <table class="travel" id='cancelRoute'>
                                <tr>
                                    <td>Route ID</td>
                                    <td><input placeholder="Route ID" v-model="cancelRouteData.routeId" required></td>
                                </tr>
                                <tr>
                                    <td>Start Date</td>
                                    <td><input type="date" v-model="cancelRouteData.startDate" required></td>
                                </tr>                               
                            </table>
                        </div>
                    </form>
                    <button type="submit" name="submit" class="btn-default">Submit</button>
                </div>
            </div>
         </div>
</template>

<script>
import store from '../store';
import { repositoryFactory } from "../api/repositoryFactory"
const employeesRepository = repositoryFactory.get("employees");
let setAll = (obj, val) => Object.keys(obj).forEach(k => obj[k] = val);
let setNull = obj => setAll(obj, null);

    export default {
        name: "ManagerAccount",
        created() {
            employeesRepository.getStations()
                .then( (response) => {
                    this.stationList = [];
                    this.stationList = response.data
                } )
        },
        data() {
            return {
                passengerData: null,
                activetab: '2',
                newRouteData: {
                    routeName:'',
                    carNum:null,
                    seatNum:null,
                    dates: [null],
                    startTime:'',
                    stations:[{stationId: null, duration: null}],
                    LastStation:null,
                },
                cancelRouteData:{
                    routeId:null,
                    startDate:null,
                },
                employeeList:[{employeeId:1,
                        employeeName:"FirstEmpl",
                        employeeStation:2},
                        { employeeId:2,
                        employeeName:"SecondEmpl",
                        employeeStation:4}]
                ,
                stationList:[

                ]
            }},
        beforeRouteEnter(to, from, next) {
            next(vm => vm.setPassenger(store.state.passenger))
        },
        computed: {
        },
        methods: {
            setPassenger(passengerData) {
                this.passengerData = passengerData;
            },
            addNewStartDate() {
                this.newRouteData.dates.push(null);
            },
            addNewStation() {
                this.newRouteData.stations.push({stationId: null, duration: null});
            },
            createRoute() {
                employeesRepository.createRoute(this.newRouteData)
                    .then(() => {
                        setNull(this.newRouteData)
                    }).catch(() => {
                        setNull(this.newRouteData)
                    })
            },
            CancelRoute() {
                employeesRepository.cancelRoute(this.cancelRouteData)
                    .then(()=>{
                        setNull(this.cancelRouteData)
                    }).catch(()=>{
                        setNull(this.cancelRouteData)
                    })
            },
            AdjustHours(employeeId){
                employeesRepository.adjustHours(employeeId)
            }
    }
    }  
</script>

<style scoped>
    /* Import Google Font */
    @import url(https://fonts.googleapis.com/css?family=Nunito+Sans);
    /* RESET */
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    .btn-
    .container {
        max-width: 1000px;
        min-width: 420px;
        margin: 40px auto;
        font-family: "Nunito Sans", Arial, Helvetica, sans-serif;
        font-size: 0.9em;
        color: black;
    }
    span{
        display: block ruby;
    }

    /* Style the tabs */
    .tabs {
        overflow: hidden;
        margin-bottom: -2px; /* hide bottom border */
    }
    .tabs a{
        float: left;
        cursor: pointer;
        padding: 12px 24px;
        transition: background-color 0.2s;
        border: 1px solid #ccc;
        border-right: none;
        background-color: #f1f1f1;
        border-radius: 10px 10px 0 0;
        font-weight: bold;
    }
    .tabs a:last-child {
        border-right: 1px solid #ccc;
    }
    /* Change background color of tabs on hover */
    .tabs a:hover {
        background-color: #aaa;
        color: #fff;
    }
    /* Styling for active tab */
    .tabs a.active {
        background-color: #fff;
        color: #484848;
        border-bottom: 2px solid #fff;
        cursor: default;
    }
    /* Style the tab content */
    .tabcontent {
        padding: 30px 50px;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 4px 4px 8px #e1e1e1;
        width: 100%;
    }
    .tabcontent td {
        padding: 0.3em 0.4em;
        color: #484848;
    }
    .tabcontent td.legend {
        color: #888;
        font-weight: bold;
        text-align: right;
    }
    .tabcontent .map {
        height: 173px;
        width: 220px;
        background: #D3EAFB;
        margin-left: 60px;
        border: 1px solid #ccc;
        border-radius: 10px;
    }
    .data { width: 120px; 
    }
    .content {
        background-color: white;
    }
    .travel {
        font-family: arial, sans-serif;
        display: inline;
    }
    .travel td, th {
        margin-top:40px;
        border: 1px solid #dddddd;
        padding: 8px;
    }
    .travel tr:nth-child(odd) {
        background-color:#fff ;
    }
    .travel tr:nth-child(even) {
        background-color:#888;
    }
</style>
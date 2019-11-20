
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
                            <router-link :to="{path: 'station_employees', query: {stationId: station.id}}"><button class="btn">Station {{station}}</button></router-link>
                            <!--router-link :to="{path: 'routeName', query: {routeId: employee.employeeId}}"--><!---/router-link--->
                        </td>
                        </tr>
                    </table>
                </div>
            </div>
                



            <div v-if="activetab ==='5'" class="tabcontent">
                {{ newRouteData }}
                <form @submit.prevent="SendData">
                    <div class="tableFrom">
                        <table class="travel" id='createRoute'>
                            <tr>
                                <td width="7%">Route Name</td>
                                <td width="7%"><input placeholder="from-to" v-model="newRouteData.routeName" required></td>
                            </tr>
                            <tr>
                                <td width="7%">Number of carriages</td>
                                <td width="7%"><input placeholder="carriage number" v-model="newRouteData.carNum" required></td>
                            </tr>
                            <tr>
                                <td width="7%">Number of seats</td>
                                <td width="7%"><input placeholder="seat number" v-model="newRouteData.seatNum" required></td>
                            </tr>
                            <tr v-for="(startDate, index) in newRouteData.dates" :key="index">
                                <td width="7%">dates when will take place</td>
                                <td width="7%" class="shift" ><input type="date" v-model="newRouteData.dates[index]" required> <div style="text-align: right"><button @click="addNewStartDate" class="btn">Add new Date</button></div>
                                </td>
                            </tr>
                            <tr>
                                <td width="7%">start time</td>
                                <td width="7%"><input id="appt-time" type="time" step="2" v-model="newRouteData.startTime" required></td>
                            </tr>
                            <tr style="background-color: white">
                                <td>last station</td>
                                <td width="7%"><input placeholder="last station id" v-model="newRouteData.lastStation" required></td>
                            </tr>
                            <span v-for="(station, index) in newRouteData.stations" :key="index" style="display:box; margin-left=30%"> 
                               <tr class="secondtable">
                                    <td rowspan="2" width="7.23%">Station #{{index+1}}</td>
                                    <td width="7%"><input placeholder="station id" v-model="newRouteData.stations[index].stationId" required></td>
                                </tr>
                            <tr>
<td style="background-color:#888"><input id="appt-time" type="time" step="2" v-model="newRouteData.stations[index].duration" required>   <div style="text-align: right"><button @click="addNewStation" class="btn">Add new station</button></div>
                            </td>
                            </tr>
                            </span>
                        </table>
                           
                        </div>
                         <button type="submit" class="btn" >Submit</button>
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
                    <button type="submit" class="btn">Submit</button>
                </div>
            </div>
         </div>
</template>

<script>
import store from '../store';
import { repositoryFactory } from "../api/repositoryFactory"
const employeesRepository = repositoryFactory.get("employees");

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
                    lastStation:null,
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
            SendData() {
                employeesRepository.createRoute(this.newRouteData)
                    .then(() => {
                        this.newRouteData = {
                            routeName:'',
                            carNum:null,
                            seatNum:null,
                            dates: [null],
                            startTime:'',
                            stations:[{stationId: null, duration: null}],
                            lastStation:null,
                        }
                    }).catch(() => {
                        this.newRouteData = {
                            routeName:'',
                            carNum:null,
                            seatNum:null,
                            dates: [null],
                            startTime:'',
                            stations:[{stationId: null, duration: null}],
                            lastStation:null,
                        }
                    })
            },
            CancelRoute() {
                employeesRepository.cancelRoute(this.cancelRouteData)
                    .then(()=>{
                        this.cancelRouteData={
                            routeId:null,
                            startDate:null,
                        }
                    }).catch(()=>{
                        this.cancelRouteData={
                            routeId:'',
                            startDate:''
                        }
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
    .btn:hover{
        columns: white;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
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
        border: 0px solid #ccc;
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
        border-radius: 0px 10px 10px 10px;
        box-shadow: 4px 4px 8px #e1e1e1;
        width: 100%;
        background-color: white;
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
    .data { 
        width: 120px; 
    }
    .content {
        background-color: white;
    }
    .travel {
        font-family: arial, sans-serif;
        display: inline;
        border-collapse: collapse;
    }
    .travel td, th {
        margin-top:40px;
        border: 1px solid #dddddd;
        padding: 8px;
    }
    .travel tr{
        background-color:#fff ;
    }
    .travel td:nth-child(:last-child) {
        border-start-end-radius: 10px;
    
    }
    .travel th{
        background-color: rgb(146, 166, 223);
        color: white;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .secondtable {
        width:500px
    }
    .travel th:first-child{
        background-color: rgb(146, 166, 223);
        border-top-left-radius: 10px;
    }
    .travel th:last-child{
        background-color: rgb(146, 166, 223);
        border-top-right-radius: 10px;
    }
    
    .btn{
        display:inline-block;
        padding:0em 0.4em;
        margin:0 0.3em 0.3em 0;
        border-radius:0.15em;
        box-sizing: border-box;
        text-decoration:none;
        font-weight:100;
        color:#FFFFFF;
        background-color: rgb(146, 166, 223);
        box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
        text-align:center;
        position:relative;
    }
    .btn:hover{
        columns: white;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
    btn-order{
        border:1px;
        border-color: white;
        background-color: white;
    }
    .shift{
        margin-left: 10px;
    }
</style>
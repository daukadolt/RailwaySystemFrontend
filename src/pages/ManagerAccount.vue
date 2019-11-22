<template>
    <div>
        <div id="tabs" class="container">

            <div class="tabs">
                <a v-on:click="activetab='2'" v-bind:class="[ activetab === '2' ? 'active' : '' ]">Stations</a>
                <a v-on:click="activetab='5'" v-bind:class="[ activetab === '5' ? 'active' : '' ]">Create Routes</a>
                <a v-on:click="activetab='6'" v-bind:class="[ activetab === '6' ? 'active' : '' ]">Cancel Routes</a>
                <a v-on:click="activetab='7'" v-bind:class="[ activetab === '7' ? 'active' : '' ]">Logging</a>
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
                <form @submit.prevent="createRoute">
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
                            <tr v-for="(startDate, index) in newRouteData.dates" :key="'A,'+index">
                                <td width="7%">Dates when will take place</td>
                                <td width="7%" class="shift" ><input type="date" v-model="newRouteData.dates[index]" required> <div style="text-align: right"><button @click="addNewStartDate" class="btn">Add new Date</button></div>
                                <div v-if="index>0" style="text-align: right"><button @click="removeStartDate(index)" class="btn">Remove Date</button></div>
                                </td>
                            </tr>
                            <tr>
                                <td width="7%">Start time</td>
                                <td width="7%"><input id="appt-time" type="time" step="2" v-model="newRouteData.startTime" required></td>
                            </tr>
                            <span v-for="(station, index) in newRouteData.stations" :key="index" style="display:box; margin-left=30%"> 
                               <tr class="secondtable">
                                    <td rowspan="2" width="7.23%">Station #{{index+1}}</td>
                                    <td width="7%">
                                        <!--<input placeholder="station id" v-model="newRouteData.stations[index].stationId" required>-->
                                        <multiselect v-model="newRouteData.stations[index].stationDetails" :options="existingStations"  :custom-label="nameWithStation" placeholder="Select one" label="name" track-by="name" required/>
                                    </td>
                                </tr>
                            <tr>
                                <td style="background-color:#888">
                                    <input id="appt-time" type="time" step="2" v-model="newRouteData.stations[index].duration" required>
                                    <div style="text-align: right"><button @click="addNewStation" class="btn">Add new station</button></div>
                                    <div v-if="index>0" style="text-align: right"><button type="submit" @click="removeStation(index)" class="btn">Remove station</button></div>
                            </td>
                            </tr>
                            </span>
                            <tr style="background-color: white">
                                <td width="7.23%">Last station</td>
                                <td width="7%">
                                    <multiselect v-model="newRouteData.LastStation" :options="existingStations"  :custom-label="nameWithStation" placeholder="Select one" label="name" track-by="name" required/>
                                </td>
                            </tr>
                        </table>
                           
                        </div>
                         <button type="submit" class="btn" >Submit</button>
                    </form>
                </div>
                <div v-if="activetab ==='6'" class="tabcontent">
                    {{cancelRouteData}}

                    <form @submit.prevent="cancelRoute">
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
                        <button type="submit" class="btn">Submit</button>
                    </form>
                </div>

                <div v-if="activetab ==='7'" class="tabcontent">
                    Log recording
                    <div class="swit"><label class="switch">
                    <input type="checkbox" @change="toggleLogging" v-model="loggerToggleValue">
                    <span class="slider round"></span>
                    </label>
                    <button @click="fetchLoggerText">Update</button>
                    </div>

                    <textarea v-model="loggerLogs" class="textArea" placeholder="abc" disabled> </textarea>
                <!-- <div class = "logging_m" style="overflow: scroll; height: 400px">Message: {{ msg }}</div> -->
                </div>

            </div>
         </div>
</template>

<script>
import store from '../store';
import { repositoryFactory } from "../api/repositoryFactory"
import Multiselect from 'vue-multiselect'

const employeesRepository = repositoryFactory.get("employees");
const logsRepository = repositoryFactory.get("logs");
let setAll = (obj, val) => Object.keys(obj).forEach(k => obj[k] = val);
let setNull = obj => setAll(obj, null);

    export default {
        name: "ManagerAccount",
        components: {
            Multiselect
        },
        created() {
            employeesRepository.getStations()
                .then( (response) => {
                    this.stationList = [];
                    this.stationList = response.data;
                    this.existingStations = [];
                    this.existingStations = response.data;
                    return logsRepository.getLogs()
                } )
                .then( response => {
                   this.loggerLogs = response.data;
                   return employeesRepository.getCurrentLoggingValue()
                })
                .then( response => {
                    this.loggerToggleValue = response.data;
                });
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
                    stations:[{stationDetails: null, duration: null}],
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
                stationList:[],
                existingStations: [{"id":1,"name":"First"},{"id":2,"name":"Second"},{"id":3,"name":"Third"}],
                loggerLogs: "",
                loggerToggleValue: null
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
            removeStation(index){
                this.newRouteData.stations.splice(index,1);
            },
            removeStartDate(index){
                this.newRouteData.dates.splice(index,1);
            },
            createRoute() {
                this.$emit("toggleLoadingSpinner", true);
                this.newRouteData.stations = this.newRouteData.stations.map(chosenStation => {
                    return {stationId: chosenStation.stationDetails.id, duration: chosenStation.duration };
                });
                this.newRouteData.LastStation = this.newRouteData.LastStation.id;
                employeesRepository.createRoute(this.newRouteData)
                    .then(() => {
                        this.$emit("toggleLoadingSpinner", false);
                        this.newRouteData = {
                            routeName:'',
                            carNum:null,
                            seatNum:null,
                            dates: [null],
                            startTime:'',
                            stations:[{stationDetails: null, duration: null}],
                            LastStation:null,
                        }
                    }).catch(() => {
                        alert("create route not working")
                })
                this.$emit("toggleLoadingSpinner", false);
            },
            cancelRoute() {
                employeesRepository.cancelRoute(this.cancelRouteData)
                    .then(()=>{
                        setNull(this.cancelRouteData)
                    }).catch(()=>{
                        alert("cancel route not working")
                    })
            },
            AdjustHours(employeeId){
                employeesRepository.adjustHours(employeeId)
            },

            /* helper functions for multiselect */

            nameWithStation(someObj) {
                return `${someObj.name}`;
            },

            /* helper functions for multiselect */
            toggleLogging() {
                employeesRepository.toggleLoggingMode(this.loggerToggleValue);
            },

            fetchLoggerText() {
                logsRepository.getLogs()
                    .then(response => {
                        this.loggerLogs = response.data;
                    });
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
    .without::-webkit-datetime-edit-ampm-field {
   display: none;
 }
 input[type=time]::-webkit-clear-button {
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;
   margin: 0; 
 }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
   appearance: none;
   margin: 0; 
  }
    .btn:hover{
        columns: white;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
    .without_ampm::-webkit-datetime-edit-ampm-field {
        display: none;
    }
    input[type=time]::-webkit-clear-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
        -ms-appearance:none;
        appearance: none;
        margin: -10px; 
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
    .textArea{
        -webkit-box-shadow: -1px 17px 36px 0px rgba(77,110,176,1);
        -moz-box-shadow: -1px 17px 36px 0px rgba(77,110,176,1);
        box-shadow: -1px 17px 36px 0px rgba(77,110,176,1);
        padding-left: 12px;
        padding-top: 12px;
        padding-right: 12px;
        padding-bottom: 12px;
        height: 400px; 
        width: 85%; 
        border: 1px solid rgb(146, 166, 223);
        }
    .textArea:disabled{
        background-color: white;
        font-size: 18px;
        color: black;
        margin-top: 3%
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
    .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    }

    .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
    }

    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    }

    .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    }

    input:checked + .slider {
    background-color: #2196F3;
    }

    input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
    border-radius: 34px;
    }

    .slider.round:before {
    border-radius: 50%;
    }


</style>
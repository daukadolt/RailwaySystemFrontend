<template>
    <div>
        <div id="tabs" class="container">

            <div class="tabs">
                <a v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active' : '' ]">Stations schedule</a>
                <a v-on:click="activetab='2'" v-bind:class="[ activetab === '2' ? 'active' : '' ]">Employees schedule</a>
                <a v-on:click="activetab='3'" v-bind:class="[ activetab === '3' ? 'active' : '' ]">Payroll</a>
                <a v-on:click="activetab='4'" v-bind:class="[ activetab === '4' ? 'active' : '' ]">Manage hours</a>
                <a v-on:click="activetab='5'" v-bind:class="[ activetab === '5' ? 'active' : '' ]">Create Routes</a>
                <a v-on:click="activetab='6'" v-bind:class="[ activetab === '6' ? 'active' : '' ]">Cancel Routes</a>
            </div>

            <div class="content">
                <div v-if="activetab ==='1'" class="tabcontent">
                    <div class="tableFrom">
                        <table class="travel" id='stationsSchedule'>
                            <tr>
                                <th>STATIONS SCHEDULE</th>
                                <th>Contact</th>
                                <th>Country</th>
                            </tr>
                            <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Ernst Handel</td>
                                <td>Roland Mendel</td>
                                <td>Austria</td>
                            </tr>
                            <tr>
                                <td>Island Trading</td>
                                <td>Helen Bennett</td>
                                <td>UK</td>
                            </tr>
                            <tr>
                                <td>Laughing Bacchus Winecellars</td>
                                <td>Yoshi Tannamuri</td>
                                <td>Canada</td>
                            </tr>
                            <tr>
                                <td>Magazzini Alimentari Riuniti</td>
                                <td>Giovanni Rovelli</td>
                                <td>Italy</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div v-if="activetab ==='2'" class="tabcontent">
                    <div class="tableFrom">
                        <table class="travel" id='employeeSchedule'>
                            <tr>
                                <th>Employee SCHEDULE</th>
                            </tr>
                        </table>
                    </div>
                </div>
                <div v-if="activetab ==='3'" class="tabcontent">
                    <div class="tableFrom">
                        <table class="travel" id='employeeSchedule'>
                            <tr>
                                <th>PAYROLL</th>
                            </tr>
                        </table>
                    </div>
                </div>
                <div v-if="activetab ==='4'" class="tabcontent">
                    <div class="tableFrom">
                        <table class="travel" id='employeeSchedule'>
                            <tr>
                                <th>Manage Hours</th>
                            </tr>
                        </table>
                    </div>
                </div>
                <div v-if="activetab ==='5'" class="tabcontent">
                    <div class="tableFrom">
                        <table class="travel" id='createRoute'>
                            <tr>
                                <th>Route Name</th>
                                <th><input placeholder="from-to" v-model="routeName"></th>
                            </tr>
                            <tr>
                                <th>Carriage Number</th>
                                <th><input placeholder="carriage number" v-model="carNum"></th>
                            </tr>
                            <tr>
                                <th>Seat Number</th>
                                <th><input placeholder="seat number" v-model="seatNum"></th>
                            </tr>
                            <tr>
                                <th>dates when will take place</th>
                                <th><input type="date" v-model="dates"></th>
                            </tr>
                            <tr>
                                <th>start time</th>
                                <th><input type="appt-time" v-model="startTime"></th>
                            </tr>
                            <tr>
                                <th rowspan="2">Stations</th>
                                <th><input placeholder="station id" v-model="stationsId"></th>
                                
                            </tr>
                            <tr>
                                <th style="background-color:#888"><input id="appt-time" type="time" step="2" v-model="duration" ></th>
                            </tr>
                            <tr style="background-color: white">
                                <th>last station</th>
                                <th><input placeholder="last station id" v-model="lastStation"></th>
                            </tr>
                            
                        </table>
                        
                    </div>
                    <button type="submit" @click="SendData()" name="submit" class="btn-default">Submit</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import store from '../store';

    export default {
        name: "PassengerAccount",
        data() {
            return {
                passengerData: null,
                activetab: '1',
                routeName:'',
                carNum:null,
                seatNum:null,
                dates: new Date(),
                startTime:'',
                stationsId:null,
                duration:'',
                lastStation:null
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => vm.setPassenger(store.state.passenger))
        },
        computed: {
        },
        methods: {
            setPassenger(passengerData) {
                this.passengerData = passengerData;
            },
            SendData: function(){
                

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

    .container {
        max-width: 1000px;
        min-width: 420px;
        margin: 40px auto;
        font-family: "Nunito Sans", Arial, Helvetica, sans-serif;
        font-size: 0.9em;
        color: black;
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
    .data { width: 120px; }
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
        background-color:#888    }
</style>
<template>
    <div>
        <div id="tabs" class="container">

            <div class="tabs">
                <a v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active' : '' ]">My Profile</a>
                <a v-on:click="activetab='2'" v-bind:class="[ activetab === '2' ? 'active' : '' ]">Past Trips</a>
                <a v-on:click="activetab='3'" v-bind:class="[ activetab === '3' ? 'active' : '' ]">Future Trips</a>
            </div>

            <div class="content">
                <div v-if="activetab ==='1'" class="tabcontent">
                    <table >
                        <tr>
                            <td class="legend">Full Name:</td>
                            <td class="data">{{this.$store.getters.getFullName}}</td>
                            <td rowspan="5">
                                <img class="map" src="https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png">
                            </td>
                        </tr>
                        <tr><td class="legend">Email:</td><td class="data">{{this.$store.getters.getEmail}}</td></tr>
                        <tr><td class="legend">Phone Number:</td><td class="data">None</td></tr>
                    </table>
                </div>
                <div v-if="activetab ==='2'" class="tabcontent">
                    <div class="tableFrom">
                        <table class="travel" id='pastTrips'>
                            <tr>
                                <th>From station</th>
                                <th>To station</th>
                                <th>From date</th>
                                <th>To date</th>
                                <th>Route name</th>
                                <th>Carriage number</th>
                                <th>Seat number</th>
                            </tr>
                            <tr v-for="(travel, index) in pastTravels" :key="'past travel ' + index">
                                <td>{{travel.fromStation}}</td>
                                <td>{{travel.toStation}}</td>
                                <td>{{travel.fromDate}}</td>
                                <td>{{travel.toDate}}</td>
                                <td>{{travel.routeName}}</td>
                                <td>{{travel.carriageNum}}</td>
                                <td>{{travel.seat}}</td>
                            </tr>
                        </table>
                    </div>  
                </div>
                <div v-if="activetab ==='3'" class="tabcontent">
                    <div class="tableFrom">
                        <table class="travel" id='futureTrips'>
                            <tr>
                                <th>From station</th>
                                <th>To station</th>
                                <th>From date</th>
                                <th>To date</th>
                                <th>Route name</th>
                                <th>Carriage number</th>
                                <th>Seat number</th>
                            </tr>
                            <tr v-for="(travel, index) in futureTravels" :key="'future travel ' + index">
                                <td>{{travel.fromStation}}</td>
                                <td>{{travel.toStation}}</td>
                                <td>{{travel.fromDate}}</td>
                                <td>{{travel.toDate}}</td>
                                <td>{{travel.routeName}}</td>
                                <td>{{travel.carriageNum}}</td>
                                <td>{{travel.seat}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import store from '../store';
import { repositoryFactory } from '../api/repositoryFactory'
const passengersRepository = repositoryFactory.get("passengers");

    export default {
        name: "PassengerAccount",
        created() {
            passengersRepository.getPassengerPastTrips(store.state.passenger.passengerId)
                .then(response => {
                    this.pastTravels = response.data;
                    return passengersRepository.getPassengerNextTrips(store.state.passenger.passengerId)
                })
                .then(response => {
                    this.futureTravels = response.data
                })
        },
        data() {
            return {
                passengerData: null,
                pastTravels: null,
                futureTravels: null,
                activetab: '1'
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
        color: #888;
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
    .travel th:first-child {
        border-top-left-radius: 10px;
    
    }
    .travel th:last-child {
        border-top-right-radius: 10px;
    
    }
    .travel th{
        background-color: rgb(146, 166, 223);
        color: white;
    }
</style>
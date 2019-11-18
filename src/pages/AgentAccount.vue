<template>
    <div>
        <div id="tabs" class="container">

            <div class="tabs">
                <a v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active' : '' ]">Create Ticket</a>
                <a v-on:click="activetab='2'" v-bind:class="[ activetab === '2' ? 'active' : '' ]">Cancel Ticket</a>
            </div>

            <div class="content">
                <div v-if="activetab ==='1'" class="tabcontent">
                    {{ newTicketData }}
                    <form @submit.prevent="createTicket">
                        <div class="tableFrom">
                            <table class="travel" id='createTicket'>
                                <tr>
                                    <td>Route ID</td>
                                    <td><input placeholder="Route ID" v-model="newTicketData.route_id" required></td>
                                </tr>
                                <tr>
                                    <td>Date</td>
                                    <td><input type="date" v-model="newTicketData.date" required></td>
                                </tr>
                                <tr>
                                    <td>Arrival Station ID</td>
                                    <td><input placeholder="To Station ID" v-model="newTicketData.to" required></td>
                                </tr>
                                
                                <tr>
                                    <td>Departure Station ID</td>
                                    <td><input placeholder="From Station ID" v-model="newTicketData.from" required></td>
                                </tr>
                                <tr>
                                    <td>Passenger Email</td>
                                    <td><input placeholder="Email" v-model="newTicketData.email" required></td>
                                </tr>
                                <tr>
                                    <td>Phone number</td>
                                    <td><input placeholder="+770112345678" v-model="newTicketData.phone" required></td>
                                </tr>
                                <tr>
                                    <td>First Name</td>
                                    <td><input placeholder="John" v-model="newTicketData.first_name" required></td>
                                </tr>
                                <tr>
                                    <td>Last Name</td>
                                    <td><input placeholder="Doe" v-model="newTicketData.last_name" required></td>
                                </tr>
                                <tr>
                                    <td>Carriage Number</td>
                                    <td><input placeholder=1 v-model="newTicketData.carriage_num" required></td>
                                </tr>
                                <tr>
                                    <td>Train ID</td>
                                    <td><input placeholder=1 v-model="newTicketData.train_id" required></td>
                                </tr>
                                <tr>
                                    <td>Seat Number</td>
                                    <td><input placeholder=34 v-model="newTicketData.seat_num" required></td>
                                </tr>
                            </table>
                        </div>
                        <button type="submit" name="submit" class="btn-default">Submit</button>
                    </form>
                </div>
                <div v-if="activetab ==='2'" class="tabcontent">
                    {{ cancelTicketData }}
                    <form @submit.prevent="cancelTicket">
                        <div class="tableFrom">
                            <table class="travel" id='cancelTicket'>
                                <tr>
                                    <td>Ticket ID</td>
                                    <td><input placeholder="3" v-model="cancelTicketData.ticketId" required></td>
                                </tr>
                                <tr>
                                    <td>Train ID</td>
                                    <td><input placeholder="trainId" v-model="cancelTicketData.trainId" required></td>
                                </tr>
                                <tr>
                                    <td>Route ID</td>
                                    <td><input placeholder="Route ID" v-model="cancelTicketData.routeId" required></td>
                                </tr>
                            </table>
                        </div>
                        <button type="submit" name="submit" class="btn-default">Submit</button>
                    </form>
                </div>
                
            </div>
         </div>
    </div>
</template>

<script>
import { repositoryFactory } from "../api/repositoryFactory"
const employeesRepository = repositoryFactory.get("employees");

    export default {
        name: "AgentAccount",
        data() {
            return {
                passengerData: null,
                activetab: '1',
                newTicketData: {
                    route_id: null,
                    date: null,
                    to: null,
                    from: null,
                    email: null,
                    phone: null,
                    first_name: null,
                    last_name: null,
                    carriage_num: null,
                    train_id: null,
                    seat_num: null,
                },
                cancelTicketData:{
                    ticketId:null,
                    trainId:null,
                    routeId:null,
                }
            }
        },
        computed: {
        },
        methods: {
            createTicket() {
                employeesRepository.createTicket(this.newTicketData)
                    .then(() => {
                        this.newTicketData = {
                            route_id:null,
                            date:null,
                            to:null,
                            from:null,
                            email:null,
                            phone:null,
                            first_name:null,
                            last_name:null,
                            carriage_num:null,
                            train_id:null,
                            seat_num:null,
                        }
                    }).then(()=>{
                        alert 
                    }).catch(() => {
                        this.newTicketData = {                  
                            route_id:null,
                            date:null,
                            to:null,
                            from:null,
                            email:null,
                            phone:null,
                            first_name:null,
                            last_name:null,
                            carriage_num:null,
                            train_id:null,
                            seat_num:null,                
                        }
                    })
            },
            cancelTicket() {
                employeesRepository.cancelRoute(this.cancelTicketData)
                    .then(()=>{
                        this.cancelTicketData={
                            ticketId:null,
                            trainId:null,
                            routeId:null,
                        }
                    }).catch(()=>{
                        this.cancelTicketData={
                            ticketId:null,
                            trainId:null,
                            routeId:null,   
                        }
                    })
            },
            changeTicket(){

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
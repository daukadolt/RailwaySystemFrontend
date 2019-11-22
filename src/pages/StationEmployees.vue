<template>
    <div>
        <router-link :to="{path: 'manager_account'}"><button class="btn">Go Back</button></router-link>
        <div class="tabs">
            <div class="heading">Station #{{this.$route.query.stationId}}</div>
            <table class="travel" id='Station Employees'>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Email</th>
                    <th>Edit</th>
                </tr>
                <tr v-for="(employee, i) in employeeList" :key="i">
                    <td>{{employee.employeeId}}</td>
                    <td>{{employee.email}}</td>
                    <td><router-link :to="{path: 'emp_info', query: {employeeId: employee.employeeId}}"> <button class="btn ">Edit</button> </router-link></td>
                <!--<td>&lt;!&ndash;-router-link :to="{path: 'routeName', query: {routeId: employee.employeeId}}"-&ndash;&gt;<button>Edit</button>&lt;!&ndash;-/router-link-&ndash;&gt;</td>-->
            </tr>
            </table>
        </div>
    </div>
</template>
<script>
import { repositoryFactory } from "../api/repositoryFactory"
const employeesRepository = repositoryFactory.get("employees");

export default {
    name: "StationEmployees",
    created() {
        this.employeeList = [];
        employeesRepository.getStationEmployees(this.$route.query.stationId)
            .then( (response) => {
                this.employeeList = response.data;
            } )
    },
    data() {
        return {
            employeeList:[]
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
    .heading{
        font-size:50px;
        /* background:rgba(146, 166, 223, 0.9); */
        margin-top: 3%;
        margin-bottom: 3%;
        width: 40%;
        margin-left: 30%; 
        border-radius: 0.9em;
        background: linear-gradient(to bottom right, rgb(125, 144, 201), #504eaa);
        border-radius: 20px;
        font-family: "Lucida Bright", Monaco, monospace;
        color: white;
        -webkit-box-shadow: -1px 6px 12px 0px rgba(50, 50, 50, 1);
        -moz-box-shadow:    -1px 6px 12px 0px rgba(50, 50, 50, 1);
        box-shadow:         -1px 6px 12px 0px rgba(50, 50, 50, 1);
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
        border-radius: 10px;
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
    }
    .travel th:first-child{
        border-top-left-radius: 10px;
    }
    .travel th:last-child{
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
</style>
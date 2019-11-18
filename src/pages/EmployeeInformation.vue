<template>
<div>
    <div class="tableFrom">
        <table class="travel" id='createRoute'>
        <tr>
            <th>Week Day</th>
            <th>Starting Hour</th>
            <th>End Hour</th>
        </tr>
        
        <tr v-for="(employeeWorkDay , i) in employeeWorkDayList " :key="i">
            <td><input v-model = "employeeWorkDay.week_day" placeholder="week_day"></td>
            <td><input v-model = "employeeWorkDay.start_hour" placeholder="start_hour" ></td>
            <td><input v-model = "employeeWorkDay.end_hour" placeholder="end_hour" ></td>
        </tr>
    </table>
    </div>
    <div>
        <table class="travel">
            <tr>
                <th>Salary</th>
                <th><input type = "number" placeholder= "salary" v-model = "employee.salary"></th>
            </tr>
        </table>

    </div>
    <button type="submit">Submit</button>
</div>
</template>

<script>
//import { employeesFactory } from "../api/employeesFactory"
//import routesRepository from '../api/routesRepository';
//const employeesRepository = repositoryFactory.get("employees");
    export default {
        name: "EmployeeInformation",
        created() {
            /*employeesRepository.getEmployeeSchedule(this.$route.query.e_id)
            .then((response)=> {
                response.data
                this.emloyee = response.data
            })*/
        },
        data() {
            return {
                employee:{
                    salary:100
                },
                employeeWorkDayList: [{
                    week_day:1,
                    start_hour:2,
                    end_hour:3
                },{
                    week_day:2,
                    start_hour:4,
                    end_hour:5
                },{
                    week_day:3,
                    start_hour:6,
                    end_hour:7
                },{
                    week_day:4,
                    start_hour:8,
                    end_hour:9
                },{
                    week_day:5,
                    start_hour:10,
                    end_hour:11
                },{
                    week_day:6,
                    start_hour:11,
                    end_hour:12
                },{
                    week_day:7,
                    start_hour:13,
                    end_hour:14
                }]
            }
        },
        computed: {
        },
        methods: {
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
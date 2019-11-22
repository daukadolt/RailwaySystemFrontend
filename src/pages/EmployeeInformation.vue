<template>
<div>
    <router-link :to="{path: 'station_employees', query: {stationId: employeeData.stationId}}"><button class="btn"> Go Back</button></router-link>
    <form @submit.prevent = "updateSchedule">
    <div class="tableFrom">
        
        <table class="travel" id='createRoute'>
        <tr>
            <th>Week Day</th>
            <th>Starting Hour</th>
            <th>End Hour</th>
        </tr>
        <tr v-for="(employeeWorkDay , i) in employeeWorkDayList " :key="i">
            <td>{{employeeWorkDay.week_day}}</td>
            <td><input type = "number" v-model = "employeeWorkDay.start_hour" min="0" :max="23" placeholder="start_hour" ></td>
            <td><input type = "number" v-model = "employeeWorkDay.end_hour" min="0" :max="23" placeholder="end_hour" ></td>
        </tr>
    </table>
     </div>
     <br>
     <br>
    <button type = "submit" class="btn">Change Schedule</button>
   
        </form>
    
    
    
    <br><br>
    <form @submit.prevent="updateSalary">
        <div>
        <table class="travel">
            <tr>
                <th>Salary</th>
                <th><input type = "number" min="0" placeholder= "salary" v-model = "employeeData.salary"></th>
            </tr>
        </table>
        

    </div>
    <br>
    <br>
    <button type="submit" class="btn">Update Salary</button>
    </form>
</div>
</template>

<script>
import { repositoryFactory } from "../api/repositoryFactory"
const employeesRepository = repositoryFactory.get("employees");
    export default {
        name: "EmployeeInformation",
        created() {
            employeesRepository.getEmployeeSchedule(this.$route.query.employeeId)
                .then( response => {
                    this.employeeWorkDayList = response.data;
                    return employeesRepository.getEmployeeInformation(this.$route.query.employeeId);
                }).then(response=>{
                    console.log("salary information");
                    console.log(response);
                    this.employeeData=response.data;
                    
                });
        },
        data() {
            return {
                employeeData: {
                    employeeId:1,
                    salary:500,
                    stationId:1,
                    email:"daulet.amirkhanov@nu.edu.kz",
                    password:"dauka",
                    isManager:false,
                    isAgent:false
                },
                employeeWorkDayList: []
            }
        },
        computed: {
        },
        methods: {
            updateSalary(){
                employeesRepository.updateEmployeeSalary(this.$route.query.employeeId, this.employeeData.salary);
            },
            updateSchedule() {
                let updatedSchedule = [];
                this.employeeWorkDayList.forEach(dayRecord => {
                    let dayRecordWithoutId = {start_hour: dayRecord.start_hour, end_hour: dayRecord.end_hour, week_day: dayRecord.week_day};
                    updatedSchedule.push(dayRecordWithoutId);
                });
                employeesRepository.updateEmployeeSchedule(this.$route.query.employeeId, this.employeeWorkDayList)
                    .then( response => {
                        console.log("success");
                        console.log(response);
                    } )
                    .catch(err => {
                        console.log("error");
                        console.log(err);
                    })
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
</style>
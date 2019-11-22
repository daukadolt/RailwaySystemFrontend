<template>
    <div>
        <p v-if="message">Message: {{message}}</p>
        <form @submit.prevent="loginUser" style="display: -webkit-inline-box!important; position: inherit; border-raduis: 0.5em"> 
            <p>Employee Login</p>
            <input type="text" v-model="employeeLoginData.email" placeholder="email" required>
            <input type="password" v-model="employeeLoginData.password" placeholder="password" required>
            <button type="submit" style = "background-color: rgb(146, 166, 223); border: 1px solid rgb(146, 166, 223); border-radius: 1em!important; padding: 10px 61px!important">Login</button>
        </form>
    </div>
</template>
<script>
import { repositoryFactory } from "../api/repositoryFactory";
const employeesRepository = repositoryFactory.get("employees");

export default {
        name: "EmployeeLogin",
        data() {
            return {
                employeeLoginData: {
                    email: "daulet@google.com",
                    password: "something"
                },
                message: this.$route.query.message
            }
        },
        methods: {
            loginUser() {
                employeesRepository.login(this.employeeLoginData)
                    .then(response => {
                        this.authenticateUser(response.data);
                    });
            },
            authenticateUser(employeeData) {
                let isAgent = employeeData.isAgent;
                let isManager = employeeData.isManager;
                if(isManager || isAgent) {
                    this.$store.commit('setEmployee', employeeData);
                    if(isManager) {
                        this.$router.push("manager_account");
                    }
                    else if(isAgent) {
                        this.$router.push("agent_account");
                    }
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
  @import "../components/LogIn.scss";
</style>
    
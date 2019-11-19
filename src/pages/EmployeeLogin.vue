<template>
    <div>
        <p v-if="message">Message: {{message}}</p>
        <form @submit.prevent="loginUser">
            <p>Employee Login</p>
            <input type="text" v-model="employeeLoginData.email" placeholder="email" required>
            <input type="password" v-model="employeeLoginData.password" placeholder="password" required>
            <button type="submit">Login</button>
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
                this.$store.commit('setEmployee', employeeData);
                this.$router.push("emp_");
            }
        }
    }
</script>
    
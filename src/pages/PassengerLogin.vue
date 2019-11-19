<template>
    <div>
        <p v-if="message">Message: {{message}}</p>
        <form @submit.prevent="loginUser">
            <p>Login</p>
            <input type="text" v-model="passengerLoginData.email" placeholder="email" required>
            <input type="password" v-model="passengerLoginData.password" placeholder="password" required>
            <button type="submit">login</button>
        </form>
        <form @submit.prevent="signUpUser">
            <p>SignUp</p>
            <input type="text" v-model="passengerSignUpData.email" placeholder="email" required>
            <input type="text" v-model="passengerSignUpData.firstName" placeholder="first name" required>
            <input type="text" v-model="passengerSignUpData.lastName" placeholder="last name" required>
            <input type="password" v-model="passengerSignUpData.password" placeholder="password" required>
            <button type="submit">sign up</button>
        </form>
    </div>
</template>

<script>
import { repositoryFactory } from "../api/repositoryFactory";
const passengersRepository = repositoryFactory.get("passengers");

export default {
        name: "PassengerLogin",
        data() {
            return {
                passengerLoginData: {
                    email: "daulet@google.com",
                    password: "something"
                },
                passengerSignUpData: {
                    email: 'daulet@google.com',
                    firstName: "Daulet",
                    lastName: "Amirkhanov",
                    password: "something"
                },
                message: this.$route.query.message
            }
        },
        methods: {
            loginUser() {
                passengersRepository.login(this.passengerLoginData)
                    .then(response => {
                        this.authenticateUser(response.data);
                    });
            },
            signUpUser() {
                passengersRepository.sign_up(this.passengerSignUpData)
                    .then(response => {
                        return passengersRepository.getPassengerInfo(response.data)
                    })
                    .then(response => {
                        this.authenticateUser(response.data);
                    });
            },
            authenticateUser(passengerData) {
                this.$store.commit('setPassenger', passengerData);
                this.$router.push("account");
            }
        }
    }
</script>

<style scoped>

</style>
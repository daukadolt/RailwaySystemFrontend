<template>
    <div>
        <article>
            <div class="container" :class="{'sign-up-active' : signUp}">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-left">
            <h2>Welcome Back!</h2>
            <p>Please login with your personal info</p>
            <button class="invert" id="signIn" @click="signUp = !signUp">Sign In</button>
          </div>
          <div class="overlay-right">
            <h2>Hello, Friend!</h2>
            <p>Please enter your personal details</p>
            <button class="invert" id="signUp" @click="signUp = !signUp">Sign Up</button>
          </div>
        </div>
      </div>
        <p v-if="message">Message: {{message}}</p>
        <form @submit.prevent="loginUser" class="sign-in" action="#">
            <p>Login</p>
            <input type="text" v-model="passengerLoginData.email" placeholder="email" required>
            <input type="password" v-model="passengerLoginData.password" placeholder="password" required>
            <button type="submit">login</button>
        </form>
        <form @submit.prevent="signUpUser" class="sign-up" action="#">
            <p>SignUp</p>
            <input type="text" v-model="passengerSignUpData.email" placeholder="email" required>
            <input type="text" v-model="passengerSignUpData.firstName" placeholder="first name" required>
            <input type="text" v-model="passengerSignUpData.lastName" placeholder="last name" required>
            <input type="password" v-model="passengerSignUpData.password" placeholder="password" required>
            <button type="submit">sign up</button>
        </form>
            </div>
        </article>
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
                message: this.$route.query.message, 
                signUp: false
            }
        },
        methods: {
            loginUser() {
                this.$emit("toggleLoadingSpinner", true);
                passengersRepository.login(this.passengerLoginData)
                    .then(response => {
                        this.authenticateUser(response.data);
                    });
                this.$emit("toggleLoadingSpinner", false);
            },
            signUpUser() {
                this.$emit("toggleLoadingSpinner", true);
                passengersRepository.sign_up(this.passengerSignUpData)
                    .then(response => {
                        return passengersRepository.getPassengerInfo(response.data)
                    })
                    .then(response => {
                        this.authenticateUser(response.data);
                    });
                this.$emit("toggleLoadingSpinner", false);
            },
            authenticateUser(passengerData) {
                this.$emit("toggleLoadingSpinner", false);
                this.$store.commit('setPassenger', passengerData);
                this.$router.push("account");
            }
        }
    }
</script> 

<style lang="scss" scoped>
  @import "../components/LogIn.scss";
</style>
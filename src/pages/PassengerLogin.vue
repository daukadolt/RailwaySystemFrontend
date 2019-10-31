<template>
    <div>
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
    export default {
        name: "PassengerLogin",
        data() {
            return {
                passengerLoginData: {
                    email: null,
                    password: null
                },
                passengerSignUpData: {
                    email: null,
                    firstName: null,
                    lastName: null,
                    password: null
                }
            }
        },
        methods: {
            loginUser() {

            },
            signUpUser() {

            }
        }
    }
</script>

<style scoped>

</style>
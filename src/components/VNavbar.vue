<template>
    <div class="navigation-bar" >
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div id="navigation-container">
        <img src="../assets/PicsArt_10-05-10.27.58.jpg" width="70" height="70">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li v-if="!this.$store.getters.isAuthenticated"><router-link to="/login">Login</router-link></li>
            <li v-else><router-link to="/account"><button class="btn"><i class="fa fa-home"></i>{{this.$store.getters.getFullName}}</button></router-link></li>
        </ul>
    </div>
    </div>
</template>

<script>
export default {
    name: "VNavbar",
    data: function() {
        return {
            
        }
    }
}
</script>
<style scoped>

    #navigation-container {
    width: 1200px;
    margin: 0 auto;
    height: 70px;
    background-color: #f8f9fa80;
    padding-right: 100px;
    }

    .navigation-bar {
    height: 70px;
    width: 100%;
    text-align:center;
    }
    .navigation-bar img{
    float:left;
    }
    .navigation-bar ul {
    padding: 0px;
    margin: 0px;
    text-align: right;
    
    vertical-align:top;
    }

    .navigation-bar li {
    list-style-type: none;
    padding: 0px;
    display: inline;
    }

    .navigation-bar li a {
    color: black;
    font-size: 16px;
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    text-decoration: none;
    line-height: 70px;
    padding: 5px 15px;
    opacity: 0.7;
    }
    .btn {
        border: none;
        background-color: transparent;
        color: black;
    }
</style>
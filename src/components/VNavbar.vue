<template>
    <div class="navigation-bar" >
        <div id="navigation-container">
        <img src="../assets/PicsArt_10-05-10.27.58.jpg" width="70" height="70">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Get in Touch</a></li>
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
    background-color: aliceblue;
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
</style>
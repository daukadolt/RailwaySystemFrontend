<template>
<div>
    <div class="navigation-bar" >
        <div id="navigation-container">
        <img src="../assets/PicsArt_10-05-10.27.58.jpg" width="70" height="70">
        <ul>
            <li><a href="index.html">Main</a></li>
            <li><a href="LogSign.html">Log In</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Get in Touch</a></li>
        </ul>
    </div>
    </div>
  <div id="app">

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
      <form class="sign-up" action="#">
        <h2>Create login</h2>
        <div>Use your email for registration</div>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
      <form class="sign-in" action="#">
        <h2>Sign In</h2>
        <div>Use your account</div>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </form>
    </div>
  </article>
  
  <!-- Youtube Link -->
</div>
</div>
</template>
<script>
 export default {
    name: "LogInAndSignUp",
    data() {
      return {
       signUp: false
      }
    },
    methods: {
    }
  }
</script>


<style lang="scss">
  @import "./LogIn.scss";
</style>


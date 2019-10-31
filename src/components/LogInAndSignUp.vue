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
    
<div class="content-train">
    <div class="train">
        <div class="front-train">
            <div class="train-window"></div>
            <div class="front-side">
                <div class="light"></div>
                <div class="bumper"></div>
            </div>
        </div>
        <div class="back-train"></div>
        <div class="rims-wrap">
            <div class="mudguard-wrap">
                <div class="item-mudguard front-st"></div>
                <div class="item-mudguard front-nd"></div>
                <div class="item-mudguard back-st"></div>
                <div class="item-mudguard back-nd"></div>
            </div>
            <div class="wrap-rims-guide">
                <div class="rims-guide">
                    <div class="point-front-st"></div>
                    <div class="point-front-nd"></div>
                    <div class="point-back-st"></div>
                    <div class="point-back-nd"></div>
                </div>
            </div>
            <div class="rims front-st">
                <div class="center-rims"></div>
                <div class="rays"></div>
                <div class="rays"></div>
                <div class="rays"></div>
                <div class="rays"></div>
            </div>
            <div class="rims front-nd">
                <div class="center-rims"></div>
                <div class="rays"></div>
                <div class="rays"></div>
                <div class="rays"></div>
                <div class="rays"></div>
            </div>
            <div class="rims back-st">
                <div class="center-rims"></div>
                <div class="rays"></div>
                <div class="rays"></div>
                <div class="rays"></div>
                <div class="rays"></div>
            </div>
            <div class="rims back-nd">
                <div class="center-rims"></div>
                <div class="rays"></div>
                <div class="rays"></div>
                <div class="rays"></div>
                <div class="rays"></div>
            </div>
        </div>
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


<template>
 <div class="bg" v-bind:style="{ 'background-image': 'linear-gradient(to bottom, rgb(51, 49, 69, 0.52), rgb(14, 13, 18, 0.73)), url(' + image + ')', 
 'height':'100vh' }">
  <div id="app">
    <VNavbar/>
    <router-view/>
  </div>
  </div>
</template>

<script>
import VNavbar from "./components/VNavbar.vue";

export default {
  name: 'app',
  data() {
      return {
          image : 'https://blog.eurail.com/wp-content/uploads/2016/12/Train-in-Swiss-Alps.jpg'
      }
    },
  components: {
    VNavbar
  }
}
</script>

<style scoped>
body {
  margin: 0;
  height: 100vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bg {
  background-size:100%;
  height: 100vh;
  background-attachment: fixed;
  background-position: absolute;
  margin:0;
  overflow-y: auto;
}
</style>

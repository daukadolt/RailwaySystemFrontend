<template>
 <div class="bg" v-bind:style="{ 'background-image': 'linear-gradient(to bottom, rgb(51, 49, 69, 0.52), rgb(14, 13, 18, 0.73)), url(' + image + ')', 
 'height':'100vh' }">
  <div id="app">
    <VNavbar/>
    <router-view v-on:toggleLoadingSpinner="toggleLoadingSpinner"/>
    <div v-if="showLoadingSpinner" class="loadingSpinner" id="popup"><LoadingSpinner/></div>
  </div>
  </div>
</template>

<script>
import VNavbar from "./components/VNavbar.vue";
import LoadingSpinner from "./components/Loading.vue";

export default {
  name: 'app',
  data() {
      return {
          image : 'https://blog.eurail.com/wp-content/uploads/2016/12/Train-in-Swiss-Alps.jpg',
          showLoadingSpinner: true
      }
    },
  components: {
    VNavbar,
    LoadingSpinner
  },
    methods: {
        toggleLoadingSpinner(showLoadingSpinner) {
            this.showLoadingSpinner = showLoadingSpinner;
        }
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
.loadingSpinner{
  position: fixed;
  padding: 10px;
  width: 280px;
  left: 50%;
  margin-left: -150px;
  height: 180px;
  top: 50%;
  margin-top: -100px;
  background: transparent;;
  z-index: 1100;
}
#popup:after {
  position: fixed;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,0.9);
  z-index: -2;
}

#popup:before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background:transparent;
  z-index: -1;
}
</style>

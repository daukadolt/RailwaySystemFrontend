<template>
 <div class="bg" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
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
          image : 'https://www.wallpaperflare.com/static/743/211/709/train-bridge-mountains-zaib-ali-wallpaper.jpg'
      }
    },
  components: {
    VNavbar
  }
}
</script>

<style scoped>
body {
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bg {
    height: 700px;
    width: px;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

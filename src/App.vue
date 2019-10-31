<template>
  <div id="app">
    <VSeatReserve/>
  </div>
</template>

<script>
import VSeatReserve from "./components/VSeatReserve.vue"

export default {
  name: 'app',
  components: {
    VSeatReserve
  }
}
</script>

<style>
body {
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

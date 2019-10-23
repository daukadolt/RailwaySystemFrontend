<template>
  <div id="app">
    <VIndex/>
  </div>
</template>

<script>
import VIndex from "./components/VIndex.vue"

export default {
  name: 'app',
  components: {
    VIndex
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

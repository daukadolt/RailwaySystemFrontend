<template>
  <div id="app">
    <LogInAndSignUp/>
  </div>
</template>

<script>
import LogInAndSignUp from "./components/LogInAndSignUp.vue"

export default {
  name: 'app',
  components: {
    LogInAndSignUp
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

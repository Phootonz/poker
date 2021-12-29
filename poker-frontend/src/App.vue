<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Poker"/> -->
  <Poker msg="Poker"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Poker from './components/Poker.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Poker
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

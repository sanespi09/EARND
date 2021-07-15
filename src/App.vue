<template>
  <Splash :user="fakeUser"/>
</template>

<script>
import Splash from './components/Splash.vue'

export default {
  name: 'App',
  components: {
    Splash
  },
  data: function() {
  return {
    fakeUser: {
      name: 'Vicio'
    }
  }},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

body{
    background-color: rgb(53, 46, 82);
}
</style>

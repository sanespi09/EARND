<template>
  <div class="container">
    <div  class="logo">
      <h1>EARND</h1>
    </div>
    <div class="welcome-mssg">
      <p>Your personal finance manager</p>
      <p>Welcome again {{user.name}}!</p> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'Splash',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
 margin: 0 0; 
}
.container{
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 500px;
}

.logo {
  font-size: 3rem;
  color: whitesmoke;
  margin-bottom: .5rem;
}

.welcome-mssg{
  font-size: 1rem;
  color: white;
}
</style>

<template>
   <transition name="fade">
  <div id='first'>
    <h1>Muze Parcel</h1>
      <img alt="muze cube" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f2c57ee4-11e2-4c50-9887-f00dc3a7e358/d73pi5f-c821d7ce-901e-4f02-8d4d-ebbf2a00d108.png">
<!--CONDITIONALLY RENDER EITHER THE LOGIN OR SIGN UP FORMS AND THEIR RESPECTIVE BUTTONS-->
  
    <div v-if="seen"> 
      <div class='toggle'>
        <span  v-bind:style='{"color": "#CBD5DB", "font-weight": "bold"}'>Log In </span><span> | </span><span v-on:click="seen = !seen"> Sign Up</span><br>
      </div>
      <input placeholder="email">
      <br>
      <input type = 'password' placeholder="password">
      <br> 
      <transition name="fade">
      <button type='submit'>Log In</button> 
      </transition>
    </div>     
    <div v-else>
      <div class='toggle'>
        <span v-on:click="seen = !seen">Log In </span><span> | </span><span v-bind:style='{"color": "#CBD5DB", "font-weight": "bold"}'> Sign Up</span><br>
      </div>
      <input placeholder="Select Username">
      <br>
      <input type = 'password' placeholder="Select a Password">
      <br>

      <button type='submit'>Sign up</button>
 
    </div>
     
  </div>
  </transition>  
</template>

<script>
export default {
  name: 'Login',
  data () { 
    return { seen: true } //PASS IN BOOLEAN FOR TOGGLE
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Reem+Kufi&display=swap');
body{
  margin: 0;
}
h1 {
  color: orange;
font-family: 'Reem Kufi', sans-serif;
}
#first{
  text-align: center;
}
.toggle {
  margin-top: 40px;
  margin-bottom: 20px;
}
input {
  margin: 10px 0;
  height: 40px;
  border-radius: 8px;
  border-style: none;

}
::placeholder {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #6C7D98;
}
button {
  margin: 20px;
  height: 55px;
  width: 100px;
  border-radius: 8px;
  border-style: none;
  color: orange;
  background-color: #0C2E39;
  font-size: 1.2em;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
#first {
  margin-top: 100px;
}
</style>
<template>
  <div class="account">
    <h1>MY ACCOUNT</h1><br>
    <h3>Email</h3>
    <input type="email">
    <h3>Payment</h3>
    <input type="number" maxlength="16">    
    <h3>Password</h3>
    <input type="password">

  </div>
</template>

<script>
export default {
  name: 'Account'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.account {
  margin-top: 50px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

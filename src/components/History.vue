<template>
  <div class="history">
    <div>
     <h1>HISTORY</h1>
     <span v-on:click="current = true">CURRENT </span><span> | </span><span v-on:click="current = false"> PAST</span>
    </div>

<div class="row">
<div v-if ="current" class="current card" v-for="faq of faqs" style="width: 18rem;">
  <div class="card-header">
      <h3>{{ faq.id }}</h3>
      <p>{{ faq.title}}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Receipt No. {{ faq.id }}</li>
    <li class="list-group-item">Price - </li>
    <li class="list-group-item">Description: {{ faq.body }}</li>
  </ul>
</div>
</div>

<div class="row align-items-start">
<div v-if ="!current" class="current card" v-for="product of products" style="width: 18rem;">
  <div class="card-header">
      <h3>{{ product.title}}</h3>
  </div>
  <img :src="product.img" alt="">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Receipt No. {{ product.prodId }}</li>
    <li class="list-group-item">Price - {{ product.price | toDollars }}</li>
  </ul>
</div>
</div>

  </div>
</template>

<script>
  import axios from 'axios';
  import { toDollars } from './../filters';

export default {
  name: 'History',
  filters: { toDollars },
  data: () => ({
    current: true,
    faqs: [],
    errors: []
  }),
    computed: {
    products() { return this.$store.getters.products; },
  },
  created() {//API REQUEST FOR DUMMY DATA
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(response =>{//first 10 obj.
      this.faqs = response.data.slice(0,10);
    })
    .catch(e => {
      this.errors.push(e);
    })
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.history {
  margin-top: 50px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.row div {
  margin:20px;
}
.row {
  justify-content: center;
}

.row div:hover {
  transform: scale(1.1, 1.1);
}
/*  @media only screen (min-width: 600px) {
}
*/
</style>
<template>
  <div class="col-md-3 col-lg-2">
    <div class="card">
      <img :src="img" :alt="title" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{ title }}</h4>
        <div class="card-text">{{ price | toDollars }}</div>
        <div class="row justify-content-end">
          <button class="btn btn-primary" @click="addToCart(prodId)">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { toDollars } from './../filters';
  
export default {
  name: 'Item',
  props: ['prodId', 'title', 'img', 'price'],//declare props as per $store
  filters: {
    toDollars,
  },
  methods: {
    addToCart(prodId) {
      this.$store.dispatch('addToCart', prodId);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
button {
  background-color: orange;
  border-color: orange;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
}
/*.card {
  margin: 40px auto;
  width: 80%;
}*/
</style>
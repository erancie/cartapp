<template>
  <div id="app">

<TopNav/>
    <div><br><br><br><br><br><br><br><br><br></div>

<Cart class="cart" />

<!-- ROUTER -->
<transition name="fade">
      <router-view/>
</transition>

  <!-- CAROUSEL TOGGLE -->
  <button id="togbtn" class='btn mt-5' v-on:click="show = !show">
    <span v-if="!show" v-bind:style='{"color": "#FF7F1F", "font-weight": "bold"}'>BARGAINS!</span> 
    <span v-if="show">Hide Bargains</span> 
  </button>

  <!-- CAROUSEL -->
  <transition name="fade">
    <carousel-3d v-if="show">
      <slide  v-for="(product, prodId) in products" :index="prodId">
        <figure>
          <img :src="product.img">
          <figcaption>
            <span>{{ product.title }} - </span><span> {{ product.price | toDollars }}</span>
            <div class="row justify-content-end"> <!--ADD addToCart ACTION METHOD passing in unique prodID -->
              <button class="btn btn-primary" @click="addToCart(prodId)">Add to cart</button>
            </div>
          </figcaption>
        </figure>
      </slide>
    </carousel-3d>
  </transition>

  </div>
</template>

<script>
  import TopNav from './components/TopNav';
  import Home from './components/Home';
  import Account from './components/Account';
  import History from './components/History';
  import Item from './components/Item';
  import Login from './components/Login';
  import Cart from './components/Cart';
  import { Carousel3d, Slide } from 'vue-carousel-3d';
  import { toDollars } from './filters';

export default {
  name: 'App',
    props: ['prodId', 'title', 'img', 'price'],
  components: { TopNav , Home, Account, History, Login, Cart, Carousel3d,
    Slide },
  computed: {
    products() { return this.$store.getters.products; },
  },
  methods: {
   addToCart(prodId) {
     this.$store.dispatch('addToCart', prodId);
   }
  },
  filters: { toDollars },
  data() {
    return {
      show: true
    }
  }
}
</script>

<style>
html, body, #app {
  height: calc(100% - 50px);
}
#app {
  font-family: "Nunito", 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #edf5fc;
}
.fade-enter-active, .fade-leave-active {
  transition-delay: 2.5s;
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
    transition-delay: 2.5s;
    opacity: 0;
}
.cart{
  position: fixed;
  right: 40px;
  bottom: 140px;
  z-index: 100000;

}
.carousel-3d-container figure {
  margin:0;
  background-color: #f0e7e6;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  font-weight: bold;
  min-width: 100%;
  box-sizing: border-box;
}
span {
  font-size: 1.2rem;
}
#togbtn{
  box-shadow: 0px 7px 15px 5px #FFBF61;
  color: grey;
}
</style>

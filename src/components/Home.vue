<template>
<div class="home">

    <div class="row mt-3">
      <Item
        v-for="product in products"
        :key="product.prodId"
        :prodId="product.prodId"
        :title="product.title"
        :img="product.img"
        :price="product.price" />
    </div>

</div>
</template>

<script>
    import Item from './Item';
    import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  name: 'Home',
  data() {
    return {
      slides: 7
    }
  },
  components: {
    Item,
    Carousel3d,
    Slide
  },
  computed: {
    products() { return this.$store.getters.products; }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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



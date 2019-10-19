
<template>
  <div>
    <button class="blue btn btn-primary" data-toggle="modal" data-target="#shoppingCart"><i class="fa fa-shopping-cart"></i> ({{ numInCart }})</button>

    <div id="shoppingCart" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">Parcel Builder</h2>
            <button class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <table class="table">
              <tbody>
                <tr v-for="(item, index) in cart">
                  <td>{{ item.title }}</td>
                  <td>{{ item.price | toDollars }}</td> <!--apply $ filter -->
                  <td>
                    <button class="btn btn-sm btn-danger" @click="removeFromCart(index)"> &times;</button>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <th>{{ total | toDollars }}</th>
                  <th></th>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary blue">Check out</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toDollars } from './../filters';

export default {
  name: 'Cart',
  computed: {//MAP EXISTING ITEMS IN CART
    inCart() { return this.$store.getters.inCart; },//return products in cart
    numInCart() { return this.inCart.length; },//return number for counter
    cart() { //compare for existence
      return this.$store.getters.inCart.map((cartItem) => {
        return this.$store.getters.products.find((forSaleItem) => {
          return cartItem === forSaleItem.prodId;
        });
      });
    },
    total() { //REDUCE TOTAL - accumulator + current price
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    },
  },
  filters: {
    toDollars,
  },
  methods: {//DISPATCH removeFromCart TO $STORE
    removeFromCart(index) { this.$store.dispatch('removeFromCart', index); },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Reem+Kufi&display=swap');
  .blue {
    font-size: 2rem;
    background-color: rgb(27,42,55);
  }
  .fa {
    font-size: 4rem;
  }
  h2 {
      font-family: 'Reem Kufi', sans-serif;
  }
  .sm {
    border-radius: 35px;
  }
</style>

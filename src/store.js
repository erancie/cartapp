import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { prodId: 1, title: 'Jumper', img: 'https://blog.befunky.com/wp-content/uploads/2017/09/Background-Tool-9.png', price: 999 },
      { prodId: 2, title: 'Make-Up', img: 'https://www.stickpng.com/assets/thumbs/58a1ed60c8dd3432c6fa81d5.png', price: 1499 },
      { prodId: 3, title: 'Indoor Swing', img: 'https://atlas-content-cdn.pixelsquid.com/stock-images/hanging-chair-Pxl2AzF-600.jpg', price: 499 },
      { prodId: 4, title: 'Camera', img: 'https://icdn6.digitaltrends.com/image/digitaltrends/transparentbackground-1535x1024.jpg', price: 299 },
      { prodId: 5, title: 'Cool Runnings', img: 'https://i-love-png.com/images/shoes-png-running-shoes-png-image-1200.png', price: 299 },
      { prodId: 7, title: 'More Make-Up', img: 'https://www.stickpng.com/assets/thumbs/58a1ed58c8dd3432c6fa81d4.png', price: 2295 },
      { prodId: 6, title: 'Mascara', img: 'https://www.milkmakeup.com/dw/image/v2/BBWR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8f2d27a5/images/large/Kush-Mascara-opened-back-800x1100.png?sw=296&sh=407&sm=fit', price: 1495 },
      { prodId: 8, title: 'Nice Watch!', img: 'https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0158-inline-img-01.jpg?v=1553883913', price: 24999 },
    ],
    inCart: [],
    
  },
  //GETTERS FOR EACH ARRAY IN STATE
  getters: {
    products: state => state.products,
    inCart: state => state.inCart,
  },
  mutations: {
    ADD_TO_CART(state, prodId) { state.inCart.push(prodId); },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); },
  },
  actions: {
    addToCart(context, prodId) { context.commit('ADD_TO_CART', prodId); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
  },
});

// products: [
//   {
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952",
//     "price": "$8.95"
//   },
//   {
//     "albumId": 1,
//     "id": 2,
//     "title": "reprehenderit est deserunt velit ipsam",
//     "url": "https://via.placeholder.com/600/771796",
//     "thumbnailUrl": "https://via.placeholder.com/150/771796",
//     "price": "$24.95"
//   },
//   {
//     "albumId": 1,
//     "id": 3,
//     "title": "officia porro iure quia iusto qui ipsa ut modi",
//     "url": "https://via.placeholder.com/600/24f355",
//     "thumbnailUrl": "https://via.placeholder.com/150/24f355",
//     "price": "$44.50"
//   },
//   {
//     "albumId": 1,
//     "id": 4,
//     "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//     "url": "https://via.placeholder.com/600/d32776",
//     "thumbnailUrl": "https://via.placeholder.com/150/d32776",
//     "price": "$9.95"
//   },
//   {
//     "albumId": 1,
//     "id": 5,
//     "title": "natus nisi omnis corporis facere molestiae rerum in",
//     "url": "https://via.placeholder.com/600/f66b97",
//     "thumbnailUrl": "https://via.placeholder.com/150/f66b97",
//     "price": "4.95"
//   },
//   {
//     "albumId": 1,
//     "id": 6,
//     "title": "accusamus ea aliquid et amet sequi nemo",
//     "url": "https://via.placeholder.com/600/56a8c2",
//     "thumbnailUrl": "https://via.placeholder.com/150/56a8c2",
//     "price": "$21.80"
//   },
//   {
//     "albumId": 1,
//     "id": 7,
//     "title": "officia delectus consequatur vero aut veniam explicabo molestias",
//     "url": "https://via.placeholder.com/600/b0f7cc",
//     "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc",
//     "price": "$88.00"
//   },
//   {
//     "albumId": 1,
//     "id": 8,
//     "title": "aut porro officiis laborum odit ea laudantium corporis",
//     "url": "https://via.placeholder.com/600/54176f",
//     "thumbnailUrl": "https://via.placeholder.com/150/54176f",
//     "price": "$24.95"
//   },
//   {
//     "albumId": 1,
//     "id": 9,
//     "title": "qui eius qui autem sed",
//     "url": "https://via.placeholder.com/600/51aa97",
//     "thumbnailUrl": "https://via.placeholder.com/150/51aa97",
//     "price": "$55.00"
//   },
//   {
//     "albumId": 1,
//     "id": 10,
//     "title": "beatae et provident et ut vel",
//     "url": "https://via.placeholder.com/600/810b14",
//     "thumbnailUrl": "https://via.placeholder.com/150/810b14",
//     "price": "$18.10"
//   }
//   ]
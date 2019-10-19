import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Account from '@/components/Account'
import History from '@/components/History'
import Item from '@/components/Item'
import TopNav from '@/components/TopNav'
import Login from '@/components/Login'
import App from './../App'

Vue.use(Router)

//VUE ROUTER USED TO INCORPORATE RESTful ROUTING /
export default new Router({
  routes: [
    {
      path: '/', //homepage is also INDEX - easier user access
      name: 'Home',
      component: Home
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/topnav',
      name: 'TopNav',
      component: TopNav
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {             ///ORDER OF DECLARATION MATTERS*** params last
      path: '/:item',
      name: 'Item',
      component: Item
    }
  ]
})

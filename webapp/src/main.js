import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Contact from './Contact'
import Outstanding from './Outstanding'
import Restaurants from './RestaurantList'
import Restaurant from './Restaurant'
import EditRestaurant from './EditRestaurant'
import NewRestaurant from './AddRestaurant'
Vue.use(VueRouter); //Load the library
//Routes are defined as array of jsons {path, component}
const routes = [
  {path: '/home', component: Home},
  {path: '/contact', component: Contact},
  {path: '/add-restaurant', component: NewRestaurant},
  {path: '/restaurant/:id', name:'restaurant',component: Restaurant},
  {path: '/edit-restaurant/:id', name:'edit-restaurant', component: EditRestaurant},
  {path: '/destacado/:id', name:'destacado', component: Outstanding},
  {path: '/restaurants', component: Restaurants},
  {path: '/', component: Home}
];
// Define the router
const router = new VueRouter({
    routes,
    mode: 'history'
})

Vue.component('home', Home); // Home Component (Home.vue)
Vue.component('contact', Contact);

new Vue({
  el: '#app',
  router, //Load the router on the instance
  render: h => h(App)
})

import Vue from 'vue';
import VueRouter from 'vue-router';
import _ from 'lodash';
import * as svgicon from 'vue-svgicon';
import './assets/custom.scss';
import App from './App.vue';
import store from './store';
import ToDoList from './pages/todolist.vue';
import SearchFilter from './pages/filter.vue';
import AdminOrder from './pages/adminOrder.vue';
import allLists from './pages/todolist/allLists.vue';
import InProgressLists from './pages/todolist/inProgressLists.vue';
import CompletedLists from './pages/todolist/completedLists.vue';
import AdminOrderIndex from './pages/adminOrder/index.vue';
import AdminOrderOrders from './pages/adminOrder/orders.vue';
import AdminOrderProduct from './pages/adminOrder/product.vue';
import ProductGallery from './pages/productGallery.vue';

Vue.use(VueRouter);
Vue.use(svgicon);
window._ = _;

const routes = [
  {
    path: '/ToDoList',
    component: ToDoList,
    children: [
      { path: '', component: allLists },
      { path: 'in-progress', component: InProgressLists },
      { path: 'completed', component: CompletedLists }
    ]
  },
  { path: '/SearchFilter', component: SearchFilter },
  {
    path: '/AdminOrder',
    component: AdminOrder,
    children: [
      { path: '', component: AdminOrderIndex },
      { path: 'orders', component: AdminOrderOrders },
      { path: 'product', component: AdminOrderProduct }
    ]
  },
  { path: '/ProductGallery', component: ProductGallery }
];

const router = new VueRouter({
  routes
});


const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

Vue.use({
  vm
});

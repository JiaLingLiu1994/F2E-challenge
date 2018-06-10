import Vue from 'vue';
import VueRouter from 'vue-router';
import _ from 'lodash';
import * as svgicon from 'vue-svgicon';
import 'bootstrap';
import './assets/custom.scss';
import App from './App.vue';
import allLists from './pages/todolist/allLists.vue';
import InProgressLists from './pages/todolist/inProgressLists.vue';
import CompletedLists from './pages/todolist/completedLists.vue';

Vue.use(VueRouter);
Vue.use(svgicon);
window._ = _;

const routes = [
  { path: '/', component: allLists },
  { path: '/in-progress', component: InProgressLists },
  { path: '/completed', component: CompletedLists }
];

const router = new VueRouter({
  mode: 'history',
  routes
});


const vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

Vue.use({
  vm
});

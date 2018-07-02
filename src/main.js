import Vue from 'vue';
import _ from 'lodash';
import * as svgicon from 'vue-svgicon';
import './assets/custom.scss';
import App from './App.vue';
import router from './router';
import store from './store';


Vue.use(svgicon);
window._ = _;

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

Vue.use({
  vm
});

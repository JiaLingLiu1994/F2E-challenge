import Vue from 'vue';
import * as svgicon from 'vue-svgicon';
import 'bootstrap';
import App from './App.vue';

Vue.use(svgicon);

const vm = new Vue({
  el: '#app',
  render: h => h(App)
});

Vue.use({
  vm
});

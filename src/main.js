import Vue from 'vue';
import _ from 'lodash';
import * as svgicon from 'vue-svgicon';
import 'bootstrap';
import './assets/custom.scss';
import App from './App.vue';


Vue.use(svgicon);
window._ = _;

const vm = new Vue({
  el: '#app',
  render: h => h(App)
});

Vue.use({
  vm
});

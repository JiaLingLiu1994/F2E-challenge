import Vue from 'vue';
import Vuex from 'vuex';
import Attractions from './modules/attractions';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Attractions
  }
});

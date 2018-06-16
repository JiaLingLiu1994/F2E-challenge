import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';


Vue.use(Vuex);

const state = {
  attractions: {},
  filters: {
    location: ''
  }
};

const getters = {
  filterAttractions(state) {
    // if (!state.attractions) return;
    return (state.filters.location) ? state.attractions.filter(attr =>
      attr.Zone === state.filters.location) : state.attractions;
  }
};


const actions = {
  getAttractions(context) {
    context.commit('GET_ATTRACTIONS');
    const api =
      'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97';
    Axios
      .get(api)
      .then((response) => {
        context.commit('GET_ATTRACTIONS', response.data.result.records);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  setFilters(context, content) {
    context.commit('SET_FILTERS', content);
  }
  // checkout ({ commit, state }, products) {
  //   const savedCartItems = [...state.items]
  //   commit('setCheckoutStatus', null)
  //   // empty cart
  //   commit('setCartItems', { items: [] })
  //   shop.buyProducts(
  //     products,
  //     () => commit('setCheckoutStatus', 'successful'),
  //     () => {
  //       commit('setCheckoutStatus', 'failed')
  //       // rollback to the cart saved before sending the request
  //       commit('setCartItems', { items: savedCartItems })
  //     }
  //   )
  // }
};

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const mutations = {
  GET_ATTRACTIONS(state, results) {
    /* eslint no-param-reassign: ["error", { "props": true,
    "ignorePropertyModificationsFor": ["state"] }] */
    state.attractions = results;
  },
  SET_FILTERS(state, content) {
    console.log("innn");
    state.filters[content.name] = content.value;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

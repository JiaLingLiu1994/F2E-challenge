import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';


Vue.use(Vuex);

const state = {
  attractions: {},
  filters: {
    location: '',
    keyword: '',
    checkboxs: []
  }
};

const getters = {
  filterAttractions(state) {
    // const checkboxType = [
    //   { type: 'Ticketinfo', name: '免付費景點' },
    //   { type: 'Opentime', name: '全天候開放' }
    // ];
    const temp = (state.filters.location) ? state.attractions.filter(attr =>
      attr.Zone === state.filters.location) : state.attractions;

    // TODO const tags = ['Name', 'Description', 'Add', 'Opentime'];
    const tempX = (state.filters.keyword) ? temp.filter(attr =>
      attr.Name.indexOf(state.filters.keyword) !== -1 ||
      attr.Description.indexOf(state.filters.keyword) !== -1 ||
      attr.Add.indexOf(state.filters.keyword) !== -1 ||
      attr.Ticketinfo.indexOf(state.filters.keyword) !== -1 ||
      attr.Opentime.indexOf(state.filters.keyword) !== -1) : temp;

    /* global _ */
    // TODO be fexible
    const tempY = (state.filters.checkboxs.indexOf('免付費景點') !== -1) ? _.filter(tempX, attr =>
      attr.Ticketinfo === '免費參觀') : tempX;

    return (state.filters.checkboxs.indexOf('全天候開放') !== -1) ? _.filter(tempY, attr =>
      attr.Opentime === '全天候開放') : tempY;
    // return (state.filters.checkboxs) ? temp2.filter(() => {
    //   let objName = [];
    //   _.forEach(state.filters.checkboxs, (i) => {
    //     _.concat(objName, _.find(checkboxType, { name: i }));
    //     console.log(objName);
    //   });
    //   let results = temp2;
    //   _.forEach(objName, (i, index) => {
    //     results = _.filter(results, attr => attr[i] === checkboxType[index]);
    //   });
    //   return results;
    // }) : temp2;
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
};

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const mutations = {
  GET_ATTRACTIONS(state, results) {
    /* eslint no-param-reassign: ["error", { "props": true,
    "ignorePropertyModificationsFor": ["state"] }] */
    state.attractions = results;
  },
  SET_FILTERS(state, content) {
    state.filters[content.name] = content.value;
  },
  UPDATE_KEYWORD(state, value) {
    state.filters.keyword = value;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

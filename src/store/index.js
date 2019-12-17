import Vue from 'vue';
import Vuex from 'vuex';
import conversion from './modules/conversion';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    conversion,
  },
});

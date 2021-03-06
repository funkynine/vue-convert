export default {
  state: {
    value: [],
    valueNames: [],
  },
  mutations: {
    createNewList(state, value) {
      state.value = value;
    },
  },
  actions: {
    // Get value
    async getValue({ commit }) {
      const res = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
      const result = await res.json();
      commit('createNewList', result);
    },
  },
  getters: {
    ListValue(state) {
      return state.value;
    },
    ListValueNames(state) {
      state.value.forEach(element => state.valueNames.push(element.ccy));
      return state.valueNames;
    },
  },
};

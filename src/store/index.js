import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paused: true,
    scrollSpeed: 3,
    backgroundColor: "#000000",
    fontColor: "#ffffff",
    fontSize: 96,
    fontBold: true,
    textareaValue: ``,
  },
  mutations: {
    setValue(state, { name, value }) {
      state[name] = value;
    },
  },
});
